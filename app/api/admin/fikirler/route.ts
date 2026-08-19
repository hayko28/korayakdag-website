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

type Bolum = { tarih: number; satirlar: string[] };

// Ajanın dosyaya yazdığı sıraya güvenmeden, her günlük bölümü başlığındaki
// tarihe göre böler — yeni girdi yanlışlıkla sona eklense bile panelde her
// zaman en üstte görünür.
function bolumleriAyir(markdown: string): { onsoz: string[]; bolumler: Bolum[] } {
  const satirlar = markdown.split("\n");
  const bolumler: Bolum[] = [];
  const onsoz: string[] = [];
  let mevcut: Bolum | null = null;

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

  return { onsoz, bolumler };
}

function enYeniyeGoreSirala(markdown: string): string {
  const { onsoz, bolumler } = bolumleriAyir(markdown);
  if (bolumler.length === 0) return markdown;

  const siralanmis = [...bolumler].sort((a, b) => b.tarih - a.tarih);
  const govde = siralanmis.map((b) => b.satirlar.join("\n")).join("\n");
  return onsoz.filter((l) => l.trim() !== "").length ? `${onsoz.join("\n")}\n${govde}` : govde;
}

// "Bugünün Önerisi" kartını ayrı bir dosyadan değil, gunluk-fikirler.md'nin
// en güncel (en üstteki) gününün kendi "BUGÜNÜN ÖNERİSİ" bölümünden çıkarır —
// böylece panel her zaman o günkü öneriyi gösterir, eski/güncellenmemiş bir
// dosyaya bağımlı kalmaz.
function bugununOnerisiniCikar(markdown: string): string {
  const { bolumler } = bolumleriAyir(markdown);
  if (bolumler.length === 0) return "";

  const enYeni = bolumler.reduce((a, b) => (b.tarih > a.tarih ? b : a));
  const tarihEslesme = enYeni.satirlar[0]?.match(TARIH_RE);
  const oneriIndex = enYeni.satirlar.findIndex((s) => /BUGÜNÜN ÖNERİSİ/i.test(s));
  if (oneriIndex === -1) return "";

  const govde = enYeni.satirlar
    .slice(oneriIndex + 1)
    .join("\n")
    .trim();
  const etiket = tarihEslesme ? `**${tarihEslesme[0]}**\n\n` : "";
  return `${etiket}${govde}`;
}

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });

  const dir = path.join(process.cwd(), "research", "fikirler");
  const gunlukFikirlerRaw = await readIfExists(path.join(dir, "gunluk-fikirler.md"));
  const gunlukFikirler = enYeniyeGoreSirala(gunlukFikirlerRaw);

  return Response.json({
    bugunOneri: bugununOnerisiniCikar(gunlukFikirlerRaw),
    gunlukFikirler,
  });
}