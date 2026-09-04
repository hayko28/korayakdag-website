import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler? | Koray Akdağ",
  description:
    "3568 sayılı Kanun kapsamında YMM Tam Tasdik sözleşmesi nedir, sınırlı tasdikten farkı, kimler yaptırmalı, 2026 sözleşme bildirim süreleri ve KDV iadesi/vergi incelemesi avantajlarıyla kapsamlı rehber.",
  keywords: [
    "tam tasdik nedir",
    "tam tasdik kimler yaptırmalı",
    "tam tasdik sözleşmesi nasıl yapılır",
    "ymm tam tasdik",
    "tam tasdik sınırlı tasdik farkı",
    "tam tasdik sözleşmesi bildirim süresi",
    "tam tasdik avantajları",
    "yeminli mali müşavir tam tasdik",
    "3568 sayılı kanun tam tasdik",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Tam Tasdik Nedir? Kimler Yaptırmalı, Avantajları Neler?"
      description="3568 sayılı Kanun kapsamında YMM Tam Tasdik sözleşmesinin ne olduğu, sınırlı tasdikten farkı, hangi şirketlerin yaptırmasının avantajlı (hatta artık pratikte neredeyse zorunlu) olduğu, sözleşme süreci ve 2026 güncel bildirim süreleriyle kapsamlı rehber."
      category="YEMİNLİ MALİ MÜŞAVİRLİK • TAM TASDİK • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="tam-tasdik-nedir-kimler-yaptirmali-avantajlari-2026"
      coverImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          &quot;Tam tasdik&quot; hâlâ birçok işletme sahibi için &quot;isteğe
          bağlı, gerekirse yaptırılan&quot; bir hizmet gibi algılanıyor. Oysa
          2026&apos;da yürürlüğe giren bir düzenleme, belirli istisna ve
          indirimlerden yararlanan şirketler için bu tabloyu fiilen değiştirdi.
          Bu yazıda tam tasdikin ne olduğunu, kimin gerçekten ihtiyaç
          duyduğunu ve sözleşme sürecinin nasıl işlediğini net şekilde
          anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Tam tasdik nedir, hangi kanuna dayanır?</li>
          <li>✔ Tam tasdik ile sınırlı tasdik arasındaki fark</li>
          <li>✔ Kimler yaptırmalı, kimler için artık pratikte kritik hale geldi?</li>
          <li>✔ Sözleşme süreci ve 2026 güncel bildirim süreleri</li>
          <li>✔ Vergi incelemesi ve KDV iadesindeki somut avantajlar</li>
          <li>✔ Sık yapılan hatalar ve dikkat edilmesi gerekenler</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Tam Tasdik Nedir?
          </Link>
          <Link href="#fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Tam Tasdik ile Sınırlı Tasdik Arasındaki Fark
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Kimler Yaptırmalı? 2026&apos;da Değişen Denklem
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Sözleşme Süreci ve 2026 Bildirim Süreleri
          </Link>
          <Link href="#avantajlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Tam Tasdikin Sağladığı Avantajlar
          </Link>
          <Link href="#rapor-teslim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Tasdik Raporunun Teslim Süresi
          </Link>
          <Link href="#maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Tam Tasdikin Maliyeti Nasıl Belirlenir?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Tam Tasdik Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tam tasdik, bir Yeminli Mali Müşavirin (YMM), mükellefin yıllık
          gelir veya kurumlar vergisi beyannamesini, bu beyannameye ekli mali
          tabloları ve bildirimleri; muhasebe standartlarına, vergi
          mevzuatına ve denetim tekniklerine uygunluk açısından baştan sona
          incelemesi ve bu incelemenin sonucunda bir Tam Tasdik Raporu
          düzenlemesidir. Hukuki dayanağı 3568 sayılı Serbest Muhasebecilik,
          Serbest Muhasebeci Mali Müşavirlik ve Yeminli Mali Müşavirlik
          Kanunu&apos;nun 12. maddesi ile Vergi Usul Kanunu&apos;nun mükerrer
          227. maddesidir.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Uygulamada YMM; cari hesap mutabakatlarını, amortisman ve
          yeniden değerleme hesaplamalarını, stok sayımlarını, istisna ve
          indirim şartlarının fiilen sağlanıp sağlanmadığını, karşıt
          kontrolleri ve beyannamedeki matrah tespitini denetim
          teknikleriyle inceler. Bu inceleme sonucunda düzenlenen rapor,
          vergi dairesi nezdinde &quot;önceden incelenmiş&quot; bir belge
          niteliği taşır.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Tam tasdik, kural olarak <strong>ihtiyaridir</strong> — yani
            hiçbir şirket sadece &quot;kurumlar vergisi mükellefiyim&quot;
            diye tam tasdik yaptırmak zorunda değildir. Ancak aşağıda
            detaylandırdığımız gibi, belirli istisna ve indirimlerden
            yararlanan şirketler için durum 2026 itibarıyla önemli ölçüde
            değişti.
          </p>
        </div>
      </section>

      {/* 2. FARK */}
      <section id="fark" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Tam Tasdik ile Sınırlı Tasdik Arasındaki Fark
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          YMM tasdik hizmetleri iki ana başlıkta toplanır: beyannamenin ve
          mali tabloların tamamını kapsayan <strong>tam tasdik</strong> ve
          yalnızca belirli bir işlemi (örneğin tek bir istisna, bir KDV
          iadesi veya bir teşvik/indirim kalemini) kapsayan{" "}
          <strong>sınırlı (kısmi) tasdik</strong>.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Tam Tasdik</th>
                <th className="p-5">Sınırlı Tasdik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kapsam</td>
                <td className="p-5">Yıllık beyanname + tüm mali tablo ve bildirimler</td>
                <td className="p-5">Tek bir işlem (örn. tek bir istisna/indirim veya KDV iadesi)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sözleşme Süresi</td>
                <td className="p-5">Yıllık, hesap döneminin ilk ayında yapılır</td>
                <td className="p-5">İşlem bazlı, ihtiyaç doğduğunda yapılır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Vergi İncelemesi Etkisi</td>
                <td className="p-5">Beyannamenin tamamı için koruma sağlar</td>
                <td className="p-5">Sadece tasdike konu işlem için koruma sağlar</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV İadesi Avantajı</td>
                <td className="p-5">Süresinde yapılmışsa iade sürecinde tam kapsamlı avantaj</td>
                <td className="p-5">Sadece o iade talebi için sınırlı avantaj</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">2026 İstisna/İndirim Zorunluluğu</td>
                <td className="p-5">Tam tasdik varsa ayrıca rapor gerekmez</td>
                <td className="p-5">Tam tasdik yoksa her istisna/indirim için ayrı rapor gerekir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratikte, birden fazla istisna/indirim kalemi olan, düzenli KDV
            iadesi talep eden veya ihracat yapan şirketler için tek tek
            sınırlı tasdik raporu almak yerine yıllık bir tam tasdik
            sözleşmesi yapmak, hem maliyet hem de süreç yönetimi açısından
            genellikle daha avantajlıdır.
          </p>
        </div>
      </section>

      {/* 3. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Kimler Yaptırmalı? 2026&apos;da Değişen Denklem
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tam tasdik hâlâ ihtiyaridir; ama 30.12.2025 tarihli 49 Sıra No&apos;lu
          Serbest Muhasebeci Mali Müşavirlik ve Yeminli Mali Müşavirlik
          Kanunu Genel Tebliği ile birlikte, 1 Ocak 2026&apos;dan itibaren
          geçerli olmak üzere belirli istisna ve indirimlerden yararlanan
          mükellefler için fiilen &quot;YMM raporu ya al ya da tam tasdikin
          içinde ol&quot; noktasına gelindi. Tebliğ; her bir istisna veya
          indirim kalemi <strong>500.000 TL</strong>&apos;yi aştığında ya da
          kalemlerin toplamı <strong>1.000.000 TL</strong>&apos;yi
          aştığında, bu tutarların YMM tasdik raporuyla tevsik edilmesini
          zorunlu tutuyor. Şirketin zaten süresinde imzalanmış bir tam tasdik
          sözleşmesi varsa, bu kalemler için ayrıca sınırlı tasdik raporu
          almasına gerek kalmıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu düzenleme kapsamına giren başlıca istisna ve indirim kalemleri
          arasında iştirak kazançları istisnası, yurt dışı iştirak kazancı
          istisnası, serbest bölge ve teknoloji geliştirme bölgesi kazanç
          istisnası, Ar-Ge ve tasarım indirimi, nakdi sermaye artırımı faiz
          indirimi, indirimli kurumlar vergisi uygulaması ve sponsorluk
          harcamaları gibi kalemler yer alıyor. Bu kalemlerden birini veya
          birkaçını beyannamesinde kullanan şirketlerin, güncel tutar
          sınırlarını mutlaka Gelir İdaresi Başkanlığı ve ilgili tebliğ
          metninden teyit etmesi gerekir.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-green-700">
              ✅ Tam Tasdik İçin Güçlü Adaylar
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>Düzenli ihracat yapan ve KDV iadesi alan imalatçı/ihracatçı şirketler</li>
              <li>Ar-Ge/tasarım indirimi, teknokent veya serbest bölge kazanç istisnasından yararlananlar</li>
              <li>Yurt dışı iştiraki veya iştirak kazancı istisnası bulunan holdingler</li>
              <li>Tevkifat kesintisi yüksek, düzenli iade talep eden hizmet şirketleri</li>
              <li>Vergi incelemesi riskini azaltmak isteyen orta-büyük ölçekli şirketler</li>
              <li>Birden fazla istisna/indirim kalemi 500.000 TL&apos;lik sınırı aşan şirketler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-700">
              ➖ Tam Tasdik Zorunlu Olmayabilecekler
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-gray-500">
              <li>İstisna/indirim kullanmayan, düşük ciro/basit yapıya sahip küçük şirketler</li>
              <li>KDV iadesi talebi bulunmayan, yalnızca yurt içi satış yapan işletmeler</li>
              <li>Tek seferlik, işlem bazlı bir istisnadan yararlanan (bu durumda sınırlı tasdik yeterli olabilir) şirketler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Sözleşme Süreci ve 2026 Bildirim Süreleri
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Tam tasdik sözleşmesinin &quot;süresinde yapılmış&quot; sayılması,
          hem sağladığı avantajlardan tam olarak yararlanabilmek hem de
          bildirim yükümlülüklerini yerine getirebilmek için kritiktir.
          Süreç, Hazine ve Maliye Bakanlığı&apos;nın YMM tasdik
          sözleşmelerine ilişkin bildirim tebliğleri çerçevesinde
          elektronik ortamda yürütülür.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">YMM Seçimi ve Ön Görüşme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Sözleşmenin İmzalanması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">İnternet Vergi Dairesine Bildirim</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Yıl İçi İnceleme ve Mutabakat</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Beyanname Dönemi Denetimi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">Tasdik Raporunun Düzenlenip Sunulması</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Sözleşmenin Yapılma Zamanı
          </h3>
          <p className="leading-8 text-gray-700">
            Takvim yılı esasına tabi bir mükellefin sözleşmesinin{" "}
            <strong>süresinde yapılmış</strong> sayılması için, hesap
            döneminin ilk ayı içinde (yani takvim yılında en geç 31 Ocak&apos;a
            kadar) imzalanmış olması gerekir. Yeni işe başlayan mükellefler
            veya önceki sözleşmesi herhangi bir nedenle sona eren
            mükellefler ise işe başlama/sözleşme sonlanma tarihinden
            itibaren bir ay içinde yeni bir sözleşme yapabilir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. İnternet Vergi Dairesine Bildirim Süresi
          </h3>
          <p className="leading-8 text-gray-700">
            Hesap döneminin ilk ayında düzenlenen sözleşmelerin, imzalanan
            ayı izleyen ayın son gününe kadar (31 Ocak&apos;ta imzalanan bir
            sözleşme için 28/29 Şubat&apos;a kadar) elektronik ortamda
            İnternet Vergi Dairesi üzerinden bildirilmesi gerekir. Süresinden
            sonra düzenlenen sözleşmelerde ise bildirim, sözleşme tarihinden
            itibaren <strong>15 gün</strong> içinde yapılmalıdır. Bu süre
            içinde bildirilmeyen sözleşmeler, süresinden sonra yapılmış
            sözleşme olarak kabul edilir ve bazı avantajlar (özellikle
            geriye dönük KDV iadesi kolaylıkları) sınırlanabilir.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Önemli:</strong> Bildirim süreleri ve tutar sınırları
            zaman zaman güncellenmektedir; sözleşme öncesinde güncel
            tebliğ metninin{" "}
            <a
              href="https://www.gib.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı
            </a>{" "}
            üzerinden teyit edilmesi gerekir. Bu yazıdaki tarihler 2026 hesap
            dönemi için genel uygulamayı yansıtmaktadır.
          </p>
        </div>
      </section>

      {/* 5. AVANTAJLAR */}
      <section id="avantajlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Tam Tasdikin Sağladığı Avantajlar
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🛡️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Vergi İncelemesi Riskinin Azalması
            </h3>
            <p className="text-gray-700">
              YMM tarafından tasdik edilmiş beyanname ve mali tablolar,
              vergi idaresi nezdinde önceden incelenmiş belge niteliği
              taşır; ihbar veya özel bir bulgu olmadıkça bu şirketler
              re&apos;sen ikinci bir incelemeye öncelikli olarak alınmaz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hızlandırılmış KDV İadesi
            </h3>
            <p className="text-gray-700">
              Süresinde yapılmış tam tasdik sözleşmesi bulunan mükellefler,
              belirli limitlere kadar iade taleplerini teminatsız ve
              incelemesiz, YMM raporuyla tahsil edebilir. Güncel 2026 iade
              limit tablosunu{" "}
              <Link
                href="/blog/kdv-iadesi-nasil-alinir-2026-sartlari-sureci"
                className="text-orange-600 underline"
              >
                KDV İadesi Nasıl Alınır? 2026 Şartları ve Süreci
              </Link>{" "}
              yazımızda bulabilirsiniz.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📋</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Tek Sözleşmeyle Çoklu İstisna Koruması
            </h3>
            <p className="text-gray-700">
              2026&apos;dan itibaren tasdike tabi hale gelen istisna/indirim
              kalemleri için, tam tasdik sözleşmesi olan mükellefler ayrıca
              sınırlı tasdik raporu almak zorunda kalmaz; bu da hem zaman
              hem maliyet tasarrufu sağlar.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bunlara ek olarak, tam tasdik süreci şirketin muhasebe
            kayıtlarının yıl içinde düzenli olarak kontrol edilmesini de
            beraberinde getirir; bu da yıl sonunda &quot;sürpriz&quot;
            matrah farkı veya ceza riskiyle karşılaşma ihtimalini azaltır.
            Sorumluluk açısından ise tasdik edilen kısımlarda YMM,
            mükellefle birlikte müştereken ve müteselsilen sorumlu
            olduğundan, ikinci bir bağımsız göz süreci güvenilir kılar.
          </p>
        </div>
      </section>

      {/* 6. RAPOR TESLİM */}
      <section id="rapor-teslim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Tasdik Raporunun Teslim Süresi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kurumlar vergisi tam tasdik raporu, genel kural olarak kurumlar
          vergisi beyannamesinin verilme süresini izleyen{" "}
          <strong>iki ay içinde</strong> (yani takvim yılına tabi
          mükelleflerde genellikle 30 Haziran&apos;a kadar) Dijital Vergi
          Dairesi üzerinden elektronik ortamda gönderilir. Bazı istisna ve
          indirim kalemlerine ilişkin tasdik raporları için bu süre üç aya
          kadar uzayabilir.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <p className="leading-8 text-gray-700">
            <strong>Dikkat:</strong> Hazine ve Maliye Bakanlığı, yoğunluk
            veya teknik nedenlerle bu süreleri zaman zaman idari bir
            duyuruyla uzatabilmektedir (örneğin 2025 hesap dönemine ait
            raporlarda süre 2026&apos;da 31 Temmuz&apos;a kadar
            uzatılmıştır). Süresinde ibraz edilmeyen tasdik raporuna konu
            istisna ve indirimler, vergi dairesi tarafından reddedilebilir;
            bu nedenle her yıl güncel süre GİB duyurularından teyit
            edilmelidir.
          </p>
        </div>
      </section>

      {/* 7. MALİYET */}
      <section id="maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Tam Tasdikin Maliyeti Nasıl Belirlenir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tam tasdik ücreti, her yıl Hazine ve Maliye Bakanlığı tarafından
          yayımlanan Serbest Muhasebeci Mali Müşavirlik ve Yeminli Mali
          Müşavirlik Asgari Ücret Tarifesi&apos;ne göre belirlenir. Ücret;
          sabit bir rakam değildir ve şirketin net satış hasılatı/aktif
          büyüklüğü, faaliyet konusu (örneğin inşaat/sanayi işletmelerinde
          uygulanan artırım oranları) ve tasdike konu işlem sayısına göre
          hesaplanır. Bu nedenle net bir maliyet, ancak şirketin güncel mali
          verileri üzerinden yapılacak somut bir hesaplamayla ortaya
          çıkar.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısa vadede bir maliyet gibi görünse de, tam tasdik genellikle
            kendi maliyetini fazlasıyla karşılar: hızlandırılmış KDV
            iadesinin sağladığı nakit akışı avantajı, vergi incelemesi
            riskinin azalmasıyla kaçınılan zaman/ceza maliyeti ve çoklu
            istisna kalemi için ayrı ayrı sınırlı tasdik raporu almak
            zorunda kalınmaması, çoğu şirket için tam tasdiki net bir
            kazanca dönüştürür.
          </p>
        </div>
      </section>

      {/* 8. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Sık Yapılan Hatalar ve Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Sözleşmenin hesap döneminin ilk ayı geçtikten sonra imzalanması ve &quot;süresinde&quot; sayılan avantajların kaybedilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Sözleşme bilgilerinin İnternet Vergi Dairesi&apos;ne zamanında bildirilmemesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ İstisna/indirim tutarlarının 500.000 TL / 1.000.000 TL sınırına yaklaştığının fark edilmemesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Tasdik raporunun ibraz süresinin (genellikle 2 ay) kaçırılması nedeniyle istisna/indirimin reddedilmesi
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Yıl içi mutabakat ve kayıt kontrolünün yalnızca yıl sonuna bırakılması
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ⚠️ Tam tasdik ile sınırlı tasdikin karıştırılıp, ihtiyaca uygun olmayan hizmetin tercih edilmesi
          </div>
        </div>
      </section>

      {/* KURUMSAL DESTEK CTA */}
      <section className="mt-16 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Tam Tasdik Sözleşmenizi de Sürecin Tamamını da Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Sözleşmenin süresinde imzalanmasından İnternet Vergi Dairesi
            bildirimine, yıl içi mutabakatlardan tasdik raporunun
            hazırlanıp süresinde ibraz edilmesine kadar tam tasdik
            sürecinizin tamamını uçtan uca yönetiyoruz. Şirketiniz için
            tam tasdikin mi yoksa işlem bazlı sınırlı tasdikin mi daha
            uygun olduğuna birlikte karar veriyor, ayrı bir yeminli mali
            müşavir aramanıza gerek kalmadan tüm süreci tek elden
            yürütüyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketiniz için tam tasdikin uygun olup olmadığını
              değerlendirmek üzere bizimle iletişime geçebilirsiniz.
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
              Tam tasdik yaptırmak zorunlu mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural olarak hayır, tam tasdik ihtiyaridir. Ancak
              2026&apos;dan itibaren belirli istisna ve indirim kalemleri
              (tek kalemde 500.000 TL, toplamda 1.000.000 TL sınırını
              aşan durumlarda) için YMM tasdik raporu ibrazı zorunlu hale
              getirildi. Şirketin zaten süresinde yapılmış bir tam tasdik
              sözleşmesi varsa, bu kalemler için ayrıca rapor almasına
              gerek kalmıyor; bu da fiilen tam tasdiki bu profildeki
              şirketler için pratikte kaçınılmaz bir tercih hâline
              getiriyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tam tasdik sözleşmesi ne zaman imzalanmalı?
            </h3>
            <p className="leading-8 text-gray-700">
              Süresinde sayılması için, takvim yılına tabi mükelleflerde
              hesap döneminin ilk ayı içinde, yani en geç 31 Ocak&apos;a
              kadar imzalanması gerekir. Yıl içinde işe başlayan veya
              önceki sözleşmesi sona eren mükellefler ise ilgili tarihten
              itibaren bir ay içinde yeni sözleşme yapabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tam tasdik ile bağımsız denetim aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bağımsız denetim, KGK tarafından belirlenen büyüklük
              eşiklerini aşan şirketlerin finansal tablolarının bağımsız
              denetçi tarafından denetlenmesidir ve belirli şirketler için
              zorunludur. Tam tasdik ise vergi beyannamesi ve mali
              tabloların YMM tarafından tasdikidir; ihtiyaridir ve farklı
              bir amaca hizmet eder. Bir şirket her iki hizmete de aynı
              anda tabi olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tam tasdik sözleşmesi yıl ortasında feshedilebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, sözleşme taraflardan biri tarafından feshedilebilir;
              ancak fesih durumunda mükellefin beyannamelerini tasdik
              ettirmeye devam etmek istemesi hâlinde, fesih tarihinden
              itibaren bir ay içinde yeni bir YMM ile sözleşme yapması
              gerekir. Fesih ve yeni sözleşme bilgilerinin de süresinde
              İnternet Vergi Dairesi&apos;ne bildirilmesi önemlidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Tam tasdik yaptıran şirket hiç vergi incelemesine alınmaz mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, bu bir garanti değildir. Tam tasdik, beyannamenin
              önceden bağımsız bir uzman tarafından incelenmiş olması
              nedeniyle inceleme önceliğini ve riskini azaltır; ancak
              ihbar, karşıt inceleme bulgusu veya sektörel/riskli işlem
              taraması gibi özel durumlarda inceleme yine de yapılabilir.
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
          Tam tasdik, uzun yıllar &quot;isteyen yaptırır&quot; şeklinde
          algılanan bir hizmetken, 2026&apos;da yürürlüğe giren istisna ve
          indirim tasdik zorunluluğuyla birlikte, belirli bir büyüklüğün
          üzerinde istisna/indirim kullanan şirketler için fiilen
          kaçınılmaz bir tercih hâline geldi. Sözleşmenin süresinde
          imzalanıp bildirilmesi, hem vergi incelemesi riskini azaltan hem
          de KDV iadesini hızlandıran somut avantajlar sağlıyor. Şirketinizin
          istisna/indirim profili, ihracat yoğunluğu ve büyüklüğü göz
          önüne alındığında tam tasdikin size net bir fayda sağlayıp
          sağlamayacağını, güncel mevzuat ve mali verileriniz üzerinden
          birlikte değerlendirebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kdv-iadesi-nasil-alinir-2026-sartlari-sureci"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ DANIŞMANLIĞI • KDV İADESİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KDV İadesi Nasıl Alınır? 2026 Şartları ve Süreci</h3>
          </Link>
          <Link
            href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026&apos;da Değişti: Yeni Kriterler Şirketinizi Nasıl Etkiliyor?</h3>
          </Link>
          <Link
            href="/blog/vergi-tesvik-kredibilite-analizi-neden-gerekli-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">VERGİ & FİNANSAL YÖNETİM • DANIŞMANLIK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İşletmenize AYNA Tutuyoruz: Vergi Risk, Teşvik/Fırsat ve Kredibilite Analizi Neden Her KOBİ&apos;nin İhtiyacı?</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
