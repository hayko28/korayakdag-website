import { initializeDatabase, sql } from "@/lib/database";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  if (!name || !email || !subject || !message) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`INSERT INTO contact_messages (name, email, subject, message) VALUES (${name}, ${email}, ${subject}, ${message})`;
  await fetch("https://formsubmit.co/ajax/beysultan34@gmail.com", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name, email, subject, message, _subject: "Koray Akdağ web sitesi iletişim formu", _template: "table" }) });
  return Response.json({ ok: true });
}
