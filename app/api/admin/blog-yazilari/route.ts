import { isAdminAuthorized } from "@/lib/admin-auth";
import { BLOG_POSTS } from "@/lib/blog-data";

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  return Response.json({ blogYazilari: BLOG_POSTS });
}
