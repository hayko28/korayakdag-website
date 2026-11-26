import { unstable_cache } from "next/cache";
import { sql } from "@/lib/database";

// Herkese açık sayfalar için önbellekli okuma. Amaç: bot/ziyaretçi trafiği
// her seferinde Neon'u uyandırmasın (hesaplama kotası) ve veritabanı hata
// verirse (kota, bağlantı) sayfa 500 vermesin.
// Hata fırlatan çağrı önbelleğe yazılmaz; dıştaki try/catch güvenli varsayılanı döner.

type Locale = "tr" | "en";
export type PostSummary = { slug: string; title: string; excerpt: string };
export type PostFull = PostSummary & { content: string; published_at: string | null };

const listCached = unstable_cache(
  async (locale: Locale) =>
    (await sql`
      SELECT slug, title, excerpt
      FROM posts
      WHERE status = 'published' AND locale = ${locale}
      ORDER BY published_at DESC
    `) as PostSummary[],
  ["published-posts-list"],
  { revalidate: 600, tags: ["posts"] },
);

const oneCached = unstable_cache(
  async (slug: string, locale: Locale) => {
    const rows = await sql`
      SELECT slug, title, excerpt, content, published_at
      FROM posts
      WHERE slug = ${slug} AND status = 'published' AND locale = ${locale}
    `;
    return (rows[0] ?? null) as PostFull | null;
  },
  ["published-post-one"],
  { revalidate: 300, tags: ["posts"] },
);

export async function getPublishedPosts(locale: Locale): Promise<PostSummary[]> {
  try {
    return await listCached(locale);
  } catch (err) {
    console.error("getPublishedPosts failed:", err);
    return [];
  }
}

export async function getPublishedPost(
  slug: string,
  locale: Locale,
): Promise<PostFull | null> {
  try {
    return await oneCached(slug, locale);
  } catch (err) {
    console.error("getPublishedPost failed:", err);
    return null;
  }
}
