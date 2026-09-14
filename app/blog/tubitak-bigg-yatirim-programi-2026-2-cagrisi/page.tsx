import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK BiGG Yatırım Programı Nedir? 2026-2. Çağrı Rehberi | Koray Akdağ",
  description: "TÜBİTAK BiGG Yatırım Programı'nın 2026-2. çağrısında 1.350.000 TL yatırım, %3 hisse karşılığı, kimler başvurabilir, şartlar ve 30 Eylül 2026 son tarih.",
  keywords: [
    "TÜBİTAK BiGG Yatırım Programı",
    "BiGG Yatırım 2026",
    "TÜBİTAK 1812",
    "TÜBİTAK 1512 BİGG",
    "girişimcilik destek programı",
    "tohum yatırımı",
    "ön tohum yatırımı",
    "PRODİS başvuru",
    "TÜBİTAK girişimci desteği",
    "Mükemmeliyet Mührü",
  ],
};

export default function TubitakBiggYatirimPage() {
  return (
    <BlogLayout
      title="TÜBİTAK BiGG Yatırım Programı Nedir? 2026-2. Çağrı: Kimler Başvurabilir, Yatırım Tutarı ve Hisse Oranı"
      description="Türkiye'nin ilk yatırım tabanlı girişimcilik destek programı olan TÜBİTAK BiGG Yatırım'da 1.350.000 TL yatırım, %3 hisse karşılığı, Faz 1-2-3 yapısı, 30 Eylül 2026 son başvuru tarihi ve şirket kuruluşundan sonraki yükümlülüklerle güncel rehber."
      category="TÜBİTAK • GİRİŞİMCİLİK DESTEĞİ • 2026"
      date="2026"
      readTime="12 Dakika"
      coverImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="tubitak-bigg-yatirim-programi-2026-2-cagrisi"
      ctaHeading="Yatırımı Aldınız, Şirketi Kurma ve Sonrasını Birlikte Yönetelim"
      ctaText="TÜBİTAK'tan hisse karşılığı yatırım almaya hak kazandıysanız, şirket kuruluşundan esas sözleşmenin TÜBİTAK ortaklığına uygun hazırlanmasına, kuruluş sonrası muhasebe ve raporlamaya kadar tüm süreci tek elden yürütmemiz için bizimle iletişime geçin."
    >
      {/* GİRİŞ / UYARI KUTUSU */}
      <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🔴 Son Başvuru 30 Eylül 2026: 2026-2. Çağrı İçin Süre Daralıyor
        </h2>
        <p className="leading-8 text-gray-700">
          TÜBİTAK, Türkiye&apos;nin ilk yatırım tabanlı girişimcilik destek
          programı olan <strong>BiGG Yatırım Programı&apos;nın</strong> 2026
          yılı 2. çağrısını <strong>31 Ağustos 2026&apos;da</strong> başvuruya
          açtı. Başvurular <strong>30 Eylül 2026&apos;da</strong> kapanacak.
          Bu çağrı, hızlandırma aşamasını (Faz 1) tamamlayarak Faz 2&apos;ye
          geçmeye hak kazanan girişimcileri hedefliyor ve başarılı bulunan
          projelere yüzde 3 hisse karşılığında 1.350.000 TL&apos;ye varan
          yatırım sağlıyor.
        </p>
      </div>

      {/* BU REHBERDE NELER VAR */}
      <div className="mt-16 rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Teknoloji ve inovasyon tabanlı bir iş fikri olan girişimciler için
          BiGG, klasik hibe programlarından farklı bir mantıkla çalışıyor:
          TÜBİTAK, desteklediği girişime nakit hibe değil, hisse karşılığı
          yatırım yapıyor. Bu yazıda programın bütün yapısını, güncel 2026-2.
          çağrının şartlarını ve yatırımı aldıktan sonra şirketi kurarken
          nelere dikkat etmeniz gerektiğini uçtan uca ele alıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ BiGG Yatırım Programı tam olarak nasıl işliyor?</li>
          <li>✔ Faz 1, Faz 2 ve Faz 3 arasındaki farklar neler?</li>
          <li>✔ 2026-2. çağrıya kimler başvurabilir?</li>
          <li>✔ Yatırım tutarı ve TÜBİTAK&apos;ın aldığı hisse oranı ne kadar?</li>
          <li>✔ Kritik tarihler ve adım adım süreç nasıl işliyor?</li>
          <li>✔ Yatırımı aldıktan sonra şirket kuruluşunda dikkat edilmesi gerekenler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK BiGG Yatırım Programı Nedir?
          </Link>
          <Link href="#asamalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Faz 1, Faz 2 ve Faz 3 Yapısı
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 2026-2. Çağrıya Kimler Başvurabilir?
          </Link>
          <Link href="#yatirim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yatırım Tutarı ve Hisse Oranları
          </Link>
          <Link href="#tarihler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Kritik Tarihler
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Adım Adım Süreç
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Diğer Girişimcilik Destekleriyle Karşılaştırma
          </Link>
          <Link href="#kurulus" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Yatırım Sonrası Şirket Kuruluşu
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
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
          1. TÜBİTAK BiGG Yatırım Programı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          BiGG (Bireysel Genç Girişim), TÜBİTAK&apos;ın uzun yıllardır
          yürüttüğü girişimcilik destek ekosisteminin markasıdır. 1512 kodlu
          Girişimcilik Destek Programı, teknoloji ve inovasyon tabanlı iş
          fikirlerini önce hızlandırma sürecinden geçirir. 2024 yılından
          itibaren devreye giren <strong>1812 Yatırım Tabanlı Girişimcilik
          Destek Programı (BiGG Yatırım)</strong> ise bu sürecin devamı olarak,
          hızlandırma aşamasını başarıyla tamamlayan girişimlere artık nakit
          hibe değil, hisse karşılığı yatırım sağlıyor.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bu, TÜBİTAK&apos;ın Türkiye&apos;de resmi olarak yürüttüğü{" "}
          <strong>ilk yatırım tabanlı girişimcilik destek programı</strong>{" "}
          olması açısından önemli. Program, girişimciyi bir hibe alıcısı
          değil, TÜBİTAK&apos;ın kurucu ortak olduğu bir şirketin sahibi
          olarak konumlandırıyor. Bu da girişimin baştan itibaren düzgün bir
          şirket yapısı, hisse dağılımı ve finansal raporlama disipliniyle
          kurulmasını zorunlu kılıyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Programın Amacı
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Teknoloji tabanlı iş fikirlerini yüksek katma değerli işletmelere dönüştürmek</li>
            <li>✔ Girişimciye hibe yerine hisse karşılığı sermaye sağlayarak öz kaynak açığını kapatmak</li>
            <li>✔ Uluslararası pazarlarda rekabet edebilecek nitelikli istihdam yaratan şirketler kurmak</li>
            <li>✔ Girişimciyi mentörlük, eğitim ve sektör deneyimiyle desteklemek</li>
          </ul>
        </div>
      </section>

      {/* 2. FAZ YAPISI */}
      <section id="asamalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Faz 1, Faz 2 ve Faz 3 Yapısı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program üç aşamadan oluşuyor ve her aşamaya geçiş, bir önceki
          aşamanın başarıyla tamamlanmasına bağlı. Girişimci doğrudan Faz
          2&apos;ye başvuramaz, önce Faz 1&apos;i tamamlamış olması gerekir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Aşama</th>
                <th className="p-5">İçerik</th>
                <th className="p-5">Karşılık</th>
                <th className="p-5">Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faz 1: Hızlandırma</td>
                <td className="p-5">
                  Uygulayıcı kuruluşlar üzerinden eğitim, mentörlük, iş
                  planı geliştirme
                </td>
                <td className="p-5">Şirket kuruluşu şartı yok</td>
                <td className="p-5">Programa göre değişir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faz 2: Ön-Tohum Yatırımı</td>
                <td className="p-5">Şirket kurulur, ilk yatırım kullandırılır</td>
                <td className="p-5 font-bold text-green-600">En fazla %5 hisse</td>
                <td className="p-5">18 ay</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Faz 3: Tohum Yatırımı</td>
                <td className="p-5">Büyüme ve ürünleştirme için ek yatırım</td>
                <td className="p-5 font-bold text-green-600">En fazla %10 hisse</td>
                <td className="p-5">36 ay</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Not: Faz 2 ve Faz 3&apos;teki yatırım üst limitleri ve hisse
          oranları TÜBİTAK Yönetim Kurulu tarafından her çağrı döneminde
          ayrıca belirlenir ve duyurulur.
        </p>
      </section>

      {/* 3. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 2026-2. Çağrıya Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Güncel 2026-2. çağrı, herkese açık genel bir çağrı değil. Yalnızca{" "}
          <strong>Faz 1 hızlandırma faaliyetlerini bir uygulayıcı kuruluş
          üzerinden tamamlamış ve Faz 2&apos;ye geçmeye hak kazanmış
          girişimciler</strong> başvurabiliyor. Faz 1&apos;e giriş için genel
          şartlar şöyle:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Aranan Şartlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Örgün öğretim veren bir üniversitenin ön lisans, lisans, yüksek lisans veya doktora programında öğrenci ya da mezun olmak</li>
              <li>✔ Teknoloji ve inovasyon tabanlı, ticarileşme potansiyeli olan bir iş fikri sunmak</li>
              <li>✔ Faz 1 hızlandırma sürecini bir uygulayıcı kuruluş üzerinden tamamlamış olmak</li>
              <li>✔ Değerlendirmede Mükemmeliyet Mührü almaya hak kazanmak</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              🚫 Başvuramayacak Olanlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Daha önce Teknogirişim Sermayesi Desteği almış olanlar</li>
              <li>✔ Daha önce 1512 veya 1812 kapsamında Faz 2 desteği almış olanlar</li>
              <li>✔ Daha önce kendi adına şirketi olan veya bir şirkette ortaklığı bulunan girişimciler (program &quot;ilk kez şirket kurma&quot; ilkesine dayanır)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. YATIRIM TUTARI VE HİSSE ORANLARI */}
      <section id="yatirim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yatırım Tutarı ve Hisse Oranları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026-2. çağrı kapsamında Mükemmeliyet Mührü alan girişimlere üç
          farklı finansman kalemi sunuluyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar</th>
                <th className="p-5">TÜBİTAK Hisse Payı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ana Faz 2 Yatırımı</td>
                <td className="p-5 font-bold text-green-600">1.350.000 TL&apos;ye kadar</td>
                <td className="p-5">%3</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İzleme Dönemi Ek Yatırımı</td>
                <td className="p-5 font-bold text-green-600">1.350.000 TL&apos;ye kadar</td>
                <td className="p-5">Performansa göre belirlenir</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">GCIP (Temiz Teknoloji) Yatırımı</td>
                <td className="p-5 font-bold text-green-600">2.250.000 TL (en yüksek puanlı 3 girişim)</td>
                <td className="p-5">%5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Yatırım, öz sermaye, dönüştürülebilir borç veya bu ikisinin
          kombinasyonu şeklinde yapılabiliyor. GCIP akışı, temiz teknoloji
          alanında çalışan ve en yüksek puanı alan üç girişim için ayrı bir
          değerlendirme kategorisi oluşturuyor.
        </p>
      </section>

      {/* 5. KRİTİK TARİHLER */}
      <section id="tarihler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kritik Tarihler
        </h2>
        <div className="overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Aşama</th>
                <th className="p-4">Tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Başvuru Dönemi</td>
                <td className="p-4">31 Ağustos - 30 Eylül 2026</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Uygulayıcı/Destekleyici Kuruluş Bildirim Son Tarihi</td>
                <td className="p-4">7 Ekim 2026</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-red-600">Sonuç Duyurusu</td>
                <td className="p-4 font-semibold text-red-600">24-27 Kasım 2026</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Şirket Kuruluş Son Tarihi</td>
                <td className="p-4">31 Aralık 2026</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Destek/Yatırım Başlangıcı</td>
                <td className="p-4">1 Ocak 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-lg leading-9 text-gray-700">
          Sonuçların açıklanması ile şirket kuruluş son tarihi arasında yaklaşık
          bir ay var. Bu süre, şirket türünün belirlenmesi, esas sözleşmenin
          TÜBİTAK ortaklığına uygun hazırlanması ve ticaret sicili işlemleri
          için yeterli ama sıkı bir takvim. Hazırlığa sonuçları beklerken
          başlamak, son haftaya kalmamak açısından önemli.
        </p>
      </section>

      {/* 6. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Adım Adım Süreç
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🎓</div>
            <h3 className="text-lg font-bold">1. Faz 1 Hızlandırma</h3>
            <p className="mt-2 text-sm text-gray-600">Uygulayıcı kuruluş üzerinden eğitim ve mentörlük süreci tamamlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏅</div>
            <h3 className="text-lg font-bold">2. Mükemmeliyet Mührü</h3>
            <p className="mt-2 text-sm text-gray-600">Değerlendirme sonucunda Faz 2&apos;ye geçme hakkı kazanılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💻</div>
            <h3 className="text-lg font-bold">3. PRODİS Başvurusu</h3>
            <p className="mt-2 text-sm text-gray-600">30 Eylül 2026&apos;ya kadar Faz 2 başvurusu yapılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-lg font-bold">4. Değerlendirme</h3>
            <p className="mt-2 text-sm text-gray-600">Sonuçlar 24-27 Kasım 2026&apos;da açıklanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="text-lg font-bold">5. Şirket Kuruluşu</h3>
            <p className="mt-2 text-sm text-gray-600">31 Aralık 2026&apos;ya kadar şirket kurulup yatırım sözleşmesi imzalanır</p>
          </div>
        </div>
        <p className="mt-12 text-lg leading-9 text-gray-700">
          Faz 1&apos;e giriş, doğrudan TÜBİTAK&apos;a değil, Türkiye genelinde
          yetkilendirilmiş uygulayıcı kuruluşlara (teknopark yönetici
          şirketleri, üniversite kuluçka merkezleri, TEKMER&apos;ler gibi)
          yapılır. Bu nedenle henüz Faz 1&apos;e girmemiş bir girişimcinin ilk
          adımı, bulunduğu bölgedeki bir uygulayıcı kuruluşa başvurmak ve
          bir sonraki Faz 1 çağrı dönemini takip etmek olmalı.
        </p>
      </section>

      {/* 7. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Diğer Girişimcilik Destekleriyle Karşılaştırma
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          BiGG Yatırım, hisse karşılığı çalıştığı için her girişimciye uygun
          değil. Hisse paylaşmak istemeyen veya henüz Faz 1&apos;e girmemiş
          girişimciler için aşağıdaki alternatifler de değerlendirilebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Destek Türü</th>
                <th className="p-4">Hisse Şartı</th>
                <th className="p-4">Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">TÜBİTAK BiGG Yatırım (Faz 2)</td>
                <td className="p-4">Hisse karşılığı yatırım</td>
                <td className="p-4">Evet, %3-%5</td>
                <td className="p-4">1.350.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  <Link href="/blog/kosgeb-girisimci-destek-programi-2026" className="text-orange-600 hover:underline">
                    KOSGEB Girişimci Destek Programı
                  </Link>
                </td>
                <td className="p-4">Hibe + faizsiz kredi</td>
                <td className="p-4">Yok</td>
                <td className="p-4">Programa göre değişir</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">
                  <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 hover:underline">
                    TÜBİTAK 1501 / 1507
                  </Link>
                </td>
                <td className="p-4">Geri ödemesiz hibe</td>
                <td className="p-4">Yok</td>
                <td className="p-4">20.000.000 TL / 3.500.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. YATIRIM SONRASI ŞİRKET KURULUŞU */}
      <section id="kurulus" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Yatırım Sonrası Şirket Kuruluşu: Türkiye Tarafındaki Yükümlülükler
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Mükemmeliyet Mührü alan bir girişimci için asıl kritik dönem, sonuç
          duyurusundan sonra başlıyor. TÜBİTAK yatırımı, ancak kurulacak
          şirkete hisse devri yapıldıktan sonra kullandırılıyor. Bu da şu
          adımların 31 Aralık 2026&apos;ya kadar eksiksiz tamamlanmasını
          gerektiriyor:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
          <li>Şirket türünün belirlenmesi (uygulamada genellikle anonim şirket tercih edilir, çünkü hisse devri ve pay defteri işlemleri daha esnektir)</li>
          <li>Esas sözleşmenin, TÜBİTAK&apos;ın ortak olacağı yapıya uygun hazırlanması</li>
          <li>Ticaret sicili tescili ve gerekli belgelerin hazırlanması</li>
          <li>TÜBİTAK ile yatırım/hisse devir sözleşmesinin imzalanması</li>
          <li>Kuruluş sonrası muhasebe düzeninin ve raporlama sisteminin ilk günden itibaren kurulması</li>
        </ul>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            TÜBİTAK, hisse sahibi bir ortak olduğu için bu şirketlerin
            muhasebe ve raporlama düzeni, sıradan bir şirket kuruluşuna göre
            daha titiz yürütülmeli. Şirket kuruluşunu ve kuruluş sonrasındaki
            muhasebe/raporlama sürecini ayrı ayrı yerel firmalar aramak yerine
            tek elden yürütmek, hem zaman kazandırır hem de TÜBİTAK
            denetimlerinde hata riskini azaltır. Bu süreci baştan sona bizzat
            yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Yatırımı aldıktan sonra şirket kuruluşu ve muhasebe sürecinizi
              planlamak için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 9. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              2026-2. çağrı yalnızca Faz 1&apos;i tamamlamış girişimciler
              içindir. Henüz Faz 1&apos;e girmemiş bir girişimci bu çağrıya
              doğrudan başvuramaz.
            </li>
            <li>
              &quot;İlk kez şirket kurma&quot; şartı katıdır. Daha önce kendi
              adına bir şirketi olan veya bir şirkette ortaklığı bulunan
              girişimciler programdan yararlanamaz.
            </li>
            <li>
              Şirket kuruluş son tarihi (31 Aralık 2026) kaçırılırsa, sonuç
              duyurusunda kazanılan hak kullanılamayabilir. Bu tarih kesin
              bir yükümlülüktür.
            </li>
            <li>
              Yatırım karşılığında verilen hisse oranı (%3-%5) küçük görünse
              de, şirketin ilerleyen turlarda yeni yatırımcı alması
              durumunda pay dağılımı ve TÜBİTAK&apos;ın haklarının doğru
              yönetilmesi önemlidir.
            </li>
            <li>
              Rakamsal üst limitler, hisse oranları ve tarihler her çağrı
              döneminde TÜBİTAK tarafından güncellenebilir. Başvuru
              öncesinde güncel çağrı metninin PRODİS üzerinden teyit
              edilmesi gerekir.
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
              Henüz Faz 1&apos;e girmedim, 2026-2. çağrıya başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu çağrı yalnızca Faz 1 hızlandırma sürecini tamamlamış
              ve Faz 2&apos;ye geçmeye hak kazanmış girişimciler için açık.
              Faz 1&apos;e girmek isteyenlerin, bulunduğu bölgedeki bir
              uygulayıcı kuruluşa başvurup bir sonraki Faz 1 dönemini takip
              etmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TÜBİTAK aldığı hisseyi ne zaman geri satar veya devreder?
            </h3>
            <p className="leading-8 text-gray-700">
              Program, TÜBİTAK&apos;ın uzun vadede pay sahibi kalmasını
              hedeflemez; amaç girişime büyüme sermayesi sağlamaktır.
              Hisse çıkış koşulları, yatırım sözleşmesinde ayrıca
              düzenlenir ve şirketin ilerleyen aşamalardaki
              performansına bağlıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım, hibe gibi geri ödemesiz mi sayılır?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu bir hibe değil, öz sermaye veya dönüştürülebilir
              borç şeklinde yapılan bir yatırımdır. Karşılığında TÜBİTAK,
              kurulacak şirkette belirli oranda hisse sahibi olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketi ne zamana kadar kurmak zorundayım?
            </h3>
            <p className="leading-8 text-gray-700">
              Sonuç duyurusu 24-27 Kasım 2026&apos;da yapılıyor, şirket
              kuruluşunun ise 31 Aralık 2026&apos;ya kadar tamamlanması
              gerekiyor. Bu yaklaşık bir aylık süreçte esas sözleşme,
              ticaret sicili işlemleri ve TÜBİTAK ile imzalanacak yatırım
              sözleşmesi tamamlanmalı.
            </p>
          </div>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK BiGG Yatırım Programı, Faz 1&apos;i başarıyla tamamlamış
          girişimciler için önemli bir sermaye kapısı açıyor. Hibe yerine
          hisse karşılığı yatırım mantığı, girişimciyi daha profesyonel bir
          şirket yapısı kurmaya ve yatırımcı ilişkilerini baştan doğru
          yönetmeye zorluyor.
        </p>
        <p className="text-lg leading-9 text-gray-700">
          30 Eylül 2026 son başvuru tarihine kadar kalan süre kısıtlı
          olduğundan, Faz 1&apos;i tamamlamış girişimcilerin PRODİS
          başvurusunu geciktirmemesi ve sonuçlar açıklanır açıklanmaz şirket
          kuruluş sürecine hızla başlaması önemli.
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
          href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&amp;A • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri ve Süreci</h3>
        </Link>
        <Link
          href="/blog/sahis-limited-anonim-sirket-karsilastirma"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • GİRİŞİMCİLİK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şahıs mı, Limited mi Yoksa Anonim Şirket mi?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
