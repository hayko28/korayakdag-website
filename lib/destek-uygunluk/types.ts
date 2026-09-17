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

// Değerlendirme fonksiyonlarının ürettiği ham sonuç (henüz puansız).
export type ProgramSonucuTaslak = {
  programId: string;
  programAdi: string;
  kurum: string;
  durum: SonucDurumu;
  ozet: string;
  gerekceler: string[];
  uyarilar?: string[];
};

// index.ts'te taslağa puan eklenerek üretilen, arayüze giden nihai sonuç.
export type ProgramSonucu = ProgramSonucuTaslak & {
  puan: number; // 0-10, durum kategorisi içinde gerekçe sayısına göre türetilir
};

export type SirketTuru =
  | "sahis"
  | "limited"
  | "anonim"
  | "diger_sermaye"
  | "dernek_vakif_kooperatif_birlik_adi_ortaklik";

export type OncelikliGrup = "kadin" | "genc" | "engelli" | "gazi_sehit_yakini" | "yok";

// 11/05/2026 tarihli Yönerge güncellemesiyle (MADDE 13/9) daraltıldı — eskiden
// 6 istisna kategorisi vardı (Ar-Ge tamamlama, Ar-Ge Merkezi, TÜR belgesi,
// TGB, TEKMER, tedarikçi sipariş sözleşmesi), artık sadece bu ikisi geçerli.
// Kaynak: research/destek-uygunluk/kosgeb-kapasite-gelistirme.md "GÜNCELLEME (2026-09-17)".
export type HizliBuyumeMuafiyeti =
  | "yok"
  | "teknogirisim_rozeti"
  | "tedarikci_gelistirme_isbirligi";

export type YatirimTuru =
  | "komple_yeni"
  | "tevsi"
  | "modernizasyon"
  | "urun_cesitlendirme"
  | "entegrasyon"
  | "nakil";

export type ArgeFaaliyetiKaynagi = "tamamen_kurulus_ici" | "kismen_disaridan" | "buyuk_olcude_disaridan";

export type ProjeNiteligi = "yeni_urun" | "mevcut_urun_gelistirme" | "uretim_teknolojisi_gelistirme" | "belirsiz";

// TÜBİTAK 1501 MADDE 10/2 - 13 ve 1507 MADDE 9/2 - 12 (2026 Uygulama Esasları, birincil
// kaynaktan doğrulandı, 2026-09-17): makine/teçhizat/tesis alımının projedeki rolüne göre
// üç farklı sonuç var — tek bir "yatırım ağırlıklı mı?" evet/hayır sorusu bunu ayırt edemiyor.
export type UretimYatirimNiteligi =
  | "yok" // projede böyle bir alım yok — kritere tabi değil
  | "arge_hizmetinde" // tasarım/prototip/pilot tesis/test-ölçüm cihazı → tam (%100) desteklenir
  | "seri_uretimde_de_kullanilacak" // Ar-Ge sonrası seri üretimde de kullanılacak zorunlu ekipman/kalıp → oransal desteklenir
  | "esas_amac_uretim_kapasitesi"; // projenin esas amacı üretim kapasitesi kurmak, Ar-Ge içeriği yok/zayıf → RET (MADDE 10/2-1501, 9/2-1507)

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

// IPARD III'ün resmi tedbir yapısı (tkdk.gov.tr, birincil kaynaktan doğrulandı, 2026-09-17) —
// "yenilenebilir_enerji" ve "kirsal_turizm" ayrı tedbir DEĞİL, M7/302'nin alt yatırım konuları.
export type TkdkSektoru =
  | "m1_fiziki_varlik" // M1/101 - Tarımsal İşletmelerin Fiziki Varlıkları
  | "m3_isleme_pazarlama" // M3/103 - Tarım-Balıkçılık Ürünlerinin İşlenmesi ve Pazarlanması
  | "m4_cevre_iklim" // M4/201 - Tarım-Çevre-İklim ve Organik Tarım
  | "m5_leader" // M5/202 - LEADER Yerel Kalkınma
  | "m7_cesitlendirme" // M7/302 - Çiftlik Faaliyetlerinin Çeşitlendirilmesi (kırsal turizm, yenilenebilir enerji vb. dahil)
  | "diger";

