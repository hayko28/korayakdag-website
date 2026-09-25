import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "orta-vadeli-programda-enflasyon-hedefi-revizyonu"
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
        6 Eylül&apos;de Resmi Gazete&apos;de yayımlanan 2027-2029 dönemi Orta
        Vadeli Program, bir önceki programın 2026 yılı için verdiği sözü
        sessizce güncelledi. Bir yıl önce aynı belge, 2026 yıl sonu enflasyon
        hedefini yüzde 16 olarak duyurmuştu. Yeni programda bu rakam artık
        yüzde 28,4. Aradaki fark, resmi hedefe göre kurulmuş her bütçenin
        gerçeklikten ne kadar sapabileceğinin somut bir ölçüsü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bir yıl önce hangi plan bu sayı üzerine kuruldu?
      </h2>
      <p>
        2025 sonunda hazırlanan bütçelerin bir kısmı, resmi programın yüzde
        16&apos;lık hedefini referans aldı: kira artışları, tedarikçi
        sözleşmeleri, maaş zammı planlaması bu sayı etrafında şekillendi.
        Gerçekleşen enflasyon tahmini bugün bunun yaklaşık iki katı seviyede.
        Yeni program şimdi 2027 için yüzde 21, 2028 için yüzde 13,5, 2029
        için yüzde 9 hedefliyor; büyümenin ise yüzde 3,3&apos;ten kademeli
        olarak yüzde 5&apos;e çıkması bekleniyor. Sorulması gereken soru
        hedefin doğru olup olmadığı değil, bu hedeflere göre kurulan bir
        planın hedef sapması durumunda ne kadar dayanıklı olduğu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tek senaryolu bütçe, riskin kendisi
      </h2>
      <p>
        Orta Vadeli Program bir tahmin değil, bir siyasi taahhüttür ve her
        yıl güncellenir. Bunu bir işletmenin fiyatlandırma, borçlanma veya
        ücret politikasının tek dayanağı yapmak, geçen yılın örneğinde
        görüldüğü gibi ciddi bir sapma riski taşıyor. Daha sağlam bir
        yaklaşım, bütçeyi tek bir resmi rakama değil, iki veya üç farklı
        enflasyon ve büyüme senaryosuna göre kurmak; sözleşmelere ve zam
        planlarına, hedefin tutmaması durumunda devreye girecek bir revizyon
        mekanizması eklemek. 2026&apos;nın dersi zaten ortada: hedef bir yılda
        neredeyse iki katına çıkabiliyor.
      </p>
    </MakaleLayout>
  );
}
