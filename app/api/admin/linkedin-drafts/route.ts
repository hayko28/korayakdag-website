import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  await initializeDatabase();
  const drafts = await sql`SELECT * FROM linkedin_drafts ORDER BY created_at DESC`;
  return Response.json({ drafts });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { tarih, icerik, kaynakBaslik, kaynakUrl, gorselUrl, videoUrl } = await request.json();
  if (!tarih || !icerik || !kaynakBaslik) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`
    INSERT INTO linkedin_drafts (tarih, icerik, kaynak_baslik, kaynak_url, gorsel_url, video_url)
    VALUES (${tarih}, ${icerik}, ${kaynakBaslik}, ${kaynakUrl ?? null}, ${gorselUrl ?? null}, ${videoUrl ?? null})
  `;
  return Response.json({ ok: true });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id, icerik, kaynakBaslik, kaynakUrl, gorselUrl, videoUrl } = await request.json();
  if (!id || !icerik || !kaynakBaslik) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`
    UPDATE linkedin_drafts
    SET icerik = ${icerik}, kaynak_baslik = ${kaynakBaslik}, kaynak_url = ${kaynakUrl ?? null}, gorsel_url = ${gorselUrl ?? null}, video_url = ${videoUrl ?? null}
    WHERE id = ${id}
  `;
  return Response.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id } = await request.json();
  if (!id) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`DELETE FROM linkedin_drafts WHERE id = ${id}`;
  return Response.json({ ok: true });
}
