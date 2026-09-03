import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Due Diligence Nedir? M&A Öncesi Durum Tespiti | Koray Akdağ",
  description: "Şirket satın alma/birleşme öncesi due diligence türleri, süreç adımları, veri odası hazırlığı ve sık karşılaşılan riskleriyle kapsamlı 2026 rehberi.",
  keywords: [
    "due diligence nedir",
    "due diligence süreci nasıl işler",
    "şirket satın alırken nelere dikkat edilir",
    "M&A due diligence kontrol listesi",
    "mali hukuki vergisel due diligence",
    "veri odası data room hazırlığı",
    "şirket satın alma birleşme durum tespiti",
    "due diligence riskleri",
    "rekabet kurumu birleşme devralma izni 2026",
    "due diligence raporu nedir",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?"
      description="Bir şirketi satın almak ya da onunla birleşmek, imzalanan bir sözleşmeden ibaret değildir; hedef şirketin gerçek durumunu ortaya çıkaran sistematik bir inceleme sürecine dayanır. Due diligence türleri, veri odası hazırlığından bulgular raporuna adım adım süreç, sık karşılaşılan riskler ve Rekabet Kurumu izni boyutuyla kapsamlı 2026 rehberi."
      category="M&A • DUE DILIGENCE • 2026"
      date="2026"
      readTime="13 Dakika"
      coverImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            &quot;Şirketi satın alıyoruz, fiyatta da anlaştık&quot; cümlesi,
            aslında sürecin en riskli noktasıdır &mdash; çünkü fiyat, hedef
            şirketin gerçekte ne durumda olduğunu henüz kimse doğrulamadan
            konuşulmuş olabilir. Due diligence (durum tespiti), bir satın
            alma veya birleşme kararını duygudan ve varsayımdan arındırıp
            somut belgeye, doğrulanmış veriye dayandıran süreçtir. Bu yazıda
            due diligence&apos;ın ne olduğunu, şirket değerlemeden farkını,
            beş temel türünü, veri odası hazırlığından bulgular raporuna
            adım adım süreci, sık karşılaşılan riskleri ve Rekabet Kurumu
            izni boyutunu anlatıyoruz.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Due diligence tam olarak nedir, şirket değerlemeden farkı ne?</li>
            <li>✔ Mali, hukuki, vergisel, operasyonel ve ticari due diligence ne inceler?</li>
            <li>✔ Süreç adım adım nasıl işler, veri odası (data room) nasıl hazırlanır?</li>
            <li>✔ En sık karşılaşılan riskler (gizli borç, sözleşme, mülkiyet, çalışan) nelerdir?</li>
            <li>✔ Rekabet Kurumu&apos;na bildirim ne zaman gerekir?</li>
            <li>✔ Due diligence hangi durumlarda, kimler için gereklidir?</li>
            <li>✔ Sık yapılan hatalar ve bunlardan kaçınmanın yolları nelerdir?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Due Diligence Nedir, Değerlemeden Farkı Nedir?
            </Link>
            <Link href="#turler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Due Diligence Türleri
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Süreç: Adım Adım Due Diligence
            </Link>
            <Link href="#riskler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Sık Karşılaşılan Riskler
            </Link>
            <Link href="#rekabet-kurumu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Rekabet Kurumu İzni Boyutu
            </Link>
            <Link href="#kontrol-listesi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Due Diligence Kontrol Listesi
            </Link>
            <Link href="#kimler-ne-zaman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Kimler İçin Gerekli, Ne Zaman Yapılmalı?
            </Link>
            <Link href="#sure-maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Süre ve Maliyet Faktörleri
            </Link>
            <Link href="#hatalar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sık Yapılan Hatalar
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
            1. Due Diligence Nedir, Değerlemeden Farkı Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Due diligence (Türkçe karşılığıyla &quot;durum tespiti&quot; veya
            &quot;gerekli özenin gösterilmesi&quot;), bir şirketi satın almak,
            onunla birleşmek veya ona yatırım yapmak isteyen tarafın, işlem
            kapanmadan önce hedef şirketin mali, hukuki, vergisel,
            operasyonel ve ticari durumunu sistematik biçimde incelemesidir.
            Amaç, satıcının sunduğu bilgilerin doğruluğunu bağımsız biçimde
            doğrulamak ve alıcının fark edemeyeceği, ancak işlem sonrasında
            ciddi maliyete dönüşebilecek riskleri işlem kapanmadan önce
            gün yüzüne çıkarmaktır.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Due diligence ile{" "}
            <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
              şirket değerleme
            </Link>{" "}
            sıkça karıştırılan ama farklı iki çalışmadır. Değerleme,
            şirketin ekonomik değerinin DCF, çarpan analizi veya net aktif
            değer gibi yöntemlerle <strong>ne kadar</strong> ettiğini
            hesaplar. Due diligence ise değerlemenin dayandığı verilerin{" "}
            <strong>doğru olup olmadığını</strong> ve şirketin görünürdeki
            tablosunun arkasında başka bir risk olup olmadığını sorgular.
            Pratikte ikisi birbirini besler: due diligence sırasında ortaya
            çıkan bir bulgu (örneğin kayıt dışı bir borç veya devam eden bir
            dava), değerleme raporundaki nihai rakamı doğrudan aşağı
            çekebilir veya sözleşmedeki fiyatın yeniden müzakere edilmesine
            yol açabilir.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Due Diligence Neden Kritik?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Alıcıyı, satıcının bilerek ya da bilmeyerek gizlediği risklerden korur.</li>
              <li>✔ Fiyat müzakeresine somut, belgeye dayalı bir zemin kazandırır.</li>
              <li>✔ İşlem sonrası sözleşmeye eklenecek garanti ve tazminat (indemnification) maddelerinin kapsamını belirler.</li>
              <li>✔ Bazı hukuki risklerin (Rekabet Kurumu izni, çalışan devri sorumluluğu gibi) işlem öncesinde yönetilmesini sağlar.</li>
              <li>✔ Satıcı tarafı için de hazırlıklı olmak; süreci hızlandırır ve pazarlık gücünü korur (satıcı tarafı için genellikle &quot;vendor due diligence&quot; olarak adlandırılır).</li>
            </ul>
          </div>
        </section>

        {/* 2. TÜRLER */}
        <section id="turler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Due Diligence Türleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Kapsamlı bir due diligence çalışması, tek bir disiplinle sınırlı
            değildir; şirketin farklı boyutlarını inceleyen beş temel
            başlıktan oluşur. Bu başlıklar genellikle paralel yürütülür ve
            bulgular ortak bir rapor altında birleştirilir.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💰 Mali (Finansal) Due Diligence
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Son 3-5 yıllık bilanço, gelir tablosu, nakit akış tabloları ve
            mizanlar incelenir; raporlanan kârlılığın gerçek operasyonel
            performansı mı yoksa tek seferlik gelir kalemlerini mi
            yansıttığı sorgulanır. Alacak/borç yaşlandırma tabloları, stok
            değerleme yöntemleri, ilişkili taraf işlemleri ve nakit
            akışındaki mevsimsellik bu aşamada mercek altına alınır.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚖️ Hukuki Due Diligence
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Şirketin ana sözleşmesi, ortaklık yapısı, pay devir kısıtlamaları,
            devam eden veya potansiyel davalar, önemli müşteri/tedarikçi
            sözleşmeleri, kira sözleşmeleri, kredi ve teminat sözleşmeleri,
            lisans ve izinler incelenir. Sözleşmelerdeki &quot;kontrol
            değişikliği&quot; (change of control) maddeleri &mdash; yani
            şirket el değiştirdiğinde karşı tarafa fesih hakkı tanıyan
            hükümler &mdash; bu aşamada özellikle dikkatle taranır.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🧾 Vergisel Due Diligence
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Geçmiş vergi beyannameleri, varsa devam eden vergi incelemeleri
            veya ihtilaflar, KDV iade süreçleri, transfer fiyatlandırması
            uygulamaları ve zamanaşımı süresi dolmamış dönemler için
            oluşabilecek olası vergi ve ceza riski değerlendirilir. Türk
            vergi mevzuatında geriye dönük inceleme zamanaşımı süresi göz
            önünde bulundurulduğunda, bu risklerin işlem tarihinden yıllar
            sonra da ortaya çıkabileceği unutulmamalıdır.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚙️ Operasyonel Due Diligence
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Üretim/hizmet süreçleri, tedarik zinciri bağımlılıkları, makine
            ve ekipman durumu, bilgi teknolojileri altyapısı, organizasyon
            şeması ve kilit personelin (özellikle kurucuya/ortağa bağımlı
            rollerin) şirketten bağımsız sürdürülebilirliği incelenir.
          </p>

          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            📈 Ticari Due Diligence
          </h3>
          <p className="mb-8 leading-8 text-gray-700">
            Pazar konumu, müşteri/tedarikçi yoğunlaşması (az sayıda müşteriye
            aşırı bağımlılık riski), rekabet ortamı, marka gücü ve büyüme
            projeksiyonlarının gerçekçiliği değerlendirilir. Bu tür,
            şirketin geçmiş performansından çok gelecekteki
            sürdürülebilirliğine odaklanır.
          </p>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Due Diligence Türü</th>
                  <th className="p-4">Ne Sorguluyor</th>
                  <th className="p-4">Tipik Bulgu Örneği</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Mali</td>
                  <td className="p-4">Kârlılık gerçek mi, nakit akışı sağlıklı mı?</td>
                  <td className="p-4">Tek seferlik gelirle şişirilmiş kâr</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Hukuki</td>
                  <td className="p-4">Sözleşme ve dava riski var mı?</td>
                  <td className="p-4">Kontrol değişikliğinde feshedilebilen kilit sözleşme</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Vergisel</td>
                  <td className="p-4">Geçmiş vergi yükümlülüğü kapanmış mı?</td>
                  <td className="p-4">Zamanaşımı dolmamış dönemde vergi inceleme riski</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Operasyonel</td>
                  <td className="p-4">Süreç ve altyapı sürdürülebilir mi?</td>
                  <td className="p-4">Tek bir kişiye bağımlı kritik müşteri ilişkisi</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Ticari</td>
                  <td className="p-4">Büyüme varsayımları gerçekçi mi?</td>
                  <td className="p-4">Cironun büyük kısmının tek müşteriden gelmesi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Süreç: Adım Adım Due Diligence
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Due diligence, tek bir belge incelemesinden ibaret değildir;
            gizlilik anlaşmasından bulgular raporunun sözleşmeye
            yansıtılmasına kadar birbirini izleyen aşamalardan oluşur:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔒</div>
              <h3 className="text-xl font-bold">1. Gizlilik Sözleşmesi ve Niyet Mektubu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Taraflar bir gizlilik sözleşmesi (NDA) imzalar; ardından
                işlemin temel çerçevesini (fiyat aralığı, kapsam, münhasırlık
                süresi) belirleyen bir niyet mektubu (LOI) düzenlenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧑‍🤝‍🧑</div>
              <h3 className="text-xl font-bold">2. Ekip ve Kapsam Belirleme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Mali, hukuki, vergisel ve operasyonel danışmanlardan oluşan
                ekip belirlenir; işlemin büyüklüğüne göre incelemenin kapsamı
                ve önceliklendirilecek risk alanları netleştirilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📂</div>
              <h3 className="text-xl font-bold">3. Veri Odası (Data Room) Hazırlığı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Satıcı, talep edilen belgeleri genellikle güvenli bir sanal
                veri odasında toplar; erişim, gerçekten incelemesi gereken
                kişilerle sınırlandırılır ve ayrı gizlilik taahhütleri
                alınır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📋</div>
              <h3 className="text-xl font-bold">4. Kontrol Listesiyle Belge İncelemesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Önceden hazırlanan kontrol listesi (checklist) üzerinden
                belgeler tek tek incelenir; eksik, tutarsız veya şüpheli
                kalemler işaretlenip ek belge/açıklama talep edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏭</div>
              <h3 className="text-xl font-bold">5. Yönetim Görüşmeleri ve Saha Ziyaretleri</h3>
              <p className="mt-3 text-sm text-gray-600">
                Belgeler tek başına yetmez; yönetim ekibiyle görüşmeler ve
                (varsa) üretim tesisi/depo ziyaretleri, belgelerde
                görünmeyen operasyonel gerçekliği ortaya koyar.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🚩</div>
              <h3 className="text-xl font-bold">6. Bulgular Raporu (Red Flag Report)</h3>
              <p className="mt-3 text-sm text-gray-600">
                Tespit edilen riskler önem sırasına göre &mdash; işlemi
                engelleyecek düzeyde mi, fiyatı etkileyecek mi, yoksa
                sözleşmeyle yönetilebilir mi &mdash; sınıflandırılarak
                yazılı bir rapora dönüştürülür.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm md:col-span-3">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">7. Sözleşmeye Yansıtma: Fiyat Düzeltmesi ve Garanti/Tazminat Maddeleri</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bulgular; nihai fiyatın aşağı çekilmesine, ödemenin bir
                kısmının belirli koşullara bağlanmasına (earn-out) veya
                satış sözleşmesine satıcının beyan ve garantilerini
                (representations &amp; warranties) ve tazminat
                (indemnification) yükümlülüklerini içeren maddeler
                eklenmesine yol açar.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🔐 Veri Odasında KVKK Boyutu
            </h3>
            <p className="leading-8 text-gray-700">
              Veri odasında yalnızca finansal ve hukuki belgeler değil,
              çoğu zaman çalışan ve müşteri bilgilerini içeren kişisel
              veriler de yer alır. 6698 sayılı KVKK çerçevesinde, veri
              odasına erişimin gerçekten incelemesi gereken kişilerle
              sınırlandırılması, paylaşılan kişisel verinin işlem amacıyla
              orantılı tutulması ve erişim sağlayan taraflarla ayrı
              gizlilik taahhütleri alınması gerekir.
            </p>
          </div>
        </section>

        {/* 4. RİSKLER */}
        <section id="riskler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Sık Karşılaşılan Riskler
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Due diligence sürecinde tekrar eden ve işlemin fiyatını veya
            koşullarını doğrudan etkileyen bazı risk kategorileri öne çıkar:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">💸 Gizli/Kayıt Dışı Borçlar</h4>
              <p className="text-sm leading-7 text-gray-700">
                Bilançoda görünmeyen kefaletler, senetler, dava tazminat
                riskleri veya ilişkili taraflara verilmiş garantiler,
                mali due diligence ile ortaya çıkarılmazsa alıcıya işlem
                sonrasında miras kalır.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📜 Sözleşme Riskleri</h4>
              <p className="text-sm leading-7 text-gray-700">
                Kilit bir müşteri veya tedarikçi sözleşmesindeki
                &quot;kontrol değişikliği&quot; maddesi, hisse devri
                gerçekleştiği anda karşı tarafa fesih hakkı tanıyabilir;
                bu, hedeflenen cironun büyük bölümünü riske atabilir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏠 Mülkiyet Uyuşmazlıkları</h4>
              <p className="text-sm leading-7 text-gray-700">
                Fabrika binasının tapu kaydında ihtilaf olması, kullanılan
                markanın aslında tescilsiz olması veya bir patentin başka
                bir şirket adına kayıtlı çıkması, işlemin değerini veya
                yapılabilirliğini doğrudan etkileyen bulgulardır.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👥 Çalışan ve SGK Riskleri</h4>
              <p className="text-sm leading-7 text-gray-700">
                Türk Ticaret Kanunu m.178 uyarınca devreden ve devralan,
                işçinin devirden önce doğmuş alacaklarından müteselsilen
                sorumlu tutulabilir; devreden işveren de kendi döneminde
                doğan işçilik alacaklarından belirli bir süre sorumlu
                kalmaya devam eder. Ödenmemiş kıdem/ihbar tazminatı yükü
                veya kayıt dışı çalıştırma, bu başlıkta sık karşılaşılan
                bulgulardır.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🧾 Vergi İncelemesi Riski</h4>
              <p className="text-sm leading-7 text-gray-700">
                Zamanaşımı süresi dolmamış dönemlerde başlayabilecek bir
                vergi incelemesi, işlem kapandıktan sonra bile alıcıya
                ek vergi ve ceza yükü olarak yansıyabilir; bu risk
                genellikle sözleşmedeki tazminat maddeleriyle yönetilir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🔐 Kişisel Veri ve Bilgi Güvenliği</h4>
              <p className="text-sm leading-7 text-gray-700">
                Müşteri/çalışan verilerinin KVKK&apos;ya uygun işlenip
                işlenmediği, veri ihlali geçmişi ve bilgi güvenliği
                altyapısındaki zafiyetler, özellikle veri yoğun iş
                modellerinde ciddi bir işlem sonrası maliyet kaynağı
                olabilir.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Bulgu listesi yalnızca bilançoyla sınırlı değildir. Satın alma
            ve birleşmelerde en pahalıya patlayan sorunların çoğu zaman
            finansal tablolarda değil, iki organizasyonun{" "}
            <strong>çalışma kültüründeki uyumsuzlukta</strong> ortaya
            çıktığını gösteren güncel bir örneği{" "}
            <Link href="/makaleler/satin-almada-ihmal-edilen-entegrasyon-kultur" className="text-orange-600 underline">
              bu görüş yazısında
            </Link>{" "}
            ele almıştık &mdash; due diligence raporu ne kadar temiz çıkarsa
            çıksın, kültürel entegrasyon planı olmayan bir birleşme yine de
            ciddi risk taşıyabilir.
          </p>
        </section>

        {/* 5. REKABET KURUMU */}
        <section id="rekabet-kurumu" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Rekabet Kurumu İzni Boyutu
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Hukuki due diligence&apos;ın önemli bir parçası, işlemin
            Rekabet Kurumu&apos;na bildirim yükümlülüğü doğurup
            doğurmadığının belirlenmesidir. Rekabet Kurumu, 11 Şubat 2026
            tarihli ve 33165 sayılı Resmî Gazete&apos;de yayımlanan
            2026/2 sayılı Tebliğ ile (2010/4 sayılı Tebliğ&apos;i
            değiştirerek) birleşme ve devralma işlemlerindeki ciro
            eşiklerini önemli ölçüde yükseltmiştir.
          </p>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📊 2026/2 Sayılı Tebliğ&apos;e Göre Güncel Eşikler
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ İşlem taraflarının Türkiye cirosu toplamı <strong>3 milyar TL</strong>&apos;yi aşıyorsa <strong>ve</strong> taraflardan en az ikisinin Türkiye cirosu ayrı ayrı <strong>1 milyar TL</strong>&apos;yi aşıyorsa,</li>
              <li>✔ veya taraflardan birinin Türkiye cirosu 1 milyar TL&apos;yi, diğerinin dünya cirosu <strong>9 milyar TL</strong>&apos;yi aşıyorsa,</li>
              <li>✔ Türkiye&apos;de yerleşik <strong>teknoloji teşebbüsü</strong> devralınıyorsa (dijital platform, yazılım, fintek, biyoteknoloji, ilaç, tarım kimyasalları, sağlık teknolojisi gibi alanlarda), daha düşük olan <strong>250 milyon TL</strong>&apos;lik özel eşik uygulanır,</li>
              <li>✔ bu durumlarda işlem, Rekabet Kurulu&apos;nun iznine tabidir ve izin alınmadan gerçekleştirilen işlemler geçersiz sayılabilir.</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Kaynak: Rekabet Kurumu&apos;nun 2010/4 sayılı Tebliğ&apos;i
            değiştiren 2026/2 sayılı Tebliği (11 Şubat 2026 tarihli, 33165
            sayılı Resmî Gazete). Teknoloji teşebbüsü istisnasının
            uygulanabilmesi için Türkiye&apos;de yerleşik olma şartı da
            aranır. Güncel eşik değerlerini ve teşebbüsünüzün kapsama
            girip girmediğini, işlem öncesinde mutlaka teyit ettirin.
          </p>
        </section>

        {/* 6. KONTROL LİSTESİ */}
        <section id="kontrol-listesi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Due Diligence Kontrol Listesi
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Aşağıdaki tablo, veri odasında genellikle talep edilen belge
            gruplarını ve bu belgelerde aranan kritik noktaları özetler.
            Gerçek bir kontrol listesi, işlemin büyüklüğüne ve sektörüne
            göre çok daha ayrıntılı olur.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Alan</th>
                  <th className="p-4">Talep Edilen Belgeler</th>
                  <th className="p-4">Kritik Kontrol Noktası</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Kurumsal</td>
                  <td className="p-4">Ana sözleşme, ortaklar pay defteri, yönetim kurulu kararları</td>
                  <td className="p-4">Pay devir kısıtlamaları, imtiyazlı paylar</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Mali</td>
                  <td className="p-4">Son 3-5 yıl bilanço/gelir tablosu, mizanlar, banka ekstreleri</td>
                  <td className="p-4">Tek seferlik kalemler, ilişkili taraf işlemleri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Vergi</td>
                  <td className="p-4">Beyannameler, varsa inceleme/uyuşmazlık tutanakları</td>
                  <td className="p-4">Zamanaşımı dolmamış dönem riski</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Sözleşmeler</td>
                  <td className="p-4">Müşteri, tedarikçi, kira, kredi/teminat sözleşmeleri</td>
                  <td className="p-4">Kontrol değişikliği ve fesih maddeleri</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Varlıklar</td>
                  <td className="p-4">Tapu kayıtları, marka/patent tescil belgeleri, demirbaş listesi</td>
                  <td className="p-4">Mülkiyet ihtilafı, tescilsiz kullanım</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">İnsan Kaynakları</td>
                  <td className="p-4">Personel listesi, ücret bordroları, SGK hizmet dökümü</td>
                  <td className="p-4">Kıdem/ihbar yükü, kayıt dışı çalıştırma</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Hukuki İhtilaf</td>
                  <td className="p-4">Devam eden dava/icra dosyaları, idari para cezaları</td>
                  <td className="p-4">Bilançoda karşılık ayrılmamış potansiyel yükümlülük</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. KİMLER NE ZAMAN */}
        <section id="kimler-ne-zaman" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Kimler İçin Gerekli, Ne Zaman Yapılmalı?
          </h2>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Bir şirketi tamamen veya kısmen satın almayı planlayan alıcılar</li>
              <li>✔ Başka bir şirketle birleşme görüşmesi yürüten yönetim ekipleri</li>
              <li>✔ Bir şirkete yatırım yapmayı (özellikle azınlık pay alarak) değerlendiren yatırımcılar</li>
              <li>✔ Şirketini satmadan önce kendi tarafında olası riskleri görmek isteyen satıcılar (vendor due diligence)</li>
              <li>✔ Bir işletmenin belirli bir bölümünü (varlık devri şeklinde) devralmayı planlayan taraflar</li>
            </ul>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Zamanlama açıdan due diligence, niyet mektubu (LOI) imzalandıktan
            hemen sonra, fakat nihai satış sözleşmesi (SPA) imzalanmadan
            önce yürütülür. Sürecin çok erken başlatılması (henüz taraflar
            fiyat konusunda mutabık kalmadan) kaynak israfına, çok geç
            başlatılması ise pazarlık gücünün elden kaçmasına yol açar.
          </p>
        </section>

        {/* 8. SÜRE VE MALİYET */}
        <section id="sure-maliyet" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Süre ve Maliyet Faktörleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Due diligence süresi ve maliyeti; işlemin büyüklüğü, hedef
            şirketin finansal kayıtlarının düzeni, incelenecek sözleşme
            sayısı ve iştirak/şube yapısının karmaşıklığına göre önemli
            ölçüde değişir. Buna rağmen sürecin süresini ve maliyetini
            belirleyen birkaç ortak etken vardır:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📁 Belge Düzeninin Kalitesi</h4>
              <p className="text-sm leading-7 text-gray-700">
                Bağımsız denetimden geçmiş, düzenli arşivlenmiş bir şirkette
                süreç haftalar içinde tamamlanabilirken, dağınık kayıtlara
                sahip bir şirkette bu süre kolayca uzayabilir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏢 İştirak/Şube Sayısı</h4>
              <p className="text-sm leading-7 text-gray-700">
                Birden fazla iştiraki, şubesi veya yurt dışı bağlantısı olan
                şirketlerde her bir yapı ayrı ayrı incelenmesi gerektiğinden
                süreç doğal olarak uzar.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🔍 İncelemenin Kapsamı</h4>
              <p className="text-sm leading-7 text-gray-700">
                &quot;Tam kapsamlı&quot; (full scope) bir inceleme ile
                yalnızca kritik risk alanlarına odaklanan &quot;odaklı&quot;
                (red flag) bir inceleme arasındaki maliyet farkı büyüktür;
                işlemin büyüklüğüne uygun kapsam seçilmelidir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👥 Danışman Ekibinin Uzmanlığı</h4>
              <p className="text-sm leading-7 text-gray-700">
                Mali, hukuki ve vergisel alanlarda deneyimli, koordineli
                çalışan bir ekip; hem süreyi kısaltır hem de riskleri gözden
                kaçırma ihtimalini azaltır.
              </p>
            </div>
          </div>
        </section>

        {/* 9. HATALAR */}
        <section id="hatalar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sık Yapılan Hatalar
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Yalnızca mali tablolara odaklanmak</h4>
              <p className="leading-7 text-gray-700">
                Hukuki, vergisel ve operasyonel riskler göz ardı edildiğinde,
                bilançoda görünmeyen ama işlem sonrası ortaya çıkan sorunlar
                alıcıya kalır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Satıcının sunduğu bilgiyi doğrulamadan kabul etmek</h4>
              <p className="leading-7 text-gray-700">
                Due diligence&apos;ın temel amacı bağımsız doğrulamadır;
                satıcının kendi hazırladığı özet raporlara güvenmek,
                sürecin amacını ortadan kaldırır.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Zaman baskısıyla süreci kısaltmak</h4>
              <p className="leading-7 text-gray-700">
                Rakip teklif veya hızlı kapanma baskısıyla incelemenin
                aceleye getirilmesi, en pahalıya patlayan bulguların
                gözden kaçmasına neden olabilir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">Bulguları sözleşmeye yansıtmamak</h4>
              <p className="leading-7 text-gray-700">
                Tespit edilen riskler yazılı rapora dökülüp fiyat veya
                garanti/tazminat maddelerine yansıtılmazsa, çalışmanın
                pratik bir faydası kalmaz.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-red-400 bg-white p-6 shadow-sm">
              <h4 className="mb-2 text-lg font-bold text-[#071A2F]">İşlem sonrası entegrasyonu göz ardı etmek</h4>
              <p className="leading-7 text-gray-700">
                Bulgular raporu ne kadar temiz olursa olsun, çalışma
                kültürü ve organizasyonel entegrasyon planlanmadan yapılan
                birleşmeler, işlem sonrasında ayrı bir risk kaynağına
                dönüşebilir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Satın Alma veya Birleşme Öncesi Durum Tespitinizi Birlikte Yönetelim
            </h3>
            <p className="leading-8 text-gray-700">
              Bir şirketi satın almadan veya onunla birleşmeden önce mali,
              hukuki, vergisel ve operasyonel riskleri işlem kapanmadan
              görmek; hem fiyatınızı hem de sözleşmenizi korur. Koray Akdağ
              / Sistem Global Danışmanlık olarak due diligence sürecini
              finansal analizden bulgular raporuna, sözleşme müzakeresine
              kadar uçtan uca yönetiyoruz.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Planladığınız satın alma veya birleşme sürecini birlikte
                değerlendirmek için bizimle iletişime geçin.
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
                Due diligence ile şirket değerleme arasındaki fark nedir?
              </h3>
              <p className="leading-8 text-gray-700">
                Değerleme, şirketin ekonomik değerinin ne kadar olduğunu
                hesaplar. Due diligence ise bu değerlemenin dayandığı
                verilerin doğruluğunu ve şirketin görünürdeki tablosunun
                arkasındaki riskleri sorgular. İkisi genellikle birlikte
                yürütülür.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Due diligence süreci kaç günde tamamlanır?
              </h3>
              <p className="leading-8 text-gray-700">
                Süre; şirketin büyüklüğüne, belge düzenine ve incelemenin
                kapsamına göre değişir. Düzenli kayıtlara sahip orta
                ölçekli bir şirket için süreç genellikle birkaç haftayı
                bulur; karmaşık iştirak yapısı olan şirketlerde bu süre
                uzayabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Küçük ölçekli bir şirket satın alırken de due diligence gerekir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet; işlemin büyüklüğü incelemenin kapsamını belirler,
                gerekliliğini ortadan kaldırmaz. Küçük ölçekli işlemlerde
                genellikle daha odaklı (kritik risk alanlarına yönelik) bir
                inceleme yeterli olabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Satıcı tarafın da due diligence yaptırması gerekir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Satıcının kendi tarafında yürüttüğü inceleme &quot;vendor due
                diligence&quot; olarak adlandırılır; satışa çıkmadan önce
                kendi risklerini görmesini sağlar, süreci hızlandırır ve
                müzakerede sürprizlerle karşılaşma riskini azaltır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Due diligence sırasında ciddi bir risk bulunursa işlem iptal mi olur?
              </h3>
              <p className="leading-8 text-gray-700">
                Her zaman değil. Bulgunun büyüklüğüne göre işlem
                iptal edilebilir, fiyat yeniden müzakere edilebilir veya
                sözleşmeye özel garanti/tazminat maddeleri eklenerek risk
                yönetilebilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Rekabet Kurumu iznine tabi olup olmadığımı nasıl anlarım?
              </h3>
              <p className="leading-8 text-gray-700">
                Bu, hukuki due diligence kapsamında incelenir; taraflardan
                birinin veya toplamının ciro rakamları güncel Tebliğ&apos;deki
                eşiklerle karşılaştırılarak belirlenir. Rakamlar güncel
                mevzuata göre değişebildiği için işlem öncesinde mutlaka
                teyit edilmelidir.
              </p>
            </div>
          </div>
        </section>

        {/* 11. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Due diligence, bir satın alma veya birleşme kararını
            duygusal ya da eksik bilgiye dayalı bir bahis olmaktan çıkarıp,
            belgeye ve doğrulanmış veriye dayanan bir karara dönüştürür.
            Mali, hukuki, vergisel, operasyonel ve ticari boyutlarıyla
            yürütülen kapsamlı bir inceleme; gizli borçlardan sözleşme
            risklerine, mülkiyet uyuşmazlıklarından çalışan yükümlülüklerine
            kadar işlem sonrasında alıcıya kalabilecek riskleri işlem
            kapanmadan önce gün yüzüne çıkarır.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Planladığınız satın alma, birleşme veya yatırım işleminde
            due diligence sürecini; veri odası hazırlığından bulgular
            raporuna, Rekabet Kurumu izni değerlendirmesinden sözleşme
            müzakeresine kadar Koray Akdağ / Sistem Global Danışmanlık
            olarak uçtan uca birlikte yürütebiliriz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ'ler İçin Neden Kritik?</h3>
        </Link>
        <Link
          href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026'da Değişti: Yeni Kriterler Şirketinizi Nasıl Etkiliyor?</h3>
        </Link>
        <Link
          href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ'nin İhtiyacı?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
