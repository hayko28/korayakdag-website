import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Anonim ve Limited Şirketlerde Asgari Sermaye Artırımı: 31 Aralık 2026 Son Tarih | Koray Akdağ",
  description:
    "7511 sayılı Kanun ile Türk Ticaret Kanunu'na eklenen Geçici Madde 15 uyarınca, sermayesi asgari tutarın altında kalan anonim şirketler (250.000 TL) ve limited şirketler (50.000 TL) 31 Aralık 2026'ya kadar sermaye artırımı yapmak zorunda. Artırmayanlar için infisah riski, süreç ve dikkat edilmesi gerekenlerle 2026 güncel rehber.",
  keywords: [
    "anonim şirket asgari sermaye 2026",
    "limited şirket asgari sermaye 2026",
    "sermaye artırımı zorunluluğu 31 aralık 2026",
    "7511 sayılı kanun sermaye artırımı",
    "türk ticaret kanunu geçici madde 15",
    "şirket infisah sermaye artırımı",
    "anonim şirket 250.000 tl sermaye",
    "limited şirket 50.000 tl sermaye",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Anonim ve Limited Şirketlerde Asgari Sermaye Artırımı: 31 Aralık 2026 Son Tarih"
      description="7511 sayılı Kanun'la Türk Ticaret Kanunu'na eklenen Geçici Madde 15 uyarınca, sermayesi yeni asgari tutarların altında kalan anonim ve limited şirketlerin 31 Aralık 2026'ya kadar sermaye artırımını tamamlaması gerekiyor. Kapsam, tutarlar, süreç ve artırmama halinde karşılaşılabilecek infisah riskiyle güncel rehber."
      category="ŞİRKETLER HUKUKU • ASGARİ SERMAYE • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="anonim-limited-sirket-asgari-sermaye-artirimi-2026"
      coverImage="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          29 Mayıs 2024 tarihinde Resmî Gazete&apos;de yayımlanan 7511 sayılı
          &quot;Türk Ticaret Kanunu ile Bazı Kanunlarda Değişiklik Yapılmasına
          Dair Kanun&quot;, 6102 sayılı Türk Ticaret Kanunu&apos;na eklenen
          Geçici Madde 15 ile 2024 öncesinde kurulmuş olup sermayesi yeni
          asgari tutarların altında kalan anonim ve limited şirketlere{" "}
          <strong>31 Aralık 2026&apos;ya kadar</strong> sermaye artırımı
          yükümlülüğü getirdi. Takvim daralıyor; artırımı zamanında
          tamamlamayan şirketler için kanun, infisah (şirketin kendiliğinden
          sona ermesi) riskinden söz ediyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Bu düzenleme hangi kanuna ve hangi maddeye dayanıyor?</li>
          <li>✔ Yeni asgari sermaye tutarları ne kadar?</li>
          <li>✔ Hangi şirketler bu yükümlülük kapsamında?</li>
          <li>✔ Sermaye artırımı adım adım nasıl yapılır?</li>
          <li>✔ Artırım hangi kaynaklarla karşılanabilir?</li>
          <li>✔ Süreyi kaçırırsanız gerçekten ne olur?</li>
          <li>✔ Dikkat edilmesi gereken kritik noktalar ve sık sorulan sorular</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Bu Düzenleme Nedir, Nereden Geliyor?
          </Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Yeni Asgari Sermaye Tutarları
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Bu Yükümlülük Kapsamında?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Sermaye Artırımı Adım Adım Nasıl Yapılır?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Artırım Hangi Kaynaklarla Karşılanabilir?
          </Link>
          <Link href="#infisah" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Süreyi Kaçırırsanız Ne Olur?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#biz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Süreci Sizin Yerinize Biz Yürütelim
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
          1. Bu Düzenleme Nedir, Nereden Geliyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Konunun kökeni iki ayrı düzenlemeye dayanıyor. Önce 25 Kasım 2023
          tarihli ve 32380 sayılı Resmî Gazete&apos;de yayımlanan 7887 sayılı
          Cumhurbaşkanı Kararı ile Türk Ticaret Kanunu&apos;nun (TTK) 332 ve
          580&apos;inci maddelerinde öngörülen asgari esas sermaye tutarları
          yükseltildi ve bu tutarlar <strong>1 Ocak 2024&apos;ten itibaren
          kurulacak</strong> anonim ve limited şirketler için doğrudan
          uygulanmaya başladı.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Ardından 29 Mayıs 2024 tarihinde yayımlanan 7511 sayılı &quot;Türk
          Ticaret Kanunu ile Bazı Kanunlarda Değişiklik Yapılmasına Dair
          Kanun&quot;, TTK&apos;ya bir <strong>Geçici Madde 15</strong> ekledi.
          Bu madde, 1 Ocak 2024&apos;ten önce kurulmuş olup sermayesi yeni
          asgari tutarların altında kalan mevcut anonim ve limited
          şirketlere, sermayelerini bu tutarlara yükseltmeleri için{" "}
          <strong>31 Aralık 2026&apos;ya kadar</strong> bir geçiş süresi
          tanıdı. Yani düzenleme yalnızca yeni kurulacak şirketleri değil,
          halihazırda faaliyette olan ve sermayesi düşük kalmış binlerce
          şirketi de kapsıyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Neden Bu Kadar Önemli?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Süre 2026 yılı sonunda doluyor; genel kurul, tescil ve ilan süreçleri zaman alıyor</li>
            <li>✔ Kanun, artırımı yapmayan şirketler için infisahtan söz ediyor</li>
            <li>✔ Banka, ihale ve kamu işlemlerinde şirketin hukuki statüsü sorgulanabilir</li>
            <li>✔ Yıl sonuna doğru noterlerde ve ticaret sicillerinde yoğunluk beklenmesi, erken hareket etmeyi önemli kılıyor</li>
          </ul>
        </div>
      </section>

      {/* 2. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Yeni Asgari Sermaye Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          7887 sayılı Cumhurbaşkanı Kararı ile belirlenen yeni asgari
          sermaye tutarları, şirket türüne göre şu şekilde:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Eski Asgari Sermaye</th>
                <th className="p-5">Yeni Asgari Sermaye (1 Ocak 2024&apos;ten itibaren)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Anonim Şirket (genel esas sermaye sistemi)</td>
                <td className="p-5">50.000 TL</td>
                <td className="p-5">250.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Anonim Şirket (kayıtlı sermaye sistemi, halka kapalı)</td>
                <td className="p-5">100.000 TL</td>
                <td className="p-5">500.000 TL başlangıç sermayesi</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Limited Şirket</td>
                <td className="p-5">10.000 TL</td>
                <td className="p-5">50.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu tutarlar, 1 Ocak 2024&apos;ten sonra kurulan şirketler için
            zaten kuruluş anından itibaren geçerli. Asıl geçiş süreci, 2024
            öncesinde kurulmuş ve sermayesi bu yeni tutarların altında kalan
            şirketleri ilgilendiriyor; bu şirketlerin 31 Aralık 2026&apos;ya
            kadar sermayelerini tabloda yer alan seviyelere yükseltmesi
            gerekiyor.
          </p>
        </div>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Bu Yükümlülük Kapsamında?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yükümlülüğün kapsamına girip girmediğinizi belirlemek aslında
          basit bir kontrolle mümkün: kuruluş tarihi ve mevcut esas
          sermaye tutarı.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              🔴 Kapsamda Olanlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ 1 Ocak 2024&apos;ten önce kurulmuş anonim şirketler</li>
              <li>✔ Sermayesi 250.000 TL&apos;nin (kayıtlı sermaye sisteminde 500.000 TL&apos;nin) altında kalan anonim şirketler</li>
              <li>✔ 1 Ocak 2024&apos;ten önce kurulmuş, sermayesi 50.000 TL&apos;nin altında kalan limited şirketler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🟢 Kapsam Dışında Kalanlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Mevcut sermayesi zaten yeni asgari tutarların üzerinde/eşit olan şirketler</li>
              <li>✔ 1 Ocak 2024 ve sonrasında yeni tutarlarla kurulmuş şirketler (zaten yükümlülüğü kuruluşta yerine getirmiş sayılırlar)</li>
              <li>✔ Şahıs şirketleri, kollektif ve komandit şirketler (düzenleme yalnızca anonim ve limited şirketleri kapsar)</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Özellikle uzun yıllar önce kurulmuş, sermayesi hiç güncellenmemiş
          aile şirketlerinde ve küçük ölçekli limited şirketlerde bu durumun
          gözden kaçırılması olası. Şirketinizin esas sözleşmesindeki güncel
          sermaye tutarını kontrol ederek kapsamda olup olmadığınızı
          netleştirmeniz gerekiyor.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Sermaye Artırımı Adım Adım Nasıl Yapılır?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Sermaye artırımı, esas sözleşmede değişiklik gerektiren bir işlem
          olduğu için belirli resmi aşamalardan geçiyor. Kanun, bu geçiş
          sürecine özgü bazı kolaylıklar da getirdi.
        </p>

        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-base font-bold">Karar</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-base font-bold">Sermayenin Yatırılması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-base font-bold">Esas Sözleşme Tadili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-base font-bold">Ticaret Sicili Tescili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-base font-bold">TTSG İlanı</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Genel Kurul / Ortaklar Kurulu Kararı
          </h3>
          <p className="leading-8 text-gray-700">
            Anonim şirketlerde genel kurul, limited şirketlerde ortaklar
            kurulu, sermayenin yeni asgari tutara yükseltilmesine karar
            verir. Geçici Madde 15 kapsamındaki uyum artırımlarında kanun,
            toplantı nisabı aranmayacağını, kararların mevcut oyların
            çoğunluğuyla alınabileceğini ve imtiyazlı pay sahiplerine
            tanınan veto benzeri ayrıcalıkların bu kararlar için
            uygulanmayacağını öngörüyor; bu da süreci pratikte hızlandırıyor.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Sermayenin Yatırılması veya Kaynağın Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Artırım tutarının nakden mi karşılanacağı, yoksa iç kaynaklardan
            mı (yedek akçe, geçmiş yıl kârları) yapılacağı belirlenir.
            Nakit artırımlarda, mevzuatın öngördüğü oranda tutarın şirketin
            banka hesabına yatırılması ve buna ilişkin banka mektubunun
            alınması gerekir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Esas Sözleşme Değişikliğinin Hazırlanması ve Onayı
          </h3>
          <p className="leading-8 text-gray-700">
            Yeni sermaye tutarını yansıtan esas sözleşme/şirket sözleşmesi
            tadil metni hazırlanır. Anonim şirketlerde genel kurul
            tutanağı ve tadil tasarısı, gerekli hallerde Ticaret Bakanlığı
            temsilcisi huzurunda onaylanır; limited şirketlerde ortaklar
            kurulu kararı noter onayına sunulur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Ticaret Siciline Tescil ve TTSG&apos;de İlan
          </h3>
          <p className="leading-8 text-gray-700">
            Onaylanan belgelerle birlikte sermaye artırımı, şirketin bağlı
            olduğu Ticaret Sicili Müdürlüğü&apos;ne tescil ettirilir.
            Tescille birlikte artırım hukuken tamamlanmış olur ve karar,
            Türkiye Ticaret Sicili Gazetesi&apos;nde (TTSG) ilan edilir.
            İşlem, bu ilanla üçüncü kişilere karşı da geçerlilik kazanır.
          </p>
        </div>
      </section>

      {/* 5. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Artırım Hangi Kaynaklarla Karşılanabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Sermaye artırımı, tek bir yöntemle sınırlı değil. Şirketin
          finansal yapısına göre en uygun kaynak seçilebilir:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Kaynak Seçenekleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Nakdi artırım:</strong> Ortakların taahhüt ettiği
              tutarı şirket banka hesabına yatırmasıyla yapılır.
            </li>
            <li>
              <strong>İç kaynaklardan artırım:</strong> Şirket
              bilançosunda yer alan yedek akçeler ve geçmiş yıl kârları,
              sermayeye eklenerek artırım nakit çıkışı olmadan
              gerçekleştirilebilir.
            </li>
            <li>
              <strong>Ortak alacaklarının sermayeye dönüştürülmesi
              (takas):</strong> Ortağın şirketten olan onaylı alacağı,
              sermaye payına dönüştürülebilir.
            </li>
            <li>
              <strong>Ayni sermaye:</strong> Taşınmaz, makine veya diğer
              değerlenebilir varlıkların sermayeye konulması da mümkündür;
              ancak bu durumda mahkemece atanan bilirkişi tarafından
              değerleme raporu düzenlenmesi gerekir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          İç kaynaklardan artırım, ortaklardan ek nakit istemeden
          yükümlülüğü kapatmak isteyen şirketler için pratikte en sık
          tercih edilen yöntemlerden biri; ancak bunun için şirket
          bilançosunda yeterli yedek akçe veya dağıtılmamış kâr bulunması
          gerekir. Hangi yöntemin şirketiniz için daha uygun ve maliyet
          etkin olduğu, güncel mali tablolarınız üzerinden
          değerlendirilmelidir.
        </p>
      </section>

      {/* 6. İNFİSAH */}
      <section id="infisah" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Süreyi Kaçırırsanız Ne Olur?
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <p className="mb-6 leading-8 text-gray-700">
            Geçici Madde 15, 31 Aralık 2026&apos;ya kadar sermayesini
            gerekli asgari tutara yükseltmeyen anonim ve limited
            şirketlerin, <strong>infisah etmiş sayılacağını</strong>{" "}
            öngörüyor. İnfisah, şirketin ek bir mahkeme kararına gerek
            kalmaksızın kanun gereği münfesih hale gelmesi ve tasfiye
            sürecine girmesi anlamına gelir. Bu durum ticari faaliyetleri,
            banka ilişkilerini, ihale ve kamu işlemlerini doğrudan
            etkileyebilir.
          </p>
          <p className="leading-8 text-gray-700">
            Kanun, Ticaret Bakanlığı&apos;na bu 31 Aralık 2026 tarihini{" "}
            <strong>birer yıl olarak en fazla iki defa uzatma</strong>{" "}
            yetkisi de tanıyor. Ancak böyle bir uzatma kararı henüz
            gerçekleşmemişse, bugünkü mevzuat çerçevesinde şirketlerin
            süreci 2026 yılı sonuna kadar tamamlamış olması gerektiği
            varsayımıyla hareket etmesi en güvenli yaklaşımdır. Olası bir
            uzatma resmi olarak ilan edilene kadar sürecin ertelenmesi
            riskli bir tercih olur.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Esas sözleşmenizdeki güncel sermaye tutarını bugünden kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıl sonu yoğunluğunu beklemeden süreci erken başlatın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İç kaynak kullanmayı planlıyorsanız yedek akçe/kâr tutarını mali tablolarla teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ayni sermaye koyacaksanız bilirkişi değerleme sürecinin süre alacağını hesaba katın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Birden fazla şirketiniz varsa her birinin sermaye durumunu ayrı ayrı kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kayıtlı sermaye sistemindeki halka kapalı A.Ş.&apos;lerde 500.000 TL eşiğini gözden kaçırmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ticaret Bakanlığı&apos;nın olası uzatma açıklamalarını resmî kaynaklardan takip edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Artırım kararının Türkiye Ticaret Sicili Gazetesi&apos;nde ilan edildiğinden emin olun
          </div>
        </div>
      </section>

      {/* 8. BİZ */}
      <section id="biz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Süreci Sizin Yerinize Biz Yürütelim
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Sermaye Artırımı ve Sonrasındaki Mali Süreçler Tek Elden
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin sermaye artırımı kararının hazırlanmasından esas
            sözleşme tadiline, ticaret sicili tesciline ve
            muhasebeleştirme sürecine kadar tüm adımları Koray Akdağ /
            Sistem Global Danışmanlık olarak tek noktadan yürütüyoruz. Ayrı
            bir mali müşavir veya hukuk bürosu aramanıza gerek kalmadan,
            hem uyum sürecinizi hem de sonrasındaki muhasebe ve raporlama
            ihtiyaçlarınızı birlikte yönetebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin mevcut sermaye durumunu birlikte değerlendirmek
              için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sermayesi zaten 250.000 TL&apos;nin (veya 50.000 TL&apos;nin) üzerinde olan şirketler bu düzenlemeden etkilenir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Mevcut sermayesi yeni asgari tutarların üzerinde veya
              eşit olan anonim ve limited şirketler için ek bir artırım
              yükümlülüğü bulunmuyor. Yükümlülük yalnızca sermayesi bu
              tutarların altında kalan şirketleri kapsıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2024 yılından sonra kurulan bir şirketin de sermayesini artırması gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              1 Ocak 2024 ve sonrasında kurulan anonim ve limited şirketler
              zaten yeni asgari tutarlarla (250.000 TL / 50.000 TL)
              kurulmak zorunda olduğundan, kuruluş anında bu yükümlülüğü
              yerine getirmiş sayılırlar. Geçiş süresi, esas olarak
              2024 öncesi kurulmuş şirketler için geçerlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sermaye artırımını sadece nakit olarak mı yapmak gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Nakdi artırımın yanı sıra yedek akçe ve geçmiş yıl
              kârları gibi iç kaynaklardan artırım, ortak alacaklarının
              sermayeye dönüştürülmesi veya ayni sermaye konulması gibi
              yöntemler de mevzuata uygun şekilde kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              31 Aralık 2026 tarihi kesin mi, uzatılma ihtimali var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kanun, Ticaret Bakanlığı&apos;na bu süreyi birer yıl olarak en
              fazla iki kez uzatma yetkisi tanımıştır. Ancak resmî bir
              uzatma kararı yayımlanana kadar mevcut son tarih olan 31
              Aralık 2026 esas alınmalı; sürecin bu tarihe göre planlanması
              en güvenli yaklaşımdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sermaye artırımı ne kadar sürede tamamlanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Kararın alınmasından ticaret siciline tescile kadar olan
              süreç, şirketin hazırlık durumuna ve seçilen artırım
              yöntemine göre değişmekle birlikte genellikle birkaç hafta
              içinde tamamlanabilir. Ancak yıl sonuna doğru noter ve
              ticaret sicili yoğunluğu artabileceğinden, sürecin son
              haftalara bırakılmaması önerilir.
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
          7511 sayılı Kanun ile getirilen sermaye artırımı yükümlülüğü,
          özellikle uzun süredir sermayesini güncellememiş anonim ve
          limited şirketler için 2026&apos;nın en somut ve tarihi kesin
          uyum gündemlerinden biri. 31 Aralık 2026 son tarihine kadar
          sermayesini yeni asgari tutarlara yükseltmeyen şirketler için
          kanun infisah riskinden söz ediyor; bu nedenle sürecin erkenden,
          şirketin mevcut mali durumuna en uygun yöntemle planlanması
          büyük önem taşıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin mevcut sermaye durumunun kontrolünden artırım
          kararının hazırlanmasına, ticaret sicili tescilinden sonrasındaki
          muhasebe ve raporlama süreçlerine kadar tüm adımlarda Koray
          Akdağ / Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir
          mali müşavirlik veya hukuk bürosu aramanıza gerek kalmadan
          süreci birlikte yönetmek için bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/turkiyede-adan-zye-sirket-kurmak-avantajlari"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • TÜRKİYE • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Türkiye'de A'dan Z'ye Şirket Kurmak: Avantajları Nelerdir?</h3>
        </Link>
        <Link
          href="/blog/sahis-limited-anonim-sirket-karsilastirma"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • GİRİŞİMCİLİK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şahıs Şirketi mi, Limited Şirket mi Yoksa Anonim Şirket mi?</h3>
        </Link>
        <Link
          href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ'ler İçin Neden Kritik?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
