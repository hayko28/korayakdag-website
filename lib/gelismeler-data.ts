export interface GelismeItem {
  kurum: string;
  tarih: string;
  /** Bu öğenin Güncel Gelişmeler akışına eklendiği tarih (YYYY-MM-DD).
   * `tarih` alanı gelişmenin gerçekleştiği tarihi (metin olarak) gösterir;
   * `eklendiTarihi` ise akıştaki "son 45 gün" görünürlük/arşiv filtresinde
   * kullanılır — ikisi farklı olabilir (örn. Kasım 2025'te yayımlanan bir
   * tebliğ, akışa Ağustos 2026'da eklenmiş olabilir). */
  eklendiTarihi: string;
  baslik: string;
  ozet: string;
  kaynakUrl: string;
  konu: string;
  expertNote?: string;
}

// Bu liste, resmi kurum siteleri ve güvenilir ikincil kaynaklardan
// (danışmanlık/ihracatçı birliği bültenleri) el ile derlenmiştir.
// Tarihler doğrulanmıştır; "Koray'ın notu" alanı Koray'ın kişisel
// yorumudur, resmi bir açıklama değildir.
export const GELISMELER: GelismeItem[] = [
  {
    kurum: "KOSGEB",
    tarih: "3 Şubat 2026",
    eklendiTarihi: "2026-08-13",
    baslik:
      "KOSGEB Kapasite Geliştirme Destek Programı'nda 2026 rakamları ve başvuru takvimi açıklandı",
    ozet:
      "KOSGEB, üretim kapasitesini ve dayanıklılığını artırmak isteyen KOBİ'lere yönelik Kapasite Geliştirme Destek Programı'nın güncel verilerini paylaştı: 2025'te 1.160 işletme 14,8 milyar TL'lik finansmana erişti, 2026 hedefi ise 2.440 işletme ve 38,4 milyar TL. Program, 1-20 milyon TL arasında %20 puanlık faizsiz finansman desteği sağlıyor; başvurular yıl içinde dönemsel olarak (Şubat/Mayıs/Ağustos) açılıyor.",
    kaynakUrl:
      "https://www.kosgeb.gov.tr/site/tr/genel/detay/9353/kobilerin-buyume-ve-gelisimine-guclu-destek",
    konu: "Devlet Destekleri ve Teşvikler",
    expertNote:
      "Koray'ın notu: Bu programı özellikle üretim kapasitesini büyütmek isteyen ama teminat sıkıntısı yaşayan imalatçı KOBİ müşterilerimize öneriyorum; %20 puanlık faizsiz kısım, banka kredisiyle birlikte kullanıldığında toplam maliyeti belirgin şekilde düşürüyor.",
  },
  {
    kurum: "TÜBİTAK",
    tarih: "20 Temmuz 2026",
    eklendiTarihi: "2026-08-13",
    baslik:
      "TÜBİTAK 1501 ve 1507 Ar-Ge destek programlarında 2026 yılı 2. çağrıları açıldı",
    ozet:
      "TÜBİTAK, Sanayi Ar-Ge Destek Programı (1501) ve KOBİ Ar-Ge Başlangıç Destek Programı'nın (1507) 2026 yılı ikinci çağrılarını açtı. Değişiklikle 1501'de kademeli destek oranı uygulaması, geçmiş projelerin ticarileşme performansına göre -5 ile +5 puan arasında ek puanlama ve öncelikli alanların 2026-2028 TÜBİTAK Ar-Ge gündemine göre güncellenmesi getirildi; her iki programda da proje başına destek üst sınırı 20 milyon TL'de sabitlendi.",
    kaynakUrl:
      "https://tubitak.gov.tr/tr/duyuru/1501-sanayi-ar-ge-destek-programi-ve-1507-kobi-ar-ge-baslangic-destek-programi-2026-yili-2-cagrilari-acildi",
    konu: "Devlet Destekleri ve Teşvikler",
    expertNote:
      "Koray'ın notu: Kademeli destek oranı ve ticarileşme puanlaması artık yalnızca 'proje iyi mi' değil, 'önceki TÜBİTAK projeniz gerçekten ticarileşti mi' sorusunu da öne çıkarıyor — başvuru stratejisini buna göre kurmak gerekiyor.",
  },
  {
    kurum: "Hazine ve Maliye Bakanlığı",
    tarih: "27 Kasım 2025 (2026'da yürürlüğe girdi)",
    eklendiTarihi: "2026-08-13",
    baslik:
      "Yatırım teşvik sisteminde 2026 üst limitleri ve asgari tutarlar yeniden belirlendi",
    ozet:
      "Hazine ve Maliye Bakanlığı'nın 27 Kasım 2025 tarihli, 33090 sayılı Resmî Gazete'de yayımlanan tebliğiyle 2026 yılı yeniden değerleme oranı %25,49 olarak belirlendi. 9903 sayılı Yatırımlarda Devlet Yardımları Hakkında Karar kapsamındaki asgari yatırım tutarları, stratejik yatırım eşikleri ve destek üst limitleri bu orana göre güncellendi. Örneğin yüksek teknolojili stratejik yatırımlarda asgari tutar 100 milyon TL'den 125 milyon TL'ye, 1-2. bölgelerdeki asgari sabit yatırım tutarı ise 12 milyon TL'den 15,1 milyon TL'ye yükseldi.",
    kaynakUrl:
      "https://ms.hmb.gov.tr/uploads/2026/01/Ek-4-BKS_2026_YDO_GUNCEL.TUTARLAR-5d367d135f56b5e2.pdf",
    konu: "Devlet Destekleri ve Teşvikler",
  },
  {
    kurum: "İŞKUR",
    tarih: "1 Temmuz 2026",
    eklendiTarihi: "2026-08-13",
    baslik:
      "İŞKUR 2026/4. Dönem Engelli ve Eski Hükümlü Çalıştırmayı Özendirme Projesi başvuruları açıldı",
    ozet:
      "İŞKUR, engelli ve eski hükümlü istihdamını artırmaya yönelik proje desteğinin 2026 yılı dördüncü dönem başvurularını 1 Temmuz 2026 itibarıyla açtı. Program, bu gruplardan çalışan istihdam eden veya istihdam etmeyi planlayan işverenlere proje bazlı destek sağlıyor.",
    kaynakUrl: "https://www.iskur.gov.tr/duyurular/",
    konu: "Devlet Destekleri ve Teşvikler",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "21 Temmuz 2026",
    eklendiTarihi: "2026-08-13",
    baslik:
      "TURQUALITY ve UR-GE ihracat destek ödemelerinde 2026 ilk yarıda güçlü artış",
    ozet:
      "Ege İhracatçı Birlikleri Koordinatör Başkanı Muhammet Öztürk'ün açıklamasına göre, 2026'nın ilk yarısında Ege bölgesi ihracatçılarına aktarılan devlet desteği bir önceki yılın aynı dönemine göre %49 artışla 1,575 milyar TL'ye ulaştı. Bu kapsamda TURQUALITY Programı'na 301,4 milyon TL, UR-GE Proje Desteği'ne ise (2025'in aynı döneminde 2,5 milyon TL iken) 45,1 milyon TL aktarıldı.",
    kaynakUrl:
      "https://www.manisamansetgazetesi.com/manisa-haberleri/ihracatcilara-yonelik-devlet-destegi-artiyor/618783",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: UR-GE desteğindeki bu sıçrama, özellikle sektörel iş birliği kuruluşlarıyla birlikte hareket eden ihracatçı KOBİ'ler için ciddi bir fırsat penceresi — bireysel başvuru yerine bir UR-GE grubuna dahil olmayı değerlendirmelerini öneriyorum.",
  },
  {
    kurum: "KGK",
    tarih: "31 Temmuz 2026",
    eklendiTarihi: "2026-08-13",
    baslik:
      "KGK'dan TSRS 2 kapsamında sera gazı emisyonu açıklamalarına ilişkin yeni duyuru",
    ozet:
      "Kamu Gözetimi Kurumu (KGK), Türkiye Sürdürülebilirlik Raporlama Standardı 2 (TSRS 2) kapsamındaki sera gazı emisyonu açıklama yükümlülüklerine ilişkin 31 Temmuz 2026 tarihli yeni bir duyuru yayımladı. Değişikliklerin 1 Ocak 2027'den itibaren başlayan raporlama dönemleri için geçerli olması, erken uygulamaya ise izin verilmesi öngörülüyor.",
    kaynakUrl:
      "https://kgk.gov.tr/Portalv2Uploads/files/Duyurular/v2/Surdurulebilirlik/Duyuru/Duyuru%20-%2030.pdf",
    konu: "Hukuk, Vergi ve Mali Danışmanlık",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "1 Temmuz 2026 (1 Ağustos 2026'da yürürlüğe girdi)",
    eklendiTarihi: "2026-08-14",
    baslik:
      "Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği'nde dijital pazarlamayı sıkılaştıran değişiklikler yürürlüğe girdi",
    ozet:
      "Ticaret Bakanlığı'nın 1 Temmuz 2026 tarihli, 33297 sayılı Resmî Gazete'de yayımlanan yönetmelik değişikliği 1 Ağustos 2026 itibarıyla yürürlüğe girdi. Hedefli reklamlarda kullanılan kriterlerin tüketiciye açık ve kolay erişilebilir şekilde sunulması zorunlu hale geldi, çocuklara yönelik hedefli reklam tamamen yasaklandı, doğrulanamayan mecralardan alınan tüketici değerlendirmelerinin yayımlanması engellendi ve indirimli fiyat duyurularında kampanya öncesi son 10 günün en düşük fiyatının esas alınması zorunlu kılındı.",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/aldaticici-reklam-ve-haksiz-ticari-uygulamalarla-mucadelede-yeni-donem-basliyor",
    konu: "Pazarlama ve Satış Geliştirme",
    expertNote:
      "Koray'ın notu: Özellikle e-ticaret ve hedefli reklam kullanan müşterilerimize, kampanya ve indirim metinlerini bu 10 günlük referans fiyat kuralına göre gözden geçirmelerini öneriyorum; uyumsuz kampanyalar idari yaptırımla karşılaşabilir.",
  },
  {
    kurum: "KOSGEB",
    tarih: "9 Temmuz 2026",
    eklendiTarihi: "2026-08-15",
    baslik:
      "KOSGEB'den teknoloji girişimlerine 5 milyon TL'ye kadar Yapay Zekâ Kredi Programı",
    ozet:
      "KOSGEB, geçerli Teknogirişim Rozetine sahip işletmelerin yapay zekâ altyapısına erişimini kolaylaştırmak amacıyla Yapay Zekâ Kredi Programı'nı başlattı. Program; yüksek performanslı işlem kaynakları, güvenli veri depolama ve yapay zekâ veri merkezi/platform hizmetleri gibi giderler için 500 bin TL ile 5 milyon TL arasında kredi sağlıyor. Başvurular 9 Temmuz-31 Aralık 2026 arasında KOBİ Bilgi Sistemi üzerinden alınıyor; geri ödeme 12 aylık ödemesiz dönemin ardından 12 eşit taksitte yapılıyor.",
    kaynakUrl:
      "https://www.kosgeb.gov.tr/site/tr/genel/detay/9427/kosgebden-teknoloji-girisimlerine-yapay-zek-kredi-programi",
    konu: "Yazılım ve Yapay Zekâ Çözümleri",
    expertNote:
      "Koray'ın notu: Teknogirişim Rozetine sahip ve yapay zekâ altyapısına yatırım planlayan girişimler için bu kredi, piyasa koşullarına göre oldukça avantajlı; başvuru öncesi rozet ve uygunluk kriterlerini netleştirmelerini öneriyorum.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "19 Haziran 2026",
    eklendiTarihi: "2026-08-15",
    baslik:
      "Ticaret Bakanlığı'nın yurt dışı yatırım anketi: Türk yatırımcıların yurt dışı sermayesi 69,2 milyar dolara ulaştı",
    ozet:
      "Ticaret Bakanlığı'nın Türkiye'de yerleşik gerçek ve tüzel kişilerin yurt dışı yatırımlarına ilişkin anket sonuçlarına göre, 2025 sonu itibarıyla 128 ülkede yapılan yurt dışı yatırımların sermaye pozisyonu 69,2 milyar dolara ulaştı; bu rakam 2024 sonundaki 60,1 milyar dolara göre belirgin bir artışa işaret ediyor. Anket 20 Nisan-15 Mayıs 2026 döneminde yapıldı; sonuçlar UNCTAD, OECD, IMF ve Dünya Bankası gibi kuruluşlara da raporlanıyor.",
    kaynakUrl:
      "https://ticaret.gov.tr/duyurular/ticaret-bakanligi-tarafindan-yapilan-yurt-disi-yatirim-anketi-sonuclari-aciklandi-19-06-2026",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: Yurt dışı yatırım sermayesindeki bu artış, Türk şirketlerinin uluslararası genişlemeye ilgisinin sürdüğünü gösteriyor; yurt dışında şirket kurmayı planlayan işletmelere hedef ülke seçiminde güncel yatırım eğilimlerini de dikkate almalarını öneriyorum.",
  },
  {
    kurum: "KOSGEB",
    tarih: "8 Ağustos 2026",
    eklendiTarihi: "2026-08-16",
    baslik:
      "KOSGEB'den COP31 Odaklı Hızlandırma Desteği Çağrısı: TEKMER ve teknoparklara 6,5 milyon TL'ye kadar destek",
    ozet:
      "KOSGEB, Teknoloji Merkezi (TEKMER) işletici kuruluşları ile GO'lu teknopark yönetici şirketlerine yönelik COP31 Odaklı Hızlandırma Desteği Çağrısı'nı açtı. Temiz enerji dönüşümü, döngüsel ekonomi, sürdürülebilir tarım ve iklim teknolojileri alanında faaliyet gösteren girişimlerin uluslararası büyümesini desteklemek amacıyla kuruluş başına 6,5 milyon TL'ye kadar destek sağlanacak. Başvurular 9-30 Ağustos 2026 tarihleri arasında alınıyor.",
    kaynakUrl:
      "https://kosgeb.gov.tr/site/tr/genel/detay/9453/kosgebden-cop31-odakli-hizlandirma-destegi-cagrisi",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: İklim teknolojileri ve sürdürülebilirlik alanında çalışan, teknoloji derinliği ve ticarileşme potansiyeli yüksek girişimlerin bağlı bulunduğu TEKMER veya teknoparkla bu çağrıyı süresi içinde değerlendirmesini öneririm; başvuru penceresi kısa.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "11 Ağustos 2026",
    eklendiTarihi: "2026-08-16",
    baslik:
      "Ticaret Bakanlığı'na bağlı 19 serbest bölgeden 2026'nın ilk 7 ayında rekor ihracat",
    ozet:
      "Ticaret Bakanlığı'na bağlı 19 serbest bölgenin ihracatı, 2026 yılı Ocak-Temmuz döneminde bir önceki yılın aynı dönemine göre %6,9 artışla 7,7 milyar dolara ulaşarak bu dönem için tüm zamanların rekorunu kırdı. Temmuz ayı ihracatı yıllık bazda %11,3 artışla 1 milyar 152 milyon dolar oldu; serbest bölgelerden ihracatın ithalatı karşılama oranı Ocak-Temmuz döneminde %160,9'a ulaştı.",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/ticaret-bakanligina-bagli-19-serbest-bolgeden-2026-yilinin-ilk-7-ayinda-yeni-ihracat-rekoru",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: Serbest bölgelerdeki bu güçlü ihracat performansı ve yüksek ithalat karşılama oranı, özellikle üretim ve ihracat odaklı işletmeler için serbest bölge yatırımını yeniden değerlendirmeye değer bir seçenek haline getiriyor.",
  },
  {
    kurum: "KVKK",
    tarih: "22 Temmuz 2026 (13 Ağustos 2026'da Resmî Gazete'de yayımlandı)",
    eklendiTarihi: "2026-08-17",
    baslik:
      "KVKK, sadakat kartı üçüncü kişi kullanımına ilişkin uyum süresini 28 Şubat 2027'ye uzattı",
    ozet:
      "Kişisel Verileri Koruma Kurulu, 11 Şubat 2026 tarihli ilke kararıyla getirdiği; bir sadakat kartı üyesinin cep telefonu veya kart numarasının alışveriş sırasında üçüncü bir kişi tarafından kullanılması durumunda işlemin gerçekten üyenin bilgisi ve rızası dahilinde yapıldığını doğrulayacak mekanizma kurma yükümlülüğünün uyum süresini uzattı. 22 Temmuz 2026 tarihli ve 2026/1491 sayılı kararla, sektörün talebi doğrultusunda 28 Ağustos 2026'da dolacak süre 28 Şubat 2027'ye ertelendi.",
    kaynakUrl:
      "https://www.kvkk.gov.tr/Icerik/8670/sadakat-kart-uyeligi-bulunan-bir-kisinin-cep-telefonu-numarasinin-veya-sadakat-kart-numarasinin-ucuncu-bir-kisi-tarafindan-alisveris-esnasinda-kullanilmasi-hakkinda-ilke-karari",
    konu: "Hukuk, Vergi ve Mali Danışmanlık",
    expertNote:
      "Koray'ın notu: Perakende ve sadakat programı işleten müşterilerimize, ek süreye rağmen SMS OTP, QR/barkod veya kart şifresi gibi doğrulama yöntemlerinden birini şimdiden test etmelerini öneriyorum; son haftaya bırakmak operasyonel risk yaratabilir.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "3 Temmuz 2026 (5 Ağustos 2026'da duyuruldu)",
    eklendiTarihi: "2026-08-17",
    baslik:
      "AB'ye e-ticaret ihracatında A.TR Dolaşım Belgesi artık otomatik oluşturuluyor",
    ozet:
      "Ticaret Bakanlığı, AB'nin e-ticarette 'de minimis' muafiyetini kaldırmasının ardından, Basitleştirilmiş Gümrük Beyannamesi kapsamında değeri 150 avroyu aşmayan e-ihracat gönderileri için elektronik A.TR Dolaşım Belgesi'nin otomatik oluşturulmasını sağlayan bir sistemi 3 Temmuz 2026'da hızlı kargo firmaları ve posta idaresinin kullanımına açtı. Sistemle ilk ihracat işlemi gerçekleştirildi; amaç, ürün başına doğabilecek ek mali yükleri önleyip Türkiye'den AB'ye e-ihracat yapan işletmelerin rekabet gücünü korumak.",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/e-ticarette-kullanilan-a-tr-dolasim-belgesi-sistemiyle-ilk-ihracat-gerceklestirildi",
    konu: "Pazarlama ve Satış Geliştirme",
    expertNote:
      "Koray'ın notu: AB'ye düşük değerli e-ticaret gönderisi yapan işletmelere, lojistik/kargo firmalarıyla bu otomatik A.TR sürecine geçip geçmediklerini teyit etmelerini öneriyorum; manuel belge süreci artık gereksiz bir maliyet ve gecikme kaynağı olabilir.",
  },
];

// Güncel Gelişmeler sayfasında (hem ana feed hem üstteki sayaçlarda) sadece
// son 45 gün içinde eklenmiş, en fazla 20 öğe gösterilir. Daha eskisi bu
// listeden dışarıda kalır ama GELISMELER dizisinden silinmez — ileride bir
// arşiv sayfası bu tam diziyi kullanabilir. page.tsx ve GuncelGelismelerFeed
// aynı mantığı kullanabilsin diye burada tek bir fonksiyonda tutuluyor.
const VISIBLE_WINDOW_DAYS = 45;
const VISIBLE_MAX_ITEMS = 20;

export function getVisibleGelismeler(): GelismeItem[] {
  const cutoff = Date.now() - VISIBLE_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  return [...GELISMELER]
    .filter((g) => new Date(g.eklendiTarihi).getTime() >= cutoff)
    .sort(
      (a, b) =>
        new Date(b.eklendiTarihi).getTime() - new Date(a.eklendiTarihi).getTime()
    )
    .slice(0, VISIBLE_MAX_ITEMS);
}
