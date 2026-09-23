import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Halka Arz Süreci: KOBİ'ler İçin Ön Hazırlık ve Şartlar | Koray Akdağ",
  description:
    "KOBİ'ler için halka arz nedir, banka kredisi ve özel sermaye yatırımına göre farkı nedir? Borsa İstanbul Yıldız/Ana/Alt Pazar ve Gelişen İşletmeler Pazarı (GİP) şartları, bağımsız denetim geçmişi, izahname süreci, maliyet kalemleri ve halka arz sonrası yükümlülüklerle kapsamlı 2026 rehberi.",
  keywords: [
    "halka arz nedir",
    "KOBİ halka arz",
    "Gelişen İşletmeler Pazarı GİP",
    "Borsa İstanbul Ana Pazar Yıldız Pazar",
    "halka arz şartları 2026",
    "izahname nedir",
    "halka arz maliyeti",
    "SPK halka arz başvurusu",
    "halka arza hazırlık",
    "fiyat tespit raporu",
  ],
  alternates: {
    canonical: "/blog/halka-arz-sureci-kobiler-icin-on-hazirlik-ve-sartlar",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Halka Arz Süreci: KOBİ'ler İçin Ön Hazırlık ve Şartlar"
      description="Büyüme için sermayeye ihtiyaç duyan KOBİ'ler açısından halka arz genellikle son sırada düşünülen bir seçenek. Oysa Borsa İstanbul'un KOBİ'lere özel Gelişen İşletmeler Pazarı sayesinde bu yol göründüğünden daha erişilebilir. Halka arzın ne olduğu, hangi pazarların hangi şirkete uygun olduğu, hazırlık şartları ve süreç maliyetleriyle kapsamlı rehber."
      category="HALKA ARZ • SERMAYE PİYASASI • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="halka-arz-sureci-kobiler-icin-on-hazirlik-ve-sartlar"
      coverImage="https://images.unsplash.com/photo-1746037870491-b2e415517d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: KOBİ&apos;ler İçin Halka Arz
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Halka arz, şirketin paylarının bir kısmının SPK onayıyla yatırımcılara satılması ve Borsa İstanbul&apos;da işlem görmeye başlamasıdır. Borç yaratmadan, ortaklık payı karşılığında sermaye toplama yöntemidir.</li>
          <li>✔ Borsa İstanbul&apos;da dört pazar var: <strong>Yıldız Pazar, Ana Pazar, Alt Pazar</strong> ve KOBİ&apos;lere özel <strong>Gelişen İşletmeler Pazarı (GİP)</strong>. GİP&apos;te nitelik/nicelik bazlı sabit bir eşik aranmıyor, bu da onu küçük ve orta ölçekli şirketler için en erişilebilir kapı yapıyor.</li>
          <li>✔ Halka arz başvurusunda <strong>son 2 yıla ait bağımsız denetimden geçmiş mali tablolar</strong> ve anonim şirket statüsü şart. Kurumsal yönetim ilkelerine uyum ve şeffaf kamuyu aydınlatma yükümlülüğü sürecin ayrılmaz parçası.</li>
          <li>✔ Süreç sırasıyla SPK başvurusu, izahname hazırlığı, aracı kurum (yatırım bankası) seçimi ve fiyat tespit raporundan geçiyor; SPK&apos;ya kayıt ücreti olarak ihraç değerinin binde 2&apos;si (ilk halka arzda fiyat farkı için binde 1&apos;i) ödeniyor.</li>
          <li>✔ Halka arz sonrasında şirket, periyodik finansal raporlama ve özel durum açıklamaları gibi sürekli kamuyu aydınlatma yükümlülükleri altına giriyor; bu da kurumsallaşmanın halka arzdan önce değil, süreçle birlikte tamamlanması gereken bir hazırlık olduğu anlamına geliyor.</li>
          <li>✔ Halka arz, banka kredisi gibi geri ödeme yükümlülüğü doğurmaz; özel sermaye yatırımına göre ise çok daha geniş bir yatırımcı tabanına ve likiditeye erişim sağlar.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Halka Arz Nedir? KOBİ&apos;ler İçin Neden Bir Seçenek?
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Banka Kredisi ve Özel Sermaye Yatırımıyla Karşılaştırma
          </Link>
          <Link href="#pazarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Borsa İstanbul Pazarları: Hangisi Size Uygun?
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Halka Arza Hazırlık Şartları
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Süreç Adım Adım Nasıl İşler?
          </Link>
          <Link href="#maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Maliyet Kalemleri
          </Link>
          <Link href="#sonrasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Halka Arz Sonrası Yükümlülükler
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Kimler İçin Uygun?
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Halka Arz Nedir? KOBİ&apos;ler İçin Neden Bir Seçenek?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Halka arz, bir anonim şirketin paylarının bir kısmının Sermaye
          Piyasası Kurulu (SPK) onayı ve izahname süreciyle geniş bir
          yatırımcı kitlesine satılması ve ardından Borsa İstanbul&apos;da
          işlem görmeye başlamasıdır. Şirket, karşılığında borç değil
          ortaklık payı verir; toplanan kaynak geri ödenmez, gelen
          yatırımcılar şirketin yeni ortakları olur.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Türkiye&apos;de halka arz denince akla genellikle büyük,
          köklü sanayi grupları gelir. Oysa Borsa İstanbul&apos;un
          KOBİ&apos;lere özel tasarladığı Gelişen İşletmeler Pazarı
          sayesinde, büyüme aşamasındaki, belirli bir kurumsallaşma
          düzeyine ulaşmış orta ölçekli şirketler için de halka arz
          artık gerçekçi bir finansman seçeneği. 2026 yılının ilk
          yarısında Borsa İstanbul&apos;da işlem görmeye başlayan
          şirketlerin büyük çoğunluğu Ana Pazar&apos;da yer aldı; bu da
          halka arzın yalnızca dev şirketlere özgü bir yöntem olmadığını
          gösteriyor.
        </p>
        <p className="leading-8 text-gray-700">
          KOBİ&apos;ler açısından halka arzın cazibesi üç noktada
          toplanıyor: geri ödeme yükü olmayan uzun vadeli sermaye,
          şirketin ve markanın tanınırlığının artması ve gelecekte yeni
          sermaye artırımlarına, ortaklık çıkışlarına veya çalışan pay
          opsiyonu gibi araçlara zemin oluşturan kurumsal bir yapı.
          Bunun karşılığında şirket, şeffaflık ve düzenli raporlama gibi
          yeni bir sorumluluk seti üstleniyor.
        </p>
      </section>

      {/* 2. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Banka Kredisi ve Özel Sermaye Yatırımıyla Karşılaştırma
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir KOBİ büyüme sermayesi ararken genellikle üç yoldan birini
          değerlendirir: banka kredisi, özel sermaye (private equity)
          yatırımı veya halka arz. Her birinin maliyeti, kontrol kaybı
          ve zaman ufku farklı işliyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kriter</th>
                <th className="p-4">Banka Kredisi</th>
                <th className="p-4">Özel Sermaye Yatırımı</th>
                <th className="p-4">Halka Arz</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Geri ödeme yükümlülüğü</td>
                <td className="p-4">Var, faiziyle birlikte</td>
                <td className="p-4">Yok, ortaklık payı karşılığı</td>
                <td className="p-4">Yok, ortaklık payı karşılığı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Teminat ihtiyacı</td>
                <td className="p-4">Genellikle şart</td>
                <td className="p-4">Yok</td>
                <td className="p-4">Yok</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yatırımcı sayısı</td>
                <td className="p-4">Tek kurum (banka)</td>
                <td className="p-4">Sınırlı sayıda, tek/birkaç yatırımcı</td>
                <td className="p-4">Geniş, dağınık yatırımcı tabanı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Kontrol kaybı riski</td>
                <td className="p-4">Yok, sadece finansal taahhüt</td>
                <td className="p-4">Yüksek; genellikle yönetimde söz hakkı istenir</td>
                <td className="p-4">Sınırlı ve dağınık; tek bir yatırımcının kontrolü ele geçirmesi zor</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Hazırlık süresi ve maliyeti</td>
                <td className="p-4">Kısa, görece düşük</td>
                <td className="p-4">Orta, müzakereye bağlı</td>
                <td className="p-4">Uzun (aylar sürer), görece yüksek</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Sonraki sermaye artırımı</td>
                <td className="p-4">Yeniden kredi başvurusu gerekir</td>
                <td className="p-4">Yeni tur müzakeresi gerekir</td>
                <td className="p-4">İkincil halka arzla nispeten hızlı erişim</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Pratikte bu üç yol birbirini dışlamaz. Birçok şirket önce banka
          kredisiyle büyür, belirli bir ölçeğe ulaştığında özel sermaye
          yatırımı alır ve kurumsallaşmasını tamamladıktan sonra halka
          arza yönelir. Halka arz, genellikle bu üçlünün son ve en
          kapsamlı adımı olarak konumlanır; çünkü hem en fazla hazırlık
          gerektirir hem de en geniş sermaye erişimini sağlar.
        </p>
      </section>

      {/* 3. PAZARLAR */}
      <section id="pazarlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Borsa İstanbul Pazarları: Hangisi Size Uygun?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Borsa İstanbul Pay Piyasası dört ayrı pazardan oluşuyor.
          Şirketler, Kotasyon Yönergesi&apos;nde tanımlanan kriterleri
          (piyasa değeri, halka açıklık oranı, finansal büyüklük gibi)
          sağladıkları pazarda işlem görmeye başlıyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Pazar</th>
                <th className="p-4">Profil</th>
                <th className="p-4">Erişilebilirlik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yıldız Pazar</td>
                <td className="p-4">En büyük ölçekli, en yüksek işlem hacmine sahip şirketler; Kotasyon Yönergesi&apos;ndeki en yüksek piyasa değeri ve halka açıklık eşikleri aranır</td>
                <td className="p-4">Düşük; büyük ölçekli, köklü şirketler için</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Ana Pazar</td>
                <td className="p-4">Orta-büyük ölçekli, belirli bir işlem geçmişi ve finansal büyüklüğe sahip şirketler; 2026&apos;da halka arz edilen şirketlerin çoğunluğu bu pazarda işlem görmeye başladı</td>
                <td className="p-4">Orta; büyümüş, kurumsallaşmasını tamamlamış KOBİ&apos;ler için ulaşılabilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Alt Pazar</td>
                <td className="p-4">Ana Pazar eşiklerinin altında kalan, görece daha küçük halka açık şirketler</td>
                <td className="p-4">Orta-yüksek</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Gelişen İşletmeler Pazarı (GİP)</td>
                <td className="p-4">Gelişme ve büyüme potansiyeli taşıyan, henüz Ana/Alt Pazar eşiklerini sağlayamayan küçük ve orta ölçekli şirketler; &quot;KOBİ Borsası&quot; olarak da anılır</td>
                <td className="p-4">Yüksek; GİP Yönetmeliği sabit bir nitelik/nicelik kriteri tanımlamaz</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚪 GİP: KOBİ&apos;ler İçin En Gerçekçi Kapı
          </h3>
          <p className="leading-8 text-gray-700">
            Gelişen İşletmeler Pazarı, Borsa kotasyon şartlarını henüz
            sağlayamayan ama büyüme potansiyeli taşıyan şirketler için
            kurulmuş, şeffaf ve düzenli bir platform. GİP Yönetmeliği,
            Ana ya da Yıldız Pazar&apos;daki gibi sabit bir piyasa değeri
            veya finansal büyüklük eşiği tanımlamaz; bu da onu birçok
            KOBİ için en erişilebilir başlangıç noktası yapıyor. GİP&apos;te
            en az 2 yıl işlem gören ve belirli büyüklük şartlarını
            sağlayan şirketler, daha sonra Ana veya Yıldız Pazar&apos;a
            geçiş başvurusunda bulunabiliyor. Başka bir deyişle GİP, tek
            seferlik bir kapı değil, kademeli bir büyüme rotası sunuyor.
          </p>
        </div>
      </section>

      {/* 4. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Halka Arza Hazırlık Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hangi pazar hedeflenirse hedeflensin, SPK&apos;nın izahname
          onayı için aradığı temel hazırlık şartları büyük ölçüde ortak.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📊 Bağımsız Denetim Geçmişi</h3>
            <p className="text-gray-700">
              İzahnamede yer alacak mali tabloların, SPK tarafından
              yetkilendirilmiş bir bağımsız denetim kuruluşunca özel
              bağımsız denetimden geçmesi gerekiyor. Uygulamada aranan
              asgari şart, başvuru öncesindeki <strong>son 2 yıla ait</strong>{" "}
              denetlenmiş mali tablolardır. Şirketinizin{" "}
              <Link href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti" className="text-orange-600 underline">
                bağımsız denetim kapsamına zaten girip girmediğini
              </Link>{" "}
              önceden bilmek, halka arz hazırlığına başlarken önemli bir
              zaman avantajı sağlar.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🏛️ Anonim Şirket Statüsü</h3>
            <p className="text-gray-700">
              Halka arz edilebilecek paylar yalnızca anonim şirketlere
              ait olabilir. Limited şirket olarak faaliyet gösteren
              işletmelerin süreçten önce anonim şirkete dönüşmesi
              gerekir; bu dönüşüm genellikle kurumsallaşma sürecinin ilk
              adımlarından biridir.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🧭 Kurumsal Yönetim İlkelerine Uyum</h3>
            <p className="text-gray-700">
              Yönetim kurulu yapısı, bağımsız üye bulundurma, iç kontrol
              ve risk yönetim sistemleri, ilişkili taraf işlemlerinin
              şeffaf yönetimi gibi başlıklarda SPK&apos;nın kurumsal
              yönetim ilkeleriyle uyumlu bir yapı kurulması bekleniyor.
              Aile şirketi yapısından gelen KOBİ&apos;lerde bu genellikle
              en çok zaman alan hazırlık başlığıdır.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">📢 Halka Açıklık Oranı</h3>
            <p className="text-gray-700">
              Her pazarın kendine özgü asgari halka açıklık oranı vardır;
              Yıldız Pazar&apos;da bu oran görece düşük, Alt Pazar&apos;da
              görece yüksek tutulur. GİP&apos;te ise sabit bir oran
              yerine, her başvuru şirketin büyüklüğü ve halka arz
              büyüklüğü birlikte değerlendirilerek karara bağlanır.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Süreç Adım Adım Nasıl İşler?
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">1️⃣</div>
            <h3 className="text-sm font-bold">Aracı Kurum Seçimi</h3>
            <p className="mt-2 text-xs text-gray-600">Yetkili bir yatırım bankası/aracı kurumla halka arza liderlik sözleşmesi imzalanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">2️⃣</div>
            <h3 className="text-sm font-bold">Bağımsız Denetim</h3>
            <p className="mt-2 text-xs text-gray-600">Son 2 yılın mali tabloları özel bağımsız denetimden geçirilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">3️⃣</div>
            <h3 className="text-sm font-bold">İzahname Hazırlığı</h3>
            <p className="mt-2 text-xs text-gray-600">Şirket, faaliyet, risk ve finansal bilgileri içeren izahname SPK standardına göre hazırlanır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">4️⃣</div>
            <h3 className="text-sm font-bold">SPK Başvurusu ve İnceleme</h3>
            <p className="mt-2 text-xs text-gray-600">SPK izahnameyi tutarlılık, anlaşılırlık ve eksiksizlik açısından inceler, gerekirse şirket merkezinde yerinde inceleme yapar</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">5️⃣</div>
            <h3 className="text-sm font-bold">Fiyat Tespit Raporu</h3>
            <p className="mt-2 text-xs text-gray-600">Aracı kurum, şirket değerlemesine dayanan bir fiyat tespit raporuyla halka arz fiyat aralığını belirler</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">6️⃣</div>
            <h3 className="text-sm font-bold">Talep Toplama ve İşlem Başlangıcı</h3>
            <p className="mt-2 text-xs text-gray-600">Yatırımcı talepleri toplanır, dağıtım yapılır ve pay Borsa İstanbul&apos;da ilgili pazarda işlem görmeye başlar</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Fiyat tespit raporundaki değerleme çalışması, aslında bir{" "}
          <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="text-orange-600 underline">
            şirket değerlemesi
          </Link>{" "}
          sürecinin halka arza uyarlanmış hâlidir. DCF, çarpan ve emsal
          şirket karşılaştırması gibi aynı yöntemler kullanılır; fark,
          sonucun halka arz edilecek pay adedine bölünerek bir birim pay
          fiyatına dönüştürülmesidir. Değerleme çalışmasının erken ve
          bağımsız yapılması, sürecin ilerleyen aşamalarında fiyat
          konusunda sürpriz yaşanmasını önler.
        </p>
      </section>

      {/* 6. MALİYET */}
      <section id="maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Maliyet Kalemleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Halka arzın kesin maliyeti; halka arz büyüklüğüne, seçilen
          aracı kuruma ve şirketin hazırlık düzeyine göre değişir. Yine
          de bütçe planlaması için bilinmesi gereken ana kalemler şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Kalem</th>
                <th className="p-4">Mahiyeti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Aracı kurum komisyonu</td>
                <td className="p-4">Halka arz büyüklüğü üzerinden, aracılık sözleşmesiyle belirlenen değişken bir oran; en büyük tekil maliyet kalemidir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">SPK kayıt ücreti</td>
                <td className="p-4">İhraç değerinin binde 2&apos;si (%0,2); ilk halka arzda, ihraç fiyatı ile nominal değer arasındaki fark için binde 1 (%0,1) oranı uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Bağımsız denetim ücreti</td>
                <td className="p-4">Son 2 yılın mali tablolarının SPK standardına göre denetlenmesi için ödenen ücret</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Halka arz/hukuki danışmanlık</td>
                <td className="p-4">İzahname hazırlığı, kurumsal yönetim uyumu ve sözleşme süreçleri için danışmanlık gideri</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Borsa İstanbul kotasyon ücreti</td>
                <td className="p-4">İşlem görmeye başlama ve yıllık kotasyonda tahsil edilen, Borsa tarifesine göre değişen ücret</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Halka arz maliyeti hesaplanırken en sık gözden kaçan nokta,
            bu kalemlerin tamamının süreç başarısız olsa bile büyük
            ölçüde geri dönüşsüz olduğudur. Bağımsız denetim, izahname
            hazırlığı ve kurumsal yönetim uyumu, halka arz gerçekleşmese
            dahi harcanmış maliyetlerdir. Bu yüzden başvuru öncesinde
            şirketin gerçekten hazır olup olmadığının, sadece
            finansal büyüklük değil kurumsal yönetim ve şeffaflık
            açısından da bağımsız bir gözle değerlendirilmesi, süreci
            başlatmadan önce atılması gereken en kritik adımdır.
          </p>
        </div>
      </section>

      {/* KARIŞTIRMAYIN */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Karıştırmayın: Halka Arz ile Kotasyon Aynı Şey Değil
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Halka Arz:</strong> Şirketin paylarının SPK onayıyla ilk kez geniş bir yatırımcı kitlesine satılması işlemidir. İzahname, fiyat tespit raporu ve talep toplama süreçlerini kapsar.</li>
            <li><strong>Kotasyon:</strong> Halka arz edilen (veya zaten halka açık olan) payların Borsa İstanbul&apos;da hangi pazarda işlem göreceğinin belirlenmesi ve o pazarın kotasyon listesine alınmasıdır.</li>
          </ul>
          <p className="mt-5 leading-8 text-gray-700">
            Pratikte bu iki süreç genellikle art arda, aynı zaman
            diliminde yürür. Ancak teknik olarak bir şirket halka açık
            olabilir (paylarının bir kısmı halka satılmış olabilir) ama
            henüz Borsa&apos;da işlem görmüyor olabilir. Kotasyon
            şartlarını sağlayamayan halka açık şirketler için Borsa
            İstanbul&apos;un ayrı bir kayıt mekanizması bulunur; bu da
            halka arz ile kotasyonun her zaman aynı anda gerçekleşen tek
            bir işlem olmadığını gösterir.
          </p>
        </div>
      </section>

      {/* 7. SONRASI */}
      <section id="sonrasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Halka Arz Sonrası Yükümlülükler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Halka arz, bir kerelik işlem değil, şirketin faaliyet biçimini
          kalıcı olarak değiştiren bir dönüm noktasıdır. İşlem
          tamamlandıktan sonra şirket, SPK mevzuatı çerçevesinde şu
          yükümlülükleri sürekli olarak taşır:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li><strong>Periyodik finansal raporlama:</strong> Üç, altı ve on iki aylık dönemler itibarıyla bağımsız denetimden geçmiş veya sınırlı incelemeden geçirilmiş finansal tabloların kamuya açıklanması.</li>
          <li><strong>Özel durum açıklamaları:</strong> Şirketin pay fiyatını etkileyebilecek her türlü önemli gelişmenin (yeni yatırım, ortaklık yapısı değişikliği, önemli sözleşmeler gibi) Kamuyu Aydınlatma Platformu üzerinden zamanında duyurulması.</li>
          <li><strong>Kurumsal yönetim uyumunun sürekliliği:</strong> Yönetim kurulu yapısı, bağımsız üyelik ve iç kontrol sistemlerinin halka arz sonrasında da korunması.</li>
          <li><strong>Genel kurul ve pay sahipliği süreçleri:</strong> Yıllık olağan genel kurulun mevzuata uygun yapılması, pay sahipleriyle şeffaf iletişim.</li>
          <li>
            Halka açık statüye geçiş, şirketin{" "}
            <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="text-orange-600 underline">
              TSRS sürdürülebilirlik raporlama
            </Link>{" "}
            gibi başka mevzuat eşiklerine de daha hızlı girmesine yol
            açabilir; aktif toplamı, net satış hasılatı ve çalışan
            sayısı eşikleri halka açık şirketlerde ayrıca izlenmesi
            gereken bir başlıktır.
          </li>
        </ul>
      </section>

      {/* 8. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Kimler İçin Uygun?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              📈 Halka Arza Hazırlanabilecek Şirketler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Büyüme için borçlanma yerine sermaye toplamak isteyen, düzenli kâr üreten KOBİ&apos;ler</li>
              <li>✔ Anonim şirket statüsüne geçmiş veya geçmeye hazır olan işletmeler</li>
              <li>✔ Yönetim kurulu yapısını ve iç kontrol sistemlerini kurumsallaştırmaya başlamış aile şirketleri</li>
              <li>✔ Markasının ve kurumsal itibarının halka açık statüyle büyümesini isteyen şirketler</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              🧱 Önce Kurumsallaşma Adımı Gereken Şirketler
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Yönetim ile aile ortaklık yapısı henüz ayrışmamış işletmeler</li>
              <li>✔ Mali tabloları henüz bağımsız denetim geçmişine sahip olmayan şirketler</li>
              <li>✔ Kurumsal yönetim ilkelerine (bağımsız yönetim kurulu üyesi, iç kontrol, ilişkili taraf işlemleri şeffaflığı) henüz uyum sağlamamış yapılar</li>
            </ul>
            <p className="mt-5 leading-7 text-gray-700">
              Bu profildeki şirketler için doğru sıralama, doğrudan
              halka arz başvurusu değil, önce{" "}
              <Link href="/blog/aile-sirketinden-kurumsal-yapiya-gecis-kurumsallasma" className="text-orange-600 underline">
                kurumsallaşma sürecini
              </Link>{" "}
              tamamlamaktır.
            </p>
          </div>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://borsaistanbul.com/tr/sayfa/246" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Kotasyon Şartları - Halka Arz ve Borsada İşlem - Borsa İstanbul
              </a>
            </li>
            <li>
              <a href="https://www.borsaistanbul.com/files/kotasyon_yonergesi.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Kotasyon Yönergesi - Borsa İstanbul A.Ş.
              </a>
            </li>
            <li>
              <a href="https://www.borsaistanbul.com/datum/gip/Geli%C5%9Fen%20%C4%B0%C5%9Fletmeler%20Piyasas%C4%B1%20K%C4%B1lavuzu.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Gelişen İşletmeler Piyasası (GİP) Kılavuzu - Borsa İstanbul
              </a>
            </li>
            <li>
              <a href="https://spk.gov.tr/data/61e34f9a1b41c61270320792/Halka%20Arz.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Halka Arz Yatırımcı Bilgilendirme Kitapçığı - Sermaye Piyasası Kurulu
              </a>
            </li>
            <li>
              <a href="https://spk.gov.tr/sirketler/duzenlemeler-ve-surecler/basvuru-surecleri" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Başvuru Süreçleri - Sermaye Piyasası Kurulu
              </a>
            </li>
            <li>
              <a href="https://spk.gov.tr/data/61e3664d1b41c61270320801/73793d5c-b73a-4da7-81c5-0aedf963ae99.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                Pay Tebliği (VII-128.1) - Sermaye Piyasası Kurulu
              </a>
            </li>
            <li>
              <a href="https://spk.gov.tr/ihrac-verileri/ilk-halka-arz-verileri" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                İlk Halka Arz Verileri - Sermaye Piyasası Kurulu
              </a>
            </li>
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
              Limited şirket doğrudan halka arz yapabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Halka arz edilebilecek paylar yalnızca anonim
              şirketlere ait olabilir. Limited şirket olarak faaliyet
              gösteren işletmelerin önce anonim şirkete dönüşmesi
              gerekir; bu dönüşüm halka arz hazırlığının ilk
              adımlarından biridir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim kaç yıllık bağımsız denetim geçmişine sahip olmalı?
            </h3>
            <p className="leading-8 text-gray-700">
              İzahname başvurusu için genel olarak başvuru öncesindeki
              son 2 yıla ait, SPK standardına uygun özel bağımsız
              denetimden geçmiş mali tabloların hazır olması bekleniyor.
              Şirketinizin bağımsız denetim kapsamına zaten girip
              girmediğini erkenden öğrenmek, bu hazırlığı önemli ölçüde
              hızlandırır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              GİP&apos;te işlem görmek Ana Pazar&apos;dan daha mı kolay?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, GİP Yönetmeliği başvurunun kabulü için sabit bir
              nitelik veya nicelik kriteri tanımlamaz; bu da onu Ana ve
              Yıldız Pazar&apos;a kıyasla daha erişilebilir kılar. GİP&apos;te
              en az 2 yıl işlem gören şirketler, büyüklük şartlarını
              sağladıklarında Ana veya Yıldız Pazar&apos;a geçiş
              başvurusunda bulunabilirler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Halka arz fiyatı nasıl belirlenir?
            </h3>
            <p className="leading-8 text-gray-700">
              Aracı kurum, şirketin DCF, çarpan/emsal şirket
              karşılaştırması gibi yöntemlerle yapılan bir şirket
              değerlemesine dayanarak bir fiyat tespit raporu hazırlar.
              Bu rapor, halka arz edilecek payların fiyat aralığının
              temelini oluşturur; nihai fiyat, talep toplama sürecindeki
              yatırımcı ilgisine göre bu aralık içinde netleşir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Halka arz süreci ortalama ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Süre; şirketin hazırlık düzeyine, bağımsız denetim
              geçmişinin hazır olup olmadığına ve SPK inceleme sürecine
              göre değişir. Kurumsal yönetim uyumu ve mali tablo
              hazırlığı tamamlanmış bir şirket için süreç genellikle
              birkaç ay içinde tamamlanabilirken, kurumsallaşma
              eksikleri olan şirketlerde hazırlık aşaması çok daha uzun
              sürebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Halka arz sonrasında şirketin ortaklık kontrolü kaybolur mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Genellikle hayır. Halka arz edilen pay oranı, pazar bazlı
              asgari halka açıklık şartlarını sağlayacak şekilde
              planlanır ve kurucu ortaklar çoğunlukla kontrol payını
              korur. Kontrol kaybı riski, tek bir büyük yatırımcıya değil
              geniş ve dağınık bir yatırımcı tabanına pay satıldığı için
              özel sermaye yatırımına göre daha sınırlıdır.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🚀 Şirketinizin Halka Arza Hazır Olup Olmadığını Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Halka arz, hazırlıksız girilecek bir süreç değil. Anonim
            şirket statüsü, bağımsız denetim geçmişi, kurumsal yönetim
            uyumu ve doğru pazar seçimi, süreç başlamadan önce netleşmesi
            gereken konular.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Stratejik Danışmanlık ve Kurumsallaşma kapsamında
              şirketinizin halka arza hazırlık düzeyini birlikte
              değerlendirmemiz için bizimle iletişime geçin.
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
          Halka arz, KOBİ&apos;ler için ulaşılmaz bir hedef değil, ancak
          hazırlıksız girilecek bir süreç de değil. Gelişen İşletmeler
          Pazarı&apos;nın sunduğu esnek giriş kapısı, bağımsız denetim
          geçmişini erken planlayan ve kurumsallaşmasını sağlam bir
          zemine oturtan şirketler için gerçekçi bir büyüme yolu
          sunuyor. Sürecin başarısı, çoğu zaman izahname yazılmadan çok
          önce, şirketin yönetim yapısını ve mali disiplinini
          kurumsallaştırma kararıyla başlıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, kurumsallaşma
          danışmanlığından şirket değerlemesine, bağımsız denetim
          hazırlığından stratejik büyüme planlamasına kadar
          şirketinizin halka arza giden yolda ihtiyaç duyacağı
          hazırlığı tek noktadan yönetiyoruz.
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
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci ve KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">BAĞIMSIZ DENETİM • MALİ MÜŞAVİRLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bağımsız Denetim Eşik Değerleri 2026&apos;da Değişti: Yeni Kriterler Şirketinizi Nasıl Etkiliyor?</h3>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Limited şirket doğrudan halka arz yapabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Halka arz edilebilecek paylar yalnızca anonim şirketlere ait olabilir. Limited şirket olarak faaliyet gösteren işletmelerin önce anonim şirkete dönüşmesi gerekir; bu dönüşüm halka arz hazırlığının ilk adımlarından biridir."}},{"@type":"Question","name":"Şirketim kaç yıllık bağımsız denetim geçmişine sahip olmalı?","acceptedAnswer":{"@type":"Answer","text":"İzahname başvurusu için genel olarak başvuru öncesindeki son 2 yıla ait, SPK standardına uygun özel bağımsız denetimden geçmiş mali tabloların hazır olması bekleniyor. Şirketinizin bağımsız denetim kapsamına zaten girip girmediğini erkenden öğrenmek, bu hazırlığı önemli ölçüde hızlandırır."}},{"@type":"Question","name":"GİP'te işlem görmek Ana Pazar'dan daha mı kolay?","acceptedAnswer":{"@type":"Answer","text":"Evet, GİP Yönetmeliği başvurunun kabulü için sabit bir nitelik veya nicelik kriteri tanımlamaz; bu da onu Ana ve Yıldız Pazar'a kıyasla daha erişilebilir kılar. GİP'te en az 2 yıl işlem gören şirketler, büyüklük şartlarını sağladıklarında Ana veya Yıldız Pazar'a geçiş başvurusunda bulunabilirler."}},{"@type":"Question","name":"Halka arz fiyatı nasıl belirlenir?","acceptedAnswer":{"@type":"Answer","text":"Aracı kurum, şirketin DCF, çarpan/emsal şirket karşılaştırması gibi yöntemlerle yapılan bir şirket değerlemesine dayanarak bir fiyat tespit raporu hazırlar. Bu rapor, halka arz edilecek payların fiyat aralığının temelini oluşturur; nihai fiyat, talep toplama sürecindeki yatırımcı ilgisine göre bu aralık içinde netleşir."}},{"@type":"Question","name":"Halka arz süreci ortalama ne kadar sürer?","acceptedAnswer":{"@type":"Answer","text":"Süre; şirketin hazırlık düzeyine, bağımsız denetim geçmişinin hazır olup olmadığına ve SPK inceleme sürecine göre değişir. Kurumsal yönetim uyumu ve mali tablo hazırlığı tamamlanmış bir şirket için süreç genellikle birkaç ay içinde tamamlanabilirken, kurumsallaşma eksikleri olan şirketlerde hazırlık aşaması çok daha uzun sürebilir."}},{"@type":"Question","name":"Halka arz sonrasında şirketin ortaklık kontrolü kaybolur mu?","acceptedAnswer":{"@type":"Answer","text":"Genellikle hayır. Halka arz edilen pay oranı, pazar bazlı asgari halka açıklık şartlarını sağlayacak şekilde planlanır ve kurucu ortaklar çoğunlukla kontrol payını korur. Kontrol kaybı riski, tek bir büyük yatırımcıya değil geniş ve dağınık bir yatırımcı tabanına pay satıldığı için özel sermaye yatırımına göre daha sınırlıdır."}}]}) }}
      />
    </BlogLayout>
  );
}
