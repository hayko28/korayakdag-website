"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface SearchPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  basePath: string;
}

const STRINGS = {
  tr: {
    placeholder: "Yazılarda ara... (örn. İngiltere, banka hesabı)",
    noResults: "Sonuç bulunamadı.",
    searchLabel: "Ara",
    closeLabel: "Aramayı kapat",
  },
  en: {
    placeholder: "Search articles... (e.g. UK, bank account)",
    noResults: "No results found.",
    searchLabel: "Search",
    closeLabel: "Close search",
  },
};

export default function BlogSearch({
  lang = "tr",
  variant = "navbar",
}: {
  lang?: "tr" | "en";
  variant?: "navbar" | "hero";
}) {
  const t = STRINGS[lang];
  const router = useRouter();
  const [open, setOpen] = useState(variant === "hero");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchPost[]>([]);
  const [searched, setSearched] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (variant === "hero") return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
        setResults([]);
        setSearched(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [variant]);

  // Sunucu artık yazıların tam metnine göre arama yapıyor (sadece başlık/özet
  // değil), bu yüzden her tuş vuruşunda API'ye soruyoruz — 300ms bekleterek
  // gereksiz istekleri azaltıyoruz.
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const trimmed = query.trim();

    if (trimmed.length < 2) {
      setResults([]);
      setSearched(false);
      return;
    }

    debounceRef.current = setTimeout(() => {
      fetch(`/api/posts?locale=${lang}&q=${encodeURIComponent(trimmed)}`)
        .then((res) => res.json())
        .then((data) => setResults(Array.isArray(data) ? data : []))
        .catch(() => setResults([]))
        .finally(() => setSearched(true));
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, lang]);

  const goToResult = (post: SearchPost) => {
    const url = `${post.basePath}/${post.slug}?q=${encodeURIComponent(query.trim())}`;
    setQuery("");
    setResults([]);
    setSearched(false);
    setOpen(variant === "hero");
    router.push(url);
  };

  const inputClass =
    variant === "hero"
      ? "w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-11 pr-4 text-base text-white placeholder:text-gray-300 outline-none transition focus:border-orange-400"
      : "w-56 rounded-lg border border-[#123b63]/20 bg-white px-3 py-1.5 text-sm text-[#123b63] outline-none transition focus:border-orange-500";

  const dropdownClass =
    variant === "navbar"
      ? "absolute right-0 z-20 mt-2 w-72 max-h-80 overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-xl"
      : "absolute z-20 mt-2 max-h-80 w-full overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-xl";

  return (
    <div
      ref={containerRef}
      className={variant === "hero" ? "relative mx-auto mt-3 max-w-xl" : "relative"}
    >
      {variant === "navbar" && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.searchLabel}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-base text-white transition hover:border-orange-400 hover:text-orange-400"
        >
          🔍
        </button>
      )}

      {(variant === "hero" || open) && (
        <>
          <div className="relative">
            {variant === "hero" && (
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                🔍
              </span>
            )}
            <input
              autoFocus={variant === "navbar"}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.placeholder}
              aria-label={t.searchLabel}
              className={inputClass}
            />
            {variant === "navbar" && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                  setResults([]);
                  setSearched(false);
                }}
                aria-label={t.closeLabel}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#123b63]/50 hover:text-[#123b63]"
              >
                ✕
              </button>
            )}
          </div>

          {results.length > 0 && (
            <div className={dropdownClass}>
              {results.map((post) => (
                <button
                  key={post.slug}
                  type="button"
                  onClick={() => goToResult(post)}
                  className="block w-full border-b border-gray-50 px-4 py-3 text-left last:border-0 hover:bg-orange-50"
                >
                  <p className="line-clamp-1 text-sm font-semibold text-[#071A2F]">
                    {post.title}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-gray-500">
                    {post.excerpt}
                  </p>
                </button>
              ))}
            </div>
          )}

          {searched && results.length === 0 && (
            <div className={dropdownClass}>
              <p className="px-4 py-3 text-sm text-gray-500">{t.noResults}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
