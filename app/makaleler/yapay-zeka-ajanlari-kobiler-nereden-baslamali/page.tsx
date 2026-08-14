import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yapay-zeka-ajanlari-kobiler-nereden-baslamali"
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
        Teknoloji dünyasının önde gelen araştırma ve danışmanlık şirketi
        Gartner, 25 Haziran 2025 tarihli bir açıklamasında çarpıcı bir tahmin
        paylaştı: 2027 sonuna kadar, şirketlerin başlattığı yapay zeka ajanı
        (agentic AI) projelerinin %40&apos;ından fazlası iptal edilecek.
        Sebep, artan maliyetler, net olmayan iş değeri ve yetersiz risk
        kontrolü.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar ne diyor?
      </h2>
      <p>
        Gartner&apos;ın Ocak 2025&apos;te 3.412 katılımcıyla yaptığı bir
        ankete göre şirketlerin sadece %19&apos;u bu alana ciddi yatırım
        yapmış durumda, %42&apos;si temkinli ilerliyor, %31&apos;i ise hâlâ
        bekle-gör aşamasında. Yani küresel ölçekte bile çoğu şirket ne
        yapacağına henüz karar verememiş.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        KOBİ&apos;ler için asıl mesele
      </h2>
      <p>
        Bu tabloda başarısız olan projelerin ortak özelliği teknolojinin
        yetersizliği değil. Ortak özellik, &quot;herkes yapıyor&quot; diye
        başlayıp net bir iş problemi tanımlamadan işe girmek. Bütçe büyüyor,
        sonuç belirsiz kalıyor, bir yıl sonra proje sessizce kapanıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Nereden başlamalısınız?
      </h2>
      <p>
        &quot;Yapay zeka ajanı kuralım&quot; diye başlamayın. Önce
        işletmenizde haftada en az birkaç saat manuel işe giden tek bir
        süreci bulun — fatura eşleştirme, teklif takibi, stok kontrolü, fark
        etmez. Sadece o süreci otomatikleştirin, sonucu ölçün, ancak ondan
        sonra genişletin.
      </p>
      <p>
        Büyük ve belirsiz bir &quot;dönüşüm projesi&quot;yle başlamayın;
        küçük ve ölçülebilir tek bir darboğazla başlayın. Bu hem daha hızlı
        sonuç verir hem de sizi Gartner&apos;ın öngördüğü o %40&apos;lık
        iptal grubunun dışında tutar.
      </p>

      <p>
        2026&apos;da yapay zeka kullanmak artık avantaj değil, temel bir
        yetkinlik. Ama kazananla kaybedeni ayıran şey, hangi süreci
        seçtiğiniz.
      </p>
    </MakaleLayout>
  );
}
