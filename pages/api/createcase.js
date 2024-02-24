// pages/api/createCase.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Make API call to create a case
      const response = await axios.post('/api/v2/enterpriseapi/core/createcase', {
        // Provide case data in the request body
        name: req.body.name,
        description: req.body.description,
        // Add other case attributes as needed
      });

      // If case creation is successful, return success response
      res.status(201).json(response.data);
    } catch (error) {
      // If case creation fails, return error response
      res.status(500).json({ message: 'Failed to create case' });
    }
  } else {
    // If method is not POST, return Method Not Allowed error
    res.status(405).end();
  }
}
