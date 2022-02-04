import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'GET',
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  const { count } = await response.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({ count });
}
