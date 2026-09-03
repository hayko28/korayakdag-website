import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ'ler İçin Neden Gerekli? | Koray Akdağ",
  description:
    "2026 güncel kurumlar vergisi oranları, transfer fiyatlandırması belgelendirme eşikleri, yurt dışı gelirlerin vergilendirilmesi ve e-fatura/e-defter yükümlülükleriyle KOBİ'ler için kapsamlı vergi danışmanlığı rehberi.",
  keywords: [
    "ulusal ve uluslararası vergi danışmanlığı",
    "vergi planlaması nedir",
    "transfer fiyatlandırması raporu kimler için zorunlu",
    "yurt dışından gelir elde eden şirket vergilendirme",
    "2026 kurumlar vergisi oranı",
    "kobi vergi danışmanlığı",
    "yurt dışı iştirak kazançları istisnası",
    "e-fatura e-defter zorunluluğu 2026",
    "çifte vergilendirmeyi önleme anlaşması",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Ulusal ve Uluslararası Vergi Danışmanlığı: KOBİ'ler İçin Neden Gerekli?"
      description="2026 güncel kurumlar vergisi oranları, transfer fiyatlandırması belgelendirme yükümlülükleri, yurt dışından gelir elde eden şirketlerin vergilendirilmesi ve e-fatura/e-defter hadleriyle KOBİ'ler için kapsamlı vergi danışmanlığı rehberi."
      category="VERGİ VE FİNANSAL YÖNETİM • VERGİ DANIŞMANLIĞI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="ulusal-uluslararasi-vergi-danismanligi-kobiler-icin-onemi"
      coverImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de büyüyen, ihracat yapan veya yurt dışında bağlantısı
          olan çoğu KOBİ, vergiyi yalnızca &quot;beyanname verme&quot;
          işlemi olarak görür. Oysa kurumlar vergisi oranındaki farklılıklar,
          transfer fiyatlandırması belgelendirme yükümlülükleri ve yurt
          dışından elde edilen gelirlerin vergilendirilme şekli, doğru
          planlanmadığında hem gereksiz vergi yükü hem de ciddi idari para
          cezası riski doğurur. Bu yazıda ulusal ve uluslararası vergi
          danışmanlığının KOBİ&apos;ler için neden bir lüks değil, büyüme
          sürecinin ayrılmaz bir parçası olduğunu 2026 güncel mevzuatla
          anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Vergi planlaması ile vergiden kaçınma arasındaki fark</li>
          <li>✔ 2026 güncel kurumlar vergisi oranları ve asgari kurumlar vergisi</li>
          <li>✔ Transfer fiyatlandırması raporu ve formu kimler için zorunlu?</li>
          <li>✔ Yurt dışından gelir elde eden şirket nasıl vergilendirilir?</li>
          <li>✔ 2026 e-Fatura ve e-Defter geçiş hadleri</li>
          <li>✔ Hangi profildeki şirketler bu danışmanlığa ihtiyaç duyar?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Vergi Danışmanlığı Neden Salt Muhasebeden Farklıdır?
          </Link>
          <Link href="#kurumlar-vergisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. 2026 Güncel Kurumlar Vergisi Oranları
          </Link>
          <Link href="#transfer-fiyatlandirmasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Transfer Fiyatlandırması: Kimler İçin Zorunlu?
          </Link>
          <Link href="#uluslararasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yurt Dışından Gelir Elde Eden Şirket Nasıl Vergilendirilir?
          </Link>
          <Link href="#e-fatura-defter" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. 2026 e-Fatura ve e-Defter Yükümlülükleri
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kimler Bu Danışmanlığa İhtiyaç Duyar?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Danışmanlık Süreci Nasıl İşler?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Vergi Danışmanlığı Neden Salt Muhasebeden Farklıdır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir şirketin beyannamesini zamanında ve doğru vermesi, yasal bir
          zorunluluktur; ancak bu, o şirketin doğru vergi yükünü taşıdığı
          anlamına gelmez. <strong>Vergi planlaması</strong>, kanunun izin
          verdiği istisna, indirim ve teşviklerin doğru ve zamanında
          kullanılmasıyla şirketin vergi yükünü mevzuata tam uyumlu şekilde
          optimize etme sürecidir. Vergiden kaçınmadan (agresif ve riskli
          yapılardan) temel farkı, her adımın belgeli, gerekçeli ve
          denetime dayanıklı olmasıdır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KOBİ ölçeğindeki bir şirket için bu, genellikle üç başlıkta somutlaşır:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
          <li>
            <strong>Ulusal vergi danışmanlığı:</strong> kurumlar vergisi
            matrahının doğru hesaplanması, indirim ve istisnaların
            (Ar-Ge, ihracat, yatırım teşviki gibi) doğru uygulanması, KDV
            ve stopaj yükümlülüklerinin optimize edilmesi.
          </li>
          <li>
            <strong>Uluslararası vergi danışmanlığı:</strong> yurt dışı
            ortaklık, şube veya müşteri ilişkisi olan şirketlerde çifte
            vergilendirmenin önlenmesi, transfer fiyatlandırması
            uyumluluğu ve yurt dışı kazançların doğru beyanı.
          </li>
          <li>
            <strong>Mali ve finansal danışmanlık:</strong> bütçe, nakit
            akışı ve finansal raporlamanın vergi planlamasıyla uyumlu
            şekilde yürütülmesi.
          </li>
        </ul>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Özellikle yurt dışı bağlantısı olan KOBİ&apos;lerde bu üç
            başlık birbirinden bağımsız düşünülemez: yanlış kurulan bir
            transfer fiyatlandırması yapısı, doğru hesaplanmış bir kurumlar
            vergisi beyannamesini bile riskli hale getirebilir.
          </p>
        </div>
      </section>

      {/* 2. KURUMLAR VERGİSİ */}
      <section id="kurumlar-vergisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026 Güncel Kurumlar Vergisi Oranları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kurumlar Vergisi Kanunu&apos;nun 32. maddesi, oran farklılaşmasını
          hem sektöre hem de kazancın kaynağına göre belirler. 2026
          hesap dönemi için Gelir İdaresi Başkanlığı&apos;nın uyguladığı
          güncel oranlar şu şekildedir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Mükellef / Kazanç Türü</th>
                <th className="p-5">2026 Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel kurumlar vergisi oranı</td>
                <td className="p-5">%25</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Bankalar, finansal kiralama/faktoring/finansman şirketleri,
                  ödeme ve elektronik para kuruluşları, sigorta/reasürans
                  ve emeklilik şirketleri
                </td>
                <td className="p-5">%30</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İhracat kazançları (5 puan indirimli)</td>
                <td className="p-5">%20</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Yurt içi asgari kurumlar vergisi (indirim ve istisnalar
                  öncesi matrah üzerinden)
                </td>
                <td className="p-5">%10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Önemli:</strong> 2025 hesap döneminden itibaren
            uygulamaya giren yurt içi asgari kurumlar vergisi, hesaplanan
            kurumlar vergisinin, indirim ve istisnalar düşülmeden önceki
            kurum kazancının %10&apos;undan az olamayacağını öngörür. Bazı
            istisna ve indirimler bu hesaplamanın dışında tutulur; bu
            nedenle Ar-Ge, teşvik veya ihracat istisnası kullanan
            şirketlerin asgari vergi etkisini mutlaka hesaplaması gerekir.
            Güncel oran ve istisna listesi için{" "}
            <a
              href="https://www.gib.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı
            </a>{" "}
            kaynaklarının kontrol edilmesi şarttır.
          </p>
        </div>
      </section>

      {/* 3. TRANSFER FİYATLANDIRMASI */}
      <section id="transfer-fiyatlandirmasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Transfer Fiyatlandırması: Kimler İçin Zorunlu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Transfer fiyatlandırması, ilişkili kişiler (grup şirketleri,
          ortaklar, yurt dışı iştirakler) arasındaki mal, hizmet veya
          finansman işlemlerinin emsallere uygunluk ilkesine göre
          fiyatlandırılmasını zorunlu kılar. Yurt dışında grup şirketi
          veya ortağı bulunan KOBİ&apos;lerin büyük bölümü, farkında
          olmadan bu yükümlülüğün kapsamına girer. Belgelendirme,
          büyüklüğe göre kademeli olarak dört ayrı yükümlülükten oluşur:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Belge / Yükümlülük</th>
                <th className="p-5">Kimler Hazırlar</th>
                <th className="p-5">Eşik / Kapsam</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Transfer Fiyatlandırması, Kontrol Edilen Yabancı Kurum ve
                  Örtülü Sermayeye İlişkin Form
                </td>
                <td className="p-5">İlişkili kişi işlemi bulunan tüm kurumlar vergisi mükellefleri</td>
                <td className="p-5">İlişkili kişi başına yıllık toplamı 30.000 TL&apos;yi aşan işlemler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yıllık Transfer Fiyatlandırması Raporu</td>
                <td className="p-5">
                  Büyük Mükellefler Vergi Dairesi mükellefleri (yurt içi +
                  yurt dışı işlemler), diğer kurumlar vergisi mükellefleri
                  (sadece yurt dışı ilişkili işlemler)
                </td>
                <td className="p-5">Kurumlar vergisi beyanname verme süresine kadar hazırlanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Genel Rapor (Master File)</td>
                <td className="p-5">Çok uluslu işletme grubu üyesi olan kurumlar</td>
                <td className="p-5">Önceki hesap döneminde bilanço aktif toplamı ve net satışları 500 milyon TL ve üzeri olan grup üyeleri</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Ülke Bazlı Rapor (CbCR)</td>
                <td className="p-5">Türkiye&apos;de yerleşik nihai ana işletme</td>
                <td className="p-5">Konsolide grup geliri 750 milyon Euro ve üzeri olan çok uluslu gruplar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Uygulamada en çok gözden kaçan yükümlülük Transfer
            Fiyatlandırması Formu&apos;dur: büyük çaplı bir yurt dışı
            işlem olmasa dahi, yurt dışındaki ortağa yapılan küçük bir
            hizmet faturası veya masraf yansıtması bile, 30.000 TL
            eşiğini aştığı anda formun eksiksiz doldurulmasını gerektirir.
            Eksik veya hatalı doldurulan form, örtülü kazanç dağıtımı
            iddiasıyla re&apos;sen vergi tarhiyatına ve vergi ziyaı
            cezasına yol açabilir.
          </p>
        </div>
      </section>

      {/* 4. ULUSLARARASI */}
      <section id="uluslararasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yurt Dışından Gelir Elde Eden Şirket Nasıl Vergilendirilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de tam mükellef olan bir kurum, yurt dışından elde
          ettiği kazancı da dahil olmak üzere dünya çapındaki tüm
          kazancı üzerinden Türkiye&apos;de kurumlar vergisi öder. Aynı
          kazancın yurt dışında da vergilendirilmiş olması, çifte
          vergilendirme riski doğurur. Bu riski yönetmek için iki temel
          mekanizma devreye girer:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Çifte Vergilendirmeyi Önleme Anlaşmaları (ÇVÖA)
            </h3>
            <p className="text-gray-700">
              Türkiye&apos;nin 2026 itibarıyla 100&apos;ün üzerinde ülkeyle
              imzaladığı, büyük bölümü yürürlükte olan ÇVÖA&apos;lar,
              yurt dışında ödenen verginin Türkiye&apos;deki kurumlar
              vergisinden mahsup edilmesine (veya bazı gelir türlerinde
              istisna uygulanmasına) imkân tanır. Hangi ülkeyle hangi
              hükmün geçerli olduğu, anlaşma metnine göre değişir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🏢</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yurt Dışı İştirak Kazançları İstisnası (KVK 5/1-b)
            </h3>
            <p className="text-gray-700">
              Yurt dışındaki bir anonim veya limited şirkete iştirak eden
              Türkiye mukimi kurumun elde ettiği kâr payı, aşağıdaki
              şartların birlikte sağlanması halinde kurumlar vergisinden
              istisnadır.
            </p>
          </div>
        </div>
        <p className="mt-10 mb-6 text-lg leading-9 text-gray-700">
          Yurt dışı iştirak kazançları istisnasından yararlanabilmek için
          aranan şartlar şunlardır:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
          <li>İştirak edilen kurumun anonim veya limited şirket niteliğinde olması,</li>
          <li>İştirak edilen kurumun kanuni ve iş merkezinin Türkiye dışında bulunması,</li>
          <li>Türkiye&apos;deki kurumun, yurt dışı iştirakin ödenmiş sermayesinin en az %10&apos;una sahip olması,</li>
          <li>İştirak payının kesintisiz olarak en az bir yıl süreyle elde tutulmuş olması,</li>
          <li>İştirak kazancının, iştirakin bulunduğu ülkede en az %15 oranında gelir/kurumlar vergisi benzeri toplam vergi yüküne tabi tutulmuş olması,</li>
          <li>Kazancın, ilgili hesap dönemine ait kurumlar vergisi beyannamesinin verilmesi gereken tarihe kadar Türkiye&apos;ye fiilen transfer edilmiş olması.</li>
        </ul>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu şartlardan yalnızca birinin eksik kalması (örneğin
            kazancın beyanname verme süresinden sonra Türkiye&apos;ye
            transfer edilmesi), istisnanın tamamen kaybedilmesine yol
            açabilir. Bu nedenle yurt dışı iştirak yapısı kurulmadan önce
            ülke seçiminin, o ülkenin vergi yükünün ve nakit transfer
            takviminin birlikte planlanması gerekir.
          </p>
        </div>
      </section>

      {/* 5. E-FATURA / E-DEFTER */}
      <section id="e-fatura-defter" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. 2026 e-Fatura ve e-Defter Yükümlülükleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergi Usul Kanunu kapsamındaki elektronik belge sistemi de her
          yıl güncellenen ciro haddleri üzerinden işler. Büyüyen bir KOBİ,
          genellikle farkında olmadan bu hadleri aşar ve geçiş süresini
          kaçırma riskiyle karşılaşır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Yükümlülük</th>
                <th className="p-5">Genel Had</th>
                <th className="p-5">Özel Sektör Haddi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">e-Fatura geçişi</td>
                <td className="p-5">
                  İlgili hesap döneminde 3 milyon TL ve üzeri brüt satış
                  hasılatı; takip eden yılın 1 Temmuz&apos;u itibarıyla zorunlu
                </td>
                <td className="p-5">
                  E-ticaret, gayrimenkul ve motorlu araç ticaretinde 500.000 TL
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">e-Defter zorunluluğu</td>
                <td className="p-5">e-Fatura mükellefiyeti olan herkes için otomatik olarak devreye girer</td>
                <td className="p-5">Aynı ciro haddine tabidir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Önemli:</strong> Bu haddler, Vergi Usul Kanunu Genel
            Tebliğleri ile her yıl yeniden belirlenebildiğinden başvuru
            öncesinde güncel tebliğin{" "}
            <a
              href="https://www.gib.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı
            </a>{" "}
            üzerinden teyit edilmesi gerekir. Geçiş süresini kaçıran
            mükellefler için özel usulsüzlük cezası uygulanır.
          </p>
        </div>
      </section>

      {/* 6. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler Bu Danışmanlığa İhtiyaç Duyar?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İhracat yapan şirketler</h3>
            <p className="text-gray-700">
              İhracat istisnası, KDV iadesi ve indirimli kurumlar vergisi
              oranının birlikte doğru planlanması gerekir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">
              Yurt dışında ortağı, iştiraki veya şubesi olan şirketler
            </h3>
            <p className="text-gray-700">
              Transfer fiyatlandırması ve çifte vergilendirme riski bu
              grupta en yüksek düzeydedir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">
              Grup şirketi yapısına sahip aile şirketleri
            </h3>
            <p className="text-gray-700">
              Şirketler arası hizmet, masraf yansıtma ve finansman
              işlemleri, farkında olmadan transfer fiyatlandırması
              kapsamına girebilir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">
              Hızlı büyüyen ve ciro hadlerini aşan KOBİ&apos;ler
            </h3>
            <p className="text-gray-700">
              e-Fatura/e-Defter geçişi, bağımsız denetim ve asgari
              kurumlar vergisi eşiklerini yakından takip etmesi gereken
              profildir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">
              Yatırımcı arayan veya M&amp;A sürecine giren şirketler
            </h3>
            <p className="text-gray-700">
              Vergi risklerinin due diligence öncesinde temizlenmiş
              olması, şirket değerlemesini doğrudan etkiler.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">
              Yurt dışında şirket kurmayı planlayan girişimciler
            </h3>
            <p className="text-gray-700">
              Ülke seçiminin, hem yerel vergi yükünün hem de Türkiye
              tarafındaki iştirak istisnası şartlarının birlikte
              değerlendirilmesi gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Danışmanlık Süreci Nasıl İşler?
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Mevcut Durum ve Risk Analizi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Ulusal/Uluslararası Yapı İncelemesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Vergi Planlaması Önerisi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Belgelendirme ve Uyumluluk</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Uygulama ve Beyan Süreci</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">Periyodik Takip ve Güncelleme</h3>
          </div>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.1. Mevcut Durum ve Risk Analizi
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin geçmiş beyannameleri, ilişkili kişi işlemleri ve
            yurt dışı bağlantıları incelenerek mevcut vergi riski ve
            kaçırılan fırsatlar (istisna, indirim, teşvik) tespit edilir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.2. Ulusal/Uluslararası Yapı İncelemesi
          </h3>
          <p className="leading-8 text-gray-700">
            Grup şirketleri arası işlemler, yurt dışı iştirak/şube
            yapısı ve varsa ÇVÖA kapsamındaki gelirler tek tek
            değerlendirilir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.3. Vergi Planlaması Önerisi
          </h3>
          <p className="leading-8 text-gray-700">
            Mevzuata tam uyumlu, belgeye dayalı ve denetime dayanıklı
            somut bir planlama önerisi hazırlanır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.4. Belgelendirme ve Uyumluluk
          </h3>
          <p className="leading-8 text-gray-700">
            Transfer fiyatlandırması formu/raporu, e-fatura/e-defter
            geçişi ve gerekli diğer belgeler süresinde hazırlanır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.5. Uygulama ve Beyan Süreci
          </h3>
          <p className="leading-8 text-gray-700">
            Kurumlar vergisi, KDV ve diğer beyannameler planlamaya uygun
            şekilde hazırlanıp süresinde verilir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.6. Periyodik Takip ve Güncelleme
          </h3>
          <p className="leading-8 text-gray-700">
            Oranlar, hadler ve mevzuat her yıl değiştiğinden planlama
            periyodik olarak yeniden gözden geçirilir.
          </p>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Grup şirketleri arası küçük tutarlı hizmet/masraf
            yansıtmalarının transfer fiyatlandırması formu kapsamı dışında
            sanılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Yurt dışı iştirak kazancının beyanname verme süresinden
            sonra Türkiye&apos;ye transfer edilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Yurt içi asgari kurumlar vergisi etkisinin, kullanılan
            istisna/indirimlerle birlikte hesaplanmaması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Ciro hadlerinin aşıldığı yılın fark edilmeyip e-fatura/e-defter
            geçiş süresinin kaçırılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ ÇVÖA hükümlerinin ülke bazında farklılaştığının göz ardı
            edilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Vergi planlamasının yalnızca yıl sonunda, geriye dönük
            olarak yapılmaya çalışılması
          </div>
        </div>
      </section>

      {/* KURUMSAL DESTEK CTA */}
      <section className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Ulusal ve Uluslararası Vergi Sürecinizi Uçtan Uca Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Kurumlar vergisi planlamasından transfer fiyatlandırması
            belgelendirmesine, yurt dışı iştirak/şube yapılarının kurulmasından
            e-fatura/e-defter geçiş sürecine kadar ulusal ve uluslararası
            vergi danışmanlığınızın tamamını tek çatı altında yürütüyoruz.
            Yurt dışında şirket kurma sürecinden Türkiye tarafındaki vergi
            uyumluluğuna kadar ayrı bir mali müşavir veya danışman firma
            aramanıza gerek kalmaz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin vergi risk ve fırsatlarını değerlendirmek için
              bizimle iletişime geçebilirsiniz.
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
              Vergi planlaması nedir, vergiden kaçınmaktan farkı ne?
            </h3>
            <p className="leading-8 text-gray-700">
              Vergi planlaması, kanunun tanıdığı istisna, indirim ve
              teşviklerin mevzuata tam uyumlu ve belgeli şekilde
              kullanılmasıdır. Riskli veya belgesiz yapılar kurarak vergi
              matrahını düşürmeye çalışmak ise vergiden kaçınma sayılır ve
              denetimde ciddi cezai risk taşır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Transfer fiyatlandırması raporu kimler için zorunlu?
            </h3>
            <p className="leading-8 text-gray-700">
              İlişkili kişilerle (grup şirketleri, ortaklar, yurt dışı
              iştirakler) işlemi bulunan tüm kurumlar vergisi mükellefleri,
              en azından Transfer Fiyatlandırması Formu&apos;nu doldurmakla
              yükümlüdür. Büyük Mükellefler Vergi Dairesi mükellefleri
              yurt içi ve yurt dışı işlemleri için, diğer kurumlar ise
              yurt dışı ilişkili işlemleri için Yıllık Transfer
              Fiyatlandırması Raporu hazırlar. Aktif toplamı ve net
              satışları 500 milyon TL&apos;yi aşan çok uluslu grup üyeleri
              ayrıca Genel Rapor (Master File) hazırlar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yurt dışından gelir elde eden bir şirket Türkiye&apos;de nasıl
              vergilendirilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de tam mükellef bir kurum, dünya çapındaki tüm
              kazancı üzerinden Türkiye&apos;de kurumlar vergisi öder.
              Çifte vergilendirme, ilgili ülkeyle imzalanmış bir çifte
              vergilendirmeyi önleme anlaşması varsa bu anlaşma
              hükümlerine göre, yurt dışı iştirak kazançlarında ise KVK
              5/1-b maddesindeki şartların (en az %10 sermaye payı, 1 yıl
              elde tutma, en az %15 vergi yükü, süresinde transfer)
              birlikte sağlanması halinde istisna yoluyla önlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da e-Fatura geçiş haddi kaç TL?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel had, ilgili hesap döneminde 3 milyon TL ve üzeri brüt
              satış hasılatıdır; bu hadi aşan mükellefler takip eden
              yılın 1 Temmuz&apos;u itibarıyla e-Fatura&apos;ya geçmek
              zorundadır. E-ticaret, gayrimenkul ve motorlu araç
              ticaretinde had 500.000 TL&apos;ye düşer. Güncel had her yıl
              Vergi Usul Kanunu Genel Tebliği ile yeniden belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİ&apos;ler için uluslararası vergi danışmanlığı ne zaman
              gerekli hale gelir?
            </h3>
            <p className="leading-8 text-gray-700">
              Şirket ihracat yapmaya, yurt dışında ortaklık/şube kurmaya
              veya yurt dışındaki bir grup şirketiyle işlem yapmaya
              başladığı andan itibaren transfer fiyatlandırması ve çifte
              vergilendirme riski doğar. Bu nedenle yurt dışı ilişki
              kurulmadan önce danışmanlık alınması, sonradan düzeltme
              yapmaktan çok daha az maliyetlidir.
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
          Ulusal ve uluslararası vergi danışmanlığı, KOBİ&apos;ler için
          artık ihtiyaç duyulduğunda başvurulan bir hizmet değil, büyüme
          sürecinin başından itibaren kurgulanması gereken bir yapı
          taşıdır. Kurumlar vergisi oranlarındaki farklılaşmadan transfer
          fiyatlandırması belgelendirmesine, yurt dışı iştirak kazancı
          istisnasından e-fatura/e-defter hadlerine kadar her başlık, tek
          başına ele alındığında basit görünse de birlikte
          değerlendirildiğinde şirketin nakit akışını ve risk profilini
          doğrudan belirler. Bu süreci mevzuattaki güncel oran, had ve
          şartları takip eden, deneyimli bir ekiple yürütmek; hem
          gereksiz vergi yükünden kaçınmayı hem de denetimde savunulabilir
          bir yapı kurmayı mümkün kılar.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İşletmenize AYNA Tutuyoruz: Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
          <Link
            href="/blog/kdv-iadesi-nasil-alinir-2026-sartlari-sureci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • KDV İADESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KDV İadesi Nasıl Alınır? 2026 Şartları ve Süreci</h3>
          </Link>
          <Link
            href="/blog/varlik-barisi-2026-nedir-sartlari-oranlari-basvuru-sureci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • VARLIK BARIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Varlık Barışı 2026 Nedir? Yurt Dışındaki Varlıklarınızı Türkiye&apos;ye Getirmenin Şartları, Oranları ve Süreci</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
