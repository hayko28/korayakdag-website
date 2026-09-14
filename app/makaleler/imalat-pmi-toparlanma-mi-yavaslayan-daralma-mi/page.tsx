import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "imalat-pmi-toparlanma-mi-yavaslayan-daralma-mi"
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
        İstanbul Sanayi Odası&apos;nın S&amp;P Global iş birliğiyle
        hazırladığı Türkiye İmalat PMI endeksi ağustosta 48,1&apos;e
        yükseldi. Temmuzdaki 47,7&apos;den gelen bu artış, birçok
        ekonomi haberinde &quot;imalatta toparlanma işareti&quot;
        başlığıyla duyuruldu. Manşete bakan bir işletme sahibi, sektörde
        işlerin düzelmeye başladığı izlenimine kapılabilir. Alt
        kalemlere bakınca tablo o kadar iyimser değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        50&apos;nin altı hâlâ daralma demek
      </h2>
      <p>
        PMI metodolojisinde 50 eşik değeri, o ay sektörün büyüdüğü ile
        küçüldüğü arasındaki sınırı gösterir. 48,1, geçen aya göre daha
        iyi bir sayı olsa da hâlâ eşiğin altında, yani imalat sektörü
        ağustosta da küçülmeye devam etti; üstelik bu üst üste üçüncü
        ay. Yeni siparişler ve ihracat siparişleri de aynı ayda geriledi,
        imalatçılar üretim hacmini yine azalttı. &quot;En yüksek
        seviye&quot; ifadesi doğru ama referans noktası &quot;daha az
        kötü&quot;, &quot;iyi&quot; değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl uyarı maliyet tarafında
      </h2>
      <p>
        Verinin belki de en çok göz ardı edilen kısmı, girdi maliyeti
        enflasyonunun yakıt ve hammadde fiyatlarındaki artışla birlikte
        son üç ayın en yüksek seviyesine çıkmış olması. Yani üretim
        sipariş daralması sürerken imalatçının maliyet baskısı aynı anda
        büyüyor; bu iki eğilim üst üste geldiğinde marj üzerindeki baskı
        katlanarak artar. Danışmanlık pratiğinde makro veriyi
        değerlendirirken önerilen yaklaşım, tek bir endeks başlığına
        değil, siparişler, üretim ve maliyet alt kalemlerinin birlikte
        ne söylediğine bakmaktır. Bu ay o üçlü, temkinli kalmayı işaret
        ediyor.
      </p>
    </MakaleLayout>
  );
}
