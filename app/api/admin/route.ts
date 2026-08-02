import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { initializeDatabase, sql } from "@/lib/database";

async function authorized() { const password = process.env.ADMIN_PASSWORD; const value = (await cookies()).get("koray_admin")?.value; if (!password || !value) return false; const expected = createHmac("sha256", password).update("koray-admin").digest("hex"); return value.length === expected.length && timingSafeEqual(Buffer.from(value), Buffer.from(expected)); }
export async function GET() { if (!await authorized()) return Response.json({ error: "Yetkisiz" }, { status: 401 }); await initializeDatabase(); const [comments, messages, posts] = await Promise.all([sql`SELECT * FROM comments ORDER BY created_at DESC`, sql`SELECT * FROM contact_messages ORDER BY created_at DESC`, sql`SELECT * FROM posts ORDER BY created_at DESC`]); return Response.json({ comments, messages, posts }); }
export async function PATCH(request: Request) { if (!await authorized()) return Response.json({ error: "Yetkisiz" }, { status: 401 }); const { type, id, status } = await request.json(); await initializeDatabase(); if (type === "comment") await sql`UPDATE comments SET status = ${status} WHERE id = ${id}`; else await sql`UPDATE contact_messages SET status = ${status} WHERE id = ${id}`; return Response.json({ ok: true }); }
