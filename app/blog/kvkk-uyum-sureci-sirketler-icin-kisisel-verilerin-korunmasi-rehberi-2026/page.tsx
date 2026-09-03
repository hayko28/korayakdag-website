import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "KVKK Uyum Süreci 2026: Şirketler İçin Rehber | Koray Akdağ",
  description: "VERBİS kayıt eşikleri, aydınlatma/açık rıza yükümlülüğü, 72 saatlik veri ihlali bildirimi ve 2026 güncel idari para cezalarıyla adım adım KVKK uyum rehberi.",
  keywords: [
    "kvkk uyum süreci nasıl yapılır",
    "verbis'e kimler kayıt olmalı",
    "kvkk ihlali cezası ne kadar",
    "kvkk uyum süreci 2026",
    "verbis kayıt yükümlülüğü 2026",
    "kişisel verilerin korunması kanunu şirketler",
    "aydınlatma metni açık rıza formu",
    "veri ihlali bildirimi 72 saat",
    "kvkk idari para cezaları 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KVKK Uyum Süreci: Şirketler İçin Kişisel Verilerin Korunması Rehberi 2026"
      description="6698 sayılı Kanun kapsamında VERBİS kayıt yükümlülüğü ve 2026 güncel eşikleri, aydınlatma/açık rıza ayrımı, veri işleme envanteri, 72 saatlik veri ihlali bildirimi ve güncel idari para cezalarıyla şirketler için adım adım KVKK uyum rehberi."
      category="HUKUK DANIŞMANLIĞI • KVKK • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kvkk-uyum-sureci-sirketler-icin-kisisel-verilerin-korunmasi-rehberi-2026"
      coverImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), 2016&apos;dan
          bu yana yürürlükte olsa da uygulamadaki en büyük hata hâlâ aynı:
          şirketlerin çoğu KVKK&apos;yı yalnızca &quot;web sitesine bir
          aydınlatma metni koymak&quot; sanıyor. Oysa Kişisel Verileri Koruma
          Kurumu&apos;nun (KVKK Kurumu) 2026 yılı için güncellediği idari
          para cezaları, tek bir eksik bildirimin milyonlarca TL&apos;ye
          ulaşabildiğini gösteriyor. Bu rehberde, şirketinizin gerçekte hangi
          yükümlülük altında olduğunu ve uyum sürecini nasıl adım adım
          kuracağınızı anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ VERBİS&apos;e kimler, ne zaman kayıt olmak zorunda?</li>
          <li>✔ Aydınlatma yükümlülüğü ile açık rıza arasındaki fark</li>
          <li>✔ Veri işleme envanteri nasıl çıkarılır?</li>
          <li>✔ Veri ihlalinde 72 saatlik bildirim süresi nasıl işler?</li>
          <li>✔ 2026 güncel idari para cezaları ne kadar?</li>
          <li>✔ Adım adım KVKK uyum süreci</li>
          <li>✔ Şirketlerin en sık yaptığı hatalar ve sık sorulan sorular</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. KVKK Nedir, Kimleri Bağlar?
          </Link>
          <Link href="#verbis" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. VERBİS Kayıt Yükümlülüğü ve 2026 Eşikleri
          </Link>
          <Link href="#aydinlatma-riza" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Aydınlatma Yükümlülüğü ve Açık Rıza Ayrımı
          </Link>
          <Link href="#envanter" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Veri İşleme Envanteri Nasıl Çıkarılır?
          </Link>
          <Link href="#ihlal" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Veri İhlali Bildirimi: 72 Saat Kuralı
          </Link>
          <Link href="#cezalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. 2026 Güncel İdari Para Cezaları
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım KVKK Uyum Süreci
          </Link>
          <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Şirketlerin Sık Yaptığı Hatalar
          </Link>
          <Link href="#biz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Uyum Sürecinizi Biz Yönetelim
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. KVKK Nedir, Kimleri Bağlar?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          6698 sayılı Kişisel Verilerin Korunması Kanunu, gerçek kişilere ait
          kimlik, iletişim, sağlık, mali, biyometrik ve benzeri her türlü
          verinin işlenmesinde &quot;veri sorumlusu&quot; (verinin işleme
          amaç ve araçlarını belirleyen şirket/kurum) ve &quot;veri
          işleyen&quot; (veri sorumlusu adına veri işleyen taraf) için
          uyulması zorunlu esasları düzenler. Kanun; müşteri, çalışan, tedarikçi,
          ziyaretçi, aday veya web sitesi kullanıcısı gibi herhangi bir gerçek
          kişiye ait veriyi kaydeden, sınıflandıran, saklayan veya paylaşan{" "}
          <strong>her ölçekteki şirketi</strong> kapsar; şirketin çalışan
          sayısı veya sektörü küçük olması, yükümlülükten muaf tutmaz.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Neden Artık Ertelenemez Bir Konu?
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Kişisel Verileri Koruma Kurulu, her yıl daha fazla şikâyet ve resen inceleme dosyasına bakıyor</li>
            <li>✔ İdari para cezaları her yıl yeniden değerleme oranıyla otomatik artıyor</li>
            <li>✔ İhale, banka kredisi ve kurumsal müşteri sözleşmelerinde KVKK uyum belgesi giderek daha sık isteniyor</li>
            <li>✔ Veri ihlalinde geç kalınan bildirim, cezayı tek başına ağırlaştırabiliyor</li>
          </ul>
        </div>
        <p className="leading-8 text-gray-700">
          Bu rehberdeki güncel eşik ve ceza tutarları, ikincil hukuk
          kaynaklarınca (bağımsız hukuk bültenleri) yayımlanan ve birbirini
          teyit eden bilgilere dayanmaktadır; kesin ve güncel rakamlar için
          süreç başında{" "}
          <a
            href="https://www.kvkk.gov.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Kişisel Verileri Koruma Kurumu&apos;nun (kvkk.gov.tr)
          </a>{" "}
          resmî duyurularının kontrol edilmesi önerilir.
        </p>
      </section>

      {/* 2. VERBİS */}
      <section id="verbis" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. VERBİS Kayıt Yükümlülüğü ve 2026 Eşikleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Veri Sorumluları Sicil Bilgi Sistemi (VERBİS), veri sorumlularının
          hangi kişisel verileri, hangi amaçla, kimlerden topladığını ve
          kimlere aktardığını beyan ettiği resmî sicildir. VERBİS&apos;e
          kayıt zorunluluğu, çalışan sayısı ve mali bilanço büyüklüğüne göre
          şekillenir; ancak istisnalar da mevcuttur.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Veri Sorumlusu Profili</th>
                <th className="p-5">Kayıt Yükümlülüğü Eşiği</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ana faaliyeti özel nitelikli veri işleme olmayan şirketler (perakende, imalat, turizm vb.)</td>
                <td className="p-5">Yıllık ortalama çalışan sayısı 50&apos;yi <strong>veya</strong> yıllık mali bilanço toplamı 100 milyon TL&apos;yi aşan şirketler kayıt olmak zorunda; her iki eşiğin de altında kalanlar istisna kapsamındadır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ana faaliyeti özel nitelikli veri işleme olan şirketler (sağlık, biyometrik, dernek/sendika üyeliği vb.)</td>
                <td className="p-5">Daha düşük bir eşikle (yaklaşık 10 çalışan / 10 milyon TL bilanço) kayıt yükümlülüğü uygulanır; sınırın altında kalsalar bile birçok durumda kayıt gerekliliği devam eder</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışında yerleşik veri sorumlusu temsilcileri, kamu kurum ve kuruluşları</td>
                <td className="p-5">Ölçek eşiğinden bağımsız olarak kayıt yükümlülüğü genel kural olarak devam eder</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu eşikler zaman içinde Kurul kararlarıyla güncellenmiştir; bu
            nedenle şirketinizin güncel durumunu netleştirmek için mevcut
            çalışan sayınızı ve son onaylı bilançonuzu esas alarak VERBİS
            sistemindeki güncel istisna kriterlerini teyit etmeniz gerekir.
            Önemli bir ayrıntı: VERBİS kaydından istisna tutulmak, KVKK&apos;nın
            diğer yükümlülüklerinden (aydınlatma, veri güvenliği, ilgili kişi
            başvurularına cevap verme) muaf olmak anlamına gelmez.
          </p>
        </div>
      </section>

      {/* 3. AYDINLATMA / RIZA */}
      <section id="aydinlatma-riza" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Aydınlatma Yükümlülüğü ve Açık Rıza Ayrımı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KVKK uygulamasında en çok karıştırılan iki kavram budur. İkisi
          farklı işlevlere sahiptir ve birbirinin yerine geçemez.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              📄 Aydınlatma Yükümlülüğü (KVKK m.10)
            </h3>
            <p className="text-gray-700">
              Veri sorumlusunun kimliği, verinin hangi amaçla ve hukuki
              sebeple işlendiği, kimlere ve hangi amaçla aktarılabileceği ile
              ilgili kişinin hakları konusunda bilgi verilmesidir. Rızaya
              bağlı olmayan işlemeler (örneğin sözleşmenin ifası, kanuni
              yükümlülük) dâhil <strong>her durumda</strong> zorunludur.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ✍️ Açık Rıza (KVKK m.3, m.5)
            </h3>
            <p className="text-gray-700">
              Belirli bir konuya ilişkin, bilgilendirmeye dayanan ve özgür
              iradeyle açıklanan rızadır. Yalnızca kanunda sayılan işleme
              şartlarından hiçbiri (sözleşme, kanuni yükümlülük, meşru
              menfaat vb.) mevcut değilse veya özel nitelikli veri söz
              konusuysa gereklidir; her veri işleme için otomatik olarak
              istenmesi gerekmez.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikteki en sık hata şudur: şirketler her veri işleme için açık
            rıza formu imzalatmaya çalışır, oysa çoğu işleme faaliyeti (bordro,
            fatura kesme, sözleşme yürütme) zaten kanuni bir işleme şartına
            dayanır ve sadece aydınlatma yeterlidir. Açık rızanın gereksiz
            yere ve genel-geçer ifadelerle alınması, Kurul denetiminde
            &quot;geçersiz rıza&quot; olarak değerlendirilme riski taşır.
          </p>
        </div>
      </section>

      {/* 4. ENVANTER */}
      <section id="envanter" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Veri İşleme Envanteri Nasıl Çıkarılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Veri işleme envanteri (kişisel veri envanteri), VERBİS
          kaydının da temelini oluşturan, şirketin tüm veri işleme
          faaliyetlerini haritalandırdığı çalışmadır. Doğru hazırlanmış bir
          envanter olmadan ne aydınlatma metni ne de VERBİS beyanı gerçekçi
          olabilir.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Envanterde Yer Alması Gereken Temel Bilgiler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Veri kategorileri:</strong> Kimlik, iletişim, mali,
              özlük, sağlık, biyometrik, görsel/işitsel veri gibi
              sınıflandırma.
            </li>
            <li>
              <strong>Veri konusu kişi grupları:</strong> Çalışan, çalışan
              adayı, müşteri, tedarikçi, ziyaretçi, web sitesi kullanıcısı.
            </li>
            <li>
              <strong>Toplama yöntemi ve hukuki sebep:</strong> Verinin
              hangi kanaldan ve hangi hukuki dayanakla toplandığı.
            </li>
            <li>
              <strong>İşleme amacı:</strong> Verinin hangi iş sürecinde,
              hangi amaçla kullanıldığı.
            </li>
            <li>
              <strong>Aktarılan taraflar:</strong> Verinin yurt içi/yurt
              dışı hangi üçüncü taraflara (kargo, muhasebe programı, bulut
              sağlayıcı vb.) aktarıldığı.
            </li>
            <li>
              <strong>Saklama süresi ve imha yöntemi:</strong> Verinin ne
              kadar süre saklanacağı ve süre sonunda silme/yok
              etme/anonimleştirme yönteminin ne olacağı.
            </li>
            <li>
              <strong>Alınan teknik ve idari tedbirler:</strong> Erişim
              yetkilendirme, şifreleme, yedekleme gibi güvenlik önlemleri.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Envanter çalışması genellikle şirket içindeki tüm departmanlarla
          (İK, satış, muhasebe, BT) yapılan görüşmelerle başlar; bu nedenle
          gerçekçi bir zaman planlaması yapmak, sürecin sağlıklı ilerlemesi
          için önemlidir.
        </p>
      </section>

      {/* 5. İHLAL */}
      <section id="ihlal" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Veri İhlali Bildirimi: 72 Saat Kuralı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kişisel verilerin kanuni olmayan yollarla ele geçirilmesi
          (sızıntı, siber saldırı, yanlış kişiye e-posta/veri gönderimi vb.)
          durumunda KVKK m.12 ve Kurul&apos;un 2019/10 sayılı kararı gereği
          işletilmesi gereken süreç şu şekildedir:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">İhlalin Tespiti / Öğrenilmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">En Geç 72 Saat İçinde Kurul&apos;a Bildirim</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Makul Sürede İlgili Kişilere Bildirim</h3>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            72 saatlik sürenin başlangıcı, ihlalin fiilen gerçekleştiği an
            değil, veri sorumlusunun ihlali <strong>öğrendiği</strong> andır.
            Bildirim, Kurum&apos;un öngördüğü veri ihlali bildirim formu
            üzerinden yapılır ve ihlalin kapsamı, etkilenen kişi sayısı,
            alınan/alınacak önlemler gibi bilgileri içermelidir. Süresi
            içinde bildirim yapılmaması, KVKK Kurulu tarafından ayrı ve ağır
            bir ihlal olarak değerlendirilir; bu nedenle şirket içinde
            &quot;ihlal anında ilk kimi arayacağız&quot; sorusunun cevabının
            önceden belirlenmiş olması kritik önem taşır.
          </p>
        </div>
      </section>

      {/* 6. CEZALAR */}
      <section id="cezalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. 2026 Güncel İdari Para Cezaları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KVKK m.18 kapsamındaki idari para cezaları, her yıl Vergi Usul
          Kanunu&apos;na göre belirlenen yeniden değerleme oranı esas
          alınarak güncellenir. 2026 yılı için bildirilen (kaynaklar arası
          tutarlı) tutarlar şöyledir:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">İhlal Türü</th>
                <th className="p-5">Alt Sınır</th>
                <th className="p-5">Üst Sınır</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Aydınlatma yükümlülüğüne aykırılık</td>
                <td className="p-5">≈ 85.400 TL</td>
                <td className="p-5">≈ 1.709.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Veri güvenliğine ilişkin yükümlülüklere aykırılık</td>
                <td className="p-5">≈ 256.000 TL</td>
                <td className="p-5">≈ 17.092.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">VERBİS&apos;e kayıt ve bildirim yükümlülüğüne aykırılık</td>
                <td className="p-5">≈ 341.800 TL</td>
                <td className="p-5">≈ 17.092.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurul kararlarının yerine getirilmemesi</td>
                <td className="p-5">≈ 427.200 TL</td>
                <td className="p-5">≈ 17.092.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışı veri aktarımına ilişkin bildirim yükümlülüğüne aykırılık</td>
                <td className="p-5">≈ 90.300 TL</td>
                <td className="p-5">≈ 1.806.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu tutarlar, KVKK&apos;nın idari yaptırım rejimindeki en yüksek
            kalemi olan veri güvenliği ve VERBİS ihlallerinde <strong>17
            milyon TL&apos;yi aşan</strong> bir üst sınıra ulaşabiliyor.
            Rakamlar yıl başında yeniden değerleme oranıyla otomatik
            güncellendiğinden, somut bir dosyada uygulanacak kesin tutar için
            ilgili yılın Kurum duyurusunun ve varsa Kurul kararının
            doğrulanması gerekir.
          </p>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım KVKK Uyum Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          KVKK uyumu tek seferlik bir belge işi değil, kurulup periyodik
          olarak denetlenmesi gereken bir sistemdir. Uygulamada izlenen
          sıralama şu şekildedir:
        </p>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-sm font-bold">Veri Envanteri Çıkarma</h3>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-sm font-bold">Politika/Prosedür Hazırlama</h3>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-sm font-bold">Aydınlatma Metni Hazırlama</h3>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-sm font-bold">Açık Rıza Formu (Gerekliyse)</h3>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-sm font-bold">VERBİS Kaydı (Gerekliyse)</h3>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-sm font-bold">Periyodik Denetim</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.1. Veri Envanteri Çıkarma
          </h3>
          <p className="leading-8 text-gray-700">
            Şirketin hangi departmanında hangi verinin nasıl toplandığı,
            saklandığı ve aktarıldığı tek tek belgelenir. Bu çalışma,
            sonraki tüm adımların (politika, aydınlatma metni, VERBİS beyanı)
            temelini oluşturur.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.2. Kişisel Veri İşleme ve Saklama/İmha Politikası Hazırlama
          </h3>
          <p className="leading-8 text-gray-700">
            Envanter temelinde, şirketin veri işleme ilkelerini, saklama
            sürelerini ve imha (silme/yok etme/anonimleştirme) yöntemlerini
            belirleyen yazılı politika oluşturulur. Kişisel Verilerin Silinmesi,
            Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik
            kapsamında belirli büyüklükteki veri sorumluları için bu
            politikanın hazırlanması ayrıca zorunludur.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.3. Aydınlatma Metinlerinin Hazırlanması
          </h3>
          <p className="leading-8 text-gray-700">
            Çalışan, çalışan adayı, müşteri, ziyaretçi ve web sitesi
            kullanıcısı gibi her bir veri konusu kişi grubu için ayrı
            aydınlatma metni hazırlanır; genel-geçer ve tek tip bir metin,
            denetimde yetersiz kabul edilme riski taşır.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.4. Açık Rıza Formunun Hazırlanması (Gerekli Olduğu Durumlarda)
          </h3>
          <p className="leading-8 text-gray-700">
            Yalnızca kanuni işleme şartlarının hiçbirinin karşılanmadığı
            veya özel nitelikli veri işlendiği durumlarda, konuya özgü ve
            açık rıza formu düzenlenir; aydınlatma metniyle karıştırılmaması
            önemlidir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.5. VERBİS Kaydının Tamamlanması (Kapsamdaysa)
          </h3>
          <p className="leading-8 text-gray-700">
            Yukarıdaki eşiklere göre kayıt yükümlülüğü bulunan şirketler,
            envanter çalışmasında ortaya çıkan bilgileri VERBİS üzerinden
            beyan eder. Kayıt sonrasında da envanterde önemli bir değişiklik
            olduğunda (yeni bir veri kategorisi, yeni bir aktarım, vb.)
            beyanın güncellenmesi gerekir.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            7.6. Periyodik Denetim ve Güncelleme
          </h3>
          <p className="leading-8 text-gray-700">
            KVKK uyumu, kurulup unutulacak bir sistem değildir. Yeni bir
            yazılım/tedarikçi kullanılmaya başlandığında, yeni bir veri
            kategorisi toplanmaya başladığında veya mevzuat değiştiğinde
            envanterin, politikaların ve aydınlatma metinlerinin gözden
            geçirilmesi gerekir.
          </p>
        </div>
      </section>

      {/* 8. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Şirketlerin Sık Yaptığı Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Sadece web sitesine aydınlatma metni koyup çalışan/tedarikçi tarafını hiç ele almamak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Her veri işleme için gereksiz yere genel-geçer açık rıza formu imzalatmak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ VERBİS istisnasına girdiğini düşünüp aydınlatma ve veri güvenliği yükümlülüklerini de atlamak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ İnternetten indirilen hazır şablon metinleri şirketin gerçek veri işleme faaliyetiyle uyumlu hale getirmeden kullanmak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Veri ihlali durumunda kime, nasıl ve kaç saat içinde bildirim yapılacağını önceden belirlememek
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Yurt dışındaki bulut/e-posta/CRM sağlayıcılarına veri aktarımını hiç değerlendirmemek
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Veri saklama sürelerini belirlemeden veriyi süresiz saklamak
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ❌ Uyum çalışmasını bir kereye mahsus yapıp yıllar içinde hiç güncellememek
          </div>
        </div>
      </section>

      {/* 9. BİZ */}
      <section id="biz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Uyum Sürecinizi Biz Yönetelim
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Veri Envanterinden VERBİS Kaydına Kadar Tek Elden
          </h3>
          <p className="leading-8 text-gray-700">
            Koray Akdağ / Sistem Global Danışmanlık olarak, şirketinizin veri
            işleme envanterinin çıkarılmasından politika ve aydınlatma
            metinlerinin hazırlanmasına, VERBİS kaydından periyodik uyum
            denetimine kadar KVKK sürecinin tamamını sizin adınıza
            yürütüyoruz. Ayrı bir hukuk bürosu veya danışmanlık firması
            aramanıza gerek kalmadan, hem uyum sürecinizi hem de sonrasındaki
            mali ve idari süreçlerinizi tek noktadan yönetebiliriz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin mevcut KVKK durumunu birlikte değerlendirmek için
              bizimle iletişime geçebilirsiniz.
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
              Küçük bir şirket olarak KVKK&apos;dan tamamen muaf olabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Çalışan sayısı ve bilanço eşiklerinin altında kalan
              şirketler yalnızca <strong>VERBİS&apos;e kayıt yükümlülüğünden</strong>{" "}
              istisna tutulabilir; aydınlatma yükümlülüğü, veri güvenliği
              tedbirleri ve ilgili kişi başvurularına cevap verme
              yükümlülüğü ölçekten bağımsız olarak devam eder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              VERBİS&apos;e kayıt olmam gerekip gerekmediğini nasıl anlarım?
            </h3>
            <p className="leading-8 text-gray-700">
              Öncelikle şirketinizin yıllık ortalama çalışan sayısı ve son
              onaylı mali bilanço toplamını, güncel istisna eşikleriyle
              karşılaştırmanız gerekir. Özel nitelikli veri (sağlık,
              biyometrik vb.) işleme faaliyetiniz varsa daha düşük bir eşik
              uygulanabileceğini unutmayın. Şüpheli durumlarda profesyonel
              bir değerlendirme almanız önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aydınlatma metni ile açık rıza formunu tek bir belgede birleştirebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu iki belgenin ayrı tutulması önerilir. Aydınlatma her durumda
              zorunludur ve rızaya bağlı değildir; açık rıza ise yalnızca
              gerekli olduğu durumlarda, konuya özgü ve ayrıca alınmalıdır.
              Birleştirilmiş, genel-geçer bir metin, denetimde geçersiz rıza
              olarak değerlendirilme riski taşır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Veri ihlalini fark ettim ama emin değilim, yine de bildirmem gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kişisel verilerin kanuni olmayan yollarla üçüncü kişilerin
              eline geçtiğine dair makul bir şüphe varsa, 72 saatlik süre
              işlemeye başlar. Belirsizlik durumunda dahi erken harekete
              geçip ön bildirimde bulunmak, sürecin gecikmesinden daha az
              risklidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KVKK uyum sürecini ne kadar sürede tamamlayabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketin büyüklüğüne ve veri işleme faaliyetlerinin
              karmaşıklığına bağlı olarak değişmekle birlikte, envanter
              çalışması genellikle birkaç haftayı bulur; politika, aydınlatma
              metni ve gerekiyorsa VERBİS kaydı dahil sürecin tamamı
              genellikle birkaç ay içinde tamamlanabilir. Süreç bir kez
              kurulduktan sonra periyodik güncelleme gerektirir.
            </p>
          </div>
        </div>
      </section>

      {/* SONUÇ */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KVKK uyumu, artık yalnızca büyük ölçekli şirketlerin gündemi
          değildir; VERBİS kayıt eşikleri, aydınlatma yükümlülüğü ve 2026
          yılında milyonlarca TL&apos;ye ulaşabilen idari para cezaları,
          her büyüklükteki şirketin bu konuyu ciddiye almasını gerektiriyor.
          Sağlam bir veri işleme envanteri üzerine kurulmuş, periyodik olarak
          güncellenen bir uyum sistemi; hem denetim risklerini azaltır hem de
          kurumsal müşteri ve ihale süreçlerinde şirketinizin güvenilirliğini
          artırır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin mevcut KVKK durumunun tespitinden envanter
          çalışmasına, aydınlatma metinlerinin hazırlanmasından VERBİS
          kaydına kadar tüm süreçte Koray Akdağ / Sistem Global Danışmanlık
          olarak yanınızdayız. Ayrı bir hukuk bürosu veya danışmanlık firması
          aramanıza gerek kalmadan sürecin tamamını birlikte yönetmek için
          bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKETLER HUKUKU • ASGARİ SERMAYE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Anonim ve Limited Şirketlerde Asgari Sermaye Artırımı: 31 Aralık 2026 Son Tarih</h3>
          </Link>
          <Link
            href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • FİKRİ MÜLKİYET • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusu: KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KURUMSAL GELİŞİM • KURUMSALLAŞMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Kurumsallaşma: Aile Şirketinden Kurumsal Yapıya Geçiş Süreci Nasıl Yönetilir?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
