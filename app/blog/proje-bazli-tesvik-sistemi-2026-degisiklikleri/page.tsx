import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Proje Bazlı Teşvik Sistemi 2026: 11572 Sayılı Karar ile Neler Değişti? | Koray Akdağ",
  description:
    "9 Ağustos 2026'da yürürlüğe giren 11572 sayılı Cumhurbaşkanı Kararı, Proje Bazlı Devlet Yardımı sisteminde fizibilite raporu, izleme/raporlama yükümlülüğü ve yabancı yatırımcı hükümlerini değiştirdi. Kimleri etkiliyor, ne yapılmalı? 2026 güncel rehber.",
  keywords: [
    "proje bazlı teşvik sistemi 2026",
    "proje bazlı devlet yardımı",
    "11572 sayılı karar",
    "proje bazlı teşvik değişiklikleri 2026",
    "yatırımlara proje bazlı devlet yardımı verilmesine ilişkin karar",
    "proje bazlı teşvik fizibilite raporu",
    "proje bazlı teşvik başvurusu",
    "teknoloji hamlesi programı 2026",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Proje Bazlı Teşvik Sisteminde 2026 Değişikliği: 11572 Sayılı Karar Ne Getiriyor?"
      description="9 Ağustos 2026 tarihli ve 33335 sayılı Resmî Gazete'de yayımlanan 11572 sayılı Cumhurbaşkanı Kararı, Proje Bazlı Devlet Yardımı sisteminde fizibilite raporu şartından yatırım sonrası izleme yükümlülüklerine kadar önemli değişiklikler getirdi. Kapsamlı yatırımcılar için güncel rehber."
      category="YATIRIM TEŞVİKLERİ • PROJE BAZLI TEŞVİK • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="proje-bazli-tesvik-sistemi-2026-degisiklikleri"
      coverImage="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            9 Ağustos 2026 tarihli ve 33335 sayılı Resmî Gazete&apos;de
            yayımlanan 11572 sayılı Cumhurbaşkanı Kararı, 2016/9495 sayılı
            &quot;Yatırımlara Proje Bazlı Devlet Yardımı Verilmesine İlişkin
            Karar&quot;da köklü değişiklikler yaptı. Asgari 2 milyar TL (Teknoloji
            Hamlesi Programı kapsamındaki yatırımlarda 100 milyon TL) tutarındaki
            büyük ölçekli, stratejik yatırımları hedefleyen bu sistem; artık
            fizibilite raporu, yatırım sonrası izleme ve yabancı yatırımcı
            sözleşmeleri konusunda farklı bir çerçevede işliyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Proje Bazlı Teşvik Sistemi tam olarak nedir?</li>
            <li>✔ 11572 sayılı Karar hangi maddeleri değiştirdi?</li>
            <li>✔ Fizibilite raporu artık kim tarafından hazırlanacak?</li>
            <li>✔ Yatırım sonrası izleme ve raporlama şartları neler?</li>
            <li>✔ Yabancı yatırımcılar için yeni sözleşme imkânı nedir?</li>
            <li>✔ Genel Yatırım Teşvik Belgesi&apos;nden farkı ne?</li>
            <li>✔ Başvuru süreci nasıl işliyor, kimler etkileniyor?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Proje Bazlı Teşvik Sistemi Nedir?
            </Link>
            <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Yararlanabilir, Destek Unsurları Neler?
            </Link>
            <Link href="#karar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. 9 Ağustos 2026&apos;da Ne Değişti? 11572 Sayılı Karar
            </Link>
            <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Eski ve Yeni Uygulama Karşılaştırması
            </Link>
            <Link href="#izleme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Yatırım Sonrası İzleme ve Raporlama Yükümlülüğü
            </Link>
            <Link href="#yabanci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Yabancı Yatırımcılar İçin Yeni Sözleşme İmkânı
            </Link>
            <Link href="#fark" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Genel Yatırım Teşvik Belgesi ile Farkı
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Başvuru Süreci Adım Adım
            </Link>
            <Link href="#etkilenen" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Kimler Etkileniyor, Dikkat Edilmesi Gerekenler
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
            1. Proje Bazlı Teşvik Sistemi Nedir?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Proje Bazlı Teşvik Sistemi, 2016/9495 sayılı &quot;Yatırımlara
            Proje Bazlı Devlet Yardımı Verilmesine İlişkin Karar&quot; ile
            yürürlüğe giren, standart Yatırım Teşvik Belgesi sisteminden ayrı
            işleyen özel bir uygulamadır. Amacı; ülkenin mevcut veya gelecekte
            ortaya çıkabilecek kritik ihtiyaçlarını karşılayacak, arz
            güvenliğini sağlayacak, dışa bağımlılığı azaltacak, teknolojik
            dönüşümü hızlandıracak, yenilikçi, Ar-Ge yoğun ve yüksek katma
            değerli yatırımları münferit olarak, proje bazında desteklemektir.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Sistem, il/bölge bazlı standart teşvik uygulamalarının aksine tek
            tek projeleri değerlendirir; desteklenmesine karar verilen her
            proje ayrı bir Cumhurbaşkanı Kararı ile Resmî Gazete&apos;de
            yayımlanır. Bu nedenle Proje Bazlı Teşvik Sistemi, sektör
            ayrımı gözetmeksizin başvurulabilen genel Yatırım Teşvik
            Belgesi&apos;nden farklı olarak, Sanayi ve Teknoloji Bakanlığı&apos;nın
            stratejik önceliklerine uygun, çok büyük ölçekli ve seçici bir
            programdır.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            9 Ağustos 2026&apos;da yürürlüğe giren 11572 sayılı Cumhurbaşkanı
            Kararı, bu sistemin başvuru, değerlendirme ve özellikle yatırım
            sonrası izleme aşamalarında önemli değişiklikler yaptı.
            Değişikliklerin büyük bölümü, sistemin hesap verebilirliğini ve
            izlenebilirliğini artırmaya yönelik.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Sistemin 2016&apos;dan bu yana yürürlükte olması ve bu süre
            içinde onlarca mega ölçekli yatırımın (batarya, çip, kimya,
            savunma sanayi, enerji ve ileri teknoloji üretim tesisleri gibi
            alanlarda) proje bazlı destekten yararlanmış olması, kamunun
            verdiği desteğin doğru kullanılıp kullanılmadığının daha
            sistematik biçimde izlenmesi ihtiyacını doğurdu. 11572 sayılı
            Karar, tam da bu ihtiyaca cevap veriyor: destek kararı almak
            artık sürecin sonu değil, yatırımın gerçekleşmesi ve öngörülen
            hedeflere ulaşılması boyunca takip edilen çok aşamalı bir
            taahhüdün başlangıcı olarak konumlandırılıyor.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Bu değişiklik özellikle finans, mühendislik ve hukuk
            danışmanlığı süreçlerini bir arada yürüten şirketler için
            önemli bir fırsat da barındırıyor: fizibilite raporunun artık
            belirli kalkınma/yatırım bankalarınca hazırlanması, projenin
            finansal modelinin daha başından itibaren bankacılık
            standartlarına uygun kurgulanmasını gerektiriyor. Bu da
            yatırımcıların, başvuru öncesinde finansal danışmanlık ve
            fizibilite hazırlığına ayırdıkları zamanı ve kaynağı yeniden
            planlamasını zorunlu kılıyor.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Neden Önemli?
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Halihazırda proje bazlı destek kararı almış yatırımcılar için yeni raporlama yükümlülükleri doğdu</li>
              <li>✔ Yeni başvuru hazırlayan yatırımcılar için fizibilite raporu süreci değişti</li>
              <li>✔ 5 milyar TL üzeri yabancı sermayeli projeler için yeni bir hukuki araç getirildi</li>
              <li>✔ Uyumsuzluk, destek kararının iptaline kadar giden riskler doğurabilir</li>
            </ul>
          </div>
        </section>

        {/* 2. DESTEKLER */}
        <section id="destekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Yararlanabilir, Destek Unsurları Neler?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Sanayi ve Teknoloji Bakanlığı&apos;nın Yatırıma Destek
            Platformu&apos;ndaki güncel bilgilere göre sistem, aşağıdaki
            asgari sabit yatırım tutarlarını öngören özel sektör
            kuruluşlarına açıktır. Kalkınma planları ve yıllık programlarda
            belirlenen öncelikli alanlarla uyumlu, arz güvenliğini
            destekleyen, dışa bağımlılığı azaltan veya yüksek katma değerli
            üretim sağlayan projeler bu kapsamda değerlendiriliyor:
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                💰 Genel Yatırımlar
              </h3>
              <p className="text-gray-700">
                Asgari <strong>2 milyar TL</strong> sabit yatırım tutarı
                öngören projeler
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🎯 Teknoloji Hamlesi Programı
              </h3>
              <p className="text-gray-700">
                Öncelikli ürünlere yönelik yatırımlarda asgari{" "}
                <strong>100 milyon TL</strong> sabit yatırım tutarı
              </p>
            </div>
          </div>
          <p className="mt-8 mb-6 text-lg leading-9 text-gray-700">
            Sistem kapsamında desteklenmesine karar verilen bir proje,
            aşağıdaki destek unsurlarının bir kısmından veya tamamından
            yararlanabilir; hangi unsurların uygulanacağı her proje için
            ayrı ayrı Destek Kararı&apos;nda belirlenir:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Gümrük vergisi muafiyeti",
              "KDV istisnası ve KDV iadesi",
              "Vergi indirimi veya istisnası",
              "Sigorta primi işveren hissesi desteği",
              "Gelir vergisi stopajı desteği",
              "Nitelikli personel desteği",
              "Faiz veya kâr payı desteği",
              "Sermaye katkısı",
              "Enerji desteği",
              "Kamu alım garantisi",
              "Yatırım yeri tahsisi ve altyapı desteği",
              "İzin, tahsis, ruhsat ve lisans süreçlerinde kolaylaştırma, hibe desteği",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <span className="text-orange-500">✔</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Bu listedeki unsurların tamamı her projede uygulanmaz; Bakanlık,
            projenin niteliğine, katma değerine, istihdam etkisine ve
            stratejik önceliğine göre hangi destek unsurlarının hangi
            oranlarda uygulanacağını Destek Kararı&apos;nda ayrı ayrı belirler.
            Örneğin ileri teknoloji ürünü üreten, yerlileştirme oranı yüksek
            bir yatırımda vergi indirimi, sigorta primi desteği ve nitelikli
            personel desteği bir arada uygulanabilirken; enerji yoğun bir
            üretim tesisinde enerji desteği ve KDV istisnası ön plana
            çıkabilir. Bu esneklik, sistemin genel Yatırım Teşvik
            Belgesi&apos;nden ayrışan en önemli yönlerinden biridir.
          </p>
        </section>

        {/* 3. KARAR */}
        <section id="karar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. 9 Ağustos 2026&apos;da Ne Değişti? 11572 Sayılı Karar
          </h2>
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🗓️ Karar Bilgileri
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Resmî Gazete: 9 Ağustos 2026, Sayı 33335</li>
              <li>✔ Karar No: 11572</li>
              <li>✔ Konu: 2016/9495 sayılı Karar&apos;da değişiklik</li>
              <li>✔ Yürürlük: Yayım tarihi itibarıyla (izleme/raporlama hükümleri için farklı geçerlilik esasları öngörülmüştür)</li>
            </ul>
          </div>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Karar, teknik detayları itibarıyla bir hukuk metni olsa da
            yatırımcılar açısından pratik sonucu nettir: sistem artık
            başvuru öncesinde daha profesyonel bir fizibilite hazırlığı,
            yatırım sürecinde daha sıkı bir zaman takibi ve tamamlama
            sonrasında da yıllarca sürecek bir raporlama disiplini
            gerektiriyor. Değişikliğin öne çıkan başlıkları şunlar:
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Fizibilite raporu artık kalkınma ve yatırım bankalarınca hazırlanıyor
              </h3>
              <p className="text-gray-700">
                Başvuru aşamasında sunulacak fizibilite raporunun, Bakanlık
                ile protokol imzalamış kalkınma ve yatırım bankaları
                tarafından hazırlanması şartı getirildi. Bu değişiklik,
                başvuru öncesi hazırlık sürecini ve rapor standardını
                doğrudan etkiliyor.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Yatırım sonrası izleme yükümlülüğü ağırlaştırıldı
              </h3>
              <p className="text-gray-700">
                Tamamlama vizesi sonrasında yatırımcıların 5 yıl boyunca
                yıllık faaliyet raporu sunması zorunlu hale getirildi.
                Bu raporlarda alınan destek unsurlarının kullanımına ilişkin
                bilgiler de yer alacak.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Yatırıma başlama şartı netleştirildi
              </h3>
              <p className="text-gray-700">
                Destek Kararı&apos;nın yürürlüğe girmesinden itibaren 3 yıl
                içinde, beyan edilen yatırım tutarının en az 200 milyon TL&apos;si
                veya %10&apos;u kadar harcama yapılmış olması gerekiyor; aksi
                halde destek kararının iptali gündeme gelebiliyor.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Kısmi tamamlanmada enerji ve sigorta desteği kullanılabiliyor
              </h3>
              <p className="text-gray-700">
                Yatırımın kısmen faaliyete geçtiği, uzman kuruluş tespiti ve
                yeminli mali müşavir raporuyla belgelenen durumlarda; enerji
                ve sigorta primi desteklerinden, toplam limitin %50&apos;sine
                kadar tamamlama vizesinden önce yararlanılabiliyor.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
                Terminoloji ve kurumsal yapı güncellendi
              </h3>
              <p className="text-gray-700">
                &quot;Teknoloji Odaklı Sanayi Hamlesi Programı&quot; ifadesi
                &quot;Teknoloji Hamlesi Programı&quot; olarak sadeleştirildi;
                metindeki &quot;Bakanlar Kurulu&quot; referansları
                &quot;Cumhurbaşkanı&quot; olarak güncellendi ve kalkınma/yatırım
                bankası tanımları karara eklendi.
              </p>
            </div>
          </div>
        </section>

        {/* 4. KARŞILAŞTIRMA */}
        <section id="karsilastirma" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Eski ve Yeni Uygulama Karşılaştırması
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Konu</th>
                  <th className="p-5">11572 Öncesi</th>
                  <th className="p-5">11572 Sonrası (Ağustos 2026)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Fizibilite raporu</td>
                  <td className="p-5">Bağımsız danışmanlık/kuruluşlarca hazırlanabiliyordu</td>
                  <td className="p-5">Bakanlıkla protokollü kalkınma/yatırım bankalarınca hazırlanmalı</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Tamamlama sonrası raporlama</td>
                  <td className="p-5">Standart izleme mekanizması</td>
                  <td className="p-5">5 yıl boyunca yıllık faaliyet raporu zorunlu</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Yatırıma başlama şartı</td>
                  <td className="p-5">Genel çerçevede belirleniyordu</td>
                  <td className="p-5">3 yılda min. 200 milyon TL veya %10 harcama şartı netleştirildi</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kısmi tamamlanma desteği</td>
                  <td className="p-5">Sınırlı/az netleştirilmiş</td>
                  <td className="p-5">Enerji/sigorta desteği %50 tavanla kısmi kullanılabiliyor</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Yabancı yatırımcı sözleşmesi</td>
                  <td className="p-5">Ayrı bir özel hukuk sözleşmesi öngörülmüyordu</td>
                  <td className="p-5">5 milyar TL üzeri projelerde &quot;Yatırım Projesi Sözleşmesi&quot; imzalanabiliyor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. İZLEME */}
        <section id="izleme" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Yatırım Sonrası İzleme ve Raporlama Yükümlülüğü
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Değişikliğin belki de yatırımcıları en çok ilgilendiren yönü,
            yatırım tamamlandıktan sonraki dönemde getirilen ek yükümlülükler.
            Tamamlama vizesi almak, genel Yatırım Teşvik Belgesi
            uygulamasında sürecin fiilen kapandığı anlamına gelirken, Proje
            Bazlı Teşvik Sistemi&apos;nde artık bu bir dönüm noktası değil,
            5 yıl sürecek yeni bir yükümlülük döneminin başlangıcı. Tamamlama
            vizesi alan bir yatırımcı, artık bununla işi bitmiş saymamalı:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📄</div>
              <h3 className="text-xl font-bold">1. Yıllık Faaliyet Raporu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Tamamlama vizesinden itibaren 5 yıl boyunca, her yıl
                Bakanlığa faaliyet raporu sunulmalı.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💶</div>
              <h3 className="text-xl font-bold">2. Destek Kullanım Bilgisi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Raporlarda, o yıl içinde kullanılan destek unsurlarının
                tutar ve niteliği ayrıca belirtilmeli.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏭</div>
              <h3 className="text-xl font-bold">3. Üretim/Faaliyet Verileri</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yatırımın öngörülen üretim ve istihdam hedeflerine uygunluğu
                izleniyor.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⏱️</div>
              <h3 className="text-xl font-bold">4. Zamanlama Takibi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Destek Kararı yürürlüğünden itibaren 3 yıllık harcama
                eşiğinin (200 milyon TL veya %10) gerçekleşip
                gerçekleşmediği izleniyor.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧾</div>
              <h3 className="text-xl font-bold">5. Kısmi Tamamlanma Belgesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Enerji/sigorta desteğinden erken yararlanmak isteyenler
                için uzman kuruluş tespiti ve YMM raporu gerekiyor.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⚠️</div>
              <h3 className="text-xl font-bold">6. Uyumsuzluk Riski</h3>
              <p className="mt-3 text-sm text-gray-600">
                Raporlama veya harcama şartlarına uyulmaması, destek
                kararının kısmen ya da tamamen iptaline yol açabilir.
              </p>
            </div>
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Kaynak niteliğindeki bültenlere göre yıllık raporlama
            yükümlülüğü, karara eklenen hükümler çerçevesinde 26 Kasım 2016
            tarihinden bu yana tamamlama vizesi almış projeler için de
            geriye dönük olarak uygulanabiliyor. Bu nedenle, daha önce
            proje bazlı destekten yararlanmış ve tamamlama vizesi almış
            şirketlerin de mevcut durumlarını gözden geçirmesi önem taşıyor.
          </p>
        </section>

        {/* 6. YABANCI */}
        <section id="yabanci" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Yabancı Yatırımcılar İçin Yeni Sözleşme İmkânı
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            11572 sayılı Karar, doğrudan yabancı yatırımcılar ve tamamı
            yabancı sermayeli iştirakler için ayrı bir düzenleme getirdi.
            Buna göre, asgari <strong>5 milyar TL</strong> yatırım tutarına
            sahip projelerde, yatırımcı ile Bakanlık arasında özel hukuk
            hükümlerine tabi bir <strong>&quot;Yatırım Projesi
            Sözleşmesi&quot;</strong> imzalanabiliyor.
          </p>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Bu Düzenleme Neden Önemli?
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Büyük ölçekli yabancı sermayeli yatırımlarda taraflar arasındaki hak ve yükümlülükleri sözleşme zemininde netleştiriyor</li>
              <li>✔ Uluslararası yatırımcılar açısından hukuki öngörülebilirliği artırma amacı taşıyor</li>
              <li>✔ Türkiye&apos;yi mega ölçekli üretim/teknoloji yatırımları için daha kurumsal bir çerçeveye taşıyor</li>
            </ul>
          </div>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Klasik teşvik belgesi süreçlerinde yatırımcı ile idare
            arasındaki ilişki büyük ölçüde idari kararlarla yürütülürken,
            özel hukuk hükümlerine tabi bir sözleşme imzalanabilmesi,
            uluslararası kurumsal yatırımcıların kendi hukuk
            departmanlarının ve finansman ortaklarının alışık olduğu bir
            model sunuyor. Bu, özellikle Türkiye&apos;yi bölgesel üretim üssü
            olarak değerlendiren çok uluslu şirketler için karar alma
            sürecini kolaylaştırabilecek bir unsur.
          </p>
        </section>

        {/* 7. FARK */}
        <section id="fark" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Genel Yatırım Teşvik Belgesi ile Farkı
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Proje Bazlı Teşvik Sistemi, çoğu KOBİ ve orta ölçekli yatırımcının
            başvurduğu{" "}
            <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="font-semibold text-orange-600 hover:underline">
              genel Yatırım Teşvik Belgesi sistemi
            </Link>{" "}
            ile karıştırılmamalıdır. Genel sistemde bölge, sektör ve NACE
            koduna göre önceden belirlenmiş destek unsurları ve E-TUYS
            üzerinden herkese açık bir başvuru mekanizması söz konusudur.
            Proje Bazlı Teşvik Sistemi&apos;nde ise:
          </p>
          <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
            <li>Başvuru genel olarak Bakanlığın davet veya duyurusuna istinaden yapılır</li>
            <li>Asgari yatırım tutarı çok daha yüksektir (2 milyar TL / Teknoloji Hamlesi&apos;nde 100 milyon TL)</li>
            <li>Her proje ayrı bir Cumhurbaşkanı Kararı ile münferiden desteklenir</li>
            <li>Destek unsurlarının kapsamı ve oranı projeye özel olarak belirlenir</li>
            <li>Ağustos 2026 değişiklikleriyle birlikte izleme ve raporlama yükü belirgin biçimde arttı</li>
          </ul>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Pratikte bu iki sistemi birbirinin alternatifi değil, farklı
            yatırım ölçeklerine hitap eden tamamlayıcı araçlar olarak
            görmek daha doğru. Bir yatırımcı büyüme planlarının erken
            aşamasında genel Yatırım Teşvik Belgesi ile başlayıp, proje
            olgunlaştıkça ve yatırım tutarı büyüdükçe Proje Bazlı Teşvik
            Sistemi&apos;ni değerlendirebilir. Hangi sistemin hangi aşamada
            daha avantajlı olduğu, projenin sektörü, tutarı ve zaman
            planına göre değişir; bu nedenle başvuru öncesinde her iki
            sistemin destek unsurlarının somut bir fayda-maliyet
            karşılaştırmasıyla değerlendirilmesi önerilir.
          </p>
        </section>

        {/* 8. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Başvuru Süreci Adım Adım
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📢</div>
              <h3 className="text-xl font-bold">1. Davet/Duyuru</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvurular, Bakanlık tarafından firmalara yapılan davet
                veya duyuru esasına dayanır. Teknoloji Hamlesi Programı
                kapsamında dönemsel çağrılar da yayımlanabilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">2. Fizibilite Raporu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bakanlıkla protokollü bir kalkınma/yatırım bankasıyla
                çalışılarak proje fizibilite raporu hazırlanır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💻</div>
              <h3 className="text-xl font-bold">3. E-TUYS Başvurusu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvuru dosyası, Elektronik Teşvik Uygulama ve Yabancı
                Sermaye Bilgi Sistemi (E-TUYS) üzerinden iletilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">4. Değerlendirme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Proje, stratejik öncelik ve teknik kriterlere göre
                Bakanlık tarafından değerlendirilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📜</div>
              <h3 className="text-xl font-bold">5. Destek Kararı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Uygun bulunan projeler, Cumhurbaşkanı Kararı ile Resmî
                Gazete&apos;de ilan edilerek desteklenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">6. Yatırım ve İzleme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yatırım gerçekleştirilir, tamamlama vizesi alınır ve
                sonrasında 5 yıl boyunca yıllık raporlama yapılır.
              </p>
            </div>
          </div>
        </section>

        {/* 9. ETKİLENEN */}
        <section id="etkilenen" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Kimler Etkileniyor, Dikkat Edilmesi Gerekenler
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Değişikliğin etkisi, tek bir gruba değil, sistemle farklı
            aşamalarda temas eden birden fazla yatırımcı profiline
            yansıyor. Bir kısmı yeni başvuru sürecini doğrudan etkilerken,
            bir kısmı geçmişte alınmış destek kararlarının bugünkü
            uygulamasını ilgilendiriyor:
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                👥 Değişiklikten Etkilenen Gruplar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Halihazırda proje bazlı destek kararı almış, tamamlama vizesi bekleyen veya almış yatırımcılar</li>
                <li>✔ 2 milyar TL / 100 milyon TL eşiğini aşan yeni bir yatırım planlayan sanayi kuruluşları</li>
                <li>✔ Teknoloji Hamlesi Programı kapsamında başvuru hazırlayan öncelikli ürün üreticileri</li>
                <li>✔ Türkiye&apos;de mega ölçekli tesis kurmayı planlayan yabancı sermayeli şirketler</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ⚠️ Dikkat Edilmesi Gerekenler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Fizibilite raporunuzu artık protokollü bir kalkınma/yatırım bankasıyla hazırlatmanız gerekiyor</li>
                <li>✔ 5 yıllık raporlama yükümlülüğünü takip edecek bir süreç kurmadan destek kararını &quot;kapanmış&quot; saymayın</li>
                <li>✔ 3 yıllık harcama eşiğini (200 milyon TL / %10) takvimlendirin, gecikme riskini erken tespit edin</li>
                <li>✔ Kısmi tamamlanma desteğinden yararlanmak istiyorsanız uzman kuruluş tespiti ve YMM raporu sürecini önceden planlayın</li>
                <li>✔ Karar geriye dönük etkiler de içerebildiğinden, geçmiş projeleriniz için mevcut durumu Bakanlıkla teyit edin</li>
              </ul>
            </div>
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
                11572 sayılı Karar ne zaman yürürlüğe girdi?
              </h3>
              <p className="leading-8 text-gray-700">
                9 Ağustos 2026 tarihli ve 33335 sayılı Resmî Gazete&apos;de
                yayımlanarak yürürlüğe girdi. Bazı raporlama hükümleri için
                geçmişe dönük geçerlilik esasları da öngörülmüştür; bu nedenle
                mevcut destek kararı sahiplerinin durumlarını Bakanlıkla
                teyit etmesi önerilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                KOBİ ölçeğindeki bir şirket Proje Bazlı Teşvik Sistemi&apos;ne başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Sistem, asgari 2 milyar TL (Teknoloji Hamlesi Programı&apos;nda
                100 milyon TL) sabit yatırım tutarı öngören projelere açıktır.
                Bu eşiklerin altındaki yatırımlar için genel Yatırım Teşvik
                Belgesi sistemi, bölgesel ve sektörel destek unsurlarıyla
                daha uygun bir seçenektir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Fizibilite raporunu artık kim hazırlayabilir?
              </h3>
              <p className="leading-8 text-gray-700">
                Yeni düzenlemeye göre fizibilite raporu, Sanayi ve Teknoloji
                Bakanlığı ile protokol imzalamış kalkınma ve yatırım
                bankaları tarafından hazırlanmalıdır. Başvuru öncesinde
                hangi bankaların bu protokole sahip olduğunu teyit etmek
                gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Tamamlama vizesi aldıktan sonra yükümlülüklerim biter mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. 11572 sayılı Karar ile tamamlama vizesi sonrası 5 yıl
                boyunca yıllık faaliyet raporu sunma zorunluluğu getirildi.
                Bu raporlarda destek unsurlarının kullanımına ilişkin
                bilgilerin de yer alması gerekiyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Yatırım Projesi Sözleşmesi kimler için geçerli?
              </h3>
              <p className="leading-8 text-gray-700">
                Asgari 5 milyar TL yatırım tutarına sahip, doğrudan yabancı
                yatırımcılar veya tamamı yabancı sermayeli iştirakler bu
                özel hukuk sözleşmesini Bakanlıkla imzalayabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Proje Bazlı Teşvik Sistemi ile Teknoloji Hamlesi Programı aynı şey mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır, ama iç içe geçmiş durumdalar. Teknoloji Hamlesi
                Programı (eski adıyla Teknoloji Odaklı Sanayi Hamlesi
                Programı), öncelikli ürünlere yönelik yatırımlarda daha
                düşük bir asgari tutarla (100 milyon TL) Proje Bazlı Teşvik
                Sistemi&apos;nden yararlanılmasını sağlayan özel bir çağrı
                mekanizmasıdır. Diğer tüm yatırımlarda asgari tutar 2 milyar
                TL olarak uygulanmaya devam ediyor.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Proje Bazlı Teşvik Sürecinizi Yeni Kurallara Uyumlu Hale
              Getirelim
            </h3>
            <p className="leading-8 text-gray-700">
              11572 sayılı Karar ile değişen fizibilite raporu, izleme ve
              raporlama yükümlülükleri ile yabancı yatırımcı hükümlerinin
              mevcut veya planlanan projenizi nasıl etkilediğini birlikte
              değerlendirelim.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Proje Bazlı Teşvik sürecinizi değerlendirmemiz için
                bizimle iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 11. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            9 Ağustos 2026 tarihli 11572 sayılı Karar, Proje Bazlı Teşvik
            Sistemi&apos;ni yalnızca büyük bir destek kararı almakla biten
            bir süreç olmaktan çıkarıp; fizibilite aşamasından yatırım
            sonrası 5 yıllık raporlamaya kadar uzanan, daha izlenebilir ve
            hesap verebilir bir yapıya dönüştürdü. Bu, hem yeni başvuru
            hazırlayan büyük ölçekli yatırımcılar hem de daha önce destek
            kararı almış, tamamlama vizesi süreci devam eden şirketler için
            planlamalarını gözden geçirmeyi gerektiren bir gelişme.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Kısacası, Proje Bazlı Teşvik Sistemi&apos;nden yararlanmayı
            planlayan ya da halihazırda destek kararı almış her yatırımcı
            için 2026 yaz döneminde atılması gereken ilk adım, mevcut
            projesinin bu yeni çerçeveye göre nerede durduğunu netleştirmek
            olmalı. Fizibilite raporunuzun hangi kuruluşça hazırlandığından
            tamamlama vizesi sonrası raporlama takviminize kadar her
            aşamayı yazılı olarak gözden geçirmek, ileride doğabilecek
            uyum sorunlarının önüne geçmenin en etkili yolu.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Proje Bazlı Teşvik Sistemi başvurunuzun hazırlanmasından fizibilite
            sürecine, destek kararı sonrası izleme ve yıllık raporlama
            yükümlülüklerinin eksiksiz yürütülmesine kadar tüm süreçte Koray
            Akdağ / Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir
            danışmanlık veya mali müşavirlik firması aramanıza gerek kalmadan;
            yatırım teşvik stratejinizden şirket değerleme ve finansal
            raporlama süreçlerinize kadar tüm ihtiyacınızı tek noktadan
            karşılayabiliriz. Yatırım projenizi 2026 güncel mevzuatına uygun
            şekilde planlamak için bizimle iletişime geçebilirsiniz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Güncel Rehberi</h3>
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
    </BlogLayout>
  );
}
