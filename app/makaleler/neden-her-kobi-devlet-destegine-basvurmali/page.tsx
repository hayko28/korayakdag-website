import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "neden-her-kobi-devlet-destegine-basvurmali"
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
        Bir KOBİ sahibiyle oturduğumda, konuşmanın bir yerinde neredeyse hep
        aynı cümleyi duyarım: &quot;Devlet desteği falan bize göre değil, o
        işler büyük şirketlere.&quot; Bu cümleyi onlarca kez duydum ve her
        seferinde aynı şeyi düşünüyorum: keşke bu kadar emin olmasalar.
      </p>

      <p>
        Gerçek şu: KOSGEB&apos;in çoğu programı doğrudan küçük ve orta
        ölçekli işletmeler için tasarlanmış. TÜBİTAK&apos;ın 1507 gibi
        programları özellikle &quot;ilk kez Ar-Ge yapacak&quot; KOBİ&apos;leri
        hedefliyor. Yatırım teşvik sisteminin Hedef Yatırımlar bölümü, büyük
        holdinglerin değil, bölgesinde üretim yapan orta ölçekli işletmelerin
        başvurduğu bir sistem. Yani &quot;bu bize göre değil&quot; düşüncesi,
        çoğu zaman yanlış bir varsayıma dayanıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Peki neden başvurmuyorlar?
      </h2>

      <p>
        Yıllardır bu işin içindeyim ve üç neden görüyorum, hiçbiri &quot;hak
        etmiyorlar&quot; değil.
      </p>

      <p>
        <strong className="text-[#071A2F]">
          Birincisi, bilgi eksikliği değil, bilgi kirliliği.
        </strong>{" "}
        İnternette teşvikle ilgili o kadar çok, birbiriyle çelişen,
        güncelliğini yitirmiş bilgi var ki, işletme sahibi araştırmaya
        başladığı an kaybolup gidiyor. Hangi program hâlâ açık, hangisi
        kapandı, hangi rakam güncel — bunu ayırt etmek bile başlı başına bir
        iş.
      </p>

      <p>
        <strong className="text-[#071A2F]">İkincisi, süreç korkusu.</strong>{" "}
        &quot;Evrak işi&quot;, &quot;bürokrasi&quot;, &quot;reddedilirsem
        zaman kaybederim&quot; düşüncesi, başvuruyu daha başlamadan bitiriyor.
        Oysa doğru hazırlanmış bir başvuru dosyasıyla, süreç göründüğü kadar
        korkutucu değil.
      </p>

      <p>
        <strong className="text-[#071A2F]">
          Üçüncüsü — ve bence en önemlisi — &quot;bu bana ne kazandırır&quot;
          sorusunun net cevaplanmamış olması.
        </strong>{" "}
        Rakamlar soyut kaldığında, işletme sahibi zaman ayırmaya değer
        bulmuyor. Ama &quot;9 milyon TL&apos;lik yatırımınızın 3,6 milyon
        TL&apos;sini vergi avantajı olarak geri alabilirsiniz&quot;
        dediğinizde, aynı kişi masaya oturuyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Benim önerim
      </h2>

      <p>
        Her yatırım veya büyüme kararı öncesinde, en azından &quot;bize
        uygun bir destek var mı&quot; sorusunu sormanızı öneririm. Cevap
        hayır bile olsa, en fazla bir görüşme kaybedersiniz. Cevap evetse,
        bazen bir yatırımın maliyetinin üçte birini geri kazanabiliyorsunuz —
        bu, göz ardı edilecek bir fark değil.
      </p>

      <p>
        Bu yazıyı, &quot;destek başvurusu karmaşık&quot; diye düşünüp hiç
        denemeyenler için yazdım. Karmaşık olan destek sistemi değil, doğru
        bilgiye ulaşmak. Onu da birlikte çözebiliriz.
      </p>
    </MakaleLayout>
  );
}
