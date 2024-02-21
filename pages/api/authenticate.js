// pages/api/authenticate.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Send authentication request to FTK Connect
      const response = await axios.post('https://localhost:4443/api/v2/enterpriseapi/core/user', {
        username,
        password,
      }, {
        headers: {
          'EnterpriseAPIKey': '52942efe-61e6-45dd-bdaa-5b1b120da0b5'
        }
      });

      // If authentication is successful, return a JWT token
      const token = response.data.token; // Assuming FTK Connect returns a token
      res.status(200).json({ token });
    } catch (error) {
      // If authentication fails, return an error response
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
