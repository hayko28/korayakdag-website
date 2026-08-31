import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "roman-uzay-teleskobu-derinlik-mi-genislik-mi-buyume-dersi"
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
        30 Ağustos 2026 sabahı NASA&apos;nın Nancy Grace Roman Uzay
        Teleskobu, Florida&apos;dan bir Falcon Heavy roketiyle fırlatıldı.
        Teleskop gökyüzünü Hubble&apos;a kıyasla en az 100 kat daha geniş bir
        alanda ve 1000 kat daha hızlı tarayacak — üstelik Hubble&apos;ın
        netliğinden ödün vermeden. On yılı aşkın süren bir mühendislik
        çabasının sonucu bu rakamlar.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Adını taşıdığı isim, tam tersini savunmuştu
      </h2>
      <p>
        Teleskobun adı boşuna seçilmedi. Nancy Grace Roman, NASA&apos;nın ilk
        baş astronomuydu ve 1960&apos;lardan itibaren, bütçe kesintilerine
        rağmen Hubble Uzay Teleskobu projesini yıllarca savundu; meslektaşları
        arasında &quot;Hubble&apos;ın Annesi&quot; olarak anılırdı. Hubble
        1990&apos;da fırlatıldığında görüş alanı dardı ama derinliği
        benzersizdi — gökyüzünün küçücük bir noktasına saatlerce odaklanıp
        inanılmaz ayrıntı çıkarabiliyordu. Roman, kendi adını taşıyan bu yeni
        teleskobun fırlatılışını görecek kadar yaşamadı; 2018&apos;de hayatını
        kaybetti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Derinlik mi, genişlik mi — yanlış soru olabilir
      </h2>
      <p>
        Şirketlerde de benzer bir ikilem sürekli tekrar eder: niş bir müşteri
        kitlesinde derinleşip uzmanlaşmak mı, yoksa pazarı geniş taramak mı
        doğru? Danışmanlık sürecinde çoğu işletme sahibi bu iki seçenek
        arasında bir yerde sıkışıp kalıyor, mevcut ürünü veya ekibi zorlayarak
        her ikisini birden yapmaya çalışıyor — ve genelde ikisinde de
        ortalama bir sonuç alıyor.
      </p>
      <p>
        Roman Teleskobu&apos;nun asıl dersi burada. Hubble&apos;ı daha hızlı
        çalıştırarak ya da teleskobu döndürerek geniş alan taraması elde
        edilemezdi; bunun için baştan farklı tasarlanmış, farklı bir
        optik ve algılayıcı sistemine ihtiyaç vardı. Aynı şekilde bir şirket
        de mevcut satış ekibini, ürününü ya da süreçlerini daha sert
        çalıştırarak ölçek kazanamaz; ölçeklenmeyi hedefliyorsa bunun için
        kurulmuş ayrı bir sistem — farklı bir kanal, farklı bir organizasyon
        yapısı, farklı bir fiyatlama modeli — kurması gerekir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Derinlik ve genişlik, aynı aracı zorlayarak elde edilecek iki uç değil,
        genelde iki farklı sistemin sonucudur. Roman Teleskobu&apos;nun
        gösterdiği gibi, bazen büyümenin sırrı daha çok çalışmak değil, doğru
        aracı en baştan doğru amaç için inşa etmektir.
      </p>
    </MakaleLayout>
  );
}
