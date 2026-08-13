import React from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { MAKALELER } from "@/lib/makale-data";

interface MakaleLayoutProps {
  title: string;
  tag: string;
  date: string;
  readTime: string;
  slug: string;
  children: React.ReactNode;
}

export default function MakaleLayout({
  title,
  tag,
  date,
  readTime,
  slug,
  children,
}: MakaleLayoutProps) {
  const otherMakaleler = MAKALELER.filter((m) => m.slug !== slug);

  return (
    <main className="bg-white text-gray-700">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071A2F] py-20">
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Link
                href="/makaleler"
                className="text-orange-400 transition hover:text-orange-300 hover:underline"
              >
                Makalelerim
              </Link>
              <span className="text-white/40">/</span>
              <span className="truncate text-white/90 max-w-[250px] sm:max-w-none">
                {title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <BackButton
                lang="tr"
                fallbackHref="/makaleler"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
              />
              <Link
                href="/"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-bold text-white transition hover:bg-white hover:text-[#071A2F]"
              >
                🏠 Ana Sayfa
              </Link>
            </div>
          </div>

          <div className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md">
            {tag}
          </div>

          <h1 className="mt-8 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            {title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              📅 {date}
            </span>
            <span className="rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-sm">
              ⏱️ {readTime}
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-koray space-y-6 text-lg leading-9 text-gray-700">
          {children}
        </div>
      </section>

      {/* CTA + DİĞER MAKALELERİM */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-[#071A2F] p-10 text-white shadow-xl">
          <h3 className="mb-5 text-3xl font-bold">
            Sorularınız veya Danışmanlık İhtiyacınız mı Var?
          </h3>
          <p className="mb-8 text-lg leading-8 text-gray-300">
            Şirketiniz için en uygun destek ve teşvik programlarını
            belirlemek, doğru stratejiyi kurmak için bizimle iletişime
            geçebilirsiniz.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg"
            >
              İletişime Geç
            </Link>
            <Link
              href="/makaleler"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              Diğer Makalelerim
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2F]"
            >
              Ana Sayfa
            </Link>
          </div>

          {otherMakaleler.length > 0 && (
            <div className="mt-10 border-t border-white/10 pt-8">
              <h4 className="mb-4 text-xl font-bold text-orange-400">
                Diğer Makalelerim
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {otherMakaleler.map((makale) => (
                  <Link
                    key={makale.slug}
                    href={`/makaleler/${makale.slug}`}
                    className="block rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold text-orange-400">
                      {makale.tag}
                    </p>
                    <h5 className="mt-2 text-lg font-bold text-white line-clamp-2">
                      {makale.title}
                    </h5>
                    <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                      {makale.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
