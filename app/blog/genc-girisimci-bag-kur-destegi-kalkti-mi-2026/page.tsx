import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Genç Girişimci Bağ-Kur Desteği Kalktı mı? 2026 Rehberi | Koray Akdağ",
  description: "7566 sayılı Kanun ile genç girişimcilerin 1 yıllık Bağ-Kur prim desteği 1 Ocak 2026'da kaldırıldı. Gelir vergisi istisnası sürüyor mu, 2026 tutarı ne kadar? Şartlar ve geçiş dönemiyle rehber.",
  keywords: [
    "genç girişimci bağ-kur desteği kalktı mı",
    "genç girişimci kazanç istisnası 2026",
    "7566 sayılı kanun genç girişimci",
    "genç girişimci vergi muafiyeti şartları",
    "bağ-kur prim desteği kaldırıldı mı",
    "genç girişimci 400.000 TL istisna",
    "29 yaş altı girişimci vergi istisnası",
  ],
  alternates: {
    canonical: "/blog/genc-girisimci-bag-kur-destegi-kalkti-mi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Genç Girişimcilerde Bağ-Kur Prim Desteği 2026'da Kalktı mı? Gelir Vergisi İstisnasıyla Karıştırmayın"
      description="7566 sayılı Kanun'un 23. maddesiyle, 29 yaşını doldurmamış girişimcilere sağlanan 1 yıllık Bağ-Kur prim desteği 1 Ocak 2026 itibarıyla yürürlükten kaldırıldı. Gelir vergisi istisnası ise 2026'da 400.000 TL'lik tutarıyla sürüyor. İki ayrı teşviğin farkı, geçiş dönemindeki tartışma ve şartlarıyla güncel rehber."
      category="VERGİ VE SGK • GENÇ GİRİŞİMCİ • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="genc-girisimci-bag-kur-destegi-kalkti-mi-2026"
      coverImage="https://images.unsplash.com/photo-1753351052617-62818ffc9173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          19 Aralık 2025 tarihli ve 33112 sayılı Resmî Gazete&apos;de
          yayımlanan 7566 sayılı Kanun&apos;un 23. maddesiyle:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Genç girişimcilere sağlanan <strong>1 yıllık Bağ-Kur prim desteği</strong> (5510 sayılı Kanun m.81/1-k), 1 Ocak 2026 itibarıyla yürürlükten kalktı.</li>
          <li>✔ <strong>Gelir vergisi istisnası</strong> (GVK mükerrer m.20) bu değişiklikten etkilenmedi, 2026&apos;da da uygulanıyor.</li>
          <li>✔ 2026 kazançları için istisna tutarı, gelir vergisi tarifesinin ikinci diliminin üst sınırına paralel olarak <strong>400.000 TL</strong>&apos;dir.</li>
          <li>✔ Bağ-Kur&apos;a (4/b) kayıt zorunluluğu kalkmadı; kalkan yalnızca ilk yılın prim bedelinin devlet tarafından karşılanmasıydı.</li>
          <li>✔ 31 Aralık 2025&apos;ten önce ilk defa Bağ-Kur&apos;lu olan girişimciler, kazanılmış hak kapsamında 12 aylık desteği almaya devam ediyor; ancak SGK uygulamasında bu noktada tartışma var.</li>
          <li>✔ İstisna yalnızca gerçek kişi mükellefleri (şahıs işletmesi/adi ortaklık) kapsıyor; limited ve anonim şirket ortakları bu düzenlemeden yararlanamıyor.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#iki-teshvik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Genç Girişimciye Sağlanan İki Ayrı Teşvik
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Karıştırmayın: Vergi İstisnası ile Prim Desteği Farklı Şeyler
          </Link>
          <Link href="#7566-kanun" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. 7566 Sayılı Kanun Ne Değiştirdi?
          </Link>
          <Link href="#gecis-donemi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Geçiş Dönemi: Kim Etkileniyor, Kim Etkilenmiyor?
          </Link>
          <Link href="#vergi-istisnasi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Gelir Vergisi İstisnası: Şartlar ve 2026 Tutarı
          </Link>
          <Link href="#bagkur-kayit" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Bağ-Kur Kaydı Hâlâ Zorunlu, Kalkan Sadece Sübvansiyon
          </Link>
          <Link href="#kimler-yararlanamaz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler Yararlanamıyor?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Bildirim Süreci Nasıl İşliyor?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
          <Link href="#biz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Kuruluş ve Sonrasını Biz Yönetiyoruz
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. İKİ AYRI TEŞVİK */}
      <section id="iki-teshvik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Genç Girişimciye Sağlanan İki Ayrı Teşvik
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de ilk kez kendi işini kuran ve işe başlama
          tarihinde 29 yaşını doldurmamış kişilere, uzun yıllardır iki
          farklı kanundan kaynaklanan iki ayrı avantaj tanınıyordu. Birincisi,
          193 sayılı Gelir Vergisi Kanunu&apos;nun mükerrer 20. maddesine
          dayanan ve kazancın belirli bir tutara kadarki kısmını gelir
          vergisinden istisna tutan <strong>vergi istisnası</strong>.
          İkincisi, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası
          Kanunu&apos;nun 81. maddesinin birinci fıkrasının (k) bendine
          dayanan ve ilk yılın Bağ-Kur primini Hazine&apos;nin karşılamasını
          sağlayan <strong>prim desteği</strong>.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Ekim 2026 itibarıyla bu ikisinden yalnızca biri hayatta.
          19 Aralık 2025&apos;te yayımlanan ve çoğunlukla vergi kanunlarında
          değişiklik yapan 7566 sayılı Kanun, içine sıkıştırdığı tek bir
          cümleyle ikincisini sona erdirdi. Ancak haberlerde ve sosyal
          medyada &quot;genç girişimci desteği kalktı&quot; başlığıyla
          dolaşan bu değişiklik, çoğu zaman hangi desteğin kalktığı
          belirtilmeden paylaşılıyor ve girişimcilerin gelir vergisi
          istisnasının da bittiğini düşünmesine yol açıyor. Bu yanlış
          anlaşılma, hiç gerekmediği hâlde vergi dairesine gidip
          istisnadan vazgeçen ya da yanlış beyanname veren girişimcilere
          mal olabiliyor.
        </p>
      </section>

      {/* 2. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Karıştırmayın: Vergi İstisnası ile Prim Desteği Farklı Şeyler
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ İki Ayrı Hukuki Dayanak, İki Ayrı Kader
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Gelir vergisi istisnası (GVK mükerrer m.20)
              </p>
              <p className="text-gray-700">
                Kazancın belirli bir tutara kadarki kısmının gelir
                vergisinden istisna tutulmasıdır. 2026&apos;da da
                uygulanmaya devam ediyor; 7566 sayılı Kanun bu maddeye
                dokunmadı.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Bağ-Kur prim desteği (5510 m.81/1-k)
              </p>
              <p className="text-gray-700">
                İlk yılın Bağ-Kur primini devletin karşılamasıdır. 7566
                sayılı Kanun&apos;un 23. maddesiyle 1 Ocak 2026 itibarıyla
                yürürlükten kaldırıldı.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Pratikte en sık karşılaşılan hata, bu iki kalemin tek bir
            &quot;genç girişimci desteği&quot; sanılması. Oysa biri
            vergi dairesinin, diğeri SGK&apos;nın uyguladığı, ayrı
            kanunlara dayanan ve bağımsız şekilde değişebilen iki farklı
            mekanizma. 1 Ocak 2026&apos;dan sonra iş kuran bir girişimci,
            kazancının 400.000 TL&apos;ye kadarki kısmı için hâlâ gelir
            vergisi ödemeyecek, ancak Bağ-Kur primini artık kendi
            cebinden karşılamak zorunda.
          </p>
        </div>
      </section>

      {/* 3. 7566 SAYILI KANUN */}
      <section id="7566-kanun" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. 7566 Sayılı Kanun Ne Değiştirdi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          &quot;Vergi Kanunları ile Bazı Kanun ve Kanun Hükmünde
          Kararnamelerde Değişiklik Yapılmasına Dair Kanun&quot; başlıklı
          7566 sayılı Kanun, 4 Aralık 2025&apos;te TBMM&apos;de kabul
          edildi ve 19 Aralık 2025 tarihli, 33112 sayılı Resmî
          Gazete&apos;de yayımlandı. 39 maddelik kanunun büyük bölümü
          vergi mevzuatına ilişkin değişiklikler içeriyor, ancak 23.
          maddesiyle 5510 sayılı Kanun&apos;un 81. maddesinde de
          düzenleme yapılıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          23. madde, 81. maddenin birinci fıkrasındaki genel sigorta
          primi oranlarını da güncelliyor (işveren hissesi %11&apos;den
          %12&apos;ye, toplam oran %20&apos;den %21&apos;e çıkıyor) ve
          aynı fıkranın <strong>(k) bendini doğrudan yürürlükten
          kaldırıyor</strong>. İşte genç girişimcilerin bir yıl boyunca
          prim ödemeden Bağ-Kur&apos;lu sayılmasını sağlayan hüküm, tam
          olarak bu (k) bendiydi. Kanunun 38. maddesine göre bu
          değişiklik <strong>2026 yılı Ocak ayı başında</strong>, yani 1
          Ocak 2026&apos;da yürürlüğe girdi.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kanun metninde genç girişimcilere veya Bağ-Kur&apos;a tek
            başına ayrılmış bir bölüm yok; değişiklik, genel sigorta
            prim oranlarının güncellendiği aynı maddenin içine
            sıkıştırılmış tek bir ibareyle yapıldı. Bu da değişikliğin
            ilk aylarda çoğu yeni girişimci ve hatta bazı mali
            müşavirler tarafından gözden kaçmasının başlıca sebebi.
          </p>
        </div>
      </section>

      {/* 4. GEÇİŞ DÖNEMİ */}
      <section id="gecis-donemi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Geçiş Dönemi: Kim Etkileniyor, Kim Etkilenmiyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kanun koyucu, yürürlükten kaldırma hükmünü 1 Ocak 2026&apos;dan
          itibaren işe başlayanlar için geçerli kılmış sayılıyor; genel
          hukuk ilkesi olan kanunların geriye yürümezliği de bu yönde
          işliyor. Buna göre:
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-green-700">
              ✅ 31 Aralık 2025&apos;e kadar ilk kez Bağ-Kur&apos;lu olanlar
            </h3>
            <p className="text-gray-700">
              Önceki hüküm hâlâ işe başlama tarihlerinde yürürlükte
              olduğundan, 12 aylık prim desteğini kazanılmış hak olarak
              almaya devam etmeleri gerekir.
            </p>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-red-700">
              ⚠️ 1 Ocak 2026 ve sonrasında ilk kez Bağ-Kur&apos;lu olanlar
            </h3>
            <p className="text-gray-700">
              Bağ-Kur primini işe başladıkları ilk aydan itibaren
              kendileri ödüyor; devlet desteği bu grup için artık
              uygulanmıyor.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Uygulamada en çok karışıklık
            yaşanan nokta, 2025 sonunda desteği almaya başlamış ve 12
            aylık süresi henüz dolmamış girişimcilerin durumu. Kanunda bu
            kişileri koruyan açık bir geçiş hükmü bulunmaması, bazı SGK
            birimlerinin süresi dolmamış desteği durdurma uygulamasına
            yol açtığı yönünde şikâyetlerin gündeme gelmesine neden oldu.
            Bu, henüz yargı kararlarıyla netleşmemiş, tartışmalı bir
            konu. 2025&apos;in son çeyreğinde Bağ-Kur&apos;lu olan ve
            halen destek süresi içinde olduğunu düşünen bir girişimcinin,
            kendi dosyasındaki prim tahakkuklarını e-Devlet üzerinden
            düzenli kontrol etmesi ve beklenmedik bir borç çıkması
            hâlinde itiraz hakkını kullanması önemli.
          </p>
        </div>
      </section>

      {/* 5. VERGİ İSTİSNASI */}
      <section id="vergi-istisnasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Gelir Vergisi İstisnası: Şartlar ve 2026 Tutarı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          GVK mükerrer 20. madde kapsamındaki istisna, ticari, zirai veya
          mesleki faaliyeti nedeniyle adına <strong>ilk defa</strong>{" "}
          gelir vergisi mükellefiyeti tesis edilen ve mükellefiyet
          başlangıç tarihi itibarıyla <strong>29 yaşını
          doldurmamış</strong> tam mükellef gerçek kişileri kapsıyor.
          Faaliyete başlanılan takvim yılından itibaren{" "}
          <strong>3 vergilendirme dönemi</strong> boyunca uygulanıyor.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Temel Şartlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>İşe başlamanın kanuni süresi içinde vergi dairesine bildirilmiş olması.</li>
            <li>İşin bizzat kendisi tarafından sevk ve idare edilmesi veya kendi işinde bilfiil çalışılması.</li>
            <li>Faaliyetin adi ortaklık veya şahıs şirketi bünyesinde yürütülmesi hâlinde tüm ortakların işe başlama tarihinde bu şartları taşıması.</li>
            <li>Ölüm nedeniyle eş ve çocuklar tarafından devralınan işler hariç, mevcut bir işletmenin veya mesleki faaliyetin yakın hısımlardan devralınmamış olması.</li>
          </ul>
        </div>
        <p className="mt-10 mb-6 leading-8 text-gray-700">
          İstisna tutarı sabit bir rakam değil; her yıl Gelir Vergisi
          Kanunu&apos;nun 103. maddesindeki tarifenin ikinci diliminin
          üst sınırına eşitleniyor. 31 Aralık 2025 tarihli ve 33124
          sayılı (5. Mükerrer) Resmî Gazete&apos;de yayımlanan Gelir
          Vergisi Genel Tebliği&apos;yle belirlenen 2026 tarifesinde bu
          sınır <strong>400.000 TL</strong>. Yani 2026&apos;da elde
          edilen ticari, zirai veya mesleki kazancın 400.000 TL&apos;ye
          kadarki kısmı, şartları taşıyan genç girişimci için gelir
          vergisinden istisna.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Önemli bir nokta: bu istisna yalnızca <strong>gerçek kişi</strong>{" "}
            mükellefleri kapsıyor. Gelir Vergisi Kanunu&apos;ndaki bir
            düzenleme olduğu için, kurumlar vergisi mükellefi olan
            limited ve anonim şirket kurucuları/ortakları bu istisnadan
            yararlanamıyor. Şirketinizi hangi türde kuracağınıza karar
            verirken, genç girişimci istisnasından yararlanmak
            istiyorsanız bunun yalnızca şahıs işletmesi veya adi
            ortaklık seçeneğinde mümkün olduğunu göz önünde bulundurmanız
            gerekir.
          </p>
        </div>
      </section>

      {/* 6. BAĞ-KUR KAYDI ZORUNLU */}
      <section id="bagkur-kayit" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Bağ-Kur Kaydı Hâlâ Zorunlu, Kalkan Sadece Sübvansiyon
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Burada da ayrı bir karışıklık noktası var. Şahıs işletmesi
          açan bir kişinin 5510 sayılı Kanun&apos;un 4/1-b maddesi
          kapsamında Bağ-Kur&apos;lu sayılması zaten kanuni bir
          zorunluluk ve bu zorunluluk hiç değişmedi. 7566 sayılı
          Kanun&apos;un kaldırdığı şey, bu zorunlu kaydın{" "}
          <strong>ilk 12 aylık priminin devlet tarafından
          ödenmesiydi</strong>; kaydın kendisi değil.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Durum</th>
                <th className="p-5">31 Aralık 2025&apos;e Kadar İşe Başlayan</th>
                <th className="p-5">1 Ocak 2026&apos;dan Sonra İşe Başlayan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Bağ-Kur&apos;a (4/b) kayıt zorunluluğu</td>
                <td className="p-5">Var</td>
                <td className="p-5">Var</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İlk 12 ayın Bağ-Kur primi</td>
                <td className="p-5">Hazine karşılar, cepten ödeme yok</td>
                <td className="p-5">Kendisi öder</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Gelir vergisi istisnası (3 yıl, 2026&apos;da 400.000 TL)</td>
                <td className="p-5">Devam ediyor</td>
                <td className="p-5">Devam ediyor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Rakamsal olarak bakıldığında, 2026 asgari ücreti (33.030 TL)
          üzerinden hesaplanan asgari Bağ-Kur (4/b) primi aylık
          yaklaşık <strong>11.800 TL</strong> civarında seyrediyor; yıllık
          bazda bu, yaklaşık 140.000 TL&apos;lik ek bir nakit çıkışı
          anlamına geliyor. Önceden bu tutarın tamamı devlet tarafından
          karşılanırken, 1 Ocak 2026&apos;dan sonra iş kuran bir genç
          girişimci için bu artık işin ilk yılındaki önemli bir sabit
          giderdir ve nakit akışı planlamasına dahil edilmelidir. Kesin
          güncel tutar, e-Devlet üzerindeki 4/b prim sorgulama ekranından
          teyit edilmelidir.
        </p>
      </section>

      {/* 7. KİMLER YARARLANAMIYOR */}
      <section id="kimler-yararlanamaz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler Yararlanamıyor?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Limited/anonim şirket ortakları</p>
            <p className="mt-2 text-sm text-gray-600">Kurumlar vergisi mükellefi oldukları için GVK mükerrer 20 kapsamı dışında kalırlar.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Daha önce bir işletme sahibi olmuş kişiler</p>
            <p className="mt-2 text-sm text-gray-600">İstisna &quot;ilk defa&quot; mükellefiyet tesis edenlere tanınır; ikinci kez şahıs işletmesi açanlar yeniden yararlanamaz.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">Yakın hısımdan işi devralanlar</p>
            <p className="mt-2 text-sm text-gray-600">Ölüm nedeniyle eş/çocuklara geçen işler hariç, mevcut bir işi yakın akrabadan devralanlar kapsam dışıdır.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm">
            <p className="font-semibold text-gray-800">29 yaşını doldurmuş olanlar</p>
            <p className="mt-2 text-sm text-gray-600">Mükellefiyet başlangıç tarihinde 29 yaşını doldurmuş olmak, her iki teşvik için de kapsam dışı kalma sebebidir.</p>
          </div>
        </div>
      </section>

      {/* 8. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Bildirim Süreci Nasıl İşliyor?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Gelir vergisi istisnası için ayrı bir başvuru formu doldurulmuyor;
          süreç işe başlama bildirimiyle birlikte otomatik işliyor:
        </p>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İşe Başlama Bildirimi</h3>
              <p className="text-gray-700">Vergi dairesine veya yetkili meslek odası/birliği aracılığıyla yasal süresinde işe başlama bildirimi yapılır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Yaş ve İlk Mükellefiyet Kontrolü</h3>
              <p className="text-gray-700">Vergi dairesi, mükellefin 29 yaşını doldurup doldurmadığını ve daha önce mükellefiyetinin bulunup bulunmadığını sistem üzerinden kontrol eder.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Bağ-Kur (4/b) Tescili</h3>
              <p className="text-gray-700">İşe başlama bildirimiyle birlikte SGK&apos;ya 4/b sigortalılık kaydı otomatik olarak açılır; 1 Ocak 2026 sonrası için prim tahakkuku girişimciye yansıtılır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Yıllık Gelir Vergisi Beyannamesi</h3>
              <p className="text-gray-700">Takip eden yılın Mart ayında verilen yıllık gelir vergisi beyannamesinde istisna tutarı düşülerek vergi matrahı hesaplanır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">3 Yıl Boyunca Tekrar</h3>
              <p className="text-gray-700">Şartlar devam ettiği sürece, faaliyete başlanılan yıldan itibaren 3 vergilendirme dönemi boyunca istisna her yıl yeniden uygulanır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Vergi istisnasının devam ettiğini doğrulamadan, yanlış bilgiyle istisnadan vazgeçmeyin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 1 Ocak 2026 sonrası iş kuruyorsanız, ilk 12 ayın Bağ-Kur primini bütçenize dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İstisnadan yararlanmak istiyorsanız şirket türünüzü şahıs işletmesi/adi ortaklık olarak kurmanız gerektiğini unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 2025 sonunda işe başlayıp destek süresi devam edenler, prim tahakkuklarını düzenli kontrol etsin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İstisna yalnızca bir kez kullanılabilir; daha önce mükellefiyeti olan biri yeniden yararlanamaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kesin güncel rakamları (prim tutarı, istisna tutarı) başvuru öncesi e-Devlet ve vergi dairenizden teyit edin
          </div>
        </div>
      </section>

      {/* 10. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Şirketinizi
          etkileyebilecek kesin rakam ve şartlar için tam metinlerin
          kontrol edilmesini öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2025/12/20251219-1-1.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              19 Aralık 2025 tarihli ve 33112 sayılı Resmî Gazete
            </a>{" "}
            (7566 sayılı Kanun&apos;un tam metni, m.23 ve m.38)
          </li>
          <li>
            193 sayılı Gelir Vergisi Kanunu, mükerrer madde 20 (Genç girişimcilerde kazanç istisnası)
          </li>
          <li>
            5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu, madde 81 (yürürlükten kaldırılan (k) bendi)
          </li>
          <li>
            <a href="https://www.gib.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Gelir İdaresi Başkanlığı (gib.gov.tr)
            </a>{" "}
            (2026 yılı Gelir Vergisi Genel Tebliği, 103. madde tarifesi)
          </li>
          <li>
            <a href="https://www.sgk.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Sosyal Güvenlik Kurumu (sgk.gov.tr)
            </a>{" "}
            (4/b sigortalılık ve prim tutarları)
          </li>
        </ul>
      </section>

      {/* 11. BİZ */}
      <section id="biz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Kuruluş ve Sonrasını Biz Yönetiyoruz
        </h2>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Şahıs İşletmesi Kuruluşundan Bordroya Tek Elden
          </h3>
          <p className="leading-8 text-gray-700">
            29 yaşını doldurmamış bir girişimci olarak şahıs işletmenizin
            kuruluşunu, vergi dairesi işe başlama bildirimini, Bağ-Kur
            tescilini ve sonrasındaki muhasebe/beyanname süreçlerinizi
            Koray Akdağ / Sistem Global Danışmanlık olarak uçtan uca
            yürütüyoruz. Gelir vergisi istisnasından doğru şekilde
            yararlanmanızı, 2026&apos;dan itibaren kendi karşılayacağınız
            Bağ-Kur primini de hesaba katarak gerçekçi bir nakit akışı
            planlaması yapmanızı sağlıyoruz. Ayrı bir yerel mali müşavir
            aramanıza gerek kalmadan, kuruluş ve sonrasındaki tüm süreç
            tek noktadan yürüyor.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Girişiminizin kuruluşunu ve vergi/SGK durumunuzu birlikte
              değerlendirmek için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 12. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Genç girişimci desteği tamamen kalktı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Yalnızca 1 yıllık Bağ-Kur prim desteği (5510 m.81/1-k)
              1 Ocak 2026 itibarıyla kaldırıldı. Gelir vergisi istisnası
              (GVK mükerrer m.20) 2026&apos;da da yürürlükte ve kazancın
              400.000 TL&apos;ye kadarki kısmını vergiden muaf tutmaya
              devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da iş kuran bir genç girişimci hiç devlet desteği almıyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Bağ-Kur primi için devlet desteği almıyor, bunu kendisi
              ödüyor. Ancak gelir vergisi istisnasından hâlâ yararlanıyor
              ve ayrıca KOSGEB&apos;in nakit destekli Girişimci Destek
              Programı gibi farklı mekanizmalardan da (şartları
              taşıması hâlinde) ayrıca başvuru yapabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aralık 2025&apos;te Bağ-Kur&apos;lu oldum, desteğim kesilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Kanunların geriye yürümezliği ilkesine göre kesilmemesi
              gerekir ve 12 aylık desteğinizi almaya devam etmeniz
              beklenir. Ancak bu konuda SGK uygulamasında tartışma ve
              bölgesel farklılıklar bildirildiğinden, prim
              tahakkuklarınızı e-Devlet üzerinden düzenli kontrol etmeniz
              ve bir sorun görürseniz itiraz etmeniz önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Limited şirket kursam genç girişimci istisnasından yararlanabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Gelir vergisi istisnası, Gelir Vergisi Kanunu&apos;na
              dayandığı için yalnızca gerçek kişi mükellefleri (şahıs
              işletmesi, adi ortaklık) kapsar. Limited ve anonim şirket
              ortakları kurumlar vergisi mükellefi sayıldığından bu
              istisnadan yararlanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              2026&apos;da aylık Bağ-Kur primi ne kadar ödenecek?
            </h3>
            <p className="leading-8 text-gray-700">
              2026 asgari ücreti (33.030 TL) üzerinden hesaplanan asgari
              4/b Bağ-Kur primi yaklaşık 11.800 TL/ay civarındadır.
              Düzenli ödeyenlere uygulanan indirim ve matrahınıza göre bu
              tutar değişebilir; kesin rakamı e-Devlet üzerindeki 4/b
              prim sorgulama ekranından teyit etmeniz gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Gelir vergisi istisnası kaç yıl ve hangi tutara kadar uygulanır?
            </h3>
            <p className="leading-8 text-gray-700">
              Faaliyete başlanılan takvim yılından itibaren 3 vergilendirme
              dönemi boyunca uygulanır. Tutar her yıl değişir; o yılın
              gelir vergisi tarifesindeki ikinci dilimin üst sınırına
              eşittir. 2026 kazançları için bu sınır 400.000 TL&apos;dir.
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
          2026 girişimciler için iki ayrı mesaj taşıyor. İyi haber, gelir
          vergisi istisnasının sürmesi ve 400.000 TL&apos;ye kadarki
          kazancın hâlâ vergi dışı kalması. Dikkat edilmesi gereken haber
          ise, ilk yılın Bağ-Kur primini artık devletin değil
          girişimcinin kendisinin ödeyecek olması. Bu iki kalemi
          birbirine karıştırmadan, hangi desteğin sürdüğünü ve hangi
          maliyetin yeni eklendiğini doğru bilerek bütçe planlaması
          yapmak, özellikle sermayesi sınırlı yeni girişimciler için
          belirleyici olacak.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şahıs işletmenizin kuruluşundan vergi istisnasının doğru
          uygulanmasına, Bağ-Kur sürecinin takibinden sonraki yılların
          beyannamelerine kadar tüm süreci Koray Akdağ / Sistem Global
          Danışmanlık olarak birlikte planlayabiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı Nedir?</h3>
          </Link>
          <Link
            href="/blog/sgk-tesvikleri-2026-hangi-isverenler-hangi-prim-destegi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SGK TEŞVİKLERİ • BORDRO • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">SGK Teşvikleri 2026: Hangi İşverenler Hangi Prim Desteğinden Yararlanabilir?</h3>
          </Link>
          <Link
            href="/blog/sahis-limited-anonim-sirket-karsilastirma"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • KARŞILAŞTIRMA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şahıs, Limited ve Anonim Şirket Karşılaştırması</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Genç girişimci desteği tamamen kalktı mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Yalnızca 1 yıllık Bağ-Kur prim desteği (5510 m.81/1-k) 1 Ocak 2026 itibarıyla kaldırıldı. Gelir vergisi istisnası (GVK mükerrer m.20) 2026'da da yürürlükte ve kazancın 400.000 TL'ye kadarki kısmını vergiden muaf tutmaya devam ediyor."}},{"@type":"Question","name":"2026'da iş kuran bir genç girişimci hiç devlet desteği almıyor mu?","acceptedAnswer":{"@type":"Answer","text":"Bağ-Kur primi için devlet desteği almıyor, bunu kendisi ödüyor. Ancak gelir vergisi istisnasından hâlâ yararlanıyor ve ayrıca KOSGEB'in nakit destekli Girişimci Destek Programı gibi farklı mekanizmalardan da şartları taşıması hâlinde ayrıca başvuru yapabilir."}},{"@type":"Question","name":"Aralık 2025'te Bağ-Kur'lu oldum, desteğim kesilir mi?","acceptedAnswer":{"@type":"Answer","text":"Kanunların geriye yürümezliği ilkesine göre kesilmemesi gerekir ve 12 aylık desteğinizi almaya devam etmeniz beklenir. Ancak bu konuda SGK uygulamasında tartışma ve bölgesel farklılıklar bildirildiğinden, prim tahakkuklarınızı e-Devlet üzerinden düzenli kontrol etmeniz ve bir sorun görürseniz itiraz etmeniz önerilir."}},{"@type":"Question","name":"Limited şirket kursam genç girişimci istisnasından yararlanabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Gelir vergisi istisnası, Gelir Vergisi Kanunu'na dayandığı için yalnızca gerçek kişi mükellefleri (şahıs işletmesi, adi ortaklık) kapsar. Limited ve anonim şirket ortakları kurumlar vergisi mükellefi sayıldığından bu istisnadan yararlanamaz."}},{"@type":"Question","name":"2026'da aylık Bağ-Kur primi ne kadar ödenecek?","acceptedAnswer":{"@type":"Answer","text":"2026 asgari ücreti (33.030 TL) üzerinden hesaplanan asgari 4/b Bağ-Kur primi yaklaşık 11.800 TL/ay civarındadır. Düzenli ödeyenlere uygulanan indirim ve matrahınıza göre bu tutar değişebilir; kesin rakamı e-Devlet üzerindeki 4/b prim sorgulama ekranından teyit etmeniz gerekir."}},{"@type":"Question","name":"Gelir vergisi istisnası kaç yıl ve hangi tutara kadar uygulanır?","acceptedAnswer":{"@type":"Answer","text":"Faaliyete başlanılan takvim yılından itibaren 3 vergilendirme dönemi boyunca uygulanır. Tutar her yıl değişir; o yılın gelir vergisi tarifesindeki ikinci dilimin üst sınırına eşittir. 2026 kazançları için bu sınır 400.000 TL'dir."}}]}) }}
      />
    </BlogLayout>
  );
}
