import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendContactEmail(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  if (!process.env.SMTP_HOST) {
    console.log('Email not configured, skipping send')
    return
  }

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `Contact Form: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  })
}
