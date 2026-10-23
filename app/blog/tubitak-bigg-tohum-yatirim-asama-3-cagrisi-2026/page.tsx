import { Metadata } from "next";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "TÜBİTAK BiGG+ Tohum Yatırım Çağrısı 2026-1 | Koray Akdağ",
  description: "1812-BİGG+2026-1 çağrısıyla Aşama 2 yatırımını tamamlayan veya 1512 projesini bitiren teknoloji girişimleri 8 milyon TL'ye kadar tohum yatırımına nasıl başvurur? Şartlar, takvim ve süreç rehberi.",
  keywords: [
    "TÜBİTAK BiGG+ Tohum Yatırım",
    "1812 BİGG+2026-1",
    "TÜBİTAK Aşama 3 yatırım",
    "BİGG+ GSYF",
    "tohum yatırım çağrısı 2026",
    "Mükemmeliyet Mührü Aşama 3",
    "TÜBİTAK 1812 girişim sermayesi",
    "startup yatırım TÜBİTAK 2026",
    "tohum öncesi yatırım sonrası büyüme yatırımı",
    "1512 projesini tamamlayan girişimci TÜBİTAK",
  ],
  alternates: {
    canonical: "/blog/tubitak-bigg-tohum-yatirim-asama-3-cagrisi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="TÜBİTAK BiGG+ Tohum Yatırım Çağrısı (1812-BİGG+2026-1): Aşama 2'yi Tamamlayan Girişimler 8 Milyon TL'ye Kadar Yatırımı Nasıl Alır?"
      description="1812 Yatırım Tabanlı Girişimcilik Destek Programı'nın Aşama 3'ü olan BiGG+ Tohum Yatırım çağrısında kimler başvurabilir, yatırım tutarı ve hisse oranı nedir, değerlendirme nasıl işler? 5 Ekim - 20 Kasım 2026 başvuru takvimiyle güncel rehber."
      category="TÜBİTAK • BİGG+ TOHUM YATIRIM • 2026"
      date="Ekim 2026"
      readTime="12 Dakika"
      slug="tubitak-bigg-tohum-yatirim-asama-3-cagrisi-2026"
      programDurumu="acik"
      sonBasvuruTarihi="20 Kasım 2026"
      coverImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🟢 Kısaca: Bu Çağrı Ne Sunuyor?
        </h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>✔ TÜBİTAK, 1812 Yatırım Tabanlı Girişimcilik Destek Programı&apos;nın <strong>Aşama 3&apos;ü (Tohum Yatırımı)</strong> için 1812-BİGG+2026-1 kodlu yeni bir çağrı açtı.</li>
          <li>✔ Başvuru, daha önce <strong>Aşama 2&apos;de (tohum öncesi yatırım) BiGG Fonu&apos;ndan yatırım almış ve projesini tamamlamış</strong> veya <strong>1512 Girişimcilik Destek Programı&apos;yla desteklenen projesini tamamlamış</strong> şirketlere açık.</li>
          <li>✔ Yatırımı BİGG+ GSYF (Kalkınma Girişim Sermayesi A.Ş. bünyesindeki TÜBİTAK BiGG+ Girişim Sermayesi Yatırım Fonu) yapıyor; üst sınır <strong>8.000.000 TL</strong>, hisse ortaklığı şeklinde yapılırsa fonun alacağı pay <strong>%10&apos;u geçmiyor</strong>.</li>
          <li>✔ Başvuru dönemi <strong>5 Ekim - 20 Kasım 2026</strong>; kuruluş bazlı ön kayıt belgelerinin TÜBİTAK&apos;a ulaşması gereken son tarih <strong>17 Kasım 2026</strong>.</li>
          <li>✔ 1512 kapsamında desteklenen ve limited şirket olarak kurulmuş girişimlerin, yatırım almadan önce <strong>anonim şirkete dönüşmesi</strong> şart.</li>
          <li>✔ Bu çağrı, Eylül 2026&apos;da kapanan Aşama 2 (tohum öncesi yatırım, 1.350.000 TL) çağrısından farklıdır; o yazıyı bu içerikle karıştırmayın.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. BiGG+ Tohum Yatırım Çağrısı Nedir?
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Başvurabilir?
          </Link>
          <Link href="#tutar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Yatırım Tutarı ve Hisse Oranı
          </Link>
          <Link href="#degerlendirme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Değerlendirme Kriterleri
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Başvuru Süreci
          </Link>
          <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Çağrı Takvimi
          </Link>
          <Link href="#izleme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Yatırım Sonrası İzleme
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
        </div>
      </div>

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. BiGG+ Tohum Yatırım Çağrısı Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          TÜBİTAK, 5 Ekim 2026&apos;da 1812-BİGG+2026-1 kodlu yeni bir çağrı
          açtı: 2026-1 BiGG+ Tohum Yatırım Çağrısı. Bu çağrı, 1812 Yatırım
          Tabanlı Girişimcilik Destek Programı&apos;nın üçüncü ve son
          aşamasını, yani halihazırda bir yatırım almış ve ticarileşme
          potansiyelini bir ölçüde kanıtlamış teknoloji şirketlerinin
          büyümesini hızlandırmayı hedefliyor.
        </p>
        <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
            📌 1812 Programının Üç Aşaması
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li><strong>Aşama 1: Hızlandırma/Kuluçka.</strong> Girişimci, TÜBİTAK&apos;ın yetkilendirdiği bir uygulayıcı kuruluşun hızlandırma programına katılır, eğitim ve mentorluk alır.</li>
            <li><strong>Aşama 2: Tohum Öncesi Yatırım.</strong> Aşama 1&apos;i tamamlayıp Mükemmeliyet Mührü alan girişimci, kurduğu şirket üzerinden BiGG Fonu&apos;ndan hisse karşılığı ilk yatırımı alır (standart başvurularda 1.350.000 TL, %3 hisse).</li>
            <li><strong>Aşama 3: Tohum Yatırımı (bu yazının konusu).</strong> Aşama 2&apos;de yatırım almış ve büyüme gösteren veya 1512 projesini tamamlamış şirketlere, ölçeklenme için ek bir yatırım yapılır.</li>
          </ul>
        </div>
        <p className="leading-8 text-gray-700">
          Çağrının gerekçesi resmî duyuru metninde de açık: 2030 Sanayi ve
          Teknoloji Stratejisi&apos;nde teknogirişim sayısını 100 bine
          çıkarma ve Turcorn (değeri 1 milyar doları aşan teknoloji
          şirketi) toplam değerlemesini en az 100 milyar dolara taşıma
          hedefleri var. Bu hedefler, erken aşamayı geçmiş şirketlerin
          ürün geliştirme, pazar genişletme ve ekip büyütme adımlarını
          finanse edecek bir büyüme sermayesi mekanizmasını gerektiriyor;
          BiGG+ GSYF de bu boşluğu dolduruyor.
        </p>
      </section>

      {/* 2. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Başvurabilir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu çağrıya bireysel girişimci değil, kuruluş adına başvuru
          yapılır. Başvuru koşulları, girişimin bugüne kadar hangi
          destekten geçtiğine göre iki ayrı yoldan karşılanabiliyor.
        </p>
        <div className="mb-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ❓ Aşama 2 mi, Aşama 3 mü? Karıştırmayın
          </h3>
          <p className="mb-4 leading-8 text-gray-700">
            Aynı 1812 programı içinde iki farklı çağrı türü var ve
            girişimciler genellikle bunları birbirine karıştırıyor:
          </p>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-500">
            <li><strong>Aşama 2 çağrısı (tohum öncesi yatırım):</strong> Henüz hiç BiGG yatırımı almamış, sadece bir hızlandırma programını (Aşama 1) tamamlayıp Mükemmeliyet Mührü almış girişimciler içindir. Standart tutar 1.350.000 TL karşılığında %3 hissedir. 2026-2 çağrısı 30 Eylül 2026&apos;da kapandı.</li>
            <li><strong>Aşama 3 çağrısı, yani bu yazının konusu olan BiGG+ Tohum Yatırım (1812-BİGG+2026-1):</strong> Aşama 2&apos;de zaten yatırım almış ve bu projeyi tamamlamış veya 1512 programıyla desteklenip projesini tamamlamış şirketlere açıktır. Üst sınır 8.000.000 TL, pay oranı en fazla %10&apos;dur.</li>
          </ul>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Başvuru Şartları
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ 1 Ocak 2016&apos;dan sonra kurulmuş, Türkiye&apos;de yerleşik bir sermaye şirketi olmak</li>
              <li>✔ 1812 programının tohum öncesi yatırım aşamasında (Aşama 2) yatırım almış ve projesini tamamlamış olmak <strong>veya</strong></li>
              <li>✔ 1512 Girişimcilik Destek Programı kapsamındaki projesini tamamlamış olmak</li>
              <li>✔ Başvuru TEYDEB PRODİS üzerinden, kuruluş bazlı ön kayıt tamamlandıktan sonra yapılmalı</li>
              <li>✔ 1512 kapsamında desteklenmiş ve limited şirket olarak kurulmuş olan girişimler de başvurabilir, ancak yatırım aşamasında anonim şirkete dönüşmeleri gerekir</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Dikkat Edilmesi Gereken Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Aşama 1&apos;i veya Aşama 2&apos;yi hiç geçmemiş, sıfırdan başvuran bir girişimci bu çağrıyı kullanamaz</li>
              <li>❌ Yalnızca iş fikri olan, henüz şirket kurmamış kişiler bu çağrı için uygun değildir</li>
              <li>❌ Limited şirket yapısı yatırım sürecine kadar anonim şirkete dönüştürülmezse süreç ilerlemez</li>
              <li>❌ Değerlendirmede yurt içi/yurt dışı satışlar, büyüme hızı ve önceki yatırımcılardan alınan sermaye dikkate alınır; sadece önceki destek geçmişi yeterli değildir</li>
              <li>❌ Kuruluş bazlı ön kayıt belgeleri çağrı kapanışından en az bir iş günü önce TÜBİTAK&apos;a ulaşmazsa başvuru tamamlanamaz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. YATIRIM TUTARI */}
      <section id="tutar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Yatırım Tutarı ve Hisse Oranı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yatırımı, Kalkınma Girişim Sermayesi A.Ş. bünyesindeki TÜBİTAK
          BiGG+ Girişim Sermayesi Yatırım Fonu (BİGG+ GSYF) yapıyor. Fon,
          Sermaye Piyasası Kurulu mevzuatına göre faaliyet gösteren bir
          girişim sermayesi yatırım fonu; bu nedenle yatırım, klasik bir
          kamu desteğinden çok özel sermaye yatırımına benzer bir
          mantıkla ilerliyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Unsur</th>
                <th className="p-5">Değer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yatırım tutarı üst sınırı</td>
                <td className="p-5 font-bold text-green-600">8.000.000 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hisse ortaklığında fonun alacağı azami pay</td>
                <td className="p-5 font-bold text-green-600">%10</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Yatırım şekli</td>
                <td className="p-5">Hisse ortaklığı, hisseye dönüştürülebilir borç veya ikisinin bileşimi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Not: Kesin yatırım yapısı (hisse mi, dönüştürülebilir borç mu)
          değerlendirme raporunda BİGG+ GSYF tarafından önerilir ve
          kuruluşla yapılan görüşmeler sonucunda netleşir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvurularda en sık gözden kaçan nokta, 1512 programıyla
            desteklenmiş ama limited şirket olarak kurulmuş girişimlerin
            durumu. Çağrı metni bu şirketlerin başvurabileceğini açıkça
            belirtiyor, ancak yatırım sürecinde Girişim Sermayesi Yatırım
            Fonlarına İlişkin Esaslar Tebliği gereği anonim şirkete
            dönüştürülmeleri şart. Bu dönüşüm, esas sözleşme, sermaye
            yapısı ve pay defteri gibi unsurları etkileyen bir süreç
            olduğundan, başvuru öncesinde değil Mükemmeliyet Mührü
            alındıktan sonraki detaylı inceleme döneminde değil, mümkünse
            daha erken planlanmalı; aksi halde detaylı inceleme süresi
            dönüşüm işlemleriyle birlikte uzayabilir.
          </p>
        </div>
      </section>

      {/* 4. DEĞERLENDİRME KRİTERLERİ */}
      <section id="degerlendirme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Değerlendirme Kriterleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İş planı önerileri, panel yöntemiyle beş boyutta ve eşit
          ağırlıkla değerlendiriliyor:
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl">🔬</div>
            <p className="text-sm font-semibold text-gray-700">Teknoloji düzeyi ve yenilikçi yön</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl">📐</div>
            <p className="text-sm font-semibold text-gray-700">Uygunluk ve yapılabilirlik</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl">📈</div>
            <p className="text-sm font-semibold text-gray-700">Ticarileşme potansiyeli</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl">🏗️</div>
            <p className="text-sm font-semibold text-gray-700">Altyapı ve mali durum</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl">👥</div>
            <p className="text-sm font-semibold text-gray-700">Ekip niteliği ve yönetim kapasitesi</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Uygun bulunan iş planlarına Mükemmeliyet Mührü veriliyor. Bu
          noktadan sonra BİGG+ GSYF devreye girerek şirketin altyapısını,
          iş süreçlerini, mali yapısını, yasal yükümlülüklerini, fikri
          mülkiyet haklarını ve ortaklık yapısını kapsayan bir detaylı
          inceleme (due diligence benzeri bir süreç) başlatıyor. Anket,
          mülakat veya kişisel veri işleyen çalışmalar içeren projelerde,
          Etik Kurul Onay Belgesi başvurusunun Aşama 3 başvurusundan önce
          yapılmış olması veya en azından iş planında detaylı olarak
          planlanmış olması panel değerlendirmesinde dikkate alınıyor.
        </p>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-base font-bold">1. Ön Kayıt</h3>
            <p className="mt-2 text-sm text-gray-600">PRODİS üzerinden kuruluş bazlı ön kayıt yapılır</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📄</div>
            <h3 className="text-base font-bold">2. İş Planı</h3>
            <p className="mt-2 text-sm text-gray-600">İş planı önerisi PRODİS üzerinden gönderilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🧑‍⚖️</div>
            <h3 className="text-base font-bold">3. Panel</h3>
            <p className="mt-2 text-sm text-gray-600">Beş boyutta eşit ağırlıklı panel değerlendirmesi</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🏅</div>
            <h3 className="text-base font-bold">4. Mükemmeliyet Mührü</h3>
            <p className="mt-2 text-sm text-gray-600">Uygun bulunan iş planına mühür verilir</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔍</div>
            <h3 className="text-base font-bold">5. Detaylı İnceleme</h3>
            <p className="mt-2 text-sm text-gray-600">BİGG+ GSYF azami 12 ay içinde inceleme tamamlar</p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="text-base font-bold">6. Yatırım Sözleşmesi</h3>
            <p className="mt-2 text-sm text-gray-600">Yatırım ve proje izleme sözleşmeleri imzalanır</p>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Detaylı inceleme sürecinin, Mükemmeliyet Mührü kararının BİGG+
          GSYF&apos;ye bildirilmesini takip eden altı ay içinde
          tamamlanması esas. Bu süre yetmezse BİGG+ GSYF, durumu TÜBİTAK&apos;a
          bildirerek en fazla altı ay ek süre kullanabiliyor. On iki aylık
          toplam süre içinde inceleme tamamlanmazsa TÜBİTAK, Mükemmeliyet
          Mührü kararını iptal ediyor. İnceleme sonunda BİGG+ GSYF yatırımı
          uygun bulmazsa bu durumu da hem TÜBİTAK&apos;a hem kuruluşa
          yazılı olarak bildiriyor; yani Mükemmeliyet Mührü almak, yatırımın
          kesinleştiği anlamına gelmiyor.
        </p>
      </section>

      {/* 6. TAKVİM */}
      <section id="takvim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Çağrı Takvimi
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Aşama</th>
                <th className="p-5">Tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Çağrının Açılış Tarihi</td>
                <td className="p-5">05.10.2026</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluş Bazlı Ön Kayıt Son Tarihi</td>
                <td className="p-5 font-semibold text-red-600">17.11.2026</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Çağrı Kapanış Tarihi</td>
                <td className="p-5 font-semibold text-red-600">20.11.2026, 23:59</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Ön kayıt evraklarının çağrı kapanış tarihinden en az bir iş günü
          önce TÜBİTAK&apos;a ulaşması gerekiyor; ön kayıt için çağrı
          açılışının beklenmesine gerek yok, bu nedenle başvurmayı
          planlayan şirketlerin ön kayıt işlemini zaman kaybetmeden
          tamamlaması öneriliyor. Daha önce kuruluş bazlı ön kayıt onayı
          almış şirketler bu işlemi tekrarlamıyor.
        </p>
      </section>

      {/* 7. İZLEME */}
      <section id="izleme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Yatırım Sonrası İzleme
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Yatırım tamamlandıktan sonra süreç bitmiyor. TÜBİTAK, yatırım
          alan şirketlerin araştırma, teknoloji geliştirme ve yenilik
          faaliyetlerini, yatırımın tamamlandığı ayı takip eden aydan
          başlayarak 36 ay boyunca altışar aylık dönemlerde izliyor.
          Şirketler bu dönemlerde gerçekleştirdikleri faaliyetleri AGY 312
          İş Planı İlerleme Raporu formatında PRODİS üzerinden sunmak
          zorunda. Destek süresinin bitiminden sonra da ticarileşme
          dönemi başlıyor ve 1., 3. ve 5. yıllarda kuruluş tarafından
          ticarileşme raporları sunuluyor; bu raporlar, şirketin ileride
          TÜBİTAK&apos;a yapacağı yeni başvurularda (örneğin 1501 veya 1507
          çağrılarındaki ticarileşme ek puanında olduğu gibi) doğrudan
          etkili oluyor.
        </p>
      </section>

      {/* 8. DİKKAT EDİLECEKLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gereken Noktalar
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>Mükemmeliyet Mührü, yatırım garantisi değildir:</strong> Mühür alındıktan sonra BİGG+ GSYF&apos;nin yapacağı detaylı inceleme, yatırımın gerçekleşmemesiyle sonuçlanabilir.</li>
            <li>Limited şirketlerin anonim şirkete dönüşüm süreci zaman alabilir; bu süreci yatırım görüşmeleriyle eş zamanlı değil, mümkün olduğunca erken planlamak gerekir.</li>
            <li>Değerlendirmede yalnızca geçmişte desteklenmiş olmak yetmiyor; satış performansı, büyüme hızı ve önceki yatırımcı ilgisi de dikkate alınıyor.</li>
            <li>Etik Kurul Onay Belgesi gerektiren araştırma unsurları (anket, mülakat, kişisel veri işleme vb.) varsa bu belgenin planlaması iş planında net biçimde yer almalı.</li>
            <li>Kuruluş bazlı ön kayıt, çağrı kapanışından en az bir iş günü önce TÜBİTAK&apos;a ulaşmak zorunda; son güne bırakılan ön kayıt başvuruyu tamamen geçersiz kılabilir.</li>
            <li>Rakamsal tutarlar ve şartlar her çağrı döneminde TÜBİTAK tarafından güncellenebilir; başvuru öncesinde güncel çağrı metninin teyit edilmesi önemlidir.</li>
          </ul>
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
              <a
                href="https://tubitak.gov.tr/tr/duyuru/bigg-tohum-yatirim-2026-yili-1-cagrisi-aciliyor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                TÜBİTAK BiGG+ Tohum Yatırım 2026 Yılı 1. Çağrısı Duyurusu
              </a>
            </li>
            <li>
              <a
                href="https://tubitak.gov.tr/sites/default/files/2026-08/2026_1_BIGG_Tohum_Yatirim_Cagri_Duyuru_Metni.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                1812-BİGG+2026-1 Çağrı Duyuru Metni (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://www.tubitak.gov.tr/tr/destekler/sanayi/ulusal-destek-programlari/icerik-1812-yatirim-tabanli-girisimcilik-destek-programi-bigg-yatirim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                TÜBİTAK 1812 BiGG Yatırım Programı resmî sayfası
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              BiGG+ Tohum Yatırım çağrısı ile Eylül 2026&apos;da kapanan 2026-2 BiGG Yatırım çağrısı aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 2026-2 çağrısı Aşama 2 (tohum öncesi yatırım) içindi
              ve 30 Eylül 2026&apos;da kapandı. 1812-BİGG+2026-1 çağrısı ise
              Aşama 3&apos;tür (tohum yatırımı) ve yalnızca Aşama 2&apos;yi
              zaten tamamlamış veya 1512 projesini bitirmiş şirketlere
              açıktır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Daha önce hiç TÜBİTAK desteği almadım, bu çağrıya başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Bu çağrı, 1812 Aşama 2&apos;de yatırım alıp projesini
              tamamlamış veya 1512 Girişimcilik Destek Programı&apos;yla
              desteklenen projesini tamamlamış şirketlere özeldir.
              Hiçbirinden geçmemiş bir girişimin önce Aşama 1 ve Aşama 2
              süreçlerini tamamlaması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim limited şirket, yine de başvurabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              1512 kapsamında desteklenmiş limited şirketler bu çağrıya
              başvurabilir. Ancak yatırım sürecinde, Girişim Sermayesi
              Yatırım Fonlarına İlişkin Esaslar Tebliği gereği şirketin
              anonim şirkete dönüştürülmesi gerekiyor. Bu dönüşümü erkenden
              planlamak, detaylı inceleme sürecinin uzamasını önler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Mükemmeliyet Mührü aldım, yatırımı kesin alacağım anlamına mı gelir?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Mühür, iş planının panel değerlendirmesinden geçtiğini
              gösterir. Ardından BİGG+ GSYF, şirketin altyapısı, mali
              durumu, fikri mülkiyet hakları ve ortaklık yapısını kapsayan
              detaylı bir inceleme yapar; bu inceleme sonucunda yatırımın
              uygun olmadığına karar verebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım tutarı her şirkete 8 milyon TL olarak mı veriliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, 8.000.000 TL bir üst sınırdır; gerçekleşecek tutar
              şirketin ölçeğine, değerlemesine ve BİGG+ GSYF&apos;nin
              detaylı inceleme sonucuna göre belirlenir. Yatırım hisse
              ortaklığı şeklinde yapılırsa fonun alacağı pay en fazla
              %10&apos;dur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yatırım sonrasında TÜBİTAK şirketi izlemeye devam ediyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Yatırım tamamlandıktan sonra 36 ay boyunca altışar
              aylık dönemlerde ilerleme raporları sunulur; destek
              süresinin bitiminden sonra da 1., 3. ve 5. yıllarda
              ticarileşme raporları takip edilir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Anonim Şirkete Dönüşüm ve Yatırım Sonrası Uyum Sürecinizi Birlikte Planlayalım
          </h3>
          <p className="leading-8 text-gray-700">
            BiGG+ Tohum Yatırım çağrısına hazırlanırken limited şirketin
            anonim şirkete dönüştürülmesi, ortaklık yapısının yatırım
            sözleşmesine uygun kurgulanması ve yatırım sonrasındaki
            muhasebe/raporlama yükümlülüklerinin düzenli yürütülmesi kritik
            önem taşır.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin bu sürece uygunluğunu ve dönüşüm/uyum
              planlamasını birlikte değerlendirmemiz için bizimle
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
          BiGG+ Tohum Yatırım çağrısı, Aşama 2&apos;de yatırım alıp
          büyüme sinyali veren veya 1512 projesini başarıyla tamamlamış
          teknoloji şirketleri için TÜBİTAK ekosisteminin bir sonraki
          basamağı. Üst sınırı 8 milyon TL&apos;ye, pay oranını en fazla
          %10&apos;a kadar çıkan bu yatırım, şirketin ölçeklenme
          dönemindeki finansman ihtiyacını hibe değil sermaye ortaklığı
          mantığıyla karşılıyor. Başvuru dönemi 20 Kasım 2026&apos;da
          kapanacağından, uygun şirketlerin ön kayıt işlemlerini
          geciktirmeden tamamlaması önemli.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket yapınızın yatırıma hazır hale getirilmesi (limited
          şirketin anonim şirkete dönüştürülmesi dahil) ve yatırım
          sonrasındaki muhasebe, raporlama ve uyum yükümlülüklerinin
          yönetilmesi için Koray Akdağ / Sistem Global Danışmanlık olarak
          yanınızdayız. Ayrı bir danışmanlık firması aramanıza gerek
          kalmadan, hem dönüşüm sürecinizi hem de sonrasındaki
          yükümlülüklerinizi tek noktadan yürütebiliriz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/tubitak-bigg-yatirim-1812-programi-2026-2-cagrisi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • BiGG YATIRIM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK BiGG Yatırım (1812) Programı 2026-2 Çağrısı</h3>
          </Link>
          <Link
            href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TÜBİTAK • TEYDEB • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/kosgeb-girisimci-destek-programi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • GİRİŞİMCİLİK DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Girişimci Destek Programı Nedir?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"BiGG+ Tohum Yatırım çağrısı ile Eylül 2026'da kapanan 2026-2 BiGG Yatırım çağrısı aynı şey mi?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 2026-2 çağrısı Aşama 2 (tohum öncesi yatırım) içindi ve 30 Eylül 2026'da kapandı. 1812-BİGG+2026-1 çağrısı ise Aşama 3'tür (tohum yatırımı) ve yalnızca Aşama 2'yi zaten tamamlamış veya 1512 projesini bitirmiş şirketlere açıktır."}},{"@type":"Question","name":"Daha önce hiç TÜBİTAK desteği almadım, bu çağrıya başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Bu çağrı, 1812 Aşama 2'de yatırım alıp projesini tamamlamış veya 1512 Girişimcilik Destek Programı'yla desteklenen projesini tamamlamış şirketlere özeldir. Hiçbirinden geçmemiş bir girişimin önce Aşama 1 ve Aşama 2 süreçlerini tamamlaması gerekir."}},{"@type":"Question","name":"Şirketim limited şirket, yine de başvurabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"1512 kapsamında desteklenmiş limited şirketler bu çağrıya başvurabilir. Ancak yatırım sürecinde, Girişim Sermayesi Yatırım Fonlarına İlişkin Esaslar Tebliği gereği şirketin anonim şirkete dönüştürülmesi gerekiyor. Bu dönüşümü erkenden planlamak, detaylı inceleme sürecinin uzamasını önler."}},{"@type":"Question","name":"Mükemmeliyet Mührü aldım, yatırımı kesin alacağım anlamına mı gelir?","acceptedAnswer":{"@type":"Answer","text":"Hayır. Mühür, iş planının panel değerlendirmesinden geçtiğini gösterir. Ardından BİGG+ GSYF, şirketin altyapısı, mali durumu, fikri mülkiyet hakları ve ortaklık yapısını kapsayan detaylı bir inceleme yapar; bu inceleme sonucunda yatırımın uygun olmadığına karar verebilir."}},{"@type":"Question","name":"Yatırım tutarı her şirkete 8 milyon TL olarak mı veriliyor?","acceptedAnswer":{"@type":"Answer","text":"Hayır, 8.000.000 TL bir üst sınırdır; gerçekleşecek tutar şirketin ölçeğine, değerlemesine ve BİGG+ GSYF'nin detaylı inceleme sonucuna göre belirlenir. Yatırım hisse ortaklığı şeklinde yapılırsa fonun alacağı pay en fazla %10'dur."}},{"@type":"Question","name":"Yatırım sonrasında TÜBİTAK şirketi izlemeye devam ediyor mu?","acceptedAnswer":{"@type":"Answer","text":"Evet. Yatırım tamamlandıktan sonra 36 ay boyunca altışar aylık dönemlerde ilerleme raporları sunulur; destek süresinin bitiminden sonra da 1., 3. ve 5. yıllarda ticarileşme raporları takip edilir."}}]}) }}
      />
    </BlogLayout>
  );
}
