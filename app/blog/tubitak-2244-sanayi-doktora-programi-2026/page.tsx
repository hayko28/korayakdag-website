import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK 2244 Sanayi Doktora Programı 2026: Ar-Ge Merkeziniz Yoksa Da Başvurabilir misiniz? | Koray Akdağ",
  description:
    "TÜBİTAK'ın 4 Kasım 2026'da açtığı 2244 Sanayi Doktora Programı çağrısında hangi şirketler ortak olabilir, başvuruyu kim yapar, destek tutarları ve süreler nedir? Ar-Ge Merkezi şartı ile 'en az bir TÜBİTAK projesi tamamlamış olma' şartı arasındaki farkla 2026 güncel rehber.",
  keywords: [
    "tübitak 2244 sanayi doktora programı",
    "sanayi doktora programı 2026",
    "doktoralı araştırmacı istihdamı",
    "üniversite sanayi işbirliği tübitak",
    "ar-ge merkezi doktoralı personel",
    "bideb 2244 başvuru",
    "tübitak doktora bursu şirket",
    "sanayi doktora programı şartları",
  ],
  alternates: {
    canonical: "/blog/tubitak-2244-sanayi-doktora-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜBİTAK 2244 Sanayi Doktora Programı Nedir? Ar-Ge Merkeziniz Olmasa Bile Doktoralı Araştırmacı Yetiştirebilir misiniz?"
      description="TÜBİTAK, 4 Kasım 2026'da 2244 Sanayi Doktora Programı'nın 2026 yılı çağrısını açtı. Programa hangi şirketler ortak olabilir, başvuruyu neden şirket değil üniversite yapar, burs/istihdam desteği tutarları ve süreler ne kadar; 22 Aralık 2026 son başvuru tarihiyle güncel rehber."
      category="TÜBİTAK • SANAYİ DOKTORA PROGRAMI • 2026"
      date="Kasım 2026"
      readTime="13 Dakika"
      slug="tubitak-2244-sanayi-doktora-programi-2026"
      coverImage="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      programDurumu="acik"
      sonBasvuruTarihi="22 Aralık 2026"
      ctaHeading="Şirketinizin 2244 Sanayi Doktora Programı'na Uygunluğunu Birlikte Değerlendirelim"
      ctaText="Ar-Ge Merkezi, Tasarım Merkezi, teknopark şirketi olup olmadığınızı veya daha önce tamamladığınız bir TÜBİTAK projesinin bu programa ortak olma şartını karşılayıp karşılamadığını birlikte netleştirir, üniversite iş birliği sürecini ve başvuru takvimini baştan sona birlikte yönetiriz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Ar-Ge Merkezi veya Tasarım Merkezi kurmuş, ya da bir teknoparkta faaliyet
        gösteren şirketlerin en büyük kronik sorunlarından biri, nitelikli
        doktoralı araştırmacıyı bünyeye katmanın maliyetidir. TÜBİTAK, bu
        ihtiyacı doğrudan hedef alan 2244 Sanayi Doktora Programı&apos;nın 2026
        yılı çağrısını 4 Kasım 2026&apos;da açtı. Program, bir yükseköğretim
        kurumu ile bir şirketin ortak yürüttüğü projelerde doktora öğrencisine
        burs, akademik danışmana teşvik ikramiyesi ve mezuniyet sonrası
        şirkete istihdam desteği sağlıyor. Ancak başvuru mantığı, çoğu KOSGEB
        veya TÜBİTAK TEYDEB programından farklı işliyor: başvuruyu şirket değil
        üniversite yapıyor ve şirket şartı da sanıldığından daha geniş.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ 2244, bir üniversite/araştırma altyapısı ile bir özel sektör
            kuruluşunun ortak yürüttüğü, <strong>doktora öğrencisi
            yetiştirmeyi ve sonrasında sanayide istihdamını</strong> hedefleyen
            bir TÜBİTAK BİDEB programıdır.
          </li>
          <li>
            ✔ Şirket ortağı olmak için <strong>Ar-Ge/Tasarım Merkezi veya
            teknopark şirketi olmak zorunlu değildir;</strong> TÜBİTAK&apos;tan
            daha önce en az bir proje sonuçlandırmış olmak da yeterlidir.
          </li>
          <li>
            ✔ Başvuruyu şirket değil, <strong>üniversite/araştırma
            altyapısı</strong> BİDEB sistemi üzerinden proje yöneticisi
            aracılığıyla yapar; şirket protokole ortak olarak girer.
          </li>
          <li>
            ✔ Bir projede en az <strong>3 doktora öğrencisi</strong> yer
            almalı; bir şirket aynı anda en fazla 10 projede, toplam 50
            öğrenciyle aktif olabilir.
          </li>
          <li>
            ✔ Burs süresi 36 ay; doktora mezuniyeti sonrası şirkette
            istihdam en az 12 ay, mutabakatla en çok 36 aya kadar sürebilir.
          </li>
          <li>
            ✔ TÜBİTAK, istihdam edilen araştırmacı için şirkete <strong>en
            fazla 36 ay boyunca personel maliyetinin %40&apos;ını</strong>
            (brüt asgari ücretin en fazla 2 katı tavanla) öder.
          </li>
          <li>
            ✔ 2026 çağrısında son başvuru tarihi <strong>22 Aralık
            2026;</strong> başvuru TYBS/e-bideb üzerinden çevrimiçi yapılır.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Program Nedir, Amacı Ne?
          </Link>
          <Link href="#kimler-basvurabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Hangi Şirketler Ortak Olabilir?
          </Link>
          <Link href="#destek-tutarlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Tutarları: Burs, PTİ ve İstihdam Desteği
          </Link>
          <Link href="#sureler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Süreler: Burs, İstihdam ve Proje Süresi
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci Nasıl İşler?
          </Link>
          <Link href="#kimler-icin-uygun" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Hangi Şirket Profilleri İçin Anlamlı?
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
        </div>
      </div>

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Program Nedir, Amacı Ne?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TÜBİTAK&apos;ın resmî çağrı metnine göre 2244 Sanayi Doktora
          Programı&apos;nın amacı, sanayide ihtiyaç duyulan doktora derecesine
          sahip nitelikli insan kaynağının üniversite-sanayi iş birliğiyle
          yetiştirilmesi, sanayide doktoralı araştırmacı istihdamının teşvik
          edilmesi ve üniversite/araştırma altyapısı ile sanayi arasındaki
          iş birliğinin geliştirilmesidir. Program, Sanayi ve Teknoloji
          Bakanlığı&apos;nın Millî Teknoloji Hamlesi çatısı altında yürütülen
          programlardan biri.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          İşleyiş mantığı şu şekilde: bir yükseköğretim kurumu veya araştırma
          altyapısı ile bir özel sektör kuruluşu, ortak bir üniversite-sanayi
          iş birliği protokolü imzalar. Bu protokol kapsamında, projenin
          faaliyet alanlarıyla ilgili doktora öğrencileri hem üniversitede
          doktora eğitimi hem de sanayi bünyesinde Ar-Ge/tasarım faaliyeti
          yürütür. TÜBİTAK bu süreçte üç ayrı destek unsuru sağlar: öğrenciye
          burs, proje yöneticisi ve akademik danışmanlara Proje Teşvik
          İkramiyesi (PTİ), öğrencinin mezuniyet sonrası şirkette istihdam
          edilmesi halinde de şirkete istihdam desteği.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Program, tek başına bir proje finansmanı değil; bir
            &quot;insan kaynağı yetiştirme ve transfer&quot; mekanizmasıdır.
            Şirket açısından asıl değer, doktora sürecinde şirkete özgü
            problemler üzerinde çalışmış, mezuniyet sonrası doğrudan
            istihdam edilebilecek bir araştırmacıyı, TÜBİTAK desteğiyle
            yetiştirmiş olmaktır.
          </p>
        </div>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler-basvurabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Hangi Şirketler Ortak Olabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Çağrı metninin 4.1.2 maddesine göre özel sektör kuruluşunun programa
          ortak olabilmesi için iki alternatif yoldan biri yeterlidir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yol</th>
                <th className="p-5">Şart</th>
                <th className="p-5">Kimler İçin Uygun</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">1. Yapısal Yol</td>
                <td className="p-5">
                  Ar-Ge merkezi veya tasarım merkezine sahip olmak, ya da
                  teknoparklar bünyesinde Türkiye&apos;de yerleşik sermaye
                  şirketi olmak
                </td>
                <td className="p-5">
                  5746 ve 4691 sayılı Kanunlar kapsamında zaten tescilli
                  Ar-Ge/Tasarım Merkezi veya teknopark şirketleri
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">2. Geçmiş Proje Yolu</td>
                <td className="p-5">
                  TÜBİTAK tarafından desteklenen en az bir projeyi daha önce
                  sonuçlandırmış olmak
                </td>
                <td className="p-5">
                  Ar-Ge/Tasarım Merkezi veya teknopark şirketi olmayan ama
                  örneğin bir 1501/1507 TEYDEB projesini tamamlamış KOBİ&apos;ler
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            &quot;Ar-Ge Merkezimiz olmadığı için TÜBİTAK&apos;ın bu programına
            giremeyiz&quot; demek, çoğu şirketin düştüğü bir yanılgıdır.
            Çağrı metni iki yoldan birini sağlamayı yeterli görüyor: Ar-Ge/
            Tasarım Merkezi veya teknopark şirketi olmak <em>ya da</em> daha
            önce TÜBİTAK destekli bir projeyi (1501, 1507, 1832 gibi
            TEYDEB programlarının herhangi biri dahil) sonuçlandırmış olmak.
            İkincisi, Ar-Ge Merkezi kurmamış ama geçmişte bir TÜBİTAK
            projesini tamamlamış KOBİ&apos;lere de kapıyı açık tutuyor. Diğer
            yandan, 2244&apos;ü TÜBİTAK&apos;ın bireysel burs programı
            2211-A Yurt İçi Doktora Burs Programı ile karıştırmamak gerekir:
            2211-A, öğrencinin doğrudan kendi başvurduğu bireysel bir burs
            programıyken, 2244 şirket-üniversite ortaklığı esaslı kurumsal
            bir proje mekanizmasıdır.
          </p>
        </div>

        <p className="mt-10 mb-6 leading-8 text-gray-700">
          Bunların yanında çağrı metninde yer alan diğer önemli şartlar şöyle:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
            <li>
              Üniversite ile özel sektör kuruluşu arasında, projeye dahil
              öğrencilerin istihdam hedeflerini de içeren bir üniversite-
              sanayi iş birliği protokolü imzalanmış olmalı.
            </li>
            <li>
              Projenin faaliyet alanlarıyla ilgili olmak şartıyla en az
              3 doktora öğrencisi doktora programına dahil olmalı.
            </li>
            <li>
              Bir özel sektör kuruluşu aynı anda en fazla 10 projede aktif
              olarak yer alabilir ve bu projelerdeki toplam öğrenci sayısı
              50&apos;yi aşamaz.
            </li>
            <li>
              Proje yürütücüsü veya akademik danışmanın, ya da bunların
              birinci dereceden akrabalarının ortağı olduğu veya yönetim
              organında ücretli/ücretsiz görev aldığı şirketler programa
              başvuramaz.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. DESTEK TUTARLARI */}
      <section id="destek-tutarlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Tutarları: Burs, PTİ ve İstihdam Desteği
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program üç farklı destek unsurunu bir araya getiriyor. Çağrı
          metninde tutarlar değil hesaplama yöntemleri belirtiliyor; güncel
          TL rakamları TÜBİTAK&apos;ın ayrıca yayımladığı burs miktarları
          sayfasından takip edilmeli.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Kalemi</th>
                <th className="p-5">Kime Ödenir</th>
                <th className="p-5">Hesaplama / Esas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Doktora Bursu</td>
                <td className="p-5">Doktora öğrencisine</td>
                <td className="p-5">
                  TÜBİTAK&apos;ın güncel burs miktarları tarifesine göre aylık
                  ödenir; en az %25&apos;i projeye dahil özel sektör
                  kuruluşu/kuruluşları tarafından karşılanır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Proje Teşvik İkramiyesi (PTİ)</td>
                <td className="p-5">Proje yöneticisi ve akademik danışman(lar)a</td>
                <td className="p-5">
                  TÜBİTAK Yönetim Kurulu tarafından belirlenen tutar;
                  gelişme/sonuç raporlarının kabulüne bağlı dönemsel ödeme
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İstihdam Desteği</td>
                <td className="p-5">Özel sektör kuruluşuna (şirkete)</td>
                <td className="p-5">
                  Personel toplam maliyetinin (brüt ücret + SGK işveren primi
                  + işsizlik sigortası işveren hissesi + varsa ikramiye) en
                  fazla %40&apos;ı, brüt asgari ücretin en fazla 2 katını
                  aşmamak kaydıyla
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru hazırlığında en sık gözden kaçan nokta, istihdam
            desteğinin şirkete otomatik ve koşulsuz ödenmediğidir. Destek,
            yalnızca araştırmacının doktora mezuniyeti sonrasında fiilen
            şirkette istihdam edilmesiyle başlar ve istihdam edilen
            araştırmacının performans kriterlerini karşılamaması halinde
            sonlandırılabilir. Ayrıca aynı araştırmacı için 5746 veya 4691
            sayılı Kanunlar kapsamındaki başka bir teşvikten ya da başka bir
            kamu kurumundan hibe şeklinde destek alınıyorsa, bu tutarlar
            personel toplam maliyetinden düşüldükten sonra kalan kısım
            üzerinden istihdam desteği hesaplanır; yani aynı personel için
            birden fazla teşvik üst üste tam oranda birikmiyor.
          </p>
        </div>
      </section>

      {/* 4. SÜRELER */}
      <section id="sureler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Süreler: Burs, İstihdam ve Proje Süresi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          2026 çağrısında programın süre yapısı, önceki yıllara göre
          güncellendi. Güncel süreler şöyle:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">36 Ay</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Doktora Bursu Süresi</h3>
            <p className="text-gray-700">
              Öğrencinin projeye dahil olduğu dönemden itibaren 36 ay sonunda
              burs sona erer. Doktora derslerinin alınmaya başlandığı
              dönemden itibaren yüksek lisans sonrası doktora için 12,
              bütünleşik doktora için 14 yarıyılı aşılırsa burs ödemesi
              yapılmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">12-36 Ay</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">İstihdam Desteği Süresi</h3>
            <p className="text-gray-700">
              Araştırmacının doktora mezuniyeti sonrası şirkette istihdamı en
              az 12 ay zorunludur. İstihdamın devam etmesi halinde TÜBİTAK
              desteği, mutabakatla en çok 36 aya kadar uzatılabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">72 Ay</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Standart Proje Süresi</h3>
            <p className="text-gray-700">
              Burs ve istihdam desteği dönemleri dahil olmak üzere proje
              süresi en fazla 72 aydır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">108 Ay</div>
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">Uzatılmış Üst Sınır</h3>
            <p className="text-gray-700">
              Proje yöneticisinin gerekçeli talebi halinde, TÜBİTAK Yönetim
              Kurulu (GYK) kararıyla proje süresi en fazla 108 aya kadar
              çıkartılabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci Nasıl İşler?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Şirketlerin en çok şaşırdığı nokta burasıdır: başvuru sahibi ve
          sisteme giriş yapan taraf şirket değil, üniversite/araştırma
          altyapısıdır. Şirketin görevi, süreç başlamadan önce protokolü
          imzalamak ve proje boyunca üzerine düşen yükümlülükleri yerine
          getirmektir.
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Uygun Üniversite/Araştırma Altyapısı Bulma</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Üniversite-Sanayi İş Birliği Protokolü</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Proje Öneri Formunun Hazırlanması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Üniversite Tarafından e-bideb Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Ön İnceleme + Bilimsel Değerlendirme</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Protokol ve Proje Öneri Formu
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket, faaliyet alanıyla uyumlu bir üniversite veya araştırma
            altyapısıyla görüşerek projenin kapsamını, hedef Ar-Ge/yenilik
            konularını ve öğrencilere sağlayacağı imkanları (danışmanlık,
            laboratuvar, ek burs vb.) netleştirir. Bu çerçevede üniversite-
            sanayi iş birliği protokolü imzalanır ve tek başvuru belgesi olan
            Proje Öneri Formu birlikte hazırlanır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. Başvurunun e-bideb Üzerinden Yapılması
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru, çağrı duyurusunda ilan edilen tarihler içinde BİDEB
            Başvuru ve İzleme Sistemi (e-bideb.tubitak.gov.tr) üzerinden,
            üniversite/araştırma altyapısı tarafındaki proje yöneticisi
            tarafından çevrimiçi yapılır. 2026 çağrısında başvurular 22
            Aralık 2026&apos;ya kadar alınıyor; kesin tarihler programın
            resmi sayfasında ayrıca güncellenebileceğinden başvuru öncesi
            teyit edilmesi önerilir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. İki Aşamalı Değerlendirme
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurular önce ön inceleme ile çağrı şartlarına uygunluk
            açısından kontrol edilir, ardından alanında uzman panelist ve
            danışmanlar tarafından bilimsel değerlendirmeye alınır. Bu
            aşamada projenin amaç ve kapsamı, üniversitenin/altyapının
            yetkinliği, şirketin faaliyet alanıyla doktora konularının
            uyumu, projenin kurumsal yönetim ve izleme sistematiği ile
            şirkete sağlayacağı Ar-Ge/yenilik katkısı ayrı ayrı puanlanır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. İzleme ve Raporlama
          </h3>
          <p className="leading-8 text-gray-700">
            Destek kararını izleyen 4 ay içinde proje sözleşmesi
            imzalanmalıdır; sözleşme TÜBİTAK&apos;a ulaştırılana kadar proje
            yürürlüğe girmez. Proje süresince 6 aylık dönemler halinde
            gelişme raporları, proje sonunda ise sonuç raporu sunulur.
            İstihdam desteği alan şirket de 6 aylık dönemlerde, istihdam
            edilen araştırmacının gerçekleştirdiği faaliyetleri içeren
            dönemsel faaliyet raporunu üniversite aracılığıyla TÜBİTAK&apos;a
            iletmekle yükümlüdür.
          </p>
        </div>
      </section>

      {/* 6. KİMLER İÇİN UYGUN */}
      <section id="kimler-icin-uygun" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Hangi Şirket Profilleri İçin Anlamlı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program herkese uygun değil; en çok fayda sağlayacak profiller
          genellikle şunlar:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            Ar-Ge Merkezi veya Tasarım Merkezi&apos;nde, alanında derinlemesine
            uzmanlaşmış kalıcı bir araştırmacı kadrosu kurmak isteyen,
            personel devir hızından rahatsız olan şirketler.
          </li>
          <li>
            Daha önce TÜBİTAK destekli bir proje (1501, 1507 gibi) tamamlamış
            ama Ar-Ge Merkezi kurma eşiğine henüz ulaşmamış KOBİ&apos;ler.
          </li>
          <li>
            Teknopark bünyesinde faaliyet gösteren, üniversiteyle zaten
            organik bir ilişkisi olan yazılım ve teknoloji şirketleri.
          </li>
          <li>
            Belirli bir akademik uzmanlık alanında (örneğin malzeme bilimi,
            yapay zekâ, enerji depolama) çözülmesi doktora düzeyinde derin
            araştırma gerektiren somut bir Ar-Ge sorunu olan üretim
            şirketleri.
          </li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Buna karşılık, kısa vadede (birkaç ay içinde) somut bir ürün
          çıktısı arayan ya da üniversiteyle çok yıllık bir iş birliği
          kurmaya zaman ayıramayacak şirketler için 2244, doğru araç
          olmayabilir; bu profiller için TÜBİTAK&apos;ın 1501/1507 KOBİ
          Ar-Ge projeleri genellikle daha hızlı sonuç verir.
        </p>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuruyu üniversite yapar, şirketin başvuru öncesi
            üniversite/araştırma altyapısı ile protokolünü hazırlamış olması
            gerekir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ En az 3 doktora öğrencisi şartını ve şirket başına 10 proje /
            50 öğrenci üst sınırını önceden kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İstihdam desteğinin koşulsuz olmadığını, mezuniyet sonrası
            fiilen istihdam ve performans kriterlerine bağlı olduğunu unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı personel için başka bir kamu teşviki/hibesi varsa bunun
            istihdam desteği hesabından düşüleceğini bütçenize yansıtın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Burs ödemesinin en az %25&apos;inin şirket tarafından
            karşılanacağını proje bütçenize dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Proje yürütücüsü/danışmanla ortaklık veya yönetim ilişkisi
            bulunan şirketlerin başvuramayacağını göz önünde bulundurun
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://tubitak.gov.tr/tr/duyuru/2244-sanayi-doktora-programi-2026-yili-cagrisi-acildi-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK - 2244 Sanayi Doktora Programı 2026 Yılı Çağrısı Duyurusu
            </a>
          </li>
          <li>
            <a
              href="https://tubitak.gov.tr/sites/default/files/2026-08/2244_Cagri_Metni_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK - 2244 Sanayi Doktora Programı 2026 Çağrı Metni (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.tubitak.gov.tr/tr/burslar/lisansustu/egitim-burs-programlari/2244/icerik-basvuru-tarihleri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK - 2244 Programı İçerik ve Başvuru Tarihleri Sayfası
            </a>
          </li>
          <li>
            <a
              href="https://e-bideb.tubitak.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              TÜBİTAK BİDEB Başvuru ve İzleme Sistemi (e-bideb)
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 2244 Başvuru Şartlarınızı Kaçırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketinizin Ar-Ge Merkezi/Tasarım Merkezi/teknopark şartını mı,
            yoksa geçmiş TÜBİTAK proje şartını mı sağladığını ve üniversite
            iş birliği protokolünün hangi adımlardan geçmesi gerektiğini
            birlikte netleştirebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin destek uygunluğunu ücretsiz ön analizle birlikte
              değerlendirelim
            </Link>{" "}
            veya{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              doğrudan bizimle iletişime geçin.
            </Link>
          </p>
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
              2244 Sanayi Doktora Programı&apos;na şirketim doğrudan
              başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, başvuru üniversite/araştırma altyapısı tarafından proje
              yöneticisi aracılığıyla TÜBİTAK&apos;ın e-bideb sistemi
              üzerinden yapılır. Şirketiniz, üniversite ile imzalanacak
              üniversite-sanayi iş birliği protokolüne taraf olarak projeye
              dahil olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Ar-Ge Merkezimiz veya Tasarım Merkezimiz yoksa 2244&apos;e
              ortak olabilir miyiz?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Ar-Ge/Tasarım Merkezi veya teknopark şirketi olma
              şartının yanında, TÜBİTAK tarafından desteklenen en az bir
              projeyi sonuçlandırmış özel sektör kuruluşları da programa
              ortak olabilir. Yani daha önce örneğin bir 1501 veya 1507
              projesi tamamlamış bir şirket, Ar-Ge Merkezi olmasa da bu
              yoldan başvuru şartını sağlayabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Programdan şirketime ne kadar istihdam desteği sağlanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Doktoralı araştırmacının mezuniyeti sonrasında şirkette
              istihdam edilmesi halinde TÜBİTAK, en fazla 36 ay boyunca
              personel toplam maliyetinin %40&apos;ını, brüt asgari
              ücretin en fazla 2 katını aşmamak kaydıyla şirkete öder.
              Personel toplam maliyeti brüt ücret, SGK işveren primi,
              işsizlik sigortası işveren hissesi ve varsa ikramiye
              ödemelerinin toplamından oluşur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir projeye en az kaç doktora öğrencisi dahil edilmeli?
            </h3>
            <p className="leading-8 text-gray-700">
              Çağrı metnine göre bir üniversite-sanayi iş birliği projesinde,
              projenin faaliyet alanlarıyla ilgili olmak şartıyla en az 3
              doktora öğrencisinin doktora programına dahil olması
              gerekiyor. Aynı özel sektör kuruluşu aynı anda en fazla 10
              projede aktif yer alabilir ve bu projelerdeki toplam öğrenci
              sayısı 50&apos;yi geçemez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Doktora öğrencisi mezun olduktan sonra şirkette çalışma
              zorunluluğu var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Bursiyerin, doktora mezuniyeti sonrasında projede yer
              alan özel sektör kuruluşunda en az 12 ay çalışması zorunludur.
              Bursiyer ile şirket arasındaki mutabakatın sürmesi halinde bu
              süre en çok 36 aya kadar uzatılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026 çağrısına son başvuru tarihi nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              TÜBİTAK&apos;ın 4 Kasım 2026&apos;da açtığı 2026 yılı
              çağrısında başvurular TÜBİTAK Yönetim Bilgi Sistemi (TYBS/
              e-bideb) üzerinden 22 Aralık 2026 tarihine kadar alınıyor.
              Kesin başvuru tarihleri programın resmi internet sayfasında
              ayrıca ilan edildiğinden, başvuru öncesi güncel tarihin teyit
              edilmesi önerilir.
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
          TÜBİTAK 2244 Sanayi Doktora Programı, Ar-Ge Merkezi kurmuş
          şirketler için olduğu kadar, geçmişte bir TÜBİTAK projesi
          tamamlamış ama henüz bu eşiğe ulaşmamış KOBİ&apos;ler için de
          gerçek bir fırsat sunuyor. İşin özü şu: şirketinizin başvuruyu
          kendisi yapmayacağını, doğru üniversite ortağını bulmanın ve
          protokolü başvuru takviminden önce hazırlamanın kritik olduğunu
          baştan kabul etmek gerekiyor. 22 Aralık 2026 son başvuru tarihine
          kadar bu süreci planlayan şirketler, hem güncel bir Ar-Ge
          sorununu çözecek hem de mezuniyet sonrası doğrudan istihdam
          edebilecekleri bir araştırmacıyı TÜBİTAK desteğiyle yetiştirmiş
          olacaklar.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">AR-GE MERKEZİ • 5746 SAYILI KANUN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ar-Ge Merkezi Nedir? Nasıl Kurulur?</h3>
          </Link>
          <Link
            href="/blog/teknopark-nedir-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TEKNOPARK • AR-GE • YAZILIM</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Teknopark Nedir? Avantajları ve Başvuru Rehberi</h3>
          </Link>
          <Link
            href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • TEYDEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"2244 Sanayi Doktora Programı'na şirketim doğrudan başvurabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, başvuru üniversite/araştırma altyapısı tarafından proje yöneticisi aracılığıyla TÜBİTAK'ın e-bideb sistemi üzerinden yapılır. Şirketiniz, üniversite ile imzalanacak üniversite-sanayi iş birliği protokolüne taraf olarak projeye dahil olur."}},{"@type":"Question","name":"Ar-Ge Merkezimiz veya Tasarım Merkezimiz yoksa 2244'e ortak olabilir miyiz?","acceptedAnswer":{"@type":"Answer","text":"Evet. Ar-Ge/Tasarım Merkezi veya teknopark şirketi olma şartının yanında, TÜBİTAK tarafından desteklenen en az bir projeyi sonuçlandırmış özel sektör kuruluşları da programa ortak olabilir. Yani daha önce örneğin bir 1501 veya 1507 projesi tamamlamış bir şirket, Ar-Ge Merkezi olmasa da bu yoldan başvuru şartını sağlayabilir."}},{"@type":"Question","name":"Programdan şirketime ne kadar istihdam desteği sağlanır?","acceptedAnswer":{"@type":"Answer","text":"Doktoralı araştırmacının mezuniyeti sonrasında şirkette istihdam edilmesi halinde TÜBİTAK, en fazla 36 ay boyunca personel toplam maliyetinin %40'ını, brüt asgari ücretin en fazla 2 katını aşmamak kaydıyla şirkete öder. Personel toplam maliyeti brüt ücret, SGK işveren primi, işsizlik sigortası işveren hissesi ve varsa ikramiye ödemelerinin toplamından oluşur."}},{"@type":"Question","name":"Bir projeye en az kaç doktora öğrencisi dahil edilmeli?","acceptedAnswer":{"@type":"Answer","text":"Çağrı metnine göre bir üniversite-sanayi iş birliği projesinde, projenin faaliyet alanlarıyla ilgili olmak şartıyla en az 3 doktora öğrencisinin doktora programına dahil olması gerekiyor. Aynı özel sektör kuruluşu aynı anda en fazla 10 projede aktif yer alabilir ve bu projelerdeki toplam öğrenci sayısı 50'yi geçemez."}},{"@type":"Question","name":"Doktora öğrencisi mezun olduktan sonra şirkette çalışma zorunluluğu var mı?","acceptedAnswer":{"@type":"Answer","text":"Evet. Bursiyerin, doktora mezuniyeti sonrasında projede yer alan özel sektör kuruluşunda en az 12 ay çalışması zorunludur. Bursiyer ile şirket arasındaki mutabakatın sürmesi halinde bu süre en çok 36 aya kadar uzatılabilir."}},{"@type":"Question","name":"2026 çağrısına son başvuru tarihi nedir?","acceptedAnswer":{"@type":"Answer","text":"TÜBİTAK'ın 4 Kasım 2026'da açtığı 2026 yılı çağrısında başvurular TÜBİTAK Yönetim Bilgi Sistemi (TYBS/e-bideb) üzerinden 22 Aralık 2026 tarihine kadar alınıyor. Kesin başvuru tarihleri programın resmi internet sayfasında ayrıca ilan edildiğinden, başvuru öncesi güncel tarihin teyit edilmesi önerilir."}}]}) }}
      />
    </BlogLayout>
  );
}
