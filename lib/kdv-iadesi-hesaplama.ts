// KDV Genel Uygulama Tebliği'ndeki "azami iade edilebilir vergi" mantığı:
// iade tutarı, iade hakkı doğuran işlem bedelinin ilgili KDV oranıyla
// çarpımını (azami tutar) AŞAMAZ; yüklenilen KDV bu tutardan düşükse
// gerçek yüklenilen KDV esas alınır (ikisinin küçük olanı).
export type KdvOrani = {
  value: string;
  label: string;
  oran: number;
};

export const KDV_ORANLARI: KdvOrani[] = [
  { value: "yirmi", label: "%20 (Genel Oran)", oran: 0.2 },
  { value: "on", label: "%10 (İndirimli Oran)", oran: 0.1 },
  { value: "bir", label: "%1 (İndirimli Oran)", oran: 0.01 },
];

export function kdvOraniBul(value: string): KdvOrani {
  return KDV_ORANLARI.find((k) => k.value === value) ?? KDV_ORANLARI[0];
}

export type KdvIadesiGirdisi = {
  islemBedeliTl: number;
  kdvOraniValue: string;
  yuklenilenKdvTl: number;
};

export type KdvIadesiSonucu = {
  kdvOrani: KdvOrani;
  azamiIadeTutari: number;
  tahminiIadeTutari: number;
  sinirlayanFaktor: "azami" | "yuklenilen";
};

export function hesaplaKdvIadesi(girdi: KdvIadesiGirdisi): KdvIadesiSonucu {
  const islemBedeli = Math.max(0, girdi.islemBedeliTl);
  const yuklenilenKdv = Math.max(0, girdi.yuklenilenKdvTl);
  const kdvOrani = kdvOraniBul(girdi.kdvOraniValue);

  const azamiIadeTutari = islemBedeli * kdvOrani.oran;
  const tahminiIadeTutari = Math.min(azamiIadeTutari, yuklenilenKdv);
  const sinirlayanFaktor: "azami" | "yuklenilen" =
    azamiIadeTutari <= yuklenilenKdv ? "azami" : "yuklenilen";

  return { kdvOrani, azamiIadeTutari, tahminiIadeTutari, sinirlayanFaktor };
}

export function formatTl(deger: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 2,
  }).format(deger);
}
