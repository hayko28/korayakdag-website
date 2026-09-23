// Gösterge niteliğinde kazanç çarpanları — halka açık/özel piyasa işlemlerinde
// sektörlere göre sık gözlenen aralıkların genel bir özetidir, resmi bir kaynağa
// dayanmaz ve KOBİ ölçeğinde gerçek çarpan; ölçek, büyüme, kârlılık ve emsal
// işlem verisine göre bu aralığın dışına da çıkabilir.
export type SektorCarpani = {
  value: string;
  label: string;
  dusuk: number;
  yuksek: number;
};

export const SEKTOR_CARPANLARI: SektorCarpani[] = [
  { value: "yazilim_teknoloji", label: "Yazılım / SaaS / Teknoloji", dusuk: 4, yuksek: 8 },
  { value: "e-ticaret", label: "E-ticaret / Dijital Perakende", dusuk: 3, yuksek: 6 },
  { value: "uretim_imalat", label: "Üretim / İmalat", dusuk: 3, yuksek: 5 },
  { value: "hizmet_danismanlik", label: "Hizmet / Danışmanlık", dusuk: 2, yuksek: 4 },
  { value: "perakende_ticaret", label: "Perakende / Ticaret", dusuk: 2, yuksek: 4 },
  { value: "insaat_gayrimenkul", label: "İnşaat / Gayrimenkul", dusuk: 2, yuksek: 3.5 },
  { value: "lojistik_nakliye", label: "Lojistik / Nakliye", dusuk: 3, yuksek: 5 },
  { value: "gida_restoran", label: "Gıda / Restoran / HoReCa", dusuk: 2, yuksek: 3.5 },
  { value: "saglik_medikal", label: "Sağlık / Medikal", dusuk: 3, yuksek: 6 },
  { value: "tarim_hayvancilik", label: "Tarım / Hayvancılık", dusuk: 2, yuksek: 3.5 },
  { value: "diger", label: "Diğer / Emin Değilim", dusuk: 2.5, yuksek: 4.5 },
];

export function sektorBul(value: string): SektorCarpani {
  return SEKTOR_CARPANLARI.find((s) => s.value === value) ?? SEKTOR_CARPANLARI[SEKTOR_CARPANLARI.length - 1];
}

export type DegerlemeGirdisi = {
  yillikNetKarTl: number;
  sektor: string;
  toplamVarlikTl?: number;
  toplamBorcTl?: number;
};

export type DegerlemeSonucu = {
  sektor: SektorCarpani;
  kazancCarpaniDusuk: number;
  kazancCarpaniYuksek: number;
  netAktifDeger?: number;
};

export function hesaplaDegerleme(girdi: DegerlemeGirdisi): DegerlemeSonucu {
  const sektor = sektorBul(girdi.sektor);
  const netKar = Math.max(0, girdi.yillikNetKarTl);

  const netAktifDeger =
    girdi.toplamVarlikTl !== undefined && girdi.toplamBorcTl !== undefined
      ? girdi.toplamVarlikTl - girdi.toplamBorcTl
      : undefined;

  return {
    sektor,
    kazancCarpaniDusuk: netKar * sektor.dusuk,
    kazancCarpaniYuksek: netKar * sektor.yuksek,
    netAktifDeger,
  };
}

export function formatTl(deger: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(deger);
}
