"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { getVisibleGelismeler } from "@/lib/gelismeler-data";
import { MAKALELER } from "@/lib/makale-data";
import { GROUP_DEFS } from "@/components/Services";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";

const KURUM_COLORS: Record<string, string> = {
  KOSGEB: "bg-blue-500",
  TÜBİTAK: "bg-violet-500",
  "Ticaret Bakanlığı": "bg-green-600",
  "Sanayi ve Teknoloji Bakanlığı": "bg-teal-600",
  "Hazine ve Maliye Bakanlığı": "bg-amber-600",
  İŞKUR: "bg-rose-600",
  KGK: "bg-purple-600",
  "Türk Patent": "bg-sky-500",
  KVKK: "bg-indigo-600",
  "Gelir İdaresi Başkanlığı": "bg-cyan-600",
  "Borsa İstanbul": "bg-lime-600",
  TOBB: "bg-fuchsia-600",
  TCMB: "bg-orange-600",
  Cumhurbaşkanlığı: "bg-slate-600",
  SPK: "bg-emerald-600",
  "Rekabet Kurumu": "bg-red-600",
  PwC: "bg-pink-600",
};

const FEED_COLLAPSED_COUNT = 5;

export default function GuncelGelismelerFeed() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [feedExpanded, setFeedExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeState, setSubscribeState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const feedHeadingRef = useRef<HTMLDivElement>(null);

  const visibleGelismeler = useMemo(() => getVisibleGelismeler(), []);

  const filtered = useMemo(
    () =>
      activeTopic
        ? visibleGelismeler.filter((g) => g.konu === activeTopic)
        : visibleGelismeler,
    [activeTopic, visibleGelismeler]
  );

  // Konu filtresi değişince akış her zaman daraltılmış (5 öğe) hâlden başlasın.
  useEffect(() => {
    setFeedExpanded(false);
  }, [activeTopic]);

  const displayedItems = feedExpanded
    ? filtered
    : filtered.slice(0, FEED_COLLAPSED_COUNT);
  const hasMore = filtered.length > FEED_COLLAPSED_COUNT;

  const collapseFeed = () => {
    setFeedExpanded(false);
    feedHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribeState("sending");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("failed");
      setSubscribeState("success");
      setEmail("");
    } catch {
      setSubscribeState("error");
    }
  };

  return (
    <div>
      {/* FILTER CHIPS */}
      <div className="border-b border-gray-200 bg-[#F7F5EF]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 lg:px-8">
          <span className="mr-1 text-xs font-bold uppercase tracking-wide text-gray-500">
            Konuya göre
          </span>
          <button
            onClick={() => setActiveTopic(null)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
              activeTopic === null
                ? "border-[#071A2F] bg-[#071A2F] text-white"
                : "border-gray-300 bg-white text-[#071A2F] hover:border-[#071A2F]"
            }`}
          >
            Tümü <span className="opacity-60">{visibleGelismeler.length}</span>
          </button>
          {GROUP_DEFS.map((group) => {
            const title = group.tr.title;
            const count = visibleGelismeler.filter((g) => g.konu === title).length;
            return (
              <button
                key={title}
                onClick={() => setActiveTopic(title)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                  activeTopic === title
                    ? "border-[#071A2F] bg-[#071A2F] text-white"
                    : "border-gray-300 bg-white text-[#071A2F] hover:border-[#071A2F]"
                }`}
              >
                {title} <span className="opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[220px_1fr_300px] lg:px-8">
        {/* LEFT: MAKALELERİM */}
        <aside className="hidden lg:block">
          <div className="lg:sticky lg:top-[100px]">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#071A2F]">
                Makalelerim
              </h4>
              <Link
                href="/makaleler"
                className="text-xs font-bold text-orange-600 hover:underline"
              >
                Tümü →
              </Link>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-gray-500">
              Bloğumdaki rehberlerden farklı — kendi gözlem ve görüşlerimi
              paylaştığım kişisel yazılar.
            </p>

            <div className="space-y-3">
              {MAKALELER.slice(0, 10).map((makale) => (
                <Link
                  key={makale.slug}
                  href={`/makaleler/${makale.slug}`}
                  className="block border-t border-gray-200 pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wide text-orange-600">
                    {makale.tag}
                  </span>
                  <h5 className="mt-1 text-[13px] font-bold leading-snug text-[#071A2F]">
                    {makale.title}
                  </h5>
                  <span className="mt-1 block text-[11px] text-gray-500">
                    {makale.readTime} · {makale.date}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/makaleler"
              className="mt-4 block rounded-lg border border-dashed border-gray-300 py-2.5 text-center text-xs font-bold text-gray-500 transition hover:border-orange-400 hover:text-orange-600"
            >
              Tüm makalelerimi gör
            </Link>
          </div>
        </aside>

        {/* CENTER: FEED */}
        <div>
          {/* WEB SİTESİ PAKETİ BANNER (mobile-first placement inside feed too keeps it visible) */}
          <div className="mb-8 grid gap-6 rounded-2xl bg-gradient-to-br from-[#071A2F] to-[#0F2A47] p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-orange-400">
                ◆ Web Sitesi Paketi
              </span>
              <h3 className="text-lg font-bold">
                Bu sayfa gibi bir kurumsal siteye mi ihtiyacınız var?
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-300">
                Mobil uyumlu, hızlı, kendi yönetici panelinizden
                yönetebileceğiniz anahtar teslim kurumsal web sitesi.
              </p>
            </div>
            <Link
              href="/web-sitesi-paketi"
              className="whitespace-nowrap rounded-xl bg-orange-500 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Paket Detayını Gör →
            </Link>
          </div>

          <div ref={feedHeadingRef} className="mb-5 flex scroll-mt-24 items-baseline justify-between">
            <h2 className="text-xl font-bold text-[#071A2F]">
              Son Gelişmeler
            </h2>
            <span className="text-xs text-gray-500">
              {feedExpanded
                ? `${filtered.length} gelişme`
                : `${displayedItems.length} / ${filtered.length} gelişme`}
            </span>
          </div>

          <div className="space-y-4">
            {displayedItems.map((item) => (
              <article
                key={item.kaynakUrl}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071A2F]">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        KURUM_COLORS[item.kurum] ?? "bg-gray-400"
                      }`}
                    />
                    {item.kurum}
                  </span>
                  <span className="text-xs text-gray-500">{item.tarih}</span>
                </div>

                <h3 className="text-base font-bold leading-snug text-[#071A2F]">
                  {item.baslik}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                  {item.ozet}
                </p>

                {item.expertNote && (
                  <div className="mt-3 flex gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-[11px] font-bold text-white">
                      KA
                    </span>
                    <p className="text-sm leading-relaxed text-[#071A2F]">
                      {item.expertNote}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-xs font-semibold text-gray-500">
                    {item.konu}
                  </span>
                  <a
                    href={item.kaynakUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-orange-600 hover:underline"
                  >
                    Detayları oku →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              {!feedExpanded ? (
                <button
                  type="button"
                  onClick={() => setFeedExpanded(true)}
                  aria-label="Tüm gelişmeleri göster"
                  title="Tüm gelişmeleri göster"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={collapseFeed}
                  aria-label="Daralt"
                  title="Daralt"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>

        {/* RIGHT: SIDEBAR */}
        <aside className="space-y-6">
          <div className="rounded-2xl bg-[#071A2F] p-6 text-white">
            <h4 className="text-base font-bold">Gelişmeleri kaçırma</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-300">
              Yeni bir destek/mevzuat gelişmesi ya da yeni bir makalem
              yayınlandığında e-posta ile haber veririm. Blog rehberleri bu
              listeye dahil değil.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresin"
                className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-orange-400"
              />
              <button
                type="submit"
                disabled={subscribeState === "sending"}
                className="whitespace-nowrap rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600 disabled:opacity-60"
              >
                {subscribeState === "sending" ? "..." : "Abone Ol"}
              </button>
            </form>
            {subscribeState === "success" && (
              <p className="mt-2 text-xs text-green-400">
                Kaydedildi, teşekkürler.
              </p>
            )}
            {subscribeState === "error" && (
              <p className="mt-2 text-xs text-red-400">
                Bir hata oluştu, tekrar deneyin.
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <span className="text-xs font-bold uppercase tracking-wide text-orange-600">
              ◆ Web Sitesi Paketi
            </span>
            <h4 className="mt-2 text-base font-bold text-[#071A2F]">
              Kurumsal web siteniz mi yok?
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
              30.000 ₺ +KDV&apos;den başlayan fiyatlarla, anahtar teslim
              kurumsal web sitesi.
            </p>
            <Link
              href="/web-sitesi-paketi"
              className="mt-4 block rounded-lg bg-[#071A2F] px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-[#0F2A47]"
            >
              Paket Detayını Gör
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="text-base font-bold text-[#071A2F]">
              Bu gelişme sizi ilgilendiriyor mu?
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
              Hangi destek/teşvikin şirketinize uygun olduğunu birlikte
              değerlendirelim.
            </p>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))
              }
              className="mt-4 block w-full rounded-lg bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Ücretsiz Ön Görüşme Talep Et
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
