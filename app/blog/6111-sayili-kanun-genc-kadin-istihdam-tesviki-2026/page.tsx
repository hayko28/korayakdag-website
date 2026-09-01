import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "6111 Sayılı Kanun İstihdam Teşviki 2026: Genç, Kadın ve Mesleki Belge Sahibi Çalışanlarda Şartlar ve Son Tarih | Koray Akdağ",
  description:
    "4447 sayılı Kanun Geçici 10. Madde kapsamındaki 6111 (06111) istihdam teşvikinde işveren primi tamamen karşılanıyor. 10769 sayılı Cumhurbaşkanı Kararı ile 31 Aralık 2026'ya uzatılan süre, şartlar, destek tutarları ve başvuru süreciyle güncel rehber.",
  keywords: [
    "6111 sayılı kanun teşviki",
    "06111 teşvik",
    "genç kadın istihdam teşviki 2026",
    "4447 sayılı kanun geçici 10 madde",
    "sgk istihdam teşviki 2026",
    "işveren sigorta primi teşviki",
    "mesleki belge istihdam teşviki",
    "sgk teşvik kodu 06111",
    "2026 istihdam teşviki son tarih",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="6111 Sayılı Kanun İstihdam Teşviki: Genç, Kadın ve Mesleki Belge Sahibi Çalışanlarda 2026 Şartları ve Son Tarih"
      description="4447 sayılı Kanun Geçici 10. Madde kapsamındaki 06111 teşvik kodlu istihdam desteğinde işveren sigorta primi payının tamamı İşsizlik Sigortası Fonu'ndan karşılanıyor. 10769 sayılı Cumhurbaşkanı Kararı ile 31 Aralık 2026'ya uzatılan kapsama giriş tarihi, şartlar, süre tablosu ve 2026 örnek tutarlarla güncel rehber."
      category="SGK TEŞVİKLERİ • İSTİHDAM • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="6111-sayili-kanun-genc-kadin-istihdam-tesviki-2026"
      coverImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İşverenlerin en az bilinen ama en yüksek tasarruf sağlayan SGK
          teşviklerinden biri olan 6111 sayılı Kanun teşviki (SGK teşvik kodu
          06111), 25 Aralık 2025 tarihli 10769 sayılı Cumhurbaşkanı Kararı ile
          31 Aralık 2026&apos;ya kadar uzatıldı. Bu tarihten sonra işe
          alınacak personel için teşvik hakkı doğmayacağından, uygun personel
          alımlarını 2026 sonuna kadar tamamlamak işverenler için ciddi bir
          maliyet avantajı anlamına geliyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Teşvikin yasal dayanağı ve kapsamı</li>
          <li>✔ Kimler (yaş, cinsiyet, belge durumuna göre) yararlanabilir?</li>
          <li>✔ Süre tablosu: 6 aydan 54 aya kadar değişen teşvik süreleri</li>
          <li>✔ 2026 asgari ücret üzerinden örnek tasarruf hesaplaması</li>
          <li>✔ İşveren için aranan şartlar</li>
          <li>✔ Adım adım uygulama süreci</li>
          <li>✔ 31 Aralık 2026 tarihinin neden kritik olduğu</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#yasal-dayanak" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Teşvik Nedir? Yasal Dayanağı
          </Link>
          <Link href="#kimler-yararlanabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Yararlanabilir? Süre Tablosu
          </Link>
          <Link href="#destek-tutari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Tutarı ve 2026 Örnek Hesaplama
          </Link>
          <Link href="#isveren-sartlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. İşveren İçin Aranan Şartlar
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Uygulama Süreci
          </Link>
          <Link href="#neden-simdi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. 31 Aralık 2026 Neden Kritik?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. YASAL DAYANAK */}
      <section id="yasal-dayanak" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Teşvik Nedir? Yasal Dayanağı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Uygulamada &quot;6111 sayılı Kanun teşviki&quot; olarak bilinen bu
          destek, aslında 6111 sayılı Kanun&apos;un 74. maddesiyle 4447 sayılı
          İşsizlik Sigortası Kanunu&apos;na eklenen{" "}
          <strong>Geçici 10. Madde</strong>&apos;ye dayanır. SGK sisteminde{" "}
          <strong>06111 kanun numarası</strong> ile uygulanır. Amacı, gençlerin
          ve kadınların işgücüne katılımını artırmak, mesleki belge/diploma
          sahibi olmayı teşvik etmek ve kayıtlı istihdamı genişletmektir.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Teşvik 2011&apos;den bu yana yürürlükte olup her yıl sonunda
          çıkarılan bir Cumhurbaşkanı Kararı ile kapsama yeni işe alım
          yapılabilecek son tarih bir yıl daha ileri alınıyor. Son uzatma,{" "}
          <strong>25 Aralık 2025</strong> tarihli ve <strong>33118 sayılı
          Resmî Gazete</strong>&apos;de yayımlanan{" "}
          <strong>10769 sayılı Cumhurbaşkanı Kararı</strong> ile yapıldı; bu
          karar uyarınca <strong>1 Mart 2011 – 31 Aralık 2026</strong> tarihleri
          arasında işe alınan uygun sigortalılar için teşvikten yararlanılabiliyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısaca: teşvik kalıcı değil, her yıl yeniden uzatılan bir
            uygulama. Şu anki geçerli son tarih <strong>31 Aralık 2026</strong>{" "}
            — bu tarihe kadar işe alınmayan personel için (yeni bir uzatma
            kararı çıkmadığı sürece) teşvik hakkı doğmuyor.
          </p>
        </div>
      </section>

      {/* 2. KİMLER YARARLANABİLİR */}
      <section id="kimler-yararlanabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Yararlanabilir? Süre Tablosu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Teşvikten yararlanmak için işe alınan sigortalının şu temel şartları
          taşıması gerekir:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Sigortalıda Aranan Temel Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>18 yaşından büyük olmak.</li>
            <li>
              İşe giriş tarihinden önceki <strong>son 6 ay</strong> boyunca
              5510 sayılı Kanun&apos;un 4/a maddesi kapsamında sigortalı
              olarak çalışmamış (aylık prim ve hizmet belgesinde bildirilmemiş)
              olmak.
            </li>
            <li>
              <strong>Kadınlarda</strong> üst yaş sınırı aranmaz.
              <strong> Erkeklerde</strong> 18-29 yaş aralığında olmak esas
              alınır; 29 yaşını dolduranlar ancak mesleki belge/diploma
              sahibiyse ve sınırlı sürelerle teşvikten faydalanabilir.
            </li>
            <li>
              Mesleki yeterlilik belgesi, mesleki/teknik eğitim diploması
              veya ustalık belgesi sahibi olunması hâlinde teşvik süresi
              belirgin şekilde uzuyor.
            </li>
            <li>
              Fiilen çalışılmış veya kanunen çalışılmış sayılan sürelerin
              (yıllık izin, resmî tatil vb.) bildirilmesi.
            </li>
          </ul>
        </div>

        <p className="mt-10 mb-6 text-lg leading-9 text-gray-700">
          Teşvik süresi, sigortalının belge durumuna ve İŞKUR&apos;a kayıtlı
          işsiz olup olmadığına göre değişiyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Sigortalının Durumu</th>
                <th className="p-5">İŞKUR Kaydı Yoksa</th>
                <th className="p-5">İŞKUR&apos;a Kayıtlı İşsizse</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mesleki yeterlilik belgesi sahibi</td>
                <td className="p-5">48 ay</td>
                <td className="p-5">54 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mesleki/teknik eğitim diploması veya ustalık belgesi sahibi</td>
                <td className="p-5">36 ay</td>
                <td className="p-5">42 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">18-29 yaş genç / kadın, belgesi yok</td>
                <td className="p-5">24 ay</td>
                <td className="p-5">30 ay</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">29 yaş üzeri erkek, belge/diploma sahibi</td>
                <td className="p-5">24 ay</td>
                <td className="p-5">30 ay</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">29 yaş üzeri erkek, belgesi yok</td>
                <td className="p-5">Yararlanamaz</td>
                <td className="p-5">6 ay</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Önemli nokta: teşvik hakkı, işe alım tarihi 31 Aralık 2026&apos;ya
            kadar gerçekleştiği sürece doğuyor. Yani 2026&apos;nın son
            aylarında işe alınan ve mesleki yeterlilik belgesi bulunan bir
            çalışan için işveren, hakkı kazandıktan sonra 2027, 2028, hatta
            2030&apos;a kadar (54 ay boyunca) bu teşvikten faydalanmaya devam
            edebilir.
          </p>
        </div>
      </section>

      {/* 3. DESTEK TUTARI */}
      <section id="destek-tutari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Tutarı ve 2026 Örnek Hesaplama
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Teşvik kapsamında, uygun sigortalının prime esas kazancı üzerinden
          hesaplanan <strong>işveren hissesine düşen sigorta priminin
          tamamı</strong> İşsizlik Sigortası Fonu&apos;ndan karşılanır.
          İşveren, sadece sigortalı hissesini ve varsa diğer yasal kesintileri
          öder; kendi payına düşen kısmı fiilen ödemez.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Uygulamada bu, prime esas kazancın yaklaşık <strong>%19,75&apos;i</strong>{" "}
          (imalat sanayiinde ilave puan indirimiyle birlikte yaklaşık{" "}
          <strong>%16,75&apos;i</strong>) oranında aylık bir tasarrufa denk
          gelir. 2026 yılı için Çalışma ve Sosyal Güvenlik Bakanlığı
          tarafından açıklanan <strong>brüt asgari ücret (33.030 TL)</strong>{" "}
          ve <strong>SGK prim tavanı (297.270 TL)</strong> üzerinden örnek
          rakamlar şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Prime Esas Kazanç (2026)</th>
                <th className="p-5">Yaklaşık Aylık İşveren Tasarrufu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">33.030 TL (asgari ücret)</td>
                <td className="p-5">≈ 7.184 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">297.270 TL (SGK tavanı)</td>
                <td className="p-5">≈ 64.656 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu rakamlar sabit oranlar değil; sigortalının sektörü (imalat
            olup olmadığı), ücreti ve varsa aynı anda uygulanabilen başka
            teşviklerle birlikte hesaplanma şekli işletmeden işletmeye
            değişebilir. Örneğin 10 kişilik bir ekibin yarısını uygun
            profilde ve asgari ücret civarında istihdam eden bir işletme,
            yıllık bazda yüz binlerce TL&apos;lik bir prim tasarrufuna
            ulaşabilir. Şirketinize özel net rakamı görmek için bordro
            verileriniz üzerinden hesaplama yapılması gerekir.
          </p>
        </div>
      </section>

      {/* 4. İŞVEREN ŞARTLARI */}
      <section id="isveren-sartlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. İşveren İçin Aranan Şartlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Teşvikten yararlanmak isteyen işverenlerin de aşağıdaki koşulları
          sağlaması gerekir:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Özel Sektör İşvereni Olmak</h3>
            <p className="text-gray-700">
              Teşvik yalnızca özel sektör işyerlerinde uygulanır; kamu
              ihalesi/kamu kurumu işlerinde çalıştırılan sigortalılar için
              teşvikten yararlanılamaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">📈</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Ortalamaya İlave İstihdam</h3>
            <p className="text-gray-700">
              İşe alınan kişi, işe giriş tarihinden önceki 6 aylık ortalama
              sigortalı sayısına <strong>ilave</strong> olmalı; bu şart her ay
              yeniden kontrol edilir. Mevcut çalışan sayısını azaltıp yerine
              başka biri almak teşvik hakkı doğurmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🧾</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">Prim ve Beyan Yükümlülükleri</h3>
            <p className="text-gray-700">
              Aylık Prim ve Hizmet Belgesi / Muhtasar ve Prim Hizmet
              Beyannamesi&apos;nin yasal süresinde verilmesi, kalan primlerin
              zamanında ödenmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">⚖️</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">SGK Borcu Bulunmaması</h3>
            <p className="text-gray-700">
              İşyerinin muaccel (vadesi geçmiş) sigorta prim, idari para
              cezası vb. borcu bulunmaması gerekir; yapılandırılmış ve
              düzenli ödenen borçlar bu şartı bozmaz.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Uygulama Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          6111 teşviki için ayrı bir &quot;başvuru formu&quot; doldurulmaz;
          süreç bordro ve SGK bildirim sistemi üzerinden işletilir:
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Uygunluk Sorgusu</h3>
              <p className="text-gray-700">
                İşe alınacak adayın son 6 aylık sigortalılık geçmişi ve
                yaş/belge durumu, e-SGK İşveren Sistemi üzerinden sorgulanarak
                06111 kapsamına girip girmediği tespit edilir.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İşe Giriş Bildirgesi</h3>
              <p className="text-gray-700">
                Sigortalı işe giriş bildirgesi yasal süresinde (işe başlamadan
                önce) SGK&apos;ya verilir.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Beyannamede 06111 Kodu Seçimi</h3>
              <p className="text-gray-700">
                Aylık Muhtasar ve Prim Hizmet Beyannamesi&apos;nde ilgili
                sigortalı için 06111 kanun numarası seçilerek teşvikli
                bildirim yapılır.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Aylık Şart Kontrolü</h3>
              <p className="text-gray-700">
                Ortalama sigortalı sayısı, borç durumu ve beyanname/ödeme
                süreleri gibi şartlar her ay yeniden değerlendirilir; şartın
                bozulduğu ay için teşvik uygulanmaz.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Kalan Primlerin Ödenmesi</h3>
              <p className="text-gray-700">
                İşveren hissesi dışında kalan sigortalı hissesi ve varsa diğer
                yükümlülükler yasal süresinde ödenerek süreç tamamlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEDEN ŞİMDİ */}
      <section id="neden-simdi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. 31 Aralık 2026 Neden Kritik?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Teşvikin en çok gözden kaçırılan yönü, kalıcı değil{" "}
          <strong>süreye bağlı bir uygulama</strong> olmasıdır. 10769 sayılı
          Cumhurbaşkanı Kararı, kapsama yeni işe alım yapılabilecek son
          tarihi 31 Aralık 2026 olarak belirledi. Bu, iki yönlü bir anlam
          taşıyor:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              ✅ 2026 sonuna kadar işe alım yapılırsa
            </h3>
            <p className="text-gray-700">
              Teşvik hakkı doğar ve süre tablosuna göre (24-54 ay) hak,
              işe alım tarihinden itibaren 2027, 2028, hatta 2030&apos;a
              kadar kullanılmaya devam edebilir.
            </p>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-red-700">
              ⚠️ 31 Aralık 2026&apos;dan sonra işe alım yapılırsa
            </h3>
            <p className="text-gray-700">
              Yeni bir uzatma kararı Resmî Gazete&apos;de yayımlanmadığı
              sürece, bu tarihten sonra işe alınan personel için 06111
              teşvikinden yararlanma imkânı kalmaz.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu nedenle 2026&apos;nın son çeyreğinde personel alımı planlayan
          işletmelerin, uygun profildeki (18-29 yaş genç, kadın veya mesleki
          belge/diploma sahibi) adayları öne çekerek işe alımı 2026 sonuna
          kadar tamamlaması, uzun vadeli ciddi bir prim tasarrufu anlamına
          gelir.
        </p>
      </section>

      {/* 7. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Geriye dönük ilk kez yararlanma (1 Mayıs 2021 sonrası dönemler için) mümkün değildir; teşvik zamanında beyan edilmelidir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı sigortalı için aynı anda birden fazla SGK teşvikinden yararlanılamaz; hangi teşvikin işletmeye daha avantajlı olduğu önceden hesaplanmalı
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Ortalama sigortalı sayısı şartı her ay yeniden kontrol edilir; personel azaltımı yapan işyerlerinde teşvik durabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kayıt dışı istihdam veya muvazaalı işlem tespiti hâlinde teşvik geriye dönük iptal edilip gecikme cezasıyla geri alınabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Beyanname ve ödemelerin süresinde yapılmaması, ilgili ay için teşvik hakkının kaybedilmesine yol açar
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İmalat sektöründeki işyerlerinde ilave puan indirimi devreye girdiğinden hesaplama farklılaşabilir; sektör kodunuzu (NACE) doğru bildirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Süre tablosundaki ay sayıları, işe alım tarihinden itibaren işlediği için erken başvuru daha uzun toplam fayda sağlar
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Bordro ve teşvik hesaplamalarınızı ayrı bir yerel muhasebeci aramadan uçtan uca bize devredebilirsiniz
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Bordro ve SGK Teşvik Süreçlerinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi çalışanlarınızın 6111 sayılı Kanun teşviki veya diğer SGK
            teşviklerinden yararlanabileceğinin tespiti, doğru kodun
            beyannameye işlenmesi ve şartların her ay takip edilmesi teknik
            bir süreçtir. Bordro yönetimi ve SGK teşvik/kredibilite
            analizlerinizi, ayrı bir yerel muhasebeci aramanıza gerek kalmadan
            baştan sona biz yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinize özel tasarruf potansiyelini birlikte hesaplamak için
              bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 8. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              6111 sayılı Kanun teşviki ile 06111 teşvik kodu aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Halk arasında ve mevzuat yazışmalarında &quot;6111 sayılı
              Kanun teşviki&quot; olarak anılan uygulama, teknik olarak 4447
              sayılı Kanun&apos;un Geçici 10. maddesine dayanır ve SGK
              sisteminde 06111 kanun numarasıyla bildirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Teşvik süresi doldu, çalışan hâlâ işyerinde çalışıyor. Ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Süre tablosunda belirtilen ay sayısı (24-54 ay) dolduğunda
              teşvik kendiliğinden sona erer; çalışan işyerinde çalışmaya
              devam etse dahi o tarihten sonraki primler normal oranlar
              üzerinden bildirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şu an çalışan personelim için geriye dönük başvuru yapabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              1 Mayıs 2021 sonrası dönemler için ilk kez geriye dönük
              yararlanma mümkün değildir. Teşvik, uygunluk şartlarının
              oluştuğu ayda zamanında beyan edilmelidir; bu nedenle mevcut
              personelinizin teşvike uygunluğunun önceden kontrol edilmesi
              önemlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              31 Aralık 2026&apos;dan sonra teşvik tamamen kalkacak mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Bugün itibarıyla geçerli son tarih bu şekilde belirlenmiş
              olmakla birlikte, uygulama 2011&apos;den bu yana her yıl
              yeniden uzatılıyor. Yeni bir uzatma kararı çıkıp çıkmayacağı
              yıl sonuna doğru Resmî Gazete&apos;den takip edilmelidir; ancak
              belirsizliğe güvenmek yerine mevcut kesin son tarihe göre
              planlama yapmak daha güvenlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Küçük bir işletme için bu teşvik gerçekten anlamlı bir tasarruf sağlar mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Asgari ücretli bir çalışan için aylık yaklaşık 7.000 TL
              civarında bir işveren primi tasarrufu, 24-54 aylık süre boyunca
              tek bir personel için dahi yüz binlerce TL&apos;ye ulaşabilir.
              Birden fazla uygun profilde personel istihdam eden işletmelerde
              bu tutar katlanarak artar.
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
          6111 sayılı Kanun teşviki (06111), Türkiye&apos;deki en yüksek
          oranlı SGK istihdam teşviklerinden biri olmasına rağmen, süreye
          bağlı ve teknik şartları olan bir uygulama olduğu için çoğu
          işletme tarafından tam kapasiteyle kullanılmıyor. 31 Aralık 2026
          son tarihiyle birlikte, uygun profildeki personel alımlarını bu
          yılın sonuna kadar planlamak, işletmenizin önümüzdeki yıllarda
          önemli bir prim tasarrufu elde etmesini sağlayabilir. Doğru
          hesaplama, doğru bildirim ve her ay takip gerektiren bu süreçte
          profesyonel destek almak, hem teşvik hakkının kaybedilmesini hem de
          hatalı bildirimden doğabilecek geri ödeme risklerini önler.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/istihdami-koruma-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • İSTİHDAM DESTEĞİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">İstihdamı Koruma Destek Programı 2026</h3>
        </Link>
        <Link
          href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
