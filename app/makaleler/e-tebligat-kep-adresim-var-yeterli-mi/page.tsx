import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "e-tebligat-kep-adresim-var-yeterli-mi"
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
        Bir inşaat malzemeleri tedarikçisi, kolektif şirket ortaklığı
        olarak kurulduğu günden beri KEP (Kayıtlı Elektronik Posta)
        sözleşmesi taşıyor. Müşteri ihtarnameleri, tedarikçi bildirimleri,
        hatta bazı resmi yazışmalar yıllardır bu adres üzerinden yürüyor.
        Mali müşaviri geçen hafta e-Tebligat&apos;tan söz edince ortaklardan
        biri tereddütsüz cevap verdi: &quot;Bizim zaten KEP adresimiz var,
        bu konuyu çoktan hallettik.&quot;
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        İki sistem, iki farklı muhatap
      </h2>
      <p>
        Mali müşavirin açıklaması kısaydı: KEP, taraflar arasındaki özel
        hukuk yazışmalarını hukuken geçerli kılan bir sistem; e-Tebligat
        ise Gelir İdaresi Başkanlığı&apos;nın doğrudan vergi dairesi
        sıfatıyla kullandığı, VUK 107/A&apos;ya dayanan ayrı bir kanal.
        11 Ekim 2026 tarihli 596 sıra no&apos;lu Vergi Usul Kanunu Genel
        Tebliği, bu ikisini birbirinin yerine geçmeyen iki ayrı
        zorunluluk olarak yeniden netleştirdi. Bir şirketin KEP adresi
        olması, vergi dairesiyle muhatabiyetini hiçbir şekilde
        karşılamıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kapsam artık büyüklüğe değil, mükellefiyet türüne bakıyor
      </h2>
      <p>
        Ortaklardan ikincisinin itirazı farklıydı: &quot;Biz küçük bir
        ortaklığız, bu büyük şirketleri ilgilendirir.&quot; Oysa kapsam
        ciro veya çalışan sayısına göre değil, mükellefiyet türüne göre
        belirleniyor; kurumlar vergisi mükellefleri, ticari kazancı
        nedeniyle gerçek usulde vergilendirilen gelir vergisi
        mükellefleri ile kolektif ve adi komandit şirketlerin tamamı
        zorunlu kapsamda. Tebliğin yayımından önce mükellefiyeti
        bulunup sisteme girmemiş olanlar için son başvuru tarihi
        30 Kasım 2026.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Haberin olmaması, tebligatın yapılmadığı anlamına gelmiyor
      </h2>
      <p>
        Danışmanlık sürecinde asıl kritik nokta son bir ayrıntıda
        saklı: sisteme kayıtlı olmayan bir mükellefe gönderilen
        tebligat, kanunda belirlenen sürenin sonunda yapılmış
        sayılıyor; şirketin fiilen haberi olup olmaması bu sonucu
        değiştirmiyor. Ortaklık, üç ortağın da imzasıyla aynı gün{" "}
        <Link
          href="/blog/e-tebligat-zorunlulugu-2026-30-kasim-son-tarih"
          className="text-orange-600 underline"
        >
          dijital vergi dairesi üzerinden başvurusunu
        </Link>{" "}
        tamamladı; KEP sözleşmesini de iptal etmeden, iki sistemi bir
        arada tutarak.
      </p>
    </MakaleLayout>
  );
}
