import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "reeskont-kredisinde-net-ihracatci-sarti-kalkti"
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
        Reeskont kredisi denince birçok ihracatçının kafasında hâlâ aynı
        cümle var: &quot;Biz net ihracatçı değiliz, bu kredi bize göre
        değil.&quot; Bu cümle bir süre önce doğruydu. 5 Eylül 2026&apos;da
        Resmî Gazete&apos;de yayımlanan Cumhurbaşkanı Kararı&apos;yla artık
        değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tanımın kendisi değişti
      </h2>
      <p>
        Program yıllardır &quot;net ihracatçı&quot; ölçütüne göre
        işliyordu: ithalatı ihracatından fazla olan firmalar kapsam dışı
        kalıyordu. Yeni düzenlemeyle bu eşik kaldırıldı, yerine
        &quot;ihracatçı skoru&quot; adı verilen daha geniş bir
        değerlendirme sistemi getirildi. Sonuç olarak hem ihraç hem ithal
        eden, ama dış ticaret hacminde ihracat tarafı güçlü olan birçok
        firma artık başvuru masasına oturabiliyor; daha önce ilk elemede
        kapı dışında kalan işletmeler için bu, teknik bir detay değil,
        gerçek bir kapsam genişlemesi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Limitler de aynı yönde büyüdü
      </h2>
      <p>
        Programın toplam günlük kullanım limiti 300 milyon TL&apos;den 5
        milyar TL&apos;ye, firma başına günlük limit ise 45 milyon
        TL&apos;den 60 milyon TL&apos;ye çıkarıldı. Yabancı para cinsi
        ihracat kredisi 5 milyon dolara kadar kullanılabiliyor, program
        bütçesi 1 milyar dolar olarak belirlendi. Kredi maliyeti yüzde
        23,95&apos;e indirildi, döviz alma ve ilave döviz bozdurma
        zorunlulukları kaldırıldı; Banka ve Sigorta Muameleleri Vergisi
        istisnası artık uzun vadeli kredileri de kapsıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl risk yeni şart değil, eski hafıza
      </h2>
      <p>
        Danışmanlık sürecinde sık karşılaşılan durum şu: bir firma iki ya
        da üç yıl önce bu krediye başvurmuş, &quot;net ihracatçı&quot;
        şartını karşılamadığı için reddedilmiş ve o günden sonra bu
        pencereye bir daha hiç bakmamış. O ret kararının dayandığı kural
        artık yürürlükte değil, ama firmanın hafızasında hâlâ geçerli.
        İhracat finansmanını gözden geçiren her firma için soru artık
        &quot;bu krediye ihtiyacımız var mı&quot; değil, &quot;geçmişteki
        o ret bugün hâlâ geçerli mi&quot; olmalı.
      </p>
    </MakaleLayout>
  );
}
