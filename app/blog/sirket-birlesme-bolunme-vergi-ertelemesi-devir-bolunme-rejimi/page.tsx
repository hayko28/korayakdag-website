import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Şirket Birleşme ve Bölünmelerinde Vergi Ertelemesi Nasıl Sağlanır? Devir/Bölünme Rejimi | Koray Akdağ",
  description: "5520 sayılı Kurumlar Vergisi Kanunu m.19-20 çerçevesinde devir (birleşme) ve tam/kısmi bölünme işlemlerinde kurumlar vergisi ve KDV'nin nasıl ertelendiği, kayıtlı değer esası, şartlar ve şartlar bozulursa doğacak vergi riskiyle kapsamlı rehber.",
  keywords: [
    "devir bölünme vergi ertelemesi",
    "kurumlar vergisi kanunu 19. madde",
    "kurumlar vergisi kanunu 20. madde",
    "vergisiz devir nasıl yapılır",
    "kısmi bölünme şartları",
    "tam bölünme nedir",
    "devir sayılan birleşme şartları",
    "kayıtlı değer esası",
    "bölünmede KDV istisnası",
    "aile şirketi bölünme vergi",
  ],
  alternates: {
    canonical: "/blog/sirket-birlesme-bolunme-vergi-ertelemesi-devir-bolunme-rejimi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Şirket Birleşme ve Bölünmelerinde Vergi Ertelemesi: Devir/Bölünme Rejimi Nasıl İşler?"
      description="Bir şirketi başka bir şirketle birleştirirken veya bölerken doğması beklenen kurumlar vergisi ve KDV yükü, 5520 sayılı Kanun'un 19-20. maddelerindeki şartlar sağlandığında ertelenebiliyor. Devir ve bölünme rejiminin tanımı, şartları, vergisel sonuçları ve şartlar bozulursa doğacak riskle kapsamlı rehber."
      category="M&A • VERGİ DANIŞMANLIĞI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="sirket-birlesme-bolunme-vergi-ertelemesi-devir-bolunme-rejimi"
      coverImage="https://images.unsplash.com/photo-1733190232275-be739ca2629d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Devir ve Bölünmede Vergi Ertelemesi Nasıl Çalışır?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ 5520 sayılı Kurumlar Vergisi Kanunu&apos;nun <strong>19. ve 20. maddeleri</strong>, belirli şartlar sağlandığında şirket birleşmelerinin (devir) ve bölünmelerinin kurumlar vergisi doğurmadan yapılabilmesine imkân tanır.</li>
          <li>✔ Bu rejimde varlıklar rayiç (gerçek piyasa) değeriyle değil, <strong>kayıtlı değeriyle</strong> devredilir; değer artışı üzerinden anlık bir vergi doğmaz, vergi yükümlülüğü devralan şirkete devredilerek ileriye ertelenir.</li>
          <li>✔ <strong>Devir</strong>, tam mükellef kurumların bilançolarının devir tarihindeki değerleriyle bir bütün halinde devralınmasıdır; pratikte şirket birleşmesinin vergisiz yapılma yoludur.</li>
          <li>✔ <strong>Tam bölünme</strong>de şirket tasfiyesiz olarak sona erer ve tüm varlıkları iki veya daha fazla şirkete devredilir; <strong>kısmi bölünme</strong>de ise şirket taşınmazlarını, en az iki yıldır elinde tuttuğu iştirak hisselerini veya bir üretim/hizmet işletmesini bölerek devreder, kendisi varlığını sürdürür.</li>
          <li>✔ İşlem KDV Kanunu&apos;nun ilgili istisna hükmü kapsamında <strong>KDV&apos;den de istisnadır</strong>.</li>
          <li>✔ Şartlar sonradan bozulursa (örn. devralınan iştirak hissesi veya işletme erken elden çıkarılırsa) ertelenen vergi, gecikme faiziyle birlikte geriye dönük olarak istenebilir.</li>
          <li>✔ Bu rejim en çok şirket satın alma/birleşmelerinde, aile şirketlerinde ortakların bölünme yoluyla ayrılmasında ve holding yapılanmalarında kullanılır; her durumda önceden değerleme ve vergi planlaması gerektirir.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Vergi Ertelemesi Nedir, Neden Önemli?
          </Link>
          <Link href="#devir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Devir (Birleşme) Rejimi ve Şartları
          </Link>
          <Link href="#bolunme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Tam Bölünme ve Kısmi Bölünme
          </Link>
          <Link href="#hisse-degisimi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hisse Değişimi
          </Link>
          <Link href="#vergisel-sonuclar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Vergisel Sonuçlar: KV ve KDV İstisnası
          </Link>
          <Link href="#sartlar-bozulursa" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Şartlar Bozulursa Ne Olur?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Ne Zaman ve Kimler İçin Kullanılır?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Adım Adım Süreç
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sonuç
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Vergi Ertelemesi Nedir, Neden Önemli?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Bir şirket başka bir şirketle birleştiğinde veya varlıklarının bir
          kısmını ayrı bir şirkete devrettiğinde, hukuken bir &quot;devir
          işlemi&quot; gerçekleşir. Vergi mevzuatının genel mantığında, bir
          varlık el değiştirdiğinde ve bu el değiştirme sırasında varlığın
          kayıtlı değeri ile gerçek (rayiç) değeri arasında bir fark
          oluştuğunda, bu fark üzerinden kurumlar vergisi doğması beklenir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Ancak bu kural, iki şirketin gerçekten aynı ekonomik bütünlüğün
          devamı niteliğindeki birleşme ve bölünmelerinde ciddi bir engele
          dönüşür. Sırf yapısal bir yeniden düzenleme yapıldığı için ortada
          nakit girişi olmamasına rağmen ağır bir vergi yükü doğması,
          şirketlerin ekonomik olarak mantıklı birleşme, bölünme ve
          yeniden yapılanma kararlarını almasını caydırır. Bu nedenle 5520
          sayılı <strong>Kurumlar Vergisi Kanunu&apos;nun (KVK) 19 ve 20.
          maddeleri</strong>, belirli şartlar sağlandığında bu işlemlerin
          vergisiz, daha doğru bir ifadeyle vergisi ertelenerek yapılmasına
          imkân tanıyor.
        </p>
        <p className="leading-8 text-gray-700">
          Buradaki kritik nokta &quot;vergi affı&quot; değil, &quot;vergi
          ertelemesi&quot;dir. Varlıklar rayiç değeriyle değil{" "}
          <strong>kayıtlı değeriyle (defter değeriyle)</strong> devredilir;
          değer artışı üzerinden anlık bir vergi hesaplanmaz, ancak bu değer
          artışı potansiyeli devralan şirkete de aynı kayıtlı değerle
          geçtiği için, o varlık ileride satıldığında biriken kazanç o
          zaman vergilendirilir. Vergi ortadan kalkmaz, zamanı ve muhatabı
          değişir.
        </p>
      </section>

      {/* 2. DEVİR */}
      <section id="devir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Devir (Birleşme) Rejimi ve Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KVK m.19/1&apos;e göre, aşağıdaki şartlarla gerçekleşen birleşmeler
          &quot;devir&quot; sayılır ve vergisiz devir rejiminden yararlanır:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏢 Tam Mükellef Kurumlar Arası Birleşme</h3>
            <p className="text-gray-700">Birleşmeye taraf olan (münfesih olan ve birleşilen) kurumların her ikisinin de Türkiye&apos;de kanuni veya iş merkezi bulunan tam mükellef sermaye şirketi olması gerekir.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📒 Bilançonun Bir Bütün Halinde Devralınması</h3>
            <p className="text-gray-700">Birleşen (münfesih) kurumun devir tarihindeki bilanço değerlerinin, devralan kurum tarafından bir bütün halinde ve <strong>aynen</strong> devralınıp bilançosuna geçirilmesi gerekir. Seçmeli devralma bu şartı bozar.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📊 Kıst Dönem Beyannamesi</h3>
            <p className="text-gray-700">Münfesih kurum adına, hesap dönemi başından devir tarihine kadar geçen kıst dönem için ayrı bir kurumlar vergisi beyannamesi verilir; bu beyannameye göre tahakkuk eden vergi devralan kurumca ödenir.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⚖️ Müteselsil Sorumluluk</h3>
            <p className="text-gray-700">Devralan kurum, devraldığı kıymetlerle sınırlı olmak üzere, devir tarihine kadar tahakkuk etmiş ve edecek vergi borçlarından münfesih kurumla birlikte müteselsilen sorumlu tutulur.</p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, &quot;devir&quot;
            sayılabilmenin salt hukuki bir birleşme kararı almaktan ibaret
            olmadığıdır. Bilançonun kayıtlı değerlerle bir bütün halinde ve
            eksiksiz devralınması, kıst dönem beyannamesinin zamanında ve
            doğru hazırlanması gibi teknik şartlardan herhangi biri
            aksarsa, işlem baştan itibaren normal (vergili) bir devir gibi
            değerlendirilme riskiyle karşılaşır. Bu nedenle birleşme
            kararından önce, şirketin bilançosunun ve varlıklarının doğru
            bir{" "}
            <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
              şirket değerleme
            </Link>{" "}
            çalışmasıyla ortaya konması, hem devir şartlarının doğru
            kurgulanması hem de tarafların birleşme sonrası ortaklık
            oranlarının adil belirlenmesi açısından kritik önem taşır.
          </p>
        </div>
      </section>

      {/* 3. BÖLÜNME */}
      <section id="bolunme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Tam Bölünme ve Kısmi Bölünme
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          KVK m.19/3, bölünmeyi iki ayrı biçimde tanımlıyor. İkisi de kayıtlı
          değerle devir esasına dayanır, ancak sonuçları ve kullanım amaçları
          oldukça farklıdır:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Bölünme Türü</th>
                <th className="p-5">Ne Devredilir?</th>
                <th className="p-5">Devreden Şirketin Sonu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tam Bölünme</td>
                <td className="p-5">Tüm varlık, alacak ve borçların tamamı, kayıtlı değerleriyle iki veya daha fazla tam mükellef sermaye şirketine devredilir; karşılığında ortaklara devralan şirket(ler)in sermayesini temsil eden iştirak hisseleri verilir.</td>
                <td className="p-5">Şirket tasfiyesiz olarak infisah eder (sona erer).</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Kısmi Bölünme</td>
                <td className="p-5">Bilançodaki taşınmazlar, en az iki tam yıl süreyle elde tutulan iştirak hisseleri veya bir/birkaç üretim ya da hizmet işletmesi, kayıtlı değerleriyle mevcut veya yeni kurulacak bir sermaye şirketine devredilir.</td>
                <td className="p-5">Şirket varlığını ve tüzel kişiliğini sürdürür, sadece devrettiği kısım bilançosundan çıkar.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kısmi bölünmede üretim veya hizmet işletmesinin devri söz konusuysa,
          işletme bütünlüğünün korunması aranır: faaliyetin devamı için
          gerekli tüm aktif ve pasif kalemlerin (makine, personel, sözleşme,
          stok, ilişkili borç gibi) bir bütün halinde devredilmesi gerekir.
          Sadece kârlı bir varlığı ayırıp borçları geride bırakmak gibi
          seçici bir devir, kısmi bölünme şartlarını sağlamaz. Devredilen
          varlıklara karşılık edinilen devralan şirket hisseleri, devreden
          şirkette kalabileceği gibi doğrudan devreden şirketin ortaklarına
          da verilebilir; bu ayrım, aile şirketlerinde ortakların bölünme
          yoluyla ayrılması senaryolarında özellikle önem taşır.
        </p>
      </section>

      {/* 4. HİSSE DEĞİŞİMİ */}
      <section id="hisse-degisimi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hisse Değişimi
        </h2>
        <p className="leading-8 text-gray-700">
          KVK m.19/3&apos;te tanımlanan üçüncü bir yapı da hisse değişimidir.
          Tam mükellef bir sermaye şirketinin, başka bir sermaye şirketinin
          hisselerini, o şirketin yönetimini ve hisse çoğunluğunu elde
          edecek ölçüde devralması ve karşılığında bu şirketin ortaklarına
          kendi sermayesini temsil eden iştirak hisselerini vermesi hisse
          değişimi olarak nitelendirilir. Hisse değişiminde varlıklar değil
          ortaklık payları el değiştirdiği için, bir holding yapısı altında
          iştiraklerin bir araya toplanması (grup içi yeniden yapılanma)
          senaryolarında sıkça gündeme gelir.
        </p>
      </section>

      {/* 5. VERGİSEL SONUÇLAR */}
      <section id="vergisel-sonuclar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Vergisel Sonuçlar: Kurumlar Vergisi ve KDV İstisnası
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Devir, tam bölünme, kısmi bölünme ve hisse değişimi işlemlerinin
          KVK m.19&apos;daki şartları sağlaması halinde, KVK m.20 devreye
          girer ve şu vergisel sonuçları doğurur:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Konu</th>
                <th className="p-5">Sonuç</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Değerleme esası</td>
                <td className="p-5">Devredilen varlıklar rayiç değil <strong>kayıtlı değer (defter değeri)</strong> üzerinden devralan şirkete geçer; taraflar arasında yeniden değerleme yapılmaz.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi</td>
                <td className="p-5">Devir/bölünme işleminden doğan kâr hesaplanmaz, dolayısıyla bu işlem nedeniyle o anda kurumlar vergisi tahakkuk etmez.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">İşlem, Katma Değer Vergisi Kanunu&apos;ndaki devir/bölünme istisnası kapsamında KDV&apos;den istisnadır; devreden şirketin daha önce yüklendiği ve indiremediği KDV, mükerrer indirime yol açmayacak şekilde devralan şirket tarafından indirim konusu yapılabilir.</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Zarar mahsubu</td>
                <td className="p-5">Devir yoluyla devralınan kurumun geçmiş yıl zararları, belirli oran ve süre sınırlarına (devralınan kurumun faaliyetine belirli bir süre devam edilmesi gibi) bağlı olarak devralan kurumda indirim konusu yapılabilir.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* KARIŞTIRMAYIN */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Vergisiz Devir/Bölünme ile Varlık/Hisse Satışı
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Vergisiz Devir/Bölünme (KVK m.19-20):</strong> Karşılığında nakit değil, iştirak hissesi verilir. Şirket sahiplik yapısı iki taraf arasında ortaklık ilişkisi biçiminde devam eder ve varlıklar kayıtlı değerle el değiştirdiği için işlem anında kurumlar vergisi/KDV doğmaz.</li>
            <li><strong>Varlık veya Hisse Satışı (klasik M&A):</strong> Karşılığında nakit veya nakit benzeri bir bedel ödenir. Satan taraf açısından satış bedeli ile maliyet bedeli arasındaki fark, satış anında değer artış kazancı olarak kurumlar vergisine tabi olur (hisse satışında belirli şartlarla iştirak hissesi satış kazancı istisnası uygulanabilir, ancak bu ayrı bir istisna hükmüdür).</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Bir işlemin hangi rejime gireceği, sözleşmenin başlığından değil
            gerçek yapısından belirlenir. Nakit karşılıklı bir satış,
            &quot;devir&quot; olarak adlandırılsa bile KVK m.19 şartlarını
            sağlamıyorsa vergisiz rejimden yararlanamaz.
          </p>
        </div>
      </section>

      {/* 6. ŞARTLAR BOZULURSA */}
      <section id="sartlar-bozulursa" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Şartlar Bozulursa Ne Olur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Vergisiz devir/bölünme rejimi bir vergi affı olmadığı için, işlem
          sonrasında rejimin dayandığı varsayımlar bozulursa idare, ertelenen
          vergiyi geriye dönük olarak talep edebilir. Uygulamada en sık
          karşılaşılan risk noktaları şunlar:
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Devralınan iştirak hissesinin veya işletmenin erken elden çıkarılması:</strong> Kısmi bölünme sonucu alınan iştirak hisseleri belirli bir süre içinde elden çıkarılırsa, bölünme işleminin gerçek amacının vergi ertelemesinden ibaret olduğu gerekçesiyle şartların bozulduğu ileri sürülebilir.</li>
            <li><strong>İşletme bütünlüğünün korunmaması:</strong> Kısmi bölünmede devredilen üretim/hizmet işletmesinin faaliyetine gerekli aktif-pasif kalemler eksik devredilerek veya kısa sürede tasfiye edilerek devam ettirilmemesi.</li>
            <li><strong>Bilançonun eksik veya seçici devralınması:</strong> Devirde, münfesih kurumun bilançosunun bir kısmının devralınıp bir kısmının dışarıda bırakılması, işlemin baştan itibaren &quot;devir&quot; sayılmasını engeller.</li>
            <li><strong>Kıst dönem beyannamesinin verilmemesi veya hatalı verilmesi:</strong> Devir tarihine kadarki kazancın usulüne uygun beyan edilmemesi, işlemin şekli şartlarını zedeler.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Şartların bozulduğunun tespiti halinde, ertelenmiş olan kurumlar
          vergisi (ve varsa KDV) gecikme faiziyle birlikte talep edilir;
          bazı durumlarda vergi ziyaı cezası da gündeme gelebilir. Bu nedenle
          devir/bölünme kararı, sadece işlem anındaki vergi avantajına değil,
          sonraki yıllarda korunması gereken yükümlülüklere göre de
          planlanmalıdır.
        </p>
      </section>

      {/* 7. KİMLER İÇİN */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Ne Zaman ve Kimler İçin Kullanılır?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              🚀 Rejimin Sıkça Gündeme Geldiği Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                ✔ Şirket satın alma ve birleşmelerinde, alıcı ve hedef
                şirketin yapılarının nakit çıkışı olmadan bir araya
                getirilmesi (bu süreç, bir{" "}
                <Link href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026" className="text-orange-600 underline">
                  due diligence
                </Link>{" "}
                çalışmasıyla risklerin önceden ortaya konmasını gerektirir)
              </li>
              <li>✔ Aile şirketlerinde ortakların, şirketin belirli bir kısmını (bir işletmeyi veya taşınmaz portföyünü) kısmi bölünme yoluyla ayrı bir şirkete alarak yollarını ayırması</li>
              <li>✔ Holding yapılanmasında dağınık iştiraklerin hisse değişimi veya bölünme yoluyla tek bir çatı altında toplanması</li>
              <li>✔ Bir şirket bünyesindeki farklı faaliyet kollarının (örn. üretim ve gayrimenkul) risklerini ayrıştırmak amacıyla kısmi bölünme yapılması</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              ⏸️ Bu Rejimin Uygun Olmadığı Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Taraflardan birinin nakit çıkış/giriş beklediği klasik bir şirket veya varlık satışı</li>
              <li>✔ Şirketlerden birinin dar mükellef (yurt dışı yerleşik, Türkiye&apos;de kanuni/iş merkezi bulunmayan) olduğu işlemler (KVK m.19&apos;daki tam mükellef şartı sağlanmaz)</li>
              <li>✔ Sadece belirli bir varlığı devretmek isteyip işletme bütünlüğünü koruma niyeti olmayan seçici devirler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Adım Adım Süreç
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-base font-bold">1. Ön Değerleme ve Yapı Analizi</h3>
            <p className="mt-2 text-sm text-gray-600">Şirketlerin bilançosu, varlıkları ve KVK m.19 şartlarına uygunluğunun değerlendirilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📐</div>
            <h3 className="text-base font-bold">2. Rejim ve Yapı Seçimi</h3>
            <p className="mt-2 text-sm text-gray-600">Devir mi, tam bölünme mi, kısmi bölünme mi yoksa hisse değişimi mi uygulanacağının belirlenmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📋</div>
            <h3 className="text-base font-bold">3. Devir/Bölünme Bilançosunun Hazırlanması</h3>
            <p className="mt-2 text-sm text-gray-600">Devir tarihi itibarıyla kayıtlı değerlerle bilançonun çıkarılması ve devir/bölünme planının yazılması</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✍️</div>
            <h3 className="text-base font-bold">4. Ticaret Sicili ve Beyanname İşlemleri</h3>
            <p className="mt-2 text-sm text-gray-600">Genel kurul kararları, ticaret sicili tescili ve kıst dönem kurumlar vergisi beyannamesinin verilmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📈</div>
            <h3 className="text-base font-bold">5. Sonraki Dönem Takibi</h3>
            <p className="mt-2 text-sm text-gray-600">Şartların korunması (işletme bütünlüğü, elden çıkarmama gibi) için sonraki yılların takip edilmesi</p>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Devir/bölünme kararı verilmeden önce şirketlerin gerçek değerinin ve bilanço kalitesinin bağımsız bir değerleme çalışmasıyla ortaya konması, hem vergisel şartların doğru kurgulanması hem de ortaklık oranlarının adil belirlenmesi için gerekir.</li>
            <li>Kısmi bölünmede devredilecek işletmenin bütünlüğünün (gerekli tüm aktif/pasif kalemlerle birlikte) korunduğundan emin olunmalı; seçici devir, rejimin şartlarını baştan bozar.</li>
            <li>Kıst dönem beyannamesi ve ticaret sicili işlemleri, devir/bölünme tarihiyle uyumlu ve eksiksiz tamamlanmalı.</li>
            <li>Devralınan iştirak hissesi veya işletmenin, vergi idaresince işlemin gerçek amacının vergi ertelemesi olduğu yönünde yorumlanmaması için makul bir süre elde tutulması planlanmalı.</li>
            <li>Devir/bölünmenin şirketler hukuku (Türk Ticaret Kanunu) boyutu ile vergi hukuku (KVK) boyutu birlikte ve eş zamanlı yürütülmeli; ikisi ayrı süreçler gibi ele alınmamalı.</li>
          </ul>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a
                href="https://www.mevzuat.gov.tr/mevzuatmetin/1.5.5520.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                5520 Sayılı Kurumlar Vergisi Kanunu (m.18-20: Birleşme, Devir, Bölünme, Hisse Değişimi) - mevzuat.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://www.gib.gov.tr/mevzuat/kanun/435/teblig/8551"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                1 Seri No&apos;lu Kurumlar Vergisi Genel Tebliği (Devir, Bölünme ve Hisse Değişimi Açıklamaları) - Gelir İdaresi Başkanlığı
              </a>
            </li>
            <li>
              <a
                href="https://www.gib.gov.tr/mevzuat/kanun/435"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                5520 Sayılı Kurumlar Vergisi Kanunu ve İlgili Mevzuat - gib.gov.tr
              </a>
            </li>
            <li>
              <a
                href="https://www.gib.gov.tr/mevzuat/kanun/436"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                3065 Sayılı Katma Değer Vergisi Kanunu (Devir/Bölünme İstisnası) - gib.gov.tr
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Devir/bölünme rejimi vergiyi tamamen ortadan mı kaldırıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu rejim bir vergi affı değil, vergi ertelemesidir.
              Varlıklar rayiç değil kayıtlı değeriyle devredildiği için işlem
              anında kurumlar vergisi doğmaz, ancak biriken değer artışı
              devralan şirkete de aynı kayıtlı değerle geçer ve o varlık
              ileride satıldığında vergilendirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tam bölünme ile kısmi bölünme arasındaki temel fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Tam bölünmede şirket tasfiyesiz olarak sona erer ve tüm
              varlıkları iki veya daha fazla şirkete devredilir. Kısmi
              bölünmede ise şirket varlığını sürdürür; sadece taşınmazlarını,
              en az iki yıldır elinde tuttuğu iştirak hisselerini veya bir
              üretim/hizmet işletmesini ayrı bir şirkete devreder.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yurt dışında yerleşik bir şirketle birleşme bu rejimden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              KVK m.19&apos;daki devir tanımı, kanuni veya iş merkezi
              Türkiye&apos;de bulunan tam mükellef sermaye şirketlerini esas
              alır. Taraflardan biri dar mükellef ise (Türkiye&apos;de kanuni
              veya iş merkezi bulunmuyorsa) işlem, kanundaki devir tanımının
              dışında kalır ve vergisiz rejimden yararlanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kısmi bölünmeyle devraldığım iştirak hissesini hemen satabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hukuken doğrudan bir yasak olmasa da, devralınan kıymetin
              işlemden hemen sonra elden çıkarılması, bölünmenin gerçek
              amacının işletme bütünlüğü değil vergi ertelemesi olduğu
              yönünde değerlendirilme riski doğurur. Bu nedenle böyle bir
              planlama varsa, işlem öncesinde vergi danışmanınızla süre ve
              gerekçe açısından mutlaka değerlendirilmesi gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Devir işleminde KDV hiç ödenmiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Devir ve bölünme işleminin kendisi, Katma Değer Vergisi
              Kanunu&apos;ndaki devir/bölünme istisnası kapsamında KDV&apos;den
              istisnadır. Devreden şirketin daha önce yüklendiği ve
              indiremediği KDV ise, mükerrer indirime yol açmayacak şekilde
              devralan şirket tarafından indirim konusu yapılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aile şirketinde ortakların ayrılması için bölünme kullanılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, kısmi bölünme bu amaçla sık kullanılan bir yapıdır.
              Şirketin belirli bir varlık grubu veya işletmesi, kayıtlı
              değerle yeni kurulacak bir şirkete devredilir ve karşılığında
              oluşan hisseler doğrudan ayrılmak isteyen ortağa verilebilir.
              Ancak bu yapının vergisel şartları koruyacak şekilde
              kurgulanması, ayrıca şirketler hukuku ve aile içi anlaşma
              boyutlarının da planlanması gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Birleşme veya Bölünme Planınızın Vergi Şartlarına Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            İster bir satın alma sonrası şirketleri birleştirmeyi, ister
            aile şirketinizi bölünme yoluyla yeniden yapılandırmayı
            planlıyor olun; devir/bölünme rejiminden yararlanmak, işlem
            öncesinde doğru bir{" "}
            <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
              şirket değerleme
            </Link>{" "}
            ve vergi planlaması gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirket değerleme ve stratejik danışmanlık hizmeti kapsamında
              birleşme/bölünme planınızın KVK m.19-20 şartlarına uygunluğunu
              birlikte değerlendirmemiz için bizimle iletişime geçin.
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
          Devir ve bölünme rejimi, gerçek bir ekonomik yeniden yapılanmayı
          nakit yükü olmadan yapabilmenin yasal yoludur. Ancak bu avantaj,
          kanundaki şartların harfiyen uygulanmasına bağlıdır; bilançonun
          bir bütün halinde devralınması, işletme bütünlüğünün korunması ve
          kıst dönem beyannamesi gibi teknik detaylardan biri aksarsa,
          beklenen vergi avantajı yerine geriye dönük bir vergi riski
          doğabilir.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirket değerleme ve
          stratejik danışmanlık hizmetlerimiz kapsamında birleşme, devir ve
          bölünme planlarınızın hem ticari hem vergisel boyutunu
          değerlendiriyor; sürecin başından sonuna kadar yanınızda
          oluyoruz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&A • DUE DILIGENCE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?</h3>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Devir/bölünme rejimi vergiyi tamamen ortadan mı kaldırıyor?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Bu rejim bir vergi affı değil, vergi ertelemesidir. Varlıklar rayiç değil kayıtlı değeriyle devredildiği için işlem anında kurumlar vergisi doğmaz, ancak biriken değer artışı devralan şirkete de aynı kayıtlı değerle geçer ve o varlık ileride satıldığında vergilendirilir."}},{"@type":"Question","name":"Tam bölünme ile kısmi bölünme arasındaki temel fark nedir?","acceptedAnswer":{"@type":"Answer","text":"Tam bölünmede şirket tasfiyesiz olarak sona erer ve tüm varlıkları iki veya daha fazla şirkete devredilir. Kısmi bölünmede ise şirket varlığını sürdürür; sadece taşınmazlarını, en az iki yıldır elinde tuttuğu iştirak hisselerini veya bir üretim/hizmet işletmesini ayrı bir şirkete devreder."}},{"@type":"Question","name":"Yurt dışında yerleşik bir şirketle birleşme bu rejimden yararlanabilir mi?","acceptedAnswer":{"@type":"Answer","text":"KVK m.19'daki devir tanımı, kanuni veya iş merkezi Türkiye'de bulunan tam mükellef sermaye şirketlerini esas alır. Taraflardan biri dar mükellef ise (Türkiye'de kanuni veya iş merkezi bulunmuyorsa) işlem, kanundaki devir tanımının dışında kalır ve vergisiz rejimden yararlanamaz."}},{"@type":"Question","name":"Kısmi bölünmeyle devraldığım iştirak hissesini hemen satabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hukuken doğrudan bir yasak olmasa da, devralınan kıymetin işlemden hemen sonra elden çıkarılması, bölünmenin gerçek amacının işletme bütünlüğü değil vergi ertelemesi olduğu yönünde değerlendirilme riski doğurur. Bu nedenle böyle bir planlama varsa, işlem öncesinde vergi danışmanınızla süre ve gerekçe açısından mutlaka değerlendirilmesi gerekir."}},{"@type":"Question","name":"Devir işleminde KDV hiç ödenmiyor mu?","acceptedAnswer":{"@type":"Answer","text":"Devir ve bölünme işleminin kendisi, Katma Değer Vergisi Kanunu'ndaki devir/bölünme istisnası kapsamında KDV'den istisnadır. Devreden şirketin daha önce yüklendiği ve indiremediği KDV ise, mükerrer indirime yol açmayacak şekilde devralan şirket tarafından indirim konusu yapılabilir."}},{"@type":"Question","name":"Aile şirketinde ortakların ayrılması için bölünme kullanılabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Evet, kısmi bölünme bu amaçla sık kullanılan bir yapıdır. Şirketin belirli bir varlık grubu veya işletmesi, kayıtlı değerle yeni kurulacak bir şirkete devredilir ve karşılığında oluşan hisseler doğrudan ayrılmak isteyen ortağa verilebilir. Ancak bu yapının vergisel şartları koruyacak şekilde kurgulanması, ayrıca şirketler hukuku ve aile içi anlaşma boyutlarının da planlanması gerekir."}}]}) }}
      />
    </BlogLayout>
  );
}
