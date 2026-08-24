import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kararlarinizi-gercekte-kim-veriyor"
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
        Dünyanın dört bir yanındaki 22 laboratuvardan nörobilimcilerin ortak
        çalışmasıyla, bir memeli beyninin karar anındaki tam aktivite
        haritası ilk kez çıkarıldı. 139 fareden toplanan veriler, beynin 279
        bölgesinde 600 binden fazla nöronun aktivitesini kapsıyor — bu da bir
        farenin beyninin yaklaşık yüzde 95&apos;ine denk geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Noel ağacı gibi aydınlanma&quot;
      </h2>
      <p>
        Araştırmanın en dikkat çekici bulgusu şu: bir karar anında beynin tek
        bir bölgesi değil, aynı anda pek çok bölgesi birden devreye giriyor.
        Bilim insanları bu tabloyu &quot;Noel ağacı gibi aydınlanma&quot;
        olarak tanımlıyor. Yani &quot;kararı beynin şu bölgesi veriyor&quot;
        şeklindeki basit anlatı, gerçeği yansıtmıyor — karar, dağınık ve eş
        zamanlı bir sürecin ürünü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Şirketlerde de durum farklı değil
      </h2>
      <p>
        Bir şirkette fiyatlandırma, yatırım ya da işe alım kararını
        &quot;kimin verdiğini&quot; sorsanız genelde tek bir isim ya da
        departman söylenir: satış, finans, ya da CEO. Oysa danışmanlık
        sürecinde görülen gerçek tablo çok daha dağınık — o kararı geçmiş
        veriler, ekip içi tartışmalar, rakip hamleleri, hatta bir önceki
        toplantıda söylenmiş yarım bir cümle besliyor. Kararı &quot;veren&quot;
        kişi çoğu zaman sadece son onayı imzalayan kişi oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir kararı gerçekten iyileştirmek isteyen bir yönetici, önce
        &quot;bu karar aslında nerelerden besleniyor&quot; sorusunu sormalı —
        sadece son onay kutusuna değil, o kutuya ulaşana kadar geçen tüm
        dağınık sürece bakmalı.
      </p>
    </MakaleLayout>
  );
}
