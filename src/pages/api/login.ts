import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

interface LoginResponse {
  token: string | null;
  trazaId: string | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse | { message: string }>
) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}${process.env.AUTH_URL}`,
        {
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const token = response.headers.token || null;
      const trazaId = response.headers.id || null;

      res.status(200).json({ token, trazaId });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(error.response?.status || 500).json({ message: 'Login failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
