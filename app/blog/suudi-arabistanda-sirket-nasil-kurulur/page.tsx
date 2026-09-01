import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Suudi Arabistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları (2026) | Koray Akdağ",
  description:
    "MISA yatırım lisansı, LLC ve şube (branch) şirket türleri, %20 kurumlar vergisi ile Zekat ayrımı, %15 KDV, Bölgesel Merkez (RHQ) programı, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Suudi Arabistan rehberi.",
  keywords: [
    "suudi arabistanda şirket kurma",
    "misa lisansı",
    "suudi arabistan llc kuruluşu",
    "suudi arabistan kurumlar vergisi",
    "suudi arabistan zekat",
    "suudi arabistan kdv oranı",
    "regional headquarters rhq programı",
    "2026 suudi arabistan şirket kuruluşu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Suudi Arabistan'da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları"
      description="MISA yatırım lisansı, LLC ve şube (branch) şirket türleri, %20 kurumlar vergisi ile Zekat ayrımı, %15 KDV, Bölgesel Merkez (RHQ) programı, banka hesabı açma süreci ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Suudi Arabistan rehberi."
      category="YURT DIŞI ŞİRKET • SUUDİ ARABİSTAN • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="suudi-arabistanda-sirket-nasil-kurulur"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vision 2030 dönüşüm programıyla birlikte Suudi Arabistan, körfez
          bölgesinin en büyük ekonomisini yabancı sermayeye kademeli olarak
          açıyor. Riyad&apos;ın modern iş ve finans merkezi Kingdom Centre
          Tower çevresinde yükselen kurumsal ekosistem, bunun en görünür
          kanıtı. Ancak Suudi Arabistan&apos;da şirket kurmak; doğru şirket
          türünü, MISA yatırım lisansını ve kendine özgü Zekat–kurumlar
          vergisi ayrımını doğru yönetmeyi gerektiren teknik bir süreç.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ MISA yatırım lisansı nedir, kimler almak zorunda</li>
          <li>✔ LLC ve şube (branch) şirket türleri arasındaki fark</li>
          <li>✔ Adım adım kuruluş süreci</li>
          <li>✔ %20 kurumlar vergisi ile Zekat ayrımının nasıl işlediği</li>
          <li>✔ %15 KDV ve Bölgesel Merkez (RHQ) programı</li>
          <li>✔ Banka hesabı açma sürecinin gerçekçi tablosu</li>
          <li>✔ Türkiye tarafındaki yükümlülükler ve destekler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#neden-suudi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. Neden Suudi Arabistan&apos;da Şirket Kurmalısınız?
          </Link>
          <Link
            href="#misa"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. MISA Lisansı ve Yabancı Yatırım Rejimi
          </Link>
          <Link
            href="#sirket-turleri"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Şirket Türleri: LLC ve Şube
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
            5. Vergi Sistemi: Kurumlar Vergisi, Zekat ve KDV
          </Link>
          <Link
            href="#rhq"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Bölgesel Merkez (RHQ) Programı
          </Link>
          <Link
            href="#banka"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Banka Hesabı Açma Süreci
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#dikkat"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN SUUDİ ARABİSTAN */}
      <section id="neden-suudi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Suudi Arabistan&apos;da Şirket Kurmalısınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Suudi Arabistan, Vision 2030 kapsamında ekonomisini petrole
          bağımlılıktan çıkarıp yabancı sermayeye açma stratejisini
          sürdürüyor. 2025 yılında doğrudan yabancı yatırım girişi 32,6
          milyar dolara ulaşarak yıllık yaklaşık %53 büyüdü; ülke küresel
          doğrudan yatırım sıralamasında 13. sıraya yükseldi. Bu büyüme,
          körfez bölgesinin en kalabalık ve en yüksek tüketim gücüne sahip
          pazarına erken giriş yapmak isteyen Türk girişimciler için somut
          bir fırsat penceresi anlamına geliyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📈</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızla Büyüyen Pazar
            </h3>
            <p className="text-gray-700">
              35 milyonu aşan nüfusu ve yüksek kamu/özel sektör yatırım
              hacmiyle Suudi Arabistan, MENA bölgesinin en büyük tek
              pazarlarından biridir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏗️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Vision 2030 Yatırım Dalgası
            </h3>
            <p className="text-gray-700">
              NEOM, Kızıldeniz Projesi ve Riyad&apos;ın kentsel dönüşümü
              başta olmak üzere trilyon dolarlık projeler, inşaat, teknoloji
              ve hizmet sektörlerinde ciddi tedarik zinciri talebi yaratıyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌐</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              %100 Yabancı Mülkiyet İmkânı
            </h3>
            <p className="text-gray-700">
              MISA lisansı alan yabancı yatırımcılar, çoğu sektörde yerel
              ortak zorunluluğu olmadan şirketin tamamına sahip
              olabiliyor.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISA */}
      <section id="misa" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. MISA Lisansı ve Yabancı Yatırım Rejimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Suudi Arabistan&apos;da yabancı sermayeli bir şirket kurmanın
          önkoşulu, Suudi Yatırım Bakanlığı&apos;ndan (Ministry of
          Investment of Saudi Arabia – MISA) yatırım lisansı almaktır. Bu
          lisans olmadan Ticaret Bakanlığı nezdinde ticaret sicili
          (Commercial Registration – CR) düzenlenemez ve şirket resmen
          faaliyete geçemez.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            Şubat 2025&apos;te Yürürlüğe Giren Yeni Yatırım Kanunu
          </h3>
          <p className="leading-8 text-gray-700">
            16 Şubat 2025&apos;te yürürlüğe giren yeni Suudi Yatırım
            Kanunu, geleneksel &quot;yabancı yatırım lisansı&quot;
            uygulamasını büyük ölçüde sadeleştirilmiş bir yatırımcı
            kayıt (investor registration) sürecine dönüştürdü. Yerli ve
            yabancı yatırımcılar artık MISA&apos;nın e-portalı üzerinden
            benzer bir kayıt akışını takip ediyor; bu değişiklik sürecin
            öngörülebilirliğini ve hızını artırmayı hedefliyor.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              📄 Temel Başvuru Belgeleri
            </h3>
            <ul className="ml-5 list-disc space-y-2 text-gray-700 marker:text-orange-500">
              <li>Ana şirketin ticaret sicil kaydı (tasdikli ve gerekli hallerde apostilli)</li>
              <li>Son yıla ait denetlenmiş mali tablolar</li>
              <li>Ortakların/kurucuların kimlik belgeleri</li>
              <li>Tüm belgelerin Arapçaya resmi tercümesi</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              🚫 Yabancı Yatırıma Kapalı Bazı Alanlar
            </h3>
            <p className="text-gray-700">
              MISA her yıl güncellenen bir &quot;negatif liste&quot; yayımlar.
              Balıkçılık ve bazı gayrimenkul faaliyetleri gibi belirli
              alanlarda yabancı yatırım kısıtlı veya yasaktır. Faaliyet
              kodunuzun listede yer alıp almadığının başvuru öncesi
              MISA&apos;nın resmi kaynağından teyit edilmesi gerekir.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Basit dosyalarda lisans onayı bazen 1 iş günü kadar kısa sürede
          verilebiliyor; ancak ek onay gerektiren sektörlerde ve eksiksiz
          olmayan dosyalarda süreç birkaç haftaya uzayabilir. Yatırım
          kayıt belgesi süresiz değildir; her yıl güncel ticaret sicili,
          Suudileştirme (Saudization) uyum durumu ve mali tablolarla
          birlikte MISA portalı üzerinden yenilenmesi gerekir.
        </p>
      </section>

      {/* 3. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Şirket Türleri: LLC ve Şube
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcılar için pratikte en sık kullanılan iki yapı;
          bağımsız bir tüzel kişilik olan Limited Şirket (LLC) ve yurt
          dışındaki ana şirketin uzantısı niteliğindeki şube (branch)
          ofisidir. Anonim Şirket (JSC) ise genellikle büyük ölçekli veya
          halka açılma hedefi olan yatırımlar için tercih edilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">LLC (Limited Şirket)</th>
                <th className="p-5">Şube (Branch)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tüzel Kişilik</td>
                <td className="p-5">Bağımsız, sorumluluk sermayeyle sınırlı</td>
                <td className="p-5">Ana şirketin uzantısı; sorumluluk ana şirkete de yansır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faaliyet Kapsamı</td>
                <td className="p-5">Ticaret, üretim ve hizmet dahil geniş faaliyet imkânı</td>
                <td className="p-5">MISA lisansında belirtilen faaliyetlerle sınırlı; ticari alım-satım genelde kısıtlı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yabancı Mülkiyet</td>
                <td className="p-5">%100 mümkün (sektöre göre değişebilir)</td>
                <td className="p-5">%100 (ana şirketin doğrudan uzantısı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari Sermaye</td>
                <td className="p-5">Kanunda sabit asgari yok; hizmet sektöründe pratikte ~100.000-500.000 SAR</td>
                <td className="p-5">Genellikle ayrı sermaye şartı aranmaz</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergilendirme</td>
                <td className="p-5">Kendi mali kayıtları üzerinden kurumlar vergisi/Zekat</td>
                <td className="p-5">Yabancı ortaklık payı üzerinden kurumlar vergisi; raporlama ana şirketle bağlantılı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Ticaret (perakende/toptan dağıtım) faaliyetinde tamamen yabancı
            sermayeli bir LLC için MISA, asgari yaklaşık 30 milyon SAR
            sermaye ve şirketin en az üç ülkede faaliyet gösteriyor olması
            şartını arıyor. Danışmanlık, yazılım, mühendislik gibi hizmet
            odaklı faaliyetlerde ise böyle bir eşik bulunmuyor; bu nedenle
            faaliyet konusunun MISA başvurusundan önce net olarak
            tanımlanması, sürecin en kritik adımlarından biridir. Sorumluluk
            sınırlaması ve operasyonel esneklik nedeniyle, ilk kez Suudi
            Arabistan&apos;a giren firmaların büyük çoğunluğu LLC yapısını
            tercih ediyor.
          </p>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Süreç, MISA yatırım lisansının alınmasıyla başlar ve ticaret
          sicilinin (CR) düzenlenmesiyle tamamlanır. Belge eksiksizse
          toplam süreç 3-6 hafta arasında tamamlanabilir; ek sektörel
          onay gereken faaliyetlerde bu süre uzayabilir.
        </p>

        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">MISA Yatırım Lisansı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Ticari Unvan & Ana Sözleşme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Ticaret Sicili (CR)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Vergi, Ofis & Kayıtlar</h3>
          </div>
        </div>

        {/* 4.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. MISA Yatırım Lisansının Alınması
          </h3>
          <p className="leading-8 text-gray-700">
            Faaliyet konusu, hedeflenen şirket türü (LLC veya şube) ve
            gerekli belgeler netleştirildikten sonra başvuru MISA
            e-portalı üzerinden yapılır. Bu aşama, yetkilendirilmiş
            vekâletname ile ortaklar Suudi Arabistan&apos;da fiziken
            bulunmadan uzaktan yürütülebilir.
          </p>
        </div>

        {/* 4.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Ticari Unvan Onayı ve Ana Sözleşmenin Hazırlanması
          </h3>
          <p className="leading-8 text-gray-700">
            Ticaret Bakanlığı (Ministry of Commerce – MC) üzerinden
            şirket unvanı rezerve edilir. Ardından ortaklık yapısını ve
            yönetim esaslarını belirleyen ana sözleşme (Articles of
            Association) hazırlanır; 2026 itibarıyla bu belge büyük
            ölçüde elektronik ortamda onaylanabiliyor.
          </p>
        </div>

        {/* 4.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Ticaret Sicilinin (CR) Düzenlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Ana sözleşme onaylandıktan sonra Ticaret Bakanlığı, şirketin
            resmi ticaret sicil belgesini (Commercial Registration)
            düzenler. Bu belge, şirketin Suudi Arabistan&apos;da tüzel
            kişilik kazandığının resmi kanıtıdır ve sonraki tüm
            kayıtların temelini oluşturur.
          </p>
        </div>

        {/* 4.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Vergi Kaydı, Ofis Adresi ve Diğer Kurumsal Kayıtlar
          </h3>
          <p className="leading-8 text-gray-700">
            CR sonrasında sırasıyla ZATCA (vergi kimlik numarası),
            Ticaret ve Sanayi Odası üyeliği, GOSI (sosyal sigorta) kaydı
            ve Suudileştirme (Nitaqat) uyum kaydı tamamlanır. Fiziksel
            ofis adresinin WASEL ulusal adres sistemine kaydı da bu
            aşamada zorunludur; sanal ofis çoğu işlem için yeterli
            kabul edilmez. Son adım olarak şirket adına banka hesabı
            açılış süreci başlatılır.
          </p>
        </div>
      </section>

      {/* 5. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi: Kurumlar Vergisi, Zekat ve KDV (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Suudi vergi sisteminin Türk girişimciler için en kafa karıştırıcı
          noktası, ortaklık yapısına göre iki farklı rejimin aynı anda
          işlemesidir. Sistem, Zekat, Tax and Customs Authority (ZATCA)
          tarafından yönetilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Ortaklık Payı</th>
                <th className="p-5">Uygulanan Yük</th>
                <th className="p-5">Oran</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yabancı (Türk) ortaklık payı</td>
                <td className="p-5">Kurumlar Vergisi (Corporate Income Tax – CIT)</td>
                <td className="p-5">%20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Suudi / GCC ortaklık payı</td>
                <td className="p-5">Zekat</td>
                <td className="p-5">%2,5 (Zekat matrahı üzerinden)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (VAT)</td>
                <td className="p-5">Standart oran</td>
                <td className="p-5">%15</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Stopaj (Withholding Tax)</td>
                <td className="p-5">Yurt dışına yapılan belirli ödemeler</td>
                <td className="p-5">%5-%20 arası (ödeme türüne göre değişir)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte bu ayrım şu şekilde işler: %100 Türk sermayeli bir
            şirket, tüm kârı üzerinden %20 kurumlar vergisi öder ve Zekat
            yükümlülüğü doğmaz. %60 Suudi/%40 Türk ortaklık yapısında ise
            şirketin kârı ortaklık oranına göre bölünür; Suudi payı Zekat
            (%2,5), Türk payı kurumlar vergisi (%20) kapsamında ayrı ayrı
            hesaplanır. Yıllık beyannameler, mali yıl sonundan itibaren 120
            gün içinde ZATCA&apos;ya sunulmalıdır. Türkiye ile Suudi
            Arabistan arasında 2007 yılında imzalanan Çifte
            Vergilendirmeyi Önleme Anlaşması kapsamında, Suudi
            Arabistan&apos;da ödenen verginin Türkiye&apos;de mahsubu
            mümkün olabilir. Güncel oranlar için{" "}
            <a
              href="https://zatca.gov.sa/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              ZATCA
            </a>{" "}
            resmi kaynağının kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* 6. RHQ PROGRAMI */}
      <section id="rhq" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Bölgesel Merkez (RHQ) Programı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          MISA&apos;nın Aralık 2023&apos;te duyurduğu ve Şubat 2024&apos;te
          yürürlüğe giren Bölgesel Merkez (Regional Headquarters – RHQ)
          programı, çok uluslu şirketlerin MENA bölgesi merkezlerini
          Riyad&apos;a taşımasını teşvik ediyor. RHQ lisansı alan
          şirketler, onaylı bölgesel merkez faaliyetleri kapsamında elde
          ettikleri gelirler için 30 yıl boyunca %0 kurumlar vergisi ve %0
          stopaj avantajından yararlanıyor; bu süre yenilenebilir
          niteliktedir. Program, 2021&apos;den bu yana yaklaşık 600 çok
          uluslu şirketin bölgesel merkezini Suudi Arabistan&apos;a
          taşımasını sağladı. RHQ programı büyük ölçekli grup
          yapılanmaları için tasarlandığından, ilk kez pazara girecek KOBİ
          ölçekli girişimler için standart LLC yapısı halen en pratik
          seçenektir.
        </p>
      </section>

      {/* 7. BANKA HESABI */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Banka Hesabı Açma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kuruluş başvurusunun büyük kısmı uzaktan yürütülebilse de, Suudi
          Arabistan&apos;da banka hesabı açılışı fiziksel varlık
          gerektiren bir aşamadır; bu yönüyle BAE gibi tamamen dijital
          bankacılık altyapısına sahip komşularından belirgin şekilde
          ayrışır.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Şirketin genel müdürü (General Manager) veya yetkili imza
              sahibi, Nafath biyometrik kimlik doğrulaması için Suudi
              Arabistan&apos;da fiziken bulunmak zorundadır; bu adım
              uzaktan tamamlanamaz.
            </li>
            <li>
              Hesap açılışı için WASEL sistemine kayıtlı gerçek bir
              fiziksel ofis adresi şarttır; sanal ofis kabul edilmez.
            </li>
            <li>
              Genel müdürün Suudi Arabistan ikamet izni (Iqama) alması
              gerekir; hesap bu ikamet iznine bağlanır ve Iqama&apos;nın
              süresi dolduğunda banka hesabı geçici olarak dondurulabilir.
            </li>
            <li>
              Banka görüşme sürecine kadar uluslararası tahsilat/ödeme
              ihtiyacı için Wise Business gibi fintech çözümleri geçici bir
              köprü sağlayabilir; ancak bu çözümler Suudi Arabistan&apos;da
              yerel kurumsal banka hesabının yerini almaz.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu nedenle Suudi Arabistan&apos;da şirket kurma kararı, en az bir
          yetkilinin ikamet izni alıp ülkede fiziken bulunacağı bir
          operasyon planıyla birlikte değerlendirilmelidir. Bu, sürecin
          Dubai&apos;deki{" "}
          <Link
            href="/blog/dubaide-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            BAE yapılanmasına
          </Link>{" "}
          kıyasla en belirgin farkıdır.
        </p>
      </section>

      {/* 8. TÜRKİYE TARAFINDAKİ YÜKÜMLÜLÜKLER */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Suudi Arabistan&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini beraberinde getirir; buna karşılık
          Ticaret Bakanlığı&apos;nın sunduğu destek kalemlerinden de
          yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Suudi Arabistan&apos;daki şirket kuruluş sürecinizi; MISA
            yatırım lisansından ticaret siciline, ZATCA vergi kaydından
            banka hesabı sürecinin koordinasyonuna kadar baştan sona biz
            yürütüyoruz. Kuruluş sonrasında da muhasebe, KDV beyanı,
            kurumlar vergisi/Zekat raporlama hizmetinizi, ayrı bir yerel
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, Suudi
            Arabistan&apos;da şirket kurmak veya mevcut bir şirkete ortak
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
              Suudi Arabistan&apos;da açılan ofis, depo, showroom veya
              mağaza gibi birimlerin kira giderlerinde temel destek oranı
              %50 olup, Bakanlık tarafından hedef ülke olarak belirlenmesi
              halinde bu oran %20 ilave edilerek uygulanabilir.
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
          Bu destek ve bildirim yükümlülükleri, hedef ülke Suudi Arabistan
          olsa da genel çerçevesi diğer ülkelerdeki yapılanmalarla aynıdır.
          Konunun tamamına ve güncel destek oranlarına{" "}
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

      {/* 9. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faaliyet kodunuzun MISA negatif listesinde olup olmadığını başvuru öncesi teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı için genel müdürün ikamet izni (Iqama) sürecini planınıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kurumlar vergisi/Zekat ayrımını ortaklık yapınıza göre önceden hesaplayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ WASEL adres kaydı ve fiziksel ofis şartını göz ardı etmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Suudileştirme (Nitaqat) oranlarını istihdam planınıza erken dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ MISA yatırım kaydının yıllık yenileme yükümlülüğünü takviminize ekleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
        </div>
      </section>

      {/* 10. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Suudi Arabistan&apos;da şirket kurmak için ülkede ikamet etmek gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              MISA lisansı ve ticaret sicili başvurusu vekâletle uzaktan
              yürütülebilir. Ancak banka hesabı açılışı için genel müdür
              veya yetkili imza sahibinin Nafath doğrulaması amacıyla
              fiziken ülkede bulunması ve ikamet izni (Iqama) alması
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kurumlar vergisi mi öderim, Zekat mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, ortaklık yapınıza bağlıdır. Şirketin Suudi/GCC vatandaşı
              ortaklara ait payı Zekat (%2,5) kapsamında değerlendirilirken,
              yabancı (Türk) ortaklara ait pay %20 kurumlar vergisine
              tabidir. %100 yabancı sermayeli bir şirket sadece kurumlar
              vergisi öder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              LLC mi kurmalıyım, şube mi açmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Ticaret, üretim veya geniş kapsamlı hizmet faaliyeti
              planlayan, sorumluluğunu sınırlı tutmak isteyen firmalar için
              LLC daha uygundur. Sadece belirli bir proje veya temsil
              faaliyeti yürütecek, ana şirketle sıkı bağlantılı yapılar
              için şube tercih edilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bölgesel Merkez (RHQ) programından kimler yararlanabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              RHQ programı, MENA bölgesindeki operasyonlarını yöneten çok
              uluslu şirket grupları için tasarlanmıştır ve 30 yıl %0
              kurumlar vergisi imkânı sunar. İlk kez pazara girecek KOBİ
              ölçekli firmalar için bu program pratikte uygulanabilir
              değildir; standart LLC yapısı bu profildeki firmalar için
              daha uygundur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              MISA lisansı, dosya eksiksizse birkaç gün içinde
              onaylanabilir. Ticaret sicili ve diğer kurumsal kayıtlarla
              birlikte toplam süreç genellikle 3-6 hafta sürer; banka
              hesabı açılışı ve ikamet izni süreçleri buna ek zaman
              gerektirebilir.
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
          Suudi Arabistan, Vision 2030&apos;un yarattığı büyüme ivmesi ve
          %100 yabancı mülkiyet imkânıyla Türk girişimciler için ciddi bir
          pazar fırsatı sunuyor. Ancak MISA lisanslama sürecinin doğru
          yönetilmesi, kurumlar vergisi–Zekat ayrımının ortaklık yapınıza
          göre netleştirilmesi ve banka hesabı açılışı için gereken fiziksel
          varlık ile ikamet izni sürecinin baştan planlanması, sürecin en
          kritik unsurlarıdır. Bu kararları iş modelinize uygun şekilde
          vermek ve Türkiye tarafındaki yükümlülükleri eksiksiz yönetmek
          için profesyonel destek almak, sürecin hatasız ilerlemesini
          sağlar.
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
