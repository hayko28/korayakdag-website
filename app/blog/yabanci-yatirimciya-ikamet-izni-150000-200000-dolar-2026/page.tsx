import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yabancı Yatırımcıya İkamet İzni: 150.000-200.000 Dolar Kuralı | Koray Akdağ",
  description:
    "18 Kasım 2026 tarihli Resmî Gazete'de yayımlanan 11994 sayılı Cumhurbaşkanı Kararı, Türkiye'de çalışmayan yabancı yatırımcılara banka mevduatı, devlet tahvili, fon katılma payı veya bireysel emeklilik yoluyla 150.000 dolarla 3 yıllık, 200.000 dolarla 5 yıllık ikamet izni yolu açtı. Vatandaşlık şartlarından farkı, aile üyelerinin kapsamı ve dikkat edilmesi gerekenlerle güncel rehber.",
  keywords: [
    "yabancı yatırımcı ikamet izni",
    "150000 dolar ikamet izni Türkiye",
    "200000 dolar ikamet izni",
    "Karar Sayısı 11994",
    "yatırımcı ikamet izni 2026",
    "Türkiye'de yatırımla ikamet",
    "yatırım yoluyla vatandaşlık farkı",
  ],
  alternates: {
    canonical: "/blog/yabanci-yatirimciya-ikamet-izni-150000-200000-dolar-2026",
  },
};

