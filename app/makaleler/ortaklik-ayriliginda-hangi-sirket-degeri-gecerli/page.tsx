import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "ortaklik-ayriliginda-hangi-sirket-degeri-gecerli"
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
        Ortaklık ayrılıklarını çoğu zaman para bozmaz. Bozan şey, aynı
        şirket için masaya konan iki farklı hesaplamadır — ve ikisi de,
        kendi sahibinin gözünden bakıldığında son derece makul görünür.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık sürecinde sık görülen sahne
      </h2>
      <p>
        Orta ölçekli bir üretim şirketinde iki ortaktan biri ayrılmak
        ister. Kalan ortak, payını kuruluş yılındaki sermaye ve o günkü
        ciro üzerinden ödemeyi teklif eder. Ayrılan ortak ise son beş
        yılda şirketin üç katına büyüdüğünü, yeni müşteri portföyünü ve
        markanın bugünkü tanınırlığını öne sürer. İkisi de kendi
        cephesinden haklıdır; ikisi de aynı anda geçerli olamaz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sorun rakam değil, referans noktasıdır
      </h2>
      <p>
        Bu tür anlaşmazlıklarda taraflar genelde farklı bir sayı
        üzerinde değil, farklı bir <em>zaman</em> ve farklı bir{" "}
        <em>yöntem</em> üzerinde anlaşamıyor. Biri net aktif değere,
        diğeri gelecekteki nakit akışına bakıyor; biri duygusal emeği
        fiyata dahil ediyor, diğeri yalnızca bilançoyu görüyor.
        Sohbet uzadıkça pozisyonlar sertleşiyor, ilişki geriliyor ve
        çoğu zaman iş ortaklığından çok daha değerli bir şey — güven —
        önce zedeleniyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Bağımsız bir rakam, tartışmayı büyütmez
      </h2>
      <p>
        Devreye giren bağımsız bir{" "}
        <Link
          href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
          className="text-orange-600 underline"
        >
          şirket değerleme
        </Link>{" "}
        çalışması, tarafların hiçbirinin öznel rakamı yerine; finansal
        tabloların normalize edilmiş hâlini, sektördeki emsalleri ve
        şirketin gerçek büyüme potansiyelini esas alır. Sonuç tek bir
        kesin sayı değil, gerekçeli bir değer aralığıdır — ama bu aralık
        bile, iki tarafın da kendi masasına oturup pazarlığı bitirmesi
        için genelde yeterli olur. Değerleme raporunu tartışmadan önce
        değil, tartışma büyümeden önce almak, hem ilişkiyi hem de zamanı
        koruyor.
      </p>
    </MakaleLayout>
  );
}
