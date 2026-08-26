export type SonucDurumu = "uygun" | "kismen_uygun" | "uygun_degil" | "belirsiz";

// Katman 3 — research/tesvik-takip/programlar.json'daki genel katalogdan
// (160+ program) huni cevaplarına göre basit etiket eşleştirmesiyle çıkarılan
// öneriler. Bunlar kural motoruyla değerlendirilmez, sadece "bunlar da
// ilginizi çekebilir" şeklinde gösterilir — kesin uygunluk iddiası taşımaz.
export type KatalogEslesme = {
  ad: string;
  kurum: string;
  sonBasvuruTarihi: string | null;
  kaynakUrl: string;
};

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

// TÜBİTAK 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğunun 3 ana
// hedef kategorisi (17 teknoloji alanının üst grubu). Kaynak: kullanıcı
// tarafından iletilen "Öncelikli Ar-Ge ve Yenilik Konuları" kataloğu (2026-2028).
export type TubitakOncelikliAlanKategorisi =
  | "endustride_teknolojik_sicrama"
  | "dijital_liderlik"
  | "yesil_donusum"
  | "kapsam_disi"
  | "emin_degil";

export type IhracatTuru = "fiziksel_mal" | "hizmet" | "her_ikisi";

export type TkdkSektoru = "hayvancilik" | "tarimsal_uretim" | "gida_isleme" | "yenilenebilir_enerji" | "kirsal_turizm" | "diger";

// Ar-Ge "olgunluk seviyesi" — huni sorusu. "yok" tüm Ar-Ge programlarını eler;
// "planliyorum" (henüz Ar-Ge yok ama başlanacak) TÜBİTAK 1507 ve KOSGEB
// Ar-Ge/Ür-Ge/İnovasyon'un asıl hedef kitlesidir (bu programlar "başlangıç"
// için tasarlanmış, "yok" ile karıştırılmamalı); "var_kurumsal" TÜBİTAK 1501'i
// ve Ar-Ge Merkezi bağlamını işaret eder.
export type ArgeDurumu = "yok" | "planliyorum" | "var_kucuk" | "var_kurumsal";

export type IhracatDurumu = "yok" | "planliyorum" | "yapiyorum";

export type DonusumDurumu = "yok" | "planliyorum" | "yapiyorum";

// Tüm alanlar opsiyonel: Katman 1 (ortak + huni) doldurulmadan hiçbir program
// değerlendirilemez, Katman 2 (programa özel, sadece huniden geçen adaylara
// sorulur) alanları boş bırakılan programlar "belirsiz" sonuç döner, "uygun
// değil" değil.
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

  // Katman 1 — huni (triyaj) soruları: hangi karmaşık program modüllerinin
  // gösterileceğini ve genel kataloğun hangi kalemlerini öne çıkaracağını
  // belirler. Cevaplanmayan bir huni sorusu, ilgili modülü/katalog kalemini
  // basitçe göstermez (yanlış "uygun" riski yerine "gösterme" tercih edilir).
  yeniGirisimciMi?: boolean; // kuruluş <3 yıl veya henüz iş fikri aşamasında
  imalatciMi?: boolean;
  yatirimPlanlaniyorMu?: boolean; // yeni tesis/genişleme/modernizasyon yatırımı
  argeDurumu?: ArgeDurumu;
  ihracatDurumu?: IhracatDurumu;
  donusumDurumu?: DonusumDurumu; // dijital veya yeşil dönüşüm
  kirsalYatirimVarMi?: boolean;

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

  // TÜBİTAK 1501/1507/1832 ortak — Öncelikli Ar-Ge ve Yenilik Konuları uyumu
  argeOncelikliAlanKategorisi?: TubitakOncelikliAlanKategorisi;

  // TÜBİTAK 1832 - Sanayide Yeşil Dönüşüm
  projeYesilDonusumHedefliMi?: boolean;

  // Yatırım Teşvik Belgesi — ek kriterler
  yuksekVeyaOrtaYuksekTeknolojiUrunMu?: boolean;

  // Ticaret Bakanlığı İhracat Destekleri (5973 / 10962 sayılı Kararlar)
  ihracatTuru?: IhracatTuru;
  ihracatciBirligiUyesiMi?: boolean;
  dysKayitliMi?: boolean;

  // KOSGEB Dijital ve Yeşil Dönüşüm Destek Programı (KOBİ Dijital Dönüşüm DP)
  ddxRaporuVarMi?: boolean;
  maliKarneVarMi?: boolean;

  // TKDK (IPARD III) Kırsal Kalkınma Destekleri
  basvuranYasi?: number;
  tkdkDesteklenenIldeMi?: boolean;
  tkdkSektoru?: TkdkSektoru;
  planlananProjeButcesiEuro?: number;

  // Lead / iletişim
  iletisimAdSoyad?: string;
  iletisimEposta?: string;
  iletisimTelefon?: string;
}
