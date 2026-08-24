import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "terfi-sonrasi-yoneticilige-gecerken-yapilan-3-hata"
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
        Bir şirkette en çok satış yapan temsilci, genelde bir sonraki satış
        müdürü oluyor. Mantıklı görünüyor — ama danışmanlık masasında bu
        geçişin sık sık iki kayıpla sonuçlandığını görüyorum: hem iyi bir
        satışçı, hem de zorlanan bir yönetici.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        1. Terfiyi sadece geçmiş performansa bakarak vermek
      </h2>
      <p>
        İyi satmak ile iyi yönetmek farklı yetkinlikler; biri diğerini
        garanti etmiyor. Bir temsilcinin rakamları en iyi kapatması,
        başkalarını yönlendirme, geri bildirim verme veya çatışma çözme
        becerisine sahip olduğu anlamına gelmiyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        2. Eski ekip arkadaşlarıyla sınırları netleştirmemek
      </h2>
      <p>
        Yeni yöneticinin en çok zorlandığı ilk hafta, dün eşit statüdeki bir
        arkadaşına bugün &quot;hayır&quot; diyebilmek oluyor. Bu geçiş açıkça
        konuşulmadığında, hem yeni yönetici hem de eski ekip arkadaşları
        belirsizlik içinde kalıyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        3. Unvanı verip eğitimi atlamak
      </h2>
      <p>
        Bir kişiye &quot;artık yöneticisin&quot; demek, onu bir gecede
        yönetici yapmıyor. Geri bildirim verme, toplantı yönetme, hedef
        belirleme gibi beceriler doğuştan gelmiyor — öğretilmesi gereken
        şeyler. Bu eğitim atlandığında, yeni yönetici genelde eski
        alışkanlıklarına, yani bizzat satış yapmaya geri dönüyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bu üç noktayı gözden geçiren şirketler, terfi ettirdikleri kişiyi
        kaybetmek yerine gerçekten kazanıyor — hem yeni bir yönetici, hem de
        onun yerini dolduracak bir satış kültürü kazanıyorlar.
      </p>
    </MakaleLayout>
  );
}
