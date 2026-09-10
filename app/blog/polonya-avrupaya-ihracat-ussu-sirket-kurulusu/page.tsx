import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Polonya'yı Avrupa İhracat Üssü Yapmak: 2026 Stratejisi | Koray Akdağ",
  description:
    "Polonya'da şirket kurup AB pazarına açılma stratejisi: A.TR ve Gümrük Birliği mekaniği, AB içi KDV numarası, ithalatta KDV erteleme, %9-%19 CIT, depo ve fulfillment kurgusu, yatırım teşvikleri ve sayısal örnek.",
  keywords: [
    "polonya ihracat üssü",
    "polonyada depo kurmak",
    "avrupaya ihracat için şirket kurmak",
    "ab içi kdv numarası",
    "a.tr dolaşım belgesi polonya",
    "polonya lojistik merkezi",
    "intra community supply",
    "polonya yatırım teşvik bölgesi",
    "2026 polonya ihracat stratejisi",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Polonya'yı Avrupa'ya İhracat ve Lojistik Üssü Olarak Kullanmak"
      description="Polonya'da şirket kurup AB pazarına açılma stratejisi: Gümrük Birliği ve A.TR mekaniği, AB içi KDV numarası ve reverse charge, ithalatta KDV erteleme, %9-%19 CIT ve Estonya usulü rejim, depo/fulfillment kurgusu, yatırım teşvikleri ve sayısal örnekle 2026 rehberi."
      category="YURT DIŞI ŞİRKET • İHRACAT ÜSSÜ • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="polonya-avrupaya-ihracat-ussu-sirket-kurulusu"
      ctaHeading="Polonya'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="Sp. z o.o. kuruluşu, KRS kaydı, KDV ve AB içi ticaret numarası, Avrupa'ya ihracat üssü kurgusu. Polonya'da yapılanma sürecinizi baştan sona yönetiyoruz."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Yazı Kimin İçin?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de üretim yapan ve Avrupa&apos;ya konteyner konteyner
          mal gönderen bir firmanın bir noktadan sonra karşılaştığı sorun
          artık &quot;müşteri bulmak&quot; değildir. Sorun; teslim süresinin
          uzunluğu, her siparişte tekrarlanan gümrük işlemi, Avrupalı alıcının
          &quot;stoktan ve KDV&apos;li fatura ile&quot; alma isteği ve yerinde
          satış sonrası desteğin bulunmamasıdır. Polonya, bu üç sorunu aynı
          anda çözebilecek konumu nedeniyle Türk ihracatçısı için son yıllarda
          en çok tercih edilen Avrupa üslerinden biri haline geldi. Ticaret
          Bakanı Ömer Bolat&apos;ın açıklamalarına göre Türkiye-Polonya
          ticaret hacmi 2025&apos;te 12,5 milyar dolarla rekor kırdı ve iki
          ülke 15 milyar dolarlık yeni bir hedef belirledi.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Polonya&apos;yı üs yapmanın rakip ülkelere göre gerçek farkı</li>
          <li>✔ A.TR, menşe ve Gümrük Birliği kapsamı dışındaki ürünler</li>
          <li>✔ AB içi ticaretin KDV mekaniği: VAT-UE, VIES, reverse charge</li>
          <li>✔ İthalatta KDV erteleme ve nakit akışına doğrudan etkisi</li>
          <li>✔ Depo, fulfillment, gümrük antreposu ve e-ticaret kurgusu</li>
          <li>✔ Sayısal örnekle satış/dağıtım şirketi modeli</li>
        </ul>
      </div>

      <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
        <p className="leading-8 text-gray-700">
          Bu yazı, Polonya&apos;da şirket kurmanın{" "}
          <strong>stratejik tarafına</strong> odaklanır. Sp. z o.o. şirket
          türü, S24 ile noter/vekâletname yolu arasındaki fark, sermaye şartı,
          KRS tescili ve banka hesabı açma süreci gibi kuruluşun teknik
          adımları için{" "}
          <Link
            href="/blog/polonyada-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Polonya&apos;da Şirket Nasıl Kurulur?
          </Link>{" "}
          başlıklı rehberimize bakabilirsiniz.
        </p>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-polonya"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Üs Olarak Polonya?
          </Link>
          <Link
            href="#gumruk"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. Gümrük Birliği, A.TR ve Menşe
          </Link>
          <Link
            href="#ab-ici-kdv"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. AB İçi Ticaretin KDV Mekaniği
          </Link>
          <Link
            href="#kdv-erteleme"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. İthalatta KDV Erteleme
          </Link>
          <Link
            href="#vergi-yuku"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Vergi Yükü ve Estonya Usulü CIT
          </Link>
          <Link
            href="#depo"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Depo, Fulfillment ve E-Ticaret
          </Link>
          <Link
            href="#tesvik"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Polonya ve Türkiye Tarafındaki Teşvikler
          </Link>
          <Link
            href="#senaryo"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Sayısal Senaryo ve Transfer Fiyatlandırması
          </Link>
          <Link
            href="#hatalar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Sık Yapılan Hatalar
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN POLONYA */}
      <section id="neden-polonya" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Üs Olarak Polonya?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Avrupa&apos;da üs kurma kararı verilirken çoğu firma yalnızca
          kurumlar vergisi oranına bakar. Oysa bir ihracat üssünün değeri dört
          başlıkta ölçülür: pazara fiziksel yakınlık, işgücü maliyeti, lojistik
          altyapının derinliği ve iç pazarın kendi büyüklüğü. Polonya bu dört
          başlıkta aynı anda makul sonuç veren nadir ülkelerdendir.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Almanya sınırında, 38 milyonluk iç pazar
            </h3>
            <p className="leading-8 text-gray-700">
              Polonya&apos;nın en büyük ticaret ortağı Almanya&apos;dır ve iki
              ülke kara sınırı paylaşır. Bir Polonya deposundan Berlin,
              Prag, Viyana ve Baltık başkentlerine karayoluyla bir gün içinde
              ulaşılır. Aynı zamanda Polonya&apos;nın kendi iç pazarı,
              AB&apos;nin en kalabalık beş pazarından biridir. Yani üs, aynı
              anda satış pazarıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Batı Avrupa maliyetinin çok altında işgücü
            </h3>
            <p className="leading-8 text-gray-700">
              Eurostat&apos;a göre 2025&apos;te AB genelinde ortalama saatlik
              işgücü maliyeti 34,9 Euro, Hollanda&apos;da 47,9 Euro
              seviyesindeydi. Polonya bu ortalamanın belirgin şekilde
              altındadır; 2026 asgari ücret brüt 4.806 PLN olarak
              belirlenmiştir. Depo operatörü, lojistik personeli ve
              Lehçe/İngilizce konuşan satış ekibi Batı Avrupa&apos;ya kıyasla
              çok daha uygun maliyetle istihdam edilebilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Baltık&apos;ın en büyük konteyner kapısı
            </h3>
            <p className="leading-8 text-gray-700">
              Gdańsk ve Gdynia limanları, Baltık bölgesinin ana konteyner
              giriş noktalarıdır. Ülkenin orta kesiminde Łódź, Poznań ve
              Varşova çevresinde yoğunlaşmış devasa bir lojistik park stoğu
              vardır. Bu, kendi deponuzu kurmadan önce üçüncü parti bir
              depoyla (3PL) başlayabilmeniz anlamına gelir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Türkiye ile hazır ticaret altyapısı
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye-Polonya ticaret hacmi 2025&apos;te 12,5 milyar dolara
              çıkarak tarihi zirvesini gördü. Bu, Polonya&apos;da Türk malına
              aşina gümrük müşavirleri, nakliyeciler ve alıcılar demektir.
              Sıfırdan tanıtılması gereken bir pazar değildir.
            </p>
          </div>
        </div>

        <h3 className="mb-6 mt-16 text-2xl font-bold text-[#071A2F]">
          1.1. Alternatiflerle Karşılaştırma
        </h3>
        <p className="mb-8 leading-8 text-gray-700">
          Polonya tek seçenek değildir. Aşağıdaki tablo, Avrupa üssü kararında
          en sık değerlendirilen beş ülkeyi karşılaştırır. Kurumlar vergisi
          oranları 2026 yılı standart oranlarıdır; saatlik işgücü maliyeti
          Eurostat&apos;ın 2025 verisidir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Ülke</th>
                <th className="p-5">Kurumlar Vergisi</th>
                <th className="p-5">Saatlik İşgücü Maliyeti (2025)</th>
                <th className="p-5">Üs Olarak Güçlü Yanı</th>
                <th className="p-5">Zayıf Yanı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-orange-50 hover:bg-orange-100">
                <td className="p-5 font-bold">Polonya</td>
                <td className="p-5">%19 / %9 (küçük mükellef)</td>
                <td className="p-5">AB ortalamasının altında</td>
                <td className="p-5">
                  Almanya sınırı, 38 milyonluk iç pazar, derin lojistik park
                  ve liman altyapısı
                </td>
                <td className="p-5">
                  %23 KDV oranı yüksek, muhasebe/raporlama disiplini
                  gerektirir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bulgaristan</td>
                <td className="p-5">%10</td>
                <td className="p-5">12,0 EUR (AB&apos;nin en düşüğü)</td>
                <td className="p-5">
                  En düşük vergi ve işgücü maliyeti, Türkiye&apos;ye kara
                  sınırı
                </td>
                <td className="p-5">
                  Küçük iç pazar, Batı Avrupa&apos;ya mesafe, sınırlı lojistik
                  altyapı
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Romanya</td>
                <td className="p-5">%16</td>
                <td className="p-5">13,6 EUR</td>
                <td className="p-5">
                  Büyük iç pazar, Karadeniz üzerinden Türkiye bağlantısı
                </td>
                <td className="p-5">
                  Sık değişen vergi mevzuatı, Batı Avrupa&apos;ya lojistik
                  mesafe
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Macaristan</td>
                <td className="p-5">%9 (AB&apos;nin en düşüğü)</td>
                <td className="p-5">15,2 EUR</td>
                <td className="p-5">
                  En düşük kurumlar vergisi, otomotiv tedarik zincirinde güçlü
                  konum
                </td>
                <td className="p-5">
                  %27 ile AB&apos;nin en yüksek KDV oranı, denize kıyısı yok
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Hollanda</td>
                <td className="p-5">%19 (200.000 EUR&apos;ya kadar) / %25,8</td>
                <td className="p-5">47,9 EUR</td>
                <td className="p-5">
                  Rotterdam limanı, dünyanın en gelişmiş dağıtım ve gümrük
                  altyapılarından biri
                </td>
                <td className="p-5">
                  Çok yüksek işgücü ve ofis maliyeti, sıkı uyum yükümlülükleri
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Karar kuralı basittir. Amacınız yalnızca faturalama ve düşük vergi
            ise Bulgaristan veya Macaristan matematiksel olarak öne çıkar.
            Amacınız Avrupa&apos;da stok tutmak, hızlı teslim etmek ve yerinde
            satış yapmak ise, yani gerçek bir operasyon kurmak ise Polonya
            maliyet ile altyapı arasındaki en dengeli noktadır. Hollanda ise
            yüksek hacimli transit ve gümrük yoğun modeller için anlamlıdır.
          </p>
        </div>
      </section>

      {/* 2. GÜMRÜK */}
      <section id="gumruk" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Gümrük Birliği, A.TR ve Menşe Meselesi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye ile AB arasında 1996&apos;dan beri yürürlükte olan Gümrük
          Birliği, Türk ihracatçısının Polonya&apos;ya sevkiyatındaki en büyük
          avantajıdır. Ancak bu avantaj her ürün için geçerli değildir ve bu
          ayrım çoğu firmada yanlış bilinir.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-green-700">
              ✅ Gümrük Birliği Kapsamındaki Ürünler
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Sanayi ürünleri ve işlenmiş tarım ürünlerinin işlenmiş sanayi
              payı Gümrük Birliği kapsamındadır. Bu ürünler için{" "}
              <strong>A.TR Dolaşım Belgesi</strong> düzenlenir.
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>
                A.TR, menşe belgesi değildir. Malın Türkiye&apos;de{" "}
                <strong>serbest dolaşımda</strong> olduğunu gösterir.
              </li>
              <li>
                Üçüncü ülkeden ithal edilip Türkiye&apos;de gümrük vergisi
                ödenerek serbest dolaşıma girmiş bir mal da A.TR ile AB&apos;ye
                gümrüksüz gönderilebilir.
              </li>
              <li>
                Belge, ihracatçı birlikleri/odalar tarafından onaylanır ve
                gümrük idaresince vize edilir.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-red-700">
              ⚠️ Kapsam Dışı Ürünler
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              İki ürün grubu Gümrük Birliği&apos;nin dışındadır ve bunlarda
              serbest dolaşım değil <strong>menşe</strong> esası uygulanır:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
              <li>
                <strong>Tarım ürünleri</strong> (işlenmemiş tarım ürünleri):
                Ayrı bir tercihli ticaret anlaşmasına tabidir.
              </li>
              <li>
                <strong>AKÇT ürünleri</strong> (Avrupa Kömür ve Çelik
                Topluluğu kapsamındaki demir-çelik ürünleri): Ayrı serbest
                ticaret anlaşması kapsamındadır.
              </li>
              <li>
                Bu iki grupta A.TR değil, menşe ispat belgesi olan{" "}
                <strong>EUR.1 Dolaşım Belgesi</strong> düzenlenir ve tercihli
                rejimden yararlanmak için ürünün Türk menşeli olması gerekir.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Uygulamada en sık yapılan hata, demir-çelik ürünü ihraç eden bir
            firmanın alışkanlıkla A.TR düzenletmesi ve Polonya gümrüğünde
            beklenmedik bir vergi tahakkukuyla karşılaşmasıdır. Ürün grubunuzun
            GTİP bazında hangi rejime tabi olduğunu ilk sevkiyattan önce
            netleştirin. Menşe kuralları ayrıca Türkiye&apos;de üretilen ancak
            girdilerinin önemli kısmı ithal olan ürünlerde de ayrı bir analiz
            gerektirir.
          </p>
        </div>
      </section>

      {/* 3. AB İÇİ KDV */}
      <section id="ab-ici-kdv" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Şirket Kurulduktan Sonra AB İçi Ticaret Nasıl İşler?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Polonya&apos;da kurulan şirketin asıl gücü, AB&apos;nin tek pazarına
          &quot;içeriden&quot; erişebilmesidir. Ancak bunun için Polonya
          şirketinin normal KDV mükellefiyeti yetmez; ayrıca AB içi işlemler
          için kayıt yaptırması gerekir.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">VAT-R ile KDV Kaydı</h3>
            <p className="mt-2 text-sm text-gray-600">
              Aktif KDV mükellefiyeti tesis edilir
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">VAT-UE Kaydı</h3>
            <p className="mt-2 text-sm text-gray-600">
              Aynı formda AB içi işlem beyanı işaretlenir
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">VIES&apos;te Görünürlük</h3>
            <p className="mt-2 text-sm text-gray-600">
              PL ön ekli numara AB veritabanında doğrulanabilir
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">%0 KDV ile Satış</h3>
            <p className="mt-2 text-sm text-gray-600">
              AB&apos;deki mükellef alıcıya vergisiz fatura
            </p>
          </div>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          3.1. AB İçi Mal Teslimi (WDT) ve %0 KDV Şartları
        </h3>
        <p className="leading-8 text-gray-700">
          Polonya&apos;daki şirketiniz Almanya&apos;daki bir sanayi müşterisine
          mal sattığında, bu işlem AB içi teslim (Lehçe kısaltmasıyla WDT)
          sayılır ve %0 KDV ile faturalanır. Ancak %0 oranı otomatik değildir.
          Polonya mevzuatına göre şu şartların tamamı birlikte sağlanmalıdır:
        </p>
        <ul className="ml-6 mt-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-orange-500">
          <li>
            Alıcının başka bir üye ülkeden alınmış <strong>aktif bir AB
            KDV numarası</strong> bulunmalı ve bu numara satıcıya bildirilmiş
            olmalıdır.
          </li>
          <li>
            Numaranın teslim tarihinde geçerli olduğu{" "}
            <strong>VIES sisteminden</strong> doğrulanmalıdır. Bu, satıştan
            önce yapılması ve kaydı tutulması gereken bir kontroldür.
          </li>
          <li>
            Malın Polonya&apos;dan fiilen çıktığını ve alıcıya ulaştığını
            gösteren <strong>taşıma belgeleri</strong> (CMR, teslim teyidi,
            ödeme kaydı) ilgili beyan döneminin son gününe kadar elde
            bulunmalıdır.
          </li>
          <li>
            Satıcı, beyanı verdiği anda VAT-UE kaydına sahip olmalıdır.
          </li>
        </ul>
        <p className="mt-6 leading-8 text-gray-700">
          Bu şartlardan biri eksikse vergi idaresi işlemi yurt içi satış kabul
          edip %23 KDV tarh edebilir. Yani belge disiplini, doğrudan kâr
          marjınızı ilgilendiren bir konudur.
        </p>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          3.2. Hizmetlerde Reverse Charge
        </h3>
        <p className="leading-8 text-gray-700">
          Mal değil hizmet satıyorsanız (mühendislik, yazılım, danışmanlık,
          bakım) AB içi B2B hizmetlerde genel kural, verginin alıcının
          ülkesinde ve alıcı tarafından beyan edilmesidir. Buna reverse charge
          (vergi sorumluluğunun tersine çevrilmesi) denir. Faturanızı KDV&apos;siz
          düzenler, üzerine ilgili notu koyarsınız; alıcı kendi ülkesinde hem
          hesaplanan hem indirilecek KDV olarak beyan eder. Bu mekanizma,
          Avrupa&apos;da hizmet satan Türk teknoloji ve mühendislik firmaları
          için nakit akışı açısından ciddi bir kolaylıktır.
        </p>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          3.3. Intrastat Eşikleri
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          AB içi mal hareketleri belli bir hacmi aştığında istatistiki
          raporlama (Intrastat) zorunlu hale gelir. Polonya İstatistik Kurumu
          (GUS) tarafından belirlenen 2026 eşikleri şöyledir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Eşik</th>
                <th className="p-5">AB İçi Alış (Przywóz)</th>
                <th className="p-5">AB İçi Satış (Wywóz)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temel eşik</td>
                <td className="p-5">6.000.000 PLN</td>
                <td className="p-5">2.800.000 PLN</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Ayrıntılı eşik</td>
                <td className="p-5">105.000.000 PLN</td>
                <td className="p-5">148.000.000 PLN</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Temel eşiği aşan şirket aylık Intrastat beyanı vermekle yükümlü olur.
          Yeni kurulan bir dağıtım şirketi için AB içi satışta 2,8 milyon PLN
          (yaklaşık 650 bin Euro) eşiği görece kolay aşılabilir bir seviyedir;
          bu nedenle ilk yıldan itibaren takip edilmelidir.
        </p>
      </section>

      {/* 4. KDV ERTELEME */}
      <section id="kdv-erteleme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. İthalatta KDV Erteleme: Sessiz Ama En Büyük Avantaj
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;den gelen mal Polonya gümrüğüne girdiğinde, A.TR
          sayesinde gümrük vergisi ödenmez ancak <strong>ithalat
          KDV&apos;si</strong> doğar. Polonya&apos;da standart KDV oranı
          %23&apos;tür. Klasik yöntemde bu tutar gümrük aşamasında nakden
          ödenir ve sonraki beyanla indirim yoluyla geri alınır. Aradaki süre
          boyunca ciddi bir sermaye donar.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Polonya KDV Kanunu&apos;nun <strong>33a maddesi</strong>, aktif KDV
          mükellefi olan ithalatçılara bu tutarı gümrükte ödemek yerine
          doğrudan JPK_V7 beyannamesinde göstererek mahsuplaşma imkânı verir.
          Yani aynı beyannamede hem hesaplanan hem indirilecek KDV olarak yer
          alır ve nakit çıkışı sıfırlanır.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🔑 33a Uygulamasının Temel Şartları
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Şirketin Polonya&apos;da <strong>aktif KDV mükellefi</strong>{" "}
              olarak kayıtlı olması.
            </li>
            <li>
              Vergi ve sosyal güvenlik borcunun bulunmadığını gösteren güncel
              belgelerin (genellikle son 6 aya ilişkin) vergi dairesine
              sunulması.
            </li>
            <li>
              Gümrük beyanının doğrudan ya da yetkili bir gümrük temsilcisi
              aracılığıyla yapılması; basitleştirilmiş usul veya AEO
              (yetkilendirilmiş yükümlü) statüsünün ilgili durumlarda aranması.
            </li>
            <li>
              İlgili dönem beyannamelerinin <strong>aylık</strong> ve süresinde
              verilmesi.
            </li>
            <li>
              Gümrük idaresine, bu usulden yararlanılacağının önceden
              bildirilmesi.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Etkisini somutlaştıralım. Yılda 2 milyon Euro tutarında mal ithal
            eden bir dağıtım şirketinde ithalat KDV&apos;si yaklaşık 460 bin
            Euro&apos;dur. Sevkiyatlar üç ayda bir yapılıyorsa her seferinde
            yaklaşık 115 bin Euro gümrükte nakden ödenip haftalar sonra geri
            alınır. 33a usulüyle bu tutar hiç ödenmez. Yeni kurulan bir Avrupa
            operasyonunda bu, doğrudan işletme sermayesi demektir.
          </p>
        </div>
      </section>

      {/* 5. VERGİ YÜKÜ */}
      <section id="vergi-yuku" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Yükü: %19, %9 ve Estonya Usulü CIT
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Polonya&apos;da standart kurumlar vergisi oranı %19&apos;dur. Küçük
          mükellefler ve faaliyetine yeni başlayan şirketler için %9&apos;luk
          indirimli oran uygulanır. Ancak bu oran, çoğu firmanın sandığından
          daha dar bir alanda geçerlidir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Rejim</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Temel Şart</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Standart CIT</td>
                <td className="p-5">%19</td>
                <td className="p-5">
                  İndirimli orana hak kazanmayan tüm şirketler
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İndirimli CIT</td>
                <td className="p-5">%9</td>
                <td className="p-5">
                  Küçük mükellef statüsü (önceki yıl KDV dahil hasılat 2 milyon
                  Euro karşılığını aşmamış olmalı; 2026 için 8.517.000 PLN) ve
                  cari yıl gelirinin 2 milyon Euro karşılığını aşmaması
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Estonya Usulü CIT (Ryczałt) – Küçük mükellef
                </td>
                <td className="p-5">%10</td>
                <td className="p-5">
                  Vergi yalnızca kâr dağıtıldığında doğar; ortak seviyesindeki
                  mahsupla birlikte efektif yük yaklaşık %20
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Estonya Usulü CIT – Diğerleri
                </td>
                <td className="p-5">%20</td>
                <td className="p-5">
                  Efektif yük yaklaşık %25; klasik rejimde büyük şirketlerde
                  efektif yük daha yüksektir
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          5.1. Estonya Usulü CIT Kimin İçin Mantıklı?
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Estonya usulü rejimde (ryczałt od dochodów spółek) vergi, kâr
          şirkette kaldığı sürece doğmaz; yalnızca kâr dağıtımında ödenir.
          Kârını Avrupa operasyonunu büyütmek için (depo, stok, ekip, araç)
          yeniden yatırıma dönüştürecek bir üs şirketi için bu son derece
          güçlü bir yapıdır. Ancak şartları katıdır:
        </p>
        <ul className="ml-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-orange-500">
          <li>
            En az <strong>3 kişinin</strong> iş sözleşmesiyle istihdam
            edilmesi (veya gelir vergisi ve sosyal güvenlik yükü taşıyan eşdeğer
            ödemelerin yapılması). Yeni kurulan şirketler için kademeli bir
            geçiş süresi tanınır.
          </li>
          <li>
            Faiz, alacak, lisans, kefalet gibi <strong>pasif gelirlerin</strong>{" "}
            toplam gelirin %50&apos;sini aşmaması.
          </li>
          <li>
            Şirketin başka şirketlerde pay, fon katılma belgesi veya şahıs
            şirketlerinde hak sahipliği bulundurmaması.
          </li>
          <li>
            Ortakların yalnızca gerçek kişilerden oluşması. Bu şart kritiktir:
            Polonya şirketinin ortağı bir Türk anonim/limited şirketi ise bu
            rejimden yararlanılamaz.
          </li>
        </ul>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Pratik sonuç:</strong> Türkiye&apos;deki üretici şirketin
            doğrudan iştiraki olarak kurulan bir Polonya şirketi, ortaklık
            yapısı nedeniyle Estonya usulü CIT&apos;ten yararlanamaz. Bu rejim,
            Polonya şirketini gerçek kişi ortaklarla kuran yapılar için
            değerlendirilebilir. Ortaklık yapısı kararı bu nedenle kuruluş
            aşamasında, sonradan değil, verilmelidir.
          </p>
        </div>
      </section>

      {/* 6. DEPO */}
      <section id="depo" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Depo, Fulfillment, Gümrük Antreposu ve E-Ticaret
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir ihracat üssünün ete kemiğe büründüğü yer depodur. Polonya&apos;da
          üç farklı model arasında seçim yapabilirsiniz ve doğru seçim, cironun
          niteliğine göre değişir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">📦</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              3PL / Fulfillment
            </h3>
            <p className="leading-8 text-gray-700">
              Üçüncü parti bir lojistik firmasının deposunda raf kiralarsınız;
              mal kabul, depolama, toplama ve kargolama onlara aittir. Sabit
              maliyeti düşüktür, hızlı başlanır. B2C e-ticaret ve düşük hacimli
              B2B için idealdir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              Kendi Deponuz
            </h3>
            <p className="leading-8 text-gray-700">
              Kiralanan bir lojistik park alanında kendi ekibinizle çalışırsınız.
              Stok kontrolü, montaj, kalite kontrol ve satış sonrası servis
              gerektiren ürünlerde tercih edilir. Kira gideri Ticaret
              Bakanlığı desteği kapsamına girebilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🛃</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              Gümrük Antreposu
            </h3>
            <p className="leading-8 text-gray-700">
              Mal AB gümrük bölgesinde fiziken durur ancak serbest dolaşıma
              girmemiştir; vergiler antrepodan çekildiğinde doğar. Malın bir
              kısmı AB dışına (örneğin Ukrayna, Balkanlar) yeniden ihraç
              edilecekse mali açıdan en verimli modeldir.
            </p>
          </div>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          6.1. E-Ticaret Yapıyorsanız: OSS ve IOSS
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Avrupa&apos;daki nihai tüketiciye satış yapıyorsanız KDV mekaniği
          farklı işler. AB genelinde uzaktan satışlar için{" "}
          <strong>yıllık 10.000 Euro</strong> (Polonya&apos;da 42.000 PLN
          karşılığı) tutarında bir eşik vardır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Durum</th>
                <th className="p-5">Uygulanacak Sistem</th>
                <th className="p-5">Sonuç</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  AB&apos;deki tüketicilere yıllık satış 10.000 EUR altında
                </td>
                <td className="p-5">Kayıt zorunlu değil</td>
                <td className="p-5">
                  Polonya KDV oranı (%23) uygulanabilir, ihtiyari olarak OSS
                  seçilebilir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Eşik aşıldığında, mal AB içindeyken (Polonya deposundan)
                  gönderiliyor
                </td>
                <td className="p-5">OSS (One Stop Shop)</td>
                <td className="p-5">
                  Alıcının ülkesinin KDV oranı uygulanır, tek beyanla
                  Polonya&apos;dan bildirilir; her ülkede ayrı KDV kaydı
                  gerekmez
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Mal AB dışından (Türkiye&apos;den) doğrudan tüketiciye,
                  sevkiyat değeri 150 EUR&apos;ya kadar
                </td>
                <td className="p-5">IOSS (Import One Stop Shop)</td>
                <td className="p-5">
                  KDV satış anında tahsil edilir, gümrükte sürpriz maliyet
                  çıkmaz, teslimat hızlanır
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Polonya&apos;da depo tutmanın e-ticaret açısından en somut faydası
          şudur: mal zaten AB içindedir, dolayısıyla Avrupalı tüketici gümrük
          süreci ve beklemeyle karşılaşmaz. Teslim süresi günlerden saatlere
          iner ve iade süreci yönetilebilir hale gelir.
        </p>
      </section>

      {/* 7. TEŞVİK */}
      <section id="tesvik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. İki Taraflı Teşvik: Polonya ve Türkiye
        </h2>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          7.1. Polonya Yatırım Bölgesi (Polska Strefa Inwestycji)
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Polonya, eski Özel Ekonomik Bölge (SSE) sistemini{" "}
          <strong>Polska Strefa Inwestycji (PSI)</strong> ile değiştirdi. Yeni
          sistemde teşvik belirli bir coğrafi bölgeye değil, ülkenin tamamına
          yayılmıştır: nitelikli bir yatırım yapıyorsanız, hangi ilde
          olduğunuza göre bir <strong>destek kararı</strong> (decyzja o
          wsparciu) alır ve yatırım harcamalarınızın belirli bir oranı kadar
          kurumlar vergisinden muaf tutulursunuz. Eski SSE izinleri ise
          2026 sonu itibarıyla kademeli olarak sona ermektedir.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ PSI&apos;nin Temel Parametreleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Destek yoğunluğu:</strong> 2022-2027 bölgesel yardım
              haritasına göre %0 ile %50 arasında değişir. En yüksek oranlar
              (%50) doğu bölgelerinde (Warmińsko-Mazurskie, Podlaskie,
              Lubelskie, Podkarpackie, Świętokrzyskie), en düşük oranlar ise
              Varşova, Poznań ve Wrocław gibi zengin bölgelerdedir.
            </li>
            <li>
              <strong>KOBİ ilavesi:</strong> Küçük işletmeler için +20 puan,
              orta ölçekli işletmeler için +10 puan ilave yoğunluk uygulanır.
              Küçük bir firma uygun bir bölgede %70&apos;e varan bir orana
              ulaşabilir.
            </li>
            <li>
              <strong>Süre:</strong> Destek kararı yoğunluğa göre 12, 14 veya
              15 yıl için verilir.
            </li>
            <li>
              <strong>Nicel kriter:</strong> Asgari yatırım tutarı, ilçenin
              işsizlik oranına ve firma büyüklüğüne göre belirlenir. Mikro
              işletmelerde 0,2 milyon PLN&apos;ye kadar inebilirken büyük
              işletmelerde 100 milyon PLN&apos;ye çıkabilir.
            </li>
            <li>
              <strong>Nitel kriter:</strong> Ekonomik ve sosyal sürdürülebilir
              kalkınma başlıklarında puanlama yapılır ve asgari puan
              tutturulmalıdır.
            </li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Kritik uyarı:</strong> PSI kapsamında{" "}
            <strong>toptan ve perakende ticaret ile taşımacılık gibi
            sektörler destek dışıdır.</strong> Yani Polonya&apos;da yalnızca
            satış ve dağıtım şirketi kuruyorsanız bu teşvikten
            yararlanamazsınız. PSI, montaj hattı, üretim tesisi, Ar-Ge merkezi
            veya modern hizmet merkezi gibi gerçek bir yatırım yapan firmalar
            içindir. Üs kurgunuzda ileride üretime geçme ihtimali varsa
            lokasyon seçimini bu ihtimali gözeterek yapmakta fayda vardır.
            Güncel koşullar için{" "}
            <a
              href="https://www.paih.gov.pl/inwestycje/zachety-inwestycyjne/polska-strefa-inwestycji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Polonya Yatırım ve Ticaret Ajansı (PAIH)
            </a>{" "}
            resmi kaynağı esas alınmalıdır.
          </p>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          7.2. Türkiye Tarafında: Ticaret Bakanlığı Destekleri
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Polonya&apos;da kurduğunuz yapının maliyetinin bir kısmı, 5973 sayılı
          İhracat Destekleri Hakkında Karar kapsamında Türkiye&apos;den geri
          alınabilir. Üs kurgusunda doğrudan işinize yarayacak kalemler:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">
              Yurt Dışı Birim Kira Desteği
            </h4>
            <p className="leading-8 text-gray-700">
              Polonya&apos;da açtığınız ofis, depo, mağaza veya showroom&apos;un
              kira giderleri destek kapsamındadır. Temel oran %50 olup hedef
              ülke uygulamasıyla artabilir; destek süresi ve yıllık üst limit
              Bakanlıkça her yıl güncellenir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">
              Pazara Giriş Belgeleri Desteği
            </h4>
            <p className="leading-8 text-gray-700">
              CE işaretlemesi, ürün belgelendirmesi, test ve akreditasyon
              giderleri %50 oranında desteklenir. AB pazarına girişte teknik
              mevzuat uyumu için katlanılan maliyetin doğrudan karşılığıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">
              Marka Tescil ve Tanıtım Desteği
            </h4>
            <p className="leading-8 text-gray-700">
              Markanızın Polonya veya AB nezdinde tescili ile yurt dışında
              yapılan tanıtım ve pazarlama harcamaları ayrı destek kalemleri
              olarak yer alır.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Destek oranları, üst limitleri ve başvuru usulleri yıllık olarak
          güncellendiğinden başvurudan önce{" "}
          <a
            href="https://ticaret.gov.tr/destekler/ihracat-destekleri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Ticaret Bakanlığı&apos;nın resmi destek sayfası
          </a>{" "}
          esas alınmalıdır. Yurt dışı yapılanmanın genel çerçevesi, bildirim
          yükümlülükleri ve ülke seçimi için{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          yazımızı inceleyebilirsiniz.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş, Muhasebe ve Destek Başvurularını Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Polonya&apos;da Sp. z o.o. kuruluşu, KRS tescili, KDV ve VAT-UE
            kaydı, 33a usulüne geçiş başvurusu, aylık JPK_V7 beyanları ve
            Türkiye tarafındaki yurt dışı yatırım bildirimi ile Ticaret
            Bakanlığı destek başvuruları tek elden yürütülmesi gereken bağlantılı
            süreçlerdir. Bunların tamamını biz sağlıyoruz; ayrıca bir yerel
            firma aramanıza gerek kalmaz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. SENARYO */}
      <section id="senaryo" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Somut Senaryo: Satış ve Dağıtım Şirketi Modeli
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bursa&apos;da makine yan sanayi üretimi yapan bir firmanın Avrupa
          cirosunun 2 milyon Euro seviyesine geldiğini varsayalım. Firma şu
          ana kadar her siparişi Türkiye&apos;den tek tek sevk ediyor, teslim
          süresi 3-4 hafta ve Alman müşteri sürekli &quot;stoktan teslim&quot;
          istiyor. Kurgu şöyle değişir:
        </p>

        <div className="mb-12 grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-base font-bold">
              Polonya&apos;da Sp. z o.o. kurulur
            </h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-base font-bold">
              KDV, VAT-UE ve 33a kaydı yapılır
            </h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-base font-bold">
              Łódź çevresinde 3PL deposu kiralanır
            </h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-base font-bold">
              AB müşterilerine stoktan satış başlar
            </h3>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar (EUR)</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Türkiye&apos;den Polonya iştirakine satış
                </td>
                <td className="p-5">2.000.000</td>
                <td className="p-5">
                  A.TR ile gümrük vergisi yok; ithalat KDV&apos;si 33a ile
                  beyanda mahsup edilir, nakit çıkışı olmaz
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Polonya şirketinin AB satışı
                </td>
                <td className="p-5">2.400.000</td>
                <td className="p-5">
                  AB&apos;deki mükellef alıcılara %0 KDV ile (WDT), Polonya içi
                  satışta %23 KDV ile
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Brüt marj</td>
                <td className="p-5">400.000</td>
                <td className="p-5">
                  Dağıtım fonksiyonunun üstlendiği risk ve işleve karşılık gelen
                  marj
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Polonya faaliyet giderleri
                </td>
                <td className="p-5">-250.000</td>
                <td className="p-5">
                  Depo, 3-4 kişilik ekip, iç lojistik, muhasebe, sigorta
                </td>
              </tr>
              <tr className="border-b bg-gray-50 hover:bg-gray-100">
                <td className="p-5 font-bold">Vergi öncesi kâr</td>
                <td className="p-5 font-bold">150.000</td>
                <td className="p-5">Polonya&apos;da vergilendirilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi</td>
                <td className="p-5">-28.500</td>
                <td className="p-5">
                  Ciro 2 milyon Euro eşiğini aştığı için %19 oranı uygulanır
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-bold">Vergi sonrası kâr</td>
                <td className="p-5 font-bold">121.500</td>
                <td className="p-5">
                  Şirkette bırakılabilir veya temettü olarak dağıtılabilir
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Dikkat edilmesi gereken nokta şudur: bu şirketin cirosu 2 milyon Euro
          eşiğini aştığı için %9&apos;luk indirimli orandan yararlanamaz. Ciro
          eşiğin altında kalsaydı vergi 13.500 Euro olurdu. Kâr Türkiye&apos;ye
          temettü olarak aktarılırsa Polonya&apos;da stopaj doğar; standart
          oran %19 olmakla birlikte Türkiye-Polonya Çifte Vergilendirmeyi
          Önleme Anlaşması kapsamında ortaklık payı ve elde tutma süresine göre
          %10 veya %15&apos;e inebilir.
        </p>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          8.1. Transfer Fiyatlandırması: Modelin En Kırılgan Noktası
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Yukarıdaki tabloda en kritik satır, Türkiye&apos;deki ana şirketin
          Polonya iştirakine hangi fiyattan sattığıdır. Bu fiyat, kârın hangi
          ülkede vergileneceğini doğrudan belirler ve her iki ülkenin vergi
          idaresi de bu rakama bakar.
        </p>
        <ul className="ml-6 list-disc space-y-4 leading-8 text-gray-700 marker:text-orange-500">
          <li>
            <strong>Türkiye tarafı:</strong> Kurumlar Vergisi Kanunu&apos;nun
            13. maddesi kapsamında ilişkili kişilerle yapılan işlemlerde emsallere
            uygunluk ilkesi geçerlidir. Fiyat düşük tutulup kâr Polonya&apos;ya
            kaydırılırsa, transfer fiyatlandırması yoluyla örtülü kazanç dağıtımı
            eleştirisiyle karşılaşılabilir.
          </li>
          <li>
            <strong>Polonya tarafı:</strong> İlişkili kişilerle yapılan işlemler
            için belgelendirme eşikleri, mal ve finansman işlemlerinde 10 milyon
            PLN, hizmet ve diğer işlemlerde 2 milyon PLN&apos;dir. Eşik aşıldığında
            yerel dosya hazırlama ve TPR beyanı verme yükümlülüğü doğar.
          </li>
          <li>
            <strong>Doğru yaklaşım:</strong> Polonya şirketinin üstlendiği
            fonksiyon (stok riski taşıyan tam dağıtımcı mı, yoksa yalnızca sipariş
            toplayan komisyoncu mu) baştan tanımlanmalı ve fiyatlama bu fonksiyona
            uygun bir marj bırakacak şekilde kurgulanmalıdır. Bu tanım, sözleşme,
            fiyat listesi ve muhasebe kayıtlarıyla tutarlı olmalıdır.
          </li>
        </ul>
      </section>

      {/* 9. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Yapılan Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ KDV kaydı yapıp VAT-UE kaydını unutmak
            </h3>
            <p className="text-gray-700">
              Polonya KDV mükellefiyeti tek başına AB içi satışta %0 oran
              uygulamanıza yetmez. Ayrıca VAT-UE kaydı gerekir ve numaranız
              VIES&apos;te görünmelidir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ Alıcının KDV numarasını doğrulamamak
            </h3>
            <p className="text-gray-700">
              VIES doğrulaması teslim tarihinde yapılmalı ve kaydı
              saklanmalıdır. Sonradan geçersiz çıkan bir numara, %0 oranın
              reddedilmesine yol açabilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ Demir-çelik ürününe A.TR düzenletmek
            </h3>
            <p className="text-gray-700">
              AKÇT ürünleri Gümrük Birliği dışındadır; menşe esaslıdır ve EUR.1
              gerekir. Yanlış belge, gümrükte beklenmedik vergi ve gecikme
              demektir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ 33a başvurusunu ihmal edip her sevkiyatta KDV ödemek
            </h3>
            <p className="text-gray-700">
              Şartları sağlayan bir şirketin gümrükte nakden KDV ödemesi
              gereksizdir. Bu, ilk yılda en çok işletme sermayesi yakan
              hatalardan biridir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ &quot;Polonya&apos;da CIT %9&quot; varsayımıyla bütçe yapmak
            </h3>
            <p className="text-gray-700">
              İndirimli oran ciro eşiğine bağlıdır. Bir dağıtım şirketinde ciro
              hızla eşiği aşar ve gerçek oran %19 olur. Fizibiliteyi buna göre
              kurun.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ Transfer fiyatını rastgele belirlemek
            </h3>
            <p className="text-gray-700">
              Ana şirket ile iştirak arasındaki fiyat, fonksiyon analizine
              dayanmalıdır. İki ülkenin de vergi idaresi bu rakamı
              inceleyebilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ Dağıtım şirketi için PSI teşviki beklemek
            </h3>
            <p className="text-gray-700">
              Toptan/perakende ticaret ve taşımacılık PSI kapsamı dışındadır.
              Vergi muafiyeti planınızı buna dayandırmayın.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 font-bold text-red-600">
              ❌ Yurt dışı yatırım bildirimini atlamak
            </h3>
            <p className="text-gray-700">
              Türkiye&apos;de yerleşik kişilerin ilk sermaye ihracını takip eden
              süre içinde bildirim yükümlülüğü vardır ve her yıl
              güncellenmelidir.
            </p>
          </div>
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
              Polonya&apos;da şirket kurmadan da AB&apos;ye ihracat
              yapabiliyorum. Üs kurmanın gerçek faydası ne?
            </h3>
            <p className="leading-8 text-gray-700">
              Üç somut fayda vardır. Birincisi teslim süresi: stok
              Avrupa&apos;da olduğu için müşteri günler içinde mal alır.
              İkincisi ticari algı: Avrupalı alıcı, AB KDV numarası olan bir
              tedarikçiden alım yapmayı ithalat prosedürüne göre çok daha kolay
              bulur. Üçüncüsü ise ihaleler ve büyük zincirlerdir; birçoğu AB
              içinde yerleşik tedarikçi şartı arar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              A.TR belgesi ile gönderdiğim mal için Polonya&apos;da hiç vergi
              ödemeyecek miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              A.TR, Gümrük Birliği kapsamındaki ürünlerde gümrük vergisini
              sıfırlar ancak ithalat KDV&apos;sini ortadan kaldırmaz. Polonya
              standart KDV oranı %23&apos;tür. KDV Kanunu&apos;nun 33a maddesi
              kapsamındaki usule geçerseniz bu tutarı gümrükte nakden ödemez,
              beyannamede mahsuplaşırsınız.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Polonya deposundaki malı Almanya&apos;daki müşteriye satarken
              hangi KDV oranını uygularım?
            </h3>
            <p className="leading-8 text-gray-700">
              Alıcı Almanya&apos;da KDV mükellefiyse ve numarası VIES&apos;te
              aktifse, malın Polonya&apos;dan çıktığını belgelemeniz kaydıyla
              %0 oran uygulanır. Alıcı nihai tüketici ise mesafeli satış
              kuralları devreye girer ve 10.000 Euro eşiği aşıldığında OSS
              üzerinden Almanya&apos;nın KDV oranıyla beyan edilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Estonya usulü CIT&apos;e geçebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;deki tüzel kişi şirketinizin doğrudan iştiraki olarak
              kurduğunuz bir Polonya şirketi bu rejimden yararlanamaz; ortakların
              yalnızca gerçek kişilerden oluşması şarttır. Ayrıca en az 3 kişilik
              istihdam ve pasif gelirlerin toplam gelirin %50&apos;sini aşmaması
              koşulları da aranır. Ortaklık yapısı kararı kuruluş aşamasında
              verilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Depo kiramı Türkiye&apos;den geri alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, 5973 sayılı Karar kapsamındaki yurt dışı birim kira desteği
              depoyu da kapsar. Temel destek oranı %50 olup hedef ülke
              uygulamasıyla artabilir; yıllık üst limitler ve süre Bakanlıkça
              her yıl güncellenir. Başvurunun süresi içinde ve İhracatçı
              Birlikleri üzerinden Destek Yönetim Sistemi (DYS) ile yapılması
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Polonya&apos;da personel istihdam etmek zorunda mıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Hukuken zorunlu değildir; şirket dışarıdan hizmet alarak da
              işletilebilir. Ancak fiili bir ekonomik varlık bulunmaması,
              transfer fiyatlandırması ve iş yeri (permanent establishment)
              tartışmalarında aleyhinize kullanılabilir. Gerçek bir üs kuruyorsanız
              en az bir operasyon sorumlusu ve bir satış sorumlusu ile başlamak
              hem ticari hem vergisel açıdan daha sağlıklıdır.
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
          Polonya&apos;yı Avrupa üssü yapmanın mantığı düşük vergi arayışı
          değildir. Mantık şudur: Gümrük Birliği sayesinde malı gümrüksüz
          getirir, 33a usulüyle ithalat KDV&apos;sini nakit çıkışı olmadan
          çevirir, AB içi KDV numaranızla 27 ülkeye içeriden satış yapar ve
          bunu Batı Avrupa&apos;nın çok altında bir işletme maliyetiyle
          sürdürürsünüz. Üstüne Türkiye tarafındaki kira, belgelendirme ve
          tanıtım desteklerini eklediğinizde, kurulum maliyetinin önemli bir
          kısmı geri döner.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Buna karşılık model, disiplin ister. Ürün grubunuzun A.TR mi EUR.1 mi
          gerektirdiği, VAT-UE ve VIES kontrolleri, Intrastat eşikleri, doğru
          kurumlar vergisi oranı beklentisi ve en önemlisi ana şirket ile
          iştirak arasındaki fiyatlama, kuruluştan önce netleştirilmesi gereken
          başlıklardır. Bu kararlar sonradan düzeltildiğinde maliyeti yüksek
          olur; baştan doğru kurulduğunda ise Polonya operasyonu, Avrupa
          cironuzun kalıcı motoru haline gelir.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/polonyada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • POLONYA • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Polonya&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve
              Avantajları
            </h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • İHRACAT • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
            </h3>
          </Link>
          <Link
            href="/blog/bulgaristanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • BULGARİSTAN • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Bulgaristan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve
              Avantajları
            </h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
