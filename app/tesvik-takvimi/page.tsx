import { Metadata } from "next";
import { Calendar, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import TesvikTakvimiFeed from "@/components/TesvikTakvimiFeed";
import {
  anaKurum,
  getSonGuncelleme,
  getTesvikProgramlari,
} from "@/lib/tesvik-takvimi-data";

const ONE_CIKAN_PROGRAMLAR = [
  { ad: "KOSGEB KOBİ Gelişim Destek", kurum: "KOSGEB", durum: "Açık" as const },
  { ad: "TÜBİTAK 1501 Sanayi Ar-Ge", kurum: "TÜBİTAK", durum: "Son 3 gün" as const },
  { ad: "İhracata Yönelik Destek", kurum: "Ticaret Bakanlığı", durum: "Açık" as const },
];

export const metadata: Metadata = {
  title: "Güncel Destek ve Teşvik Programları Takvimi 2026 | Koray Akdağ",
  description:
    "KOSGEB, TÜBİTAK, Ticaret Bakanlığı, Sanayi ve Teknoloji Bakanlığı ve daha fazla kurumun güncel destek, teşvik, kredi ve hibe programları; son başvuru tarihleriyle birlikte düzenli olarak güncellenir.",
};

export default function TesvikTakvimiPage() {
  const programlar = getTesvikProgramlari();
  const acikSayisi = programlar.filter((p) => p.durum === "acik").length;
  const kurumSayisi = new Set(programlar.map((p) => anaKurum(p.kurum))).size;
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
      <section className="overflow-hidden bg-[#071A2F] px-6 pb-10 pt-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
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

          {/* Sağ görsel — öne çıkan programları gösteren mini takvim kartı */}
          <div className="hidden shrink-0 lg:block lg:w-[360px]">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-emerald-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rotate-1 rounded-2xl border border-white/10 bg-[#0A1E36] p-5 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    Öne Çıkan Son Tarihler
                  </span>
                </div>
                <div className="space-y-2.5">
                  {ONE_CIKAN_PROGRAMLAR.map((item) => (
                    <div
                      key={item.ad}
                      className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{item.ad}</p>
                        <p className="text-[11px] text-gray-400">{item.kurum}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                          item.durum === "Açık"
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-orange-400/15 text-orange-300"
                        }`}
                      >
                        {item.durum}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-gray-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Her gün otomatik güncellenir
                </div>
              </div>
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
