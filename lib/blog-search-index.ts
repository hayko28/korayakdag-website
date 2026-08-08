import fs from "node:fs";
import path from "node:path";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EN_STATIC_POSTS } from "@/lib/blog-translations";

export interface SearchDoc {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  basePath: string;
  text: string;
}

// Statik yazı sayfaları JSX olarak yazıldığı için ayrı bir "tam metin" alanı
// yok. Sayfanın kaynak dosyasını okuyup JSX/etiketleri sıyırarak aranabilir
// düz metne çeviriyoruz — yeni bir statik yazı eklendiğinde otomatik dahil
// olur, ayrıca bir indeks güncellemesi gerekmez.
function extractPlainText(source: string): string {
  const returnIndex = source.indexOf("return (");
  const jsxSource = returnIndex >= 0 ? source.slice(returnIndex) : source;
  return jsxSource
    .replace(/<[^>]*>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-zA-Z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readPageText(filePath: string): string {
  try {
    return extractPlainText(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return "";
  }
}

let cachedTr: SearchDoc[] | null = null;
let cachedEn: SearchDoc[] | null = null;

export function getStaticSearchDocs(locale: "tr" | "en"): SearchDoc[] {
  if (locale === "tr" && cachedTr) return cachedTr;
  if (locale === "en" && cachedEn) return cachedEn;

  const basePath = locale === "en" ? "/en/blog" : "/blog";
  const dir = locale === "en" ? "app/en/blog" : "app/blog";
  const posts = locale === "en" ? EN_STATIC_POSTS : BLOG_POSTS;

  const docs: SearchDoc[] = posts.map((post) => {
    const category = "category" in post ? String(post.category) : "";
    const filePath = path.join(process.cwd(), dir, post.slug, "page.tsx");
    const bodyText = readPageText(filePath);
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category,
      basePath,
      text: [post.title, post.excerpt, category, bodyText].join(" \n "),
    };
  });

  if (locale === "tr") cachedTr = docs;
  else cachedEn = docs;
  return docs;
}
