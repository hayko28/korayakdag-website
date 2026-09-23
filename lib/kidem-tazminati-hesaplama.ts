// 2026 2. dönem (1 Temmuz - 31 Aralık) kıdem tazminatı tavanı — Hazine ve Maliye
// Bakanlığı'nın memur maaş katsayısı güncellemesine bağlı olarak Ocak ve Temmuz
// aylarında değişir. Kaynak: /blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026
export const KIDEM_TAZMINATI_TAVANI_TL = 73729.87;
export const KIDEM_TAZMINATI_TAVANI_DONEMI = "1 Temmuz - 31 Aralık 2026";

// Kıdem tazminatı gelir vergisinden istisnadır, yalnızca damga vergisine tabidir.
export const DAMGA_VERGISI_ORANI = 0.00759;

export type KidemTazminatiGirdisi = {
  brutAylikUcretTl: number;
  kidemYili: number;
  kidemAyi: number;
};

export type KidemTazminatiSonucu = {
  hesaplamayaEsasUcret: number;
  tavanUygulandiMi: boolean;
  tamYilTutari: number;
  kistAyTutari: number;
  brutTutar: number;
  damgaVergisi: number;
  netTutar: number;
};

export function hesaplaKidemTazminati(girdi: KidemTazminatiGirdisi): KidemTazminatiSonucu {
  const ucret = Math.max(0, girdi.brutAylikUcretTl);
  const yil = Math.max(0, Math.floor(girdi.kidemYili));
  const ay = Math.min(11, Math.max(0, Math.floor(girdi.kidemAyi)));

  const tavanUygulandiMi = ucret > KIDEM_TAZMINATI_TAVANI_TL;
  const hesaplamayaEsasUcret = tavanUygulandiMi ? KIDEM_TAZMINATI_TAVANI_TL : ucret;

  const tamYilTutari = hesaplamayaEsasUcret * yil;
  const kistAyTutari = (hesaplamayaEsasUcret / 12) * ay;
  const brutTutar = tamYilTutari + kistAyTutari;
  const damgaVergisi = brutTutar * DAMGA_VERGISI_ORANI;
  const netTutar = brutTutar - damgaVergisi;

  return {
    hesaplamayaEsasUcret,
    tavanUygulandiMi,
    tamYilTutari,
    kistAyTutari,
    brutTutar,
    damgaVergisi,
    netTutar,
  };
}

export function formatTl(deger: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(deger);
}
