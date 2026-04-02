import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { nome, cognome, email, telefono, tipologia, indirizzo, messaggio, formType } = body

  if (!nome || !email || !messaggio) {
    throw createError({ statusCode: 400, statusMessage: 'Campi obbligatori mancanti' })
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  const subject = formType === 'hero'
    ? `Richiesta valutazione gratuita da ${nome} ${cognome}`
    : `Nuova richiesta di contatto da ${nome} ${cognome}`

  const html = `
    <h2>${subject}</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Nome</strong></td><td style="padding:8px;border:1px solid #ddd">${nome} ${cognome ?? ''}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Telefono</strong></td><td style="padding:8px;border:1px solid #ddd">${telefono ?? '—'}</td></tr>
      ${tipologia ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>Tipologia</strong></td><td style="padding:8px;border:1px solid #ddd">${tipologia}</td></tr>` : ''}
      ${indirizzo ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>Indirizzo</strong></td><td style="padding:8px;border:1px solid #ddd">${indirizzo}</td></tr>` : ''}
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Messaggio</strong></td><td style="padding:8px;border:1px solid #ddd">${messaggio}</td></tr>
    </table>
  `

  await transporter.sendMail({
    from: config.smtpFrom,
    to: config.smtpTo,
    replyTo: email,
    subject,
    html,
  })

  const confirmationHtml = `
    <h2>Grazie per averci contattato, ${nome}!</h2>
    <p>Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile.</p>
    <p>Di seguito il riepilogo del tuo messaggio:</p>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Nome</strong></td><td style="padding:8px;border:1px solid #ddd">${nome} ${cognome ?? ''}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Telefono</strong></td><td style="padding:8px;border:1px solid #ddd">${telefono ?? '—'}</td></tr>
      ${tipologia ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>Tipologia</strong></td><td style="padding:8px;border:1px solid #ddd">${tipologia}</td></tr>` : ''}
      ${indirizzo ? `<tr><td style="padding:8px;border:1px solid #ddd"><strong>Indirizzo</strong></td><td style="padding:8px;border:1px solid #ddd">${indirizzo}</td></tr>` : ''}
      <tr><td style="padding:8px;border:1px solid #ddd"><strong>Messaggio</strong></td><td style="padding:8px;border:1px solid #ddd">${messaggio}</td></tr>
    </table>
  `

  await transporter.sendMail({
    from: config.smtpFrom,
    to: email,
    subject: 'Abbiamo ricevuto la tua richiesta',
    html: confirmationHtml,
  })

  return { success: true }
})
