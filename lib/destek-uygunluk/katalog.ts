import { readFile } from "fs/promises";
import path from "path";
import { DestekBasvuruGirdisi, KatalogEslesme } from "./types";

type KatalogProgram = {
  ad: string;
  kurum: string;
  durum: "acik" | "kapali";
  sonBasvuruTarihi: string | null;
  kaynakUrl: string;
  not?: string;
};

// Katman 2'de zaten kendi bölümüyle değerlendirilen programların adları —
// bunlar genel katalog önerilerinde tekrar gösterilmesin diye dışlanıyor.
const ZATEN_MODELLENEN_ANAHTAR_KELIMELER = [
  "kapasite geliştirme",
  "girişimci destek",
  "ar-ge, ür-ge",
  "dijital ve yeşil dönüşüm",
  "yatırım teşvik sistemi",
  "1501",
  "1507",
  "1832",
  "ihracat destekleri",
  "ipard",
];

function anahtarKelimeGecerMi(metin: string, kelimeler: string[]): boolean {
  const kucukMetin = metin.toLocaleLowerCase("tr-TR");
  return kelimeler.some((k) => kucukMetin.includes(k));
}

// Huni (triyaj) cevaplarına göre 160+ programlık genel katalogdan (research/
// tesvik-takip/programlar.json) basit anahtar kelime eşleştirmesiyle ilgili
// olabilecek kalemleri çıkarır. Bu bir kural motoru DEĞİL — kesin uygunluk
// iddiası taşımaz, sadece "bunlar da ilginizi çekebilir" önerisidir.
export async function katalogEslestir(g: DestekBasvuruGirdisi): Promise<KatalogEslesme[]> {
  let raw: string;
  try {
    raw = await readFile(
      path.join(process.cwd(), "research", "tesvik-takip", "programlar.json"),
      "utf-8"
    );
  } catch {
    return [];
  }

  let programlar: KatalogProgram[];
  try {
    programlar = JSON.parse(raw).programlar ?? [];
  } catch {
    return [];
  }

  const aramaKelimeleri: string[] = [];
  if (g.ihracatDurumu && g.ihracatDurumu !== "yok") {
    aramaKelimeleri.push("ihracat", "pazara giriş", "fuar", "marka tescil", "e-ihracat", "turquality", "tanıtım desteği");
  }
  if (g.donusumDurumu && g.donusumDurumu !== "yok") {
    aramaKelimeleri.push("dijital dönüşüm", "yeşil dönüşüm", "enerji verimliliği", "karbon", "döngüsel", "sürdürülebilir", "verimlilik artırıcı");
  }
  if (g.kirsalYatirimVarMi) {
    aramaKelimeleri.push("tarım", "kırsal", "hayvancılık", "çiftçi", "sera", "orköy", "besicilik");
  }
  if (g.argeDurumu && g.argeDurumu !== "yok") {
    aramaKelimeleri.push("ar-ge", "yenilik", "inovasyon", "teknoloji transferi", "patent", "tasarım merkezi");
  }
  if (g.oncelikliGrup === "kadin") aramaKelimeleri.push("kadın");
  if (g.oncelikliGrup === "genc") aramaKelimeleri.push("genç");
  if (g.oncelikliGrup === "engelli") aramaKelimeleri.push("engelli");
  if (g.imalatciMi) aramaKelimeleri.push("imalat", "sanayi sicil", "üretim");

  if (aramaKelimeleri.length === 0) return [];

  const eslesenler = programlar.filter((p) => {
    if (p.durum !== "acik") return false;
    if (anahtarKelimeGecerMi(p.ad, ZATEN_MODELLENEN_ANAHTAR_KELIMELER)) return false;
    return anahtarKelimeGecerMi(`${p.ad} ${p.not ?? ""}`, aramaKelimeleri);
  });

  // Süreli (son başvuru tarihi belli) olanlar önce, sonra sürekli aktif olanlar; en fazla 10 sonuç.
  eslesenler.sort((a, b) => (a.sonBasvuruTarihi ?? "9999").localeCompare(b.sonBasvuruTarihi ?? "9999"));

  return eslesenler.slice(0, 10).map((p) => ({
    ad: p.ad,
    kurum: p.kurum,
    sonBasvuruTarihi: p.sonBasvuruTarihi,
    kaynakUrl: p.kaynakUrl,
  }));
}
