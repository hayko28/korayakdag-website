import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "markanin-degeri-bilancoda-neden-gorunmez"
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
        Bir şirketin en değerli varlığı, çoğu zaman mali tablolarında hiç
        yazmıyor. Bu durum bir muhasebe hatası değil, kuralın kendisi; ve
        çoğu kurucu bunu ancak şirketini satmaya karar verdiği gün fark
        ediyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Masadaki rakam, kurucunun kafasındaki rakam değil
      </h2>
      <p>
        Danışmanlık sürecinde sık rastlanan bir sahne şöyle ilerliyor: lojistik
        alanında on beş yıl boyunca aynı isimle çalışan bir şirket, bölgesinde
        güvenilir bir marka haline geliyor; büyük müşteriler sözleşmesini
        yenilerken artık fiyat değil, isim üzerinden karar veriyor. Kurucu
        şirketi satmaya karar verdiğinde, bir yatırımcı bilançoyu masaya
        koyuyor. Araçlar, depo, alacaklar, nakit toplanıyor; ortaya çıkan
        rakam, kurucunun aklındaki rakamın bir kısmı kadar bile değil. Marka
        hiçbir yerde görünmüyor, çünkü resmi olarak hiçbir yerde kayıtlı değil.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kural basit, sonucu şaşırtıcı
      </h2>
      <p>
        Türkiye Muhasebe Standardı TMS 38, işletmenin kendi içinde zaman
        içinde yarattığı markaları maddi olmayan duran varlık olarak
        tanımıyor. Gerekçesi teknik: yıllarca yapılan reklam, tanıtım ve
        pazarlama harcaması, işletmenin genel faaliyet giderinden güvenilir
        şekilde ayrıştırılamıyor; bu yüzden markanın maliyeti objektif olarak
        ölçülemiyor sayılıyor. Marka değeri bilançoya ancak başka bir şirket
        satın alındığında, işlem fiyatının bir parçası olarak giriyor. Yani
        aynı marka, kendi kurucusunun elindeyken sıfır değerinde, bir
        başkasının eline geçtiği anda ise gerçek değerinde.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Müzakere masasındaki asimetri
      </h2>
      <p>
        Bu kural, satış ve ortaklık müzakerelerinde tuhaf bir dengesizlik
        yaratıyor. Satan taraf markanın değerini hissediyor ama elinde bunu
        destekleyen bir rakam yok; alan taraf ise bilançoda görmediği bir
        kalem için fazla ödeme yapmak istemiyor. Taraflar aynı şirketi,
        iki farklı gerçeklikten değerlendiriyor. Bağımsız bir marka değerleme
        çalışması, ISO 10668 çerçevesinde hukuki ve finansal analizi bir
        arada ele alarak bu boşluğu rakamla kapatıyor; markanın ne kadarının
        gerçek ciro ve pazar payına, ne kadarının kurucunun iyimser
        tahminine ait olduğunu ortaya koyuyor.
      </p>

      <p>
        Markanızı başkasına satmadan, lisanslamadan veya teminat göstermeden
        önce sorulması gereken soru şu: bilançonuzda sıfır görünen, ama
        gerçekte şirketinizin en pahalı parçası olan bir şey var mı?
      </p>

      <p>
        Bu konuyu daha ayrıntılı ele aldığımız{" "}
        <Link
          href="/blog/marka-degerleme-brand-valuation-nedir-sirket-degerlemesinden-farki"
          className="text-orange-600 underline"
        >
          Marka Değerleme (Brand Valuation) Nedir?
        </Link>{" "}
        yazısında ISO 10668 standardının şart koştuğu üç analizi ve yöntemleri
        bulabilirsiniz.
      </p>
    </MakaleLayout>
  );
}
