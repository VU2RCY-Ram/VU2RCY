import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Define the path to the public folder
  const publicPath = path.join(process.cwd(), 'public/awards/EPC');

  // Read the contents of the public folder
  fs.readdir(publicPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading public folder' });
    }

    // Filter out directories (if needed)
    const fileNames = files.filter((file) => !fs.statSync(path.join(publicPath, file)).isDirectory());

    // Pagination parameters
    const page = parseInt(req.query.page) || 1; // Current page, default to 1
    const pageSize = parseInt(req.query.pageSize) || 10; // Number of items per page, default to 10

    // Calculate the starting and ending indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the array based on pagination parameters
    const filesForPage = fileNames.slice(startIndex, endIndex);

    // Send the list of files for the specified page as a response
    res.status(200).json({
      files: filesForPage,
      pageInfo: {
        page: page,
        pageSize: pageSize,
        totalItems: fileNames.length,
        totalPages: Math.ceil(fileNames.length / pageSize),
      },
    });
  });
}
