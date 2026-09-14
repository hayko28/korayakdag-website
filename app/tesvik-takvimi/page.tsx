import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import TesvikTakvimiFeed from "@/components/TesvikTakvimiFeed";
import {
  getKurumListesi,
  getSonGuncelleme,
  getTesvikProgramlari,
} from "@/lib/tesvik-takvimi-data";

export const metadata: Metadata = {
  title: "Güncel Destek ve Teşvik Programları Takvimi 2026 | Koray Akdağ",
  description:
    "KOSGEB, TÜBİTAK, Ticaret Bakanlığı, Sanayi ve Teknoloji Bakanlığı ve daha fazla kurumun güncel destek, teşvik, kredi ve hibe programları; son başvuru tarihleriyle birlikte düzenli olarak güncellenir.",
};

export default function TesvikTakvimiPage() {
  const programlar = getTesvikProgramlari();
  const acikSayisi = programlar.filter((p) => p.durum === "acik").length;
  const kurumSayisi = getKurumListesi(programlar).length;
  const sonGuncelleme = new Date(getSonGuncelleme()).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 pb-10 pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Günlük güncelleniyor
          </span>

          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Güncel Destek ve Teşvik Programları Takvimi
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
            KOSGEB, TÜBİTAK, Ticaret Bakanlığı, Sanayi ve Teknoloji Bakanlığı,
            Çalışma ve Sosyal Güvenlik Bakanlığı, TOBB ve daha fazla resmi
            kurumun destek, teşvik, kredi ve hibe programlarını son başvuru
            tarihleriyle birlikte tek yerde, düzenli olarak güncel tutuyorum.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <div className="bg-[#0A1E36] px-5 py-4">
              <p className="text-2xl font-black text-white">{acikSayisi}</p>
              <p className="text-[11px] text-gray-400">açık program</p>
            </div>
            <div className="bg-[#0A1E36] px-5 py-4">
              <p className="text-2xl font-black text-white">{kurumSayisi}</p>
              <p className="text-[11px] text-gray-400">resmi kurum</p>
            </div>
            <div className="bg-[#0A1E36] px-5 py-4">
              <p className="text-lg font-black leading-tight text-white">
                {sonGuncelleme}
              </p>
              <p className="text-[11px] text-gray-400">son güncelleme</p>
            </div>
          </div>
        </div>
      </section>

      <TesvikTakvimiFeed programlar={programlar} />

      <Contact />
      <Footer />
    </main>
  );
}
