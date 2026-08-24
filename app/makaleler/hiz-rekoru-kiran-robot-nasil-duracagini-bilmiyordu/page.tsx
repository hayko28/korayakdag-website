import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "hiz-rekoru-kiran-robot-nasil-duracagini-bilmiyordu"
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
        Pekin&apos;de düzenlenen Dünya İnsansı Robot Oyunları&apos;nda
        Tiangong Ultra adlı robot, 100 metreyi 9,39 saniyede tamamlayarak
        Usain Bolt&apos;un 9,58 saniyelik dünya rekorunu kırdı. Görüntülerde
        asıl dikkat çeken an, bitiş çizgisinden sonra yaşandı: robot
        frenleyip duramadı, hızını kesmek için önüne konan dolgulu bir
        duvara çarparak durabildi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Hız üretmek başka, kontrol etmek başka
      </h2>
      <p>
        Rekor gerçek ve etkileyici. Ama eksik olan da ortada: bir sistemi
        hızlandırmak, mühendislik açısından o hızı güvenle durdurmaktan çok
        daha kolay bir problem. Tiangong Ultra hızı üretti, ama onu kontrol
        altında tutacak bir frenleme sistemi aynı olgunlukta değildi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Büyüyen şirketler için de geçerli bir ayrım
      </h2>
      <p>
        Satışları, ekibi ya da şube sayısını hızla büyütmek dışarıdan bir
        başarı gibi görünür. Ama süreçler, raporlama ve karar mekanizmaları
        aynı hızda gelişmediyse, şirket de tıpkı bu robot gibi bir noktada
        &quot;frenleyemeden&quot; bir duvara çarpıyor — nakit sıkışıklığı,
        kalite kaybı ya da kontrolsüz bir kriz şeklinde.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Asıl soru büyüme hızı değil, o hızı taşıyacak sistemin var olup
        olmadığı. Bir şirketi değerlendirirken ne kadar hızlı koştuğuna
        değil, gerektiğinde ne kadar kontrollü durabildiğine bakmak daha
        güvenilir bir gösterge.
      </p>
    </MakaleLayout>
  );
}
