import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import BlogSearch from "@/components/blog/BlogSearch";

const STRINGS = {
  tr: {
    label: "Blog",
    heading: "Yazılarım",
    text: "İş dünyası, yatırım, girişimcilik ve büyüme süreçlerine dair güncel bilgiler, değerlendirmeler ve pratik rehberler.",
    home: "🏠 Ana Sayfa",
  },
  en: {
    label: "Blog",
    heading: "Articles",
    text: "Up-to-date insights, analysis, and practical guides on business, investment, entrepreneurship, and growth.",
    home: "🏠 Home",
  },
};

const BlogHero = ({ lang = "tr" }: { lang?: "tr" | "en" }) => {
  const t = STRINGS[lang];
  const homeHref = lang === "en" ? "/en" : "/";

  const buttonClass =
    "rounded-lg border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#071A2F]";

  return (
    <section className="relative bg-[#071A2F] py-5">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-pg.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#031426]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031426]/95 via-[#031426]/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#031426] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-2 flex justify-end gap-2">
          <BackButton lang={lang} fallbackHref={homeHref} className={buttonClass} />
          <Link href={homeHref} className={buttonClass}>
            {t.home}
          </Link>
        </div>

        <div className="text-center">
          <p className="mb-1 text-sm font-bold uppercase tracking-[2px] text-orange-400">
            {t.label}
          </p>

          <h1 className="text-xl font-black text-white sm:text-2xl lg:text-3xl">
            {t.heading}
          </h1>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-200">
            {t.text}
          </p>

          <BlogSearch lang={lang} variant="hero" />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
