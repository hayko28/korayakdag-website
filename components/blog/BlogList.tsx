"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  PiggyBank,
  BarChart3,
  Building2,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Folder,
  Tag,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface BlogListPost {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  image?: string;
}

const STRINGS = {
  tr: {
    all: "Tümü",
    other: "Diğer",
    readMore: "Devamını Oku →",
    categoriesTitle: "Kategoriler",
    allPosts: "Tüm Yazılar",
    popularTags: "Popüler Etiketler",
    postSuffix: "yazı",
    clearFilter: "Filtreyi Temizle",
  },
  en: {
    all: "All",
    other: "Other",
    readMore: "Read More →",
    categoriesTitle: "Categories",
    allPosts: "All Articles",
    popularTags: "Popular Tags",
    postSuffix: "posts",
    clearFilter: "Clear Filter",
  },
};

function primaryCategory(category: string | undefined, otherLabel: string) {
  if (!category) return otherLabel;
  return category.split("•")[0].trim();
}

// Ham kategori adlarını (bkz. lib/blog-data.ts) daha az sayıda üst başlıkta
// toplar. Eşleşmeyen (ör. yeni eklenen) bir kategori otomatik "Diğer"
// grubuna düşer, bu yüzden yeni kategori eklemek bu listeyi güncellemeyi
// gerektirmez.
const CATEGORY_GROUPS: {
  name: string;
  icon: LucideIcon;
  color: string;
  image: string;
  members: string[];
}[] = [
  {
    name: "Teşvikler & Destekler",
    icon: PiggyBank,
    color: "bg-orange-100 text-orange-600",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: [
      "KOSGEB",
      "TÜBİTAK",
      "TEKMER",
      "TEKNOPARK",
      "AR-GE MERKEZİ",
      "YATIRIM TEŞVİKLERİ",
      "SGK TEŞVİKLERİ",
      "İHRACAT DESTEKLERİ",
      "TURQUALITY",
      "ULUSLARARASI FON",
      "MELEK YATIRIMCI",
    ],
  },
  {
    name: "Vergi, Finans & Denetim",
    icon: BarChart3,
    color: "bg-blue-100 text-blue-600",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: [
      "VERGİ VE FİNANSAL YÖNETİM",
      "VERGİ & FİNANSAL YÖNETİM",
      "VERGİ DANIŞMANLIĞI",
      "BAĞIMSIZ DENETİM",
      "YEMİNLİ MALİ MÜŞAVİRLİK",
    ],
  },
  {
    name: "Şirket & Hukuk",
    icon: Building2,
    color: "bg-green-100 text-green-600",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: [
      "HUKUK DANIŞMANLIĞI",
      "İŞ HUKUKU",
      "ŞİRKETLER HUKUKU",
      "TİCARİ SÖZLEŞMELER",
      "AİLE ŞİRKETLERİ",
    ],
  },
  {
    name: "Yurt Dışı & Uluslararası İşler",
    icon: Globe2,
    color: "bg-purple-100 text-purple-600",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: [
      "YURT DIŞI ŞİRKET",
      "ŞİRKET KURULUŞU",
      "E-İHRACAT",
      "İHRACAT FİNANSMANI",
      "GÜMRÜK MEVZUATI",
    ],
  },
  {
    name: "Büyüme & İş Geliştirme",
    icon: TrendingUp,
    color: "bg-rose-100 text-rose-600",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: [
      "KURUMSAL GELİŞİM",
      "STRATEJİK İŞ ORTAKLIKLARI",
      "DİJİTAL PAZARLAMA",
      "PAZARLAMA VE SATIŞ",
      "HALKA ARZ",
    ],
  },
  {
    name: "Marka, Patent & Değerleme",
    icon: ShieldCheck,
    color: "bg-teal-100 text-teal-600",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: [
      "MARKA VE PATENT",
      "MARKA DEĞERLEME",
      "ŞİRKET DEĞERLEME",
      "M&A",
      "FRANCHISE SİSTEMİ",
    ],
  },
  {
    name: "Teknoloji & Sürdürülebilirlik",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    members: ["YAZILIM VE YAPAY ZEKÂ", "SÜRDÜRÜLEBİLİRLİK"],
  },
];

