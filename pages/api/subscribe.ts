import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const result = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, tags: ['saurish'] })
  });

  if (result.status >= 400) {
    const text = await result.text();

    if (text.includes('already subscribed')) {
      return res
        .status(400)
        .json({ error: `It seems you're already subscribed!` });
    }

    return res.status(400).json({
      error: text
    });
  }
  return res.status(201).json({ error: '' });
}
