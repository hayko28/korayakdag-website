import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Marka Tescili ve Patent Başvurusu: KOBİ'ler İçin Neden Kritik? | Koray Akdağ",
  description: "TÜRKPATENT'te marka tescil süreci, 2026 güncel ücretler, tescilsiz markanın riskleri ve patent başvurusu adımlarıyla KOBİ'ler için fikri mülkiyet rehberi.",
  keywords: [
    "marka tescili nasıl yapılır",
    "KOBİ marka tescili",
    "TÜRKPATENT marka tescil ücreti 2026",
    "patent başvurusu nasıl yapılır",
    "tescilsiz marka riskleri",
    "marka tescili maliyeti",
    "patent nedir faydalı model farkı",
    "EPATS marka başvurusu",
    "yurt dışı marka tescili",
    "fikri mülkiyet KOBİ",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Marka Tescili ve Patent Başvurusu: KOBİ'ler İçin Neden Kritik?"
      description="Tescilsiz markanın taşıdığı somut riskler, TÜRKPATENT'in EPATS üzerinden yürüttüğü marka tescil süreci, 2026 güncel ücret tarifesi, patent başvurusunun aşamaları ve KOBİ'lerin fikri mülkiyetini korumak için atması gereken adımlarla kapsamlı rehber."
      category="MARKA VE PATENT • FİKRİ MÜLKİYET • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
      coverImage="https://images.unsplash.com/photo-1727522974614-b592018e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de her yıl binlerce KOBİ, yıllarca emek verdiği
          markasını veya geliştirdiği ürünü tescil ettirmeden ticari
          faaliyetine devam ediyor. Bu durum, işler yolunda giderken fark
          edilmeyen ama bir uyuşmazlık anında şirketi telafisi zor bir
          konuma düşürebilen sessiz bir risktir. Bu yazıda marka tescili ve
          patent başvurusunun KOBİ&apos;ler için neden bir lüks değil, temel
          bir kurumsal güvence olduğunu güncel süreç ve maliyet bilgileriyle
          birlikte ele alıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Tescilsiz bir markayı kullanmanın somut riskleri</li>
          <li>✔ TÜRKPATENT&apos;te marka tescil süreci adım adım (EPATS)</li>
          <li>✔ 2026 güncel marka tescil ücretleri ve tescil süresi</li>
          <li>✔ Patent ile faydalı model arasındaki fark</li>
          <li>✔ Patent başvuru süreci ve incelemeli inceleme aşaması</li>
          <li>✔ Yurt dışında marka/patent koruması nasıl sağlanır?</li>
          <li>✔ KOBİ&apos;ler için pratik öneriler ve sık yapılan hatalar</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#riskler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Tescilsiz Markanın Riskleri
          </Link>
          <Link href="#marka-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Marka Tescili Nedir, Neyi Kapsar?
          </Link>
          <Link href="#marka-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Marka Tescil Süreci: Adım Adım (EPATS)
          </Link>
          <Link href="#marka-maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Marka Tescili Maliyeti ve Süresi (2026)
          </Link>
          <Link href="#patent-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Patent Nedir? Patent mi, Faydalı Model mi?
          </Link>
          <Link href="#patent-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Patent Başvuru Süreci: Adım Adım
          </Link>
          <Link href="#patent-maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Patent Maliyeti ve Süresi (2026)
          </Link>
          <Link href="#yurtdisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Yurt Dışında Marka ve Patent Koruması
          </Link>
          <Link href="#oneriler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. KOBİ&apos;ler İçin Pratik Öneriler ve Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. TESCİLSİZ MARKANIN RİSKLERİ */}
      <section id="riskler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Tescilsiz Markanın Riskleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de marka koruması, kullanımdan değil <strong>tescilden</strong>{" "}
          doğar. 6769 sayılı Sınai Mülkiyet Kanunu&apos;na göre bir işaret
          üzerindeki münhasır hakların tam olarak kullanılabilmesi için
          Türk Patent ve Marka Kurumu (TÜRKPATENT) nezdinde tescil şarttır.
          Yıllardır aynı isimle ticaret yapan ama markasını hiç tescil
          ettirmemiş bir KOBİ, aşağıdaki risklerle karşı karşıyadır:
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚠️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Başkası Markanızı Tescil Ettirebilir
            </h3>
            <p className="text-gray-700">
              Yıllarca kullandığınız isim başka biri tarafından tescil
              ettirilirse, o markayı siz değil karşı taraf hukuken korur;
              hatta sizden kullanımı durdurmanız istenebilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚖️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hukuki Yollara Başvuramazsınız
            </h3>
            <p className="text-gray-700">
              Tescilsiz bir markaya tecavüz edildiğinde SMK kapsamındaki
              marka hakkına tecavüz davası açılamaz; yalnızca daha ağır
              ispat yükü taşıyan haksız rekabet hükümlerine dayanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📉</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Marka Değeri Oluşmaz
            </h3>
            <p className="text-gray-700">
              Tescilli olmayan bir marka; şirket değerlemesinde, ortaklık
              görüşmelerinde veya franchise/lisans modelinde gerçek bir
              varlık olarak değerlendirilemez.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Uygulamada sık karşılaşılan bir senaryo şudur: bir işletme
            yıllarca yatırım yaptığı, tabelasına yazdığı, sosyal medyada
            tanıttığı bir markayı büyüdükten sonra tescil ettirmeye
            kalktığında, aynı veya benzer isim başka bir kişi/şirket
            tarafından çoktan tescil ettirilmiş olabilir. Bu durumda marka
            değişikliği, yeniden marka bilinirliği oluşturma ve olası
            hukuki masraflar, erken tescilin maliyetinin kat kat üzerinde
            bir yük hâline gelir.
          </p>
        </div>
      </section>

      {/* 2. MARKA TESCİLİ NEDİR */}
      <section id="marka-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Marka Tescili Nedir, Neyi Kapsar?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Marka; bir teşebbüsün mal veya hizmetlerini başka teşebbüslerin
          mal veya hizmetlerinden ayırt etmeye yarayan kelime, şekil, renk,
          harf, sayı, ses veya bunların kombinasyonu şeklindeki her türlü
          işarettir. Tescil başvurusu, korunmak istenen işaretin hangi mal
          ve hizmetler için kullanılacağının <strong>Nice Sınıflandırması</strong>{" "}
          (45 sınıftan oluşan uluslararası mal/hizmet sınıflandırma
          sistemi) çerçevesinde belirlenmesiyle başlar.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Marka Tescilinin Sağladığı Haklar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Tescilli olduğu sınıflarda markayı münhasıran kullanma ve
              başkalarının aynı/benzer işareti kullanmasını engelleme hakkı
            </li>
            <li>
              Marka hakkına tecavüz hâlinde tazminat, men ve ref davası
              açabilme imkânı
            </li>
            <li>
              Markayı devretme, lisans verme veya rehin gösterme gibi
              ticari işlemlere konu edebilme
            </li>
            <li>
              Gümrüklerde taklit ürünlere karşı el koyma talebinde
              bulunabilme
            </li>
            <li>
              Marka değerinin şirket bilançosunda ve değerleme
              çalışmalarında somut bir varlık olarak yer alması
            </li>
          </ul>
        </div>
      </section>

      {/* 3. MARKA TESCİL SÜRECİ */}
      <section id="marka-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Marka Tescil Süreci: Adım Adım (EPATS)
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          2026 itibarıyla TÜRKPATENT&apos;e yapılan tüm marka başvuruları,
          kurumun <strong>EPATS (Elektronik Başvuru Sistemi)</strong> portalı
          üzerinden e-Devlet şifresi, e-imza veya mobil imza ile tamamen
          elektronik ortamda yapılıyor; fiziksel/kağıt başvuru kabul
          edilmiyor.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Marka Araştırması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">EPATS Üzerinden Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Şekli ve Resen İnceleme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Bültende İlan (2 Ay İtiraz)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Tescil Belgesi Ücretinin Ödenmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">Tescil Belgesinin Düzenlenmesi</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.1. Marka Araştırması
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurudan önce TÜRKPATENT&apos;in çevrimiçi marka veri
            tabanında aynı veya karıştırılma ihtimali yaratacak kadar
            benzer bir marka olup olmadığı araştırılır. Bu adım zorunlu
            olmasa da, ilerleyen aşamada itiraz veya ret riskini önemli
            ölçüde azaltır.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.2. EPATS Üzerinden Başvuru
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru formunda marka örneği, başvuru sahibinin bilgileri ve
            korunmak istenen Nice sınıf(lar)ı belirtilir. Başvuru tarihi ve
            saati, olası bir öncelik uyuşmazlığında belirleyici olduğundan
            başvurunun mümkün olan en erken aşamada yapılması önerilir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.3. Şekli İnceleme ve Mutlak Ret Nedenleri İncelemesi
          </h3>
          <p className="leading-8 text-gray-700">
            TÜRKPATENT uzmanları önce başvurunun şekli eksiklerini, ardından
            SMK madde 5&apos;te sayılan mutlak ret nedenlerini (ayırt edici
            nitelikten yoksunluk, tanımlayıcılık, kamu düzenine aykırılık
            vb.) resen inceler. Bu aşamada tespit edilen eksiklikler için
            başvuru sahibine süre verilir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.4. Resmî Marka Bülteni&apos;nde İlan ve İtiraz Süresi
          </h3>
          <p className="leading-8 text-gray-700">
            Resen incelemeyi geçen başvuru, Resmî Marka Bülteni&apos;nde
            yayımlanır. İlan tarihinden itibaren <strong>2 ay</strong>{" "}
            içinde, üçüncü kişiler veya önceki tarihli marka sahipleri
            itiraz edebilir. Bu süre içinde itiraz gelmezse veya gelen
            itiraz TÜRKPATENT tarafından reddedilirse başvuru tescile hak
            kazanır.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.5. Tescil Belgesi Ücretinin Ödenmesi ve Belgenin Düzenlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Tescile karar verilmesinin ardından bildirilen süre içinde
            tescil belgesi ücreti ödenir; ödeme yapılmazsa başvuru
            işlemden kaldırılabilir. Ücretin ödenmesiyle marka tescil
            belgesi elektronik olarak düzenlenir ve koruma resmen başlar.
          </p>
        </div>
      </section>

      {/* 4. MALİYET VE SÜRE */}
      <section id="marka-maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Marka Tescili Maliyeti ve Süresi (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜRKPATENT&apos;in 31 Aralık 2025 tarihli Resmî Gazete&apos;de
          yayımlanan ve 1 Ocak 2026&apos;dan itibaren uygulanan Ücret
          Tarifesi Tebliği&apos;ne göre 2026 yılı güncel marka işlem
          ücretleri şu şekilde:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">2026 Ücreti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Başvuru ücreti (1. sınıf)</td>
                <td className="p-5">2.820 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">2. sınıf ilave ücreti</td>
                <td className="p-5">2.820 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">3. ve sonraki her sınıf</td>
                <td className="p-5">3.150 TL / sınıf</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Tescil belgesi harcı</td>
                <td className="p-5">7.010 TL (sınıf sayısından bağımsız, sabit)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Örneğin tek sınıfta yapılan bir marka başvurusunun toplam resmî
            harç maliyeti (başvuru + tescil belgesi) yaklaşık <strong>9.830 TL</strong>{" "}
            düzeyindedir; buna vekil/danışmanlık hizmet bedeli ayrıca
            eklenir. Rakamlar her yıl güncellendiğinden başvuru öncesinde{" "}
            <a
              href="https://www.turkpatent.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜRKPATENT&apos;in resmi güncel ücret tarifesi
            </a>{" "}
            sayfasından teyit alınması önerilir.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⏱️ Tescil Süresi
            </h3>
            <p className="text-gray-700">
              İtiraz gelmeyen ve eksiksiz yapılan başvurularda başvurudan
              tescile kadar ortalama <strong>6-12 ay</strong> sürüyor.
              İtiraz gelmesi veya karşı itiraz süreçlerinin işletilmesi
              hâlinde bu süre <strong>12-18 aya</strong> kadar uzayabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔄 Koruma Süresi ve Yenileme
            </h3>
            <p className="text-gray-700">
              Marka tescili, tescil tarihinden itibaren <strong>10 yıl</strong>{" "}
              geçerlidir. Süre dolmadan önce yapılan yenileme başvurusuyla
              koruma 10&apos;ar yıllık periyotlarla süresiz olarak uzatılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PATENT NEDİR */}
      <section id="patent-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Patent Nedir? Patent mi, Faydalı Model mi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Patent, yeni, buluş basamağı içeren ve sanayiye uygulanabilir bir
          buluşun sahibine belirli bir süre için tanınan tekel niteliğindeki
          kullanım hakkıdır. Ar-Ge ve inovasyon faaliyeti yürüten KOBİ&apos;ler
          için patent, yalnızca hukuki bir koruma değil; aynı zamanda
          TÜBİTAK ve KOSGEB destek başvurularında, Ar-Ge/Tasarım Merkezi
          teşviklerinde ve yatırımcı görüşmelerinde somut bir kanıt niteliği
          taşır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Patent</th>
                <th className="p-5">Faydalı Model</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Koruma süresi</td>
                <td className="p-5">20 yıl</td>
                <td className="p-5">10 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İnceleme derinliği</td>
                <td className="p-5">Yenilik + buluş basamağı + sanayiye uygulanabilirlik incelenir</td>
                <td className="p-5">Buluş basamağı aranmaz, inceleme daha hızlıdır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tescil süresi</td>
                <td className="p-5">Ortalama 2-4 yıl</td>
                <td className="p-5">Genellikle 1 yıl içinde sonuçlanabilir</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Uygun olduğu durumlar</td>
                <td className="p-5">Yüksek katma değerli, uzun ömürlü ve rekabet avantajı yaratan buluşlar</td>
                <td className="p-5">Ürün geliştirme hızının yüksek olduğu, hızlı koruma istenen buluşlar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. PATENT SÜRECİ */}
      <section id="patent-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Patent Başvuru Süreci: Adım Adım
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          İncelemeli patent sistemi (20 yıllık tam korumaya yönelik süreç),
          şekli inceleme, araştırma raporu ve incelemeli inceleme olmak
          üzere üç ana aşamadan oluşur.
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Başvuru ve Şekli İnceleme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Araştırma Raporu Talebi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">İncelemeli İnceleme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Patent Belgesinin Verilmesi</h3>
          </div>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            6.1. Başvuru ve Şekli İnceleme
          </h3>
          <p className="leading-8 text-gray-700">
            Buluşu tarif eden tarifname, istemler, özet ve gerekiyorsa
            teknik çizimlerden oluşan başvuru dosyası EPATS üzerinden
            TÜRKPATENT&apos;e sunulur. Şekli eksiklikler tespit edilirse,
            tamamlanması için başvuru sahibine belirli bir süre tanınır.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            6.2. Araştırma Raporu Talebi
          </h3>
          <p className="leading-8 text-gray-700">
            Şekli inceleme tamamlandıktan sonra, başvuru tarihinden
            itibaren <strong>en geç 12 ay</strong> içinde araştırma raporu
            talep edilmesi gerekir. Bu raporda, buluşun dünya çapındaki
            patent ve teknik literatürle karşılaştırılarak yeni olup
            olmadığı değerlendirilir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            6.3. İncelemeli İnceleme
          </h3>
          <p className="leading-8 text-gray-700">
            Araştırma raporunun ardından, talep edilmesi hâlinde incelemeli
            inceleme aşamasına geçilir. Bu aşamada uzman, buluşun sadece
            yeni olup olmadığını değil; aynı zamanda &quot;buluş
            basamağı&quot; (o alanda uzman bir kişi için aşikâr olmayan bir
            yenilik içerip içermediği) ve sanayiye uygulanabilirlik
            kriterlerini de derinlemesine değerlendirir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            6.4. Patent Belgesinin Verilmesi
          </h3>
          <p className="leading-8 text-gray-700">
            İnceleme sürecinden olumlu sonuç alınması hâlinde patent
            belgesi düzenlenir. 20 yıllık tam koruma sağlayan incelemeli
            patent sisteminde, başvurudan belgeye kadar geçen süre
            ortalama <strong>2-4 yıl</strong> arasında değişebiliyor.
          </p>
        </div>
      </section>

      {/* 7. PATENT MALİYETİ */}
      <section id="patent-maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Patent Maliyeti ve Süresi (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Patent başvurusunda başvuru ücretinin yanında, sürecin en önemli
          maliyet kalemi araştırma raporu ücretidir. 2026 tarifesine göre
          gerçek kişi başvuru sahipleri ve tüzel kişi (şirket) başvuru
          sahipleri için farklı tutarlar uygulanıyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">2026 Ücreti (yaklaşık)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Patent başvuru ücreti</td>
                <td className="p-5">~620 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Araştırma raporu ücreti (gerçek kişi)</td>
                <td className="p-5">~2.530 TL</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Araştırma raporu ücreti (tüzel kişi/şirket)</td>
                <td className="p-5">~5.180 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu tutarlar yalnızca TÜRKPATENT&apos;e ödenen resmî harçlardır;
            tarifname/istem hazırlığı, patent vekili hizmet bedeli ve
            incelemeli inceleme aşamasındaki ek ücretler bu tutarlara dahil
            değildir. KOBİ&apos;lerin araştırma-geliştirme faaliyetlerinde
            patent maliyetlerinin bir kısmı, uygun projelerde TÜBİTAK ve
            KOSGEB Ar-Ge destek programları kapsamında desteklenebilir.
            Güncel ve kesin rakamlar için başvuru öncesinde{" "}
            <a
              href="https://www.turkpatent.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜRKPATENT&apos;in resmi ücret tarifesi
            </a>{" "}
            sayfasından teyit alınması önerilir.
          </p>
        </div>
      </section>

      {/* 8. YURT DIŞI */}
      <section id="yurtdisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Yurt Dışında Marka ve Patent Koruması
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜRKPATENT nezdinde alınan bir marka veya patent tescili, yalnızca
          Türkiye sınırları içinde koruma sağlar. İhracat yapan veya yurt
          dışı pazarlara girmeyi planlayan KOBİ&apos;lerin, hedef pazarlarda
          da ayrıca koruma sağlaması gerekir.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🌍 Madrid Protokolü ile Marka Tescili
            </h3>
            <p className="text-gray-700">
              Türkiye&apos;nin de taraf olduğu Madrid Protokolü sayesinde,
              TÜRKPATENT üzerinden yapılan tek bir uluslararası başvuruyla
              protokole üye 100&apos;den fazla ülkede marka koruması talep
              edilebilir; her ülke için ayrı ayrı yerel başvuru yapmaya
              gerek kalmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔬 PCT ile Patent Koruması
            </h3>
            <p className="text-gray-700">
              Patent Cooperation Treaty (PCT) sistemi, tek bir uluslararası
              patent başvurusuyla üye ülkelerde koruma talep etme sürecini
              başlatma imkânı sunar; nihai tescil yine her ülkenin kendi
              patent ofisinde ayrı ayrı tamamlanır.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Ticaret Bakanlığı&apos;nın ihracatçılara yönelik yurt dışı marka
          tescili destek kalemi de bu maliyetlerin bir kısmını
          karşılayabiliyor. Destek kapsamı ve oranları için{" "}
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="text-orange-600 underline"
          >
            Ticaret Bakanlığı İhracat Destekleri
          </Link>{" "}
          rehberimize göz atabilirsiniz.
        </p>
      </section>

      {/* 9. ÖNERİLER VE DİKKAT EDİLMESİ GEREKENLER */}
      <section id="oneriler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. KOBİ&apos;ler İçin Pratik Öneriler ve Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Pratik Öneriler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Erken tescil edin:</strong> Marka faaliyete
              başlamadan veya faaliyetin çok erken bir aşamasında tescil
              başvurusu yapın; ticari itibar oluştuktan sonra tescil
              denemek riski artırır.
            </li>
            <li>
              <strong>Doğru sınıfları seçin:</strong> Yalnızca bugünkü
              değil, önümüzdeki 3-5 yıllık faaliyet planınızı da kapsayacak
              Nice sınıflarını başvuruya dahil edin.
            </li>
            <li>
              <strong>Ön araştırma yapın:</strong> Başvurudan önce benzer
              marka olup olmadığını kontrol ederek itiraz/ret riskini
              azaltın.
            </li>
            <li>
              <strong>Markanızı izleyin:</strong> Tescilden sonra Resmî
              Marka Bülteni&apos;ni takip ederek benzer başvurulara zamanında
              itiraz edin; aksi hâlde itiraz süresi (2 ay) kaçırılabilir.
            </li>
            <li>
              <strong>Sözleşmelere fikri mülkiyet maddesi ekleyin:</strong>{" "}
              Tedarikçi, çalışan ve ortaklık sözleşmelerinde marka/patent
              haklarının kime ait olduğunu açıkça belirtin.
            </li>
            <li>
              <strong>Yenileme tarihlerini takip edin:</strong> 10 yıllık
              koruma süresinin dolmasına yakın yenileme başvurusunu
              zamanında yapın.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-red-700">
            ⚠️ Sık Yapılan Hatalar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Yalnızca logo veya yalnızca kelime unsurunu tescil ettirip diğerini korumasız bırakmak</li>
            <li>Marka tescilini sadece Türkiye ile sınırlı tutup ihracat yapılan ülkelerde koruma sağlamamak</li>
            <li>Buluşu tescilden önce fuar, sosyal medya veya kamuya açık ortamlarda paylaşarak yenilik şartını zedelemek</li>
            <li>Tescil sürecini takip etmemek ve itiraz süresini kaçırmak</li>
            <li>Marka/patent hakkını şirket değil, kurucu ortak adına tescil ettirip şirket devrinde belirsizlik yaratmak</li>
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
              Marka tescili şart mı, kullanım yeterli olmaz mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, yeterli değildir. Türk hukukunda marka üzerindeki
              münhasır haklar tescil ile doğar. Tescilsiz kullanım, ancak
              sınırlı ve ispatı zor haksız rekabet hükümleriyle korunmaya
              çalışılabilir; bu da tescilli markanın sağladığı güvenceyi
              vermez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka tescili ortalama ne kadar sürede tamamlanır?
            </h3>
            <p className="leading-8 text-gray-700">
              İtiraz gelmeyen, eksiksiz başvurularda 6-12 ay içinde tescil
              tamamlanabiliyor. İtiraz süreci işletilirse bu süre 12-18 aya
              kadar uzayabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Patent ile faydalı model arasında hangisini seçmeliyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Buluşunuz yüksek katma değerli, teknik olarak karmaşık ve uzun
              vadeli bir rekabet avantajı sağlıyorsa patent; ürün geliştirme
              döngünüz hızlıysa ve daha kısa sürede koruma almak
              istiyorsanız faydalı model daha uygun olabilir. Faydalı
              modelde buluş basamağı aranmadığından süreç daha hızlı
              ilerler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka tescilinden önce buluşumu/ürünümü tanıtırsam sorun olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Marka için bu durum genellikle sorun yaratmaz; ancak patent
              başvurusu planlanan bir buluş, başvurudan önce kamuya açık
              şekilde paylaşılırsa &quot;yenilik&quot; şartı zedelenebilir
              ve patent başvurusu reddedilebilir. Bu nedenle patentlenmesi
              düşünülen buluşların başvurudan önce kamuya açıklanmaması
              önemlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka tescilim sadece Türkiye&apos;de mi geçerli?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. TÜRKPATENT nezdinde alınan tescil yalnızca Türkiye
              sınırları içinde koruma sağlar. Yurt dışında da koruma
              istiyorsanız Madrid Protokolü kapsamında uluslararası
              başvuru yapmanız veya hedef ülkede doğrudan yerel başvuru
              yapmanız gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİ&apos;ler marka/patent maliyetleri için destek alabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Uygun projelerde TÜBİTAK ve KOSGEB Ar-Ge destek programları
              patent süreciyle ilgili bazı giderleri destekleyebilir;
              ayrıca ihracatçılar için Ticaret Bakanlığı&apos;nın yurt dışı
              marka tescili destek kalemi mevcuttur. Şirketinizin somut
              durumuna uygun destek programının belirlenmesi için
              profesyonel danışmanlık almanız önerilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Marka ve Patent Sürecinizde Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            Marka araştırmasından yurt içi/yurt dışı tescil başvurusuna,
            patent sürecinin takibinden yenileme ve itiraz yönetimine kadar
            fikri mülkiyet süreçlerinizin tamamını Koray Akdağ / Sistem
            Global Danışmanlık olarak tek noktadan yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Markanızı veya buluşunuzu korumaya almak için bizimle
              iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Marka tescili ve patent başvurusu, çoğu KOBİ tarafından
          &quot;büyüdüğümde düşünürüm&quot; denilerek ertelenen ama aslında
          işletmenin en temel varlıklarından birini koruma altına alan
          kritik bir adımdır. TÜRKPATENT&apos;in EPATS üzerinden yürüttüğü
          süreç, göreceli olarak düşük resmî harçlarla ve makul sürelerde
          tamamlanabiliyor; buna karşılık tescili erteleyerek göze alınan
          risk, marka değeri kaybından hukuki uyuşmazlığa kadar çok daha
          ağır sonuçlar doğurabiliyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin marka ve patent stratejisini doğru kurgulamak,
          başvuru sürecini eksiksiz yönetmek ve yurt içi/yurt dışı koruma
          kapsamını ihtiyacınıza göre belirlemek için Koray Akdağ / Sistem
          Global Danışmanlık olarak yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
          </Link>
          <Link
            href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
          </Link>
          <Link
            href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir? Şartları, Destekleri ve 2026 Güncel Rehberi</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
