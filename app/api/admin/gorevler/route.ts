import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  await initializeDatabase();
  const tasks = await sql`SELECT * FROM admin_tasks ORDER BY done ASC, created_at DESC`;
  return Response.json({ tasks });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { content } = await request.json();
  if (!content?.trim()) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`INSERT INTO admin_tasks (content) VALUES (${content})`;
  return Response.json({ ok: true });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id, done } = await request.json();
  if (!id || typeof done !== "boolean") return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`UPDATE admin_tasks SET done = ${done} WHERE id = ${id}`;
  return Response.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id } = await request.json();
  if (!id) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`DELETE FROM admin_tasks WHERE id = ${id}`;
  return Response.json({ ok: true });
}
