export interface BlogTranslationPair {
  tr: string;
  en: string;
}

// Statik TR blog yazılarının İngilizce çevirisi hazır olduğunda buraya eklenir.
export const BLOG_TRANSLATIONS: BlogTranslationPair[] = [
  {
    tr: "teknopark-nedir-avantajlari",
    en: "technopark-in-turkey-tax-incentives-guide",
  },
];

export function getEnglishSlug(trSlug: string): string | undefined {
  return BLOG_TRANSLATIONS.find((pair) => pair.tr === trSlug)?.en;
}

export function getTurkishSlug(enSlug: string): string | undefined {
  return BLOG_TRANSLATIONS.find((pair) => pair.en === enSlug)?.tr;
}

export interface EnStaticPost {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
}

// Statik EN çeviri sayfalarının listeleme (kart) bilgisi. Her yeni
// app/en/blog/{slug}/page.tsx eklendiğinde buraya da bir girdi eklenir.
export const EN_STATIC_POSTS: EnStaticPost[] = [
  {
    slug: "technopark-in-turkey-tax-incentives-guide",
    title:
      "What Is a Technopark in Turkey? Tax Incentives, Advantages & Application Guide",
    excerpt:
      "Who can join a technopark, can an existing company and its employees move in, what tax and social security advantages apply, and how does the VAT exemption work?",
    image: "/teknopark-kapak.png",
  },
];
