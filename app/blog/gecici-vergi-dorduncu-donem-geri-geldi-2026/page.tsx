import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Geçici Vergide Dördüncü Dönem Geri Geldi mi? 2026 Takvim Rehberi | Koray Akdağ",
  description: "7566 sayılı Kanun'la 2021'de kaldırılan dördüncü geçici vergi dönemi (Ekim-Aralık) yeniden yürürlüğe girdi. Kimler kapsamda, 2026 beyan takvimi nasıl işliyor, yıllık beyannameden farkı ne; resmî kaynaklarla güncel rehber.",
  keywords: [
    "geçici vergi dördüncü dönem",
    "geçici vergi dördüncü dönem geri geldi mi",
    "geçici vergi 2026 takvimi",
    "dördüncü geçici vergi dönemi ne zaman",
    "7566 sayılı kanun geçici vergi",
    "GVK mükerrer 120",
    "geçici vergi kaç dönem",
    "kurumlar vergisi geçici vergi dönemleri 2026",
  ],
  alternates: {
    canonical: "/blog/gecici-vergi-dorduncu-donem-geri-geldi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Geçici Vergide Dördüncü Dönem Geri Geldi mi? Şirketler İçin 2026 Takvim Rehberi"
      description="7566 sayılı Kanun'la Gelir Vergisi Kanunu mükerrer 120. maddesinden 'ilk dokuz ayı için belirlenen' ibaresi çıkarıldı ve 2021'de kaldırılan dördüncü geçici vergi dönemi (Ekim-Aralık) yeniden yürürlüğe girdi. Kimler kapsamda, 2026 beyan takvimi nasıl işliyor, yıllık beyannameyle karıştırılmaması gereken noktalar ve enflasyon düzeltmesi istisnasıyla resmî kaynaklara dayanan güncel rehber."
      category="VERGİ DANIŞMANLIĞI • GEÇİCİ VERGİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="gecici-vergi-dorduncu-donem-geri-geldi-2026"
      coverImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Şirketinizin Güncel Geçici Vergi Takvimini Birlikte Netleştirelim"
      ctaText="Dördüncü dönemin eklenmesiyle değişen beyan takviminin şirketinizi hangi aylarda, ne şekilde etkilediğini ve nakit planlamanızı buna göre nasıl ayarlamanız gerektiğini birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Dördüncü Geçici Vergi Dönemi Geri Geldi mi?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Evet. <strong>7566 sayılı Kanun</strong> (RG 19 Aralık 2025/33112) ile Gelir Vergisi Kanunu mükerrer 120. maddesinden &quot;ilk dokuz ayı için belirlenen&quot; ibaresi çıkarıldı; 2021&apos;de kaldırılan <strong>dördüncü dönem (Ekim-Aralık)</strong> yeniden yürürlükte.</li>
          <li>✔ Değişiklik <strong>1 Ocak 2025&apos;ten itibaren başlayan</strong> vergilendirme dönemlerini kapsıyor; ilk uygulama 2025 hesap döneminde yapıldı, 4. dönem beyannamesi 17 Şubat 2026&apos;da verildi.</li>
          <li>✔ Kapsamda: ticari kazanç sahibi gelir vergisi mükellefleri (<strong>basit usul hariç</strong>), serbest meslek erbabı ve <strong>KVK madde 32</strong> atfıyla tüm kurumlar vergisi mükellefleri.</li>
          <li>✔ 2026 hesap döneminde de aynı yapı sürüyor: takvim yılına tabi mükellefler artık yılda 3 değil <strong>4 geçici vergi dönemi</strong> beyan ediyor.</li>
          <li>✔ 2026&apos;nın <strong>3. dönemi (Temmuz-Eylül) 17 Kasım 2026&apos;da</strong> beyan ediliyor; yeniden eklenen <strong>4. dönem (Ekim-Aralık) ise ilk kez 17 Şubat 2027&apos;de</strong> beyan edilecek.</li>
          <li>✔ VUK 587 sıra no&apos;lu Genel Tebliğ ile 2025&apos;in 4. döneminde enflasyon düzeltmesi yapılmaması uygun bulundu; 2026 4. dönemi için benzer bir tebliğ henüz yayımlanmadı.</li>
          <li>✔ Dördüncü dönem geçici vergisi, yıllık kurumlar/gelir vergisi beyannamesinin <strong>yerine geçmiyor</strong>; iki ayrı beyanname aynı yıl içinde art arda veriliyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Geçici Vergi Nedir, Dördüncü Dönem Ne Anlama Geliyor?
          </Link>
          <Link href="#tarihce" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kısa Tarihçe: 2021&apos;de Neden Kaldırılmıştı?
          </Link>
          <Link href="#7566" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 7566 Sayılı Kanun Tam Olarak Ne Değiştirdi?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Kimler Kapsamda, Kimler Değil?
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. 2026 Güncel Dönem ve Beyan Takvimi
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Karıştırmayın: Dördüncü Dönem, Yıllık Beyanname Değildir
          </Link>
          <Link href="#enflasyon" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Enflasyon Düzeltmesi İstisnası
          </Link>
          <Link href="#etkiler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Şirketler İçin Pratik Etkileri
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
          1. Geçici Vergi Nedir, Dördüncü Dönem Ne Anlama Geliyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Geçici vergi, şirketlerin ve belirli gelir vergisi mükelleflerinin
          yıl içinde elde ettikleri kazanç üzerinden, yıllık beyanname
          verilmeden önce peşin olarak ödedikleri bir vergi uygulaması.
          Yıl sonunda hesaplanan gelir veya kurumlar vergisinden mahsup
          edilir; fazla ödenmişse iade ya da başka vergilere mahsup
          talep edilebilir. Mantığı basit: devlet, vergiyi yıl sonuna
          kadar beklemek yerine, kazancın oluştuğu dönemler itibarıyla
          parça parça tahsil ediyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Kasım 2026&apos;da bu konunun yeniden gündeme gelmesinin sebebi,
          uzun süredir alışılan &quot;yılda üç dönem&quot; kuralının
          değişmiş olması. 2025 hesap döneminden itibaren, daha önce
          2021&apos;de kaldırılan <strong>dördüncü geçici vergi dönemi
          (Ekim-Aralık)</strong> yeniden yürürlüğe girdi. Bu yazıda, bu
          değişikliğin yasal dayanağını, kimleri kapsadığını ve 2026
          takviminin şirketler için somut olarak ne anlama geldiğini
          resmî kaynaklara dayanarak anlatıyoruz.
        </p>
      </section>

      {/* 2. TARİHÇE */}
      <section id="tarihce" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kısa Tarihçe: 2021&apos;de Neden Kaldırılmıştı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Geçici vergi dönemleri, uygulamanın ilk yıllarında altışar aylık
          dilimler halinde işliyordu; 1 Temmuz 2000&apos;den itibaren ise
          dönemler üçer aylığa indirildi ve yıl içinde dört dönem (Ocak-Mart,
          Nisan-Haziran, Temmuz-Eylül, Ekim-Aralık) uygulanmaya başladı.
          Bu yapı uzun yıllar değişmeden sürdü.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          26 Ekim 2021 tarihli ve 31640 sayılı Resmî Gazete&apos;de
          yayımlanan <strong>7338 sayılı Kanun</strong> ile Gelir Vergisi
          Kanunu&apos;nun mükerrer 120. maddesinde değişikliğe gidildi ve
          geçici vergi, &quot;ilk dokuz ayı için belirlenen&quot; üçer
          aylık dönemler halinde hesaplanmaya başlandı. Pratikte bu,
          dördüncü dönemin (Ekim-Aralık) kaldırılması anlamına geliyordu;
          çünkü bu dönemin bitiminden kısa bir süre sonra zaten yıllık
          beyanname veriliyor, dolayısıyla ayrı bir geçici vergi beyanı
          mükerrer bir yük olarak görülüyordu. Böylece 2021&apos;in son
          çeyreğinden itibaren mükellefler yılda sadece üç dönem (ilk
          dokuz ay) için geçici vergi beyan etmeye başladı.
        </p>
      </section>

      {/* 3. 7566 */}
      <section id="7566" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 7566 Sayılı Kanun Tam Olarak Ne Değiştirdi?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          4 Aralık 2025&apos;te TBMM&apos;de kabul edilen ve 19 Aralık
          2025 tarihli, 33112 sayılı Resmî Gazete&apos;de yayımlanan
          <strong> &quot;Vergi Kanunları ile Bazı Kanun ve Kanun Hükmünde
          Kararnamelerde Değişiklik Yapılmasına Dair Kanun&quot; (7566
          sayılı Kanun)</strong>, bu dört yıllık uygulamayı tersine çevirdi.
          Kanunun ilgili maddesi, Gelir Vergisi Kanunu&apos;nun mükerrer
          120. maddesinin birinci fıkrasının birinci cümlesinden
          <strong> &quot;ilk dokuz ayı için belirlenen&quot;</strong>
          ibaresini çıkardı.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Tek bir ibarenin çıkarılması gibi görünse de sonucu köklü:
          madde artık yılın tamamını kapsayan dönemlere atıf yapıyor ve
          bu da dördüncü dönemi (Ekim-Aralık) yeniden kapsama dahil
          ediyor. Düzenleme, <strong>1 Ocak 2025 ve sonrasında başlayan
          vergilendirme dönemi</strong> gelir ve kazançlarına ilişkin
          verilecek beyannamelere uygulanmak üzere yürürlüğe girdi; yani
          geriye dönük olarak 2025 hesap dönemini de kapsadı. Takvim
          yılına tabi kurumlar, 2025 yılının Ekim-Aralık dönemi için ilk
          kez dördüncü geçici vergi beyannamesini 17 Şubat 2026&apos;da
          verdi.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kurumlar vergisi mükellefleri için aynı esaslar, 5520 sayılı
            Kurumlar Vergisi Kanunu&apos;nun 32. maddesinin ikinci
            fıkrasındaki atıf yoluyla geçerli: kurumlar, geçici vergiyi
            Gelir Vergisi Kanunu&apos;nda belirtilen esaslara göre, ancak
            cari dönemin kurumlar vergisi oranı üzerinden hesaplayıp
            öderler. Dolayısıyla GVK mükerrer 120&apos;de yapılan bu
            değişiklik, hem gelir vergisi mükelleflerini hem de kurumlar
            vergisi mükelleflerini doğrudan etkiliyor.
          </p>
        </div>
      </section>

      {/* 4. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Kimler Kapsamda, Kimler Değil?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Geçici vergi mükellefiyetinin kapsamı, finansman gider
          kısıtlaması gibi bazı diğer vergi kurallarından daha geniş.
          Burada bilanço esası ile işletme hesabı esası ayrımı aranmıyor;
          belirleyici olan kazanç türü:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">✅ Kapsamda Olanlar</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Ticari kazanç sahibi gelir vergisi mükellefleri (gerçek usulde, bilanço veya işletme hesabı esasına göre defter tutsun fark etmez)</li>
              <li>Serbest meslek erbabı</li>
              <li>Tüm kurumlar vergisi mükellefleri (anonim, limited vb.), KVK madde 32 atfıyla</li>
              <li>Adi ortaklık, kollektif şirket ve adi komandit şirketlerin bu ortaklıklardan pay alan ortakları (ortaklığın kendisi değil, ortağın payı)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🚫 Kapsam Dışında Kalanlar</h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              <li>Basit usule tabi mükellefler</li>
              <li>Yıllara sari inşaat ve onarma işleriyle uğraşanlar (bu kazançlar farklı bir rejime tabi)</li>
              <li>Sadece gayrimenkul sermaye iradı, menkul sermaye iradı veya ücret geliri elde edenler (stopaj yoluyla vergilendirildikleri için)</li>
              <li>Kollektif şirketler ile adi komandit şirketlerin kendisi (ortaklık tüzel/gerçek kişi olarak ayrı bir vergi mükellefi değil)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. 2026 Güncel Dönem ve Beyan Takvimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026 hesap döneminden itibaren takvim yılına tabi mükellefler
          için dört dönem şu şekilde işliyor. Beyan ve ödeme süresi
          olarak genel kural, ilgili dönemi izleyen ikinci ayın 17&apos;nci
          günü akşamı; ancak bu tarih hafta sonu ya da resmî tatile denk
          gelirse izleyen ilk iş gününe kayabilir, bu yüzden GİB&apos;in
          güncel vergi takviminden teyit edilmesi öneriliyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Dönem</th>
                <th className="p-5">Kapsadığı Aylar (2026)</th>
                <th className="p-5">Beyan/Ödeme Son Günü</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">1. Dönem</td>
                <td className="p-5">Ocak - Mart</td>
                <td className="p-5">Mayıs 2026 ortası (geçti)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">2. Dönem</td>
                <td className="p-5">Nisan - Haziran</td>
                <td className="p-5">Ağustos 2026 ortası (geçti)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 bg-orange-50">
                <td className="p-5 font-semibold">3. Dönem</td>
                <td className="p-5">Temmuz - Eylül</td>
                <td className="p-5 font-semibold text-orange-600">17 Kasım 2026</td>
              </tr>
              <tr className="hover:bg-gray-50 bg-emerald-50">
                <td className="p-5 font-semibold">4. Dönem (yeniden eklenen)</td>
                <td className="p-5">Ekim - Aralık</td>
                <td className="p-5 font-semibold text-emerald-700">17 Şubat 2027 (ilk kez)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Özel hesap dönemine tabi mükellefler için bu aylar kendi hesap
          dönemlerine göre kayar; yukarıdaki tablo yalnızca takvim yılını
          (1 Ocak - 31 Aralık) esas alan mükellefler için geçerlidir.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Ocak - Mart</h3>
            <p className="mt-2 text-sm text-gray-600">İlk üç aylık kümülatif kazanç</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Ocak - Haziran</h3>
            <p className="mt-2 text-sm text-gray-600">İlk altı ayın kümülatif kazancı</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Ocak - Eylül</h3>
            <p className="mt-2 text-sm text-gray-600">İlk dokuz ayın kümülatif kazancı</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Ocak - Aralık</h3>
            <p className="mt-2 text-sm text-gray-600">Yılın tamamının kümülatif kazancı (yeniden eklendi)</p>
          </div>
        </div>
      </section>

      {/* 6. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Karıştırmayın: Dördüncü Dönem, Yıllık Beyanname Değildir
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ İki Ayrı Beyanname, İki Ayrı Amaç
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Birçok işletme sahibi &quot;zaten iki ay sonra yıllık
            beyanname vereceğim, neden ayrıca dördüncü dönem geçici vergi
            beyanı da veriyorum&quot; diye şaşırıyor. Bu iki beyanname
            birbirinin yerine geçmiyor:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">4. Dönem Geçici Vergi Beyannamesi</th>
                  <th className="p-4">Yıllık Kurumlar/Gelir Vergisi Beyannamesi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Kapsadığı dönem</td>
                  <td className="p-4">Ocak - Aralık (kümülatif, erken tahmini kazanç)</td>
                  <td className="p-4">Ocak - Aralık (kesinleşmiş, nihai kazanç)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Son verilme tarihi (takvim yılı)</td>
                  <td className="p-4">17 Şubat</td>
                  <td className="p-4">Kurumlar: Nisan sonu, Gelir vergisi: Mart sonu</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Vergi oranı</td>
                  <td className="p-4">Gelir vergisinde ilk dilim oranı (%15), kurumlar vergisinde cari dönem oranı</td>
                  <td className="p-4">Gelir vergisi tarifesi (artan oranlı) veya kurumlar vergisi oranı</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">İlişki</td>
                  <td className="p-4">Peşin ödeme; yıllık beyannamede mahsup edilir</td>
                  <td className="p-4">Nihai hesaplama; geçici vergiler burada mahsup/iade edilir</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Dördüncü dönemin eklenmesiyle birlikte, yıl içinde ödenen
            geçici vergi tutarı kümülatif olarak yıllık vergiye daha
            yakınlaşıyor. Ama bu yakınlaşma, iki ayrı beyanname verme
            yükümlülüğünü ortadan kaldırmıyor; sadece yıllık beyannamede
            mahsup edilecek tutarı değiştiriyor.
          </p>
        </div>
      </section>

      {/* 7. ENFLASYON DÜZELTMESİ */}
      <section id="enflasyon" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Enflasyon Düzeltmesi İstisnası
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Dördüncü dönemin geri gelmesiyle birlikte gündeme gelen bir
          başka soru, bu dönemde enflasyon düzeltmesi yapılıp
          yapılmayacağıydı. Gelir İdaresi Başkanlığı, <strong>24 Aralık
          2025 tarihli ve 33117 sayılı Resmî Gazete&apos;de yayımlanan
          587 sıra no&apos;lu Vergi Usul Kanunu Genel Tebliği</strong> ile
          bu konuyu netleştirdi: 2025 hesap döneminin dördüncü geçici
          vergi döneminde, kapsam dahilindeki mükelleflerin enflasyon
          düzeltmesi yapmaması uygun bulundu.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu istisnanın da kendi istisnaları var: sürekli olarak işlenmiş
          altın ve gümüş alım satımı veya imali ile iştigal eden
          mükellefler, dördüncü dönemde de enflasyon düzeltmesi yapmaya
          devam ediyor. Bu kural, 2025&apos;in ilk üç dönemi için
          582 sıra no&apos;lu tebliğle belirlenen aynı istisna mantığının
          dördüncü döneme taşınmış hali.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            2026 hesap döneminin dördüncü dönemi (Ekim-Aralık 2026) için
            enflasyon düzeltmesi yapılıp yapılmayacağına dair benzer bir
            tebliğ bu yazının yayımlandığı tarih itibarıyla henüz
            yayımlanmadı. Geçmiş yılın uygulaması bir emsal oluştursa da
            kesin bir garanti değil; GİB bu konuda her yıl ayrı bir
            tebliğ yayımlıyor. Şirketlerin Aralık 2026&apos;da GİB&apos;in
            resmî duyurularını takip ederek, dördüncü dönem kapanış
            çalışmalarını bu tebliğ netleşmeden kesinleştirmemesi doğru
            bir yaklaşım.
          </p>
        </div>
      </section>

      {/* 8. ETKİLER */}
      <section id="etkiler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Şirketler İçin Pratik Etkileri
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Mevzuat değişikliğinin kâğıt üzerinde göründüğünden daha somut
          sonuçları var. Üç ana başlıkta özetlemek mümkün:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Nakit akışı planlaması:</strong> Dört dönem olunca
            yıl içinde ödenen toplam geçici vergi tutarı, yıllık vergiye
            daha yakınlaşıyor. İşletmelerin Şubat ayı nakit planlamasına,
            daha önce bu dönemde yer almayan bir vergi çıkışını da
            eklemesi gerekiyor.
          </li>
          <li>
            <strong>Muhasebe iş yükü:</strong> Yılda üç değil dört kez
            kümülatif mizan ve bilanço çıkarmak, hem içeride muhasebe
            departmanı olan hem de dışarıdan hizmet alan işletmeler için
            ek bir kapanış döngüsü anlamına geliyor.
          </li>
          <li>
            <strong>Mahsup ve iade süreci:</strong> Fazla ödenen geçici
            vergi her zaman olduğu gibi yıllık beyannamede mahsup
            ediliyor, kalan tutar varsa iade veya başka vergilere mahsup
            talep edilebiliyor. Dördüncü dönemin eklenmesiyle yıl içinde
            tahsil edilen toplam tutar büyüdüğü için, bazı işletmelerde
            mahsup/iade sürecinin daha büyük tutarlarla ve daha sık
            gündeme gelmesi bekleniyor.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Mali müşavirlik ve vergi danışmanlığı çevrelerinde, dördüncü
          dönemin yeniden getirilmesine yönelik bir eleştiri de dile
          getiriliyor: dönem bitimiyle yıllık beyanname arasında sadece
          iki aylık bir süre varken ayrı bir beyanname verilmesinin
          idari yükü artırdığı, buna karşılık devlete sağladığı erken
          tahsilat avantajının göreceli olarak sınırlı kaldığı
          yönünde. Bu tartışma uygulamayı değiştirmiyor, ama şirketlerin
          konuyu sadece teknik bir form doldurma işi olarak değil, yıl
          sonu süreçlerini etkileyen bir takvim değişikliği olarak ele
          alması gerektiğini gösteriyor.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Değişiklik geriye dönük olarak 2025 hesap dönemini de kapsadı; 2025&apos;in dördüncü dönem beyannamesini eksik veya hiç vermeyen mükellefler için geçmişe dönük bir kontrol yapılması önemli.</li>
            <li>Geçmiş dönemlere ait geçici verginin %10&apos;dan fazla eksik beyan edildiğinin tespiti halinde, eksik kısım için ek geçici vergi tarh edilir; dönem sayısı dörde çıktığı için bu riskin tekrarlanma sıklığı da arttı.</li>
            <li>Özel hesap dönemine tabi mükellefler için &quot;Ocak-Mart, Nisan-Haziran&quot; gibi takvim ayları geçerli değil; dönemler kendi hesap dönemlerine göre kayar.</li>
            <li>İşletme hesabı esasına göre defter tutan ticari kazanç sahipleri de bu kapsamda; &quot;bilanço tutmuyorum, beni ilgilendirmez&quot; varsayımı geçici vergide geçerli değil.</li>
            <li>2026&apos;nın dördüncü döneminde enflasyon düzeltmesi istisnasının geçerli olup olmayacağı henüz netleşmedi; GİB&apos;in Aralık 2026&apos;da yayımlayacağı tebliğ beklenmeli.</li>
          </ul>
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
              <a href="https://www.resmigazete.gov.tr/eskiler/2025/12/20251219-1.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                7566 Sayılı Kanun, Madde 2 (19 Aralık 2025, RG 33112) - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/node/88655/pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Vergi Usul Kanunu Genel Tebliği (Sıra No: 587) (24 Aralık 2025, RG 33117) - gib.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.193.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                193 Sayılı Gelir Vergisi Kanunu, Mükerrer Madde 120 - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5520.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                5520 Sayılı Kurumlar Vergisi Kanunu, Madde 32 - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelir İdaresi Başkanlığı - Güncel Vergi Takvimi (gib.gov.tr)
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
              Geçici vergide dördüncü dönem gerçekten geri geldi mi, yoksa söylenti mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Gerçekten geri geldi. 19 Aralık 2025 tarihli ve 33112 sayılı
              Resmî Gazete&apos;de yayımlanan 7566 sayılı Kanun, Gelir
              Vergisi Kanunu mükerrer 120. maddesinden &quot;ilk dokuz ayı
              için belirlenen&quot; ibaresini çıkararak 2021&apos;de
              kaldırılan dördüncü dönemi (Ekim-Aralık) yeniden yürürlüğe
              soktu.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Dördüncü dönem hangi ayları kapsıyor ve ne zaman beyan ediliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Takvim yılına tabi mükellefler için dördüncü dönem
              Ekim-Aralık aylarını kapsıyor ve genel kural olarak izleyen
              ikinci ayın 17&apos;nci günü akşamına kadar beyan edilip
              ödeniyor; yani 2026 yılının dördüncü dönemi ilk kez 17
              Şubat 2027&apos;de beyan edilecek.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu değişiklik 2025&apos;ten mi yoksa 2026&apos;dan mı itibaren geçerli?
            </h3>
            <p className="leading-8 text-gray-700">
              1 Ocak 2025 ve sonrasında başlayan vergilendirme dönemlerine
              uygulanmak üzere yürürlüğe girdi. Dolayısıyla ilk uygulama
              2025 hesap döneminde yapıldı; takvim yılına tabi kurumlar
              2025&apos;in dördüncü dönem beyannamesini 17 Şubat
              2026&apos;da verdi. 2026 hesap dönemi için de aynı yapı
              sürüyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Dördüncü dönem geçici vergisi ile yıllık beyanname aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Dördüncü dönem geçici vergisi, Ocak-Aralık arasındaki
              kümülatif kazanç üzerinden erken ve peşin ödenen bir vergi;
              yıllık beyanname ise nihai, kesinleşmiş kazanç üzerinden
              hesaplanan asıl vergi beyanı. Ödenen geçici vergiler yıllık
              beyannamede mahsup edilir, ama dördüncü dönem beyanı vermek
              yıllık beyanname verme yükümlülüğünü ortadan kaldırmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İşletme hesabı esasına göre defter tutan şahıs işletmeleri de kapsamda mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Geçici vergi mükellefiyeti, finansman gider
              kısıtlaması gibi bazı diğer kurallardan farklı olarak
              bilanço esası aramıyor; basit usule tabi olmayan tüm
              ticari kazanç sahipleri (bilanço veya işletme hesabı esası
              fark etmeksizin) ve serbest meslek erbabı kapsamda.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;nın dördüncü döneminde enflasyon düzeltmesi yapılacak mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu yazının yayımlandığı tarih itibarıyla henüz netleşmedi.
              2025&apos;in dördüncü döneminde, 587 sıra no&apos;lu VUK
              Genel Tebliği ile (altın/gümüş alım satımı ve imaliyle
              sürekli iştigal edenler hariç) enflasyon düzeltmesi
              yapılmaması uygun bulunmuştu. 2026 dördüncü dönemi için
              GİB&apos;in Aralık 2026&apos;da yayımlayacağı tebliğ takip
              edilmeli.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Güncel Geçici Vergi Takvimini Birlikte Netleştirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Dördüncü dönemin eklenmesiyle değişen beyan takviminin
            şirketinizi hangi aylarda etkilediğini, kümülatif kazanç
            hesaplamalarının doğru yürütülüp yürütülmediğini ve yıl sonu
            nakit planlamanızı{" "}
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

      {/* 12. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Geçici vergide dördüncü dönemin geri gelmesi, küçük bir teknik
          değişiklik gibi görünse de şirketlerin yıl sonu kapanış
          takvimini ve nakit planlamasını doğrudan etkiliyor. 2021&apos;de
          kaldırılan bu dönem artık 2025 hesap döneminden itibaren yeniden
          zorunlu; 2026&apos;da da üçüncü dönem (Temmuz-Eylül) beyanı 17
          Kasım&apos;da verilirken, yeni eklenen dördüncü dönem ilk kez 17
          Şubat 2027&apos;de beyan edilecek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketlerin
          güncel geçici vergi takvimine uygun şekilde hazırlanmasına,
          kümülatif hesaplamaların ve yıl sonu kapanış süreçlerinin
          değişen mevzuata göre doğru yürütülmesine yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/asgari-kurumlar-vergisi-nedir-2026-hesaplama-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Asgari Kurumlar Vergisi Nedir? Zarar Eden Şirket Bile Neden Vergi Ödeyebilir?</h3>
          </Link>
          <Link
            href="/blog/finansman-gider-kisitlamasi-hesaplama-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Finansman Gider Kısıtlaması Nedir? 2026 Hesaplama Rehberi</h3>
          </Link>
          <Link
            href="/blog/tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Geçici vergide dördüncü dönem gerçekten geri geldi mi, yoksa söylenti mi?","acceptedAnswer":{"@type":"Answer","text":"Gerçekten geri geldi. 19 Aralık 2025 tarihli ve 33112 sayılı Resmî Gazete'de yayımlanan 7566 sayılı Kanun, Gelir Vergisi Kanunu mükerrer 120. maddesinden 'ilk dokuz ayı için belirlenen' ibaresini çıkararak 2021'de kaldırılan dördüncü dönemi (Ekim-Aralık) yeniden yürürlüğe soktu."}},{"@type":"Question","name":"Dördüncü dönem hangi ayları kapsıyor ve ne zaman beyan ediliyor?","acceptedAnswer":{"@type":"Answer","text":"Takvim yılına tabi mükellefler için dördüncü dönem Ekim-Aralık aylarını kapsıyor ve genel kural olarak izleyen ikinci ayın 17'nci günü akşamına kadar beyan edilip ödeniyor; yani 2026 yılının dördüncü dönemi ilk kez 17 Şubat 2027'de beyan edilecek."}},{"@type":"Question","name":"Bu değişiklik 2025'ten mi yoksa 2026'dan mı itibaren geçerli?","acceptedAnswer":{"@type":"Answer","text":"1 Ocak 2025 ve sonrasında başlayan vergilendirme dönemlerine uygulanmak üzere yürürlüğe girdi. Dolayısıyla ilk uygulama 2025 hesap döneminde yapıldı; takvim yılına tabi kurumlar 2025'in dördüncü dönem beyannamesini 17 Şubat 2026'da verdi. 2026 hesap dönemi için de aynı yapı sürüyor."}},{"@type":"Question","name":"Dördüncü dönem geçici vergisi ile yıllık beyanname aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Dördüncü dönem geçici vergisi, Ocak-Aralık arasındaki kümülatif kazanç üzerinden erken ve peşin ödenen bir vergi; yıllık beyanname ise nihai, kesinleşmiş kazanç üzerinden hesaplanan asıl vergi beyanı. Ödenen geçici vergiler yıllık beyannamede mahsup edilir, ama dördüncü dönem beyanı vermek yıllık beyanname verme yükümlülüğünü ortadan kaldırmaz."}},{"@type":"Question","name":"İşletme hesabı esasına göre defter tutan şahıs işletmeleri de kapsamda mı?","acceptedAnswer":{"@type":"Answer","text":"Evet. Geçici vergi mükellefiyeti, finansman gider kısıtlaması gibi bazı diğer kurallardan farklı olarak bilanço esası aramıyor; basit usule tabi olmayan tüm ticari kazanç sahipleri (bilanço veya işletme hesabı esası fark etmeksizin) ve serbest meslek erbabı kapsamda."}},{"@type":"Question","name":"2026'nın dördüncü döneminde enflasyon düzeltmesi yapılacak mı?","acceptedAnswer":{"@type":"Answer","text":"Bu yazının yayımlandığı tarih itibarıyla henüz netleşmedi. 2025'in dördüncü döneminde, 587 sıra no'lu VUK Genel Tebliği ile (altın/gümüş alım satımı ve imaliyle sürekli iştigal edenler hariç) enflasyon düzeltmesi yapılmaması uygun bulunmuştu. 2026 dördüncü dönemi için GİB'in Aralık 2026'da yayımlayacağı tebliğ takip edilmeli."}}]}) }}
      />
    </BlogLayout>
  );
}
