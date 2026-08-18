import { readFile } from "fs/promises";
import path from "path";
import { isAdminAuthorized } from "@/lib/admin-auth";

async function readIfExists(filePath: string) {
  try {
    return await readFile(filePath, "utf-8");
  } catch {
    return "";
  }
}

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });

  const dir = path.join(process.cwd(), "research", "fikirler");
  const [bugunOneri, gunlukFikirler] = await Promise.all([
    readIfExists(path.join(dir, "bugun-oneri.md")),
    readIfExists(path.join(dir, "gunluk-fikirler.md")),
  ]);

  return Response.json({ bugunOneri, gunlukFikirler });
}