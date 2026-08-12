import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "TSRS Sürdürülebilirlik Raporlama Zorunluluğu 2026: Yeni Eşikler Kimleri Kapsıyor? | Koray Akdağ",
  description:
    "KGK'nın Ocak 2026'da yükselttiği TSRS eşik değerleri hangi şirketleri kapsıyor? Aktif toplamı, net satış hasılatı, çalışan sayısı kriterleri, güvence denetimi dönemi, raporlama takvimi ve hazırlık adımlarıyla güncel rehber.",
  keywords: [
    "TSRS sürdürülebilirlik raporlama zorunluluğu",
    "TSRS eşik değerleri 2026",
    "Türkiye Sürdürülebilirlik Raporlama Standartları",
    "sürdürülebilirlik raporu zorunluluğu kimleri kapsıyor",
    "TSRS güvence denetimi",
    "KGK sürdürülebilirlik raporlama kararı",
    "ESG raporlama Türkiye 2026",
    "TSRS uyumlu sürdürülebilirlik raporu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TSRS Sürdürülebilirlik Raporlama Zorunluluğu 2026: Yeni Eşikler Hangi Şirketleri Kapsıyor?"
      description="Kamu Gözetimi Kurumu'nun (KGK) Ocak 2026'da yürürlüğe koyduğu yeni eşik değerleriyle TSRS sürdürülebilirlik raporlama zorunluluğunun kapsamı değişti. Hangi şirketler artık kapsamda, hangileri kapsam dışına çıktı, güvence denetimi dönemi ne anlama geliyor ve hazırlık süreci nasıl yönetilmeli?"
      category="SÜRDÜRÜLEBİLİRLİK • TSRS • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026"
      coverImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK), 13
            Ocak 2026 tarihli Kurul Kararı ile Türkiye Sürdürülebilirlik
            Raporlama Standartları&apos;nın (TSRS) uygulama kapsamını
            belirleyen eşik değerleri önemli ölçüde yükseltti. Karar, 16 Ocak
            2026 tarihli ve 33139 sayılı Resmî Gazete&apos;de yayımlandı.
            Aynı anda 2026, ilk TSRS raporlarının bağımsız güvence
            denetimine tabi tutulmaya başlandığı &quot;güvence dönemi&quot;
            olarak da öne çıkıyor. Bu iki gelişme bir araya gelince, geçen
            yıl kapsamda olduğunu düşünen birçok şirketin durumunu yeniden
            gözden geçirmesi gerekiyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Eşik değerleri tam olarak nasıl değişti?</li>
            <li>✔ Hangi şirketler ölçek şartı aranmaksızın kapsamda?</li>
            <li>✔ 2026&apos;da başlayan &quot;güvence denetimi&quot; ne demek?</li>
            <li>✔ Raporlama takvimi ve son tarihler</li>
            <li>✔ Kapsam belirleme için adım adım hazırlık süreci</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
            <li>✔ Sık sorulan sorular</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. TSRS Nedir, Neden Şimdi Gündemde?
            </Link>
            <Link href="#esikler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Eski ve Yeni Eşik Değerleri
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Kimler Kapsamda, Kimler Kapsam Dışı?
            </Link>
            <Link href="#guvence" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. 2026: Güvence Denetimi Dönemi
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Raporlama Takvimi ve Son Tarihler
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Hazırlık Süreci
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. TSRS Nedir, Neden Şimdi Gündemde?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Türkiye Sürdürülebilirlik Raporlama Standartları (TSRS), KGK
            tarafından Uluslararası Sürdürülebilirlik Standartları Kurulu
            (ISSB) standartlarıyla uyumlu şekilde yayımlanan, şirketlerin
            iklim ve sürdürülebilirlikle ilgili risklerini, fırsatlarını ve
            etkilerini finansal raporlamayla eş değer bir disiplinle
            açıklamasını isteyen bir raporlama çerçevesidir. İlk TSRS
            raporları, 2024 hesap dönemini kapsayacak şekilde 2025 yılında
            hazırlandı ve kapsamdaki şirketler tarafından yılın son
            çeyreğinde tamamlandı.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            2026 yılı ise iki nedenle şirketler için kritik bir dönüm
            noktası oldu. Birincisi, KGK&apos;nın 13 Ocak 2026 tarihli Kurul
            Kararı ile TSRS kapsamını belirleyen eşik değerlerinin
            yükseltilmiş olması; ikincisi ise TSRS uyumlu raporların ilk kez
            bağımsız <strong>güvence denetimine</strong> tabi tutulmaya
            başlanmış olmasıdır. Yani bu yıl, hem &quot;kim kapsamda&quot;
            sorusunun cevabı değişti hem de kapsamda kalan şirketler için
            işin ciddiyeti bir üst seviyeye taşındı.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Kararın Temel Bilgileri
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Karar Tarihi: 13 Ocak 2026</li>
              <li>✔ Karar Sayısı: 75935942-050.01.04-[01/39092]</li>
              <li>✔ Resmî Gazete Yayım Tarihi/Sayısı: 16 Ocak 2026 – 33139</li>
              <li>✔ Uygulama Dönemi: 1 Ocak 2025 ve sonrasında başlayan hesap dönemleri</li>
              <li>✔ Kurum: Kamu Gözetimi, Muhasebe ve Denetim Standartları Kurumu (KGK)</li>
            </ul>
          </div>
        </section>

        {/* 2. EŞİKLER */}
        <section id="esikler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Eski ve Yeni Eşik Değerleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            TSRS kapsamına eşik değer üzerinden giren şirketler için kural
            değişmedi: aşağıdaki üç kriterden <strong>en az ikisinin</strong>{" "}
            eşik değerini <strong>art arda iki hesap döneminde</strong>{" "}
            aşan işletmeler kapsama girer. Değişen, bu eşiklerin kendisi
            oldu — ve oldukça belirgin biçimde yükseldi.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Ölçüt</th>
                  <th className="p-5">Eski Eşik (2024 Dönemi)</th>
                  <th className="p-5">Yeni Eşik (13.01.2026 Kararı)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Aktif Toplamı</td>
                  <td className="p-5">500.000.000 TL</td>
                  <td className="p-5">1.000.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Yıllık Net Satış Hasılatı</td>
                  <td className="p-5">1.000.000.000 TL</td>
                  <td className="p-5">2.000.000.000 TL</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Çalışan Sayısı</td>
                  <td className="p-5">250 kişi</td>
                  <td className="p-5">500 kişi</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Bu Değişikliğin Pratik Anlamı
            </h3>
            <p className="leading-8 text-gray-700">
              Eşiklerin neredeyse iki katına çıkarılması, kapsamı önemli
              ölçüde daralttı. Geçen yıl eski eşiklere göre TSRS kapsamında
              değerlendirilebilecek bazı orta-büyük ölçekli şirketler, yeni
              eşiklerle birlikte 2025 hesap dönemi itibarıyla zorunlu
              raporlama kapsamının dışında kalabilir. Ancak bu, şirketin
              hiçbir şey yapmasına gerek olmadığı anlamına gelmez — kapsam
              durumunun güncel eşiklere göre yeniden ve resmî olarak teyit
              edilmesi gerekir.
            </p>
          </div>
        </section>

        {/* 3. KİMLER */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Kimler Kapsamda, Kimler Kapsam Dışı?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            TSRS kapsamı iki farklı mekanizmayla belirlenir: bir grup
            kuruluş büyüklüğüne bakılmaksızın doğrudan kapsamdadır; diğer
            işletmeler ise yukarıdaki eşik değerlerine göre değerlendirilir.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                🏛️ Ölçek Şartı Aranmaksızın Kapsamda
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ BDDK&apos;ye tabi bankalar (TMSF bünyesindekiler hariç)</li>
                <li>✔ Sermaye piyasası araçları Borsa İstanbul&apos;da işlem gören halka açık şirketler/ihraççılar</li>
                <li>✔ Sigorta, reasürans ve emeklilik şirketleri</li>
                <li>✔ Finansal kiralama, faktoring, finansman ve varlık yönetim şirketleri</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Bu grup içinde şube sayısı 2&apos;den, çalışan sayısı 250&apos;den
                az olan ve payları borsada işlem görmeyen bazı finansal
                kuruluşlar için kademeli esneklikler (örn. Scope 3 emisyon
                raporlamasının opsiyonel olması) tanınmıştır.
              </p>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                📊 Eşik Değerine Tabi Diğer Şirketler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Yukarıdaki 3 kriterden en az 2&apos;sini</li>
                <li>✔ Art arda iki hesap döneminde aşan</li>
                <li>✔ Bağımsız denetime tabi tüm şirketler ve topluluklar</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Değerlendirme; şirketin son iki hesap dönemine ait finansal
                tabloları ve ortalama çalışan sayısı esas alınarak yapılır.
                Konsolide finansal tablo hazırlayan gruplarda değerlendirme
                konsolide büyüklükler üzerinden yapılabilir.
              </p>
            </div>
          </div>
        </section>

        {/* 4. GÜVENCE */}
        <section id="guvence" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. 2026: Güvence Denetimi Dönemi
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            İlk TSRS raporları hazırlandığında (2024 hesap dönemi, 2025
            yılında tamamlandı) henüz bağımsız güvence denetimi zorunluluğu
            işlemiyordu. 2026 itibarıyla bu değişti: kapsamdaki şirketlerin
            TSRS uyumlu sürdürülebilirlik raporları, ilk aşamada{" "}
            <strong>sınırlı güvence (limited assurance)</strong> seviyesinde
            bağımsız denetime tabi tutulmaya başlandı. Bu, finansal
            tablolara benzer şekilde, sürdürülebilirlik raporunun içeriğinin
            de artık bağımsız bir denetim sürecinden geçmesi anlamına
            geliyor.
          </p>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔍 Sınırlı Güvence Ne Demek?
            </h3>
            <p className="leading-8 text-gray-700">
              Sınırlı güvence, bağımsız denetçinin raporda yer alan
              bilgilerin &quot;önemli bir yanlışlık içerdiğine dair
              herhangi bir hususa rastlanmadığı&quot; yönünde negatif bir
              güvence ifadesi vermesidir. Uluslararası uygulamalarda bu
              seviyenin zamanla &quot;makul güvence&quot;ye (reasonable
              assurance) evrilmesi beklenmektedir; bu nedenle şirketlerin
              raporlama altyapısını ve veri toplama süreçlerini bugünden
              güvence denetimine dayanıklı şekilde kurgulaması önem taşır.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Halka açık şirketler için TSRS uyumlu sürdürülebilirlik raporu,
            finansal tablolarla birlikte Kamu Aydınlatma Platformu (KAP)
            üzerinden kamuya açıklanır. Halka açık olmayan ancak eşik
            değerleri nedeniyle kapsamda olan şirketler için ise rapor,
            genel amaçlı finansal raporlamanın bir parçası olarak hazırlanıp
            ilgili mevzuatta öngörülen şekilde muhafaza edilir ve talep
            halinde ibraz edilir.
          </p>
        </section>

        {/* 5. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Raporlama Takvimi ve Son Tarihler
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            İlk uygulama döneminde (2024 hesap dönemi), kapsamdaki
            şirketler sürdürülebilirlik faaliyetlerini 2025 yılının Ekim ayı
            sonuna kadar raporladı. 2025 hesap dönemine ilişkin raporlar
            için de benzer bir takvim izlenmesi beklenmektedir; ancak bu kez
            kapsam belirlemesi, yukarıda açıklanan{" "}
            <strong>yükseltilmiş eşik değerlerine</strong> göre yapılacaktır.
          </p>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Ağustos 2026 İtibarıyla Durum
            </h3>
            <p className="leading-8 text-gray-700">
              Bu yazının yayımlandığı tarih itibarıyla, 2025 hesap dönemine
              ait TSRS uyumlu sürdürülebilirlik raporlarının hazırlık ve
              güvence denetimi süreci devam etmektedir. Şirketlerin kapsam
              durumlarını güncel eşik değerlerine göre şimdiden netleştirmesi,
              yıl sonuna doğru yaşanabilecek zaman baskısını ve güvence
              denetimi sürecinde ortaya çıkabilecek veri eksikliklerini
              önemli ölçüde azaltır. Güncel duyurular KGK&apos;nın resmî
              internet sitesi üzerinden takip edilebilir.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Hazırlık Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kapsamda olsun ya da olmasın, her orta-büyük ölçekli şirketin
            aşağıdaki adımları takip etmesi, hem uyum riskini hem de
            gelecekteki kapsam genişlemelerine hazırlıksız yakalanma
            riskini azaltır.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📐</div>
              <h3 className="text-xl font-bold">1. Kapsam Analizi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Son iki hesap dönemine ait aktif toplamı, net satış hasılatı
                ve çalışan sayısı yeni eşiklerle karşılaştırılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧭</div>
              <h3 className="text-xl font-bold">2. Boşluk Analizi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Mevcut veri toplama süreçleri TSRS 1 ve TSRS 2 gerekleriyle
                karşılaştırılarak eksikler tespit edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🗂️</div>
              <h3 className="text-xl font-bold">3. Veri Altyapısı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Emisyon, enerji, iş gücü ve yönetişim verilerinin izlenebilir
                ve doğrulanabilir şekilde kayıt altına alınması sağlanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">4. Rapor Taslağı</h3>
              <p className="mt-3 text-sm text-gray-600">
                TSRS uyumlu sürdürülebilirlik raporu; strateji, risk yönetimi,
                metrikler ve hedefler başlıkları altında hazırlanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔎</div>
              <h3 className="text-xl font-bold">5. Güvence Denetimine Hazırlık</h3>
              <p className="mt-3 text-sm text-gray-600">
                Dayanak dokümanlar ve hesaplama yöntemleri, sınırlı güvence
                denetimine dayanıklı hale getirilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📤</div>
              <h3 className="text-xl font-bold">6. Yayımlama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Halka açık şirketlerde rapor KAP üzerinden, diğerlerinde
                mevzuata uygun şekilde muhafaza edilerek yayımlanır.
              </p>
            </div>
          </div>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>
                Eşiklerin yükselmesi <strong>kapsam dışı kalmak</strong>{" "}
                anlamına gelebilir; ancak bu değerlendirme resmî verilerle
                yapılmadan &quot;kapsam dışıyım&quot; varsayımıyla hareket
                etmek risklidir.
              </li>
              <li>
                Kapsam dışında kalan şirketler için dahi{" "}
                <strong>gönüllü raporlama</strong> stratejik bir avantaj
                olabilir; büyük şirketlerin tedarik zinciri talepleri,
                banka/finansman değerlendirmeleri ve ihracat yapılan
                pazarlardaki uluslararası sürdürülebilirlik/karbon sınırı
                düzenlemeleri (ör. AB&apos;nin sınırda karbon düzenlemesi)
                dolaylı olarak veri talep edebilir.
              </li>
              <li>
                Konsolide finansal tablo hazırlayan şirket topluluklarında
                kapsam belirlemesi, tek bir şirketin değil{" "}
                <strong>grup büyüklüğünün</strong> esas alınmasını
                gerektirebilir.
              </li>
              <li>
                Güvence denetimi süreci, finansal denetimden bağımsız ayrı
                bir süreçtir; veri toplama altyapısı erken kurulmazsa rapor
                teslim döneminde zaman baskısı yaşanır.
              </li>
              <li>
                KGK ve ilgili düzenleyici otoriteler (BDDK, SPK vb.),
                kapsamda olduğu hâlde rapor hazırlamayan veya eksik/yanıltıcı
                rapor sunan kuruluşlar için denetim ve yaptırım yetkisine
                sahiptir; güncel yükümlülükler için KGK&apos;nın yürürlükteki
                kararları esas alınmalıdır.
              </li>
            </ul>
          </div>
        </section>

        {/* 8. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Eşik değerleri neden yükseltildi?
              </h3>
              <p className="leading-8 text-gray-700">
                KGK, 13 Ocak 2026 tarihli Kurul Kararı ile TSRS kapsamını
                belirleyen aktif toplamı, net satış hasılatı ve çalışan
                sayısı eşiklerini yeniden belirledi. Karar, 16 Ocak 2026
                tarihli ve 33139 sayılı Resmî Gazete&apos;de yayımlandı ve
                1 Ocak 2025&apos;te başlayan hesap dönemlerinden itibaren
                uygulanıyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şirketim geçen yıl kapsamdaydı, bu yıl da kapsamda mı sayılır?
              </h3>
              <p className="leading-8 text-gray-700">
                Otomatik olarak değil. Kapsam değerlendirmesi her yıl güncel
                eşiklere göre, art arda iki hesap dönemi esas alınarak
                yeniden yapılır. Eski eşiklere göre kapsamda olan bir
                şirket, yeni ve daha yüksek eşikler karşısında kapsam dışına
                çıkabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kapsam dışında kalan bir şirket gönüllü rapor hazırlayabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. Zorunluluk kapsamı dışında kalan şirketler de
                gönüllü olarak TSRS uyumlu rapor hazırlayabilir. Özellikle
                büyük ölçekli alıcıların tedarikçilerinden sürdürülebilirlik
                verisi talep ettiği sektörlerde bu, ticari bir avantaja
                dönüşebilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Güvence denetimini kim yapabilir?
              </h3>
              <p className="leading-8 text-gray-700">
                Sürdürülebilirlik raporlarının güvence denetimi, konuya
                ilişkin yetkilendirme şartlarını taşıyan bağımsız denetim
                kuruluşları tarafından yürütülür. 2026 itibarıyla bu denetim
                ilk aşamada sınırlı güvence seviyesinde gerçekleştirilmektedir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Rapor hazırlamamanın bir yaptırımı var mı?
              </h3>
              <p className="leading-8 text-gray-700">
                KGK ve ilgili denetim otoriteleri, kapsamda olduğu hâlde
                raporlama yükümlülüğünü yerine getirmeyen kuruluşlar için
                denetim ve yaptırım yetkisine sahiptir. Somut yaptırım
                süreçleri şirketin statüsüne (halka açık, finans kuruluşu
                vb.) göre farklılaşabileceğinden, güncel durumun resmî
                kaynaklardan teyit edilmesi önerilir.
              </p>
            </div>
          </div>
        </section>

        {/* 9. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            2026, TSRS sürdürülebilirlik raporlaması açısından iki cepheli
            bir yıl oldu: eşik değerlerinin yükseltilmesiyle kapsam
            daraldı, ancak kapsamda kalan şirketler için raporlar artık
            bağımsız güvence denetimine tabi. Bu tablo, şirketlerin hem
            &quot;kapsamda mıyım&quot; sorusunu güncel verilerle yeniden
            sormasını hem de kapsamda kalanların raporlama altyapısını
            denetime dayanıklı hale getirmesini gerektiriyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin güncel eşik değerlerine göre TSRS kapsamında olup
            olmadığının netleştirilmesi, TSRS uyumlu sürdürülebilirlik
            raporunun hazırlanması ve güvence denetimi sürecine hazırlık
            konusunda Koray Akdağ / Sistem Global Danışmanlık olarak
            yanınızdayız. Ayrı bir mali müşavirlik veya denetim firması
            aramanıza gerek kalmadan; kapsam analizinden rapor taslağına,
            güvence denetimi hazırlığından sonrasındaki muhasebe ve
            raporlama süreçlerine kadar tüm süreci tek noktadan
            yürütebiliriz. Şirketinizin sürdürülebilirlik raporlama
            yükümlülüğünü birlikte değerlendirmek için bizimle iletişime
            geçebilirsiniz.
          </p>
        </section>
    </BlogLayout>
  );
}
