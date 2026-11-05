import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ucuncu-donem-gecici-vergi-yil-sonu-fotografi"
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
        Bir üretim şirketinin ortakları, her yıl aynı toplantıyı yapıyor:
        dördüncü çeyrek bütçesi kurulurken &quot;bu yılı ne kadar kazançla
        kapatacağız?&quot; sorusu masaya geliyor. Cevap genelde kesin
        olarak Mart ayında geliyor, bilanço kapanıp kurumlar vergisi
        beyannamesi verildiğinde. Oysa elde, dokuz aylık gerçek veri çok
        daha önceden hazır oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        17 Kasım, fark edilmeyen bir ara rapor
      </h2>
      <p>
        2026&apos;nın üçüncü dönem kurum geçici vergisinin beyan ve ödeme
        tarihi 17 Kasım. Bu beyannameye giren rakamlar tahmin değil;
        Ocak-Eylül arasının fiilen gerçekleşmiş cirosu, maliyeti ve kârı.
        Pek çok işletmede bu evrak, muhasebe bürosundan gelen bir ödeme
        talimatına indirgeniyor: tutar imzalanıyor, havale yapılıyor,
        gündeme geri dönülüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamın içinde üç cevap saklı
      </h2>
      <p>
        O beyannamenin arkasında, dördüncü çeyrek kararları için gereken
        üç soru bekliyor: yıl sonu kurumlar vergisi yükü hangi aralıkta
        oluşacak, bu yüke göre kasım-aralık nakit planı nasıl kurulmalı
        ve dokuz aylık performansa göre fazla ödenen bir geçici vergi
        varsa bu tutar gelecek döneme mi taşınacak yoksa iade mi
        istenecek. Bu sorulara Mart ayında değil, kasımda cevap aranması
        gerekiyor; çünkü o noktada hâlâ altı haftalık bir aksiyon alma
        süresi var.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bütçe toplantısı, beyannameden önce değil sonra kurulmalı
      </h2>
      <p>
        Ekim-kasım döneminde dördüncü çeyrek bütçe ve nakit akışı
        planlaması yapan, bu süreci bir{" "}
        <Link
          href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
          className="text-orange-600 underline"
        >
          vergi danışmanlığı
        </Link>{" "}
        sürecine bağlamayan şirketlerin çoğu, elindeki en güncel finansal fotoğrafı
        görmeden karar alıyor. Üçüncü dönem geçici vergi beyannamesi,
        gerçekte yıl sonu bilançosunun ilk taslağı. Soru hâlâ aynı
        yerde duruyor: şirketinizin bu yılı nasıl kapatacağını siz mi
        biliyorsunuz, yoksa bunu Mart ayında muhasebeciniz mi size
        söyleyecek?
      </p>
    </MakaleLayout>
  );
}
