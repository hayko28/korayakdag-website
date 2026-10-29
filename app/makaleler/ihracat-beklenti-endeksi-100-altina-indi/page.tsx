import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ihracat-beklenti-endeksi-100-altina-indi"
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
        İstanbul&apos;da bir yan sanayi firmasının dördüncü çeyrek bütçe
        toplantısında, hedefin gerekçesi tek bir cümleyle özetlendi: eylül
        ihracatı Cumhuriyet tarihinin en yüksek ikinci aylık rakamına
        ulaştı, o yüzden talep güçlü seyrediyor. Aynı hafta Ticaret
        Bakanlığı&apos;nın yayımladığı bir başka rapor, firmaların kendi
        geleceğine dair verdiği cevabın bu kadar iyimser olmadığını
        gösteriyordu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Geçmişe değil geleceğe sorulan soru
      </h2>
      <p>
        Ticaret Bakanlığı, 8 Ekim 2026&apos;da 2026 yılı 4. çeyrek Dış
        Ticaret Beklenti Anketi&apos;nin sonuçlarını açıkladı. Anket, 1-16
        Eylül tarihleri arasında 1.562 firmaya gönderildi, 1.228 firma
        yanıt verdi. Sorulan soru geçmiş ayın cirosu değildi: önümüzdeki
        üç ayda ihracatınız ve ithalatınız nasıl olacak?
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki endeks, ters yönde hareket etti
      </h2>
      <p>
        İhracat Beklenti Endeksi, bir önceki çeyreğe göre 4,6 puan
        azalarak 96,9&apos;a geriledi ve 100 eşiğinin altına, kötümser
        bölgeye geçti. Aynı ankette İthalat Beklenti Endeksi ise 12,7 puan
        birden artarak 115,4&apos;e çıktı. Yani anketi yanıtlayan firmalar,
        önümüzdeki çeyrekte toplamda daha az satmayı, daha çok almayı
        bekliyor. Bu ayrışmanın arkasında kur beklentisi, iç talep
        tahmini ya da girdi maliyeti gibi birden fazla neden olabilir; ama
        sonuç tek: iki eğri aynı yöne gitmiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rekor geçmişi anlatır, beklenti geleceği
      </h2>
      <p>
        Eylül ayının güçlü ihracat rakamı gerçekleşmiş bir veri; dördüncü
        çeyrek beklenti endeksi ise bizzat satış yapan firmaların kendi
        öngörüsü. İkisi aynı anda doğru olabilir ve farklı şeyler
        söyleyebilir. Yıl sonu bütçesini yalnızca son ayın manşetine
        bakarak kuran bir şirket, aynı sektördeki 1.228 firmanın kendi
        geleceğine dair verdiği daha temkinli cevabı gözden kaçırabilir.
      </p>

      <p>
        Dördüncü çeyrek planı hazırlanırken sorulması gereken soru belki
        de şu: bütçe, geçen ayın gerçekleşen rakamına mı dayanıyor, yoksa
        o rakamı üreten firmaların önümüzdeki üç ay için kendi verdiği
        cevaba mı?
      </p>
    </MakaleLayout>
  );
}
