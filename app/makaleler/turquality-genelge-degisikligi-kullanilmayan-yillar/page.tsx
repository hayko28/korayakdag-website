import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "turquality-genelge-degisikligi-kullanilmayan-yillar"
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
        Ticaret Bakanlığı, Marka ve TURQUALITY Desteğine İlişkin Genelge&apos;de
        Ekim 2026 sonunda bir değişikliğe gitti. Bakanlığın resmi sayfasında 30
        Ekim tarihli güncelleme görünüyor; haberlere yansıyan başlıklar ise
        şöyle: yurt dışı Türk ürünleri fuarlarına katılımda %75 destek ve üst
        limit dışında tutulması, danışmanlıkta TÜR belgeli yazılım şartı,
        kullanılmayan yılların 5 yıllık hedef pazar süresinin sonuna bir
        defaya mahsus eklenmesi, yurt dışı alıcı ve kamu temsilcisi ağırlama
        ile bayi ve distribütörlerdeki marka odaklı teşhir alanlarının destek
        kapsamına alınması.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        En ilgi çekici madde: kullanılmayan yıllar
      </h2>
      <p>
        Marka programlarında süre, şirket harcama yapsın ya da yapmasın
        işliyor. İlk yıllarını kurumsal dönüşüme, ürün geliştirmeye ya da
        sertifikasyona harcayan bir ihracatçı, asıl pazara girdiğinde 5
        yıllık sürenin önemli kısmının bittiğini görüyordu. Kullanılmayan
        yılların sürenin sonuna eklenmesi, bu tür şirketler için planı
        baştan kurmak anlamına gelebilir.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Henüz net olmayanlar
      </h2>
      <p>
        Genelge metni tarafımca doğrulanmadı. Yürürlük tarihi, hangi
        şirketlerin geçmiş yıllar için bu haktan yararlanabileceği ve diğer
        destek oranları haberlerde net değil. Bu yüzden rakamlara dayanarak
        bütçe yapmak yerine, resmi metin yayımlandığında şirketin kendi
        durumunu tek tek kontrol etmek daha doğru.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Sonuç</h2>
      <p>
        Fuar, ağırlama ve bayi teşhir kalemleri aynı genelgede toplanınca,
        marka destekleri yalnızca bir belge programı olmaktan çıkıp, yurt
        dışı satış planının doğrudan bir parçası haline geliyor. Şirketlerin
        bu planı destek takvimine göre değil, destek takvimini kendi
        planına göre okuması gerekiyor.
      </p>
    </MakaleLayout>
  );
}
