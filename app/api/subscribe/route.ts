import { initializeDatabase, sql } from "@/lib/database";

// NOT: Bu route şu an için yalnızca e-posta adresini veritabanına kaydeder.
// Gerçek otomatik bildirim e-postası gönderimi (yeni gelişme/makale
// yayınlandığında abonelere mail atma) henüz kurulmadı — ileride ayrı bir
// adım olarak eklenecek (ör. bir e-posta gönderim servisiyle entegrasyon).
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return Response.json({ error: "Geçerli bir e-posta girin" }, { status: 400 });
    }

    await initializeDatabase();

    await sql`
      INSERT INTO subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Abonelik veritabanı hatası:", error);
    return Response.json(
      { error: "Abonelik kaydedilemedi." },
      { status: 500 }
    );
  }
}
