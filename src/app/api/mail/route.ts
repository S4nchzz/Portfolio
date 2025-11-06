import { NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const formData = await request.formData()
  const files = formData.getAll('files') as File[]
  const attachments = await Promise.all(
    files.map(async(file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type
    }))
  )

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
      subject: formData.get('subject') as string,
      text: formData.get('text') as string,
      attachments
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false })
  }
}