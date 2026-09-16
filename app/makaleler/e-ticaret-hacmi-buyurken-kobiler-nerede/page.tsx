import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "e-ticaret-hacmi-buyurken-kobiler-nerede"
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
        Ticaret Bakanı Ömer Bolat, geçen hafta İstanbul&apos;da düzenlenen
        E-Ticaret ve Perakende Zirvesi&apos;nde bir rakam paylaştı: Türkiye&apos;nin
        e-ticaret hacmi 2025&apos;te bir önceki yıla göre yüzde 52 artışla 4,5
        trilyon TL&apos;ye ulaşmış. E-ticaret yapan işletme sayısı da 2019&apos;da
        64 bin iken 2025 sonunda 634 bine çıkmış. Rakamlar etkileyici, ama
        danışmanlık masasında oturan bir KOBİ sahibi için asıl soru şu:
        &quot;Bu büyümenin neresindeyim?&quot;
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Hacim büyüyor, ama herkes için aynı hızda değil
      </h2>
      <p>
        İşletme sayısındaki on kata yakın artış gerçek ve önemli: e-ticaret
        artık birkaç büyük markanın değil, geniş bir küçük işletme
        tabanının alanı haline geldi. Ama bu, her işletmenin aynı oranda
        pay aldığı anlamına gelmiyor. Danışmanlık yaptığım işletmelerin
        çoğunda gördüğüm tablo şu: pazaryerine kayıt olmak birkaç günlük
        bir iş, ama o kayıttan sonra gerçek satış üretmek ayrı bir konu.
        Hacim istatistiği toplamı gösteriyor, dağılımı göstermiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Genelde atlanan üç temel adım
      </h2>
      <p>
        Yeni başlayan işletmelerin büyük kısmı önce ürün fotoğrafı ve
        fiyatlandırmayla uğraşıyor, ama üç şeyi ya hiç kurmuyor ya da en
        son sıraya bırakıyor: ETBİS kaydı ve elektronik ticaret
        bilgilerinin güncel tutulması, farklı pazaryerleri ve kendi
        sitesi arasında tutarlı bir stok/fiyat senkronizasyonu, ve net,
        yazılı bir iade politikası. Bu üçü eksik olduğunda önce müşteri
        güveni, sonra pazaryeri algoritmasındaki görünürlük, en son da
        satış zarar görüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Giriş maliyeti düştü, ama sıfır değil
      </h2>
      <p>
        Bakan Bolat&apos;ın verdiği rakamlardan biri de e-ticaretin milli
        gelir içindeki payının 2019&apos;dan bu yana yaklaşık üç katına
        çıktığı yönünde. Bu, pazara girme maliyetinin göreli olarak
        düştüğü, altyapı ve lojistik seçeneklerinin arttığı bir dönemde
        olduğumuzu gösteriyor. Ama düşük maliyet, maliyetsiz demek değil;
        kargo entegrasyonu, komisyon yapısı ve müşteri hizmetleri
        kapasitesi hâlâ planlanması gereken kalemler.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl soru pazara girmek değil
      </h2>
      <p>
        Henüz e-ticarete başlamamış bir işletmeye söylediğim şey şu:
        büyümenin sürdüğü bu dönemde soru artık &quot;girelim mi&quot;
        değil, &quot;temel yapı taşlarını kurmadan girersek ne kaybederiz.&quot;
        4,5 trilyon TL&apos;lik hacmin bir parçası olmak, önce o hacme
        güvenle ve doğru altyapıyla katılmayı gerektiriyor.
      </p>
    </MakaleLayout>
  );
}
