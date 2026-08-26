import { Metadata } from "next";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "asil-toplanti-koridorda-yapiliyor"
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
        Bir toplantı odasının kapısı kapandığında, aslında hiçbir şey bitmiş
        olmuyor — tam tersine, çoğu zaman asıl konuşma o andan sonra
        başlıyor. Danışmanlık literatüründe buna &quot;toplantı sonrası
        toplantı&quot; deniyor: masada söylenmeyen itirazların, gerçek
        endişelerin ve dürüst yorumların koridorda, asansörde ya da kapıdan
        çıkarken üç adımlık bir mesafede ortaya döküldüğü an.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Neden masada değil de koridorda?
      </h2>
      <p>
        Bir orta ölçekli üretim firmasında yürütülen bir strateji
        değerlendirmesinde bu durum gözle görülür şekilde tekrar etti:
        toplantı odasında bütçe kararına kimse itiraz etmedi, herkes başını
        salladı. Kapıdan çıkar çıkmaz iki departman yöneticisi arasında geçen
        kısa sohbette gerçek görüş ortaya çıktı — bütçenin gerçekçi olmadığı,
        ama kimsenin ilk itiraz eden olmak istemediği.
      </p>
      <p>
        Bunun nedeni basit: masada hiyerarşi var, kayıt altına alınma
        endişesi var, &quot;ilk konuşan ben olmayayım&quot; refleksi var.
        Koridorda bunların hiçbiri yok — sadece iki kişi ve serbestçe
        söylenen bir cümle.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sorun toplantıda değil, toplantı kültüründe
      </h2>
      <p>
        Bir şirketin en dürüst geri bildirim kanalının koridor olması,
        aslında masadaki toplantı kültürüne dair ciddi bir uyarı. Katılımcı
        sayısı çok kalabalık olan, hiyerarşinin en üstündeki kişi ilk
        konuşan olan ya da itirazın &quot;olumsuzluk&quot; olarak
        algılandığı toplantılarda bu ayrışma daha da büyüyor.
      </p>
      <p>
        Pratikte işe yarayan birkaç yöntem var: karar vericinin görüşünü en
        son açıklaması, herkesin görüşünü toplantıdan önce yazılı olarak
        alması ya da toplantıyı küçük gruplara bölmek. Amaç koridoru
        kapatmak değil — koridordaki dürüstlüğün bir kısmını masaya
        taşıyabilmek.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir sonraki toplantıda dikkat edilmesi gereken soru şu olabilir:
        masada mı, yoksa kapıdan çıkarken mi daha dürüst bir konuşma
        yapılıyor? Cevap ikincisiyse, mesele gündemde değil, o toplantı
        odasına kimin ne zaman konuştuğunda.
      </p>
    </MakaleLayout>
  );
}
