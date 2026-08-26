import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  await initializeDatabase();
  const notes = await sql`SELECT * FROM admin_notes ORDER BY updated_at DESC`;
  return Response.json({ notes });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { content } = await request.json();
  if (!content?.trim()) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`INSERT INTO admin_notes (content) VALUES (${content})`;
  return Response.json({ ok: true });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id, content } = await request.json();
  if (!id || !content?.trim()) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`UPDATE admin_notes SET content = ${content}, updated_at = NOW() WHERE id = ${id}`;
  return Response.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id } = await request.json();
  if (!id) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`DELETE FROM admin_notes WHERE id = ${id}`;
  return Response.json({ ok: true });
}
