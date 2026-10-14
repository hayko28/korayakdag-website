import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tubitak-1501-altinci-proje-destek-orani"
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
        TÜBİTAK&apos;a yıllardır düzenli Ar-Ge projesi sunan bir makine
        imalatçısının finans ekibi, yeni bir projenin bütçesini hazırlarken
        her zamanki gibi %75 destek oranını baz alıyor. Teklif TÜBİTAK&apos;a
        gittiğinde sözleşme aşamasında oranın %60 çıktığını görüyorlar ve
        aradaki farkı nereden karşılayacaklarını tartışmaya başlıyorlar.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İlk 5 proje ile 6. proje arasındaki fark
      </h2>
      <p>
        1501 - Sanayi Ar-Ge Projeleri Destekleme Programı&apos;nda destek
        oranı, firmanın desteklenen proje sayısına göre kademeleniyor. 1
        Ocak 2020&apos;den sonra sözleşmesi imzalanan ilk 5 proje %75
        oranla, proje başına en fazla 20 milyon TL hibeyle destekleniyor.
        6. ve sonraki her proje ise aynı 20 milyon TL tavana rağmen %60
        oranına düşüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Eşiği fark etmemenin maliyeti
      </h2>
      <p>
        Art arda birçok yıl TÜBİTAK desteği alan şirketler için bu eşik
        genelde bütçe planlamasına girmiyor, çünkü oran değişikliği başvuru
        formunda otomatik görünmüyor, ancak sözleşme aşamasında ortaya
        çıkıyor. 10 milyon TL bütçeli bir projede %75 ile %60 arasındaki
        fark 1,5 milyon TL&apos;yi buluyor; bu tutarın şirketin kendi
        kaynağından karşılanması gerekiyor.
      </p>

      <p>
        2026 yılının 2. çağrısında son başvuru tarihi 26 Ekim. Başvuru
        hazırlığına girmeden önce sorulması gereken soru belki de projenin
        teknik içeriği kadar, firmanın kaç proje için zaten destek almış
        olduğu.
      </p>
    </MakaleLayout>
  );
}
