import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kobilere-ilk-patent-basvurusunda-yuzde-75-indirim"
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
        Orta ölçekli bir makine imalatçısının mühendislik ekibinde üç
        yıldır masada duran bir tasarım var. Her bütçe döneminde aynı soru
        gündeme geliyor: patent başvurusuna mı girişilsin, yoksa kaynak
        üretime mi ayrılsın. Cevap hep ikincisi oluyor, çünkü başvuru,
        araştırma ve inceleme ücretleri küçük bir şirket için göze
        alınacak bir kalem gibi görünmüyor; tasarım da her yıl bir sonraki
        bütçeye devrediliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        31 Ekim&apos;de değişen tarife
      </h2>
      <p>
        31 Ekim 2026 tarihli ve 33416 sayılı Resmi Gazete&apos;de
        yayımlanan değişiklikle TÜRKPATENT, daha önce hiç patent
        başvurusu yapmamış bir KOBİ&apos;nin ilk başvurusunda başvuru,
        araştırma ve inceleme raporu ücretlerine yüzde 75 indirim
        getirdi. Yapay zekâ alanını kapsayan G06N sınıfındaki
        başvurularda ise acil araştırma raporu ücretine ayrıca yüzde 50
        indirim uygulanıyor. İşlemler, önceki yıllarda olduğu gibi
        TÜRKPATENT&apos;in EPATS sistemi üzerinden yürütülüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Maliyet gerçekten engel miydi?
      </h2>
      <p>
        Patent başvurusunu erteleyen şirketlerin çoğunda gerekçe hep
        aynıydı: ücretler, henüz ticarileşmemiş bir tasarım için erken
        bir gider gibi görülüyordu. İlk başvuruda maliyetin dörtte
        birine inmesi bu gerekçeyi büyük ölçüde ortadan kaldırıyor. Geriye
        kalan soru artık bütçeyle ilgili değil: o tasarımı rakipten önce
        tescil ettirme kararını kimin, ne zaman alacağıyla ilgili.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Patentsiz büyümenin bedeli daha sonra ortaya çıkar
      </h2>
      <p>
        Bir tasarımı ya da ürün yeniliğini tescilsiz bırakmanın bedeli,
        genelde başvuru ücretinden çok daha geç ve çok daha yüksek bir
        anda görülüyor: aynı fikir bir rakip tarafından tescillendiğinde
        ya da bir alıcı{" "}
        <Link
          href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
          className="text-orange-600 underline"
        >
          fikri mülkiyet
        </Link>{" "}
        durumunu sorguladığında. İndirim kalkana kadar bekleyen bir
        işletme için pencere şimdi daha geniş; sorulması gereken soru,
        bu pencerenin ne kadar açık kalacağı değil, içeride kaç tasarımın
        hâlâ beklemede olduğu.
      </p>
    </MakaleLayout>
  );
}
