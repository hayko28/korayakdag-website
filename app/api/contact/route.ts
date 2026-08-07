import { initializeDatabase, sql } from "@/lib/database";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Eksik bilgi" },
        { status: 400 }
      );
    }

    // Veritabanına kaydet
    await initializeDatabase();

    await sql`
      INSERT INTO contact_messages 
      (name, email, subject, message) 
      VALUES 
      (${name}, ${email}, ${subject}, ${message})
    `;

    // E-posta gönder
    const siteOrigin = new URL(request.url).origin;

    const mailResponse = await fetch(
      "https://formsubmit.co/ajax/koray.akdag@sistemglobal.com.tr",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: `${siteOrigin}/`,
          Origin: siteOrigin,
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: "Koray Akdağ web sitesi iletişim formu",
          _template: "table",
        }),
      }
    );

    const mailResponseText = await mailResponse.text();
    let mailResult: { success?: boolean | string; message?: string } | null = null;
    try {
      mailResult = JSON.parse(mailResponseText);
    } catch {
      mailResult = null;
    }

    console.log("FormSubmit yanıtı:", mailResponse.status, mailResponseText);

    const mailSucceeded =
      mailResponse.ok &&
      mailResult !== null &&
      mailResult.success !== false &&
      mailResult.success !== "false";

    if (!mailSucceeded) {
      console.error("FormSubmit hatası:", mailResponse.status, mailResponseText);

      return Response.json(
        {
          error: "Mesaj veritabanına kaydedildi ancak e-posta gönderilemedi.",
        },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("İletişim formu hatası:", error);

    return Response.json(
      { error: "Mesaj gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}