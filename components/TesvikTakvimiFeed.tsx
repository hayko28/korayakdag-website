"use client";

import { useMemo, useState } from "react";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";
import type { TesvikProgram } from "@/lib/tesvik-takvimi-data";

const KURUM_COLORS: Record<string, string> = {
  KOSGEB: "bg-blue-500",
  TÜBİTAK: "bg-violet-500",
  "Ticaret Bakanlığı": "bg-green-600",
  "Sanayi ve Teknoloji Bakanlığı": "bg-teal-600",
  "Hazine ve Maliye Bakanlığı": "bg-amber-600",
  İŞKUR: "bg-rose-600",
  TOBB: "bg-fuchsia-600",
  "Tarım ve Orman Bakanlığı": "bg-lime-600",
  "Çalışma ve Sosyal Güvenlik Bakanlığı": "bg-cyan-600",
  "Kültür ve Turizm Bakanlığı": "bg-indigo-600",
};

const FEED_COLLAPSED_COUNT = 12;

function kurumRenk(kurum: string): string {
  const eslesen = Object.keys(KURUM_COLORS).find((k) => kurum.includes(k));
  return eslesen ? KURUM_COLORS[eslesen] : "bg-gray-400";
}

function formatTarih(tarih: string | null): string | null {
  if (!tarih) return null;
  const d = new Date(tarih);
  if (Number.isNaN(d.getTime())) return tarih;
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function kalanGun(tarih: string | null): number | null {
  if (!tarih) return null;
  const d = new Date(tarih);
  if (Number.isNaN(d.getTime())) return null;
  const bugun = new Date();
  bugun.setHours(0, 0, 0, 0);
  return Math.ceil((d.getTime() - bugun.getTime()) / (1000 * 60 * 60 * 24));
}

export default function TesvikTakvimiFeed({
  programlar,
}: {
  programlar: TesvikProgram[];
}) {
  const [query, setQuery] = useState("");
  const [showKapali, setShowKapali] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr-TR");
    return programlar
      .filter((p) => (showKapali ? true : p.durum === "acik"))
      .filter((p) =>
        q
          ? p.ad.toLocaleLowerCase("tr-TR").includes(q) ||
            p.kurum.toLocaleLowerCase("tr-TR").includes(q) ||
            p.not.toLocaleLowerCase("tr-TR").includes(q)
          : true
      )
      .sort((a, b) => {
        if (a.durum !== b.durum) return a.durum === "acik" ? -1 : 1;
        const ka = kalanGun(a.sonBasvuruTarihi);
        const kb = kalanGun(b.sonBasvuruTarihi);
        if (ka !== null && kb !== null) return ka - kb;
        if (ka !== null) return -1;
        if (kb !== null) return 1;
        return a.ad.localeCompare(b.ad, "tr-TR");
      });
  }, [programlar, query, showKapali]);

  const displayed = expanded ? filtered : filtered.slice(0, FEED_COLLAPSED_COUNT);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setExpanded(false);
            }}
            placeholder="Program, kurum veya konu ara..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-400"
          />
        </div>
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-600">
          <input
            type="checkbox"
            checked={showKapali}
            onChange={(e) => {
              setShowKapali(e.target.checked);
              setExpanded(false);
            }}
            className="h-4 w-4 rounded border-gray-300 accent-orange-500"
          />
          Kapanmış programları da göster
        </label>
      </div>

      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="text-xl font-bold text-[#071A2F]">Programlar</h2>
        <span className="text-xs text-gray-500">
          {expanded ? `${filtered.length} program` : `${displayed.length} / ${filtered.length} program`}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {displayed.map((p) => {
          const kalan = p.durum === "acik" ? kalanGun(p.sonBasvuruTarihi) : null;
          const tarih = formatTarih(p.sonBasvuruTarihi);
          return (
            <article
              key={p.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071A2F]">
                  <span className={`h-2 w-2 rounded-full ${kurumRenk(p.kurum)}`} />
                  {p.kurum}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    p.durum === "acik"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {p.durum === "acik" ? "Açık" : "Kapandı"}
                </span>
              </div>

              <h3 className="text-base font-bold leading-snug text-[#071A2F]">
                {p.ad}
              </h3>

              {p.not && (
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {p.not.length > 220 ? `${p.not.slice(0, 220)}…` : p.not}
                </p>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
                <span className="text-xs font-semibold text-gray-500">
                  {tarih
                    ? `Son başvuru: ${tarih}${
                        kalan !== null && kalan >= 0 ? ` (${kalan} gün kaldı)` : ""
                      }`
                    : "Süreklilik arz eden destek"}
                </span>
                <a
                  href={p.kaynakUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-orange-600 hover:underline"
                >
                  Kaynağı gör →
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length > FEED_COLLAPSED_COUNT && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-bold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
          >
            {expanded ? "Daralt" : `Tüm ${filtered.length} programı göster`}
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Aramanla eşleşen bir program bulunamadı.
        </p>
      )}

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#071A2F] to-[#0F2A47] p-7 text-white sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Hangi program şirketinize uygun, emin değil misiniz?
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-300">
            Uygunluk analizinden başvuru sürecine, işletmenize en uygun
            destek/teşviki birlikte belirleyelim.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
          className="mt-5 whitespace-nowrap rounded-xl bg-orange-500 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-600 sm:mt-0"
        >
          Ücretsiz Ön Görüşme Talep Et →
        </button>
      </div>
    </div>
  );
}
