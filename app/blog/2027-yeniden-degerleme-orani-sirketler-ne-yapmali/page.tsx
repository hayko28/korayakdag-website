import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "2027 Yeniden Değerleme Oranı %27,83 Oldu | Koray Akdağ",
  description:
    "24 Kasım 2026 tarihli ve 33440 sayılı Resmî Gazete'de yayımlanan 599 sıra no'lu VUK Genel Tebliği, 2027'de uygulanacak yeniden değerleme oranını %27,83 olarak açıkladı. VUK'taki hadler ve cezalardan isteğe bağlı yeniden değerlemeye (VUK mükerrer 298/Ç) kadar şirketleri ilgilendiren tüm etkileri, %2 vergiyi ve yıl sonuna kadar yapılması gerekenleri anlatan güncel rehber.",
  keywords: [
    "2027 yeniden değerleme oranı",
    "yeniden değerleme oranı %27,83",
    "VUK genel tebliği sıra no 599",
    "VUK mükerrer 298 Ç isteğe bağlı yeniden değerleme",
    "amortismana tabi iktisadi kıymetlerin yeniden değerlenmesi",
    "enflasyon düzeltmesi 2026 ertelendi",
    "yeniden değerleme fonu %2 vergi",
    "2027 vergi hadleri",
  ],
  alternates: {
    canonical: "/blog/2027-yeniden-degerleme-orani-sirketler-ne-yapmali",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="2027 Yeniden Değerleme Oranı %27,83 Oldu: Şirketler Yıl Sonuna Kadar Hangi Kararı Vermeli?"
      description="24 Kasım 2026 tarihli ve 33440 sayılı Resmî Gazete'de yayımlanan 599 sıra no'lu Vergi Usul Kanunu Genel Tebliği, 2027'de uygulanacak yeniden değerleme oranını %27,83 olarak belirledi. Bu oran hem VUK'taki yüzlerce had ve cezayı hem de bilanço esasına göre defter tutan şirketlerin VUK mükerrer 298/Ç kapsamındaki isteğe bağlı yeniden değerleme kararını doğrudan etkiliyor. Kapsam, %2 vergi, enflasyon düzeltmesiyle ilişkisi ve yıl sonuna kadar yapılması gerekenlerle güncel rehber."
      category="VERGİ DANIŞMANLIĞI • YENİDEN DEĞERLEME ORANI • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="2027-yeniden-degerleme-orani-sirketler-ne-yapmali"
      coverImage="https://images.unsplash.com/photo-1725258080098-727051947997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin Yeniden Değerleme Kararını Birlikte Değerlendirelim"
      ctaText="Şirketinizin bilançosundaki amortismana tabi kıymetler için isteğe bağlı yeniden değerlemenin avantajlı olup olmadığını, %2 verginin maliyetini ve 2027 hadlerine uyumunuzu birlikte gözden geçirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: 2027 Yeniden Değerleme Oranında Ne Oldu?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>24 Kasım 2026</strong> tarihli, <strong>33440 sayılı</strong> Resmî Gazete&apos;de yayımlanan <strong>599 sıra no&apos;lu VUK Genel Tebliği</strong>, yeniden değerleme oranını <strong>%27,83</strong> olarak açıkladı.</li>
          <li>✔ Oran, 2026 yılı Ekim ayında TÜİK Yurt İçi Üretici Fiyat Endeksi&apos;ndeki 12 aylık ortalama artışa göre hesaplandı (VUK mükerrer 298/B).</li>
          <li>✔ Aynı oran, 2026 hesap döneminin <strong>son (dördüncü) geçici vergi dönemi</strong> için de uygulanacak.</li>
          <li>✔ Bilanço esasına göre defter tutan tam mükellef şirketler, bu oranla aktiflerindeki amortismana tabi kıymetleri <strong>VUK mükerrer 298/Ç</strong> kapsamında isteğe bağlı olarak yeniden değerleyebilir.</li>
          <li>✔ Bu imkânın bedeli, değer artışı üzerinden hesaplanan <strong>%2 vergidir</strong>; vergi üç eşit taksitte ödenebilir.</li>
          <li>✔ 2025, 2026 ve 2027 hesap dönemlerinde zorunlu enflasyon düzeltmesi, 7571 sayılı Kanun&apos;la eklenen VUK Geçici 37. madde uyarınca ertelendi; bu da isteğe bağlı yeniden değerlemeyi fiilen mümkün kılıyor.</li>
          <li>✔ VUK&apos;taki usulsüzlük cezaları, harçlar, damga vergisi ve amortisman/demirbaş sınırları gibi 2027&apos;de geçerli olacak kesin tutarlar, bu oran esas alınarak ayrı tebliğlerle önümüzdeki haftalarda açıklanacak.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Yeniden Değerleme Oranı Nedir, Nasıl Hesaplanır?
          </Link>
          <Link href="#oran-aciklandi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 599 Sıra No&apos;lu Tebliğ Ne Diyor?
          </Link>
          <Link href="#tarihsel" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Son Beş Yılın Oranları
          </Link>
          <Link href="#etkiledigi-alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Bu Oran Hangi Alanları Etkiliyor?
          </Link>
          <Link href="#istege-bagli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. İsteğe Bağlı Yeniden Değerleme (VUK Mük. 298/Ç) Nedir?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: Enflasyon Düzeltmesi mi, Yeniden Değerleme mi?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım Karar ve Uygulama Süreci
          </Link>
          <Link href="#kimler-sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kimler Yararlanabilir, Şartlar Neler?
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
          1. Yeniden Değerleme Oranı Nedir, Nasıl Hesaplanır?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yeniden değerleme oranı, 213 sayılı Vergi Usul Kanunu&apos;nun
          mükerrer 298. maddesinin (B) fıkrasına göre her yıl Hazine ve
          Maliye Bakanlığı (Gelir İdaresi Başkanlığı) tarafından tespit ve
          ilan edilen bir orandır. Hesaplamada, yeniden değerlemenin
          yapılacağı yılın Ekim ayında, bir önceki yılın aynı ayına göre
          TÜİK Yurt İçi Üretici Fiyat Endeksi&apos;nde (Yİ-ÜFE) meydana
          gelen 12 aylık ortalama değişim esas alınır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu oran, tek bir amaç için değil; Vergi Usul Kanunu başta olmak
          üzere Harçlar Kanunu, Damga Vergisi Kanunu ve çeşitli özel
          kanunlarda yer alan sabit (maktu) tutarların, cezaların ve
          hadlerin enflasyona karşı her yıl güncellenmesi için kullanılır.
          Ayrıca bilanço esasına göre defter tutan şirketlerin, aktiflerindeki
          amortismana tabi kıymetleri isteğe bağlı olarak yeniden
          değerlemesinde doğrudan referans oran olarak uygulanır.
        </p>
        <p className="leading-8 text-gray-700">
          Cumhurbaşkanı&apos;nın, TÜİK verisine göre hesaplanan bu oranı
          yüzde 50&apos;ye kadar artırma veya azaltma yetkisi bulunuyor.
          Bu yetki kullanılmazsa, hesaplanan oran aynen yürürlüğe giriyor.
        </p>
      </section>

      {/* 2. 599 TEBLİĞ */}
      <section id="oran-aciklandi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 599 Sıra No&apos;lu Tebliğ Ne Diyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Gelir İdaresi Başkanlığı, 24 Kasım 2026 tarihli ve 33440 sayılı
          Resmî Gazete&apos;de yayımlanan Vergi Usul Kanunu Genel Tebliği
          (Sıra No: 599) ile 2026 yılı için yeniden değerleme oranını
          <strong> %27,83</strong> olarak tespit etti. Tebliğ, bu oranın
          aynı zamanda 2026 hesap döneminin son geçici vergi döneminde de
          uygulanacağını belirtiyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 2026&apos;da Geçerli Oran</h3>
            <p className="text-gray-700">
              2025 yılı için 27 Kasım 2025 tarihli, 33090 sayılı Resmî
              Gazete&apos;de yayımlanan 585 sıra no&apos;lu tebliğle
              belirlenen oran <strong>%25,49</strong> idi; 2026 yılında
              uygulanan hadler ve tutarlar bu orana göre hesaplandı.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 2027&apos;de Geçerli Oran</h3>
            <p className="text-gray-700">
              599 sıra no&apos;lu tebliğle belirlenen <strong>%27,83</strong>,
              2027 yılında yürürlüğe girecek yeni hadlerin ve isteğe bağlı
              yeniden değerleme işlemlerinin hesap tabanı olacak.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TARİHSEL */}
      <section id="tarihsel" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Son Beş Yılın Oranları
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Oranın yıllar içindeki seyri, enflasyonun yavaşlama eğilimine
          rağmen hâlâ çift haneli kaldığını gösteriyor. 2027 oranı, bir
          önceki yıla göre hafif bir yükseliş içeriyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Tebliğ Yılı</th>
                <th className="p-4">Oran</th>
                <th className="p-4">Uygulandığı Yıl</th>
                <th className="p-4">Dayanak Tebliğ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">2022</td>
                <td className="p-4">%58,46</td>
                <td className="p-4">2023 hadleri</td>
                <td className="p-4">VUK Genel Tebliği No: 554</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">2023</td>
                <td className="p-4">%43,93</td>
                <td className="p-4">2024 hadleri</td>
                <td className="p-4">VUK Genel Tebliği No: 574</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">2024</td>
                <td className="p-4">%25,49</td>
                <td className="p-4">2025 hadleri</td>
                <td className="p-4">VUK Genel Tebliği No: 585</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">2026</td>
                <td className="p-4 font-semibold">%27,83</td>
                <td className="p-4 font-semibold">2027 hadleri</td>
                <td className="p-4 font-semibold">VUK Genel Tebliği No: 599</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. ETKİLEDİĞİ ALANLAR */}
      <section id="etkiledigi-alanlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Bu Oran Hangi Alanları Etkiliyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yeniden değerleme oranı, tek bir tebliğle değil, kullanıldığı her
          kanun için ayrı ayrı yayımlanan tebliğlerle somut tutarlara
          dönüşür. 599 sıra no&apos;lu tebliğ yalnızca oranı ilan ediyor;
          VUK&apos;taki hadler, Harçlar Kanunu&apos;ndaki maktu harçlar ve
          Damga Vergisi Kanunu&apos;ndaki tutarlar için 2027 rakamları,
          önümüzdeki haftalarda Hazine ve Maliye Bakanlığı tarafından ayrı
          tebliğlerle duyurulacak.
        </p>
        <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
            Geçen Yıl (2026) Nasıl İşledi? Örnek Rakamlar
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            2025 yılı için belirlenen %25,49&apos;luk oranla, 2026&apos;da
            yürürlüğe giren bazı tutarlar şöyle değişmişti:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-blue-500">
            <li>Doğrudan gider yazılabilen demirbaş/amortisman sınırı 9.900 TL&apos;den 12.000 TL&apos;ye çıktı.</li>
            <li>Binek otomobillerde amortismana esas bedel üst sınırı 2.100.000 TL&apos;den 2.600.000 TL&apos;ye yükseldi.</li>
            <li>ÖTV ve KDV hariç binek otomobil ilk iktisap üst sınırı 1.100.000 TL&apos;den 1.380.000 TL&apos;ye çıktı.</li>
            <li>VUK&apos;taki usulsüzlük ve özel usulsüzlük cezaları, fatura düzenleme haddi ve bilanço/işletme hesabı esası sınırları da aynı oranda arttı.</li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            2027 için aynı kalemlerin kesin tutarları %27,83 oranı esas
            alınarak hesaplanacak; ancak resmî tebliğler yayımlanana kadar
            bu tutarları kesinleşmiş saymamak gerekir.
          </p>
        </div>
      </section>

      {/* 5. İSTEĞE BAĞLI */}
      <section id="istege-bagli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. İsteğe Bağlı Yeniden Değerleme (VUK Mük. 298/Ç) Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          7338 sayılı Kanun&apos;la VUK&apos;a eklenen mükerrer 298/Ç
          fıkrası, enflasyon düzeltmesi şartlarının gerçekleşmediği hesap
          dönemlerinde, bilanço esasına göre defter tutan tam mükellef
          gelir veya kurumlar vergisi mükelleflerine (kollektif, adi
          komandit ve adi şirketler dahil) aktiflerindeki amortismana tabi
          iktisadi kıymetleri isteğe bağlı olarak yeniden değerleme imkânı
          tanıyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-green-700">✅ Kapsamdaki Kıymetler</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Bilançoda kayıtlı, amortismana tabi makine, bina, taşıt ve demirbaşlar</li>
              <li>✔ Gayrimaddi haklar dahil, amortismana tabi diğer iktisadi kıymetler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-red-700">❌ Kapsam Dışı Kalanlar</h3>
            <ul className="space-y-3 text-gray-700">
              <li>❌ Boş arazi ve arsalar (amortismana tabi olmadıkları için)</li>
              <li>❌ Alım-satım veya inşa işiyle uğraşanların emtia niteliğindeki kıymetleri</li>
              <li>❌ Sat-kirala-geri al işlemine veya kira sertifikası ihracına konu kıymetler</li>
              <li>❌ Değerlemenin yapılacağı dönemde aktife yeni giren kıymetler ve devam eden yatırımlar</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">%2 Vergi ve Ödeme Takvimi</h3>
          <p className="leading-8 text-gray-700">
            Yeniden değerleme sonucu oluşan değer artışı, pasifte özel bir
            fon hesabında izlenir ve bu tutar üzerinden <strong>%2
            oranında vergi</strong> hesaplanır. Vergi, yeniden değerleme
            işleminin yapıldığı tarihi izleyen ayın sonuna kadar verilecek
            beyannameyle beyan edilir; ilk taksit beyanname süresinde,
            kalan iki taksit ise izleyen ikinci ve dördüncü aylarda eşit
            tutarlarla ödenir. Beyan veya ödemenin süresinde yapılmaması
            halinde bu imkândan yararlanılamaz. Ödenen %2 vergi, gelir
            veya kurumlar vergisinden mahsup edilemez ve matrahın
            tespitinde gider olarak dikkate alınamaz.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Fon hesabındaki değer artışı sermayeye ilave edilebilir; başka
          bir hesaba nakledilir veya işletmeden çekilirse, çekildiği
          dönemin kazancına dahil edilerek vergiye tabi tutulur.
          Yeniden değerleme sonrasında amortisman, kıymetin yeni değeri
          üzerinden hesaplanmaya devam eder.
        </p>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: Enflasyon Düzeltmesi mi, Yeniden Değerleme mi?
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ &quot;Zaten Enflasyon Düzeltmesi Yapıyoruz&quot; Yanılgısı
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Şirketlerde sık karşılaşılan bir karışıklık, zorunlu enflasyon
            düzeltmesi (VUK mükerrer 298/A) ile isteğe bağlı yeniden
            değerlemenin (VUK mükerrer 298/Ç) aynı şey sanılmasıdır. Oysa
            ikisi tamamen farklı hukuki rejimlere tabi ve aynı anda
            uygulanamaz.
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Zorunlu Enflasyon Düzeltmesi (298/A)</th>
                  <th className="p-4">İsteğe Bağlı Yeniden Değerleme (298/Ç)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Niteliği</td>
                  <td className="p-4">Şartlar oluşunca zorunlu</td>
                  <td className="p-4">Mükellefin tercihine bağlı, ihtiyari</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Kapsam</td>
                  <td className="p-4">Mali tablolardaki tüm parasal olmayan kıymetler</td>
                  <td className="p-4">Yalnızca aktifteki amortismana tabi iktisadi kıymetler</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Vergi</td>
                  <td className="p-4">Ayrıca bir vergi ödenmez, muhasebe kaydıdır</td>
                  <td className="p-4">Değer artışı üzerinden %2 vergi</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">2026 yılındaki durum</td>
                  <td className="p-4">7571 sayılı Kanun&apos;la (VUK Geç. 37) 2025-2027 için ertelendi</td>
                  <td className="p-4">Erteleme nedeniyle uygulanabilir durumda</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Kısacası: şartlar teknik olarak oluşmuş olsa da, 7571 sayılı
            Kanun&apos;la VUK&apos;a eklenen Geçici 37. madde uyarınca
            2025, 2026 ve 2027 hesap dönemlerinde (geçici vergi dönemleri
            dahil) zorunlu enflasyon düzeltmesi uygulanmıyor. Bu dönemler,
            298/Ç bakımından &quot;enflasyon düzeltmesi şartlarının
            gerçekleşmediği dönem&quot; sayıldığından, isteğe bağlı
            yeniden değerleme hâlâ bir seçenek olarak masada.
          </p>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım Karar ve Uygulama Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Uygunluğu Belirleyin</h3>
            <p className="mt-2 text-sm text-gray-600">
              Bilanço esasına göre defter tutup tutmadığınızı ve
              aktifinizde amortismana tabi hangi kıymetlerin bulunduğunu
              tespit edin.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Kapsamı Ayıklayın</h3>
            <p className="mt-2 text-sm text-gray-600">
              Arsa, emtia, yeni aktife giren kıymetler ve devam eden
              yatırımları hesaplama dışında bırakın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">%27,83 ile Hesaplayın</h3>
            <p className="mt-2 text-sm text-gray-600">
              Belirli bir tutarın üzerindeki değerlemeler için YMM tasdik
              raporu gerekebileceğini unutmayın.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Beyan Edin, İlk Taksidi Ödeyin</h3>
            <p className="mt-2 text-sm text-gray-600">
              İzleyen ayın sonuna kadar beyanname verin; %2 verginin ilk
              taksidini bu süre içinde ödeyin.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">5️⃣</div>
            <h3 className="text-base font-bold">Fon Hesabını Yönetin</h3>
            <p className="mt-2 text-sm text-gray-600">
              Değer artışı fonunu sermayeye ilave etme veya bekletme
              kararını muhasebe kayıtlarınıza işleyin.
            </p>
          </div>
        </div>
      </section>

      {/* 8. KİMLER ŞARTLAR */}
      <section id="kimler-sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler Yararlanabilir, Şartlar Neler?
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
            <li>Tam mükellefiyete tabi, bilanço esasına göre defter tutan gelir veya kurumlar vergisi mükellefleri (kollektif, adi komandit ve adi şirketler dahil) yararlanabilir.</li>
            <li>Dar mükellefler, işletme hesabı esasına veya serbest meslek kazanç defterine göre defter tutanlar, münhasıran altın/gümüş alım-satımı ve imalatıyla uğraşanlar ile kayıtlarını Türk parası dışında tutanlar kapsam dışıdır.</li>
            <li>Uygulama bir süreye bağlı değildir; bir dönemde yeniden değerleme yapılmamış olması, sonraki dönemlerde yapılmasına engel teşkil etmez.</li>
            <li>Belirli bir tutarın üzerindeki yeniden değerleme işlemleri için yeminli mali müşavir tasdik raporu düzenlenmesi zorunludur.</li>
          </ul>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Cumhurbaşkanı&apos;nın oranı yüzde 50&apos;ye kadar değiştirme yetkisi bulunuyor; bu yetki şimdiye kadar bu oran için kullanılmadı, ancak ileride kullanılırsa hesaplamaların buna göre güncellenmesi gerekir.</li>
            <li>VUK&apos;taki hadler, Harçlar Kanunu ve Damga Vergisi Kanunu&apos;na ilişkin 2027 tutarları henüz ayrı tebliğlerle yayımlanmadı; bu tutarları kesinleşmeden şirket bütçesine veya fiyatlandırmaya yansıtmamak gerekir.</li>
            <li>%2 verginin beyan ve ödeme süresi kaçırıldığında isteğe bağlı yeniden değerlemeden yararlanma hakkı tamamen kaybedilir; bu nedenle takvimi önceden planlamak önemlidir.</li>
            <li>Yeniden değerleme fonu işletmeden çekilirse veya sermaye dışında bir amaçla kullanılırsa, çekildiği dönemde gelir veya kurumlar vergisine tabi tutulur; bu, nakit akışı planlamasında gözden kaçırılan bir risktir.</li>
            <li>Enflasyon düzeltmesi şartları gelecekte yeniden oluşursa, daha önce yapılan yeniden değerleme fonunun özkaynaktan düşülerek enflasyon düzeltmesine geçileceği unutulmamalı.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, yeniden değerleme
            kararının yalnızca muhasebe departmanının teknik bir tercihi
            değil, şirketin genel vergi planlamasının bir parçası olarak
            ele alınması gerektiğidir. %2 vergi peşin ve nakden bir
            maliyet oluştururken, yeni ve daha yüksek amortisman tabanı
            ilerleyen yıllarda kurumlar vergisi matrahını düşürerek bu
            maliyeti zamana yayılmış şekilde telafi edebilir. Bu nedenle
            kararın, şirketin o yılki kârlılığı, nakit durumu ve kıymetin
            kalan amortisman süresiyle birlikte değerlendirilmesi, yalnızca
            oranın yüksekliğine bakarak verilmemesi gerekir.
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
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/11/20261124-3.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Vergi Usul Kanunu Genel Tebliği (Sıra No: 599), 24 Kasım 2026, RG 33440
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.213.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                213 Sayılı Vergi Usul Kanunu, Mükerrer Madde 298 - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2025/12/20251225.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                7571 Sayılı Kanun (VUK Geçici 37. Madde), 25 Aralık 2025, RG 33118
              </a>
            </li>
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2025/11/20251127-4.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Vergi Usul Kanunu Genel Tebliği (Sıra No: 585), 27 Kasım 2025, RG 33090
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı - Resmî Duyurular (gib.gov.tr)
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
              2027 yeniden değerleme oranı kesinleşti mi, değişebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Oran, 24 Kasım 2026 tarihli ve 33440 sayılı Resmî Gazete&apos;de
              yayımlanan 599 sıra no&apos;lu VUK Genel Tebliği ile resmen
              açıklandı ve %27,83 olarak yürürlüğe girdi. Cumhurbaşkanı&apos;nın
              bu oranı yüzde 50&apos;ye kadar artırma veya azaltma yetkisi
              teorik olarak sürüyor, ancak bu yetki kullanılmadığı sürece
              tebliğdeki oran geçerlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Her şirket isteğe bağlı yeniden değerleme yapabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yalnızca tam mükellefiyete tabi ve bilanço esasına
              göre defter tutan gelir veya kurumlar vergisi mükellefleri
              (kollektif, adi komandit ve adi şirketler dahil) VUK
              mükerrer 298/Ç kapsamında yararlanabilir. İşletme hesabı
              esasına göre defter tutanlar ve dar mükellefler kapsam
              dışıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeniden değerleme yapmak zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, VUK mükerrer 298/Ç kapsamındaki yeniden değerleme
              tamamen ihtiyaridir. Zorunlu olan, farklı bir mekanizma olan
              enflasyon düzeltmesidir ve 2025, 2026 ve 2027 hesap
              dönemlerinde 7571 sayılı Kanun&apos;la ertelenmiş durumdadır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeniden değerleme için ne kadar vergi ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Değer artışı üzerinden %2 oranında vergi hesaplanır. Bu
              vergi, yeniden değerleme tarihini izleyen ayın sonuna kadar
              beyan edilir ve üç eşit taksitte ödenebilir. Ödenen vergi,
              gelir veya kurumlar vergisinden mahsup edilemez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Arsa ve araziler yeniden değerleme kapsamında mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. VUK mükerrer 298/Ç yalnızca amortismana tabi
              iktisadi kıymetleri kapsar. Boş arazi ve arsalar amortismana
              tabi olmadığından bu imkânın dışında kalır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2027&apos;de uygulanacak kesin vergi hadleri ve ceza tutarları şimdiden belli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Henüz değil. 599 sıra no&apos;lu tebliğ yalnızca oranı
              belirliyor; VUK&apos;taki hadler, harçlar ve damga vergisi
              tutarları gibi kesin 2027 rakamları, bu oran esas alınarak
              Hazine ve Maliye Bakanlığı tarafından önümüzdeki haftalarda
              ayrı tebliğlerle duyurulacak.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Yeniden Değerleme Kararınızı ve 2027 Vergi Uyumunuzu Birlikte Yönetelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin aktifindeki hangi kıymetlerin isteğe bağlı
            yeniden değerleme kapsamına girdiğinden %2 verginin nakit
            akışınıza etkisine, beyan takviminin takibinden 2027&apos;de
            yürürlüğe girecek yeni hadlere uyuma kadar tüm süreci Koray
            Akdağ / Sistem Global Danışmanlık olarak bizzat yürütüyoruz;
            ayrı bir yerel mali müşavir aramanıza gerek kalmıyor.{" "}
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
          2027 için belirlenen %27,83&apos;lük yeniden değerleme oranı,
          görünüşte tek bir sayı olsa da şirketler için iki ayrı kararı
          gündeme getiriyor: VUK&apos;taki hadlerin ve cezaların önümüzdeki
          aylarda nasıl güncelleneceğini takip etmek ve bilançodaki
          amortismana tabi kıymetleri isteğe bağlı olarak yeniden
          değerleyip değerlendirmeyeceğine karar vermek. Enflasyon
          düzeltmesinin 2027&apos;ye kadar ertelenmiş olması, ikinci
          seçeneği önemli bir fırsat haline getiriyor; ama %2 verginin
          maliyeti ve beyan takvimi gözden kaçırılmamalı.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin bu
          tür vergisel kararları yalnızca bir tebliğ metnine bakarak değil,
          kendi bilançosu ve nakit durumuyla birlikte değerlendirmesine
          yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/gecici-vergi-dorduncu-donem-geri-geldi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Geçici Vergide Dördüncü Dönem Geri Geldi mi?</h3>
          </Link>
          <Link
            href="/blog/finansman-gider-kisitlamasi-hesaplama-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Finansman Gider Kısıtlaması Nedir?</h3>
          </Link>
          <Link
            href="/blog/vergi-borcu-aciklama-listesi-2026-kimler-kapsamda"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Vergi Borcu Listesi 2026: Şirketiniz Açıklanacak mı?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"2027 yeniden değerleme oranı kesinleşti mi, değişebilir mi?","acceptedAnswer":{"@type":"Answer","text":"Oran, 24 Kasım 2026 tarihli ve 33440 sayılı Resmî Gazete'de yayımlanan 599 sıra no'lu VUK Genel Tebliği ile resmen açıklandı ve %27,83 olarak yürürlüğe girdi. Cumhurbaşkanı'nın bu oranı yüzde 50'ye kadar artırma veya azaltma yetkisi teorik olarak sürüyor, ancak bu yetki kullanılmadığı sürece tebliğdeki oran geçerlidir."}},{"@type":"Question","name":"Her şirket isteğe bağlı yeniden değerleme yapabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yalnızca tam mükellefiyete tabi ve bilanço esasına göre defter tutan gelir veya kurumlar vergisi mükellefleri (kollektif, adi komandit ve adi şirketler dahil) VUK mükerrer 298/Ç kapsamında yararlanabilir. İşletme hesabı esasına göre defter tutanlar ve dar mükellefler kapsam dışıdır."}},{"@type":"Question","name":"Yeniden değerleme yapmak zorunlu mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır, VUK mükerrer 298/Ç kapsamındaki yeniden değerleme tamamen ihtiyaridir. Zorunlu olan, farklı bir mekanizma olan enflasyon düzeltmesidir ve 2025, 2026 ve 2027 hesap dönemlerinde 7571 sayılı Kanun'la ertelenmiş durumdadır."}},{"@type":"Question","name":"Yeniden değerleme için ne kadar vergi ödeniyor?","acceptedAnswer":{"@type":"Answer","text":"Değer artışı üzerinden %2 oranında vergi hesaplanır. Bu vergi, yeniden değerleme tarihini izleyen ayın sonuna kadar beyan edilir ve üç eşit taksitte ödenebilir. Ödenen vergi, gelir veya kurumlar vergisinden mahsup edilemez."}},{"@type":"Question","name":"Arsa ve araziler yeniden değerleme kapsamında mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. VUK mükerrer 298/Ç yalnızca amortismana tabi iktisadi kıymetleri kapsar. Boş arazi ve arsalar amortismana tabi olmadığından bu imkânın dışında kalır."}},{"@type":"Question","name":"2027'de uygulanacak kesin vergi hadleri ve ceza tutarları şimdiden belli mi?","acceptedAnswer":{"@type":"Answer","text":"Henüz değil. 599 sıra no'lu tebliğ yalnızca oranı belirliyor; VUK'taki hadler, harçlar ve damga vergisi tutarları gibi kesin 2027 rakamları, bu oran esas alınarak Hazine ve Maliye Bakanlığı tarafından önümüzdeki haftalarda ayrı tebliğlerle duyurulacak."}}]}) }}
      />
    </BlogLayout>
  );
}
