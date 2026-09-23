"use client";

import { FormEvent, useState } from "react";
import { OPEN_CONTACT_FORM_EVENT } from "@/components/Contact";
import {
  SEKTOR_CARPANLARI,
  hesaplaDegerleme,
  formatTl,
  type DegerlemeSonucu,
} from "@/lib/sirket-degerleme-hesaplama";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#071A2F] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";
const labelClass = "mb-1.5 block text-sm font-semibold text-[#071A2F]";

export default function SirketDegerlemeHesaplayici() {
  const [netKar, setNetKar] = useState("");
  const [sektor, setSektor] = useState(SEKTOR_CARPANLARI[0].value);
  const [varlik, setVarlik] = useState("");
  const [borc, setBorc] = useState("");
  const [sonuc, setSonuc] = useState<DegerlemeSonucu | null>(null);
  const [hata, setHata] = useState("");

  const parseTl = (v: string) => (v ? Number(v.replace(/[^0-9.-]/g, "")) : undefined);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const netKarSayi = parseTl(netKar);
    if (!netKarSayi || netKarSayi <= 0) {
      setHata("Lütfen geçerli bir yıllık net kâr tutarı girin.");
      setSonuc(null);
      return;
    }
    setHata("");
    setSonuc(
      hesaplaDegerleme({
        yillikNetKarTl: netKarSayi,
        sektor,
        toplamVarlikTl: parseTl(varlik),
        toplamBorcTl: parseTl(borc),
      })
    );
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="netKar">
              Yıllık Net Kâr (TL) *
            </label>
            <input
              id="netKar"
              inputMode="numeric"
              placeholder="Örn. 2.500.000"
              className={inputClass}
              value={netKar}
              onChange={(e) => setNetKar(e.target.value)}
            />
            <p className="mt-1.5 text-xs text-gray-500">
              Tek seferlik gider/gelirlerden arındırılmış, normal bir yılı yansıtan net kâr.
            </p>
          </div>

          <div>
            <label className={labelClass} htmlFor="sektor">
              Sektör *
            </label>
            <select
              id="sektor"
              className={inputClass}
              value={sektor}
              onChange={(e) => setSektor(e.target.value)}
            >
              {SEKTOR_CARPANLARI.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="varlik">
              Toplam Varlıklar (TL) <span className="font-normal text-gray-400">— opsiyonel</span>
            </label>
            <input
              id="varlik"
              inputMode="numeric"
              placeholder="Örn. 10.000.000"
              className={inputClass}
              value={varlik}
              onChange={(e) => setVarlik(e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="borc">
              Toplam Borçlar (TL) <span className="font-normal text-gray-400">— opsiyonel</span>
            </label>
            <input
              id="borc"
              inputMode="numeric"
              placeholder="Örn. 3.000.000"
              className={inputClass}
              value={borc}
              onChange={(e) => setBorc(e.target.value)}
            />
          </div>
        </div>

        {hata && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{hata}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-[#071A2F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0F2A47] sm:w-auto"
        >
          Ön Değer Aralığını Hesapla
        </button>
      </form>

      {sonuc && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
            Bu sonuç, girdiğiniz iki rakama dayalı <strong>kaba bir gösterge</strong>dir; resmi bir değerleme
            raporunun yerine geçmez. Gerçek değer; finansal tabloların normalize edilmesine, emsal işlem
            verisine, büyüme potansiyeline ve şirkete özgü risklere göre bu aralığın dışına da çıkabilir.
          </div>

          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-orange-500">
              Kazanç Çarpanı Yöntemi — {sonuc.sektor.label}
            </p>
            <p className="text-2xl font-black text-[#071A2F] sm:text-3xl">
              {formatTl(sonuc.kazancCarpaniDusuk)} — {formatTl(sonuc.kazancCarpaniYuksek)}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Sektörünüzde sık gözlenen {sonuc.sektor.dusuk}x – {sonuc.sektor.yuksek}x net kâr çarpanı aralığı
              uygulanarak hesaplandı.
            </p>
          </div>

          {sonuc.netAktifDeger !== undefined && (
            <div className="rounded-2xl border-l-4 border-blue-500 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">Net Aktif Değer</p>
              <p className="text-2xl font-black text-[#071A2F] sm:text-3xl">{formatTl(sonuc.netAktifDeger)}</p>
              <p className="mt-2 text-sm text-gray-600">
                Girdiğiniz toplam varlıklardan toplam borçların düşülmesiyle hesaplandı; varlık ağırlıklı
                şirketlerde referans olarak kullanılır.
              </p>
            </div>
          )}

          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6 sm:p-8">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Gerçek, savunulabilir bir değer için</h3>
            <p className="mb-4 text-sm leading-7 text-gray-700">
              Ortaklık değişikliği, satış, yatırımcı görüşmesi veya miras paylaşımı gibi taraflar arası
              süreçlerde bu ön gösterge yeterli değildir. Finansal tabloların normalize edilmesi, doğru emsal
              seçimi ve birden fazla yöntemin çapraz kontrolünü içeren profesyonel bir değerleme için bizimle
              görüşün.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_FORM_EVENT))}
              className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Değerleme Sürecini Konuşalım →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
