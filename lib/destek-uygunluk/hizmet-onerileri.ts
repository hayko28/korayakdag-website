import { DestekBasvuruGirdisi } from "./types";

// Bu dosya, Destek Uygunluk Analizi'nin kural motorundan (programlar.ts) TAMAMEN
// AYRI çalışır: destek motoru program → uygunluk → skor → gerekçe üretirken, burası
// şirket profili + hedefler → ilgili DANIŞMANLIK HİZMETİ eşleştirir. Hizmetler için
// uygunluk skoru hesaplanmaz — yalnızca "neden gösterildiği" kısa bir gerekçeyle
// belirtilir. Her kayıt gerçekten var olan bir sayfaya (hub sayfası veya konuyla
// doğrudan ilgili bir blog yazısı) bağlanır; sayfası olmayan hizmetler `aktif: false`
// ile listede tutulur ve gösterilmez (bkz. dosya sonundaki TODO'lar).

export interface HizmetOnerisi {
  id: string;
  baslik: string;
  aciklama: string;
  href: string;
  ikon: string;
  neden: string;
}

interface HizmetTanimi {
  id: string;
  baslik: string;
  aciklama: string;
  href: string;
  ikon: string;
  aktif: boolean;
  tetikle: (g: DestekBasvuruGirdisi) => string | null;
  // Destek motorundaki (programlar.ts) hangi programId'lerin karşılığı olduğunu
  // belirtir — sonuç kartında "bu programla ilgili hizmetimiz" olarak gösterilir.
  // Karşılığı olmayan hizmetler (blog yazılarına bağlı olanlar) bu alanı boş bırakır.
  ilgiliProgramIdler?: string[];
}

const hedefSecili = (g: DestekBasvuruGirdisi, anahtar: string): boolean =>
  !!g.hizmetHedefleri?.includes(anahtar);

