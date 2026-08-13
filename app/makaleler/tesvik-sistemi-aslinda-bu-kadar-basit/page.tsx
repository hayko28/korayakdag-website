import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tesvik-sistemi-aslinda-bu-kadar-basit"
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
        &quot;Teşvik sistemi çok karmaşık&quot; cümlesini duyduğumda, genelde
        şunu söylüyorum: karmaşık olan sistem değil, sisteme dair anlatılan
        hikaye. Bölge, oran, EK-3, E-TUYS gibi terimler bir araya geldiğinde
        göz korkutucu bir tablo oluşuyor — ama işin özü aslında çok basit üç
        soruya iniyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Soru 1: Nerede yatırım yapıyorsunuz?
      </h2>
      <p>
        Türkiye altı teşvik bölgesine ayrılmış durumda. Yatırımınızın
        yapılacağı il, hangi destek unsurlarından yararlanabileceğinizi
        doğrudan belirliyor. Bunu bir &quot;harita sorusu&quot; gibi düşünün
        — karmaşık bir hesap değil, sadece &quot;hangi bölgedeyim&quot;
        sorusunun cevabı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Soru 2: Ne üretiyorsunuz veya hangi faaliyeti yapıyorsunuz?
      </h2>
      <p>
        Her sektör, her faaliyet konusu teşvike uygun değil. Ama devletin
        öncelik verdiği alanlar (üretim, Ar-Ge, ihracata yönelik yatırımlar
        gibi) oldukça geniş bir yelpazeyi kapsıyor. Bu soru da aslında
        &quot;faaliyet konum listede var mı, yok mu&quot; kadar basit.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Soru 3: Ne kadar yatırım yapıyorsunuz?
      </h2>
      <p>
        Her program için bir asgari yatırım tutarı var. Bu tutarı
        karşılıyorsanız, kapı açık demektir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üç soru, bir cevap
      </h2>
      <p>
        Bu üç sorunun cevabını netleştirdiğinizde, önünüzde hangi destek
        unsurlarının (vergi indirimi, SGK desteği, faiz desteği gibi)
        olduğu zaten ortaya çıkıyor. Zor olan kısım, bu üç cevabı doğru ve
        güncel bilgiyle eşleştirmek — çünkü oranlar, tutarlar ve şartlar
        zaman zaman değişiyor.
      </p>

      <p>
        Benim işim tam olarak burada başlıyor: sizin yerinize bu üç soruyu
        netleştirmek, güncel mevzuatla eşleştirmek ve size sadece &quot;evet,
        şu kadar avantajınız var&quot; ya da &quot;hayır, şu an uygun
        değilsiniz ama şu değişirse uygun olursunuz&quot; demek.
      </p>

      <p>
        Sistem karmaşık değil — sadece doğru anlatılmadığında karmaşık
        görünüyor.
      </p>
    </MakaleLayout>
  );
}
