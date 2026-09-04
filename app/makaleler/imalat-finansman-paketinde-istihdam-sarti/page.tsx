import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "imalat-finansman-paketinde-istihdam-sarti"
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
        1 Eylül itibarıyla başvuruları açılan İmalat Sanayi Finansman
        Desteği, rakamıyla dikkat çekiyor: 250 milyar TL&apos;lik bir havuz,
        6 aya kadar ödemesiz, 36 aya kadar vadeli kredi imkânı ve kredi
        maliyetinde 12 puanlık bir destek. Sabit maliyetli kredilerde yıllık
        finansman oranının yaklaşık yüzde 37&apos;den yüzde 25&apos;e
        inmesi bekleniyor. İlk bakışta klasik bir ucuz kredi kampanyası gibi
        görünüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Karşılıksız değil, koşullu
      </h2>
      <p>
        Ama duyurunun küçük puntolarında asıl mesele saklı: 12 puanlık
        destekten yararlanmanın koşulu, işletmenin 2026&apos;nın
        Ocak-Haziran döneminde tuttuğu ortalama istihdam seviyesini,
        Temmuz-Aralık döneminde de korumuş olması. Yani bu kredi, sadece bir
        finansman aracı değil; aynı zamanda altı aylık bir işgücü taahhüdü.
        Krediyi kullanan işletme, faiz avantajını elde tutabilmek için o
        dönem boyunca kadrosunu küçültmeme kararı almış oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Herkes için aynı anlama gelmiyor
      </h2>
      <p>
        Danışmanlık pratiğinde bu tür koşullu desteklere üç farklı profilde
        işletme başvuruyor. Zaten büyüme ve istihdam artışı planlayan bir
        işletme için taahhüt fazladan bir yük değil, doğal bir sonuç.
        Kadrosu istikrarlı seyreden bir işletme için puan, neredeyse
        bedavaya alınmış bir sigorta gibi işliyor. Ama son çeyrekte talep
        daralması ya da maliyet baskısı nedeniyle küçülmeyi masaya yatıran
        bir işletme için aynı kredi, tam ihtiyaç duyulduğu anda elini
        bağlayan bir sözleşmeye dönüşebiliyor — düşük faizin cazibesine
        kapılıp altı ay sonra hem istihdam esnekliğini hem de destek
        avantajını birden kaybetme riski var.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İmzadan önce sorulacak soru
      </h2>
      <p>
        Bu paketten yararlanmak isteyen bir işletmenin bankaya gitmeden
        önce cevaplaması gereken soru &quot;faiz kaça iniyor&quot; değil:
        önümüzdeki altı ay için istihdam seviyesini koruyacağına dair
        gerçekçi bir öngörüsü var mı? Kredi tutarı, vade ve kefalet
        koşulları kadar bu taahhüdün işletmenin nakit akışı ve sipariş
        görünürlüğüyle uyumlu olup olmadığını değerlendirmek, başvuru
        öncesi atlanmaması gereken bir adım.
      </p>
    </MakaleLayout>
  );
}
