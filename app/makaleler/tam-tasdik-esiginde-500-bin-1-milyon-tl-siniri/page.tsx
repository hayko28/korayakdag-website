import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tam-tasdik-esiginde-500-bin-1-milyon-tl-siniri"
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
        Bir ihracatçı firmanın mali işler ekibi, yıl ortasında beyannamesini
        toparlarken küçük bir ayrıntıyı fark ediyor: Ar-Ge indirimi, yurt
        dışı iştirak kazancı istisnası ve KDV iadesi kalemlerinin her biri
        tek tek küçük görünse de toplamda bir sınırı aşmış.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        500.000 TL ve 1.000.000 TL neden önemli?
      </h2>
      <p>
        30.12.2025 tarihli 49 Sıra No&apos;lu Serbest Muhasebeci Mali
        Müşavirlik ve Yeminli Mali Müşavirlik Kanunu Genel Tebliği, 1 Ocak
        2026&apos;dan itibaren geçerli olmak üzere bir kuralı netleştirdi:
        bir şirketin beyannamesindeki tek bir istisna veya indirim kalemi
        500.000 TL&apos;yi, kalemlerin toplamı ise 1.000.000 TL&apos;yi
        aştığında, bu tutarların bir YMM tasdik raporuyla tevsik edilmesi
        zorunlu hale geliyor. İştirak kazancı istisnası, Ar-Ge ve tasarım
        indirimi, indirimli kurumlar vergisi ve benzeri kalemler bu
        kapsama giriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşme yoksa, her kalem ayrı bir rapor demek
      </h2>
      <p>
        Şirketin elinde süresinde imzalanmış (hesap döneminin ilk ayında,
        yani en geç 31 Ocak&apos;a kadar yapılmış) bir tam tasdik
        sözleşmesi varsa, bu kalemlerin tamamı tek bir yıllık sözleşme
        kapsamında kalıyor ve ayrıca rapor gerekmiyor. Böyle bir sözleşme
        yoksa, eşiği aşan her kalem için ayrı ayrı sınırlı tasdik raporu
        almak gerekiyor; bu da hem zaman hem maliyet açısından yıl
        ortasında hesapta olmayan bir yük anlamına geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl mesele, eşiği zamanında görebilmek
      </h2>
      <p>
        Sorun genelde kuralın bilinmemesinden değil, şirketin kendi
        istisna/indirim kalemlerinin toplamda nereye vardığını yıl içinde
        takip etmemesinden kaynaklanıyor.{" "}
        <Link
          href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
          className="text-orange-600 underline"
        >
          Tam tasdik ile sınırlı tasdik arasındaki fark
        </Link>{" "}
        ve hangisinin şirket için daha uygun olduğu, mevcut istisna/indirim
        profiline bakılarak yıl başında netleştirilmesi gereken bir karar.
      </p>

      <p>
        Şirketinizin bu eşiklere ne kadar yaklaştığını, tam tasdikin mi
        yoksa işlem bazlı sınırlı tasdikin mi sizin için daha uygun
        olduğunu ve sözleşme/bildirim sürelerini kaçırmadan yönetmeyi
        birlikte değerlendirebiliriz.
      </p>
    </MakaleLayout>
  );
}
