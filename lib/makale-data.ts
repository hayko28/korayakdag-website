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
];
