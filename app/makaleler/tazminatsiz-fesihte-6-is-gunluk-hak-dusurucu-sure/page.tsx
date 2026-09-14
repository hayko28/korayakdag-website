import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tazminatsiz-fesihte-6-is-gunluk-hak-dusurucu-sure"
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
        Bir çalışanın hırsızlık, güveni kötüye kullanma ya da sadakatsizlik
        gibi ahlak ve iyiniyet kurallarına aykırı bir davranışı ortaya
        çıktığında, işverenin elinde tazminatsız ve ihbarsız fesih hakkı
        doğar. Ama bu hak sonsuza kadar beklemiyor; İş Kanunu m.26&apos;daki
        hak düşürücü süre, olayın öğrenildiği günden itibaren yalnızca 6 iş
        günü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık pratiğinde sık görülen sahne
      </h2>
      <p>
        Bir üretim şirketinin muhasebe departmanında usulsüzlük fark
        edildiğinde İK ekibi önce kendi içinde delilleri toplar, sonra üst
        yönetime raporlar, ardından hukuk görüşü ister. Her adım tek başına
        makul, hatta özenli görünür. Ama toplamda on günü bulan bu süreç,
        olayın &quot;kesinleştiği&quot; günden değil &quot;öğrenildiği&quot;
        günden işleyen 6 günlük süreyi çoktan geçirmiş olur. Olay kesin ve
        belgeli olsa bile, şirket artık tazminatsız fesih yapamaz; kıdem ve
        ihbar tazminatı ödeyerek normal fesih yoluna gitmek zorunda kalır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Süre kesinleşme anından değil, öğrenme anından işler
      </h2>
      <p>
        Bu ayrım çoğu işverenin gözünden kaçıyor. Yargıtay içtihadına göre 6
        iş günlük süre, olayı öğrenme yetkisine sahip kişinin (genelde
        işveren vekili, İK yöneticisi ya da doğrudan işveren) durumdan
        haberdar olduğu andan başlar; soruşturmanın tamamlanması, tanık
        ifadelerinin toplanması ya da üst onayının alınması bu süreyi
        durdurmaz. Kanundaki bir yıllık üst sınır ise olayın gerçekleştiği
        tarihten işler ve bu süre hiçbir şekilde uzatılamaz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Hız, tutanak kadar önemli
      </h2>
      <p>
        Fesih sürecinde tutanak tutmak, yazılı savunma almak ve gerekçeyi
        açık biçimde bildirmek elbette gerekli;{" "}
        <Link
          href="/blog/kidem-tazminati-ihbar-suresi-fesih-mevzuati-2026"
          className="text-orange-600 underline"
        >
          kıdem tazminatı, ihbar süresi ve fesih usulüne
        </Link>{" "}
        dair bu adımların hiçbiri atlanmamalı. Ama bu adımlar 6 günlük
        pencerenin içinde tamamlanmak zorunda. İK süreçlerinde ağırdan alınan
        her gün, sonunda tazminat tutarı kadar somut bir maliyete dönüşüyor.
      </p>
    </MakaleLayout>
  );
}
