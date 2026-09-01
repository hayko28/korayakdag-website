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
  {
    tr: "turkiyede-adan-zye-sirket-kurmak-avantajlari",
    en: "how-to-set-up-a-company-in-turkey-a-to-z",
  },
  {
    tr: "yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026",
    en: "investment-incentive-certificate-turkey-2026-guide",
  },
  {
    tr: "sahis-limited-anonim-sirket-karsilastirma",
    en: "sole-proprietorship-vs-llc-vs-joint-stock-company-turkey",
  },
  {
    tr: "tubitak-1501-1507-ar-ge-destekleri-2026",
    en: "tubitak-1501-1507-rd-grants-2026",
  },
  {
    tr: "sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026",
    en: "company-valuation-turkey-methods-guide-2026",
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
  {
    slug: "how-to-set-up-a-company-in-turkey-a-to-z",
    title:
      "How to Set Up a Company in Turkey, A to Z: What Are the Advantages?",
    excerpt:
      "A 2026 guide for foreign investors covering Limited vs. Joint Stock companies, required documents, the MERSIS/trade registry process, government incentives, tax breaks, bank accounts, and the link to residence permits.",
    image:
      "https://images.unsplash.com/photo-1763965367191-6455ef032c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    slug: "investment-incentive-certificate-turkey-2026-guide",
    title:
      "What Is an Investment Incentive Certificate in Turkey? Benefits, Conditions and the 2026 Guide",
    excerpt:
      "How Turkey's Investment Incentive Certificate cuts costs on VAT, customs duty, corporate tax and social security under the new Decision No. 9903 system, with regions, minimum amounts, and the E-TUYS application process.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    slug: "sole-proprietorship-vs-llc-vs-joint-stock-company-turkey",
    title:
      "Sole Proprietorship, Limited Company or Joint Stock Company? How Should Entrepreneurs Solve This Equation?",
    excerpt:
      "Comparing formation cost, liability, tax burden, minimum capital and growth potential across Turkey's three main company types, with current 2026 figures, to help you pick the right one for your venture.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    slug: "tubitak-1501-1507-rd-grants-2026",
    title: "TÜBİTAK 1501 and 1507 R&D Grants 2026",
    excerpt:
      "A complete guide to application conditions, support rates, evaluation criteria, supported expenses, and everything changing in 2026 for Turkey's TÜBİTAK 1501 and 1507 R&D grant programs.",
    image: "/tubitak-1501-1507-kapak.png",
  },
  {
    slug: "company-valuation-turkey-methods-guide-2026",
    title:
      "What Is Company Valuation? Methods, Process, and Why It's Critical for SMEs",
    excerpt:
      "How DCF, multiples analysis, and net asset value work, the specific challenges SMEs face, and why valuation should be handled by a professional team, with a step-by-step 2026 guide.",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];
