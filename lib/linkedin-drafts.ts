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
      "1.160 işletme, 14,8 milyar TL.\n\nKOSGEB'in geçen yıl Kapasite Geliştirme Destek Programı'yla imalat sektörüne aktardığı rakam bu. 2026 hedefi ise neredeyse iki katı: 2.440 işletme, 38,4 milyar TL.\n\nProgram, 1-20 milyon TL arasındaki yatırımlara %20 puanlık faizsiz finansman desteği sağlıyor. Başvurular yıl içinde üç dönemde açılıyor: Şubat, Mayıs, Ağustos.\n\nDanışmanlık yaptığım imalatçı KOBİ'lerin çoğu bu programı bilmiyor ya da \"bize göre değil\" diye geçiyor. Oysa teminat sıkıntısı yaşayan firmalar için tam tersi — %20 puanlık faizsiz kısmı banka kredisiyle birlikte kullandığınızda toplam maliyet belirgin şekilde düşüyor.\n\nAğustos dönemi başvuruları şu an açık. Üretim kapasitenizi büyütmeyi düşünüyorsanız bu üç ay kritik.\n\nGüncel gelişmeleri buradan takip ediyorum: https://korayakdag.com/guncel-gelismeler\n\n#KOSGEB #KOBİ #İmalat #DevletDestekleri #Finansman #Girişimcilik #ÜretimKapasitesi #StratejikDanışmanlık #Teşvik #İşGeliştirme",
    kaynakBaslik:
      "KOSGEB Kapasite Geliştirme Destek Programı'nda 2026 rakamları ve başvuru takvimi açıklandı",
    kaynakUrl:
      "https://www.kosgeb.gov.tr/site/tr/genel/detay/9353/kobilerin-buyume-ve-gelisimine-guclu-destek",
    gorselUrl:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
