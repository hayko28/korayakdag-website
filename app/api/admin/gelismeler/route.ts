import { isAdminAuthorized } from "@/lib/admin-auth";
import { GELISMELER } from "@/lib/gelismeler-data";

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const gelismeler = [...GELISMELER].sort((a, b) => b.eklendiTarihi.localeCompare(a.eklendiTarihi));
  return Response.json({ gelismeler });
}
