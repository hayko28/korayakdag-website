import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Singapur'da Şirket Nasıl Kurulur? 2026 Rehberi | Koray Akdağ",
  description: "Singapur'da Pte Ltd kuruluşu, ACRA/BizFile tescili, zorunlu yerel direktör şartı, %17 kurumlar vergisi ve muafiyetlerle 2026 rehberi.",
  keywords: [
    "singapurda şirket kurma",
    "pte ltd nasıl kurulur",
    "acra bizfile şirket tescili",
    "singapur yerel direktör zorunluluğu",
    "nominee director singapur",
    "singapur kurumlar vergisi",
    "singapur gst oranı",
    "2026 singapur şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Singapur'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="Pte Ltd şirket türü, ACRA/BizFile tescil süreci, zorunlu yerel direktör şartı ve nominee director çözümü, %17 kurumlar vergisi ile SUTE/PTE muafiyetleri, %9 GST, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Singapur rehberi."
      category="YURT DIŞI ŞİRKET • SİNGAPUR • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="singapurda-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur, dünya çapında en hızlı ve en şeffaf şirket kuruluş
          süreçlerinden birine, bölgesel ticaret merkezi konumuna ve güçlü
          fikri mülkiyet (IP) korumasına sahip olmasıyla Türk girişimciler ve
          ihracatçılar için ASEAN pazarına açılan doğal bir kapı konumundadır.
          Ancak yabancı ortaklı bir Pte Ltd kurmak, tek bir kritik şart olan
          yerel direktör zorunluluğu başta olmak üzere, doğru planlama
          gerektiren bazı özel kurallara tabidir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Private Limited Company (Pte Ltd) neden neredeyse tek tercih?</li>
          <li>✔ ACRA/BizFile üzerinden 1-3 günde tamamlanan tescil süreci</li>
          <li>✔ Zorunlu yerel direktör şartı ve nominee director çözümü</li>
          <li>✔ Güncel %17 kurumlar vergisi ve SUTE/PTE muafiyetleri</li>
          <li>✔ %9 GST (KDV) oranı ve kayıt eşiği</li>
          <li>✔ Banka hesabı açma sürecinin gerçekçi tablosu</li>
          <li>✔ Türkiye tarafındaki bildirim yükümlülükleri ve teşvikler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-singapur" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Singapur&apos;da Şirket Kurmalısınız?
          </Link>
          <Link href="#pte-ltd" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Pte Ltd Nedir? Şirket Türleri
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Adım Adım Kuruluş Süreci (ACRA/BizFile)
          </Link>
          <Link href="#yerel-direktor" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yerel Direktör Zorunluluğu ve Nominee Director
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Vergi Sistemi ve Oranlar
          </Link>
          <Link href="#banka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Banka Hesabı Açma Süreci
          </Link>
          <Link href="#turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN SİNGAPUR */}
      <section id="neden-singapur" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Singapur&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur, Singapur Ekonomik Kalkınma Kurulu&apos;nun (EDB) da
          öncelikli konumlandırdığı gibi, ASEAN&apos;ın 600 milyondan fazla
          nüfuslu pazarına ve Asya-Pasifik&apos;e açılan bölgesel bir üs
          olarak konumlanır. İstikrarlı hukuk sistemi, geniş serbest ticaret
          anlaşması ağı ve dünyanın en güçlü fikri mülkiyet koruma
          rejimlerinden biri, Singapur&apos;u sadece bir vergi avantajı değil,
          gerçek bir operasyonel üs haline getirir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌏</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ASEAN&apos;a Açılan Kapı
            </h3>
            <p className="text-gray-700">
              Singapur merkezli bir şirket; Endonezya, Malezya, Vietnam ve
              Tayland dahil ASEAN pazarına ve 25&apos;in üzerinde serbest
              ticaret anlaşmasına erişim sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Dünyanın En Hızlı Tescil Süreçlerinden Biri
            </h3>
            <p className="text-gray-700">
              ACRA/BizFile üzerinden yapılan başvurular çoğu durumda 1-3 iş
              günü içinde, tamamen dijital olarak sonuçlanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🔒</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Güçlü Fikri Mülkiyet Koruması
            </h3>
            <p className="text-gray-700">
              Singapur, Asya&apos;da IP (fikri mülkiyet) korumasında en üst
              sıralarda yer alır; marka, patent ve know-how&apos;ın
              korunması ciddiye alınan bir öncelik olarak işler.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PTE LTD */}
      <section id="pte-ltd" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Pte Ltd Nedir? Şirket Türleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur mevzuatında birden fazla şirket türü tanımlansa da,
          yabancı yatırımcıların neredeyse tamamı{" "}
          <strong>Private Limited Company (Pte Ltd)</strong> yapısını
          tercih eder. Bunun nedeni sınırlı sorumluluk (limited liability),
          %100 yabancı ortaklığa açık olması ve kurumsal itibarının yüksek
          olmasıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yapı</th>
                <th className="p-5">Sorumluluk</th>
                <th className="p-5">Yabancı Yatırımcı İçin Uygunluk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Private Limited Company (Pte Ltd)</td>
                <td className="p-5">Sınırlı (sermaye payı kadar)</td>
                <td className="p-5">Standart tercih; %100 yabancı ortaklık mümkün, ayrı tüzel kişilik</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sole Proprietorship / Partnership</td>
                <td className="p-5">Sınırsız</td>
                <td className="p-5">Yalnızca Singapur ikametli kişiler için pratik; kurumsal yapılanmaya uygun değil</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Branch Office (Şube)</td>
                <td className="p-5">Ana şirket üzerinden sınırsız</td>
                <td className="p-5">Yurt dışındaki ana şirketin doğrudan uzantısı; ayrı tüzel kişilik değil</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Representative Office</td>
                <td className="p-5">Ticari faaliyet yapamaz</td>
                <td className="p-5">Yalnızca pazar araştırması amaçlı, gelir üretemez, geçici bir yapı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte gerçek ticari faaliyet planlayan, banka hesabı açmak,
            fatura kesmek ve vergi avantajlarından yararlanmak isteyen her
            yabancı girişimci için doğru yapı Pte Ltd&apos;dir. Bu rehberin
            devamı da Pte Ltd kuruluşu üzerinden ilerlemektedir.
          </p>
        </div>
      </section>

      {/* 3. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Adım Adım Kuruluş Süreci (ACRA/BizFile)
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Singapur&apos;da şirket kuruluşu, Şirketler Sicili ve Muhasebe
          Kurumu&apos;nun (ACRA) dijital platformu BizFile+ üzerinden
          yürütülür. Belgeler eksiksiz ve yerel direktör hazır olduğunda,
          isim onayından tescile kadar tüm süreç genellikle 1-3 iş günü
          içinde tamamlanır; bu da Singapur&apos;u dünyanın en hızlı şirket
          kuruluş yargı bölgelerinden biri yapar.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Şirket Adı Onayı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Yerel Direktör & Belgeler</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">BizFile+ Tescil Başvurusu</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Sekreter, Banka & Vergi Kaydı</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.1. Şirket Adının Onaylanması
          </h3>
          <p className="leading-8 text-gray-700">
            İlk adım, önerilen şirket isminin ACRA tarafından onaylanmasıdır.
            İsim onayı, benzersiz ve müstehcen/yanıltıcı olmayan isimler için
            genellikle dakikalar içinde, bazen otomatik olarak
            gerçekleşir; belirli anahtar kelimeler içeren isimler ilgili
            düzenleyici kuruma (örneğin eğitimle ilgili isimler Eğitim
            Bakanlığı&apos;na) yönlendirilebilir ve bu durumda süreç 14-60
            güne kadar uzayabilir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.2. Yerel Direktör Ataması ve Kurumsal Belgelerin Hazırlanması
          </h3>
          <p className="leading-8 text-gray-700">
            En az bir hissedar (gerçek veya tüzel kişi, %100 yabancı olabilir),
            en az bir yerel direktör ve şirketin kuruluş sözleşmesi
            (Constitution) hazırlanır. Yerel direktör şartı, bu rehberin 4.
            bölümünde ayrıca detaylandırılmıştır. Asgari ödenmiş sermaye
            şartı yalnızca sembolik 1 Singapur Doları&apos;dır (SGD);
            pratikte çoğu şirket 1.000-10.000 SGD aralığında bir sermaye ile
            kurulur.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.3. BizFile+ Üzerinden Tescil Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Kuruluş belgeleri, hissedar ve direktör bilgileri, kayıtlı ofis
            adresi (Singapur&apos;da fiziksel bir adres) ile birlikte
            BizFile+ üzerinden ACRA&apos;ya sunulur. Standart başvuru ücreti
            15 SGD isim başvurusu ve 300 SGD tescil ücreti olmak üzere
            toplam 315 SGD&apos;dir. Başvuru vekâletle yürütülebildiğinden
            hissedarların Singapur&apos;da fiziken bulunması gerekmez.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.4. Şirket Sekreteri, Banka Hesabı ve Vergi Kaydı
          </h3>
          <p className="leading-8 text-gray-700">
            Tescilin ardından, Singapur Şirketler Kanunu (Companies Act)
            gereği kuruluştan itibaren <strong>6 ay içinde</strong> Singapur
            ikametli, nitelikli bir şirket sekreteri (company secretary)
            atanmalıdır. Ardından IRAS nezdinde kurumlar vergisi kaydı
            yapılır, kurumsal banka hesabı açılış süreci başlatılır ve
            faaliyet konusuna göre gerekli ek lisanslar (varsa) tamamlanır.
          </p>
        </div>
      </section>

      {/* 4. YEREL DİREKTÖR */}
      <section id="yerel-direktor" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yerel Direktör Zorunluluğu ve Nominee Director Hizmeti
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur mevzuatının yabancı girişimciler için en kritik
          kısıtlaması budur: Şirketler Kanunu&apos;nun 145. maddesi
          gereği, her Singapur şirketinin en az bir{" "}
          <strong>Singapur ikametli (ordinarily resident) direktörü</strong>{" "}
          bulunmak zorundadır. Bu şart sağlanmadan şirket tescil edilemez.
        </p>

        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🧑‍⚖️ Yerel İkametli Direktör Kimler Olabilir?
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>Singapur vatandaşı (Singapore Citizen)</li>
            <li>Singapur daimi ikamet sahibi (Permanent Resident / PR)</li>
            <li>
              Geçerli bir Employment Pass (EP) sahibi olup, Çalışma Bakanlığı
              (MOM) tarafından verilen Onay Mektubu&apos;na (Letter of
              Consent) sahip kişiler — ancak bu yol yalnızca şirket
              tescilinden <em>sonra</em> işletilebilir; kuruluş anında EP
              sahibi bir direktör atanamaz.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Nominee Director (Kiralık/Vekil Direktör) Çözümü
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yerleşik bir girişimcinin Singapur&apos;da
            fiziken ikamet eden bir ortağı yoksa, pratikte çözüm{" "}
            <strong>nominee director</strong> hizmeti almaktır: ACRA
            tarafından yetkilendirilmiş bir kurumsal hizmet sağlayıcı
            (Corporate Service Provider / CSP), yalnızca yasal ikamet
            şartını karşılamak amacıyla şirkete bir yerel direktör atar. Bu
            kişi şirketin operasyonel yönetimine veya banka yetkilerine
            karışmaz; yetkiler sözleşmeyle sınırlandırılır ve genellikle
            şirketin gerçek hissedarları adına imzalanan bir ibra/teminat
            sözleşmesiyle (indemnity) güvence altına alınır. 9 Haziran
            2025&apos;te yürürlüğe giren CSP Yasası kapsamında, nominee
            director hizmeti veren kişilerin ACRA tarafından &quot;fit and
            proper&quot; (uygun ve yeterli) olarak değerlendirilmesi
            zorunlu hale gelmiştir; bu da hizmetin yalnızca lisanslı,
            denetlenen sağlayıcılar üzerinden alınmasını önemli kılar.
          </p>
        </div>
      </section>

      {/* 5. VERGİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve Oranlar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur&apos;un vergi sistemi, tek bir düz kurumlar vergisi oranı
          ile yeni kurulan şirketlere yönelik kademeli muafiyet
          mekanizmalarının birleşiminden oluşur. Gelir İdaresi (IRAS),
          bu muafiyetleri şirketin beyanı üzerine otomatik olarak
          hesaplar.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Vergi/Muafiyet</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi (Headline Rate)</td>
                <td className="p-5">%17</td>
                <td className="p-5">Vergiye tabi kâr (chargeable income) üzerinden, muafiyetler düşüldükten sonra uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Start-Up Tax Exemption (SUTE)</td>
                <td className="p-5">İlk 100.000 SGD&apos;de %75 / sonraki 100.000 SGD&apos;de %50</td>
                <td className="p-5">Yeni kurulan şirketler için ilk 3 vergilendirme yılında (YA) geçerli; en fazla 20 hissedar ve en az bir gerçek kişi hissedar (%10+) şartı aranır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Partial Tax Exemption (PTE)</td>
                <td className="p-5">İlk 10.000 SGD&apos;de %75 / sonraki 190.000 SGD&apos;de %50</td>
                <td className="p-5">SUTE dönemi sonrasında veya SUTE şartlarını karşılamayan tüm şirketler için, ek koşul aranmaksızın uygulanır; azami muafiyet 102.500 SGD</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">GST (Mal ve Hizmet Vergisi)</td>
                <td className="p-5">%9</td>
                <td className="p-5">1 Ocak 2024&apos;ten bu yana geçerli oran; yıllık cirosu 1.000.000 SGD&apos;yi geçen/geçmesi beklenen şirketler için zorunlu kayıt, eşiğin aşılmasından itibaren 30 gün içinde başvuru gerekir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Örneğin ilk 3 yılında SUTE&apos;den yararlanan ve yıllık
            100.000 SGD kâr eden bir şirket, kârının yalnızca %25&apos;i
            (25.000 SGD) üzerinden %17 kurumlar vergisi öder; efektif vergi
            yükü %17&apos;nin çok altında kalır. Kişisel gelir vergisi
            uygulanmaz; yalnızca kâr payı (dividend) ve maaş gibi
            Singapur&apos;dan Türkiye&apos;ye aktarılan kazançlar,
            Türkiye&apos;deki vergi mükellefiyetine göre ayrıca
            değerlendirilir. Türkiye ile Singapur arasında 1999&apos;dan
            beri yürürlükte olan Çifte Vergilendirmeyi Önleme
            Anlaşması, 2013&apos;te güncellenen protokolüyle birlikte
            Singapur&apos;da ödenen verginin Türkiye&apos;de mahsubuna
            imkân tanır. Güncel oranlar için{" "}
            <a
              href="https://www.iras.gov.sg/taxes/corporate-income-tax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              IRAS (Singapur Gelir İdaresi)
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. BANKA HESABI */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı Açma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur&apos;da şirket tescili hızlı olsa da, kurumsal banka
          hesabı açılışı geleneksel bankalarda özenli bir durum tespiti
          (due diligence) sürecine tabidir ve gerçekçi bir zaman planlaması
          gerektirir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Seçeneklerinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Yerel direktörü Singapur ikametli olan şirketlerde DBS gibi
              büyük bankalar, profil ve ülkeye göre video görüşmeyle (remote
              KYC) hesap açılışını değerlendirebilir; yerel direktörü
              olmayan tamamen yabancı ortaklı şirketlerde ise en az bir
              yetkilinin fiziken Singapur&apos;da bulunması genellikle
              istenir.
            </li>
            <li>
              UOB gibi bazı bankalar, Singapur&apos;da ikamet etmeyen tüm
              yabancı direktörlerin şubede fiziken hazır bulunmasını istisnasız
              şart koşar; OCBC ise belirli profiller için daha esnek
              davranabilir.
            </li>
            <li>
              Geleneksel bankalarda tam ortaklık yapısı yabancı olan
              şirketler için süreç 2-8 hafta arasında sürebilir.
            </li>
            <li>
              MAS (Singapur Para Otoritesi) lisanslı dijital işletme hesabı
              sağlayıcıları (Aspire, Statrys gibi fintech çözümleri), yabancı
              ortaklı Singapur şirketleri için tamamen uzaktan başvuru ve
              birkaç iş günü içinde hesap açma imkânı sunar; bu çözümler
              özellikle ilk dönemde uluslararası tahsilat ve ödeme için
              pratik bir alternatiftir.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. TÜRKİYE */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Singapur&apos;da şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Singapur&apos;da şirket kuruluş sürecinizi; şirket adının
            onayından yerel direktör atamasına, ACRA/BizFile tescilinden
            şirket sekreteri ve banka hesabı sürecine kadar baştan sona biz
            yürütüyoruz. Yerel direktör (nominee director) ihtiyacınızı
            lisanslı kurumsal hizmet sağlayıcı ortaklıklarımız üzerinden
            karşılıyor, kuruluş sonrasında da muhasebe, GST beyanı ve
            kurumlar vergisi raporlama hizmetinizi ayrı bir yerel firma
            aramanıza gerek kalmadan biz sağlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🇹🇷 Yurt Dışı Yatırım Bildirimi
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler,
            Singapur&apos;da şirket kurmak veya mevcut bir şirkete ortak
            olmak amacıyla yaptıkları ilk sermaye ihracını takip eden{" "}
            <strong>3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın Yurt
            Dışı Yatırım Bildirimi formunu doldurarak Hazine ve Maliye
            Bakanlığı ile Ticaret Bakanlığı&apos;na göndermekle
            yükümlüdür. Bu bildirim her yıl güncellenmeli, ihmal edilmesi
            cezai yaptırımlara yol açabilmektedir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Yurt Dışı Birim, Marka ve Tanıtım Desteği
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Singapur&apos;da açılan ofis veya mağaza gibi birimlerin kira
              giderlerinde temel destek oranı %50 olup, Bakanlık tarafından
              hedef ülke olarak belirlenmesi halinde bu oran %20 ilave
              edilerek uygulanabilir.
            </li>
            <li>
              Yıllık üst limit mağazalar için 100.000 ABD Doları, diğer
              birimler için 75.000 ABD Doları civarındadır; destek ülke
              bazında en fazla 4 yıl uygulanır.
            </li>
            <li>
              Marka tescili ve tanıtım faaliyetlerine yönelik ayrı destek
              kalemleri de mevcuttur.
            </li>
            <li>
              Başvuru için şart: Türk Ticaret Kanunu&apos;na göre kurulmuş
              Limited veya Anonim Şirket olmak ve desteğe konu ürünlerin
              Türk menşeli olması.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu destek ve bildirim yükümlülükleri, hedef ülke Singapur olsa da
          genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır. Konunun
          tamamına ve güncel destek oranlarına{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          başlıklı rehberimizden ulaşabilirsiniz. Güncel oranların
          doğrulanması için{" "}
          <a
            href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Ticaret Bakanlığı&apos;nın resmi sayfası
          </a>{" "}
          esas alınmalıdır.
        </p>
      </section>

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yerel direktör ihtiyacınızı kuruluş öncesinde netleştirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Nominee director hizmetini yalnızca ACRA lisanslı CSP&apos;lerden alın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Şirket sekreterini kuruluştan itibaren 6 ay içinde atayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin banka seçimine göre uzayabileceğini planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ SUTE muafiyetinden yararlanmak için hissedar yapısı şartlarını kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında mahsup imkânını mali müşavirinizle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe, GST beyanı ve yıllık raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
        </div>
      </section>

      {/* 9. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Singapur&apos;da şirket kurmak için ülkede fiziken bulunmam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Tescil başvurusu BizFile+ üzerinden vekâletle ve
              tamamen dijital olarak tamamlanabilir. Ancak en az bir
              Singapur ikametli direktör (nominee director hizmeti dahil)
              şartı sağlanmalı, banka hesabı açılışı için de bankanın
              politikasına göre bir yetkilinin fiziken bulunması gerekebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Nominee director şirketin yönetimine karışabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Nominee director yalnızca yasal ikamet şartını
              karşılamak için atanır; operasyonel kararlar, banka yetkileri
              ve hissedarlık hakları tamamen gerçek ortaklarda kalır. Bu
              düzenleme, taraflar arasında imzalanan hizmet ve ibra
              sözleşmesiyle güvence altına alınır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz olduğunda ACRA/BizFile üzerinden tescil
              genellikle 1-3 iş günü içinde tamamlanır. İsim başvurusu
              başka bir düzenleyici kuruma yönlendirilirse bu süre 14-60
              güne kadar uzayabilir; banka hesabı açılışı ayrıca 1-8 hafta
              sürebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              GST&apos;ye ne zaman kayıt olmam gerekir?
            </h3>
            <p className="leading-8 text-gray-700">
              Yıllık cironuz geçmiş 12 ayda 1.000.000 SGD&apos;yi aşarsa
              veya önümüzdeki 12 ayda aşacağı öngörülüyorsa, eşiğin
              aşılmasından itibaren 30 gün içinde IRAS nezdinde GST
              kaydınızı yaptırmanız zorunludur. Bu eşiğin altındaki
              şirketler için kayıt ihtiyaridir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Singapur&apos;da kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              Singapur&apos;daki şirketten elde ettiği kazançlar
              Türkiye&apos;de de beyan yükümlülüğüne tabi olabilir.
              Türkiye-Singapur Çifte Vergilendirmeyi Önleme Anlaşması
              kapsamında Singapur&apos;da ödenen verginin Türkiye&apos;de
              mahsubu mümkün olabilir; detaylar somut duruma göre
              değerlendirilmelidir.
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
          Singapur; hızlı ve dijital tescil süreci, öngörülebilir vergi
          sistemi, güçlü fikri mülkiyet koruması ve ASEAN pazarına doğrudan
          erişim imkânıyla Türk girişimciler için ciddi bir bölgesel
          yapılanma alternatifidir. Sürecin tek kritik eşiği, yerel
          direktör zorunluluğudur; bu şart nominee director hizmetiyle
          kolaylıkla çözülebilir. Doğru şirket yapısını kurmak, vergi
          muafiyetlerinden tam yararlanmak ve Türkiye tarafındaki
          yükümlülükleri eksiksiz yönetmek için profesyonel destek almak,
          sürecin hatasız ilerlemesini sağlar.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İHRACAT • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?</h3>
        </Link>
        <Link
          href="/blog/dubaide-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • BAE (DUBAİ) • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Dubai'de (BAE) Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        <Link
          href="/blog/amerikada-sirket-nasil-kurulur"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • ABD • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Amerika'da (ABD) Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
