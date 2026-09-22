export interface MakaleMeta {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
}

// Koray'ın kişisel görüş yazıları, SEO odaklı blog rehberlerinden ayrı,
// birinci ağızdan kısa deneyim/görüş metinleri.
export const MAKALELER: MakaleMeta[] = [
  {
    slug: "satin-almada-kodun-fikri-mulkiyeti-kimde",
    title: "Satın Alınan Şirketin Yazılımı, Hukuken Kime Ait?",
    excerpt:
      "Bir yazılım şirketinin satışı, durum tespiti sürecinde tek bir eksik belgeyle üç ay ertelendi: çekirdek algoritmayı yazan kurucu ortak ayrılırken hisse devri yapılmış ama fikri mülkiyet devir sözleşmesi hiç imzalanmamıştı. Kullanmak, hukuken sahibi olmak anlamına gelmiyor.",
    tag: "Hukuk ve Vergi",
    date: "22 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "arge-merkezinden-vazgecmenin-3-yanlis-gerekcesi",
    title:
      "Ar-Ge Merkezi'nden Vazgeçmenin En Sık Görülen 3 Yanlış Gerekçesi",
    excerpt:
      "15 tam zaman eşdeğer Ar-Ge personeline ulaşan birçok imalat ve mühendislik firması, Ar-Ge Merkezi başvurusunu üç yanlış gerekçeyle rafa kaldırıyor: 'sadece teknopark için', 'süreç aylarca sürer', 'bu ölçek için değil'. Üçü de mevzuata uymuyor; karşılığında yüzde 95'e varan stopaj teşviki ve SGK prim desteği masada duruyor.",
    tag: "Devlet Destekleri",
    date: "21 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "bigg-yatirim-programi-45-milyon-tl-degerleme",
    title:
      "TÜBİTAK BiGG'den Yatırım Alan Girişimin Değeri Aslında Kaç TL?",
    excerpt:
      "TÜBİTAK BiGG Yatırım Programı'nın 2026 ikinci çağrısında iki farklı yatırım rakamı var: yüzde 3 hisse karşılığında 1.350.000 TL, yüzde 5 hisse karşılığında 2.250.000 TL. İkisini de yüzdesine bölünce aynı sonuç çıkıyor: 45 milyon TL. Başvuru öncesi bu örtük değerlemenin ne anlama geldiğini bilmek gerekiyor.",
    tag: "Kurumsal Gelişim ve Değerleme",
    date: "20 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "kosgeb-imalat-kredisi-tedarikci-kobiye-guvence",
    title:
      "KOSGEB'in İmalat Kredisini 150 Milyon TL'ye Çıkarması Aslında Kimi İlgilendiriyor?",
    excerpt:
      "KOSGEB, 28 Ağustos'ta İstihdamı Koruma Destek Programı'nı büyük imalat işletmelerini de kapsayacak şekilde genişletti; üst limit 50 milyon TL'den 150 milyon TL'ye çıktı. Haberin gerçek muhatabı çoğu zaman krediyi alan büyük firma değil, ona sipariş bağlı küçük tedarikçidir.",
    tag: "Devlet Destekleri",
    date: "19 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tam-tasdik-esiginde-500-bin-1-milyon-tl-siniri",
    title:
      "Tam Tasdik Eşiğinde 500 Bin - 1 Milyon TL Sınırı: Şirketiniz Farkında mı?",
    excerpt:
      "2026'dan itibaren bir şirketin beyannamesindeki tek bir istisna/indirim kalemi 500.000 TL'yi, toplamı ise 1.000.000 TL'yi aştığında YMM tasdik raporu zorunlu hale geliyor. Süresinde imzalanmış bir tam tasdik sözleşmesi yoksa, her kalem için ayrı ayrı sınırlı tasdik raporu almak gerekiyor; bu eşiği yıl ortasında fark etmek zaman ve maliyet kaybına yol açıyor.",
    tag: "Hukuk ve Vergi",
    date: "18 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "faizin-dusecegi-varsayimiyla-kurulan-buyume-plani",
    title:
      "Merkez Bankası Faizi Beşinci Kez Sabit Tuttu: Büyüme Planınız Hâlâ Ayakta mı?",
    excerpt:
      "TCMB, 10 Eylül'de politika faizini yüzde 37'de sabit tutarak ocaktaki indirimden bu yana üst üste beşinci kez değişikliğe gitmedi. Yılın başında 'faiz kademeli düşecek' varsayımıyla hazırlanan birçok yatırım bütçesi, sekiz ay sonra hâlâ aynı finansman maliyetiyle karşı karşıya.",
    tag: "Görüş",
    date: "17 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "satin-almada-devralinan-eski-iscilik-borclari",
    title:
      "Bir Şirket Satın Aldığınızda, Onun Geçmiş İşçilik Borçlarını da Devralır Mısınız?",
    excerpt:
      "Bir lojistik firması satın aldığı bir depolama şirketinin eski çalışanlarından açılan bir davayla üç ay sonra karşılaştı; dava hem eski hem yeni sahibine yöneltilmişti. Türk Ticaret Kanunu m.178, devralanı işçinin devirden önce doğmuş alacaklarından da sorumlu tutuyor; bu risk bilançoda değil, personel dosyalarında saklı.",
    tag: "Hukuk ve Vergi",
    date: "16 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "e-ticaret-hacmi-buyurken-kobiler-nerede",
    title: "E-Ticaret Hacmi 4,5 Trilyon TL'yi Geçti: Bu Büyümenin Neresindesiniz?",
    excerpt:
      "Ticaret Bakanı Ömer Bolat, E-Ticaret ve Perakende Zirvesi'nde Türkiye'nin e-ticaret hacminin 2025'te 4,5 trilyon TL'ye ulaştığını, e-ticaret yapan işletme sayısının 634 bine çıktığını açıkladı. Rakamlar toplamı gösteriyor ama dağılımı göstermiyor; asıl soru pazara girip girmemek değil, temel altyapıyı kurup kurmadığınız.",
    tag: "Strateji",
    date: "16 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tavsiye-programiyla-gelen-numaraya-reklam-smsi",
    title:
      "Tavsiye Programıyla Gelen Numaraya Reklam SMS'i Göndermenin Bedeli: 1 Milyon TL",
    excerpt:
      "Kişisel Verileri Koruma Kurulu'nun Ağustos 2026 tarihli kararına göre bir şirket, 'marka elçisi' tavsiye programı üzerinden edindiği bir telefon numarasına açık rıza almadan reklam SMS'i gönderip arama yaptığı için 1 milyon TL idari para cezası aldı. Tavsiye/referans programı ya da üçüncü taraf listesiyle pazarlama yapan işletmeler için sürecin her adımı aynı riski taşıyor.",
    tag: "Hukuk ve Vergi",
    date: "15 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tazminatsiz-fesihte-6-is-gunluk-hak-dusurucu-sure",
    title:
      "Tazminatsız Fesih Hakkı Neden Genelde Kaçırılıyor? 6 İş Günlük Süre",
    excerpt:
      "İş Kanunu m.26'daki hak düşürücü süre, bir çalışanın ahlak ve iyiniyet kurallarına aykırı davranışını işverenin öğrendiği günden başlıyor ve yalnızca 6 iş günü sürüyor. Soruşturma, üst onayı ve hukuk görüşü derken bu süreyi kaçıran işverenler, kesin ve belgeli bir olayda bile kıdem ve ihbar tazminatı ödemek zorunda kalıyor.",
    tag: "Hukuk ve Vergi",
    date: "14 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "sosyal-medyada-satisin-vergi-radarina-girmesi",
    title:
      "Sosyal Medyada Satış Yapmak Artık Neden Eskisi Kadar 'Gayri Resmi' Değil?",
    excerpt:
      "5 Eylül 2026'da yayımlanan 595 Sıra No'lu Vergi Usul Kanunu Genel Tebliği, dijital ortamdaki bildirim yükümlülüğünü sosyal ağ sağlayıcılarına ve ilan yayınlayan yer sağlayıcılarına kadar genişletti. Instagram vitrinleri ve sosyal medya üzerinden satış yapan küçük işletmeler için hacimden bağımsız yeni bir takip dönemi başlıyor.",
    tag: "Hukuk ve Vergi",
    date: "13 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "satis-tek-kisinin-hafizasinda-kalinca",
    title:
      "Satış Müdürü İzne Çıkınca Şirket Neden Amneziye Giriyor?",
    excerpt:
      "Bir tekstil firmasında satış müdürü iki haftalık izne çıktığında, hangi müşteriye son teklifin ne zaman gönderildiğini kimse hatırlamıyor. Satışın yazılı bir stratejiye değil tek bir kişinin hafızasına bağlı kalması, KOBİ'lerde büyümeyi frenleyen görünmez risklerden biri.",
    tag: "Strateji",
    date: "12 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "imalat-pmi-toparlanma-mi-yavaslayan-daralma-mi",
    title:
      "PMI Üçüncü Ayın En Yüksek Seviyesinde: Bu Gerçekten Toparlanma mı?",
    excerpt:
      "İSO Türkiye İmalat PMI ağustosta 48,1'e çıkarak manşetlerde 'toparlanma işareti' olarak yer aldı. Ama endeks hâlâ 50 eşiğinin altında, yeni siparişler üçüncü ay üst üste geriliyor ve girdi maliyeti enflasyonu son üç ayın zirvesinde. Rakamı manşetten değil, alt kalemlerden okumak gerekiyor.",
    tag: "Görüş",
    date: "11 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yeni-tesvik-belgesinde-100-milyon-1-milyar-esigi",
    title:
      "Yeni Finansman Belgesi Duyuruldu: KOBİ mi, Büyük Yatırımcı mı İçin?",
    excerpt:
      "3 Eylül 2026'da Sanayi ve Teknoloji Bakanlığı, yatırım teşvik belgesi sahipleri için Öncelikli Finansman Belgesi ve Teknik ve Stratejik Öncelik Belgesi'ni yürürlüğe koydu. Asgari yatırım tutarları 100 milyon TL ve 1 milyar TL; küçük ve orta ölçekli işletmeler için asıl kapı hâlâ başka yerde duruyor.",
    tag: "Görüş",
    date: "10 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "kurumsal-kulturde-77-37-farki",
    title: "Yöneticilerin Yüzde 77'si, Çalışanların Yüzde 37'si: Kültür Aynı Şirkette Neden Bu Kadar Farklı Görünüyor?",
    excerpt:
      "DHR Global'in 2026 Workforce Trends Raporu'na göre yöneticilerin yüzde 77'si şirket kültürünü çok önemli buluyor, giriş seviyesi çalışanların sadece yüzde 37'si aynı fikirde. Aradaki fark bir algı hatası değil, kültürün büyürken katman katman kaybolmasının sonucu.",
    tag: "Görüş",
    date: "9 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "doviz-donusum-destegindeki-sessiz-degisiklik",
    title:
      "1 Ekim'e İki Ay Kala: Döviz Dönüşüm Desteğinde Taahhütten Pozisyona Geçiş",
    excerpt:
      "1 Ağustos 2026'da yayımlanan 2026/11 sayılı Tebliğ, ihracatçıların yıllardır verdiği 'döviz almama taahhüdü'nü kaldırıp 'döviz pozisyonu esası'na geçti. Aynı ayda dış ticaret açığı yüzde 22,3 büyürken, 1 Ekim'de fiilen başlayacak yeni sistem ihracatçı firmaların hazine süreçlerini doğrudan etkiliyor.",
    tag: "Strateji",
    date: "8 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "bagimsiz-denetim-esiginde-gozden-kacan-iki-kural",
    title:
      "Bağımsız Denetim Eşiği Yükseldi: Rahatlamak İçin Neden Erken?",
    excerpt:
      "17 Mart 2026'da aktif toplamı ve ciro eşikleri belirgin biçimde yükseltildi, birçok şirket kapsam dışına çıkacağını düşündü. Ama kapsamdan çıkış tek bir yılın rakamına değil, art arda iki hesap dönemine göre belirleniyor ve grup şirketlerinde konsolide büyüklük hâlâ sürpriz yapabiliyor.",
    tag: "Görüş",
    date: "7 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "ortaklik-ayriliginda-hangi-sirket-degeri-gecerli",
    title:
      "İki Ortak Ayrılıyor, İki Farklı Şirket Değeri Ortaya Çıkıyor: Hangisi Geçerli?",
    excerpt:
      "Ortaklık ayrılıklarını bozan şey genelde para değil, aynı şirket için kullanılan iki farklı hesaplama yöntemi. Ayrılan ortak kuruluş yılındaki emeğe bakar, kalan ortak bugünkü bilançoya; ikisi de kendi açısından haklıdır, ikisi de nesnel değildir. Bağımsız bir değerleme, tartışmayı duygudan çıkarıp rakama taşıyan tek şey.",
    tag: "Strateji",
    date: "6 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "musteri-verisi-yurt-disi-sunucuya-giden-kobi",
    title:
      "Kargo Firmasına, E-posta Programına, Muhasebe Yazılımına: Müşteri Verisi Kaç Şirkete Gidiyor?",
    excerpt:
      "Bir KOBİ'nin müşteri listesi tek bir yerde durmuyor artık: kargo firması, yurt dışı sunuculu e-posta pazarlama aracı, bulut muhasebe programı, CRM... Her biri ayrı bir veri aktarımı ve KVKK'nın veri güvenliği yükümlülüğü kapsamına giriyor. Şirket büyüdükçe bu zincir uzuyor, ama envanteri çıkaran çoğu zaman kimse olmuyor.",
    tag: "Görüş",
    date: "5 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "imalat-finansman-paketinde-istihdam-sarti",
    title:
      "250 Milyar TL'lik İmalat Finansman Paketinde Görünmeyen Şart: İstihdam Taahhüdü",
    excerpt:
      "1 Eylül'de başvuruları açılan İmalat Sanayi Finansman Desteği'nde 12 puanlık faiz avantajının koşulu, işletmenin 2026'nın ikinci yarısında ilk yarıdaki istihdam seviyesini koruması. Düşük faiz cazip görünse de, kredi aslında altı aylık bir işgücü taahhüdü; herkes için aynı anlama gelmiyor.",
    tag: "Strateji",
    date: "4 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tescilsiz-markanin-buyudukce-artan-riski",
    title: "Markanız Büyüdükçe, Tescilsiz Kalmanın Riski de Büyüyor",
    excerpt:
      "Türk hukukunda marka koruması kullanımdan değil tescilden doğuyor. Bir işletme ne kadar tanınır hale gelirse, markasının başkası tarafından fark edilip erken tescil ettirilme riski de o kadar artıyor: küçükken kimse bakmıyor, büyüyünce herkes bakıyor.",
    tag: "Görüş",
    date: "4 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "satin-almada-sozlesmedeki-gizli-madde-kontrol-degisikligi",
    title:
      "Şirketi Satın Aldınız, Ertesi Gün En Büyük Müşteriniz Gitti: Sözleşmedeki Görünmeyen Madde",
    excerpt:
      "Kontrol değişikliği (change of control) maddesi, bir şirketin ortaklık yapısı değiştiği anda karşı tarafa sözleşmeyi tek taraflı fesih hakkı tanıyabiliyor. Bilanço satın almadan önce satır satır incelenir; sözleşmelerin ek maddeleri genelde son sıraya bırakılıyor. Oysa fiyatı asıl belirleyen çoğu zaman orada saklı.",
    tag: "Görüş",
    date: "4 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "indirim-ilanlarinda-10-gunluk-referans-fiyat-kurali",
    title:
      "Sonbahar Kampanyası Hazırlayan İşletmelerin Gözden Kaçırdığı Kural: 10 Günlük Referans Fiyat",
    excerpt:
      "Ticaret Bakanlığı'nın 1 Ağustos 2026'da yürürlüğe giren yönetmelik değişikliğiyle, bir ürüne 'indirim' etiketi konabilmesi için referans fiyatın kampanya öncesi son 10 günün en düşük fiyatı olması zorunlu. Sonbahar kampanya sezonuna hazırlanan işletmelerin bu kuralı fark etmeden ihlal ettiği üç tipik hata.",
    tag: "Hukuk ve Vergi",
    date: "3 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "satin-almada-ihmal-edilen-entegrasyon-kultur",
    title:
      "Santander, TSB'yi Satın Aldı: Mahkemelik Olan Şey Bilanço Değil, Çalışma Şekliydi",
    excerpt:
      "Santander, TSB'yi 2,9 milyar sterline satın aldıktan kısa süre sonra 5.000 çalışana daha önce hiç olmayan bir kural bildirdi: haftada üç gün ofis zorunluluğu. Şimdi sendika konuyu İş Mahkemesi'ne taşıyor. Birleşme ve devralmalarda en pahalıya patlayan ihmal genelde bilanço değil, kültür.",
    tag: "Görüş",
    date: "2 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "e-ihracat-zirvesi-alici-artik-insan-degilse",
    title:
      "1 Milyar Dolarlık Zirve: E-İhracatta Asıl Soru Pazar Yeri Değil, Alıcının Kim Olduğu",
    excerpt:
      "3-5 Eylül'de İstanbul'da düzenlenen Küresel E-İhracat Zirvesi'nde bu yıl da 1 milyar doların üzerinde işlem hacmi bekleniyor; gündemde artık yapay zeka ajanlarının ticaretteki rolü var. KOBİ'lerin sorması gereken soru değişiyor: ürün sayfası bir insanı ikna edecek şekilde yazılmışsa, aynı sayfa bir alışveriş ajanını da ikna edebilir mi?",
    tag: "Görüş",
    date: "2 Eylül 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "faiz-indirimi-basladi-buyume-plani-hazir-mi",
    title: "Faiz İndirimi Başladı: Asıl Soru Kimin Büyüme Planı Hazır?",
    excerpt:
      "TCMB piyasayı yeniden yüzde 37'den fonlamaya başladı, kamu bankaları ticari kredi faizini pazartesiden itibaren 2-3 puan indiriyor. İki yıllık sıkı para politikasının ardından KOBİ'ler için asıl soru faizin ne kadar düştüğü değil, düşünce elde hazır bir büyüme planı olup olmadığı.",
    tag: "Strateji",
    date: "31 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "dort-gunluk-mesai-haftasi-kobiler-icin-gercek-soru",
    title:
      "Dört Günlük Mesai Tartışması: KOBİ'ler İçin Asıl Soru Ne?",
    excerpt:
      "Orta Vadeli Program'da geçen bir cümle 'Türkiye dört günlük mesaiye geçiyor' başlıklarına dönüştü, oysa kapsam ve tarih henüz netleşmedi. Polonya ve İngiltere örnekleri, İş Kanunu'ndaki iki farklı model ve KOBİ'lerin tartışmadan önce cevaplaması gereken gerçek soru.",
    tag: "Görüş",
    date: "31 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "roman-uzay-teleskobu-derinlik-mi-genislik-mi-buyume-dersi",
    title:
      "Roman Uzay Teleskobu Fırlatıldı: Derinlik mi, Genişlik mi? Büyümede Doğru Soru Hangisi?",
    excerpt:
      "30 Ağustos 2026'da fırlatılan Roman Uzay Teleskobu, Hubble'dan en az 100 kat geniş bir alanı, 1000 kat daha hızlı tarayacak; üstelik aynı netlikte. Adını taşıdığı Nancy Grace Roman'ın hikayesiyle birlikte, şirketler için niş derinlik ile pazar genişliği arasındaki klasik ikilemi yeniden düşündüren bir örnek.",
    tag: "Strateji",
    date: "31 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "cotton-candy-uzum-ve-cuties-mandalinanin-markalasma-dersi",
    title:
      "Aynı Üzüme İki Kat Fiyat: Cotton Candy Üzüm ve Cuties Mandalinanın Markalaşma Dersi",
    excerpt:
      "Sekiz yıllık bir çaprazlama çalışmasıyla geliştirilen Cotton Candy üzüm, sıradan üzümün iki katı fiyata satılıp ABD'de 129 milyon dolarlık satışa ulaştı. Mandalinaya 'Cuties' adı verilince insanlar markette meyveyi değil markayı istemeye başladı. Emtia sanılan ürünlerde bile markalaşmanın ne kadar güçlü bir fiyat aracı olduğunu gösteren iki hikaye.",
    tag: "Strateji",
    date: "30 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "aile-sirketinde-eksik-kalan-yazili-kural",
    title: "Aile Şirketinde Eksik Kalan Yazılı Kural: Aile Anayasası",
    excerpt:
      "PwC'ye göre aile şirketlerinin yalnızca yüzde 33'ü ikinci nesle sağlıklı geçebiliyor; Türkiye'de ortaklığın giderilmesi davaları 2014-2021 arasında iki kattan fazla arttı. Aradaki fark genelde tek bir belge: aile anayasası.",
    tag: "Strateji",
    date: "29 Ağustos 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "ilk-girisim-battiginda-silikon-vadisi-farki",
    title:
      "İlk Girişim Battığında: Silikon Vadisi'nin Bakışı Türkiye'dekinden Neden Farklı",
    excerpt:
      "Evan Williams'ın Twitter'dan önce Odeo'yu, Travis Kalanick'in Uber'den önce Scour'u batırdığı çoğu zaman unutuluyor. Silikon Vadisi'nde 'battı' bir CV maddesiyken, Türkiye'de hâlâ bir stigma. Bu fark, yatırımcı-girişimci ilişkisini nasıl şekillendiriyor?",
    tag: "Görüş",
    date: "29 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "bridgestonun-18-yillik-lastik-sabrinin-dersi",
    title: "18 Yıllık Ar-Ge, Saatte 20 Kilometre: Bridgestone'un Sabır Dersi",
    excerpt:
      "Bridgestone'un patlamayan lastiği 18 yıllık geliştirmenin ardından Japonya'da küçük bir dağ köyünde, saatte 20 kilometre hız sınırıyla trafiğe çıktı. Büyük bir teknolojiyi en riskli değil en güvenli yerde test etmenin stratejik dersi.",
    tag: "Strateji",
    date: "28 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "ise-alim-sureclerinde-hayalet-olmak",
    title: "İşe Alımda \"Hayalet\" Olmak: Artık İki Taraf da Birbirini Suçluyor",
    excerpt:
      "İşe alınmayan adayların şirket tarafından hiç geri dönüş almama oranı 2026'da %53'e çıktı. Adayların %32'si şirketi, işverenlerin çoğu adayı suçluyor. KOBİ ölçeğinde bu sessizliğin faturası itibar üzerinden ödeniyor.",
    tag: "Görüş",
    date: "27 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "turkiyenin-yapay-zeka-plani-kobiler-icin-ne-anlama-geliyor",
    title: "Türkiye'nin Yapay Zeka Planı Açıklandı: KOBİ Sahipleri İçin Gerçek Anlamı Ne?",
    excerpt:
      "Resmî Gazete'de yayımlanan 2026-2030 Yapay Zeka Eylem Planı'nı gören bir müşterim beni aradı: \"Bizim gibi küçük bir firma için bir anlamı var mı?\" Dürüst cevabım: şu an için doğrudan değil, ama yakından takip etmeye değer.",
    tag: "Strateji",
    date: "24 Ağustos 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "sgk-borc-yapilandirmasinda-son-hafta",
    title: "SGK Borç Yapılandırması Kapandı: Fırsatı Kaçıranlar İçin Sıradaki Adımlar",
    excerpt:
      "Tecil süresini 36 aydan 72 aya çıkaran SGK borç yapılandırması başvuruları 31 Ağustos'ta sona erdi. Fırsatı değerlendiremeyen işverenler için mevcut durum, riskler ve bir sonraki yapılandırma dönemine hazırlık.",
    tag: "Görüş",
    date: "22 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yuksek-faiz-reel-sektoru-nasil-sikistiriyor",
    title: "Takipteki Krediler %81 Arttı: Yüksek Faiz Reel Sektörü Nasıl Sıkıştırıyor?",
    excerpt:
      "2026'nın ilk yarısında takipteki krediler %81 artarak 773,3 milyar TL'ye ulaştı; tarımda %242, imalatta %103. Bu rakamlar üzerinden danışmanlık masasında en sık gördüğüm üç hatayı anlatıyorum.",
    tag: "Strateji",
    date: "19 Ağustos 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "dijital-donusum-kobilerde-neden-gecikir",
    title: "Dijital Dönüşüm KOBİ'lerde Neden Gecikir?",
    excerpt:
      "Sipariş takibini WhatsApp grubundan yapan bir firma, yurt dışı siparişini zamanında yetiştiremediği için kaybetti. Sorun üretim kapasitesi değildi, bilginin nerede olduğuydu.",
    tag: "Görüş",
    date: "17 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "sessiz-cokus-ekipte-fark-edilmeyen-tukenmislik",
    title: "Quiet Cracking: Ekibinizde Sessizce Tükenenleri Nasıl Fark Edersiniz?",
    excerpt:
      "2026'nın yeni İK terimi \"quiet cracking\": çalışan işi bırakmadan, şikayet etmeden sessizce motivasyonunu kaybediyor. Danışmanlık yaptığım ekiplerde gördüğüm üç erken belirti ve ne yapılabileceği.",
    tag: "Görüş",
    date: "16 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "isten-cikarmalarda-yapay-zeka-bahanesi",
    title: "İşten Çıkarmalarda \"Yapay Zeka\" Bahanesi: Gerçek Neden Ne Kadar Farklı?",
    excerpt:
      "Block %40, Cloudflare %20 küçüldü, ikisi de gerekçe olarak yapay zekayı gösterdi. Ama veriler ABD'deki işten çıkarmaların yalnızca %4,5'inin doğrudan yapay zeka kaynaklı olduğunu söylüyor. Aradaki fark, iş sahipleri için önemli bir ders barındırıyor.",
    tag: "Görüş",
    date: "15 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yapay-zeka-ajanlari-kobiler-nereden-baslamali",
    title: "Yapay Zeka Ajanları (Agentic AI): KOBİ'ler Nereden Başlamalı?",
    excerpt:
      "Gartner, 2027 sonuna kadar yapay zeka ajanı projelerinin %40'ından fazlasının iptal edileceğini öngörüyor. Sebep teknoloji değil, yanlış başlangıç. KOBİ'ler için doğru başlangıç noktası ne olmalı?",
    tag: "Strateji",
    date: "14 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "linkedinde-herkes-ceo-unvan-enflasyonu",
    title: "LinkedIn'de Herkes CEO: Unvan Enflasyonu Üzerine",
    excerpt:
      "Üç kişilik bir şirkette üç tane \"Founder & CEO\" görmek artık şaşırtıcı değil. Ama unvan enflasyonu, kiminle gerçekten iş yaptığınızı anlamanızı da zorlaştırıyor.",
    tag: "Görüş",
    date: "14 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "enflasyon-beklentisi-kobiler-icin-ne-anlama-geliyor",
    title:
      "Merkez Bankası Anketinde Yıl Sonu Beklentisi Yükseldi, 12 Ay Sonrası Düştü: Bu Çelişki KOBİ'lere Ne Anlatıyor?",
    excerpt:
      "TCMB'nin Ağustos anketinde yıl sonu enflasyon beklentisi %29,43'e çıkarken 12 ay sonrası beklenti geriledi. Bu ayrışma, fiyatlama ve finansman kararlarında farklı bir bakış gerektiriyor.",
    tag: "Strateji",
    date: "14 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "neden-her-kobi-devlet-destegine-basvurmali",
    title: "Neden Her KOBİ Devlet Desteğine Başvurmalı (Ama Çoğu Başvurmuyor)",
    excerpt:
      "\"Devlet desteği bize göre değil\" cümlesini onlarca kez duydum. Gerçek şu ki KOSGEB, TÜBİTAK ve yatırım teşvik sisteminin çoğu programı doğrudan KOBİ'ler için tasarlanmış.",
    tag: "Görüş",
    date: "12 Ağustos 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "danismanlik-yaparken-ogrendigim-5-sey",
    title: "Danışmanlık Yaparken Öğrendiğim 5 Şey",
    excerpt:
      "Danışmanlığın aslında bilgiyi aktarmak değil, doğru soruyu sormak olduğunu öğrendim. Yıllar içinde fark ettiğim beş dersi burada paylaşıyorum.",
    tag: "Deneyim",
    date: "5 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tesvik-sistemi-aslinda-bu-kadar-basit",
    title: "Teşvik Sistemini Karmaşık Bulanlara: Aslında Bu Kadar Basit",
    excerpt:
      "Karmaşık olan sistem değil, anlatılan hikaye. Teşvik sisteminin özü aslında üç basit soruya iniyor: nerede, ne ve ne kadar.",
    tag: "Görüş",
    date: "29 Temmuz 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yurt-disina-acilmadan-once-3-soru",
    title: "Yurt Dışına Açılmadan Önce Sormanız Gereken 3 Soru",
    excerpt:
      "\"Hangi ülke daha avantajlı\" sorusu erken bir soru. Ondan önce cevaplanması gereken üç soru var ve bu soruları atlayan projeler ilk yıl ciddi sorunlar yaşıyor.",
    tag: "Strateji",
    date: "20 Temmuz 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "is-gelistirmede-en-cok-yapilan-hata",
    title: "İş Geliştirmede En Çok Yapılan Hata",
    excerpt:
      "En sık yapılan hata yanlış müşteriyi hedeflemek değil, iş geliştirmeyi \"yeni müşteri bulma\" ile aynı şey sanmak.",
    tag: "Görüş",
    date: "13 Temmuz 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "girisimcilik-ekosisteminde-sermayeye-erisim-sorunu",
    title:
      "EY Girişimcilik Barometresi 2026: Sermayeye Erişim Neden Hâlâ En Büyük Engel?",
    excerpt:
      "Girişimcilerin yüzde 71'i finansmana erişimi, yüzde 70'i ekonomik belirsizliği temel sorun görüyor; öz kaynak yüzde 61'le hâlâ birinci sırada, teşvik ve hibeler ise sadece yüzde 14'te. Ekosistem algısı iyileşirken sermaye musluğu neden aynı kalıyor?",
    tag: "Yatırım",
    date: "21 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "bayilik-anlasmasinda-gozden-kacan-madde",
    title: "Bayilik Anlaşmasında Gözden Kaçan Madde: Performans Şartı",
    excerpt:
      "Bir bölgeyi münhasır olarak tek bir bayiye kapatıp karşılığında ölçülebilir hiçbir hedef koymamak, danışmanlık sürecinde en sık karşılaşılan kanal yönetimi hatalarından biri.",
    tag: "Strateji",
    date: "20 Ağustos 2026",
    readTime: "3 Dakika",
  },
  {
    slug: "genc-kadinlarda-issizlik-neden-iki-kat",
    title: "Genç Kadınlarda İşsizlik Neden Erkeklerin Neredeyse İki Katı?",
    excerpt:
      "TÜİK'in ikinci çeyrek verilerine göre genç işsizlik geriledi ama cinsiyet farkı büyük: genç erkeklerde %11, genç kadınlarda %19,3. Bu fark KOBİ'lerin işe alım stratejisine ve kullanılmayan bir teşvike ne söylüyor?",
    tag: "Görüş",
    date: "23 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "muzayede-gecesinde-40-dakikada-kirilan-rekorun-dersi",
    title: "Christie's Müzayedesinde 40 Dakikada 1,1 Milyar Dolar: Sanat Piyasası Ne Anlatıyor?",
    excerpt:
      "19 Mayıs 2026'da New York'ta Christie's'te bir gecede 1,1 milyar dolarlık satış gerçekleşti, ilk 40 dakikada 630 milyon dolar. Jackson Pollock'un bir tablosu 181,2 milyon dolara alıcı buldu. Rakamların arkasında sanattan çok, değer yaratmayla ilgili bir ders var.",
    tag: "Görüş",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "all-blacksin-77-kazanma-oraninin-arkasindaki-kultur",
    title: "Dünyanın En Başarılı Spor Takımının Sırrı: %77 Kazanma Oranı Nereden Geliyor?",
    excerpt:
      "Yeni Zelanda ragbi milli takımı All Blacks, 150 yılı aşkın tarihinde %77'nin üzerinde bir kazanma oranına sahip; herhangi bir büyük spor dalında görülen en yüksek oran. Bu süreklilik taktikten çok bir kültür meselesi.",
    tag: "Görüş",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "terfi-sonrasi-yoneticilige-gecerken-yapilan-3-hata",
    title: "Terfi Sonrası Yöneticiliğe Geçerken Yapılan 3 Hata",
    excerpt:
      "En iyi satış temsilcisini satış müdürü yapmak, çoğu zaman hem iyi bir satışçıyı hem de potansiyel olarak iyi bir müdürü kaybetmek anlamına gelebiliyor. Danışmanlık sürecinde en sık karşılaşılan üç yönetici geçiş hatası.",
    tag: "Görüş",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yapay-zeka-is-mesajlarinizi-yazarken-sorulmayan-soru",
    title: "Yapay Zeka Artık İş Mesajlarınızı Yazabiliyor: Asıl Sorulması Gereken Soru",
    excerpt:
      "OpenAI, ChatGPT'nin Mac'te Apple Mesajlar uygulamasına erişip mesaj taslağı hazırlamasına ve göndermesine izin veren bir eklenti yayımladı. Özellik kullanışlı, ama KOBİ'lerin çoğu bu tür entegrasyonları hiçbir güvenlik politikası olmadan devreye alıyor.",
    tag: "Strateji",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "hiz-rekoru-kiran-robot-nasil-duracagini-bilmiyordu",
    title: "Usain Bolt'un Rekorunu Kıran Robot Nasıl Duracağını Bilmiyordu",
    excerpt:
      "Pekin'deki Dünya İnsansı Robot Oyunları'nda Tiangong Ultra, 100 metreyi 9,39 saniyede koşarak Usain Bolt'un rekorunu kırdı. Ama yarışı bitirdikten sonra frenleyemedi, dolgulu bir duvara çarparak durabildi. Hız kazanmakla kontrolü elde tutmak aynı şey değil.",
    tag: "Strateji",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yapay-zekada-deneme-donemi-bitti-olcek-donemi-basladi",
    title:
      "Deloitte 2026 Raporu: Yapay Zekada 'Deneme' Dönemi Bitti, Şimdi Sıra Ölçeklemede",
    excerpt:
      "Deloitte'un 17. kez yayımladığı Teknoloji Trendleri 2026 raporuna göre yapay zeka girişimleri gelirini SaaS şirketlerine kıyasla 5 kat daha hızlı büyütüyor. Ama çoğu KOBİ hâlâ 'önce bir pilot deneyelim' aşamasında bekliyor.",
    tag: "Strateji",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "curiosityin-14-yillik-sabrinin-karsiligi",
    title:
      "Curiosity'nin Mars'ta 14 Yıllık Sabrının Karşılığı: 20'den Fazla Organik Molekül",
    excerpt:
      "NASA'nın Curiosity aracı, 2012'den beri incelediği 3,5 milyar yıllık Mars kayalarında 20'den fazla organik molekül tespit etti. Bu keşfi özel kılan hız değil, on dört yıllık sabırlı bir birikim.",
    tag: "Görüş",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "kararlarinizi-gercekte-kim-veriyor",
    title: "Bir Kararı Gerçekte Kim Veriyor? Beyin Haritası Şirketler İçin de Bir Şey Söylüyor",
    excerpt:
      "22 laboratuvardaki nörobilimcilerin ortak çalışmasıyla bir memeli beyninin karar anındaki tam aktivite haritası ilk kez çıkarıldı: karar anında tek bir bölge değil, beynin pek çok bölgesi birden aydınlanıyor. Şirketlerdeki kararlar da sanıldığından çok daha dağınık bir süreçten geçiyor.",
    tag: "Görüş",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "michelinin-kapadokyaya-girmesinin-dersi",
    title: "Michelin Rehberi İlk Kez Kapadokya'ya Girdi: Kimse Beklemiyordu",
    excerpt:
      "Michelin Rehberi'nin 2026 Türkiye seçkisinde yıldızlı restoran sayısı 17'ye çıktı, ama en dikkat çekici gelişme bir yıldız daha değildi: Michelin ilk kez Kapadokya'daki bir restorana girdi. Rekabetin en yoğun olduğu yerde değil, kimsenin beklemediği yerde fark yaratmanın hikayesi.",
    tag: "Strateji",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "plak-satislari-neden-hala-artiyor",
    title: "Plak Satışları 19 Yıldır Kesintisiz Artıyor: Dijital Çağda Bir Fiziksel Ürünün Dersi",
    excerpt:
      "RIAA verilerine göre plak satışları geçen yıl 1 milyar doları geçti; bu 1983'ten bu yana ilk kez yaşanan bir rakam. Sınırsız ve neredeyse ücretsiz dijital alternatif varken bir fiziksel ürünün ayakta kalmasının arkasında üç neden var.",
    tag: "Strateji",
    date: "24 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "yoneticiler-neden-sessizce-geri-cekiliyor",
    title: "Sessiz İstifa Artık Çalışanların Değil, Yöneticilerin Sorunu",
    excerpt:
      "Gallup'ın 2026 Küresel İşyeri Raporu'na göre yönetici bağlılığı 2022'de %31 iken 2025'te %22'ye düştü; çalışan bağlılığı aynı dönemde neredeyse hiç değişmedi. Şirketler yanlış katmana odaklanıyor olabilir.",
    tag: "Görüş",
    date: "25 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "asil-toplanti-koridorda-yapiliyor",
    title: "Asıl Toplantı, Toplantı Bittikten Sonra Koridorda Yapılıyor",
    excerpt:
      "Toplantı odasında herkes başını sallar, kapı kapanır kapanmaz gerçek görüşler ortaya dökülür. Danışmanlık literatüründe buna \"toplantı sonrası toplantı\" deniyor ve bu durum aslında toplantı kültürüne dair ciddi bir uyarı.",
    tag: "Görüş",
    date: "26 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "asgari-sermaye-artirimini-erteleyenler",
    title: "Asgari Sermaye Artırımını Erteleyenler Neyi Gözden Kaçırıyor?",
    excerpt:
      "\"Biz zaten büyüdük, bilançomuz farklı\": asgari sermaye artırımı gündeme geldiğinde duyulan ilk cümle bu. Ama Geçici Madde 15 bilançoya değil, esas sermayeye bakıyor ve 31 Aralık 2026 takvimi kesin.",
    tag: "Strateji",
    date: "20 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tedarikcinden-gelen-tsrs-talebi",
    title: "TSRS'de Eşiğin Altında Kalmak, Talepten Muaf Olmak Değil",
    excerpt:
      "Bir tekstil ihracatçısı TSRS eşiğinin dışında kaldığını düşünüp rahatladı. Üç ay sonra İtalyan bir alıcı sürdürülebilirlik raporu istedi. Yasal muafiyetle ticari muafiyet aynı şey değil.",
    tag: "Görüş",
    date: "20 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "kosgeb-yapay-zeka-kredisinin-gozden-kacan-sarti",
    title: "KOSGEB'in Yapay Zekâ Kredisinde Rakamdan Daha Önemli Olan Şart",
    excerpt:
      "5 milyon TL'ye kadar faizsiz destek dikkat çekiyor, ama asıl belirleyici olan 12 aylık ödemesiz dönem ve Teknogirişim Rozeti şartı. Çoğu işletme krediyi reddedilmiyor, ona hiç başvuramıyor.",
    tag: "Strateji",
    date: "21 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "tubitak-1832-geri-odemeli-hibeye-donusen-destek",
    title: "TÜBİTAK 1832'de Destek Neden Önce Kredi, Sonra Hibe Oluyor?",
    excerpt:
      "51,5 milyon TL'ye kadar destek öngören Yeşil Dönüşüm Çağrısı'nda para önce faizsiz kredi olarak veriliyor, yeşil başarı kriterleri tutturulunca yarısı hibeye dönüşüyor. Bu yapı saf hibeden neden daha akıllı?",
    tag: "Strateji",
    date: "21 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "isletmenize-disaridan-bakmak",
    title: "İşletmenize Ayna Tutuyoruz: Vergi Risk, Teşvik ve Kredibilite Körlüğü",
    excerpt:
      "Vergi riskini bir ceza tebligatıyla, kaçırılan teşviki bir rakibin haberiyle, kredibilite zayıflığını bir banka reddiyle öğrenmek: üçü de önceden görülebilir, kaynağı aynı kör nokta.",
    tag: "Görüş",
    date: "21 Ağustos 2026",
    readTime: "2 Dakika",
  },
];
