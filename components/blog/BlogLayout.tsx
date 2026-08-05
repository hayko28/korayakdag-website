import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogComments from "@/components/blog/BlogComments";
import { BLOG_POSTS } from "@/lib/blog-data";

interface BlogLayoutProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  coverImage?: string;
  slug?: string;
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
  children,
}: BlogLayoutProps) {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  return (
    <main className="bg-white text-gray-700">
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
                href="/#blog"
                className="text-orange-400 transition hover:text-orange-300 hover:underline"
              >
                Blog
              </Link>
              <span className="text-white/40">/</span>
              <span className="truncate text-white/90 max-w-[250px] sm:max-w-none">
                {title}
              </span>
            </div>

            <Link
              href="/"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              🏠 Ana Sayfa
            </Link>
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
              📅 Güncelleme: {date}
            </span>
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              ⏱️ Okuma Süresi: {readTime}
            </span>
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              🏷️ {category.split("•")[0]?.trim() || "Blog"}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16">{children}</section>

      {/* FOOTER CTA SECTION */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-3xl bg-[#071A2F] p-10 text-white shadow-xl">
          <h3 className="mb-5 text-3xl font-bold">
            Sorularınız veya Danışmanlık İhtiyacınız mı Var?
          </h3>
          <p className="mb-8 text-lg leading-8 text-gray-300">
            Şirketiniz için en uygun destek ve teşvik programlarını belirlemek,
            başvuru sürecinizi doğru yönetmek ve profesyonel destek almak için
            bizimle iletişime geçebilirsiniz.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg"
            >
              İletişime Geç
            </Link>
            <Link
              href="/#blog"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              Diğer Yazılar
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              Ana Sayfa
            </Link>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-10 border-t border-white/10 pt-8">
              <h4 className="mb-4 text-xl font-bold text-orange-400">
                Diğer Blog Yazıları
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {otherPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold text-orange-400">
                      {post.category}
                    </p>
                    <h5 className="mt-2 text-lg font-bold text-white line-clamp-2">
                      {post.title}
                    </h5>
                    <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* COMMENTS SECTION */}
        <BlogComments />
      </section>
    </main>
  );
}
