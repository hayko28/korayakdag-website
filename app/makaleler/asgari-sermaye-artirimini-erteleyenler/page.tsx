import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "asgari-sermaye-artirimini-erteleyenler"
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
        Danışmanlık masasında asgari sermaye artırımı gündeme geldiğinde
        alınan ilk tepki neredeyse hep aynı: &quot;biz zaten büyüdük,
        bilançomuz farklı.&quot; Oysa 7511 sayılı Kanun&apos;la Türk Ticaret
        Kanunu&apos;na eklenen Geçici Madde 15 bilançoya değil, esas
        sermayeye bakıyor — ve 2024 öncesi kurulmuş binlerce şirket hâlâ
        kuruluş gününden kalma tutarda duruyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ertelemenin gerçek nedeni ilgisizlik değil
      </h2>
      <p>
        Bu maddeyi geciktiren firmaların çoğu konuyu görmezden gelmiyor,
        yanlış önceliklendiriyor. Genel kurul, tescil ve ilan süreçleri zaman
        aldığı için &quot;yıl sonuna doğru hallederiz&quot; diye
        düşünülüyor. Ama yıl sonuna yaklaştıkça noterlerde ve ticaret
        sicillerinde aynı anda yüzlerce şirket aynı işlemi yapmaya
        çalışacak — bu da süreci beklenenden daha uzun hale getiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Küçük bir teknik detay değil
      </h2>
      <p>
        31 Aralık 2026&apos;ya kadar tanınan geçiş süresi kaçırılırsa kanun,
        artırım yapmayan şirketler için infisah riskinden söz ediyor —
        şirketin kendiliğinden sona ermesi. Bu, &quot;sonra bakarız&quot;
        diyerek geçiştirilecek bir madde değil, takvimi kesin bir yükümlülük.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bilanço büyümüş olabilir, ama esas sermaye ayrı bir sicil kalemi.
        Şirket sahiplerinin bu ikisini birbirinden ayırt edememesi, konunun
        yıl sonuna kadar ertelenmesinin asıl sebebi — ve yıl sonu, bu tür
        işlemler için en kalabalık, en yavaş dönem.
      </p>
    </MakaleLayout>
  );
}
