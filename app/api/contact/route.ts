import { initializeDatabase, sql } from "@/lib/database";

// E-posta gonderimi artik dogrudan tarayicidan (Contact.tsx) yapiliyor.
// Bu route sadece yedek olarak veritabanina kayit atar.
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Eksik bilgi" },
        { status: 400 }
      );
    }

    await initializeDatabase();

    await sql`
      INSERT INTO contact_messages
      (name, email, subject, message)
      VALUES
      (${name}, ${email}, ${subject}, ${message})
    `;

    return Response.json({ ok: true });
  } catch (error) {
    console.error("İletişim formu veritabanı hatası:", error);

    return Response.json(
      { error: "Mesaj veritabanına kaydedilemedi." },
      { status: 500 }
    );
  }
}