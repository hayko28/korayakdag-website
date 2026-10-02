import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "teklif-sonrasi-takip-sureci"
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
        Bir teklifin kaybedilme sebebi çoğu zaman fiyat ya da içerik değil,
        gönderildikten sonraki sessizliğin yönetilme biçimi. Danışmanlık
        pratiğinde görülen tipik tablo şu: teklif özenle hazırlanır, doğru
        kişiye gönderilir, sonra iş geliştirme ekibi bir sonraki adımı
        &quot;müşteri dönene kadar&quot; beklemeye bırakır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Takip neden kişinin hafızasına kalıyor
      </h2>
      <p>
        Çoğu küçük ve orta ölçekli şirkette teklif sonrası takip, bir CRM
        kaydı değil, satış temsilcisinin kendi notu ya da hafızasıdır.
        Temsilci yoğun bir haftaya girdiğinde ya da izne çıktığında teklif
        sessizce rafa kalkar. Müşteri tarafında da fiilen bir cevap yoktur,
        çünkü soran olmamıştır. Zamanla bu, &quot;müşteri ilgilenmedi&quot;
        diye kayıtlara geçer; oysa çoğu zaman kimse sormamıştır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Üç aşamalı bir takip planı
      </h2>
      <p>
        Düzenli iş üreten ekiplerde takip, teklif gönderilmeden önce
        tasarlanmış üç ayrı temasla ilerler. İlk temas, gönderimden iki ila
        üç gün sonra, teklifin ulaşıp ulaşmadığını ve ilk izlenimi sormak
        içindir; satış değil, teyit amaçlıdır. İkinci temas, bir hafta
        sonra, tekliften çıkan somut bir soruyu ya da örneği paylaşarak
        konuşmayı yeniden açar. Üçüncü temas, iki hafta sonra, net bir karar
        tarihi ya da alternatif bir kapsam önerisiyle süreci bir sonuca
        bağlar.
      </p>
      <p>
        Bu üç temasın her biri farklı bir içerikle gelir, aynı
        &quot;merhaba, haberiniz var mı&quot; mesajının tekrarı değildir.
        Müşteri açısından da anlamı değişir: baskı yapan değil, süreci
        ciddiye alan bir taraf izlenimi bırakır.
      </p>

      <p>
        Teklif metninin kalitesi satışın yarısını oluşturur. Diğer yarısı,
        gönderildikten sonra kimsenin görmediği o sessiz günlerde saklıdır.
      </p>
    </MakaleLayout>
  );
}