const HIZMET_KATALOGU: HizmetTanimi[] = [
  {
    id: "ihracat-turquality-danismanligi",
    baslik: "İhracat Destekleri ve Turquality Danışmanlığı",
    aciklama: "Pazara giriş, fuar, e-ihracat ve Turquality/Marka Destek Programı için uygunluk analizinden başvuruya kadar danışmanlık.",
    href: "/ihracat-destekleri-danismanligi",
    ikon: "🌍",
    aktif: true,
    tetikle: (g) => {
      if (g.ihracatDurumu === "yapiyorum") return "İhracat faaliyetiniz nedeniyle";
      if (g.ihracatDurumu === "planliyorum") return "İhracata başlama hedefiniz nedeniyle";
      return null;
    },
    ilgiliProgramIdler: ["ticaret-bakanligi-ihracat-destekleri", "turquality-marka-destek"],
  },
  {
    id: "kosgeb-danismanlik",
    baslik: "KOSGEB Danışmanlığı",
    aciklama: "Hangi KOSGEB programına uygun olduğunuzdan başvuru dosyanıza kadar uçtan uca destek; dijital dönüşüm/olgunluk değerlendirme (DDX) raporu hazırlama dahil.",
    href: "/kosgeb-danismanlik",
    ikon: "🏭",
    aktif: true,
    tetikle: (g) => {
      if (g.yeniGirisimciMi === true) return "Yeni girişimci profiliniz nedeniyle";
      if (g.yatirimPlanlaniyorMu === true) return "Yatırım hedefiniz nedeniyle";
      if (g.imalatciMi === true) return "İmalat sektöründeki faaliyetiniz nedeniyle";
      return null;
    },
    ilgiliProgramIdler: [
      "kosgeb-is-gelistirme",
      "kosgeb-kapasite-gelistirme",
      "kosgeb-arge-urge-inovasyon",
      "kosgeb-dijital-donusum",
      "kosgeb-yesil-sanayi",
      "kosgeb-tekmer",
    ],
  },
  {
    id: "tubitak-danismanlik",
    baslik: "TÜBİTAK Ar-Ge Destekleri Danışmanlığı",
    aciklama: "Projenize uygun TÜBİTAK çağrısının belirlenmesinden başvuru dosyasına kadar destek.",
    href: "/tubitak-danismanlik",
    ikon: "🔬",
    aktif: true,
    tetikle: (g) => (g.argeDurumu && g.argeDurumu !== "yok" ? "Ar-Ge faaliyetiniz nedeniyle" : null),
    ilgiliProgramIdler: ["tubitak-1501", "tubitak-1507", "tubitak-1832"],
  },
  {
    id: "yatirim-tesvik-danismanligi",
    baslik: "Yatırım Teşvik Belgesi Danışmanlığı",
    aciklama: "Yatırımınızın teşvik mevzuatı açısından değerlendirilmesi ve uygun teşvik modelinin belirlenmesi.",
    href: "/yatirim-tesvik-belgesi-danismanligi",
    ikon: "🏗️",
    aktif: true,
    tetikle: (g) => (g.yatirimPlanlaniyorMu === true ? "Yeni yatırım planınız nedeniyle" : null),
    ilgiliProgramIdler: ["yatirim-tesvik-belgesi"],
  },
  {
    id: "teknopark-danismanligi",
    baslik: "Teknopark Danışmanlığı",
    aciklama: "Teknopark'a giriş süreci, vergi/SGK muafiyetleri ve başvuru şartlarının değerlendirilmesi.",
    href: "/blog/teknopark-nedir-avantajlari",
    ikon: "🧪",
    aktif: true,
    tetikle: (g) => (g.argeDurumu === "planliyorum" || g.argeDurumu === "var_kucuk" ? "Ar-Ge faaliyetiniz nedeniyle" : null),
    ilgiliProgramIdler: ["teknopark-statusu"],
  },
  {
    id: "arge-merkezi-danismanligi",
    baslik: "Ar-Ge Merkezi Danışmanlığı",
    aciklama: "Ar-Ge Merkezi kuruluş şartları, vergi avantajları ve başvuru sürecinin değerlendirilmesi.",
    href: "/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026",
    ikon: "🧬",
    aktif: true,
    tetikle: (g) => (g.argeDurumu === "var_kurumsal" ? "Kurumsallaşmış Ar-Ge faaliyetiniz nedeniyle" : null),
    ilgiliProgramIdler: ["arge-merkezi-statusu", "tasarim-merkezi-statusu"],
  },
  {
    id: "sirket-degerleme-danismanligi",
    baslik: "Şirket Değerleme Danışmanlığı",
    aciklama: "Şirketinizin değerinin kabul görmüş yöntemlerle hesaplanması.",
    href: "/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026",
    ikon: "📈",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "sirket_satin_alma_satis") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },
  {
    id: "ma-danismanligi",
    baslik: "M&A / Birleşme ve Satın Alma Danışmanlığı",
    aciklama: "Şirket satın alma, satış veya birleşme öncesi due diligence sürecinin değerlendirilmesi.",
    href: "/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026",
    ikon: "🤝",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "sirket_satin_alma_satis") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },
  {
    id: "yurt-disi-sirket-kurulusu",
    baslik: "Yurt Dışı Şirket Kuruluşu",
    aciklama: "Yurt dışında şirket kuruluşu ve yapılanma seçeneklerinin değerlendirilmesi.",
    href: "/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari",
    ikon: "🌐",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "yurtdisi_sirket") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
    // İhracat destekleri/Turquality'ye uygun çıkan işletmeler genelde yurt dışı
    // pazara açılma/yapılanma ihtiyacına da yaklaşıyor — hedef ayrıca seçilmese de
    // bu iki program sonucunun altında ek fırsat olarak gösterilir.
    ilgiliProgramIdler: ["ticaret-bakanligi-ihracat-destekleri", "turquality-marka-destek"],
  },
  {
    id: "marka-patent-danismanligi",
    baslik: "Marka & Patent Danışmanlığı",
    aciklama: "Marka tescili ve patent başvurusu süreçlerinin değerlendirilmesi.",
    href: "/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi",
    ikon: "🛡️",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "marka_patent") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
    // Turquality/Marka Destek Programı'nın kendisi yurt içi/yurt dışı marka tescili
    // şart koşuyor — bu eksikse (sonuç "belirsiz" dönse bile) tam ihtiyaç anı budur.
    // Ticaret Bakanlığı'nın Yurt Dışı Marka Tescil Desteği (5973 Md.4) de aynı şekilde
    // önce yurt içi tescil şartına bağlı — markaTesciliVarMi === false ise tam ihtiyaç anı.
    ilgiliProgramIdler: ["turquality-marka-destek", "ticaret-bakanligi-ihracat-destekleri"],
  },
  {
    id: "kdv-iade-danismanligi",
    baslik: "KDV İade Danışmanlığı",
    aciklama: "KDV iadesi süreçlerinin şart ve prosedür açısından değerlendirilmesi.",
    href: "/blog/kdv-iadesi-nasil-alinir-2026-sartlari-sureci",
    ikon: "💶",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "kdv_iade") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },
  {
    id: "vergi-danismanligi",
    baslik: "Vergi Danışmanlığı",
    aciklama: "Ulusal ve uluslararası vergi yükümlülükleri açısından değerlendirme.",
    href: "/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi",
    ikon: "🧾",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "vergi_sgk") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },
  {
    id: "sgk-prim-tesvikleri-danismanligi",
    baslik: "SGK Prim Teşvikleri Danışmanlığı",
    aciklama: "Hangi SGK prim teşviklerinden yararlanabileceğinizin değerlendirilmesi.",
    href: "/blog/sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi",
    ikon: "👥",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "vergi_sgk") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },
  {
    id: "bagimsiz-denetim-danismanligi",
    baslik: "Bağımsız Denetim Danışmanlığı",
    aciklama: "Bağımsız denetime tabi olma eşikleri ve süreç yönetiminin değerlendirilmesi.",
    href: "/blog/bagimsiz-denetim-esik-degerleri-2026-degisti",
    ikon: "📋",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "bagimsiz_denetim") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },
  {
    id: "surdurulebilirlik-esg-danismanligi",
    baslik: "Sürdürülebilirlik / ESG Danışmanlığı",
    aciklama: "TSRS sürdürülebilirlik raporlaması ve ESG süreçlerinin değerlendirilmesi.",
    href: "/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026",
    ikon: "🌱",
    aktif: true,
    tetikle: (g) => (g.donusumDurumu && g.donusumDurumu !== "yok" ? "Dönüşüm hedefiniz nedeniyle" : null),
  },
  {
    id: "finansmana-erisim-danismanligi",
    baslik: "Finansmana Erişim ve Uluslararası Fon Danışmanlığı",
    aciklama: "Kredi, fon ve finansman kaynaklarına erişim seçeneklerinin değerlendirilmesi.",
    href: "/blog/uluslararasi-fon-ve-kredi-danismanligi-kobi-finansman-kaynaklari",
    ikon: "💰",
    aktif: true,
    tetikle: (g) => (hedefSecili(g, "finansman") ? "Belirttiğiniz hedefiniz nedeniyle" : null),
  },

  // TODO: Tasarım Merkezi Danışmanlığı — dedike sayfa/blog yazısı oluşturulunca
  // aktif: true yapılıp buraya eklenecek. Şu an sitede ilgili bir sayfa yok.
  // TODO: Uluslararası İş Geliştirme — dedike sayfa/blog yazısı oluşturulunca
  // aktif: true yapılıp buraya eklenecek. Şu an sitede ilgili bir sayfa yok.
];

