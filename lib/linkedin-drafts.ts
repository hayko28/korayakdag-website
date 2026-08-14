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
      "\"On dakikalık hızlı bir görüşme yapalım\" — bu cümleyi duyunca artık takvimimde bir saatlik yer ayırıyorum.\n\nSebebi basit: geçen yıl katıldığım \"on dakikalık\" online görüşmelerden hiçbiri gerçekten on dakikada bitmedi. Ortalama süre 47 dakika oldu. En uzunu bir yatırım teşviki başvurusu içindi — \"sadece iki soru soracağım\" diyerek başladı, iki saat sonra hâlâ ekrandaydık.\n\nAsıl fark ettiğim şey şu oldu: bu \"hızlı\" görüşmeler aslında en verimli olanlar. Kalabalık ve resmi toplantılarda insanlar çekinip asıl derdini söylemiyor; küçük, gündem dışı bir görüşmede ise rahatça soruyor, gerçek meseleyi ortaya koyuyor.\n\nYani \"hızlı görüşme\" dediğimiz o 15 dakikalık slotlar aslında işin en değerli kısmı — sadece adı yanlış konmuş.\n\nSizin takviminizdeki \"hızlı\" görüşmeler gerçekte ne kadar sürüyor?\n\nDanışmanlıkta öğrendiğim diğer derslerim burada: https://korayakdag.com/makaleler/danismanlik-yaparken-ogrendigim-5-sey\n\n#İşHayatı #ToplantıKültürü #Danışmanlık #Girişimcilik #Kariyer #İşDünyası #Verimlilik #UzaktanÇalışma #Yönetim #StratejikDanışmanlık",
    kaynakBaslik: "Hafif anekdot: \"10 dakikalık hızlı görüşme\" efsanesi",
    kaynakUrl:
      "https://korayakdag.com/makaleler/danismanlik-yaparken-ogrendigim-5-sey",
    gorselUrl:
      "https://images.unsplash.com/photo-1622151834677-70f982c9adef?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
