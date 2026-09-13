import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "sosyal-medyada-satisin-vergi-radarina-girmesi"
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
        Instagram&apos;da bir vitrin açmak, kiralık eşya grubuna ilan
        vermek ya da bir içerik hesabı üzerinden ürün satmak, birkaç yıl
        öncesine kadar çoğu satıcının gözünde &quot;gerçek bir ticaret&quot;
        sayılmıyordu. 5 Eylül 2026 tarihli ve 33361 sayılı Resmî
        Gazete&apos;de yayımlanan 595 Sıra No&apos;lu Vergi Usul Kanunu
        Genel Tebliği, bu algıyı fiilen değiştiren bir düzenleme getirdi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kapsam artık çok daha geniş
      </h2>
      <p>
        Daha önce dijital ortamdaki bildirim yükümlülüğü büyük ölçüde
        elektronik ticaret aracı hizmet sağlayıcılarıyla sınırlıydı. Yeni
        tebliğ bu listeye sosyal ağ sağlayıcılarını, içerik
        sağlayıcılarını ve taşınır-taşınmaz mal, ürün ile hizmetlerin
        alım satımına veya kiralanmasına ilişkin ilanların
        yayınlanmasına imkân veren yer sağlayıcılarını da ekliyor. Yani
        artık sadece bilinen e-ticaret platformları değil, sosyal medya
        üzerinden ilan ve satış imkânı sunan hemen her dijital platform
        bu kapsama giriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Ayda bir, otomatik ve elektronik
      </h2>
      <p>
        Düzenlemeye göre bu platformlar, üzerlerinden gerçekleşen alım
        satım, kiralama ve reklam bilgilerini takvim yılının birer aylık
        dönemleri hâlinde, elektronik ortamda Gelir İdaresi
        Başkanlığı&apos;na bildirmek zorunda. Bu, satıcının kendi
        beyanına değil, platformun kendi kayıtlarına dayanan, otomatik
        işleyen bir bilgi akışı anlamına geliyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Küçük ölçekli satıcılar için gerçek risk
      </h2>
      <p>
        Danışmanlık pratiğinde en sık karşılaşılan varsayım şu:
        &quot;biz sadece birkaç ürün satıyoruz, hacmimiz küçük, kimsenin
        dikkatini çekmez.&quot; Oysa yeni düzenlemenin mantığı, hacme
        göre değil platforma göre işliyor. Bir hesabın satış hacmi küçük
        olsa da, üzerinden geçen ilan ve işlem bilgisi artık düzenli
        olarak idareye ulaşıyor. Sosyal medya üzerinden düzenli satış
        yapan küçük işletmelerin ve bireysel satıcıların, mükellefiyet ve
        kayıt düzenini bu değişikliğe göre şimdiden gözden geçirmesi
        gerekiyor; aksi hâlde sürpriz bir incelemeyle karşılaşma riski,
        hacimden bağımsız şekilde büyüyor.
      </p>
    </MakaleLayout>
  );
}
