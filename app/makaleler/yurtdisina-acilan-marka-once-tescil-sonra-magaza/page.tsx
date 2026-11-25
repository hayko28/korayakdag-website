import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yurtdisina-acilan-marka-once-tescil-sonra-magaza"
)!;

export const metadata: Metadata = {
  title: `${meta.title} | Koray Akdağ`,
  description: meta.excerpt,
  alternates: { canonical: `/makaleler/${meta.slug}` },
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
        Bir döner zincirinin Çin&apos;de iki yeni restoran açması,
        normal şartlarda bir yemek sektörü haberi olarak kalırdı.
        TAB Gıda&apos;nın Usta Dönerci markasıyla attığı bu adım
        farklı bir nedenle dikkat çekti: şirketin Kamuyu Aydınlatma
        Platformu&apos;na 3 Temmuz 2026&apos;da yaptığı açıklamada
        öne çıkan ayrıntı mağaza sayısı değil, markanın
        kopyalanmasına karşı önceden alınan hukuki tedbirlerdi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        250 mağazalık hedeften önce bitmesi gereken iş
      </h2>
      <p>
        2013&apos;te kurulan ve Türkiye&apos;de 200&apos;ün üzerinde
        şubesi bulunan marka, Çin&apos;e girerken bir franchise
        sözleşmesi imzaladı; ilk etapta 100, 2027 sonuna kadar ise
        250 mağazaya ulaşmayı hedefliyor. Ama bu büyüme planının
        önüne geçen bir adım vardı: marka hakkının hedef pazarda,
        ilk tabela asılmadan önce güvence altına alınması. Şirketin
        açıklamasında kopyalanma riskine karşı atıldığı belirtilen
        hukuki adımlar, büyüme hedefinin bir ön koşulu olarak
        okunabilir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Koruma bir ülkeden diğerine otomatik geçmiyor
      </h2>
      <p>
        Marka hukukunda ülkesellik ilkesi geçerli: Türkiye&apos;de
        tescilli bir isim, Çin&apos;de, Almanya&apos;da ya da
        Dubai&apos;de kendiliğinden korunmuyor. Çoğu ülkede tescil
        &quot;ilk başvuran kazanır&quot; mantığıyla işliyor; yani bir
        şirketin kendi markasını yurt dışında kaybetmesi için kötü
        niyetli bir rakibe bile gerek yok, sadece bir gün erken
        davranan üçüncü bir taraf yetiyor. Böyle bir durumda orijinal
        marka sahibi, kendi ismini kullanabilmek için ya yeniden
        markalaşmak ya da o ismi yüksek bir bedelle geri satın almak
        zorunda kalabiliyor.
      </p>

      <p>
        Küçük ve orta ölçekli bir şirket yurt dışı pazara girme
        kararını genelde tedarikçi, fiyatlandırma ve lojistik
        üzerine haftalarca süren toplantılarla şekillendiriyor.
        Tescil başvurusu bu listenin çoğu zaman en altında, bazen
        hiç yer almayan bir kalem. Oysa bir mağazanın menüsü bir
        günde değiştirilebilir; yurt dışında kaybedilmiş bir marka
        hakkı, yıllar süren bir hukuki sürecin konusu olabilir.
      </p>
    </MakaleLayout>
  );
}