// Ar-Ge "olgunluk seviyesi" — huni sorusu. "yok" tüm Ar-Ge programlarını eler;
// "planliyorum" (henüz Ar-Ge yok ama başlanacak) TÜBİTAK 1507 ve KOSGEB
// Ar-Ge/Ür-Ge/İnovasyon'un asıl hedef kitlesidir (bu programlar "başlangıç"
// için tasarlanmış, "yok" ile karıştırılmamalı); "var_kurumsal" TÜBİTAK 1501'i
// ve Ar-Ge Merkezi bağlamını işaret eder.
export type ArgeDurumu = "yok" | "planliyorum" | "var_kucuk" | "var_kurumsal";

export type IhracatDurumu = "yok" | "planliyorum" | "yapiyorum";

export type DonusumDurumu = "yok" | "planliyorum" | "yapiyorum";

export type KirsalYatirimDurumu = "yok" | "planliyorum" | "yapiyorum";

// KOSGEB Yeşil Sanayi Destek Programı Yönergesi Rev.No:04 (birincil kaynak, tam metin
// pdftotext ile okundu, 2026-09-17) — resmi ayrım 4 değil 2 alt bileşen; eski "yenilenebilir
// enerji/kaynak verimliliği/atık yönetimi/döngüsel ekonomi" sınıflaması resmi terim değildi.
export type YesilSanayiProjeTemasi =
  | "alt_bilesen_1_1" // Enerji sistemlerinin karbonsuzlaştırılması (GES vb.) — destek oranı %60
  | "alt_bilesen_1_2" // İklim eylemi, kaynak verimliliği, sürdürülebilirlik — destek oranı %70
  | "emin_degil";

// KOSGEB Stratejik Ürün Destek Programı — Bakanlık ön başvuru aşaması (birincil kaynak,
// UE-13/08 Rev. 24/03/2026, MADDE 14-17).
export type StratejikUrunBakanlikBasvuruDurumu =
  | "yapmadim"
  | "sonuc_bekliyor"
  | "kesin_basvuruya_davet_edildim"
  | "reddedildim";

// KOSGEB Küresel Rekabetçilik Destek Programı (UE-38/01, Rev. 07/03/2025) — KOBİGEL'in
// devamı DEĞİL. Dört alternatif uygunluk yolundan biri (MADDE 6) sağlanmalı.
export type KureselRekabetcilikKriteri =
  | "hizli_buyuyen_teknoloji_ihracat" // hızlı büyüyen + orta-yüksek/yüksek teknoloji + 3 yıl art arda ihracat artışı
  | "hizli_buyuyen_ihracat_arge" // hızlı büyüyen + 3 yıl art arda ihracat VE Ar-Ge artışı
  | "yuksek_teknoloji_oncelikli_urun" // yüksek teknoloji + orta ölçekli + Hamle öncelikli ürün listesi + Sanayi Sicil Belgesi
  | "turcorn_100" // Turcorn 100 Programına kabul edilmiş
  | "hicbiri";

export type YondeHizmetTuru =
  | "dijital_donusum_yol_haritasi"
  | "surdurulebilirlik_raporlamasi"
  | "yoda_analizi"
  | "birden_fazla";

