import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Konkordato Nedir? Nasıl Başvurulur? 2026 Gider Avansı Tarifesi ve Güncel Süreç Rehberi | Koray Akdağ",
  description:
    "26 Ağustos 2026'da Resmî Gazete'de yayımlanan yeni Konkordato Gider Avansı Tarifesi ile mahkemeye yatırılacak avans tutarları güncellendi. Konkordato nedir, kimler başvurabilir, geçici/kesin mühlet süreci, alacaklılar toplantısı nisabı ve konkordato ön projesinde mali tabloların rolüyle 2026 güncel rehber.",
  keywords: [
    "konkordato nedir",
    "konkordato nasıl başvurulur",
    "konkordato gider avansı tarifesi 2026",
    "konkordato süreci",
    "geçici mühlet kesin mühlet",
    "konkordato ön projesi",
    "şirket borç yapılandırma",
    "konkordato komiseri ücreti 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Konkordato Nedir? Nasıl Başvurulur? 2026 Gider Avansı Tarifesi ve Güncel Süreç Rehberi"
      description="26 Ağustos 2026'da Resmî Gazete'de yayımlanan yeni Konkordato Gider Avansı Tarifesi, mahkemeye yatırılacak avans tutarlarını güncelledi. Konkordato nedir, kimler başvurabilir, geçici/kesin mühlet süreci nasıl işler ve konkordato ön projesinde mali tabloların rolü nedir? Güncel rakamlarla kapsamlı rehber."
      category="ŞİRKETLER HUKUKU • KONKORDATO • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="konkordato-nedir-basvuru-sureci-2026"
      coverImage="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          26 Ağustos 2026 tarihli ve 33352 sayılı Resmî Gazete&apos;de
          yayımlanan yeni <strong>Konkordato Gider Avansı Tarifesi</strong>,
          bir önceki yılın tarifesini yürürlükten kaldırarak mahkeme
          veznesine yatırılacak avans kalemlerini yeniden belirledi. Nakit
          akışı sıkışan ama iyileşme ihtimali taşıyan şirketler için
          konkordato, iflasa alternatif önemli bir yeniden yapılanma aracı.
          Bu rehberde konkordatonun ne olduğunu, sürecin nasıl işlediğini ve
          2026&apos;da güncellenen rakamları bir arada bulacaksınız.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Konkordato nedir, hangi kanuna dayanır?</li>
          <li>✔ 2026&apos;da güncellenen gider avansı tarifesi ne kadar?</li>
          <li>✔ Kimler konkordatoya başvurabilir?</li>
          <li>✔ Geçici mühlet - kesin mühlet süreci adım adım nasıl işler?</li>
          <li>✔ Konkordato ön projesinde mali tabloların rolü nedir?</li>
          <li>✔ Konkordato şirkete ne gibi sonuçlar doğurur?</li>
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
            1. Konkordato Nedir, Hangi Kanuna Dayanır?
          </Link>
          <Link href="#tarife" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 2026 Gider Avansı Tarifesinde Neler Değişti?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Konkordatoya Başvurabilir?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Konkordato Süreci Adım Adım
          </Link>
          <Link href="#onproje" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Konkordato Ön Projesi ve Mali Tabloların Rolü
          </Link>
          <Link href="#sonuclar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Konkordato Şirkete Ne Gibi Sonuçlar Doğurur?
          </Link>
          <Link href="#alternatif" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Konkordato mu, Başka Bir Yeniden Yapılandırma mı?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#biz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Mali Hazırlık Sürecinde Yanınızdayız
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
          1. Konkordato Nedir, Hangi Kanuna Dayanır?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Konkordato, mali durumu bozulmuş ama iyileşme ihtimali bulunan bir
          borçlunun, alacaklılarının belirli bir çoğunluğuyla mahkeme
          gözetiminde anlaşarak borçlarını yeniden yapılandırmasına imkân
          tanıyan bir yeniden yapılanma müessesesi. Amaç, şirketi
          doğrudan iflasa sürüklemeden faaliyetine devam etmesini sağlamak
          ve alacaklıların da iflas halinde eline geçecek tutardan daha
          iyi bir sonuç almasını mümkün kılmak.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Kurumun yasal dayanağı, 9 Haziran 1932 tarihli ve 2004 sayılı
          İcra ve İflas Kanunu&apos;nun (İİK) 285 ila 309&apos;uncu
          maddeleri arasında düzenlenen &quot;Konkordato ve Sermaye
          Şirketleri ile Kooperatiflerin Uzlaşma Yoluyla Yeniden
          Yapılandırılması&quot; bölümü. Kurum, 2018 yılında 7101 sayılı
          Kanun ile önemli ölçüde yeniden düzenlendi; bu değişiklikle
          birlikte iflas erteleme müessesesi kaldırılarak, mali sıkıntı
          içindeki şirketler için konkordato tek ve daha şeffaf bir
          yeniden yapılanma yolu haline geldi.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Konkordato Neden Gündemde?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Yüksek faiz ve finansmana erişim maliyetleri, nakit akışı sıkışan şirket sayısını artırıyor</li>
            <li>✔ İflas erteleme kaldırıldığından, konkordato bugün tek resmî &quot;moratoryum&quot; aracı konumunda</li>
            <li>✔ Mahkeme sürecine yatırılacak gider avansı tutarları her yıl yeniden belirleniyor; 2026 tarifesi 26 Ağustos&apos;ta yayımlandı</li>
            <li>✔ Süreç, doğru mali tablo ve nakit akış planlamasıyla yürütülmezse başarısızlık riski yüksek</li>
          </ul>
        </div>
      </section>

      {/* 2. TARİFE */}
      <section id="tarife" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026 Gider Avansı Tarifesinde Neler Değişti?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İİK madde 285/4 uyarınca, konkordato talebinde bulunan borçlu,
          mahkeme veznesine tebligat ve posta ücretleri, bilirkişi ve
          konkordato komiseri ücretleri, ilan giderleri ile iflasa tabi
          borçlular için iflas masrafını karşılayacak bir gider avansı
          yatırmak zorunda. Bu tutarlar her yıl Adalet Bakanlığı
          tarafından yeniden belirleniyor. 26 Ağustos 2026 tarihli ve
          33352 sayılı Resmî Gazete&apos;de yayımlanan yeni tarife, 16
          Ağustos 2025 tarihli (32988 sayılı) bir önceki tarifeyi
          yürürlükten kaldırarak yayım tarihinde yürürlüğe girdi.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Gider Kalemi</th>
                <th className="p-5">2026 Tutarı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İlan giderleri (asgari)</td>
                <td className="p-5">2.600 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Konkordato komiseri ücreti (asgari, beş aylık)</td>
                <td className="p-5">3.380 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İflasa tabi borçlularda iflas masrafı</td>
                <td className="p-5">68.900 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Diğer işler</td>
                <td className="p-5">1.690 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bilirkişi ücreti</td>
                <td className="p-5">Bilirkişilik asgari ücret tarifesinin 3 katı</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Tebligat gideri</td>
                <td className="p-5">Alacaklı sayısının 3 katı tutarında tebligat ücreti</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Toplam gider avansı, alacaklı sayısına, dosyanın büyüklüğüne ve
            atanacak komiser/bilirkişi sayısına göre değişkenlik gösterir;
            yukarıdaki kalemler birer asgari referans niteliğindedir.
            Rakamlar her yıl güncellendiği için, başvuru öncesinde güncel
            tarifenin ilgili Resmî Gazete metninden teyit edilmesi önemli.
          </p>
        </div>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Konkordatoya Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Konkordato, yalnızca büyük ölçekli şirketlere özgü bir müessese
          değil. İİK, borcunu vadesinde ödeyemeyen veya ödeyememe
          tehlikesi altında bulunan her borçluya (gerçek veya tüzel kişi)
          konkordato talep etme hakkı tanıyor.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              🔴 Tipik Başvuru Profili
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Nakit akışı bozulmuş ama faaliyetine devam edebilecek ticari işletmeler</li>
              <li>✔ Kısa vadeli borç yükü, uzun vadeli ödeme kapasitesinin üzerinde kalan şirketler</li>
              <li>✔ İflas yerine faaliyeti sürdürerek borç kapatmayı hedefleyen anonim/limited şirketler</li>
              <li>✔ Belirli bir alacaklı grubuyla (banka, tedarikçi) mutabakat sağlanamayan işletmeler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🟢 Konkordato İyileşme İhtimali Gerektirir
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Mahkeme, projenin ciddi ve inandırıcı olup olmadığını inceler</li>
              <li>✔ Amaç tasfiye değil, borcun yeniden yapılandırılarak faaliyetin sürdürülmesidir</li>
              <li>✔ İyileşme ihtimali görülmezse mahkeme talebi reddedebilir veya iflasa karar verebilir</li>
              <li>✔ Bu nedenle başvuru öncesi gerçekçi bir mali projeksiyon hazırlanması kritik önemde</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Konkordato Süreci Adım Adım
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Konkordato, belirli aşamalardan oluşan mahkeme denetimli bir
          süreç. Süreç boyunca borçlunun mali durumu ve ödeme planı,
          mahkemenin atadığı bir komiser gözetiminde değerlendirilir.
        </p>

        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-base font-bold">Başvuru</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-base font-bold">Geçici Mühlet</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-base font-bold">Kesin Mühlet</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-base font-bold">Alacaklılar Toplantısı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-base font-bold">Tasdik</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Başvuru ve Geçici Mühlet
          </h3>
          <p className="leading-8 text-gray-700">
            Borçlu, konkordato ön projesi ve mali durumunu gösteren
            belgelerle birlikte yetkili asliye ticaret mahkemesine başvurur.
            Mahkeme, belgeleri yeterli bulursa borçluya <strong>üç aylık
            geçici mühlet</strong> verir; borçlu veya geçici komiserin
            talebiyle bu süre en fazla iki ay daha uzatılabilir, yani
            geçici mühlet toplamda beş ayı geçemez. Bu dönemde bir geçici
            komiser atanır ve borçlu aleyhine yeni icra takibi
            başlatılamaz.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Kesin Mühlet
          </h3>
          <p className="leading-8 text-gray-700">
            Geçici mühlet süresince yapılan inceleme sonunda konkordatonun
            başarıya ulaşma ihtimalinin bulunduğu anlaşılırsa mahkeme
            borçluya <strong>bir yıllık kesin mühlet</strong> verir. Bu
            süre gerektiğinde altı ay daha uzatılabilir. Kesin mühlet
            döneminde bir veya birden fazla komiser görev yapar; komiser
            borçlunun işlemlerini denetler ve alacaklılarla müzakere
            sürecini yürütür.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Alacaklılar Toplantısı ve Oylama
          </h3>
          <p className="leading-8 text-gray-700">
            Komiser, alacaklıları toplantıya çağırarak konkordato
            projesini görüşmeye açar. İİK madde 302 uyarınca proje, (a)
            kayıtlı alacaklıların ve alacak tutarının yarısını aşan bir
            çoğunluk ya da (b) kayıtlı alacaklıların dörtte birini ve
            alacak tutarının üçte ikisini aşan bir çoğunluk tarafından
            imzalanırsa kabul edilmiş sayılır. Rehinli ve imtiyazlı
            alacaklılar bu oylamaya dahil edilmez.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Tasdik ve Uygulama
          </h3>
          <p className="leading-8 text-gray-700">
            Kabul edilen proje, mahkemenin tasdik incelemesine sunulur.
            Mahkeme; alacaklıların menfaatlerinin korunup korunmadığını,
            teklif edilen tutarın iflas halinde alacaklıların eline
            geçecek tutardan az olmadığını ve kanunda öngörülen diğer
            koşulların sağlandığını inceleyerek konkordatoyu tasdik eder
            ya da reddeder. Tasdik kararıyla birlikte konkordato şartları
            tüm alacaklılar için bağlayıcı hale gelir ve borçlu, ödeme
            planına göre borçlarını taksitler halinde kapatmaya başlar.
          </p>
        </div>
      </section>

      {/* 5. ÖN PROJE */}
      <section id="onproje" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Konkordato Ön Projesi ve Mali Tabloların Rolü
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Konkordato başvurusunun kabul edilip edilmeyeceğini büyük ölçüde
          belirleyen unsur, hukuki dilekçeden çok, ekindeki mali
          belgelerin kalitesi. Mahkemeye sunulması gereken temel belgeler
          şunlardır:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Konkordato Ön Projesinde Aranan Belgeler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Ödeme planını içeren konkordato ön projesi:</strong>{" "}
              alacaklılara hangi oranda, hangi vadede ödeme yapılacağını
              somut biçimde ortaya koyar.
            </li>
            <li>
              <strong>Mali durumu gösteren belgeler:</strong> bilanço,
              gelir tablosu, ara bilançolar ve nakit akış tabloları.
            </li>
            <li>
              <strong>Alacaklıları ve alacak tutarlarını gösteren liste:</strong>{" "}
              hangi alacaklının imtiyazlı, hangisinin rehinli olduğu ayrı
              ayrı belirtilir.
            </li>
            <li>
              <strong>Karşılaştırmalı tablo:</strong> borçlunun iflası
              halinde alacaklıların eline geçecek tutar ile konkordato
              halinde eline geçecek tutarı karşılaştırır; bu tablo
              mahkemenin tasdik incelemesinde belirleyici bir rol oynar.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu belgelerin gerçekçi varsayımlara dayanması, şirketin fiili
          nakit akışını yansıtması ve iyileşme ihtimalini inandırıcı
          biçimde ortaya koyması gerekiyor. Zayıf hazırlanmış bir mali
          projeksiyon, hem geçici mühlet aşamasında reddedilme hem de
          alacaklıların projeye onay vermeme riskini artırıyor.
        </p>
      </section>

      {/* 6. SONUÇLAR */}
      <section id="sonuclar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Konkordato Şirkete Ne Gibi Sonuçlar Doğurur?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              İcra Takiplerinin Durması
            </h3>
            <p className="leading-7 text-gray-700">
              Geçici ve kesin mühlet süresince borçlu aleyhine yeni icra
              takibi başlatılamaz, mevcut takipler durur; rehinli
              alacaklar ve bazı istisnai alacak türleri bu kuraldan
              bağımsız işleyebilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Faaliyetin Sürdürülmesi
            </h3>
            <p className="leading-7 text-gray-700">
              İflasın aksine konkordato, şirketin ticari faaliyetini
              devam ettirmesine imkân tanır; önemli işlemler komiserin
              onayına veya bilgisine tabi olabilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ticari İtibar Etkisi
            </h3>
            <p className="leading-7 text-gray-700">
              Konkordato ilanı kamuya açık şekilde yapılır; tedarikçi,
              banka ve müşteri ilişkilerinde şeffaf bir iletişim
              planlaması gerektirir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">
              Ödeme Planının Bağlayıcılığı
            </h3>
            <p className="leading-7 text-gray-700">
              Tasdik edilen proje, onay vermeyen alacaklılar dahil tüm
              alacaklılar için bağlayıcı hale gelir; plana uyulmaması
              konkordatonun feshi ve iflas riskini doğurabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 7. ALTERNATİF */}
      <section id="alternatif" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Konkordato mu, Başka Bir Yeniden Yapılandırma mı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Konkordato, mahkeme denetiminde ve tüm alacaklıları bağlayan
          resmî bir süreç olduğu için her mali sıkıntı durumunda ilk
          tercih olmayabilir. Şirketin durumuna göre değerlendirilebilecek
          başka yollar da var:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yöntem</th>
                <th className="p-5">Ne Zaman Değerlendirilir?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bankalarla / kredi verenlerle özel müzakere</td>
                <td className="p-5">Sınırlı sayıda alacaklıyla, mahkeme sürecine girmeden vade/faiz revizyonu mümkünse</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sermaye şirketlerinin borç yapılandırması (İİK 308/e vd.)</td>
                <td className="p-5">Şirket iyileştirme projesiyle belirli kredi kuruluşlarıyla yapılandırma hedefleniyorsa</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Konkordato</td>
                <td className="p-5">Çok sayıda ve çeşitli alacaklıyla, mahkeme gözetiminde bağlayıcı bir çözüm gerekiyorsa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Hangi yolun uygun olduğu, şirketin alacaklı yapısına, borç
          vadesine ve nakit akış projeksiyonuna göre değişir. Bu nedenle
          adım atmadan önce güncel mali tablolar üzerinden gerçekçi bir
          durum analizi yapılması gerekiyor.
        </p>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Başvuru öncesi güncel Resmî Gazete tarifesinden avans tutarlarını teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ön projedeki mali tabloları gerçekçi ve güncel verilerle hazırlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Karşılaştırmalı tabloyu (iflas senaryosu vs. konkordato senaryosu) somut verilerle destekleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Alacaklı listesini eksiksiz ve güncel tutun; eksik bildirim süreci geciktirir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Rehinli ve imtiyazlı alacaklıları oylama nisabından ayrı değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Mühlet süresince komiserle şeffaf ve düzenli bilgi akışı sağlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Tasdik sonrası ödeme planına uyumu, düzenli nakit akış takibiyle güvence altına alın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Süreç öncesinde konkordatonun tek seçenek olup olmadığını mutlaka değerlendirin
          </div>
        </div>
      </section>

      {/* 9. BİZ */}
      <section id="biz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Mali Hazırlık Sürecinde Yanınızdayız
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Mali Tablo, Nakit Akış ve Borç Yapılandırma Analizi Tek Elden
          </h3>
          <p className="leading-8 text-gray-700">
            Konkordato ön projesinin ikna ediciliği, büyük ölçüde
            güvenilir mali tablolara ve gerçekçi bir nakit akış
            projeksiyonuna dayanır. Koray Akdağ / Sistem Global Danışmanlık
            olarak şirketinizin mevcut mali durumunun analizi, nakit akış
            projeksiyonu, karşılaştırmalı tablo hazırlığı ve borç
            yapılandırma stratejisi gibi süreçlerde yanınızda oluyor,
            ayrı bir mali müşavir aramanıza gerek kalmadan mevcut
            danışmanlık ilişkinizin bir uzantısı olarak destek
            sağlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin mevcut mali durumunu birlikte değerlendirmek
              için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
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
              Konkordato ile iflas erteleme aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. İflas erteleme müessesesi 2018 yılında 7101 sayılı
              Kanun ile kaldırıldı. Bugün Türk hukukunda mali sıkıntı
              içindeki şirketler için temel yeniden yapılanma aracı
              konkordatodur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Konkordato süresince şirket faaliyetine devam edebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Konkordatonun temel amacı, şirketin faaliyetini
              sürdürerek borçlarını yapılandırmasıdır. Ancak önemli
              işlemler, mühlet süresince atanan komiserin onayına veya
              bilgisine tabi olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026 gider avansı tarifesi tüm başvurular için aynı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Tarifede yer alan tutarlar asgari referans niteliğinde;
              toplam avans, alacaklı sayısı, dosyanın kapsamı ve atanacak
              komiser/bilirkişi sayısına göre değişebilir. Kesin tutar,
              başvuru sırasında mahkeme tarafından belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Konkordato başvurusu alacaklıların onayı olmadan sonuçlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Projenin yürürlüğe girmesi için İİK madde 302&apos;de
              tanımlanan nisaplardan birinin (alacaklı ve alacak
              tutarının yarısı, ya da alacaklı sayısının dörtte biri ve
              alacak tutarının üçte ikisi) sağlanması ve ardından
              mahkemenin tasdik incelemesinden geçmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Konkordato süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Geçici mühlet en fazla beş ay, kesin mühlet ise bir yıl
              olup gerektiğinde altı ay uzatılabilir. Buna göre toplam
              süreç, dosyanın kapsamına bağlı olarak bir yıl ile bir buçuk
              yıl arasında değişebilir.
            </p>
          </div>
        </div>
      </section>

      {/* 11. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Konkordato, mali sıkıntı içindeki şirketler için iflasa alternatif,
          mahkeme denetiminde yürütülen ciddi bir yeniden yapılanma aracı.
          26 Ağustos 2026&apos;da güncellenen gider avansı tarifesi, sürecin
          idari yükünü hatırlatırken, başvurunun başarısı büyük ölçüde
          hazırlanan mali tabloların ve ödeme planının gerçekçiliğine
          bağlı kalıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin mali durumunu değerlendirmekten nakit akış
          projeksiyonu ve borç yapılandırma stratejisi hazırlığına kadar
          tüm süreçte Koray Akdağ / Sistem Global Danışmanlık olarak
          yanınızdayız. Mevcut mali tablolarınızı birlikte değerlendirmek
          için bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </BlogLayout>
  );
}
