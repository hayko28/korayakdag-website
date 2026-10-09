import { hazirlikBaslat, hazirlikUygula } from "./hazirlik";
import { DestekBasvuruGirdisi, ProgramSonucu, ProgramSonucuTaslak, SonucDurumu } from "./types";
import {
  kosgebIsGelistirmeDegerlendir,
  kosgebKapasiteGelistirmeDegerlendir,
  kosgebDijitalDonusumDegerlendir,
  kosgebYesilSanayiDegerlendir,
  kosgebStratejikUrunDegerlendir,
  kosgebKureselRekabetcilikDegerlendir,
  kosgebYondeDegerlendir,
  kosgebYapayZekaKrediDegerlendir,
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
  istihdamiKorumaDegerlendir,
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

// Her programı çalıştırmadan önce "ön hazırlık" toplayıcısını sıfırlar, sonra eksik kayıt/belge/rapor
// bilgilerini sonuca uygular (bkz. hazirlik.ts).
function calistir(fn: (g: DestekBasvuruGirdisi) => ProgramSonucuTaslak, g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  hazirlikBaslat();
  return hazirlikUygula(fn(g));
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
    taslaklar.push(calistir(kosgebIsGelistirmeDegerlendir, girdi));
    taslaklar.push(calistir(tubitak1812Degerlendir, girdi));
    taslaklar.push(calistir(kosgebTekmerDegerlendir, girdi));
  }
  // İmalat dışı işletmeler için Kapasite Geliştirme (NACE C), Küresel Rekabetçilik (orta-yüksek/yüksek
  // teknoloji ürün + Sanayi Sicil) ve Dijital Dönüşüm (NACE C) listeye hiç girmez; kırmızı kart olarak gösterilmez.
  if (girdi.yeniGirisimciMi !== true && girdi.imalatciMi !== false) {
    taslaklar.push(calistir(kosgebKapasiteGelistirmeDegerlendir, girdi));
    taslaklar.push(calistir(kosgebKureselRekabetcilikDegerlendir, girdi));
  }
  if (girdi.argeDurumu !== "yok") {
    taslaklar.push(calistir(tubitak1501Degerlendir, girdi));
    taslaklar.push(calistir(tubitak1507Degerlendir, girdi));
    taslaklar.push(calistir(tubitak1707Degerlendir, girdi));
    taslaklar.push(calistir(argeMerkeziStatusuDegerlendir, girdi));
    taslaklar.push(calistir(tasarimMerkeziStatusuDegerlendir, girdi));
    taslaklar.push(calistir(teknoparkStatusuDegerlendir, girdi));
  }
  if (girdi.donusumDurumu !== "yok") {
    if (girdi.imalatciMi !== false) taslaklar.push(calistir(kosgebDijitalDonusumDegerlendir, girdi));
    taslaklar.push(calistir(kosgebYesilSanayiDegerlendir, girdi));
    taslaklar.push(calistir(tubitak1832Degerlendir, girdi));
    taslaklar.push(calistir(tubitak1831Degerlendir, girdi));
  }
  taslaklar.push(calistir(kosgebYapayZekaKrediDegerlendir, girdi));
  if (girdi.yatirimPlanlaniyorMu !== false) {
    taslaklar.push(calistir(yatirimTesvikBelgesiDegerlendir, girdi));
    if (girdi.imalatciMi !== false) taslaklar.push(calistir(kosgebStratejikUrunDegerlendir, girdi));
  }
  if (girdi.imalatciMi !== false) {
    taslaklar.push(calistir(kosgebYondeDegerlendir, girdi));
    taslaklar.push(calistir(istihdamiKorumaDegerlendir, girdi));
  }
  if (girdi.ihracatDurumu !== "yok") {
    taslaklar.push(calistir(ticaretBakanligiIhracatDesteklerDegerlendir, girdi));
  }
  if (girdi.ihracatDurumu === "yapiyorum") {
    taslaklar.push(calistir(turqualityDegerlendir, girdi));
  }
  if (girdi.kirsalYatirimDurumu !== "yok") {
    taslaklar.push(calistir(tkdkDegerlendir, girdi));
  }

  const DURUM_SIRASI: Record<SonucDurumu, number> = { uygun: 0, kismen_uygun: 1, belirsiz: 2, uygun_degil: 3 };
  return taslaklar
    .map(puanEkle)
    .sort((a, b) => DURUM_SIRASI[a.durum] - DURUM_SIRASI[b.durum] || b.puan - a.puan);
}
