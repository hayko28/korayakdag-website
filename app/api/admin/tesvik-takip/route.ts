import { readFile } from "fs/promises";
import path from "path";
import { isAdminAuthorized } from "@/lib/admin-auth";

type Program = {
  id: string;
  ad: string;
  kurum: string;
  durum: "acik" | "kapali";
  sonBasvuruTarihi: string | null;
  kaynakUrl: string;
  ilkTespitTarihi: string;
  not?: string;
};

async function readIfExists(filePath: string) {
  try {
    return await readFile(filePath, "utf-8");
  } catch {
    return "";
  }
}

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });

  const dir = path.join(process.cwd(), "research", "tesvik-takip");
  const programlarRaw = await readIfExists(path.join(dir, "programlar.json"));
  const blogGuncellemeGerekli = await readIfExists(path.join(dir, "blog-guncelleme-gerekli.md"));

  let programlar: Program[] = [];
  let sonGuncelleme: string | null = null;
  if (programlarRaw) {
    try {
      const parsed = JSON.parse(programlarRaw);
      programlar = Array.isArray(parsed.programlar) ? parsed.programlar : [];
      sonGuncelleme = parsed.sonGuncelleme ?? null;
    } catch {
      // Bozuk dosya — boş liste dön, panel yine de açılsın.
    }
  }

  return Response.json({ programlar, sonGuncelleme, blogGuncellemeGerekli });
}
