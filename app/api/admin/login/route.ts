import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const token = (password: string) => createHmac("sha256", password).update("koray-admin").digest("hex");

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword || !password) return Response.json({ error: "Giriş yapılamadı" }, { status: 401 });
  const a = Buffer.from(token(password)); const b = Buffer.from(token(adminPassword));
  if (a.length !== b.length || !timingSafeEqual(a, b)) return Response.json({ error: "Parola yanlış" }, { status: 401 });
  const store = await cookies();
  store.set("koray_admin", token(adminPassword), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 12 });
  return Response.json({ ok: true });
}
