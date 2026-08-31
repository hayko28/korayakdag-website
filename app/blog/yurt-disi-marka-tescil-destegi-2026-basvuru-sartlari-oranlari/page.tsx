import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Yurt Dışı Marka Tescil Desteği 2026: Oranlar, Üst Limit ve Adım Adım Başvuru | Koray Akdağ",
  description:
    "Ticaret Bakanlığı'nın 5973 sayılı Karar kapsamındaki Yurt Dışı Marka Tescil Desteği'nde %50-%75 destek oranı, 2026 yılı 3.698.274 TL üst limit, 4 yıllık destek süresi, DYS üzerinden başvuru süreci, gerekli belgeler ve sık yapılan hatalarla kapsamlı rehber.",
  keywords: [
    "yurt dışı marka tescil desteği",
    "marka tescil desteği 2026",
    "Ticaret Bakanlığı marka tescil desteği",
    "5973 sayılı karar marka tescil",
    "DYS marka tescil başvurusu",
    "markayı yurt dışında tescil ettirme desteği",
    "hedef ülke marka tescil desteği",
    "yurt dışında marka koruma desteği",
    "ihracat destekleri marka tescil",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yurt Dışı Marka Tescil Desteği 2026: Oranlar, Üst Limit ve Adım Adım Başvuru Rehberi"
      description="Markanızı yurt dışında tescil ettirirken vekil, danışmanlık, araştırma ve avukatlık giderlerinizin %50-%75'ini Ticaret Bakanlığı karşılıyor. 2026 güncel destek oranları, 3.698.274 TL üst limit, 4 yıllık destek süresi, DYS üzerinden başvuru süreci ve dikkat edilmesi gereken şartlarla uygulamaya dönük rehber."
      category="İHRACAT DESTEKLERİ • MARKA & FİKRİ MÜLKİYET • 2026"
      date="2026"
      readTime="12 Dakika"
      coverImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="yurt-disi-marka-tescil-destegi-2026-basvuru-sartlari-oranlari"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de tescilli bir markanız var ve yurt dışı pazarlara
          açılıyorsunuz. Markanızı hedef ülkede tescil ettirmezseniz, önce
          siz o pazara girdiğiniz halde markanızı başka biri adına
          tescillettirip sizi kendi markanızı kullanmaktan alıkoyabilir.
          Ticaret Bakanlığı, bu riski azaltmak isteyen şirketlerin yurt
          dışı marka tescil ve koruma giderlerinin önemli bir kısmını{" "}
          <strong>Yurt Dışı Marka Tescil Desteği</strong> ile karşılıyor. Bu
          yazıda desteğin oranını, 2026 güncel üst limitini, kimlerin
          yararlanabileceğini ve DYS üzerinden adım adım başvuru sürecini
          resmî genelgeye dayanarak anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Destek oranı %50&apos;den başlıyor, hangi durumda %75&apos;e çıkıyor?</li>
          <li>✔ 2026 yıllık üst limit ve 4 yıllık destek süresi nasıl işliyor?</li>
          <li>✔ Hangi giderler kapsamda, hangileri kesinlikle kapsam dışı?</li>
          <li>✔ Yurt içi marka tescili şart mı, hangi sırayla yapılmalı?</li>
          <li>✔ DYS üzerinden başvuru adım adım nasıl yapılır?</li>
          <li>✔ En sık yapılan hatalar ve ödeme kesintisine yol açan durumlar</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Yurt Dışı Marka Tescil Desteği Nedir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir, Temel Şartlar Nelerdir?
          </Link>
          <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Hangi Giderler Kapsanıyor, Hangileri Kapsam Dışı?
          </Link>
          <Link href="#oranlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Destek Oranları ve 2026 Üst Limiti
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Başvuru Süreci (DYS)
          </Link>
          <Link href="#belgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Gerekli Belgeler
          </Link>
          <Link href="#odeme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Ödeme Nasıl Yapılır, Vergi/SGK Borcu Varsa Ne Olur?
          </Link>
          <Link href="#ornek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Örnek Hesaplama
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
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
          1. Yurt Dışı Marka Tescil Desteği Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yurt Dışı Marka Tescil Desteği, <strong>17/08/2022 tarihli ve
          5973 sayılı İhracat Destekleri Hakkında Karar</strong>&apos;ın
          29&apos;uncu maddesine dayanan, Türkiye&apos;de tescilli bir
          markanın yurt dışında tescil ettirilmesi ve tescil sonrası
          korunmasına ilişkin giderlerin Ticaret Bakanlığı tarafından geri
          ödemesiz olarak karşılandığı bir devlet desteğidir. Uygulama usul
          ve esasları, <strong>Yurt Dışı Marka Tescil Desteğine İlişkin
          Genelge</strong> ile belirlenir ve tüm süreç{" "}
          <strong>Destek Yönetim Sistemi (DYS)</strong> üzerinden yürütülür.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu destek, daha önce{" "}
          <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
            Ticaret Bakanlığı İhracat Destekleri
          </Link>{" "}
          rehberimizde de kısaca değindiğimiz bir kalem; burada yalnızca
          marka tesciline odaklanıp şartları, süreci ve dikkat edilmesi
          gereken teknik detayları çok daha ayrıntılı ele alıyoruz.
        </p>
        <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Neden Önemli?
          </h3>
          <p className="leading-8 text-gray-700">
            Marka hakkı ülkeseldir; Türkiye&apos;de tescilli bir markanın
            başka bir ülkede otomatik koruması yoktur. Yurt dışına ihracat
            yapan ya da yurt dışında şirket/mağaza açan işletmeler, hedef
            pazarda markalarını tescil ettirmezse hem taklit riskiyle hem de
            markalarının üçüncü kişiler tarafından &quot;marka gaspı&quot;
            yoluyla ele geçirilmesi riskiyle karşı karşıya kalır. Bu destek,
            bu adımın maliyetini önemli ölçüde azaltarak markalaşma
            sürecini teşvik eder.
          </p>
        </div>
      </section>

      {/* 2. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir, Temel Şartlar Nelerdir?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏢 Başvuru Sahibi</h4>
            <p className="text-sm leading-7 text-gray-700">
              Destekten yalnızca <strong>şirketler</strong> yararlanabilir;
              şahıs işletmeleri/gerçek kişi başvuruları destek kapsamında
              değerlendirilmez. Başvuru, şirketin üyesi olduğu{" "}
              <strong>İhracatçı Birlikleri Genel Sekreterliği (İBGS)</strong>{" "}
              üzerinden yapılır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">™️ Yurt İçi Tescil Şartı</h4>
            <p className="text-sm leading-7 text-gray-700">
              Desteklenecek markanın <strong>ilk tescili yurt içinde
              gerçekleşmiş</strong> olmalı ve yurt dışı başvuru{" "}
              <strong>aynı şirket adına</strong> yapılmalıdır. Yurt dışı
              başvuru yurt içi tescilden önce yapılmışsa, 6 aylık destek
              başvuru süresi içinde yurt içi tescilin tamamlanması şartıyla
              yine desteklenir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🔗 İlişkili Kişi Kısıtı</h4>
            <p className="text-sm leading-7 text-gray-700">
              Harcamayı yapan şirket ile faturayı düzenleyen taraf{" "}
              <strong>ilişkili kişi</strong> (ortak, ortağın eşi/yakını,
              aynı sermaye/yönetim grubuna bağlı şirket vb.) olamaz. Grup
              içi vekil/danışmanlık şirketi üzerinden fatura kesmek desteği
              geçersiz kılar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🌍 Marka İmajı Şartı</h4>
            <p className="text-sm leading-7 text-gray-700">
              Tescil edilecek markada, <strong>Türk Malı imajına zarar
              verecek</strong> şekilde farklı bir ülke menşeini çağrıştıran
              ifade, sembol veya ülke/şehir isimlerinin kullanılması
              durumunda ilgili giderler destek kapsamı dışında kalır.
            </p>
          </div>
        </div>
      </section>

      {/* 3. GİDERLER */}
      <section id="giderler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Hangi Giderler Kapsanıyor, Hangileri Kapsam Dışı?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Desteklenen Giderler
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Yurt dışında tescile ilişkin marka/patent bürosu hizmet ve danışmanlık giderleri</li>
              <li>✔ Markanın o ülkede başka bir şirket adına tescilli olup olmadığına dair araştırma/inceleme giderleri</li>
              <li>✔ Tescil sürecine ilişkin zorunlu avukatlık giderleri</li>
              <li>✔ Yurt dışında tescil edilmiş markanın <strong>korunmasına</strong> ilişkin avukatlık giderleri (itiraz, ihtilaf takibi vb.)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ⛔ Kapsam Dışı
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✖ Marka <strong>yenileme</strong> giderleri</li>
              <li>✖ İlişkili kişiden alınan hizmet/fatura giderleri</li>
              <li>✖ Ortalama piyasa rayicinin üzerinde olduğu tespit edilen harcamalar</li>
              <li>✖ Çek cirosu veya müşteri çeki ile yapılan ödemeler (bu ödeme yöntemiyle yapılan harcamalar destek kapsamında değerlendirilmez)</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Desteğin devreye girmesi için yurt dışı marka tescil başvurusunun{" "}
          <strong>yapılmış olması yeterlidir</strong> — tescilin
          sonuçlanmasını (başvurunun kabul edilmesini) beklemeye gerek
          yoktur.
        </p>
      </section>

      {/* 4. ORANLAR */}
      <section id="oranlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Destek Oranları ve 2026 Üst Limiti
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destek oranı, başvurulan ülkenin Bakanlık tarafından ilan edilen{" "}
          <strong>hedef ülkeler listesi</strong>nde olup olmadığına ve
          markanın ilgili sektörde olup olmadığına göre kademeli olarak
          artar:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Durum</th>
                <th className="p-4">Destek Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Standart (hedef ülke listesinde olmayan ülke)</td>
                <td className="p-4">%50</td>
              </tr>
              <tr className="border-b bg-gray-50 hover:bg-gray-100">
                <td className="p-4 font-semibold">Bakanlık&apos;ın ilan ettiği hedef ülkeye başvuru</td>
                <td className="p-4">%70 (standarda +20 puan)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Hedef ülke + hedef sektör eşleşmesi</td>
                <td className="p-4">%75 (standarda +25 puan)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Tescil işlemi birden çok ülkeyi kapsıyorsa, +20 puanlık ilave
          oranın uygulanabilmesi için <strong>ülkelerin tamamının</strong>{" "}
          hedef ülkeler listesinde yer alması gerekir. Hedef ülke/sektör
          listeleri her yıl Bakanlık tarafından güncellenip{" "}
          <strong>ticaret.gov.tr</strong> üzerinden ilan edilir; başvuru
          yapmadan önce güncel listeyi kontrol etmek gerekir.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 2026 Yıllık Üst Limiti</h3>
            <p className="leading-8 text-gray-700">
              Şirket başına yıllık üst limit 2026 için{" "}
              <strong>3.698.274 TL</strong>&apos;dir. Bu tutar her takvim
              yılı başında bir önceki yılın <strong>(TÜFE + Yİ-ÜFE)/2</strong>{" "}
              oranında otomatik güncellenir; 2027&apos;de yeniden
              artırılacaktır.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⏳ Destek Süresi</h3>
            <p className="leading-8 text-gray-700">
              Destek süresi <strong>4 yıl</strong>dır ve bu süre, ilgili
              markaya ilişkin ilk destek ödemesine esas ödeme belgesinin
              tarihinden itibaren başlar. Ara dönemde başvuru yapılmamış
              olması bu 4 yıllık süreyi durdurmaz/uzatmaz.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci (DYS)
        </h2>
        <div className="space-y-6">
          {[
            {
              n: "1",
              t: "Yurt İçi Tescil Kontrolü",
              d: "Desteklenecek markanın Türk Patent ve Marka Kurumu nezdinde tescilli olduğundan (veya yurt dışı başvurudan sonraki 6 ay içinde tescillenecek durumda olduğundan) emin olun.",
            },
            {
              n: "2",
              t: "Yurt Dışı Marka Tescil Başvurusu",
              d: "Hedef ülkede (doğrudan ülke ofisine veya Madrid Protokolü üzerinden WIPO'ya) marka tescil başvurusunu yaptırın ve vekil/danışmanlık, araştırma-inceleme, avukatlık faturalarını bankacılık kanalıyla (banka havalesi, kredi kartı vb.) ödeyin.",
            },
            {
              n: "3",
              t: "Yurt Dışı Belgelerin Onayı",
              d: "Yurt dışında düzenlenen belgeler, o ülkedeki Ticaret Müşavirliği/Ataşeliği (Bakanlık yurt dışı temsilcisi) onayına tabidir; Türkiye'de düzenlenen belgeler için bu onay aranmaz.",
            },
            {
              n: "4",
              t: "DYS Üzerinden Başvuru",
              d: "Ödeme belgesi tarihinden itibaren en geç 6 ay içinde, gerekli bilgi/belgelerle birlikte Destek Yönetim Sistemi (DYS) üzerinden üyesi olduğunuz İhracatçı Birliği'ne (İBGS) başvurun.",
            },
            {
              n: "5",
              t: "İnceleme ve Eksik Belge Tamamlama",
              d: "İBGS başvuruyu inceler; eksik bilgi/belge varsa bildirilir. Eksikliklerin bildirim tarihinden itibaren 3 ay içinde DYS üzerinden tamamlanması gerekir; aksi halde ilgili harcamalar değerlendirmeye alınmaz.",
            },
            {
              n: "6",
              t: "Vergi/SGK Borcu Sorgulaması ve Ödeme",
              d: "İnceleme sonunda hak ediş tutarı belirlenir; Hazine ve Maliye Bakanlığı ile SGK'ya vadesi geçmiş borç olup olmadığı sorgulanır, borç varsa mahsup edildikten sonra kalan tutar şirkete ödenir.",
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-5 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                {step.n}
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-[#071A2F]">{step.t}</h4>
                <p className="leading-7 text-gray-700">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BELGELER */}
      <section id="belgeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Gerekli Belgeler
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          DYS üzerinden yüklenmesi istenen belgeler genel olarak şunları
          içerir; İBGS, dosyanıza özel ek belge de talep edebilir:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>Yurt içi marka tescil belgesi</li>
          <li>Yurt dışı marka tescil başvuru belgesi/dilekçesi</li>
          <li>Vekil/danışmanlık, araştırma-inceleme ve avukatlık hizmetlerine ait faturalar</li>
          <li>Ödemenin bankacılık kanalıyla yapıldığını gösteren banka onaylı hesap ekstresi/dökümü (kredi kartıyla ödemede kart ekstresi)</li>
          <li>Yurt dışında düzenlenmiş belgeler için Ticaret Müşavirliği/Ataşeliği onayı</li>
          <li>Talep edilmesi halinde vergi/SGK borcu bulunmadığına dair belge</li>
        </ul>
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <p className="leading-8 text-gray-700">
            ⚠️ Belgelerin asıllarının, denetim ve inceleme ihtimaline karşı{" "}
            <strong>en az 10 yıl</strong> boyunca (6102 sayılı Türk Ticaret
            Kanunu&apos;nun belgelerin saklanmasına ilişkin hükümleri
            uyarınca) sınıflandırılmış biçimde saklanması zorunludur.
          </p>
        </div>
      </section>

      {/* 7. ÖDEME */}
      <section id="odeme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Ödeme Nasıl Yapılır, Vergi/SGK Borcu Varsa Ne Olur?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💳 Ödeme Kanalı</h4>
            <p className="text-sm leading-7 text-gray-700">
              Tüm harcamaların şirket hesabından bankacılık kanalıyla
              (havale/EFT, kredi kartı) yapılmış olması gerekir. Müşteri
              çeki veya cirolu çekle yapılan ödemeler desteklenmez.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🧾 KDV Muafiyeti</h4>
            <p className="text-sm leading-7 text-gray-700">
              Satın alma yurt içinde yapılıp ifası yurt dışında
              gerçekleşen marka tescil hizmetlerinde, Gelir İdaresi
              Başkanlığı&apos;nın 60 sayılı KDV Sirküleri kapsamında
              KDV&apos;nin konusuna girmeyen hizmet giderleri{" "}
              <strong>KDV hariç</strong> tutar üzerinden desteklenir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">⚖️ Vergi/SGK Borcu Mahsubu</h4>
            <p className="text-sm leading-7 text-gray-700">
              Ödeme öncesi Hazine ve Maliye Bakanlığı ile SGK&apos;ya
              vadesi geçmiş borç sorgulanır. Borç varsa hak ediş önce bu
              kurumlara mahsup edilir, kalan tutar (varsa) şirkete ödenir.
              Yapılandırılmış borçlarda sözleşmeye uyulduğunun belgelenmesi
              yeterlidir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💱 Döviz Cinsi Giderler</h4>
            <p className="text-sm leading-7 text-gray-700">
              Döviz cinsinden giderler, ödeme belgesi tarihindeki Gösterge
              Niteliğindeki TCMB kurları esas alınarak TL&apos;ye çevrilip
              ödenir.
            </p>
          </div>
        </div>
      </section>

      {/* 8. ÖRNEK */}
      <section id="ornek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Örnek Hesaplama
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Temsili Örnek &mdash; Mobilya Markasının Avrupa Açılımı
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir mobilya markası, Madrid Protokolü üzerinden 5
            Avrupa ülkesinde marka tescili başvurusu yapıyor; vekil,
            araştırma-inceleme ve resmî işlem giderleri toplamda{" "}
            <strong>600.000 TL</strong>. Başvurulan ülkelerden ikisi
            Bakanlık&apos;ın o yılki hedef ülkeler listesinde, diğer üçü
            listede değil. Bu durumda hedef ülke olmayan üç ülke için %50
            (150.000 TL x 3 ülke oranlı harcama), hedef ülke olan iki ülke
            için %70 oranı üzerinden hesaplama yapılır. Her iki grubun
            toplamı, şirketin 2026 yıllık üst limiti olan{" "}
            <strong>3.698.274 TL&apos;nin</strong> çok altında kaldığı için
            hesaplanan tutarın tamamı destek kapsamına girer.
          </p>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              <strong>6 aylık süreyi kaçırmak:</strong> Ödeme belgesi
              tarihinden itibaren 6 ay içinde DYS başvurusu yapılmazsa
              harcama tamamen destek dışı kalır.
            </li>
            <li>
              <strong>Grup şirketinden fatura almak:</strong> Vekil/danışmanlık
              hizmetini şirketle ilişkili bir kişi/kurumdan almak, harcamayı
              baştan destek dışı bırakır.
            </li>
            <li>
              <strong>Marka yenileme giderini destek sanmak:</strong> Yalnızca
              ilk tescile ilişkin giderler desteklenir; yenileme (renewal)
              giderleri kapsam dışıdır.
            </li>
            <li>
              <strong>Yurt içi tescili unutmak:</strong> Yurt dışı başvuru
              yapılıp yurt içi tescil 6 ay içinde tamamlanmazsa, geriye
              dönük destek hakkı doğmaz.
            </li>
            <li>
              <strong>Eksik belge bildirimini geç cevaplamak:</strong> İBGS&apos;nin
              eksik belge bildirimine 3 ay içinde cevap verilmezse ilgili
              harcama değerlendirme dışı kalır.
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
              Şahıs şirketi bu destekten yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Genelge, destekten yalnızca &quot;şirketler&quot;in
              yararlanabileceğini belirtir; gerçek kişi/şahıs işletmesi
              başvuruları kapsam dışıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka tescili sonuçlanmadan başvuru yapılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Desteğin devreye girmesi için yurt dışı marka tescil
              başvurusunun yapılmış olması yeterlidir; tescilin
              onaylanmasını (sonuçlanmasını) beklemeye gerek yoktur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hedef ülke ve hedef sektör listesine nereden ulaşılır?
            </h3>
            <p className="leading-8 text-gray-700">
              Bakanlık, ilgili yılın hedef ülke ve hedef ülke/sektör
              listelerini kendi resmî internet sitesinde (ticaret.gov.tr)
              ilan eder; bu liste yıldan yıla değişebildiği için başvuru
              öncesi güncel listeyi kontrol etmek gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              4 yıllık destek süresi dolduktan sonra ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              İlgili markaya ilişkin destek hakkı sona erer; süre, ilk
              destek ödemesine esas ödeme belgesi tarihinden itibaren
              işlemeye başlar ve aradaki dönemlerde başvuru yapılmamış
              olması bu süreyi durdurmaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu destek Turquality veya Pazara Giriş Belgesi Desteği ile birlikte kullanılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, farklı harcama kalemlerine yönelik olmak kaydıyla
              birden fazla ihracat destek programından paralel şekilde
              yararlanılabilir; kısıt yalnızca aynı harcamanın birden fazla
              programdan mükerrer ödenmesine yöneliktir.
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
          Yurt dışına açılan bir markanın hedef ülkede tescilsiz kalması,
          hem ticari hem de hukuki açıdan ciddi bir risktir. Ticaret
          Bakanlığı&apos;nın Yurt Dışı Marka Tescil Desteği, bu adımın
          maliyetinin yarısından fazlasını geri ödemesiz olarak
          karşılayabilecek genişlikte bir imkândır &mdash; ancak destekten
          tam olarak yararlanmak, yurt içi tescil-yurt dışı başvuru
          sırasını doğru kurgulamayı, 6 aylık başvuru süresini kaçırmamayı
          ve belgeleri DYS üzerinden eksiksiz sunmayı gerektirir.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Sistem Global Danışmanlık bünyesinde, markanızın yurt dışı
          tescil stratejisinin belirlenmesinden DYS üzerinden destek
          başvurusunun hazırlanmasına, gerekli belgelerin İhracatçı
          Birliği nezdinde takibinden hedef ülke/sektör eşleşmesinin doğru
          değerlendirilmesine kadar bu süreci uçtan uca yürütüyoruz.
          Markanızın kuruluş, tescil ve ihracat danışmanlığı süreçlerinin
          aynı ekip tarafından yürütülmesi sayesinde ayrı bir yerel
          danışmanlık firması aramanıza gerek kalmıyor. Markanızı yurt
          dışında tescil ettirme ve bu süreçte devlet desteğinden
          yararlanma konusunda bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </BlogLayout>
  );
}
