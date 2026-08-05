import { initializeDatabase, sql } from "@/lib/database";

export async function GET(request: Request) {
  try {
    await initializeDatabase();
    const page = new URL(request.url).searchParams.get("page") || "";
    const comments = await sql`SELECT id, name, comment, created_at FROM comments WHERE page = ${page} AND status = 'approved' ORDER BY created_at DESC`;
    return Response.json(comments);
  } catch {
    return Response.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, comment, page } = await request.json();
    if (!name || !email || !comment || !page) {
      return Response.json({ error: "Lütfen tüm alanları doldurunuz." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
      return Response.json({ error: "Geçersiz e-posta adresi." }, { status: 400 });
    }

    const cleanName = String(name).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
    const cleanComment = String(comment).replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
    const cleanPage = String(page).trim();

    await initializeDatabase();
    await sql`INSERT INTO comments (name, email, comment, page, status) VALUES (${cleanName}, ${email.trim()}, ${cleanComment}, ${cleanPage}, 'pending')`;

    // Notification email
    try {
      await fetch("https://formsubmit.co/ajax/beysultan34@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email,
          comment: cleanComment,
          page: cleanPage,
          _subject: "Koray Akdağ web sitesi yeni blog yorumu",
          _template: "table",
        }),
      });
    } catch {
      // Ignore notification failures
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Yorum kaydedilirken hata:", error);
    return Response.json({ error: "Yorum kaydedilirken bir hata oluştu." }, { status: 500 });
  }
}
