import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MakaleLayout from "@/components/MakaleLayout";
import { MAKALELER } from "@/lib/makale-data";

const meta = MAKALELER.find(
  (m) => m.slug === "aile-sirketinde-eksik-kalan-yazili-kural"
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
        İki kuşaktır ayakta duran bir aile şirketinde kurucu vefat edince,
        şirkette hiç çalışmamış bir kardeşin avukatı devreye giriyor: pay
        oranı net, ama şirketten &quot;kâr payı mı, hisse mi, hangi
        değerleme üzerinden&quot; sorularının hiçbirinin yazılı bir cevabı
        yok. Danışmanlık masasında bu tablo istisna değil, kural — büyüyen
        her aile şirketinin er ya da geç karşılaştığı bir sınav.
      </p>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/linkedin/miras-kavgasi-vs-aile-anayasasi.png"
          alt="Miras kavgası ile aile anayasasının karşılaştırması: kural yoksa kavga kaçınılmaz, kural varsa gelecek güvencede"
          width={1536}
          height={1024}
          className="w-full"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Sorun aile sevgisi değil, yazılı kural eksikliği
      </h2>
      <p>
        Kurucu hayattayken her şey sözlü anlaşmayla yürür: kim yönetir, kim
        ne kadar alır, yeni nesil ne zaman şirkete girer. Bu sistem, tek bir
        kişi kararı verdiği sürece işler. Kurucu ortadan kalktığı ya da iş
        göremez hale geldiği an, aynı sözlü anlaşma artık bağlayıcı değil —
        herkesin hafızasında farklı bir versiyonu var. Uzmanların altını
        çizdiği gibi, aile uyumu iyi niyetle korunur ama sadece iyi niyetle
        sürdürülemez.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Rakamlar bunu doğruluyor
      </h2>
      <p>
        PwC&apos;nin küresel aile şirketleri araştırmasına göre şirketlerin
        yalnızca yüzde 33&apos;ü ikinci nesle, yüzde 12&apos;si üçüncü nesle
        sağlıklı bir geçiş yapabiliyor. Standard Chartered&apos;ın 2026
        raporu, dünya genelinde aile şirketlerinin yaklaşık yüzde 70&apos;inin
        elinde hiçbir halefiyet planı olmadığını gösteriyor. Türkiye
        tarafında da tablo farklı değil: ortaklığın giderilmesi davalarının
        sayısı 2014&apos;te yaklaşık 25 bin iken 2021&apos;de 54 binin
        üzerine çıktı. Kapanan köklü aile şirketleri üzerine yapılan bir
        incelemede, kapanma nedenlerinin yüzde 43&apos;ü kardeş kavgası,
        yüzde 19&apos;u miras kavgası olarak kayda geçti.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aile anayasası ne içermeli
      </h2>
      <p>
        Aile anayasası bir hukuk metni değil, aile ile şirket arasındaki
        sınırları önceden çizen bir mutabakat metni. Doğru kurulmuş bir
        anayasada en az şu altı başlık net olmalı:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong className="text-[#071A2F]">Ortaklık ve hisse dağılımı</strong>{" "}
          — şirkette çalışmayan bir aile üyesi hangi koşulda pay sahibi
          kalabilir, hangi koşulda hissesi devredilir.
        </li>
        <li>
          <strong className="text-[#071A2F]">Yönetim ve görev dağılımı</strong>{" "}
          — kimin hangi alanda karar yetkisi olduğu, kimin imza attığı
          baştan tarif edilir.
        </li>
        <li>
          <strong className="text-[#071A2F]">Aileye katılım kriterleri</strong>{" "}
          — ikinci ve üçüncü nesil şirkete hangi kademeden, hangi eğitim ve
          deneyim şartıyla girer.
        </li>
        <li>
          <strong className="text-[#071A2F]">Karar alma mekanizmaları</strong>{" "}
          — hangi konular oy birliği, hangileri çoğunluk oyuyla, hangileri
          tek başına yönetici kararıyla karara bağlanır.
        </li>
        <li>
          <strong className="text-[#071A2F]">Anlaşmazlık çözüm yolları</strong>{" "}
          — aile içi bir uyuşmazlık mahkemeye gitmeden önce hangi aşamalardan
          (aile meclisi, arabuluculuk, hakem heyeti) geçer.
        </li>
        <li>
          <strong className="text-[#071A2F]">
            Değerleme ve nesiller arası devir planı
          </strong>{" "}
          — bir ortak ayrılmak istediğinde ya da miras süreci başladığında
          hangi değerleme yöntemi esas alınır, devir hangi takvimde yapılır.
        </li>
      </ol>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">
        Aile anayasası hazırlama süreci nasıl işliyor
      </h2>
      <p>
        Bu metnin sağlıklı çıkması için ailenin kendi içinden değil, tarafsız
        bir danışmanlık desteğiyle yürütülmesi gerekir — çünkü aynı masada
        hem baba hem evlat hem de şirkette hiç çalışmamış bir kardeş varken,
        metni yazan kişinin kimseye yakın durmaması gerekir. Sistem Global
        Danışmanlık bünyesinde yürütülen bu çalışmalar dört adımdan oluşur:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong className="text-[#071A2F]">Bireysel görüşmeler</strong> —
          her aile üyesiyle ayrı ayrı, kimsenin duymadığı bir ortamda
          konuşulur; beklenti, endişe ve önceki anlaşmazlıklar tek tek
          dinlenir.
        </li>
        <li>
          <strong className="text-[#071A2F]">Mevcut yapının analizi</strong>{" "}
          — şirketin pay dağılımı, yönetim kurulu, varsa mevcut ortaklık
          sözleşmesi ve şirket değeri incelenir.
        </li>
        <li>
          <strong className="text-[#071A2F]">Taslak metnin oluşturulması</strong>{" "}
          — bireysel görüşmelerden çıkan ortak zemin, yukarıdaki altı başlığı
          kapsayan tek bir taslakta birleştirilir.
        </li>
        <li>
          <strong className="text-[#071A2F]">Aile toplantısı ve mutabakat</strong>{" "}
          — taslak ailenin tamamının önünde okunur, itiraz edilen maddeler
          birlikte revize edilir ve son metin imzalanır.
        </li>
      </ol>
      <p>
        Süreç genellikle birkaç hafta sürer; aceleye getirilecek bir iş
        değildir, çünkü asıl amaç hızlı bir belge değil, herkesin gerçekten
        arkasında durduğu bir mutabakattır.
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#071A2F]">Kısacası</h2>
      <p>
        Bir aile anayasası, kurucu hâlâ hayattayken ve herkes hâlâ aynı
        masada otururken yazılmalı — devir süreci başladıktan sonra
        yazılmaya çalışılan her kural, taraflardan birinin çıkarına
        yontulmuş gibi görünür. Yazılı kural olmadığında aile şirketini
        koruyan tek şey, herkesin aynı anda iyi niyetli kalması oluyor; bu
        da en kırılgan güvence. Bu konuda destek almak isterseniz{" "}
        <Link
          href="/#contact"
          className="font-semibold text-orange-600 hover:underline"
        >
          benimle iletişime geçebilirsiniz
        </Link>
        .
      </p>
    </MakaleLayout>
  );
}
