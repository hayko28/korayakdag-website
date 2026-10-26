import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK Patent Desteği Hâlâ Var mı? 1602 Programı 2026 Rehberi | Koray Akdağ",
  description: "TÜBİTAK 1602 Patent Destek Programı'nda ulusal başvuru desteği 2019'dan beri kapalı; hâlâ açık olan yalnızca PCT yoluyla yapılan uluslararası patent başvurularına sağlanan PD-200, PD-201 ve PD-202 destekleri. Tutarlar, şartlar ve başvuru süreciyle 2026 güncel rehber.",
  keywords: [
    "TÜBİTAK patent desteği",
    "1602 patent destek programı",
    "TÜBİTAK 1602",
    "uluslararası patent başvuru desteği",
    "PCT patent başvurusu Türkiye",
    "patent inceleme raporu desteği",
    "TÜBİTAK patent tescil ödülü",
    "PD-200 PD-201 PD-202",
  ],
  alternates: {
    canonical: "/blog/tubitak-1602-patent-destek-programi-ulusal-mi-uluslararasi-mi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜBİTAK Patent Desteği Hâlâ Var mı? 1602 Programında Ulusal Başvuru Neden Kapalı, Uluslararası Destek Nasıl Alınır?"
      description="TÜBİTAK'ın 1602 Patent Destek Programı'nda yalnızca Türkiye'de geçerli ulusal patent başvurularına yönelik destek 2019'dan beri kapalı. Hâlâ açık olan tek kapsam, PCT yoluyla yapılan uluslararası patent başvurularına sağlanan PD-200, PD-201 ve PD-202 destekleri. Tutarlar, şartlar ve başvuru süreciyle 2026 güncel rehber."
      category="TÜBİTAK • PATENT DESTEĞİ • 2026"
      date="Ekim 2026"
      readTime="11 Dakika"
      slug="tubitak-1602-patent-destek-programi-ulusal-mi-uluslararasi-mi"
      coverImage="https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Uluslararası Patent Başvurunuzu ve TÜBİTAK Desteğinizi Birlikte Planlayalım"
      ctaText="Buluşunuzun hangi ülkelerde patentlenmesi gerektiğinden PCT başvuru sürecine, TÜBİTAK'ın PD-200/PD-201/PD-202 destek başvurularının PRODİS üzerinden takibine kadar süreci birlikte yönetelim. Patent stratejinizi şirketinizin Ar-Ge ve ihracat planıyla birlikte değerlendirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ TÜBİTAK 1602 Patent Destek Programı&apos;nda yalnızca Türkiye&apos;de geçerli <strong>ulusal patent başvurularına</strong> yönelik araştırma raporu, inceleme raporu, vekil ve tescil ödülü desteği, TÜBİTAK Yönetim Kurulu&apos;nun <strong>03.01.2019 tarihli kararıyla</strong> yeni başvurulara kapatıldı.</li>
          <li>✔ Hâlâ açık olan tek kapsam, <strong>PCT (Patent İşbirliği Anlaşması)</strong> yoluyla WIPO&apos;ya yapılan <strong>uluslararası patent başvurularına</strong> sağlanan destek: PD-200 (başvuru desteği), PD-201 (inceleme raporu desteği) ve PD-202 (tescil ödülü).</li>
          <li>✔ PD-200 başvurusu <strong>TÜRKPATENT&apos;e</strong>, PD-201 ve PD-202 başvuruları <strong>PRODİS üzerinden TÜBİTAK&apos;a</strong> yapılır.</li>
          <li>✔ İnceleme raporu desteği ofise göre değişir: USPTO/EPO/CNIPA/KIPO için <strong>40.000 TL</strong>, JPO için <strong>80.000 TL</strong>; bir patente ilişkin toplam inceleme raporu desteği <strong>240.000 TL&apos;yi</strong> geçemez.</li>
          <li>✔ Patent, EPO/JPO/USPTO/KIPO/CNIPA&apos;dan birinde tescil edilirse her patent için <strong>55.000 TL tescil ödülü</strong> ayrıca ödenir.</li>
          <li>✔ Gerçek kişiler yılda en fazla <strong>5</strong>, şirketler/kurumlar yılda en fazla <strong>20</strong> patent başvurusu için destekten yararlanabilir; başvurular <strong>yıl boyunca açık</strong>, özel bir çağrı dönemi yok.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. TÜBİTAK 1602 Patent Destek Programı Nedir?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Karıştırmayın: Ulusal mı, Uluslararası mı?
          </Link>
          <Link href="#asamalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Uluslararası Desteğin Üç Aşaması
          </Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Güncel Destek Tutarları
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Kimler Başvurabilir?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Başvuru Süreci Adım Adım
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
          1. TÜBİTAK 1602 Patent Destek Programı Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜBİTAK 1602 Patent Destek Programı, Türkiye kökenli buluşların
          ulusal ve uluslararası patent başvurusu ile tescil sayısını
          artırmayı hedefleyen bir destek mekanizmasıdır. Programın adı
          hâlâ geçerli ve TÜBİTAK&apos;ın güncel destek listesinde yer
          alıyor; ancak kapsamı birçok işletme sahibinin ve hatta bazı
          güncel olmayan rehberlerin bildiğinden daha dar.
        </p>
        <p className="leading-8 text-gray-700">
          Uzun yıllar boyunca program, hem yalnızca Türkiye&apos;de geçerli
          ulusal patent başvurularını hem de yurt dışında yapılan
          uluslararası başvuruları destekliyordu. TÜBİTAK Yönetim
          Kurulu&apos;nun 03.01.2019 tarihli ve 4 sayılı toplantısında
          aldığı kararla bu yapı değişti: ulusal başvurulara yönelik
          destek ve ödüller yeni başvurulara kapatıldı, kaynaklar
          maliyeti çok daha yüksek olan uluslararası başvuru sürecine
          yoğunlaştırıldı.
        </p>
      </section>

      {/* 2. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Karıştırmayın: Ulusal Destek Neden Kapalı, Uluslararası Destek Neden Açık?
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ İki Ayrı Kapsam, İki Ayrı Durum
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Ulusal Patent Başvurusu Desteği
              </p>
              <p className="text-gray-700">
                Yalnızca TÜRKPATENT&apos;e yapılan, Türkiye sınırları içinde
                geçerli patent başvurularına yönelik araştırma raporu,
                inceleme raporu, vekil desteği ve tescil ödülü, <strong>2019&apos;dan
                beri kapalı</strong>. Bu tarihten sonra yapılan yeni ulusal
                başvurular için TÜBİTAK&apos;tan bu kalemlerde destek
                alınamıyor. Tek istisna, 01.01.2019&apos;dan önce tescil
                edilmiş patentler için ulusal tescil ödülünün halen geçerli
                olması.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Uluslararası Patent Başvurusu Desteği
              </p>
              <p className="text-gray-700">
                PCT kapsamında WIPO&apos;ya yapılan ve TÜRKPATENT, EPO, JPO,
                USPTO, KIPO veya CNIPA gibi ofislere ulusal/bölgesel faza
                giren başvurular için destek <strong>hâlâ açık</strong> ve
                belirli bir başvuru dönemi yok; yıl boyunca başvuru
                alınıyor.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Bu ayrımın pratik sonucu şu: sadece Türkiye pazarında faaliyet
            gösterip buluşunu yalnızca TÜRKPATENT nezdinde tescil ettirmeyi
            planlayan bir şirket, TÜBİTAK 1602 kapsamında herhangi bir nakdi
            destek bekleyemez. Destek, buluşunu yurt dışında da korumak
            isteyen ve PCT yoluyla uluslararası başvuru yapan şirketler
            için anlamlı hale geliyor.
          </p>
        </div>
      </section>

      {/* 3. AŞAMALAR */}
      <section id="asamalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Uluslararası Desteğin Üç Aşaması
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Uluslararası patent başvurusu desteği tek bir ödeme değil, başvuru
          sürecinin farklı aşamalarına denk gelen üç ayrı destek kaleminden
          oluşuyor. Her aşama bir öncekinin tamamlanmış olmasını şart koşuyor.
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">PD-200: Uluslararası Patent Başvuru Desteği</h3>
              <p className="text-gray-700">
                PCT kapsamında WIPO&apos;ya yapılan uluslararası patent
                başvurusu için PD-200 formuyla TÜRKPATENT&apos;e başvurulur.
                Hesaplanan destek tutarı (WIPO başvuru ücreti ve araştırma
                ücreti), başvuru sahibi adına TÜBİTAK tarafından doğrudan
                TÜRKPATENT&apos;e ödenir. TÜRKPATENT, Uluslararası Araştırma
                ve İnceleme Otoritesi olarak seçilmişse araştırma ücretinin
                tamamı, seçilmemişse araştırma ücretinin yarısı karşılanır.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">PD-201: Uluslararası İnceleme Raporu Desteği</h3>
              <p className="text-gray-700">
                PD-200 desteği sağlanmış bir uluslararası başvuru, hedeflenen
                ülke/bölgede (TÜRKPATENT, EPO, JPO, USPTO, KIPO veya CNIPA)
                ulusal/bölgesel faza girip inceleme raporu ücreti ödendiğinde,
                PRODİS (eteydeb.tubitak.gov.tr) üzerinden PD-201 formuyla
                TÜBİTAK&apos;a başvurulur. Destek, kabul edilen başvurular
                için başvuru sahibinin banka hesabına ödenir.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">PD-202: Uluslararası Patent Tescil Ödülü</h3>
              <p className="text-gray-700">
                Daha önce PD-201 inceleme raporu desteği almış bir patent
                başvurusu, EPO, JPO, USPTO, KIPO veya CNIPA tarafından tescil
                edildiğinde, PD-202 formuyla TÜBİTAK&apos;a başvurulur ve
                ödül tutarı başvuru sahibinin banka hesabına yatırılır.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Başvurularda en sık gözden kaçan
            nokta, PD-201 ve PD-202&apos;nin birbirinden bağımsız iki ayrı
            başvuru olduğu ve PD-202&apos;nin yalnızca daha önce PD-201
            desteği alınmış bir patent için talep edilebildiğidir. İnceleme
            raporu desteğini zamanında almayan bir başvuru, patent
            tescillendiğinde tescil ödülünden de yararlanamayabilir; bu
            yüzden her aşamanın ücret/belge kaydının eksiksiz tutulması ve
            başvurunun ilgili aşama tamamlanır tamamlanmaz yapılması önem
            taşıyor.
          </p>
        </div>
      </section>

      {/* 4. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Güncel Destek Tutarları
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Kalemi</th>
                <th className="p-5">Ofis</th>
                <th className="p-5">Tutar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold" rowSpan={6}>PD-201 İnceleme Raporu Desteği</td>
                <td className="p-5">USPTO (ABD)</td>
                <td className="p-5">40.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">EPO (Avrupa)</td>
                <td className="p-5">40.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">JPO (Japonya)</td>
                <td className="p-5">80.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">CNIPA (Çin)</td>
                <td className="p-5">40.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">KIPO (Güney Kore)</td>
                <td className="p-5">40.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5">TÜRKPATENT Ön İnceleme Raporu</td>
                <td className="p-5">WIPO&apos;nun ilan ettiği inceleme ücreti kadar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">PD-202 Tescil Ödülü</td>
                <td className="p-5">EPO, JPO, USPTO, KIPO, CNIPA (tescil edilen her patent için)</td>
                <td className="p-5">55.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <p className="leading-8 text-gray-700">
            ⚠️ <strong>Üst Sınır:</strong> Bir patente ilişkin alınabilecek
            toplam Uluslararası Patent İnceleme Raporu Desteği, birden fazla
            ofisten inceleme raporu desteği alınsa dahi <strong>240.000
            TL&apos;yi geçemez.</strong> Bu tutarlar TÜBİTAK&apos;ın resmî
            destek tutarları tablosuna dayanmaktadır; başvuru öncesinde
            güncel rakamları TÜBİTAK&apos;ın 1602 sayfasından teyit etmeniz
            önerilir, zira destek tutarları yıl içinde güncellenebiliyor.
          </p>
        </div>
      </section>

      {/* 5. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Kimler Başvurabilir?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Başvurabilecekler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Türkiye&apos;de yerleşik gerçek kişiler (Türk vatandaşları)</li>
              <li>✔ Türkiye&apos;de kurulu şirketler (Limited, Anonim vb.)</li>
              <li>✔ Üniversiteler (rektörlük onaylı dilekçeyle)</li>
              <li>✔ Kamu kurum ve kuruluşları</li>
              <li>✔ Noter onaylı vekaletnameyle başvuran patent vekili/büroları</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Kapsam Dışı Kalanlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Türkiye&apos;de sınırlı mükellef (şube statüsünde) yabancı şirketler</li>
              <li>❌ Dernekler, vakıflar ve bunların iktisadi işletmeleri (kanunla kurulanlar hariç)</li>
              <li>❌ Faydalı model, marka, coğrafi işaret ve logo başvuruları</li>
              <li>❌ TÜRKPATENT veya WIPO&apos;dan başvuru numarası alınmamış başvurular</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 overflow-x-auto rounded-2xl border">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Başvuru Sahibi</th>
                <th className="p-5">Yıllık Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-5 font-semibold">Gerçek kişi</td>
                <td className="p-5">En fazla 5 patent başvurusu</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Tüzel kişi (şirket, üniversite, kamu kurumu)</td>
                <td className="p-5">En fazla 20 patent başvurusu</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Ayrıca dikkat edilmesi gereken bir nokta, TÜBİTAK&apos;ın yayımladığı
          sık sorulan sorular dokümanına göre başvuru sahibi/buluş sahibi
          olarak listelenen gerçek kişiler arasında Türk vatandaşı olmayan
          birinin bulunması halinde başvurunun bu destek kapsamında
          değerlendirilmediğidir. Bu durum, özellikle yurt dışı ortaklı
          ekiplerle veya yabancı mucitlerle ortak geliştirilen buluşlarda
          başvuru öncesinde netleştirilmesi gereken bir husus; kesinleşmiş
          başvuru listesini oluşturmadan önce TÜBİTAK&apos;a doğrudan teyit
          ettirmek, başvurunun reddedilme riskini önlüyor.
        </p>
      </section>

      {/* 6. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Başvuru Süreci Adım Adım
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Türkiye&apos;deki Esas Başvuru Netleştirilir</h3>
              <p className="text-gray-700">Buluşunuz için TÜRKPATENT nezdinde bir patent başvurusu veya tescil belgesi bulunur ya da doğrudan PCT yoluyla uluslararası başvuru planlanır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">PCT Başvurusu WIPO&apos;ya Yapılır, PD-200 Formuyla TÜRKPATENT&apos;e Başvurulur</h3>
              <p className="text-gray-700">PCT kapsamındaki uluslararası patent başvurunuz için PD-200 formu hazırlanıp TÜRKPATENT&apos;e sunulur; hesaplanan destek tutarı başvuru sahibi adına TÜBİTAK tarafından karşılanır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Hedef Ülke/Bölgeye Ulusal Faza Giriş Yapılır</h3>
              <p className="text-gray-700">Patent korumasının fiilen istendiği ülke/bölgedeki ofise (TÜRKPATENT, EPO, JPO, USPTO, KIPO veya CNIPA) ulusal faza giriş yapılır ve inceleme raporu ücreti ödenir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">PD-201 Başvurusu PRODİS Üzerinden Yapılır</h3>
              <p className="text-gray-700">Ödeme belgeleri ve fatura/makbuzlarla birlikte PD-201 formu PRODİS (eteydeb.tubitak.gov.tr) üzerinden TÜBİTAK&apos;a sunulur; kabul edilen başvuru için destek tutarı banka hesabına ödenir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Patent Tescillenirse PD-202 Başvurusu Yapılır</h3>
              <p className="text-gray-700">İlgili ofis patenti tescil ettiğinde, daha önce PD-201 desteği alınmış olması şartıyla PD-202 formuyla tescil ödülü başvurusu yapılır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yalnızca Türkiye&apos;de geçerli ulusal patent başvurusu planlıyorsanız TÜBİTAK&apos;tan nakdi destek beklemeyin; bu kapsam 2019&apos;dan beri kapalı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ PD-201 ve PD-202&apos;yi sırasıyla ve zamanında başvurun; PD-202 yalnızca PD-201 desteği alınmış patentler için geçerli
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bir patent için toplam inceleme raporu desteğinin 240.000 TL tavanını bütçe planlamanıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıllık başvuru limitinizi (gerçek kişi 5, tüzel kişi 20) aşan projeleriniz varsa başvuru takvimini buna göre planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuru sahipleri arasında Türk vatandaşı olmayan gerçek kişi bulunup bulunmadığını önceden TÜBİTAK&apos;a teyit ettirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faydalı model, marka veya tasarım tescili bu programın değil, ayrı başvuru ve destek mekanizmalarının kapsamında
          </div>
        </div>
      </section>

      {/* 8. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Başvuru
          öncesinde güncel tutar, oran ve şartları doğrudan bu kaynaklardan
          teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/1602/icerik-destek-kapsami" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              TÜBİTAK 1602 Patent Destek Programı resmî destek kapsamı sayfası
            </a>
          </li>
          <li>
            <a href="https://tubitak.gov.tr/sites/default/files/2024-03/1602_bilgi_notu.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              TÜBİTAK 1602 Hibe Destek ve Ödül Tutarları Tablosu
            </a>
          </li>
          <li>
            <a href="https://tubitak.gov.tr/sites/default/files/2024-03/1602_sss_220207.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              TÜBİTAK 1602 Sık Sorulan Sorular dokümanı
            </a>
          </li>
          <li>
            <a href="https://www.turkpatent.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              TÜRKPATENT resmî internet sitesi
            </a>
          </li>
        </ul>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              TÜBİTAK hâlâ patent başvurusu için destek veriyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, ancak yalnızca PCT yoluyla yapılan uluslararası patent
              başvuruları için. Sadece Türkiye&apos;de geçerli ulusal patent
              başvurularına yönelik destek, TÜBİTAK Yönetim Kurulu&apos;nun
              03.01.2019 tarihli kararıyla yeni başvurulara kapatıldı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ulusal (sadece Türkiye&apos;de) patent başvurumu TÜRKPATENT&apos;e yaptım, TÜBİTAK&apos;tan destek alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, 2019 sonrası yapılan yeni ulusal başvurular için
              TÜBİTAK&apos;ın araştırma raporu, inceleme raporu, vekil
              desteği ve tescil ödülü kalemleri kapalı. Yurt dışında da
              koruma istiyorsanız PCT kapsamında uluslararası başvuru
              yaparak destekten yararlanabilirsiniz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              PD-200, PD-201, PD-202 arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              PD-200 WIPO&apos;ya yapılan uluslararası başvurunun kendisini
              ve araştırma ücretini, PD-201 hedef ülke/bölge ofisinin
              düzenlediği inceleme raporu ücretini, PD-202 ise patentin
              fiilen tescil edilmesi halinde verilen ödülü karşılar. Her
              aşama bir öncekinin desteklenmiş olmasını şart koşar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir patent için en fazla ne kadar inceleme raporu desteği alınabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Birden fazla ofisten (örneğin hem EPO hem USPTO) inceleme
              raporu desteği alınsa dahi, bir patente ilişkin toplam PD-201
              desteği 240.000 TL&apos;yi geçemez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Patent tescil ödülü ne zaman ve ne kadar ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              PD-201 inceleme raporu desteği almış bir patent, EPO, JPO,
              USPTO, KIPO veya CNIPA tarafından tescil edildiğinde, her
              patent için 55.000 TL tescil ödülü başvuru sahibinin banka
              hesabına ödeniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Faydalı model başvurusu bu kapsamda destekleniyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. TÜBİTAK 1602 Patent Destek Programı yalnızca patent
              başvuru ve tescil süreçlerini kapsıyor; faydalı model, marka,
              coğrafi işaret ve logo başvuruları bu programın dışında.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜBİTAK 1602 Patent Destek Programı&apos;nın adı geçen her
          kaynakta aynı kapsamı anlatmıyor; 2019&apos;dan bu yana programın
          ağırlık merkezi ulusal başvurulardan uluslararası başvurulara
          kaydı. Bu değişikliği bilmeyen bir şirket, yalnızca TÜRKPATENT&apos;e
          başvuru yaparak destek bekleyebilir ve hayal kırıklığına uğrayabilir.
          Buna karşılık, buluşunu yurt dışında da korumak isteyen ve PCT
          yoluyla uluslararası başvuru yapan şirketler için PD-200, PD-201
          ve PD-202 destekleri, inceleme raporu ve tescil maliyetlerinin
          önemli bir kısmını karşılayan somut bir fırsat.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Buluşunuzun hangi ülkelerde patentlenmesi gerektiğinden PCT
          başvuru sürecine, TÜBİTAK&apos;ın PD-200/PD-201/PD-202 destek
          başvurularının PRODİS üzerinden takibine kadar süreci Koray
          Akdağ / Sistem Global Danışmanlık olarak tek elden yürütüyoruz.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            Patent stratejinizi birlikte planlayalım.
          </Link>
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/madrid-protokolu-yurt-disinda-marka-tescili-nasil-yapilir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE FİKRİ MÜLKİYET • YURT DIŞI TESCİL • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Madrid Protokolü ile Yurt Dışında Marka Tescili Nasıl Yapılır?</h3>
          </Link>
          <Link
            href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • KOBİ</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusunun KOBİ&apos;ler İçin Önemi</h3>
          </Link>
          <Link
            href="/blog/yazilimin-telif-hakki-tescili-zorunlu-mu-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">FİKRİ MÜLKİYET • TELİF HAKKI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yazılımın Telif Hakkı Tescili Zorunlu mu?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"TÜBİTAK hâlâ patent başvurusu için destek veriyor mu?","acceptedAnswer":{"@type":"Answer","text":"Evet, ancak yalnızca PCT yoluyla yapılan uluslararası patent başvuruları için. Sadece Türkiye'de geçerli ulusal patent başvurularına yönelik destek, TÜBİTAK Yönetim Kurulu'nun 03.01.2019 tarihli kararıyla yeni başvurulara kapatıldı."}},{"@type":"Question","name":"Ulusal (sadece Türkiye'de) patent başvurumu TÜRKPATENT'e yaptım, TÜBİTAK'tan destek alabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır, 2019 sonrası yapılan yeni ulusal başvurular için TÜBİTAK'ın araştırma raporu, inceleme raporu, vekil desteği ve tescil ödülü kalemleri kapalı. Yurt dışında da koruma istiyorsanız PCT kapsamında uluslararası başvuru yaparak destekten yararlanabilirsiniz."}},{"@type":"Question","name":"PD-200, PD-201, PD-202 arasındaki fark nedir?","acceptedAnswer":{"@type":"Answer","text":"PD-200 WIPO'ya yapılan uluslararası başvurunun kendisini ve araştırma ücretini, PD-201 hedef ülke/bölge ofisinin düzenlediği inceleme raporu ücretini, PD-202 ise patentin fiilen tescil edilmesi halinde verilen ödülü karşılar. Her aşama bir öncekinin desteklenmiş olmasını şart koşar."}},{"@type":"Question","name":"Bir patent için en fazla ne kadar inceleme raporu desteği alınabilir?","acceptedAnswer":{"@type":"Answer","text":"Birden fazla ofisten (örneğin hem EPO hem USPTO) inceleme raporu desteği alınsa dahi, bir patente ilişkin toplam PD-201 desteği 240.000 TL'yi geçemez."}},{"@type":"Question","name":"Patent tescil ödülü ne zaman ve ne kadar ödeniyor?","acceptedAnswer":{"@type":"Answer","text":"PD-201 inceleme raporu desteği almış bir patent, EPO, JPO, USPTO, KIPO veya CNIPA tarafından tescil edildiğinde, her patent için 55.000 TL tescil ödülü başvuru sahibinin banka hesabına ödeniyor."}},{"@type":"Question","name":"Faydalı model başvurusu bu kapsamda destekleniyor mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. TÜBİTAK 1602 Patent Destek Programı yalnızca patent başvuru ve tescil süreçlerini kapsıyor; faydalı model, marka, coğrafi işaret ve logo başvuruları bu programın dışında."}}]}) }}
      />
    </BlogLayout>
  );
}
