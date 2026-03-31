import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function buildEmailHtml(subject: string, messageRaw: string, replyTo: string): string {
  const lines = messageRaw.split('\n').map(l => l.trim()).filter(Boolean);
  const isStructured = lines.every(l => l.startsWith('-'));

  let bodyContent = '';

  if (isStructured) {
    const rows = lines.map(line => {
      const withoutDash = line.replace(/^-\s*/, '');
      const colonIdx = withoutDash.indexOf(':');
      if (colonIdx === -1) return `<tr><td colspan="2" style="padding:10px 16px;color:#333;">${withoutDash}</td></tr>`;
      const key = withoutDash.slice(0, colonIdx).trim();
      const value = withoutDash.slice(colonIdx + 1).trim() || '<em style="color:#999;">Non renseigné</em>';
      return `
        <tr>
          <td style="padding:10px 16px;font-weight:bold;color:#1A1A1A;white-space:nowrap;vertical-align:top;width:140px;">${key}</td>
          <td style="padding:10px 16px;color:#333;border-left:3px solid #E3074F;">${value}</td>
        </tr>`;
    }).join('');

    bodyContent = `
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:8px;">
        ${rows}
      </table>`;
  } else {
    bodyContent = `<p style="padding:12px 16px;color:#333;line-height:1.7;white-space:pre-line;">${messageRaw}</p>`;
  }

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Roboto',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-top:5px solid #E3074F;">
          <tr>
            <td style="background-color:#E3074F;padding:28px 32px;text-align:center;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">
                ARMORIK DIAGNOSTICS
              </p>
              <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.85);">
                Diagnostiqueur immobilier certifié – Trégor
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#1A1A1A;padding:14px 32px;">
              <p style="margin:0;font-size:14px;color:#ffffff;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">
                Nouveau message : ${subject}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px 24px;">
              <p style="margin:0 0 16px;font-size:14px;color:#666;">
                Vous avez reçu un nouveau message depuis le site <strong>armorik-diagnostics.fr</strong>.
                Voici les informations transmises :
              </p>
              <div style="background-color:#f9f9f9;border-left:4px solid #E3074F;">
                ${bodyContent}
              </div>
              <p style="margin:20px 0 0;font-size:13px;color:#999;">
                Pour répondre directement à cet expéditeur, utilisez l'adresse : 
                <a href="mailto:${replyTo}" style="color:#E3074F;font-weight:bold;">${replyTo}</a>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px;">
              <hr style="border:none;border-top:1px solid #EDEDED;margin:0;" />
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px;background-color:#f9f9f9;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#1A1A1A;font-weight:bold;">ARMORIK DIAGNOSTICS</p>
              <p style="margin:0 0 4px;font-size:12px;color:#666;">4 Route de Tréguier, 22700 Louannec</p>
              <p style="margin:0 0 4px;font-size:12px;color:#666;">
                <a href="tel:0296132779" style="color:#E3074F;text-decoration:none;">02 96 13 27 79</a>
                &nbsp;|&nbsp;
                <a href="mailto:contact@armorik-diagnostics.fr" style="color:#E3074F;text-decoration:none;">contact@armorik-diagnostics.fr</a>
              </p>
              <p style="margin:12px 0 0;font-size:11px;color:#aaa;">
                Cet email a été généré automatiquement depuis <a href="https://armorik-diagnostics.fr" style="color:#aaa;">armorik-diagnostics.fr</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from, subject, message } = body;

    if (!from || !message) {
      return NextResponse.json({ success: false, error: "Email et message requis" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP_HOST,
      port: Number(process.env.MAIL_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.MAIL_SMTP_USER,
        pass: process.env.MAIL_SMTP_PASS,
      },
    });

    const resolvedSubject = subject || 'Demande';

    const mailOptions = {
      from: process.env.MAIL_SMTP_USER,
      to: process.env.API_MAIL_DEST || process.env.MAIL_SMTP_USER,
      replyTo: from,
      subject: `[Contact Armorik] ${resolvedSubject}`,
      text: message,
      html: buildEmailHtml(resolvedSubject, message, from),
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("ERREUR SMTP :", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
