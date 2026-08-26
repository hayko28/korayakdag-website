import { DestekBasvuruGirdisi, ProgramSonucu } from "./types";
import {
  kosgebIsGelistirmeDegerlendir,
  kosgebKapasiteGelistirmeDegerlendir,
  kosgebArgeUrgeInovasyonDegerlendir,
  kosgebDijitalYesilDonusumDegerlendir,
  yatirimTesvikBelgesiDegerlendir,
  tubitak1501Degerlendir,
  tubitak1507Degerlendir,
  tubitak1832Degerlendir,
  ticaretBakanligiIhracatDesteklerDegerlendir,
  tkdkDegerlendir,
} from "./programlar";

export * from "./types";
export { YATIRIM_TESVIK_ILLER } from "./yardimcilar";
export { katalogEslestir } from "./katalog";

// Katman 1'deki huni (triyaj) cevaplarına göre hangi karmaşık program
// modüllerinin değerlendirmeye alınacağını belirler. Triyaj sorusu henüz
// cevaplanmamışsa (undefined) modül yine de değerlendirilir — emin olunana
// kadar bir programı erkenden ELEME riskine girilmez; sadece triyaj cevabı
// AÇIKÇA o modülü dışlıyorsa (örn. argeDurumu === "yok") modül hiç
// çalıştırılmaz ve sonuç listesine girmez.
export function tumProgramlariDegerlendir(girdi: DestekBasvuruGirdisi): ProgramSonucu[] {
  const sonuclar: ProgramSonucu[] = [];

  if (girdi.yeniGirisimciMi !== false) {
    sonuclar.push(kosgebIsGelistirmeDegerlendir(girdi));
  }
  if (girdi.yeniGirisimciMi !== true) {
    sonuclar.push(kosgebKapasiteGelistirmeDegerlendir(girdi));
  }
  if (girdi.argeDurumu !== "yok") {
    sonuclar.push(kosgebArgeUrgeInovasyonDegerlendir(girdi));
    sonuclar.push(tubitak1507Degerlendir(girdi));
  }
  if (girdi.argeDurumu === "var_kucuk" || girdi.argeDurumu === "var_kurumsal") {
    sonuclar.push(tubitak1501Degerlendir(girdi));
  }
  if (girdi.donusumDurumu !== "yok") {
    sonuclar.push(kosgebDijitalYesilDonusumDegerlendir(girdi));
    sonuclar.push(tubitak1832Degerlendir(girdi));
  }
  if (girdi.yatirimPlanlaniyorMu !== false) {
    sonuclar.push(yatirimTesvikBelgesiDegerlendir(girdi));
  }
  if (girdi.ihracatDurumu !== "yok") {
    sonuclar.push(ticaretBakanligiIhracatDesteklerDegerlendir(girdi));
  }
  if (girdi.kirsalYatirimVarMi !== false) {
    sonuclar.push(tkdkDegerlendir(girdi));
  }

  return sonuclar;
}
