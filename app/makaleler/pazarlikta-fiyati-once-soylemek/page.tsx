import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "pazarlikta-fiyati-once-soylemek"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
  alternates: { canonical: `/makaleler/${meta.slug}` },
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
        Bir danışmanlık görüşmesinde sık karşılaşılan bir sahne var:
        masadaki iki taraf da fiyatı ilk kendisi söylemek istemiyor.
        Biri &quot;siz nasıl düşünüyorsunuz&quot; diye sorarken diğeri
        aynı soruyu geri çeviriyor, birkaç dakika boyunca kimse bir
        rakam söylemeden görüşme ilerliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sessizlik nezaket değil, çerçeve kaygısı
      </h2>
      <p>
        Bu bekleyiş genelde kibarlık olarak yorumlanıyor, oysa
        pazarlık literatüründeki çapa etkisi başka bir şey söylüyor.
        İlk söylenen rakam rastgele kalmıyor, görüşmenin geri
        kalanının döneceği referans noktasını belirliyor. Karşı taraf
        o rakamı reddetse bile, sonraki teklifler hep o ilk sayıya
        göre yüksek ya da düşük olarak değerlendiriliyor.
      </p>

      <p>
        Bir yazılım şirketinin satış ekibi, yıllık bakım sözleşmesi
        görüşmelerinde uzun süre rakamı müşterinin söylemesini
        bekledi. Altı ay sonra fark ettikleri şey, müşterinin ilk
        önerdiği tutarın neredeyse her görüşmede nihai anlaşmaya en
        yakın sayı olduğuydu. Ekip, kendi belirlemediği bir çerçevenin
        içinde pazarlık yapıyordu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Hazırlıklı ilk rakam, rastgele ilk rakamdan farklıdır
      </h2>
      <p>
        Burada ayrım önemli: hazırlıksız söylenen bir ilk rakam geri
        tepebilir, ama maliyetini, piyasa koşullarını ve
        alternatiflerini önceden hesaplamış bir taraf için ilk
        teklifi vermek dezavantaj değil, avantaj. Masada en çok
        bekleyen taraf genelde en az hazırlanmış olandır; elinde net
        bir rakam olmadığı için susuyor, susmayı da bir strateji
        sanıyor.
      </p>

      <p>
        Bir sonraki görüşmede asıl soru fiyatı kimin söyleyeceği
        değil, hangi tarafın o rakamı masaya oturmadan önce hazırladığı.
      </p>
    </MakaleLayout>
  );
}
