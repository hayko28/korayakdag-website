import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sunum-hazirlayalim-karari-ertelemenin-kibar-yolu"
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
        Orta ölçekli bir şirkette geçen ay tanıdık bir sahne yaşandı.
        Pazarlama ekibi yeni bir kampanya için bütçe talep etti, patronun
        cevabı da alışılmış olandı: &quot;Buna bir sunum hazırlayalım.&quot;
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bir haftalık emek, altı slaytta bitti
      </h2>
      <p>
        Üç kişi bir hafta boyunca 34 slaytlık bir sunum hazırladı. Grafikler,
        karşılaştırma tabloları, bir de &quot;yönetici özeti&quot; slaytı
        vardı. Toplantı günü geldi, patron altıncı slayttan sonra durdu ve
        tek bir soru sordu: &quot;Bu bütçeyle kaç müşteri kazanacağız?&quot;
        Cevap üç cümleyle verildi, karar da orada, o üç cümlenin üzerine
        alındı.
      </p>
      <p>
        Aslında sorunun cevabı en baştan üç cümlede duruyordu. Aradaki bir
        haftalık sunum hazırlığı, kararı geciktirmekten başka bir işe
        yaramadı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sunum bazen bilgi değil, zaman satın alır
      </h2>
      <p>
        Birçok şirkette &quot;bir sunum hazırlayalım&quot; cümlesi aslında
        &quot;şimdi karar vermek istemiyorum&quot; cümlesinin nazik hali
        oluyor. Belirsizlik yüksekse, sorumluluk paylaşılmak isteniyorsa ya
        da karar verecek kişi henüz ikna olmamışsa, bir sunum hazırlatmak
        kararı ertelemenin en zararsız görünen yolu haline geliyor.
      </p>
      <p>
        Bunun bedelini genelde en alttaki ekip ödüyor: gerçekte ihtiyaç
        duyulmayan bir slayt seti için harcanan günler, aynı sürede
        atılabilecek başka adımlardan çalınmış oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir sonraki &quot;buna bir sunum hazırlayalım&quot; talebinde
        sorulması gereken soru belki de şu: burada gerçekten eksik olan bir
        bilgi mi var, yoksa bu, kararı ertelemenin sadece daha kibar bir yolu
        mu?
      </p>
    </MakaleLayout>
  );
}
