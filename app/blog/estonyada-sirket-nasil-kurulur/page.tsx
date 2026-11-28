import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Estonya'da Şirket Nasıl Kurulur? e-Residency ve 2026 Güncel Vergi Rehberi | Koray Akdağ",
  description:
    "e-Residency ile tamamen online OÜ kuruluşu, 150 € e-Residency ve 265 € tescil harcı, dağıtılmayan kâra %0 / dağıtılan kâra 2026'da %24'e çıkan kurumlar vergisi ve Türkiye'deki CFC riskiyle güncel rehber.",
  keywords: [
    "estonyada şirket kurma",
    "estonya e-residency",
    "e-residency nedir",
    "estonya OÜ kuruluşu",
    "estonya kurumlar vergisi 2026",
    "estonya şirket vergi avantajı",
    "estonya e-residency maliyeti",
    "estonya CFC riski Türkiye",
  ],
  alternates: {
    canonical: "/blog/estonyada-sirket-nasil-kurulur",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Estonya'da Şirket Nasıl Kurulur? e-Residency, Vergi Sistemi ve 2026 Güncel Rehber"
      description="e-Residency dijital kimliğiyle tamamen uzaktan OÜ kuruluşu, devlet harçları, dağıtılmayan kâra %0 / dağıtılan kâra 2026 itibarıyla %24 uygulanan kurumlar vergisi sistemi ve Türkiye'de yerleşik ortaklar için kontrol edilen yabancı kurum (CFC) riskiyle güncel Estonya rehberi."
      category="YURT DIŞI ŞİRKET • ESTONYA • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="estonyada-sirket-nasil-kurulur"
      coverImage="https://images.unsplash.com/photo-1733688025985-0e658cd3965b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Estonya'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="e-Residency başvurusundan OÜ tescili, zorunlu yerel temsilci/kayıtlı adres hizmeti ve banka/ödeme altyapısına; Türkiye'deki Yurt Dışı Yatırım Bildirimi ve CFC risk değerlendirmesine kadar süreci baştan sona yönetiyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Estonya&apos;da şirket kurmak isteyen Türk girişimciler için öne
          çıkan temel noktalar:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ e-Residency bir oturma izni veya vatandaşlık değildir; Estonya&apos;da fiziksel yaşama hakkı ya da vergi mukimliği sağlamaz, yalnızca devlet hizmetlerine ve şirket yönetimine dijital kimlikle uzaktan erişim verir.</li>
          <li>✔ En yaygın yapı, sınırlı sorumlu şirket (OÜ); sermaye ortak başına 0,01 €&apos;ya kadar düşük tutulabilir, 2.500 €&apos;nun altında kalan kısım için ortaklar şahsen sorumlu sayılır.</li>
          <li>✔ Kurumlar vergisi sisteminde kâr <strong>dağıtılmadığı sürece %0</strong> vergi uygulanıyor; dağıtılan kâr üzerindeki oran 2025&apos;te %22 iken, geçici savunma vergisinin kalıcı hale gelmesiyle <strong>2026&apos;dan itibaren %24&apos;e</strong> çıktı.</li>
          <li>✔ Resmî harçlar: e-Residency başvurusu 150 € (1 Ocak 2027&apos;den itibaren 165 €&apos;ya çıkacak), OÜ&apos;nün çevrimiçi tescili 265 €.</li>
          <li>✔ Yıllık KDV kayıt eşiği 40.000 €; bu tutarın altında kayıt ihtiyaridir.</li>
          <li>✔ Türkiye&apos;de yerleşik ortaklar için Kurumlar Vergisi Kanunu madde 7&apos;deki kontrol edilen yabancı kurum (CFC) riski somut biçimde değerlendirilmeli; kârın dağıtılmadığı yıllarda vergi yükü %0 olduğu için CFC testinin bir şartı kolayca gerçekleşebiliyor.</li>
          <li>✔ Türkiye-Estonya Çifte Vergilendirmeyi Önleme Anlaşması 2006&apos;dan beri uygulanıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. e-Residency Nedir, Neden Tercih Ediliyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Karıştırmayın: e-Residency Bir Oturma İzni Değildir
          </Link>
          <Link href="#turler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Şirket Türleri: OÜ, AS ve FIE
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Vergi Sistemi ve 2026&apos;da %24&apos;e Çıkan Oran
          </Link>
          <Link href="#banka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Banka Hesabı ve Ödeme Altyapısı
          </Link>
          <Link href="#turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Türkiye Tarafındaki Yükümlülükler ve CFC Riski
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. e-Residency Nedir, Neden Tercih Ediliyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Estonya, 2014&apos;ten beri dünyanın ilk ve en bilinen
          &quot;e-Residency&quot; (e-ikamet) programını yürütüyor. Program,
          Estonya vatandaşı olmayan kişilere devletin verdiği dijital bir
          kimlik kartı sağlıyor; bu kart, belgeleri elektronik imzayla
          onaylamayı, şirket kurup yönetmeyi ve Estonya&apos;nın dijital
          devlet hizmetlerine uzaktan erişmeyi mümkün kılıyor. Türkiye&apos;den
          hiç seyahat etmeden bir Avrupa Birliği şirketi kurmak isteyen
          yazılımcılar, danışmanlar, e-ticaret girişimcileri ve dijital
          hizmet ihracatçıları için bu, önemli bir cazibe noktası.
        </p>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Cazibenin asıl kaynağı vergi sistemi. Estonya, kurum kazancını
          elde edildiği yılda değil, <strong>dağıtıldığı yıl</strong>
          vergilendiren bir model uyguluyor. Şirket kârını bünyesinde
          tutup yeni yatırımlara yönlendirdiği sürece kurumlar vergisi
          doğmuyor; vergi yalnızca kâr payı olarak dağıtıldığında devreye
          giriyor. Bu yapı, sitede daha önce incelediğimiz{" "}
          <Link href="/blog/gurcistanda-sirket-nasil-kurulur" className="text-orange-600 underline">
            Gürcistan&apos;ın 2017&apos;den beri uyguladığı &quot;Estonya
            modeli&quot;
          </Link>{" "}
          olarak bilinen sistemin aslında birebir orijinaliydi.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Estonya&apos;yı Öne Çıkaran Unsurlar
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Tamamen uzaktan, Estonya&apos;ya hiç gitmeden şirket kurup yönetebilme</li>
            <li>✔ Avrupa Birliği üyesi bir ülkede, AB mevzuatına tabi tüzel kişilik</li>
            <li>✔ Dağıtılmayan kâra %0 vergi; yeniden yatırım yapan şirketler için nakit akışı avantajı</li>
            <li>✔ Gelişmiş dijital devlet altyapısı: şirket kuruluşu, imza, beyanname süreçleri büyük ölçüde otomatik</li>
            <li>✔ Avrupa pazarına ve ödeme altyapılarına (SEPA, Stripe, Avrupa fintek&apos;leri) doğrudan erişim</li>
          </ul>
        </div>
      </section>

      {/* 2. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Karıştırmayın: e-Residency Bir Oturma İzni Değildir
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Adındaki &quot;residency&quot; (ikamet) kelimesi yüzünden en sık
          yapılan hata, programın bir oturma izni veya vatandaşlığa giden
          bir yol olduğunu düşünmek. Gerçek böyle değil.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-red-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Özellik</th>
                <th className="p-5">e-Residency</th>
                <th className="p-5">Oturma İzni / Vize</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-red-50">
                <td className="p-5 font-semibold">Fiziksel yaşama hakkı</td>
                <td className="p-5">Vermiyor</td>
                <td className="p-5">Veriyor</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Seyahat/giriş hakkı</td>
                <td className="p-5">Vermiyor; Schengen vizesi ayrı bir süreçtir</td>
                <td className="p-5">Vize veya oturma izninin kapsamına göre değişir</td>
              </tr>
              <tr className="border-b bg-red-50">
                <td className="p-5 font-semibold">Vergi mukimliği</td>
                <td className="p-5">Oluşturmuyor</td>
                <td className="p-5">Belirli şartlarda oluşabilir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Sağladığı şey</td>
                <td className="p-5">Dijital kimlik ile uzaktan şirket kurma ve yönetme yetkisi</td>
                <td className="p-5">Fiilen o ülkede yaşama ve/veya çalışma hakkı</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bir başka deyişle e-Residency, size yalnızca Estonya&apos;nın
          devlet hizmetlerine dijital bir anahtar veriyor. Estonya&apos;da
          yaşamak, çalışmak veya oraya yerleşmek istiyorsanız bu, tamamen
          ayrı bir göçmenlik sürecinin konusu.
        </p>
      </section>

      {/* 3. TÜRLER */}
      <section id="turler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Şirket Türleri: OÜ, AS ve FIE
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Estonya hukukunda birkaç şirket türü bulunuyor, ancak e-resident
          girişimcilerin neredeyse tamamı tek bir yapıyı tercih ediyor.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🏢</div>
            <h3 className="text-lg font-bold">OÜ (Osaühing)</h3>
            <p className="mt-2 text-sm text-gray-600">
              Sınırlı sorumlu şirket. Tek ortakla kurulabilir, sermaye
              ortak başına 0,01 €&apos;ya kadar düşük tutulabilir. E-resident
              girişimcilerin standart tercihidir.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🏛️</div>
            <h3 className="text-lg font-bold">AS (Aktsiaselts)</h3>
            <p className="mt-2 text-sm text-gray-600">
              Anonim şirkete karşılık gelir. Minimum 25.000 € sermaye
              gerektirir; halka arz, yatırımcı turu veya büyük ölçekli
              yapılar için düşünülür.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <div className="mb-3 text-3xl">🧑‍💼</div>
            <h3 className="text-lg font-bold">FIE (Şahıs İşletmesi)</h3>
            <p className="mt-2 text-sm text-gray-600">
              Gerçek kişi girişimci statüsü. Estonya&apos;da fiilen
              bulunmayan yabancılar için pratik değil; vergi mukimliği
              gerektirir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💰 Sermaye Şartı Nasıl İşliyor?
          </h3>
          <p className="leading-8 text-gray-700">
            OÜ için nominal sermaye, ortak başına 0,01 €&apos;ya kadar
            düşük belirlenebiliyor. Ancak şirketin kayıtlı sermayesi
            2.500 €&apos;nun altında kaldığı sürece, bu tutara kadar olan
            fark için ortaklar şirket borçlarından şahsen sorumlu
            tutulabiliyor. Yani 2.500 € artık zorunlu bir asgari sermaye
            değil, aşılmadığı sürece kişisel sorumluluk doğuran bir eşik
            olarak işliyor.
          </p>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Süreç, klasik yurt dışı şirket kuruluşlarından farklı olarak
          önce bir dijital kimlik edinmeyi, ardından şirketi bu kimlikle
          tescil etmeyi gerektiriyor.
        </p>
        <ol className="space-y-6">
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 1:</span>{" "}
            e-Residency başvurusu e-resident.gov.ee üzerinden online
            yapılır; kimlik belgesi, fotoğraf ve başvuru amacı beyan
            edilir, 150 € devlet harcı ödenir.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 2:</span>{" "}
            Güvenlik kontrolü sonrası onaylanan başvuru sahibi, dijital
            kimlik kartını Estonya&apos;da veya başvuru sırasında
            seçtiği bir Estonya temsilciliğinde teslim alır.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 3:</span>{" "}
            e-Business Register (Äriregister) üzerinden OÜ kuruluş
            başvurusu dijital kimlikle imzalanarak yapılır; 265 €
            devlet harcı ödenir, ortaklık payları ve yönetim kurulu
            üyesi (müdür) belirlenir.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 4:</span>{" "}
            Yönetimde Estonya&apos;da yerleşik bir müdür bulunmuyorsa,
            lisanslı bir yerel temsilci (contact person) ve kayıtlı adres
            hizmeti ile sözleşme imzalanır; bu, Estonya mevzuatının
            zorunlu tuttuğu bir unsurdur.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 5:</span>{" "}
            Şirket adına kurumsal bir banka veya ödeme hesabı açılır;
            ihtiyaç halinde KDV numarası için ayrıca başvuru yapılır.
          </li>
          <li className="rounded-xl border p-6">
            <span className="font-bold text-orange-600">Adım 6:</span>{" "}
            Faaliyet başlar; muhasebe kayıtları tutulur ve mali yılın
            bitiminden itibaren 6 ay içinde yıllık rapor e-Business
            Register&apos;a sunulur.
          </li>
        </ol>
      </section>

      {/* 5. VERGİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergi Sistemi ve 2026&apos;da %24&apos;e Çıkan Oran
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Estonya&apos;nın vergi sisteminin temel mantığı basit: vergi,
          kâr elde edildiğinde değil, kâr <strong>dağıtıldığında</strong>{" "}
          doğar. 2025 sonunda yürürlüğe giren değişiklikle, önceki yıllarda
          geçici bir &quot;savunma vergisi&quot; olarak uygulanan 2 puanlık
          ek yük kalıcı hale getirildi ve standart oran yükseltildi.
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kazanç Türü</th>
                <th className="p-5">Vergi Oranı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Dağıtılmayan (bünyede tutulan) kâr</td>
                <td className="p-5">%0</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">2025&apos;te dağıtılan kâr</td>
                <td className="p-5">%22 (22/78)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">2026 ve sonrasında dağıtılan kâr</td>
                <td className="p-5">%24 (24/76)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Oran, kârın elde edildiği yıla değil, <strong>dağıtıldığı yıla
          </strong> göre belirleniyor. Yani 2024 veya 2025&apos;te
          oluşan bir kâr, 2026&apos;da dağıtılırsa dağıtım anındaki
          oran olan %24 üzerinden vergilendiriliyor.
        </p>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🧾 KDV Kaydı
          </h3>
          <p className="leading-8 text-gray-700">
            Yıllık vergilendirilebilir cironuz 40.000 €&apos;yu
            aşmıyorsa KDV kaydı ihtiyaridir. Bu eşiği aştığınızda veya AB
            içi belirli işlemler yaptığınızda kayıt zorunlu hale gelir.
          </p>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, &quot;kâr
            dağıtılmadığı sürece vergi yok&quot; ifadesinin kalıcı bir
            vergi muafiyeti gibi algılanması. Aslında bu bir erteleme
            mekanizmasıdır: şirket kârını bünyesinde tuttuğu sürece
            vergi doğmaz, ama kâr payı olarak dağıtıldığı an o yılın
            geçerli oranı üzerinden vergilendirilir. Türkiye&apos;de
            yerleşik bir ortak için asıl önemli olan, bu dağıtımın
            Türkiye tarafında ayrıca kâr payı geliri olarak beyan
            yükümlülüğü doğurup doğurmadığının, uygulanabilecek çifte
            vergilendirme anlaşması hükümleriyle birlikte önceden
            değerlendirilmesidir.
          </p>
        </div>
      </section>

      {/* 6. BANKA */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka Hesabı ve Ödeme Altyapısı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Estonya&apos;daki geleneksel bankalar, yönetiminde Estonya&apos;da
          fiilen bulunan biri olmayan, yalnızca e-resident ortaklı
          şirketlere hesap açarken giderek daha temkinli davranıyor;
          başvurular genellikle şirketin gerçek faaliyetine dair ek
          belge ve bazen yüz yüze görüşme talep ediyor. Bu nedenle çoğu
          e-resident girişimci, kurumsal hesabını Avrupa genelinde
          lisanslı ödeme kuruluşları (ör. Wise Business, Payoneer) ile
          açıyor; bu kuruluşlar SEPA ve çoklu para birimi işlemlerini
          destekliyor. Hangi seçeneğin şirketinizin faaliyet hacmine ve
          müşteri profiline uygun olduğu, kuruluş aşamasında ayrıca
          değerlendirilmelidir.
        </p>
      </section>

      {/* 7. TÜRKİYE TARAFI */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Türkiye Tarafındaki Yükümlülükler ve CFC Riski
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Estonya&apos;da şirket kurmak, Türkiye tarafında da bazı
          bildirim yükümlülüklerini ve dikkatle değerlendirilmesi
          gereken bir vergi riskini beraberinde getiriyor.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            e-Residency başvurusundan OÜ tesciline, zorunlu yerel
            temsilci/kayıtlı adres hizmetinin düzenlenmesinden banka veya
            ödeme hesabı açılışına kadar süreci baştan sona biz
            yürütüyoruz. Kuruluş sonrasında Estonya&apos;daki yıllık
            rapor kadar Türkiye tarafındaki Yurt Dışı Yatırım Bildirimi
            ve CFC risk değerlendirmesini de, ayrı bir yerel firma
            aramanıza gerek kalmadan biz sağlıyoruz.{" "}
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
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler,
            Estonya&apos;da şirket kurmak veya mevcut bir şirkete ortak
            olmak amacıyla yaptıkları ilk sermaye ihracını takip eden{" "}
            <strong>3 ay içinde</strong>, Ticaret Bakanlığı&apos;nın Yurt
            Dışı Yatırım Bildirimi formunu doldurarak Hazine ve Maliye
            Bakanlığı ile Ticaret Bakanlığı&apos;na bildirmekle
            yükümlüdür. Bu bildirim her yıl güncellenmeli, ihmal
            edilmesi cezai yaptırımlara yol açabilmektedir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚠️ Kontrol Edilen Yabancı Kurum (CFC) Riski
          </h3>
          <p className="mb-5 leading-8 text-gray-700">
            Kurumlar Vergisi Kanunu madde 7&apos;ye göre, Türkiye&apos;de
            tam mükellef gerçek veya tüzel kişilerin doğrudan veya
            dolaylı olarak kontrol ettiği bir yurt dışı iştirak, aşağıdaki
            dört şartın tümü birlikte gerçekleştiğinde kontrol edilen
            yabancı kurum (CFC) sayılır ve iştirakin <strong>dağıtılmamış
            kârı</strong> da Türkiye&apos;de kurumlar vergisi matrahına
            dahil edilir:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
            <li>Doğrudan veya dolaylı kontrol oranının %50&apos;yi aşması,</li>
            <li>İştirakin gayrisafi hasılatının %25 veya fazlasının pasif gelirden (faiz, kira, lisans, menkul kıymet satış kazancı gibi) oluşması,</li>
            <li>İştirakin ticari bilanço kârı üzerindeki toplam vergi yükünün %10&apos;un altında kalması,</li>
            <li>İştirakin ilgili yıldaki toplam gayrisafi hasılatının 100.000 Avro karşılığı Türk Lirasını aşması.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Estonya&apos;nın dağıtılmayan kâra %0 vergi uygulayan sistemi,
            kârın dağıtılmadığı bir yıl için üçüncü şartı (vergi yükünün
            %10&apos;un altında kalması) doğrudan sağlayabilir. Bu nedenle
            özellikle pasif gelir ağırlıklı (örn. yatırım geliri,
            lisans/royalti) yapılarda CFC riski yüksek; faaliyeti fiilen
            aktif ticari/hizmet geliri üreten ve kârını düzenli dağıtan
            şirketlerde bu risk genellikle daha sınırlı. Her yapı, somut
            gelir kompozisyonuna göre ayrıca değerlendirilmelidir.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📜 Çifte Vergilendirmeyi Önleme Anlaşması
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye ile Estonya arasındaki Çifte Vergilendirmeyi Önleme
            Anlaşması 2003&apos;te imzalandı, 2005&apos;te yürürlüğe
            girdi ve 2006&apos;dan itibaren uygulanıyor. Anlaşma,
            Estonya&apos;dan Türkiye&apos;ye yapılacak kâr payı, faiz ve
            gayri maddi hak bedeli ödemelerinde çifte vergilendirmeyi
            önlemeye yönelik hükümler içeriyor; somut işleminize
            uygulanacak madde ve oranlar ayrıca değerlendirilmelidir.
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
            ✅ e-Residency&apos;yi bir oturma izni veya vatandaşlık yolu olarak görmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka/ödeme hesabı açılışının tescilden daha uzun sürebileceğini planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yerel temsilci (contact person) ve kayıtlı adres hizmetini zorunlu bir gider olarak bütçeleyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yurt Dışı Yatırım Bildirimini süresinde ve her yıl güncelleyerek yapın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ CFC testinin dört şartını gelir kompozisyonunuza göre önceden değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yıllık raporu, mali yıl bitiminden itibaren 6 ay içinde e-Business Register&apos;a sunun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kârı dağıtmadan önce dağıtım anındaki güncel vergi oranını teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Muhasebe ve raporlama sürecinizi ayrıca yerel bir firma aramadan bize devredebilirsiniz
          </div>
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
              e-Residency almak Estonya&apos;ya taşınmam gerektiği
              anlamına mı gelir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. e-Residency, size yalnızca dijital bir kimlik ve
              Estonya&apos;nın devlet hizmetlerine uzaktan erişim
              sağlar. Fiziksel yaşama hakkı, vize veya vergi mukimliği
              vermez; Estonya&apos;ya hiç gitmeden şirketinizi
              kurabilir ve yönetebilirsiniz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              OÜ kurmak için Estonya&apos;ya gitmem gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. e-Residency dijital kimlik kartınızı aldıktan sonra
              OÜ kuruluşu e-Business Register üzerinden tamamen online
              yapılabiliyor. Estonya&apos;ya fiziksel olarak gitmeniz
              gereken tek adım, kartı teslim almaktır; bu da seçtiğiniz
              bir Estonya temsilciliğinde de yapılabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kârımı şirkette bırakırsam gerçekten hiç vergi ödemez
              miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Estonya tarafında, kâr dağıtılmadığı sürece kurumlar
              vergisi doğmuyor. Ancak bu bir muafiyet değil, erteleme
              mekanizmasıdır; kâr dağıtıldığında o yılın geçerli oranı
              üzerinden vergilendirilir. Ayrıca Türkiye&apos;de yerleşik
              bir ortak için bu yapının CFC (kontrol edilen yabancı
              kurum) kapsamına girip girmediği ayrıca değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Estonya şirketi kurmanın toplam resmî maliyeti nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Devlet harçları toplamda yaklaşık 415 €&apos;dur: e-Residency
              başvurusu için 150 € ve OÜ&apos;nün çevrimiçi tescili için
              265 €. Buna, zorunlu yerel temsilci/kayıtlı adres hizmeti
              ve muhasebe gibi yıllık işletme giderleri ayrıca eklenir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Estonya şirketi için banka hesabı açmak zor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Geleneksel Estonya bankaları, yönetiminde Estonya&apos;da
              fiilen bulunan biri olmayan şirketlere hesap açarken daha
              seçici davranabiliyor. Bu nedenle çoğu e-resident
              girişimci, Avrupa genelinde lisanslı ödeme kuruluşlarını
              (ör. Wise Business, Payoneer) kullanıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KDV kaydı ne zaman zorunlu hale geliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Yıllık vergilendirilebilir cironuz 40.000 €&apos;yu
              aştığında KDV kaydı zorunlu hale gelir. Bu eşiğin
              altındaysa kayıt isteğe bağlıdır.
            </p>
          </div>
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
              <a href="https://www.e-resident.gov.ee/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                Estonya Cumhuriyeti, resmî e-Residency programı sayfası
              </a>
            </li>
            <li>
              <a href="https://www.rik.ee/en/e-business-register" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                e-Business Register (Äriregister), şirket tescil sistemi
              </a>
            </li>
            <li>
              <a href="https://www.emta.ee/en" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                Estonya Vergi ve Gümrük Kurulu (EMTA)
              </a>
            </li>
            <li>
              <a href="https://www.gib.gov.tr/node/152239/pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                Gelir İdaresi Başkanlığı, yürürlükteki çifte vergilendirmeyi önleme anlaşmaları listesi
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Bu yazıdaki harç, oran ve eşik bilgileri, Estonya&apos;nın
            resmî e-Residency ve e-Business Register sayfalarına ile
            2026 vergi değişikliğini ele alan uluslararası vergi
            danışmanlık kaynaklarına (EY, PwC) dayanmaktadır. Güncel ve
            bağlayıcı bilgi için başvuru öncesinde ilgili resmî
            kaynakların kontrol edilmesi önerilir.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şirketinizin Estonya Yapılanmasını Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Estonya&apos;nın sizin faaliyet modeliniz için doğru adres
            olup olmadığını, CFC risk kompozisyonunuzu ve kuruluş
            sonrası yükümlülüklerinizi{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              destek uygunluk analizi
            </Link>{" "}
            üzerinden birlikte değerlendirebiliriz. Süreci planlamak
            için{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              bizimle iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* SONUÇ */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Estonya&apos;nın e-Residency programı, Avrupa Birliği içinde
          tamamen uzaktan kurulabilen ve dağıtılmayan kâra %0 vergi
          uygulayan nadir yapılardan biri olmaya devam ediyor. Ancak
          2026&apos;da dağıtılan kâr üzerindeki oranın %24&apos;e
          çıkması, zorunlu yerel temsilci gereksinimi ve banka hesabı
          açılışındaki pratik zorluklar, kararı yalnızca &quot;vergi
          avantajı&quot; başlığına indirgemeden, bütüncül olarak
          değerlendirmeyi gerektiriyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de yerleşik bir ortak için en kritik adım,
          kuruluş kararından önce CFC risk kompozisyonunu ve Yurt Dışı
          Yatırım Bildirimi yükümlülüğünü netleştirmek. Estonya
          tarafındaki kuruluş ve raporlama süreçlerini de, Türkiye
          tarafındaki vergi ve muhasebe yükümlülüklerinizi de ayrı bir
          firma aramanıza gerek kalmadan Koray Akdağ / Sistem Global
          Danışmanlık olarak tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/gurcistanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • GÜRCİSTAN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Gürcistan&apos;da Şirket Nasıl Kurulur?</h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • GENEL BAKIŞ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları</h3>
          </Link>
          <Link
            href="/blog/yabanci-sermayeli-sirket-kurulus-sonrasi-yukumlulukler-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YABANCI YATIRIMCI • UYUM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yabancı Sermayeli Şirketin Kuruluş Sonrası Yükümlülükleri</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "e-Residency almak Estonya'ya taşınmam gerektiği anlamına mı gelir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. e-Residency, size yalnızca dijital bir kimlik ve Estonya'nın devlet hizmetlerine uzaktan erişim sağlar. Fiziksel yaşama hakkı, vize veya vergi mukimliği vermez; Estonya'ya hiç gitmeden şirketinizi kurabilir ve yönetebilirsiniz.",
                },
              },
              {
                "@type": "Question",
                name: "OÜ kurmak için Estonya'ya gitmem gerekir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. e-Residency dijital kimlik kartınızı aldıktan sonra OÜ kuruluşu e-Business Register üzerinden tamamen online yapılabiliyor. Estonya'ya fiziksel olarak gitmeniz gereken tek adım kartı teslim almaktır; bu da seçtiğiniz bir Estonya temsilciliğinde de yapılabiliyor.",
                },
              },
              {
                "@type": "Question",
                name: "Kârımı şirkette bırakırsam gerçekten hiç vergi ödemez miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Estonya tarafında kâr dağıtılmadığı sürece kurumlar vergisi doğmuyor. Ancak bu bir muafiyet değil, erteleme mekanizmasıdır; kâr dağıtıldığında o yılın geçerli oranı üzerinden vergilendirilir. Ayrıca Türkiye'de yerleşik bir ortak için bu yapının CFC (kontrol edilen yabancı kurum) kapsamına girip girmediği ayrıca değerlendirilmelidir.",
                },
              },
              {
                "@type": "Question",
                name: "Estonya şirketi kurmanın toplam resmî maliyeti nedir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Devlet harçları toplamda yaklaşık 415 Euro'dur: e-Residency başvurusu için 150 Euro ve OÜ'nün çevrimiçi tescili için 265 Euro. Buna zorunlu yerel temsilci/kayıtlı adres hizmeti ve muhasebe gibi yıllık işletme giderleri ayrıca eklenir.",
                },
              },
              {
                "@type": "Question",
                name: "Estonya şirketi için banka hesabı açmak zor mu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Geleneksel Estonya bankaları, yönetiminde Estonya'da fiilen bulunan biri olmayan şirketlere hesap açarken daha seçici davranabiliyor. Bu nedenle çoğu e-resident girişimci, Avrupa genelinde lisanslı ödeme kuruluşlarını (örneğin Wise Business, Payoneer) kullanıyor.",
                },
              },
              {
                "@type": "Question",
                name: "KDV kaydı ne zaman zorunlu hale geliyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yıllık vergilendirilebilir cironuz 40.000 Euro'yu aştığında KDV kaydı zorunlu hale gelir. Bu eşiğin altındaysa kayıt isteğe bağlıdır.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
