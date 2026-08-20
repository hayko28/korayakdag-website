import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "bayilik-anlasmasinda-gozden-kacan-madde"
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
        Danışmanlık sürecinde karşılaşılan tipik bir vaka: bir üretici firma,
        yeni bir bölgeye girmek için yerel bir bayiyle{" "}
        <strong className="text-[#071A2F]">münhasır</strong> bir anlaşma
        imzalıyor. Bölge o bayiye kapatılıyor, karşılığında ise somut,
        ölçülebilir hiçbir performans şartı konmuyor. İki üç yıl sonra o
        bölgedeki ciro toplam cironun yüzde birkaçında kalıyor — ama sözleşme
        hâlâ yürürlükte, firma kendi bölgesine başka bir kanaldan giremiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Münhasırlık aslında bir bahis
      </h2>
      <p>
        Bir bölgeyi tek bir bayiye kapatmak, o bayinin gerçekten satacağına
        dair bir bahistir. Bayi tarafında bu riski dengeleyen bir mekanizma
        yoksa — yani hedefi tutturamazsa münhasırlığın gözden geçirileceğine
        dair bir madde yoksa — firma tek taraflı bir yükümlülük altına
        giriyor. Bayi için ise durum tam tersi: baskı hissetmeden, rahatça
        bekleyebiliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sözleşmede olması gereken üç şey
      </h2>
      <p>Doğru kurulmuş bir bayilik veya distribütörlük anlaşmasında şunlar mutlaka yer almalı:</p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong className="text-[#071A2F]">Yıllık minimum alım veya satış hedefi</strong> —
          rakamla, dönemsel olarak tanımlanmış.
        </li>
        <li>
          <strong className="text-[#071A2F]">Net bir tetikleyici</strong> —
          hedef art arda iki dönem tutmazsa münhasırlığın kalkacağı veya
          gözden geçirileceği açıkça yazılı olmalı.
        </li>
        <li>
          <strong className="text-[#071A2F]">Makul bir çıkış maddesi</strong> —
          ilişkiyi hukuki ihtilafa girmeden sonlandırabilecek bir yol.
        </li>
      </ol>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Güvenmek yetmiyor
      </h2>
      <p>
        Yeni bir iş ortaklığı kurulurken güven elbette önemli, ancak güven
        tek başına bir yönetim mekanizması değil. Bir kanal ortaklığının
        pahalıya patlayan hatası genellikle güvensizlik değil, o güveni
        destekleyecek ölçülebilir bir yapının kurulmamış olması. Performans
        şartı olmayan bir münhasırlık, taraflardan birine risksiz, diğerine
        ise riskin tamamını yükleyen bir anlaşmadır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir bayilik veya distribütörlük anlaşması imzalamadan önce sorulması
        gereken soru şu: bu münhasırlık karşılığında hangi ölçülebilir
        yükümlülüğü alıyoruz? Cevap net değilse, anlaşma daha masadayken
        yeniden kurgulanmalı.
      </p>
    </MakaleLayout>
  );
}
