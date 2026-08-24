import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "curiosityin-14-yillik-sabrinin-karsiligi"
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
        NASA&apos;nın Curiosity aracı Mars&apos;a 2012&apos;de indi. O
        günden bu yana on dört yıldır gezegenin yüzeyinde yavaş yavaş
        ilerliyor, toprak ve kaya örnekliyor. Son analizlerde, aracın
        incelediği 3,5 milyar yıllık kayalarda 20&apos;den fazla organik
        molekül tespit edildi — bilim insanları bunu Mars&apos;ta bir
        zamanlar yaşam için gerekli kimyasal altyapının var olabileceğine
        dair en güçlü işaretlerden biri olarak değerlendiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl özel olan hız değil, sabır
      </h2>
      <p>
        Bu keşfi dikkat çekici kılan tek bir çarpıcı an değil. Curiosity bir
        haftada ya da bir yılda bu sonuca ulaşmadı; on dört yıl boyunca her
        örnek, kendinden önceki örneğin üzerine inşa edilen küçük bir veri
        parçası oldu. Bilim insanları bu kadar uzun bir süre boyunca aynı
        soruyu sormaya, aynı sabırla veri toplamaya devam etti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İş dünyasında da aynı örüntü tekrarlanıyor
      </h2>
      <p>
        Danışmanlık sürecinde en değerli sonuçların genelde aynı şekilde
        ortaya çıktığı görülüyor: çeyreklik hedeflerin peşinde koşarken
        değil, yıllar süren tutarlı bir birikimin sonunda. Bir pazara girmek,
        bir markayı oturtmak ya da sağlam bir müşteri portföyü kurmak da tıpkı
        Mars&apos;ta yaşam izi aramak gibi — sonuç genelde ilk denemede
        değil, sabırla tekrarlanan küçük adımlarda ortaya çıkıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir stratejinin işe yaramadığını düşünmeden önce sorulması gereken
        soru genelde &quot;yeterince mi denedik&quot; değil, &quot;yeterince
        uzun mu denedik&quot; sorusu.
      </p>
    </MakaleLayout>
  );
}
