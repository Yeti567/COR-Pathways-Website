import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { fullName, companyName, email, phone, province, service, employees, message } = body

    if (!fullName || !companyName || !email || !phone || !province || !service) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'COR Pathways Contact Form <onboarding@resend.dev>',
      to: ['blake.safetyconsultant@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #0D1F3C; font-size: 24px; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 40%;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${companyName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;"><a href="mailto:${email}" style="color: #059669;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;"><a href="tel:${phone}" style="color: #059669;">${phone}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Province</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${province}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Service Needed</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${service}</td></tr>
            ${employees ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Employees</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${employees}</td></tr>` : ''}
            ${message ? `<tr><td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #111827;">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #d1fae5; border-radius: 8px; border-left: 4px solid #059669;">
            <p style="color: #065f46; margin: 0; font-size: 14px;">Reply directly to this email to respond to ${fullName} at ${email}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
