import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { initializeDatabase, sql } from "@/lib/database";

async function authorized() { const password = process.env.ADMIN_PASSWORD; const value = (await cookies()).get("koray_admin")?.value; if (!password || !value) return false; const expected = createHmac("sha256", password).update("koray-admin").digest("hex"); return value.length === expected.length && timingSafeEqual(Buffer.from(value), Buffer.from(expected)); }
export async function POST(request: Request) { if (!await authorized()) return Response.json({ error: "Yetkisiz" }, { status: 401 }); const { title, slug, excerpt, content, status } = await request.json(); if (!title || !slug || !excerpt || !content) return Response.json({ error: "Eksik bilgi" }, { status: 400 }); await initializeDatabase(); await sql`INSERT INTO posts (title, slug, excerpt, content, status, published_at) VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${status}, ${status === "published" ? new Date().toISOString() : null})`; return Response.json({ ok: true }); }