const MAKS_HIZMET = 6;

// Şirket profili + hedeflere göre eşleşen, gerçek sayfası olan hizmetleri döner.
// Sıralama yalnızca katalogdaki tanım sırasına göredir — "en iyi/en doğru hizmet"
// gibi bir öncelik iddiası taşımaz, ilk MAKS_HIZMET eşleşme gösterilir.
export function onerilenHizmetleriBul(g: DestekBasvuruGirdisi): HizmetOnerisi[] {
  const eslesenler: HizmetOnerisi[] = [];
  for (const h of HIZMET_KATALOGU) {
    if (!h.aktif) continue;
    const neden = h.tetikle(g);
    if (neden) {
      eslesenler.push({ id: h.id, baslik: h.baslik, aciklama: h.aciklama, href: h.href, ikon: h.ikon, neden });
    }
  }
  return eslesenler.slice(0, MAKS_HIZMET);
}

// Bir destek programı sonuç kartında "bu programla ilgili hizmetimiz" olarak
// gösterilecek hizmetleri bulur (varsa, birden fazla olabilir — ör. İhracat
// Destekleri hem İhracat/Turquality danışmanlığına hem Yurt Dışı Şirket
// Kuruluşu'na bağlı). Katalogdaki tanım sırasına göre TÜM eşleşenleri döner;
// karşılığı olmayan programlar için boş dizi (hiç kart gösterilmez).
export function programaBagliHizmetleriBul(programId: string): HizmetOnerisi[] {
  return HIZMET_KATALOGU.filter((h) => h.aktif && h.ilgiliProgramIdler?.includes(programId)).map((h) => ({
    id: h.id,
    baslik: h.baslik,
    aciklama: h.aciklama,
    href: h.href,
    ikon: h.ikon,
    neden: "Bu programla ilgili hizmetimiz",
  }));
}

export const HIZMET_HEDEF_SECENEKLERI = [
  { value: "yurtdisi_sirket", label: "Yurtdışında şirket kurmak" },
  { value: "marka_patent", label: "Marka veya patent koruması almak" },
  { value: "sirket_satin_alma_satis", label: "Şirket satın almak, satmak veya yatırım almak" },
  { value: "kdv_iade", label: "KDV iadesi almak" },
  { value: "vergi_sgk", label: "Vergi veya SGK teşviklerinden yararlanmak" },
  { value: "bagimsiz_denetim", label: "Bağımsız denetim yaptırmak" },
  { value: "finansman", label: "Finansman veya kredi bulmak" },
];
