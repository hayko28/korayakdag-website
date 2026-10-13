import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Türkiye Yapay Zeka Eylem Planı 2026-2030: Şirketlere Etkisi | Koray Akdağ",
  description: "18 Ağustos 2026'da Resmî Gazete'de yayımlanan 2026/9 sayılı Genelge ile yürürlüğe giren Türkiye Yapay Zeka Eylem Planı'nda KOBİ'ler için GPU kredisi, yapay zeka kuponu, büyüme fonu ve uyum yükümlülükleri.",
  keywords: [
    "Türkiye Yapay Zeka Eylem Planı",
    "Yapay Zeka Eylem Planı 2026-2030",
    "2026/9 sayılı Cumhurbaşkanlığı Genelgesi",
    "yapay zeka kuponu KOBİ",
    "Yapay Zeka Büyüme Fonu",
    "Ulusal Yapay Zeka Araştırma Fonu",
    "GPU kredisi KOBİ",
    "yapay zeka düzenleyici deney alanı",
    "Sanayi ve Teknoloji Bakanlığı yapay zeka planı",
  ],
  alternates: {
    canonical: "/blog/turkiye-yapay-zeka-eylem-plani-2026-2030-sirketlere-etkisi",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye Yapay Zeka Eylem Planı (2026-2030) Nedir? Şirketler ve KOBİ'ler İçin Ne Değişiyor?"
      description="18 Ağustos 2026 tarihli ve 33344 sayılı Resmî Gazete'de yayımlanan 2026/9 sayılı Cumhurbaşkanlığı Genelgesi ile yürürlüğe giren Türkiye Yapay Zeka Eylem Planı, dört eksen ve 16 eylemle 2030'a kadar 1 trilyon TL'yi aşan katma değer hedefliyor. GPU kredisi, yapay zeka kuponu, Büyüme Fonu gibi KOBİ'leri ilgilendiren unsurlar, şimdiden başvurulabilir mevcut programlarla bağlantısı ve şirketlerin hazırlık yapması gereken noktalarla güncel rehber."
      category="YAPAY ZEKÂ • EYLEM PLANI • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="turkiye-yapay-zeka-eylem-plani-2026-2030-sirketlere-etkisi"
      coverImage="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısaca: Bu Planda Şirketleri İlgilendiren Ne Var?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye Yapay Zeka Eylem Planı (2026-2030), 18 Ağustos 2026 tarihli
          ve 33344 sayılı Resmî Gazete&apos;de yayımlanan 2026/9 sayılı
          Cumhurbaşkanlığı Genelgesi ile yürürlüğe girdi. Sanayi ve Teknoloji
          Bakanlığı koordinasyonunda hazırlanan plan, bir kanun değil; kamu
          kurumlarına görev ve hedef dağıtan bir yol haritası niteliğinde.
          Ama içerdiği sayısal hedefler (10 milyar TL araştırma fonu, 15
          milyar TL büyüme fonu, KOBİ&apos;ler için yapay zeka kuponu, GPU
          kredisi) doğrudan özel sektörü ve KOBİ&apos;leri etkiliyor.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Plan hangi tarihte, hangi resmî belgeyle yürürlüğe girdi?</li>
          <li>✔ Dört eksen (Fark Et, İstifade Et, Üret, Yönet) ne anlama geliyor?</li>
          <li>✔ KOBİ&apos;ler için somut olarak hangi fırsatlar planlanıyor?</li>
          <li>✔ Bu plan ile şu an başvurulabilir TÜBİTAK/KOSGEB programları arasındaki fark ne?</li>
          <li>✔ &quot;Yüksek etkili&quot; yapay zeka sistemi kullanan şirketleri hangi yükümlülükler bekliyor?</li>
          <li>✔ Şirketler bu plana göre şimdiden hangi adımları atabilir?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Plan Nedir, Hangi Belgeyle Yürürlüğe Girdi?
          </Link>
          <Link href="#eksenler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Dört Eksen ve Sayısal Hedefler
          </Link>
          <Link href="#kobi-firsatlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. KOBİ&apos;ler İçin Somut Fırsatlar
          </Link>
          <Link href="#karistirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Eylem Planı mı, Mevcut Destek Programı mı? Karıştırmayın
          </Link>
          <Link href="#uyum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Şirketler İçin Uyum ve Denetim Boyutu
          </Link>
          <Link href="#mevcut-programlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Şimdiden Başvurulabilecek Mevcut Programlar
          </Link>
          <Link href="#hazirlik" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Şirketler Şimdiden Nasıl Hazırlanmalı?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Resmî Kaynaklar
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
          1. Plan Nedir, Hangi Belgeyle Yürürlüğe Girdi?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Türkiye Yapay Zeka Eylem Planı (2026-2030), <strong>18 Ağustos
          2026</strong> tarihli ve <strong>33344 sayılı</strong> Resmî
          Gazete&apos;de yayımlanan <strong>2026/9 sayılı Cumhurbaşkanlığı
          Genelgesi</strong> ile uygulamaya kondu. Plan, Sanayi ve Teknoloji
          Bakanlığı koordinasyonunda; kamu kurumları, özel sektör
          temsilcileri, üniversiteler ve sivil toplum kuruluşlarının ortak
          çalışmasıyla hazırlandı ve Türkiye&apos;nin 2021-2025 dönemini
          kapsayan önceki Ulusal Yapay Zeka Stratejisi&apos;nin (2021/18
          sayılı Genelge) yerini aldı.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Hukuki olarak önemli bir ayrım var: Genelge, doğrudan şirketlere
          yükümlülük getiren bir kanun değil; kamu kurum ve kuruluşlarına
          &quot;üzerlerine düşen görev ve sorumlulukları hassasiyetle yerine
          getirme&quot; talimatı veren bir yol haritası. Bu nedenle plan,
          şirketler için şu anda doğrudan başvurulabilir, formu olan bir
          &quot;destek programı&quot; değil; önümüzdeki 2026-2030 döneminde
          hangi fonların, kredilerin ve düzenlemelerin devreye gireceğini
          gösteren bir çerçeve belgesi.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 Planın İlkesi ve Hedefi
          </h3>
          <p className="leading-8 text-gray-700">
            Sanayi ve Teknoloji Bakanı Mehmet Fatih Kacır&apos;ın
            açıklamasına göre hedef, Türkiye&apos;nin yapay zeka
            dönüşümünde &quot;seyirci değil, öncülerden biri&quot; olması.
            Plan, kamu ve özel sektör kaynaklarıyla 2030&apos;a kadar{" "}
            <strong>1 trilyon TL&apos;yi aşan ekonomik değer</strong>{" "}
            yaratılmasını hedefliyor.
          </p>
        </div>
      </section>

      {/* 2. EKSENLER */}
      <section id="eksenler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Dört Eksen ve Sayısal Hedefler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Plan, <strong>&quot;Fark Et, İstifade Et, Üret, Yönet&quot;</strong>{" "}
          adını verdiği dört eksen ve bu eksenler altında toplam{" "}
          <strong>16 öncelikli eylemden</strong> oluşuyor. Her eksenin
          kamuoyuna açıklanan en belirgin sayısal hedefleri şöyle:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Eksen</th>
                <th className="p-5">Odak</th>
                <th className="p-5">Öne Çıkan Sayısal Hedef</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Fark Et</td>
                <td className="p-5">Farkındalık, insan kaynağı, veri ekosistemi, hukuki çerçeve</td>
                <td className="p-5">2 yılda 5 milyon kişiye yapay zeka okuryazarlığı eğitimi; 2027 sonuna kadar 10.000 ileri düzey uzman, 100.000 uygulama profesyoneli</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İstifade Et</td>
                <td className="p-5">Hesaplama altyapısı, kamu ve özel sektörde kullanım</td>
                <td className="p-5">2030&apos;a kadar en az 1 GW veri merkezi kapasitesi; &quot;Herkes İçin GPU&quot; programında yılda en az 2 milyon GPU-saat (ilk faz)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Üret</td>
                <td className="p-5">Finansman, yerli modeller, robotik, büyüme</td>
                <td className="p-5">Ulusal Yapay Zeka Araştırma Fonu: en az 10 milyar TL; Yapay Zeka Büyüme Fonu: 15 milyar TL hedefi</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Yönet</td>
                <td className="p-5">Güvenilir çerçeve, düzenleme, uluslararası iş birliği</td>
                <td className="p-5">5 öncelikli sektörde düzenleyici deney alanı (finans, sağlık, enerji, mobilite, telekomünikasyon); yıllık ilerleme raporu</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Not: Bu tablo, planın kamuoyuna açıklanan eylem metinlerinden ve
          basın açıklamalarından derlenmiştir. 16 eylemin tam madde listesi
          ve her eylemin sorumlu kurumu için Resmî Gazete&apos;deki genelge
          metninin tamamına bakılması gerekir.
        </p>
      </section>

      {/* 3. KOBİ FIRSATLARI */}
      <section id="kobi-firsatlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. KOBİ&apos;ler İçin Somut Fırsatlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Planın büyük kısmı kamu altyapısı ve politika hedeflerine
          odaklanıyor; ama KOBİ ölçeğindeki işletmeleri doğrudan ilgilendiren
          birkaç madde de açıklandı:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">🎫 Yapay Zeka Kuponu</h3>
            <p className="text-sm leading-7 text-gray-700">
              İlk 12 ayda en az <strong>1.000 KOBİ&apos;ye</strong> yönelik
              bir yapay zeka kuponu uygulaması planlanıyor. Kuponun tam
              kapsamı ve hangi gideri karşılayacağı henüz ayrıntılı olarak
              yayımlanmadı; bu, Bakanlığın ilerleyen dönemde çıkaracağı
              uygulama tebliğiyle netleşecek bir konu.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">💻 GPU Kredisi / &quot;Herkes İçin GPU&quot;</h3>
            <p className="text-sm leading-7 text-gray-700">
              Girişimler, KOBİ&apos;ler ve araştırmacıların erişebileceği bir
              hesaplama kredisi modeli planlanıyor; ilk fazda yılda en az 2
              milyon GPU-saat, 2028 sonunda yılda en az 20 milyon GPU-saat
              hedefleniyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">💰 Yapay Zeka Büyüme Fonu</h3>
            <p className="text-sm leading-7 text-gray-700">
              15 milyar TL büyüklüğe ulaşması hedeflenen fon üzerinden, en az
              20 yapay zeka girişiminin Seri A, Seri B veya ölçeklenme
              yatırımı alması planlanıyor. Bu, erken/büyüme aşamasındaki
              yapay zeka girişimleri için bir sermaye kanalı.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-[#071A2F]">🏛️ Kamu Alımı ve Pilot Fırsatı</h3>
            <p className="text-sm leading-7 text-gray-700">
              İlk 12 ayda 10 bakanlıkta en az 30 pilot uygulama planlanıyor;
              kamu, yerli yapay zeka çözümleri için &quot;ilk müşteri&quot;
              rolü üstlenmeyi hedefliyor. Yerli çözüm geliştiren şirketler
              için bu, somut bir referans ve satış kanalı anlamına
              gelebilir.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Eylem Planı mı, Mevcut Destek Programı mı? Karıştırmayın
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ❗ En Sık Yapılan Karıştırma
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Çoğu işletme sahibi, &quot;Yapay Zeka Eylem Planı açıklandı,
            demek ki şimdi bir yere başvurabilirim&quot; diye düşünüyor. Oysa
            Eylem Planı ile <strong>şu an gerçekten başvurulabilir</strong>{" "}
            programlar birbirinden farklı şeyler:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Türkiye Yapay Zeka Eylem Planı (2026-2030):</strong> Bir genelge/yol haritası. Başvuru formu, son tarih veya somut başvuru şartı yok; sadece 2026-2030 arasında hangi fonların ve altyapıların kurulacağını gösteriyor.</li>
            <li><strong>TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı:</strong> Şirketlerin üniversite/kamu araştırma kurumuyla konsorsiyum kurarak başvurduğu, somut bütçe ve destek oranı olan, dönemsel olarak açılan gerçek bir çağrı.</li>
            <li><strong>KOSGEB Yapay Zeka Kredi Programı:</strong> Teknogirişim Rozeti sahibi girişimlerin GPU/bulut altyapısı için kullanabildiği, şu an işleyen, faizsiz bir kredi mekanizması.</li>
          </ul>
          <p className="mt-4 leading-8 text-gray-700">
            Kısacası: Eylem Planı, gelecekteki fon ve kredi kanallarının{" "}
            <strong>habercisi</strong>; TÜBİTAK 1711 ve KOSGEB AI Kredisi ise
            şirketlerin <strong>bugün</strong> başvurabileceği somut araçlar.
          </p>
        </div>
      </section>

      {/* 5. UYUM */}
      <section id="uyum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Şirketler İçin Uyum ve Denetim Boyutu
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Planın &quot;Yönet&quot; ekseni, şirketleri ileride doğrudan
          etkileyebilecek bir düzenleme çerçevesi öngörüyor. Henüz bağımsız
          bir yapay zeka kanunu yürürlükte değil; TBMM&apos;ye sunulan
          kanun teklifleri ve Yapay Zekâ Araştırma Komisyonu&apos;nun
          raporu hâlâ değerlendirme sürecinde. Ancak plan, şu yönde
          hazırlık yapılmasını öngörüyor:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🧪 Düzenleyici Deney Alanları</h4>
            <p className="text-sm leading-7 text-gray-700">
              Finans, sağlık, enerji, mobilite ve telekomünikasyon
              sektörlerinde en az 5 düzenleyici deney alanı kurulması
              planlanıyor. Bu sektörlerde yapay zeka çözümü geliştiren
              şirketler için kontrollü bir test ortamı anlamına gelebilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📋 Yüksek Etkili Sistemler İçin Değerlendirme</h4>
            <p className="text-sm leading-7 text-gray-700">
              Kritik kararlar veren (kredi skorlama, işe alım, sağlık gibi)
              &quot;yüksek etkili&quot; yapay zeka sistemlerinde algoritmik
              etki değerlendirmesi, model kartı ve güvenlik testi
              uygulanması hedefleniyor.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Otomatik karar alma süreçlerinde kişisel veri işleyen şirketler
          için bu başlık, KVKK uyumuyla da doğrudan kesişiyor; konuyu{" "}
          <Link href="/blog/yapay-zeka-kvkk-otomatik-karar-alma-kisisel-veri-isleme-sinirlari" className="text-orange-600 underline">
            Yapay Zeka ve KVKK rehberimizde
          </Link>{" "}
          daha ayrıntılı ele aldık.
        </p>
      </section>

      {/* 6. MEVCUT PROGRAMLAR */}
      <section id="mevcut-programlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Şimdiden Başvurulabilecek Mevcut Programlar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Eylem Planı&apos;nın fon ve kupon mekanizmaları henüz uygulama
          tebliğiyle netleşmedi. Ama bu, elinizi kolunuzu bağlamalı anlamına
          gelmiyor: planın hedeflediği ekosistemin bir parçası olan birkaç
          program, şirketlerin şu anda fiilen kullanabileceği gerçek
          araçlar:
        </p>
        <div className="space-y-5">
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <Link href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026" className="font-semibold text-[#071A2F] underline">
              TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı
            </Link>
            <p className="mt-2 text-sm text-gray-700">
              Şirketlerin üniversite veya kamu araştırma kurumlarıyla
              konsorsiyum kurarak başvurduğu, 10 milyon TL bütçe üst
              sınırlı, %60-70 destek oranlı çağrı.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <Link href="/blog/kosgeb-yapay-zeka-kredi-programi-2026" className="font-semibold text-[#071A2F] underline">
              KOSGEB Yapay Zeka Kredi Programı
            </Link>
            <p className="mt-2 text-sm text-gray-700">
              Teknogirişim Rozeti sahibi girişimlere GPU/bulut ve yapay
              zeka altyapı giderleri için 500 bin - 5 milyon TL arası
              faizsiz kredi.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <Link href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" className="font-semibold text-[#071A2F] underline">
              KOSGEB KOBİ Dijital Dönüşüm Destek Programı
            </Link>
            <p className="mt-2 text-sm text-gray-700">
              Dijital dönüşüm ve otomasyon yatırımlarına yönelik destek
              kalemleri; yapay zeka altyapısına geçişin ilk maliyetini
              hafifletebilir.
            </p>
          </div>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6">
            <Link href="/blog/kobiler-icin-yapay-zeka-danismanligi-surec-otomasyonu-nereden-baslamali" className="font-semibold text-[#071A2F] underline">
              KOBİ&apos;ler İçin Yapay Zeka Danışmanlığı: Nereden Başlamalı?
            </Link>
            <p className="mt-2 text-sm text-gray-700">
              Hangi sürecin önce otomatikleştirilmesi gerektiğini ve
              gerçekçi bir maliyet/ROI beklentisini anlatan uygulama
              rehberi.
            </p>
          </div>
        </div>
      </section>

      {/* 7. HAZIRLIK */}
      <section id="hazirlik" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Şirketler Şimdiden Nasıl Hazırlanmalı?
        </h2>
        <div className="my-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#071A2F]">
            2026-2030 Dönemine Hazırlık Akışı
          </h3>
          <svg viewBox="0 0 760 140" className="mx-auto w-full max-w-3xl">
            <g fontFamily="sans-serif">
              <rect x="10" y="40" width="160" height="60" rx="12" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="2" />
              <text x="90" y="65" fontSize="13" fontWeight="700" fill="#9a3412" textAnchor="middle">Mevcut Durumu</text>
              <text x="90" y="83" fontSize="13" fontWeight="700" fill="#9a3412" textAnchor="middle">Tespit Et</text>

              <rect x="205" y="40" width="160" height="60" rx="12" fill="#071A2F" fillOpacity="0.10" stroke="#071A2F" strokeWidth="2" />
              <text x="285" y="65" fontSize="13" fontWeight="700" fill="#071A2F" textAnchor="middle">Mevcut Programla</text>
              <text x="285" y="83" fontSize="13" fontWeight="700" fill="#071A2F" textAnchor="middle">Pilot Başlat</text>

              <rect x="400" y="40" width="160" height="60" rx="12" fill="#16a34a" fillOpacity="0.15" stroke="#16a34a" strokeWidth="2" />
              <text x="480" y="65" fontSize="13" fontWeight="700" fill="#15803d" textAnchor="middle">Uyum Altyapını</text>
              <text x="480" y="83" fontSize="13" fontWeight="700" fill="#15803d" textAnchor="middle">Kur</text>

              <rect x="595" y="40" width="155" height="60" rx="12" fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeWidth="2" />
              <text x="672" y="65" fontSize="13" fontWeight="700" fill="#1d4ed8" textAnchor="middle">Yeni Fonları</text>
              <text x="672" y="83" fontSize="13" fontWeight="700" fill="#1d4ed8" textAnchor="middle">Takip Et</text>

              <path d="M170 70 L205 70" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow2)" />
              <path d="M365 70 L400 70" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow2)" />
              <path d="M560 70 L595 70" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrow2)" />

              <defs>
                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#9ca3af" />
                </marker>
              </defs>
            </g>
          </svg>
        </div>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ol className="ml-6 list-decimal space-y-4 text-gray-700 marker:font-bold marker:text-green-700">
            <li><strong>Yapay zeka olgunluk seviyenizi netleştirin:</strong> şirketiniz henüz pilot aşamasında mı, yoksa entegrasyona mı hazır?</li>
            <li><strong>Mevcut programlardan birine şimdiden başvurun:</strong> büyüme fonu veya kupon beklemek yerine TÜBİTAK 1711 veya KOSGEB AI Kredisi gibi bugün açık olan kanalları değerlendirin.</li>
            <li><strong>Veri ve KVKK altyapınızı gözden geçirin:</strong> plan ilerledikçe gelecek uyum yükümlülükleri, düzenli ve dijital veri altyapısı olan şirketler için çok daha az maliyetli olacak.</li>
            <li><strong>Sektörünüz düzenleyici deney alanı kapsamındaysa (finans, sağlık, enerji, mobilite, telekom) ilgili kurum duyurularını takibe alın.</strong></li>
            <li><strong>Yapay zeka kuponu ve büyüme fonu uygulama tebliğleri yayımlandığında hızlı hareket edebilmek için başvuru evraklarınızı (faaliyet belgesi, mali tablo, proje özeti) önceden hazırlayın.</strong></li>
          </ol>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Eylem Planı&apos;nın kuponlar, GPU kredisi ve büyüme fonuyla ilgili başvuru şartları, tutarları ve takvimi henüz ayrı bir uygulama tebliğiyle yayımlanmadı; bu detaylar netleşmeden &quot;kesin başvuru şartı&quot; iddia eden içeriklere güvenmeyin.</li>
            <li>Plan, bir kanun değil; kamu kurumlarına yönelik bir genelge. Şirketler için bağlayıcı doğrudan bir yükümlülük şu an için öngörmüyor.</li>
            <li>Yapay zekaya ilişkin ayrı bir kanun TBMM sürecinde; bu süreç tamamlandığında şirketler için ayrı, bağlayıcı yükümlülükler gelebilir. Güncel durumu periyodik olarak takip edin.</li>
            <li>Hedeflerin büyük kısmı (10.000 uzman, 1 GW veri merkezi kapasitesi gibi) 2027-2030 arasına yayılmış; kısa vadede somut bir başvuru beklemek yerine, bugün açık olan TÜBİTAK/KOSGEB programlarına odaklanmak daha gerçekçi bir strateji.</li>
            <li>&quot;Yüksek etkili&quot; sistem tanımı ve hangi sektörlerin bu kapsama gireceği, ilerleyen düzenlemelerle netleşecek; kredi skorlama, işe alım gibi kritik kararlarda yapay zeka kullanan şirketlerin bu başlığı yakından takip etmesi gerekiyor.</li>
          </ul>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Bu tür ulusal eylem planlarında en sık gözden kaçan nokta,
            planın açıklandığı tarih ile fiilen başvurulabilir bir
            mekanizmanın ortaya çıktığı tarih arasındaki boşluktur. Geçmiş
            ulusal stratejilerde de görüldüğü gibi, kupon ve fon gibi
            unsurların uygulama tebliği genellikle genelgeden aylar sonra
            yayımlanır. Bu nedenle şirketlerin asıl yapması gereken, &quot;ne
            zaman açılacak&quot; diye beklemek değil; planın işaret ettiği
            yönde (yapay zeka altyapısına geçiş, veri düzeni, uyum
            hazırlığı) şimdiden, mevcut TÜBİTAK ve KOSGEB kanallarıyla somut
            bir adım atmaktır.
          </p>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
            <li>
              <a href="https://www.resmigazete.gov.tr/eskiler/2026/08/20260818-5.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                Resmî Gazete, 18 Ağustos 2026 tarih ve 33344 sayılı nüsha
              </a>{" "}
              (2026/9 sayılı Cumhurbaşkanlığı Genelgesi)
            </li>
            <li>
              <a href="https://www.sanayi.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                Sanayi ve Teknoloji Bakanlığı (sanayi.gov.tr)
              </a>{" "}
              - plan koordinatörü bakanlığın resmî duyuruları
            </li>
            <li>
              <a href="https://tubitak.gov.tr/tr/acik-cagrilar" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                TÜBİTAK Açık Çağrılar (tubitak.gov.tr)
              </a>
            </li>
            <li>
              <a href="https://www.kosgeb.gov.tr/site/tr/genel/destekler" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                KOSGEB Destekler Sayfası (kosgeb.gov.tr)
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            16 eylemin tam madde listesi, sorumlu kurumlar ve uygulama
            tebliğleri yayımlandıkça bu kaynaklardan takip edilmelidir.
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
              Türkiye Yapay Zeka Eylem Planı bir kanun mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Plan, 18 Ağustos 2026 tarihli ve 33344 sayılı Resmî
              Gazete&apos;de yayımlanan 2026/9 sayılı Cumhurbaşkanlığı
              Genelgesi ile yürürlüğe girdi. Genelge, kamu kurumlarına görev
              dağıtan bir yol haritasıdır; kanun gibi doğrudan bağlayıcı,
              cezai sonuçlu bir düzenleme değildir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Eylem Planı kapsamında şirketler için şu anda başvurulabilir bir destek var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Planın kendisi henüz başvuru formu veya son tarihi olan bir
              destek programı değil; yapay zeka kuponu ve büyüme fonu gibi
              unsurların uygulama tebliği ayrıca yayımlanacak. Bugün fiilen
              başvurulabilecek araçlar, TÜBİTAK 1711 Yapay Zeka Ekosistemi
              Çağrısı ve KOSGEB Yapay Zeka Kredi Programı&apos;dır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Eylem Planı&apos;nın KOBİ&apos;lere yönelik en somut fırsatları neler?
            </h3>
            <p className="leading-8 text-gray-700">
              Açıklanan hedeflere göre ilk 12 ayda en az 1.000 KOBİ&apos;ye
              yönelik yapay zeka kuponu, &quot;Herkes İçin GPU&quot;
              programı kapsamında hesaplama kredisi ve 15 milyar TL
              büyüklüğü hedeflenen Yapay Zeka Büyüme Fonu üzerinden
              girişimlere yönelik yatırım kanalı planlanıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              &quot;Yüksek etkili&quot; yapay zeka sistemi ne anlama geliyor, hangi şirketleri ilgilendiriyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Plan, kredi skorlama, işe alım veya sağlık gibi kritik
              kararları etkileyen yapay zeka sistemlerini &quot;yüksek
              etkili&quot; olarak nitelendiriyor ve bu sistemler için
              algoritmik etki değerlendirmesi, model kartı ve güvenlik testi
              gibi uygulamalar hedefliyor. Tam kapsam ve eşikler, ilerleyen
              düzenlemelerle netleşecek.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Eylem Planı&apos;nın önceki Ulusal Yapay Zeka Stratejisi&apos;nden (2021-2025) farkı nedir?
            </h3>
            <p className="leading-8 text-gray-700">
              2021-2025 dönemini kapsayan önceki belge daha çok genel
              oranlı bir hedef (yapay zekanın GSYİH içindeki payını
              artırmak) koyuyordu. Yeni plan ise ölçülebilir, somut
              rakamlara (5 milyon kişilik eğitim, 10 milyar TL fon, 1.000
              KOBİ kuponu gibi) ve 16 öncelikli eyleme dayanıyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketimin bu plana göre şimdiden atması gereken bir adım var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Yeni fonların açılmasını beklemek yerine, bugün açık
              olan TÜBİTAK 1711 veya KOSGEB Yapay Zeka Kredi Programı gibi
              kanallardan birine başvurmak, veri ve KVKK altyapınızı
              düzene koymak, sektörünüz düzenleyici deney alanı
              kapsamındaysa ilgili kurum duyurularını takip etmek en
              gerçekçi hazırlık adımlarıdır.
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
          Türkiye Yapay Zeka Eylem Planı (2026-2030), şirketler için
          bugünden yarın arasında bir köprü niteliğinde: bugün henüz
          başvurulabilir bir program değil, ama 2026-2030 arasında hangi
          fonların, kredilerin ve düzenlemelerin devreye gireceğini
          gösteren güvenilir bir işaret. Bu işareti doğru okuyan şirketler,
          yeni fonlar açıldığında geriden değil, önden başlıyor olacak.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin yapay zeka yatırım stratejisini, mevcut TÜBİTAK ve
          KOSGEB teşviklerinden en iyi şekilde yararlanacak şekilde
          kurgulamak ve ilerleyen dönemde açılacak fonlara hazırlıklı olmak
          için Koray Akdağ / Sistem Global Danışmanlık olarak yanınızdayız.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            Şirketinizin yapay zeka teşvik ve destek uygunluğunu birlikte
            değerlendirelim.
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
            href="/blog/tubitak-1711-yapay-zeka-ekosistemi-cagrisi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • YAPAY ZEKA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1711 Yapay Zeka Ekosistem Çağrısı 2026: Kimler Başvurabilir, Destek Oranları Nedir?</h3>
          </Link>
          <Link
            href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YAPAY ZEKA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Yapay Zeka Kredi Programı 2026: 5 Milyon TL&apos;ye Kadar Faizsiz Krediye Kimler Başvurabilir?</h3>
          </Link>
          <Link
            href="/blog/yapay-zeka-kvkk-otomatik-karar-alma-kisisel-veri-isleme-sinirlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HUKUK DANIŞMANLIĞI • KVKK • YAPAY ZEKÂ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yapay Zeka ve KVKK: Otomatik Karar Alma ile Kişisel Veri İşleme Sınırları</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Türkiye Yapay Zeka Eylem Planı bir kanun mu?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Plan, 18 Ağustos 2026 tarihli ve 33344 sayılı Resmî Gazete'de yayımlanan 2026/9 sayılı Cumhurbaşkanlığı Genelgesi ile yürürlüğe girdi. Genelge, kamu kurumlarına görev dağıtan bir yol haritasıdır; kanun gibi doğrudan bağlayıcı, cezai sonuçlu bir düzenleme değildir."}},{"@type":"Question","name":"Eylem Planı kapsamında şirketler için şu anda başvurulabilir bir destek var mı?","acceptedAnswer":{"@type":"Answer","text":"Planın kendisi henüz başvuru formu veya son tarihi olan bir destek programı değil; yapay zeka kuponu ve büyüme fonu gibi unsurların uygulama tebliği ayrıca yayımlanacak. Bugün fiilen başvurulabilecek araçlar, TÜBİTAK 1711 Yapay Zeka Ekosistemi Çağrısı ve KOSGEB Yapay Zeka Kredi Programı'dır."}},{"@type":"Question","name":"Eylem Planı'nın KOBİ'lere yönelik en somut fırsatları neler?","acceptedAnswer":{"@type":"Answer","text":"Açıklanan hedeflere göre ilk 12 ayda en az 1.000 KOBİ'ye yönelik yapay zeka kuponu, Herkes İçin GPU programı kapsamında hesaplama kredisi ve 15 milyar TL büyüklüğü hedeflenen Yapay Zeka Büyüme Fonu üzerinden girişimlere yönelik yatırım kanalı planlanıyor."}},{"@type":"Question","name":"Yüksek etkili yapay zeka sistemi ne anlama geliyor, hangi şirketleri ilgilendiriyor?","acceptedAnswer":{"@type":"Answer","text":"Plan, kredi skorlama, işe alım veya sağlık gibi kritik kararları etkileyen yapay zeka sistemlerini yüksek etkili olarak nitelendiriyor ve bu sistemler için algoritmik etki değerlendirmesi, model kartı ve güvenlik testi gibi uygulamalar hedefliyor. Tam kapsam ve eşikler ilerleyen düzenlemelerle netleşecek."}},{"@type":"Question","name":"Eylem Planı'nın önceki Ulusal Yapay Zeka Stratejisi'nden (2021-2025) farkı nedir?","acceptedAnswer":{"@type":"Answer","text":"2021-2025 dönemini kapsayan önceki belge daha çok genel oranlı bir hedef koyuyordu. Yeni plan ise ölçülebilir, somut rakamlara ve 16 öncelikli eyleme dayanıyor."}},{"@type":"Question","name":"Şirketimin bu plana göre şimdiden atması gereken bir adım var mı?","acceptedAnswer":{"@type":"Answer","text":"Evet. Yeni fonların açılmasını beklemek yerine, bugün açık olan TÜBİTAK 1711 veya KOSGEB Yapay Zeka Kredi Programı gibi kanallardan birine başvurmak, veri ve KVKK altyapınızı düzene koymak, sektörünüz düzenleyici deney alanı kapsamındaysa ilgili kurum duyurularını takip etmek en gerçekçi hazırlık adımlarıdır."}}]}) }}
      />
    </BlogLayout>
  );
}
