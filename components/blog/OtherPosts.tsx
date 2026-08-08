"use client";

import { useState } from "react";
import Link from "next/link";

interface OtherPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
}

const STRINGS = {
  tr: { heading: "Diğer Blog Yazıları", more: "Daha fazla göster", less: "Daha az göster" },
  en: { heading: "Other Articles", more: "Show more", less: "Show less" },
};

const VISIBLE_COUNT = 2;

export default function OtherPosts({
  posts,
  lang = "tr",
}: {
  posts: OtherPost[];
  lang?: "tr" | "en";
}) {
  const [expanded, setExpanded] = useState(false);
  const t = STRINGS[lang];

  if (posts.length === 0) return null;

  const visiblePosts = expanded ? posts : posts.slice(0, VISIBLE_COUNT);
  const canToggle = posts.length > VISIBLE_COUNT;

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <h4 className="mb-4 text-xl font-bold text-orange-400">{t.heading}</h4>

      <div className="grid gap-4 sm:grid-cols-2">
        {visiblePosts.map((post) => (
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

      {canToggle && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-label={expanded ? t.less : t.more}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl text-white transition hover:bg-white/10"
          >
            {expanded ? "↑" : "↓"}
          </button>
        </div>
      )}
    </div>
  );
}
