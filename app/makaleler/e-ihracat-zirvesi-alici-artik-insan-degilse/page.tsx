import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "e-ihracat-zirvesi-alici-artik-insan-degilse"
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
        3-5 Eylül tarihlerinde İstanbul&apos;da düzenlenen Küresel
        E-İhracat Zirvesi (IGEXX), Ticaret Bakanlığı himayesinde ve
        Türkiye İhracatçılar Meclisi organizasyonunda gerçekleşiyor.
        50&apos;den fazla küresel pazaryeri, yüzlerce Türk üretici ve
        markayı bir araya getiren zirvede geçen yıl 1 milyar doların
        üzerinde işlem hacmi oluştu; bu yıl da benzer bir rakam
        bekleniyor. Ama gündem listesine bakınca asıl dikkat çeken
        rakam değil, başlıklardan biri: &quot;yapay zeka ajanlarının
        ticaretteki rolü ve otonom alışveriş.&quot;
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Yanlış soru: &quot;Hangi pazaryerine girelim?&quot;
      </h2>
      <p>
        Danışmanlık sürecinde e-ihracata yeni başlayan işletmelerin
        neredeyse tamamı aynı soruyla geliyor: hangi pazaryerine kayıt
        olmalı, hangi ülkeye öncelik vermeli. Bu soru hâlâ önemli, ama
        artık tek başına yeterli değil. Büyük pazaryerlerinin bir
        kısmında ürünü artık bir insan değil, kullanıcı adına arama
        yapıp karşılaştırma yaparak karar veren bir alışveriş ajanı
        inceliyor — fiyatı, teslimat süresini, iade koşullarını,
        stok bilgisini okuyup satın alma kararını o veriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ajan ikna olur mu?
      </h2>
      <p>
        Bir insan alıcı ürün fotoğrafına, markanın hikayesine, sayfanın
        tasarımına bakıp karar verebilir. Bir yazılım ajanı bunların
        çoğunu okumaz; yapılandırılmış veriye bakar — ürün başlığı ne
        kadar net, stok ve teslimat bilgisi ne kadar güncel, iade
        politikası ne kadar açık yazılmış. Bugüne kadar &quot;müşteri
        deneyimi&quot; başlığı altında düşünülen bu detaylar, artık aynı
        zamanda bir &quot;makine deneyimi&quot; sorusu haline geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Zirveye katılmak yetmiyor
      </h2>
      <p>
        IGEXX gibi bir zirveye katılıp yeni bir pazaryeri listesiyle
        dönmek elbette değerli. Ama asıl fark, döndükten sonra ortaya
        çıkıyor: ürün sayfası ve veri altyapısı, hem bir insanı hem bir
        alışveriş ajanını ikna edecek şekilde mi kurulu? Bu sorunun
        cevabı hazır değilse, zirvede toplanan kartvizit sayısı kadar
        bile fayda sağlamayabilir.
      </p>
    </MakaleLayout>
  );
}
