import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogComments from "@/components/blog/BlogComments";
import OtherPosts from "@/components/blog/OtherPosts";
import SearchHighlight from "@/components/blog/SearchHighlight";
import BackButton from "@/components/BackButton";
import DestekUygunlukTanitim from "@/components/DestekUygunlukTanitim";
import { BLOG_POSTS } from "@/lib/blog-data";

const STRINGS = {
  tr: {
    home: "🏠 Ana Sayfa",
    updated: "📅 Güncelleme:",
    readTime: "⏱️ Okuma Süresi:",
    tagFallback: "Blog",
    ctaHeading: "Sorularınız veya Danışmanlık İhtiyacınız mı Var?",
    ctaText:
      "Şirketiniz için en uygun destek ve teşvik programlarını belirlemek, başvuru sürecinizi doğru yönetmek ve profesyonel destek almak için bizimle iletişime geçebilirsiniz.",
    contact: "İletişime Geç",
    otherArticlesLink: "Diğer Yazılar",
    home2: "Ana Sayfa",
  },
  en: {
    home: "🏠 Home",
    updated: "📅 Updated:",
    readTime: "⏱️ Reading Time:",
    tagFallback: "Blog",
    ctaHeading: "Have Questions or Need Consulting?",
    ctaText:
      "Get in touch with us to determine the most suitable support and incentive programs for your company, manage your application process correctly, and get professional guidance.",
    contact: "Get in Touch",
    otherArticlesLink: "Other Articles",
    home2: "Home",
  },
};

interface BlogLayoutProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  coverImage?: string;
  slug?: string;
  lang?: "tr" | "en";
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  description,
  category,
  date,
  readTime,
  coverImage,
  slug,
  lang = "tr",
  children,
}: BlogLayoutProps) {
  // EN tarafında henüz çevrilmiş yazı listesi olmadığı için (TR statik
  // yazıların İngilizce karşılığı yok), "Diğer Blog Yazıları" bölümü EN
  // sayfalarda gösterilmiyor. TR davranışı değişmiyor.
  const otherPosts = lang === "en" ? [] : BLOG_POSTS.filter((p) => p.slug !== slug);
  const t = STRINGS[lang];
  const homeHref = lang === "en" ? "/en" : "/";
  const blogHref = lang === "en" ? "/en#blog" : "/#blog";
  const blogListHref = lang === "en" ? "/en/blog" : "/blog";
  const contactHref = lang === "en" ? "/en#contact" : "/#contact";

  const canonicalUrl = slug
    ? `https://korayakdag.com${lang === "en" ? `/en/blog/${slug}` : `/blog/${slug}`}`
    : undefined;

  const articleJsonLd = canonicalUrl
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        ...(coverImage && {
          image: coverImage.startsWith("http")
            ? coverImage
            : `https://korayakdag.com${coverImage}`,
        }),
        author: {
          "@type": "Person",
          name: "Koray Akdağ",
          url: "https://korayakdag.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Koray Akdağ | Stratejik Danışmanlık",
          url: "https://korayakdag.com",
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        inLanguage: lang === "en" ? "en" : "tr",
      }
    : undefined;

  const breadcrumbJsonLd = canonicalUrl
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.home2,
            item: `https://korayakdag.com${homeHref}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `https://korayakdag.com${blogListHref}`,
          },
          { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
        ],
      }
    : undefined;

  return (
    <main className="bg-white text-gray-700">
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071A2F] py-20">
        {coverImage && (
          <div className="absolute inset-0">
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#031426]/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031426]/95 via-[#031426]/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#031426] to-transparent" />
          </div>
        )}

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          {/* BREADCRUMB & ANA SAYFA BUTTON */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Link
                href={blogHref}
                className="text-orange-400 transition hover:text-orange-300 hover:underline"
              >
                Blog
              </Link>
              <span className="text-white/40">/</span>
              <span className="truncate text-white/90 max-w-[250px] sm:max-w-none">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <BackButton
                lang={lang}
                fallbackHref={blogListHref}
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
              />
              <Link
                href={homeHref}
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
              >
                {t.home}
              </Link>
            </div>
          </div>

          <div className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md">
            {category}
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              {t.updated} {date}
            </span>
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              {t.readTime} {readTime}
            </span>
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              🏷️ {category.split("•")[0]?.trim() || t.tagFallback}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section id="article-content" className="mx-auto max-w-5xl px-6 py-16">
        {children}
      </section>
      <Suspense fallback={null}>
        <SearchHighlight />
      </Suspense>

      {/* FOOTER CTA SECTION */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-3xl bg-[#071A2F] p-10 text-white shadow-xl">
          <h3 className="mb-5 text-3xl font-bold">
            {t.ctaHeading}
          </h3>
          <p className="mb-8 text-lg leading-8 text-gray-300">
            {t.ctaText}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={contactHref}
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg"
            >
              {t.contact}
            </Link>
            <Link
              href={blogHref}
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              {t.otherArticlesLink}
            </Link>
            <Link
              href={homeHref}
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              {t.home2}
            </Link>
          </div>

          <div className="mt-4">
            <BackButton
              lang={lang}
              fallbackHref={blogListHref}
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            />
          </div>

          <OtherPosts posts={otherPosts} lang={lang} />
        </div>

        {/* DESTEK UYGUNLUK ANALİZİ TANITIM */}
        {lang !== "en" && (
          <div className="mt-10">
            <DestekUygunlukTanitim />
          </div>
        )}

        {/* COMMENTS SECTION */}
        <BlogComments />
      </section>
    </main>
  );
}
