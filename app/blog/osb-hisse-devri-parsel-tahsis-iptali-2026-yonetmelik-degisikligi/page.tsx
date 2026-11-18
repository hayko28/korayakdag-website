import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "OSB'de Hisse Devri ve Tahsis İptali Riski 2026 | Koray Akdağ",
  description:
    "6 Kasım 2026 tarihli ve 33422 sayılı Resmî Gazete'de yayımlanan değişiklikle Organize Sanayi Bölgeleri Uygulama Yönetmeliği'nde hisse devri, ön tahsis, yeniden tahsis ve yeni 'üst hakkı' kurumuna ilişkin önemli kurallar yürürlüğe girdi. Bakanlık onayı olmadan şirket paylarının %49'unu aşan değişiklik artık tahsis iptaline yol açabiliyor. Kapsam ve OSB yatırımcılarının dikkat etmesi gerekenlerle güncel rehber.",
  keywords: [
    "OSB hisse devri tahsis iptali",
    "organize sanayi bölgesi yönetmelik değişikliği 2026",
    "OSB üst hakkı nedir",
    "OSB parsel tahsisi %49 hisse kuralı",
    "Organize Sanayi Bölgeleri Uygulama Yönetmeliği 33422",
    "OSB ön tahsis devri",
    "OSB yeniden tahsis",
  ],
  alternates: {
    canonical: "/blog/osb-hisse-devri-parsel-tahsis-iptali-2026-yonetmelik-degisikligi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="OSB'de Şirket Hissesi Satarsanız Fabrika Tahsisiniz İptal Edilebilir: 2026 Yönetmelik Değişikliği Ne Diyor?"
      description="6 Kasım 2026 tarihli ve 33422 sayılı Resmî Gazete'de yayımlanan değişiklikle Organize Sanayi Bölgeleri Uygulama Yönetmeliği'nde hisse devri, ön tahsis, yeniden tahsis ve yeni 'üst hakkı' kurumuna ilişkin önemli kurallar yürürlüğe girdi. Bakanlık onayı olmadan şirket paylarının %49'unu aşan değişiklik artık tahsis iptaline yol açabiliyor. Kapsam, yeni üst hakkı müessesesi ve OSB yatırımcılarının şimdi kontrol etmesi gerekenlerle resmî kaynaklara dayanan güncel rehber."
      category="ORGANİZE SANAYİ BÖLGESİ • YATIRIM MEVZUATI • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="osb-hisse-devri-parsel-tahsis-iptali-2026-yonetmelik-degisikligi"
      coverImage="https://images.unsplash.com/photo-1769701000480-6c3d8ab912c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="OSB'deki Hisse Devrinizi veya Yatırımınızı Birlikte Değerlendirelim"
      ctaText="Şirketinizde ortaklık yapısı değişecekse veya bir OSB parseli olan şirketi satın almayı düşünüyorsanız, tahsisin güncel yönetmelik karşısındaki durumunu birlikte netleştirelim ve gerekli Bakanlık onay sürecini birlikte planlayalım."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: OSB Yönetmeliğinde Ne Değişti?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>6 Kasım 2026</strong> tarihli, <strong>33422 sayılı</strong> Resmî Gazete&apos;de yayımlanan değişiklikle Organize Sanayi Bölgeleri Uygulama Yönetmeliği&apos;nin 19, 42, 54/A, 55, 60, 61 ve 63. maddeleri değişti, yeni bir <strong>63/A maddesi (üst hakkı)</strong> eklendi.</li>
          <li>✔ En kritik değişiklik: Bakanlık onayı olmadan bir şirketin paylarında toplam <strong>%49&apos;u aşan</strong> bir değişiklik yapılırsa, o şirkete ait ön tahsis veya arsa tahsisi <strong>iptal edilebiliyor</strong> (madde 61/5).</li>
          <li>✔ Ön tahsis artık tamamen devredilemez değil; 61. maddenin 3. ve 4. fıkralarındaki şartlarla <strong>devredilebiliyor</strong>, ama devir amaçlı izinsiz hisse değişimi tespit edilirse iptal riski var.</li>
          <li>✔ Yeni gelen <strong>&quot;üst hakkı&quot;</strong> (madde 63/A), katılımcının parselini devretmeden, yatırım ortağı veya finansman sağlayan lehine sınırlı ve devredilemez bir hak kurmasına izin veriyor.</li>
          <li>✔ Süresi dolduğu için tahsisi iptal edilen katılımcı, bedel iadesinden önce <strong>yeniden tahsis</strong> isteyebiliyor; OSB ve Bakanlık onayıyla parsel ilana çıkmadan güncel bedelle kendisine verilebiliyor.</li>
          <li>✔ Değişiklik <strong>yayım tarihinde</strong> (6 Kasım 2026) yürürlüğe girdi; geçiş hükmü yok, dolayısıyla mevcut tahsis sözleşmeleri de bu kurallarla birlikte okunmalı.</li>
          <li>✔ Bu değişiklik özellikle şirket satın alma, birleşme ve ortaklık yapısı değişikliği planlayan OSB katılımcılarını doğrudan ilgilendiriyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. OSB&apos;de Parsel Tahsisi ve Spekülasyon Önleme Mantığı
          </Link>
          <Link href="#degisiklik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 6 Kasım 2026 Değişikliği: Maddeler Özeti
          </Link>
          <Link href="#hisse-devri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. En Kritik Kural: %49 Hisse Devri Sınırı
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırmayın: Üst Hakkı mı, Tahsisin Devri mi?
          </Link>
          <Link href="#ust-hakki" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yeni Gelen Üst Hakkı (Madde 63/A) Nedir?
          </Link>
          <Link href="#komsu-parsel" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Komşu Parsel Önceliği ve Yeniden Tahsis Kolaylığı
          </Link>
          <Link href="#kimler-etkileniyor" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler Etkileniyor?
          </Link>
          <Link href="#ne-yapmali" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Şirketler Şimdi Ne Yapmalı?
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
          1. OSB&apos;de Parsel Tahsisi ve Spekülasyon Önleme Mantığı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Organize sanayi bölgelerindeki (OSB) parseller, 4562 sayılı
          Organize Sanayi Bölgeleri Kanunu çerçevesinde çıkarılan{" "}
          <strong>Organize Sanayi Bölgeleri Uygulama Yönetmeliği</strong>{" "}
          kapsamında, yatırım yapmak isteyen gerçek veya tüzel kişilere
          genellikle piyasa değerinin altında bir bedelle{" "}
          <strong>tahsis</strong> edilir. Bu avantajlı bedelin tek amacı,
          parselin üzerinde fiilen üretim yapılmasıdır; parsel üzerinde
          kâr amaçlı alım satım yapılması yönetmeliğin ruhuna aykırıdır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yüzden yönetmelik, baştan itibaren parselin doğrudan
          devrini ve şirket üzerinden dolaylı devrini (hisse devri
          yoluyla) sınırlayan hükümler içeriyor. 6 Kasım 2026&apos;da
          yürürlüğe giren değişiklik, bu spekülasyon önleme mantığını
          daha somut ve uygulanabilir hale getiriyor; aynı zamanda
          katılımcıların meşru ortaklık ve finansman ihtiyaçlarına
          cevap verecek yeni araçlar (üst hakkı, yeniden tahsis) ekliyor.
        </p>
      </section>

      {/* 2. DEĞİŞİKLİK ÖZETİ */}
      <section id="degisiklik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 6 Kasım 2026 Değişikliği: Maddeler Özeti
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Sanayi ve Teknoloji Bakanlığı tarafından hazırlanan{" "}
          <strong>Organize Sanayi Bölgeleri Uygulama Yönetmeliğinde
          Değişiklik Yapılmasına Dair Yönetmelik</strong>, 6 Kasım 2026
          tarihli ve 33422 sayılı Resmî Gazete&apos;de yayımlandı. On
          maddelik değişiklik yönetmeliği, yayımı tarihinde yürürlüğe
          girdi.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Madde</th>
                <th className="p-5">Konu</th>
                <th className="p-5">Özet</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">19</td>
                <td className="p-5">Genel kurula katılım</td>
                <td className="p-5">Temsil yetkisi ve muvafakatname şartları netleştirildi; büyük parsel sahiplerine yapı kullanma izni şartı eklendi.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">42</td>
                <td className="p-5">İş yeri ruhsatı</td>
                <td className="p-5">Ruhsatların çevrim içi sistemde elektronik imzalanması zorunlu hale geldi.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">54/A</td>
                <td className="p-5">Ön tahsis</td>
                <td className="p-5">Ön tahsis süresi yeniden tanımlandı; belirli şartlarla devir imkânı, izinsiz devirde iptal riski getirildi.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">55 (yeni f.5)</td>
                <td className="p-5">Komşu parsel önceliği</td>
                <td className="p-5">Üretime geçmiş komşu katılımcıya öncelik, ancak ihale yoluyla ve ihale bedeli üzerinden tanınacak.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">60</td>
                <td className="p-5">Süre uzatımı ve yeniden tahsis</td>
                <td className="p-5">İptal edilmiş tahsisler belirli şartlarla hükümsüz sayılabiliyor; süresi dolan katılımcı yeniden tahsis isteyebiliyor.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">61/5</td>
                <td className="p-5">%49 hisse kuralı</td>
                <td className="p-5">Bakanlık onayı olmadan şirket paylarında %49&apos;u aşan değişiklik, tahsisin iptaline yol açabiliyor.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">63 / 63-A</td>
                <td className="p-5">Kiracı başvurusu ve üst hakkı</td>
                <td className="p-5">Kiracıyla birlikte başvuruda bir yıl şartı kaldırıldı; yeni &quot;üst hakkı&quot; kurumu eklendi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. %49 KURALI */}
      <section id="hisse-devri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. En Kritik Kural: %49 Hisse Devri Sınırı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Değişikliğin en çok tartışılan hükmü, 61. maddenin beşinci
          fıkrasında yer alıyor. Yönetmelik, &quot;spekülatif amaçlı
          işlemlerin önlenmesi amacıyla&quot; ifadesiyle açıkça gerekçe
          belirterek şu kuralı getiriyor: Bir OSB parseline ön tahsis
          veya arsa tahsisi sahibi şirketin ortaklık yapısında,{" "}
          <strong>Bakanlık onayı alınmadan</strong> toplamda <strong>%49&apos;u
          aşan</strong> bir pay değişikliği gerçekleşirse, bu şirkete ait
          ön tahsis veya arsa tahsisi <strong>iptal edilebiliyor</strong>.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu kural önceki uygulamalarda da bir ölçüde gözetiliyordu, ama
          2026 değişikliğiyle doğrudan yönetmelik metnine girdi ve
          tahsis/ön tahsis sözleşmelerinde yer alması zorunlu hale
          geldi. Pratik sonucu şu: bir OSB parseli bulunan şirketi kısmen
          veya tamamen satın almayı planlıyorsanız, devredilecek hisse
          oranı %49&apos;u aşıyorsa, işlem öncesinde OSB yönetimi ve
          Bakanlık nezdinde onay sürecini işletmeniz gerekiyor. Aksi
          halde, işlem tamamlandıktan sonra fabrikanın üzerinde kurulu
          olduğu parselin tahsisinin iptal edilmesi riskiyle karşı
          karşıya kalabilirsiniz.
        </p>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırmayın: Üst Hakkı mı, Tahsisin Devri mi?
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Üst Hakkı Tesis Etmek, Parseli Devretmek Değildir
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Yeni eklenen üst hakkı kurumu haberlerde bazen &quot;OSB
            parsellerinde devir kolaylaştı&quot; şeklinde yanlış
            yorumlanıyor. Oysa yönetmeliğin kurduğu bu hak, tahsisin
            kendisinin devrinden tamamen farklı bir şey:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Üst Hakkı (madde 63/A)</th>
                  <th className="p-4">Tahsisin Devri</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Katılımcı sıfatı</td>
                  <td className="p-4">Değişmez; katılımcı aynı kalır, sorumluluğu devam eder.</td>
                  <td className="p-4">Yeni kişi katılımcı sıfatını alır.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Tapu kaydı</td>
                  <td className="p-4">Ayrı bağımsız taşınmaz olarak tapuya işlenmez.</td>
                  <td className="p-4">Tahsis/mülkiyet kaydı değişir.</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Süre</td>
                  <td className="p-4">Katılımcının tahsis süresini aşamaz, devredilemez.</td>
                  <td className="p-4">Devredilen kişiyle yeni süre/şartlar belirlenir.</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Amaç</td>
                  <td className="p-4">Yatırım ortağı veya finansman sağlayana sınırlı bir hak tanımak.</td>
                  <td className="p-4">Parselin bütünüyle başka bir katılımcıya geçmesi.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Kısacası üst hakkı, parseli devretmeden bir yatırım ortağına
            veya finansman sağlayan tarafa sınırlı bir kullanım/inşaat
            imkânı tanımanın yolu. Katılımcının yükümlülükleri sona
            ermiyor; üst hakkı sahibinin aykırı davranışlarından
            katılımcı da OSB&apos;ye karşı müteselsilen sorumlu tutuluyor.
          </p>
        </div>
      </section>

      {/* 5. ÜST HAKKI */}
      <section id="ust-hakki" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yeni Gelen Üst Hakkı (Madde 63/A) Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yönetmeliğe eklenen 63/A maddesi, OSB mülkiyetindeki ön
          tahsisli veya tahsisli parsellerde, tahsis hakkı sahibinin
          OSB yönetim kuruluna bildirdiği ve kurulun uygun gördüğü bir
          kişi veya kuruluş lehine <strong>üst hakkı</strong> tesis
          edilebilmesine izin veriyor. Bu hak şu özelliklerle sınırlı:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li><strong>Bağımsız ve sürekli değil:</strong> Ayrı bir taşınmaz olarak tapuya tescil edilmiyor.</li>
          <li><strong>Devredilemez:</strong> Üst hakkı sahibi bu hakkı başka bir tarafa aktaramıyor.</li>
          <li><strong>Süre sınırlı:</strong> Katılımcının kendi tahsis süresini hiçbir şekilde aşamıyor.</li>
          <li><strong>Sorumluluk devam ediyor:</strong> Üst hakkı sahibinin aldığı inşaat/ruhsat işlemleri katılımcının yükümlülükleri yerine geçiyor; aykırılıklardan katılımcı da sorumlu.</li>
          <li><strong>Bedelsiz tahsiste kısıtlı:</strong> Tamamen veya kısmen bedelsiz tahsis edilmiş parsellerde, mülkiyet katılımcıya geçmeden bu imkân kullanılamıyor.</li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Bu düzenleme özellikle büyük yatırım gerektiren tesislerde,
          katılımcının parseli elden çıkarmadan bir finansman ortağına
          veya yatırımcıya güvence sunabilmesini sağlıyor; önceki
          dönemde bu tür ihtiyaçlar yönetmelikte açıkça karşılanmıyordu.
        </p>
      </section>

      {/* 6. KOMŞU PARSEL VE YENİDEN TAHSİS */}
      <section id="komsu-parsel" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Komşu Parsel Önceliği ve Yeniden Tahsis Kolaylığı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Değişiklik, büyüme ihtiyacı olan üretici şirketler ve
          süresinde yükümlülüğünü tamamlayamamış katılımcılar için de
          iki önemli yenilik getiriyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 Komşu Parsel Önceliği (madde 55/5)</h3>
            <p className="text-gray-700">
              İlana çıkan bir parselle doğrudan sınırı olan ve ruhsat
              alarak üretime geçmiş bir katılımcı öncelik talep ederse,
              tahsis yöntemi kura olsa bile bu öncelik <strong>ihale
              yoluyla</strong> ve ihale bedeli üzerinden tanınıyor.
              Benzer konumda birden fazla başvuru varsa kimseye öncelik
              verilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📌 Yeniden Tahsis (madde 60/6-7)</h3>
            <p className="text-gray-700">
              Süresi dolduğu için tahsisi iptal edilen bir katılımcı,
              bedel iadesi yapılmadan önce aynı parselin kendisine
              yeniden tahsisini isteyebiliyor. OSB uygun görür ve
              Bakanlık onaylarsa parsel ilana çıkmadan, güncel bedelle
              yeniden tahsis edilebiliyor; ancak bu şekilde alınan
              parsele ayrıca süre uzatımı verilmiyor.
            </p>
          </div>
        </div>
      </section>

      {/* 7. KİMLER ETKİLENİYOR */}
      <section id="kimler-etkileniyor" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler Etkileniyor?
        </h2>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li><strong>OSB parseli olan şirketi satın almayı planlayanlar:</strong> Devredilecek hisse oranı %49&apos;u aşıyorsa, due diligence sürecinde tahsis durumu ve Bakanlık onay gerekliliği ayrıca kontrol edilmeli.</li>
          <li><strong>Ortaklık yapısını değiştirecek üretici şirketler:</strong> Yeni yatırımcı alımı, hisse devri veya aile şirketlerinde pay geçişleri bu sınırı tetikleyebilir.</li>
          <li><strong>Ön tahsis sahibi, yatırımı henüz tamamlamamış katılımcılar:</strong> Devir ve iptal kuralları daha sıkı şekilde işliyor.</li>
          <li><strong>Finansman ortağı veya yatırımcı arayan katılımcılar:</strong> Üst hakkı, parseli devretmeden ortaklık/finansman imkânı sunuyor.</li>
          <li><strong>Süresi dolmuş veya iptal riski taşıyan tahsis sahipleri:</strong> Yeniden tahsis imkânı yeni bir çıkış yolu sunuyor.</li>
          <li><strong>Komşu parselde üretime geçmiş, büyümek isteyen işletmeler:</strong> İhale yoluyla öncelik hakkı tanınıyor.</li>
        </ul>
      </section>

      {/* 8. NE YAPMALI */}
      <section id="ne-yapmali" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Şirketler Şimdi Ne Yapmalı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          OSB parseli bulunan bir şirkette hisse devri, yeni ortak
          alımı veya şirket satın alma işlemi planlanıyorsa, aşağıdaki
          sırayı takip etmek işlem sonrası sürpriz bir tahsis iptali
          riskini önemli ölçüde azaltıyor:
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Tahsis sözleşmesini gözden geçirin</h3>
            <p className="mt-2 text-sm text-gray-600">Parselin ön tahsisli mi, tahsisli mi, bedelli mi bedelsiz mi olduğunu ve sözleşmedeki hisse/devir hükümlerini netleştirin.</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Devredilecek pay oranını hesaplayın</h3>
            <p className="mt-2 text-sm text-gray-600">Planlanan işlemin toplamda %49&apos;u aşıp aşmadığını, önceki devirlerle birlikte kümülatif olarak değerlendirin.</p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">OSB yönetimine ve Bakanlığa başvurun</h3>
            <p className="mt-2 text-sm text-gray-600">%49&apos;u aşan bir devirde, işlem öncesinde OSB müdürlüğü üzerinden Bakanlık onay sürecini başlatın.</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Onay alınana kadar devri tamamlamayın</h3>
            <p className="mt-2 text-sm text-gray-600">Onay süreci tamamlanmadan payların devri işlemi sonuçlandırılırsa, tahsis iptal riski işlem sonrasında da devam eder.</p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Değişiklik <strong>geçiş hükmü içermiyor</strong>; yani önceden imzalanmış tahsis sözleşmeleri de bu yeni kurallar çerçevesinde değerlendiriliyor.</li>
            <li>%49 sınırı tek bir devirle sınırlı değil; zaman içinde yapılan devirlerin <strong>toplamı</strong> dikkate alınabiliyor, bu yüzden geçmiş devir geçmişinin de kayıt altında tutulması gerekiyor.</li>
            <li>Üst hakkı, bedelsiz veya kısmen bedelsiz tahsis edilmiş parsellerde mülkiyet katılımcıya geçmeden kullanılamıyor.</li>
            <li>Komşu parsel önceliği otomatik değil; süreç yine de ihale usulüyle ve ihale bedeli üzerinden işliyor.</li>
            <li>OSB&apos;den OSB&apos;ye uygulama farklılıkları olabilir; yönetmelik bir çerçeve çiziyor, somut başvuru ve onay süreci ilgili OSB müdürlüğü üzerinden yürütülüyor.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, şirket satın alma
            görüşmelerinde hedef şirketin OSB parseline sahip olduğunun
            bilinmesi ama bu parselin tahsis statüsünün (ön tahsis mi,
            kesin tahsis mi, bedelli mi bedelsiz mi) ve geçmiş hisse
            devir hareketlerinin ayrıca sorgulanmaması. %49&apos;luk
            sınır kümülatif değerlendirilebildiğinden, işlem tek başına
            sınırın altında kalsa bile önceki devirlerle birleştiğinde
            sınırı aşabiliyor. Bu yüzden OSB parseli bulunan bir
            şirketin due diligence sürecinde, tahsis dosyasının ve
            geçmiş pay devir kayıtlarının OSB müdürlüğünden ayrıca
            teyit edilmesi gerekiyor.
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
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/11/20261106.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                6 Kasım 2026 Tarihli ve 33422 Sayılı Resmî Gazete - resmigazete.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.sanayi.gov.tr/osbgm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Sanayi ve Teknoloji Bakanlığı - Organize Sanayi Bölgeleri Genel Müdürlüğü
              </a>
            </li>
            <li>
              <a href="https://www.mevzuat.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                mevzuat.gov.tr - Organize Sanayi Bölgeleri Uygulama Yönetmeliği (birleştirilmiş metin)
              </a>
            </li>
            <li>
              <a href="https://www.alomaliye.com/2026/11/06/organize-sanayi-bolgeleri-uygulama-yonetmeliginde-degisiklik-2/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Alomaliye.com - Değişiklik Yönetmeliği Tam Metni
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
              OSB&apos;de şirket hisselerimi sattığımda tahsisim otomatik olarak iptal mi olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, otomatik değil. İptal riski, Bakanlık onayı
              alınmadan şirket paylarında toplam <strong>%49&apos;u
              aşan</strong> bir değişiklik yapıldığının tespit edilmesi
              durumunda ortaya çıkıyor. %49&apos;u aşmayan veya Bakanlık
              onayı alınmış devirlerde bu madde kapsamında bir iptal
              söz konusu değil.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              %49 sınırı tek bir devirde mi hesaplanıyor, yoksa geçmiş devirlerle birlikte mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Yönetmelik metni &quot;toplam&quot; değişim ifadesini
              kullanıyor; bu nedenle uygulamada geçmişte yapılmış pay
              devirleriyle birlikte kümülatif bir değerlendirme riski
              bulunuyor. Net bir işlem planlamadan önce OSB müdürlüğü
              üzerinden konuyu teyit etmek önemli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Üst hakkı tesis etmek, parseli kiralamak veya devretmek anlamına mı geliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Üst hakkı, katılımcının tahsis sıfatını ve
              sorumluluğunu elinde tutarak, belirlediği bir kişi veya
              kuruluşa sınırlı, süreye bağlı ve devredilemez bir hak
              tanımasıdır. Parselin tahsis veya mülkiyet kaydı
              değişmiyor; katılımcı OSB karşısında sorumlu olmaya devam
              ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tahsisim süre dolduğu için iptal edildi, yeniden alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, yeni 60/6. fıkra kapsamında bedel iadesi yapılmadan
              önce yeniden tahsis talebinde bulunabilirsiniz. OSB uygun
              görür ve Bakanlık onaylarsa, parsel ilana çıkmadan güncel
              bedelle size yeniden tahsis edilebilir; ancak bu şekilde
              alınan parsele ayrıca süre uzatımı verilmiyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu değişiklik ne zaman yürürlüğe girdi, eski tahsis sözleşmelerini de kapsıyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Değişiklik, 6 Kasım 2026&apos;da Resmî Gazete&apos;de
              yayımlandığı tarihte yürürlüğe girdi. Ayrı bir geçiş
              hükmü bulunmadığından, önceden imzalanmış tahsis
              sözleşmeleri de bu yeni kurallar çerçevesinde
              değerlendiriliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Komşu parsel için öncelik talep edersem fiyatı ben mi belirliyorum?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yeni 55/5. fıkraya göre, komşu parsel önceliği
              yine bir ihale usulüyle ve ihale sonucunda oluşan bedel
              üzerinden tanınıyor; öncelik sadece ihaleye girme hakkı
              sağlıyor, bedeli belirleme yetkisi vermiyor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 OSB&apos;deki Hisse Devrinizi veya Yatırımınızı Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizde ortaklık yapısı değişecekse, yeni bir yatırım
            ortağı alacaksanız veya bir OSB parseli olan şirketi satın
            almayı planlıyorsanız,{" "}
            <Link href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026" className="text-orange-600 underline">
              due diligence sürecimiz
            </Link>{" "}
            kapsamında parselin tahsis statüsünü, hisse devir geçmişini
            ve Bakanlık onay gerekliliğini birlikte netleştirelim.{" "}
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
          2026 değişikliği, OSB parsellerinin spekülasyon amacıyla
          devredilmesini önleme hedefini güçlendirirken, aynı zamanda
          katılımcıların meşru finansman ve ortaklık ihtiyaçlarına üst
          hakkı gibi yeni bir araçla cevap veriyor. Üretici şirketler
          ve özellikle şirket satın alma veya ortaklık yapısı değişikliği
          planlayan taraflar için en kritik nokta, %49&apos;luk hisse
          devri sınırını ve Bakanlık onay sürecini işlem öncesinde
          netleştirmek.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, OSB parseli
          bulunan şirketlerin hisse devri, ortaklık değişikliği veya
          şirket satın alma işlemlerinde tahsis statüsünün ve gerekli
          onay süreçlerinin doğru planlanmasına, due diligence ve iş
          geliştirme danışmanlığı kapsamında yardımcı oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BİRLEŞME VE DEVRALMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma Öncesi Durum Tespiti</h3>
          </Link>
          <Link
            href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? Faydaları ve Şartları</h3>
          </Link>
          <Link
            href="/blog/turkiyede-sirket-satin-alma-yabanci-yatirimci-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BİRLEŞME VE DEVRALMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Şirket Satın Alma: Yabancı Yatırımcı Rehberi</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"OSB'de şirket hisselerimi sattığımda tahsisim otomatik olarak iptal mi olur?","acceptedAnswer":{"@type":"Answer","text":"Hayır, otomatik değil. İptal riski, Bakanlık onayı alınmadan şirket paylarında toplam %49'u aşan bir değişiklik yapıldığının tespit edilmesi durumunda ortaya çıkıyor. %49'u aşmayan veya Bakanlık onayı alınmış devirlerde bu madde kapsamında bir iptal söz konusu değil."}},{"@type":"Question","name":"%49 sınırı tek bir devirde mi hesaplanıyor, yoksa geçmiş devirlerle birlikte mi?","acceptedAnswer":{"@type":"Answer","text":"Yönetmelik metni toplam değişim ifadesini kullanıyor; bu nedenle uygulamada geçmişte yapılmış pay devirleriyle birlikte kümülatif bir değerlendirme riski bulunuyor. Net bir işlem planlamadan önce OSB müdürlüğü üzerinden konuyu teyit etmek önemli."}},{"@type":"Question","name":"Üst hakkı tesis etmek, parseli kiralamak veya devretmek anlamına mı geliyor?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Üst hakkı, katılımcının tahsis sıfatını ve sorumluluğunu elinde tutarak, belirlediği bir kişi veya kuruluşa sınırlı, süreye bağlı ve devredilemez bir hak tanımasıdır. Parselin tahsis veya mülkiyet kaydı değişmiyor; katılımcı OSB karşısında sorumlu olmaya devam ediyor."}},{"@type":"Question","name":"Tahsisim süre dolduğu için iptal edildi, yeniden alabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Evet, yeni 60/6. fıkra kapsamında bedel iadesi yapılmadan önce yeniden tahsis talebinde bulunabilirsiniz. OSB uygun görür ve Bakanlık onaylarsa, parsel ilana çıkmadan güncel bedelle size yeniden tahsis edilebilir; ancak bu şekilde alınan parsele ayrıca süre uzatımı verilmiyor."}},{"@type":"Question","name":"Bu değişiklik ne zaman yürürlüğe girdi, eski tahsis sözleşmelerini de kapsıyor mu?","acceptedAnswer":{"@type":"Answer","text":"Değişiklik, 6 Kasım 2026'da Resmî Gazete'de yayımlandığı tarihte yürürlüğe girdi. Ayrı bir geçiş hükmü bulunmadığından, önceden imzalanmış tahsis sözleşmeleri de bu yeni kurallar çerçevesinde değerlendiriliyor."}},{"@type":"Question","name":"Komşu parsel için öncelik talep edersem fiyatı ben mi belirliyorum?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yeni 55/5. fıkraya göre, komşu parsel önceliği yine bir ihale usulüyle ve ihale sonucunda oluşan bedel üzerinden tanınıyor; öncelik sadece ihaleye girme hakkı sağlıyor, bedeli belirleme yetkisi vermiyor."}}]}) }}
      />
    </BlogLayout>
  );
}
