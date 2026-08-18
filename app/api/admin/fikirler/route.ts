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

const AYLAR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];
const TARIH_RE = new RegExp(`(\\d{1,2})\\s+(${AYLAR.join("|")})\\s+(\\d{4})`);
const BASLIK_RE = new RegExp(`^#{1,3}\\s+.*${TARIH_RE.source}`);

function tarihiSayiyaCevir(satir: string): number {
  const m = satir.match(TARIH_RE);
  if (!m) return -Infinity;
  const gun = parseInt(m[1], 10);
  const ay = AYLAR.indexOf(m[2]);
  const yil = parseInt(m[3], 10);
  return new Date(yil, ay, gun).getTime();
}

// Ajanın dosyaya yazdığı sıraya güvenmeden, her günlük bölümü tarihine göre
// en yeniden en eskiye sıralar — yeni girdi yanlışlıkla sona eklense bile
// panelde her zaman en üstte görünür.
function enYeniyeGoreSirala(markdown: string): string {
  const satirlar = markdown.split("\n");
  const bolumler: { tarih: number; satirlar: string[] }[] = [];
  const onsoz: string[] = [];
  let mevcut: { tarih: number; satirlar: string[] } | null = null;

  for (const satir of satirlar) {
    if (BASLIK_RE.test(satir)) {
      if (mevcut) bolumler.push(mevcut);
      mevcut = { tarih: tarihiSayiyaCevir(satir), satirlar: [satir] };
    } else if (mevcut) {
      mevcut.satirlar.push(satir);
    } else {
      onsoz.push(satir);
    }
  }
  if (mevcut) bolumler.push(mevcut);

  if (bolumler.length === 0) return markdown;

  bolumler.sort((a, b) => b.tarih - a.tarih);

  const govde = bolumler.map((b) => b.satirlar.join("\n")).join("\n");
  return onsoz.filter((l) => l.trim() !== "").length ? `${onsoz.join("\n")}\n${govde}` : govde;
}

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });

  const dir = path.join(process.cwd(), "research", "fikirler");
  const [bugunOneriRaw, gunlukFikirlerRaw] = await Promise.all([
    readIfExists(path.join(dir, "bugun-oneri.md")),
    readIfExists(path.join(dir, "gunluk-fikirler.md")),
  ]);

  return Response.json({
    bugunOneri: enYeniyeGoreSirala(bugunOneriRaw),
    gunlukFikirler: enYeniyeGoreSirala(gunlukFikirlerRaw),
  });
}