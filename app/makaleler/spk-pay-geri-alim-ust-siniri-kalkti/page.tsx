import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "spk-pay-geri-alim-ust-siniri-kalkti"
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
        Sermaye Piyasası Kurulu&apos;nun 22 Eylül 2026 tarihli ve 60/1711
        sayılı kararı, borsada işlem gören şirketler için görünüşte teknik
        bir detay: pay geri alımlarında uygulanan toplam bedel üst sınırı,
        Kurul aksi yönde bir açıklama yapana kadar tamamen kaldırıldı. Ama bu
        kararın arkasındaki mantık, halka açık olsun olmasın büyüme
        aşamasındaki her şirketin karşılaşacağı bir soruyu gündeme
        getiriyor: bir şirket kendi sermayesini ne zaman büyümeye, ne zaman
        kendine yatırır?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sınırsız geri alım ne anlama geliyor
      </h2>
      <p>
        19 Mart 2025 tarihli ilke kararıyla belirlenen üst sınır, Borsa
        İstanbul&apos;da işlem gören şirketlerin kendi paylarını geri
        alırken harcayabileceği toplam tutarı sınırlıyordu. Yeni kararla bu
        sınır kaldırıldı; şirketler artık istedikleri tutarda kendi
        hisselerini geri satın alabiliyor. Kurul&apos;un amacı açık: piyasa
        oynaklığı arttığında şirketlere kendi hisse fiyatlarını destekleme
        konusunda daha geniş bir alan tanımak.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Güç gösterisi mi, kriz aracı mı
      </h2>
      <p>
        Piyasada geri alım programları çoğu zaman &quot;şirket kendine
        güveniyor&quot; şeklinde okunur. Oysa düzenleyicinin bakış açısından
        bu bir istikrar aracı, bir büyüme sinyali değil. Bir şirketin kendi
        hissesine para ayırması, o parayı yeni bir yatırıma, Ar-Ge&apos;ye ya
        da pazara açılmaya ayırmadığı anlamına da gelir. İkisi arasındaki
        fark, sermayenin nereye tahsis edildiği sorusunda gizli.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Halka açılmaya hazırlanan şirketler için ders
      </h2>
      <p>
        Danışmanlık sürecinde halka arza hazırlanan büyüme aşamasındaki
        şirketlerde de benzer bir karışıklık sık yaşanıyor: yönetim ekipleri
        geri alım programını hisse fiyatını yukarı çekmenin bir yolu
        sanıyor. Oysa doğru kullanıldığında bu bir savunma mekanizması, bir
        büyüme stratejisi değil. Bir şirket sermayesini kendi hissesine mi
        yoksa yeni bir yatırıma mı ayıracağına karar verirken, önce hangi
        ihtiyaca cevap verdiğini netleştirmesi gerekiyor: piyasa oynaklığına
        karşı bir denge mi arıyor, yoksa büyümeye mi hazırlanıyor?
      </p>
    </MakaleLayout>
  );
}
