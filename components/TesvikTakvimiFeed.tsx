"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";
import { getGruplananProgramlar } from "@/lib/tesvik-takvimi-data";
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

const NOT_KISALTMA_UZUNLUGU = 240;

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
  const [openGruplar, setOpenGruplar] = useState<Set<string>>(new Set());
  const [openProgramlar, setOpenProgramlar] = useState<Set<string>>(new Set());

  const q = query.trim().toLocaleLowerCase("tr-TR");
  const aramaAktif = q.length > 0;

  const filtered = useMemo(() => {
    return programlar
      .filter((p) => (showKapali ? true : p.durum === "acik"))
      .filter((p) =>
        q
          ? p.ad.toLocaleLowerCase("tr-TR").includes(q) ||
            p.kurum.toLocaleLowerCase("tr-TR").includes(q) ||
            p.not.toLocaleLowerCase("tr-TR").includes(q)
          : true
      );
  }, [programlar, q, showKapali]);

  const gruplar = useMemo(() => getGruplananProgramlar(filtered), [filtered]);

  function toggleGrup(kurum: string) {
    setOpenGruplar((prev) => {
      const next = new Set(prev);
      if (next.has(kurum)) next.delete(kurum);
      else next.add(kurum);
      return next;
    });
  }

  function toggleProgram(id: string) {
    setOpenProgramlar((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Program, kurum veya konu ara..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-orange-400"
          />
        </div>
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-600">
          <input
            type="checkbox"
            checked={showKapali}
            onChange={(e) => setShowKapali(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 accent-orange-500"
          />
          Kapanmış programları da göster
        </label>
      </div>

      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="text-xl font-bold text-[#071A2F]">Programlar</h2>
        <span className="text-xs text-gray-500">
          {filtered.length} program &middot; {gruplar.length} kurum
        </span>
      </div>

      {gruplar.length === 0 && (
        <p className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Aramanla eşleşen bir program bulunamadı.
        </p>
      )}

      <div className="space-y-3">
        {gruplar.map((grup) => {
          const acik = aramaAktif || openGruplar.has(grup.kurum);
          return (
            <div
              key={grup.kurum}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => toggleGrup(grup.kurum)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${kurumRenk(grup.kurum)}`} />
                  <span className="font-bold leading-snug text-[#071A2F]">{grup.kurum}</span>
                </span>
                <span className="flex flex-shrink-0 items-center gap-2">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                    {grup.acikSayisi} açık
                  </span>
                  {grup.toplamSayisi > grup.acikSayisi && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-bold text-gray-500">
                      {grup.toplamSayisi - grup.acikSayisi} kapalı
                    </span>
                  )}
                  <span className="text-gray-400">{acik ? "▲" : "▼"}</span>
                </span>
              </button>

              {acik && (
                <div className="divide-y divide-gray-100 border-t border-gray-100">
                  {grup.programlar.map((p) => {
                    const programAcik = openProgramlar.has(p.id);
                    const kalan = p.durum === "acik" ? kalanGun(p.sonBasvuruTarihi) : null;
                    const tarih = formatTarih(p.sonBasvuruTarihi);
                    const notKisa =
                      p.not && p.not.length > NOT_KISALTMA_UZUNLUGU
                        ? `${p.not.slice(0, NOT_KISALTMA_UZUNLUGU)}…`
                        : p.not;

                    return (
                      <div key={p.id}>
                        <button
                          type="button"
                          onClick={() => toggleProgram(p.id)}
                          className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left hover:bg-gray-50"
                        >
                          <span className="flex min-w-0 items-center gap-2.5">
                            <span
                              className={`h-2 w-2 flex-shrink-0 rounded-full ${
                                p.durum === "acik" ? "bg-emerald-500" : "bg-red-400"
                              }`}
                            />
                            <span className="text-sm font-semibold leading-snug text-[#071A2F]">
                              {p.ad}
                            </span>
                          </span>
                          {kalan !== null && kalan >= 0 && (
                            <span className="flex-shrink-0 text-[11px] font-bold text-orange-600">
                              {kalan} gün
                            </span>
                          )}
                        </button>

                        {programAcik && (
                          <div className="px-5 pb-4">
                            <div className="rounded-xl bg-gray-50 p-4">
                              <span
                                className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                  p.durum === "acik"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {p.durum === "acik" ? "Açık" : "Kapalı"}
                              </span>

                              <p className="mt-2 text-xs font-semibold text-gray-500">
                                {tarih
                                  ? `Son başvuru: ${tarih}${
                                      kalan !== null && kalan >= 0 ? ` (${kalan} gün kaldı)` : ""
                                    }`
                                  : "Belirli bir başvuru dönemi/son tarih kaydı yok — bazı programlar dönemsel çağrılarla yürüyebilir, güncel durumu kaynak linkten teyit edin"}
                              </p>

                              {notKisa && (
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                  {notKisa}
                                </p>
                              )}

                              <div className="mt-3 flex flex-wrap items-center gap-4">
                                {p.blogSlug ? (
                                  <Link
                                    href={`/blog/${p.blogSlug}`}
                                    className="text-sm font-bold text-orange-600 hover:underline"
                                  >
                                    Detaylı Rehber →
                                  </Link>
                                ) : (
                                  <a
                                    href={p.kaynakUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-bold text-orange-600 hover:underline"
                                  >
                                    Kaynağı gör →
                                  </a>
                                )}
                                {p.blogSlug && (
                                  <a
                                    href={p.kaynakUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold text-gray-400 hover:text-gray-600 hover:underline"
                                  >
                                    Resmi kaynak ↗
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

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
