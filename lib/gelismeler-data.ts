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
  {
    kurum: "Sanayi ve Teknoloji Bakanlığı",
    tarih: "17 Ağustos 2026 (18 Ağustos 2026'da Resmî Gazete'de yayımlandı)",
    eklendiTarihi: "2026-08-18",
    baslik:
      "Türkiye Yapay Zekâ Eylem Planı (2026-2030) Cumhurbaşkanlığı genelgesiyle yürürlüğe girdi",
    ozet:
      "Cumhurbaşkanlığının 2026/9 sayılı genelgesi, 18 Ağustos 2026 tarihli ve 33344 sayılı Resmî Gazete'de yayımlanarak 2021-2025 Ulusal Yapay Zeka Stratejisi'nin yerini alan Türkiye Yapay Zekâ Eylem Planı'nı (2026-2030) yürürlüğe koydu. Sanayi ve Teknoloji Bakanlığı koordinasyonundaki plan; veri merkezi kurulu gücünün 2030'a kadar en az 1 gigavata çıkarılması, veri merkezi/bulut/yapay zeka altyapısı için en az 10 milyar dolar kaynağın seferber edilmesi ve kamu yatırım programlarının en az %2'sinin yapay zeka projelerine ayrılması gibi hedefler içeriyor; tüm kamu kurum ve kuruluşlarına görev veriyor.",
    kaynakUrl:
      "https://www.haberturk.com/ekonomi/yapay-zeka-eylem-plani-resmi-gazete-de-3906319",
    konu: "Yazılım ve Yapay Zekâ Çözümleri",
    expertNote:
      "Koray'ın notu: Genelge doğrudan kamu kurumlarına görev veriyor olsa da, veri merkezi ve yapay zeka altyapısına yatırım planlayan özel sektör firmalarının bu eylem planı çerçevesinde açılacak teşvik ve iş birliği programlarını yakından takip etmesini öneririm.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "17 Ağustos 2026 (18 Ağustos 2026'da yürürlüğe girdi)",
    eklendiTarihi: "2026-08-18",
    baslik:
      "Mikro ihracat kargolarının hava yolu transit süreçleri basitleştirildi",
    ozet:
      "Ticaret Bakanlığı, Basitleştirilmiş Gümrük Beyannamesi kapsamındaki mikro ihracat kargolarının yurt dışına sevk edilecekleri ana aktarma havalimanlarına hızlı ve basitleştirilmiş bir usulle gönderilmesini sağlayan yeni düzenlemeyi 18 Ağustos 2026 itibarıyla uygulamaya koydu. Amaç, mikro ihracatçıların gümrük işlem sürelerini kısaltmak, operasyonel maliyetlerini azaltmak ve uluslararası pazarlara erişimini kolaylaştırmak.",
    kaynakUrl:
      "https://www.aa.com.tr/tr/ekonomi/mikro-ihracat-kargolarinin-hava-yolu-transit-surecleri-basitlestirilecek/4029856",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: Küçük hacimli, sık gönderi yapan e-ihracat firmalarına, kargo/lojistik ortaklarıyla bu basitleştirilmiş sürece geçip geçmediklerini teyit etmelerini öneririm; işlem süresindeki kısalma özellikle hızlı teslimat vaat eden pazaryeri satıcıları için rekabet avantajı olabilir.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "22 Temmuz 2026",
    eklendiTarihi: "2026-08-18",
    baslik:
      "Reklam Kurulu 371. toplantısında yanıltıcı reklamlara 44 dosyada idari para cezası kararı aldı",
    ozet:
      "Ticaret Bakanlığı Reklam Kurulu, 371'inci toplantısında yanıltıcı reklam ve haksız ticari uygulamalara ilişkin 149 dosyayı görüştü; 118 dosyanın mevzuata aykırı olduğu tespit edilerek 74 dosya hakkında reklam durdurma, 44 dosya hakkında ise durdurma cezasıyla birlikte idari para cezası uygulanmasına karar verildi. Bakanlığın açıklamasına göre 2026 yılının ilk yedi ayında 21 binin üzerinde dosya karara bağlanırken toplam 185 milyon TL'yi aşan idari para cezası kesildi.",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/ticaret-bakanligi-reklam-kurulu-371-toplantisini-gerceklestirdi-kurul-yaniltici-reklamlara-karsi-mucadelesini-kararlilikla-surduruyor",
    konu: "Pazarlama ve Satış Geliştirme",
    expertNote:
      "Koray'ın notu: Denetimlerin sıklığı ve kesilen ceza tutarındaki artış, özellikle dijital reklam ve influencer iş birliği yapan işletmelerin reklam metinlerini ve iddialarını düzenli olarak hukuki uyum açısından gözden geçirmesi gerektiğini gösteriyor.",
  },
  {
    kurum: "Gelir İdaresi Başkanlığı",
    tarih: "4 Ağustos 2026 (1 Temmuz 2026 itibarıyla geçerli)",
    eklendiTarihi: "2026-08-19",
    baslik:
      "GİB, Muhtasar ve Prim Hizmet Beyannamesi'nde asgari ücret istisna gelir vergisi tutarını güncelledi",
    ozet:
      "Gelir İdaresi Başkanlığı, Dijital Vergi Dairesi üzerinden yayımladığı 4 Ağustos 2026 tarihli duyuruyla Muhtasar ve Prim Hizmet Beyannamesi'nde uygulanan asgari ücret istisna gelir vergisi tutarını, 1 Temmuz 2026'dan itibaren geçerli olmak üzere 4.537,75 TL olarak belirledi. e-Beyanname sistemi üzerinden beyanname veren mükelleflerin Beyanname Düzenleme Programı'nı (BDP) güncel sürüme yükseltmesi gerekiyor.",
    kaynakUrl:
      "https://www.alomaliye.com/2026/08/04/muhsgk-asgari-ucret-istisna-gv-tutarinin-guncellenmesine-iliskin-duyuru/",
    konu: "Hukuk, Vergi ve Mali Danışmanlık",
    expertNote:
      "Koray'ın notu: Bordro ve beyanname süreçlerini dışarıdan bir mali müşavirlik ofisine bırakan işletmeler için bu tür teknik güncellemeler otomatik takip edilir; ancak bordroyu kendi bünyesinde yürüten işletmelerin BDP güncellemesini Temmuz dönemi beyannamesi öncesinde yapıp yapmadığını kontrol etmesini öneririm.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "7 Ağustos 2026",
    eklendiTarihi: "2026-08-19",
    baslik:
      "Ticaret Bakanlığı'nın yapay zekâ destekli E-Kolay İhracat Platformu (E-KİP), 'Kamu-Dijital Dönüşüm' kategorisinde birincilik ödülü aldı",
    ozet:
      "Ticaret Bakanlığı'nca devreye alınan ve yapay zekâ destekli araçlar, hedef ülke/sektör analizleri ile eğitim içerikleri sunan E-Kolay İhracat Platformu (E-KİP), Verimlilik Proje Ödülleri'nin 'Kamu-Dijital Dönüşüm' kategorisinde birincilik ödülüne layık görüldü; 49 ilden 451 proje arasından 72 proje finale kalmıştı. Birbiriyle entegre 12 modülden oluşan platform, e-ihracata yeni başlayacak ya da mevcut faaliyetini büyütmek isteyen firmalara pazar seçiminden küresel rekabete hazırlığa kadar rehberlik ediyor.",
    kaynakUrl:
      "https://www.aa.com.tr/tr/ekonomi/ticaret-bakanliginin-e-kolay-ihracat-platformuna-odul/4020740",
    konu: "Yazılım ve Yapay Zekâ Çözümleri",
    expertNote:
      "Koray'ın notu: E-ihracata yeni başlayacak KOBİ'lere, ücretli danışmanlık almadan önce E-KİP'in pazar araştırması ve eğitim modüllerini incelemelerini öneririm; platform özellikle hedef pazar ve mevzuat konusunda ilk adımda faydalı bir çerçeve sunuyor.",
  },
  {
    kurum: "Borsa İstanbul",
    tarih: "3 Ağustos 2026 (2026 ilk 7 ay verileri)",
    eklendiTarihi: "2026-08-20",
    baslik:
      "Borsa İstanbul'da 2026'nın ilk 7 ayında 28 şirketle halka arz rekoru",
    ozet:
      "2026 yılının ilk yedi ayında Borsa İstanbul'da 28 şirket halka arz edilerek toplam yaklaşık 63 milyar TL kaynak sağlandı; yalnızca Temmuz ayında gerçekleşen 12 halka arzla 38,4 milyar TL toplanarak yılın en yoğun ayı oldu. Halka arzlara katılan yatırımcı sayısı 22,11 milyona ulaştı.",
    kaynakUrl:
      "https://www.forbes.com.tr/ekonomi/2026-da-halka-arz-rekoru-28-sirket-borsaya-acildi",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: Halka arz hacmindeki bu artış, kurumsallaşma sürecini tamamlamış ve şeffaf finansal raporlamaya geçmiş şirketler için sermaye piyasasının gerçek bir alternatif finansman kanalı haline geldiğini gösteriyor; büyüme aşamasındaki şirketlerin halka arza hazırlık sürecini (bağımsız denetim, kurumsal yönetim, değerleme) şimdiden planlamaya başlamalarını öneririm.",
  },
  {
    kurum: "Sanayi ve Teknoloji Bakanlığı",
    tarih: "9 Ağustos 2026",
    eklendiTarihi: "2026-08-20",
    baslik:
      "Proje Bazlı Devlet Yardımı Kararı'nda başvuru ve izleme süreçleri yeniden düzenlendi",
    ozet:
      "9 Ağustos 2026 tarihli ve 33335 sayılı Resmî Gazete'de yayımlanan Cumhurbaşkanlığı kararıyla, büyük ölçekli ve stratejik yatırımlara yönelik proje bazlı devlet yardımı sisteminin başvuru, değerlendirme ve izleme süreçlerinde değişikliğe gidildi. Proje başvurularında kalkınma ve yatırım bankalarınca hazırlanacak fizibilite raporu zorunlu hale getirildi; ayrıca 'Teknoloji Odaklı Sanayi Hamlesi Programı'nın adı 'Teknoloji Hamlesi Programı' olarak güncellendi.",
    kaynakUrl:
      "https://www.pwc.com.tr/tr/hizmetlerimiz/vergi/dolayli-vergi/bultenler/yatirim-tesvik-bultenleri/2026/yatirimlara-proje-bazli-devlet-yardimi-verilmesine-iliskin-kararda-degisiklik-yapilmasina-dair-karar.html",
    konu: "Devlet Destekleri ve Teşvikler",
    expertNote:
      "Koray'ın notu: Fizibilite raporu zorunluluğu, proje bazlı devlet yardımına başvuracak yatırımcılar için hazırlık süresini uzatan bir adım; kalkınma veya yatırım bankasıyla fizibilite çalışmasını başvuru takvimine göre erken planlamalarını öneririm.",
  },
  {
    kurum: "TOBB",
    tarih: "10 Ağustos 2026",
    eklendiTarihi: "2026-08-20",
    baslik:
      "TOBB ve Ticaret Bakanlığı'ndan KOBİ'lerin e-ihracat ve yapay zekâ olgunluğunu artıracak çalıştay",
    ozet:
      "Dijital İhracatı Geliştirme Programı (DEEP) kapsamında Bolu'da düzenlenen çalıştayda TOBB, Ticaret Bakanlığı, Milletlerarası Ticaret Odası (ICC) ve TOBB ETÜ SEM iş birliğiyle KOBİ'lerin yapay zekâ destekli e-ihracat ve 'agentic commerce' dönüşümü ele alındı. Katılımcılar altı çalışma masasında dijital/yapay zekâ olgunluğu, e-ihracatta değer yaratma, eğitim-mentorluk ve pazara giriş temalarında bir araya geldi.",
    kaynakUrl: "https://www.tobb.org.tr/Sayfalar/Detay.php?rid=15773&lst=Haberler",
    konu: "Yazılım ve Yapay Zekâ Çözümleri",
    expertNote:
      "Koray'ın notu: 'Agentic commerce' kavramının KOBİ gündemine girmesi, e-ihracat yapan işletmelerin önümüzdeki dönemde yapay zekâ ajanlarının ürün ve fiyat kararlarına dahil olacağı bir pazar ortamına şimdiden hazırlanması gerektiğine işaret ediyor.",
  },
  {
    kurum: "Hazine ve Maliye Bakanlığı",
    tarih: "24 Temmuz 2026 (31 Temmuz 2026'da Resmî Gazete'de yayımlandı)",
    eklendiTarihi: "2026-08-21",
    baslik:
      "7590 sayılı torba kanunla vergi sisteminde kapsamlı değişiklikler yürürlüğe girdi",
    ozet:
      "24 Temmuz 2026 tarihli ve 7590 sayılı Bazı Kanun ve Kanun Hükmünde Kararnamelerde Değişiklik Yapılmasına Dair Kanun, 31 Temmuz 2026 tarihli ve 33326 sayılı Resmî Gazete'de yayımlandı. Vergi, sosyal güvenlik, ulaştırma ve enerji dahil 22 farklı mevzuatta değişiklik yapan kanunla; nükleer enerji yatırımlarında örtülü sermaye sınırı ve damga vergisi istisnası, inşaat işlerinde KDV iadesi ile makine-teçhizat teslimlerinde KDV istisnası (1 Ağustos 2026 itibarıyla) ve binek otomobillerde asgari maktu ÖTV uygulaması gibi düzenlemeler getirildi.",
    kaynakUrl:
      "https://www.pwc.com.tr/tr/hizmetlerimiz/vergi/bultenler/2026/7590-sayili-kanunun-vergi-duzenlemeleri.html",
    konu: "Hukuk, Vergi ve Mali Danışmanlık",
    expertNote:
      "Koray'ın notu: Kanunun kapsamı çok geniş olsa da, KDV iadesi ve istisna düzenlemeleri özellikle inşaat ile makine-teçhizat üreten veya ithal eden işletmeler için doğrudan nakit akışı etkisi yaratabilir; mali müşavirlerin bu maddeleri işletmeye özel olarak değerlendirmesini öneririm.",
  },
  {
    kurum: "Türk Patent",
    tarih: "10 Ağustos 2026 (2026 ilk 6 ay verileri)",
    eklendiTarihi: "2026-08-21",
    baslik:
      "TÜRKPATENT verileri: Yerli patent başvuruları 2026'nın ilk yarısında %31 arttı",
    ozet:
      "Türk Patent ve Marka Kurumu'nun (TÜRKPATENT) açıkladığı verilere göre, 2026'nın ilk altı ayında yerli patent başvuruları bir önceki yılın aynı dönemine göre %31 artışla 3.538'den 4.641'e, yerli faydalı model başvuruları ise %23 artışla 2.021'e yükseldi. Aynı dönemde 76.215 marka, 16.567 yerli tasarım ve 173 coğrafi işaret başvurusu yapıldı; yerli marka tescilleri 49.694'e, yerli tasarım tescilleri ise 11.608'e ulaştı.",
    kaynakUrl:
      "https://www.aa.com.tr/tr/ekonomi/turkpatente-6-ayda-4-bin-641-yerli-patent-basvurusu-yapildi/4022851",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: Patent ve tasarım başvurularındaki bu artış, Ar-Ge yapan KOBİ'lerin sınai mülkiyet haklarını korumaya daha fazla önem verdiğini gösteriyor; ürün veya tasarım geliştiren işletmelere marka ve patent tescilini büyüme stratejilerinin erken bir adımı olarak planlamalarını öneririm.",
  },
  {
    kurum: "KGK",
    tarih: "7 Ağustos 2026",
    eklendiTarihi: "2026-08-22",
    baslik:
      "KGK, şirketlerin 2026 hesap döneminde bağımsız denetime tabi olup olmadığını sorgulayabileceği sistemi kullanıma açtı",
    ozet:
      "Kamu Gözetimi Kurumu (KGK), 4 Mayıs 2026 tarihli kurul kararıyla güncellenen ve 01.01.2026'da başlayan hesap dönemlerinden itibaren uygulanan yeni eşik değerlere göre şirketlerin 2026 hesap döneminde bağımsız denetime tabi olup olmadığını sorgulayabilecekleri elektronik sistemi 7 Ağustos 2026'da devreye aldı. Şirketlerin denetim kapsamına girip girmediğini belirleyen üç kriterden en az ikisinin üst üste iki hesap döneminde sağlanması esas alınıyor.",
    kaynakUrl: "https://dtsorgu.kgk.gov.tr/giris.aspx",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: Eşik değerlerin değişmesi, bir önceki yıl denetim kapsamı dışında kalan bazı şirketleri de 2026'da kapsam içine alabilir; büyüme aşamasındaki şirketlere bu sorgulama sistemini vakit kaybetmeden kontrol etmelerini öneririm — denetim yükümlülüğü, kurumsallaşma ve olası halka arz/yatırım süreçlerinin de bir ön koşulu.",
  },
  {
    kurum: "TCMB",
    tarih: "1 Ağustos 2026 (Resmî Gazete'de yayımlandı)",
    eklendiTarihi: "2026-08-22",
    baslik:
      "Döviz dönüşüm desteği 31 Ocak 2027'ye uzatıldı, sistem 1 Ekim 2026'dan itibaren katma değer esaslı işleyecek",
    ozet:
      "1 Ağustos 2026 tarihli ve 33327 sayılı Resmî Gazete'de yayımlanan 2026/11 sayılı Tebliğ ile ihracatçılara yönelik döviz dönüşüm desteğinin geçici %3'lük oranının uygulama süresi 31 Ocak 2027'ye kadar uzatıldı. Aynı tebliğle 1 Ekim 2026'dan itibaren desteğin firmanın döviz pozisyonu ve yarattığı katma değer esas alınarak hesaplanacağı yeni bir sisteme geçileceği, uzun süredir uygulanan 'döviz almama taahhüdü' şartının ise kaldırılacağı duyuruldu.",
    kaynakUrl:
      "https://www.bloomberght.com/tcmb-den-doviz-donusum-desteginde-yeni-duzenleme-3784465",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: 1 Ekim 2026'da yürürlüğe girecek katma değer esaslı yeni sistem, özellikle ithal girdi oranı yüksek ihracatçılar için destek tutarını değiştirebilir; ihracatçı müşterilerimize yeni hesaplama yöntemini şimdiden mali müşavirleriyle birlikte modellemelerini öneririm.",
  },
  {
    kurum: "KOSGEB",
    tarih: "22 Ağustos 2026",
    eklendiTarihi: "2026-08-23",
    baslik:
      "KOSGEB Kapasite Geliştirme Destek Programı'nın 2026 yılı 3. başvuru dönemi açıldı",
    ozet:
      "Sanayi ve Teknoloji Bakanı Mehmet Fatih Kacır'ın açıklamasına göre, KOSGEB Kapasite Geliştirme Destek Programı'nın 2026 yılı üçüncü başvuru dönemi 22 Ağustos 2026'da başladı; başvurular 15 Eylül 2026'ya kadar KOBİ Bilgi Sistemi üzerinden alınacak. Program kapsamında işletmelere 36 ay vadeli kredilerde 30 milyon TL'ye kadar finansman, 20 puanlık faiz/kâr payı desteği ve kefalet imkânı sağlanıyor; savunma, uzay ve havacılık alanında tedarikçi geliştirme projelerinde üst limit 30 milyon TL, hızlı büyüyen veya Teknogirişim Rozetine sahip işletmelerde ise 20 milyon TL olarak uygulanıyor.",
    kaynakUrl:
      "https://www.sabah.com.tr/ekonomi/kucuk-esnafa-30-milyon-tl-finansman-destegi-kosgeb-basvurulari-basladi-7646332",
    konu: "Devlet Destekleri ve Teşvikler",
    expertNote:
      "Koray'ın notu: Şubat ve Haziran dönemlerinde başvuramayan veya projesini yetiştiremeyen üretici KOBİ'lere, 15 Eylül'e kadar süren bu üçüncü dönemi kaçırmamalarını öneririm; özellikle Teknogirişim Rozetine sahip hızlı büyüyen işletmeler için üst limit ve faiz desteği oldukça cazip.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "13 Ağustos 2026 (19 Ağustos 2026'da duyuruldu)",
    eklendiTarihi: "2026-08-23",
    baslik:
      "Reklam Kurulu 372. toplantısında tüketici yorumlarını yayımlamayan firmaya haksız ticari uygulama cezası",
    ozet:
      "Ticaret Bakanlığı Reklam Kurulu, 13 Ağustos 2026 tarihli 372. toplantısında 105 dosyayı görüştü; mevzuata aykırı bulunan 87 dosya hakkında toplam 32 milyon 683 bin TL idari para cezası uygulanmasına karar verdi. Kurul, bir firmanın tüketici yorumlarını somut bir gerekçe göstermeden genel kurallara aykırılık gerekçesiyle yayımlamamasını haksız ticari uygulama olarak değerlendirip bu firmaya 2 milyon 167 bin TL ceza kesti; Bakanlık, 2026'nın ilk 7 ayında incelenen yaklaşık 26 bin başvuru sonucunda toplam 218 milyon TL'yi aşan idari para cezası uygulandığını açıkladı.",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/ticaret-bakanligi-aldatici-reklamlar-ve-haksiz-ticari-uygulamalara-karsi-mucadelede-hiz-kesmiyor",
    konu: "Pazarlama ve Satış Geliştirme",
    expertNote:
      "Koray'ın notu: Web sitesinde veya pazaryeri mağazasında müşteri yorumu/değerlendirme sistemi kullanan işletmelere, olumsuz yorumları 'genel kural ihlali' gibi muğlak gerekçelerle filtrelememelerini öneririm; Kurul bu tür uygulamaları artık somut şekilde haksız ticari uygulama sayıp idari para cezasına bağlıyor.",
  },
  {
    kurum: "SPK",
    tarih: "13 Ağustos 2026",
    eklendiTarihi: "2026-08-25",
    baslik:
      "SPK, yeşil, sürdürülebilir ve sosyal sermaye piyasası araçları için iki yeni rehberi kabul etti",
    ozet:
      "Sermaye Piyasası Kurulu Karar Organı, 13 Ağustos 2026 tarihli ve 49/1500 sayılı ilke kararıyla 'Yeşil, Sürdürülebilir ve Sosyal Sermaye Piyasası Araçları Rehberi' ile 'Sürdürülebilirlik Bağlantılı Sermaye Piyasası Araçları Rehberi'ni kabul etti. Mevcut yeşil ve sürdürülebilir borçlanma araçları rehberine sosyal projeler de eklenerek sosyal temalı araç ihracı mümkün hale geldi; bu kapsamdaki ihraçlarda Kurul ücretlerinde %50 indirime gidildi.",
    kaynakUrl:
      "https://spk.gov.tr/duyurular/basin-duyurulari/2026/yesil-surdurulebilir-ve-sosyal-sermaye-piyasasi-araclari-rehberi-ve-surdurulebilirlik-baglantili-sermaye-piyasasi-araclari-rehberi-basin-duyurusu",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: Çevresel/sosyal etkisi olan bir projeyi borçlanma aracıyla finanse etmeyi düşünen büyüme aşamasındaki şirketlere, %50 ücret indirimi nedeniyle bu rehberler çerçevesinde sürdürülebilir/sosyal temalı ihraç seçeneğini mali danışmanlarıyla değerlendirmelerini öneririm.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "23 Ağustos 2026",
    eklendiTarihi: "2026-08-25",
    baslik:
      "Ticaret Bakanlığı, ihracatçılar için Ticarette Teknik Engeller (TTE) Platformu'nu yeniledi",
    ozet:
      "Ticaret Bakanlığı, 2006'dan bu yana hizmet veren Ticarette Teknik Engeller Web Platformu'nun altyapısını 23 Ağustos 2026 itibarıyla yeniledi. Platform, ihracatçıların dış pazarlardaki teknik düzenleme ve ürün güvenliği uygulamalarını ülke ve ürün bazında takip etmesine, etiketleme/ambalajlama/test/belgelendirme gibi konularda karşılaştıkları engelleri Bakanlığa bildirmesine ve Dünya Ticaret Örgütü ile AB mevzuat bildirimlerini görmesine imkan tanıyor.",
    kaynakUrl:
      "https://www.aa.com.tr/tr/ekonomi/ticarette-teknik-engellere-iliskin-internet-platformu-yenilendi/4034916",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: Yurt dışına ürün gönderen işletmelere, sevkiyat öncesinde hedef pazardaki etiketleme ve belgelendirme şartlarını bu ücretsiz platform üzerinden kontrol etmelerini öneririm; gümrükte karşılaşılan teknik engellerin çoğu, sevkiyattan önce fark edilebilecek türden.",
  },
  {
    kurum: "Ticaret Bakanlığı",
    tarih: "25 Ağustos 2026",
    eklendiTarihi: "2026-08-26",
    baslik:
      "Temmuz 2026 ihracatı Cumhuriyet tarihinin en yüksek Temmuz değerine ulaştı, 54 ilde çift haneli artış",
    ozet:
      "Ticaret Bakanlığı'nın açıklamasına göre Türkiye'nin Temmuz 2026 ihracatı yıllık bazda %2,9 artışla 25,6 milyar dolara ulaşarak Cumhuriyet tarihinin en yüksek Temmuz ayı değerine ulaştı. Ocak-Temmuz döneminde toplam ihracat %3,4 artışla 161,6 milyar dolara çıkarken, Temmuz'da 54 ilin ihracatında artış görüldü; Mersin, İzmir, Antalya, Sakarya ve Gaziantep en yüksek tutarsal artış kaydeden iller oldu.",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/2026-yili-temmuz-ayinda-ihracatimizda-cumhuriyet-tarihinin-en-yuksek-temmuz-ayi-degerine-ulasilirken-illerimizdeki-cift-haneli-ihracat-artislari-dikkat-cekti",
    konu: "Yurt Dışı Şirket Kuruluşu ve Uluslararası İş Geliştirme",
    expertNote:
      "Koray'ın notu: 54 ilde birden görülen artış, ihracat performansının artık birkaç büyük şehre değil daha geniş bir üretim tabanına yayıldığını gösteriyor; Marmara dışındaki illerde üretim yapan ihracatçı KOBİ'lere bu momentumu değerlendirmelerini öneririm.",
  },
  {
    kurum: "SPK",
    tarih: "20 Ağustos 2026",
    eklendiTarihi: "2026-08-26",
    baslik:
      "SPK'nın haftalık bülteninde İntetra Teknoloji ve Bakırcı GYO'nun halka arzına onay, çok sayıda borçlanma aracı ihracı onaylandı",
    ozet:
      "Sermaye Piyasası Kurulu'nun 20 Ağustos 2026 tarihli 2026/52 sayılı haftalık bülteninde İntetra Teknoloji ve Bilişim Hizmetleri A.Ş.'nin (53,60 TL'den) ve Bakırcı Gayrimenkul Yatırım Ortaklığı A.Ş.'nin (12,93 TL'den) halka arzına onay verildiği açıklandı. Aynı bültende QNB Bank, Akbank, Vestel ve Anadolu Efes gibi şirketlerin borçlanma aracı ihraçları da onaylandı; Kurul ayrıca bir payda şüpheli işlem tespit edilen kişilere işlem yasağı ve bir bağımsız denetim şirketine idari para cezası uyguladı.",
    kaynakUrl: "https://www.bloomberght.com/spk-2-sirketin-halka-arzini-onayladi-3786074",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: Halka arz onaylarının bu kadar sık gündeme gelmesi, kurumsallaşmasını tamamlamış şirketler için sermaye piyasasının hâlâ aktif bir finansman kanalı olduğunu gösteriyor; halka arzı planlayan şirketlere süreç öncesi bağımsız denetim ve değerleme adımlarını erkenden netleştirmelerini öneririm.",
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
