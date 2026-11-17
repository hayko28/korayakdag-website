import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kamu-ihalesinde-borc-siniri-on-kat-artti"
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
        Bir elektromekanik ekipman üreticisinin mali işler sorumlusu, bu
        hafta girmeyi planladıkları bir kamu ihalesi öncesinde rutin bir
        kontrol yaptı: vergi dairesi ve SGK&apos;daki kesinleşmiş borç
        durumu. Karşısına 2022&apos;deki bir incelemeden kalan, itiraz
        süreci çoktan tükenmiş 38.000 TL&apos;lik bir SGK prim borcu
        çıktı. Eski kuralda bu rakam tek başına şirketi ihale dışı
        bırakmaya yeterliydi; 5.000 TL&apos;lik sınırın neredeyse sekiz
        katı. Ama 15 Kasım&apos;da yürürlüğe giren yeni düzenlemeyle
        sınır 50.000 TL&apos;ye çıktığı için, aynı borç artık hiçbir
        şey değiştirmiyordu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rahatlama kısmi, risk tam ortadan kalkmıyor
      </h2>
      <p>
        Aynı şirketin başka bir vergi dairesinde, bu kez bir KDV
        incelemesinden doğan ve yine kesinleşmiş 61.000 TL&apos;lik bir
        vergi borcu daha vardı. Bu tutar yeni 50.000 TL sınırının da
        üzerinde kaldığı için, şirket hâlâ aynı ihaleden elenme
        riskiyle karşı karşıya. 16 Ekim 2026 tarihli 33402 sayılı Resmî
        Gazete&apos;deki tebliğ, Kamu İhale Genel Tebliği&apos;nin
        17.3.2 ve 17.4.1 maddelerindeki sınırı on kata çıkarırken
        kuralın mantığını değiştirmedi: sadece dava ve itiraz yolları
        tükenmiş, yani &quot;kesinleşmiş&quot; borçlar bu hesaba giriyor.
        Cari dönemde düzenli ödeme yapan ama geçmişten kalan küçük bir
        kesinleşmiş borcu olan bir şirket, hâlâ bu listede olduğunu fark
        etmeyebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Teklif tarihi değil, ihalenin ilan tarihi belirleyici
      </h2>
      <p>
        Tebliğe eklenen geçiş hükmü, bu konuda ayrı bir tuzak
        barındırıyor: 15 Kasım 2026&apos;dan önce ilanı veya yazılı
        duyurusu yapılmış bir ihalede, sonuç aralıkta veya ocakta
        açıklansa bile eski 5.000 TL&apos;lik sınır geçerliliğini
        koruyor. Bir şirketin hangi sınıra tabi olduğunu anlamak için
        bakması gereken tarih, teklifini verdiği gün değil, ihalenin
        ilk ilan edildiği gün.{" "}
        <Link
          href="/blog/kamu-ihalelerinde-vergi-sgk-borcu-siniri-50000-tl-oldu-2026"
          className="text-orange-600 underline"
        >
          Değişikliğin kapsamı ve geçiş hükmüyle ilgili rehber
        </Link>{" "}
        bu ayrımı daha ayrıntılı ele alıyor.
      </p>
    </MakaleLayout>
  );
}
