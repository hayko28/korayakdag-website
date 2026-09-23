"use client";

import { FormEvent, useState } from "react";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";
import {
  KDV_ORANLARI,
  hesaplaKdvIadesi,
  formatTl,
  type KdvIadesiSonucu,
} from "@/lib/kdv-iadesi-hesaplama";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#071A2F] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";
const labelClass = "mb-1.5 block text-sm font-semibold text-[#071A2F]";

export default function KdvIadesiHesaplayici() {
  const [islemBedeli, setIslemBedeli] = useState("");
  const [kdvOrani, setKdvOrani] = useState(KDV_ORANLARI[0].value);
  const [yuklenilenKdv, setYuklenilenKdv] = useState("");
  const [sonuc, setSonuc] = useState<KdvIadesiSonucu | null>(null);
  const [hata, setHata] = useState("");

  const parseSayi = (v: string) => (v ? Number(v.replace(/[^0-9.-]/g, "")) : 0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const islemSayi = parseSayi(islemBedeli);
    const yuklenilenSayi = parseSayi(yuklenilenKdv);
    if (!islemSayi || islemSayi <= 0) {
      setHata("Lütfen geçerli bir iade hakkı doğuran işlem bedeli girin (KDV hariç).");
      setSonuc(null);
      return;
    }
    if (!yuklenilenSayi || yuklenilenSayi <= 0) {
      setHata("Lütfen geçerli bir yüklenilen (indirilebilir) KDV tutarı girin.");
      setSonuc(null);
      return;
    }
    setHata("");
    setSonuc(
      hesaplaKdvIadesi({
        islemBedeliTl: islemSayi,
        kdvOraniValue: kdvOrani,
        yuklenilenKdvTl: yuklenilenSayi,
      })
    );
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="islemBedeli">
              İade Hakkı Doğuran İşlem Bedeli (TL, KDV hariç) *
            </label>
            <input
              id="islemBedeli"
              inputMode="numeric"
              placeholder="Örn. 1.000.000"
              className={inputClass}
              value={islemBedeli}
              onChange={(e) => setIslemBedeli(e.target.value)}
            />
            <p className="mt-1.5 text-xs text-gray-500">
              İhracat, indirimli orana tabi teslim veya diğer iade hakkı doğuran işlemin KDV hariç tutarı.
            </p>
          </div>

          <div>
            <label className={labelClass} htmlFor="kdvOrani">
              İşlemin Tabi Olduğu KDV Oranı *
            </label>
            <select id="kdvOrani" className={inputClass} value={kdvOrani} onChange={(e) => setKdvOrani(e.target.value)}>
              {KDV_ORANLARI.map((k) => (
                <option key={k.value} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="yuklenilenKdv">
              Bu İşlemle İlgili Yüklenilen (İndirilebilir) KDV Toplamı (TL) *
            </label>
            <input
              id="yuklenilenKdv"
              inputMode="numeric"
              placeholder="Örn. 150.000"
              className={inputClass}
              value={yuklenilenKdv}
              onChange={(e) => setYuklenilenKdv(e.target.value)}
            />
            <p className="mt-1.5 text-xs text-gray-500">
              Bu işlemi gerçekleştirmek için yapılan mal/hizmet alımlarında ödediğiniz toplam KDV.
            </p>
          </div>
        </div>

        {hata && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{hata}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-[#071A2F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0F2A47] sm:w-auto"
        >
          Tahmini İadeyi Hesapla
        </button>
      </form>

      {sonuc && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
            Bu sonuç, KDV Genel Uygulama Tebliği&apos;ndeki &quot;azami iade edilebilir vergi&quot; mantığına dayalı
            <strong> kaba bir gösterge</strong>dir; gerçek iade tutarı beyanname, yüklenilen KDV listesi ve YMM/vergi
            inceleme sürecine göre değişebilir, resmi bir hesaplamanın yerine geçmez.
          </div>

          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-orange-500">Tahmini İade Tutarı</p>
            <p className="text-2xl font-black text-[#071A2F] sm:text-3xl">{formatTl(sonuc.tahminiIadeTutari)}</p>
            <p className="mt-2 text-sm text-gray-600">
              {sonuc.sinirlayanFaktor === "azami"
                ? `Azami iade tutarı (işlem bedeli × ${sonuc.kdvOrani.label}) olan ${formatTl(sonuc.azamiIadeTutari)} yüklenilen KDV'den düşük olduğu için sınırlayıcı oldu.`
                : `Yüklenilen KDV tutarınız, azami iade tutarı olan ${formatTl(sonuc.azamiIadeTutari)}'nin altında kaldığı için gerçek yüklenilen KDV esas alındı.`}
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6 sm:p-8">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İade sürecini hızlandırmak için</h3>
            <p className="mb-4 text-sm leading-7 text-gray-700">
              Yüklenilen KDV listesinin doğru hazırlanması, YMM raporu gerekip gerekmediğinin belirlenmesi ve iade
              talebinin usulüne uygun sunulması, gerçekleşen iade tutarını ve süresini doğrudan etkiler. Süreci
              birlikte planlamak için bizimle görüşün.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              KDV İadesi Sürecini Konuşalım →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
