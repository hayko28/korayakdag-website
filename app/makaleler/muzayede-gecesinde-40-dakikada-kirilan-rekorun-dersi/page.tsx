import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "muzayede-gecesinde-40-dakikada-kirilan-rekorun-dersi"
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
        19 Mayıs 2026 akşamı, New York&apos;ta Christie&apos;s salonunda
        teklifler art arda geldi: sadece 40 dakikada 630 milyon dolarlık
        sanat eseri el değiştirdi. Gecenin tamamında toplam satış 1,1 milyar
        doları buldu. Jackson Pollock&apos;un bir tablosu tek başına 181,2
        milyon dolara alıcı buldu — sanatçının açık artırma rekoru.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl hikaye eserlerde değil, koleksiyonun kendisinde
      </h2>
      <p>
        Satılan eserlerin büyük bölümü, medya patronu S.I. Newhouse&apos;un
        onlarca yıl boyunca sessizce topladığı, neredeyse hiç kamuya
        açılmamış bir koleksiyondan geliyordu. Bu eserler daha önce hiçbir
        müzayedeye çıkmamış, sıradan bir yatırım aracı gibi de
        pazarlanmamıştı. Tam da bu yüzden salona girer girmez rekabeti
        kızıştırdı — alıcılar bir daha ele geçiremeyecekleri bir fırsatla
        karşı karşıya olduklarını biliyordu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlıkta da aynı dinamik geçerli
      </h2>
      <p>
        Herkesin sunduğu bir hizmeti biraz daha ucuza satan bir firma, er ya
        da geç fiyat rekabetine mahkum kalıyor. Buna karşılık kendine özgü,
        kolay kopyalanamayan ve sabırla inşa edilmiş bir konumlanma —
        tıpkı bir koleksiyon gibi — piyasaya çıktığında değerini kendisi
        belirliyor. Danışmanlık masasında sık gördüğüm hata, şirketlerin
        kendi farklılaşan yönlerini fiyat indirimiyle gölgelemesi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        1,1 milyar dolarlık gece, iyi bir pazarlama kampanyasının değil,
        yıllarca sabırla korunmuş bir kıtlığın sonucuydu. Şirketler için de
        aynı ders geçerli: değeri asıl artıran şey, çabuk satmak değil,
        satmadan önce gerçekten farklı bir şey inşa etmiş olmak.
      </p>
    </MakaleLayout>
  );
}
