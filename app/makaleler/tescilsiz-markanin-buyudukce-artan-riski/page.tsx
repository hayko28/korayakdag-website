import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tescilsiz-markanin-buyudukce-artan-riski"
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
        Bir markanın en kırılgan olduğu an genellikle iflas ettiği gün
        değil, tanınır hale geldiği gündür. Küçükken kimse bakmaz;
        büyüyünce herkes bakar — ve bu bakışların hepsi iyi niyetli olmaz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık pratiğinde sık görülen sahne
      </h2>
      <p>
        Bölgesinde yıllarca aynı isimle üretim yapan bir tekstil atölyesi
        düşünülsün. Ürünleri beğenilir, isim ağızdan ağıza yayılır, birkaç
        yıl içinde bölge dışında da bilinir hale gelir. Sahibi markasını
        hiç tescil ettirmemiştir — &quot;zaten herkes bizi bu isimle
        tanıyor&quot; diye düşünmüştür. Tam bu noktada, haberi bile olmadan
        bir şey olur: aynı ismi başka biri TÜRKPATENT nezdinde kendi adına
        tescil ettirir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kullanmak, hak sahibi olmak anlamına gelmiyor
      </h2>
      <p>
        Türk hukukunda marka üzerindeki münhasır hak kullanımdan değil
        tescilden doğar. &quot;Yıllardır ben kullanıyorum&quot; savunması,
        tescilli bir hak karşısında çoğu zaman yeterli olmuyor; en fazla
        daha ağır ispat yükü taşıyan haksız rekabet hükümlerine
        dayanılabiliyor. Sonrası basit ama acımasız işliyor: yıllarca inşa
        edilen isim artık hukuken bir başkasının — atölye sahibi ya
        sıfırdan yeni bir isimle başlıyor ya da kendi markasını
        kullanabilmek için tescili elinde tutan kişiyle pazarlık etmek
        zorunda kalıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Büyüme, riski azaltmıyor — artırıyor
      </h2>
      <p>
        Bu noktada sezgiye aykırı bir şey oluyor: marka ne kadar büyür ve
        konuşulursa, başkasının dikkatini çekip erken tescil ettirilme
        riski de o kadar artıyor.{" "}
        <Link
          href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
          className="text-orange-600 underline"
        >
          Marka tescili ve patent başvurusu
        </Link>{" "}
        sürecini &quot;büyüdüğümde düşünürüm&quot; diyerek erteleyen
        işletmeler, aslında riskin en düşük olduğu dönemi atlayıp en yüksek
        olduğu döneme taşıyor. Erken tescil, küçük bir işletme için bir
        lüks değil; büyüme planının doğal bir parçası olmalı.
      </p>
    </MakaleLayout>
  );
}
