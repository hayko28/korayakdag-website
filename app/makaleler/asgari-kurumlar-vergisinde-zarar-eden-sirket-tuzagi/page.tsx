import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "asgari-kurumlar-vergisinde-zarar-eden-sirket-tuzagi"
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
        Bir orta ölçekli tekstil ihracatçısının mali işler ekibi, yıl
        sonuna yaklaşırken ticari bilançoda zarar gördü ve rahatladı.
        Kur farkı giderleri ve yüksek finansman maliyeti o yılı zararla
        kapatmıştı; &quot;zarar varsa vergi de yok&quot; varsayımıyla
        kurumlar vergisi beyannamesini neredeyse boş bir formalite olarak
        gördüler. Beyanname hazırlandığında karşılarına çıkan rakam bu
        varsayımı tersine çevirdi: şirket, ticari zarara rağmen ödenecek
        bir kurumlar vergisiyle karşı karşıyaydı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kanun zararı değil, bir başka tabanı esas alıyor
      </h2>
      <p>
        2025 yılı kazançlarından itibaren yürürlükte olan asgari kurumlar
        vergisi, Kurumlar Vergisi Kanunu&apos;na 7524 sayılı Kanun&apos;la
        eklenen 32/C maddesiyle geldi. Kurala göre hesaplanan kurumlar
        vergisi, indirim ve istisnalar düşülmeden önceki kurum kazancının
        en az yüzde 10&apos;u kadar olmak zorunda; normal yöntemle çıkan
        vergi bu tutarın altında kalırsa aradaki fark ayrıca ödeniyor.
        Hesaplamanın başlangıç noktası ticari bilanço kârı ya da zararı
        değil, kanunen kabul edilmeyen giderlerle (KKEG) şişen ayrı bir
        taban.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Zararı büyüten kalemler, vergi matrahını da büyütüyor
      </h2>
      <p>
        O tekstil firmasının zararını oluşturan kur farkı ve finansman
        gideri vergi açısından sorun yaratmadı; asıl etkiyi, aynı yıl
        içinde ayrılan şüpheli alacak karşılıklarının bir kısmı ile
        ödenen bazı idari para cezaları yaptı. Bu tür kalemler ticari
        bilançoda gider olarak zararı büyütürken, vergi matrahı
        hesaplanırken kazanca geri ekleniyor. Üstüne bir de geçmiş yıl
        zararları bu asgari hesaplamada hiç dikkate alınmıyor; yani üst
        üste zarar eden bir şirket bile, KKEG kalemleri yeterince
        yüksekse vergi ödeyebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Yıl kapanmadan önce hâlâ görülebilecek bir tablo
      </h2>
      <p>
        Üçüncü dönem geçici vergi beyannamesi geride kaldı, ama yıl sonu
        bilançosu henüz kesinleşmedi. Bu ara dönem, KKEG kalemlerinin
        toplamını ve bunun asgari vergi tabanına etkisini önceden görmek
        için hâlâ zaman tanıyor. Konuyu bir{" "}
        <Link
          href="/blog/asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi"
          className="text-orange-600 underline"
        >
          asgari kurumlar vergisi hesaplaması
        </Link>{" "}
        üzerinden önceden gözden geçiren şirketler için mart ayındaki
        beyanname bir sürpriz değil, zaten bilinen bir rakamın resmi
        teyidi oluyor.
      </p>
    </MakaleLayout>
  );
}
