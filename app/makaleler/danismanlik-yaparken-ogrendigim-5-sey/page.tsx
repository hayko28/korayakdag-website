import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "danismanlik-yaparken-ogrendigim-5-sey"
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
        Satış yönetimi ve iş geliştirme tarafında geçirdiğim yıllar, bana
        danışmanlığın aslında &quot;bilgiyi aktarmak&quot; değil, &quot;doğru
        soruyu sormak&quot; olduğunu öğretti. Zamanla fark ettiğim, çoğu zaman
        şirket içinde kimsenin söylemediği ama herkesin bildiği beş şeyi
        burada paylaşmak istiyorum.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        1. Müşteri çoğu zaman asıl ihtiyacını bilmiyor
      </h2>
      <p>
        Bir görüşmeye &quot;yatırım teşviki almak istiyoruz&quot; diye
        başlayan bir firma, konuştukça aslında ihtiyacının nakit akışı
        yönetimi veya ihracat stratejisi olduğunu fark edebiliyor.
        Danışmanın işi, ilk söylenen talebi olduğu gibi kabul etmek değil,
        altında yatan gerçek ihtiyacı birlikte ortaya çıkarmak.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        2. En pahalı hata, yanlış zamanda doğru işi yapmak
      </h2>
      <p>
        Doğru bir stratejiyi yanlış zamanda uygulamak, yanlış bir stratejiyi
        doğru zamanda uygulamaktan daha maliyetli olabiliyor. Bir yatırım
        teşviki başvurusunu üretim başladıktan sonra yapmak, en klasik
        örneklerden biri — halbuki zamanlama, süreç kadar önemli.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        3. Güven, sonuçtan önce gelir
      </h2>
      <p>
        İlk görüşmede satış yapmaya çalışmak yerine, gerçekten faydalı olup
        olamayacağınızı açıkça söylemek çok daha değerli. Bazı işletmelere
        &quot;şu an size uygun bir program yok&quot; demek, uzun vadede en
        çok güven kazandıran cümle oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        4. Süreç kadar iletişim de önemli
      </h2>
      <p>
        Bir başvuru veya proje sürecinde en çok şikayet edilen şey, sonucun
        kötü olması değil, sürecin ne durumda olduğunun bilinmemesi. Düzenli,
        kısa bir bilgilendirme, uzun bir sessizlikten çok daha değerli.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        5. Her şirket, kendi hikayesiyle farklı
      </h2>
      <p>
        Aynı sektörde, aynı büyüklükte iki şirket bile birbirinden çok
        farklı ihtiyaçlar taşıyabiliyor. Hazır şablon çözümler yerine, her
        seferinde şirketin kendi durumuna bakarak başlamak — yavaş görünse
        de, doğru sonucu veren yol.
      </p>

      <p>
        Bu beş ders, bana kitaplardan değil, doğrudan masanın karşısındaki
        insanlardan geldi. Danışmanlığı bu yüzden seviyorum — her görüşme,
        aynı zamanda bir şey daha öğrendiğim an oluyor.
      </p>

      <p>
        Bu konuda benzer bir yolculuktan geçmiş, satışı bir deneyime
        dönüştürmenin ne demek olduğunu bana da öğreten değerli üstadım
        Ercan Yeşersin&apos;in{" "}
        <a
          href="https://ercanyesersin.com.tr/17-yillik-satis-kariyerim-bana-ne-ogretti/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-orange-600 hover:underline"
        >
          17 yıllık satış kariyerinden çıkardığı derslere
        </a>{" "}
        de göz atmanızı öneririm.
      </p>
    </MakaleLayout>
  );
}
