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
}

// LinkedIn Yazarı agent'ı, her gün yeni bir gelişme veya makale
// yayınlandığında buraya bir LinkedIn paylaşım taslağı ekler. Otomatik
// paylaşılmaz — Koray /yonetim panelinden okuyup kendi LinkedIn'ine kopyalar.
export const LINKEDIN_DRAFTS: LinkedInDraft[] = [
  {
    tarih: "2026-08-14",
    icerik:
      "Geçen hafta bir e-ticaret girişimcisiyle konuşurken fark ettim ki çoğu marka hâlâ eski indirim alışkanlıklarıyla kampanya kuruyor.\n\n1 Ağustos itibarıyla bu artık riskli.\n\nTicaret Bakanlığı'nın yönetmelik değişikliğiyle \"indirim\" iddiası artık tek bir referansa bağlı: kampanya öncesi son 10 günün en düşük fiyatı. Bunun altında kalan bir indirim, idari yaptırım riski taşıyor.\n\nAynı değişiklikle hedefli reklamlarda kullanılan kriterlerin tüketiciye açıkça gösterilmesi zorunlu hale geldi, çocuklara yönelik hedefli reklam tamamen yasaklandı ve doğrulanamayan platformlardan alınan yorumların yayımlanması engellendi.\n\nKısacası dijital pazarlamada \"herkes böyle yapıyor\" savunması artık işe yaramıyor.\n\nSizin ekibiniz kampanya metinlerini bu 10 günlük kurala göre gözden geçirdi mi?\n\n#DijitalPazarlama #Reklam #TicaretBakanlığı #Eticaret #KOBİ",
    kaynakBaslik:
      "Ticari Reklam ve Haksız Ticari Uygulamalar Yönetmeliği'nde dijital pazarlamayı sıkılaştıran değişiklikler yürürlüğe girdi",
    kaynakUrl:
      "https://ticaret.gov.tr/haberler/aldaticici-reklam-ve-haksiz-ticari-uygulamalarla-mucadelede-yeni-donem-basliyor",
    gorselUrl:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
