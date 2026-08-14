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
      "TÜBİTAK artık \"iyi bir proje\" sormuyor, \"bir önceki projeniz gerçekten ticarileşti mi\" diye soruyor.\n\n1501 ve 1507 Ar-Ge destek programlarının 2026 yılı ikinci çağrıları açıldı. Değişiklik küçük görünüyor ama etkisi büyük: artık geçmiş TÜBİTAK projelerinizin ticarileşme performansına göre -5 ile +5 puan arasında ek puan alıyor ya da kaybediyorsunuz.\n\nYani üst üste üç proje yapıp hiçbirini pazara çıkarmamış bir firmanın dördüncü başvurusu, bu yüzden daha zor geçebilir. Kademeli destek oranı da buna eklenince, TÜBİTAK artık sadece \"ne yapacaksınız\"a değil \"daha önce ne yaptınız\"a bakıyor.\n\nDanışmanlık yaparken en çok gördüğüm hata: firmaların başvuru dosyasını hazırlarken bu geçmiş performans bağlantısını hiç hesaba katmaması. Proje başına destek üst sınırı 20 milyon TL'de sabit kaldı, ama o sınıra kimin daha kolay ulaştığı değişti.\n\nSon TÜBİTAK projeniz gerçekten ticarileşti mi?\n\nGüncel gelişmeleri buradan takip ediyorum: https://korayakdag.com/guncel-gelismeler\n\n#TÜBİTAK #ArGe #Girişimcilik #İnovasyon #KOBİ #Teknoloji #DevletDestekleri #StratejikDanışmanlık #Ticarileşme #İşGeliştirme",
    kaynakBaslik:
      "TÜBİTAK 1501 ve 1507 Ar-Ge destek programlarında 2026 yılı 2. çağrıları açıldı",
    kaynakUrl:
      "https://tubitak.gov.tr/tr/duyuru/1501-sanayi-ar-ge-destek-programi-ve-1507-kobi-ar-ge-baslangic-destek-programi-2026-yili-2-cagrilari-acildi",
    gorselUrl:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
