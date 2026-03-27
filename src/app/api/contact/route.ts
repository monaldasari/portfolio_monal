import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 })
    }

    const toEmail = process.env.CONTACT_EMAIL || 'monaldasari2007@gmail.com'

    // Fallback: return success if no SMTP config, to avoid blocking local development.
    const smtpHost = process.env.SMTP_HOST
    if (!smtpHost) {
      console.warn('No SMTP config found; email not sent. Add SMTP_HOST to .env.local for real emails.')
      return new Response(JSON.stringify({
        success: false,
        message: 'Contact form captured but SMTP is not configured. Add SMTP_HOST/SMTP_USER/SMTP_PASS to .env.local.'
      }), { status: 200 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: toEmail,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Contact API error', error)
    return new Response(JSON.stringify({ error: 'Unable to send message.' }), { status: 500 })
  }
}
