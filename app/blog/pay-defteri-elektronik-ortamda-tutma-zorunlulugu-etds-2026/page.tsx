import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Pay Defteri Elektronik Ortamda Tutulma Zorunluluğu: ETDS Rehberi | Koray Akdağ",
  description: "1 Ocak 2026'dan sonra ticaret siciline tescil edilen tüm şirketler pay defterini ve genel kurul toplantı ve müzakere defterini Elektronik Ticari Defter Sistemi'nde (ETDS) tutmak zorunda. Kapsam, yönetim kurulu karar defteriyle farkı, başvuru süreci ve dikkat edilmesi gerekenlerle 2026 güncel rehber.",
  keywords: [
    "pay defteri elektronik ortamda tutulması zorunlu mu",
    "ETDS nedir",
    "elektronik ticari defter sistemi",
    "genel kurul toplantı ve müzakere defteri elektronik",
    "yeni şirket pay defteri 2026",
    "şirket kuruluşu sonrası yükümlülükler",
    "yönetim kurulu karar defteri elektronik mi",
    "etds.ticaret.gov.tr",
  ],
  alternates: {
    canonical: "/blog/pay-defteri-elektronik-ortamda-tutma-zorunlulugu-etds-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yeni Kurduğunuz Şirkette Pay Defteri Elektronik Olmak Zorunda mı? ETDS Rehberi"
      description="1 Ocak 2026'dan itibaren ticaret siciline tescil edilen tüm ticaret şirketleri, pay defterini ve genel kurul toplantı ve müzakere defterini Elektronik Ticari Defter Sistemi'nde (ETDS) tutmak zorunda. Hangi defterler kapsamda, hangi şirketler zorunlu, yönetim kurulu karar defteriyle farkı, başvuru süreci ve dikkat edilmesi gerekenlerle güncel rehber."
      category="TİCARET HUKUKU • ELEKTRONİK TİCARİ DEFTER SİSTEMİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="pay-defteri-elektronik-ortamda-tutma-zorunlulugu-etds-2026"
      coverImage="https://images.unsplash.com/photo-1780246032682-b2dd1a6291d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yeni Şirketinizin Kuruluş Sonrası Yükümlülüklerini Birlikte Yönetelim"
      ctaText="Şirketinizin pay defteri dahil ETDS yükümlülüklerini, kuruluş evraklarından mevzuat takibine kadar tüm süreci birlikte planlayalım."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Pay Defterim Elektronik Olmak Zorunda mı?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>1 Ocak 2026</strong>&apos;dan itibaren ticaret siciline tescil edilen <strong>tüm</strong> ticaret şirketleri (kolektif, komandit, anonim, limited, kooperatifler dahil), pay defterini ve genel kurul toplantı ve müzakere defterini <strong>Elektronik Ticari Defter Sistemi&apos;nde (ETDS)</strong> tutmak zorunda.</li>
          <li>✔ Dayanak, <strong>14 Şubat 2025</strong> tarihli ve <strong>32813 sayılı</strong> Resmî Gazete&apos;de yayımlanan Tebliğ; 10 Temmuz 2025 ve 20 Eylül 2025 tarihli değişikliklerle kapsam netleşti.</li>
          <li>✔ Yönetim kurulu karar defteri (limited şirkette müdürler kurulu karar defteri) bu zorunluluğun <strong>dışında</strong>; elektronik tutmak isteğe bağlı.</li>
          <li>✔ Esas sözleşme değişikliği Bakanlık iznine tabi olan mevcut şirketler (bankalar, sigorta şirketleri, holdingler, serbest bölge kurucusu/işleticisi şirketler gibi) için geçiş süresi <strong>1 Ocak 2026&apos;da</strong> doldu.</li>
          <li>✔ Yeni kurulan şirketlerde defterler, ticaret siciline tescille birlikte ek bir işleme gerek kalmadan otomatik olarak açılıyor.</li>
          <li>✔ Elektronik ortamda tutulan defterler için noter veya ticaret sicili müdürlüğünden açılış/kapanış onayı aranmıyor.</li>
          <li>✔ ETDS, <strong>e-Defter</strong> (GİB&apos;in muhasebe defterleri sistemi) ile karıştırılmamalı; ikisi farklı kurumun yürüttüğü, farklı defterleri kapsayan ayrı sistemler.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. ETDS Nedir, Neden Şimdi Gündemde?
          </Link>
          <Link href="#defterler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi Defterler Kapsamda, Hangileri İsteğe Bağlı?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Şirketler Zorunlu Kapsamda?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırmayın: ETDS, e-Defter&apos;den Farklı Bir Sistem
          </Link>
          <Link href="#yenisirket" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yeni Kurulan Şirketlerde Süreç Nasıl İşliyor?
          </Link>
          <Link href="#mevcut" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Mevcut (İzne Tabi) Şirketlerde Geçiş Süreci
          </Link>
          <Link href="#tasdik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Tasdik (Açılış/Kapanış Onayı) Nasıl Değişti?
          </Link>
          <Link href="#sorumluluk" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sorumluluk ve Uymamanın Riskleri
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. ETDS Nedir, Neden Şimdi Gündemde?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Elektronik Ticari Defter Sistemi (ETDS), Türk Ticaret Kanunu&apos;nun
          64. maddesinde sayılan ve muhasebeyle doğrudan ilgili olmayan ticari
          defterlerin, yani pay defteri, yönetim kurulu karar defteri
          (limited şirkette müdürler kurulu karar defteri) ile genel kurul
          toplantı ve müzakere defterinin kağıt ortam yerine elektronik
          ortamda tutulmasını sağlayan bir Ticaret Bakanlığı sistemidir.
          Sistem 1 Temmuz 2025&apos;te kullanıma açıldı, ancak şirketler
          için gerçek dönüm noktası <strong>1 Ocak 2026</strong>: bu
          tarihten sonra kurulan her ticaret şirketi, pay defteri ve genel
          kurul defteriyle doğrudan ETDS üzerinden tanışıyor.
        </p>
        <p className="leading-8 text-gray-700">
          Konunun şirket kuruluşu danışmanlığı açısından önemi şu: artık bir
          şirket kurulduğu andan itibaren bu iki defter fiziki olarak değil,
          dijital olarak var oluyor. Kuruluş sürecini yürüten kişi veya
          danışmanın bu detayı atlaması, ilerideki bir pay devri, sermaye
          artırımı veya genel kurul işleminde belge eksikliğine yol
          açabiliyor. Bu yazıda kapsamı, kimlerin zorunlu olduğunu ve
          sürecin adım adım nasıl işlediğini resmî kaynaklara dayanarak
          anlatıyoruz.
        </p>
      </section>

      {/* 2. DEFTERLER */}
      <section id="defterler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi Defterler Kapsamda, Hangileri İsteğe Bağlı?
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          Dayanak Tebliğ, dört farklı deftere değiniyor; ancak bunlardan
          sadece ikisi zorunlu elektronik kapsamda. Aradaki fark, çoğu
          girişimcinin gözden kaçırdığı önemli bir ayrım.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Defter</th>
                <th className="p-4">Elektronik Tutma</th>
                <th className="p-4">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Pay Defteri</td>
                <td className="p-4 text-emerald-700 font-semibold">Zorunlu</td>
                <td className="p-4">Kapsamdaki şirketlerde ETDS üzerinde tutulur.</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Genel Kurul Toplantı ve Müzakere Defteri</td>
                <td className="p-4 text-emerald-700 font-semibold">Zorunlu</td>
                <td className="p-4">Kapsamdaki şirketlerde ETDS üzerinde tutulur.</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Yönetim Kurulu Karar Defteri</td>
                <td className="p-4 text-gray-500">İsteğe bağlı</td>
                <td className="p-4">Fiziki veya elektronik tutulabilir, şirketin tercihine bırakılmış.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Müdürler Kurulu Karar Defteri (Limited Şirket)</td>
                <td className="p-4 text-gray-500">İsteğe bağlı</td>
                <td className="p-4">Yönetim kurulu karar defteriyle aynı muafiyete tabi.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Elektronik tutmaya başlayan bir şirket, aynı defter için tekrar
            fiziki ortama dönemiyor. Ayrıca zorunlu kapsamın dışında kalan
            bir şirket, isteğe bağlı olarak elektroniğe geçerse, bu durumda
            pay defterini ve genel kurul defterini de elektronik ortamda
            tutmak zorunda hale geliyor; kısmi/karma bir geçiş mümkün değil.
          </p>
        </div>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Şirketler Zorunlu Kapsamda?
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Zorunlu Kapsamdaki Şirketler
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔ <strong>1 Ocak 2026&apos;dan itibaren ticaret siciline tescil edilen</strong> tüm ticaret şirketleri: kolektif, komandit, anonim, sermayesi paylara bölünmüş komandit ve limited şirketler ile kooperatifler.</li>
            <li>✔ Esas sözleşme değişikliği <strong>Ticaret Bakanlığı iznine tabi</strong> olan mevcut anonim şirketler; örnekleri arasında bankalar, finansal kiralama/faktoring/tüketici finansmanı şirketleri, sigorta şirketleri, holdingler, serbest bölge kurucusu ve işleticisi şirketler ile sermaye piyasası mevzuatına tabi (halka açık) şirketler sayılabilir. Bu şirketler için geçiş süresi <strong>1 Ocak 2026</strong>&apos;da doldu.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
            Muafiyet Tanınan Şirketler
          </h3>
          <p className="leading-8 text-gray-700">
            Savunma sanayii alanında faaliyet gösteren belirli şirketler ile
            Elektronik Yöntemlerle Düzenlenen ve Elektronik Platformda
            Değerlendirilen Belgeler (EYDEP) A sertifikasına sahip şirketler,
            Tebliğ&apos;in 5/6. maddesi gereği bu zorunluluktan muaf.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu iki grubun dışında kalan, yani 1 Ocak 2026&apos;dan önce
          kurulmuş ve esas sözleşme değişikliği izne tabi olmayan sıradan
          bir limited veya anonim şirket için şu an elektroniğe geçiş
          zorunlu değil; ancak isteyen her şirket ETDS&apos;ye gönüllü olarak
          kayıt olabiliyor.
        </p>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırmayın: ETDS, e-Defter&apos;den Farklı Bir Sistem
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ &quot;Zaten e-Defter Kullanıyoruz&quot; Demek Yetmiyor
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Mali müşaviri olan her şirket sahibi, muhasebe defterlerinin
            (yevmiye defteri, defteri kebir, envanter defteri) zaten Gelir
            İdaresi Başkanlığı&apos;nın e-Defter sistemi üzerinden elektronik
            tutulduğunu bilir. Bu bilgiden hareketle pay defteri ve genel
            kurul defterinin de otomatik olarak elektronik sayıldığını
            düşünmek, sahada en sık rastlanan yanılgılardan biri.
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">ETDS</th>
                  <th className="p-4">e-Defter (GİB)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Hangi defterleri kapsar</td>
                  <td className="p-4">Pay defteri, genel kurul defteri (isteğe bağlı: yönetim kurulu karar defteri)</td>
                  <td className="p-4">Yevmiye defteri, defteri kebir gibi muhasebe defterleri</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Yürüten kurum</td>
                  <td className="p-4">Ticaret Bakanlığı</td>
                  <td className="p-4">Gelir İdaresi Başkanlığı</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Hukuki dayanak</td>
                  <td className="p-4">TTK madde 64 ve ilgili Tebliğ</td>
                  <td className="p-4">Vergi Usul Kanunu ve e-Defter Genel Tebliği</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            İki sistem birbirinden tamamen bağımsız çalışıyor. Bir şirketin
            e-Defter mükellefi olması, ETDS kapsamındaki pay ve genel kurul
            defteri yükümlülüğünü karşılamıyor; her iki sistemin durumu ayrı
            ayrı kontrol edilmeli.
          </p>
        </div>
      </section>

      {/* 5. YENİ ŞİRKET */}
      <section id="yenisirket" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yeni Kurulan Şirketlerde Süreç Nasıl İşliyor?
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">📝</div>
            <h3 className="text-xl font-bold">1. Tescil</h3>
            <p className="mt-3 text-sm text-gray-600">
              Şirket ticaret siciline tescil edilir; pay defteri ve genel
              kurul defteri ek bir işleme gerek kalmadan ETDS&apos;de
              otomatik olarak açılır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🖊️</div>
            <h3 className="text-xl font-bold">2. Kullanıcı Belirleme</h3>
            <p className="mt-3 text-sm text-gray-600">
              Ek-2 formuyla sisteme giriş yapacak kullanıcı belirlenir; bu
              form, kuruluş belgeleriyle birlikte ticaret sicili
              müdürlüğüne teslim edilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-5xl">🔗</div>
            <h3 className="text-xl font-bold">3. MERSİS Tanımı</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kullanıcı bilgileri MERSİS&apos;e işlenir; şirket, ilk pay
              kaydını ve ilk genel kurulunu doğrudan ETDS üzerinden
              yapabilir hale gelir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte bu, şirket kuruluş sürecini yürüten kişinin artık
            kuruluş evraklarının yanına noterden tasdikli bir pay defteri
            eklemesine gerek olmadığı, ancak ETDS kullanıcı yetkilendirmesini
            kuruluş dosyasına dahil etmesi gerektiği anlamına geliyor. Bu
            adımın atlanması, ileride ilk pay devrinde veya ilk genel
            kurulda gecikmeye yol açabiliyor.
          </p>
        </div>
      </section>

      {/* 6. MEVCUT ŞİRKETLER */}
      <section id="mevcut" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Mevcut (İzne Tabi) Şirketlerde Geçiş Süreci
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Esas sözleşme değişikliği Bakanlık iznine tabi olan ve halihazırda
          faaliyette olan şirketler için süreç biraz farklı işliyor, çünkü
          elde zaten fiziki bir pay defteri ve genel kurul defteri var.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Noterde Kapanış Onayı</h3>
            <p className="mt-2 text-sm text-gray-600">Mevcut fiziki defterlere noter tarafından kapanış şerhi düşülür.</p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Kullanıcı Tanımı</h3>
            <p className="mt-2 text-sm text-gray-600">Noter, kullanıcı ve kapanış bilgilerini Sisteme tanımlar.</p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">ETDS Aktivasyonu</h3>
            <p className="mt-2 text-sm text-gray-600">Bu bilgiler tanımlandığında şirketin ETDS hesabı aktif hale gelir.</p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            20 Eylül 2025 tarihli ve 33023 sayılı Resmî Gazete&apos;de
            yayımlanan değişiklikle, fiziki defterden elektroniğe geçiş için
            tanınan süre 2 aydan <strong>6 aya</strong> çıkarıldı. Yükümlülüğün
            doğduğu tarihten (örneğin esas sözleşme değişikliği izninin
            alındığı tarihten) itibaren en geç 6 ay içinde noterde kapanış
            onayının yaptırılması gerekiyor.
          </p>
        </div>
      </section>

      {/* 7. TASDİK */}
      <section id="tasdik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Tasdik (Açılış/Kapanış Onayı) Nasıl Değişti?
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Fiziki defter düzeninde her yıl noterde açılış, ertesi yıl kapanış
          onayı yaptırmak gerekiyordu. ETDS kapsamındaki elektronik
          defterler için bu uygulama tamamen kalktı.
        </p>
        <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
          <p className="leading-8 text-gray-700">
            Tebliğ&apos;in 5/5. maddesi açık: <strong>&quot;Elektronik
            ortamda tutulan defterler için açılış ve kapanış onayı
            aranmaz.&quot;</strong> Yani ETDS&apos;deki pay defteri ve genel
            kurul defteri için artık ne noter ne de ticaret sicili
            müdürlüğü onayına gidilmesi gerekiyor; sistem kaydının kendisi
            resmî niteliği taşıyor.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu kuralın istisnası, henüz fiziki defter tutan ve elektroniğe
          geçiş yükümlülüğü doğan şirketler: bu şirketler, yukarıda
          anlatıldığı gibi mevcut fiziki deftere en geç 6 ay içinde noterde
          kapanış onayı yaptırmak zorunda; isteğe bağlı geçişte ise bu süre
          kararın alındığı hesap dönemi içinde tamamlanmalı.
        </p>
      </section>

      {/* 8. SORUMLULUK */}
      <section id="sorumluluk" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sorumluluk ve Uymamanın Riskleri
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Tebliğ metninde ETDS&apos;ye geçmemek için ayrıca bir idari para cezası maddesi yer almıyor; ancak defterlerin usulüne uygun tutulmasındaki sorumluluk, Türk Ticaret Kanunu&apos;nun 553. maddesi çerçevesinde doğrudan yönetim organı ve yöneticilere ait. Bakanlık, defter içeriğinin doğruluğundan sorumlu değil.</li>
            <li>Pay defteri veya genel kurul defteri usulsüz ya da eksik tutulmuşsa, bu durum bir pay devri, sermaye artırımı veya genel kurul kararının geçerliliği tartışmasında şirket aleyhine kullanılabiliyor.</li>
            <li>Esas sözleşme değişikliği izne tabi şirketlerde, Bakanlık&apos;a sunulan izin başvurusu sırasında ETDS&apos;ye geçiş durumu sorgulanabiliyor; eksik geçiş, başvuru sürecini uzatabiliyor.</li>
            <li>İnceleme ve ibraz yükümlülüğü şirkete ait: bir denetim veya uyuşmazlık halinde defterlerin ETDS üzerinden eksiksiz sunulabilmesi gerekiyor.</li>
          </ul>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
            <li>Elektroniğe geçen bir defter bir daha fiziki ortama döndürülemiyor; bu nedenle isteğe bağlı geçiş kararını vermeden önce şirketin tüm defterlerinin (yönetim kurulu karar defteri dahil) elektronik hale getirileceğini unutmamak gerekiyor.</li>
            <li>Yeni kurulan bir şirketseniz, kuruluş dosyasında ETDS kullanıcı yetkilendirme formunun (Ek-2) eksiksiz hazırlandığından emin olun; bu adım atlanırsa ilk pay kaydı veya genel kurul işlemi gecikebilir.</li>
            <li>Esas sözleşme değişikliği izne tabi bir şirketseniz ve henüz ETDS&apos;ye geçmediyseniz, 1 Ocak 2026 tarihli geçiş süresi dolmuş durumda; bu durumu önceliklendirmeniz gerekiyor.</li>
            <li>Kullanıcı değişikliği (örneğin yeni bir yönetici atanması) gerektiğinde Ek-2 formuyla yeniden başvuru yapılması gerektiğini unutmayın; bu işlem bazı durumlarda elektronik ortamda da yapılabiliyor.</li>
            <li>ETDS ile e-Defter, e-Fatura gibi diğer dijital yükümlülükleri birbirinden ayrı sistemler olarak takip edin; birinde kayıtlı olmak diğerinde kayıtlı olunduğu anlamına gelmiyor.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, pay defterinin ETDS&apos;de
            otomatik açılmasının, şirketin pay hareketlerini de otomatik
            olarak kaydettiği anlamına gelmediğidir. Sistem sadece defterin
            dijital olarak var olmasını sağlıyor; bir pay devri veya sermaye
            artırımı gerçekleştiğinde ilgili kaydın ETDS üzerinden bizzat
            işlenmesi gerekiyor. Bu nedenle özellikle birden fazla ortağı
            olan yeni kurulan şirketlerde, ilk pay dağılımının kuruluşla
            birlikte ETDS&apos;ye doğru şekilde yansıtılması, ileride ortaklık
            yapısına ilişkin bir ihtilaf çıktığında kritik önem taşıyor.
          </p>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.lexpera.com.tr/mevzuat/tebligler/isletmenin-muhasebesiyle-ilgili-olmayan-ticari-defterlerin-elektronik-ortamda-tutulmasi-hakkinda-1" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                İşletmenin Muhasebesiyle İlgili Olmayan Ticari Defterlerin Elektronik Ortamda Tutulması Hakkında Tebliğ, 14 Şubat 2025, RG 32813
              </a>
            </li>
            <li>
              <a href="https://ticaret.gov.tr/haberler/1-ocak-2026-tarihinden-sonra-kurulacak-sirketlerde-elektronik-ticari-defter-sistemi-zorunlu-olacak" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Ticaret Bakanlığı Duyurusu: 1 Ocak 2026&apos;dan Sonra Kurulacak Şirketlerde Elektronik Ticari Defter Sistemi Zorunlu Olacak
              </a>
            </li>
            <li>
              <a href="https://www.mkk.com.tr/sites/default/files/2025-12/GM1054.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Merkezi Kayıt Kuruluşu (MKK) Genel Mektup No. 1054, 5 Aralık 2025
              </a>
            </li>
            <li>
              <a href="https://etds.ticaret.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Elektronik Ticari Defter Sistemi (ETDS) Portalı - etds.ticaret.gov.tr
              </a>
            </li>
            <li>
              <a href="https://ticaret.gov.tr/ic-ticaret/sirketler/kurulusu-ve-esas-sozlesme-degisikligi-bakanlik-iznine-tabi-sirketler" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Ticaret Bakanlığı: Kuruluşu ve Esas Sözleşme Değişikliği Bakanlık İznine Tabi Şirketler
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da kurduğum şirket için pay defterini ayrıca mı başvurmam gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 1 Ocak 2026&apos;dan sonra ticaret siciline tescil
              edilen şirketlerde pay defteri ve genel kurul defteri, tescil
              anında otomatik olarak ETDS üzerinde açılıyor. Ek olarak
              yapmanız gereken şey, sisteme giriş yapacak kullanıcıyı Ek-2
              formuyla belirlemek.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yönetim kurulu karar defterim hâlâ fiziki olabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Yönetim kurulu karar defteri (limited şirkette müdürler
              kurulu karar defteri) zorunlu elektronik kapsamın dışında;
              şirket isterse fiziki, isterse elektronik tutabilir. Ancak
              elektroniğe geçtikten sonra tekrar fiziki ortama dönülemiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2025&apos;te kurulan bir limited şirketim var, ETDS zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Zorunlu kapsam, kuruluş tarihi 1 Ocak 2026 ve sonrası olan
              şirketleri ve esas sözleşme değişikliği Bakanlık iznine tabi
              olan şirketleri kapsıyor. 1 Ocak 2026&apos;dan önce kurulmuş
              ve izne tabi olmayan sıradan bir limited şirket için şu an
              zorunluluk yok; isteğe bağlı olarak ETDS&apos;ye geçilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              ETDS ile e-Defter aynı sistem mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. ETDS, Ticaret Bakanlığı&apos;nın yürüttüğü ve pay
              defteri ile genel kurul defterini kapsayan bir sistem.
              e-Defter ise Gelir İdaresi Başkanlığı&apos;nın yürüttüğü,
              yevmiye defteri ve defteri kebir gibi muhasebe defterlerini
              kapsayan ayrı bir sistem. Birinde kayıtlı olmak diğerindeki
              yükümlülüğü karşılamıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Elektronik pay defteri için her yıl noter tasdiki gerekiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Tebliğ&apos;in 5/5. maddesi gereği elektronik ortamda
              tutulan defterler için açılış ve kapanış onayı aranmıyor.
              Tasdik gerekliliği, henüz fiziki defter tutan ve elektroniğe
              geçiş yapan şirketler için geçerli; bu şirketler mevcut fiziki
              deftere en geç 6 ay içinde noterde kapanış onayı yaptırmak
              zorunda.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketimiz bu kapsamda değilse ETDS&apos;ye kayıt olmamız gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, zorunlu değil. Ancak isteyen her şirket ETDS&apos;ye
              gönüllü olarak kayıt olabilir. Bu tercih yapıldığında pay
              defteri ve genel kurul defterinin de elektronik ortamda
              tutulması zorunlu hale geliyor; kısmi geçiş mümkün değil.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Kuruluş Sonrası Yükümlülüklerini Birlikte Yönetelim
          </h3>
          <p className="leading-8 text-gray-700">
            Yeni bir şirket kuruyorsanız ya da mevcut şirketinizin ETDS
            geçişini henüz tamamlamadıysanız, kuruluş evraklarından pay
            defteri kullanıcı yetkilendirmesine, ardından gelen vergi ve
            mevzuat takibine kadar tüm süreci Koray Akdağ / Sistem Global
            Danışmanlık olarak bizzat yürütüyoruz; ayrı bir yerel mali
            müşavir veya hukuk bürosu aramanıza gerek kalmıyor.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Pay defteri ve genel kurul toplantı ve müzakere defterinin
          elektronik ortamda tutulması, 2026&apos;da kurulan şirketler için
          artık bir seçenek değil, kuruluşun doğal bir parçası. Yönetim
          kurulu karar defteri gibi hâlâ isteğe bağlı kalan defterlerle bu
          ikisini birbirine karıştırmamak, ETDS&apos;yi e-Defter&apos;le
          aynı sistem zannetmemek ve kuruluş sürecinde kullanıcı
          yetkilendirmesini atlamamak, şirket sahiplerinin en çok dikkat
          etmesi gereken üç nokta.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirket
          kuruluşundan ETDS ve diğer dijital yükümlülüklerin takibine kadar
          tüm süreci tek elden yürütüyor, müşterilerimizin kuruluş sonrası
          hiçbir detayı gözden kaçırmamasını sağlıyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/sahis-limited-anonim-sirket-karsilastirma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • GİRİŞİMCİLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şahıs Şirketi mi, Limited mi, Anonim mi?</h3>
          </Link>
          <Link
            href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKETLER HUKUKU • ASGARİ SERMAYE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Anonim ve Limited Şirketlerde Asgari Sermaye Artırımı</h3>
          </Link>
          <Link
            href="/blog/turkiyede-adan-zye-sirket-kurmak-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • TÜRKİYE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de A&apos;dan Z&apos;ye Şirket Kurmak</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"2026'da kurduğum şirket için pay defterini ayrıca mı başvurmam gerekiyor?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 1 Ocak 2026'dan sonra ticaret siciline tescil edilen şirketlerde pay defteri ve genel kurul defteri, tescil anında otomatik olarak ETDS üzerinde açılıyor. Ek olarak yapmanız gereken şey, sisteme giriş yapacak kullanıcıyı Ek-2 formuyla belirlemek."}},{"@type":"Question","name":"Yönetim kurulu karar defterim hâlâ fiziki olabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Evet. Yönetim kurulu karar defteri (limited şirkette müdürler kurulu karar defteri) zorunlu elektronik kapsamın dışında; şirket isterse fiziki, isterse elektronik tutabilir. Ancak elektroniğe geçtikten sonra tekrar fiziki ortama dönülemiyor."}},{"@type":"Question","name":"2025'te kurulan bir limited şirketim var, ETDS zorunlu mu?","acceptedAnswer":{"@type":"Answer","text":"Zorunlu kapsam, kuruluş tarihi 1 Ocak 2026 ve sonrası olan şirketleri ve esas sözleşme değişikliği Bakanlık iznine tabi olan şirketleri kapsıyor. 1 Ocak 2026'dan önce kurulmuş ve izne tabi olmayan sıradan bir limited şirket için şu an zorunluluk yok; isteğe bağlı olarak ETDS'ye geçilebilir."}},{"@type":"Question","name":"ETDS ile e-Defter aynı sistem mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. ETDS, Ticaret Bakanlığı'nın yürüttüğü ve pay defteri ile genel kurul defterini kapsayan bir sistem. e-Defter ise Gelir İdaresi Başkanlığı'nın yürüttüğü, yevmiye defteri ve defteri kebir gibi muhasebe defterlerini kapsayan ayrı bir sistem. Birinde kayıtlı olmak diğerindeki yükümlülüğü karşılamıyor."}},{"@type":"Question","name":"Elektronik pay defteri için her yıl noter tasdiki gerekiyor mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Tebliğ'in 5/5. maddesi gereği elektronik ortamda tutulan defterler için açılış ve kapanış onayı aranmıyor. Tasdik gerekliliği, henüz fiziki defter tutan ve elektroniğe geçiş yapan şirketler için geçerli; bu şirketler mevcut fiziki deftere en geç 6 ay içinde noterde kapanış onayı yaptırmak zorunda."}},{"@type":"Question","name":"Şirketimiz bu kapsamda değilse ETDS'ye kayıt olmamız gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, zorunlu değil. Ancak isteyen her şirket ETDS'ye gönüllü olarak kayıt olabilir. Bu tercih yapıldığında pay defteri ve genel kurul defterinin de elektronik ortamda tutulması zorunlu hale geliyor; kısmi geçiş mümkün değil."}}]}) }}
      />
    </BlogLayout>
  );
}
