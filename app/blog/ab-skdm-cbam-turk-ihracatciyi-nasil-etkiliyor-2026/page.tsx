import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "SKDM (CBAM) Türk İhracatçıyı Nasıl Etkiler? 2026 Rehberi | Koray Akdağ",
  description:
    "AB Sınırda Karbon Düzenleme Mekanizması'nda (SKDM/CBAM) mali yükümlülük 1 Ocak 2026'da başladı. Sertifikayı AB'deki ithalatçı alıyor ama demir-çelik, alüminyum, çimento ve gübre ihracatçısı Türk şirketler neden şimdiden hazırlanmalı? Kapsam, takvim, 50 ton muafiyeti ve yapılması gerekenler.",
  keywords: [
    "SKDM nedir",
    "CBAM Türkiye'ye etkisi",
    "Sınırda Karbon Düzenleme Mekanizması",
    "CBAM sertifikası kim alıyor",
    "CBAM 2026",
    "CBAM demir çelik ihracatı",
    "CBAM gömülü emisyon",
    "AB karbon vergisi ihracatçı",
  ],
  alternates: {
    canonical: "/blog/ab-skdm-cbam-turk-ihracatciyi-nasil-etkiliyor-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="SKDM (CBAM) Sertifikasını İthalatçı Alıyor, Peki Türk İhracatçı Neden Şimdiden Hazırlanmalı?"
      description="AB Sınırda Karbon Düzenleme Mekanizması'nda (SKDM/CBAM) mali yükümlülük dönemi 1 Ocak 2026'da başladı. Sertifika alma ve teslim etme yükümlülüğü hukuken AB'deki ithalatçıda; ama demir-çelik, alüminyum, çimento, gübre, elektrik ve hidrojen sektörlerinde AB'ye satış yapan Türk üretici ve ihracatçılar için asıl risk, gömülü emisyon verisini doğru sunamamanın getireceği rekabet dezavantajı."
      category="SÜRDÜRÜLEBİLİRLİK • SKDM (CBAM) • 2026"
      date="Kasım 2026"
      readTime="13 Dakika"
      slug="ab-skdm-cbam-turk-ihracatciyi-nasil-etkiliyor-2026"
      coverImage="https://images.unsplash.com/photo-1697281679321-a9ce55ce0a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="SKDM (CBAM) Maruziyetinizi Birlikte Değerlendirelim"
      ctaText="AB'ye demir-çelik, alüminyum, çimento, gübre, elektrik veya hidrojen ihraç ediyorsanız, ürünlerinizin SKDM kapsamına girip girmediğini, gömülü emisyon verinizin hazır olup olmadığını ve karbon ayak izi/TSRS hazırlığınızı birlikte değerlendirmek için bizimle iletişime geçin."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ SKDM (CBAM) sertifikasını hukuken AB&apos;deki <strong>ithalatçı</strong> satın alıyor ve teslim ediyor, Türkiye&apos;deki üretici/ihracatçının doğrudan bir sertifika satın alma yükümlülüğü yok.</li>
          <li>✔ Ama 1 Ocak 2026&apos;dan itibaren mali yükümlülük dönemi başladı; AB&apos;deki alıcınız artık ürününüzün gömülü karbon emisyonunu bilmek, raporlamak ve bunun için sertifika teslim etmek zorunda.</li>
          <li>✔ Kapsamdaki sektörler: demir-çelik, alüminyum, çimento, gübre, elektrik ve hidrojen.</li>
          <li>✔ Gerçek emisyon verisi yerine AB&apos;nin varsayılan (benchmark) değerleri kullanılırsa, alıcının maliyeti 2026&apos;da %10, 2027&apos;de %20, 2028&apos;de %30 daha fazla hesaplanıyor; bu da sizi fiyat ve tercih açısından dezavantajlı hâle getirebiliyor.</li>
          <li>✔ İthalatçı başına yıllık 50 tonun altındaki ithalat (belirli sektörlerde) muaf; bu eşik 2025&apos;teki basitleştirme (Omnibus) paketiyle geldi.</li>
          <li>✔ Sertifikaların gerçek alım satımı Şubat 2027&apos;de başlıyor, 2026 ithalatına ait beyan ve teslim son tarihi 30 Eylül 2027.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. SKDM (CBAM) Nedir, Neden Çıkarıldı?
          </Link>
          <Link href="#kim-yukumlu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Sertifika Yükümlülüğü Gerçekten Kimde?
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 2026 ve Sonrası İçin Takvim
          </Link>
          <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hangi Sektör ve Ürünler Kapsamda?
          </Link>
          <Link href="#muafiyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. 50 Ton Muafiyeti ve 2025 Basitleştirme Paketi
          </Link>
          <Link href="#asil-risk" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Türk İhracatçı İçin Asıl Risk Nerede?
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Şirketler Şimdi Ne Yapmalı?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Bu Konu Kimleri İlgilendiriyor?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. SKDM (CBAM) Nedir, Neden Çıkarıldı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Sınırda Karbon Düzenleme Mekanizması (İngilizce kısaltmasıyla CBAM,
          Carbon Border Adjustment Mechanism), Avrupa Birliği&apos;nin kendi
          sanayisindeki karbon maliyetini (AB Emisyon Ticaret Sistemi
          kapsamında şirketlerin ödediği karbon fiyatını) AB dışından gelen
          ithal ürünlere de yansıtmasını sağlayan bir düzenleme. Amaç,
          &quot;karbon kaçağı&quot; denilen riski önlemek: AB&apos;deki
          üreticiler karbon maliyetine tabiyken, AB dışındaki üreticiler
          bu maliyeti ödemiyorsa, AB sanayisi rekabet dezavantajına
          uğruyor ve üretim karbon fiyatlandırmasının daha gevşek olduğu
          ülkelere kayıyor. SKDM, ithal ürünlerin gömülü karbonuna da
          benzer bir maliyet uygulayarak bu dengesizliği kapatmayı
          hedefliyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Düzenlemenin nihai metni Avrupa Parlamentosu ve Konseyi
          tarafından 10 Mayıs 2023&apos;te imzalandı. 1 Ekim 2023&apos;ten
          31 Aralık 2025&apos;e kadar süren geçiş döneminde AB
          ithalatçılarının yalnızca gömülü emisyon verisini raporlama
          yükümlülüğü vardı; herhangi bir mali yük veya sertifika alım
          satımı söz konusu değildi. Bu geçiş dönemi sona erdi ve 1 Ocak
          2026 itibarıyla kesin (tanımlanmış) uygulama dönemine geçildi.
        </p>
      </section>

      {/* 2. KİM YÜKÜMLÜ */}
      <section id="kim-yukumlu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Sertifika Yükümlülüğü Gerçekten Kimde?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          SKDM mevzuatının hukuki muhatabı Türkiye&apos;deki üretici değil,
          AB&apos;deki ithalatçıdır. Yetkilendirilmiş SKDM beyan sahibi
          sıfatıyla hareket eden AB&apos;deki alıcı, ithal ettiği ürünün
          gömülü emisyonuna karşılık gelen sayıda SKDM sertifikasını satın
          alır ve teslim eder. Türkiye&apos;deki tesis operatörünün SKDM
          kapsamında doğrudan bir sertifika satın alma veya teslim etme
          yükümlülüğü bulunmuyor.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: &quot;Beni İlgilendirmiyor&quot; Yanılgısı
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            Sertifikayı ithalatçının alması, Türk üretici/ihracatçının bu
            düzenlemeden hiç etkilenmeyeceği anlamına gelmiyor. İki ayrı
            şeyi birbirine karıştırmamak gerekiyor:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>Hukuki yükümlülük</strong>: Sertifika alıp teslim
              etme işlemi AB&apos;deki ithalatçıya ait, bu doğru.
            </li>
            <li>
              <strong>Ticari sonuç</strong>: AB&apos;deki alıcının ödeyeceği
              sertifika maliyeti, sizin ürününüzün gömülü emisyonuna göre
              hesaplanıyor. Siz doğrulanmış, gerçek emisyon verisi
              sunamazsanız, alıcı AB&apos;nin daha yüksek varsayılan
              (benchmark) değerlerini kullanmak zorunda kalıyor; bu da
              alıcının maliyetini artırıyor ve sizi, gerçek veri sunan
              rakiplerinize kıyasla daha az tercih edilir hâle getiriyor.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 2026 ve Sonrası İçin Takvim
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Ticaret Bakanlığı&apos;nın güncel açıklamalarına göre SKDM&apos;nin
          uygulama takvimi şu şekilde:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Tarih</th>
                <th className="p-5">Ne Oluyor?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">1 Ekim 2023 - 31 Aralık 2025</td>
                <td className="p-5">Geçiş dönemi: yalnızca gömülü emisyon raporlaması, mali yükümlülük yok.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">1 Ocak 2026</td>
                <td className="p-5">Kesin uygulama dönemi başlıyor: ithalatçılar sertifika satın alıp teslim etmekle yükümlü oluyor.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Şubat 2027</td>
                <td className="p-5">2026 ithalatlarına ait sertifikaların satışı başlıyor.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">30 Eylül 2027</td>
                <td className="p-5">2026 yılı ithalatlarına ilişkin SKDM beyannamesinin ve sertifika teslimatının son tarihi.</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">2034</td>
                <td className="p-5">AB ETS&apos;deki ücretsiz tahsisatlar tamamen kalkıyor; SKDM sertifika yükü kademeli olarak tam karbon maliyetine ulaşıyor.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-lg leading-9 text-gray-700">
          2026 ithalatları için çeyreklik sertifika bulundurma (elde tutma)
          zorunluluğu uygulanmıyor; bu zorunluluk 2027 ithalatlarından
          itibaren devreye giriyor ve her çeyrek sonunda yıl içi ithalatın
          yaklaşık yarısına denk gelen sertifikanın elde tutulmasını
          gerektiriyor. 2026 ithalatlarının sertifika fiyatı, 2026 yılı
          içinde AB ETS&apos;de oluşan karbon fiyatının çeyreklik
          ortalamasına göre belirlenecek; 2027 ve sonrasında ise fiyat
          haftalık olarak, önceki haftanın AB ETS ortalamasına göre
          güncellenecek.
        </p>
      </section>

      {/* 4. KAPSAM */}
      <section id="kapsam" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hangi Sektör ve Ürünler Kapsamda?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          SKDM şu an için altı sektör grubunu kapsıyor:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li>Demir ve çelik</li>
          <li>Alüminyum</li>
          <li>Çimento</li>
          <li>Gübre</li>
          <li>Elektrik</li>
          <li>Hidrojen</li>
        </ul>
        <p className="mt-6 mb-6 text-lg leading-9 text-gray-700">
          Emisyon hesabında da sektörler arasında fark var: demir-çelik ve
          alüminyumda yalnızca üretim sürecindeki <strong>doğrudan
          emisyonlar</strong> dikkate alınırken, çimento ve gübrede
          üretimde kullanılan elektrik gibi <strong>dolaylı
          emisyonlar</strong> da hesaba katılıyor. Bu fark, aynı ürünü
          üreten ama farklı enerji kaynağı kullanan şirketler arasında
          önemli maliyet farkları doğurabiliyor.
        </p>
      </section>

      {/* 5. MUAFİYET */}
      <section id="muafiyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. 50 Ton Muafiyeti ve 2025 Basitleştirme Paketi
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Avrupa Komisyonu, Şubat 2025&apos;te SKDM&apos;yi hem AB
          idaresi hem de ithalatçılar için basitleştiren bir paket
          (Omnibus I-II) önerdi. Avrupa Parlamentosu ve Konseyi arasındaki
          müzakereler sonucunda değişiklik, 17 Ekim 2025 tarihli Resmî
          Gazete&apos;de (OJ L, 2025/2083) yayımlanarak 20 Ekim 2025&apos;te
          yürürlüğe girdi. Paketin ihracatçıları en çok ilgilendiren
          unsuru, önceki &quot;konsinye başına 150 avro&quot; değer
          muafiyetinin yerine getirilen <strong>ithalatçı başına yıllık
          kümülatif 50 ton net kütle eşiği</strong>.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu eşik, bir AB ithalatçısının takvim yılı içinde demir-çelik,
          alüminyum, gübre ve çimento sektörlerindeki SKDM kapsamı
          ürünlerden toplam 50 tonun altında ithalat yapması durumunda,
          o ithalatçıyı SKDM yükümlülüklerinden muaf tutuyor. Elektrik ve
          hidrojen bu kütle bazlı muafiyetin kapsamı dışında tutuluyor.
          Eşiğin aşılması hâlinde dikkat edilmesi gereken önemli bir
          ayrıntı var: ithalatçı yıl içinde 50 tonu aştığı anda, o yıl
          içinde ithal ettiği <strong>tüm</strong> miktar (eşiğin altında
          kalan kısım dahil) SKDM yükümlülüğüne tabi oluyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en çok gözden kaçan nokta, 50 ton eşiğinin ihracatçı
            değil ithalatçı bazında ve kümülatif olarak hesaplanmasıdır.
            Aynı Türk üretici, birden fazla AB alıcısına küçük miktarlarda
            satış yapıyorsa, her bir alıcı kendi toplam yıllık
            ithalatına göre muaf olabilir veya olmayabilir; bu durum
            ihracatçının kontrolünde değildir ve alıcıdan alıcıya
            değişir. Bu nedenle &quot;biz küçük hacimde satıyoruz,
            muafız&quot; genellemesi yapmak yanıltıcı olur; her alıcının
            kendi durumunu değerlendirmesi gerekir.
          </p>
        </div>
      </section>

      {/* 6. ASIL RİSK */}
      <section id="asil-risk" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Türk İhracatçı İçin Asıl Risk Nerede?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          AB&apos;deki alıcı, ithal ettiği ürünün gömülü emisyonunu iki
          yoldan hesaplayabilir: üreticiden alınan gerçek, doğrulanmış
          ölçüm verisiyle veya AB&apos;nin belirlediği varsayılan
          (benchmark) değerlerle. Gerçek veri sunulamadığında varsayılan
          değerler kullanılıyor ve bu değerlere, gerçek ölçümü teşvik
          etmek amacıyla ilave bir güvenlik marjı ekleniyor: 2026
          ithalatları için %10, 2027 için %20, 2028 için %30 (gübre
          sektöründe bu marj %1 olarak uygulanıyor).
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu marj, pratikte şu anlama geliyor: gerçek emisyon verinizi
          doğrulatıp sunamıyorsanız, AB&apos;deki alıcınız sizin
          ürününüz için daha yüksek bir sertifika maliyeti hesaplamak
          zorunda kalıyor. Alıcı bu ek maliyeti ya kendi kâr marjından
          karşılıyor ya da fiyat pazarlığına yansıtıyor ya da gerçek
          emisyon verisi sunabilen başka bir tedarikçiye yöneliyor. Her
          üç durumda da sonuç, veri sunamayan Türk üretici için bir
          rekabet dezavantajı.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Emisyon verisinin AB tarafında geçerli sayılabilmesi için,
          verinin AB akreditasyon otoritelerince akredite edilmiş bir
          doğrulayıcı tarafından doğrulanması gerekiyor; üçüncü
          ülkelerdeki (Türkiye dahil) tüzel kişiler de bu doğrulayıcı
          statüsü için başvurabiliyor. Ayrıca Türkiye&apos;de üretim
          sürecinde fiilen ödenmiş bir karbon maliyeti varsa (örneğin
          Türkiye Emisyon Ticaret Sistemi kapsamında), bu maliyet
          doğrulanabildiği ölçüde AB&apos;deki alıcının sertifika
          yükümlülüğünden düşülebiliyor.
        </p>
      </section>

      {/* 7. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Şirketler Şimdi Ne Yapmalı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Sertifika alım satımı henüz başlamadı (Şubat 2027), ama
          hazırlığı bu tarihe bırakmak rekabet açısından riskli. Önerilen
          adımlar sırasıyla şöyle:
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-xl font-bold">Maruziyeti Belirleyin</h3>
            <p className="mt-3 text-sm text-gray-600">
              Ürün gümrük tarife kodlarınızın (GTİP) SKDM ekindeki kapsam
              listesiyle örtüşüp örtüşmediğini netleştirin.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-xl font-bold">Gömülü Emisyonu Hesaplayın</h3>
            <p className="mt-3 text-sm text-gray-600">
              Üretim sürecinizin doğrudan (ve ilgili sektörlerde dolaylı)
              emisyonunu AB metodolojisine uygun şekilde hesaplayın.{" "}
              <Link href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026" className="text-orange-600 underline">
                Karbon ayak izi hesaplama rehberi
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-xl font-bold">Veriyi Doğrulatın</h3>
            <p className="mt-3 text-sm text-gray-600">
              AB akreditasyon otoritelerince akredite bir doğrulayıcıya
              verinizi doğrulatarak, alıcınıza varsayılan değer yerine
              gerçek veri sunabilir hâle gelin.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-xl font-bold">Alıcılarla İletişime Geçin</h3>
            <p className="mt-3 text-sm text-gray-600">
              AB&apos;deki alıcılarınızın SKDM beyan süreçlerinde hangi
              veriyi, hangi formatta istediğini önceden öğrenin; bu talep
              giderek sözleşme şartı hâline geliyor.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">5️⃣</div>
            <h3 className="text-xl font-bold">Raporlama Altyapısını Kurun</h3>
            <p className="mt-3 text-sm text-gray-600">
              TSRS kapsamındaysanız sürdürülebilirlik raporlamanızla SKDM
              verinizi aynı altyapıda birleştirin.{" "}
              <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="text-orange-600 underline">
                TSRS raporlama zorunluluğu rehberi
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">6️⃣</div>
            <h3 className="text-xl font-bold">Destek Programlarını Takip Edin</h3>
            <p className="mt-3 text-sm text-gray-600">
              Yeşil dönüşüm yatırımlarınız için Ticaret Bakanlığı&apos;nın
              Responsible® programı gibi mevcut destekleri değerlendirin.{" "}
              <Link href="/blog/yesil-mutabakata-uyum-projesi-destegi-responsible-programi-2026" className="text-orange-600 underline">
                Responsible® programı rehberi
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 8. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Bu Konu Kimleri İlgilendiriyor?
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li>Demir-çelik, alüminyum, çimento, gübre, elektrik veya hidrojen üretip AB&apos;ye satan şirketler</li>
          <li>Bu ürünleri ara girdi olarak kullanıp nihai ürününü AB&apos;ye ihraç eden imalatçılar (gömülü emisyon zincirin tüm halkalarını etkiler)</li>
          <li>AB&apos;deki alıcılardan emisyon verisi talebiyle yeni karşılaşan KOBİ tedarikçiler</li>
          <li>TSRS kapsamında sürdürülebilirlik raporlaması yapmakla yükümlü şirketler</li>
          <li>Yeşil dönüşüm yatırımı planlayan ve bunu ihracat rekabetçiliğiyle ilişkilendirmek isteyen üretici şirketler</li>
        </ul>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <a href="https://ticaret.gov.tr/dis-iliskiler/yesil-mutabakat/sinirda-karbon-duzenleme-mekanizmalari/avrupa-birligi-sinirda-karbon-duzenleme-mekanizmasi/ab-skdm-hakkinda-genel-bilgiler-ve-uygulama-mevzuati" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              T.C. Ticaret Bakanlığı - AB SKDM Hakkında Genel Bilgiler ve Uygulama Mevzuatı
            </a>
          </li>
          <li>
            <a href="https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              European Commission - Carbon Border Adjustment Mechanism (resmî sayfa)
            </a>
          </li>
          <li>
            <a href="https://eur-lex.europa.eu/eli/reg/2025/2083/oj" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Regulation (EU) 2025/2083 - CBAM basitleştirme (Omnibus) değişikliği, OJ L, 17.10.2025
            </a>
          </li>
          <li>
            <a href="https://www.europarl.europa.eu/news/en/press-room/20250905IPR30181/cbam-parliament-adopts-simplifications-to-the-eu-carbon-leakage-instrument" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              European Parliament - CBAM basitleştirme paketinin kabulüne ilişkin duyuru
            </a>
          </li>
        </ul>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              SKDM (CBAM) sertifikasını kim satın alıyor, Türk ihracatçı mı AB&apos;deki ithalatçı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Sertifikayı hukuken AB&apos;deki ithalatçı (yetkilendirilmiş
              SKDM beyan sahibi) satın alıp teslim ediyor. Türkiye&apos;deki
              üretici veya ihracatçının doğrudan bir sertifika satın alma
              yükümlülüğü yok. Ancak sertifikanın maliyeti, sizin
              ürününüzün gömülü emisyon verisine göre hesaplandığı için,
              sonuç dolaylı olarak sizi de etkiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              CBAM mali yükümlülüğü ne zaman başladı?
            </h3>
            <p className="leading-8 text-gray-700">
              1 Ocak 2026 itibarıyla. Bu tarihten önce (1 Ekim 2023 - 31
              Aralık 2025) sadece raporlama zorunluluğu olan bir geçiş
              dönemi uygulanıyordu, herhangi bir mali yük veya sertifika
              alım satımı yoktu.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi sektörler SKDM kapsamında?
            </h3>
            <p className="leading-8 text-gray-700">
              Demir-çelik, alüminyum, çimento, gübre, elektrik ve hidrojen.
              Demir-çelik ve alüminyumda yalnızca doğrudan emisyonlar,
              çimento ve gübrede ise doğrudan emisyonlara ek olarak
              dolaylı emisyonlar (örneğin kullanılan elektriğin emisyonu)
              da hesaba katılıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              50 ton muafiyeti tam olarak nasıl işliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              2025&apos;teki basitleştirme paketiyle gelen bu eşik,
              ithalatçı başına, takvim yılı içinde demir-çelik, alüminyum,
              gübre ve çimento sektörlerindeki SKDM kapsamı ürünlerden
              toplam 50 tonun altında ithalat yapıldığında uygulanan bir
              muafiyet. Eşik aşılırsa, o yıl içindeki tüm ithalat (eşiğin
              altında kalan kısım dahil) SKDM yükümlülüğüne tabi oluyor.
              Elektrik ve hidrojen bu muafiyetin kapsamı dışında.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Gerçek emisyon verisi sunmazsam ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              AB&apos;deki alıcı, AB&apos;nin belirlediği varsayılan
              (benchmark) değerleri kullanmak zorunda kalır. Bu değerlere,
              gerçek ölçümü teşvik etmek için ilave bir güvenlik marjı
              ekleniyor: 2026 için %10, 2027 için %20, 2028 için %30
              (gübrede %1). Bu durum alıcının maliyetini artırır ve sizi
              gerçek veri sunan rakiplerinize kıyasla dezavantajlı hâle
              getirebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              SKDM sertifikaları ne zaman gerçekten alınıp satılmaya başlıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              2026 ithalatlarına ait sertifikaların satışı Şubat
              2027&apos;de başlıyor. 2026 yılı ithalatlarına ilişkin
              beyanname verme ve sertifika teslim etme için son tarih ise
              30 Eylül 2027.
            </p>
          </div>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          SKDM&apos;nin hukuki yükü AB&apos;deki ithalatçının üzerinde
          olsa da, 2026&apos;dan itibaren işin ticari ağırlığı giderek
          Türkiye&apos;deki üretici ve ihracatçıya kayıyor. Gerçek,
          doğrulanmış emisyon verisi sunabilen şirketler AB pazarında
          rekabet avantajı kazanırken, veri sunamayanlar varsayılan
          değerlerin getirdiği ek maliyet nedeniyle giderek daha az
          tercih edilir hâle gelebilir. Sertifika alım satımı henüz
          başlamadı, ama hazırlığı 2027&apos;ye bırakmak yerine şimdiden
          gömülü emisyon hesaplaması ve doğrulama sürecine başlamak, orta
          vadede somut bir rekabet farkı yaratıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin SKDM maruziyetini, karbon ayak izi hesaplamasını ve
          TSRS kapsamındaki yükümlülüklerini değerlendirmek için Koray
          Akdağ / Sistem Global Danışmanlık olarak yanınızdayız; ayrı bir
          danışmanlık veya denetim firması aramanıza gerek kalmadan süreci
          tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON AYAK İZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Karbon Ayak İzi Hesaplama Rehberi</h3>
          </Link>
          <Link
            href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • TSRS • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TSRS Sürdürülebilirlik Raporlama Zorunluluğu</h3>
          </Link>
          <Link
            href="/blog/yesil-mutabakat-eylem-plani-2026-2030-guncellendi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • YEŞİL MUTABAKAT • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yeşil Mutabakat Eylem Planı 2026-2030&apos;a Güncellendi</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "SKDM (CBAM) sertifikasını kim satın alıyor, Türk ihracatçı mı AB'deki ithalatçı mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sertifikayı hukuken AB'deki ithalatçı (yetkilendirilmiş SKDM beyan sahibi) satın alıp teslim ediyor. Türkiye'deki üretici veya ihracatçının doğrudan bir sertifika satın alma yükümlülüğü yok. Ancak sertifikanın maliyeti, ürünün gömülü emisyon verisine göre hesaplandığı için sonuç dolaylı olarak ihracatçıyı da etkiliyor.",
                },
              },
              {
                "@type": "Question",
                name: "CBAM mali yükümlülüğü ne zaman başladı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1 Ocak 2026 itibarıyla. Bu tarihten önce (1 Ekim 2023 - 31 Aralık 2025) sadece raporlama zorunluluğu olan bir geçiş dönemi uygulanıyordu, herhangi bir mali yük veya sertifika alım satımı yoktu.",
                },
              },
              {
                "@type": "Question",
                name: "Hangi sektörler SKDM kapsamında?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Demir-çelik, alüminyum, çimento, gübre, elektrik ve hidrojen. Demir-çelik ve alüminyumda yalnızca doğrudan emisyonlar, çimento ve gübrede ise doğrudan emisyonlara ek olarak dolaylı emisyonlar da hesaba katılıyor.",
                },
              },
              {
                "@type": "Question",
                name: "50 ton muafiyeti tam olarak nasıl işliyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2025'teki basitleştirme paketiyle gelen bu eşik, ithalatçı başına, takvim yılı içinde demir-çelik, alüminyum, gübre ve çimento sektörlerindeki SKDM kapsamı ürünlerden toplam 50 tonun altında ithalat yapıldığında uygulanan bir muafiyet. Eşik aşılırsa, o yıl içindeki tüm ithalat eşiğin altında kalan kısım dahil SKDM yükümlülüğüne tabi oluyor. Elektrik ve hidrojen bu muafiyetin kapsamı dışında.",
                },
              },
              {
                "@type": "Question",
                name: "Gerçek emisyon verisi sunmazsam ne olur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AB'deki alıcı, AB'nin belirlediği varsayılan benchmark değerleri kullanmak zorunda kalır. Bu değerlere gerçek ölçümü teşvik etmek için ilave bir güvenlik marjı ekleniyor: 2026 için %10, 2027 için %20, 2028 için %30, gübrede %1. Bu durum alıcının maliyetini artırır ve ihracatçıyı gerçek veri sunan rakiplerine kıyasla dezavantajlı hâle getirebilir.",
                },
              },
              {
                "@type": "Question",
                name: "SKDM sertifikaları ne zaman gerçekten alınıp satılmaya başlıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2026 ithalatlarına ait sertifikaların satışı Şubat 2027'de başlıyor. 2026 yılı ithalatlarına ilişkin beyanname verme ve sertifika teslim etme için son tarih ise 30 Eylül 2027.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
