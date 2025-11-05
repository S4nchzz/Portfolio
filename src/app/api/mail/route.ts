import { NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { subject, body } = await request.json()

  const transport = nodemailer.createTransport({
    host: 'smtp.ionos.es',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  try {
    await transport.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject,
      text: body,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false })
  }
}