import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK BiGG Yatırım Programı 2026-2 Çağrısı: 1.350.000 TL Yatırım Nasıl Alınır? | Koray Akdağ",
  description: "TÜBİTAK 1812 BiGG Yatırım Programı'nın 30 Eylül 2026'da kapanan 2026-2 çağrısında %3 hisse karşılığında 1.350.000 TL, temiz teknoloji kategorisinde %5 hisse karşılığında 2.250.000 TL yatırım imkânı. Faz 1-2-3 yapısı, kimler başvurabilir, tarihler ve yatırım sonrası şirket kuruluş yükümlülükleriyle güncel rehber.",
  keywords: [
    "TÜBİTAK BiGG Yatırım Programı",
    "TÜBİTAK 1812",
    "BiGG Yatırım 2026-2 çağrısı",
    "Mükemmeliyet Mührü nedir",
    "tohum öncesi yatırım",
    "girişimcilere hisse karşılığı yatırım",
    "TÜBİTAK BiGG Fonu",
    "girişimci destek programı 2026",
    "PRODİS başvuru",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜBİTAK BiGG Yatırım Programı 2026-2 Çağrısı: 1.350.000 TL Yatırım Nasıl Alınır?"
      description="Türkiye'nin ilk yatırım tabanlı girişimcilik destek programı olan TÜBİTAK BiGG Yatırım'ın (1812) 2026-2 çağrısında %3 hisse karşılığında 1.350.000 TL, temiz teknoloji kategorisinde %5 hisse karşılığında 2.250.000 TL yatırım fırsatı var. Faz 1-2-3 yapısı, kimler başvurabilir, 30 Eylül 2026 son başvuru tarihi ve yatırımı almadan önce yapılması gereken şirket kuruluşuyla güncel rehber."
      category="TÜBİTAK • GİRİŞİMCİLİK DESTEĞİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="tubitak-bigg-yatirim-programi-2026-2-cagrisi"
      coverImage="https://images.unsplash.com/photo-1680781632885-ab108445f5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yatırımı Aldıktan Sonraki Şirket Kuruluş ve Muhasebe Sürecinizi Baştan Sona Yönetelim"
      ctaText="Mükemmeliyet Mührü aldıysanız, TÜBİTAK BİGG Fonu'nun yatırımını alabilmeniz için 31 Aralık 2026'ya kadar bir şirket kurmanız gerekiyor. Doğru şirket türü, ortaklık yapısı ve yatırım sonrası defter tutma/raporlama yükümlülükleri için ayrı bir yerel muhasebeci aramanıza gerek yok; kuruluştan kuruluş sonrası muhasebeye kadar süreci birlikte yönetelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜBİTAK, klasik hibe modelinin dışında Türkiye&apos;nin ilk
          yatırım tabanlı girişimcilik destek programını yürütüyor: BiGG
          Yatırım (resmî kodu 1812). Programın 2026 yılı 2. çağrısı 31
          Ağustos&apos;ta açıldı ve son başvuru tarihi <strong>30 Eylül
          2026</strong>. Bu yazıda programın nasıl işlediğini, bu çağrıya
          gerçekte kimlerin başvurabileceğini ve yeni başlayan bir
          girişimcinin bir sonraki çağrıya nasıl hazırlanması gerektiğini
          net şekilde anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ BiGG Yatırım Programı (1812) nedir, klasik hibe programlarından farkı ne?</li>
          <li>✔ Faz 1, Faz 2, Faz 3 yapısı ve aralarındaki fark</li>
          <li>✔ 2026-2 çağrısına gerçekte kimler başvurabilir?</li>
          <li>✔ Yatırım tutarı, hisse oranı ve temiz teknoloji kategorisi</li>
          <li>✔ Tarihler: başvuru, sonuç, şirket kuruluşu, destek başlangıcı</li>
          <li>✔ Yatırımı almadan önce yapılması gereken şirket kuruluşu</li>
          <li>✔ Dikkat edilmesi gerekenler ve sık sorulan sorular</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. BiGG Yatırım Programı (1812) Nedir?
          </Link>
          <Link href="#fazlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Faz 1, Faz 2, Faz 3: Programın Yapısı
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 2026-2 Çağrısına Kimler Başvurabilir?
          </Link>
          <Link href="#tutar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yatırım Tutarı, Hisse Oranı ve Temiz Teknoloji Kategorisi
          </Link>
          <Link href="#tarihler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Kritik Tarihler
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Adım Adım Süreç
          </Link>
          <Link href="#kurulus" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Yatırımı Almadan Önce: Şirket Kuruluşu Zorunluluğu
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. BiGG Yatırım Programı (1812) Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BiGG Yatırım Programı, TÜBİTAK&apos;ın uzun yıllardır yürüttüğü
          1512 Girişimcilik Destekleme Programı&apos;nın (bilinen adıyla
          BiGG) devamı niteliğinde ama farklı bir finansman mantığıyla
          çalışıyor. Klasik 1512 programı girişimciye geri ödemesiz hibe
          verirken, 1812 kodlu BiGG Yatırım Programı işin adını koyduğu
          gibi bir <strong>yatırım</strong> modeli kuruyor: TÜBİTAK BİGG
          Fonu, teknoloji ve yenilik odaklı iş fikri geliştiren
          girişimcilerin kuracağı şirkete belirli bir hisse karşılığında
          doğrudan sermaye koyuyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Programın amacı, üniversite öğrencisi veya mezunu girişimci
          adaylarının iş fikrini önce eğitim ve mentörlük yoluyla iş
          planına, ardından gerçek bir şirkete dönüştürmesini sağlamak.
          Bakan Mehmet Fatih Kacır, programın Türkiye&apos;nin ilk yatırım
          tabanlı girişimcilik destek programı olduğunu vurgulayarak
          teknoloji ekosistemine katkısının süreceğini açıkladı.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısacası: klasik hibe programlarından farklı olarak burada
            karşılıksız para yok, TÜBİTAK girişiminize ortak oluyor.
            Buna karşılık girişimci, geri ödeme yükümlülüğü olmadan
            (borç değil, sermaye yatırımı) önemli bir başlangıç
            finansmanına ulaşıyor.
          </p>
        </div>
      </section>

      {/* 2. FAZLAR */}
      <section id="fazlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Faz 1, Faz 2, Faz 3: Programın Yapısı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu noktayı doğru anlamak kritik: 30 Eylül 2026&apos;ya kadar açık
          olan 2026-2 çağrısı, programın <strong>tamamı değil, ikinci
          fazına</strong> ait bir başvuru dönemi. Program üç aşamadan
          oluşuyor:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🚀</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Faz 1: Hızlandırma</h3>
            <p className="text-sm text-gray-700">
              Girişimci adayı, bir Uygulayıcı Kuruluş (üniversite TTO&apos;su,
              teknopark veya hızlandırma merkezi) üzerinden PRODİS
              sistemine iş fikriyle başvurur. Eğitim, mentörlük ve
              kuluçka desteğiyle iş fikri doğrulanır ve iş planına
              dönüştürülür. Bu aşamaya henüz bir çağrı takvimi bağlı
              değildir; uygulayıcı kuruluşlar kendi dönemlerinde alım
              yapar.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-orange-500 bg-orange-50 p-6 shadow-sm">
            <div className="mb-3 text-4xl">💰</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Faz 2: Tohum Öncesi Yatırım</h3>
            <p className="text-sm text-gray-700">
              Faz 1&apos;i tamamlayıp <strong>Mükemmeliyet Mührü</strong>
              almaya hak kazanan girişimciler şirketini kurar ve TÜBİTAK
              BİGG Fonu ile yatırım sözleşmesi imzalar. <strong>Şu an
              açık olan 2026-2 çağrısı tam olarak bu aşamanın başvuru
              dönemi.</strong> Destek süresi en fazla 18 ay.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">📈</div>
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">Faz 3: Tohum Yatırımı</h3>
            <p className="text-sm text-gray-700">
              Faz 2&apos;yi veya klasik 1512 programını başarıyla
              tamamlayan girişimler, büyümeyi hızlandırmak için %10&apos;a
              kadar hisse karşılığında daha büyük ölçekli bir yatırıma
              başvurabilir. Destek süresi en fazla 36 ay.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yani şu anda elinde henüz bir iş planı olmayan, sadece bir iş
          fikri olan bir girişimci adayı, doğrudan 30 Eylül&apos;e
          yetişip bu çağrıya başvuramaz. Önce bir Uygulayıcı Kuruluş
          üzerinden Faz 1 sürecine girmesi, Mükemmeliyet Mührü almaya hak
          kazanması gerekir. Faz 1&apos;i tamamlamış ve Faz 2&apos;ye
          geçmeye hak kazanmış olanlar için 2026-2 çağrısı tam da bu
          fırsatı sunuyor.
        </p>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 2026-2 Çağrısına Kimler Başvurabilir?
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Temel Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Başvuru tarihi itibarıyla bir üniversitenin ön lisans,
              lisans, yüksek lisans veya doktora programına kayıtlı
              öğrenci ya da bu programlardan mezun olmak.
            </li>
            <li>
              Ar-Ge odaklı, teknolojiye dayalı ve yenilikçi bir iş
              fikrine sahip olmak; bu fikrin bir Uygulayıcı Kuruluş
              nezdinde Faz 1 sürecinden geçmiş olması.
            </li>
            <li>
              Faz 1 sonunda Grup Yürütme Kurulu tarafından iş planına
              <strong> Mükemmeliyet Mührü</strong> verilmesi (uygulayıcı
              kuruluşun yatırım taahhüdünü yerine getirmesi şartıyla).
            </li>
            <li>
              Başvuru tarihi itibarıyla herhangi bir işletmede ortaklığı
              bulunmamak (halka açık şirketlerdeki küçük paylar bu
              kısıtın dışında tutuluyor).
            </li>
            <li>
              Daha önce sermaye destek programlarından yararlanmamış
              olmak (aynı kişinin birden fazla kez destek alması genel
              kural olarak mümkün değil).
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bir iş fikrini birden fazla kez sunmak mümkün, ancak Faz
          1&apos;den Faz 2&apos;ye geçerken başvuru tek bir iş fikriyle
          yapılmalı. Faz 2&apos;de girişimci, Mükemmeliyet Mührü
          aldığı iş planı doğrultusunda kuracağı şirkete TÜBİTAK BİGG
          Fonu&apos;nu ortak yapıyor.
        </p>
      </section>

      {/* 4. TUTAR */}
      <section id="tutar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yatırım Tutarı, Hisse Oranı ve Temiz Teknoloji Kategorisi
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kategori</th>
                <th className="p-5">Yatırım Tutarı</th>
                <th className="p-5">Hisse Karşılığı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Standart Faz 2 (Tohum Öncesi Yatırım)</td>
                <td className="p-5">1.350.000 TL</td>
                <td className="p-5">%3</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temiz teknoloji kategorisi (UNIDO GCIP iş birliğiyle, en iyi 3 girişim)</td>
                <td className="p-5">2.250.000 TL</td>
                <td className="p-5">%5</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İzleme dönemi ek yatırımı (performansa bağlı)</td>
                <td className="p-5">1.350.000 TL&apos;ye kadar</td>
                <td className="p-5">Sözleşmeye göre</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Programın genel üst sınırı Faz 2&apos;de %5 hisse olsa da, bu
          çağrı standart kategori için sabit %3 oranını uyguluyor; temiz
          teknoloji kategorisinde en başarılı 3 girişim için oran %5&apos;e
          çıkıyor. Yatırım biçimi sermaye ortaklığı, borçlanma
          senedi (dönüştürülebilir borç) veya ikisinin birleşimi
          şeklinde olabiliyor; TÜBİTAK BİGG Fonu&apos;nun mevcut
          ortakların hissesini satın alması söz konusu değil, yatırım
          doğrudan şirkete taze sermaye olarak giriyor.
        </p>
      </section>

      {/* 5. TARİHLER */}
      <section id="tarihler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kritik Tarihler
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Aşama</th>
                <th className="p-5">Tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Başvuru dönemi</td>
                <td className="p-5">31 Ağustos - 30 Eylül 2026</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Değerlendirme sonuçları</td>
                <td className="p-5">24-27 Kasım 2026</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Şirket kuruluşu için son tarih</td>
                <td className="p-5">31 Aralık 2026</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek/yatırım başlangıcı</td>
                <td className="p-5">1 Ocak 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu takvim şunu gösteriyor: sonuçların açıklanmasından şirket
          kuruluş son tarihine yalnızca yaklaşık 5 hafta var. Mükemmeliyet
          Mührü aldığınızı öğrendikten sonra şirket türü, ortaklık
          sözleşmesi ve pay devri mekanizmasını son dakikaya bırakmadan
          önceden planlamak, yatırımı zamanında almanız açısından
          belirleyici.
        </p>
      </section>

      {/* 6. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Adım Adım Süreç
        </h2>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-base font-bold">Uygulayıcı Kuruluşa Başvuru (Faz 1)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-base font-bold">Eğitim, Mentörlük, İş Planı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-base font-bold">Mükemmeliyet Mührü Değerlendirmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-base font-bold">PRODİS Üzerinden Faz 2 Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-base font-bold">Şirket Kuruluşu ve Yatırım Sözleşmesi</h3>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Halihazırda Faz 1&apos;i tamamlamamış bir girişimci adayıysanız
          bu çağrıyı kaçırmış olmanız hiçbir şey kaybettiğiniz anlamına
          gelmiyor: TÜBİTAK her yıl birden fazla BiGG Yatırım çağrısı
          açıyor (2026&apos;da 1. çağrı Mart&apos;ta, 2. çağrı Eylül&apos;de
          kapandı). Şimdi yapmanız gereken, bölgenizdeki bir üniversite
          teknoloji transfer ofisi, teknopark veya hızlandırma merkezini
          Uygulayıcı Kuruluş olarak seçip Faz 1 sürecine başlamak; böylece
          bir sonraki çağrı döneminde Faz 2&apos;ye hazır olursunuz.
        </p>
      </section>

      {/* 7. KURULUŞ */}
      <section id="kurulus" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Yatırımı Almadan Önce: Şirket Kuruluşu Zorunluluğu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Mükemmeliyet Mührü almak, yatırımın otomatik olarak hesabınıza
          geçmesi anlamına gelmiyor. TÜBİTAK BİGG Fonu bir yatırımcı gibi
          davranıyor ve yatırımını ancak gerçek bir şirkete, gerçek bir
          hisse karşılığında yapabiliyor. Bu nedenle sonuçların
          açıklanmasının (24-27 Kasım 2026) ardından <strong>31 Aralık
          2026&apos;ya kadar</strong> bir sermaye şirketi (genellikle
          anonim şirket) kurulması gerekiyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu aşamada dikkat edilmesi gereken teknik konular var: şirket
          türünün TÜBİTAK BİGG Fonu&apos;nun pay sahibi olmasına uygun
          şekilde kurgulanması, esas sözleşmenin yatırım sözleşmesindeki
          hisse devri ve oy hakkı maddeleriyle uyumlu hazırlanması,
          kuruluş sonrası defter tutma ve yıl içindeki 6 aylık raporlama
          döngüsüne uyum sağlanması gibi. Zamanında ve doğru kurulmayan
          bir şirket, yatırımın gecikmesine hatta kaybedilmesine yol
          açabilir.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu süreçte ayrı bir yerel muhasebeci veya danışman aramanıza
            gerek yok. Şirketinizin kuruluşundan, TÜBİTAK BİGG Fonu&apos;nun
            ortak olacağı yapının doğru kurgulanmasına, yatırım sonrası
            defter tutma ve raporlama yükümlülüklerinize kadar tüm
            süreci birlikte yönetebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Mükemmeliyet Mührü aldıysanız, şirket kuruluş sürecinizi
              hemen planlamak için iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faz 1&apos;i tamamlamadan bu çağrıya doğrudan başvuramayacağınızı bilin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuru tarihi itibarıyla herhangi bir şirkette ortaklığınızın bulunmadığından emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Şirket kuruluşunu sonuç açıklamasından hemen sonra planlayın, 31 Aralık son tarihini kaçırmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Esas sözleşme ve pay yapısını yatırım sözleşmesindeki şartlara uygun hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Temiz teknoloji alanında iş fikriniz varsa GCIP kategorisine uygunluğunuzu ayrıca sorgulayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Daha önce sermaye destek programından yararlandıysanız tekrar başvuramayabileceğinizi teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faz 1 için başvurmamış olsanız bile bir sonraki çağrı için şimdi bir Uygulayıcı Kuruluşla süreci başlatın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel tutar, oran ve tarihleri başvuru öncesinde TÜBİTAK&apos;ın resmi duyuru sayfasından teyit edin
          </div>
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
              BiGG Yatırım Programı (1812) ile klasik TÜBİTAK 1512 programı arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              1512, girişimciye geri ödemesiz hibe veren klasik bir
              destek programıdır. 1812 kodlu BiGG Yatırım Programı ise
              TÜBİTAK BİGG Fonu&apos;nun girişimin kuracağı şirkete belirli
              bir hisse karşılığında doğrudan sermaye koyduğu, yatırım
              esaslı bir modeldir. Faz 2&apos;yi veya 1512&apos;yi
              tamamlayanlar, programın Faz 3&apos;üne (Tohum Yatırımı)
              başvurabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Henüz iş fikrim var ama hiçbir hazırlığım yok, 30 Eylül&apos;e yetişebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 30 Eylül 2026 son başvuru tarihi, yalnızca daha önce
              bir Uygulayıcı Kuruluş üzerinden Faz 1&apos;i tamamlamış ve
              Mükemmeliyet Mührü almaya hak kazanmış girişimciler için
              geçerli. Yeni başlıyorsanız, bir sonraki çağrı dönemine
              hazırlanmak üzere hemen bir Uygulayıcı Kuruluşla Faz 1
              sürecine başlamanız gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mükemmeliyet Mührü almak yatırımı garanti eder mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Mükemmeliyet Mührü, iş planınızın yatırıma uygun bulunduğu
              anlamına gelir ve TÜBİTAK BİGG Fonu ile yatırım sözleşmesi
              imzalama hakkı doğurur. Ancak yatırımın fiilen
              gerçekleşmesi için şirketin süresi içinde (31 Aralık 2026&apos;ya
              kadar) usulüne uygun şekilde kurulması ve sözleşme
              şartlarının tamamlanması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım karşılığında verilen hisse oranı sabit mi?
            </h3>
            <p className="leading-8 text-gray-700">
              2026-2 çağrısında standart kategori için oran %3 olarak
              sabitlenmiş durumda; programın genel üst sınırı %5&apos;tir.
              Temiz teknoloji (GCIP) kategorisinde en başarılı 3 girişim
              için oran %5&apos;e çıkarılmış ve yatırım tutarı 2.250.000
              TL&apos;dir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi şirket türünü kurmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              TÜBİTAK BİGG Fonu&apos;nun pay sahibi olacağı yapı genellikle
              anonim şirket statüsünde kurgulanır; bu tercih, esas
              sözleşme ve yatırım sözleşmesi arasındaki uyumu doğrudan
              etkiler. Kesin karar, iş planınızın detaylarına ve yatırım
              sözleşmesinin şartlarına göre şekillenir.
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
          TÜBİTAK BiGG Yatırım Programı, klasik hibe modelinden farklı bir
          yaklaşımla girişimcilere ciddi bir başlangıç sermayesi sunuyor.
          2026-2 çağrısı, Faz 1&apos;i tamamlamış girişimciler için 30
          Eylül 2026&apos;ya kadar açık; henüz bu aşamada olmayanlar için
          ise doğru adım, bir Uygulayıcı Kuruluşla hemen Faz 1 sürecini
          başlatıp bir sonraki döneme hazırlanmak. Mükemmeliyet Mührü
          aldıktan sonraki en kritik adım ise yatırımın önünü açacak
          şirketin doğru zamanda ve doğru yapıda kurulması; bu adım
          atlanır veya son dakikaya bırakılırsa, kazanılan yatırım hakkı
          fiilen kullanılamayabilir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı Nedir?</h3>
          </Link>
          <Link
            href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKMER • KOSGEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TEKMER Nedir? Teknoloji Geliştirme Merkezlerine Nasıl Başvurulur?</h3>
          </Link>
          <Link
            href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YAPAY ZEKA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
