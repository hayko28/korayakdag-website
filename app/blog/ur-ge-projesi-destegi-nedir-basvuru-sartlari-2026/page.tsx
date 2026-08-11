import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "UR-GE Projesi Desteği Nedir? 2026 Destek Oranları ve Başvuru Şartları | Koray Akdağ",
  description:
    "UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) Proje Desteği: kimler yararlanabilir, %75 destek oranı, 2026 güncel üst limitler, desteklenen faaliyetler, başvuru süreci ve şirketler için pratik rehber.",
  keywords: [
    "UR-GE projesi nedir",
    "UR-GE destek programı 2026",
    "Uluslararası Rekabetçiliğin Geliştirilmesi",
    "UR-GE başvuru şartları",
    "Ticaret Bakanlığı ihracat destekleri",
    "UR-GE proje desteği tutarı",
    "ihracat destekleri 2026",
    "kümelenme ihracat desteği",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="UR-GE Projesi Desteği Nedir? 2026 Destek Oranları, Üst Limitler ve Başvuru Rehberi"
      description="İhracat kümelenmesiyle çalışan şirketler için Ticaret Bakanlığı'nın en kapsamlı ihracat destek mekanizmalarından biri: UR-GE projesi nedir, kimler yararlanabilir, %75 destek oranı hangi faaliyetleri kapsıyor ve 2026 güncel üst limitler nedir?"
      category="İHRACAT DESTEKLERİ • UR-GE • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="ur-ge-projesi-destegi-nedir-basvuru-sartlari-2026"
      coverImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) Projesi
            Desteği, Ticaret Bakanlığı&apos;nın şirketleri tek tek değil
            kümeler hâlinde ihracata hazırladığı, bu nedenle de bireysel
            ihracat desteklerine kıyasla çok daha yüksek bütçeli bir
            mekanizmadır. Ancak program işbirliği kuruluşları üzerinden
            yürüdüğü için birçok işletme sahibi bu destekten nasıl
            faydalanabileceğini, hangi giderlerin karşılandığını ve 2026
            itibarıyla güncel üst limitlerin ne olduğunu tam olarak bilmiyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ UR-GE projesi nasıl işliyor, kim başvuruyor?</li>
            <li>✔ Şirketiniz bir UR-GE projesine nasıl dahil olur?</li>
            <li>✔ 2026 güncel destek oranı ve üst limitler (TL)</li>
            <li>✔ Desteklenen faaliyetler: eğitim, danışmanlık, yurt dışı pazarlama, alım heyeti</li>
            <li>✔ Proje süresi, katılım şartları ve önemli sınırlamalar</li>
            <li>✔ Başvuru süreci adım adım</li>
            <li>✔ UR-GE&apos;yi yurt dışı büyüme stratejinize nasıl bağlarsınız?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. UR-GE Projesi Nedir, Neden Önemli?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Başvurabilir, Şirketiniz Nasıl Dahil Olur?
            </Link>
            <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. 2026 Destek Oranı ve Güncel Üst Limitler
            </Link>
            <Link href="#faaliyetler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Desteklenen Faaliyetler ve Giderler
            </Link>
            <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Katılım Şartları ve Önemli Sınırlamalar
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Başvuru ve Ödeme Süreci
            </Link>
            <Link href="#strateji" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. UR-GE&apos;yi Yurt Dışı Büyüme Stratejisine Bağlamak
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Dikkat Edilmesi Gerekenler
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
            1. UR-GE Projesi Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            UR-GE, açılımıyla &quot;Uluslararası Rekabetçiliğin
            Geliştirilmesi&quot; Projesi Desteği, 5973 sayılı İhracat
            Destekleri Hakkında Karar&apos;ın 19. maddesi çerçevesinde
            Ticaret Bakanlığı tarafından yürütülen bir kümelenme destek
            modelidir. Programın mantığı diğer birçok ihracat desteğinden
            farklıdır: destek doğrudan tek bir şirkete değil, aynı sektörde
            veya bölgede faaliyet gösteren şirketleri bir araya getiren
            <strong> işbirliği kuruluşuna</strong> verilir; şirketler ise bu
            kuruluşun yürüttüğü projeye <strong>katılımcı</strong> olarak
            dahil olur.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Amaç, şirketleri &quot;kümelenme&quot; anlayışıyla müşterek
            ihracata yönlendirmek ve düzenli ihracatçı hâline getirmektir.
            Bunun için proje kapsamında ihtiyaç analizinden eğitime,
            danışmanlıktan yurt dışı pazarlama ve alım heyeti
            organizasyonlarına kadar geniş bir faaliyet yelpazesi
            desteklenir.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 UR-GE&apos;yi Diğer İhracat Desteklerinden Ayıran Özellikler
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Destek, bireysel şirkete değil kümeye/kuruluşa verilir</li>
              <li>✔ Proje bazında milyonlarca TL&apos;ye ulaşan yüksek bütçe imkânı</li>
              <li>✔ Eğitim, danışmanlık, tanıtım, istihdam ve saha ziyaretlerini tek çatı altında birleştirir</li>
              <li>✔ Yurt dışı pazarlama ve alım heyeti gibi doğrudan ticari temas faaliyetlerini finanse eder</li>
              <li>✔ Proje süresi 3 yıl olup performansa göre 2 yıl daha uzatılabilir</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Kısacası UR-GE, tek başına fuara gitmek veya danışmanlık almakla
            sınırlı kalmayan; bir sektördeki şirketleri ortak bir yol
            haritasıyla dış pazarlara taşıyan, devletin en kapsamlı ihracat
            kümelenme mekanizmasıdır.
          </p>
        </section>

        {/* 2. KİMLER */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Şirketiniz Nasıl Dahil Olur?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            UR-GE projesine Ticaret Bakanlığı&apos;na doğrudan başvuru
            yapabilecek taraf, tek bir şirket değil, o şirketlerin üye
            olduğu bir <strong>işbirliği kuruluşudur</strong>. Şirketler ise
            bu kuruluşun projesine katılımcı üye olarak dahil olur.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ İşbirliği Kuruluşu Olabilecek Yapılar
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Türkiye İhracatçılar Meclisi (TİM) ve İhracatçı Birlikleri</li>
                <li>✔ Türkiye Odalar ve Borsalar Birliği (TOBB), Ticaret/Sanayi Odaları</li>
                <li>✔ Dış Ekonomik İlişkiler Kurulu (DEİK)</li>
                <li>✔ Organize Sanayi Bölgeleri, Endüstri ve Teknoloji Geliştirme Bölgeleri</li>
                <li>✔ Sektör dernekleri ve kuruluşları</li>
                <li>✔ Sektörel Dış Ticaret Şirketleri (SDŞ), ihracat konsorsiyumları</li>
                <li>✔ Ticaret Borsaları, işveren sendikaları, imalatçı dernek/birlik/kooperatifleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-orange-700">
                🏢 Katılımcı Şirket Olarak Şartlarınız
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Devlet Yardımları Sistemi&apos;nde (DYS) yararlanıcı olarak kayıtlı olmak</li>
                <li>✔ Bir işbirliği kuruluşunun UR-GE projesine üye/katılımcı olarak dahil olmak</li>
                <li>✔ Aynı anda yalnızca bir UR-GE projesinde yer alabilmek</li>
                <li>✔ Toplamda en fazla 3 farklı UR-GE projesinde katılımcı olabilmek</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 leading-8 text-gray-700">
            Uygulamada çoğu şirket için ilk adım, bulunduğu sektördeki
            ihracatçı birliği, ticaret/sanayi odası veya sektör derneğinin
            hâlihazırda yürüttüğü ya da planladığı bir UR-GE projesine
            katılımcı olarak kayıt olmaktır. Kümede yeterli sayıda şirket
            yoksa yeni bir proje başvurusu için işbirliği kuruluşuyla birlikte
            hareket etmek de mümkündür.
          </p>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. 2026 Destek Oranı ve Güncel Üst Limitler
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            UR-GE kapsamındaki giderler <strong>%75 oranında</strong>
            desteklenir. Destek üst limitleri ise her takvim yılı başında
            (TÜFE + Yİ-ÜFE)/2 oranında güncellenir; bu nedenle rakamlar
            yıldan yıla belirgin şekilde artar. Sanayi ve Teknoloji
            Bakanlığı&apos;nın Yatırıma Destek Platformu üzerinden
            yayımladığı güncel tabloya göre 2026 yılı için geçerli üst
            limitler şöyledir:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Faaliyet</th>
                  <th className="p-5">2026 Üst Limiti</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">İhtiyaç analizi, eğitim, danışmanlık, tanıtım (proje bazında)</td>
                  <td className="p-5">29.594.373 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Yurt dışı pazarlama (faaliyet başına, azami 10 faaliyet)</td>
                  <td className="p-5">12.329.397 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Alım heyeti (faaliyet başına, azami 10 faaliyet)</td>
                  <td className="p-5">7.396.548 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Sanal yurt dışı pazarlama (faaliyet başına, azami 10 faaliyet)</td>
                  <td className="p-5">3.943.553 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">İşbirliği kuruluşunun proje işleyişi giderleri (yıllık toplam)</td>
                  <td className="p-5">19.728.672 TL</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Kişi başı günlük konaklama gideri</td>
                  <td className="p-5">19.349 TL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 İstihdam Desteği
            </h3>
            <p className="leading-8 text-gray-700">
              UR-GE projelerinin kümelenme anlayışı temelinde planlanması ve
              proje faaliyetlerinin organizasyonu için işbirliği kuruluşu
              tarafından ilk defa istihdam edilecek en fazla 2 uzman
              personelin proje süresince yapılan istihdam giderlerinin
              %75&apos;i desteklenir. Daha önce bir UR-GE projesinde istihdam
              edilmiş personel için &quot;ilk defa istihdam&quot; şartı
              aranmaz.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Bu tutarlar; 2022&apos;den bu yana enflasyon endeksiyle güncellenerek
            yaklaşık 3-5 kata çıkmış rakamlardır ve programın 2022&apos;deki
            ilk hâline kıyasla bugün çok daha yüksek bütçeli projelere
            imkân tanıdığını gösterir. Başvuru öncesinde güncel üst limitlerin
            teyidi için Ticaret Bakanlığı&apos;nın ilgili genelgesi esas
            alınmalıdır; zira bu tutarlar her yıl Ocak ayı başında yeniden
            belirlenir.
          </p>
        </section>

        {/* 4. FAALİYETLER */}
        <section id="faaliyetler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Desteklenen Faaliyetler ve Giderler
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            UR-GE projesi, bir ihracat kümesinin ihtiyaç tespitinden fiili
            pazarlama faaliyetlerine kadar tüm sürecini kapsar.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🔍 İhtiyaç Analizi
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>İhtiyaç analizi raporu bedeli</li>
                <li>Salon kirası, afiş-broşür bedeli</li>
                <li>Tercümanlık hizmeti giderleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🎓 Eğitim ve Danışmanlık
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Proje bazlı eğitim/danışmanlık hizmet bedeli</li>
                <li>Faaliyet organizasyon giderleri</li>
                <li>Kümenin ihtiyacına özel eğitim programları</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                📢 Küme Tanıtımı
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Küme internet sitesi tasarımı ve yönetimi</li>
                <li>Küme kimliği, logo ve broşür tasarımı</li>
                <li>Yazılı/görsel basında ve sosyal medyada tanıtım</li>
                <li>Küme tanıtım filmi hazırlanması</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ✈️ Yurt Dışı Pazarlama ve Alım Heyeti
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Ekonomi sınıfı uçak/tren/otobüs ulaşım giderleri</li>
                <li>Konaklama giderleri (kişi başı günlük tavan tutara kadar)</li>
                <li>Fuar katılımı, ikili görüşme ve şirket eşleştirme giderleri</li>
                <li>Tercümanlık, ürün sergileme ve nakliye giderleri</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💻 Sanal Yurt Dışı Pazarlama
            </h3>
            <p className="leading-8 text-gray-700">
              Fiziksel seyahat gerektirmeyen ikili iş görüşmeleri de destek
              kapsamındadır: dijital tanıtım/reklam kampanyaları, eşleştirme
              ve görüşme organizasyonu, platform ücretleri ve tercümanlık
              giderleri %75 oranında desteklenir. Bu, özellikle seyahat
              maliyeti yüksek pazarlarda ilk temasları düşük maliyetle
              kurmak isteyen şirketler için pratik bir seçenektir.
            </p>
          </div>
        </section>

        {/* 5. ŞARTLAR */}
        <section id="sartlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Katılım Şartları ve Önemli Sınırlamalar
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            UR-GE projelerinin sağlıklı işlemesi için Ticaret Bakanlığı belirli
            asgari katılım koşulları öngörmüştür. Bölgesel gelişmişlik
            düzeyine göre gerekli şirket sayısı değişir.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Faaliyet Türü</th>
                  <th className="p-5">4., 5., 6. Bölge</th>
                  <th className="p-5">Diğer İller</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Genel proje katılımı</td>
                  <td className="p-5">En az 5 şirket</td>
                  <td className="p-5">En az 10 şirket</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Yurt dışı / sanal pazarlama faaliyeti</td>
                  <td className="p-5">En az 5 şirket</td>
                  <td className="p-5">En az 8 şirket</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-red-700">
              ⚠️ Diğer Önemli Kurallar
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
              <li>Proje süresi 3 yıldır; performansa göre en fazla 2 yıl ilave süre verilebilir (toplam azami 5 yıl).</li>
              <li>Bir şirket aynı anda sadece bir UR-GE projesinde katılımcı olabilir.</li>
              <li>Bir şirket, farklı zamanlarda en fazla 3 UR-GE projesinde yer alabilir.</li>
              <li>Bir projede fuar katılımı yalnızca 1 kez ve fuar ziyareti şeklinde gerçekleştirilebilir.</li>
              <li>Şirketlerin DYS&apos;de yararlanıcı olarak kayıtlı olması zorunludur.</li>
            </ul>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Başvuru ve Ödeme Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            UR-GE&apos;de özel bir çağrı takvimi yoktur; başvurular yıl
            boyunca <strong>sürekli açıktır</strong>. Süreç tamamen Devlet
            Yardımları Sistemi (DYS) üzerinden yürütülür.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🤝</div>
              <h3 className="text-xl font-bold">1. Kümeye Katılım</h3>
              <p className="mt-3 text-sm text-gray-600">
                Şirket, sektöründeki bir işbirliği kuruluşunun UR-GE
                projesine katılımcı olarak dahil olur.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Proje Başvurusu</h3>
              <p className="mt-3 text-sm text-gray-600">
                İşbirliği kuruluşu, amaç, kapsam, süre ve bütçesi belirli
                projeyi DYS üzerinden Ticaret Bakanlığı&apos;na iletir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">3. Değerlendirme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bakanlık, projeyi kapsam, bütçe ve katılımcı yeterliliği
                açısından inceler ve onaylar.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🚀</div>
              <h3 className="text-xl font-bold">4. Faaliyetlerin Yürütülmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Eğitim, danışmanlık, yurt dışı pazarlama ve alım heyeti
                faaliyetleri planlanan takvime göre uygulanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📎</div>
              <h3 className="text-xl font-bold">5. Ödeme Başvurusu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Faaliyet bitiş tarihinden itibaren en geç 3 ay içinde
                belgelerle birlikte DYS üzerinden İhracatçı Birliği Genel
                Sekreterliği&apos;ne (İBGS) başvurulur.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Destek Ödemesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                İncelemeci kuruluşun onayının ardından destek tutarı
                işbirliği kuruluşuna geri ödemesiz olarak aktarılır.
              </p>
            </div>
          </div>
        </section>

        {/* 7. STRATEJİ */}
        <section id="strateji" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. UR-GE&apos;yi Yurt Dışı Büyüme Stratejisine Bağlamak
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            UR-GE projesi, doğru kullanıldığında yalnızca bir hibe mekanizması
            değil, şirketin uluslararasılaşma yolculuğunun ilk aşamasıdır.
            Yurt dışı pazarlama faaliyetleri ve alım heyetleri sayesinde
            kurulan ilk temaslar; zamanla düzenli sipariş ilişkisine, distribütör
            anlaşmalarına ve nihayetinde hedef pazarda kalıcı bir ticari
            yapılanmaya dönüşebilir.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📈 UR-GE Sonrası Doğal Sonraki Adımlar
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Hedef pazarda düzenli hâle gelen ticari ilişkiyi sözleşmelerle güvence altına almak</li>
              <li>✔ Yoğun iş hacmi oluşan pazarda yerel bir şirket kurarak stok, teslimat ve fatura süreçlerini hızlandırmak</li>
              <li>✔ Marka tescili ve gümrük/vergi avantajlarından yararlanacak yapıyı kurgulamak</li>
              <li>✔ İhracat performansını TURQUALITY, e-İhracat veya diğer Ticaret Bakanlığı destekleriyle büyütmek</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Şirketiniz UR-GE projesi kapsamında bir pazarda yoğunlaştıysa,
            bir sonraki mantıklı adım genellikle o pazarda veya bölgesel bir
            merkezde şirket kurmaktır. Koray Akdağ / Sistem Global Danışmanlık
            olarak hem doğru UR-GE kümesine yönlendirme ve ihracat stratejinizi
            kurgulama hem de sonrasında İngiltere, Almanya, Hollanda, BAE, ABD
            gibi hedef pazarlarda şirket kuruluşu ve kuruluş sonrası muhasebe
            süreçlerini bizzat uçtan uca yürütüyoruz; ayrı bir yerel firma
            aramanıza gerek kalmıyor.
          </p>
        </section>

        {/* 8. DİKKAT */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Destek doğrudan şirkete değil, projeyi yürüten işbirliği kuruluşuna ödenir; şirket kendi adına bireysel başvuru yapamaz.</li>
              <li>Faaliyet bitiş tarihinden itibaren 3 aylık ödeme talep süresi kaçırılırsa destek hakkı kaybedilir.</li>
              <li>Destek üst limitleri her yıl Ocak ayı başında güncellenir; bir önceki yılın rakamlarıyla bütçe planlaması yapılmamalıdır.</li>
              <li>Fuar katılımı desteği bir projede yalnızca bir kez ve fuar ziyareti kapsamında kullanılabilir.</li>
              <li>Katılımcı şirketlerin sayısı, bölgeye göre belirlenen asgari şartların altına düşerse faaliyet desteklenmeyebilir.</li>
              <li>Güncel oran, limit ve genelge metinleri için Ticaret Bakanlığı&apos;nın 5973 sayılı Karar&apos;a ilişkin genelgeleri esas alınmalıdır.</li>
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
                Şirketim UR-GE desteğine bireysel olarak başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Başvuruyu işbirliği kuruluşu (ihracatçı birliği, oda,
                sektör derneği, OSB, teknoloji geliştirme bölgesi vb.) yapar.
                Şirketiniz bu kuruluşun yürüttüğü bir projeye katılımcı üye
                olarak dahil olur.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek geri ödemeli mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır, UR-GE proje desteği geri ödemesizdir. Onaylanan
                giderlerin %75&apos;i, üst limitler dahilinde işbirliği
                kuruluşuna hibe olarak ödenir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Henüz ihracat yapmayan bir şirket UR-GE&apos;ye katılabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Programın amacı zaten şirketleri düzenli ihracatçı hâline
                getirmek olduğundan, henüz ihracat yapmayan ancak ihracata
                hazırlanan şirketler de kümeye dahil olabilir. Kesin şart,
                ilgili işbirliği kuruluşunun kendi proje kriterlerine göre
                belirlenir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Aynı anda birden fazla UR-GE projesinde yer alabilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Bir şirket aynı anda yalnızca bir UR-GE projesinde
                katılımcı olabilir; ancak farklı zaman dilimlerinde toplamda
                en fazla 3 farklı projede yer alabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                2026 üst limitleri her zaman güncel mi kalıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                Üst limitler her takvim yılı başında (TÜFE + Yİ-ÜFE)/2
                oranında yeniden belirlenir. Bu yazıda paylaşılan tutarlar
                2026 yılı için geçerli olup 2027 başında güncellenecektir;
                başvuru öncesinde Ticaret Bakanlığı&apos;nın güncel genelgesi
                kontrol edilmelidir.
              </p>
            </div>
          </div>
        </section>

        {/* 10. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            UR-GE Projesi Desteği, ihracatını büyütmek isteyen şirketler için
            devletin sunduğu en kapsamlı kümelenme mekanizmalarından biri.
            %75 oranındaki destek ve 2026 itibarıyla proje bazında
            29,5 milyon TL&apos;ye varan üst limitler, eğitimden yurt dışı
            pazarlama faaliyetlerine kadar geniş bir alanı kapsıyor. Ancak
            başvurunun bireysel değil işbirliği kuruluşu üzerinden yapılması,
            doğru kümeyi bulmayı ve projeye erken aşamada dahil olmayı
            kritik hâle getiriyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin sektörüne uygun UR-GE kümesini belirlemek, ihracat
            stratejinizi kurgulamak ve UR-GE ile elde edilen pazar
            temaslarını kalıcı bir uluslararası yapılanmaya (şirket kuruluşu,
            marka tescili, vergi planlaması) dönüştürmek için Koray Akdağ /
            Sistem Global Danışmanlık olarak yanınızdayız. Süreci baştan sona
            tek elden yönetiyor, ayrı bir danışmanlık firması aramanıza
            gerek bırakmıyoruz.
          </p>
        </section>
    </BlogLayout>
  );
}
