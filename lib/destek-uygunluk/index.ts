import { DestekBasvuruGirdisi, ProgramSonucu, ProgramSonucuTaslak, SonucDurumu } from "./types";
import {
  kosgebIsGelistirmeDegerlendir,
  kosgebKapasiteGelistirmeDegerlendir,
  kosgebArgeUrgeInovasyonDegerlendir,
  kosgebDijitalDonusumDegerlendir,
  kosgebYesilSanayiDegerlendir,
  kosgebStratejikUrunDegerlendir,
  kosgebKureselRekabetcilikDegerlendir,
  kosgebYondeDegerlendir,
  argeMerkeziStatusuDegerlendir,
  tasarimMerkeziStatusuDegerlendir,
  yatirimTesvikBelgesiDegerlendir,
  tubitak1501Degerlendir,
  tubitak1507Degerlendir,
  tubitak1832Degerlendir,
  tubitak1812Degerlendir,
  tubitak1707Degerlendir,
  tubitak1831Degerlendir,
  teknoparkStatusuDegerlendir,
  kosgebTekmerDegerlendir,
  ticaretBakanligiIhracatDesteklerDegerlendir,
  tkdkDegerlendir,
  turqualityDegerlendir,
} from "./programlar";

export * from "./types";
export { YATIRIM_TESVIK_ILLER } from "./yardimcilar";
export { katalogEslestir } from "./katalog";
export { onerilenHizmetleriBul, programaBagliHizmetleriBul, HIZMET_HEDEF_SECENEKLERI, type HizmetOnerisi } from "./hizmet-onerileri";

// Durum kategorisini 0-10 puan aralığına, gerekçe sayısına göre (o aralık
// içinde) küçük bir varyasyonla çevirir. Puan, mevcut kural motorunun
// ürettiği kategoriyi görselleştirmenin bir yolu — motorun kendisi
// değiştirilmedi, hiçbir programın uygunluk mantığı bu ekleme ile değişmez.
function puanHesapla(durum: SonucDurumu, gerekceSayisi: number): number {
  switch (durum) {
    case "uygun":
      return gerekceSayisi >= 4 ? 10 : 9;
    case "kismen_uygun":
      return 6 + Math.min(2, Math.floor(gerekceSayisi / 2));
    case "belirsiz":
      return 4 + Math.min(2, Math.floor(gerekceSayisi / 3));
    case "uygun_degil":
      return Math.max(0, 3 - gerekceSayisi);
  }
}

function puanEkle(taslak: ProgramSonucuTaslak): ProgramSonucu {
  return { ...taslak, puan: puanHesapla(taslak.durum, taslak.gerekceler.length) };
}

// Katman 1'deki huni (triyaj) cevaplarına göre hangi karmaşık program
// modüllerinin değerlendirmeye alınacağını belirler. Triyaj sorusu henüz
// cevaplanmamışsa (undefined) modül yine de değerlendirilir — emin olunana
// kadar bir programı erkenden ELEME riskine girilmez; sadece triyaj cevabı
// AÇIKÇA o modülü dışlıyorsa (örn. argeDurumu === "yok") modül hiç
// çalıştırılmaz ve sonuç listesine girmez.
export function tumProgramlariDegerlendir(girdi: DestekBasvuruGirdisi): ProgramSonucu[] {
  const taslaklar: ProgramSonucuTaslak[] = [];

  if (girdi.yeniGirisimciMi !== false) {
    taslaklar.push(kosgebIsGelistirmeDegerlendir(girdi));
    taslaklar.push(tubitak1812Degerlendir(girdi));
    taslaklar.push(kosgebTekmerDegerlendir(girdi));
  }
  if (girdi.yeniGirisimciMi !== true) {
    taslaklar.push(kosgebKapasiteGelistirmeDegerlendir(girdi));
    taslaklar.push(kosgebKureselRekabetcilikDegerlendir(girdi));
  }
  if (girdi.argeDurumu !== "yok") {
    taslaklar.push(kosgebArgeUrgeInovasyonDegerlendir(girdi));
    taslaklar.push(tubitak1507Degerlendir(girdi));
    taslaklar.push(tubitak1707Degerlendir(girdi));
    taslaklar.push(argeMerkeziStatusuDegerlendir(girdi));
    taslaklar.push(tasarimMerkeziStatusuDegerlendir(girdi));
    taslaklar.push(teknoparkStatusuDegerlendir(girdi));
  }
  if (girdi.argeDurumu === "var_kucuk" || girdi.argeDurumu === "var_kurumsal") {
    taslaklar.push(tubitak1501Degerlendir(girdi));
  }
  if (girdi.donusumDurumu !== "yok") {
    taslaklar.push(kosgebDijitalDonusumDegerlendir(girdi));
    taslaklar.push(kosgebYesilSanayiDegerlendir(girdi));
    taslaklar.push(tubitak1832Degerlendir(girdi));
    taslaklar.push(tubitak1831Degerlendir(girdi));
  }
  if (girdi.yatirimPlanlaniyorMu !== false) {
    taslaklar.push(yatirimTesvikBelgesiDegerlendir(girdi));
    taslaklar.push(kosgebStratejikUrunDegerlendir(girdi));
  }
  if (girdi.imalatciMi !== false) {
    taslaklar.push(kosgebYondeDegerlendir(girdi));
  }
  if (girdi.ihracatDurumu !== "yok") {
    taslaklar.push(ticaretBakanligiIhracatDesteklerDegerlendir(girdi));
  }
  if (girdi.ihracatDurumu === "yapiyorum") {
    taslaklar.push(turqualityDegerlendir(girdi));
  }
  if (girdi.kirsalYatirimDurumu !== "yok") {
    taslaklar.push(tkdkDegerlendir(girdi));
  }

  const DURUM_SIRASI: Record<SonucDurumu, number> = { uygun: 0, kismen_uygun: 1, belirsiz: 2, uygun_degil: 3 };
  return taslaklar
    .map(puanEkle)
    .sort((a, b) => DURUM_SIRASI[a.durum] - DURUM_SIRASI[b.durum] || b.puan - a.puan);
}
