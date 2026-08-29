import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ilk-girisim-battiginda-silikon-vadisi-farki"
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
        Twitter&apos;ın kurucusu Evan Williams&apos;ın önce Odeo adında bir
        podcast platformu vardı; Apple, iTunes&apos;a podcast desteğini
        ekleyince şirket bir anda anlamsızlaştı. Slack&apos;in kurucusu
        Stewart Butterfield&apos;ın önce Glitch adında bir online oyunu vardı;
        oyun 2012&apos;de battı, geriye ekibin kendi içinde kullandığı bir
        mesajlaşma aracı kaldı. Uber&apos;in kurucusu Travis Kalanick&apos;in
        önce Scour adında bir dosya paylaşım şirketi vardı; telif davaları
        yüzünden iflas başvurusunda bulundu. Bill Gates&apos;in önce
        Traf-O-Data adında, hiç tutmayan bir trafik verisi şirketi vardı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Silikon Vadisi&apos;nde &quot;battı&quot; bir CV maddesi
      </h2>
      <p>
        Silikon Vadisi&apos;nde bu hikayeler saklanmıyor, tam tersine
        anlatılıyor. Bir yatırımcı önündeki girişimcinin özgeçmişinde
        &quot;kapandı&quot; ibaresi gördüğünde bunu bir eksi olarak değil,
        genelde bir artı olarak okuyor: bu kişi bir kez pazarla, ekiple,
        nakit akışıyla, hukuki riskle gerçek anlamda yüzleşmiş. İkinci
        denemede aynı hatayı tekrarlama ihtimali daha düşük görülüyor.
      </p>
      <p>
        Türkiye&apos;deki tabloya bakıldığında fark net. Danışmanlık
        süreçlerinde ilk şirketi kapanmış bir girişimciyle oturulduğunda, o
        kişinin bunu genelde özgeçmişinden tamamen sildiği, bir sonraki
        yatırımcı görüşmesinde hiç gündeme getirmediği görülüyor. Batmış bir
        şirket burada bir deneyim değil, bir utanç kaynağı olarak
        taşınıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl maliyet, sessizlik
      </h2>
      <p>
        Bu sessizliğin bir bedeli var. Bir girişimci ilk denemesinde neyi
        yanlış yaptığını açıkça konuşamadığında, o dersi ne bir sonraki
        yatırımcıyla ne de kendi ekibiyle paylaşabiliyor; aynı hatayı ikinci
        kez, bazen üçüncü kez tekrarlıyor. Oysa Odeo&apos;dan Twitter&apos;a,
        Scour&apos;dan Uber&apos;e giden yolu kısaltan şey, o ilk başarısızlığın
        üzerinin örtülmesi değil, hızla masaya yatırılıp bir sonraki adıma
        dönüştürülmesiydi. Türkiye&apos;deki ekosistemin büyümesi için gereken
        şeylerden biri belki de yeni bir teşvik programından önce, bu basit
        kültürel değişim: battı demenin bir zayıflık değil, bir tecrübe
        beyanı olduğunu kabul etmek.
      </p>
    </MakaleLayout>
  );
}
