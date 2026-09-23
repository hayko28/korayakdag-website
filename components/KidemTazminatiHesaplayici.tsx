"use client";

import { FormEvent, useState } from "react";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";
import {
  KIDEM_TAZMINATI_TAVANI_TL,
  KIDEM_TAZMINATI_TAVANI_DONEMI,
  hesaplaKidemTazminati,
  formatTl,
  type KidemTazminatiSonucu,
} from "@/lib/kidem-tazminati-hesaplama";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#071A2F] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";
const labelClass = "mb-1.5 block text-sm font-semibold text-[#071A2F]";

export default function KidemTazminatiHesaplayici() {
  const [ucret, setUcret] = useState("");
  const [yil, setYil] = useState("");
  const [ay, setAy] = useState("0");
  const [sonuc, setSonuc] = useState<KidemTazminatiSonucu | null>(null);
  const [hata, setHata] = useState("");

  const parseSayi = (v: string) => (v ? Number(v.replace(/[^0-9.-]/g, "")) : 0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ucretSayi = parseSayi(ucret);
    const yilSayi = parseSayi(yil);
    if (!ucretSayi || ucretSayi <= 0) {
      setHata("Lütfen geçerli bir brüt aylık ücret girin.");
      setSonuc(null);
      return;
    }
    if (yilSayi <= 0 && parseSayi(ay) <= 0) {
      setHata("Lütfen en az 1 yıl veya 1 ay kıdem girin.");
      setSonuc(null);
      return;
    }
    setHata("");
    setSonuc(
      hesaplaKidemTazminati({
        brutAylikUcretTl: ucretSayi,
        kidemYili: yilSayi,
        kidemAyi: parseSayi(ay),
      })
    );
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <label className={labelClass} htmlFor="ucret">
              Brüt Aylık Ücret (TL) *
            </label>
            <input
              id="ucret"
              inputMode="numeric"
              placeholder="Örn. 45.000"
              className={inputClass}
              value={ucret}
              onChange={(e) => setUcret(e.target.value)}
            />
            <p className="mt-1.5 text-xs text-gray-500">
              Düzenli ödenen ikramiye, yol/yemek yardımı gibi para ile ölçülebilen menfaatler dahil edilmelidir.
            </p>
          </div>

          <div>
            <label className={labelClass} htmlFor="yil">
              Kıdem — Tam Yıl *
            </label>
            <input
              id="yil"
              inputMode="numeric"
              placeholder="Örn. 5"
              className={inputClass}
              value={yil}
              onChange={(e) => setYil(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="ay">
              Kalan Ay
            </label>
            <select id="ay" className={inputClass} value={ay} onChange={(e) => setAy(e.target.value)}>
              {Array.from({ length: 12 }, (_, i) => i).map((m) => (
                <option key={m} value={m}>
                  {m} ay
                </option>
              ))}
            </select>
          </div>
        </div>

        {hata && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{hata}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-[#071A2F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0F2A47] sm:w-auto"
        >
          Kıdem Tazminatını Hesapla
        </button>
      </form>

      {sonuc && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
            Bu sonuç, kıdem tazminatına hak kazandıran bir fesih (İş Kanunu m.14) olduğu varsayımıyla ve{" "}
            <strong>{KIDEM_TAZMINATI_TAVANI_DONEMI}</strong> dönemi tavanı ({formatTl(KIDEM_TAZMINATI_TAVANI_TL)})
            üzerinden hesaplanan kaba bir göstergedir; gerçek hak edişiniz sözleşme türüne, fesih gerekçesine ve
            önceki dönemlerde uygulanan farklı tavan tutarlarına göre değişebilir.
          </div>

          {sonuc.tavanUygulandiMi && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">
              Girdiğiniz ücret dönemin tavanının üzerinde olduğu için hesaplama, gerçek ücretiniz yerine{" "}
              <strong>{formatTl(KIDEM_TAZMINATI_TAVANI_TL)}</strong> tavan tutarı üzerinden yapıldı.
            </div>
          )}

          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-orange-500">Brüt Kıdem Tazminatı</p>
            <p className="text-2xl font-black text-[#071A2F] sm:text-3xl">{formatTl(sonuc.brutTutar)}</p>
            <p className="mt-2 text-sm text-gray-600">
              Tam yıllar için {formatTl(sonuc.tamYilTutari)} + kalan aylar için {formatTl(sonuc.kistAyTutari)}.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-blue-500 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
              Damga Vergisi Sonrası Net Tutar
            </p>
            <p className="text-2xl font-black text-[#071A2F] sm:text-3xl">{formatTl(sonuc.netTutar)}</p>
            <p className="mt-2 text-sm text-gray-600">
              Kıdem tazminatı gelir vergisinden istisnadır; yalnızca binde 7,59 oranında damga vergisi kesintisi
              uygulanır ({formatTl(sonuc.damgaVergisi)}).
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6 sm:p-8">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Fesih süreci hukuken sağlam mı?</h3>
            <p className="mb-4 text-sm leading-7 text-gray-700">
              Doğru rakam kadar doğru usul de önemlidir; haklı/haksız fesih ayrımı, ihbar süresi ve işe iade davası
              riski gibi noktalarda süreci baştan sağlam kurmak için bizimle görüşün.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Fesih Sürecini Konuşalım →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
