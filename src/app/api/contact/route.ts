import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format.' }), { status: 400 })
    }

    const toEmail = 'monaldasari2007@gmail.com'

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Email not sent.')
      return new Response(JSON.stringify({
        success: false,
        message: 'Contact form received but email service is not configured. Please add RESEND_API_KEY to environment variables.'
      }), { status: 200 })
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1c2208; border-bottom: 2px solid #7a8c4a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="padding: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Contact API error:', error)
    return new Response(JSON.stringify({ error: 'Unable to send message.' }), { status: 500 })
  }
}
