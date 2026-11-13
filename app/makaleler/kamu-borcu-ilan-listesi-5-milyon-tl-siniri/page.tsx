import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kamu-borcu-ilan-listesi-5-milyon-tl-siniri"
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
        Bir inşaat malzemeleri toptancısının mali müşaviri, geçen hafta
        müşterisine sıradan görünen ama can alıcı bir soru sordu:
        &quot;Üç ilde şubeniz var, her birinin bağlı olduğu vergi
        dairesine ayrı ayrı ne kadar borcunuz var?&quot; İşletme sahibi
        önce bu soruyu anlamsız buldu, toplam borcunu zaten biliyordu:
        5,8 milyon TL. Ama cevap gerçekten önemliydi, çünkü 10
        Kasım&apos;da yayımlanan yeni tebliğ, bir şirketin isminin
        Aralık ayında kamuya açıklanıp açıklanmayacağını toplam borca
        değil, vergi dairesi başına borca göre belirliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Toplam değil, vergi dairesi başına borç sayılıyor
      </h2>
      <p>
        213 sayılı Vergi Usul Kanunu&apos;nun 5. maddesi kapsamında
        yayımlanan 597 sıra no&apos;lu tebliğe göre, bir vergi
        dairesine 5 milyon TL ve üzerinde ödenmemiş borcu olan ya da bu
        tutarda kesinleşmiş vergi ve cezası bulunan mükellefler Aralık
        ayında ilan edilecek. Ama bu sınır her vergi dairesi için ayrı
        uygulanıyor, farklı dairelerdeki borçlar toplanmıyor. O
        toptancının borcu üç vergi dairesine 2,1, 1,9 ve 1,8 milyon TL
        olarak dağılmıştı; hiçbiri tek başına eşiği geçmediği için isim
        listeye girmiyor. Aynı toplam borç, tek bir vergi dairesinde
        birikmiş olsaydı sonuç tam tersi olurdu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        20 Kasım&apos;a kadar hâlâ bir pencere var
      </h2>
      <p>
        Tebliğ, 31 Aralık 2025 itibarıyla vadesi gelmiş ve 20 Kasım
        2026 itibarıyla hâlâ ödenmemiş olan borçları kapsıyor.
        Yapılandırma kapsamına alınmış borçlar listeye hiç girmiyor.
        Yani bir şirketin önündeki asıl soru &quot;borcumuz var mı&quot;
        değil, &quot;bu borç hangi vergi dairesinde, ne kadarı, ve
        önümüzdeki günlerde kapatılabilir mi&quot; sorusu. Liste önce
        1-15 Aralık arasında vergi dairelerinde, sonra 16-30 Aralık
        arasında Gelir İdaresi Başkanlığı&apos;nın internet sitesinde
        yayımlanacak; bir banka ya da potansiyel iş ortağı artık
        görüşme masasına oturmadan önce bu listeye bakabiliyor. Kapsam,
        istisnalar ve ilan usulünün tamamı için{" "}
        <Link
          href="/blog/vergi-borcu-aciklama-listesi-2026-kimler-kapsamda"
          className="text-orange-600 underline"
        >
          vergi borcu listesi rehberi
        </Link>{" "}
        daha ayrıntılı bir çerçeve sunuyor.
      </p>
    </MakaleLayout>
  );
}