function groupOf(rawCategory: string, otherLabel: string) {
  for (const group of CATEGORY_GROUPS) {
    if (group.members.includes(rawCategory)) return group.name;
  }
  return otherLabel;
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("kategori") || t.all;

  const rawCategories = useMemo(
    () => posts.map((post) => primaryCategory(post.category, t.other)),
    [posts, t.other]
  );

  const groupCards = useMemo(() => {
    const counts = new Map<string, number>();
    for (const raw of rawCategories) {
      const group = groupOf(raw, t.other);
      counts.set(group, (counts.get(group) ?? 0) + 1);
    }
    const defined = CATEGORY_GROUPS.map((group) => ({
      ...group,
      count: counts.get(group.name) ?? 0,
    })).filter((group) => group.count > 0);

    const otherCount = counts.get(t.other) ?? 0;
    if (otherCount > 0) {
      defined.push({
        name: t.other,
        icon: Folder,
        color: "bg-gray-100 text-gray-600",
        image: "",
        members: [],
        count: otherCount,
      });
    }
    return defined;
  }, [rawCategories, t.other]);

  const popularTags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const raw of rawCategories) {
      if (raw === t.other) continue;
      counts.set(raw, (counts.get(raw) ?? 0) + 1);
    }
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);
  }, [rawCategories, t.other]);

  const filtered = useMemo(() => {
    if (active === t.all) return posts;
    return posts.filter((post) => {
      const raw = primaryCategory(post.category, t.other);
      return raw === active || groupOf(raw, t.other) === active;
    });
  }, [posts, active, t.all, t.other]);

  const selectFilter = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (name === t.all) {
      params.delete("kategori");
    } else {
      params.set("kategori", name);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    document
      .getElementById("blog-posts")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#071A2F]">{t.categoriesTitle}</h2>
          {active !== t.all && (
            <button
              onClick={() => selectFilter(t.all)}
              className="text-sm font-semibold text-orange-500 transition hover:text-orange-600"
            >
              {t.clearFilter} ✕
            </button>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {groupCards.map((group) => {
            const Icon = group.icon;
            return (
              <button
                key={group.name}
                onClick={() => selectFilter(group.name)}
                className={`group relative h-36 overflow-hidden rounded-2xl text-left transition hover:-translate-y-1 hover:shadow-lg ${
                  active === group.name ? "ring-2 ring-[#071A2F]" : ""
                } ${!group.image ? "border border-gray-100 bg-white" : ""}`}
              >
                {group.image ? (
                  <>
                    <Image
                      src={group.image}
                      alt={group.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/90 via-[#071A2F]/45 to-[#071A2F]/5" />
                  </>
                ) : (
                  <Icon
                    className={`pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 opacity-[0.08] ${group.color.split(" ")[1]}`}
                    strokeWidth={1.5}
                  />
                )}
                <div
                  className={`absolute left-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full ${
                    group.image ? "bg-white/20 backdrop-blur-sm" : group.color
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${group.image ? "text-white" : ""}`}
                    strokeWidth={2}
                  />
                </div>
                <div className="absolute bottom-2 left-2.5 right-2.5">
                  <p
                    className={`text-sm font-extrabold leading-tight ${
                      group.image ? "text-white" : "text-[#071A2F]"
                    }`}
                  >
                    {group.name}
                  </p>
                  <p className="mt-0.5 text-xs font-bold text-orange-400">
                    {group.count} {t.postSuffix}
                  </p>
                </div>
              </button>
            );
          })}

          <button
            onClick={() => selectFilter(t.all)}
            className="flex h-36 flex-col justify-between rounded-2xl bg-gradient-to-br from-[#071A2F] to-[#123b63] p-4 text-left text-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-base font-extrabold">{t.allPosts}</p>
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {popularTags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-6">
            <span className="mr-1 flex items-center gap-1 text-sm font-semibold text-gray-500">
              <Tag className="h-4 w-4" strokeWidth={2} /> {t.popularTags}:
            </span>
            {popularTags.map(([name]) => (
              <button
                key={name}
                onClick={() => selectFilter(name)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  active === name
                    ? "border-[#071A2F] bg-[#071A2F] text-white"
                    : "border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div id="blog-posts" className="grid scroll-mt-24 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
