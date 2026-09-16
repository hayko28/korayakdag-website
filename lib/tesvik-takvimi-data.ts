import programlarData from "@/research/tesvik-takip/programlar.json";

export interface TesvikProgram {
  id: string;
  ad: string;
  kurum: string;
  durum: "acik" | "kapali";
  sonBasvuruTarihi: string | null;
  kaynakUrl: string;
  not: string;
  /** Bu programı detaylı işleyen bir blog yazısı varsa slug'ı (aşağıdaki
   * PROGRAM_BLOG_SLUGS eşlemesinden gelir). */
  blogSlug?: string;
}

export interface TesvikGrubu {
  kurum: string;
  acikSayisi: number;
  toplamSayisi: number;
  programlar: TesvikProgram[];
}

interface ProgramlarFile {
  sonGuncelleme: string;
  programlar: Omit<TesvikProgram, "blogSlug">[];
}

const data = programlarData as ProgramlarFile;

// Kaynak tarama sırasında listeye karışan, gerçek bir program olmayan
// arayüz metinleri (ör. "Program Durumuna Göre Filtrele").
const EXCLUDED_IDS = new Set([
  "yad-turkiye-kalkinma-ve-yatirim-bankasi-program-durumuna-gore-filtrele",
]);

// Programlar.json kaydını (id ile) sitedeki ilgili detaylı blog yazısına
// bağlayan elle bakımı yapılan eşleme. Her yeni program yazısı yayınlandığında
// buraya bir satır eklenebilir; eşleşme yoksa program yine listede görünür,
// sadece "Detay" yerine resmi kaynak linkine gider.
const PROGRAM_BLOG_SLUGS: Record<string, string> = {
  "yad-kosgeb-girisimci-destek-programi": "kosgeb-girisimci-destek-programi-2026",
  "yad-kosgeb-kuresel-rekabetcilik-destek-programi":
    "kosgeb-kuresel-rekabetciligin-gelistirilmesi-projesi-2026",
  "kosgeb-tekmer-destek-2025": "tekmer-nedir-basvuru-sureci-destekleri-2026",
  "yad-kosgeb-teknoloji-merkezi-destek-programi":
    "tekmer-nedir-basvuru-sureci-destekleri-2026",
  "yad-kosgeb-kobi-dijital-donusum-destek-programi":
    "kosgeb-kobi-dijital-donusum-destek-programi-2026",
  "kosgeb-kapasite-gelistirme-2026-2": "kosgeb-kapasite-gelistirme-destek-programi-2026",
  "kosgeb-kapasite-gelistirme-2026-3": "kosgeb-kapasite-gelistirme-destek-programi-2026",
  "kosgeb-cop31-hizlandirma-2026": "kosgeb-cop31-odakli-hizlandirma-destegi-cagrisi-2026",
  "yad-kosgeb-is-birligi-destek-programi":
    "kosgeb-is-birligi-destek-programi-basvuruya-kapandi-mi",
  "yad-kosgeb-kobi-teknolojik-urun-yatirim-kobi-teknoyatirim-destek-progra":
    "kosgeb-teknoyatirim-destek-programi-basvuruya-kapandi-mi",
  "yad-kosgeb-stratejik-urun-destek-programi": "kosgeb-stratejik-urun-destek-programi-2026",
  "yad-kosgeb-sektorel-gelisim-merkezi-segem-destek-programi":
    "kosgeb-segem-destek-programi-kobi-basvurabilir-mi",
  "yad-kosgeb-yonderlik-ve-degerlendirme-destek-programi":
    "kosgeb-yonde-yonderlik-degerlendirme-destek-programi-2026",
  "yad-sanayi-ve-teknoloji-bakanligi-yatirim-tesvik-sistemi-9903-sayili-karar":
    "yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026",
  "yad-ticaret-bakanligi-marka-ve-turquality-destegi":
    "turquality-programi-nedir-sartlari-destekleri-2026",
  "yad-sanayi-ve-teknoloji-bakanligi-proje-bazli-tesvik-sistemi-2016-9495-sayili-karar":
    "proje-bazli-tesvik-sistemi-2026-degisiklikleri",
  "yad-sgk-tum-sgk-tesvikleri": "sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi",
  "tubitak-1501-sanayi-arge-1-cagri": "tubitak-1501-1507-ar-ge-destekleri-2026",
  "tubitak-1501-sanayi-arge-2-cagri": "tubitak-1501-1507-ar-ge-destekleri-2026",
  "tubitak-1507-kobi-arge-baslangic-1-cagri": "tubitak-1501-1507-ar-ge-destekleri-2026",
  "tubitak-1507-kobi-arge-baslangic-2-cagri": "tubitak-1501-1507-ar-ge-destekleri-2026",
  "istihdami-koruma-destek-programi-2026": "istihdami-koruma-destek-programi-2026",
};

export function getTesvikProgramlari(): TesvikProgram[] {
  return data.programlar
    .filter((p) => !EXCLUDED_IDS.has(p.id) && p.ad.trim().length > 3)
    .map((p) => ({ ...p, blogSlug: PROGRAM_BLOG_SLUGS[p.id] }));
}

export function getSonGuncelleme(): string {
  return data.sonGuncelleme;
}

export function getKurumListesi(programlar: TesvikProgram[]): string[] {
  return Array.from(new Set(programlar.map((p) => p.kurum))).sort();
}

/** "KOSGEB / Çalışma ve Sosyal Güvenlik Bakanlığı" gibi çok kurumlu
 * kayıtları ilk (asıl yürütücü) kuruma göre gruplamak için kullanılır. */
export function anaKurum(kurum: string): string {
  return kurum.split("/")[0].trim();
}

function kalanGunSirala(a: TesvikProgram, b: TesvikProgram): number {
  const gun = (p: TesvikProgram) => {
    if (!p.sonBasvuruTarihi) return null;
    const d = new Date(p.sonBasvuruTarihi);
    return Number.isNaN(d.getTime()) ? null : d.getTime();
  };
  const ga = gun(a);
  const gb = gun(b);
  if (a.durum !== b.durum) return a.durum === "acik" ? -1 : 1;
  if (ga !== null && gb !== null) return ga - gb;
  if (ga !== null) return -1;
  if (gb !== null) return 1;
  return a.ad.localeCompare(b.ad, "tr-TR");
}

/** Programları ana kuruma göre gruplar; her grup içinde açık programlar
 * (son başvuruya en yakın olan önce) üstte, kapalı programlar altta yer alır.
 * Gruplar açık program sayısına göre büyükten küçüğe sıralanır. */
export function getGruplananProgramlar(programlar: TesvikProgram[]): TesvikGrubu[] {
  const gruplar = new Map<string, TesvikProgram[]>();
  for (const p of programlar) {
    const key = anaKurum(p.kurum);
    if (!gruplar.has(key)) gruplar.set(key, []);
    gruplar.get(key)!.push(p);
  }

  return Array.from(gruplar.entries())
    .map(([kurum, liste]) => {
      const siralanan = [...liste].sort(kalanGunSirala);
      return {
        kurum,
        acikSayisi: siralanan.filter((p) => p.durum === "acik").length,
        toplamSayisi: siralanan.length,
        programlar: siralanan,
      };
    })
    .sort((a, b) => {
      if (b.acikSayisi !== a.acikSayisi) return b.acikSayisi - a.acikSayisi;
      return b.toplamSayisi - a.toplamSayisi;
    });
}
