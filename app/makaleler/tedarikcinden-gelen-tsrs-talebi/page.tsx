import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tedarikcinden-gelen-tsrs-talebi"
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
        Bir tekstil ihracatçısının finans müdürü, KGK&apos;nın TSRS
        eşiklerini geçtiğimiz ay neredeyse iki katına çıkardığını duyunca
        rahatladı: aktif toplamı ve çalışan sayısı yeni sınırların altında
        kalıyordu. Yönetime &quot;bu yıl kapsam dışıyız&quot; diye rapor
        yazdı. Üç ay sonra İtalyan bir alıcıdan gelen e-posta bu rahatlığı
        bozdu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Yasal muafiyet, ticari muafiyet değil
      </h2>
      <p>
        Alıcı, tedarik zincirindeki firmalardan sürdürülebilirlik verisi ve
        karbon ayak izi raporu istiyordu — kendi TSRS yükümlülüğünü
        tedarikçilerine devrediyordu. Firma yasal olarak kapsam dışıydı ama
        ticari olarak değildi. Danışmanlık sürecinde bu ayrım sürekli gözden
        kaçıyor: eşik değerleri yalnızca yasal zorunluluğu belirliyor, AB&apos;nin
        sınırda karbon düzenlemesi ve büyük alıcıların talepleri aynı veriyi
        farklı bir kapıdan istiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Hazırlıksızlığın bedeli müşteri kaybı
      </h2>
      <p>
        Firma sonunda gönüllü olarak TSRS uyumlu bir rapor hazırladı —
        zorunluluktan değil, müşteriyi kaybetmemek için. Bu, kapsam dışı
        kalmanın hazırlıksız kalmayı meşrulaştırmadığının somut bir örneği.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        &quot;Biz eşiğin altındayız&quot; cümlesi doğru olabilir, ama
        müşterinizin de aynı cümleyi kurabileceğini garanti etmez. İhracat
        yapan bir işletme için asıl soru kanunun kapsayıp kapsamadığı değil,
        alıcının bir gün bu veriyi isteyip istemeyeceği.
      </p>
    </MakaleLayout>
  );
}
