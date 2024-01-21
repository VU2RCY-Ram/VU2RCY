import fetch from 'node-fetch'; // Import the 'fetch' function

export default async function handler(req, res) {
  try {
    // GitHub repository and directory information
    const owner = 'VU2RCY-Ram';
    const repo = 'Awards';
    const path = 'EPC';

    // GitHub API endpoint
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Fetch data from the GitHub API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      // Handle the case where the GitHub API request failed
      const errorData = await response.json();
      throw new Error(`GitHub API request failed with status ${response.status}: ${errorData.message}`);
    }

    // Parse the JSON response from GitHub
    const filesData = await response.json();

    // Extract file names from the API response
    // const fileNames = filesData.map(file => file.name);

    // Pagination parameters
    const page = parseInt(req.query.page) || 1; // Current page, default to 1
    const pageSize = parseInt(req.query.pageSize) || 10; // Number of items per page, default to 10

    // Calculate the starting and ending indices for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Slice the array based on pagination parameters
    const filesForPage = filesData.slice(startIndex, endIndex);

    // Send the list of files for the specified page as a response
    res.status(200).json({
      files: filesForPage,
      pageInfo: {
        page: page,
        pageSize: pageSize,
        totalItems: filesData.length,
        totalPages: Math.ceil(filesData.length / pageSize),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data from GitHub API' });
  }
}
