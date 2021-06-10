import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  try {
    await sendgrid.send({
      to: 'me@saurish.com',
      from: 'me@saurish.com',
      subject: `[Website] New Message from ${body.name}`,
      text: message,
      html: message.replace(/\r\n/g, '<br>')
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: 'No Error!' });
}
