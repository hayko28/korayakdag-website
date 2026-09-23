import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK BiGG Yatırım (1812) Programı 2026-2 Çağrısı | Koray Akdağ",
  description: "TÜBİTAK BiGG Yatırım (1812) programında Mükemmeliyet Mührü alan girişimciler 1.350.000 TL yatırımı %3 hisse karşılığında nasıl alır? 2026-2 çağrısı şartları, takvimi ve süreç rehberi.",
  keywords: [
    "TÜBİTAK BiGG Yatırım",
    "TÜBİTAK 1812",
    "BiGG Yatırım Programı 2026",
    "Mükemmeliyet Mührü",
    "hisse karşılığı yatırım TÜBİTAK",
    "tohum öncesi yatırım",
    "BiGG 1812 başvuru şartları",
    "girişimci yatırım desteği 2026",
    "TÜBİTAK BiGG Fonu",
    "yatırım tabanlı girişimcilik destek programı",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜBİTAK BiGG Yatırım (1812) Programı 2026-2 Çağrısı: 1.350.000 TL Yatırımı Hangi Şartlarla Alırsınız?"
      description="Mükemmeliyet Mührü alan girişimcilere TÜBİTAK BiGG Fonu'ndan %3 hisse karşılığında 1.350.000 TL yatırım sağlayan BiGG Yatırım (1812) programının 2026-2 çağrısında kimler başvurabilir, şirket ne zaman kurulmalı, süreç nasıl işler? 30 Eylül 2026 son başvuru tarihiyle güncel rehber."
      category="TÜBİTAK • BiGG YATIRIM • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi"
      programDurumu="acik"
      sonBasvuruTarihi="30 Eylül 2026"
      coverImage="https://images.unsplash.com/photo-1712342109846-a8fcb1c883ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Bu Program Ne Yapıyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ TÜBİTAK BiGG Yatırım (1812), klasik bir hibe/kredi değil; <strong>hisse karşılığında sermaye yatırımı</strong> sağlayan bir programdır.</li>
          <li>✔ Başvuru, hızlandırma programını (Aşama 1) tamamlayıp <strong>Mükemmeliyet Mührü</strong> alan girişimcilere açıktır.</li>
          <li>✔ Kazananlara <strong>%3 hisse karşılığında 1.350.000 TL</strong> yatırım yapılır (temiz teknolojilerde en yüksek 3 girişime %5 karşılığında 2.250.000 TL).</li>
          <li>✔ Şirket, Mükemmeliyet Mührü <strong>alındıktan sonra</strong> kurulur; erken kuruluş başvuruyu geçersiz kılabilir.</li>
          <li>✔ 2026-2 çağrısında son başvuru <strong>30 Eylül 2026</strong>, değerlendirme 12 Ekim-20 Kasım 2026, destek başlangıcı 1 Ocak 2027 olarak planlanıyor.</li>
          <li>✔ Program, ayrıca yeni girişimcilerin fikir aşamasında başvurduğu klasik BiGG (1512) ile karıştırılmamalıdır.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK BiGG Yatırım (1812) Nedir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir?
          </Link>
          <Link href="#tutar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Yatırım Tutarı ve Hisse Oranı
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Aşama Aşama Süreç
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. 2026-2 Çağrısı Takvimi
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Diğer Girişimcilik Destekleriyle Karşılaştırma
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
          1. TÜBİTAK BiGG Yatırım (1812) Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK 1812 Yatırım Tabanlı Girişimcilik Destek Programı, kısa
          adıyla BiGG Yatırım, Türkiye&apos;nin ilk hisse karşılığı yatırım
          esaslı kamu destek programıdır. Program, teknoloji ve yenilik
          odaklı bir iş fikrini yüksek katma değer ve nitelikli istihdam
          yaratma potansiyeli olan bir şirkete dönüştürmeyi hedefleyen
          girişimcileri, fikir aşamasından pazara girişe kadar destekler.
          Klasik TÜBİTAK Ar-Ge programlarından (1501, 1507, 1711 gibi)
          temel farkı, desteğin geri ödemesiz hibe değil, <strong>kurulacak
          şirketin hissesi karşılığında yapılan bir sermaye yatırımı</strong>{" "}
          olmasıdır.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Programın Üç Aşaması
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li><strong>Aşama 1: Hızlandırma/Kuluçka.</strong> TÜBİTAK tarafından yetkilendirilmiş uygulayıcı kuruluşlar (üniversite kuluçka merkezleri, teknopark hızlandırıcıları, özel hızlandırıcı kuruluşlar) üzerinden yürütülür; girişimci eğitim, mentorluk ve iş planı geliştirme desteği alır.</li>
            <li><strong>Aşama 2: Tohum Öncesi Yatırım.</strong> Aşama 1&apos;i başarıyla tamamlayıp Mükemmeliyet Mührü alan girişimciler, kuracakları şirket üzerinden TÜBİTAK BiGG Fonu&apos;ndan hisse karşılığı yatırım alır. 2026-2 çağrısı bu aşama için açıldı.</li>
            <li><strong>Aşama 3: Tohum Yatırımı.</strong> Aşama 2&apos;de yatırım almış ve büyüme gösteren şirketlere, ek olarak %10&apos;a kadar hisse karşılığında büyüme yatırımı sağlanır.</li>
          </ul>
        </div>
        <p className="leading-8 text-gray-700">
          2026-2 çağrısı yalnızca <strong>Aşama 2 (Tohum Öncesi Yatırım)</strong>{" "}
          için açık. Yani bu çağrıya başvurabilmek için girişimcinin daha
          önce bir uygulayıcı kuruluşun hızlandırma programına katılmış ve
          bu süreci tamamlamış olması gerekiyor; sıfırdan, hiç hızlandırma
          sürecinden geçmeden doğrudan bu çağrıya başvurulamıyor.
        </p>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026-2 çağrısına doğrudan bireysel girişimci başvurmaz; başvuru,
          Aşama 1&apos;i tamamlayan ve Mükemmeliyet Mührü alan girişimcinin
          iş planı üzerinden yürütülür. Ancak bu noktaya gelebilmek için
          girişimcinin taşıması gereken bazı temel şartlar var.

        </p>
        <div className="mb-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ❓ BiGG Yatırım (1812) mi, BiGG Girişimcilik (1512) mi? Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            İki program da &quot;BiGG&quot; markasını taşıdığı ve TÜBİTAK
            tarafından yürütüldüğü için sık karıştırılıyor, ama farklı
            işliyorlar:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>TÜBİTAK 1512 (BiGG - Bireysel Genç Girişim):</strong> Henüz şirketi olmayan, sadece bir iş fikri olan girişimcilerin, fikri hızlandırma programından geçirip iş fikrini teknogirişim sermayesi desteğine (hibe) dönüştürdüğü klasik program.</li>
            <li><strong>TÜBİTAK 1812 (BiGG Yatırım):</strong> Bu yazının konusu. Destek hibe değil, hisse karşılığı sermaye yatırımıdır; girişimcinin hâlihazırda bir hızlandırma sürecinden geçip Mükemmeliyet Mührü almış olması gerekir.</li>
          </ul>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Başvuru Şartları
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Ön lisans, lisans, yüksek lisans veya doktora programına kayıtlı olmak ya da bu programlardan mezun olmak</li>
              <li>✔ Başvuru anında herhangi bir sermaye şirketinin veya gerçek kişi işletmesinin ortaklık yapısında bulunmamak</li>
              <li>✔ Daha önce Teknogirişim Sermayesi Desteği veya 1512/1812 programının 2. aşamasından destek almamış olmak</li>
              <li>✔ İş fikrinin teknoloji olgunluk seviyesinin (TRL) en az 3 olması, ideal aralık 3-6</li>
              <li>✔ Bir uygulayıcı kuruluşun hızlandırma programını (Aşama 1) başarıyla tamamlamış ve Mükemmeliyet Mührü almış olmak</li>
              <li>✔ Çağrı döneminde yalnızca bir iş fikriyle başvurmak (paralel/çoklu başvuru yok)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Dikkat Edilmesi Gereken Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Aşama 1&apos;i tamamlamadan doğrudan 2. aşama çağrısına başvurulamaz</li>
              <li>❌ Başvuru anında aktif bir şirkette ortaklık payı bulunan kişi süreç dışı kalabilir</li>
              <li>❌ Mükemmeliyet Mührü alınmadan önce şirket kurmak, uygunluk şartını bozabilir</li>
              <li>❌ Aynı iş fikri veya kişi, aynı dönemde birden fazla başvuruda yer alamaz</li>
              <li>❌ Daha önce benzer devlet desteği (Teknogirişim Sermayesi vb.) almış girişimciler başvuramaz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. YATIRIM TUTARI */}
      <section id="tutar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Yatırım Tutarı ve Hisse Oranı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yatırım, kurulacak anonim şirketin sermayesinde belirli bir hisse
          payı karşılığında TÜBİTAK BiGG Fonu tarafından yapılır. 2026-2
          çağrısında geçerli tutarlar şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kategori</th>
                <th className="p-5">Yatırım Tutarı</th>
                <th className="p-5">Karşılığında Alınan Hisse</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Standart başvurular</td>
                <td className="p-5 font-bold text-green-600">1.350.000 TL</td>
                <td className="p-5">%3</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Temiz teknolojiler (UNIDO-GCIP kapsamında en yüksek puanlı 3 girişim)</td>
                <td className="p-5 font-bold text-green-600">2.250.000 TL</td>
                <td className="p-5">%5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Not: Yatırım özkaynak, dönüştürülebilir borç veya bu ikisinin
          bileşimi şeklinde yapılabilir. Girişimci, izleme süreci boyunca
          performansına göre ek yatırım talep edebilir; uygulayıcı
          kuruluşların da eş yatırım yapma imkânı bulunuyor.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu programı klasik bir hibeyle karıştırmamak gerekiyor.
            TÜBİTAK, yatırımı karşılığında şirketin hissesini gerçekten
            alıyor ve girişimci, pay sahibi olduğu sürece fikrî mülkiyet
            haklarını şirkete devretmek ve yalnızca o şirkette çalışmakla
            yükümlü oluyor. Başvuru öncesinde girişimcilerin en sık
            gözden kaçırdığı nokta, hisse devrinin ve ortaklık yapısının
            iş planı değerlendirmesinden çok önce, şirket henüz
            kurulmadan netleştirilmesi gerektiğidir; bu konuda geç
            kalmak, Mükemmeliyet Mührü alındıktan sonraki şirket kuruluş
            sürecini uzatabilir.
          </p>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Aşama Aşama Süreç
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🎓</div>
            <h3 className="text-base font-bold">1. Hızlandırma</h3>
            <p className="mt-2 text-sm text-gray-600">Uygulayıcı kuruluşun Aşama 1 programına katılım</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📄</div>
            <h3 className="text-base font-bold">2. İş Planı Sunumu</h3>
            <p className="mt-2 text-sm text-gray-600">PRODİS üzerinden TÜBİTAK&apos;a iş planı iletilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🧑‍⚖️</div>
            <h3 className="text-base font-bold">3. Panel Değerlendirmesi</h3>
            <p className="mt-2 text-sm text-gray-600">İş fikri bağımsız panel tarafından değerlendirilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏅</div>
            <h3 className="text-base font-bold">4. Mükemmeliyet Mührü</h3>
            <p className="mt-2 text-sm text-gray-600">Başarılı bulunan iş planına mühür verilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="text-base font-bold">5. Şirket Kuruluşu</h3>
            <p className="mt-2 text-sm text-gray-600">Mühür sonrası anonim şirket kurulur</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="text-base font-bold">6. Yatırım Sözleşmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Pay Sahipliği ve Proje İzleme Sözleşmeleri imzalanır, yatırım aktarılır</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Yatırım sonrası azami destek süresi 18 aydır. Bu süre boyunca
          şirket, kavramsal tasarım, teknik/ekonomik fizibilite ve
          prototip geliştirme faaliyetlerini yürütür; TÜBİTAK ile
          düzenli izleme görüşmeleri yapılır. Bu dönemi başarıyla
          tamamlayan ve büyüme gösteren şirketler, Aşama 3&apos;te ek
          yatırım için başvurabilir.
        </p>
      </section>

      {/* 5. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. 2026-2 Çağrısı Takvimi
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
                <td className="p-5 font-semibold text-red-600">Son Başvuru Tarihi</td>
                <td className="p-5 font-semibold text-red-600">30 Eylül 2026</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Değerlendirme Süreci</td>
                <td className="p-5">12 Ekim - 20 Kasım 2026</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Destek Başlangıcı (planlanan)</td>
                <td className="p-5">1 Ocak 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Başvurular PRODİS (Proje Değerlendirme ve İzleme Sistemi)
          üzerinden yapılır. Aşama 1&apos;i henüz tamamlamamış
          girişimcilerin bu çağrıya yetişmesi mümkün olmadığından, bir
          sonraki dönem (2027-1) için hazırlanmak isteyenlerin şimdiden
          bir uygulayıcı kuruluşun hızlandırma programına başvurması
          gerekir.
        </p>
      </section>

      {/* 6. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Diğer Girişimcilik Destekleriyle Karşılaştırma
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Erken aşama bir girişimciyseniz, hangi programın sizin
          durumunuza uygun olduğunu karşılaştırmalı şekilde görmek
          faydalı olur.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Destek Türü</th>
                <th className="p-4">Ön Koşul</th>
                <th className="p-4">Üst Sınır</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">TÜBİTAK 1812 (BiGG Yatırım)</td>
                <td className="p-4">Hisse karşılığı yatırım</td>
                <td className="p-4">Aşama 1&apos;i tamamlamış, Mükemmeliyet Mührü almış olmak</td>
                <td className="p-4">1.350.000 TL (%3 hisse)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">
                  <Link href="/blog/kosgeb-girisimci-destek-programi-2026" className="text-orange-600 hover:underline">
                    KOSGEB Girişimci Destek Programı
                  </Link>
                </td>
                <td className="p-4">Geri ödemesiz hibe</td>
                <td className="p-4">Yok, doğrudan başvuru</td>
                <td className="p-4">Kuruluş/performans/sertifika desteklerinin toplamı</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">
                  <Link href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026" className="text-orange-600 hover:underline">
                    TEKMER
                  </Link>
                </td>
                <td className="p-4">Kuluçka/hızlandırma desteği</td>
                <td className="p-4">Yok, doğrudan başvuru</td>
                <td className="p-4">İşletici kuruluşa sağlanan destekle değişir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. DİKKAT EDİLECEKLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Şirketi erken kurmayın:</strong> Mükemmeliyet Mührü alınmadan kurulan bir şirket, başvuru sahibinin &quot;ortaklık payı bulunmama&quot; şartını ihlal edip başvuruyu geçersiz kılabilir. Doğru sıralama: bireysel başvuru → hızlandırma → değerlendirme → mühür → şirket kuruluşu.</li>
            <li>Yatırım hisse karşılığıdır; girişimci, TÜBİTAK BiGG Fonu&apos;nu şirketine pay sahibi olarak kabul etmeyi göze almalıdır.</li>
            <li>Fikrî mülkiyet haklarının şirkete devredilmesi ve girişimcinin pay sahibi olduğu sürece yalnızca o şirkette çalışması gerekliliği, süreç öncesinde netleştirilmelidir.</li>
            <li>Çağrı döneminde yalnızca bir iş fikriyle başvuru yapılabilir; paralel başvuru yasaktır.</li>
            <li>Bu çağrı yalnızca Aşama 2 (Tohum Öncesi Yatırım) içindir; Aşama 1&apos;e (hızlandırma) girmek isteyenlerin ayrıca bir uygulayıcı kuruluşa başvurması gerekir.</li>
            <li>Rakamsal tutarlar ve şartlar her çağrı döneminde TÜBİTAK tarafından güncellenebilir; başvuru öncesinde güncel çağrı metninin teyit edilmesi önemlidir.</li>
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
                href="https://www.tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/icerik-1812-yatirim-tabanli-girisimcilik-destek-programi-bigg-yatirim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                TÜBİTAK 1812 BiGG Yatırım Programı resmî sayfası
              </a>
            </li>
            <li>
              <a
                href="https://tubitak.gov.tr/tr/duyuru/turkiyenin-ilk-yatirim-tabanli-girisimcilik-destek-programi-olan-bigg-yatirim-programinin-2026-2-cagrisi-acildi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                TÜBİTAK 2026-2 BiGG Yatırım Çağrısı Duyurusu
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
              BiGG Yatırım (1812) hibe midir, kredi midir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hiçbiri değildir. TÜBİTAK BiGG Fonu, kurulacak şirketin
              hissesi karşılığında sermaye yatırımı yapar; girişimci
              tutarı geri ödemez, ancak şirketin bir payını (standart
              başvurularda %3&apos;ünü) TÜBİTAK&apos;a devreder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Henüz hiçbir hızlandırma programına katılmadım, 2026-2 çağrısına başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 2026-2 çağrısı yalnızca bir uygulayıcı kuruluşun
              Aşama 1 hızlandırma programını tamamlayıp Mükemmeliyet
              Mührü almış girişimcilere açıktır. Sıfırdan başlayacaksanız
              önce bir uygulayıcı kuruluşa başvurup hızlandırma sürecine
              girmeniz gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketimi başvurudan önce kurdum, bu sorun olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Olabilir. Program, başvuru anında herhangi bir sermaye
              şirketinde ortaklık payı bulunmamasını şart koşuyor; erken
              kurulmuş bir şirketteki ortaklık payı uygunluk şartını
              ihlal edebilir. Şirket kuruluşunun Mükemmeliyet Mührü
              alındıktan sonraya bırakılması önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              1812 ile 1512 (klasik BiGG) arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              1512, henüz şirketi olmayan girişimcilerin iş fikrini
              hızlandırma sürecinden geçirip teknogirişim sermayesi
              desteğine (hibe) dönüştürdüğü programdır. 1812 ise bu
              sürecin bir sonraki adımıdır: Mükemmeliyet Mührü almış
              girişimcilere hisse karşılığı sermaye yatırımı sağlar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım karşılığında alınan hisse geri satın alınabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              TÜBİTAK BiGG Fonu&apos;nun payı, şirketin sermaye yapısına
              girmiş bir ortaklık payıdır; pay devri ve çıkış koşulları
              Pay Sahipliği Sözleşmesi&apos;nde düzenlenir. Kesin şartlar
              için sözleşme metninin ve güncel çağrı duyurusunun
              incelenmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aşama 3 (Tohum Yatırımı) için ayrıca başvurmak mı gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Aşama 2 yatırımını almış ve büyüme gösteren şirketler,
              ayrı bir değerlendirme süreciyle Aşama 3&apos;e (Tohum
              Yatırımı) başvurabilir; burada %10&apos;a kadar ek hisse
              karşılığında büyüme yatırımı söz konusudur.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin BiGG Yatırım Sürecine Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Mükemmeliyet Mührü sonrası şirket kuruluşunun doğru zamanda ve
            doğru yapıda yapılması, yatırım ve pay sahipliği sözleşmesinin
            şirketinizin ortaklık yapısına etkisinin önceden netleştirilmesi
            gerekir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirket kuruluş sürecinizi ve sonrasındaki muhasebe/uyum
              yükümlülüklerinizi birlikte planlamamız için bizimle
              iletişime geçin.
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
          TÜBİTAK BiGG Yatırım (1812), Türkiye&apos;deki erken aşama
          teknoloji girişimleri için klasik hibe programlarından farklı,
          hisse karşılığı bir sermaye yatırımı sunuyor. Mükemmeliyet
          Mührü almış girişimciler için 2026-2 çağrısında 30 Eylül 2026&apos;ya
          kadar zaman var; ancak sürecin en kritik noktası, şirketin doğru
          zamanda, Mükemmeliyet Mührü alındıktan sonra kurulmasıdır. Henüz
          hızlandırma sürecine girmemiş girişimciler için ise bir sonraki
          döneme hazırlanmak üzere şimdiden bir uygulayıcı kuruluşla
          temasa geçmek mantıklı bir adımdır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kuruluşunun doğru zamanlanması, ortaklık yapısının
          yatırım sözleşmesine uygun kurgulanması ve kuruluş sonrasındaki
          muhasebe/raporlama yükümlülüklerinin yönetilmesi için Koray
          Akdağ / Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir
          danışmanlık firması aramanıza gerek kalmadan, hem kuruluş
          sürecinizi hem de sonrasındaki uyum yükümlülüklerinizi tek
          noktadan yürütebiliriz.
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
