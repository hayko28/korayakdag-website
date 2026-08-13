import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "is-gelistirmede-en-cok-yapilan-hata"
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
        Yıllardır satış yönetimi ve iş geliştirme alanında çalışıyorum ve
        gördüğüm en yaygın hata, çoğu kişinin tahmin ettiğinden farklı:
        yanlış müşteriyi hedeflemek ya da yanlış fiyat vermek değil. En sık
        yapılan hata,{" "}
        <strong className="text-[#071A2F]">
          iş geliştirmeyi &quot;yeni müşteri bulma&quot; ile aynı şey sanmak.
        </strong>
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İkisi aynı şey değil
      </h2>
      <p>
        Yeni müşteri bulmak, satışın işi. İş geliştirme ise çok daha geniş
        bir kavram: doğru ortaklıkları kurmak, mevcut müşteriyle ilişkiyi
        derinleştirmek, şirketin büyüme yönünü doğru okumak, hatta bazen
        &quot;hangi işi yapmayacağınıza&quot; karar vermek. Sadece yeni isim
        toplamaya odaklanan bir ekip, kısa vadede rakam büyütebilir ama uzun
        vadede sürdürülebilir bir büyüme yakalayamaz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu hata nereden geliyor?
      </h2>
      <p>
        Çoğu şirkette iş geliştirme fonksiyonu, satış hedeflerinin baskısı
        altında şekilleniyor. Ay sonu rakamı yaklaştıkça, herkes &quot;yeni
        fırsat&quot; peşinde koşuyor, mevcut ilişkileri derinleştirmek veya
        stratejik ortaklıklar kurmak gibi daha yavaş ama daha kalıcı işler
        ikinci plana düşüyor. Kısa vadeli baskı, uzun vadeli stratejiyi
        yiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Peki doğrusu ne?
      </h2>
      <p>
        Benim gördüğüm en sağlıklı yaklaşım, iş geliştirmeyi üç katmanlı
        düşünmek:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong className="text-[#071A2F]">Bugünü kurtaran iş</strong> —
          kısa vadeli satış ve fırsatlar.
        </li>
        <li>
          <strong className="text-[#071A2F]">Yarını inşa eden iş</strong> —
          mevcut müşteri ilişkilerini derinleştirmek, çapraz satış, referans
          ağı.
        </li>
        <li>
          <strong className="text-[#071A2F]">
            Geleceği belirleyen iş
          </strong>{" "}
          — stratejik ortaklıklar, yeni pazarlar, yeni iş modelleri.
        </li>
      </ol>
      <p>
        Çoğu şirket zamanının neredeyse tamamını birinci katmana harcıyor.
        Oysa gerçek büyüme, ikinci ve üçüncü katmana ayrılan zamandan
        geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        İş geliştirme, bir satış fonksiyonu değil, bir strateji
        fonksiyonudur. Bunu ayırt edemeyen şirketler, sürekli koşar ama bir
        türlü ilerleyemez. Benim danışmanlık sürecimde ilk yaptığım
        şeylerden biri, tam olarak bu üç katmanı birlikte netleştirmek
        oluyor.
      </p>
    </MakaleLayout>
  );
}
