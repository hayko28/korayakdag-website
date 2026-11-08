import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-finansmaninda-iki-yilda-5-kat-artis"
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
        Devlet desteklerinde bütçe her yıl katlanarak büyüyor, ama bu
        büyüme KOBİ&apos;lerin başvuru sürecini kolaylaştırmıyor. Tam
        tersine, her yıl bir öncekinden daha kalabalık bir masada
        değerlendirilmeyi gerektiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki yılda beş kat büyüyen bir bütçe
      </h2>
      <p>
        Sanayi ve Teknoloji Bakanı Mehmet Fatih Kacır, 3 Kasım 2026&apos;da
        TBMM Plan ve Bütçe Komisyonu&apos;ndaki bakanlık bütçesi
        görüşmelerinde KOSGEB üzerinden KOBİ&apos;lere sağlanan finansman
        desteğinin seyrini açıkladı: 2024&apos;te 13,7 milyar TL,
        2025&apos;te 34,7 milyar TL, 2026&apos;da ise 69,3 milyar TL.
        İki yıl içinde beş katına çıkan bir rakam. Son bir yılda
        desteklenen KOBİ sayısı 52.047&apos;ye ulaşırken, girişimcilik
        desteği de 6.339 işletmeye 1,67 milyar TL olarak dağıtıldı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Büyüyen pastanın görünmeyen tarafı
      </h2>
      <p>
        Bu tür açıklamalar genelde tek bir okumayla tüketiliyor:
        &quot;destekler büyüyor, demek ki fırsat büyüyor&quot;. Ama bütçe
        büyürken başvuran şirket sayısı da aynı hızda büyüyor; KOSGEB&apos;in
        her yıl açıkladığı destek kalemi, bir önceki yıla göre daha fazla
        dosyanın aynı değerlendirme kriterlerinden geçmesi anlamına geliyor.
        Büyüyen bütçe, otomatik olarak büyüyen bir onay oranı
        getirmiyor; getirdiği şey, daha geniş ve daha rekabetçi bir
        başvuru havuzu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Belirleyici olan artık bütçe değil, dosya
      </h2>
      <p>
        Finansman tutarı beş katına çıkarken bir KOBİ&apos;nin kendi
        başvuru dosyasının kalitesi aynı hızda artmıyor; aksine çoğu
        işletme hâlâ aynı yüzeysel gerekçelendirmeyle, aynı eksik
        finansal projeksiyonla başvuruyor. Havuz büyüdükçe bu fark daha
        görünür hale geliyor. Asıl soru artık &quot;destek büyüdü mü&quot;
        değil, büyüyen havuzda bir dosyanın diğer binlerce başvurudan
        hangi detayla ayrıştığı.
      </p>
    </MakaleLayout>
  );
}
