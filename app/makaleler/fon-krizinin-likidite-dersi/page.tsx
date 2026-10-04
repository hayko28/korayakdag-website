import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "fon-krizinin-likidite-dersi"
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
        Bir aile şirketinin yönetim kurulu toplantısında gündem nakit
        yönetimiydi. Şirket, mevsimsel olarak boşta kalan nakdinin bir
        kısmını bankada mevduatta, bir kısmını da daha yüksek getiri
        vadeden bir para piyasası fonunda tutuyordu. Geçen ay fon
        tarafındaki payı paraya çevirmek istediklerinde beklenmedik bir
        gecikmeyle karşılaştılar; tedarikçi ödemesi birkaç gün ötelendi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kriz tek bir şirketin başına gelmedi
      </h2>
      <p>
        Fon piyasasından 400 milyar TL&apos;yi aşan bir çıkış yaşandı, yedi
        portföy yönetim şirketinden beşinin fonu halen kapalı. Sektör
        temsilcilerinin açıklaması, sorunun getiri değil, uzun süredir göz
        ardı edilen denetim ve kontrol eksikliği olduğu yönünde. Yani
        kriz tek bir fonun kötü yönetiminden değil, sistemin bütününe
        duyulan güvenin sarsılmasından besleniyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Nakit benzeri&quot; tek bir kategori değil
      </h2>
      <p>
        Çoğu şirketin bilançosunda banka mevduatı, para piyasası fonu ve
        kısa vadeli tahvil aynı başlık altında, &quot;hazır nakit&quot;
        olarak toplanır. Oysa bu üç enstrümanın paraya dönüşme hızı ve
        koşulları birbirinden farklıdır. Normal zamanda bu fark fark
        edilmez, çünkü hiçbiri test edilmez. Fark, piyasa gerildiğinde ve
        herkes aynı anda çıkmak istediğinde ortaya çıkar.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Pratik olarak ne değişmeli
      </h2>
      <p>
        Bir şirketin kısa vadeli yükümlülükleri için ayırdığı nakdin ne
        kadarının gerçekten anlık erişilebilir olduğunu, ne kadarının
        birkaç günlük bir gecikmeyi tolere edebileceğini ayrıştırması
        gerekiyor. Getiri farkı için tüm tutarı tek bir enstrümana ya da
        tek bir kuruma yıkmak, kriz anında opsiyonu da tek bir kapıya
        indirger.
      </p>

      <p>
        Bir şirketin nakit yönetiminde asıl sorulması gereken soru getiri
        değil: bu paraya yarın ihtiyaç olsa, gerçekten ne kadar hızlı
        ulaşılır?
      </p>
    </MakaleLayout>
  );
}
