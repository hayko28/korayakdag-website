import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "satin-almada-sozlesmedeki-gizli-madde-kontrol-degisikligi"
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
        Bir şirket satın alma anlaşmasında en tehlikeli cümle, genelde
        sözleşmenin gövdesinde değil, ekindeki bir maddede saklanır. Adı:
        kontrol değişikliği (change of control) maddesi. Basit anlamı şu —
        şirketin ortaklık yapısı değiştiği anda, karşı taraf (en büyük
        müşteri, en kritik tedarikçi, kiraya veren) o sözleşmeyi tek taraflı
        feshedebilir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık pratiğinde sık görülen sahne
      </h2>
      <p>
        Alıcı taraf, hedef şirketin cirosunun büyük kısmının tek bir
        müşteriden geldiğini biliyor ve teklif ettiği fiyatı da buna göre
        veriyor. Ama o müşteriyle yapılan sözleşmenin ek maddelerini kimse
        satır satır okumamış oluyor. Devir tamamlanır tamamlanmaz müşteri,
        sözleşmedeki bu hakkı kullanıp ilişkiyi sonlandırabiliyor — satın
        alınan cironun büyük kısmı, kapanış imzasından bir gün sonra bir
        gecede buharlaşabiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İnceleme her zaman doğru yere odaklanmıyor
      </h2>
      <p>
        Bilanço, satın alma sürecinde en çok mesai harcanan kalemdir; kâr
        gerçek mi, nakit akışı sağlıklı mı, sorulur da sorulur. Sözleşmelerin
        ek maddeleri ise çoğu zaman &quot;standart metin&quot; muamelesi
        görüp son sıraya bırakılır. Oysa fiyatı asıl belirleyen —
        şirketin gelecekteki geliri — genelde bilançoda değil, o ek maddede
        saklıdır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İşlemi kapatmadan önce sorulacak basit soru
      </h2>
      <p>
        Bir satın alma veya birleşme sürecinde{" "}
        <Link
          href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
          className="text-orange-600 underline"
        >
          durum tespiti (due diligence)
        </Link>{" "}
        yalnızca rakamları doğrulamak için yapılmaz; hukuki inceleme, sözleşmelerin
        ek maddelerini de tarayarak bu tür sürprizleri işlem kapanmadan önce
        gün yüzüne çıkarır. İşlemi imzalamadan önce sorulması gereken soru
        aslında basit: en değerli müşteriniz veya tedarikçiniz, siz el
        değiştirdiğinizde gitme hakkına sahip mi?
      </p>
    </MakaleLayout>
  );
}
