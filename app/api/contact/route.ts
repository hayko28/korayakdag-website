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
    const mailResponse = await fetch(
      "https://formsubmit.co/ajax/beysultan34@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();

      console.error("FormSubmit hatası:", errorText);

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