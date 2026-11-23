import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EN_STATIC_POSTS } from "@/lib/blog-translations";
import { MAKALELER } from "@/lib/makale-data";

const BASE_URL = "https://korayakdag.com";

const TR_MONTHS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

// "23 Kasım 2026" -> Date. Yalnızca gün+ay+yıl varsa döner; "Kasım 2026" gibi eksik tarihte undefined.
function parseTrDate(value: string): Date | undefined {
  const match = value.trim().match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/);
  if (!match) return undefined;
  const month = TR_MONTHS.indexOf(match[2]);
  if (month === -1) return undefined;
  return new Date(Date.UTC(Number(match[3]), month, Number(match[1])));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/makaleler`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/tesvik-takvimi`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/destek-uygunluk-analizi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/guncel-gelismeler`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/kdv-iadesi-hesaplama`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kidem-tazminati-hesaplama`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/web-sitesi-paketi`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/ornek-senaryolar`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/kosgeb-danismanlik`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/yurt-disinda-sirket-kurulusu`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/yurt-disinda-sirket-kurulusu/dubai`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/yurt-disinda-sirket-kurulusu/almanya`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/yurt-disinda-sirket-kurulusu/abd`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/yatirim-tesvik-belgesi-danismanligi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ihracat-destekleri-danismanligi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tubitak-danismanlik`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/en`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/en/blog`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE_URL}/gizlilik-politikasi`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/en/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const trBlogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: parseTrDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const enBlogRoutes: MetadataRoute.Sitemap = EN_STATIC_POSTS.map((post) => ({
    url: `${BASE_URL}/en/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const makaleRoutes: MetadataRoute.Sitemap = MAKALELER.map((makale) => ({
    url: `${BASE_URL}/makaleler/${makale.slug}`,
    lastModified: parseTrDate(makale.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...trBlogRoutes, ...enBlogRoutes, ...makaleRoutes];
}
