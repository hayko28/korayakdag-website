import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import TradingViewTicker from "@/components/TradingViewTicker";
import GuncelGelismelerFeed from "@/components/GuncelGelismelerFeed";
import { getVisibleGelismeler } from "@/lib/gelismeler-data";
import { MAKALELER } from "@/lib/makale-data";

export const metadata: Metadata = {
  title: "Güncel Gelişmeler | Koray Akdağ",
  description:
    "Devlet destekleri, teşvikler, yurt dışı şirket kuruluşu, hukuk/vergi, kurumsal gelişim ve pazarlama alanlarındaki güncel gelişmeler ve kişisel değerlendirmeler.",
};

export default function GuncelGelismelerPage() {
  const gelismeler = getVisibleGelismeler();
  const kurumSayisi = new Set(gelismeler.map((g) => g.kurum)).size;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      <TradingViewTicker />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 pb-10 pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Güncel takip
          </span>

          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            İş dünyasında ve mevzuatta bugün ne değişti?
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
            Devlet desteklerinden yurt dışı şirket kuruluşuna, hukuk ve
            vergiden şirket değerlemesine, sürdürülebilirlikten pazarlama ve
            yazılım/yapay zekâ çözümlerine — uzmanlık alanlarımdaki her
            gelişme, kendi değerlendirmemle.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <div className="bg-[#0A1E36] px-5 py-4">
              <p className="text-2xl font-black text-white">
                {gelismeler.length}
              </p>
              <p className="text-[11px] text-gray-400">takip edilen gelişme</p>
            </div>
            <div className="bg-[#0A1E36] px-5 py-4">
              <p className="text-2xl font-black text-white">{kurumSayisi}</p>
              <p className="text-[11px] text-gray-400">resmi kurum</p>
            </div>
            <div className="bg-[#0A1E36] px-5 py-4">
              <p className="text-2xl font-black text-white">
                {MAKALELER.length}
              </p>
              <p className="text-[11px] text-gray-400">kişisel makale</p>
            </div>
          </div>
        </div>
      </section>

      <GuncelGelismelerFeed />

      <Contact />
      <Footer />
    </main>
  );
}
