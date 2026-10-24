import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "enflasyon-duzeltmesi-2026-2027-sart-aramiyor"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
};

export default function MakalePage() {
  return (
    <MakaleLayout
      title={meta.title}
      tag={meta.tag}
      date={meta.date}
      readTime={meta.readTime}
      slug={meta.slug}
    >
      <p>
        Finans ekiplerinin çoğu yıl sonu kapanışına giderken aynı cümleyi not
        ediyor: &quot;enflasyon düzeltmesi şartları oluşursa mali tabloyu ona
        göre hazırlarız.&quot; 2025, 2026 ve 2027 için bu ihtimal artık
        gündemde değil; yasa bu kararı mükellefin yerine çoktan verdi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Şart aranmıyor, üç dönem birden askıda
      </h2>
      <p>
        7571 sayılı Kanun&apos;un Vergi Usul Kanunu&apos;na eklediği geçici
        37. madde, 25 Aralık 2025 tarihli ve 33118 sayılı Resmi
        Gazete&apos;de yayımlandı. Hüküm açık: 2025, 2026 ve 2027 hesap
        dönemlerinde, Mükerrer 298&apos;inci maddedeki enflasyon düzeltmesi
        şartları oluşsun ya da oluşmasın, mali tablolar bu düzeltmeye tabi
        tutulmayacak. Düzenleme geçici vergi dönemlerini de kapsıyor, yani üç
        aylık ara dönem bilançolarında da aynı kural geçerli.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Altın ve gümüş mükellefleri istisna, özel hesap dönemi farklı okunuyor
      </h2>
      <p>
        Tek istisna, münhasıran altın ve gümüş alım satımı veya imali ile
        iştigal eden mükellefler; bu grup şartlardan bağımsız olarak her
        geçici vergi dönemi sonunda düzeltmeye devam ediyor. Özel hesap
        dönemi belirlenmiş şirketler için ise kapsam farklı bir takvime denk
        geliyor: erteleme, 2026, 2027 ve 2028 yılında sona eren hesap
        dönemlerini kapsıyor. Takvim yılını esas alan bir şirketle özel
        hesap dönemi olan bir şirket, aynı tarihte aynı soruyu sorduğunda
        farklı bir cevapla karşılaşıyor.
      </p>

      <p>
        Kanun, Cumhurbaşkanı&apos;na bu süreyi geçici vergi dönemleri dahil
        üç hesap dönemine kadar uzatma yetkisi de tanıyor, yani 2027
        sonrasında aynı tartışmanın yeniden açılma ihtimali masada duruyor.
        Bu noktada bir mali tabloda sorulması gereken soru değişti:
        &quot;şart oluştu mu&quot; değil, hangi hesap dönemi takviminde
        olunduğu.
      </p>
    </MakaleLayout>
  );
}
