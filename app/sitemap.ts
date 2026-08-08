import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EN_STATIC_POSTS } from "@/lib/blog-translations";

const BASE_URL = "https://korayakdag.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/en`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/en/blog`, changeFrequency: "weekly", priority: 0.5 },
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

  return [...staticRoutes, ...trBlogRoutes, ...enBlogRoutes];
}
