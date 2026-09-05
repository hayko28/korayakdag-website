import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "musteri-verisi-yurt-disi-sunucuya-giden-kobi"
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
        Bir işletme sahibine &quot;müşterinizin verisi kaç farklı şirkette
        duruyor?&quot; diye sorulsa, çoğu zaman ilk cevap &quot;bende, kendi
        sistemimde&quot; olur. Gerçek tablo genelde çok daha kalabalıktır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Danışmanlık pratiğinde sık görülen tablo
      </h2>
      <p>
        Büyümekte olan bir e-ticaret işletmesi düşünülsün. Müşteri adı,
        telefonu ve adresi kargo firmasına gidiyor. Sipariş geçmişi ve
        e-posta adresi, kampanya göndermek için kullanılan yurt dışı
        sunuculu bir e-posta pazarlama aracına aktarılıyor. Fatura bilgileri
        bulut tabanlı bir muhasebe yazılımında tutuluyor. Satış ekibi ayrıca
        bir CRM üzerinden aynı müşterilerin iletişim bilgilerini takip
        ediyor. Şirket büyüdükçe bu listeye yeni bir araç daha eklenir, ama
        genelde &quot;bu veriyi kime, nereye, hangi hukuki dayanakla
        aktarıyoruz&quot; sorusunu soran kimse olmaz.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aydınlatma metni, envanterin yerini tutmuyor
      </h2>
      <p>
        Çoğu işletme KVKK uyumunu web sitesine bir aydınlatma metni koymaktan
        ibaret sanıyor. Oysa asıl belirleyici olan, hangi verinin hangi
        üçüncü tarafa, hangi amaçla ve hangi süreyle aktarıldığını gösteren
        veri işleme envanteri. Bu envanter olmadan hazırlanan aydınlatma
        metni, gerçek veri akışını yansıtmayan bir kağıt parçasından öteye
        geçmiyor — ve bir denetimde ya da veri ihlalinde ilk sorgulanan da
        tam olarak bu tutarsızlık oluyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Risk, şirket büyüdükçe azalmıyor — çoğalıyor
      </h2>
      <p>
        Küçük bir işletmenin tek bir Excel dosyasındaki müşteri listesini
        izlemek kolaydır. Ama her yeni entegrasyon, her yeni tedarikçi
        yazılımı, veri zincirine bir halka daha ekliyor.{" "}
        <Link
          href="/blog/kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026"
          className="text-orange-600 underline"
        >
          KVKK uyum sürecini
        </Link>{" "}
        &quot;bir gün otururuz, hallederiz&quot; diyerek erteleyen işletmeler,
        genelde bu zincirin kaç halkaya çıktığını fark ettiklerinde işin
        boyutuna şaşırıyor. Envanteri büyümeden önce çıkarmak, büyüdükten
        sonra geriye dönüp haritalamaktan çok daha az maliyetli.
      </p>
    </MakaleLayout>
  );
}
