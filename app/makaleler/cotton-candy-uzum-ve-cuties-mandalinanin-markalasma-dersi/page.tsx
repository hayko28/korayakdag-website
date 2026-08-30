import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "cotton-candy-uzum-ve-cuties-mandalinanin-markalasma-dersi"
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
        Bir tarım şirketi, vahşi bir asma türünü kültür üzümüyle
        çaprazlayarak sekiz yıl boyunca yeni bir çeşit geliştirdi. Ortaya
        çıkan üzümün tadı gerçekten pamuk şekerine benziyordu. Şirket adını
        &quot;Cotton Candy&quot; koydu, markayı tescilledi ve rafa çıkardı.
        Sonuç: müşteriler bu üzüme sıradan üzümün iki katı fiyat ödemeye razı
        oldu. Sadece bir yıl içinde ABD&apos;de 129 milyon dolarlık satışa
        ulaştı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki farklı meyve, aynı formül
      </h2>
      <p>
        Mandalinada da benzer bir hikaye yaşandı. Onlarca yıl market
        raflarında sadece &quot;mandalina&quot; diye satılan meyveye
        &quot;Cuties&quot; adı verildi; küçük, kolay soyulan taneler seçilip
        özenli bir ambalajla sunuldu. Bugün Amerika&apos;da tüketicilerin
        büyük bölümü markette mandalina değil, doğrudan &quot;Cuties&quot;
        istiyor — tıpkı mendile &quot;Kleenex&quot; demek gibi. Marka,
        yüzlerce milyon dolarlık bir işe dönüştü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Markalaşma sadece lüks ürünün işi değil
      </h2>
      <p>
        Danışmanlık masasında sık karşılaşılan bir yanılgı var: işletme
        sahipleri markalaşmayı teknolojiye, modaya ya da lüks ürüne özgü
        sanıyor, &quot;bizimki zaten emtia, farklılaşacak bir şey yok&quot;
        diye düşünüyor. Oysa üzüm ve mandalina gibi en sıradan, en
        kopyalanabilir ürünler bile doğru isim, doğru ambalaj ve doğru
        hikayeyle tamamen farklı bir fiyat kategorisine taşınabiliyor.
        Değişen ürün değil, ürünün anlatılma biçimi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        129 milyon dolarlık üzüm satışının ve yüzlerce milyon dolarlık
        mandalina markasının arkasında yeni bir tarım teknolojisi yok; sekiz
        yıllık sabır ve bir isim var. Şirketler için de aynı soru geçerli:
        kendi ürününüzü hâlâ bir emtia gibi mi satıyorsunuz, yoksa ona ait bir
        hikaye mi anlatıyorsunuz?
      </p>
    </MakaleLayout>
  );
}