const faq: { q: string; a: string }[] = [
  {
    q: "150.000 dolarlık yatırımla alınan ikamet izni kaç yıl geçerli?",
    a: "3 yıl geçerli. En az 200.000 dolarlık yatırımda ise izin süresi 5 yıla çıkıyor. Her iki durumda da yatırımın izin süresinin en az yarısı boyunca elde tutulması gerekiyor.",
  },
  {
    q: "Bu ikamet izni bana veya aileme Türk vatandaşlığı kazandırır mı?",
    a: "Hayır. Karar, bu kapsamda verilen ikamet izinlerinin 5901 sayılı Türk Vatandaşlığı Kanunu'nun 12. maddesi çerçevesinde değerlendirilmeyeceğini, yani vatandaşlık başvurusu için otomatik bir dayanak oluşturmayacağını açıkça belirtiyor.",
  },
  {
    q: "Hangi yatırım araçları bu ikamet izni için geçerli sayılıyor?",
    a: "Haber kaynaklarına göre beş araç sayılıyor: Türkiye'de faaliyet gösteren bankalara mevduat, Hazine ve Maliye Bakanlığı'nca ihraç edilen devlet borçlanma araçları, gayrimenkul yatırım fonu katılma payı, girişim sermayesi yatırım fonu katılma payı ve belirlenen planlar kapsamında bireysel emeklilik sistemine katkı payı. Doğrudan şirket kuruluşu veya gayrimenkul alımı bu beş araç arasında sayılmıyor.",
  },
  {
    q: "Yatırımı süre dolmadan geri çekersem ne olur?",
    a: "Karar, yatırımın izin süresinin en az yarısı boyunca elde tutulmasını şart koşuyor (3 yıllık izinde 1,5 yıl, 5 yıllık izinde 2,5 yıl). Bu süreden önce yatırımı tasfiye etmek, ikamet izninin iptal edilmesi riskini doğurabilir; ilgili banka veya kurum bu süreci izliyor.",
  },
  {
    q: "Eşim ve çocuklarım da aynı ikamet izninden yararlanabilir mi?",
    a: "Evet. Haberlere göre yatırımcının yabancı eşi ile yatırımcının veya eşinin ergin olmayan ya da bağımlı yabancı çocukları da kapsama alınıyor.",
  },
  {
    q: "Bu yolla Türkiye'de çalışabilir veya şirket yönetebilir miyim?",
    a: "Karar, Türkiye'de çalışmayan yabancılara yönelik bir ikamet izni düzenliyor. Türkiye'de fiilen çalışmak veya bir şirketi aktif yönetmek istiyorsanız, bu ikamet izni yerine veya buna ek olarak çalışma izni ya da şirket ortaklığı üzerinden ilerleyen ayrı bir yol değerlendirilmeli.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yabancı Yatırımcıya İkamet İzni: 150.000 veya 200.000 Dolarlık Yatırımla Nasıl Alınır?"
      description="18 Kasım 2026 tarihli Resmî Gazete'de yayımlanan 11994 sayılı Cumhurbaşkanı Kararı, Türkiye'de çalışmayan yabancı yatırımcılara banka mevduatı, devlet tahvili, fon katılma payı veya bireysel emeklilik yoluyla 150.000 dolarla 3 yıllık, 200.000 dolarla 5 yıllık ikamet izni yolu açtı. Kapsam, vatandaşlık şartlarından farkı ve dikkat edilmesi gerekenlerle resmî kaynaklara dayanan güncel rehber."
      category="YABANCI YATIRIMCI • İKAMET İZNİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="yabanci-yatirimciya-ikamet-izni-150000-200000-dolar-2026"
      coverImage="https://images.unsplash.com/photo-1755001979854-11a2ac59cc92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Türkiye'deki Yatırımınızın İş Tarafını Birlikte Kurgulayalım"
      ctaText="Bu ikamet izni yolunu mu, yoksa Türkiye'de fiilen faaliyet gösterecek bir şirket kurmayı mı değerlendirdiğinizi netleştirmenize, yatırımın iş gerekçesini ve sonrasındaki muhasebe/raporlama sürecini kurgulamanıza yardımcı oluyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Yeni Karar Ne Getiriyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>18 Kasım 2026</strong> tarihli Resmî Gazete&apos;de yayımlanan <strong>11994 sayılı</strong> Cumhurbaşkanı Kararı, Türkiye&apos;de çalışmayan yabancılara yönelik yeni bir <strong>yatırımcı ikamet izni</strong> yolu açtı.</li>
          <li>✔ En az <strong>150.000 dolar</strong> (veya dengi döviz) yatırımla <strong>3 yıllık</strong>, en az <strong>200.000 dolar</strong> yatırımla <strong>5 yıllık</strong> ikamet izni veriliyor.</li>
          <li>✔ Kapsamdaki araçlar: banka mevduatı, devlet borçlanma araçları, gayrimenkul yatırım fonu katılma payı, girişim sermayesi yatırım fonu katılma payı ve bireysel emeklilik katkı payı. <strong>Doğrudan gayrimenkul alımı veya şirket kuruluşu bu beş araca dahil değil.</strong></li>
          <li>✔ Yatırım, izin süresinin <strong>en az yarısı</strong> boyunca elde tutulmalı (3 yılda 1,5 yıl, 5 yılda 2,5 yıl).</li>
          <li>✔ Bu izin <strong>vatandaşlık değildir</strong>; 5901 sayılı Kanun&apos;un 12. maddesi kapsamında değerlendirilmiyor.</li>
          <li>✔ Yatırımcının yabancı eşi ve küçük/bağımlı çocukları da kapsama dahil ediliyor.</li>
          <li>✔ Başvuru usul ve esaslarını İçişleri Bakanlığı belirleyecek; bu metnin yazıldığı tarih itibarıyla uygulama tebliği henüz yayımlanmadı.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">📑 İçindekiler</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">1. Karar Nedir, Neden Önemli?</Link>
          <Link href="#araclar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">2. Kapsamdaki Yatırım Araçları</Link>
          <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">3. Tutarlar, Süreler ve Elde Tutma Şartı</Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">4. Karıştırmayın: İkamet İzni mi, Yatırımla Vatandaşlık mı?</Link>
          <Link href="#aile" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">5. Aile Üyeleri de Kapsamda mı?</Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">6. Kimler Başvurabilir, Kimler Yararlanamaz?</Link>
          <Link href="#basvuru" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">7. Başvuru Süreci Nasıl İşleyecek?</Link>
          <Link href="#hangi-yol" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">8. Bu Yol Kimler İçin Mantıklı?</Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">9. Dikkat Edilmesi Gerekenler</Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">10. Resmî Kaynaklar</Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">11. Sık Sorulan Sorular</Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">12. Sonuç</Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Karar Nedir, Neden Önemli?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;de uzun süredir, yabancı yatırımcıların ülkeye bağlanması
          denince akla ilk gelen yol <strong>yatırım yoluyla vatandaşlık</strong>
          {" "}oldu: 400.000 dolarlık gayrimenkul veya 500.000 dolarlık sabit
          sermaye, mevduat ya da fon yatırımı. Ancak her yabancı yatırımcı
          vatandaşlık istemiyor; çoğu zaman tek ihtiyaç, Türkiye&apos;de daha
          rahat kalabilmek, mülkünü veya finansal yatırımını buradan takip
          edebilmek ve her birkaç ayda bir vize yenilemek zorunda kalmamak.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          18 Kasım 2026 tarihli Resmî Gazete&apos;de yayımlanan <strong>11994
          sayılı &quot;Yabancı Yatırımcılara Düzenlenecek İkamet İzinlerine
          Dair Karar&quot;</strong>, tam olarak bu boşluğu dolduruyor. Karar,
          vatandaşlık eşiklerinin çok altında kalan 150.000-200.000 dolarlık
          bir yatırımla, Türkiye&apos;de çalışmayan yabancılara 3 veya 5
          yıllık bir ikamet izni hakkı tanıyor. Karar, yayımlandığı tarihte
          yürürlüğe girdi; hükümlerini İçişleri Bakanı yürütecek.
        </p>
      </section>

      {/* 2. ARAÇLAR */}
      <section id="araclar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kapsamdaki Yatırım Araçları
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Karar, ikamet izni hakkı doğuran yatırımı belirli araçlarla
          sınırlıyor. Haber kaynaklarına yansıyan listeye göre beş araç
          geçerli sayılıyor:
        </p>
        <div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yatırım Aracı</th>
                <th className="p-5">Kısa Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Banka mevduatı</td>
                <td className="p-5">Türkiye&apos;de faaliyet gösteren bir bankaya yatırılan döviz veya TL karşılığı mevduat.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Devlet borçlanma araçları</td>
                <td className="p-5">Hazine ve Maliye Bakanlığı&apos;nca ihraç edilen tahvil/bono gibi araçlar.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Gayrimenkul yatırım fonu katılma payı</td>
                <td className="p-5">Doğrudan gayrimenkul alımı değil, bir gayrimenkul yatırım fonundaki pay.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Girişim sermayesi yatırım fonu katılma payı</td>
                <td className="p-5">Bir girişim sermayesi fonuna ortak olma yoluyla yapılan yatırım.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Bireysel emeklilik katkı payı</td>
                <td className="p-5">Belirlenecek planlar kapsamında bireysel emeklilik sistemine yapılan katkı.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="leading-8 text-gray-700">
          Dikkat edilmesi gereken nokta şu: bu beş aracın dışında kalan,
          örneğin doğrudan bir konut veya işyeri satın alma ya da bir şirket
          kurup sermaye koyma, bu karar kapsamındaki ikamet izni için
          doğrudan dayanak oluşturmuyor. Gayrimenkul üzerinden ikamet
          izni almak isteyenler için Türkiye&apos;de zaten var olan ayrı bir
          &quot;ev sahibi ikamet izni&quot; rejimi bulunuyor; bu karar onun
          yerine geçmiyor, ona ek bir yatırımcı rotası sunuyor.
        </p>
      </section>

      {/* 3. TUTARLAR */}
      <section id="tutarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Tutarlar, Süreler ve Elde Tutma Şartı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Karardaki eşik yapısı iki kademeli:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 150.000 Dolar → 3 Yıl</h3>
            <p className="text-gray-700">
              En az 150.000 dolar veya dengi döviz tutarındaki yatırımla,
              3 yıl süreli ikamet izni alınabiliyor. Yatırımın en az{" "}
              <strong>1,5 yıl</strong> boyunca elde tutulması gerekiyor.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-orange-500 bg-orange-50 p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 200.000 Dolar → 5 Yıl</h3>
            <p className="text-gray-700">
              En az 200.000 dolar veya dengi döviz tutarındaki yatırımla,
              5 yıl süreli ikamet izni alınabiliyor. Yatırımın en az{" "}
              <strong>2,5 yıl</strong> boyunca elde tutulması gerekiyor.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Elde tutma şartının ölçüsü, izin süresinin tamamı değil{" "}
          <strong>yarısı</strong>. Yani 3 yıllık izin alan bir yatırımcı,
          yatırımını izin süresinin tamamı boyunca değil, en az 1,5 yıl
          tutmak zorunda. Seçilen araca göre ilgili banka veya kurum,
          yatırımın bu süre boyunca korunup korunmadığını izliyor; süre
          dolmadan yatırımı tasfiye etmek ikamet izninin iptaline yol
          açabiliyor.
        </p>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırmayın: İkamet İzni mi, Yatırımla Vatandaşlık mı?
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Daha Düşük Tutar, Daha Farklı Hak
          </h3>
          <p className="mb-6 leading-8 text-gray-700">
            Tutarların vatandaşlık eşiklerinden belirgin biçimde düşük
            olması, bu iznin &quot;ucuz bir vatandaşlık yolu&quot; olduğu
            yanılgısına yol açabiliyor. Oysa ikisi tamamen farklı hukuki
            sonuçlar doğuran, farklı kararlara dayanan iki ayrı rejim:
          </p>
          <div className="overflow-x-auto rounded-xl border border-red-200 bg-white">
            <table className="w-full text-left">
              <thead className="bg-red-100">
                <tr>
                  <th className="p-4">Kriter</th>
                  <th className="p-4">Yatırımcı İkamet İzni (11994)</th>
                  <th className="p-4">Yatırımla Vatandaşlık</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Asgari tutar</td>
                  <td className="p-4">150.000 $ (3 yıl) veya 200.000 $ (5 yıl)</td>
                  <td className="p-4">400.000 $ (gayrimenkul) veya 500.000 $ (diğer yollar)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Sonuç</td>
                  <td className="p-4">Belirli süreli ikamet izni</td>
                  <td className="p-4">Türk vatandaşlığı (süresiz)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Hukuki dayanak</td>
                  <td className="p-4">11994 sayılı Cumhurbaşkanı Kararı</td>
                  <td className="p-4">5901 sayılı Kanun madde 12 ve uygulama yönetmeliği</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Elde tutma</td>
                  <td className="p-4">İzin süresinin yarısı (1,5 veya 2,5 yıl)</td>
                  <td className="p-4">Genellikle 3 yıl</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Pasaport/oy hakkı</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Var</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Karar metni bu farkı açıkça vurguluyor: kapsamdaki ikamet
            izinleri, 5901 sayılı Türk Vatandaşlığı Kanunu&apos;nun 12.
            maddesi çerçevesinde değerlendirilmiyor. Yani bu izni almak,
            vatandaşlık başvurusu için otomatik bir hak veya kolaylık
            sağlamıyor; tamamen ayrı bir başvuru ve ayrı bir eşik gerekiyor
            (bkz.{" "}
            <Link href="/blog/yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar" className="font-semibold text-orange-600 underline">
              yatırım yoluyla Türk vatandaşlığı rehberimiz
            </Link>
            ).
          </p>
        </div>
      </section>

      {/* 5. AİLE */}
      <section id="aile" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Aile Üyeleri de Kapsamda mı?
        </h2>
        <p className="leading-8 text-gray-700">
          Haberlere yansıyan bilgilere göre, karar yalnızca yatırımı yapan
          kişiyi değil ailesini de kapsıyor: yatırımcının{" "}
          <strong>yabancı eşi</strong> ile yatırımcının veya eşinin{" "}
          <strong>ergin olmayan ya da bağımlı yabancı çocukları</strong> da
          aynı ikamet izni kapsamına dahil edilebiliyor. Bu, özellikle
          ailesiyle birlikte Türkiye&apos;de kalmayı planlayan yatırımcılar
          için önemli bir ayrıntı; tek bir yatırımla ailenin tamamının
          statüsü çözülebiliyor.
        </p>
      </section>

      {/* 6. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler Başvurabilir, Kimler Yararlanamaz?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">✅ Uygun Profil</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Türkiye&apos;de fiilen çalışmayı planlamayan yabancı yatırımcılar</li>
              <li>✔ Mülkünü veya finansal birikimini Türkiye&apos;ye taşımak isteyen, buradan takip etmek isteyenler</li>
              <li>✔ Ailesiyle birlikte orta vadeli (3-5 yıl) bir ikamet statüsü arayanlar</li>
              <li>✔ Kapsamdaki beş araçtan birine, belirlenen asgari tutarda yatırım yapabilecek olanlar</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">❌ Uygun Olmayan Profil</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✘ Türkiye&apos;de fiilen çalışmak veya bir şirketi aktif yönetmek isteyenler (bkz.{" "}
                <Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">
                  çalışma izni rehberimiz
                </Link>)</li>
              <li>✘ Doğrudan konut/işyeri satın alarak ikamet izni almak isteyenler (bu karar kapsamı dışında, ayrı bir ev sahibi ikamet izni rejimi geçerli)</li>
              <li>✘ Nihai hedefi vatandaşlık olan ve bunu bu düşük tutarla elde edebileceğini düşünenler</li>
              <li>✘ Yatırımı kısa vadede (1,5-2,5 yıldan önce) elden çıkarmayı planlayanlar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. BAŞVURU */}
      <section id="basvuru" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Başvuru Süreci Nasıl İşleyecek?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Karar, bu hizmetlere ve başvurulara ilişkin usul ve esasları
          belirleme yetkisini İçişleri Bakanlığı&apos;na bırakıyor. Bu
          yazının hazırlandığı tarih itibarıyla, başvurunun hangi
          makama (muhtemelen Göç İdaresi Başkanlığı il müdürlükleri)
          yapılacağı, istenecek belge listesi ve yatırımın nasıl
          belgelendirileceğine ilişkin ayrıntılı bir tebliğ henüz
          yayımlanmadı. Bilinen genel çerçeve şöyle:
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Aracı seçilir</h3>
            <p className="mt-2 text-sm text-gray-600">Beş kapsamdaki araçtan biri (mevduat, tahvil, fon payı, emeklilik katkısı) seçilir.</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Yatırım gerçekleştirilir</h3>
            <p className="mt-2 text-sm text-gray-600">İlgili banka veya kurum nezdinde asgari tutar (150.000 veya 200.000 dolar) yatırılır.</p>
          </div>
          <div className="rounded-xl border-2 border-orange-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Uygunluk teyit edilir</h3>
            <p className="mt-2 text-sm text-gray-600">Yatırımın şartlara uygunluğu, ilgili banka veya kurumca doğrulanır.</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-500 p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">İkamet izni başvurusu yapılır</h3>
            <p className="mt-2 text-sm text-gray-600">İçişleri Bakanlığı&apos;nın belirleyeceği usul çerçevesinde başvuru yapılır.</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Uygulama tebliği yayımlanana kadar, bu dört adımın son ikisindeki
          somut prosedür netleşmeyecek. Yatırım kararını vermeden önce,
          güncel uygulama usulünü Göç İdaresi Başkanlığı&apos;nın ve
          İçişleri Bakanlığı&apos;nın resmî duyurularından teyit etmek
          gerekiyor.
        </p>
      </section>

      {/* 8. HANGİ YOL */}
      <section id="hangi-yol" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Bu Yol Kimler İçin Mantıklı?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;de bulunmayı planlayan her yabancı yatırımcı için
          doğru yol aynı değil. Üç farklı hedefe göre üç farklı rota
          düşünülebilir:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <strong>Sadece Türkiye&apos;de kalabilmek, çalışmamak isteyenler:</strong>{" "}
            Bu karar kapsamındaki yatırımcı ikamet izni, nispeten düşük
            tutar ve esnek araç seçenekleriyle en doğrudan yol.
          </li>
          <li>
            <strong>Türkiye&apos;de fiilen ticaret yapmak, şirket yönetmek isteyenler:</strong>{" "}
            Bu karar yerine{" "}
            <Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="font-semibold text-orange-600 underline">
              şirket kuruluşu
            </Link>{" "}
            ve ardından{" "}
            <Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="font-semibold text-orange-600 underline">
              çalışma izni başvurusu
            </Link>{" "}
            yolu değerlendirilmeli.
          </li>
          <li>
            <strong>Nihai hedefi Türk vatandaşlığı olanlar:</strong>{" "}
            400.000-500.000 dolarlık{" "}
            <Link href="/blog/yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar" className="font-semibold text-orange-600 underline">
              vatandaşlık yollarından
            </Link>{" "}
            birini baştan planlamak gerekiyor; bu karar üzerinden kademeli
            bir vatandaşlık yolu bulunmuyor.
          </li>
        </ul>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Uygulama tebliği henüz yayımlanmadı.</strong> Başvuru makamı, belge listesi ve süreç detayları İçişleri Bakanlığı tarafından ayrıca belirlenecek.</li>
            <li>Kapsamdaki araçlar sınırlı; <strong>doğrudan gayrimenkul veya şirket kuruluşu bu beş araca girmiyor.</strong></li>
            <li>Elde tutma süresi, izin süresinin <strong>tamamı değil yarısı</strong>; ama bu süreden önce yatırımı bozmak ikamet iznini riske atıyor.</li>
            <li>Bu izin <strong>vatandaşlık hakkı doğurmuyor</strong>; iki rejimi birbirinin yerine kullanmak yanlış beklenti yaratır.</li>
            <li>Döviz kuru ve dolar bazlı eşik, yatırım anındaki kur üzerinden hesaplanır; kur dalgalanmaları başvuru planlamasını etkileyebilir.</li>
          </ul>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            Bu tür kararlarda en sık gözden kaçan nokta, düşük giriş
            eşiğinin kalıcı bir statü vaat ettiği yanılgısı. Karar, bilinçli
            olarak ikamet iznini vatandaşlıktan ayrıştırıyor ve elde tutma
            süresini izin süresinin tamamına değil yarısına bağlıyor; bu da
            yatırımcının izin süresinin ikinci yarısında yatırımı serbestçe
            yönetebileceği, ama bunun ikamet izninin kendiliğinden
            uzayacağı anlamına gelmediği bir ayrımı gerektiriyor. Süre
            sonunda yeniden başvuru ve yeniden yatırım şartının aranıp
            aranmayacağı, ancak uygulama tebliğiyle netleşecek. Yatırım
            kararını, yalnızca giriş tutarına değil bu süre sonrası
            belirsizliğe göre de planlamak gerekiyor.
          </p>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/11/20261118.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                18 Kasım 2026 Tarihli Resmî Gazete - resmigazete.gov.tr (11994 sayılı Karar)
              </a>
            </li>
            <li>
              <a href="https://www.goc.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Göç İdaresi Başkanlığı - goc.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.icisleri.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                İçişleri Bakanlığı - icisleri.gov.tr
              </a>
            </li>
            <li>
              <a href="https://www.bloomberght.com/yabanci-yatirimcilara-verilecek-ikamet-izinlerinde-yeni-duzenleme-3794934" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Bloomberg HT - Yabancı Yatırımcılara Verilecek İkamet İzinlerinde Yeni Düzenleme
              </a>
            </li>
            <li>
              <a href="https://www.cnbce.com/haberler/turkiyede-yatirim-yapan-yabancilara-5-yillik-ikamet-izni-alt-sinir-150-bin-dolar-h42056" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                CNBC-e - Türkiye&apos;de Yatırım Yapan Yabancılara 5 Yıllık İkamet İzni
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Karar metninin tamamı bu yazının hazırlandığı tarihte doğrudan
            incelenememiştir; bilgiler iki bağımsız haber kaynağının
            örtüşen aktarımına dayanmaktadır. Başvuru öncesinde Resmî
            Gazete&apos;deki tam metni ve İçişleri Bakanlığı&apos;nın
            uygulama tebliğini mutlaka teyit edin.
          </p>
        </div>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">{item.q}</h3>
              <p className="leading-8 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Türkiye&apos;deki Yatırımınızın İş Tarafını Birlikte Kurgulayalım
          </h3>
          <p className="leading-8 text-gray-700">
            Bu ikamet izni yolunu mu, yoksa Türkiye&apos;de fiilen faaliyet
            gösterecek bir{" "}
            <Link href="/blog/turkiyede-sirket-kurma-maliyeti-2026" className="text-orange-600 underline">
              şirket kurmayı
            </Link>{" "}
            mı değerlendirdiğinizi netleştirmenize, yatırımın iş
            gerekçesini ve Türkiye tarafındaki kuruluş/muhasebe sürecini
            baştan sona kurgulamanıza yardımcı oluyoruz. İkamet izni
            başvurusunun kendisi için lisanslı bir göç hukuku uzmanına
            danışmanızı öneririz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          11994 sayılı Karar, Türkiye&apos;ye yönelik yabancı yatırımcı
          ilgisinde vatandaşlıkla ikamet izni arasındaki boşluğu dolduran,
          belirgin biçimde düşük eşikli ve finansal araçlara dayanan yeni
          bir statü sunuyor. Ancak uygulama tebliği yayımlanmadan, sürecin
          somut işleyişi hakkında kesin bir şey söylemek mümkün değil;
          yatırım kararını vermeden önce güncel uygulama usulünü ve kur
          bazlı tutarları teyit etmek gerekiyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, Türkiye&apos;ye
          yatırım yapmayı planlayan yabancı yatırımcılara, hedeflerine
          (ikamet, şirket kuruluşu veya vatandaşlık) göre en uygun yolun
          belirlenmesinde ve Türkiye tarafındaki iş ve muhasebe
          süreçlerinin kurgulanmasında destek oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/blog/yatirim-yoluyla-turk-vatandasligi-2026-resmi-sartlar" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md">
            <div className="mb-2 text-sm font-semibold text-orange-600">VATANDAŞLIK • YATIRIMCI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Yoluyla Türk Vatandaşlığı 2026: Resmî Şartlar</h3>
          </Link>
          <Link href="/blog/yabanci-ortak-calisma-izni-sartlari-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md">
            <div className="mb-2 text-sm font-semibold text-orange-600">YABANCI YATIRIMCI • ÇALIŞMA İZNİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yabancı Ortak Çalışma İzni Şartları 2026</h3>
          </Link>
          <Link href="/blog/turkiyede-yatirim-yapmanin-avantajlari-2026" className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md">
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜRKİYE&apos;DE YATIRIM • GENEL BAKIŞ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türkiye&apos;de Yatırım Yapmanın Avantajları 2026</h3>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
