import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Amerika'da (ABD) Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "Delaware ve Wyoming eyalet karşılaştırması, LLC ve C-Corp şirket türleri, EIN alma süreci, registered agent zorunluluğu, federal ve eyalet vergi sistemi, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel ABD rehberi.",
  keywords: [
    "amerikada şirket kurma",
    "abd şirket kuruluşu",
    "delaware llc kurma",
    "wyoming llc kurma",
    "abd ein alma",
    "registered agent nedir",
    "llc vs c-corp",
    "2026 amerikada şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Amerika'da (ABD) Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="Delaware ve Wyoming eyalet karşılaştırması, LLC ve C-Corp şirket türleri, EIN alma süreci, registered agent zorunluluğu, federal ve eyalet vergi sistemi, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel ABD rehberi."
      category="YURT DIŞI ŞİRKET • ABD • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="amerikada-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Amerika Birleşik Devletleri, dünyanın en büyük tüketici pazarına
          doğrudan erişim, güçlü kurumsal itibar ve nispeten hızlı, dijital
          bir tescil süreciyle Türk girişimciler için en çok tercih edilen
          yurt dışı yapılanma noktalarından biridir. Ancak ABD&apos;de şirket
          kurmak; 50 eyaletten doğru olanı seçmeyi, doğru şirket türünü
          belirlemeyi ve federal ile eyalet bazlı yükümlülükleri ayrı ayrı
          yönetmeyi gerektiren, göründüğünden daha teknik bir süreçtir.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Delaware ve Wyoming eyalet karşılaştırması</li>
          <li>✔ LLC (Limited Liability Company) ve C-Corp arasındaki fark</li>
          <li>✔ Adım adım kuruluş süreci ve EIN alma yöntemi</li>
          <li>✔ Federal %21 kurumlar vergisi ve eyalet bazlı vergi farkları</li>
          <li>✔ Banka hesabı açma sürecinin gerçekçi tablosu (Mercury, Wise)</li>
          <li>✔ Form 5472 zorunluluğu ve Türkiye tarafındaki yükümlülükler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-abd"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Amerika&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#llc-ccorp"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. LLC mi, C-Corp mu?
          </Link>
          <Link
            href="#eyalet-secimi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Eyalet Seçimi: Delaware mi, Wyoming mi?
          </Link>
          <Link
            href="#surec"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Adım Adım Kuruluş Süreci
          </Link>
          <Link
            href="#vergi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Vergi Sistemi: Federal ve Eyalet Ayrımı
          </Link>
          <Link
            href="#banka"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Banka Hesabı Açma Süreci
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#dikkat"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN ABD */}
      <section id="neden-abd" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Amerika&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD şirketi, Stripe, PayPal, Amazon ve pek çok global ödeme ve
          e-ticaret altyapısına sorunsuz erişim, uluslararası müşteriler
          nezdinde güçlü kurumsal güven ve dijital ağırlıklı, büyük ölçüde
          uzaktan yürütülebilen bir tescil süreci sunar. Fiziki mal
          ihracatından SaaS&apos;a, danışmanlıktan dijital hizmetlere kadar
          geniş bir yelpazede tercih edilir.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏦</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Ödeme Altyapısına Erişim
            </h3>
            <p className="text-gray-700">
              Stripe, PayPal, Amazon ve benzeri platformların çoğu ABD
              şirketlerine daha az kısıtlamayla, daha geniş özellik setiyle
              hizmet sunar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlı ve Dijital Tescil
            </h3>
            <p className="text-gray-700">
              Delaware ve Wyoming gibi eyaletlerde kuruluş belgesi genellikle
              1-3 iş günü içinde, tamamen online süreçlerle onaylanır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Kurumsal İtibar
            </h3>
            <p className="text-gray-700">
              &quot;LLC&quot; veya &quot;Inc.&quot; uzantılı bir ABD şirketi,
              özellikle B2B ve uluslararası müşteriler nezdinde ek bir güven
              unsuru oluşturur.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LLC VS C-CORP */}
      <section id="llc-ccorp" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. LLC mi, C-Corp mu? ABD&apos;nin En Kritik İkinci Kararı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de en sık kullanılan iki yapı LLC (Limited Liability
          Company - şirketler için sınırlı sorumlu ortaklık) ve C-Corp&apos;tur
          (klasik anonim şirket yapısı). Seçim; büyüme planınıza, yatırımcı
          alma niyetinize ve vergi tercihinize göre değişir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">LLC</th>
                <th className="p-5">C-Corp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergilendirme</td>
                <td className="p-5">
                  Varsayılan olarak şeffaf (pass-through); şirket düzeyinde
                  federal vergi ödenmez, kâr ortaklara yansır
                </td>
                <td className="p-5">
                  Şirket düzeyinde %21 sabit federal kurumlar vergisi;
                  temettü dağıtıldığında ortak düzeyinde ikinci kez vergi
                  (çifte vergilendirme)
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırımcı/VC Alma</td>
                <td className="p-5">Zor; risk sermayesi fonları genelde tercih etmez</td>
                <td className="p-5">Standart yapı; VC ve melek yatırımcıların çoğu C-Corp talep eder</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yönetim Formalitesi</td>
                <td className="p-5">Esnek; yönetim kurulu, hisse defteri gibi zorunluluklar yok</td>
                <td className="p-5">Yönetim kurulu, hisse senedi, yıllık toplantı kayıtları gibi ek formaliteler</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kimler İçin Uygun</td>
                <td className="p-5">E-ticaret, danışmanlık, SaaS, hizmet ihracatı yapan küçük-orta ölçekli girişimler</td>
                <td className="p-5">Kurumsal yatırım/VC almayı hedefleyen teknoloji girişimleri</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yabancı ortaklı bir LLC&apos;nin ABD kaynaklı geliri (effectively
            connected income - fiilen bağlantılı gelir) varsa, kâr payı
            dağıtımlarında genellikle %30 stopaj uygulanır; bu oran, Türkiye
            ile ABD arasındaki Çifte Vergilendirmeyi Önleme Anlaşması
            kapsamında düşürülebilir. Yalnızca uluslararası müşterilere
            hizmet veren, ABD&apos;de fiziksel faaliyeti olmayan bir LLC için
            bu konu genellikle daha az sorun teşkil eder; somut durum
            mutlaka değerlendirilmelidir.
          </p>
        </div>
      </section>

      {/* 3. EYALET SEÇİMİ */}
      <section id="eyalet-secimi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Eyalet Seçimi: Delaware mi, Wyoming mi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de 50 eyaletin herhangi birinde şirket kurulabilir; ancak
          Türk girişimcilerin ve yabancı kurucuların en sık tercih ettiği iki
          eyalet Delaware ve Wyoming&apos;dir. İkisi de şirketin fiilen o
          eyalette faaliyet göstermesini şart koşmaz.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Delaware</th>
                <th className="p-5">Wyoming</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluş Ücreti (Devlet)</td>
                <td className="p-5">110 USD</td>
                <td className="p-5">100 USD</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yıllık Zorunlu Ödeme (LLC)</td>
                <td className="p-5">300 USD sabit franchise tax (yıllık işletme vergisi)</td>
                <td className="p-5">En az 60 USD yıllık rapor ücreti</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Eyalet Kurumlar Vergisi</td>
                <td className="p-5">Delaware dışında elde edilen gelir üzerinden eyalet kurumlar vergisi alınmaz</td>
                <td className="p-5">Eyalet kurumlar vergisi ve eyalet gelir vergisi yok</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırımcı/VC Tercihi</td>
                <td className="p-5">Yüksek; özel ticaret mahkemesi (Court of Chancery) ve köklü şirketler hukuku içtihadı</td>
                <td className="p-5">Düşük; girişim sermayesi fonları genelde Delaware talep eder</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">En Uygun Profil</td>
                <td className="p-5">VC/yatırım hedefleyen C-Corp yapıları, büyümeyi planlayan startuplar</td>
                <td className="p-5">Küçük-orta ölçekli LLC, e-ticaret, danışmanlık, düşük maliyet önceliği olanlar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısaca: yalnızca uluslararası müşterilere hizmet verecek,
            yatırımcı almayı planlamayan küçük-orta ölçekli bir LLC için
            Wyoming, düşük yıllık maliyeti ve eyalet kurumlar vergisinin
            olmaması nedeniyle genellikle daha avantajlıdır. Girişim
            sermayesi (VC) fonlarından yatırım almayı hedefleyen bir C-Corp
            için ise Delaware, yatırımcıların standart beklentisi ve
            uzmanlaşmış ticaret mahkemesi nedeniyle neredeyse zorunlu bir
            tercih halini alır. Hangi yapının iş modelinize uygun olduğunu
            birlikte değerlendiriyoruz.
          </p>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Süreç, eyalet ve şirket türü seçiminden banka hesabı açılışına
          kadar dört ana aşamadan oluşur. Kuruluş belgesinin onaylanması
          genellikle 1-3 iş günü, EIN alınması ise başvuru yöntemine göre
          aynı gün ile 5 hafta arasında sürebilir.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Eyalet & Yapı Seçimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Registered Agent & Tescil</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">EIN Başvurusu (IRS)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Banka Hesabı & Faaliyete Başlama</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Eyalet ve Şirket Yapısının Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Süreç, hedef pazar, yatırımcı beklentisi ve bütçeye göre
            eyaletin (tipik olarak Delaware veya Wyoming) ve şirket türünün
            (LLC veya C-Corp) belirlenmesiyle başlar. Bu aşamada şirket
            ismi, ilgili eyaletin sicilinde (Delaware Division of
            Corporations veya Wyoming Secretary of State) müsaitlik
            kontrolünden geçirilir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Registered Agent Ataması ve Kuruluş Belgesinin Tescili
          </h3>
          <p className="leading-8 text-gray-700">
            Her ABD eyaleti, şirket adına resmi tebligat ve yasal evrakları
            teslim alacak, o eyalette fiziksel adresi bulunan bir
            registered agent (kayıtlı temsilci) atanmasını zorunlu kılar.
            Yabancı kurucuların eyalette fiziken bulunmasına gerek yoktur;
            kuruluş belgesi (Certificate of Formation / Articles of
            Organization) registered agent üzerinden elektronik olarak
            dosyalanır ve genellikle 1-3 iş günü içinde onaylanır.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. EIN (İşveren Kimlik Numarası) Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket tescil edildikten sonra IRS&apos;ten (ABD Gelir İdaresi)
            EIN alınır; bu numara olmadan banka hesabı açılamaz ve vergi
            beyannamesi verilemez. SSN (Social Security Number) veya ITIN
            (Individual Taxpayer Identification Number) olmayan yabancı
            kurucular Form SS-4&apos;ü doldurup ilgili alanı
            &quot;Foreign/N/A&quot; olarak işaretleyerek telefon (aynı gün),
            faks (yaklaşık 4 iş günü) veya posta (4-5 hafta) yoluyla
            uluslararası başvuru sürecini kullanır. IRS&apos;in online EIN
            aracı, yalnızca SSN/ITIN sahibi başvuru sahipleri için açıktır.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Banka Hesabı Açılışı ve Faaliyete Başlama
          </h3>
          <p className="leading-8 text-gray-700">
            EIN alındıktan sonra şirket adına banka hesabı açılır ve
            faaliyete başlanabilir. Bu aşamadan itibaren muhasebe kaydı,
            yıllık rapor (annual report) yükümlülüğü ve federal/eyalet
            vergi beyanları düzenli olarak takip edilmesi gereken kalemler
            haline gelir.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi: Federal ve Eyalet Ayrımı (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de vergi yükü iki katmanlıdır: tüm eyaletlerde geçerli
          sabit bir federal vergi ve eyaletten eyalete büyük farklılık
          gösteren eyalet bazlı vergiler. Bu ayrımı doğru anlamak, gerçek
          maliyeti hesaplamanın anahtarıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Vergi</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Federal Kurumlar Vergisi (C-Corp)</td>
                <td className="p-5">%21 (sabit)</td>
                <td className="p-5">2017 vergi reformuyla belirlenen sabit oran, 2026&apos;da değişmeden geçerli</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">LLC Federal Vergisi</td>
                <td className="p-5">Şirket düzeyinde yok (pass-through)</td>
                <td className="p-5">Kâr doğrudan ortaklara yansır; yabancı ortaklarda ABD kaynaklı dağıtımlarda %30&apos;a kadar stopaj uygulanabilir (ÇVÖA ile düşürülebilir)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Eyalet Kurumlar Vergisi</td>
                <td className="p-5">%0 (Wyoming) / değişken (diğer eyaletler)</td>
                <td className="p-5">Wyoming ve Nevada gibi eyaletlerde eyalet kurumlar vergisi yok; Delaware, eyalet dışı gelirlere eyalet kurumlar vergisi uygulamaz</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Delaware Franchise Tax (C-Corp)</td>
                <td className="p-5">Min. 175 USD, maks. 200.000 USD</td>
                <td className="p-5">Yetkilendirilmiş hisse sayısına göre hesaplanır; yanlış yöntemle hesaplanırsa beklenmedik yüksek fatura riski taşır</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yalnızca uluslararası müşterilere hizmet veren, ABD&apos;de
            çalışanı veya fiziksel faaliyeti olmayan bir LLC&apos;nin
            genellikle ABD kaynaklı vergilendirilebilir geliri (ECI)
            bulunmaz; bu durumda federal gelir vergisi doğmayabilir. Ancak
            bu, beyanname ve bilgi formu yükümlülüklerini ortadan
            kaldırmaz — foreign-owned (yabancı sahipli) LLC&apos;lerin her
            yıl Form 5472 ve pro forma Form 1120 dosyalaması, gelir olmasa
            dahi zorunludur ve eksik/geç dosyalamanın cezası form başına
            en az 25.000 USD&apos;dir. Türkiye ile ABD arasındaki Çifte
            Vergilendirmeyi Önleme Anlaşması kapsamında, ABD&apos;de ödenen
            verginin Türkiye&apos;de mahsubu mümkün olabilir. Güncel oranlar
            için{" "}
            <a
              href="https://www.irs.gov/businesses/small-businesses-self-employed/corporations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              IRS
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
          ABD&apos;de kuruluş süreci hızlı ve tamamen uzaktan yürütülebilir
          olsa da, geleneksel bankacılıkta hesap açılışı çoğu zaman fiziksel
          bulunma gerektirir. Bu nedenle beklenti yönetimi önemlidir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Chase, Bank of America gibi geleneksel bankalar, kurumsal hesap
              açılışı için genellikle yetkilinin şubede fiziken bulunmasını
              talep eder; bu, çoğu yabancı kurucu için pratik bir engeldir.
            </li>
            <li>
              Mercury, kayıtlı bir ABD LLC/C-Corp&apos;u, geçerli EIN&apos;i
              ve kurucular için pasaportu olan yabancı sahipli şirketlere
              SSN/ITIN aranmadan, tamamen online başvuruyla kurumsal hesap
              açma imkânı sunar; başvuru genellikle birkaç iş günü içinde
              sonuçlanır.
            </li>
            <li>
              Wise Business ve Payoneer gibi fintech çözümleri, EIN alındıktan
              sonra uzaktan açılabilen, çok para birimli tahsilat ve ödeme
              imkânı sunan pratik alternatifler/tamamlayıcılardır; bazı
              platformlar (Stripe, PayPal gibi) için gerekli entegrasyonları
              destekler.
            </li>
            <li>
              2025-2026 döneminde fintech platformlar, kara para aklama (AML)
              mevzuatı gereği yabancı sahipli şirketlere yönelik durum tespiti
              (due diligence) süreçlerini belirgin şekilde sıkılaştırdı; net
              faaliyet tanımı ve gerçek ortaklık yapısının (UBO) doğru beyanı
              onay ihtimalini artırır.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          ABD&apos;de şirket kurmak, Türkiye tarafında da bazı bildirim
          yükümlülüklerini beraberinde getirir; buna karşılık Ticaret
          Bakanlığı&apos;nın sunduğu destek kalemlerinden de yararlanmak
          mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            ABD&apos;de şirket kuruluş sürecinizi doğru eyalet ve şirket
            türü seçiminden registered agent atanmasına, EIN başvurusundan
            banka hesabı sürecine kadar baştan sona biz yürütüyoruz.
            Kuruluş sonrasında da yıllık rapor, Form 5472/1120 gibi bilgi
            beyanları ve muhasebe raporlama hizmetinizi, ayrı bir yerel
            firma aramanıza gerek kalmadan biz sağlıyoruz.{" "}
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, ABD&apos;de
            şirket kurmak veya mevcut bir şirkete ortak olmak amacıyla
            yaptıkları ilk sermaye ihracını takip eden{" "}
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
              ABD&apos;de açılan ofis, depo, showroom veya mağaza gibi
              birimlerin kira giderlerinde temel destek oranı %50 olup,
              Bakanlık tarafından hedef ülke olarak belirlenmesi halinde bu
              oran %20 ilave edilerek uygulanabilir.
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke ABD olsa da genel
          çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır. Konunun
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
            ✅ Eyalet seçimini yalnızca kuruluş ücretine göre değil, yatırımcı ve büyüme planına göre yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Form 5472/1120 yükümlülüğünü gelir olmasa dahi asla atlamayın — ceza 25.000 USD&apos;den başlar
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Delaware C-Corp&apos;ta franchise tax hesaplama yöntemini doğru seçin, varsayılan yöntem yüksek fatura çıkarabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılış sürecinin uzayabileceğini planlarınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ ÇVÖA kapsamında stopaj mahsup imkânını mali müşavirle teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sektörünüze özel eyalet/eyalet dışı ek lisans gerekliliği olup olmadığını önceden araştırın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
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
              ABD&apos;de şirket kurmak için ABD&apos;de ikamet etmek veya SSN sahibi olmak gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Kuruluş ve EIN başvurusu tamamen uzaktan, SSN veya ITIN
              olmadan da yürütülebilir. Fiziksel bulunma gerekliliği
              genellikle yalnızca geleneksel bankalarda hesap açılışında
              ortaya çıkar; Mercury gibi fintech çözümleri bu kısıtı büyük
              ölçüde ortadan kaldırır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yabancı sahipli bir LLC gerçekten ABD&apos;de vergi ödemiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              ABD kaynaklı vergilendirilebilir geliri (effectively connected
              income) olmayan, yalnızca uluslararası müşterilere hizmet
              veren bir LLC için genellikle federal gelir vergisi doğmaz.
              Ancak bu durum, gelir olmasa dahi zorunlu olan Form 5472 ve
              pro forma Form 1120 bilgi beyanı yükümlülüğünü ortadan
              kaldırmaz; eksik dosyalamanın cezası form başına en az
              25.000 USD&apos;dir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Delaware mı, Wyoming mi seçmeliyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Yatırımcı/VC almayı planlamıyorsanız ve küçük-orta ölçekli bir
              LLC kuruyorsanız, düşük yıllık maliyeti ve eyalet kurumlar
              vergisinin olmaması nedeniyle Wyoming genellikle daha
              avantajlıdır. Kurumsal yatırım almayı hedefleyen bir C-Corp
              için ise Delaware, yatırımcıların standart beklentisi
              nedeniyle neredeyse zorunlu bir tercihtir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              ABD&apos;de kurulan şirketin Türkiye&apos;de de vergi yükümlülüğü olur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de yerleşik gerçek veya tüzel kişilerin
              ABD&apos;deki şirketten elde ettiği kazançlar Türkiye&apos;de
              de beyan yükümlülüğüne tabi olabilir. Türkiye-ABD Çifte
              Vergilendirmeyi Önleme Anlaşması kapsamında ABD&apos;de
              ödenen verginin Türkiye&apos;de mahsubu mümkün olabilir;
              detaylar somut duruma göre değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Delaware ve Wyoming&apos;de kuruluş belgesinin onaylanması
              genellikle 1-3 iş günü sürer. EIN alınması, telefon
              başvurusunda aynı gün, faksta yaklaşık 4 iş günü, posta
              yoluyla ise 4-5 haftaya kadar uzayabilir. Banka hesabı
              açılışı dahil edildiğinde toplam süreç birkaç haftaya kadar
              çıkabilir.
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
          Amerika, dünyanın en büyük pazarına erişim, güçlü kurumsal itibar
          ve büyük ölçüde uzaktan yürütülebilen bir kuruluş süreciyle Türk
          girişimciler için ciddi bir yurt dışı yapılanma alternatifidir.
          Ancak doğru eyaletin ve şirket türünün seçilmesi, EIN sürecinin
          doğru yönetilmesi, banka hesabı açılışının gerçekçi planlanması ve
          Form 5472 gibi bilgi beyanlarının ihmal edilmemesi, sürecin en
          kritik unsurlarıdır. Bu kararları iş modelinize uygun şekilde
          vermek ve Türkiye tarafındaki yükümlülükleri eksiksiz yönetmek
          için profesyonel destek almak, sürecin hatasız ilerlemesini
          sağlar.
        </p>
      </section>
    </BlogLayout>
  );
}
