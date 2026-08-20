import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdminAuthorized())) {
    return Response.json({ error: "Yetkisiz" }, { status: 401 });
  }

  await initializeDatabase();
  const basvurular = await sql`SELECT * FROM destek_uygunluk_basvurulari ORDER BY created_at DESC`;
  return Response.json({ basvurular });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthorized())) {
    return Response.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const { id, status } = await request.json();
  if (!id || !status) {
    return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  }

  await initializeDatabase();
  if (status === "deleted") {
    await sql`DELETE FROM destek_uygunluk_basvurulari WHERE id = ${id}`;
  } else {
    await sql`UPDATE destek_uygunluk_basvurulari SET status = ${status} WHERE id = ${id}`;
  }

  return Response.json({ ok: true });
}
