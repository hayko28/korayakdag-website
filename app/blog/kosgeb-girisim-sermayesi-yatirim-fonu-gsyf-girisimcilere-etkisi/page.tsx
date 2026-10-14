import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KOSGEB Girişim Sermayesi Yatırım Fonu (GSYF) Programı Nedir? | Koray Akdağ",
  description: "KOSGEB, 2026'da yürürlüğe giren bir yönergeyle Girişim Sermayesi Yatırım Fonlarına (GSYF) yatırımcı oluyor. Kimler başvurabilir, taahhüt tutarları ne kadar, girişimciler ve KOBİ'ler bundan nasıl etkileniyor; güncel rehber.",
  keywords: [
    "KOSGEB girişim sermayesi yatırım fonu",
    "GSYF nedir",
    "KOSGEB GSYF yönergesi",
    "girişim sermayesi fonu KOBİ",
    "KOSGEB yatırımcı olma",
    "portföy yönetim şirketi KOSGEB başvuru",
    "girişim sermayesi yatırımı 2026",
    "KOSGEB fon katılımı",
  ],
  alternates: {
    canonical: "/blog/kosgeb-girisim-sermayesi-yatirim-fonu-gsyf-girisimcilere-etkisi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Girişim Sermayesi Yatırım Fonlarına (GSYF) Ortak Oluyor: Girişimciler İçin Ne Anlama Geliyor?"
      description="KOSGEB, 30 Haziran 2026 tarihli Girişim Sermayesi Yatırım Fonları Yatırımlarına İlişkin Yönerge ile GSYF'lere yatırımcı (LP) olarak katılmaya başladı. Kimler başvurabilir, taahhüt tutarları ne kadar, süreç nasıl işliyor ve bu mekanizma büyüme sermayesi arayan girişimciler için ne anlama geliyor; resmî yönerge metnine dayanan güncel rehber."
      category="KOSGEB • GİRİŞİM SERMAYESİ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-girisim-sermayesi-yatirim-fonu-gsyf-girisimcilere-etkisi"
      coverImage="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: KOSGEB&apos;in GSYF Katılımı Ne Anlama Geliyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ KOSGEB, Girişim Sermayesi Yatırım Fonları Yatırımlarına İlişkin Yönerge (son güncelleme 30.06.2026) ile GSYF&apos;lere <strong>yatırımcı (LP)</strong> olarak katılmaya başladı.</li>
          <li>✔ Bu programa <strong>doğrudan bir girişimci veya KOBİ başvuramaz</strong>; başvuran taraf, SPK&apos;ya tabi fonları yöneten <strong>portföy yönetim şirketleridir</strong>.</li>
          <li>✔ KOSGEB&apos;in tek bir fona yapabileceği azami taahhüt, ilave taahhütlerle birlikte <strong>500 milyon TL&apos;ye</strong> kadar çıkabiliyor; ilk başvuruda bu tutar daha düşük bir tavana (azami 100 milyon TL) tabi.</li>
          <li>✔ Kaynak aktarılacak fonun katılacağı her bir yatırım turunun asgari <strong>50 milyon TL</strong> büyüklüğünde olması şart; yani mekanizma erken aşamadan çok büyüme/ölçeklenme turlarına odaklanıyor.</li>
          <li>✔ Fonun Türkiye&apos;de yerleşik KOBİ&apos;lere yapacağı yatırım tutarı, KOSGEB&apos;in taahhüdünden düşük olamaz; bu da sermayenin yurt dışına kaymasını önleyen bir güvence.</li>
          <li>✔ Girişimci için pratik anlamı: doğrudan başvuru değil, görüştüğü GSYF&apos;nin sermaye kapasitesini ve ciddiyetini değerlendirirken dikkate alınabilecek yeni bir gösterge.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir, KOSGEB Neden Bu Adımı Attı?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir? Girişimci mi, Portföy Yönetim Şirketi mi?
          </Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Fon Kriterleri ve Taahhüt Tutarları
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Başvuru ve Değerlendirme Süreci
          </Link>
          <Link href="#ucretler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Ücretler, Raporlama ve Uyum Yükümlülükleri
          </Link>
          <Link href="#girisimci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Girişimciler ve KOBİ&apos;ler İçin Pratik Anlamı
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
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
          1. Program Nedir, KOSGEB Neden Bu Adımı Attı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          KOSGEB, bugüne kadar KOBİ&apos;lere çoğunlukla doğrudan hibe,
          geri ödemesiz destek veya kredi faizi desteği sağlayan bir
          kurum olarak biliniyordu. &quot;Girişim Sermayesi Yatırım
          Fonları Yatırımlarına İlişkin Yönerge&quot; ile birlikte
          KOSGEB&apos;in araç kutusuna yeni bir mekanizma eklendi: artık
          KOSGEB, Sermaye Piyasası Kurulu mevzuatına tabi Girişim
          Sermayesi Yatırım Fonlarına (GSYF) doğrudan <strong>yatırımcı
          (LP - limited partner)</strong> sıfatıyla katılabiliyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Yönergenin 1. maddesine göre amaç; KOBİ&apos;lerin uzun vadeli
          finansmana erişiminin kolaylaştırılması, teknoloji tabanlı
          girişimciliğin desteklenmesi, sanayide yeşil ve dijital
          dönüşümün hızlandırılması ve özel sermaye yatırımlarında kamu
          kaynağıyla kaldıraç etkisi yaratılmasıdır. Basitçe ifade
          etmek gerekirse KOSGEB, bir girişime doğrudan para vermek
          yerine, girişimlere yatırım yapan profesyonel fonlara ortak
          olup bu fonların büyümesine ve daha fazla şirkete yatırım
          yapabilmesine kaynak sağlıyor.
        </p>
        <p className="leading-8 text-gray-700">
          Yönergenin dayanağı, 4 sayılı Cumhurbaşkanlığı Kararnamesi&apos;nin
          227-234. maddeleri ile 2024-20 Sayılı İcra Komitesi Kararı&apos;dır.
          Belge, 30 Haziran 2026 tarihli ve 743396 sayılı Başkanlık
          Makamı Oluru ile güncellenmiş (Rev. No: 1) hâliyle şu an
          yürürlükte; bu da programın henüz yeni ve aktif şekilde
          işletilmekte olduğunu gösteriyor.
        </p>
      </section>

      {/* 2. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir? Girişimci mi, Portföy Yönetim Şirketi mi?
        </h2>
        <div className="mb-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ❓ &quot;KOSGEB&apos;e Başvurmak&quot; ile &quot;KOSGEB Destekli Fondan Yatırım Almak&quot;ı Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Bu program adından dolayı sık karıştırılıyor. İkisi de farklı
            taraflara hitap eden, farklı başvuru yollarıdır:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>GSYF&apos;ye başvuru yapan taraf:</strong> Sermaye Piyasası Kurulu tarafından yetkilendirilmiş <strong>portföy yönetim şirketleridir</strong>. Bir girişimci veya KOBİ, bu yönerge kapsamında KOSGEB&apos;e doğrudan başvuru yapamaz.</li>
            <li><strong>Girişimcinin/KOBİ&apos;nin konumu:</strong> Girişimci, KOSGEB&apos;in ortak olduğu (veya olmayı değerlendirdiği) bir GSYF&apos;ye kendi iş planıyla başvurarak, o fonun kendi yatırım komitesinin değerlendirmesinden geçerse, dolaylı olarak bu sermaye havuzundan yararlanabilir.</li>
          </ul>
        </div>
        <p className="mb-8 leading-8 text-gray-700">
          Yönergenin 4. maddesinde &quot;Portföy Yönetim Şirketi&quot;,
          Sermaye Piyasası Kurulu tarafından yetkilendirilmiş portföy
          yönetim şirketleri olarak tanımlanıyor. 5. madde ise
          KOSGEB&apos;in hangi fonlara öncelik vereceğini şöyle
          belirliyor: ülkenin kalkınma planları, orta vadeli
          programlar, sanayi ve teknoloji stratejileri ile
          uluslararası taahhütler doğrultusunda belirlenen sektörlerde
          faaliyet gösteren fonlar değerlendirmeye alınıyor; teknolojisi
          ve katma değeri yüksek, ölçülebilir pozitif çevresel ve
          sosyal etkisi olan fonlara ise öncelik tanınıyor.
        </p>
      </section>

      {/* 3. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Fon Kriterleri ve Taahhüt Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yönergenin 5. ve 6. maddeleri, hem fonun taşıması gereken
          kriterleri hem de KOSGEB&apos;in bir fona taahhüt edebileceği
          tutarları ayrıntılı şekilde düzenliyor. İki ayrı tablo hâlinde
          özetlemek, karışıklığı önlemek açısından önemli.
        </p>
        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">Fonun Sağlaması Gereken Temel Kriterler (Madde 5/1-3)</h3>
        <div className="mb-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Şart</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari yatırım turu büyüklüğü</td>
                <td className="p-5 font-bold text-green-600">50 milyon TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Türkiye&apos;deki KOBİ&apos;lere yapılacak yatırım</td>
                <td className="p-5">KOSGEB&apos;in taahhüt tutarından düşük olamaz</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Öncelikli alanlar</td>
                <td className="p-5">Teknolojisi/katma değeri yüksek, ölçülebilir pozitif çevresel-sosyal etkisi olan fonlar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">KOSGEB&apos;in Bir Fona Yapabileceği Taahhüt Tutarı</h3>
        <div className="mb-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Aşama</th>
                <th className="p-5">Azami Tutar</th>
                <th className="p-5">Koşul</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İlk başvuru (Madde 6)</td>
                <td className="p-5 font-bold text-orange-600">100 milyon TL&apos;ye kadar</td>
                <td className="p-5">Yerli yatırımcı taahhüdünün %10&apos;u ile sınırlı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İlave kaynak taahhüdü ile ulaşılabilecek üst sınır (Madde 5/4)</td>
                <td className="p-5 font-bold text-green-600">500 milyon TL&apos;ye kadar</td>
                <td className="p-5">Yerli yatırımcı taahhüdünün %20&apos;si ile sınırlı (200 milyon TL&apos;ye kadar)</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Savunma, uzay, havacılık fonları</td>
                <td className="p-5 font-bold text-blue-600">Bu sınırlar aşılabilir</td>
                <td className="p-5">Toplam taahhüdün en az %50&apos;si kamu kurum/kuruluşunca taahhüt edilmiş olmalı, Değerlendirme Komitesi önerisi ve İcra Komitesi Başkanı onayı şart</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Kaynak: KOSGEB, Girişim Sermayesi Yatırım Fonları Yatırımlarına
          İlişkin Yönerge, Madde 5 ve Madde 6 (30.06.2026 tarihli ve
          743396 sayılı Başkanlık Makamı Oluru ile güncel, Rev. No: 1).
          Yabancı yatırımcı taahhütlerine bağlı ayrı alt sınırlar da
          yönergede ayrıca düzenlenmiştir.
        </p>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Başvuru ve Değerlendirme Süreci
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          Fonlara yönelik duyuru metinleri, ilgili takvim yılı
          içerisinde KOSGEB&apos;in internet sayfasında yayınlanır ve bu
          duyurularda başvuru dönemi, azami taahhüt tutarları ve
          başvuru kriterleri yer alır. Süreç, fonun ihraç belgesinin
          (SPK onayının) yayınlanmış olup olmamasına göre iki aşamalı
          işliyor.
        </p>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">📝</div>
            <h3 className="text-sm font-bold">1. Ön Başvuru</h3>
            <p className="mt-2 text-xs text-gray-600">İhraç belgesi yayınlanmamış fonlar için Ön Başvuru Formu ile başlar</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">🔍</div>
            <h3 className="text-sm font-bold">2. Ön İnceleme</h3>
            <p className="mt-2 text-xs text-gray-600">30 gün içinde belge/şekil/bütünlük kontrolü yapılır</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">✅</div>
            <h3 className="text-sm font-bold">3. Yatırım Yapılabilir Fon Kararı</h3>
            <p className="mt-2 text-xs text-gray-600">Değerlendirme Komitesi uygunluk kararı verir (tutar belirlemez)</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">📊</div>
            <h3 className="text-sm font-bold">4. Teknik Değerlendirme</h3>
            <p className="mt-2 text-xs text-gray-600">İhraç belgesi yayınlanan fon, duyuru dönemi içinde başvurur; 100 puan üzerinden puanlanır</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">🏛️</div>
            <h3 className="text-sm font-bold">5. Komite ve Onay</h3>
            <p className="mt-2 text-xs text-gray-600">Değerlendirme Komitesi tavsiye kararı verir, İcra Komitesi Başkanı taahhüt tutarını onaylar</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">💰</div>
            <h3 className="text-sm font-bold">6. Sözleşme ve Kaynak Çağrısı</h3>
            <p className="mt-2 text-xs text-gray-600">Yatırımcı Sözleşmesi imzalanır, fon ihtiyaç duydukça kaynak çağrısı yapar</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Değerlendirme Komitesi, en az biri KOSGEB personeli olmak
          üzere toplam 5 üyeden oluşuyor ve en az 3 üyenin katılımıyla
          toplanıp oy çokluğuyla karar veriyor. Komitenin verdiği
          &quot;yatırım yapılabilir fon&quot; kararı yalnızca bir
          uygunluk değerlendirmesidir; nihai taahhüt tutarı, ancak
          teknik değerlendirme ve komite tavsiyesi sonrasında İcra
          Komitesi Başkanı tarafından onaylanır.
        </p>
      </section>

      {/* 5. ÜCRETLER */}
      <section id="ucretler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Ücretler, Raporlama ve Uyum Yükümlülükleri
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              💶 Ücret Tavanları
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ <strong>Yönetim ücreti:</strong> KOSGEB&apos;in taahhüt ettiği kaynağın yıllık %2,5&apos;ini aşamaz</li>
              <li>✔ <strong>Fon giderleri</strong> (yönetim ve performans ücreti hariç): yıllık %1&apos;ini aşamaz</li>
              <li>✔ <strong>Performans ücreti:</strong> çıkışta kâr elde edilmesi hâlinde, KOSGEB&apos;in katılma payı oranında hak ettiği kâr payının %25&apos;ini aşamaz ve ancak sözleşmede belirlenen eşik getiri üzerinde oluşursa ödenir</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              📋 Raporlama Yükümlülükleri
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Fon, üç aylık ara dönemlerde faaliyet raporu sunar</li>
              <li>✔ Yıllık raporlara ayrıca denetimli finansal tablolar eklenir ve en geç izleyen yılın Mart ayı sonuna kadar KOSGEB&apos;e iletilir</li>
              <li>✔ Fonun faaliyetlerini önemli ölçüde etkileyebilecek olağanüstü durumlar 10 iş günü içinde bildirilmelidir</li>
              <li>✔ Fon, kara para aklama ve terörün finansmanının önlenmesi mevzuatına uyumla da yükümlüdür</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. GİRİŞİMCİ TARAFI */}
      <section id="girisimci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Girişimciler ve KOBİ&apos;ler İçin Pratik Anlamı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu program, bir hibe veya kredi faizi desteği gibi doğrudan
          başvurulabilen bir mekanizma değil. Ama büyüme sermayesi
          arayan bir şirket sahibi için dolaylı olarak iki pratik sonucu
          var.
        </p>
        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              1. Piyasada Daha Fazla Büyüme Sermayesi
            </h3>
            <p className="leading-8 text-gray-700">
              KOSGEB&apos;in bir fona ortak olması, o fonun toplam
              yatırım kapasitesini artırıyor. Fonun Türkiye&apos;deki
              KOBİ&apos;lere yapacağı yatırımın KOSGEB&apos;in
              taahhüdünden az olamaması şartı sayesinde, bu sermayenin
              önemli bir kısmının Türkiye merkezli şirketlere ayrılmış
              olması güvence altına alınıyor.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              2. Fon Değerlendirirken Yeni Bir Gösterge
            </h3>
            <p className="leading-8 text-gray-700">
              Görüşmekte olduğunuz bir GSYF&apos;nin KOSGEB&apos;den
              taahhüt almış ya da başvuru sürecinde olması, o fonun
              belirli bir kurumsal denetimden (teknik değerlendirme,
              komite incelemesi) geçtiğini gösterir; bu da fonun
              sermaye ciddiyetini değerlendirirken dikkate alınabilecek
              bir unsurdur.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Girişim sermayesi görüşmelerinde en sık gözden kaçan
            nokta, bir fonun kâğıt üzerindeki toplam taahhüt büyüklüğü
            ile fiilen kullanıma hazır sermayesi arasındaki farktır.
            KOSGEB&apos;in bir fona taahhütte bulunmuş olması, o
            taahhüdün tamamının o anda nakit olarak hazır beklediği
            anlamına gelmez; kaynak, yönergede tanımlanan
            &quot;kaynak taahhüdü çağrısı&quot; mekanizmasıyla ihtiyaç
            duyuldukça ve en az 20 iş günü önceden bildirimle kademeli
            olarak tahsil edilir. Bir fonla görüşürken sadece açıklanan
            toplam taahhüt rakamına değil, fonun o ana kadar kaç
            yatırım turu için kaynak çağrısı yaptığına ve güncel nakit
            pozisyonuna da bakılması gerekir.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Asgari 50 milyon TL&apos;lik yatırım turu şartı nedeniyle bu
          mekanizma, çok erken aşamadaki (pre-seed/seed) küçük
          girişimler için değil, belirli bir ciro ve müşteri tabanına
          ulaşmış, büyüme/ölçeklenme (scale-up) aşamasındaki şirketler
          için anlamlı. Daha erken aşamadaki girişimciler için{" "}
          <Link href="/blog/melek-yatirimci-bireysel-katilim-yatirimcisi-vergi-avantajlari-2026" className="text-orange-600 hover:underline">
            melek yatırımcı (BKY) sistemi
          </Link>{" "}
          veya{" "}
          <Link href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi" className="text-orange-600 hover:underline">
            TÜBİTAK BiGG Yatırım (1812)
          </Link>{" "}
          gibi daha küçük tutarlı ve erken aşamaya uygun kanallar
          genellikle daha gerçekçi bir ilk adım oluyor.
        </p>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Bu bir hibe veya geri ödemesiz destek değildir; KOSGEB burada bir yatırımcı (LP) sıfatıyla hareket eder, yatırım kararlarını fonun kendi yönetim ekibi verir.</li>
            <li>Girişimci/KOBİ bu yönerge kapsamında KOSGEB&apos;e doğrudan başvuru yapamaz; muhatabı, kendisine yatırım yapan veya yapmayı değerlendiren GSYF&apos;dir.</li>
            <li>Asgari 50 milyon TL&apos;lik yatırım turu şartı, mekanizmayı küçük/erken aşama girişimlerden çok büyüme aşamasındaki şirketler için anlamlı kılıyor.</li>
            <li>Savunma, uzay ve havacılık alanına yatırım yapan fonlar için farklı (daha esnek) üst sınır kuralları uygulanabiliyor.</li>
            <li>Taahhüt tutarları ve şartlar yönergede düzenli olarak güncellenebiliyor; yönergenin son güncellemesi 30.06.2026 tarihli olup başvuru öncesinde güncel metnin teyit edilmesi önemli.</li>
            <li>KOSGEB, fon süreçlerine (yatırım stratejisi oluşturma, değerlendirme, izleme dahil) belirlediği personelin gözlemci sıfatıyla katılımını talep edebiliyor; bu, programın şeffaflık boyutunu oluşturuyor.</li>
          </ul>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a
                href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/Giri%C5%9Fim%20Sermayesi%20Yat%C4%B1r%C4%B1m%20Fonlar%C4%B1/2026/2026.07.03/Ek-1_Giri%C5%9Fim_Sermayesi_Yat%C4%B1r%C4%B1m_Fonlar%C4%B1_Yat%C4%B1r%C4%B1mlar%C4%B1na_%C4%B0li%C5%9Fkin_Y%C3%B6nerge.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                KOSGEB - Girişim Sermayesi Yatırım Fonları Yatırımlarına İlişkin Yönerge (30.06.2026, Rev. No: 1)
              </a>
            </li>
            <li>
              <a
                href="https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/Giri%C5%9Fim%20Sermayesi%20Yat%C4%B1r%C4%B1m%20Fonlar%C4%B1/2026/2026.07.03/Ek-2_GSYF_Ba%C5%9Fvurular%C4%B1_%C3%96n_Ba%C5%9Fvuru_Formu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                KOSGEB - GSYF Başvuruları Ön Başvuru Formu
              </a>
            </li>
            <li>
              <a
                href="https://www.kosgeb.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                KOSGEB Resmî İnternet Sitesi - Güncel Fon Duyuruları
              </a>
            </li>
            <li>
              <a
                href="https://spk.gov.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Sermaye Piyasası Kurulu - Girişim Sermayesi Yatırım Fonlarına İlişkin Esaslar Tebliği (III-52.4)
              </a>
            </li>
          </ul>
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
              Bir girişimci veya KOBİ olarak KOSGEB&apos;in GSYF programına doğrudan başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu yönerge kapsamında KOSGEB&apos;e başvuru yapan
              taraf, Sermaye Piyasası Kurulu tarafından yetkilendirilmiş
              portföy yönetim şirketleridir. Girişimciler, KOSGEB&apos;in
              ortak olduğu ya da olmayı değerlendirdiği fonlara kendi iş
              planlarıyla ayrıca başvurarak dolaylı yararlanabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB&apos;in bir fona ortak olması, o fondan otomatik olarak yatırım alacağım anlamına mı gelir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB&apos;in fona taahhüt vermesi, fonun yatırım
              kapasitesini artırır; ama hangi girişime yatırım
              yapılacağına fonun kendi yatırım komitesi, kendi
              değerlendirme kriterleriyle karar verir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu program hangi büyüklükteki girişimler için anlamlı?
            </h3>
            <p className="leading-8 text-gray-700">
              Kaynak aktarılacak fonun katılacağı her bir yatırım turunun
              asgari 50 milyon TL olması şartı nedeniyle, mekanizma
              çok erken aşamadaki küçük girişimlerden çok, belirli bir
              ciroya ulaşmış büyüme/ölçeklenme aşamasındaki şirketler
              için anlamlı oluyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Melek yatırımcı (BKY) sistemiyle KOSGEB&apos;in GSYF katılımı aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi farklı mekanizmalar. Melek yatırımcıda
              yatırımı bir gerçek kişi yapar ve karşılığında kişisel
              gelir vergisi indirimi kazanır. GSYF katılımında ise
              KOSGEB, kurumsal bir fon yapısına ortak olur ve fon,
              topladığı sermayeyi kendi yatırım kararlarıyla
              girişimlere dağıtır; bireysel vergi indirimi mekanizması
              burada söz konusu değildir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOSGEB&apos;in bir fona yapabileceği azami taahhüt tutarı nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              İlk başvuruda azami 100 milyon TL&apos;ye kadar taahhütte
              bulunulabiliyor. Fon büyüdükçe talep edilebilecek ilave
              kaynak taahhütleriyle birlikte, tek bir fona yapılabilecek
              toplam taahhüt 500 milyon TL&apos;ye kadar çıkabiliyor.
              Savunma, uzay ve havacılık alanındaki belirli fonlar için
              bu sınırlar, Değerlendirme Komitesi önerisi ve İcra
              Komitesi Başkanı onayıyla aşılabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu yatırımlar hibe veya geri ödemesiz destek mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. KOSGEB burada klasik bir destek kurumu gibi değil,
              bir yatırımcı (LP) gibi hareket ediyor; fona sermaye
              koyuyor, karşılığında katılma payı ve koşullara bağlı
              performans ücreti/kâr payı bekliyor. Bu nedenle program,
              KOSGEB&apos;in doğrudan nakit destek programlarından
              (örneğin hibe veya faiz desteği) yapısal olarak farklı.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Büyüme Sermayesi Hazırlığını Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İster bir GSYF&apos;den yatırım almak için iş planınızı ve
            finansal projeksiyonlarınızı hazırlamak, ister stratejik bir
            yatırımcıyla görüşmeden önce şirketinizin değerleme ve
            uyum hazırlığını netleştirmek isteyin, bu süreç ayrı bir
            uzmanlık gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Stratejik İş Ortaklıkları danışmanlığı kapsamında
              şirketinizin yatırıma hazırlık sürecini birlikte
              planlamamız için bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 10. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOSGEB&apos;in Girişim Sermayesi Yatırım Fonlarına yatırımcı
          olarak katılması, Türkiye&apos;deki özel sermaye
          ekosistemine kamu kaynağıyla kaldıraç etkisi yaratmayı
          hedefleyen, yeni ve hâlâ şekillenmekte olan bir mekanizma.
          Doğrudan girişimcilere değil, SPK&apos;ya tabi fon yönetim
          şirketlerine hitap etse de, sonuç olarak piyasadaki büyüme
          sermayesi hacmini artırması ve Türkiye merkezli şirketlere
          ayrılan asgari yatırım güvencesi getirmesi nedeniyle büyüme
          aşamasındaki şirketler için takip edilmesi gereken bir
          gelişme.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir GSYF&apos;den yatırım almayı hedefleyen şirketler için en
          kritik nokta, asgari 50 milyon TL&apos;lik tur büyüklüğü
          şartının gösterdiği gibi, iş planının ve finansal
          projeksiyonların bu ölçekteki bir yatırımcı görüşmesine hazır
          hâle getirilmesidir. Koray Akdağ / Sistem Global Danışmanlık
          olarak, hem girişimcilerin yatırımcıya hazırlık sürecinde hem
          de şirket kuruluşu ve sonrasındaki muhasebe/uyum
          yükümlülüklerinde tek noktadan yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/melek-yatirimci-bireysel-katilim-yatirimcisi-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MELEK YATIRIMCI • VERGİ TEŞVİKİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Melek Yatırımcı (BKY) Nedir? Vergi Avantajları</h3>
          </Link>
          <Link
            href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • BiGG YATIRIM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK BiGG Yatırım (1812) Programı 2026-2 Çağrısı</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Bir girişimci veya KOBİ olarak KOSGEB'in GSYF programına doğrudan başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Bu yönerge kapsamında KOSGEB'e başvuru yapan taraf, Sermaye Piyasası Kurulu tarafından yetkilendirilmiş portföy yönetim şirketleridir. Girişimciler, KOSGEB'in ortak olduğu ya da olmayı değerlendirdiği fonlara kendi iş planlarıyla ayrıca başvurarak dolaylı yararlanabilir."}},{"@type":"Question","name":"KOSGEB'in bir fona ortak olması, o fondan otomatik olarak yatırım alacağım anlamına mı gelir?","acceptedAnswer":{"@type":"Answer","text":"Hayır. KOSGEB'in fona taahhüt vermesi, fonun yatırım kapasitesini artırır; ama hangi girişime yatırım yapılacağına fonun kendi yatırım komitesi, kendi değerlendirme kriterleriyle karar verir."}},{"@type":"Question","name":"Bu program hangi büyüklükteki girişimler için anlamlı?","acceptedAnswer":{"@type":"Answer","text":"Kaynak aktarılacak fonun katılacağı her bir yatırım turunun asgari 50 milyon TL olması şartı nedeniyle, mekanizma çok erken aşamadaki küçük girişimlerden çok, belirli bir ciroya ulaşmış büyüme/ölçeklenme aşamasındaki şirketler için anlamlı oluyor."}},{"@type":"Question","name":"Melek yatırımcı (BKY) sistemiyle KOSGEB'in GSYF katılımı aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, ikisi farklı mekanizmalar. Melek yatırımcıda yatırımı bir gerçek kişi yapar ve karşılığında kişisel gelir vergisi indirimi kazanır. GSYF katılımında ise KOSGEB, kurumsal bir fon yapısına ortak olur ve fon, topladığı sermayeyi kendi yatırım kararlarıyla girişimlere dağıtır; bireysel vergi indirimi mekanizması burada söz konusu değildir."}},{"@type":"Question","name":"KOSGEB'in bir fona yapabileceği azami taahhüt tutarı nedir?","acceptedAnswer":{"@type":"Answer","text":"İlk başvuruda azami 100 milyon TL'ye kadar taahhütte bulunulabiliyor. Fon büyüdükçe talep edilebilecek ilave kaynak taahhütleriyle birlikte, tek bir fona yapılabilecek toplam taahhüt 500 milyon TL'ye kadar çıkabiliyor. Savunma, uzay ve havacılık alanındaki belirli fonlar için bu sınırlar, Değerlendirme Komitesi önerisi ve İcra Komitesi Başkanı onayıyla aşılabiliyor."}},{"@type":"Question","name":"Bu yatırımlar hibe veya geri ödemesiz destek mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. KOSGEB burada klasik bir destek kurumu gibi değil, bir yatırımcı (LP) gibi hareket ediyor; fona sermaye koyuyor, karşılığında katılma payı ve koşullara bağlı performans ücreti/kâr payı bekliyor. Bu nedenle program, KOSGEB'in doğrudan nakit destek programlarından (örneğin hibe veya faiz desteği) yapısal olarak farklı."}}]}) }}
      />
    </BlogLayout>
  );
}
