import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "faizin-dusecegi-varsayimiyla-kurulan-buyume-plani"
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
        Türkiye Cumhuriyet Merkez Bankası, 10 Eylül&apos;de topladığı Para
        Politikası Kurulu&apos;nda bir hafta vadeli repo faizini yüzde
        37&apos;de sabit tuttu. Karar piyasanın beklentisiyle uyumluydu,
        bu yüzden çoğu haberde sıradan bir gelişme gibi geçti. Oysa
        rakamın kendisinden daha çarpıcı olan bir detay var: kurul, ocak
        ayındaki 100 baz puanlık indirimden bu yana üst üste beşinci kez
        faize dokunmadı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Planlar bir senaryo üzerine kuruldu
      </h2>
      <p>
        Ocaktaki indirim geldiğinde birçok işletme, bunu bir başlangıç
        noktası olarak okudu. Danışmanlık masasında o dönem hazırlanan
        yatırım bütçelerinin ortak varsayımı şuydu: faiz yıl boyunca
        kademeli olarak gerileyecek, finansman maliyeti düşecek, ek
        makine alımı veya yeni şube açılışı bu düşüşe göre
        zamanlanacaktı. Sekiz ay ve beş toplantı sonra o senaryo hâlâ
        gerçekleşmedi; politika faizi ocaktaki seviyesinde duruyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl risk faizde değil, tek senaryoda
      </h2>
      <p>
        Kurulun kendi açıklaması da temkinli: enflasyonun ana eğiliminde
        düşüş görülüyor ama enerji fiyatlarındaki jeopolitik risk ve iç
        talepteki zayıf seyir gerekçe gösteriliyor, yani hızlı bir
        indirim döngüsü şu an için masada değil. Bir büyüme planının
        sağlamlığı, faizin belirli bir tarihte belirli bir seviyeye
        ineceği tahminine bağlıysa, o plan aslında bir bahistir. Doğru
        soru faizin ne zaman düşeceği değil: finansman maliyeti mevcut
        seviyesinde kalırsa, plan hâlâ ayakta kalıyor mu?
      </p>
    </MakaleLayout>
  );
}
