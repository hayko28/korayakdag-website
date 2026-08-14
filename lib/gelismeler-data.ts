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
    kurum: "KVKK",
    tarih: "12 Mart 2026",
    eklendiTarihi: "2026-08-14",
    baslik:
      "KVKK, 'Etken Yapay Zekâ (Agentic AI)' sistemlerine ilişkin yeni bir rehber yayımladı",
    ozet:
      "Kişisel Verileri Koruma Kurumu, kendi başına çok adımlı görevleri yürütebilen ve sürekli insan yönlendirmesine ihtiyaç duymayan 'etken' (agentic) yapay zekâ sistemlerinin kişisel veri işleme süreçlerinde yarattığı riskleri ele alan, bağlayıcı olmayan bir rehber yayımladı. Rehber, bu sistemlerin çok adımlı ve dağıtık yapısı nedeniyle amaç sınırlaması ve veri minimizasyonu ilkelerine uyumun zorlaşabileceğine dikkat çekiyor.",
    kaynakUrl: "https://www.kvkk.gov.tr/Icerik/8683/etken-yapay-zeka-agentic-ai",
    konu: "Yazılım ve Yapay Zekâ Çözümleri",
    expertNote:
      "Koray'ın notu: Şirket içinde agentic AI araçları (otomatik CRM ajanları, otonom süreç botları vb.) kullanmayı planlayan müşterilerimize bu rehberi uyum sürecinin başında değerlendirmelerini öneririm — bağlayıcı olmasa da denetimlerde referans alınabilir.",
  },
  {
    kurum: "KGK",
    tarih: "15 Ocak 2026",
    eklendiTarihi: "2026-08-14",
    baslik:
      "KGK, ortak kontrole tabi işletme birleşmelerinin muhasebeleştirilmesine ilişkin ilke kararını yeniledi",
    ozet:
      "Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK), 15 Ocak 2026 tarihli, 33138 sayılı Resmî Gazete'de yayımlanan yeni ilke kararıyla ortak kontrole tabi işletme birleşmelerinde 'hakların birleştirilmesi' yönteminin kullanılmasını, açılış finansal durum tablosu sunulmasının zorunlu olmamasını ve birleşme maliyetlerinin doğrudan kâr/zarara yansıtılmasını öngördü. Yeni ilkeler 1 Ocak 2026'da başlayan hesap dönemlerinden itibaren uygulanacak; 2018 tarihli önceki karar yürürlükten kalktı.",
    kaynakUrl:
      "https://www.aa.com.tr/tr/ekonomi/ortak-kontrole-tabi-isletme-birlesmelerinin-muhasebelestirilmesinde-ilkeler-yeniden-duzenlendi/3799815",
    konu: "Kurumsal Gelişim ve Değerleme",
    expertNote:
      "Koray'ın notu: Grup içi birleşme veya yeniden yapılanma planlayan holding yapılarındaki müşterilerimizin bu yeni ilke kararını finansal tablo hazırlık takvimlerine erken dahil etmelerini öneririm — açılış bilançosu hazırlama yükünün kalkması önemli bir sadeleşme.",
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
