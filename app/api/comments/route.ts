import { initializeDatabase, sql } from "@/lib/database";

export async function GET(request: Request) {
  await initializeDatabase();
  const page = new URL(request.url).searchParams.get("page") || "";
  const comments = await sql`SELECT id, name, comment, created_at FROM comments WHERE page = ${page} AND status = 'approved' ORDER BY created_at DESC`;
  return Response.json(comments);
}

export async function POST(request: Request) {
  const { name, email, comment, page } = await request.json();
  if (!name || !email || !comment || !page) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`INSERT INTO comments (name, email, comment, page) VALUES (${name}, ${email}, ${comment}, ${page})`;
  await fetch("https://formsubmit.co/ajax/beysultan34@gmail.com", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name, email, comment, page, _subject: "Koray Akdağ web sitesi yeni blog yorumu", _template: "table" }) });
  return Response.json({ ok: true });
}
