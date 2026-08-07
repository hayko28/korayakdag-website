export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "tubitak-1501-1507-ar-ge-destekleri-2026",
    title: "TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026",
    excerpt: "Başvuru şartları, destek oranları, değerlendirme kriterleri, desteklenen giderler ve 2026 yılında değişen tüm kuralların yer aldığı kapsamlı rehber.",
    category: "TÜBİTAK • TEYDEB • 2026",
    date: "2026",
    readTime: "12 Dakika",
    image: "/tubitak-1501-1507-kapak.png"
  },
  {
    slug: "teknopark-nedir-avantajlari",
    title: "Teknopark Nedir? Avantajları, Vergi İstisnaları ve Başvuru Rehberi",
    excerpt: "Teknoparka kimler girebilir, mevcut şirket ve çalışanlar teknoparka nasıl aktarılabilir, hangi vergi ve SGK avantajları sağlanır?",
    category: "TEKNOPARK • AR-GE • YAZILIM",
    date: "2026",
    readTime: "15 Dakika",
    image: "/teknopark-kapak.png"
  }
];
