import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB Yapay Zeka Kredi Programı 2026 | 5 Milyon TL Faizsiz Kredi | Koray Akdağ",
  description:
    "KOSGEB'in yeni Yapay Zeka Kredi Programı: Teknogirişim Rozeti sahibi girişimlere 500 bin - 5 milyon TL faizsiz kredi, GO Dijital Cüzdan mekanizması, teminat şartları, desteklenen giderler ve 2026 başvuru süreci.",
  keywords: [
    "KOSGEB Yapay Zeka Kredi Programı",
    "KOSGEB yapay zeka kredisi",
    "Teknogirişim Rozeti",
    "GO Dijital Cüzdan",
    "KOSGEB faizsiz kredi 2026",
    "yapay zeka teşviki",
    "KOSGEB girişimci destekleri",
    "GPU kredi desteği",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Yapay Zeka Kredi Programı 2026: 5 Milyon TL'ye Kadar Faizsiz Krediye Kimler Başvurabilir?"
      description="KOSGEB'in Temmuz 2026'da başlattığı Yapay Zeka Kredi Programı ile Teknogirişim Rozeti sahibi girişimler, GPU/bulut ve yapay zeka altyapı hizmetleri için 500 bin - 5 milyon TL arasında faizsiz kredi kullanabiliyor. Şartlar, teminat mekanizması ve başvuru süreci."
      category="KOSGEB • YAPAY ZEKA • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="kosgeb-yapay-zeka-kredi-programi-2026"
      coverImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB, 9 Temmuz 2026&apos;dan itibaren teknoloji girişimlerinin
            yapay zeka altyapısına erişimini kolaylaştırmak amacıyla yepyeni
            bir finansman aracını devreye aldı: Yapay Zeka Kredi Programı.
            GO Dijital iş birliğiyle yürütülen program, klasik KOSGEB
            desteklerinden farklı bir mekanizmayla çalışıyor; nakit hibe
            yerine, GPU/bulut hizmeti alımlarında kullanılabilen faizsiz bir
            kredi limiti sunuyor. Ancak programın hem fırsatları hem de
            teminat ve Teknogirişim Rozeti gibi kritik ön şartları var.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Program nasıl çalışıyor, kime hitap ediyor?</li>
            <li>✔ Kimler başvurabilir, Teknogirişim Rozeti neden şart?</li>
            <li>✔ Kredi limitleri ve gerçekten faizsiz mi?</li>
            <li>✔ GO Dijital Cüzdan ve teminat mekanizması nasıl işliyor?</li>
            <li>✔ Hangi giderler desteklenir?</li>
            <li>✔ Adım adım başvuru süreci</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Program Nedir, Neden Önemli?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Başvurabilir?
            </Link>
            <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Kredi Tutarı ve Maliyeti
            </Link>
            <Link href="#mekanizma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Kredi Nasıl Kullanılıyor?
            </Link>
            <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Desteklenen Giderler
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Başvuru Süreci
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Yapay Zeka Kredi Programı, KOSGEB İcra Komitesi&apos;nin 19/12/2025
            tarih ve 2025-20 sayılı kararı ile &quot;Teknogirişim Rozeti Sahibi
            Girişimcilere Yönelik Yapay Zeka Araçlarına Erişim Amaçlı
            Finansman Desteğine İlişkin İş Birliği Protokolü&quot; çerçevesinde
            hayata geçirildi. Programın işleyişini düzenleyen Yapay Zeka
            Kredi Yönergesi 13 Haziran 2026&apos;da yürürlüğe girdi ve
            başvurular <strong>9 Temmuz 2026&apos;dan itibaren</strong> fiilen
            başladı.
          </p>
          <p className="mb-6 leading-8 text-gray-700">
            Programın amacı, teknoloji ve yenilik odaklı işletmelerin yapay
            zeka teknolojilerini iş süreçlerine entegre etmesini
            kolaylaştırmak, dijital kapasitelerini ve üretim yetkinliklerini
            geliştirmektir. Bunu klasik bir hibe modeliyle değil, KOSGEB
            işbirliğiyle GO Dijital Teknoloji Hizmetleri A.Ş. tarafından
            yürütülen bir <strong>kredi</strong> mekanizmasıyla yapıyor.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programı Diğer KOSGEB Desteklerinden Ayıran Özellikler
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Nakit hibe değil; hizmet alımına özel, faizsiz bir kredi limiti</li>
              <li>✔ Kredi doğrudan işletmeye değil, GO Dijital Cüzdan üzerinden hizmet sağlayıcıya aktarılıyor</li>
              <li>✔ Ön şart olarak geçerli Teknogirişim Rozeti isteniyor</li>
              <li>✔ GPU, bulut, veri depolama ve AI platform giderlerine özel tasarlandı</li>
              <li>✔ Kullanım için banka teminatı (Kesin Teminat Mektubu) zorunlu</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yapay zeka altyapısına erişim maliyeti (özellikle
            yüksek performanslı GPU kaynakları ve bulut tabanlı AI
            hizmetleri) küçük ölçekli teknoloji girişimleri için önemli bir
            engel oluşturuyor. Bu program, henüz gelir üretmeyen ya da
            büyüme aşamasındaki teknogirişimlerin bu maliyeti 24 aya
            yayarak, faiz yükü olmadan karşılamasına imkân tanıyor.
          </p>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın en belirleyici şartı, klasik KOSGEB kayıt şartlarının
            ötesinde <strong>geçerli bir Teknogirişim Rozeti</strong>
            sahibi olmaktır. Bu rozete sahip olmayan işletmeler, diğer tüm
            şartları sağlasa dahi krediden yararlanamaz.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Türk Ticaret Kanunu&apos;nda tanımlı gerçek veya tüzel kişi statüsünde olmak</li>
                <li>✔ KOSGEB Veri Tabanı&apos;na kayıtlı olmak, İşletme Beyanı güncel ve aktif olmak</li>
                <li>✔ Başvuru tarihi itibarıyla geçerli Teknogirişim Rozeti sahibi olmak</li>
                <li>✔ GO Dijital Cüzdan hesabına sahip olmak (yoksa başvuru sürecinde açılabilir)</li>
                <li>✔ Küçük ve Orta Büyüklükteki İşletmeler Yönetmeliği kapsamında KOBİ sınıfında olmak</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Teknogirişim Rozeti bulunmayan veya süresi dolmuş işletmeler</li>
                <li>❌ KOSGEB Veri Tabanı&apos;nda kaydı güncel/aktif olmayan işletmeler</li>
                <li>❌ 9903 sayılı Karar kapsamındaki sektörel/bölgesel kısıtlara takılan işletmeler</li>
                <li>❌ KOBİ sınıfı dışında kalan büyük ölçekli şirketler</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🎖️ Teknogirişim Rozeti Yoksa Ne Yapılmalı?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Teknogirişim Rozeti, Sanayi ve Teknoloji Bakanlığı tarafından;
              Türkiye&apos;de kurulu, teknoloji ve yenilik odaklı,
              ölçeklenebilir bir iş modeline sahip girişimlere verilen ve
              verildiği tarihten itibaren 3 yıl geçerli olan bir belgedir.
              Başvurular <strong>teknogirisim.sanayi.gov.tr</strong> portalı
              üzerinden yapılır. Son üç yıl içinde bir teknoloji geliştirme
              bölgesinden (teknopark) kabul almış, KOSGEB TEKMER tarafından
              desteklenmiş ya da TÜBİTAK BiGG/BiGG Yatırım programlarından
              faydalanmış girişimler için değerlendirme süreci hızlandırılmış
              şekilde işler; bu kriterleri sağlamayan girişimler ise
              Bakanlık bünyesindeki değerlendirici kuruluşlar aracılığıyla
              incelenir.
            </p>
            <p className="leading-8 text-gray-700">
              Dolayısıyla Yapay Zeka Kredisi&apos;ni hedefleyen ancak henüz
              rozeti bulunmayan girişimler için ilk adım, kredi başvurusu
              değil, Teknogirişim Rozeti sürecini başlatmaktır.
            </p>
          </div>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Kredi Tutarı ve Maliyeti Ne Kadar?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yönergeye göre kredi Türk Lirası cinsinden kullandırılır ve
            kullandırılan kredi için <strong>herhangi bir faiz veya
            komisyon uygulanmaz</strong>. Bu, programı klasik KOSGEB
            kredi/faiz desteği modellerinden ayıran en önemli özelliktir:
            burada devlet faizin bir kısmını değil, faizin tamamını
            karşılıyor; işletme yalnızca kullandığı anaparayı geri ödüyor.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Tutar / Koşul</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Alt Limiti</td>
                  <td className="p-5">500.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti</td>
                  <td className="p-5">5.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Faiz / Komisyon</td>
                  <td className="p-5">Uygulanmıyor (faizsiz, komisyonsuz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Vadesi</td>
                  <td className="p-5">24 ay (ilk 12 ay ödemesiz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Geri Ödeme Planı</td>
                  <td className="p-5">Ödemesiz dönem sonrası, dörder aylık dönemlerde 4 eşit taksit</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Zorunlu Teminat</td>
                  <td className="p-5">Banka Kesin Teminat Mektubu</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Başlangıç Kredi Limiti Nasıl Belirleniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hizmet sağlayıcı ile KOSGEB arasındaki iş birliği protokolünde
              işletmelere tanımlanan &quot;ücretsiz hizmet kullanım
              limiti&quot; varsa, kredi tutarı bu limiti aşmayacak şekilde
              belirlenir. Hizmet sağlayıcı böyle bir limit tanımlamamışsa,
              GO Dijital tarafından işletmeye doğrudan 500.000 TL kredi
              limiti tanımlanır; daha sonra hizmet sağlayıcı tarafından bir
              kullanım limiti tanımlanırsa, kredi tutarı bu yeni limite göre
              güncellenir.
            </p>
          </div>
        </section>

        {/* 4. MEKANİZMA */}
        <section id="mekanizma" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Kredi Nasıl Kullanılıyor? GO Dijital Cüzdan Mekanizması
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Bu programın en çok karıştırılan tarafı, kredinin işletmenin
            banka hesabına nakit olarak yatmamasıdır. Kredi, yalnızca
            protokol kapsamındaki yapay zeka hizmet sağlayıcılarından
            alınacak hizmetlerin ödemesinde, GO Dijital Cüzdan üzerinden
            kullanılabilir.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">1. Başvuru ve Onay</h3>
              <p className="mt-3 text-sm text-gray-600">
                Sistem, Teknogirişim Rozeti ve diğer şartları otomatik kontrol eder.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔒</div>
              <h3 className="text-xl font-bold">2. Bloke Kredi Tanımlama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan kredi tutarı, GO Dijital Cüzdan hesabına blokeli olarak aktarılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">3. Banka Teminatı Sunma</h3>
              <p className="mt-3 text-sm text-gray-600">
                Blokenin kalkması için Kesin Teminat Mektubu ibraz edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">☁️</div>
              <h3 className="text-xl font-bold">4. Hizmet Alımı</h3>
              <p className="mt-3 text-sm text-gray-600">
                İşletme, protokollü hizmet sağlayıcıdan GPU/bulut/AI hizmeti satın alır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧾</div>
              <h3 className="text-xl font-bold">5. Fatura Yükleme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Hizmet alım faturası sisteme eklenir, kredi kapsamına uygunluğu incelenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">6. Bloke Serbest Bırakma</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan fatura tutarı kadar bloke, hizmet sağlayıcıya aktarılmak üzere serbest kalır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ &quot;Kullan ya da Kaybet&quot; Kuralı
            </h3>
            <p className="leading-8 text-gray-700">
              Kredi başlangıç tarihinden itibaren 12 ay içinde
              kullanılmayan bloke tutarlar otomatik olarak iptal edilir ve
              GO Dijital&apos;e iade edilir. Bu nedenle onaylanan kredi
              limitinin tamamını değil, gerçekten kullanılacak AI altyapı
              bütçesini baz alarak başvurmak, hem gereksiz teminat maliyeti
              hem de kullanılmayan limit riskini azaltır.
            </p>
          </div>
        </section>

        {/* 5. GİDERLER */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Desteklenen Giderler Nelerdir?
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kredi yalnızca KOSGEB ile iş birliği protokolü imzalayan yapay
            zeka veri merkezi ve hizmet sağlayıcılarından alınan
            hizmetlerin finansmanında kullanılabilir. Yönergede sayılan
            başlıca kalemler şunlardır:
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ⚙️ İşlem Kaynakları
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Yüksek performanslı GPU kaynakları</li>
                <li>CPU ve RAM kapasitesi kiralama/kullanımı</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💾 Veri ve Depolama
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Güvenli veri depolama hizmetleri</li>
                <li>Yapay zeka veri merkezi hizmetleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm md:col-span-2">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🤖 Araç ve Platform Hizmetleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Yapay zeka araçları ve platform hizmetleri (model eğitimi, çıkarım/inference altyapısı, geliştirme platformları vb.)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Başvuru Süreci ve 2026 Takvimi
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Başvurular, diğer güncel KOSGEB programlarının aksine tek bir
            kısa dönem yerine, geniş bir zaman aralığında sürekli olarak
            alınıyor.
          </p>
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Başvuru Dönemi
            </h3>
            <p className="leading-8 text-gray-700">
              Yapay Zeka Kredi Programı başvuruları <strong>9 Temmuz 2026 –
              31 Aralık 2026</strong> tarihleri arasında KOSGEB KOBİ Bilgi
              Sistemi üzerinden alınmaktadır. Bu yazının yayımlandığı Ağustos
              2026 itibarıyla program hâlâ açık ve başvuruya kapalı değildir.
              Bütçe tükenmesi veya erken kapanış ihtimaline karşı,
              Teknogirişim Rozeti sürecini tamamlamış işletmelerin başvuruyu
              geciktirmemesi önerilir.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🖥️</div>
              <h3 className="text-xl font-bold">1. Ön Hazırlık</h3>
              <p className="mt-3 text-sm text-gray-600">
                Teknogirişim Rozeti alınır, KOBİ Bilgi Sistemi kaydı güncellenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">👛</div>
              <h3 className="text-xl font-bold">2. GO Dijital Cüzdan</h3>
              <p className="mt-3 text-sm text-gray-600">
                İşletme adına elektronik para/dijital cüzdan hesabı açılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📤</div>
              <h3 className="text-xl font-bold">3. Kredi Başvurusu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvuru formu sistem üzerinden doldurulur, koşullar otomatik denetlenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">4. Teminat Temini</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yönergedeki şartlara uygun Kesin Teminat Mektubu bankadan alınır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">☁️</div>
              <h3 className="text-xl font-bold">5. Hizmet Kullanımı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Serbest kalan kredi ile protokollü sağlayıcıdan AI hizmeti alınır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Geri Ödeme</h3>
              <p className="mt-3 text-sm text-gray-600">
                12 ay ödemesiz dönem sonrası, 4&apos;er aylık dönemlerde 4 eşit taksit ödenir.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 GO Dijital Cüzdan Hesabı Nasıl Açılır?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Kredi başvurusunun ön şartlarından biri GO Dijital Cüzdan
              hesabına sahip olmaktır; hesap yoksa süreç kredi onayını
              beklemeden başlatılabilir. Onay sonrasında zaman kaybetmemek
              için cüzdan açılış işlemlerini önceden tamamlamak faydalı olur.
              Aşağıdaki adımlar özet niteliğindedir;{" "}
              <Link
                href="/blog/go-dijital-cuzdan-nedir-nasil-acilir"
                className="font-semibold text-orange-600 underline hover:text-orange-700"
              >
                GO Dijital Cüzdan&apos;ın ne olduğu, güvenlik/MASAK boyutu ve
                ayrıntılı kayıt sürecini anlattığımız yazımızda
              </Link>{" "}
              konuyu daha detaylı bulabilirsiniz:
            </p>
            <ol className="ml-6 list-decimal space-y-4 text-gray-700 marker:font-bold marker:text-emerald-600">
              <li>
                <strong>Sözleşme süreci:</strong> İşletme yetkilisi, bağlı
                bulunduğu KOSGEB Müdürlüğü&apos;ne başvurarak Çerçeve
                Sözleşmesi, MASAK Sözleşmesi ve aydınlatma metinlerini
                imzalar; bu aşamada imza sirküleri de teslim edilir.
              </li>
              <li>
                <strong>GO Dijital Cüzdan kaydı:</strong> Sözleşme
                tamamlandıktan sonra mobil uygulama veya web üzerinden
                &quot;Kayıt Ol&quot; adımı tamamlanır. Münferit yetkili
                işletmelerde tek yetkilinin tanımlı olması yeterlidir;
                müşterek yetkili işletmelerde ise her yetkilinin kendi cep
                telefonu numarasıyla ayrı ayrı kayıt olması gerekir.
              </li>
              <li>
                <strong>Evrak yükleme:</strong> Vergi levhası, imza
                sirküleri, ortaklık sözleşmesi gibi istenen belgeler sisteme
                yüklenir ve başvuru onaya gönderilir; bu adım genellikle
                birkaç dakika sürer.
              </li>
              <li>
                <strong>Değerlendirme ve onay:</strong> Belgeler incelendikten
                sonra yetkili kullanıcıya SMS ile geçici şifre gönderilir;
                ilk girişte kalıcı şifre oluşturularak hesap aktif hale
                gelir.
              </li>
              <li>
                <strong>Kredinin cüzdana aktarılması:</strong> Kredi
                onaylandığında tutar, işletmenin GO Dijital Cüzdan hesabına
                blokeli olarak aktarılır ve yukarıdaki mekanizma (teminat →
                hizmet alımı → fatura → bloke serbest bırakma) işlemeye
                başlar.
              </li>
            </ol>
          </div>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Kredi <strong>nakit olarak</strong> işletmeye geçmez; yalnızca protokollü hizmet sağlayıcılara yapılan ödemelerde kullanılabilir.</li>
              <li>Teminat mektubunda yönergede belirtilen ifadelerin (&quot;GO Dijital Yapay Zeka Kredisi&quot; ibaresi dahil) birebir yer alması zorunludur; uygun olmayan teminat kabul edilmez.</li>
              <li>Teminat vadesi süresiz olmalı veya son geri ödeme tarihinden en az 6 ay sonrasını kapsamalıdır; bu mümkün değilse asgari 1 yıllık teminat sunulabilir.</li>
              <li>Taksitlerden biri vadesinde ödenmezse, 7 günlük ek süre sonunda ödeme yapılmazsa borcun tamamı muaccel hale gelir ve teminat nakde çevrilir.</li>
              <li>Uyuşmazlıklarda Ankara Mahkemeleri ve İcra Daireleri yetkilidir.</li>
              <li>Teknogirişim Rozeti&apos;nin geçerlilik süresi 3 yıldır; süresi dolan işletmeler kredi başvurusundan önce rozeti yenilemelidir.</li>
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
                Teknogirişim Rozetim yok, önce onu mu almalıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. Yapay Zeka Kredisi&apos;ne başvurabilmenin ön şartı,
                başvuru tarihi itibarıyla geçerli bir Teknogirişim
                Rozeti&apos;ne sahip olmaktır. Rozetiniz yoksa süreç
                teknogirisim.sanayi.gov.tr üzerinden başlatılmalı ve rozet
                onaylandıktan sonra kredi başvurusu yapılmalıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kredi gerçekten faizsiz mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet, yönergeye göre kullandırılan kredi için herhangi bir
                faiz veya komisyon uygulanmıyor. İşletme yalnızca kullandığı
                anaparayı, 12 aylık ödemesiz dönemin ardından 4 eşit
                taksitte geri ödüyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Krediyi işletme sermayesi veya başka bir gider için kullanabilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Kredi yalnızca protokol kapsamındaki yapay zeka veri
                merkezi ve hizmet sağlayıcılarından alınan GPU/CPU/RAM,
                veri depolama ve AI araç/platform hizmetlerinin
                ödemesinde kullanılabilir; nakit çekim veya başka amaçlı
                harcama söz konusu değildir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Teminat şart mı, teminatsız başvuru yapılabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Teminat zorunludur. Onaylanan kredi tutarı GO Dijital
                Cüzdan hesabına önce blokeli olarak aktarılır; blokenin
                kaldırılıp kullanılabilir hale gelmesi için yönergedeki
                şartlara uygun bir banka Kesin Teminat Mektubu sunulması
                gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Başvuru şu an (Ağustos 2026) açık mı?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet, program 9 Temmuz 2026&apos;da başladı ve mevcut takvime
                göre 31 Aralık 2026&apos;ya kadar başvuruya açık.
                Uygulamada bütçe ve kontenjana bağlı erken kapanış
                ihtimaline karşı güncel durumun KOSGEB&apos;in resmî
                duyurularından teyit edilmesi önerilir.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Yapay Zeka Kredi Başvurunuzda Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              Teknogirişim Rozeti şartını sağlamak, GO Dijital Cüzdan
              üzerinden kredi sürecini yönetmek ve teminat ile gider
              kalemlerini doğru planlamak, 5 milyon TL&apos;ye kadar
              faizsiz krediden yararlanma sürecini hızlandırır.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Başvurunuzu birlikte değerlendirmek için bizimle
                iletişime geçin.
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
            KOSGEB Yapay Zeka Kredi Programı, teknoloji girişimlerinin yapay
            zeka altyapısına erişimindeki en büyük engellerden biri olan
            GPU/bulut maliyetini, faizsiz ve 24 aya yayılan bir kredi
            mekanizmasıyla hafifletiyor. Ancak programdan yararlanabilmek
            için önce Teknogirişim Rozeti&apos;ne sahip olmak, ardından
            GO Dijital Cüzdan, teminat mektubu ve fatura onay sürecini doğru
            yönetmek gerekiyor. Bu adımlardan herhangi birinin eksik ya da
            hatalı yürütülmesi, başvurunun reddedilmesine veya onaylanan
            kredinin süresi içinde kullanılamayıp iptal edilmesine yol
            açabiliyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin Teknogirişim Rozeti başvurusundan Yapay Zeka Kredi
            Programı&apos;na, teminat sürecinden diğer güncel KOSGEB ve
            TÜBİTAK destek programlarıyla örtüşen fırsatların
            belirlenmesine kadar tüm süreci Koray Akdağ / Sistem Global
            Danışmanlık olarak uçtan uca yönetiyoruz. Ayrı bir danışmanlık
            firması aramanıza gerek kalmadan, başvuru dosyanızın
            hazırlanmasından sonrasındaki raporlama yükümlülüklerinize
            kadar tek noktadan destek almak için bizimle iletişime
            geçebilirsiniz.
          </p>
        </section>
    </BlogLayout>
  );
}