// TÜBİTAK 1812 (BiGG Yatırım) — 1501/1507/1832'den ayrı, henüz şirketi olmayan girişimciye
// yönelik bir mekanizma olduğu için kendi "hangi aşamadasınız" alanı.
export type GirisimciSirketDurumu =
  | "henuz_sirket_yok"
  | "yeni_kurulmus_girisim_sirketi"
  | "kurulu_sirket_3yil_uzeri";

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
  kirsalYatirimDurumu?: KirsalYatirimDurumu; // TKDK gelecekteki planı da kapsar, sadece mevcut yatırımı değil

  // KOSGEB İş Geliştirme Desteği
  kosgebVeriTabaniKayitliMi?: boolean;
  ileriGirisimciEgitimiTamamlandiMi?: boolean;
  ortaklikPayiYuzde?: number;
  girisimciMunferitTemsilYetkisiVarMi?: boolean;
  oncelikliGrup?: OncelikliGrup;
  isGelistirmeDestegiDahaOnceKullanildiMi?: boolean;

  // KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı — Ar-Ge/İnovasyon Projesi'nde
  // girişimciler ömür boyu en fazla 1 kez yararlanabilir (KOBİ'ler için sınırsız).
  argeUrgeGirisimciDahaOnceKullanildiMi?: boolean;

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
  uretimYatirimNiteligi?: UretimYatirimNiteligi;
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
  // MADDE 20.2 (1832 Çağrı Duyurusu): true ise proje esas itibariyle endüstriyel ölçekte
  // bir kapasite yatırımı (ret sebebi) — pilot/demonstrasyon ölçekli ekipman alımından
  // (Madde 6, desteklenir) kasıtlı olarak ayrı bir alan; 1501/1507'nin
  // uretimAltyapisiYatirimiAgirlikliMi alanıyla KARIŞTIRILMAMALI.
  projeEndustriyelOlcekYatirimMi?: boolean;

  // Yatırım Teşvik Belgesi — ek kriterler
  yuksekVeyaOrtaYuksekTeknolojiUrunMu?: boolean;

  // Ticaret Bakanlığı İhracat Destekleri (5973 / 10962 sayılı Kararlar)
  ihracatTuru?: IhracatTuru;
  ihracatciBirligiUyesiMi?: boolean;
  dysKayitliMi?: boolean;

  // KOBİ Dijital Dönüşüm Destek Programı
  ddxRaporuVarMi?: boolean;
  maliKarneVarMi?: boolean;
  // Yönerge Rev.05 MADDE 7/7 (birincil kaynaktan doğrulandı, 2026-09-18): son mali yıl
  // Öz Kaynaklar Toplamı pozitif VE son 3 mali yıldan en az birinde Faaliyet Kârı pozitif
  // olmalı — sert bir ön koşul, önceden yalnızca uyarı metninde geçip hiç sorulmuyordu.
  maliYeterlilikSaglaniyorMu?: boolean;

  // Yeşil Sanayi Destek Programı (Dijital Dönüşüm'den AYRI bir program — 2026-09-17'de ayrıldı)
  yesilSanayiProjeTemasi?: YesilSanayiProjeTemasi;

  // TKDK (IPARD III) Kırsal Kalkınma Destekleri
  basvuranYasi?: number;
  tkdkDesteklenenIldeMi?: boolean;
  tkdkSektoru?: TkdkSektoru;
  planlananProjeButcesiEuro?: number;

  // Turquality / Marka Destek Programı
  turqualitySon3YilOrtalamaIhracatUsd?: number;
  turqualitySon1YilIhracatUsd?: number; // 10M USD istisnası için
  markaYurtIciTescilVarMi?: boolean; // en az 1 yıl önce alınmış
  markaYurtDisiTescilVarMi?: boolean; // Madrid Protokolü ülkesinde
  markaYurtDisiTescilYurtIciTescildenOnceMi?: boolean; // MADDE 14/1-c: yurt dışı BAŞVURU tarihi, yurt içi BAŞVURU tarihinden önce ise true — aynı tarih diskalifiye ETMEZ

  // KOSGEB Stratejik Ürün Destek Programı (UE-13/08, Rev. 24/03/2026, birincil kaynak) —
  // iki aşamalı: Bakanlık ön başvuru (Teknoloji Odaklı Sanayi Hamlesi) → KOSGEB.
  stratejikUrunBakanlikBasvuruDurumu?: StratejikUrunBakanlikBasvuruDurumu;
  stratejikUrunOncelikliListede?: boolean;
  yeniPersonelIstihdamPlaniVarMi?: boolean; // yalnızca bilgilendirici (personel gideri desteği)
  yerliMaliBelgesiPlaniVarMi?: boolean; // yalnızca bilgilendirici (destek oranı %45'e çıkar)

  // KOSGEB Küresel Rekabetçilik Destek Programı (UE-38/01, Rev. 07/03/2025) — KOBİGEL'in
  // devamı DEĞİL, 2025'te başlatılan ayrı/yeni bir kredi bazlı program.
  kureselRekabetcilikKriteri?: KureselRekabetcilikKriteri;
  kureselRekabetcilikKrediTutariTl?: number;
  kureselRekabetcilikDahaOnceKullanildiMi?: boolean;

  // KOSGEB YÖNDE - Yönderlik ve Değerlendirme Destek Programı — danışmanlık/analiz hizmeti
  // (dijital dönüşüm yol haritası, sürdürülebilirlik raporlaması, YODA), yatırım değil.
  yondeDahaOnceYararlanildiMi?: boolean;
  yondeHizmetTuru?: YondeHizmetTuru;

  // Ar-Ge Merkezi statüsü (5746 sayılı Kanun) — hem "statüsü zaten var, teşvikleri
  // netleştir" hem "statüye aday mıyım" senaryosunu kapsar.
  argeMerkeziStatusuVarMi?: boolean;
  tamZamanEsdegerArgePersoneliSayisi?: number;
  argeFaaliyetleriAyriBirimdeMi?: boolean;

  // Tasarım Merkezi statüsü (5746 sayılı Kanun, Ar-Ge Merkezi'nden ayrı, daha düşük personel
  // eşiği) — aynı ikili senaryo (mevcut statü / adaylık).
  tasarimMerkeziStatusuVarMi?: boolean;
  tasarimPersoneliSayisiTze?: number;
  tasarimBirimiAyriOrganizeMi?: boolean;

  // TÜBİTAK 1812 - Yatırım Tabanlı Girişimcilik Destek Programı (BiGG Yatırım) — 1501/1507/
  // 1832'den TAMAMEN AYRI bir mekanizma: kurulu şirketlere hibe değil, henüz şirketi olmayan
  // girişimciye kuluçka merkezi aracılığıyla hisse karşılığı doğrudan TÜBİTAK yatırımı.
  girisimciSirketDurumu?: GirisimciSirketDurumu;
  kuluckaFaz1TamamlandiMi?: boolean;
  hisseKarsiligiYatirimKabulEdiyorMu?: boolean;

  // TÜBİTAK 1707 - Siparişe Dayalı Ar-Ge Projeleri için KOBİ Destekleme Çağrısı — üçlü yapı
  // (Müşteri Kuruluş + Tedarikçi KOBİ + TÜBİTAK), 1501/1507'den farklı, kendi bütçe/ilişki
  // alanları var (aynı proje 1501/1507 ile paylaşılan alanları kullanmaz).
  musteriKurulusVarMi?: boolean;
  musteriKurulusIliskiliTarafMi?: boolean; // ortaklık/sermaye/yönetim bağı veya akrabalık varsa doğrudan ret
  musteriKurulusFinansmanTaahhuduVarMi?: boolean; // giderlerin en az %40'ını karşılama taahhüdü
  siparisArGeProjeButcesiTl?: number;

  // TÜBİTAK 1831 - Yeşil İnovasyon Teknoloji Mentörlük Programı — Ar-Ge projesi değil,
  // TÜBİTAK'ın "Çözüm Ortakları" listesinden alınan danışmanlık/mentörlük hizmeti.
  cozumOrtagiListedeMi?: boolean;
  ortakliBasvuruMu1831?: boolean; // MADDE 10.2: ortaklı başvuru kabul edilmiyor
  basvuru1831DahaOnceKacKezKullanildi?: number; // MADDE 10.3: en fazla 3 kez
  ayniCozumOrtagiIleKacProje?: number; // aynı ortakla en fazla 2 defa

  // Lead / iletişim
  iletisimAdSoyad?: string;
  iletisimEposta?: string;
  iletisimTelefon?: string;
  ekAciklama?: string; // serbest metin — kural motoru kullanmaz, yalnızca değerlendirme sırasında bağlam için saklanır
  // Destek/program kural motoru (bu dosyadaki programlar.ts) bu alanı HİÇ okumaz —
  // yalnızca hizmet-onerileri.ts'teki danışmanlık hizmeti eşleştirmesi için kullanılır.
  // Şirket Değerleme, M&A, Yurt Dışı Şirket Kuruluşu gibi hizmetlerin mevcut huni
  // sorularında (Ar-Ge/ihracat/yatırım durumu vb.) karşılığı olmadığı için eklendi.
  hizmetHedefleri?: string[];
}
