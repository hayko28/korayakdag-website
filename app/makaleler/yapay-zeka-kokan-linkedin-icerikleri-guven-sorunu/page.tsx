import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yapay-zeka-kokan-linkedin-icerikleri-guven-sorunu"
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
        Geçen hafta LinkedIn&apos;de yeni bir bildirme seçeneği fark ettim:
        &quot;Bu yapay zeka kokuyor.&quot; İlk tepkim gülmek oldu, çünkü
        herkesin zaten fark ettiği bir şeyi platform resmen kabul etmiş
        oldu. LinkedIn&apos;in kendi açıklamasına göre uzun metin
        paylaşımlarının %40&apos;ından fazlası artık tamamen yapay zeka
        tarafından yazılıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Platform neden harekete geçti?
      </h2>
      <p>
        Mayıs 2026&apos;da LinkedIn algoritmasını, düşük özgünlüklü yapay
        zeka içeriğini geri plana atacak şekilde güncelledi. Temmuz
        sonunda da doğrudan şikayet aracını devreye aldı: bir kullanıcı bir
        gönderiyi &quot;yapay zeka kokuyor&quot; diye işaretlerse, o içerik
        silinmiyor ama yakın çevre dışına neredeyse hiç ulaşamıyor.
        Sebep basit — araştırmalar insanların yapay zeka ürettiği bilgiye
        güven oranının sadece %21 civarında kaldığını gösteriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Fark etmesi kolay, düzeltmesi zor
      </h2>
      <p>
        &quot;Bugün önemli bir ders öğrendim&quot; ile başlayan, üç maddeye
        bölünmüş, sonunda tek cümlelik &quot;ders&quot; ile biten
        paylaşımları hepimiz biliyoruz artık — ve okumadan geçiyoruz.
        Asıl sorun estetik değil: bu tarz içerik arttıkça, gerçekten
        deneyimden gelen, somut rakam ve isim içeren paylaşımlar da aynı
        kalıba benzemeye başlıyor ve güvenilirliğini kaybediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Benim yaklaşımım
      </h2>
      <p>
        Bir paylaşımı yayınlamadan önce kendime tek bir soru soruyorum:
        bu cümleyi gerçekten ben mi söylerdim, yoksa herkes aynı şeyi mi
        söylüyor? Somut bir müşteri deneyimi, gerçek bir rakam ya da
        tarih yoksa, o paylaşımı hiç atmıyorum. Kişisel marka kurmak
        isteyen herkese önerim aynı: hız için özgünlükten ödün vermeyin,
        çünkü platform da, okuyucu da artık farkı ayırt edebiliyor.
      </p>
    </MakaleLayout>
  );
}
