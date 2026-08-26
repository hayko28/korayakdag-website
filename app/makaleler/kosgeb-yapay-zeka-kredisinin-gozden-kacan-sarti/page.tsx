import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-yapay-zeka-kredisinin-gozden-kacan-sarti"
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
        KOSGEB&apos;in teknoloji girişimlerine yönelik Yapay Zekâ Kredi
        Programı duyurulduğunda ilk dikkat çeken rakam oldu: 500 bin TL ile 5
        milyon TL arasında faizsiz destek. Danışmanlık sürecinde asıl önemli
        olanın rakam değil, kimin bu krediye erişebildiği olduğunu görmek
        gerekiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ödemesiz dönem, nakit akışını koruyan asıl detay
      </h2>
      <p>
        Destek başlangıcından itibaren 12 ay ödemesiz dönem tanınıyor,
        ardından kalan tutar 12 eşit taksitte tahsil ediliyor. Bu yapı,
        yapay zekâ yatırımının nakit akışına yükünü ürünün olgunlaşacağı ilk
        yıl boyunca erteliyor — birçok işletmenin yeni teknolojiye
        yatırımdan kaçınmasının asıl nedeni maliyet değil, o ilk yılın nakit
        baskısı olduğu için bu detay rakamdan daha kıymetli.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Herkes başvuramıyor
      </h2>
      <p>
        Programdan yararlanmak için işletmenin KOSGEB Veri Tabanı&apos;nda
        aktif, onaylı bir KOBİ beyannamesine ve Teknogirişim Rozeti&apos;ne
        sahip olması şart. Bu iki koşul, desteği gerçekten teknoloji üretme
        kapasitesi olan işletmelere yönlendiriyor — ama aynı zamanda,
        beyannamesini güncel tutmayan ya da rozeti hiç almamış birçok firmayı
        daha başvuru aşamasında eliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bu programı kaçıran işletmelerin çoğu krediyi reddedilmiyor, ona
        hiç başvuramıyor — sebep tek satırlık bir idari eksiklik. Devlet
        desteklerinde asıl kayıp genelde başvuru masasında değil, başvuru
        öncesindeki hazırlıksızlıkta yaşanıyor.
      </p>
    </MakaleLayout>
  );
}
