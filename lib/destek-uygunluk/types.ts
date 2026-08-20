export type SonucDurumu = "uygun" | "kismen_uygun" | "uygun_degil" | "belirsiz";

export type ProgramSonucu = {
  programId: string;
  programAdi: string;
  kurum: string;
  durum: SonucDurumu;
  ozet: string;
  gerekceler: string[];
  uyarilar?: string[];
};

export type SirketTuru =
  | "sahis"
  | "limited"
  | "anonim"
  | "diger_sermaye"
  | "dernek_vakif_kooperatif_birlik_adi_ortaklik";

export type OncelikliGrup = "kadin" | "genc" | "engelli" | "gazi_sehit_yakini" | "yok";

export type HizliBuyumeMuafiyeti =
  | "yok"
  | "kosgeb_tubitak_arge_tamamlandi"
  | "arge_merkezi_5746"
  | "tur_belgesi"
  | "tgb_faaliyet_4691"
  | "tekmer_faaliyet"
  | "tedarikci_siparis_sozlesmesi";

export type YatirimTuru =
  | "komple_yeni"
  | "tevsi"
  | "modernizasyon"
  | "urun_cesitlendirme"
  | "entegrasyon"
  | "nakil";

export type ArgeFaaliyetiKaynagi = "tamamen_kurulus_ici" | "kismen_disaridan" | "buyuk_olcude_disaridan";

export type ProjeNiteligi = "yeni_urun" | "mevcut_urun_gelistirme" | "uretim_teknolojisi_gelistirme" | "belirsiz";

// Tüm alanlar opsiyonel: Katman 1 (ortak) doldurulmadan hiçbir program
// değerlendirilemez, Katman 2 (programa özel) alanları boş bırakılan
// programlar "belirsiz" sonuç döner, "uygun değil" değil.
export interface DestekBasvuruGirdisi {
  // Katman 1 — ortak şirket bilgileri
  sirketUnvani?: string;
  sirketTuru?: SirketTuru;
  kurulusTarihi?: string; // ISO tarih (YYYY-MM-DD)
  naceKodu?: string; // örn. "62.01"
  calisanSayisi?: number;
  yillikNetSatisHasilatiTl?: number;
  maliBilancoTl?: number;
  turkiyedeYerlesikMi?: boolean;

  // KOSGEB İş Geliştirme Desteği
  kosgebVeriTabaniKayitliMi?: boolean;
  ileriGirisimciEgitimiTamamlandiMi?: boolean;
  ortaklikPayiYuzde?: number;
  girisimciMunferitTemsilYetkisiVarMi?: boolean;
  oncelikliGrup?: OncelikliGrup;
  isGelistirmeDestegiDahaOnceKullanildiMi?: boolean;

  // KOSGEB Kapasite Geliştirme Destek Programı
  kapasiteProgramiDahaOnceKullanildiMi?: boolean;
  sanayiSicilBelgesiVarMi?: boolean;
  yodaRaporuVarMi?: boolean;
  hizliBuyumeMuafiyeti?: HizliBuyumeMuafiyeti;
  son3YilCalisanSayilari?: [number, number, number];
  son3YilNetSatisTl?: [number, number, number];
  talepEdilenKrediTutariTl?: number;

  // Yatırım Teşvik Belgesi
  yatirimKonusuNaceKodu?: string;
  yatirimIli?: string;
  planlananSabitYatirimTutariTl?: number;
  yatirimTuru?: YatirimTuru;
  dijitalVeyaYesilDonusumMu?: boolean;
  mevcutTesisVarMi?: boolean;

  // TÜBİTAK 1501 ve 1507 (ortak Ar-Ge şartları)
  projeKonusu?: string;
  projeNiteligi?: ProjeNiteligi;
  uretimAltyapisiYatirimiAgirlikliMi?: boolean;
  projeEkibindeLisansMezunuVarMi?: boolean;
  argeFaaliyetiKaynagi?: ArgeFaaliyetiKaynagi;
  talepEdilenProjeButcesiTl?: number;

  // TÜBİTAK 1507'ye özel
  teydebBekleyenProjeSayisi?: number;
  teydebOnayliProjeSayisi?: number;
  ortakliBasvuruMu?: boolean;
  teknogirisimSermayeSirketiMi?: boolean;

  // Lead / iletişim
  iletisimAdSoyad?: string;
  iletisimEposta?: string;
  iletisimTelefon?: string;
}
