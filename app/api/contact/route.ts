import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      firstName,
      lastName,
      email,
      jobTitle,
      organization,
      phone,
      jobLevel,
      industry,
      country,
      reasonForContact,
      comments,
    } = data

    // Require SMTP configuration via environment variables
    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const fromAddress = process.env.EMAIL_FROM || user || 'no-reply@kpintar.com'

    if (!host || !port || !user || !pass) {
      return NextResponse.json({ ok: false, error: 'SMTP_NOT_CONFIGURED' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    })

    const subject = `Website Contact: ${reasonForContact || 'General Inquiry'} - ${firstName || ''} ${lastName || ''}`
    const text = `Name: ${firstName || ''} ${lastName || ''}\nEmail: ${email || ''}\nJob Title: ${jobTitle || ''}\nOrganization: ${organization || ''}\nPhone: ${phone || ''}\nJob Level: ${jobLevel || ''}\nIndustry: ${industry || ''}\nCountry: ${country || ''}\nReason: ${reasonForContact || ''}\n\nComments:\n${comments || ''}`

    const html = `<p><strong>Name:</strong> ${firstName || ''} ${lastName || ''}</p>
      <p><strong>Email:</strong> ${email || ''}</p>
      <p><strong>Job Title:</strong> ${jobTitle || ''}</p>
      <p><strong>Organization:</strong> ${organization || ''}</p>
      <p><strong>Phone:</strong> ${phone || ''}</p>
      <p><strong>Job Level:</strong> ${jobLevel || ''}</p>
      <p><strong>Industry:</strong> ${industry || ''}</p>
      <p><strong>Country:</strong> ${country || ''}</p>
      <p><strong>Reason:</strong> ${reasonForContact || ''}</p>
      <p><strong>Comments:</strong><br/>${(comments || '').replace(/\n/g, '<br/>')}</p>`

    await transporter.sendMail({
      from: fromAddress,
      to: 'enquiry@kpintar.com',
      subject,
      text,
      html,
      replyTo: email || undefined,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || 'UNKNOWN' }, { status: 500 })
  }
}
