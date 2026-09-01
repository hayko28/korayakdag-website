import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Varlık Barışı 2026 Nedir? Şartları ve Oranları | Koray Akdağ",
  description: "Varlık Barışı 2026'da %0-%5 arası vergi oranları, taahhüt süresi sistemi ve 31 Aralık 2026 kritik tarihiyle güncel rehber.",
  keywords: [
    "varlık barışı 2026",
    "7582 sayılı kanun",
    "KVK geçici madde 19",
    "yurt dışı varlık bildirimi",
    "varlık barışı vergi oranları",
    "varlık barışı başvuru süreci",
    "yurt dışında şirketi olanlar için varlık barışı",
    "varlık barışı son tarih 2027",
    "kayıt dışı varlık beyanı 2026",
    "varlık barışı taahhüt süresi",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Varlık Barışı 2026 Nedir? Yurt Dışındaki Varlıklarınızı Türkiye'ye Getirmenin Şartları, Oranları ve Süreci"
      description="7582 sayılı Kanun'la Kurumlar Vergisi Kanunu'na eklenen Geçici Madde 19 uyarınca yürürlüğe giren Varlık Barışı 2026: %0-%5 arası kademeli vergi oranları, taahhüt süresi sistemi, yurt içi/yurt dışı varlık ayrımı, banka üzerinden bildirim süreci ve 31 Aralık 2026 - 31 Temmuz 2027 kritik tarihleriyle kapsamlı rehber."
      category="VERGİ DANIŞMANLIĞI • VARLIK BARIŞI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="varlik-barisi-2026-nedir-sartlari-oranlari-basvuru-sureci"
      coverImage="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            4 Haziran 2026 tarihli ve 33270 sayılı Resmî Gazete&apos;de
            yayımlanan 7582 sayılı Kanun ile 5520 sayılı Kurumlar Vergisi
            Kanunu&apos;na eklenen Geçici Madde 19, yurt dışındaki para,
            döviz, altın ve menkul kıymetlerin Türkiye&apos;ye getirilmesini
            ve kayıt dışı bazı yurt içi varlıkların kayıt altına alınmasını
            teşvik eden yeni bir &quot;Varlık Barışı&quot; uygulaması
            getirdi. Uygulama esasları, 4 Temmuz 2026 tarihli 33300 sayılı
            Resmî Gazete&apos;de yayımlanan 1 Seri No&apos;lu Genel Tebliğ
            ile netleştirildi. Özellikle yurt dışında şirketi veya hesabı
            bulunan girişimciler için bu düzenleme, yurt dışı kazançlarını
            düşük vergi yüküyle Türkiye&apos;ye taşımak için önemli bir
            fırsat penceresi sunuyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Varlık Barışı 2026 nedir, yasal dayanağı nedir?</li>
            <li>✔ Hangi varlıklar kapsamda, kimler yararlanabilir?</li>
            <li>✔ %0 ile %5 arasındaki vergi oranları nasıl belirleniyor?</li>
            <li>✔ Yurt içi ve yurt dışı varlıklar arasındaki süreç farkı</li>
            <li>✔ Bankaya/aracı kuruma bildirimden vergi ödemesine adım adım süreç</li>
            <li>✔ 31 Aralık 2026 ve 31 Temmuz 2027 tarihleri neden kritik?</li>
            <li>✔ Vergi incelemesi muafiyeti nereye kadar geçerli, sınırları neler?</li>
            <li>✔ Yurt dışında şirketi olanlar için bu düzenleme neden özellikle anlamlı?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Varlık Barışı 2026 Nedir?
            </Link>
            <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler ve Hangi Varlıklar Kapsamda?
            </Link>
            <Link href="#oranlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Vergi Oranları ve Taahhüt Sistemi
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Bildirim ve Ödeme: Adım Adım Süreç
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Kritik Tarihler
            </Link>
            <Link href="#avantaj" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Vergi İncelemesi Muafiyeti ve Sınırları
            </Link>
            <Link href="#ornek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Örnek Senaryo
            </Link>
            <Link href="#yurtdisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Yurt Dışında Şirketi Olanlar İçin Neden Önemli?
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Dikkat Edilmesi Gerekenler
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
            1. Varlık Barışı 2026 Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            &quot;Varlık Barışı&quot; olarak bilinen uygulama, Türkiye&apos;nin
            geçmişte de farklı dönemlerde başvurduğu; yurt dışındaki para,
            döviz, altın ve menkul kıymetlerin ülkeye getirilmesini,
            gerçek/tüzel kişilerin kayıt dışı bıraktığı bazı yurt içi
            varlıklarını ise kayıt altına almasını, düşük ve kademeli vergi
            oranları karşılığında teşvik eden bir mekanizmadır. 2026
            yılındaki uygulama, 21 Mayıs 2026&apos;da TBMM Genel
            Kurulu&apos;nda kabul edilen ve 4 Haziran 2026 tarihli, 33270
            sayılı Resmî Gazete&apos;de yayımlanan{" "}
            <strong>7582 sayılı Bazı Kanunlarda Değişiklik Yapılmasına
            Dair Kanun</strong>&apos;un 10&apos;uncu maddesiyle, 5520 sayılı
            Kurumlar Vergisi Kanunu&apos;na eklenen{" "}
            <strong>Geçici Madde 19</strong> ile hayata geçti. Uygulamanın
            usul ve esasları ise 4 Temmuz 2026 tarihli, 33300 sayılı Resmî
            Gazete&apos;de yayımlanan{" "}
            <strong>Bazı Varlıkların Ekonomiye Kazandırılması Hakkında 1
            Seri No&apos;lu Genel Tebliğ</strong> ile belirlendi.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Düzenlemenin Amacı
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Yurt dışındaki varlıkları Türkiye ekonomisine ve finans sistemine kazandırmak</li>
              <li>✔ Kayıt dışında kalan bazı yurt içi varlıkları düşük maliyetle kayıt altına almak</li>
              <li>✔ Beyan eden kişilere geçmişe dönük vergi incelemesi riskini büyük ölçüde ortadan kaldırmak</li>
              <li>✔ Varlığı uzun süre elde tutmayı taahhüt edenlere daha avantajlı (hatta %0) vergi oranı sunmak</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Bu yazı bilgilendirme amaçlıdır; kişiye özel vergi planlaması ve
            beyan stratejisi, mevcut varlık kompozisyonunuz ve hedeflerinize
            göre profesyonel bir değerlendirme gerektirir.
          </p>
        </section>

        {/* 2. KAPSAM */}
        <section id="kapsam" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler ve Hangi Varlıklar Kapsamda?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Düzenleme, yurt dışı ve yurt içi varlıklar için farklı kapsam
            ve şartlar öngörüyor.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                🌍 Yurt Dışı Varlıklar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Para, altın, döviz, menkul kıymet ve diğer sermaye piyasası araçları</li>
                <li>✔ Gerçek kişiler ve tüzel kişiler (şirketler) başvurabilir</li>
                <li>✔ Vergi mükellefi olma şartı aranmıyor</li>
                <li>✔ Yurt dışında şirketi, hesabı veya yatırımı olan Türk vatandaşları için doğrudan uygulanabilir</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-orange-700">
                🏠 Yurt İçi Varlıklar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Yasal kayıtlara (muhasebe defterlerine) intikal ettirilmemiş para, altın, döviz ve menkul kıymetler</li>
                <li>✔ Yalnızca gelir veya kurumlar vergisi mükellefleri için geçerli</li>
                <li>✔ Bildirim ile eş zamanlı olarak banka/aracı kuruma yatırılması zorunlu</li>
                <li>✔ Amaç, işletme kayıtlarındaki fiili durumla resmi durumu uyumlu hâle getirmek</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="leading-8 text-gray-700">
              ⚠️ Beyan güvencesi yalnızca &quot;varlığın kaynağının
              sorgulanmayacağı&quot; ilkesine dayanır; bu koruma{" "}
              <strong>Malî Suçları Araştırma Kurulu (MASAK)</strong>{" "}
              mevzuatı kapsamındaki suç gelirlerine (kara para, terörün
              finansmanı vb.) uygulanmaz. Bu nedenle beyan öncesinde
              varlığın niteliğinin doğru değerlendirilmesi önemlidir.
            </p>
          </div>
        </section>

        {/* 3. ORANLAR */}
        <section id="oranlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Vergi Oranları ve Taahhüt Sistemi
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Düzenlemenin en dikkat çekici yönü, sabit bir oran yerine{" "}
            <strong>taahhüt süresine bağlı kademeli bir oran
            sistemi</strong> öngörmesi. Beyan edilen varlık, vadeli mevduat
            hesabında veya Devlet İç Borçlanma Senedi (DİBS) gibi belirli
            araçlarda ne kadar uzun süre tutulmayı taahhüt ederse, uygulanan
            vergi oranı o kadar düşüyor. Aşağıdaki tablo, 31 Aralık
            2026&apos;ya kadar yapılan bildirimler için geçerli, artışsız
            oranları gösteriyor:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Taahhüt / Tutma Şekli</th>
                  <th className="p-5">Vergi Oranı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Taahhütsüz (peşin/standart bildirim)</td>
                  <td className="p-5">%5</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">1 yıl elde tutma taahhüdü</td>
                  <td className="p-5">%4</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">2 yıl elde tutma taahhüdü</td>
                  <td className="p-5">%3</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">3 yıl elde tutma taahhüdü</td>
                  <td className="p-5">%2</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">4 yıl elde tutma taahhüdü</td>
                  <td className="p-5">%1</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">5 yıl ve üzeri elde tutma taahhüdü</td>
                  <td className="p-5 font-bold text-green-700">%0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="leading-8 text-gray-700">
              ⚠️ <strong>Bu tablo 31 Aralık 2026&apos;ya kadar yapılan
              bildirimler için geçerlidir.</strong> 1 Ocak - 31 Temmuz 2027
              arasında yapılacak bildirimlerde tablodaki oranlara yarım
              puan (0,5 puan) ilave uygulanacağı Genel Tebliğ&apos;de yer
              alıyor. Bu nedenle en avantajlı oranlardan yararlanmak
              isteyenler için 2026 yılı sonu doğal bir hedef tarih
              oluşturuyor.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            İndirimli oranlardan (yani %5&apos;in altındaki oranlardan)
            yararlanmak isteyen kişi, bildirimi izleyen{" "}
            <strong>10 gün içinde</strong> ilgili tutarı taahhüt ettiği
            araca (vadeli hesap, DİBS vb.) dönüştürmek ve taahhüt süresi
            boyunca bu şekilde tutmak zorundadır; aksi hâlde eksik ödenen
            vergi, standart oran üzerinden tamamlanır.
          </p>
        </section>

        {/* 4. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Bildirim ve Ödeme: Adım Adım Süreç
          </h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">1</div>
              <div>
                <h4 className="text-lg font-bold text-[#071A2F]">Varlığın tespiti ve taahhüt kararının verilmesi</h4>
                <p className="mt-2 leading-7 text-gray-700">
                  Beyan edilecek varlığın türü, tutarı ve hangi taahhüt
                  süresiyle (0-5 yıl) bildirileceğine karar verilir. Bu
                  seçim, doğrudan ödenecek vergi oranını belirlediği için
                  kişinin nakit ihtiyacı ve yatırım ufkuyla uyumlu
                  planlanmalıdır.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">2</div>
              <div>
                <h4 className="text-lg font-bold text-[#071A2F]">Banka veya aracı kuruma Ek-1 formuyla bildirim</h4>
                <p className="mt-2 leading-7 text-gray-700">
                  Bildirim, doğrudan vergi dairesine değil; bir banka veya
                  aracı kuruma (menkul kıymet aracı kurumlarına) Genel
                  Tebliğ ekindeki bildirim formuyla yapılır. Yurt dışı
                  varlıklarda bildirim, varlığın Türkiye&apos;ye
                  getirilmesinden önce de yapılabilir.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">3</div>
              <div>
                <h4 className="text-lg font-bold text-[#071A2F]">Yurt dışı varlığın Türkiye&apos;ye transferi (2 ay içinde)</h4>
                <p className="mt-2 leading-7 text-gray-700">
                  Yurt dışı varlıklarda, bildirimi takip eden{" "}
                  <strong>2 ay içinde</strong> varlığın Türkiye&apos;deki
                  bir banka veya aracı kurum hesabına transfer edilmesi ya
                  da fiziki olarak getirilip bu hesaplara yatırılması
                  gerekir. Yurt içi kayıt dışı varlıklarda ise bu adım yok;
                  yatırma işlemi bildirimle eş zamanlı yapılır.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">4</div>
              <div>
                <h4 className="text-lg font-bold text-[#071A2F]">Vergi tahsilatı ve vergi dairesine beyan</h4>
                <p className="mt-2 leading-7 text-gray-700">
                  Bildirimi alan banka veya aracı kurum, taahhüt edilen
                  süreye karşılık gelen oranda vergiyi <strong>peşin
                  tahsil eder</strong> ve bildirimi izleyen ayın{" "}
                  <strong>15&apos;inci günü akşamına kadar</strong> vergi
                  dairesine beyan edip aynı süre içinde öder. Kişinin
                  doğrudan vergi dairesiyle muhatap olması gerekmez.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">5</div>
              <div>
                <h4 className="text-lg font-bold text-[#071A2F]">İndirimli oran seçildiyse araca dönüştürme (10 gün)</h4>
                <p className="mt-2 leading-7 text-gray-700">
                  %5&apos;in altında bir oran seçildiyse, tutar bildirimi
                  izleyen 10 gün içinde taahhüt edilen vadeli hesaba veya
                  DİBS&apos;e dönüştürülür ve taahhüt süresi dolana kadar
                  bu şekilde tutulur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Kritik Tarihler
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold text-green-700">31 Aralık 2026</h3>
              <p className="mt-3 text-sm text-gray-700">
                Artışsız (tablodaki) oranlardan yararlanmak için son tarih.
                En avantajlı dönem.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📈</div>
              <h3 className="text-xl font-bold">1 Ocak - 31 Temmuz 2027</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bu dönemde yapılan bildirimlerde oranlara yarım puan ilave
                uygulanıyor.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⏳</div>
              <h3 className="text-xl font-bold">31 Temmuz 2027</h3>
              <p className="mt-3 text-sm text-gray-600">
                Genel bildirim için kesin son tarih. Cumhurbaşkanı bu
                süreyi 1 yıla kadar uzatma yetkisine sahip.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Özetle, en düşük vergi yükü ve en uzun taahhüt/en avantajlı oran
            kombinasyonunu isteyen kişiler için 2026 yılı sonuna kadar
            işlem yapmak, sonrasına göre daha avantajlı. Ancak sürecin
            zaman alabileceği (belge toplama, varlık transferi, banka
            süreçleri) göz önüne alındığında, hazırlıklara erken
            başlanması öneriliyor.
          </p>
        </section>

        {/* 6. AVANTAJ */}
        <section id="avantaj" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Vergi İncelemesi Muafiyeti ve Sınırları
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Düzenlemenin en güçlü teşviklerinden biri, bildirilen
            varlıklarla ilgili olarak kişi hakkında{" "}
            <strong>hiçbir surette vergi incelemesi ve tarhiyatı
            yapılmayacağı</strong> güvencesidir. Bu, geçmiş dönemlere
            ilişkin varlığın kaynağının ayrıca sorgulanmayacağı anlamına
            geliyor.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Sağlanan Güvence
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Bildirilen varlık kaynağı sorgulanmaz</li>
                <li>✔ Geçmişe dönük vergi incelemesi yapılmaz</li>
                <li>✔ Süresinde ödenmeyen vergi için ceza değil, yalnızca gecikme faizi uygulanır</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Kapsam Dışı Kalanlar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ MASAK mevzuatı kapsamındaki suç gelirleri (kara para aklama, terörün finansmanı vb.)</li>
                <li>❌ Taahhüt süresi bozulduğunda uygulanan avantajlı oran</li>
                <li>❌ Beyan dışı bırakılan/yanlış beyan edilen varlıklara ilişkin genel vergi denetim riski</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. ÖRNEK */}
        <section id="ornek" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Örnek Senaryo
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Aşağıdaki örnek, mekanizmayı somutlaştırmak için hazırlanmış{" "}
            <strong>kurgusal bir senaryodur</strong>, gerçek bir müşteri
            dosyası değildir. Yurt dışında bir şirketi üzerinden gelir elde
            eden bir girişimcinin, yurt dışı hesabında biriken{" "}
            <strong>500.000 ABD Doları</strong>&apos;nı Varlık Barışı
            kapsamında Türkiye&apos;ye getirdiğini varsayalım:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Taahhüt Tercihi</th>
                  <th className="p-5">Oran</th>
                  <th className="p-5">Ödenecek Vergi</th>
                  <th className="p-5">Türkiye&apos;de Kalan Net Tutar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Taahhütsüz</td>
                  <td className="p-5">%5</td>
                  <td className="p-5">25.000 USD</td>
                  <td className="p-5">475.000 USD</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">2 yıl taahhüt</td>
                  <td className="p-5">%3</td>
                  <td className="p-5">15.000 USD</td>
                  <td className="p-5">485.000 USD</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">5 yıl taahhüt</td>
                  <td className="p-5">%0</td>
                  <td className="p-5">0 USD</td>
                  <td className="p-5">500.000 USD (5 yıl vadeli/DİBS&apos;te)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 leading-8 text-gray-700">
            Girişimci, 2 ay içinde tutarı Türkiye&apos;deki bir banka
            hesabına transfer etmeli; %0 veya indirimli oranı tercih
            ettiyse, bildirimi izleyen 10 gün içinde tutarı taahhüt ettiği
            vadeli hesaba veya DİBS&apos;e yönlendirmelidir. Hangi
            senaryonun uygun olduğu; kişinin likidite ihtiyacına, yurt
            dışındaki şirketinin nakit akışına ve Türkiye&apos;deki
            yatırım planlarına göre değişir.
          </p>
        </section>

        {/* 8. YURT DIŞINDA ŞİRKETİ OLANLAR */}
        <section id="yurtdisi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Yurt Dışında Şirketi Olanlar İçin Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            İngiltere, Hollanda, ABD, BAE (Dubai) veya diğer ülkelerde
            şirket kurmuş, bu şirketler üzerinden kâr payı, hizmet bedeli
            veya yatırım geliri elde etmiş girişimciler için Varlık Barışı,
            biriken yurt dışı kazançları düşük vergi maliyetiyle
            Türkiye&apos;ye taşımanın önünü açıyor. Ancak süreç yalnızca
            &quot;parayı Türkiye&apos;ye getirmek&quot;ten ibaret değil;
            doğru taahhüt süresinin seçilmesi, bildirim formunun eksiksiz
            hazırlanması, banka/aracı kurum süreçlerinin doğru
            yönetilmesi ve bu işlemin şirketin genel vergi/finansal
            planlamasıyla uyumlu olması gerekiyor.
          </p>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Kuruluştan Türkiye&apos;deki Beyana Kadar Tek Elden
            </h3>
            <p className="leading-8 text-gray-700">
              Koray Akdağ / Sistem Global Danışmanlık olarak, yurt
              dışındaki şirket kuruluş sürecinin yanı sıra bu şirketlerin
              Türkiye tarafındaki vergi, muhasebe ve raporlama
              yükümlülüklerini de bizzat biz yürütüyoruz. Varlık Barışı
              kapsamında yurt dışı kazançlarınızı Türkiye&apos;ye taşımayı
              değerlendiriyorsanız, ayrı bir yerel danışmanlık firması
              aramanıza gerek yok; süreci uçtan uca tek noktadan
              planlayabilmemiz için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </section>

        {/* 9. DİKKAT */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Dikkat Edilmesi Gerekenler
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Taahhüt süresi dolmadan varlık bozulursa/çekilirse, ödenmesi gereken vergi ile ödenen vergi arasındaki fark ve gecikme faizi talep edilir.</li>
              <li>Yurt dışı varlıkların 2 aylık transfer süresine ve indirimli oran seçildiyse 10 günlük dönüştürme süresine dikkat edilmelidir; süre aşımı avantajı ortadan kaldırabilir.</li>
              <li>Bildirim, doğrudan vergi dairesine değil banka/aracı kuruma yapılır; yanlış kurum veya eksik belge süreci uzatabilir.</li>
              <li>MASAK kapsamındaki suç gelirleri düzenlemenin koruma alanı dışındadır; varlığın niteliği konusunda tereddüt varsa profesyonel değerlendirme alınmalıdır.</li>
              <li>Oranlar ve süreler Cumhurbaşkanı kararıyla değiştirilebilir; işlem öncesi güncel durumun teyit edilmesi önemlidir.</li>
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
                Varlık Barışı 2026&apos;dan yararlanmak için vergi mükellefi olmak gerekiyor mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Yurt dışı varlıklar için hayır; gerçek ve tüzel kişiler
                vergi mükellefi olma şartı aranmaksızın başvurabilir. Yurt
                içi kayıt dışı varlıklarda ise düzenleme yalnızca gelir
                veya kurumlar vergisi mükelleflerini kapsıyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                En avantajlı %0 oranından yararlanmak için ne yapmalıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                Varlığı 5 yıl ve üzeri süreyle vadeli hesapta veya DİBS
                gibi belirlenen araçlarda tutma taahhüdünde bulunmanız ve
                bildirimi izleyen 10 gün içinde tutarı bu araca
                dönüştürmeniz gerekir. Taahhüt süresince varlığı
                bozdurmamanız şarttır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bildirimi vergi dairesine mi yapıyorum?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Bildirim banka veya aracı kuruma Genel Tebliğ
                ekindeki form ile yapılır; vergiyi tahsil edip vergi
                dairesine beyan etme ve ödeme yükümlülüğü ilgili
                banka/aracı kuruma aittir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Süreyi kaçırırsam ne olur?
              </h3>
              <p className="leading-8 text-gray-700">
                31 Aralık 2026&apos;yı kaçırırsanız, 31 Temmuz 2027&apos;ye
                kadar (Cumhurbaşkanı uzatırsa daha uzun bir süreye kadar)
                yine başvurabilirsiniz; ancak 1 Ocak 2027&apos;den itibaren
                oranlara yarım puanlık bir artış uygulanır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Yurt dışındaki şirketimin kâr payını bu kapsamda getirebilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                Yurt dışı şirketinizden elde ettiğiniz ve yurt dışında
                tuttuğunuz para, döviz veya menkul kıymet niteliğindeki
                kazançlar kural olarak kapsama girebilir. Somut durumun
                düzenlemeye uygunluğunun, şirket yapınız ve gelir türünüz
                özelinde değerlendirilmesi gerekir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Varlık Barışı Sürecinizi Birlikte Planlayalım
            </h3>
            <p className="leading-8 text-gray-700">
              Yurt dışı varlıklarınızı en uygun vergi oranıyla ve doğru
              taahhüt süresiyle Türkiye&apos;ye getirmek, banka ve aracı
              kurum bildirim sürecini kritik tarihleri kaçırmadan
              yönetmek, ciddi bir vergi avantajı sağlar.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Varlık Barışı sürecinizi değerlendirmemiz için bizimle
                iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 11. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Varlık Barışı 2026, özellikle yurt dışında gelir veya varlığı
            bulunan gerçek ve tüzel kişiler için düşük maliyetle ve
            geçmişe dönük inceleme riski taşımadan bu varlıkları
            Türkiye&apos;ye taşıma imkânı sunuyor. Kademeli oran sistemi,
            kısa vadeli likidite ihtiyacı olanlarla uzun vadeli yatırım
            yapmak isteyenlere farklı seçenekler tanıyor. Ancak avantajdan
            en verimli şekilde faydalanmak; doğru taahhüt süresini
            seçmek, süreleri (2 ay, 10 gün, 31 Aralık 2026) kaçırmamak ve
            beyan sürecini eksiksiz yürütmekle mümkün.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yurt dışındaki şirketiniz veya varlıklarınız için Varlık
            Barışı&apos;nın size uygun olup olmadığını değerlendirmek, en
            avantajlı taahhüt/oran senaryosunu belirlemek ve süreci
            Türkiye tarafındaki vergi ve muhasebe yükümlülüklerinizle
            birlikte yönetmek için Koray Akdağ / Sistem Global Danışmanlık
            olarak bizimle iletişime geçebilirsiniz.
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
          <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ'nin İhtiyacı?</h3>
        </Link>
        <Link
          href="/blog/go-dijital-cuzdan-nedir-nasil-acilir"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DİJİTAL CÜZDAN • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">GO Dijital Cüzdan Nedir? Hesap Nasıl Açılır?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
