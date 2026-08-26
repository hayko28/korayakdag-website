import { isAdminAuthorized } from "@/lib/admin-auth";
import { MAKALELER } from "@/lib/makale-data";

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  return Response.json({ makaleler: MAKALELER });
}
