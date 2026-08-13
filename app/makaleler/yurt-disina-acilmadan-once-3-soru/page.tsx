import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yurt-disina-acilmadan-once-3-soru"
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
        Yurt dışında şirket kurmak veya yeni bir pazara açılmak isteyen
        işletme sahipleriyle konuştuğumda, ilk sorulan şeyin genelde
        &quot;hangi ülke daha avantajlı&quot; olduğunu görüyorum. Bu yanlış
        bir soru değil, ama erken bir soru. Ondan önce cevaplanması gereken
        üç soru var — ve bu üç soruyu atlayan projelerin çoğu, ilk yıl
        içinde ciddi sorunlar yaşıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        1. Neden yurt dışına açılıyorsunuz?
      </h2>
      <p>
        Bu soru gereksiz basit görünebilir ama cevap genelde net değil.
        &quot;Vergi avantajı için mi&quot;, &quot;yeni müşteri için mi&quot;,
        &quot;tedarik zincirine yakın olmak için mi&quot;, &quot;prestij
        için mi&quot; — her cevap, tamamen farklı bir ülke ve yapı seçimine
        götürüyor. Sadece &quot;yurt dışında olmak iyi görünür&quot; diye
        çıkılan yollar, çoğu zaman maliyetli birer deneyime dönüşüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        2. Türkiye&apos;deki operasyonunuzla ilişkisi ne olacak?
      </h2>
      <p>
        Yurt dışı şirket, Türkiye&apos;deki şirketinizin bir uzantısı mı
        olacak, yoksa tamamen bağımsız mı çalışacak? Bu sorunun cevabı;
        vergi yükümlülüklerinizi, hangi geliri nerede raporlayacağınızı ve
        hatta hangi banka hesabını kullanacağınızı doğrudan etkiliyor. Bu
        soruyu atlayıp şirketi kurduktan sonra cevaplamaya çalışmak, en sık
        gördüğüm hatalardan biri.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        3. İlk 12 ayı kim yönetecek?
      </h2>
      <p>
        Yurt dışında bir şirket kurmak, &quot;kuruluş&quot; aşamasından
        ibaret değil. Banka hesabı açmak, yerel muhasebe/vergi
        yükümlülüklerini takip etmek, gerekirse yerel bir temsilci bulmak —
        bunların hepsi kuruluştan sonraki ilk yılda yönetilmesi gereken
        işler. Bu sorumluluğu kimin üstleneceği net değilse, şirket
        &quot;kağıt üzerinde&quot; kalıyor ve beklenen faydayı sağlamıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Sonuç</h2>
      <p>
        Doğru ülke seçimi elbette önemli — ama bu üç soruya net cevabınız
        yoksa, hangi ülkeyi seçerseniz seçin sonuç benzer olacaktır. Ben bu
        görüşmelere genelde &quot;hangi ülke&quot; sorusuyla değil, bu üç
        soruyla başlıyorum. Cevaplar netleştiğinde, doğru ülke ve yapı
        zaten kendini gösteriyor.
      </p>
    </MakaleLayout>
  );
}
