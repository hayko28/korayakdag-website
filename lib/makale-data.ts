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
