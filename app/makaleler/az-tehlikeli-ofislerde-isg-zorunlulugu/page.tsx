import { Metadata } from "next";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "az-tehlikeli-ofislerde-isg-zorunlulugu"
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
        On dört kişilik bir yazılım danışmanlığı ofisinde bir çalışan,
        toplantı odasına giderken kayan bir halıya basıp bileğini kırdı.
        Küçük bir kaza, ama SGK&apos;ya bildirim zorunlu olduğu için işyeri
        kısa süre sonra bir denetimle karşılaştı. Denetmenin ilk sorusu
        şirketin ürün ya da hizmetiyle ilgili değildi: &quot;İş güvenliği
        uzmanınız ve işyeri hekiminiz kim?&quot;
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Kurucunun cevabı, iki yıl önce doğruydu
      </h2>
      <p>
        Şirket sahibi &quot;biz bir ofisiz, fabrika değiliz, bu kurallar
        bizi kapsamıyor&quot; diye cevap verdi. 6331 sayılı İş Sağlığı ve
        Güvenliği Kanunu&apos;nda bu doğruydu, ama artık değil: 1 Ocak
        2025&apos;ten itibaren az tehlikeli sınıftaki işyerleri de, çalışan
        sayısı 50&apos;nin altında olsa bile risk değerlendirmesi
        yaptırmak, iş güvenliği uzmanı ve işyeri hekimi hizmeti almak
        zorunda. Bir yazılım stüdyosu, bir danışmanlık şirketi, bir
        pazarlama ofisi de bu tanımın içinde.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Tek seferlik değil, aylık tekrarlanan bir ceza
      </h2>
      <p>
        Şirket OSGB sözleşmesi yapmamış, risk değerlendirmesi hiç
        yaptırmamıştı. Eksiklik denetimde tespit edildiğinde kesilen idari
        para cezası tek seferlik kalmadı; eksiklik giderilene kadar her ay
        yeniden uygulanan türden bir cezaydı. 2026&apos;da bu cezalar
        yüzde 25,49 oranında güncellenmiş haldeydi.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Asıl maliyet, para cezasından ibaret değildi
      </h2>
      <p>
        Kaza küçük kaldığı için dava açılmadı, ama şirketin avukatı bir
        noktayı ayrıca işaret etti: eğer kaza daha ağır olsaydı, elde
        güncel bir risk değerlendirmesi ve OSGB kaydı bulunmaması,
        mahkemede işverenin önlem almadığı yönünde güçlü bir karineye
        dönüşecekti. Kurucu, o güne kadar bu riski hiç{" "}
        <Link
          href="/blog/is-sagligi-guvenligi-isg-yukumlulukleri-isverenler-icin-2026-rehberi"
          className="text-orange-600 underline"
        >
          bütçe kalemi
        </Link>{" "}
        olarak görmemişti; artık bir OSGB sözleşmesini, kira sözleşmesi
        kadar sıradan bir gider olarak değerlendiriyor.
      </p>
    </MakaleLayout>
  );
}
