import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "satis-tek-kisinin-hafizasinda-kalinca"
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
        Bir tekstil firmasında satış müdürü iki haftalığına yıllık izne
        çıktığında, şirket kısa süreliğine tuhaf bir amneziye giriyor.
        Hangi müşteriye son teklifin ne zaman gönderildiği, hangi
        görüşmenin &quot;evet&quot;e yakın olduğu, hangi bayinin üç aydır
        aranmadığı: bu bilgilerin tamamı tek bir kişinin telefonunda,
        not defterinde, hafızasında duruyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık pratiğinde tanıdık bir sahne
      </h2>
      <p>
        Bu sahne, ülkedeki KOBİ&apos;lerin büyük bölümünde neredeyse
        birebir tekrar ediyor. Satış, yazılı bir stratejiden değil,
        birkaç deneyimli çalışanın kişisel becerisinden ve hafızasından
        besleniyor. O çalışan izne çıktığında iş birkaç gün yavaşlıyor;
        işten ayrıldığında ise müşteri bilgisi de onunla birlikte
        kapıdan çıkıyor. Yeni gelen kişi genelde sıfırdan başlıyor,
        çünkü devraldığı şey bir sistem değil, bir kişinin bıraktığı
        boşluk oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Excel bir sistem değil, bir hafıza yedeğidir
      </h2>
      <p>
        Birçok işletme sahibi &quot;bizde de bir Excel var, takip
        ediyoruz&quot; diyor. Ama o dosya genelde tek bir kişinin açıp
        güncellediği, geri kalan ekibin ne zaman bakacağını bilmediği bir
        yedek defterden öteye geçmiyor. Satışı gerçekten sisteme
        bağlamak, her müşterinin hangi aşamada olduğunu gösteren bir
        satış hunisi kurmayı, bu huniyi bir{" "}
        <Link
          href="/blog/kobiler-icin-satis-stratejisi-ve-crm-surecleri"
          className="text-orange-600 underline"
        >
          CRM üzerinden
        </Link>{" "}
        takip etmeyi ve müşteri bilgisinin kişide değil kurumda kalmasını
        gerektiriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Risk, ekip büyüdükçe küçülmüyor
      </h2>
      <p>
        Beş kişilik bir satış ekibinde bu boşluğu fark etmek kolaydır,
        çünkü herkes birbirinin müşterisini az çok bilir. Ekip yirmi,
        otuz kişiye çıktığında aynı boşluk fark edilmeden büyür ve bir
        gün beklenmedik bir istifada ya da uzun bir rapor döneminde
        birden ortaya çıkar. Satış sürecini kişiden sisteme taşımak,
        büyüme kararı kadar önemli bir risk yönetimi kararı; bunu
        müşteri kaybetmeden önce yapmak, kaybettikten sonra telafi
        etmeye çalışmaktan çok daha ucuza geliyor.
      </p>
    </MakaleLayout>
  );
}
