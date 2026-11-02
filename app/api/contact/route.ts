import { initializeDatabase, sql } from "@/lib/database";

const NOTIFY_EMAIL = "koray_akdag@hotmail.com";

// E-posta bildirimi Resend ile gonderilir. Ucretsiz planda (alan adi dogrulanmadan)
// Resend yalnizca hesabin kayitli oldugu adrese gonderebilir; bu yuzden Resend
// hesabi NOTIFY_EMAIL ile acilmis olmalidir.
async function sendNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: AbortSignal.timeout(15000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "korayakdag.com <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: data.email,
        subject: `Web sitesi iletişim formu: ${data.subject}`,
        html: `<p><b>Ad Soyad:</b> ${esc(data.name)}</p><p><b>E-posta:</b> ${esc(data.email)}</p><p><b>Konu:</b> ${esc(data.subject)}</p><p><b>Mesaj:</b></p><p>${esc(data.message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
    if (!res.ok) console.error("Resend hatası:", res.status, await res.text());
    return res.ok;
  } catch (error) {
    console.error("E-posta bildirimi gönderilemedi:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Eksik bilgi" },
        { status: 400 }
      );
    }

    // Veritabani kaydi ve e-posta birbirinden bagimsiz denenir;
    // biri basarisiz olsa da diger yoldan mesaj kaybolmaz.
    const dbPromise = (async () => {
      await initializeDatabase();
      await sql`
        INSERT INTO contact_messages
        (name, email, subject, message)
        VALUES
        (${name}, ${email}, ${subject}, ${message})
      `;
      return true;
    })().catch((error) => {
      console.error("İletişim formu veritabanı hatası:", error);
      return false;
    });

    const [dbOk, mailOk] = await Promise.all([
      dbPromise,
      sendNotification({ name, email, subject, message }),
    ]);

    if (!dbOk && !mailOk) {
      return Response.json(
        { error: "Mesaj kaydedilemedi." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("İletişim formu hatası:", error);

    return Response.json(
      { error: "Mesaj gönderilemedi." },
      { status: 500 }
    );
  }
}
