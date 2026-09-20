import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const escapeHtml = (value: unknown) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

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

    // Get configuration from environment variables
    const toEmail = process.env.CONTACT_TO_EMAIL || 'enquiry@changemanagement.my'
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'noreply@proscimalaysia.com'
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          code: 'RESEND_API_KEY_NOT_CONFIGURED',
          error: 'Contact email delivery is not configured.',
          toEmail,
        },
        { status: 503 },
      )
    }

    const resend = new Resend(apiKey)

    const subject = `Website Contact: ${reasonForContact || 'General Inquiry'} - ${firstName || ''} ${lastName || ''}`
    
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #3d1a4e;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Job Title:</strong> ${escapeHtml(jobTitle)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Job Level:</strong> ${escapeHtml(jobLevel)}</p>
        <p><strong>Industry:</strong> ${escapeHtml(industry)}</p>
        <p><strong>Country:</strong> ${escapeHtml(country)}</p>
        <p><strong>Reason for Contact:</strong> ${escapeHtml(reasonForContact)}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p><strong>Comments:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${escapeHtml(comments)}</p>
      </div>
    `

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      replyTo: email || undefined,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || 'UNKNOWN' }, { status: 500 })
  }
}
