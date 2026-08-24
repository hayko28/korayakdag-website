import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "michelinin-kapadokyaya-girmesinin-dersi"
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
        Kapadokya deyince akla ilk gelen şey sıcak hava balonu turları ve
        otantik taş oteller — &quot;gurme mutfak&quot; listenin çok gerisinde
        bir yerde durur, en azından geçen yıla kadar öyleydi. Michelin
        Rehberi&apos;nin 2026 Türkiye seçkisinde toplam 171 restoran yer
        aldı, yıldızlı restoran sayısı 17&apos;ye çıktı. Ama listenin en
        dikkat çekici satırı bir yıldız daha değildi: Michelin ilk kez bir
        Kapadokya restoranına, Nevşehir&apos;deki Revithia&apos;ya girdi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Burada olmaz&quot; denen bir yerde
      </h2>
      <p>
        Bir danışmanlık ekibine on yıl önce &quot;Kapadokya&apos;da fine
        dining restoranı açacağız&quot; deseniz, muhtemelen önce bir pazar
        araştırması önerirlerdi — bölgeye gelen turist profili balon turu ve
        müze gezisine odaklı, &quot;gurme yemek için buraya gelen olmaz&quot;
        derlerdi. Sayılara bakarsanız da onları haklı çıkarırdınız: bölgenin
        gastronomi altyapısı, İstanbul ya da İzmir&apos;le kıyaslanamazdı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kalabalık pazarda bir sandalye yerine, boş bir masa
      </h2>
      <p>
        Ama Revithia bu beklentiyi tam tersine çevirdi: rekabetin en yoğun
        olduğu İstanbul&apos;da onlarca restorandan biri daha olmak yerine,
        kimsenin beklemediği bir bölgede fark yaratmayı seçti. Sonuç, büyük
        şehirdeki pek çok köklü restoranın alamadığı bir tanınırlık oldu —
        çünkü orada rekabet neredeyse yoktu, dikkat çekmek için binlerce
        restoranın arasından sıyrılmak gerekmiyordu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bazen büyümenin yolu pazarı büyütmekten değil, doğru pazarı seçmekten
        geçiyor. Herkesin baktığı yerde daha iyi olmaya çalışmak yerine,
        kimsenin bakmadığı yerde iyi olmak çoğu zaman çok daha az rekabetle
        çok daha fazla dikkat çekiyor.
      </p>
    </MakaleLayout>
  );
}
