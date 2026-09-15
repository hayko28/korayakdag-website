import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "tavsiye-programiyla-gelen-numaraya-reklam-smsi"
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
        Bir tasarruf finansman şirketi, &quot;marka elçisi&quot; adını
        verdiği tavsiye programı üzerinden üçüncü bir kişiden edindiği bir
        telefon numarasına reklam içerikli SMS gönderdi ve arama yaptı.
        Kişisel Verileri Koruma Kurulu&apos;nun Ağustos 2026 tarihli karar
        özetine göre bu, şirkete 1.000.000 TL idari para cezasına mal oldu.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kurulun dikkat çektiği nokta tek bir mesaj değildi
      </h2>
      <p>
        Kararın gerekçesi, sürecin baştan sona hiçbir aşamasında geçerli bir
        açık rıza bulunmamasıydı. Numara üçüncü bir kişiden alınmış, sahibine
        pazarlama iletişimi için ayrı bir izin sorulmamış, yapılan arama
        kaydedilmişti. Kurul için sorun tek bir SMS değil, verinin elde
        edildiği andan kullanıldığı ana kadar hiçbir noktada hukuki bir
        dayanağın gösterilememesiydi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık pratiğinde sık görülen tablo
      </h2>
      <p>
        Türkiye&apos;de pek çok KOBİ, müşteri tabanını büyütmek için
        &quot;bize müşteri getir, indirim kazan&quot; tarzı tavsiye
        programları işletiyor ya da iş ortaklarından, etkinliklerden
        topladığı numara listelerini WhatsApp ve SMS kampanyalarında
        kullanıyor. Bu numaraların çoğu bir Excel dosyasına ya da CRM&apos;e
        eklenirken, &quot;bu kişi pazarlama iletişimi almayı kabul etti
        mi&quot; sorusu genelde hiç sorulmuyor; tavsiye eden kişinin rızası,
        tavsiye edilenin rızası yerine geçiyor sanılıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aydınlatma metni değil, belgelenebilir rıza gerekiyor
      </h2>
      <p>
        Web sitesinde genel bir{" "}
        <Link
          href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026"
          className="text-orange-600 underline"
        >
          KVKK aydınlatma metni
        </Link>{" "}
        bulunması, kampanya bazında alınması gereken açık rızanın yerini
        tutmuyor. Her numaranın hangi kaynaktan, hangi tarihte, hangi kapsamda
        rıza ile geldiğinin ayrıca belgelenmesi gerekiyor. Bu belge olmadan
        gönderilen her kampanya, tek bir şikayetle aynı sonuca çıkma riski
        taşıyor.
      </p>
    </MakaleLayout>
  );
}
