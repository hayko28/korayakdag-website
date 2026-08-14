export interface LinkedInDraft {
  /** Taslağın hazırlandığı tarih (YYYY-MM-DD) */
  tarih: string;
  /** Paylaşıma hazır, LinkedIn formatında (satır aralıklı) metin */
  icerik: string;
  /** Bu taslağın dayandığı gelişme veya makalenin başlığı */
  kaynakBaslik: string;
  /** İlgili site içeriğine bağlantı (varsa) */
  kaynakUrl?: string;
  /** Konuyla ilgili, telifsiz stok görsel (images.unsplash.com) — LinkedIn
   * paylaşımına eklenmesi için. Koray panelde görüp indirebilir. */
  gorselUrl?: string;
  /** Konuyla ilgili, telifsiz stok video (ör. Pexels) — gorselUrl yerine
   * kullanılabilir. İkisi birlikte doluysa video önceliklidir. */
  videoUrl?: string;
}

// LinkedIn Yazarı agent'ı, her gün yeni bir gelişme veya makale
// yayınlandığında buraya bir LinkedIn paylaşım taslağı ekler. Otomatik
// paylaşılmaz — Koray /yonetim panelinden okuyup kendi LinkedIn'ine kopyalar.
export const LINKEDIN_DRAFTS: LinkedInDraft[] = [
  {
    tarih: "2026-08-14",
    icerik:
      "📢 1 Ağustos'tan itibaren \"sahte indirim\" artık çok daha riskli\n\nGeçen hafta bir e-ticaret girişimcisiyle konuşurken fark ettim ki çoğu marka hâlâ eski indirim alışkanlıklarıyla kampanya kuruyor.\n\nTicaret Bakanlığı'nın yönetmelik değişikliğiyle \"indirim\" iddiası artık tek bir referansa bağlı: kampanya öncesi son 10 günün en düşük fiyatı.\n\nÖrneğin bir ürün son 10 gündür hiç 800 TL'nin altına inmediyse, \"eski fiyat 1000 TL, şimdi 800 TL\" diye pazarlayamazsınız — gerçek referans, o 10 günün en düşüğü olmak zorunda. Bunun altında kalan bir indirim iddiası, Ticaret Bakanlığı denetimlerinde risk oluşturabilir.\n\nSizin ekibiniz kampanya metinlerini bu 10 günlük kurala göre gözden geçirdi mi?\n\n#DijitalPazarlama #Reklam #TicaretBakanlığı #Eticaret #KOBİ #Pazarlama #Girişimcilik #TüketiciHakları #Reklamcılık #EticaretTürkiye",
    kaynakBaslik:
      "Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği'nde dijital pazarlamayı sıkılaştıran değişiklikler yürürlüğe girdi",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/aldaticici-reklam-ve-haksiz-ticari-uygulamalarla-mucadelede-yeni-donem-basliyor",
    gorselUrl:
      "https://images.unsplash.com/photo-1768839721483-c4501b5d6eb3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    tarih: "2026-08-14",
    icerik:
      "Yıl sonu enflasyon beklentisi yükseldi ama 12 ay sonrası için düştü — bu ikisi nasıl aynı anda doğru olabilir?\n\nTCMB'nin bu hafta açıkladığı Ağustos ayı Piyasa Katılımcıları Anketi'nde tam bu tabloyu gördüm. 68 katılımcının (52'si finansal, 16'sı reel sektörden) cari yıl sonu beklentisi %29,21'den %29,43'e çıkarken, 12 ay sonrası beklenti %23,95'ten %23,69'a geriledi.\n\nYani piyasa iki farklı şey söylüyor aynı anda: bu yılı kapatmak biraz daha zor olacak, ama önümüzdeki 12 ay için umut hâlâ canlı.\n\nDanışmanlık yaptığım firmaların çoğu bunu tek bir sayıya indirgeyip ona göre fiyatlama ve finansman kararı alıyor. Oysa bu ayrışmayı görmek — kısa vade için tampon, orta vade için göreli iyileşmeyi hesaba katan bir plan — çok farklı bir karar kalitesi getiriyor.\n\nSiz hangi sayıya göre plan yapıyorsunuz: yıl sonuna mı, 12 ay sonrasına mı?\n\nDetaylı yazım: https://korayakdag.com/makaleler/enflasyon-beklentisi-kobiler-icin-ne-anlama-geliyor\n\n#Enflasyon #TCMB #Ekonomi #KOBİ #Finans #StratejikDanışmanlık #İşDünyası #Makroekonomi #NakitYönetimi #Girişimcilik",
    kaynakBaslik:
      "TCMB Ağustos 2026 Piyasa Katılımcıları Anketi'nde enflasyon beklentileri ayrıştı",
    kaynakUrl:
      "https://korayakdag.com/makaleler/enflasyon-beklentisi-kobiler-icin-ne-anlama-geliyor",
    gorselUrl:
      "https://images.unsplash.com/photo-1757705760133-b39c479dc236?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    tarih: "2026-08-14",
    icerik:
      "LinkedIn'de üç kişilik bir şirkette kaç tane \"CEO & Co-Founder\" olabilir? Geçen hafta gördüğüm bir toplantı listesinde cevap üçtü.\n\nÜç kişi, üçü de aynı unvanla yazıyordu profiline. Muhtemelen biri şirketi gerçekten kuran, biri erken katılan bir ortak, biri de belki daha yeni gelen biriydi — ama unvanlarda hiçbir fark yoktu.\n\nBunda kötü niyet yok, herkes kendi hikayesini istediği gibi anlatabilir. Ama şunu fark ettim: unvan artık neredeyse hiçbir şey söylemiyor. Kiminle gerçekten görüştüğünüzü, kararı kimin verdiğini anlamak için unvana değil, kişinin paylaştığı içeriğe ve gösterdiği sonuçlara bakmak gerekiyor.\n\nBen de profilime \"Danışman\" yazıyorum, çünkü yaptığım iş tam olarak bu — ama itiraf edeyim, bazen daha havalı bir şey yazmak hiç aklımdan geçmiyor değil.\n\nSiz unvanınızı gerçek rolünüze göre mi seçtiniz, yoksa kulağa nasıl geldiğine göre mi?\n\nBu konudaki yazım: https://korayakdag.com/makaleler/linkedinde-herkes-ceo-unvan-enflasyonu\n\n#LinkedIn #İşDünyası #Kariyer #Girişimcilik #KişiselMarka #İşHayatı #Networking #Danışmanlık #Liderlik #StratejikDanışmanlık",
    kaynakBaslik: "Hafif gözlem: LinkedIn'de unvan enflasyonu",
    kaynakUrl:
      "https://korayakdag.com/makaleler/linkedinde-herkes-ceo-unvan-enflasyonu",
    gorselUrl:
      "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    tarih: "2026-08-14",
    icerik:
      "Teknoloji dünyasının önde gelen araştırma şirketi Gartner'a göre, 2026 sonuna kadar kurumsal uygulamaların %40'ı görev bazlı bir yapay zeka ajanı (agentic AI) içerecek — bu oran 2025'te %5'in altındaydı. Aynı Gartner, 2027 sonuna kadar bu projelerin %40'ından fazlasının da iptal edileceğini öngörüyor. Sebep teknoloji değil: artan maliyetler, net olmayan iş değeri, yetersiz risk kontrolü.\n\nYani tabloyu birlikte okuyunca ortaya çıkan şu: adaptasyon hızı çok yüksek, ama aynı hızla şirketlerin büyük bölümü bunu doğru yönetemiyor.\n\n\"Yapay zeka ajanı kuralım\" diye başlamayın. Önce işletmenizde haftada en az birkaç saat manuel işe giden tek bir süreci bulun — fatura eşleştirme, teklif takibi, stok kontrolü, fark etmez. Sadece o süreci otomatikleştirin, sonucu ölçün, ancak ondan sonra genişletin.\n\nBüyük ve belirsiz bir \"dönüşüm projesi\"yle başlamayın; küçük ve ölçülebilir tek bir darboğazla başlayın. Bu hem daha hızlı sonuç verir hem de sizi Gartner'ın öngördüğü o %40'lık iptal grubunun dışında tutar.\n\n2026'da yapay zeka kullanmak artık avantaj değil, temel bir yetkinlik. Kazananla kaybedeni ayıran, hangi süreci seçtiğiniz.\n\nİşletmenizde otomatikleştirmeyi en çok hak eden tek bir süreç hangisi?\n\n#YapayZeka #AgenticAI #KOBİ #Otomasyon #DijitalDönüşüm #Girişimcilik #StratejikDanışmanlık #İşDünyası #Teknoloji #Verimlilik",
    kaynakBaslik:
      "Gartner: Yapay zeka ajanı projelerinin %40'ından fazlası 2027'ye kadar iptal edilecek",
    kaynakUrl:
      "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
    gorselUrl:
      "https://images.unsplash.com/photo-1684369175809-f9642140a1bd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
