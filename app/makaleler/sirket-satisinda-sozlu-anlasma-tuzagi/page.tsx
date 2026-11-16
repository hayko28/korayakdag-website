import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sirket-satisinda-sozlu-anlasma-tuzagi"
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
        Kasım başında bir inşaat şirketiyle bir danışmanlık firmasının
        birleşmesi İstanbul Ticaret Sicili&apos;ne tescil edildi; haberin
        küçük bir satırı, bir holding iştirakindeki pay oranının yüzde
        32,08&apos;e çıktığını gösteriyordu. Rekabet Kurumu&apos;nun
        yayımladığı görünüm raporuna göre 2025, hem TL hem dolar bazında
        son 13 yılın en yüksek birleşme ve devralma hacminin görüldüğü yıl
        oldu; kurumun önüne 400&apos;ün üzerinde işlem geldi. Bu rakamların
        arkasında, orta ölçekli şirket sahiplerinin masaya oturduğu çok
        daha sıradan bir hikâye tekrar ediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Fiyatta anlaşmak, işlemi bitirmek değil
      </h2>
      <p>
        Bir yatırımcı ya da sektördeki daha büyük bir oyuncu, orta ölçekli
        bir şirkete makul bir teklifle geliyor. İki taraf sözlü olarak
        fiyatta anlaşıyor, niyet mektubu imzalanıyor, herkes işlemin
        neredeyse bittiğini düşünüyor. Asıl süreç ise tam bu noktada,
        due diligence ile başlıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ciro büyük görünür, kaynağı sorgulanmaz
      </h2>
      <p>
        Durum tespiti sırasında sık karşılaşılan bulgu, şirketin kasten
        sakladığı bir şey değil. Mali inceleme ekibi cironun yarısından
        fazlasının tek bir müşteriden geldiğini, o ilişkinin de yıllardır
        yazılı bir çerçeve sözleşmeye değil, iki kişi arasındaki sözlü bir
        güvene dayandığını görüyor. Satış ekibi bunu bir başarı hikâyesi
        olarak anlatırken, alıcı tarafı bunu tek bir müşteri kaybında
        cironun yarısının uçabileceği bir risk olarak okuyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Fiyat sözlü anlaşmadan sonra da değişebiliyor
      </h2>
      <p>
        Böyle bir bulgu ortaya çıktığında masaya dönülüyor. Bazen fiyat
        aşağı çekiliyor, bazen bedelin bir kısmı işlemin ilk yıllarındaki
        performansa bağlanıyor, bazen işlem hiç kapanmıyor. Niyet
        mektubundaki rakam, hukuken sadece bir müzakere zeminidir; bağlayıcı
        olan, durum tespiti tamamlandıktan sonra imzalanan nihai
        sözleşmedir. Türkiye&apos;de birleşme ve devralma hacmi rekor
        kırarken, bu sürecin belirleyicisi kaç şirketin satılabilir
        olduğu değil, kaç şirketin kendi müşteri ilişkilerini satış
        öncesinde yazılı hale getirmiş olduğu.
      </p>
    </MakaleLayout>
  );
}
