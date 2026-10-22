import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "kosgeb-yonetmeligi-kaldirildi-haberi-ne-anlama-geliyor"
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
        16 Ekim 2026&apos;da Resmî Gazete&apos;de üç maddelik kısa bir
        düzenleme yayımlandı: KOSGEB Destekleyiciler Yönetmeliği yürürlükten
        kaldırıldı. Haber birkaç saat içinde &quot;KOSGEB&apos;de 23 yıllık
        yönetmelik kaldırıldı&quot; başlığıyla dolaşmaya başladı ve birçok
        işletme sahibinin ilk tepkisi aynı oldu: hibeler mi bitiyor?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kaldırılan metin, işletme desteğiyle ilgili değildi
      </h2>
      <p>
        2003 tarihli yönetmelik, KOSGEB&apos;in kendi fuar, eğitim, kongre
        gibi organizasyonlarına üçüncü kişilerin sponsorluk usulüyle ayni
        veya nakdi katkı sağlamasını düzenliyordu. İşletmelere ve
        girişimcilere verilen hibe, kredi faiz desteği ve kapasite geliştirme
        programları tamamen başka yönetmeliklerde duruyor; bu düzenlemeden
        hiç etkilenmedi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Başlık, metinden önce karar aldırabiliyor
      </h2>
      <p>
        Danışmanlık sürecinde asıl dikkat çeken, sorunun kendisi değil hızı
        oldu: başvuru takvimini erkene çekmeyi düşünen, hatta başvurusunu
        iptal etmeyi değerlendiren işletme sahipleri çıktı. Üç maddelik bir
        metnin kapsamını okumadan alınan bu kararlar, gerçek bir mevzuat
        değişikliğinden daha pahalıya gelebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Soru hep aynı olmalı
      </h2>
      <p>
        Bir sonraki &quot;büyük değişiklik&quot; haberinde atlanmaması
        gereken tek adım, başlığı değil kapsamı okumak: hangi yönetmelik,
        hangi kurumu, hangi süreci bağlıyor? Bu soru sorulmadan alınan
        kararların çoğu, haberin kendisinden daha büyük bir risk
        taşıyor.
      </p>
    </MakaleLayout>
  );
}
