"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogListPost {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  image?: string;
}

const STRINGS = {
  tr: { all: "Tümü", other: "Diğer", readMore: "Devamını Oku →" },
  en: { all: "All", other: "Other", readMore: "Read More →" },
};

function primaryCategory(category: string | undefined, otherLabel: string) {
  if (!category) return otherLabel;
  return category.split("•")[0].trim();
}

export default function BlogList({
  posts,
  basePath = "/blog",
  lang = "tr",
}: {
  posts: BlogListPost[];
  basePath?: string;
  lang?: "tr" | "en";
}) {
  const t = STRINGS[lang];
  const [active, setActive] = useState(t.all);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      const key = primaryCategory(post.category, t.other);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return Array.from(counts.entries());
  }, [posts, t.other]);

  const filtered =
    active === t.all
      ? posts
      : posts.filter((post) => primaryCategory(post.category, t.other) === active);

  const selectCategory = (name: string) => {
    setActive(name);
  };

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <button
          onClick={() => selectCategory(t.all)}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            active === t.all
              ? "border-[#071A2F] bg-[#071A2F] text-white"
              : "border-gray-200 text-[#071A2F] hover:border-[#071A2F]"
          }`}
        >
          {t.all} <span className="opacity-60">{posts.length}</span>
        </button>

        {categories.map(([name, count]) => (
          <button
            key={name}
            onClick={() => selectCategory(name)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              active === name
                ? "border-[#071A2F] bg-[#071A2F] text-white"
                : "border-gray-200 text-[#071A2F] hover:border-[#071A2F]"
            }`}
          >
            {name} <span className="opacity-60">{count}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`${basePath}/${post.slug}`}
            className="block rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2"
          >
            {post.image ? (
              <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mb-6 flex h-48 items-center justify-center rounded-2xl bg-orange-50 text-5xl">
                ✍️
              </div>
            )}

            <h2 className="text-2xl font-bold text-[#071A2F]">
              {post.title}
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              {post.excerpt}
            </p>

            <span className="mt-4 inline-block font-semibold text-orange-500">
              {t.readMore}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
