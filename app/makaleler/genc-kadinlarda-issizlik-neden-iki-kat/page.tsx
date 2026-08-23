import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "genc-kadinlarda-issizlik-neden-iki-kat"
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
        TÜİK&apos;in 19 Ağustos&apos;ta açıkladığı ikinci çeyrek işgücü
        verileri ilk bakışta iyimser bir tablo çiziyor: genel işsizlik oranı
        %7,9&apos;a, genç işsizlik oranı ise bir önceki çeyreğe göre 1 puan
        azalarak %13,9&apos;a geriledi. Ama rakamı cinsiyete göre ayırınca
        tablo değişiyor — genç erkeklerde işsizlik %11 iken genç kadınlarda
        %19,3. Aradaki fark neredeyse iki kat.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bu bir istatistik notu değil, bir işe alım gerçeği
      </h2>
      <p>
        Bu farkı sadece bir sosyal politika başlığı olarak okumak eksik
        olur. İşe alım masasının diğer tarafında oturan işveren için de
        doğrudan bir anlamı var: genç kadın işgücünde, aynı yetkinlikte
        genç erkek adaya göre çok daha geniş ve daha az rekabetçi bir aday
        havuzu var demektir. Doğru pozisyonlarda bu, işveren için gözden
        kaçan bir avantaj.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Devletin masaya koyduğu teşvik unutuluyor
      </h2>
      <p>
        4447 sayılı İşsizlik Sigortası Kanunu&apos;nun ek maddelerinde yer
        alan genç ve kadın istihdamı teşvikleri, işe alınan sigortalının
        yaşına, cinsiyetine ve İŞKUR&apos;a kayıtlı işsiz olma süresine göre
        işveren SGK prim payının belirli bir süre karşılanmasını sağlıyor.
        Danışmanlık masasında sık görülen tablo şu: KOBİ&apos;ler işe alım
        kararını sadece maaş bütçesine göre veriyor, aynı kararın SGK
        maliyetini ciddi ölçüde düşürebilecek bir teşvikten habersiz
        kalıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Pratikte ne yapılabilir
      </h2>
      <p>
        Bir KOBİ için üç adım yeterli: açık pozisyonlarda genç kadın
        adayları eleme aşamasında dezavantajlı görmek yerine maliyet
        avantajlı görmek; işe alım öncesi muhasebeci veya İK danışmanıyla
        hangi teşvik kodunun uygulanabileceğini netleştirmek; ve bordro
        sürecinde bu teşvikin gerçekten uygulandığını kontrol etmek —
        çünkü çoğu zaman teşvik hakkı var olduğu halde sistemde
        işaretlenmediği için hiç kullanılmıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Genç işsizliğindeki genel iyileşme olumlu bir haber. Ama genç
        kadınlarla erkekler arasındaki bu fark kapanmadığı sürece, işgücü
        piyasasının bir tarafında kullanılmayan bir yetenek havuzu, diğer
        tarafında da fark edilmeyen bir maliyet avantajı bekliyor demektir.
      </p>
    </MakaleLayout>
  );
}
