import { verifyPassword, createAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (!verifyPassword(password)) {
    return Response.json({ error: "Parola yanlış" }, { status: 401 });
  }

  await createAdminSession();
  return Response.json({ ok: true });
}
