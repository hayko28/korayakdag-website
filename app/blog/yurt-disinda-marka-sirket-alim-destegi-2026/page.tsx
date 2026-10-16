import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yurt Dışında Marka Satın Alırsam Devlet Desteği Alabilir miyim? | Koray Akdağ",
  description: "Ticaret Bakanlığı'nın 5973 sayılı Karar madde 9 kapsamındaki Şirket ve Marka Alım Desteği, 7 Mart 2026'da 11007 sayılı Kararla kökten değişti. Marka alımında danışmanlık ve kredi faiz desteğinin neden kalktığı, kira/tanıtım desteğinin güncel oranları ve ileri teknoloji şirket alımındaki ayrı destek paketiyle 2026 güncel rehber.",
  keywords: [
    "yurt dışında marka satın alma desteği",
    "şirket ve marka alım desteği",
    "5973 sayılı karar",
    "Ticaret Bakanlığı marka alım desteği",
    "yurt dışı şirket satın alma teşviki",
    "ileri teknoloji şirket alımı desteği",
    "11007 sayılı karar",
    "marka alımı kredi faiz desteği",
    "yurt dışı birim kira desteği",
  ],
  alternates: {
    canonical: "/blog/yurt-disinda-marka-sirket-alim-destegi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yurt Dışında Marka Satın Alırsam Devlet Desteği Alabilir miyim? 2026 Şirket ve Marka Alım Desteği Rehberi"
      description="Ticaret Bakanlığı'nın 5973 sayılı İhracat Destekleri Hakkında Karar'ın 9. maddesinde düzenlenen Şirket ve Marka Alım Desteği, 7 Mart 2026 tarihli 11007 sayılı Cumhurbaşkanı Kararı ile kökten değişti. Sade bir marka alımında artık hangi destek kalemleri var, hangisi kalktı; ileri teknoloji şirket alımında neden çok daha yüksek bir destek paketi devreye giriyor; güncel oranlar ve başvuru süreciyle kapsamlı rehber."
      category="TİCARET BAKANLIĞI • ŞİRKET VE MARKA ALIM DESTEĞİ • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="yurt-disinda-marka-sirket-alim-destegi-2026"
      coverImage="https://images.unsplash.com/photo-1768076644388-b42d2e7aea16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Yurt Dışında Marka/Şirket Alımında Devlet Desteği Nasıl İşliyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ Destek, 5973 sayılı İhracat Destekleri Hakkında Karar&apos;ın 9. maddesinde düzenleniyor ve Ticaret Bakanlığı&apos;nın <strong>Şirket ve Marka Alım Desteği</strong> başlığı altında yürütülüyor.</li>
          <li>✔ 7 Mart 2026 tarihli ve 33189 sayılı Resmî Gazete&apos;de yayımlanan <strong>11007 sayılı Karar</strong> ile destek yapısı kökten değişti.</li>
          <li>✔ Sade bir <strong>marka alımında</strong> artık sadece yurt dışı birim <strong>kira/ofis desteği</strong> (yıllık 7,5 milyon TL&apos;ye kadar %50) ve <strong>tanıtım/pazarlama desteği</strong> (yıllık 9,5-15 milyon TL&apos;ye kadar %50) var.</li>
          <li>✔ Eskiden genel şirket/marka alımına da verilen <strong>danışmanlık desteği</strong> (yıllık 3 milyon TL) tamamen kaldırıldı; artık danışmanlık desteği sadece <strong>ileri teknolojiye sahip ve teknoloji transferi sağlayacak nitelikte bir şirketi</strong> satın alırsanız geçerli, üstelik limiti 28 milyon TL&apos;ye çıkarıldı.</li>
          <li>✔ Aynı şekilde <strong>kredi faiz desteği</strong> de artık yalnızca ileri teknoloji şirket alımında var (TL kredide 5 puan, dövizde 2 puan, toplam 171 milyon TL&apos;ye kadar); eskiden ayrı bir limitle var olan sade marka alımı faiz desteği kaldırıldı.</li>
          <li>✔ Başvurular İhracatçı Birliği üyeliği ve DYS kaydı şartıyla, çoğu kalemde harcamadan önce Ticaret Bakanlığı&apos;ndan ön onay alınarak yapılıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Destek Nedir, Hangi Karara Dayanıyor?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir, Temel Şartlar Nedir?
          </Link>
          <Link href="#oranlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 2026 Güncel Destek Kalemleri ve Oranları
          </Link>
          <Link href="#degisiklik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Mart 2026&apos;da Tam Olarak Ne Değişti?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci Nasıl İşliyor?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Resmî Kaynaklar
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
          1. Destek Nedir, Hangi Karara Dayanıyor?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye&apos;de üretim veya ticari faaliyet yürüten bir şirket,
          yurt dışına açılırken sıfırdan marka yaratmak yerine orada zaten
          bilinen bir şirketi veya markayı satın almayı tercih edebilir.
          Ticaret Bakanlığı, bu stratejiyi desteklemek için 5973 sayılı
          İhracat Destekleri Hakkında Karar&apos;ın 9. maddesinde{" "}
          <strong>Şirket ve Marka Alım Desteği</strong> adını verdiği ayrı bir
          destek kalemi işletiyor.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu destek, 17 Ağustos 2022 tarihli ve 5973 sayılı Cumhurbaşkanı
          Kararı ile yürürlüğe girdi. Ancak asıl kritik gelişme, 7 Mart 2026
          tarihli ve 33189 sayılı Resmî Gazete&apos;de yayımlanan{" "}
          <strong>11007 sayılı Cumhurbaşkanı Kararı</strong> ile yaşandı. Bu
          karar, madde 9&apos;u baştan sona yeniden yazarak destek kalemlerini
          değiştirdi: bazı yeni kalemler eklendi, bazı eski kalemler tamamen
          kaldırıldı. Bugün (2026 Ekim itibarıyla) yürürlükte olan hükümler,
          bu güncellenmiş hâlidir.
        </p>
        <p className="leading-8 text-gray-700">
          Uygulama usul ve esasları ise Ticaret Bakanlığı&apos;nın ayrıca
          yayımladığı <strong>Şirket ve Marka Alım Desteğine İlişkin
          Genelge</strong>&apos;de düzenleniyor. Bu genelge, Karar&apos;ın
          verdiği çerçeveyi; başvuru belgeleri, değerlendirme kriterleri ve
          ödeme usulü gibi uygulamaya dönük ayrıntılarla tamamlıyor.
        </p>
      </section>

      {/* 2. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir, Temel Şartlar Nedir?
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          5973 sayılı Karar kapsamındaki diğer tüm destek kalemlerinde olduğu
          gibi, Şirket ve Marka Alım Desteği için de iki temel ön şart var:
          şirketin üyesi olduğu <strong>İhracatçı Birliği&apos;ne kayıtlı</strong>{" "}
          olması ve <strong>Destek Yönetim Sistemi&apos;ne (DYS)</strong>{" "}
          kayıtlı olması. Bunun ötesinde, Genelge&apos;de yer alan birkaç
          önemli özel şart daha var:
        </p>
        <ul className="mb-8 ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>Danışmanlık giderlerinin desteklenebilmesi için, harcama yapılmadan önce Bakanlıktan <strong>ön onay</strong> alınması gerekiyor. Bakanlık bu aşamada satın alınacak şirketin/markanın uluslararasılaşmaya, ihracat artışına, marka bilinirliğine, pazar payına ve teknoloji transferine katkısını değerlendiriyor.</li>
          <li>Satın alınacak şirket veya markanın sahibi, destek başvurusunda bulunan şirketin <strong>ilişkili kişisi/kuruluşu</strong> ise başvuru desteklenmiyor. Yani bir grup şirketinin kendi yurt dışı iştirakini veya grup içi bir markayı &quot;satın almış&quot; gibi göstererek destek alması mümkün değil.</li>
          <li>İleri teknoloji şirket alımında kredi faiz desteği için, alım bedelinin ve kredi tutarının <strong>şirket değerleme raporu</strong>yla doğrulanması zorunlu. Bu rapor, TURQUALITY® yönetim danışmanlığı kapsamında yetkilendirilmiş firmalar gibi Bakanlıkça kabul edilen değerleme kuruluşları tarafından hazırlanıyor.</li>
        </ul>
      </section>

      {/* KARIŞTIRMAYIN KUTUSU */}
      <div className="mb-16 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
          ❓ &quot;Marka Alımı&quot; ile &quot;İleri Teknoloji Şirket Alımı&quot;nı Karıştırmayın
        </h3>
        <p className="mb-4 leading-8 text-gray-700">
          Bu konuda en sık yapılan hata, bütün destek kalemlerinin her türlü
          şirket veya marka alımında aynı şekilde geçerli olduğunu düşünmek.
          2026 değişikliğinden sonra bu artık doğru değil; destek, satın
          alınan varlığın niteliğine göre iki ayrı kategoriye ayrılıyor:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
          <li><strong>Sade bir marka veya şirket alımı</strong> (ileri teknoloji/teknoloji transferi niteliği taşımayan): Yalnızca yurt dışı birim kira/ofis desteği ve tanıtım/pazarlama desteği kapsar. Danışmanlık veya kredi faiz desteği <strong>artık yok</strong>.</li>
          <li><strong>İleri teknolojiye sahip ve teknoloji transferi sağlayacak nitelikte bir şirketin alımı</strong>: Kira ve tanıtım desteklerinin yanında, çok daha yüksek limitli danışmanlık desteği (28 milyon TL) ve kredi faiz desteği (171 milyon TL) de devreye giriyor. Bu kategori yalnızca <strong>şirket</strong> alımı için geçerli; sade bir marka alımı bu yüksek limitli pakete giremiyor.</li>
        </ul>
      </div>

      {/* 3. ORANLAR */}
      <section id="oranlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 2026 Güncel Destek Kalemleri ve Oranları
        </h2>
        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          A) Her İki Kategoride de Geçerli: Kira ve Tanıtım Desteği
        </h3>
        <div className="mb-10 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Kalemi</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Yıllık Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışı birim kira / paylaşımlı ofis üyeliği gideri</td>
                <td className="p-5 font-bold text-green-600">%50</td>
                <td className="p-5">7.500.000 TL (her birim başına)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tanıtım/pazarlama (birim bulunan ülke)</td>
                <td className="p-5 font-bold text-green-600">%50</td>
                <td className="p-5">9.500.000 TL (her ülke için)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Tanıtım/pazarlama (birim yok, marka tescilli ülkede)</td>
                <td className="p-5 font-bold text-green-600">%50</td>
                <td className="p-5">9.500.000 TL</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Tanıtım/pazarlama (hiç yurt dışı birimi olmayan şirket, marka tescilli)</td>
                <td className="p-5 font-bold text-green-600">%50</td>
                <td className="p-5">15.000.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-10 text-sm text-gray-500">
          Süre sınırları: tanıtım desteğinden en fazla 4 yıl, kira
          desteğinden her bir ülke için en fazla 4 yıl yararlanılabiliyor.
          Toplamda desteklenebilecek birim sayısı en fazla 25 ile sınırlı.
          Tanıtım desteğinde, birim bulunmayan ülkelerde yararlanabilmek için
          hem Türkiye&apos;de hem de ilgili ülkede marka tescil belgesi veya
          en az tescil başvurusu şart.
        </p>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          B) Sadece İleri Teknoloji Şirket Alımında Geçerli
        </h3>
        <div className="mb-6 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek Kalemi</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Üst Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Mali ve hukuki danışmanlık desteği</td>
                <td className="p-5 font-bold text-orange-600">%50</td>
                <td className="p-5">28.000.000 TL / yıl</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Kredi faiz desteği</td>
                <td className="p-5 font-bold text-orange-600">TL kredide 5 puan, döviz/dövize endeksli kredide 2 puan</td>
                <td className="p-5">171.000.000 TL (ödenen faizin %50&apos;sini aşamaz)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Faiz desteği, ilk faiz ödeme tarihinden itibaren 5 yıl içinde
          yapılan ödemelere uygulanıyor. Destek verilecek kredi tutarının
          hesabında, alınacak şirketin alım bedelinin azami %50&apos;si esas
          alınıyor. Bu kategorideki şirketlerden destek alanlar, Karar&apos;ın
          10, 11, 12, 15, 17, 18 ve 20. maddelerindeki bazı diğer
          desteklerden aynı anda yararlanamıyor; yani mükerrer destek
          engelleniyor.
        </p>
      </section>

      {/* 4. DEĞİŞİKLİK */}
      <section id="degisiklik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Mart 2026&apos;da Tam Olarak Ne Değişti?
        </h2>
        <p className="mb-8 leading-8 text-gray-700">
          Eski/yeni karşılaştırması, destekten yararlanmayı planlayan bir
          şirket için en kritik kısım. Çünkü önceki uygulamada mevcut olan
          bazı destekler, 11007 sayılı Karar ile tamamen kaldırıldı;
          bazılarıysa ilk defa getirildi.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              🔻 Kaldırılanlar
            </h3>
            <ul className="space-y-3 leading-7 text-gray-700">
              <li>Genel şirket/marka alımına verilen danışmanlık desteği (eskiden %50, yıllık 3 milyon TL) tamamen kaldırıldı.</li>
              <li>Sade marka alımına özel, ayrı limitli kredi faiz desteği (eskiden toplam 30 milyon TL) kaldırıldı.</li>
              <li>İleri teknoloji şirket alımına özel eski faiz desteği limiti (45 milyon TL) de kaldırılarak yerine tek ve daha yüksek bir limit getirildi.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              🔺 Yeni Eklenenler / Yükseltilenler
            </h3>
            <ul className="space-y-3 leading-7 text-gray-700">
              <li>Yurt dışı birim kira ve paylaşımlı ofis üyeliği desteği ilk defa kapsama alındı (yıllık 7,5 milyon TL/birim).</li>
              <li>Satın alınan marka/şirkete yönelik tanıtım ve pazarlama giderleri ilk defa kapsama alındı (yıllık 9,5-15 milyon TL).</li>
              <li>İleri teknoloji şirket alımında danışmanlık desteği limiti 7,5 milyon TL&apos;den 28 milyon TL&apos;ye, kredi faiz desteği limiti de (eski ayrı limitlerin toplamından) tek bir 171 milyon TL limitine yükseltildi.</li>
              <li>Tanıtım desteği için 4 yıl, kira desteği için ülke başına 4 yıl ve toplamda 25 birim şeklinde süre/birim sınırları netleştirildi.</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Özetle Bakanlık, kaynağı dağıtmak yerine yoğunlaştırdı: sade marka
          alımları artık daha çok operasyonel giderlerde (kira, tanıtım)
          desteklenirken, teknoloji transferi getiren şirket alımlarına çok
          daha büyük bir finansal destek paketi ayrıldı.
        </p>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci Nasıl İşliyor?
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">🏢</div>
            <h3 className="text-sm font-bold">1. Üyelik ve Kayıt</h3>
            <p className="mt-2 text-xs text-gray-600">İhracatçı Birliği üyeliği ve DYS kaydı tamamlanır</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">📝</div>
            <h3 className="text-sm font-bold">2. Ön Onay Başvurusu</h3>
            <p className="mt-2 text-xs text-gray-600">Danışmanlık giderleri için harcamadan önce Bakanlıktan ön onay alınır</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">📊</div>
            <h3 className="text-sm font-bold">3. Değerleme Raporu</h3>
            <p className="mt-2 text-xs text-gray-600">Kredi faiz desteği için yetkilendirilmiş firmadan şirket/marka değerleme raporu alınır</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">📂</div>
            <h3 className="text-sm font-bold">4. Belge Yükleme (EK-A1 - EK-A5)</h3>
            <p className="mt-2 text-xs text-gray-600">Genelge ekindeki başvuru formları DYS üzerinden doldurulup yüklenir</p>
          </div>
          <div className="rounded-xl border p-5 text-center shadow-sm">
            <div className="mb-3 text-3xl">💶</div>
            <h3 className="text-sm font-bold">5. İnceleme ve Ödeme</h3>
            <p className="mt-2 text-xs text-gray-600">İhracatçı Birliği ve Bakanlık incelemesi sonrası destek tutarı ödenir</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Genelge, her destek kalemi için ayrı bir başvuru eki (EK) öngörüyor:
          şirket alımına yönelik danışmanlık desteği için EK-A1, ileri
          teknoloji şirket alımına yönelik danışmanlık desteği için EK-A2,
          ileri teknoloji şirket alımına yönelik kredi faiz desteği ve şirket
          değerleme özet formu için EK-A3/EK-A3B, marka alımına yönelik kredi
          faiz desteği ve marka değerleme özet formu için EK-A4/EK-A4B, marka
          alımına yönelik danışmanlık desteği için ise EK-A5 kullanılıyor.
          Bu formların bir kısmı, 2026 değişikliğiyle kapsamı daralan eski
          destek kalemlerine ait olduğundan, başvuru öncesinde hangi formun
          hâlâ aktif destek kalemine karşılık geldiğinin güncel Genelge
          metninden teyit edilmesi önemli.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, &quot;ileri teknolojiye
            sahip ve teknoloji transferi sağlayacak nitelikte şirket&quot;
            tanımının sübjektif bir değerlendirme konusu olduğudur. Bu
            nitelik otomatik olarak kabul edilmiyor; Bakanlık, başvuruyu
            satın alınacak şirketin sahip olduğu teknolojinin niteliği,
            Türkiye&apos;ye transfer edilebilirliği ve katma değer
            potansiyeli üzerinden ayrı ayrı değerlendiriyor. Bu nedenle sade
            bir marka alımını &quot;ileri teknoloji şirket alımı&quot; gibi
            sunarak yüksek limitli danışmanlık/kredi faiz desteğine başvurmak
            büyük olasılıkla reddedilir; alımın teknoloji transferi boyutunun
            ön onay aşamasında somut gerekçe ve belgelerle ortaya konması
            gerekir.
          </p>
        </div>
      </section>

      {/* 6. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Satın alınacak şirket/marka ile başvuru sahibi şirket arasında ilişkili taraf ilişkisi varsa, başvuru desteklenmiyor.</li>
            <li>Danışmanlık giderlerinde, harcama yapılmadan önce ön onay alınması zorunlu; harcama sonrası geriye dönük başvuru yüksek ihtimalle kabul görmüyor.</li>
            <li>Sade bir marka alımında artık danışmanlık ve kredi faiz desteği olmadığını baştan netleştirmek, bütçe planlamasında hayal kırıklığını önler.</li>
            <li>Bu destek kalemlerinden yararlanan şirketler, Karar&apos;ın bazı diğer maddelerindeki desteklerden aynı anda faydalanamıyor; başvuru öncesi mükerrer destek sınırlamasının kontrol edilmesi gerekiyor.</li>
            <li>Oranlar ve limitler 11007 sayılı Kararla güncellendi; mevzuat bu alanda sık değişiyor, başvuru öncesinde Genelge&apos;nin ve Karar&apos;ın güncel hâlinin teyit edilmesi önemli.</li>
          </ul>
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
              <a
                href="https://ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karara-iliskin-genelgeler/sirket-ve-marka-alim-destegi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Ticaret Bakanlığı - Şirket ve Marka Alım Desteği (resmî sayfa)
              </a>
            </li>
            <li>
              <a
                href="https://www.resmigazete.gov.tr/eskiler/2026/03/20260307.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Resmî Gazete - 7 Mart 2026 tarih ve 33189 sayı (11007 sayılı Karar)
              </a>
            </li>
            <li>
              <a
                href="https://ticaret.gov.tr/data/5b868a8d13b87818a009d3b0/5973 Sayılı İhracat Destekleri Hakkında Karar 17.04.2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                5973 Sayılı İhracat Destekleri Hakkında Karar (Ticaret Bakanlığı resmî metin)
              </a>
            </li>
            <li>
              <a
                href="https://www.lexpera.com.tr/mevzuat/genelgeler/sirket-ve-marka-alim-destegine-iliskin-genelge-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                Şirket ve Marka Alım Desteğine İlişkin Genelge
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
              Yurt dışında sade bir marka satın alırsam danışmanlık desteği alabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 7 Mart 2026 tarihli 11007 sayılı Karar ile, sade şirket
              veya marka alımına verilen danışmanlık desteği tamamen
              kaldırıldı. Danışmanlık desteği artık yalnızca ileri
              teknolojiye sahip ve teknoloji transferi sağlayacak nitelikte
              bir şirketin alımında geçerli.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Marka alımında hangi destekler hâlâ geçerli?
            </h3>
            <p className="leading-8 text-gray-700">
              Satın alınan markaya ait yurt dışı biriminin kira/paylaşımlı
              ofis gideri (yıllık 7,5 milyon TL&apos;ye kadar %50) ve o
              markaya yönelik tanıtım/pazarlama giderleri (ülke başına yıllık
              9,5-15 milyon TL&apos;ye kadar %50) destekleniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İleri teknoloji şirket alımında kredi faiz desteği nasıl hesaplanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Kullanılan kredinin Türk Lirası cinsinden olması halinde 5
              puan, döviz veya dövize endeksli kredilerde 2 puan destek
              veriliyor; toplamda yıllık 171 milyon TL&apos;ye kadar, ödenen
              faiz giderinin %50&apos;sini aşmamak kaydıyla. Destek, ilk faiz
              ödeme tarihinden itibaren 5 yıl süreyle uygulanıyor ve kredi
              tutarının hesabında alım bedelinin azami %50&apos;si esas
              alınıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir şirketin yurt dışı iştirakini veya grup içi markayı satın almak bu destekten yararlanır mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Satın alınacak şirket veya marka, başvuru sahibinin
              ilişkili kişisi/kuruluşu ise destek verilmiyor. Bu kural, grup
              içi devirlerin destek amacıyla kullanılmasını önlüyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bu destek, Yurt Dışı Marka Tescil Desteği ile aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, ikisi farklı destek kalemleri. Yurt Dışı Marka Tescil
              Desteği, kendi markanızı yurt dışında tescil ettirme masraflarını
              karşılar. Şirket ve Marka Alım Desteği ise başka birine ait,
              zaten yurt dışında var olan bir şirketi veya markayı satın alma
              sürecindeki kira, tanıtım, danışmanlık ve kredi faiz giderlerini
              kapsar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Toplamda kaç yurt dışı birim için bu destekten yararlanabilirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Kira desteğinden her bir ülke için en fazla 4 yıl, tanıtım
              desteğinden en fazla 4 yıl yararlanılabiliyor ve toplamda
              desteklenebilecek birim sayısı en fazla 25 ile sınırlı.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Yurt Dışında Şirket veya Marka Alımınızın Destek Uygunluğunu Birlikte Değerlendirelim
          </h3>
          <p className="leading-8 text-gray-700">
            Satın almayı planladığınız şirket veya markanın hangi destek
            kategorisine girdiğini (sade alım mı, ileri teknoloji şirket
            alımı mı) netleştirmek, ön onay başvurusunu doğru belgelerle
            hazırlamak ve değerleme sürecini yönetmek, alım kararından önce
            planlanması gereken bir süreç.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Yurt dışı şirket/marka alımı ve sonrasındaki muhasebe ile uyum
              süreçlerinizi birlikte planlamamız için bizimle iletişime
              geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 9. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket ve Marka Alım Desteği, Mart 2026&apos;dan sonra iki ayrı
          yola ayrıldı. Sade bir marka veya şirket alımı artık sınırlı ama
          somut bir kira/tanıtım desteğiyle karşılanırken, teknoloji transferi
          getiren bir şirket alımı çok daha büyük bir danışmanlık ve kredi
          faiz paketiyle destekleniyor. Bu ayrımı bilmeden yapılan bir
          bütçe planlaması, başvuru aşamasında ciddi bir hayal kırıklığına
          yol açabilir.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Koray Akdağ / Sistem Global Danışmanlık olarak, yurt dışında
          şirket veya marka satın almayı planlayan işletmelere; hangi destek
          kategorisine girdiklerinin netleştirilmesinden, ön onay ve
          değerleme sürecinin yönetilmesine, kuruluş sonrası muhasebe ve
          raporlama yükümlülüklerine kadar tek noktadan danışmanlık
          sağlıyoruz.
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
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&amp;A • DUE DILIGENCE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Satın Alma Öncesi Durum Tespiti</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&amp;A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri, Süreci</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Yurt dışında sade bir marka satın alırsam danışmanlık desteği alabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 7 Mart 2026 tarihli 11007 sayılı Karar ile, sade şirket veya marka alımına verilen danışmanlık desteği tamamen kaldırıldı. Danışmanlık desteği artık yalnızca ileri teknolojiye sahip ve teknoloji transferi sağlayacak nitelikte bir şirketin alımında geçerli."}},{"@type":"Question","name":"Marka alımında hangi destekler hâlâ geçerli?","acceptedAnswer":{"@type":"Answer","text":"Satın alınan markaya ait yurt dışı biriminin kira/paylaşımlı ofis gideri (yıllık 7,5 milyon TL'ye kadar %50) ve o markaya yönelik tanıtım/pazarlama giderleri (ülke başına yıllık 9,5-15 milyon TL'ye kadar %50) destekleniyor."}},{"@type":"Question","name":"İleri teknoloji şirket alımında kredi faiz desteği nasıl hesaplanıyor?","acceptedAnswer":{"@type":"Answer","text":"Kullanılan kredinin Türk Lirası cinsinden olması halinde 5 puan, döviz veya dövize endeksli kredilerde 2 puan destek veriliyor; toplamda yıllık 171 milyon TL'ye kadar, ödenen faiz giderinin %50'sini aşmamak kaydıyla. Destek, ilk faiz ödeme tarihinden itibaren 5 yıl süreyle uygulanıyor ve kredi tutarının hesabında alım bedelinin azami %50'si esas alınıyor."}},{"@type":"Question","name":"Bir şirketin yurt dışı iştirakini veya grup içi markayı satın almak bu destekten yararlanır mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Satın alınacak şirket veya marka, başvuru sahibinin ilişkili kişisi/kuruluşu ise destek verilmiyor. Bu kural, grup içi devirlerin destek amacıyla kullanılmasını önlüyor."}},{"@type":"Question","name":"Bu destek, Yurt Dışı Marka Tescil Desteği ile aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır, ikisi farklı destek kalemleri. Yurt Dışı Marka Tescil Desteği, kendi markanızı yurt dışında tescil ettirme masraflarını karşılar. Şirket ve Marka Alım Desteği ise başka birine ait, zaten yurt dışında var olan bir şirketi veya markayı satın alma sürecindeki kira, tanıtım, danışmanlık ve kredi faiz giderlerini kapsar."}},{"@type":"Question","name":"Toplamda kaç yurt dışı birim için bu destekten yararlanabilirim?","acceptedAnswer":{"@type":"Answer","text":"Kira desteğinden her bir ülke için en fazla 4 yıl, tanıtım desteğinden en fazla 4 yıl yararlanılabiliyor ve toplamda desteklenebilecek birim sayısı en fazla 25 ile sınırlı."}}]}) }}
      />
    </BlogLayout>
  );
}
