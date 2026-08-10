import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Güncel Rehberi | Koray Akdağ",
  description:
    "Yatırım Teşvik Belgesi nedir, hangi kurum veriyor, hangi destek unsurlarını (KDV istisnası, gümrük muafiyeti, vergi indirimi, SGK ve faiz desteği) sağlıyor? 9903 sayılı yeni teşvik sistemi, bölgeler, asgari tutarlar, E-TUYS başvuru süreci ve 2026 güncel şartları.",
  keywords: [
    "Yatırım Teşvik Belgesi nedir",
    "yatırım teşvik belgesi şartları",
    "yatırım teşvik belgesi nasıl alınır",
    "E-TUYS başvuru",
    "9903 sayılı karar",
    "yatırım teşvik sistemi 2026",
    "bölgesel teşvik uygulaması",
    "Türkiye Yüzyılı Kalkınma Hamlesi",
    "yatırım teşvik belgesi destek unsurları",
    "KDV istisnası gümrük muafiyeti",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Güncel Rehberi"
      description="Türkiye'de yatırım yapan şirketlerin vergiden sigortaya, gümrükten faiz desteğine kadar birçok maliyet kalemini önemli ölçüde azaltan Yatırım Teşvik Belgesi'nin 2026 itibarıyla geçerli sistemi, destek unsurları, bölgeler, şartlar ve E-TUYS üzerinden başvuru süreci."
      category="YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026"
      date="2026"
      readTime="20 Dakika"
      coverImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yatırım Teşvik Belgesi, Türkiye&apos;de yeni bir yatırım yapacak,
            mevcut tesisini büyütecek veya modernize edecek şirketler için
            devletin sunduğu en kapsamlı destek araçlarından biridir. 30 Mayıs
            2025&apos;te yürürlüğe giren 9903 sayılı Cumhurbaşkanı Kararı ile
            sistem baştan aşağı yenilendi; eski &quot;genel, bölgesel,
            öncelikli, büyük ölçekli, stratejik&quot; teşvik uygulamaları
            yerini yeni bir mimariye bıraktı. Bu yazıda 2026 itibarıyla
            geçerli olan güncel yapıyı, hangi maliyetlerin ne ölçüde
            azaldığını ve başvuru sürecinin nasıl işlediğini adım adım
            anlatıyoruz.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Yatırım Teşvik Belgesi tam olarak ne sağlıyor?</li>
            <li>✔ 9903 sayılı Karar ile sistem nasıl değişti?</li>
            <li>✔ Hangi destek unsurlarından (KDV, gümrük, vergi, SGK, faiz) yararlanılıyor?</li>
            <li>✔ Bölgeler ve 2026 asgari yatırım tutarları nedir?</li>
            <li>✔ Kimler başvurabilir, hangi belgeler gerekir?</li>
            <li>✔ E-TUYS üzerinden başvuru adım adım nasıl işler?</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar ve SSS</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Yatırım Teşvik Belgesi Nedir, Hangi Kurum Veriyor?
            </Link>
            <Link href="#yeni-sistem" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. 9903 Sayılı Karar ile Sistem Nasıl Değişti?
            </Link>
            <Link href="#programlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Teşvik Programları: Hangi Yatırım Hangi Programa Girer?
            </Link>
            <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Sağladığı Destek Unsurları
            </Link>
            <Link href="#bolgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Bölgeler ve 2026 Asgari Yatırım Tutarları
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Kimler Başvurabilir, Şartlar Nelerdir?
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. E-TUYS Üzerinden Adım Adım Başvuru Süreci
            </Link>
            <Link href="#sure" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Belge Süresi, Tamamlama Vizesi ve Geçiş Hükümleri
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Dikkat Edilmesi Gereken Noktalar
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
            1. Yatırım Teşvik Belgesi Nedir, Hangi Kurum Veriyor?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Yatırım Teşvik Belgesi, bir yatırımın devlet tarafından
            desteklenmeye uygun bulunduğunu gösteren resmî bir belgedir.
            Belgeyi düzenleyen kurum <strong>Sanayi ve Teknoloji Bakanlığı
            bünyesindeki Teşvik Uygulama ve Yabancı Sermaye Genel
            Müdürlüğü</strong>&apos;dür. Belge, yatırımcının kendisine değil
            bizzat yatırım projesine bağlı olarak düzenlenir; yani şirketin
            genel faaliyetini değil, belgeye konu edilen belirli bir yatırımı
            (yeni tesis kurulumu, kapasite artırımı, modernizasyon, ürün
            çeşitlendirmesi, taşınma gibi) kapsar.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Pratikte belge; yatırım için ithal veya yerli edinilecek makine ve
            teçhizatta gümrük vergisi ve KDV istisnasından, kurumlar
            vergisinde indirime, SGK işveren/işçi payı desteğinden kredi
            faizi/kâr payı desteğine kadar birçok maliyet kalemini önemli
            ölçüde azaltan bir &quot;izin ve destek paketi&quot; işlevi görür.
            Belge olmadan yapılan yatırımlarda bu avantajların hiçbiri
            otomatik olarak uygulanmaz; destekten yararlanmak için yatırıma
            başlamadan önce başvurunun tamamlanmış ve belgenin
            düzenlenmiş olması gerekir.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Belgenin Temel Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Tasarrufları katma değeri yüksek yatırımlara yönlendirmek</li>
              <li>✔ Üretimi ve istihdamı artırmak</li>
              <li>✔ Uluslararası rekabet gücünü ve ihracatı desteklemek</li>
              <li>✔ Bölgesel gelişmişlik farklarını azaltmak</li>
              <li>✔ Ar-Ge ve yenilikçi/stratejik ürünlere yönelik yatırımları hızlandırmak</li>
              <li>✔ Yabancı sermayeli yatırımları Türkiye&apos;ye çekmek</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Önemli bir not: Yatırım Teşvik Belgesi kredi veya nakit hibe
            değildir; yatırımcının zaten yapacağı harcamalar üzerindeki
            vergi, gümrük ve prim yükünü azaltan ve bazı finansman
            maliyetlerini paylaşan bir teşvik mekanizmasıdır.
          </p>
        </section>

        {/* 2. YENİ SİSTEM */}
        <section id="yeni-sistem" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. 9903 Sayılı Karar ile Sistem Nasıl Değişti?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            30 Mayıs 2025 tarihli ve 32915 sayılı Resmî Gazete&apos;de
            yayımlanan <strong>9903 sayılı &quot;Yatırımlarda Devlet
            Yardımları Hakkında Karar&quot;</strong>, 2012/3305 sayılı eski
            Bakanlar Kurulu Kararı&apos;nı ve Cazibe Merkezleri Programı&apos;nı
            düzenleyen 2018/11201 sayılı kararı yürürlükten kaldırarak yerine
            yeni ve daha karmaşık bir yapı getirdi. 2026 yılında yapılacak
            başvurular bu yeni kararın çerçevesine tabidir.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Eski Sistem (2012/3305)</th>
                  <th className="p-5">Yeni Sistem (2025/9903)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5">Genel Teşvik Uygulaması</td>
                  <td className="p-5 font-semibold text-red-600">Tamamen kaldırıldı</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5">Bölgesel Teşvik Uygulamaları</td>
                  <td className="p-5">Sektörel Teşvik Sistemi içinde bölge esaslı uygulamaya dönüştürüldü</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5">Öncelikli Yatırımların Teşviki</td>
                  <td className="p-5">Sektörel Teşvik Sistemi → Öncelikli Yatırımlar Teşvik Sistemi</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5">Büyük Ölçekli Yatırımların Teşviki</td>
                  <td className="p-5">Türkiye Yüzyılı Kalkınma Hamlesi programlarına dağıtıldı</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5">Stratejik Yatırımların Teşviki</td>
                  <td className="p-5">Türkiye Yüzyılı Kalkınma Hamlesi → Stratejik Hamle Programı</td>
                </tr>
                <tr>
                  <td className="p-5">Cazibe Merkezleri Programı</td>
                  <td className="p-5">Türkiye Yüzyılı Kalkınma Hamlesi → Yerel Kalkınma Hamlesi Programı</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 En Önemli Değişiklik: Genel Teşvik Kaldırıldı
            </h3>
            <p className="leading-8 text-gray-700">
              Eski sistemde bölge veya sektör ayırt etmeksizin, sadece asgari
              yatırım tutarını karşılayan hemen her yatırım &quot;Genel
              Teşvik Uygulaması&quot; kapsamında KDV istisnası ve gümrük
              vergisi muafiyetinden yararlanabiliyordu. Yeni sistemde bu
              serbest kategori tamamen kaldırıldı; artık her yatırımın hangi
              programa (Kalkınma Hamlesi programlarından biri ya da Sektörel
              Teşvik Sistemi&apos;ndeki Öncelikli/Hedef Yatırımlar) girdiğinin
              doğru tespit edilmesi, alınacak destek unsurlarını doğrudan
              belirliyor.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Karar kapsamında <strong>31 Aralık 2030</strong> tarihine kadar
            yapılacak teşvik belgesi müracaatları değerlendirmeye alınacak.
            Bu tarihten önce yeni değişiklikler yapılması da mevzuat
            geleneği gereği olasıdır; bu nedenle başvuru öncesi güncel
            karar metninin ve Bakanlık duyurularının teyit edilmesi önemlidir.
          </p>
        </section>

        {/* 3. PROGRAMLAR */}
        <section id="programlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Teşvik Programları: Hangi Yatırım Hangi Programa Girer?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yeni sistem iki ana başlık altında toplanıyor:{" "}
            <strong>Türkiye Yüzyılı Kalkınma Hamlesi</strong> ve{" "}
            <strong>Sektörel Teşvik Sistemi</strong>. Her başlığın altında
            farklı yatırım profillerine hitap eden alt programlar bulunuyor.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🚀 Türkiye Yüzyılı Kalkınma Hamlesi
              </h3>
              <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
                <li>
                  <strong>Teknoloji Hamlesi Programı</strong> — öncelikli
                  ürün listesinde yer alan, yüksek teknolojili ve ithal
                  ikamesi sağlayan üretim yatırımlarını hedefler.
                </li>
                <li>
                  <strong>Yerel Kalkınma Hamlesi Programı</strong> —
                  bölgeler arası gelişmişlik farkını azaltmayı; illerin
                  potansiyeline uygun, yüksek başarı olasılığı taşıyan
                  yatırımları destekler.
                </li>
                <li>
                  <strong>Stratejik Hamle Programı</strong> — yeşil ve dijital
                  dönüşüm ile yüksek ölçekli, ithalat bağımlılığını azaltan
                  stratejik üretim yatırımları için tasarlanmış, en yüksek
                  destek tavanlarına sahip programdır.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🏭 Sektörel Teşvik Sistemi
              </h3>
              <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
                <li>
                  <strong>Öncelikli Yatırımlar Teşvik Sistemi</strong> —
                  maden arama, yenilenebilir enerji ekipmanı imalatı,
                  lisanslı depoculuk, sera teknolojileri gibi Bakanlıkça
                  belirlenmiş öncelikli alanlardaki yatırımları kapsar.
                </li>
                <li>
                  <strong>Hedef Yatırımlar Teşvik Sistemi</strong> — her
                  bölge ve il için ayrı ayrı belirlenmiş sektör/NACE
                  listesine göre işleyen, klasik bölgesel teşvik mantığına en
                  yakın uygulamadır; çoğu KOBİ ve orta ölçekli yatırım bu
                  sistem üzerinden değerlendirilir.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Program</th>
                  <th className="p-5">Bilinen Faiz/Kâr Payı Desteği Üst Sınırı*</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Stratejik Hamle Programı</td>
                  <td className="p-5">226.000.000 TL&apos;ye kadar faiz desteği + ayrıca 226.000.000 TL&apos;ye kadar makine desteği</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Öncelikli Yatırımlar Teşvik Sistemi</td>
                  <td className="p-5">30.100.000 TL&apos;ye kadar</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Hedef Yatırımlar Teşvik Sistemi</td>
                  <td className="p-5">15.100.000 TL&apos;ye kadar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            * Tutarlar, 9903 sayılı Karar kapsamında yıllık yeniden değerleme
            oranına göre güncellenir; başvuru anındaki güncel tutarlar
            E-TUYS ve Bakanlık duyurularından teyit edilmelidir.
          </p>
        </section>

        {/* 4. DESTEKLER */}
        <section id="destekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Sağladığı Destek Unsurları
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Hangi destek unsurundan ne ölçüde yararlanılacağı; yatırımın
            girdiği program, bölge, sektör ve yatırım tutarına göre
            değişir. Belgede yer alan destek unsurları genel olarak
            şunlardır:
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🧾 KDV İstisnası
              </h3>
              <p className="leading-7 text-gray-700">
                Belge kapsamında yurt içinden alınan veya ithal edilen
                makine ve teçhizat için katma değer vergisi ödenmez.
                Bazı büyük ölçekli projelerde bina-inşaat harcamalarına
                yönelik KDV iadesi de mümkün olabilir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🚢 Gümrük Vergisi Muafiyeti
              </h3>
              <p className="leading-7 text-gray-700">
                Belgede kayıtlı makine ve teçhizatın ithalatında gümrük
                vergisi alınmaz. Bu, özellikle ithal makine ağırlıklı
                yatırımlarda önemli bir maliyet avantajı sağlar.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💰 Vergi İndirimi (İndirimli Kurumlar Vergisi)
              </h3>
              <p className="leading-7 text-gray-700">
                Yatırımdan elde edilecek kazanca, yatırıma katkı tutarına
                ulaşılıncaya kadar indirimli oranda kurumlar vergisi
                uygulanır. İndirim oranı ve yatırıma katkı oranı; programa,
                bölgeye ve yatırım konusuna göre belirlenir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                👥 SGK İşveren ve İşçi Hissesi Desteği
              </h3>
              <p className="leading-7 text-gray-700">
                Yatırımla oluşturulan ilave istihdam için işveren ve/veya
                işçi sigorta prim hissesinin bir kısmı belirli bir süre
                Bakanlık bütçesinden karşılanır. 6. bölgede bu destek,
                tamamlama vizesi sonrası 10 yıla kadar uzayabilmektedir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🏦 Faiz veya Kâr Payı Desteği
              </h3>
              <p className="leading-7 text-gray-700">
                Yatırım için kullanılan krediye ait faiz veya kâr payı
                giderinin bir kısmı, programa göre belirlenen üst sınıra
                kadar geri ödemesiz olarak karşılanır.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                📍 Yatırım Yeri Tahsisi
              </h3>
              <p className="leading-7 text-gray-700">
                Uygun bulunan yatırımlara, Hazine taşınmazları üzerinden
                uygun koşullarda yatırım yeri (arsa) tahsis edilebilir.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⚠️ Oranlar Neden Yazıda Tek Tek Verilmiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Vergi indirimi oranı, yatırıma katkı oranı, SGK desteği süresi
              ve faiz desteği puanı gibi yüzdesel değerler; yatırımın
              programına, bölgesine, sektörüne (NACE koduna) ve OSB/serbest
              bölge gibi konumuna göre matris şeklinde değişmektedir. Bu
              matris karmaşık ve sık güncellenen bir yapıya sahip olduğu
              için, projenize özel kesin oranları başvuru öncesi mutlaka
              E-TUYS sistemi ve güncel karar eki tablolar üzerinden teyit
              etmek gerekir. Genel tahminlere dayanarak yatırım planı
              yapmak yanıltıcı olabilir.
            </p>
          </div>
        </section>

        {/* 5. BÖLGELER */}
        <section id="bolgeler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Bölgeler ve 2026 Asgari Yatırım Tutarları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Türkiye, sosyoekonomik gelişmişlik seviyesine göre 6 teşvik
            bölgesine ve bu bölgelerin altında 289 ilçe bazlı alt bölgeye
            ayrılmıştır. Genel kural olarak 1. bölgeden 6. bölgeye
            gidildikçe (gelişmişlik azaldıkça) destek yoğunluğu artar;
            özellikle 6. bölge, SGK işçi hissesi desteğinin 10 yıla kadar
            uzayabilmesi gibi ilave avantajlarla öne çıkar.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">2026 Güncel Tutar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Asgari Sabit Yatırım Tutarı (1. ve 2. Bölge)</td>
                  <td className="p-5">15.100.000 TL</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Asgari Sabit Yatırım Tutarı (3, 4, 5 ve 6. Bölge)</td>
                  <td className="p-5">7.500.000 TL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Tutarlar Neden Her Yıl Değişiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Asgari yatırım tutarları, her yıl yeniden değerleme oranına
              göre güncellenir. Bu nedenle 2026 için geçerli olan yukarıdaki
              tutarlar, önceki yıllara ait yayınlarda görebileceğiniz daha
              düşük rakamlardan farklıdır. Ayrıca yeni sistemde yatırıma
              katkı oranı artık sadece bulunulan ile değil, seçilen programa
              ve OSB/endüstri bölgesi gibi yatırım konumuna göre de
              şekillenmektedir; bu yüzden &quot;bölge&quot; tek başına
              destek düzeyini belirleyen tek kriter olmaktan çıkmıştır.
            </p>
          </div>
        </section>

        {/* 6. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Kimler Başvurabilir, Şartlar Nelerdir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yatırım Teşvik Belgesi&apos;ne Türkiye&apos;de faaliyet gösteren
            yerli veya yabancı sermayeli gerçek ya da tüzel kişiler
            başvurabilir. Şahıs işletmeleri, limited ve anonim şirketler ile
            yabancı yatırımcıların Türkiye&apos;de kurdukları şirketler bu
            kapsama girer.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Genel Şartlar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Yatırımın asgari sabit yatırım tutarını karşılaması</li>
                <li>✔ Başvuru konusu faaliyetin bölge/program kapsamındaki desteklenen sektörler listesinde yer alması</li>
                <li>✔ Yatırıma henüz fiilen başlanmamış olması (harcamalardan önce başvuru şart)</li>
                <li>✔ Yatırımın finansman yapısının, öz kaynak/yabancı kaynak dengesinin uygun olması</li>
                <li>✔ Talep edilen belgelerin (fizibilite, mali tablo, taahhütname vb.) eksiksiz sunulması</li>
                <li>✔ E-TUYS üzerinden yetkilendirme ve kayıt işlemlerinin tamamlanmış olması</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Sık Karşılaşılan Ret/Ret Riski Sebepleri
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Yatırıma başvurudan önce fiilen başlanmış olması</li>
                <li>❌ Sektörün desteklenmeyen/olumsuz listede yer alması</li>
                <li>❌ Asgari yatırım tutarının karşılanamaması</li>
                <li>❌ Fizibilite ve mali tablolarda tutarsızlık</li>
                <li>❌ Mevcut vergi/SGK borcu bulunması (bazı destek unsurları için)</li>
                <li>❌ Eksik veya yanlış doldurulmuş E-TUYS başvuru formu</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. E-TUYS Üzerinden Adım Adım Başvuru Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            2018&apos;den bu yana tüm yatırım teşvik belgesi başvuruları,
            kâğıt ortamı olmadan tamamen elektronik olarak E-TUYS
            (Elektronik Teşvik Uygulama ve Yabancı Sermaye Bilgi Sistemi)
            üzerinden yürütülüyor.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔐</div>
              <h3 className="text-xl font-bold">1. Yetkilendirme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Şirket yetkilisi e-imza alır, KEP üzerinden Genel
                Müdürlüğe başvurarak E-TUYS kullanıcı yetkisi edinir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Yatırım Bilgi Formu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yatırımın konusu, tutarı, istihdamı, finansmanı ve makine
                listesi sisteme işlenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📎</div>
              <h3 className="text-xl font-bold">3. Belgelerin Yüklenmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Taahhütname, imza sirküleri, Ticaret Sicil Gazetesi ve
                gerekiyorsa fizibilite raporu sisteme eklenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💳</div>
              <h3 className="text-xl font-bold">4. Ücretlerin Ödenmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Bakanlığın güncel tarifesine göre belirlenen başvuru/ekspertiz
                ücreti yatırılır ve dekontu sisteme eklenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔎</div>
              <h3 className="text-xl font-bold">5. Bakanlık Değerlendirmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Uzmanlar başvuruyu sektörel, mali ve teknik açıdan
                inceler; eksik belge için ek süre verilebilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">6. Belgenin Düzenlenmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Uygun bulunan başvuru için destek unsurları belirlenerek
                belge E-TUYS üzerinden düzenlenir.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Başvuru Zamanlaması Kritiktir
            </h3>
            <p className="leading-8 text-gray-700">
              Destek unsurlarından yararlanabilmek için başvurunun,
              yatırıma ilişkin harcamalar başlamadan önce tamamlanmış olması
              gerekir. Makine siparişi verilmiş, inşaata başlanmış veya
              fatura kesilmiş bir yatırım için sonradan yapılan başvurularda,
              başvuru tarihinden önceki harcamalar teşvik kapsamına
              alınmayabilir.
            </p>
          </div>
        </section>

        {/* 8. SÜRE */}
        <section id="sure" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Belge Süresi, Tamamlama Vizesi ve Geçiş Hükümleri
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Yatırım Teşvik Belgesi, yatırımın niteliğine göre belirli bir
            süre için düzenlenir ve gerekçeli talep hâlinde ek süre
            verilebilir. Yatırım fiilen tamamlandığında işletme,{" "}
            <strong>tamamlama vizesi</strong> başvurusu yaparak yatırımın
            öngörülen şekilde gerçekleştiğini Bakanlığa bildirir; belge
            ancak bu vize ile kapanır.
          </p>
          <div className="my-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🕓 3 Aylık Tamamlama Vizesi Süresi
            </h3>
            <p className="leading-8 text-gray-700">
              9903 sayılı Karar ile hem yeni hem de daha önce 2012/3305
              sayılı Karar kapsamında düzenlenmiş belgeler için tamamlama
              vizesi başvuru süresi, belge süresinin bitiminden itibaren
              3 aya indirilmiştir. Bu süreye uyulmaması, belge kapsamında
              alınan desteklerin geri istenmesi riskini doğurabilir.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔄 Eski Belgeler Ne Olacak?
            </h3>
            <p className="leading-8 text-gray-700">
              9903 sayılı Kararın geçici maddeleri uyarınca, eski 2012/3305
              sayılı Karar kapsamında daha önce düzenlenmiş yatırım teşvik
              belgeleri geçersiz sayılmıyor; bu belgeler kendi
              düzenlendikleri mevzuat hükümlerine göre uygulanmaya devam
              ediyor. Yani mevcut bir teşvik belgeniz varsa yeni sistem
              otomatik olarak eski belgenizin şartlarını değiştirmez, ancak
              yeni yapılacak ek/revize başvurularda güncel kararın hükümleri
              geçerli olur.
            </p>
          </div>
        </section>

        {/* 9. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Genel Teşvik Uygulaması kaldırıldığı için artık her yatırımın hangi programa (Kalkınma Hamlesi programları veya Sektörel Teşvik Sistemi) gireceğinin doğru tespit edilmesi, alınacak desteği doğrudan belirliyor.</li>
              <li>Destek oranları ve süreleri; bölge, sektör (NACE kodu), OSB/serbest bölge konumu ve programa göre matris hâlinde değişir; genel tahminlerle değil güncel karar ekleri ve E-TUYS üzerinden teyit edilen verilerle hareket edilmelidir.</li>
              <li>Başvuru, yatırım harcamaları başlamadan önce tamamlanmalıdır; aksi hâlde önceki harcamalar teşvik kapsamı dışında kalabilir.</li>
              <li>Tamamlama vizesi başvurusu, belge süresinin bitiminden itibaren 3 ay içinde yapılmalıdır.</li>
              <li>Öngörülen istihdam, yatırım tutarı veya kapasite gerçekleşmezse, alınan destekler kısmen veya tamamen geri istenebilir.</li>
              <li>Asgari yatırım tutarları ve destek üst sınırları her yıl yeniden değerleme oranına göre güncellendiğinden, başvuru döneminde geçerli güncel rakamlar mutlaka kontrol edilmelidir.</li>
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
                Yatırım Teşvik Belgesi bir hibe midir?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Belge, yapacağınız yatırım harcamaları üzerindeki
                vergi, gümrük ve sigorta prim yükünü azaltan; ayrıca kredi
                faizinin/kâr payının bir kısmını karşılayan bir destek
                paketidir. Doğrudan nakit hibe ödemesi yapılmaz.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şahıs işletmesi Yatırım Teşvik Belgesi alabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet, Türkiye&apos;de faaliyet gösteren yerli veya yabancı
                gerçek ve tüzel kişiler başvurabilir. Şahıs işletmeleri,
                limited ve anonim şirketler bu kapsamdadır; önemli olan
                yatırımın asgari tutarı ve sektör şartlarını karşılamasıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Yatırıma başladıktan sonra teşvik belgesi başvurusu yapılabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Prensip olarak hayır. Destek unsurlarından yararlanmak için
                başvurunun yatırım harcamaları başlamadan tamamlanmış olması
                gerekir. Bu nedenle proje planlaması aşamasında, ilk
                harcama yapılmadan önce başvuru sürecinin başlatılması
                kritik önem taşır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Genel Teşvik Uygulaması tamamen mi kaldırıldı?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet, 9903 sayılı Karar ile bölge/sektör ayırt etmeksizin
                yalnızca asgari tutarı karşılayan yatırımlara KDV istisnası
                ve gümrük muafiyeti sağlayan eski &quot;Genel Teşvik
                Uygulaması&quot; kaldırılmıştır. Bugün her yatırımın hangi
                programa (Kalkınma Hamlesi veya Sektörel Teşvik Sistemi)
                gireceğinin belirlenmesi gerekmektedir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Yabancı yatırımcılar Türkiye&apos;de kurdukları şirketle bu belgeyi alabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. Yabancı sermayeli şirketler, Türkiye&apos;deki yerli
                şirketlerle aynı şartlara tabi olarak Yatırım Teşvik
                Belgesi başvurusunda bulunabilir; bu belge Türkiye&apos;de
                yeni şirket kuruluşuyla birlikte planlanan yatırımlar için
                de değerlendirilebilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Başvuru sürecini danışmanlık almadan tek başıma yürütebilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                Teknik olarak mümkündür; ancak doğru programın seçilmesi,
                fizibilite raporunun ve makine listesinin uygun
                kurgulanması, destek unsurlarının eksiksiz talep edilmesi ve
                sonradan gelecek denetimlere hazırlıklı olunması, sürecin
                başından itibaren doğru yönetilmesini gerektirir. Küçük bir
                hata, hem belge onay süresini uzatabilir hem de alınabilecek
                destek tutarını azaltabilir.
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
            Yatırım Teşvik Belgesi, doğru kurgulandığında bir yatırım
            projesinin toplam maliyetini KDV, gümrük vergisi, kurumlar
            vergisi, sigorta primi ve finansman giderleri üzerinden
            gözle görülür biçimde azaltabilen güçlü bir araçtır. Ancak
            9903 sayılı Karar ile gelen yeni yapı; &quot;Genel Teşvik
            Uygulaması&quot;nın kaldırılması, iki ana başlık altında beş
            farklı program ve bölge/sektör bazlı karmaşık bir destek
            matrisi anlamına geliyor. Bu da başvuru öncesinde doğru
            programın seçilmesini, güncel oran ve tutarların teyit
            edilmesini ve E-TUYS sürecinin zamanında yürütülmesini daha
            kritik hâle getiriyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin yatırım projesi için hangi teşvik programının en
            uygun olduğunu belirlemek, E-TUYS başvurusunu ve fizibilite
            sürecini eksiksiz hazırlamak, belge sonrası izleme ve tamamlama
            vizesi yükümlülüklerini yönetmek için Koray Akdağ / Sistem
            Global Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık
            firması aramanıza gerek kalmadan, hem teşvik başvuru sürecinizi
            hem de yatırım sonrası raporlama ve uyum yükümlülüklerinizi tek
            noktadan yürütebiliriz.
          </p>
        </section>
    </BlogLayout>
  );
}
