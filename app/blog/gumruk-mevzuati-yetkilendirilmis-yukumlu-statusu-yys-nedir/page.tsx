import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Gümrük Mevzuatı ve Yetkilendirilmiş Yükümlü Statüsü (YYS) Nedir? | Koray Akdağ",
  description: "YYS (Yetkilendirilmiş Yükümlü Statüsü) nedir, yeşil hat, eksik beyan ve izinli gönderici/alıcı gibi avantajları neler, başvuru şartları ve süreci nasıl işler? Düzenli ihracat/ithalat yapan firmalar için 2026 güncel rehber.",
  keywords: [
    "yetkilendirilmiş yükümlü statüsü nedir",
    "yys nedir",
    "yys başvuru şartları",
    "gümrük yeşil hat uygulaması",
    "yys avantajları",
    "izinli gönderici alıcı yetkisi",
    "aeo sertifikası türkiye",
    "onaylanmış ihracatçı statüsü",
    "gümrük işlemlerinin kolaylaştırılması yönetmeliği",
    "ihracat gümrük danışmanlığı",
  ],
  alternates: {
    canonical: "/blog/gumruk-mevzuati-yetkilendirilmis-yukumlu-statusu-yys-nedir",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Gümrük Mevzuatı ve Yetkilendirilmiş Yükümlü Statüsü (YYS) Nedir?"
      description="Düzenli ihracat veya ithalat yapan firmalar için gümrük işlemlerinde zaman ve maliyet avantajı sağlayan Yetkilendirilmiş Yükümlü Statüsü (YYS): yeşil hat, eksik beyan, izinli gönderici/alıcı yetkisi gibi somut kolaylıklar, başvuru şartları ve süreciyle 2026 güncel rehber."
      category="GÜMRÜK MEVZUATI • İHRACAT DESTEKLERİ • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="gumruk-mevzuati-yetkilendirilmis-yukumlu-statusu-yys-nedir"
      coverImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: YYS Ne İşe Yarar?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ <strong>Yetkilendirilmiş Yükümlü Statüsü (YYS)</strong>, Ticaret Bakanlığı&apos;nın gümrük mevzuatına uyum geçmişi güvenilir bulunan firmalara verdiği, gümrük işlemlerinde somut kolaylıklar sağlayan bir statüdür. Hibe veya kredi değil, bir <strong>operasyonel yetkilendirmedir</strong>.</li>
          <li>✔ En bilinen avantajı <strong>yeşil hat</strong> uygulamasıdır: YYS sahibi firmaların beyannameleri büyük ölçüde belge ve fiziki muayeneden muaf tutulur, eşya gümrükte beklemeden çıkar.</li>
          <li>✔ Diğer önemli kolaylıklar: <strong>eksik beyan</strong> (ATR, menşe şahadetnamesi gibi belgeleri sonradan tamamlama), <strong>izinli gönderici/alıcı</strong> yetkisi, <strong>kısmi teminat</strong> (ithalat vergilerinin yalnızca %10&apos;u kadar teminat) ve <strong>onaylanmış ihracatçı</strong> statüsü.</li>
          <li>✔ Başvuru için Türkiye Gümrük Bölgesi&apos;nde en az <strong>3 yıldır</strong> fiilen faaliyette olma şartı aranıyor; buna ek olarak güvenilirlik, mali yeterlilik ve emniyet-güvenlik koşullarının tamamı sağlanmalı.</li>
          <li>✔ Başvuru, firmanın bağlı olduğu <strong>Gümrük ve Dış Ticaret Bölge Müdürlüğü&apos;ne</strong> veya e-Devlet üzerinden elektronik olarak yapılıyor; ön inceleme ve yerinde inceleme sürecinden geçiliyor.</li>
          <li>✔ Sertifika, askıya alma/iptal durumları hariç <strong>süresiz</strong> geçerli.</li>
          <li>✔ YYS, özellikle yüksek hacimli ve düzenli ihracat-ithalat yapan, gümrükte geçirdiği süreyi ve teminat maliyetini azaltmak isteyen firmalar için anlamlı bir yatırım.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. YYS Nedir?
          </Link>
          <Link href="#avantajlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. YYS&apos;nin Sağladığı Avantajlar
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Başvuru Şartları
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. YYS ile OKS Farkı: Karıştırmayın
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci Nasıl İşler?
          </Link>
          <Link href="#kimler-icin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kimler İçin Anlamlı?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. YYS Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yetkilendirilmiş Yükümlü Statüsü (YYS), Ticaret Bakanlığı&apos;nın
          gümrük yükümlülüklerini düzenli yerine getiren, kayıt sistemi
          izlenebilir, mali açıdan yeterli ve emniyet-güvenlik standartlarına
          sahip firmalara verdiği, uluslararası geçerliliği olan bir statüdür.
          Kısaca, gümrük idaresinin &quot;bu firmayı tanıyorum ve güveniyorum&quot;
          dediği firmalara tanınan bir imtiyaz sistemidir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Uluslararası literatürde bu yapı <strong>AEO (Authorized Economic
          Operator)</strong> olarak biliniyor ve Dünya Gümrük Örgütü&apos;nün
          güvenli ticaret standartlarına dayanıyor. Türkiye&apos;deki karşılığı
          YYS, Gümrük İşlemlerinin Kolaylaştırılması Yönetmeliği ile
          düzenleniyor.
        </p>
        <p className="leading-8 text-gray-700">
          YYS bir hibe veya destek programı değil, bir{" "}
          <strong>operasyonel yetkilendirmedir</strong>.{" "}
          <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
            Ticaret Bakanlığı&apos;nın ihracat destekleri yazımızda
          </Link>{" "}
          anlattığımız Pazara Giriş, Fuar, E-İhracat gibi programlar belirli
          bir harcamanın geri ödemesiz karşılanmasını sağlarken, YYS parasal
          bir destek vermez; bunun yerine gümrükteki işlem süresini, belge
          yükünü ve teminat maliyetini azaltır. İhracat hacmi büyüyen bir
          firma için bu, doğrudan bir nakit desteği kadar somut olmasa da
          zaman ve operasyonel maliyet üzerinden ölçülebilir bir kazanç
          sağlar.
        </p>
      </section>

      {/* 2. AVANTAJLAR */}
      <section id="avantajlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. YYS&apos;nin Sağladığı Avantajlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          YYS sertifikası tek bir kolaylık değil, birbirini tamamlayan bir
          avantajlar paketi sunuyor. En sık kullanılan beş kolaylık şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Avantaj</th>
                <th className="p-4">Ne Sağlar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yeşil Hat</td>
                <td className="p-4">Sadece YYS sahibi firmalara özgü bir basitleştirme; beyanname belge kontrolüne veya fiziki muayeneye tabi tutulmaz, eşya gümrükte beklemeden serbest bırakılır.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Eksik Beyan</td>
                <td className="p-4">Beyanname tescili anında elde bulunmayan ATR, menşe şahadetnamesi, navlun faturası, sigorta poliçesi gibi belgeler, işlemi bekletmeden bir ay içinde sonradan tamamlanabilir.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Kısmi Teminat</td>
                <td className="p-4">Antrepo, gümrük kontrolü altında işleme ve geçici ithalat rejimlerinde, talep halinde ithalat vergilerinin yalnızca %10&apos;u oranında teminat alınır.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İzinli Gönderici / Alıcı</td>
                <td className="p-4">Eşyanın kendi tesisinden doğrudan sınır idaresine sevki, transit işlemlerinin varış gümrüğüne uğramadan kendi tesisinde sonlandırılması, sınırlardan öncelikli geçiş.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Onaylanmış İhracatçı</td>
                <td className="p-4">Eşyanın kıymetine bakılmaksızın Fatura Beyanı, EUR.1 ve EUR-MED dolaşım belgelerini firmanın kendisinin düzenleyip onaylayabilmesi; ayrı bir gümrük onayı beklemeye gerek kalmaz.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            YYS&apos;nin gerçek getirisi tek tek maddelerde değil, bu
            avantajların bir arada işlemesinde ortaya çıkıyor. Yeşil hat
            muayeneden muafiyeti sağlarken, eksik beyan belge temin süresini
            işlemin önünden çekiyor, kısmi teminat ise nakit akışını
            rahatlatıyor. En sık gözden kaçan nokta, bu üç avantajın
            toplamda gümrükte geçirilen süreyi değil, aynı zamanda lojistik
            planlamanın öngörülebilirliğini artırdığıdır. Sevkiyat
            tarihlerini ve teslim taahhütlerini daha güvenle
            planlayabilen bir ihracatçı için bu, ölçülmesi kolay olmayan
            ama ticari olarak çok değerli bir kazançtır.
          </p>
        </div>
      </section>

      {/* 3. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Başvuru Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Gümrük İşlemlerinin Kolaylaştırılması Yönetmeliği, YYS başvurusu
          için aranan koşulları dört ana kategoride topluyor. Ön koşul olarak
          firmanın serbest bölgeler dahil Türkiye Gümrük Bölgesi&apos;nde
          yerleşik olması ve <strong>en az 3 yıldır fiilen faaliyette
          bulunması</strong> gerekiyor.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🛡️ Güvenilirlik</h3>
            <p className="text-gray-700">
              Firmanın kendisinin, yöneticilerinin ve gümrük konularından
              sorumlu personelinin gümrük ve vergi mevzuatına ciddi veya
              tekrarlanan bir ihlali bulunmaması, ayrıca ağır bir suçtan
              hüküm giymemiş olması aranır.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📋 Ticari Kayıtların Güvenilirliği</h3>
            <p className="text-gray-700">
              Ticari ve gerekli durumlarda taşımacılık kayıtlarının
              gümrük idaresince etkin denetime imkân verecek şekilde
              tutarlı, izlenebilir ve denetlenebilir bir kayıt düzeninde
              olması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 Mali Yeterlilik</h3>
            <p className="text-gray-700">
              Başvuru döneminde ve öncesindeki süreçte firmanın mali
              yapısının yükümlülüklerini karşılayacak güçte olduğunun
              gösterilmesi gerekir; bu, mali tablolar ve ilgili dönem
              performansı üzerinden değerlendirilir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🔒 Emniyet ve Güvenlik</h3>
            <p className="text-gray-700">
              Tesislerin fiziki güvenliği (giriş kontrolü, kamera sistemi
              gibi), bilgi güvenliği ve iş ortağı/tedarikçi güvenliğine
              ilişkin standartların sağlanması gerekir; bu koşullar
              genellikle bir iç denetim ve belgelendirme sürecini
              gerektirir.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bu dört ana koşulun yanında, uygulamada başvuru sahibi firmanın
          önceki dönemde belirli bir sayıda gümrük beyannamesi kapsamında
          işlem yapmış olması da aranıyor. Ticaret Bakanlığı geçmişte
          belirli bir tarihe kadar geçerli olmak üzere asgari ihracat/ithalat
          tutarı üzerinden de bir başvuru yolu tanımlamıştı; bu tutar bazlı
          yolun ve güncel işlem sayısı eşiğinin tam olarak hangi rakamlarda
          uygulandığı zaman içinde değişebiliyor.
        </p>
        <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Önemli:</strong> Asgari beyanname sayısı ve/veya asgari
            ihracat/ithalat tutarı gibi sayısal eşikler zaman içinde
            güncellenebiliyor. Başvuru öncesinde firmanızın güncel eşiği
            karşılayıp karşılamadığını, bağlı olduğunuz Gümrük ve Dış Ticaret
            Bölge Müdürlüğü&apos;nden veya ticaret.gov.tr üzerindeki güncel
            başvuru rehberinden mutlaka teyit edin.
          </p>
        </div>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. YYS ile OKS Farkı: Karıştırmayın
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ İkisi Aynı Şey Değil
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>YYS (Yetkilendirilmiş Yükümlü Statüsü):</strong> Firmanın tamamına, yani tüzel kişiliğe verilen kapsamlı bir statüdür. Yeşil hat, eksik beyan, kısmi teminat gibi geniş bir kolaylık paketi sunar ve başvuru süreci daha kapsamlıdır.</li>
            <li><strong>OKS (Onaylanmış Kişi Statüsü):</strong> Belirli bir gümrük rejimine veya işleme özgü, daha dar kapsamlı bir yetkidir (örneğin belirli bir basitleştirilmiş usulden yararlanma izni gibi). YYS&apos;ye göre şartları daha hafiftir ama sağladığı kolaylıklar da o oranda sınırlıdır.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Pratikte firmalar sık sık &quot;hangisine başvurmalıyız&quot;
            sorusunu soruyor. Cevap, firmanın ihracat/ithalat hacmine ve
            hangi kolaylıklara ihtiyaç duyduğuna bağlı. Yüksek hacimli,
            düzenli ve çok yönlü dış ticaret yapan firmalar için YYS&apos;nin
            sağladığı kapsamlı avantaj paketi daha anlamlıyken, daha dar
            kapsamlı ve tek bir işleme özgü bir kolaylık arayan firmalar
            için OKS yeterli olabilir.
          </p>
        </div>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci Nasıl İşler?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          YYS başvurusu, firmanın kendi belgesini hazırlayıp gönderdiği tek
          adımlı bir süreç değil; gümrük idaresinin firmayı yerinde
          değerlendirdiği çok aşamalı bir inceleme sürecidir.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-base font-bold">Ön Değerlendirme ve Öz Değerlendirme Formu</h3>
            <p className="mt-2 text-sm text-gray-600">Firma, dört ana koşulu ne ölçüde karşıladığını gösteren öz değerlendirme formunu ve gerekli belgeleri hazırlar.</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-base font-bold">Elektronik Başvuru</h3>
            <p className="mt-2 text-sm text-gray-600">Başvuru, bağlı bulunulan Gümrük ve Dış Ticaret Bölge Müdürlüğü&apos;ne veya e-Devlet üzerinden elektronik olarak yapılır.</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-base font-bold">Yerinde İnceleme</h3>
            <p className="mt-2 text-sm text-gray-600">Gümrük idaresi, tesisleri ve kayıt sistemini yerinde inceler; güvenlik, mali yeterlilik ve kayıt düzeni fiilen doğrulanır.</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-base font-bold">Karar ve Sertifikasyon</h3>
            <p className="mt-2 text-sm text-gray-600">Uygun bulunan firmaya YYS sertifikası verilir; sertifika, askıya alma veya iptal durumları hariç süresiz geçerlidir.</p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yetkili gümrük idareleri Orta Anadolu, Ege, GAP, Doğu Karadeniz,
          İstanbul, Uludağ, Orta Akdeniz ve Doğu Marmara Gümrük ve Dış
          Ticaret Bölge Müdürlükleri olarak belirlenmiş durumda. Firmanın
          hangi bölge müdürlüğüne başvuracağı, kayıtlı olduğu yere göre
          değişiyor.
        </p>
      </section>

      {/* 6. KİMLER İÇİN */}
      <section id="kimler-icin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler İçin Anlamlı?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ YYS Kimler İçin Öncelikli?
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yılda çok sayıda gümrük beyannamesiyle düzenli ihracat/ithalat yapan, gümrükte harcanan zamanı azaltmak isteyen firmalar</li>
              <li>✔ Vadeli üretim/teslimat taahhütleri nedeniyle sevkiyat sürelerinin öngörülebilir olmasına ihtiyaç duyan üreticiler</li>
              <li>✔ ATR, menşe şahadetnamesi gibi belgeleri temin sürecinde sık sık bekleme yaşayan ihracatçılar</li>
              <li>✔ Antrepo veya geçici ithalat rejimini sık kullanan, teminat maliyetini düşürmek isteyen firmalar</li>
              <li>✔ Avrupa Birliği&apos;ndeki AEO sertifikalı firmalarla çalışan, karşılıklı tanıma avantajından faydalanmak isteyen ihracatçılar</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🕒 Henüz Erken Olabilir
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ 3 yıldan kısa süredir faaliyette olan, henüz istikrarlı bir dış ticaret hacmine ulaşmamış firmalar</li>
              <li>✔ Yılda az sayıda, düzensiz aralıklarla ihracat/ithalat yapan firmalar (başvuru ve belgelendirme maliyetinin getirisini aşabileceği durumlar)</li>
              <li>✔ İSO 9001/27001 gibi emniyet-güvenlik alt yapısını henüz kurmamış, önce temel kalite/bilgi güvenliği sistemine ihtiyacı olan firmalar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://ticaret.gov.tr/gumruk-islemleri/yetkilendirilmis-yukumlu-statusu" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                T.C. Ticaret Bakanlığı - Yetkilendirilmiş Yükümlü Statüsü
              </a>
            </li>
            <li>
              <a href="https://ticaret.gov.tr/data/5d48321313b8762b40ceadf3/150%20Soruda%20YYS.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                T.C. Ticaret Bakanlığı - 150 Soruda Yetkilendirilmiş Yükümlü Statüsü
              </a>
            </li>
            <li>
              <a href="https://ticaret.gov.tr/data/5d48321313b8762b40ceadf3/Ba%C5%9Fvuru%20Rehberi.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                T.C. Ticaret Bakanlığı - YYS Başvuru Rehberi
              </a>
            </li>
            <li>
              <a href="https://ticaret.gov.tr/gumruk-islemleri/yetkilendirilmis-yukumlu-statusu/yys-elektronik-basvuru-islemleri-guncellendi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                T.C. Ticaret Bakanlığı - YYS Elektronik Başvuru İşlemleri
              </a>
            </li>
            <li>
              <a href="https://ticaret.gov.tr/gumruk-islemleri/sikca-sorulan-sorular/ticari/ticaretin-kolaylastirilmasi" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                T.C. Ticaret Bakanlığı - Ticaretin Kolaylaştırılması (SSS)
              </a>
            </li>
            <li>
              <a href="https://gumrukrehberi.gov.tr/kategori/ticari-slemler/yetkilendirilmis-yukumlu-hakkinda" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                T.C. Ticaret Bakanlığı - Gümrük Rehberi: Yetkilendirilmiş Yükümlü
              </a>
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
              YYS sertifikası kaç yılda bir yenileniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Sertifika, süresiz olarak geçerlidir. Belirli bir yenileme
              döneminden ziyade, gümrük idaresince yapılan periyodik
              izleme ve denetimlerde koşulların artık sağlanmadığı tespit
              edilirse askıya alma veya iptal söz konusu olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sadece ihracat yapan bir firma da YYS alabilir mi, ithalat şart mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Şart değil. YYS hem ihracat hem ithalat işlemleri için
              kullanılabilen bir statüdür; başvuran firmanın hangi yönde
              dış ticaret yaptığına bağlı olarak sağladığı kolaylıklar
              (yeşil hat, onaylanmış ihracatçı, izinli gönderici/alıcı
              gibi) ilgili işlem türünde devreye girer.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              YYS başvurusu için gümrük müşaviri şart mı, firma kendi başına başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Yasal olarak başvuruyu firma kendisi de yapabilir, ancak
              güvenilirlik, mali yeterlilik ve emniyet-güvenlik
              koşullarının her birinin belgelendirilmesi ve öz
              değerlendirme formunun eksiksiz doldurulması teknik bir
              süreçtir. Süreci baştan doğru kurgulamak, yerinde
              incelemede gecikme veya ret riskini azaltır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              KOBİ ölçeğindeki bir firma YYS başvurusu yapabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, YYS belirli bir firma büyüklüğüne göre sınırlandırılmış
              değildir. Belirleyici olan şirket ölçeği değil, en az 3 yıllık
              faaliyet geçmişi, gümrük beyanı hacmi ve dört ana koşulun
              (güvenilirlik, kayıt düzeni, mali yeterlilik, emniyet-güvenlik)
              fiilen sağlanıp sağlanmadığıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              YYS ile Türk Eximbank kredileri veya Ticaret Bakanlığı ihracat destekleri birlikte kullanılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. YYS bir teşvik veya kredi değil, operasyonel bir
              yetkilendirme olduğu için{" "}
              <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
                Ticaret Bakanlığı&apos;nın hibe niteliğindeki ihracat
                destekleriyle
              </Link>{" "}
              ve{" "}
              <Link href="/blog/turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi" className="text-orange-600 underline">
                Türk Eximbank&apos;ın kredi ve alacak sigortası ürünleriyle
              </Link>{" "}
              birbirini dışlamadan, farklı ihtiyaçlara cevap verecek şekilde
              aynı anda kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru reddedilirse yeniden başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Ret gerekçesi genellikle dört ana koşuldan birinin (en çok da
              emniyet-güvenlik veya kayıt düzeni) yeterince
              belgelendirilememesinden kaynaklanır. Eksik kalan noktalar
              giderildikten sonra firma yeniden başvuru yapabilir; bu
              nedenle başvuru öncesi kendi kendine bir hazırlık taraması
              yapmak, ret riskini önemli ölçüde azaltır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚀 Şirketinizin YYS&apos;ye Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Firmanızın mevcut ihracat/ithalat hacminin, faaliyet süresinin
            ve kayıt düzeninin YYS başvurusu için yeterli olup olmadığı,
            hangi avantajların işinize öncelikli olarak kazanç sağlayacağı;
            dış ticaret hacminize ve operasyonel yapınıza bağlı stratejik
            bir değerlendirme gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İş Geliştirme ve Stratejik Danışmanlık kapsamında şirketinizin
              YYS uygunluğunu birlikte değerlendirmemiz için bizimle
              iletişime geçin.
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
          YYS, ihracat ve ithalatın hacim değil sıklık ve öngörülebilirlik
          üzerinden değerlendirildiği bir konuya işaret ediyor. Gümrükte
          geçirilen her ekstra gün, her fazladan belge talebi ve her yüksek
          teminat tutarı, düzenli dış ticaret yapan bir firma için toplamda
          önemli bir maliyet kalemi haline gelebiliyor. YYS, tam olarak bu
          maliyeti azaltmayı hedefleyen bir statü.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, şirketinizin YYS
          başvurusuna hazır olup olmadığının değerlendirilmesinden,
          Ticaret Bakanlığı&apos;nın diğer ihracat destekleri ve Türk
          Eximbank araçlarıyla birlikte bütüncül bir dış ticaret stratejisi
          kurgulanmasına kadar süreçte yanınızdayız.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT FİNANSMANI • TÜRK EXIMBANK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türk Eximbank İhracat Kredisi ve Alacak Sigortası Rehberi</h3>
          </Link>
          <Link
            href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">E-İHRACAT • PAZARYERİ SATIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">E-İhracat: Amazon, Etsy ve Trendyol Global&apos;de Satışa Nasıl Başlanır?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
