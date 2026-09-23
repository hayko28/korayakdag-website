import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EN_STATIC_POSTS } from "@/lib/blog-translations";
import { MAKALELER } from "@/lib/makale-data";

const BASE_URL = "https://korayakdag.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/makaleler`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/tesvik-takvimi`, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/destek-uygunluk-analizi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sirket-degerleme-hesaplama`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/kosgeb-danismanlik`, changeFrequency: "monthly", priority: 0.8 },
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
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...trBlogRoutes, ...enBlogRoutes, ...makaleRoutes];
}
