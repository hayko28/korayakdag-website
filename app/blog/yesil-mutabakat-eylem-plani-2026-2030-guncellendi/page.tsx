import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yeşil Mutabakat Eylem Planı 2026-2030'a Güncellendi | Koray Akdağ",
  description:
    "9 Kasım 2026'da imzalanan 2026/12 sayılı Cumhurbaşkanlığı Genelgesi ile Yeşil Mutabakat Eylem Planı 2026-2030 dönemine güncellendi. İhracatçı şirketler için ne değişiyor, Yeşil Mutabakat Çalışma Grubu kimlerden oluşuyor?",
  keywords: [
    "Yeşil Mutabakat Eylem Planı 2026-2030",
    "2026/12 sayılı Cumhurbaşkanlığı Genelgesi",
    "Yeşil Mutabakat Çalışma Grubu",
    "Ticaret Bakanlığı yeşil mutabakat",
    "AB Yeşil Mutabakatı ihracatçı şirketler",
    "yeşil dönüşüm Türkiye 2026",
    "CBAM sınırda karbon düzenlemesi",
    "ikiz dönüşüm yeşil ve dijital",
  ],
  alternates: {
    canonical: "/blog/yesil-mutabakat-eylem-plani-2026-2030-guncellendi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yeşil Mutabakat Eylem Planı 2026-2030'a Güncellendi: İhracatçı Şirketler İçin Ne Değişiyor?"
      description="9 Kasım 2026'da imzalanan ve 10 Kasım 2026 tarihli Resmî Gazete'de yayımlanan 2026/12 sayılı Cumhurbaşkanlığı Genelgesi ile 2021'den beri yürürlükte olan Yeşil Mutabakat Eylem Planı, 2026-2030 dönemine güncellendi. Genelgede tam olarak ne değişti, Yeşil Mutabakat Çalışma Grubu kimlerden oluşuyor ve ihracatçı şirketler şimdiden ne yapmalı?"
      category="SÜRDÜRÜLEBİLİRLİK • YEŞİL MUTABAKAT • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="yesil-mutabakat-eylem-plani-2026-2030-guncellendi"
      coverImage="https://images.unsplash.com/photo-1766792852426-350350437f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yeşil Dönüşüm Hazırlığınızı Birlikte Değerlendirelim"
      ctaText="Şirketinizin ihracat yaptığı pazarlardaki yeşil dönüşüm ve karbon düzenlemelerine uyumunu, TSRS ve karbon ayak izi hazırlığını birlikte değerlendirmek için bizimle iletişime geçin."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Yazıda Neler Var?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Cumhurbaşkanı Recep Tayyip Erdoğan, 9 Kasım 2026 tarihinde Yeşil
          Mutabakat Eylem Planı&apos;nı 2026-2030 dönemine güncelleyen yeni
          bir genelge imzaladı. Genelge, 10 Kasım 2026 tarihli ve 33426
          sayılı Resmî Gazete&apos;de 2026/12 sayıyla yayımlandı. 2021&apos;den
          bu yana yürürlükte olan Yeşil Mutabakat Eylem Planı&apos;nın
          küresel ve bölgesel gelişmelere göre güncellenmesi amaçlanıyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Yeni genelgede tam olarak ne değişti, hangi genelgenin yerini güncelliyor?</li>
          <li>✔ Yeşil Mutabakat Çalışma Grubu&apos;na hangi bakanlık ve kurumlar üye?</li>
          <li>✔ Detaylı eylem planı metni yayımlandı mı, nereden takip edilir?</li>
          <li>✔ Bu genelge hangi şirketleri, hangi şekilde ilgilendiriyor?</li>
          <li>✔ İhracatçı şirketler şimdiden hangi adımları atabilir?</li>
          <li>✔ Sık sorulan sorular</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Yeşil Mutabakat Eylem Planı Nedir, Neden Güncellendi?
          </Link>
          <Link href="#genelge" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 2026/12 Sayılı Genelge&apos;de Tam Olarak Ne Var?
          </Link>
          <Link href="#calisma-grubu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Yeşil Mutabakat Çalışma Grubu Kimlerden Oluşuyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırılmaması Gereken Diğer Genelgeler
          </Link>
          <Link href="#eylem-plani-ne-zaman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Detaylı Eylem Planı Metni Ne Zaman Yayımlanacak?
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Şirketler Şimdiden Ne Yapabilir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Bu Genelge Kimleri İlgilendiriyor?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Yeşil Mutabakat Eylem Planı Nedir, Neden Güncellendi?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yeşil Mutabakat Eylem Planı, Türkiye&apos;nin Avrupa Birliği&apos;nin
          yeşil dönüşüm politikalarına (özellikle Avrupa Yeşil Mutabakatı ve
          buna bağlı Sınırda Karbon Düzenleme Mekanizması gibi araçlara)
          uyum sağlamak ve küresel yeşil dönüşümden ticari olarak
          yararlanmak amacıyla kamu kurumları için hazırladığı yol
          haritasıdır. Plan ilk kez 16 Temmuz 2021 tarihli ve 31543 sayılı
          Resmî Gazete&apos;de yayımlanan 2021/15 sayılı Cumhurbaşkanlığı
          Genelgesi ile yürürlüğe girmişti.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          9 Kasım 2026&apos;da imzalanan yeni genelgenin gerekçe bölümünde,
          iklim değişikliği, sanayileşme, nüfus artışı ve küresel
          çatışmalar nedeniyle doğal kaynakların azalmasının, bu
          kaynakların daha verimli kullanılmasını gerektiren küresel bir
          iş birliği ihtiyacı doğurduğu belirtiliyor. Bu çerçevede başta
          Birleşmiş Milletler ve Avrupa Birliği olmak üzere uluslararası
          kuruluşlar nezdinde karbon fiyatlandırması, döngüsel ekonomi,
          yeşil teknolojiler ve sanayinin karbonsuzlaştırılması gibi
          alanlarda yeni politika ve mevzuat düzenlemelerinin hız
          kazandığı ifade ediliyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye, 2053 net sıfır emisyon hedefi doğrultusunda iklim
          mevzuatını ve karbon fiyatlandırma altyapısını geliştirme, yeşil
          dönüşümü destekleme, yenilenebilir enerji kapasitesini artırma
          ve döngüsel ekonomiye geçiş gibi adımları bu süreçte attığını
          belirtiyor. Genelgeye göre, yeşil tedarik zincirlerine
          entegrasyonun güçlendirilmesi, Avrupa Birliği ile Gümrük
          Birliği&apos;nin güncellenmesi sürecinin ileriye taşınması ve
          yeşil dönüşümün sunduğu fırsatlardan azami ölçüde
          yararlanılması amacıyla, 2021/15 sayılı Genelge&apos;yle
          yürürlüğe konulan planın <strong>küresel ve bölgesel
          gelişmeler doğrultusunda güncellenmesine ihtiyaç duyulmuştur.</strong>
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Genelgenin Temel Bilgileri
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Genelge No: 2026/12</li>
            <li>✔ İmza Tarihi: 9 Kasım 2026</li>
            <li>✔ Resmî Gazete Yayım Tarihi/Sayısı: 10 Kasım 2026 - 33426</li>
            <li>✔ Yürürlükten Kaldırdığı/Güncellediği: 2021/15 sayılı Genelge (16/7/2021, RG 31543)</li>
            <li>✔ Koordinatör Kurum: Ticaret Bakanlığı</li>
            <li>✔ İmzalayan: Cumhurbaşkanı Recep Tayyip Erdoğan</li>
          </ul>
        </div>
      </section>

      {/* 2. GENELGE */}
      <section id="genelge" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026/12 Sayılı Genelge&apos;de Tam Olarak Ne Var?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Genelgenin esas hükümleri şu şekilde özetlenebilir: Ticaret
          Bakanlığı koordinasyonunda, ilgili kamu kurum ve kuruluşları ile
          özel sektör paydaşlarının katkılarıyla, yeşil ve dijital
          dönüşümün birlikte ele alındığı &quot;ikiz dönüşüm&quot;
          yaklaşımı esas alınarak &quot;Yeşil Mutabakat Eylem Planı
          (2026-2030)&quot; hazırlanmıştır. Plan, Ticaret Bakanlığı&apos;nın
          resmî internet adresinde (www.ticaret.gov.tr) yayımlanacaktır.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Genelge, eylem planının uygulanmasına ilişkin sorumluluğu da
          netleştiriyor: ilgili kamu kurum ve kuruluşları, sorumlu
          oldukları eylemlere ilişkin yıllık gelişme raporlarını Ticaret
          Bakanlığı&apos;na gönderecek; eylem planının uygulanmasına
          ilişkin gelişmeler ise Yeşil Mutabakat Çalışma Grubu tarafından
          izlenecek ve değerlendirilecek.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu genelgede dikkat edilmesi gereken en önemli nokta, metnin
            kendisinin somut yeni bir destek, yükümlülük veya tarih
            içermemesi; asıl bağlayıcı içeriğin ayrı olarak
            yayımlanacak &quot;Yeşil Mutabakat Eylem Planı (2026-2030)&quot;
            belgesinde yer alacak olmasıdır. Dolayısıyla şirketlerin bu
            genelgeden yola çıkarak somut bir yükümlülük veya destek
            beklentisine girmesi değil, eylem planının yayımlanmasını ve
            kendi sektörlerini ilgilendiren eylem maddelerini takip etmesi
            gerekir.
          </p>
        </div>
      </section>

      {/* 3. ÇALIŞMA GRUBU */}
      <section id="calisma-grubu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Yeşil Mutabakat Çalışma Grubu Kimlerden Oluşuyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Eylem planının uygulanmasını izleyip değerlendirecek ve gerekli
          koordinasyonu sağlayacak olan Yeşil Mutabakat Çalışma Grubu,
          2021/15 sayılı Genelge ile kurulmuştu; 2026/12 sayılı Genelge bu
          yapıyı aynı üyelerle faaliyetine devam ettiriyor. Grup, Ticaret
          Bakanı&apos;nın görevlendireceği bakan yardımcısının
          başkanlığında aşağıdaki kurumların temsilcilerinden oluşuyor:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Rol</th>
                <th className="p-5">Kurum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Başkan</td>
                <td className="p-5">Ticaret Bakanlığı (görevlendirilen bakan yardımcısı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold" rowSpan={11}>
                  Üye Bakanlıklar (ilgili bakan yardımcıları)
                </td>
                <td className="p-5">Çalışma ve Sosyal Güvenlik Bakanlığı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Çevre, Şehircilik ve İklim Değişikliği Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Dışişleri Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Enerji ve Tabii Kaynaklar Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Hazine ve Maliye Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">İçişleri Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Kültür ve Turizm Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Millî Eğitim Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Sanayi ve Teknoloji Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Tarım ve Orman Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Ulaştırma ve Altyapı Bakanlığı</td></tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold" rowSpan={3}>Diğer Üye Kurumlar</td>
                <td className="p-5">Strateji ve Bütçe Başkanlığı (başkan yardımcısı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50"><td className="p-5">Yatırım ve Finans Ofisi (başkan yardımcısı)</td></tr>
              <tr><td className="p-5">Yükseköğretim Kurulu (başkan vekili)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırılmaması Gereken Diğer Genelgeler
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-red-700">
            ⚠️ Dikkat: Birbirine Benzeyen Ama Farklı Üç Genelge
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            2026 yılında Cumhurbaşkanlığı tarafından yayımlanan benzer
            isimli birkaç &quot;eylem planı&quot; genelgesi bulunuyor.
            Bunları birbirine karıştırmamak önemli:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li>
              <strong>2026/12 sayılı Genelge</strong> (bu yazının konusu):
              Yeşil Mutabakat Eylem Planı (2026-2030), 10 Kasım 2026&apos;da
              yayımlandı, Ticaret Bakanlığı koordinasyonunda.
            </li>
            <li>
              <strong>2026/8 sayılı Genelge:</strong> Ulusal Yeşil Finans
              Stratejisi ve Eylem Planı (2026-2029), 4 Temmuz 2026&apos;da
              yayımlandı; finans sektörünün yeşil dönüşümüne odaklanıyor,
              farklı bir koordinasyon yapısı var.
            </li>
            <li>
              <strong>2026/9 sayılı Genelge:</strong> Türkiye Yapay Zekâ
              Eylem Planı (2026-2030); konusu yapay zekâ olup yeşil
              dönüşümle doğrudan ilgili değil.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. NE ZAMAN */}
      <section id="eylem-plani-ne-zaman" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Detaylı Eylem Planı Metni Ne Zaman Yayımlanacak?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu yazının yayımlandığı tarih itibarıyla, genelgenin kendisi
          yürürlüğe girmiş olsa da eylem planının ayrıntılı içeriği (somut
          eylem maddeleri, sorumlu kurumlar, hedef tarihler) henüz
          ticaret.gov.tr üzerinde yayımlanmamıştır. Genelge metninde
          planın &quot;yayımlanacağı&quot; ifade edilmekte, ancak kesin bir
          yayım tarihi verilmemektedir. Bu nedenle şirketlerin somut eylem
          maddelerini öğrenmek için ticaret.gov.tr&apos;nin yeşil mutabakat
          sayfasını takip etmesi gerekiyor; bu konudaki gelişmeleri bu
          yazıda güncelleyeceğiz.
        </p>
      </section>

      {/* 6. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Şirketler Şimdiden Ne Yapabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Detaylı eylem planı yayımlanmamış olsa da, Avrupa Birliği&apos;ne
          veya diğer gelişmiş pazarlara ihracat yapan şirketlerin yeşil
          dönüşüm hazırlığını bu genelgeyi beklemeden sürdürmesi gerekiyor.
          Aşağıdaki başlıklar, mevcut mevzuat çerçevesinde zaten
          uygulanabilir durumda:
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">📊</div>
            <h3 className="text-xl font-bold">Karbon Ayak İzi Hesaplama</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kurumsal karbon ayak izinin ölçülmesi, özellikle AB&apos;ye
              ihracat yapan KOBİ&apos;ler için artık bir rekabet şartı
              hâline geliyor.{" "}
              <Link href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026" className="text-orange-600 underline">
                KOBİ&apos;ler için karbon ayak izi hesaplama rehberi
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">📑</div>
            <h3 className="text-xl font-bold">TSRS Kapsam Analizi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Eşik değerlerin üzerindeki şirketler için sürdürülebilirlik
              raporlaması artık zorunlu.{" "}
              <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="text-orange-600 underline">
                TSRS raporlama zorunluluğu rehberi
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">💶</div>
            <h3 className="text-xl font-bold">Responsible® Destek Programı</h3>
            <p className="mt-3 text-sm text-gray-600">
              Yeşil Mutabakata uyum yatırımları için Ticaret Bakanlığı
              desteği mevcut.{" "}
              <Link href="/blog/yesil-mutabakata-uyum-projesi-destegi-responsible-programi-2026" className="text-orange-600 underline">
                Responsible® programı rehberi
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-4 text-4xl">🏭</div>
            <h3 className="text-xl font-bold">Emisyon Ticaret Sistemi Takibi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Türkiye ETS&apos;nin kapsamı genişledikçe tedarik zincirindeki
              şirketler de dolaylı etkileniyor.{" "}
              <Link href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026" className="text-orange-600 underline">
                Türkiye ETS yönetmeliği rehberi
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 7. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Bu Genelge Kimleri İlgilendiriyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Genelgenin doğrudan muhatabı kamu kurum ve kuruluşlarıdır; özel
          sektör için bağlayıcı bir yükümlülük getirmiyor. Ancak dolaylı
          olarak aşağıdaki şirketler eylem planını yakından takip etmeli:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li>Avrupa Birliği&apos;ne veya AB standartlarını referans alan pazarlara ihracat yapan üretici ve ihracatçı şirketler</li>
          <li>Sınırda Karbon Düzenleme Mekanizması (CBAM) kapsamındaki sektörlerde (demir-çelik, çimento, gübre, alüminyum, elektrik, hidrojen) faaliyet gösteren şirketler</li>
          <li>Büyük ölçekli alıcıların tedarik zincirinde yer alan ve karbon/sürdürülebilirlik verisi talebiyle karşılaşan KOBİ&apos;ler</li>
          <li>TSRS kapsamında sürdürülebilirlik raporlaması yapmakla yükümlü şirketler</li>
        </ul>
      </section>

      {/* 8. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2026/11/20261110-5.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Yeşil Mutabakat Eylem Planı (2026-2030) ile İlgili 2026/12 Sayılı Cumhurbaşkanlığı Genelgesi
            </a>{" "}
            - 10 Kasım 2026 tarihli ve 33426 sayılı Resmî Gazete
          </li>
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2026/11/20261110.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              10 Kasım 2026 Tarihli ve 33426 Sayılı Resmî Gazete (tam fihrist)
            </a>
          </li>
          <li>
            <a href="https://www.ticaret.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              T.C. Ticaret Bakanlığı resmî internet sitesi
            </a>{" "}
            - Yeşil Mutabakat Eylem Planı (2026-2030) burada yayımlanacak
          </li>
        </ul>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeşil Mutabakat Eylem Planı (2026-2030) ne zaman yürürlüğe girdi?
            </h3>
            <p className="leading-8 text-gray-700">
              Planı güncelleyen 2026/12 sayılı Cumhurbaşkanlığı Genelgesi,
              Cumhurbaşkanı Recep Tayyip Erdoğan tarafından 9 Kasım 2026&apos;da
              imzalandı ve 10 Kasım 2026 tarihli, 33426 sayılı Resmî
              Gazete&apos;de yayımlanarak yürürlüğe girdi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeni genelge 2021/15 sayılı eski genelgeyi tamamen mi yürürlükten kaldırıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Genelge metninde doğrudan bir &quot;yürürlükten kaldırma&quot;
              ifadesi değil, 2021/15 sayılı Genelge ile yürürlüğe konulan
              planın küresel ve bölgesel gelişmeler doğrultusunda
              &quot;güncellenmesine ihtiyaç duyulduğu&quot; ifadesi yer
              alıyor. Pratik sonuç aynı: 2026-2030 dönemi için artık yeni
              plan ve yeni genelge esas alınacak; Çalışma Grubu&apos;nun
              yapısı ise 2021/15 sayılı genelgeyle kurulduğu hâliyle devam
              ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Detaylı eylem planını (somut eylem maddeleri) nereden görebilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Genelge, eylem planının Ticaret Bakanlığı&apos;nın resmî
              internet adresinde (www.ticaret.gov.tr) yayımlanacağını
              belirtiyor. Bu yazının yayımlandığı tarih itibarıyla detaylı
              metin henüz sitede görünmüyor; yayımlandığında bu rehber
              güncellenecektir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeşil Mutabakat Çalışma Grubu&apos;na hangi kurumlar üye?
            </h3>
            <p className="leading-8 text-gray-700">
              Ticaret Bakanlığı koordinasyonunda; Çalışma ve Sosyal
              Güvenlik, Çevre Şehircilik ve İklim Değişikliği, Dışişleri,
              Enerji ve Tabii Kaynaklar, Hazine ve Maliye, İçişleri,
              Kültür ve Turizm, Millî Eğitim, Sanayi ve Teknoloji, Tarım
              ve Orman, Ulaştırma ve Altyapı bakanlıklarının ilgili bakan
              yardımcıları ile Strateji ve Bütçe Başkanlığı, Yatırım ve
              Finans Ofisi başkan yardımcıları ve Yükseköğretim Kurulu
              başkan vekili yer alıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu genelge şirketler için doğrudan bir yükümlülük veya destek getiriyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, genelge kendisi kamu kurumları arasındaki
              görevlendirme ve koordinasyonu düzenliyor; şirketler için
              doğrudan bir yükümlülük veya destek içermiyor. Somut
              eylemler, ayrıca yayımlanacak eylem planı metninde yer
              alacak.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeşil Mutabakat Eylem Planı, Ulusal Yeşil Finans Stratejisi ile aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Ulusal Yeşil Finans Stratejisi ve Eylem Planı
              (2026-2029), 4 Temmuz 2026&apos;da yayımlanan ayrı bir
              genelgeyle (2026/8) yürürlüğe konuldu ve finans sektörünün
              yeşil dönüşümüne odaklanıyor. Yeşil Mutabakat Eylem Planı
              (2026-2030) ise daha geniş kapsamlı, Ticaret Bakanlığı
              koordinasyonunda yürütülen bir plandır.
            </p>
          </div>
        </div>
      </section>

      {/* 10. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026/12 sayılı Genelge, Türkiye&apos;nin yeşil dönüşüm
          politikasının 2026-2030 dönemine taşındığının resmî işareti.
          Ancak genelgenin kendisi bir çerçeve belgesi; asıl belirleyici
          olan, ayrıca yayımlanacak detaylı eylem planı ve bu plandaki
          somut eylem maddeleridir. İhracatçı şirketlerin bu süreci
          beklerken elini güçlendirecek en gerçekçi adım, karbon ayak izi
          ölçümü, TSRS kapsam analizi ve mevcut destek programlarından
          yararlanma gibi bugün zaten uygulanabilir hazırlıkları
          ertelememek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin ihracat yaptığı pazarlardaki yeşil dönüşüm ve
          karbon düzenlemelerine uyumunu, mevcut destek programlarından
          nasıl yararlanabileceğinizi ve sürdürülebilirlik raporlama
          yükümlülüklerinizi değerlendirmek için Koray Akdağ / Sistem
          Global Danışmanlık olarak yanınızdayız; ayrı bir danışmanlık
          firması aramanıza gerek kalmadan süreci tek noktadan
          yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • TSRS • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TSRS Sürdürülebilirlik Raporlama Zorunluluğu</h3>
          </Link>
          <Link
            href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON AYAK İZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOBİ&apos;ler İçin Karbon Ayak İzi Hesaplama Rehberi</h3>
          </Link>
          <Link
            href="/blog/yesil-mutabakata-uyum-projesi-destegi-responsible-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARET BAKANLIĞI • RESPONSIBLE® • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yeşil Mutabakata Uyum Projesi Desteği (Responsible®)</h3>
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
                name: "Yeşil Mutabakat Eylem Planı (2026-2030) ne zaman yürürlüğe girdi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Planı güncelleyen 2026/12 sayılı Cumhurbaşkanlığı Genelgesi, Cumhurbaşkanı Recep Tayyip Erdoğan tarafından 9 Kasım 2026'da imzalandı ve 10 Kasım 2026 tarihli, 33426 sayılı Resmî Gazete'de yayımlanarak yürürlüğe girdi.",
                },
              },
              {
                "@type": "Question",
                name: "Yeni genelge 2021/15 sayılı eski genelgeyi tamamen mi yürürlükten kaldırıyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genelge metninde doğrudan bir yürürlükten kaldırma ifadesi değil, 2021/15 sayılı Genelge ile yürürlüğe konulan planın küresel ve bölgesel gelişmeler doğrultusunda güncellenmesine ihtiyaç duyulduğu ifadesi yer alıyor. Pratik sonuç aynı: 2026-2030 dönemi için artık yeni plan ve yeni genelge esas alınacak; Çalışma Grubu'nun yapısı ise 2021/15 sayılı genelgeyle kurulduğu hâliyle devam ediyor.",
                },
              },
              {
                "@type": "Question",
                name: "Detaylı eylem planını (somut eylem maddeleri) nereden görebilirim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Genelge, eylem planının Ticaret Bakanlığı'nın resmî internet adresinde (www.ticaret.gov.tr) yayımlanacağını belirtiyor. Bu yazının yayımlandığı tarih itibarıyla detaylı metin henüz sitede görünmüyor; yayımlandığında bu rehber güncellenecektir.",
                },
              },
              {
                "@type": "Question",
                name: "Yeşil Mutabakat Çalışma Grubu'na hangi kurumlar üye?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ticaret Bakanlığı koordinasyonunda; Çalışma ve Sosyal Güvenlik, Çevre Şehircilik ve İklim Değişikliği, Dışişleri, Enerji ve Tabii Kaynaklar, Hazine ve Maliye, İçişleri, Kültür ve Turizm, Millî Eğitim, Sanayi ve Teknoloji, Tarım ve Orman, Ulaştırma ve Altyapı bakanlıklarının ilgili bakan yardımcıları ile Strateji ve Bütçe Başkanlığı, Yatırım ve Finans Ofisi başkan yardımcıları ve Yükseköğretim Kurulu başkan vekili yer alıyor.",
                },
              },
              {
                "@type": "Question",
                name: "Bu genelge şirketler için doğrudan bir yükümlülük veya destek getiriyor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır, genelge kendisi kamu kurumları arasındaki görevlendirme ve koordinasyonu düzenliyor; şirketler için doğrudan bir yükümlülük veya destek içermiyor. Somut eylemler, ayrıca yayımlanacak eylem planı metninde yer alacak.",
                },
              },
              {
                "@type": "Question",
                name: "Yeşil Mutabakat Eylem Planı, Ulusal Yeşil Finans Stratejisi ile aynı şey mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Ulusal Yeşil Finans Stratejisi ve Eylem Planı (2026-2029), 4 Temmuz 2026'da yayımlanan ayrı bir genelgeyle (2026/8) yürürlüğe konuldu ve finans sektörünün yeşil dönüşümüne odaklanıyor. Yeşil Mutabakat Eylem Planı (2026-2030) ise daha geniş kapsamlı, Ticaret Bakanlığı koordinasyonunda yürütülen bir plandır.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
