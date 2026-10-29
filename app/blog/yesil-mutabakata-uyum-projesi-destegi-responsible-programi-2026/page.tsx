import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yeşil Mutabakata Uyum Projesi Desteği (Responsible® Programı): Danışmanlık Giderinizin Yarısını Devlet mi Karşılıyor? | Koray Akdağ",
  description: "5973 sayılı İhracat Destekleri Hakkında Karar madde 14 kapsamındaki Responsible® Programı, ihracatçı şirketlerin sürdürülebilirlik yol haritası, uygulama ve doğrulama danışmanlığı giderlerini %50 oranında destekliyor. 10 Ağustos 2026'da güncellenen Genelge'ye göre üç faz, üst limit, kimler başvurabilir ve DYS üzerinden adım adım süreçle 2026 güncel rehber.",
  keywords: [
    "yeşil mutabakata uyum projesi desteği",
    "responsible programı",
    "ticaret bakanlığı yeşil dönüşüm desteği",
    "CBAM danışmanlık desteği",
    "5973 sayılı karar madde 14",
    "ihracatçı sürdürülebilirlik desteği",
    "responsible portalı",
    "yeşil mutabakat genelgesi 2026",
  ],
  alternates: {
    canonical: "/blog/yesil-mutabakata-uyum-projesi-destegi-responsible-programi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yeşil Mutabakata Uyum Projesi Desteği (Responsible® Programı): İhracatçı Şirketler Sürdürülebilirlik Danışmanlığının Yarısını Nasıl Devletten Alır?"
      description="5973 sayılı İhracat Destekleri Hakkında Karar'ın 14'üncü maddesine dayanan Responsible® Programı, ihracatçı şirketlerin yeşil dönüşüm yol haritası, uygulama danışmanlığı ve doğrulama giderlerini %50 oranında destekliyor. 10 Ağustos 2026'da değişen Genelge'ye göre üç faz, destek tutarları, kimlerin başvurabileceği ve DYS üzerinden süreçle güncel rehber."
      category="TİCARET BAKANLIĞI • YEŞİL MUTABAKAT UYUM DESTEĞİ • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="yesil-mutabakata-uyum-projesi-destegi-responsible-programi-2026"
      coverImage="https://images.unsplash.com/photo-1516937941344-00b4e0337589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      programDurumu="acik"
      ctaHeading="Yeşil Mutabakata Uyum Desteğine Uygunluğunuzu Birlikte Değerlendirelim"
      ctaText="300.000 dolarlık ihracat şartını karşılayıp karşılamadığınızdan DYS üzerinden başvuru dosyanızın hazırlanmasına kadar süreci sizinle birlikte yürütüyoruz."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ 5973 sayılı İhracat Destekleri Hakkında Karar&apos;ın <strong>14&apos;üncü maddesine</strong> dayanan Responsible® Programı, ihracatçı şirketlerin yeşil dönüşüme uyum sürecindeki danışmanlık giderlerini <strong>%50 oranında</strong>, <strong>5 yıl boyunca</strong> destekliyor.</li>
          <li>✔ Program üç fazdan oluşuyor: mevcut durum analizi ve yol haritası (<strong>Faz 1</strong>), uygulama danışmanlığı (<strong>Faz 2</strong>) ve izleme-doğrulama danışmanlığı (<strong>Faz 3</strong>).</li>
          <li>✔ Başvuru şartı, cari yıldan önceki son üç takvim yılında toplam <strong>en az 300.000 ABD Doları</strong> ihracat yapmış olmak; şu an yalnızca <strong>imalatçı ve mal ihracatçısı</strong> şirketler başvurabiliyor, hizmet ihracatçıları henüz kapsam dışı.
          </li>
          <li>✔ Faz 1&apos;de şirket, Bakanlık onaylı danışmanlık firmasına KOBİ ölçeğine göre <strong>500.000 TL ile 1.500.000 TL arasında</strong> bir tutara kadar ödeme yapıyor; bu tutarın yarısı Faz 1 raporu onaylandıktan sonra geri ödeniyor.</li>
          <li>✔ 5 yıllık toplam destek üst limiti her yıl TÜFE/Yİ-ÜFE ortalamasıyla güncelleniyor; 2026 başında güncellenen tutar sektör kaynaklarına göre <strong>17.640.000 TL</strong> civarında.</li>
          <li>✔ Başvuru ve süreç takibi <strong>Responsible® Portalı</strong> ve <strong>Destek Yönetim Sistemi (DYS)</strong> üzerinden yürütülüyor; Genelge en son 10 Ağustos 2026&apos;da değişti.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Responsible® Programı Nedir?
          </Link>
          <Link href="#fazlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Üç Faz Nasıl İşliyor?
          </Link>
          <Link href="#oran" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Destek Oranı ve Üst Limit
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Kimler Başvurabilir, Nasıl Değerlendiriliyor?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Başvuru Süreci
          </Link>
          <Link href="#danisman" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Danışmanlık Firmasını Siz mi Seçiyorsunuz?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Karıştırmayın: Responsible Programı ile Türkiye ETS
          </Link>
          <Link href="#marka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Responsible® Markasını Kullanma Hakkı
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
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Responsible® Programı Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Avrupa Birliği&apos;nin Sınırda Karbon Düzenlemesi Mekanizması
          (SKDM/CBAM) 1 Ocak 2026 itibarıyla kesin uygulama dönemine girdi ve
          AB&apos;nin yeşil dönüşüm paketi, ihracatçı şirketlerin tedarik
          zincirinden raporlama yükümlülüklerine kadar birçok alanda yeni
          beklentiler getirdi. Ticaret Bakanlığı bu sürece hazırlanmak
          isteyen ihracatçılar için danışmanlık maliyetini paylaşan bir
          destek mekanizması kurdu: <strong>Yeşil Mutabakata Uyum Projesi
          Desteği</strong>, uygulamada &quot;Responsible® Programı&quot;
          adıyla biliniyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Destek, 17 Ağustos 2022 tarihli ve 5973 sayılı Cumhurbaşkanı
          Kararı&apos;nın (&quot;İhracat Destekleri Hakkında Karar&quot;) 14&apos;üncü
          maddesine dayanıyor. Uygulama usul ve esasları ise Ticaret
          Bakanlığı&apos;nın Yeşil Mutabakata Uyum Projesi Desteğine İlişkin
          Genelgesi&apos;yle belirleniyor; bu genelge son olarak <strong>10
          Ağustos 2026</strong> tarihinde önemli değişikliklerle güncellendi
          (başvuru şartı, Faz 1 ödeme tavanları ve danışman yetkilendirme
          kriterleri dahil).
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Genelge&apos;nin amacı maddesi şöyle diyor: &quot;Bu Genelgenin
            amacı, 5973 sayılı İhracat Destekleri Hakkında Karar&apos;ın 14&apos;üncü
            maddesinde düzenlenen Yeşil Mutabakata Uyum Projesi Desteğinin
            uygulanmasına ilişkin başvuru, değerlendirme ve sonuçlandırma
            işlemlerine yönelik usul ve esasların belirlenmesidir.&quot;
          </p>
        </div>
      </section>

      {/* 2. FAZLAR */}
      <section id="fazlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Üç Faz Nasıl İşliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Program, şirketin yeşil dönüşüme uyum ihtiyacını analiz etmekten
          somut projeleri hayata geçirmeye kadar uzanan üç aşamadan oluşuyor.
          Her aşamanın giderleri ayrı ayrı %50 oranında destekleniyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              Faz 1: Mevcut Durum Analizi ve Yol Haritası
            </h3>
            <p className="text-gray-700">
              Bakanlık onaylı bir Responsible® Programı danışmanlık firması,
              şirketin vizyon, çevre, sosyal ve yönetişim kriterlerine göre
              olgunluk seviyesini belirler ve geliştirmeye açık konuları
              projelendiren bir sürdürülebilirlik yol haritası hazırlar.
              Diğer tüm aşamaların ön şartıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚙️</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              Faz 2: Uygulama Danışmanlığı
            </h3>
            <p className="text-gray-700">
              Yol haritasındaki projelere yönelik sürdürülebilirlik
              danışmanlığı (teknik/finansal fizibilite dahil), bilişim
              danışmanlığı ve Kamu Gözetimi Kurumu (KGK) onaylı
              sürdürülebilirlik raporlaması eğitim bedelleri desteklenir.
              Yol haritasındaki projelerin tamamı için alınması zorunlu
              değildir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">✅</div>
            <h3 className="mb-4 text-xl font-bold text-[#071A2F]">
              Faz 3: İzleme ve Doğrulama Danışmanlığı
            </h3>
            <p className="text-gray-700">
              Kaydedilen iyileşmenin ölçülmesi, izlenmesi, doğrulanması ve
              raporlanması danışmanlığı ile bu süreç için zorunlu akredite
              sertifikasyon giderlerini kapsar. Faz 2&apos;den önce veya
              eşzamanlı da başlatılabilir.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          2026 güncellemesiyle birlikte, bir proje hem uygulama hem izleme
          niteliği taşıyorsa, şirketin DYS üzerindeki başvuruda alt destek
          türünü (Faz 2 veya Faz 3) kendisi seçebilmesi ve projelerin
          yol haritasındaki takvim sırasına bağlı kalınmadan hayata
          geçirilebilmesi gibi esneklikler de genelgeye eklendi.
        </p>
      </section>

      {/* 3. ORAN */}
      <section id="oran" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Destek Oranı ve Üst Limit
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek oranı (tüm fazlar)</td>
                <td className="p-5">%50</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Destek süresi</td>
                <td className="p-5">Destek kapsamına alınma onayından itibaren 5 yıl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faz 1 ödeme tavanı (mikro/küçük işletme)</td>
                <td className="p-5">500.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faz 1 ödeme tavanı (orta büyüklükte işletme)</td>
                <td className="p-5">1.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faz 1 ödeme tavanı (büyük işletme)</td>
                <td className="p-5">1.500.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">5 yıllık toplam üst limit (2026 güncel)</td>
                <td className="p-5">Sektör kaynaklarına göre yaklaşık 17.640.000 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Mikro, küçük, orta ve büyük işletme ayrımı, Küçük ve Orta
          Büyüklükteki İşletmeler Yönetmeliği&apos;nin &quot;KOBİ&apos;lerin
          sınıflandırılması&quot; başlıklı 5&apos;inci maddesine göre
          yapılıyor;{" "}
          <Link href="/blog/kobi-tanimi-2026-siniflandirma-ve-destek-uygunlugu" className="text-orange-600 underline">
            şirketinizin hangi ölçekte sayıldığını KOBİ tanımı yazımızdan
          </Link>{" "}
          kontrol edebilirsiniz. Toplam üst limit tutarı, Genelge&apos;nin
          5973 sayılı Karar&apos;ın 30&apos;uncu maddesine atıf yapan
          hükmü gereği her takvim yılı başında TÜFE ve Yİ-ÜFE
          ortalamasıyla güncelleniyor; 17.640.000 TL rakamı, bu
          güncellemelerin yansıdığı ve sektör yayınlarında 2026 için
          paylaşılan tutar olup kesin değeri DYS üzerindeki güncel
          bildirimden teyit edilmelidir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Başvuruda en sık gözden kaçan
            nokta, üst limitin &quot;yıllık&quot; değil <strong>5 yıllık
            tek bir toplam limit</strong> olduğu. Genelge, her yıl başında
            şirketin o ana kadar kullanmadığı limit tutarını enflasyon
            oranında güncelliyor; yani bir yıl desteği hiç kullanmayan
            şirketin limiti erimiyor, aksine (TÜFE+Yİ-ÜFE)/2 oranında
            büyüyor. Bu nedenle beş yıllık süreyi erken bitirmek yerine,
            yol haritasındaki projeleri gerçek önceliğe göre zamanlamak
            genelde daha doğru bir yaklaşım.
          </p>
        </div>
      </section>

      {/* 4. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Kimler Başvurabilir, Nasıl Değerlendiriliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Programa, cari yıldan önceki son üç takvim yılında toplam en az{" "}
          <strong>300.000 ABD Doları</strong> ihracat yapmış imalatçı ve
          ihracatçı şirketler başvurabiliyor. 10 Ağustos 2026 değişikliğiyle
          bu tutarın hesabına; başvuru sahibi şirketin organik bağlı
          olduğu şirket, grup şirketi, sektörel dış ticaret şirketi ya da
          dış ticaret sermaye şirketi üzerinden yaptığı ihracat ile ihraç
          kayıtlı satışları da dahil edilebiliyor. Şu an için yalnızca{" "}
          <strong>mal ihracatçısı/imalatçı</strong> şirketler kapsamda;
          hizmet ihracatçıları henüz başvuramıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bakanlık, başvuruyu değerlendirirken yalnızca ihracat rakamına
          bakmıyor. Genelge&apos;nin 5&apos;inci maddesine göre
          değerlendirmede şu kriterler dikkate alınıyor:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>Şirketin sürdürülebilirlik vizyonu ve stratejisi</li>
          <li>İhracat vizyonu ve kültürü</li>
          <li>Üst yönetimin projeyi sahiplenme düzeyi</li>
          <li>Proje ekibinin niteliği</li>
          <li>Sürdürülebilirlik stratejisinin şirketin mali yapısına uygunluğu</li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Başvurusu uygun bulunmayan şirketler, ret kararının tebliğinden{" "}
          <strong>6 ay sonra</strong> yeniden başvurabiliyor. Destek
          kapsamına alındığı halde Faz 1 aşamasına geçmeyen veya
          geçmeyeceğini Bakanlığa bildiren şirketler ise kapsamdan re&apos;sen
          çıkarılıyor ve aynı şekilde 6 ay sonra tekrar başvurabiliyor.
        </p>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Başvuru Süreci
        </h2>
        <div className="space-y-6">
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">1</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Responsible® Portalı&apos;nda Hesap Açılır</h3>
              <p className="text-gray-700">Şirket portalda hesap açar ve beyana dayalı Ön Değerlendirme Karnesi&apos;ni doldurur.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">2</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">DYS Üzerinden Destek Kapsamına Alınma Başvurusu</h3>
              <p className="text-gray-700">Başvuru formu ve Ek-1&apos;deki belgelerle (ihracat tutarını kanıtlayan belgeler dahil) Destek Yönetim Sistemi üzerinden başvuru yapılır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">3</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Bakanlık Değerlendirmesi</h3>
              <p className="text-gray-700">Bakanlık, 4&apos;üncü maddedeki şartı ve 5&apos;inci maddedeki kriterleri inceler; sonuç DYS üzerinden bildirilir. Eksik belge varsa 3 ay içinde tamamlanması gerekir.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">4</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Faz 1 İçin 3 Teklif Alınır, Ön Onay Başvurusu Yapılır</h3>
              <p className="text-gray-700">Şirket, Bakanlık onaylı Responsible® danışmanlık firmalarından en az 3 teklif toplar ve Ek-7 formuyla DYS üzerinden ön onay başvurusu yapar.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">5</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Ödeme Yapılır, Çalışma Başlar</h3>
              <p className="text-gray-700">Ön onayın ardından şirket 1 ay içinde danışmanlık firmasına KOBİ ölçeğine göre belirlenen tavana kadar ödeme yapar; gizlilik sözleşmesi imzalanır ve çalışma ödemeden 1 ay içinde başlar.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">6</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Faz 1 Raporu Onaylanır</h3>
              <p className="text-gray-700">Ek-6&apos;da tanımlanan içerikte hazırlanan mevcut durum analizi ve yol haritası raporu Bakanlığa sunulur ve onaylanır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">7</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Hakediş Başvurusu Yapılır</h3>
              <p className="text-gray-700">Faz 1 raporunun onayından itibaren en geç 6 ay içinde, Ek-3&apos;teki harcama belgeleriyle DYS üzerinden hakediş (ödenen tutarın %50&apos;sinin geri alınması) başvurusu yapılır.</p>
            </div>
          </div>
          <div className="flex gap-6 rounded-xl border p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">8</div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Faz 2 / Faz 3&apos;e Geçilir (İsteğe Bağlı)</h3>
              <p className="text-gray-700">Yol haritasındaki projeler için uygulama ve/veya izleme-doğrulama danışmanlığı alınır; her harcama için ödeme belgesinden itibaren 6 ay içinde ayrı hakediş başvurusu yapılır.</p>
            </div>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Ödemelerin tamamı <strong>bankacılık sistemi</strong> üzerinden
          yapılmalı ve harcamayı yapan şirket ile faturayı düzenleyen taraf{" "}
          <strong>ilişkili kişi olmamalı</strong>. Destek ödemesi öncesinde
          şirketin vergi ve SGK&apos;ya vadesi geçmiş borcu bulunmadığının
          teyit edilmesi de bir diğer şart.
        </p>
      </section>

      {/* 6. DANIŞMAN */}
      <section id="danisman" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Danışmanlık Firmasını Siz mi Seçiyorsunuz?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Evet, ancak serbestçe değil. Faz 1 çalışmasını yalnızca Bakanlık
          tarafından yetkilendirilmiş &quot;Responsible® Programı
          danışmanlık firmaları&quot; yürütebiliyor; şirket bu listeden en
          az 3 teklif alıp birini tercih ediyor, Bakanlık gerekli görürse
          farklı bir teklifi de uygun görebiliyor. Faz 2 ve Faz 3&apos;te
          ise &quot;uygulama danışmanlığı firması&quot; olarak ayrıca
          yetkilendirilmiş firmalar arasından seçim yapılıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bir danışmanlık firmasının Bakanlık tarafından yetkilendirilmesi
          hiç kolay değil. 10 Ağustos 2026 değişikliğiyle netleşen
          kriterlere göre firmanın, başka şeylerin yanı sıra:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>AB, İngiltere veya EFTA ülkelerinden en az 5 farklı ülkede tamamlanmış, referans mektuplu projeleri olması,</li>
          <li>Son 3 yılda en az 3 farklı sektörde, her biri asgari 1.000.000 TL tutarında 5 sürdürülebilirlik projesi tamamlamış olması,</li>
          <li>TSRS, GRI veya IIRC çerçevesinde hazırlanmış 5 referans raporu bulunması,</li>
          <li>Çevre, sosyal, yönetişim alanında en az 10 danışmandan oluşan, içlerinde asgari 5 yıl tecrübeli ve en az ikisi mühendislik mezunu 4 danışman barındıran bir ekibe sahip olması</li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          gerekiyor. Bu kriterler, Responsible Programı danışmanlığının
          amatör bir hizmet olmadığını, ciddi bir kurumsal kapasite
          gerektirdiğini gösteriyor; şirketlerin teklif karşılaştırmasını
          yalnızca fiyat üzerinden değil, danışmanlık firmasının güncel
          yetkilendirme durumu üzerinden yapması önem taşıyor.
        </p>
      </section>

      {/* 7. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Karıştırmayın: Responsible Programı ile Türkiye Emisyon Ticaret Sistemi (ETS)
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ İkisi de &quot;Yeşil Dönüşüm&quot; Diyor, Ama Tamamen Farklı Mekanizmalar
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Responsible® Programı (Gönüllü Destek)
              </p>
              <p className="text-gray-700">
                Ticaret Bakanlığı&apos;nın <strong>isteğe bağlı</strong>{" "}
                bir teşviki. Şirket başvurur, uygun bulunursa danışmanlık
                giderinin %50&apos;sini geri alır. Yükümlülük değil,
                danışmanlık maliyetini paylaşan bir destektir.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                Türkiye Emisyon Ticaret Sistemi (ETS)
              </p>
              <p className="text-gray-700">
                Çevre, Şehircilik ve İklim Değişikliği Bakanlığı&apos;nın
                yürüttüğü, belirli tesisler için <strong>zorunlu</strong>{" "}
                bir sera gazı izin ve tahsisat sistemi. Kapsamdaki
                tesisler için izleme, raporlama ve doğrulama bir
                yükümlülüktür, destek değildir.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Pratikte ikisi birbirini tamamlıyor: Responsible Programı
            kapsamında alınan Faz 1 yol haritası, şirketin ETS veya CBAM
            kapsamına girip girmediğini netleştirmeye de yardımcı olabilir.
            ETS kapsamını ve 50.000 tCO₂e eşiğini{" "}
            <Link href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026" className="text-orange-600 underline">
              Türkiye Emisyon Ticaret Sistemi yazımızda
            </Link>
            , CBAM&apos;a hazırlık için karbon ayak izi hesaplama adımlarını
            ise{" "}
            <Link href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026" className="text-orange-600 underline">
              Karbon Ayak İzi Hesaplama rehberimizde
            </Link>{" "}
            ayrıca ele aldık.
          </p>
        </div>
      </section>

      {/* 8. MARKA */}
      <section id="marka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Responsible® Markasını Kullanma Hakkı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Faz 1 raporu Bakanlık tarafından onaylanan şirketler, Ek-11
          formuyla Responsible® markasının kullanım hakkı için ayrıca
          başvurabiliyor. Onay verilirse marka, şirket unvanıyla birlikte
          kurumsal materyallerde ve destek kapsamındaki iletişimde{" "}
          <strong>5 yıl</strong> süreyle kullanılabiliyor. Bu, şirketin
          devlet eliyle doğrulanmış bir yeşil dönüşüm sürecinden geçtiğini
          gösteren, özellikle AB&apos;li alıcılar nezdinde itibar değeri
          taşıyan bir işaret. Marka kullanım başvurusu uygun bulunmayan
          şirketler, 2026 değişikliğiyle gelen kurala göre en erken 1 yıl
          sonra yeniden başvurabiliyor.
        </p>
      </section>

      {/* 9. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ 300.000 dolarlık ihracat şartını hesaplarken grup/organik bağlı şirketler üzerinden yapılan ihracatı da dahil edebileceğinizi unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Holding veya organik bağlı şirkete harcama yetkisi verilse bile bu şirket Faz 1 desteğinden yararlanamaz, yalnızca Faz 2/Faz 3&apos;ten yararlanabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faz 1 ödemesini onaydan itibaren 1 ay içinde yapmazsanız süreç aksayabilir; ödeme ve çalışma takvimini danışmanlık firmasıyla önceden netleştirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hakediş başvurusunu (ödenen tutarın %50&apos;sinin geri alınması) ilgili 6 aylık süre içinde yapmayı ajandanıza not edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Danışmanlık firmasının güncel Bakanlık yetkilendirmesine sahip olduğunu teklif aşamasında teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Vergi ve SGK borcu bulunmaması, ödeme aşamasında aranan bir şart; başvuru öncesi bu kaydınızı kontrol edin
          </div>
        </div>
      </section>

      {/* 10. KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki birincil kaynaklara dayanmaktadır. Başvuru
          öncesinde güncel oran, limit ve kriterleri doğrudan bu
          kaynaklardan teyit etmenizi öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://ticaret.gov.tr/data/66a2407413b87634b8ce2b30/Yeşil Mutabakata Uyum Projesi Desteğine İlişkin Genelge 10082026.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Yeşil Mutabakata Uyum Projesi Desteğine İlişkin Genelge (10.08.2026 güncel sürüm)
            </a>
          </li>
          <li>
            <a href="https://ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karara-iliskin-genelgeler/yesil-mutabakata-uyum-projesi-destegi-responsible-programi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Ticaret Bakanlığı &quot;Yeşil Mutabakata Uyum Projesi Desteği (Responsible® Programı)&quot; sayfası
            </a>
          </li>
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2022/08/20220818-5.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              5973 sayılı İhracat Destekleri Hakkında Karar (Resmî Gazete, 18.08.2022/31927)
            </a>
          </li>
          <li>
            <a href="https://immib.org.tr/tr/yesil-mutabakata-uyum-projesi-destegi-responsible-programi-1" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              İMMİB, &quot;Yeşil Mutabakata Uyum Projesi Desteği (Responsible Programı)&quot; bilgilendirmesi
            </a>
          </li>
        </ul>
      </section>

      {/* 11. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yeşil Mutabakata Uyum Projesi Desteği (Responsible Programı) nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              5973 sayılı İhracat Destekleri Hakkında Karar&apos;ın 14&apos;üncü
              maddesine dayanan, ihracatçı şirketlerin yeşil dönüşüme uyum
              sürecindeki sürdürülebilirlik danışmanlığı giderlerini %50
              oranında, 5 yıl boyunca destekleyen bir Ticaret Bakanlığı
              programıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kimler başvurabilir, 300.000 dolarlık ihracat şartı nasıl hesaplanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Cari yıldan önceki son üç takvim yılında toplam en az 300.000
              ABD Doları ihracat yapan imalatçı ve mal ihracatçısı şirketler
              başvurabilir. Bu tutara, organik bağlı şirket, grup şirketi,
              sektörel dış ticaret şirketi veya dış ticaret sermaye
              şirketi üzerinden yapılan ihracat ile ihraç kayıtlı
              satışlar da dahil edilebiliyor. Hizmet ihracatçıları şu an
              için kapsam dışında.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek oranı ve üst limit ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              Destek oranı tüm fazlarda %50. Faz 1&apos;de ödeme tavanı
              şirketin ölçeğine göre 500.000 TL (mikro/küçük), 1.000.000 TL
              (orta) veya 1.500.000 TL (büyük işletme). 5 yıllık toplam üst
              limit her yıl TÜFE/Yİ-ÜFE ortalamasıyla güncelleniyor ve
              sektör kaynaklarına göre 2026 için yaklaşık 17.640.000 TL.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Faz 1, Faz 2 ve Faz 3 arasındaki fark nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              Faz 1, şirketin mevcut durumunu analiz edip bir sürdürülebilirlik
              yol haritası çıkarır ve diğer fazların ön şartıdır. Faz 2,
              yol haritasındaki projeler için uygulama danışmanlığı
              (teknik/finansal fizibilite, bilişim danışmanlığı, raporlama
              eğitimi) sağlar. Faz 3 ise kaydedilen iyileşmenin izlenmesi,
              doğrulanması ve gerekli sertifikasyon giderlerini kapsar.
              Faz 2 ve Faz 3&apos;ün alınması zorunlu değildir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Danışmanlık firmamı kendim seçebilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Seçimi siz yaparsınız ama havuz sınırlıdır: Faz 1&apos;i
              yalnızca Bakanlık tarafından yetkilendirilmiş Responsible®
              danışmanlık firmaları yürütebilir. Şirket bu firmalardan en
              az 3 teklif alır ve birini tercih eder; Bakanlık gerekli
              görürse farklı bir teklifi de uygun bulabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuruyu nereden ve nasıl yapıyorum?
            </h3>
            <p className="leading-8 text-gray-700">
              Önce Responsible® Portalı&apos;nda hesap açıp Ön Değerlendirme
              Karnesi doldurulur. Ardından destek kapsamına alınma
              başvurusu, Ek-1 belgeleriyle birlikte Destek Yönetim Sistemi
              (DYS) üzerinden yapılır. Sonraki tüm aşamalar (ön onay,
              raporlar, hakediş başvuruları) da DYS ve portal üzerinden
              takip edilir.
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
          CBAM ve AB&apos;nin yeşil dönüşüm beklentileri, özellikle
          çelik, alüminyum, çimento, tekstil ve kimya gibi sektörlerde
          ihracat yapan şirketler için artık ertelenebilir bir gündem
          maddesi değil. Yeşil Mutabakata Uyum Projesi Desteği, bu sürece
          hazırlanmanın danışmanlık maliyetini devletle paylaşan,
          şartlarını sağlayan şirketler için gerçek bir fırsat. Buna
          karşılık süreç, 300.000 dolarlık ihracat şartından Bakanlık
          onaylı danışman seçimine, 6 aylık hakediş sürelerinden Faz
          raporlarının içerik şartlarına kadar dikkat gerektiren birçok
          ayrıntı barındırıyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          300.000 dolarlık ihracat şartını karşılayıp karşılamadığınızdan
          DYS üzerinden başvuru dosyanızın hazırlanmasına kadar süreci
          Koray Akdağ / Sistem Global Danışmanlık olarak sizinle birlikte
          yürütüyoruz; sürdürülebilirlik raporlama (TSRS) ihtiyaçlarınız
          için de ayrı bir danışmanlık süreci kurguluyoruz.{" "}
          <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
            Şirketinizin yeşil mutabakat uyum desteğine uygunluğunu
            birlikte değerlendirelim.
          </Link>
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/karbon-ayak-izi-hesaplama-kobiler-icin-rehber-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON AYAK İZİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Karbon Ayak İzi Hesaplama ve Raporlama: KOBİ&apos;ler İçin 2026 Rehberi</h3>
          </Link>
          <Link
            href="/blog/turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • KARBON & ETS • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türkiye Emisyon Ticaret Sistemi (ETS) Yönetmeliği Yayımlandı</h3>
          </Link>
          <Link
            href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">SÜRDÜRÜLEBİLİRLİK • TSRS • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TSRS Sürdürülebilirlik Raporlama Zorunluluğu 2026</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Yeşil Mutabakata Uyum Projesi Desteği (Responsible Programı) nedir?","acceptedAnswer":{"@type":"Answer","text":"5973 sayılı İhracat Destekleri Hakkında Karar'ın 14'üncü maddesine dayanan, ihracatçı şirketlerin yeşil dönüşüme uyum sürecindeki sürdürülebilirlik danışmanlığı giderlerini %50 oranında, 5 yıl boyunca destekleyen bir Ticaret Bakanlığı programıdır."}},{"@type":"Question","name":"Kimler başvurabilir, 300.000 dolarlık ihracat şartı nasıl hesaplanıyor?","acceptedAnswer":{"@type":"Answer","text":"Cari yıldan önceki son üç takvim yılında toplam en az 300.000 ABD Doları ihracat yapan imalatçı ve mal ihracatçısı şirketler başvurabilir. Bu tutara, organik bağlı şirket, grup şirketi, sektörel dış ticaret şirketi veya dış ticaret sermaye şirketi üzerinden yapılan ihracat ile ihraç kayıtlı satışlar da dahil edilebiliyor. Hizmet ihracatçıları şu an için kapsam dışında."}},{"@type":"Question","name":"Destek oranı ve üst limit ne kadar?","acceptedAnswer":{"@type":"Answer","text":"Destek oranı tüm fazlarda %50. Faz 1'de ödeme tavanı şirketin ölçeğine göre 500.000 TL (mikro/küçük), 1.000.000 TL (orta) veya 1.500.000 TL (büyük işletme). 5 yıllık toplam üst limit her yıl TÜFE/Yİ-ÜFE ortalamasıyla güncelleniyor ve sektör kaynaklarına göre 2026 için yaklaşık 17.640.000 TL."}},{"@type":"Question","name":"Faz 1, Faz 2 ve Faz 3 arasındaki fark nedir?","acceptedAnswer":{"@type":"Answer","text":"Faz 1, şirketin mevcut durumunu analiz edip bir sürdürülebilirlik yol haritası çıkarır ve diğer fazların ön şartıdır. Faz 2, yol haritasındaki projeler için uygulama danışmanlığı (teknik/finansal fizibilite, bilişim danışmanlığı, raporlama eğitimi) sağlar. Faz 3 ise kaydedilen iyileşmenin izlenmesi, doğrulanması ve gerekli sertifikasyon giderlerini kapsar. Faz 2 ve Faz 3'ün alınması zorunlu değildir."}},{"@type":"Question","name":"Danışmanlık firmamı kendim seçebilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Seçimi siz yaparsınız ama havuz sınırlıdır: Faz 1'i yalnızca Bakanlık tarafından yetkilendirilmiş Responsible danışmanlık firmaları yürütebilir. Şirket bu firmalardan en az 3 teklif alır ve birini tercih eder; Bakanlık gerekli görürse farklı bir teklifi de uygun bulabilir."}},{"@type":"Question","name":"Başvuruyu nereden ve nasıl yapıyorum?","acceptedAnswer":{"@type":"Answer","text":"Önce Responsible Portalı'nda hesap açıp Ön Değerlendirme Karnesi doldurulur. Ardından destek kapsamına alınma başvurusu, Ek-1 belgeleriyle birlikte Destek Yönetim Sistemi (DYS) üzerinden yapılır. Sonraki tüm aşamalar (ön onay, raporlar, hakediş başvuruları) da DYS ve portal üzerinden takip edilir."}}]}) }}
      />
    </BlogLayout>
  );
}
