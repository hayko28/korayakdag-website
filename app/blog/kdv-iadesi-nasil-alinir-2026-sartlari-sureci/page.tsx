import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KDV İadesi Nasıl Alınır? 2026 Şartları ve Süreci | Koray Akdağ",
  description:
    "İhracat istisnası, indirimli oran ve tevkifattan doğan KDV iadesinde nakden/mahsuben yöntemler, YMM Tam Tasdik raporunun rolü, 2026 güncel limitler ve adım adım başvuru süreci.",
  keywords: [
    "kdv iadesi nasıl alınır",
    "kdv iade süreci",
    "kdv iade şartları 2026",
    "ymm tam tasdik kdv iade",
    "kdv iade talep dilekçesi",
    "nakden kdv iade",
    "mahsuben kdv iade",
    "teminat mektubu ile kdv iade",
    "kdv iade süresi ne kadar",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KDV İadesi Nasıl Alınır? 2026 Şartları ve Süreci"
      description="İhracat istisnası, indirimli orana tabi işlemler ve tevkifat uygulamasından doğan KDV alacağının nakden/mahsuben tahsili, YMM Tam Tasdik raporunun sağladığı hız avantajı, 2026 güncel limit tablosu ve adım adım başvuru süreciyle kapsamlı rehber."
      category="VERGİ DANIŞMANLIĞI • KDV İADESİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kdv-iadesi-nasil-alinir-2026-sartlari-sureci"
      coverImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İhracat yapan, indirimli orana tabi mal/hizmet satan veya
          tevkifatlı işlem gerçekleştiren pek çok şirketin bilançosunda,
          hiç kullanılamayan ve büyümeyi finanse edebilecek bir KDV alacağı
          birikir. Bu alacağın nakde dönüşmesi, doğru yöntemin seçilmesine
          ve sürecin usulüne uygun yürütülmesine bağlıdır.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ KDV iadesi hangi işlemlerden doğar?</li>
          <li>✔ Mahsuben, nakden, YMM raporlu ve teminat mektuplu iade arasındaki farklar</li>
          <li>✔ YMM Tam Tasdik sözleşmesinin iade sürecine kattığı hız</li>
          <li>✔ 2026 güncel iade limitleri</li>
          <li>✔ Adım adım başvuru süreci ve KDVİRA kontrolü</li>
          <li>✔ Sık yapılan hatalar ve dikkat edilmesi gerekenler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. KDV İadesi Nedir? Hangi İşlemlerden Doğar?
          </Link>
          <Link href="#yontemler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. İade Yöntemleri: Mahsuben, Nakden, YMM Raporlu, Teminatlı
          </Link>
          <Link href="#tam-tasdik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. YMM Tam Tasdik Sözleşmesinin Rolü
          </Link>
          <Link href="#limitler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. 2026 Güncel İade Limitleri
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#belgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Gerekli Belgeler ve Süreler
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. KDV İadesi Nedir? Hangi İşlemlerden Doğar?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KDV, işleyişi gereği alınan ile ödenen verginin farkı üzerinden
          hesaplanır. Ancak bazı işlemlerde kanun koyucu, mükellefin bu vergiyi
          nihai olarak üstlenmemesini amaçlar; bu durumda yüklenilen KDV
          indirim yoluyla giderilemez ve mükellefin lehine bir alacak
          (iade hakkı) doğar. Katma Değer Vergisi Genel Uygulama Tebliği,
          iadeye konu olabilecek işlemleri tek tek sayar.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">İşlem Türü</th>
                <th className="p-5">Yasal Dayanak</th>
                <th className="p-5">Kısa Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mal İhracatı</td>
                <td className="p-5">KDVK 11/1-a</td>
                <td className="p-5">Yurt dışına satılan mallara ilişkin yüklenilen KDV&apos;nin iadesi</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hizmet İhracatı</td>
                <td className="p-5">KDVK 11/1-b</td>
                <td className="p-5">Yurt dışındaki müşteriye verilen ve yurt dışında faydalanılan hizmetler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Roaming Hizmetleri</td>
                <td className="p-5">KDVK 11/1-c</td>
                <td className="p-5">Yurt dışındaki müşterilere sunulan uluslararası dolaşım hizmetleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Araç, Kıymetli Maden ve Petrol Aramaları İstisnası</td>
                <td className="p-5">KDVK 13</td>
                <td className="p-5">Deniz/hava/demiryolu taşıma araçları, petrol arama faaliyetleri gibi özel istisnalar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Taşımacılık İstisnası</td>
                <td className="p-5">KDVK 14</td>
                <td className="p-5">Transit ve uluslararası taşıma işleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Diplomatik İstisna</td>
                <td className="p-5">KDVK 15</td>
                <td className="p-5">Diplomatik temsilcilikler ve uluslararası kuruluşlara yapılan teslimler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tevkifat Uygulaması</td>
                <td className="p-5">KDVK 9</td>
                <td className="p-5">Alıcının KDV&apos;nin bir kısmını sorumlu sıfatıyla beyan ettiği işlemler (inşaat, temizlik, danışmanlık vb.)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İndirimli Orana Tabi İşlemler</td>
                <td className="p-5">KDVK 29/2</td>
                <td className="p-5">%1 veya %10 oranına tabi teslim/hizmetlerde yılı içinde indirilemeyen KDV&apos;nin yıl sonunda iadesi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Uygulamada en sık karşılaşılan üç iade türü ihracat istisnası,
            tevkifat uygulaması ve indirimli orana tabi işlemlerdir.
            İhracatçı ve imalatçı firmalarda bu üç kalem birlikte
            değerlendirildiğinde, KDV alacağı çoğu zaman şirketin nakit
            akışını doğrudan etkileyecek büyüklüğe ulaşır.
          </p>
        </div>
      </section>

      {/* 2. YÖNTEMLER */}
      <section id="yontemler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. İade Yöntemleri: Mahsuben, Nakden, YMM Raporlu, Teminatlı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KDV Genel Uygulama Tebliği, iade talebinin hangi belge ve
          teminatlarla karşılanacağını iade türüne ve talep edilen tutara
          göre farklılaştırır. Aynı iade hakkı, belgeye göre günler içinde
          veya aylar sonra tahsil edilebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yöntem</th>
                <th className="p-5">Nasıl İşler</th>
                <th className="p-5">Yaklaşık Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mahsuben İade</td>
                <td className="p-5">Alacak, mükellefin kendi vergi borçlarına (KDV, gelir/kurumlar vergisi, SGK prim borcu dahil) mahsup edilir</td>
                <td className="p-5">Standart dilekçe ve eksiksiz liste ile başvuru tarihi itibarıyla</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Nakden İade – Belgesiz</td>
                <td className="p-5">Belirli tutarın altındaki taleplerde rapor/teminat aranmadan doğrudan ödeme yapılır</td>
                <td className="p-5">Kontrol raporu olumlu ise kısa sürede</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">YMM Raporu ile Nakden İade</td>
                <td className="p-5">Tam Tasdik sözleşmesi bulunan mükelleflerde belirli limitlere kadar YMM KDV İadesi Tasdik Raporu ile teminatsız/incelemesiz ödeme yapılır</td>
                <td className="p-5">Rapor teslimini takiben görece hızlı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Teminat Mektubu ile İade</td>
                <td className="p-5">Banka teminat mektubu sunularak iade önce yapılır, teminat sonradan inceleme/YMM raporu sonucuna göre çözülür</td>
                <td className="p-5">YMM raporu + teminatla genellikle 5 iş günü</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergi İnceleme Raporu ile İade</td>
                <td className="p-5">Yüksek tutarlı veya teminatsız/YMM raporsuz taleplerde vergi müfettişi incelemesi sonucuna göre ödeme yapılır</td>
                <td className="p-5">İnceleme takvimine bağlı, en uzun süreç</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. TAM TASDİK */}
      <section id="tam-tasdik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. YMM Tam Tasdik Sözleşmesinin Rolü
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir Yeminli Mali Müşavir ile süresinde imzalanmış Tam Tasdik
          Sözleşmesi bulunması, KDV iade sürecinde belirleyici bir avantaj
          sağlar. Tam Tasdik kapsamındaki bir mükellef, belirli limitlere
          kadar olan iade taleplerini vergi incelemesi ve teminat
          aranmaksızın, YMM&apos;nin düzenlediği KDV İadesi Tasdik Raporu
          ile nakden veya mahsuben tahsil edebilir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hız
            </h3>
            <p className="text-gray-700">
              İnceleme sırası beklemek yerine, YMM raporunun tamamlanmasıyla
              iade süreci başlatılabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💰</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Teminatsız/İncelemesiz İşlem
            </h3>
            <p className="text-gray-700">
              Belirlenen tutar limitlerine kadar banka teminat mektubu
              blokesine veya inceleme takvimine bağlı kalınmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📋</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Daha Yüksek İmalatçı/İhracatçı Limiti
            </h3>
            <p className="text-gray-700">
              İmalatçı ihracatçılarda süresinde Tam Tasdik sözleşmesi
              bulunması, belgesiz aylık nakit iade sınırının daha yüksek
              uygulanmasını sağlar.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Uygulamada Tam Tasdik sözleşmesi olmayan bir şirket, belirli
            limitlerin üzerindeki her iade talebi için vergi incelemesi
            sırası beklemek zorunda kalabilir; bu süreç aylar sürebilir.
            Tam Tasdik sözleşmesi olan bir şirket için ise aynı tutar,
            YMM raporu ile çok daha kısa sürede tahsil edilebilir. Bu fark,
            özellikle düzenli ihracat yapan ve tevkifatlı iş gören
            şirketlerde nakit akışı planlaması açısından belirleyicidir.
          </p>
        </div>
      </section>

      {/* 4. LİMİTLER */}
      <section id="limitler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. 2026 Güncel İade Limitleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KDV iade limitleri her yıl yeniden değerleme oranına göre
          güncellenir; bu nedenle rakamlar yıldan yıla değişir. 2026 yılı
          için süresinde Tam Tasdik sözleşmesi bulunan mükelleflerin YMM
          raporuyla teminatsız/incelemesiz olarak alabildiği yaklaşık
          üst limitler şu şekildedir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">İade Türü</th>
                <th className="p-5">Yaklaşık 2026 Üst Limiti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Mal İhracatı, Roaming, Taşımacılık, Diplomatik İstisna,
                  Tevkifat (11/1-a, 11/1-c, 13, 14, 15, 9)
                </td>
                <td className="p-5">Yaklaşık 1.300.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İndirimli Orana Tabi İşlemler (29/2)</td>
                <td className="p-5">Yaklaşık 2.600.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Hizmet İhracatı (11/1-b)</td>
                <td className="p-5">Yaklaşık 350.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Önemli:</strong> Bu tutarlar yeniden değerleme oranıyla
            her yıl değiştiği ve iade türüne/işlemin özelliğine göre farklı
            hükümler uygulanabildiği için, başvuru öncesinde güncel tutarın
            mutlaka{" "}
            <a
              href="https://www.gib.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı
            </a>{" "}
            ve ilgili KDV Genel Uygulama Tebliği&apos;nin güncel metninden
            teyit edilmesi gerekir. Limitlerin üzerindeki tutarlar için
            teminat mektubu veya vergi inceleme raporu şartı devam eder.
          </p>
        </div>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          KDV iade süreci tamamen elektronik ortamda, GİB İnternet Vergi
          Dairesi üzerinden yürütülür.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">KDV Beyannamesinde Talep</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Standart İade Talep Dilekçesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Liste Yükleme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">KDVİRA Kontrolü</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">YMM Raporu / Teminat / İnceleme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">İadenin Tahsili</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. KDV Beyannamesinde İade Talebinin Beyanı
          </h3>
          <p className="leading-8 text-gray-700">
            İadeye hak kazanan mükellef, ilgili döneme ait KDV
            beyannamesinin &quot;İade Hak Edilen KDV&quot; bölümünü
            doldurarak iade türünü (mahsuben/nakden) seçer ve talebini
            elektronik ortamda beyan eder.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Standart İade Talep Dilekçesinin (1A/1B) Verilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Beyanname ile birlikte, İnternet Vergi Dairesi üzerinden
            elektronik &quot;KDV İade Talep Dilekçesi&quot; gönderilir.
            Mahsuben talepler 1A, nakden talepler 1B kodlu dilekçeyle
            yapılır.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. Yüklenilen KDV Listesi ve Diğer Belgelerin Yüklenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            İade hakkı doğuran işleme ait fatura ve benzeri belgelerin
            listesi, yüklenilen KDV listesi, indirilecek KDV listesi ve
            iade türüne özgü diğer belgeler sisteme yüklenir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. KDVİRA Kontrolü
          </h3>
          <p className="leading-8 text-gray-700">
            Yüklenen listeler, KDV İadesi Risk Analiz Sistemi (KDVİRA)
            tarafından otomatik olarak taranır; karşıt kontrol ve
            olumsuzluk taraması yapılarak bir KDV İadesi Kontrol Raporu
            üretilir. Rapordaki olumsuzluklar giderilmeden iade işlemi
            ilerlemez.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.5. YMM Raporu, Teminat Mektubu veya İnceleme Raporunun Sunulması
          </h3>
          <p className="leading-8 text-gray-700">
            Talep tutarı ilgili limitin altındaysa belgesiz nakden/mahsuben
            işlem yapılabilir. Limit aşılıyorsa Tam Tasdik sözleşmesi
            bulunan mükellefler YMM KDV İadesi Tasdik Raporu ile, diğerleri
            teminat mektubu veya vergi inceleme raporu ile süreci
            tamamlar.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.6. İadenin Tahsili
          </h3>
          <p className="leading-8 text-gray-700">
            Kontrol/rapor süreci olumlu sonuçlandığında mahsuben iade,
            başvuru tarihi itibarıyla vergi borçlarına işlenir; nakden
            iade ise mükellefin banka hesabına aktarılır.
          </p>
        </div>
      </section>

      {/* 6. BELGELER VE SÜRELER */}
      <section id="belgeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Gerekli Belgeler ve Süreler
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ İade Dosyasında Genel Olarak Bulunması Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Standart İade Talep Dilekçesi (1A/1B):</strong>{" "}
              İnternet Vergi Dairesi üzerinden elektronik olarak gönderilir.
            </li>
            <li>
              <strong>Yüklenilen KDV Listesi:</strong> İade hakkı doğuran
              işlem için indirim konusu yapılan KDV&apos;nin dökümü.
            </li>
            <li>
              <strong>İndirilecek KDV Listesi:</strong> İlgili dönemde
              indirim konusu yapılan tüm alış faturalarının listesi.
            </li>
            <li>
              <strong>Satış Faturaları Listesi:</strong> İade hakkı doğuran
              satışlara ait fatura bilgileri.
            </li>
            <li>
              <strong>Gümrük Beyannamesi:</strong> İhracat istisnasından
              doğan iadelerde, malın yurt dışı edildiğini gösteren beyanname.
            </li>
            <li>
              <strong>YMM KDV İadesi Tasdik Raporu:</strong> Tam Tasdik
              sözleşmesi bulunan mükellefler için limit üstü taleplerde.
            </li>
            <li>
              <strong>Banka Teminat Mektubu:</strong> YMM raporu olmadan
              hızlandırılmış iade talep edilmesi halinde.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Zamanaşımı:</strong> KDV iade talebi, iadeye hak
            kazanılan işlemin gerçekleştiği dönemi izleyen ikinci takvim
            yılının sonuna kadar yapılabilir; standart dilekçe dahil tüm
            belgelerin bu süre içinde tamamlanması gerekir. Bu süre
            geçirildiğinde iade hakkı kaybedilir.
          </p>
        </div>
      </section>

      {/* 7. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Yüklenilen KDV listesindeki faturaların, satıcının beyanıyla
            karşıt kontrolde uyuşmaması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Standart iade talep dilekçesinin beyannameyle aynı anda değil,
            gecikmeli verilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ İhracat istisnasında gümrük beyannamesi kapanışının
            eksik/hatalı takip edilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Tam Tasdik sözleşmesinin süresinde imzalanmaması nedeniyle
            hızlandırılmış iade hakkının kaybedilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ İndirimli oranlı işlemlerde yıl içi mahsup hakkının kullanılmaması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Zamanaşımı süresinin (ikinci yıl sonu) takip edilmemesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ KDVİRA kontrol raporundaki olumsuzlukların zamanında giderilmemesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Tevkifatlı işlemlerde alıcının sorumlu sıfatıyla beyanının
            teyit edilmemesi
          </div>
        </div>
      </section>

      {/* KURUMSAL DESTEK CTA */}
      <section className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 KDV İade Sürecinizi ve Tam Tasdik Sözleşmenizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Beyanname üzerindeki iade talebinden yüklenilen KDV listesinin
            hazırlanmasına, YMM Tam Tasdik raporundan KDVİRA kontrol
            sürecinin takibine kadar KDV iadenizin tamamını uçtan uca
            yönetiyoruz. Ayrı bir yeminli mali müşavir veya danışman
            aramanıza gerek kalmadan, iade sürecinizi hızlandıracak Tam
            Tasdik sözleşmesini de bizimle imzalayabilirsiniz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin KDV alacağını değerlendirmek için bizimle
              iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KDV iadesi ne kadar sürede ödenir?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, seçilen yönteme bağlıdır. Belgesiz nakden iadede kontrol
              raporu olumlu ise süreç kısa sürer; YMM raporu + teminat
              mektubu ile talep edilen iadeler genellikle 5 iş günü içinde
              sonuçlanır. Teminatsız/YMM raporsuz, vergi inceleme raporuna
              bağlı taleplerde ise süreç incelemenin sırasına göre aylarca
              uzayabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mahsuben iade ile nakden iade arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Mahsuben iadede KDV alacağı, mükellefin kendi vergi (ve SGK
              prim) borçlarına karşılık işlenir; nakit çıkışı olmaz. Nakden
              iadede ise alacak, mükellefin banka hesabına aktarılır ve
              genellikle daha sıkı belge/teminat şartlarına tabidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tam Tasdik sözleşmesi olmadan KDV iadesi alınabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, belirli limitlerin altındaki talepler için Tam Tasdik
              sözleşmesi şart değildir. Ancak limit üzerindeki talepler,
              Tam Tasdik sözleşmesi yoksa teminat mektubu veya vergi
              inceleme raporu ile sonuçlandırılabilir; bu da süreci
              genellikle uzatır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KDV iade talebi için son başvuru süresi ne zamana kadardır?
            </h3>
            <p className="leading-8 text-gray-700">
              İade hakkı, işlemin gerçekleştiği dönemi izleyen ikinci
              takvim yılının sonuna kadar talep edilebilir. Bu süre
              içinde standart dilekçe dahil tüm belgelerin sisteme
              yüklenmiş olması gerekir; aksi halde iade hakkı zamanaşımına
              uğrar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İndirimli orana tabi işlemlerde KDV iadesi ne zaman talep edilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Yıl içindeki mahsuben iade talepleri her dönem yapılabilir;
              yıl içinde mahsup edilemeyen tutarın nakden iadesi ise ilgili
              yılın tamamlanmasından sonra, izleyen yılın Kasım dönemine
              kadar talep edilebilir. Güncel usul ve tutar için ilgili
              tebliğin kontrol edilmesi gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KDV iadesi, doğru planlandığında şirketin nakit akışını
          rahatlatan gerçek bir finansal kaynaktır; ancak süreç, hem
          teknik belge hazırlığı hem de güncel tebliğ ve limit takibi
          gerektirir. Özellikle ihracat, tevkifat ve indirimli oranlı
          işlemi olan şirketler için süresinde imzalanmış bir YMM Tam
          Tasdik sözleşmesi, iadenin hem daha hızlı hem de daha yüksek
          tutarlarda teminatsız/incelemesiz tahsil edilmesini sağlayan en
          önemli araçlardan biridir. KDVİRA kontrolünden geçemeyen veya
          zamanaşımına uğrayan iade taleplerinin geri dönüşü olmadığı
          düşünüldüğünde, süreci deneyimli bir mali müşavirlik ekibiyle
          yürütmek uzun vadede önemli bir maliyet ve zaman tasarrufu
          sağlar.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YEMİNLİ MALİ MÜŞAVİRLİK • TAM TASDİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler?</h3>
          </Link>
          <Link
            href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026&apos;da Değişti: Yeni Kriterler Şirketinizi Nasıl Etkiliyor?</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İşletmenize AYNA Tutuyoruz: Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
          <Link
            href="/blog/varlik-barisi-2026-nedir-sartlari-oranlari-basvuru-sureci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • VARLIK BARIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Varlık Barışı 2026 Nedir? Yurt Dışındaki Varlıklarınızı Türkiye&apos;ye Getirmenin Şartları, Oranları ve Süreci</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
