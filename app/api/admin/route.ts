import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function GET() {
  if (!(await isAdminAuthorized())) {
    return Response.json({ error: "Yetkisiz" }, { status: 401 });
  }

  await initializeDatabase();

  const [comments, messages, posts] = await Promise.all([
    sql`SELECT * FROM comments ORDER BY created_at DESC`,
    sql`SELECT * FROM contact_messages ORDER BY created_at DESC`,
    sql`SELECT * FROM posts ORDER BY created_at DESC`,
  ]);

  return Response.json({ comments, messages, posts });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthorized())) {
    return Response.json({ error: "Yetkisiz" }, { status: 401 });
  }

  const { type, id, status } = await request.json();

  if (!type || !id || !status) {
    return Response.json(
      { error: "Eksik bilgi" },
      { status: 400 }
    );
  }

  await initializeDatabase();

  if (type === "comment") {
    if (status === "deleted") {
      await sql`DELETE FROM comments WHERE id = ${id}`;
    } else {
      await sql`
        UPDATE comments
        SET status = ${status}
        WHERE id = ${id}
      `;
    }
  } else if (type === "message") {
    if (status === "deleted") {
      await sql`DELETE FROM contact_messages WHERE id = ${id}`;
    } else {
      await sql`
        UPDATE contact_messages
        SET status = ${status}
        WHERE id = ${id}
      `;
    }
  } else {
    return Response.json(
      { error: "Geçersiz kayıt türü" },
      { status: 400 }
    );
  }

  return Response.json({ ok: true });
}