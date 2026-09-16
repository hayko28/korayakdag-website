import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "satin-almada-devralinan-eski-iscilik-borclari"
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
        Bir şirketi satın alan taraf, genelde binaları, makineleri ve
        müşteri portföyünü devraldığını düşünür. Oysa çoğu zaman fark
        edilmeden devralınan bir şey daha vardır: geçmişin işçilik
        faturası.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Devir tamamlandıktan üç ay sonra gelen dava
      </h2>
      <p>
        Orta ölçekli bir lojistik firması, geçtiğimiz aylarda bir depolama
        şirketini satın aldı. Anlaşma imzalanırken mali tablolar, kira
        sözleşmeleri ve müşteri portföyü uzun uzun incelendi. Devir
        tamamlandıktan üç ay sonra, depolama şirketinin eski bir çalışanı
        ödenmemiş fazla mesai ve kıdem tazminatı için dava açtı. Asıl
        sürpriz davanın kendisi değildi; dava dilekçesinin hem eski hem
        yeni sahibine birlikte yöneltilmiş olmasıydı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        TTK m.178 ne diyor?
      </h2>
      <p>
        Türk Ticaret Kanunu&apos;nun 178. maddesi, bir işletmenin
        devrinde işçinin devirden önce doğmuş alacaklarından (kıdem,
        ihbar, fazla mesai, kullanılmamış izin gibi) devralanı da
        devreden ile birlikte müteselsilen sorumlu tutar. Üstelik
        devreden işveren de kendi döneminde doğan bu borçlardan belirli
        bir süre sorumlu kalmaya devam eder. Yani &quot;o borç eski
        sahibin dönemine ait, bizi ilgilendirmez&quot; savunması, kanun
        karşısında geçerli bir savunma değildir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bilanço yetmiyor, personel dosyası da okunmalı
      </h2>
      <p>
        Satın alma sürecinde en çok mesai, kâr gerçek mi, nakit akışı
        sağlıklı mı sorularına harcanır. Personel listesi, bordro geçmişi
        ve SGK hizmet dökümü ise çoğu zaman ikinci planda kalır. Oysa bu
        belgeler, işlem kapandıktan sonra ortaya çıkabilecek işçilik
        yükünün ilk göstergesidir.{" "}
        <Link
          href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
          className="text-orange-600 underline"
        >
          Durum tespiti (due diligence)
        </Link>{" "}
        sürecinin hukuki ve operasyonel ayağı, tam olarak bu tür yükleri
        işlem kapanmadan gün yüzüne çıkarmak için vardır.
      </p>

      <p>
        Bir satın alma teklifi hazırlarken sorulması gereken soru basit:
        devraldığınız şirketin personel dosyaları, mali tabloları kadar
        dikkatli okundu mu?
      </p>
    </MakaleLayout>
  );
}
