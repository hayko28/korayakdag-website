import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ortak-girisimde-fikri-mulkiyet-kime-ait"
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
        İki şirket ortak bir girişim veya ortak bir Ar-Ge projesi kurarken
        masaya önce hangi madde gelir? Hemen hemen her zaman kâr paylaşımı.
        Sermayeyi kim ne kadar koyacak, gelir nasıl bölünecek, zarar kimin
        üzerinde kalacak. Bu madde üzerinde saatlerce müzakere edilir, avukat
        taslakları gidip gelir, imzaya kadar en çok konuşulan konu budur.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Konuşulmayan tek madde
      </h2>
      <p>
        Danışmanlık pratiğinde sık rastlanan bir senaryo şu şekilde ilerliyor:
        iki firma bir ortak girişim kuruyor, taraflardan biri sermayeyi,
        diğeri teknik ekibi ve know-how&apos;ı getiriyor. Proje bir yıl
        sürüyor, ortaya yeni bir ürün tasarımı, bir algoritma veya bir
        prototip çıkıyor. Ortaklık beklenen sonucu vermeyip taraflar ayrılma
        kararı aldığında, ikisi de aynı çıktıyı sahiplenmek istiyor; çünkü
        sözleşmede bu konu hiç yazılmamış.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşmede yazmayan konuyu kanun belirler
      </h2>
      <p>
        Türk hukukunda ortak girişimleri doğrudan ve tek başına düzenleyen
        ayrı bir kanun yok. Yeni bir şirket kurulmadan yürütülen sözleşmesel
        ortaklıklar Türk Borçlar Kanunu&apos;nun adi ortaklık hükümlerine
        tabi; şirketli modelde ise Türk Ticaret Kanunu ile birlikte taraflar
        arasındaki ayrı bir pay sahipleri sözleşmesi devreye giriyor. Her iki
        durumda da geçerli olan aynı kural işliyor: sözleşmede yazmayan her
        konu, kanunun tamamlayıcı hükümleriyle, taraflardan hiçbirinin
        baştan planlamadığı bir sonuca bağlanıyor. Fikri mülkiyette bu,
        genellikle uzun süren ve maliyetli bir ihtilaf anlamına geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üç ayrı soru, tek bir maddede
      </h2>
      <p>
        Aslında eksik olan tek bir cümle değil, üç ayrı sorunun cevabı.
        Ortaklık öncesinde her tarafın kendi getirdiği know-how, marka veya
        patentin mülkiyeti kimde kalacak? Ortaklık sırasında birlikte
        geliştirilen yeni çıktının mülkiyeti nasıl paylaşılacak? Ortaklık
        sona erdiğinde, bu çıktıyı hangi taraf, hangi şartlarla kullanmaya
        devam edebilecek? Bu üç sorunun cevabı kuruluş aşamasında
        yazılmazsa, cevap ayrılık anında, genellikle güven kalmamışken
        aranmaya başlanıyor.
      </p>

      <p>
        Kâr paylaşımı maddesi olmayan bir ortaklık sözleşmesi nadiren
        imzalanıyor. Fikri mülkiyet maddesi olmayan bir ortaklık sözleşmesi
        ise hâlâ şaşırtıcı derecede yaygın. İkisi de aynı ortaklığın
        çıktısını paylaşıyor; biri parayı, diğeri parayı üreten şeyi.
      </p>
    </MakaleLayout>
  );
}
