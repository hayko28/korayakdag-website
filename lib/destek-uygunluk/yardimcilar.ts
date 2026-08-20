export type KobiOlcegi = "mikro" | "kucuk" | "orta" | "kobi_disi";

// Küçük ve Orta Büyüklükteki İşletmeler Yönetmeliği (7297 sayılı CB Kararı,
// RG 25/5/2023-32201) — KOSGEB ve TÜBİTAK'ın ortak referans aldığı KOBİ tanımı.
// Kaynak: research/destek-uygunluk/kosgeb-kapasite-gelistirme.md
export function kobiOlceguHesapla(calisanSayisi?: number, maliUst?: number): KobiOlcegi | null {
  if (calisanSayisi === undefined || maliUst === undefined) return null;
  if (calisanSayisi < 10 && maliUst <= 10_000_000) return "mikro";
  if (calisanSayisi < 50 && maliUst <= 100_000_000) return "kucuk";
  if (calisanSayisi < 250 && maliUst <= 500_000_000) return "orta";
  return "kobi_disi";
}

export function isletmeYasiYil(kurulusTarihi?: string): number | null {
  if (!kurulusTarihi) return null;
  const kurulus = new Date(kurulusTarihi);
  if (Number.isNaN(kurulus.getTime())) return null;
  const farkMs = Date.now() - kurulus.getTime();
  return farkMs / (1000 * 60 * 60 * 24 * 365.25);
}

// NACE Rev.2 "Bölüm" (2 haneli) veya "Kısım C" (imalat, 10-33) kontrolü.
// KOSGEB İş Geliştirme ve Kapasite Geliştirme programlarının ikisi de aynı
// 5 grubu kullanıyor: Kısım C-İmalat, Bölüm 61/62/63/72.
export function kosgebDesteklenenSektorMu(naceKodu?: string): boolean {
  if (!naceKodu) return false;
  const bolum = parseInt(naceKodu.slice(0, 2), 10);
  if (Number.isNaN(bolum)) return false;
  const imalatMi = bolum >= 10 && bolum <= 33;
  return imalatMi || bolum === 61 || bolum === 62 || bolum === 63 || bolum === 72;
}

export function imalatSektoruMu(naceKodu?: string): boolean {
  if (!naceKodu) return false;
  const bolum = parseInt(naceKodu.slice(0, 2), 10);
  return !Number.isNaN(bolum) && bolum >= 10 && bolum <= 33;
}

// Yatırımlarda Devlet Yardımları Hakkında Karar (9903 sayılı, EK-2) —
// 81 il, 6 bölge. Kaynak: research/destek-uygunluk/yatirim-tesvik-belgesi.md
const IL_BOLGE: Record<string, number> = {
  Ankara: 1, Antalya: 1, Bursa: 1, Eskişehir: 1, İstanbul: 1, İzmir: 1, Kocaeli: 1, Muğla: 1,
  Aydın: 2, Balıkesir: 2, Bolu: 2, Çanakkale: 2, Denizli: 2, Edirne: 2, Kayseri: 2, Konya: 2,
  Manisa: 2, Mersin: 2, Sakarya: 2, Tekirdağ: 2, Yalova: 2,
  Adana: 3, Bilecik: 3, Burdur: 3, Düzce: 3, Gaziantep: 3, Isparta: 3, Karabük: 3, Karaman: 3,
  Kırıkkale: 3, Kırklareli: 3, Kütahya: 3, Nevşehir: 3, Rize: 3, Samsun: 3, Trabzon: 3, Uşak: 3, Zonguldak: 3,
  Afyonkarahisar: 4, Aksaray: 4, Amasya: 4, Artvin: 4, Çorum: 4, Elâzığ: 4, Erzincan: 4, Kastamonu: 4,
  Kırşehir: 4, Malatya: 4, Sivas: 4,
  Bartın: 5, Bayburt: 5, Çankırı: 5, Erzurum: 5, Giresun: 5, Hatay: 5, Kahramanmaraş: 5, Kilis: 5,
  Niğde: 5, Ordu: 5, Osmaniye: 5, Sinop: 5, Tokat: 5, Tunceli: 5, Yozgat: 5,
  Adıyaman: 6, Ağrı: 6, Ardahan: 6, Batman: 6, Bingöl: 6, Bitlis: 6, Diyarbakır: 6, Gümüşhane: 6,
  Hakkâri: 6, Iğdır: 6, Kars: 6, Mardin: 6, Muş: 6, Siirt: 6, Şanlıurfa: 6, Şırnak: 6, Van: 6,
};

export function ilinBolgesi(il?: string): number | null {
  if (!il) return null;
  return IL_BOLGE[il] ?? null;
}

export const YATIRIM_TESVIK_ILLER = Object.keys(IL_BOLGE).sort((a, b) => a.localeCompare(b, "tr"));

// 2026 yeniden değerleme oranıyla güncellenmiş asgari sabit yatırım tutarları
// (taban Karar rakamı 12M/6M TL'nin yerini almıştır). Yıllık güncellenir —
// bkz. research/destek-uygunluk/yatirim-tesvik-belgesi.md "Asgari Yatırım Tutarları".
export function yatirimAsgariTutarTl(bolge: number): number {
  return bolge <= 2 ? 15_100_000 : 7_500_000;
}

// Yatırım Teşvik Belgesi EK-3 pozitif listesindeki bazı geniş hizmet sektörleri
// (üretim/imalat varsayımını çürüten kısım). Tam liste ~9 sayfa; burada formun
// otomatik ön-elemesi için en sık karşılaşılan NACE bölümleri tutuluyor.
// Kaynak: research/destek-uygunluk/yatirim-tesvik-belgesi.md "EK-3 tam kapsamı".
export function yatirimTesvikPozitifListedeMi(naceKodu?: string): boolean | null {
  if (!naceKodu) return null;
  const bolum = parseInt(naceKodu.slice(0, 2), 10);
  if (Number.isNaN(bolum)) return null;
  const KAPSAMDAKI_BOLUMLER = new Set([
    ...Array.from({ length: 33 - 10 + 1 }, (_, i) => 10 + i), // C - İmalat
    35, 36, // D/E - enerji, su
    49, 50, 51, 52, // H - ulaştırma/depolama
    55, // I - konaklama (turizm)
    61, 62, 63, // K - telekom/yazılım/bilişim
    72, // N - Ar-Ge
    85, // Q - eğitim
    86, 87, 88, // R - sağlık/bakım/kreş
  ]);
  return KAPSAMDAKI_BOLUMLER.has(bolum);
}
