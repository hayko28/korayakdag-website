import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "isten-cikarmalarda-yapay-zeka-bahanesi"
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
        Bu yıl büyük işten çıkarma duyuran şirketlerin açıklamalarını art arda
        okuyunca ilginç bir örüntü fark ettim: Block çalışanlarının yaklaşık
        %40&apos;ını, Cloudflare da %20&apos;sini işten çıkardı ve ikisi de
        gerekçe olarak aynı şeyi gösterdi — yapay zeka sayesinde artık daha
        az kişiyle daha fazla iş yapabiliyorlarmış.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar başka bir şey söylüyor
      </h2>
      <p>
        Konuyu araştıran analizler farklı bir tablo çiziyor: ABD&apos;de
        2025&apos;te yapılan işten çıkarmaların yalnızca %4,5&apos;i doğrudan
        yapay zeka kaynaklıydı; &quot;piyasa koşulları&quot; gerekçesi
        bundan dört kat daha sık kullanılmış. Yani &quot;yapay zeka&quot;
        çoğu zaman manşette, ama bilançoda değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Neden bu bahane bu kadar cazip?
      </h2>
      <p>
        Çünkü &quot;yapay zekaya geçtik, verimlilik arttı&quot; demek
        yatırımcıya güven veriyor — hatta bazı şirketlerin hisseleri bu
        açıklamayla birlikte yükseldi. Ama &quot;pandemi döneminde fazla işe
        aldık&quot;, &quot;marjlarımız daralıyor&quot; ya da &quot;maliyet
        baskısı var&quot; demek aynı etkiyi yaratmıyor. Aynı sonucun iki
        farklı anlatısı var, ve şirketler haklı olarak daha güvenli olanı
        seçiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Benim çıkardığım ders
      </h2>
      <p>
        Danışmanlık yaptığım şirket sahiplerine hep aynı şeyi söylüyorum:
        büyük şirketlerin anlatısına göre kendi organizasyon kararınızı
        vermeyin. Yapay zeka gerçek bir verimlilik avantajı sağlıyorsa bunu
        ölçün ve ona göre karar alın; sadece gündemde olduğu için ekip
        küçültmeyin ya da tam tersi, gerçek bir maliyet sorununu &quot;yapay
        zekayla çözeriz&quot; diyerek ertelemeyin. Anlatı yönetim ister,
        karar ise gerçek rakam.
      </p>
    </MakaleLayout>
  );
}
