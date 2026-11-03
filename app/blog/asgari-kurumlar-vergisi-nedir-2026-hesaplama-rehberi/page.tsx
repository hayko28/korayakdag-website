import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Asgari Kurumlar Vergisi Nedir? 2026 Hesaplama Rehberi | Koray Akdağ",
  description:
    "Zarar eden ya da yüksek istisnadan yararlanan şirketler bile asgari kurumlar vergisi nedeniyle vergi ödeyebilir. KVK 32/C kapsamı, GİB'in resmî örnekleriyle hesaplama, hangi istisnaların matrahtan düşülüp hangilerinin düşülmediği ve küresel asgari vergiyle karıştırılmaması gereken noktalarla 2026 güncel rehber.",
  keywords: [
    "asgari kurumlar vergisi nedir",
    "asgari kurumlar vergisi hesaplama",
    "asgari kurumlar vergisi 2026",
    "KVK 32/C",
    "yurt içi asgari kurumlar vergisi",
    "asgari kurumlar vergisi istisnalar",
    "asgari kurumlar vergisi kimler öder",
    "asgari kurumlar vergisi geçmiş yıl zararı",
    "küresel asgari tamamlayıcı kurumlar vergisi farkı",
    "asgari kurumlar vergisi muafiyet",
  ],
  alternates: {
    canonical: "/blog/asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Asgari Kurumlar Vergisi Nedir? Zarar Eden Şirket Bile Neden Vergi Ödeyebilir?"
      description="2025'ten beri yürürlükte olan yurt içi asgari kurumlar vergisi, indirim ve istisnalar düşülmeden önceki kurum kazancının en az %10'u kadar vergi ödenmesini zorunlu kılıyor. KVK 32/C kapsamı, kimlerin muaf olduğu, GİB'in resmî örnekleriyle adım adım hesaplama ve küresel asgari vergiyle karıştırılmaması gereken noktalarla 2026 güncel rehber."
      category="VERGİ DANIŞMANLIĞI • ASGARİ KURUMLAR VERGİSİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi"
      coverImage="https://images.unsplash.com/photo-1744662415515-61318504fad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Asgari Kurumlar Vergisi Hesabınızı Birlikte Gözden Geçirelim"
      ctaText="Şirketinizin normal kurumlar vergisi ile asgari kurumlar vergisini yan yana karşılaştıralım, hangi istisna ve indirimlerin matrahı etkilediğini ve geçici vergi dönemlerinde doğru beyan edilip edilmediğini birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Asgari Kurumlar Vergisi Nedir?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Kurumlar vergisi mükelleflerinin hesaplayacağı vergi, <strong>indirim ve istisnalar düşülmeden önceki kurum kazancının %10&apos;undan</strong> az olamaz; normal hesaplanan vergi bu tutarın altında kalırsa aradaki fark ayrıca ödenir.</li>
          <li>✔ Yasal dayanağı <strong>7524 sayılı Kanun</strong> ile Kurumlar Vergisi Kanunu&apos;na eklenen <strong>32/C maddesi</strong>; <strong>2025 yılı kazançlarından</strong> itibaren, ilk kez 2025&apos;in 1. geçici vergi döneminden beri uygulanıyor.</li>
          <li>✔ Tüm sermaye şirketleri, kooperatifler, iktisadi kamu kuruluşları, dernek/vakıflara ait iktisadi işletmeler ve iş ortaklıkları kapsamda; <strong>ilk defa faaliyete başlayan şirketler kuruluş hesap dönemi dahil 3 hesap dönemi</strong> muaf.</li>
          <li>✔ <strong>Geçmiş yıl zararları</strong> asgari vergi matrahından düşülmüyor; bu yüzden ticari bilançosu zarar gösteren bir şirket bile, kanunen kabul edilmeyen giderleri (KKEG) yeterince yüksekse asgari kurumlar vergisi ödeyebiliyor.</li>
          <li>✔ İştirak kazancı, teknokent/serbest bölge istisnası, Ar-Ge indirimi gibi belirli kalemler matrahtan düşülürken; yurt dışı iştirak kazancı, taşınmaz satış istisnası, bağış/sponsorluk indirimi gibi birçok kalem <strong>düşülemiyor</strong>.</li>
          <li>✔ Büyük çok uluslu grupları ilgilendiren <strong>küresel asgari tamamlayıcı kurumlar vergisi</strong> ile karıştırılmamalı; bu yazının konusu olan asgari kurumlar vergisi, ciro büyüklüğüne bakılmaksızın <strong>hemen her kurumlar vergisi mükellefini</strong> kapsıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Asgari Kurumlar Vergisi Nedir, Yasal Dayanağı Ne?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Kapsamda, Kimler Muaf?
          </Link>
          <Link href="#hesaplama" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. GİB&apos;in Örnekleriyle Adım Adım Hesaplama
          </Link>
          <Link href="#istisnalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hangi İstisna ve İndirimler Matrahtan Düşülüyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Karıştırmayın: Küresel Asgari Vergi Farklı Bir Konu
          </Link>
          <Link href="#ozel-durumlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Teşvik Belgesi, İndirimli Oran ve Mahsup İmkanları
          </Link>
          <Link href="#beyanname" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Ne Zaman ve Nasıl Beyan Edilir?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
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
          1. Asgari Kurumlar Vergisi Nedir, Yasal Dayanağı Ne?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kurumlar vergisi matrahı hesaplanırken, kanunun izin verdiği
          çeşitli istisna ve indirimler kazançtan düşülür ve vergi, kalan
          tutar üzerinden hesaplanır. Bazı şirketlerde bu istisna ve
          indirimler o kadar büyük olabiliyor ki, ciddi bir ticari kâr elde
          edilmesine rağmen ödenecek kurumlar vergisi çok düşük, hatta sıfıra
          yakın çıkabiliyor. Yasa koyucu, vergi güvenliğini sağlamak amacıyla
          buna bir alt sınır getirdi: <strong>asgari kurumlar vergisi</strong>.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Düzenlemenin yasal dayanağı, <strong>2 Ağustos 2024 tarihli Resmî
          Gazete&apos;de yayımlanan 7524 sayılı Vergi Kanunları ile Bazı
          Kanunlarda ve 375 Sayılı Kanun Hükmünde Kararnamede Değişiklik
          Yapılmasına Dair Kanun&apos;un 36. maddesi</strong>. Bu madde ile
          5520 sayılı Kurumlar Vergisi Kanunu&apos;na <strong>32/C
          maddesi</strong> eklendi ve &quot;Yurt içi asgari kurumlar
          vergisi&quot; adıyla yeni bir uygulama getirildi. Kurala göre,
          Kurumlar Vergisi Kanunu&apos;nun 32 ve 32/A maddeleri hükümleri
          esas alınarak hesaplanan kurumlar vergisi, <strong>indirim ve
          istisnalar düşülmeden önceki kurum kazancının %10&apos;undan az
          olamaz</strong>. Bu şekilde hesaplanan asgari tutar, normal
          yöntemle hesaplanan kurumlar vergisinden büyükse, aradaki fark da
          ayrıca ödenir.
        </p>
        <p className="leading-8 text-gray-700">
          Uygulama, <strong>2025 yılı ve izleyen vergilendirme dönemi
          kazançlarına</strong> yönelik; takvim yılına tabi mükellefler için
          ilk kez 2025 yılının 1. geçici vergi döneminden itibaren hesaplanıp
          beyan edilmeye başlandı. Özel hesap dönemine tabi kurumlarda ise
          2025 takvim yılında başlayan özel hesap dönemi ve izleyen
          dönemlerde elde edilen kazançlar esas alınıyor. 2026 itibarıyla
          uygulama ikinci yılına girmiş durumda ve Gelir İdaresi Başkanlığı,
          konuyu detaylandıran yeni tebliğler (25 ve 26 Seri No&apos;lu
          Kurumlar Vergisi Genel Tebliğleri gibi) yayımlamaya devam ediyor.
        </p>
      </section>

      {/* 2. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Kapsamda, Kimler Muaf?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kapsam, gelir vergisi mükelleflerini değil; Kurumlar Vergisi
          Kanunu&apos;nun 1. maddesinde sayılan kurumlar vergisi
          mükelleflerinin tamamını ilgilendiriyor. Türkiye&apos;de elde
          ettikleri kazançlarını beyan etmek zorunda olan dar mükellef
          kurumlar ile Kurumlar Vergisi Kanunu&apos;nun 30. maddesi
          kapsamında tevkif yoluyla vergilendirilen kazanç ve iratlarını
          ihtiyari olarak beyan eden dar mükellefler de uygulamaya tabi.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✅ Kapsamda Olanlar</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Sermaye şirketleri (A.Ş., Ltd., sermayesi paylara bölünmüş komandit şirket)</li>
              <li>Kooperatifler</li>
              <li>İktisadi kamu kuruluşları</li>
              <li>Dernek ve vakıflara ait iktisadi işletmeler</li>
              <li>İş ortaklıkları</li>
              <li>Türkiye&apos;de elde ettikleri kazancı beyan eden dar mükellef kurumlar</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚫 Kapsam Dışı / Muaf Olanlar</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Kurumlar vergisinden muaf olan kurumlar (muafiyet şart ve süresi boyunca)</li>
              <li>İlk defa faaliyete başlayan kurumlar, <strong>faaliyete başlanılan hesap döneminden itibaren üç hesap dönemi</strong> boyunca</li>
              <li>Gelir Vergisi Kanunu madde 113&apos;teki &quot;hasılat esaslı kazanç tespiti&quot; kapsamında vergilendirilen kurumlar vergisi mükellefleri</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[550px] text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kuruluş Yılı</th>
                <th className="p-5">Muafiyet Uygulanan Hesap Dönemleri</th>
                <th className="p-5">Asgari Vergi İlk Uygulandığı Dönem</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-5">2025</td>
                <td className="p-5">2025, 2026, 2027</td>
                <td className="p-5">2028</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5">2024</td>
                <td className="p-5">2025, 2026</td>
                <td className="p-5">2027</td>
              </tr>
              <tr className="bg-white">
                <td className="p-5">2023</td>
                <td className="p-5">2025</td>
                <td className="p-5">2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          &quot;İlk defa faaliyete başlayan şirket&quot; muafiyeti, her yeni
          unvanlı şirket için otomatik işlemiyor. <strong>Birleşme, devir,
          tür değişikliği, kısmi bölünme veya tam bölünme yoluyla kurulan
          şirketler</strong>, kanun gereği ilk defa faaliyete başlayan şirket
          sayılmıyor ve bu üç hesap dönemlik muafiyetten yararlanamıyor.
        </p>
      </section>

      {/* 3. HESAPLAMA */}
      <section id="hesaplama" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. GİB&apos;in Örnekleriyle Adım Adım Hesaplama
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gelir İdaresi Başkanlığı&apos;nın Nisan 2026 tarihli &quot;Yurt
          İçi Asgari Kurumlar Vergisi&quot; rehberinde (Yayın No: 607)
          yöntem şöyle özetleniyor: önce ticari bilanço kârına (veya
          zararına) kanunen kabul edilmeyen giderler (KKEG) eklenir. Bu
          tutar sıfırdan büyükse, kanunun izin verdiği istisna ve indirimler
          düşülür ve kalan tutara %10 uygulanır. Bulunan tutar, normal
          yöntemle hesaplanan kurumlar vergisiyle karşılaştırılır; hangisi
          büyükse o tutar ödenir.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Ticari Bilanço Kârı/Zararı + KKEG</h3>
            <p className="mt-2 text-sm text-gray-600">Dönem sonu ticari kâr veya zarara, kanunen kabul edilmeyen giderler eklenir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">İstisna ve İndirimleri Düş</h3>
            <p className="mt-2 text-sm text-gray-600">Kanunun izin verdiği kalemler (aşağıdaki liste) bu tutardan düşülür</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">%10 Uygula</h3>
            <p className="mt-2 text-sm text-gray-600">Kalan tutara %10 oranı uygulanarak asgari kurumlar vergisi bulunur</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Büyük Olanı Öde</h3>
            <p className="mt-2 text-sm text-gray-600">Normal hesaplanan KV ile asgari KV karşılaştırılır, büyük olan tutar ödenir</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📊 GİB Örneği: Zarar Eden Şirket Bile Vergi Ödeyebilir
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            GİB&apos;in resmî rehberindeki ikinci örnek, bu uygulamanın en
            çok yanlış anlaşılan sonucunu gösteriyor: ticari bilançosunda
            zarar olan bir şirket, kanunen kabul edilmeyen giderleri yüksekse
            yine de asgari kurumlar vergisi ödeyebiliyor.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-4"></th>
                  <th className="p-4">Normal Kurumlar Vergisi</th>
                  <th className="p-4">Yurt İçi Asgari Kurumlar Vergisi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Ticari bilanço zararı</td>
                  <td className="p-4">(2.000.000) TL</td>
                  <td className="p-4">(2.000.000) TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Kanunen kabul edilmeyen giderler (KKEG)</td>
                  <td className="p-4">2.400.000 TL</td>
                  <td className="p-4">2.400.000 TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">İstisna ve indirimler</td>
                  <td className="p-4">-</td>
                  <td className="p-4">-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Matrah</td>
                  <td className="p-4">400.000 TL</td>
                  <td className="p-4">400.000 TL</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Hesaplanan vergi</td>
                  <td className="p-4">400.000 x %25 = 100.000 TL</td>
                  <td className="p-4">400.000 x %10 = 40.000 TL</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-orange-600">Ödenecek kurumlar vergisi</td>
                  <td className="p-4 font-semibold text-orange-600" colSpan={2}>100.000 TL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Bu örnekte asgari kurumlar vergisi (40.000 TL), normal
            hesaplanan kurumlar vergisinden (100.000 TL) düşük kaldığı için
            ödenecek tutar normal yöntemle belirleniyor. Ancak iki hesaplama
            birbirine yaklaştıkça veya asgari tutar öne geçtiğinde, şirketin
            ticari bilançosunda zarar görünmesi vergi yükünü sıfırlamıyor;
            KKEG tutarı tek başına bir vergi matrahı yaratabiliyor.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📊 GİB Örneği: İstisnadan Yararlanan Şirkette Etki
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Üçüncü GİB örneğinde, 100.000.000 TL ticari bilanço kârı elde
            eden ve bu kazancın 60.000.000 TL&apos;sini düşülemeyen bir
            istisnadan (yurt dışı inşaat/montaj kazanç istisnası, KVK
            5/1-h) elde eden bir şirket ele alınıyor. Normal yöntemde matrah
            40.000.000 TL&apos;ye inerken, asgari kurumlar vergisinde bu
            istisna düşülemediği için matrah 100.000.000 TL olarak kalıyor.
            Buna rağmen her iki yöntemde de ödenecek vergi
            <strong> 10.000.000 TL</strong>&apos;de eşitleniyor; çünkü
            %25&apos;lik normal oranla düşük matrah üzerinden hesaplanan
            vergi (40.000.000 x %25), %10&apos;luk asgari oranla yüksek
            matrah üzerinden hesaplanan vergiye (100.000.000 x %10) denk
            geliyor. Bu örnek, düşülemeyen istisnaların matrahı büyütse
            bile, sonuç her zaman asgari verginin devreye girmesi anlamına
            gelmediğini gösteriyor; her şirketin kendi oranlar dengesine
            bakması gerekiyor.
          </p>
        </div>
      </section>

      {/* 4. İSTİSNALAR */}
      <section id="istisnalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hangi İstisna ve İndirimler Matrahtan Düşülüyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Asgari kurumlar vergisi matrahı, normal kurumlar vergisi matrahından
          farklı hesaplanıyor. Kanunun tüm istisna ve indirimlerini değil,
          yalnızca sınırlı sayıda kalemi matrahtan düşmesine izin veriyor.
          Geri kalanı, normal vergide matrahı küçültse bile asgari vergi
          hesabında matrahta kalıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[650px] text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Matrahtan Düşülebilenler (seçili kalemler)</th>
                <th className="p-5">Matrahtan Düşülemeyenler (seçili kalemler)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <td className="p-5">İştirak kazancı istisnası (KVK 5/1-a)</td>
                <td className="p-5">Yurt dışı iştirak kazancı/hisse satış istisnası (KVK 5/1-b, 5/1-c)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5">Teknoloji geliştirme bölgesi kazanç istisnası (4691 sayılı Kanun)</td>
                <td className="p-5">Taşınmaz, iştirak hissesi ve fon satış kazancı istisnası (KVK 5/1-e)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5">Serbest bölge kazanç istisnası (3218 sayılı Kanun)</td>
                <td className="p-5">Yurt dışı inşaat/montaj/teknik hizmet kazanç istisnası (KVK 5/1-h)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5">Ar-Ge ve tasarım indirimi (5746 sayılı Kanun)</td>
                <td className="p-5">Bağış, yardım ve sponsorluk indirimleri (KVK 10/1-b, 10/1-c, 10/1-d)</td>
              </tr>
              <tr className="border-b bg-white">
                <td className="p-5">Girişim sermayesi fonu indirimi (KVK 10/1-g)</td>
                <td className="p-5">Nakdi sermaye artışından kaynaklanan faiz indirimi (KVK 10/1-ı)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-5">Korumalı işyeri indirimi (KVK 10/1-h)</td>
                <td className="p-5">Teknogirişim/teknokent sermaye desteği indirimi, yatırım indirimi istisnası</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Ayrıca, kurumlar vergisi beyannamesinin &quot;Diğer İndirimler&quot;
          veya &quot;Diğer İndirimler ve İstisnalar&quot; satırlarında
          gösterilmekle birlikte, mahiyeti itibarıyla gerçek bir istisna
          veya indirim olmayan tutarlar (TMS/TFRS ile Vergi Usul Kanunu
          arasındaki değerleme farkları, örtülü sermaye kabul edilen
          borçlanmalarda borç alan kurum nezdinde oluşan kur farkı gelirleri,
          kıdem tazminatı karşılığı iptali gibi) zaten asgari kurumlar
          vergisi kapsamına girmiyor; çünkü bunlar başlangıçta vergi
          matrahını küçültmek için değil, matrahın doğru hesaplanmasını
          sağlamak için beyannameye yazılıyor.
        </p>
      </section>

      {/* 5. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Karıştırmayın: Küresel Asgari Vergi Farklı Bir Konu
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Asgari Kurumlar Vergisi ≠ Küresel Asgari Tamamlayıcı Kurumlar Vergisi
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Basında &quot;asgari vergi&quot; başlığıyla çıkan haberlerin bir
            kısmı aslında bu yazının konusu olan yurt içi asgari kurumlar
            vergisini değil, aynı 7524 sayılı Kanun&apos;la getirilen ama
            tamamen farklı bir düzenlemeyi, <strong>yerel ve küresel asgari
            tamamlayıcı kurumlar vergisini (ATV)</strong> anlatıyor. İkisi
            aynı kanunda yer alsa da kapsamları çok farklı:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Yurt İçi Asgari Kurumlar Vergisi (KVK 32/C)</th>
                  <th className="p-4">Küresel Asgari Tamamlayıcı Kurumlar Vergisi (ATV)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Kimi kapsar?</td>
                  <td className="p-4">Hemen her kurumlar vergisi mükellefi, KOBİ dahil</td>
                  <td className="p-4">Yalnızca büyük çok uluslu işletme grupları</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Eşik</td>
                  <td className="p-4">Yok, ciro büyüklüğü aranmaz</td>
                  <td className="p-4">Önceki 4 hesap döneminin en az 2&apos;sinde 750 milyon euro karşılığı TL konsolide hasılat</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Oran</td>
                  <td className="p-4">%10 (kurum kazancı üzerinden)</td>
                  <td className="p-4">%15 efektif vergi yükü hedefi (OECD Pillar Two)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Dayanağı</td>
                  <td className="p-4">7524 sayılı Kanun m.36, KVK m.32/C</td>
                  <td className="p-4">7524 sayılı Kanun&apos;un &quot;5. Kısım&quot; başlıklı ayrı bölümü</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Sonuç olarak: &quot;asgari vergi bizi ilgilendirmez, biz büyük
            bir çok uluslu şirket değiliz&quot; demek yanlış bir varsayım.
            KOBİ ölçeğindeki bir şirket küresel asgari tamamlayıcı kurumlar
            vergisinin kapsamına girmez, ama bu yazıda anlatılan yurt içi
            asgari kurumlar vergisinin kapsamına, ölçeğine bakılmaksızın
            girer.
          </p>
        </div>
      </section>

      {/* 6. ÖZEL DURUMLAR + UZMAN NOTU */}
      <section id="ozel-durumlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Teşvik Belgesi, İndirimli Oran ve Mahsup İmkanları
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Asgari kurumlar vergisi matraha istisna/indirim eklenmesiyle
          çalışsa da, hesaplanan asgari verginin tamamının ayrıca ödenmesi
          gerekmiyor. Kanun, belirli kalemler için asgari vergiden doğrudan
          indirim yapılmasına izin veriyor:
        </p>
        <ul className="mb-6 ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            Kurumlar Vergisi Kanunu&apos;nun 32. maddesindeki indirimli
            oranlar (halka arzda 2 puan, ihracat kazancında 5 puan, sanayi
            sicil belgeli üretim faaliyetinde 1 puan indirim) nedeniyle
            alınmayan vergi, asgari kurumlar vergisinden düşülebiliyor.
          </li>
          <li>
            <strong>2/8/2024 tarihinden önce</strong> alınmış yatırım teşvik
            belgeleri kapsamında, KVK 32/A maddesi hükmüne istinaden ilgili
            hesap döneminde alınmayan vergi de asgari vergiden
            indirilebiliyor. Bu tarihten sonra alınan teşvik belgeleri veya
            sonradan artırılan yatırıma katkı tutarları bu kapsama girmiyor.
          </li>
          <li>
            Hesaplanan asgari vergiden, dönem içinde tevkif yoluyla ödenen
            kurumlar vergisi ve geçici vergiler mahsup edilebiliyor; Gelir
            Vergisi Kanunu mükerrer 121. maddedeki uyumlu mükellef vergi
            indirimi hakkı da asgari vergi için kullanılabiliyor.
          </li>
        </ul>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, asgari kurumlar vergisi
            matrahının geçmiş yıl mali zararlarıyla küçültülemediğidir.
            Birçok şirket sahibi, &quot;geçen yıllardan devreden zararım var,
            bu yıl vergi çıkmaz&quot; varsayımıyla hareket ediyor; ancak
            geçmiş yıl zararları yalnızca normal kurumlar vergisi
            hesaplamasında matrahı küçültür, asgari kurumlar vergisi
            hesaplamasında dikkate alınmaz. Bu nedenle özellikle önceki
            yıllarda büyük yatırım yapmış, zarar biriktirmiş ama cari yılda
            ticari kârlılığa dönen şirketlerin, asgari vergi etkisini geçici
            vergi döneminden itibaren ayrıca hesaba katması gerekiyor.
            Enflasyon düzeltmesi uygulanan dönemlerde de düzeltme sonucu
            oluşan değerler asgari vergi hesabına dahil edildiğinden, bu
            hesaplamanın yıl sonuna bırakılmadan her geçici vergi döneminde
            güncellenmesi öneriliyor.
          </p>
        </div>
      </section>

      {/* 7. BEYANNAME */}
      <section id="beyanname" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Ne Zaman ve Nasıl Beyan Edilir?
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Asgari kurumlar vergisi, yıl sonunda tek seferlik bir işlem değil;
          kurum geçici vergi beyannameleri de dahil olmak üzere her
          dönemde hesaplanması gereken bir yükümlülük. Mükellefler, geçici
          ve yıllık kurumlar vergisi beyannamelerinde Kurumlar Vergisi
          Kanunu&apos;nun 32 ve 32/A madde hükümlerini dikkate alarak
          normal kurumlar vergisini hesaplar; aynı beyannamede ticari
          bilanço kârı/zararına kanunen kabul edilmeyen giderler eklenerek
          asgari vergi matrahı da ayrıca belirlenir. İki tutar
          karşılaştırılır ve büyük olan beyan edilip ödenir.
        </p>
        <p className="leading-8 text-gray-700">
          Mükelleflerin <strong>tasfiye, birleşme, devir ve tam
          bölünme</strong> işlemleri nedeniyle verdikleri beyannamelerde de
          asgari kurumlar vergisi hesaplaması yapılması gerekiyor; bu özel
          durumlar istisna sayılmıyor.
        </p>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Ticari bilançoda zarar görünmesi, asgari kurumlar vergisi hesaplanmayacağı anlamına gelmez; kanunen kabul edilmeyen giderler tek başına bir matrah yaratabilir.</li>
            <li>Geçmiş yıl mali zararları asgari vergi matrahından düşülmez; bu kalem sadece normal kurumlar vergisi hesabında dikkate alınır.</li>
            <li>Hizmet ihracatı kazanç indirimi, yurt dışı inşaat/montaj istisnası ve taşınmaz satış istisnası gibi birçok yaygın kalem, asgari vergi matrahından düşülemeyen istisnalar arasında yer alır.</li>
            <li>Hesaplama yıl sonuna bırakılmamalı; her geçici vergi döneminde kümülatif olarak tekrarlanmalı.</li>
            <li>2/8/2024&apos;ten sonra alınan yatırım teşvik belgeleri veya bu tarihten sonra artırılan yatırıma katkı tutarları, asgari vergiden indirim hakkı tanımaz; yalnızca bu tarihten önceki belgeler kapsamdadır.</li>
          </ul>
        </div>
      </section>

      {/* 9. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2024/08/20240802-1.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                7524 Sayılı Kanun (2 Ağustos 2024 Resmî Gazete) - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5520.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                5520 Sayılı Kurumlar Vergisi Kanunu (madde 32/C dahil) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Yurt İçi Asgari Kurumlar Vergisi Rehberi, Nisan 2026, Yayın No: 607 - Gelir İdaresi Başkanlığı (gib.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                1 Seri No&apos;lu Kurumlar Vergisi Genel Tebliği ve 25-26 Seri No&apos;lu Değişiklik Tebliğleri - Gelir İdaresi Başkanlığı (gib.gov.tr)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Asgari kurumlar vergisi oranı kaçtır ve ne zamandan beri uygulanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Oran %10&apos;dur. 7524 sayılı Kanun ile Kurumlar Vergisi
              Kanunu&apos;na eklenen 32/C maddesi uyarınca, 2025 yılı ve
              izleyen vergilendirme dönemi kazançlarına uygulanıyor; ilk kez
              2025&apos;in 1. geçici vergi döneminden itibaren beyan edildi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim zarar ettiği halde asgari kurumlar vergisi ödemek zorunda mıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, mümkün. Ticari bilanço zararınız olsa bile, kanunen
              kabul edilmeyen giderleriniz bu zararı aşıyorsa kalan tutar
              üzerinden %10 oranında asgari kurumlar vergisi
              hesaplanabilir. GİB&apos;in resmî örneklerinden biri tam
              olarak bu durumu gösteriyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni kurulan şirketler asgari kurumlar vergisinden muaf mı, ne kadar süreyle?
            </h3>
            <p className="leading-8 text-gray-700">
              İlk defa faaliyete başlayan kurumlar, faaliyete başlanılan
              hesap dönemi dahil olmak üzere üç hesap dönemi boyunca asgari
              kurumlar vergisinden muaftır. Ancak birleşme, devir, tür
              değişikliği veya bölünme yoluyla kurulan şirketler bu
              muafiyetten yararlanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Geçmiş yıl zararları asgari kurumlar vergisi matrahından düşülüyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. GİB&apos;in resmî rehberine göre geçmiş yıl mali
              zararları yalnızca normal kurumlar vergisi hesaplamasında
              dikkate alınır; asgari kurumlar vergisi matrahından
              düşülmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Asgari kurumlar vergisi ile küresel asgari tamamlayıcı kurumlar vergisi aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu yazıda anlatılan yurt içi asgari kurumlar vergisi
              (KVK 32/C) ciro büyüklüğüne bakılmaksızın hemen her kurumlar
              vergisi mükellefini kapsar. Küresel asgari tamamlayıcı
              kurumlar vergisi ise OECD&apos;nin Pillar Two kurallarına
              dayanır ve yalnızca konsolide cirosu önceki 4 hesap döneminin
              en az 2&apos;sinde 750 milyon euro karşılığı TL&apos;yi aşan
              büyük çok uluslu işletme gruplarını ilgilendirir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Teknokent veya Ar-Ge indirimi uygulayan şirketler asgari vergiden etkileniyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Teknoloji geliştirme bölgesi kazanç istisnası ve Ar-Ge/tasarım
              indirimi, asgari kurumlar vergisi matrahından düşülebilen
              kalemler arasında yer alır. Bu nedenle bu istisna/indirimden
              yararlanan şirketler, aynı kazanç kalemi için normal kurumlar
              vergisinde de asgari vergide de benzer bir avantajdan
              faydalanmaya devam eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Asgari kurumlar vergisi beyannamede nasıl ve ne zaman hesaplanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Her geçici vergi döneminde ve yıllık kurumlar vergisi
              beyannamesinde, normal kurumlar vergisi hesaplamasıyla birlikte
              ayrıca hesaplanır. İki tutar karşılaştırılır; asgari vergi
              normal hesaplanan vergiden büyükse aradaki fark da beyan
              edilip ödenir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Asgari Kurumlar Vergisi Hesabınızı Birlikte Gözden Geçirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin normal kurumlar vergisi ile asgari kurumlar
            vergisini yan yana karşılaştırmak, hangi istisna ve
            indirimlerin asgari vergi matrahını etkilediğini netleştirmek ve
            geçici vergi dönemlerinde doğru beyan edilip edilmediğini
            kontrol etmek için{" "}
            <Link href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi" className="text-orange-600 underline">
              vergi danışmanlığı hizmetimiz
            </Link>{" "}
            kapsamında birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Asgari kurumlar vergisi, 2025&apos;ten beri yürürlükte olan ve her
          geçen yıl daha fazla şirketin gündemine giren kalıcı bir kural.
          &quot;İstisnalarım var, zaten vergi çıkmaz&quot; ya da &quot;bu
          yıl zarar ettik, vergi yükümüz olmaz&quot; gibi varsayımlar,
          2026&apos;da artık yeterli değil; her iki durumda da asgari vergi
          hesabı ayrıca yapılmalı. Özellikle geçmiş yıl zararı biriktirmiş,
          yüksek istisna veya indirimden yararlanan ya da yüksek KKEG&apos;i
          olan şirketlerin, her geçici vergi döneminde normal ve asgari
          vergiyi yan yana hesaplaması gerekiyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          kurumlar vergisi planlamasını asgari vergi etkisiyle birlikte
          değerlendirmesine, geçici vergi dönemlerindeki hesaplamaları
          güncel mevzuata uygun şekilde yürütmesine yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/finansman-gider-kisitlamasi-hesaplama-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Finansman Gider Kısıtlaması Nedir? 2026 Hesaplama Rehberi</h3>
          </Link>
          <Link
            href="/blog/hizmet-ihracati-kazanc-indirimi-yuzde-100-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ TEŞVİKLERİ • HİZMET İHRACATI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Hizmet İhracatında Kazanç İndirimi %100 Oldu</h3>
          </Link>
          <Link
            href="/blog/ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ&apos;ler İçin Neden Gerekli?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Asgari kurumlar vergisi oranı kaçtır ve ne zamandan beri uygulanıyor?","acceptedAnswer":{"@type":"Answer","text":"Oran %10'dur. 7524 sayılı Kanun ile Kurumlar Vergisi Kanunu'na eklenen 32/C maddesi uyarınca, 2025 yılı ve izleyen vergilendirme dönemi kazançlarına uygulanıyor; ilk kez 2025'in 1. geçici vergi döneminden itibaren beyan edildi."}},{"@type":"Question","name":"Şirketim zarar ettiği halde asgari kurumlar vergisi ödemek zorunda mıyım?","acceptedAnswer":{"@type":"Answer","text":"Evet, mümkün. Ticari bilanço zararınız olsa bile, kanunen kabul edilmeyen giderleriniz bu zararı aşıyorsa kalan tutar üzerinden %10 oranında asgari kurumlar vergisi hesaplanabilir. GİB'in resmî örneklerinden biri tam olarak bu durumu gösteriyor."}},{"@type":"Question","name":"Yeni kurulan şirketler asgari kurumlar vergisinden muaf mı, ne kadar süreyle?","acceptedAnswer":{"@type":"Answer","text":"İlk defa faaliyete başlayan kurumlar, faaliyete başlanılan hesap dönemi dahil olmak üzere üç hesap dönemi boyunca asgari kurumlar vergisinden muaftır. Ancak birleşme, devir, tür değişikliği veya bölünme yoluyla kurulan şirketler bu muafiyetten yararlanamaz."}},{"@type":"Question","name":"Geçmiş yıl zararları asgari kurumlar vergisi matrahından düşülüyor mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. GİB'in resmî rehberine göre geçmiş yıl mali zararları yalnızca normal kurumlar vergisi hesaplamasında dikkate alınır; asgari kurumlar vergisi matrahından düşülmez."}},{"@type":"Question","name":"Asgari kurumlar vergisi ile küresel asgari tamamlayıcı kurumlar vergisi aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yurt içi asgari kurumlar vergisi (KVK 32/C) ciro büyüklüğüne bakılmaksızın hemen her kurumlar vergisi mükellefini kapsar. Küresel asgari tamamlayıcı kurumlar vergisi ise OECD'nin Pillar Two kurallarına dayanır ve yalnızca konsolide cirosu önceki 4 hesap döneminin en az 2'sinde 750 milyon euro karşılığı TL'yi aşan büyük çok uluslu işletme gruplarını ilgilendirir."}},{"@type":"Question","name":"Teknokent veya Ar-Ge indirimi uygulayan şirketler asgari vergiden etkileniyor mu?","acceptedAnswer":{"@type":"Answer","text":"Teknoloji geliştirme bölgesi kazanç istisnası ve Ar-Ge/tasarım indirimi, asgari kurumlar vergisi matrahından düşülebilen kalemler arasında yer alır. Bu nedenle bu istisna/indirimden yararlanan şirketler, aynı kazanç kalemi için normal kurumlar vergisinde de asgari vergide de benzer bir avantajdan faydalanmaya devam eder."}},{"@type":"Question","name":"Asgari kurumlar vergisi beyannamede nasıl ve ne zaman hesaplanır?","acceptedAnswer":{"@type":"Answer","text":"Her geçici vergi döneminde ve yıllık kurumlar vergisi beyannamesinde, normal kurumlar vergisi hesaplamasıyla birlikte ayrıca hesaplanır. İki tutar karşılaştırılır; asgari vergi normal hesaplanan vergiden büyükse aradaki fark da beyan edilip ödenir."}}]}) }}
      />
    </BlogLayout>
  );
}
