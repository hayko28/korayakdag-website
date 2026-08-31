export interface MakaleMeta {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
}

// Koray'ın kişisel görüş yazıları — SEO odaklı blog rehberlerinden ayrı,
// birinci ağızdan kısa deneyim/görüş metinleri.
export const MAKALELER: MakaleMeta[] = [
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
    title: "SGK Borç Yapılandırmasında Son Hafta: 72 Ay Taksit İçin 31 Ağustos",
    excerpt:
      "7582 sayılı Kanun'la tecil süresi 36 aydan 72 aya çıktı, teminatsız tecil sınırı yükseldi. Ama 31 Ağustos'tan sonra hem avantajın bir kısmı hem de %29'luk faiz oranı kayboluyor. İşverenler için pratik bir bakış.",
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
      "Sipariş takibini WhatsApp grubundan yapan bir firma, yurt dışı siparişini zamanında yetiştiremediği için kaybetti. Sorun üretim kapasitesi değildi — bilginin nerede olduğuydu.",
    tag: "Görüş",
    date: "17 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "sessiz-cokus-ekipte-fark-edilmeyen-tukenmislik",
    title: "Quiet Cracking: Ekibinizde Sessizce Tükenenleri Nasıl Fark Edersiniz?",
    excerpt:
      "2026'nın yeni İK terimi \"quiet cracking\" — çalışan işi bırakmadan, şikayet etmeden sessizce motivasyonunu kaybediyor. Danışmanlık yaptığım ekiplerde gördüğüm üç erken belirti ve ne yapılabileceği.",
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
      "\"Hangi ülke daha avantajlı\" sorusu erken bir soru. Ondan önce cevaplanması gereken üç soru var — ve bu soruları atlayan projeler ilk yıl ciddi sorunlar yaşıyor.",
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
      "Yeni Zelanda ragbi milli takımı All Blacks, 150 yılı aşkın tarihinde %77'nin üzerinde bir kazanma oranına sahip — herhangi bir büyük spor dalında görülen en yüksek oran. Bu süreklilik taktikten çok bir kültür meselesi.",
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
      "Toplantı odasında herkes başını sallar, kapı kapanır kapanmaz gerçek görüşler ortaya dökülür. Danışmanlık literatüründe buna \"toplantı sonrası toplantı\" deniyor — ve bu durum aslında toplantı kültürüne dair ciddi bir uyarı.",
    tag: "Görüş",
    date: "26 Ağustos 2026",
    readTime: "2 Dakika",
  },
  {
    slug: "asgari-sermaye-artirimini-erteleyenler",
    title: "Asgari Sermaye Artırımını Erteleyenler Neyi Gözden Kaçırıyor?",
    excerpt:
      "\"Biz zaten büyüdük, bilançomuz farklı\" — asgari sermaye artırımı gündeme geldiğinde duyulan ilk cümle bu. Ama Geçici Madde 15 bilançoya değil, esas sermayeye bakıyor ve 31 Aralık 2026 takvimi kesin.",
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
      "Vergi riskini bir ceza tebligatıyla, kaçırılan teşviki bir rakibin haberiyle, kredibilite zayıflığını bir banka reddiyle öğrenmek — üçü de önceden görülebilir, kaynağı aynı kör nokta.",
    tag: "Görüş",
    date: "21 Ağustos 2026",
    readTime: "2 Dakika",
  },
];
