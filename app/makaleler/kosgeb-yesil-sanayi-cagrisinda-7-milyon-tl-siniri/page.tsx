import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-yesil-sanayi-cagrisinda-7-milyon-tl-siniri"
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
        Konya&apos;da bir döküm fabrikasının sahibi, 16 Kasım&apos;da
        başvuruya açılan KOSGEB&apos;in Sanayide Temiz ve Döngüsel Ekonomi
        çağrısını görünce hesabını hızlıca yaptı: enerji verimliliği
        projesine 10 milyon TL bütçe ayırıp yüzde 70 destek oranıyla 7
        milyon TL&apos;lik üst sınırdan yararlanacaktı. Proje planını bu
        rakama göre hazırladı. Danışmanlık sürecinde karşısına çıkan tek
        bir satır, bu planı baştan değiştirdi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Destek oranı sabit, ama taban şirketten şirkete değişiyor
      </h2>
      <p>
        Çağrının şartlarından biri, işletmenin bilançosu veya net satış
        hasılatının, hazırlanan proje bütçesinden büyük olmasını
        zorunlu kılıyor. Fabrikanın geçen yılki cirosu 7,5 milyon TL
        seviyesinde kaldığı için, 10 milyon TL&apos;lik proje bütçesi bu
        şartı karşılamıyordu. Sonuç olarak proje bütçesi kendi cirosunun
        altına, 7 milyon TL&apos;ye çekildi ve destek tutarı da yüzde 70
        oranıyla 4,9 milyon TL&apos;de kaldı. 7 milyon TL rakamı
        çağrının üst sınırı, ama her işletmenin fiilen ulaşabildiği
        rakam değil; önce kendi bilanço büyüklüğünün proje bütçesini ne
        kadar taşıyabildiğine bakmak gerekiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Takvim dört ayrı aşamadan oluşuyor
      </h2>
      <p>
        Fabrika sahibinin ikinci şaşkınlığı takvimle ilgiliydi. Ön
        başvuru 9 Aralık&apos;ta kapanıyor, birinci aşama değerlendirmesi
        18 Aralık&apos;ta ilan ediliyor, asıl proje başvurusu 21 Aralık
        ile 31 Ocak 2027 arasında yapılıyor ve desteklenecek işletmeler
        ancak 31 Mart 2027&apos;de belli oluyor. Programın kendisi ise 1
        Nisan 2027&apos;de başlıyor. &quot;Birkaç hafta içinde
        sonuçlanır&quot; beklentisiyle nakit akışını planlayan bir
        işletme için bu, dört aya yakın bir bekleme anlamına geliyor.{" "}
        <Link
          href="/blog/kosgeb-yesil-sanayi-destek-programi-2026"
          className="text-orange-600 underline"
        >
          Çağrının tüm şartları ve geri ödeme yapısı
        </Link>{" "}
        bu süreci baştan planlamak isteyen KOBİ&apos;ler için daha
        ayrıntılı bir çerçeve sunuyor.
      </p>
    </MakaleLayout>
  );
}
