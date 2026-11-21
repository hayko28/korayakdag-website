import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "yapay-zekayla-cv-elemede-kvkk-itiraz-hakki"
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
        Orta ölçekli bir yazılım şirketinin İK ekibi, açtığı tek bir
        pozisyona gelen 400&apos;ün üzerindeki başvuruyu bir yapay zeka
        destekli eleme aracıyla değerlendirdi. Sistem her özgeçmişi
        puanladı, alt sıradaki adayları otomatik olarak &quot;elendi&quot;
        listesine taşıdı; İK ekibi sadece üst sıradaki otuz kişiyle
        görüştü.
      </p>
      <p>
        Elenen adaylardan biri, görüşmeye neden çağrılmadığını sorduğunda
        karşısına geçen cevap net değildi. Kararın bir algoritma tarafından
        verildiğini ona hiç kimse söylememişti; aday sadece &quot;uygun
        bulunmadınız&quot; yazan bir e-posta almıştı.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        KVKK&apos;nın g bendi tam olarak bu anı düzenliyor
      </h2>
      <p>
        6698 sayılı Kanun&apos;un 11. maddesinin (g) bendi, bir kişinin
        kendisi aleyhine sonuç doğuran ve münhasıran otomatik bir sistemle
        verilen karara itiraz etme hakkını tanıyor. Bu hakkın işlemesi
        için iki şart birlikte gerçekleşmeli: karar tamamen algoritmanın
        çıktısına dayanmalı ve kişi üzerinde olumsuz, önemli bir etki
        doğurmalı. İşe alımda otomatik eleme, kredi başvurusunda otomatik
        ret, performans sisteminde otomatik düşük puan; hepsi bu tanıma
        giriyor.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        &quot;Sistem öneri veriyor, kararı biz veriyoruz&quot; savunması tek
        başına yetmiyor
      </h2>
      <p>
        Çoğu şirketin ilk refleksi bu cümleyi kurmak oluyor. Ama KVKK
        Kurulu&apos;nun yorumuna göre, bir çalışanın algoritmanın ürettiği
        listeyi şeklen onaylayıp imzalaması, &quot;münhasıran otomatik&quot;
        tanımının dışına çıkmaya yetmiyor. Asıl soru şu: kararı gerçekten
        değiştirebilecek yetkiye ve zamana sahip bir insan, o listeyi fiilen
        inceledi mi, yoksa sadece onay kutucuğunu mu işaretledi?
      </p>
      <p>
        KVKK Kurulu&apos;nun son iki yılda bu konuya özel üç ayrı rehber
        yayımlamış olması tesadüf değil. Yapay zeka araçları İK, finans ve
        pazarlama süreçlerine hızla girerken, aradaki tek fark genelde
        şirketin bu adımı belgeleyip belgelememesi oluyor.
      </p>
    </MakaleLayout>
  );
}
