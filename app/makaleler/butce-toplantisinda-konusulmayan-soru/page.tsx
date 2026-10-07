import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "butce-toplantisinda-konusulmayan-soru"
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
        Ekim ayı geldiğinde orta ölçekli pek çok şirkette aynı sahne
        tekrarlanır. Finans ekibi gelecek yılın bütçe şablonunu gönderir,
        satış müdürü &quot;yüzde 20 büyüyeceğiz&quot; diye bir hedef yazıp
        iletir, pazarlama &quot;bu rakam nereden çıktı&quot; diye sorar ve
        net bir cevap gelmez. Toplantı bir saat sürer, hedef değişmeden
        kalır; sadece tablodaki hücrenin rengi kırmızıdan sarıya döner.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sorulmayan soru
      </h2>
      <p>
        Bu toplantılarda genelde konuşulmayan tek şey, aynı şirketin geçen
        yılki hedefine neden ulaşamadığıdır. Kur mu beklenenden farklı
        çıktı, bir müşteri mi kaybedildi, yoksa hedef en baştan gerçekçi
        değil miydi? Bu soru masaya gelmeden yeni hedef, eskisinin üzerine
        bir tahmin daha eklenerek kurulur. Geçen yılın sapması bir veri
        noktası olarak değil, unutulması gereken bir ayrıntı olarak
        geçiştirilir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakam değil, alışkanlık sorunu
      </h2>
      <p>
        Danışmanlık sürecinde sık görülen bir durum: bütçe toplantısına
        hazırlanan ekip saatlerce yeni yılın varsayımlarını tartışır ama
        geçen yılın gerçekleşen sonuçlarını aynı titizlikle masaya hiç
        yatırmaz. Oysa bir hedefin gerçekçi olup olmadığını anlamanın en
        ucuz yolu, bir önceki yılın sapmasını satır satır incelemektir.
        Bu inceleme yapılmadan konulan her yeni hedef, bir önceki yılın
        aynı iyimserliğini bir kez daha tekrarlama riski taşır.
      </p>

      <p>
        Bütçe dönemini her yıl aynı yorgunlukla geçiren şirketlerde
        sorun genelde yeni yılın rakamında değil, geçen yılın gerçek
        sonuçlarının hiç konuşulmamış olmasındadır.
      </p>
    </MakaleLayout>
  );
}
