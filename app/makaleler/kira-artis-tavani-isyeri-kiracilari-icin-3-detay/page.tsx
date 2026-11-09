import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kira-artis-tavani-isyeri-kiracilari-icin-3-detay"
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
        Bir mağaza zinciri işletmecisi, yıllık kira döneminin dolmasına
        üç hafta kala ev sahibinden gelen yazıyı açtı: &quot;piyasa
        koşulları&quot; gerekçesiyle yüzde 45 artış talebi. TÜİK&apos;in
        3 Kasım&apos;da açıkladığı verilerle Kasım ayı için yasal kira
        artış tavanı yüzde 31,23&apos;e sabitlenmişti; yöneticinin elinde
        bu tavanı bilmekten daha fazlasına ihtiyacı vardı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tavan sadece konut için değil
      </h2>
      <p>
        Türk Borçlar Kanunu madde 344, kira artışını TÜFE&apos;nin son
        12 aylık ortalamasıyla sınırlarken bu sınırı konut kiralarıyla
        da sınırlı tutmuyor; dükkan, ofis, atölye, depo gibi her çatılı
        işyeri kirası aynı tavana tabi. Taraflar sözleşmede farklı bir
        oran yazsa bile, geçerli olan hep bu yasal üst sınır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Beş yılı geçen kiracı bu korumadan çıkıyor
      </h2>
      <p>
        Aynı adreste beş yıldan uzun süredir kiracı olan işletmeler için
        kanun farklı bir kapı açıyor: ev sahibi mahkemeden rayiç bedel
        talep edebiliyor, ve orada artık TÜFE tavanı değil bölgenin
        güncel kira seviyesi konuşuluyor. Yedi yıldır aynı mağazada olan
        bir kiracı için bu, tavanın hiç devreye girmeyeceği anlamına
        gelebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşmedeki rakam tavanın altındaysa, o rakam geçerli
      </h2>
      <p>
        Sözleşmede yazılı artış oranı yasal tavanın altındaysa mahkeme
        de ev sahibi de bu rakamla bağlı kalıyor; kiracı sonradan
        &quot;tavan daha yüksekmiş, ben de o kadar öderim&quot;
        diyemiyor. Mağaza zinciri yöneticisi, sözleşmesindeki beş yıllık
        süreyi ve yazılı artış maddesini kontrol ettiğinde, teklif
        edilen yüzde 45&apos;in hiçbir hukuki karşılığı olmadığını
        gördü; mesele pazarlık değil, hangi maddenin hangi tarihte
        devreye girdiğini bilmekti.
      </p>
    </MakaleLayout>
  );
}
