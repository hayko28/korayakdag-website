import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { title, slug, excerpt, content, status } = await request.json();
  if (!title || !slug || !excerpt || !content) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`INSERT INTO posts (title, slug, excerpt, content, status, published_at) VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${status}, ${status === "published" ? new Date().toISOString() : null})`;
  return Response.json({ ok: true });
}
