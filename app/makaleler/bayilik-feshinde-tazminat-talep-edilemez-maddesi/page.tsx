import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "bayilik-feshinde-tazminat-talep-edilemez-maddesi"
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
        Bir üretici, yedi yıl boyunca aynı bölgede münhasır çalıştığı
        bayisiyle yollarını ayırmaya karar verdi. Gerekçe haklıydı: bayi
        son iki yıldır hedeflerin altında kalıyordu. Sözleşmede de açık
        bir madde vardı: &quot;fesih halinde bayi hiçbir tazminat talep
        edemez.&quot; Üretici bu maddeye güvenerek ilişkiyi sonlandırdı
        ve dosyayı kapattı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kapanan dosya üç ay sonra yeniden açıldı
      </h2>
      <p>
        Bayi, yedi yıl boyunca bölgede sıfırdan kurduğu müşteri
        çevresinin, fesihten sonra da üreticinin doğrudan satışıyla
        değerlendirildiğini öne sürerek dava açtı. Üreticinin elindeki
        &quot;tazminat talep edilemez&quot; maddesi, davayı tek başına
        bitirmeye yetmedi; çünkü talep edilen şey cezai şart değil,
        Türk Ticaret Kanunu&apos;nun acenteye tanıdığı denkleştirme
        hakkının, Yargıtay içtihadıyla münhasır bayilik ilişkilerine de
        kıyasen uygulanabilmesiydi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşmedeki cümle neden yeterli görülmedi
      </h2>
      <p>
        Denkleştirme, kanunun emredici saydığı bir koruma olarak
        değerlendiriliyor; taraflardan birinin tek cümleyle bu haktan
        vazgeçmesi, mahkeme önünde otomatik olarak geçerli
        sayılmıyor. Asıl incelenen, bayinin gerçekten yeni bir müşteri
        portföyü kazandırıp kazandırmadığı ve üreticinin bu
        portföyden fesih sonrasında da fayda görüp görmediği. Kanun
        bu hakkı sınırsız da bırakmıyor: tazminat, bayinin son beş
        yıllık ortalama kazancını aşamıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Fesih kararı, sözleşmenin ilk satırında başlar
      </h2>
      <p>
        Bir{" "}
        <Link
          href="/blog/ticari-sozlesme-yonetimi-tedarikci-bayi-distributorluk-sozlesmeleri"
          className="text-orange-600 underline"
        >
          bayilik veya distribütörlük sözleşmesi
        </Link>{" "}
        imzalanırken bu riskin görülmesi, fesih anında görülmesinden
        çok daha ucuza geliyor. Münhasırlığın karşılığı, hedefin
        gerçekçiliği ve fesih sonrası hangi tarafın müşteri
        portföyünden yararlanacağı, ilişki iyi giderken netleştirilen
        bir madde; ilişki bittiğinde ise artık bir dava konusu.
      </p>
    </MakaleLayout>
  );
}
