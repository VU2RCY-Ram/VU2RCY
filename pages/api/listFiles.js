// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// pages/api/listFiles.js

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

    // Send the list of files as a response
    res.status(200).json({ files: fileNames });
  });
}
