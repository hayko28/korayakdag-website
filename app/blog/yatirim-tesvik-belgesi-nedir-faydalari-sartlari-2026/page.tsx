import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Yatırım Teşvik Belgesi Nedir? Bölgesine ve Sektörüne Göre Faydaları, Şartları (2026) | Koray Akdağ",
  description:
    "Yatırım Teşvik Belgesi nedir, hangi kurum veriyor, hangi destek unsurlarını (KDV istisnası, gümrük muafiyeti, vergi indirimi, SGK ve faiz desteği) sağlıyor? Hedef Yatırımlar Teşvik Sistemi'nde hangi il hangi bölgede, hangi sektör/NACE kodu hangi destekten yararlanıyor - örnek senaryolarla 2026 güncel rehberi.",
  keywords: [
    "Yatırım Teşvik Belgesi nedir",
    "yatırım teşvik belgesi şartları",
    "yatırım teşvik belgesi nasıl alınır",
    "Hedef Yatırımlar Teşvik Sistemi",
    "yatırım teşvik bölgeleri iller",
    "E-TUYS başvuru",
    "9903 sayılı karar",
    "yatırım teşvik sistemi 2026",
    "bölgesel teşvik uygulaması NACE kodu",
    "Türkiye Yüzyılı Kalkınma Hamlesi",
    "yatırım teşvik belgesi destek unsurları",
    "KDV istisnası gümrük muafiyeti",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Güncel Rehberi"
      description="Türkiye'de yatırım yapan şirketlerin vergiden sigortaya, gümrükten faiz desteğine kadar birçok maliyet kalemini önemli ölçüde azaltan Yatırım Teşvik Belgesi'nin 2026 itibarıyla geçerli sistemi; hangi ilin hangi teşvik bölgesinde olduğu, hangi sektör/NACE kodunun hangi destekten yararlandığı ve E-TUYS üzerinden başvuru süreci."
      category="YATIRIM TEŞVİKLERİ • DEVLET DESTEKLERİ • 2026"
      date="2026"
      readTime="26 Dakika"
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
            <li>✔ KOBİ&apos;lerin en çok başvurduğu Hedef Yatırımlar Teşvik Sistemi&apos;nde hangi il hangi bölgede, hangi sektör/NACE kodu hangi destekten yararlanıyor?</li>
            <li>✔ Hangi destek unsurlarından (KDV, gümrük, vergi, SGK, faiz) yararlanılıyor?</li>
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
            <Link href="#hedef-yatirimlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Hedef Yatırımlar Teşvik Sistemi: Bölgesine ve Sektörüne Göre Kim Ne Alır?
            </Link>
            <Link href="#programlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Diğer Teşvik Programları: Hangi Yatırım Hangi Programa Girer?
            </Link>
            <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Sağladığı Destek Unsurları
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

        {/* 3. HEDEF YATIRIMLAR */}
        <section id="hedef-yatirimlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Hedef Yatırımlar Teşvik Sistemi: Bölgesine ve Sektörüne Göre Kim Ne Alır?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            KOBİ&apos;lerin ve orta ölçekli şirketlerin büyük çoğunluğu için
            asıl belirleyici program, iki başlıktan biri olan{" "}
            <strong>Sektörel Teşvik Sistemi</strong>&apos;nin altındaki{" "}
            <strong>Hedef Yatırımlar Teşvik Sistemi</strong>&apos;dir. Eski
            &quot;Bölgesel Teşvik Uygulaması&quot;nın yerini alan bu program,
            klasik bölgesel teşvik mantığına en yakın uygulamadır: yatırımın
            hangi ilde yapıldığı (dolayısıyla hangi teşvik bölgesine
            girdiği) ve hangi faaliyet konusuna (NACE koduna) sahip olduğu,
            hangi destek unsurlarından ne kadar yararlanılacağını doğrudan
            belirler. Bu yüzden bir yatırım fikrini teşvik açısından
            değerlendirirken sorulması gereken ilk iki soru şudur:{" "}
            <strong>&quot;Yatırım hangi ilde/bölgede yapılacak?&quot;</strong>{" "}
            ve <strong>&quot;Faaliyet konusu hangi NACE kodunda ve bu kod
            EK-3 sektör listesinde var mı?&quot;</strong>
          </p>

          <div className="my-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🗺️ Türkiye 6 Teşvik Bölgesine Ayrılıyor
            </h3>
            <p className="leading-8 text-gray-700">
              9903 sayılı Karar da önceki sistemdeki gibi 81 ili
              sosyoekonomik gelişmişlik seviyesine göre 6 teşvik bölgesine
              ayırmaya devam ediyor. 1. bölge en gelişmiş illeri (İstanbul,
              Ankara, İzmir, Bursa, Kocaeli gibi), 6. bölge ise en az
              gelişmiş illeri (büyük ölçüde Güneydoğu ve Doğu Anadolu)
              kapsıyor. Genel kural nettir: <strong>bölge numarası
              yükseldikçe (gelişmişlik azaldıkça) destek yoğunluğu ve
              süresi artar.</strong>
            </p>
          </div>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Bölge</th>
                  <th className="p-4">İller</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">1. Bölge</td>
                  <td className="p-4">Ankara, Antalya, Bursa, Eskişehir, İstanbul, İzmir, Kocaeli, Muğla</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">2. Bölge</td>
                  <td className="p-4">Aydın, Balıkesir, Bolu, Çanakkale, Denizli, Edirne, Kayseri, Konya, Manisa, Mersin, Sakarya, Tekirdağ, Yalova</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">3. Bölge</td>
                  <td className="p-4">Adana, Bilecik, Burdur, Düzce, Gaziantep, Isparta, Karabük, Karaman, Kırıkkale, Kırklareli, Kütahya, Nevşehir, Rize, Samsun, Trabzon, Uşak, Zonguldak</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">4. Bölge</td>
                  <td className="p-4">Afyonkarahisar, Aksaray, Amasya, Artvin, Çorum, Elazığ, Erzincan, Kastamonu, Kırşehir, Malatya, Niğde, Ordu, Sivas, Sinop, Tokat, Tunceli, Yozgat</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">5. Bölge</td>
                  <td className="p-4">Bartın, Bayburt, Çankırı, Erzurum, Giresun, Hatay, Kahramanmaraş, Kilis, Osmaniye</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">6. Bölge</td>
                  <td className="p-4">Adıyaman, Ağrı, Ardahan, Batman, Bingöl, Bitlis, Diyarbakır, Gümüşhane, Hakkâri, Iğdır, Kars, Mardin, Muş, Siirt, Şanlıurfa, Şırnak, Van</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            İl-bölge eşleştirmesi 9903 sayılı Kararın EK-1 tablosuna dayanır;
            OSB, endüstri bölgesi veya serbest bölgede yapılan yatırımlarda
            ilave/farklı uygulamalar olabileceğinden, başvuru öncesi ilin ve
            yatırım yerinin bölge kaydını E-TUYS üzerinden teyit etmeniz
            önerilir.
          </p>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-[#071A2F]">
            📊 Bölgeye Göre Destek Unsurları Karşılaştırması (Hedef Yatırımlar Teşvik Sistemi)
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-4">Bölge</th>
                  <th className="p-4">Asgari Yatırım (2026)</th>
                  <th className="p-4">KDV İstisnası</th>
                  <th className="p-4">Gümrük Vergisi Muafiyeti</th>
                  <th className="p-4">Vergi İndirimi Oranı</th>
                  <th className="p-4">SGK İşveren Primi Desteği</th>
                  <th className="p-4">SGK İşçi Hissesi Desteği</th>
                  <th className="p-4">Faiz / Kâr Payı Desteği</th>
                  <th className="p-4">Yatırım Yeri Tahsisi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">1</td>
                  <td className="p-4">15.100.000 TL</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">%60 (İstanbul hariç)</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Genellikle yok</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">2</td>
                  <td className="p-4">15.100.000 TL</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">%60</td>
                  <td className="p-4">1 yıl</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Genellikle yok</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">3</td>
                  <td className="p-4">7.500.000 TL</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">%60</td>
                  <td className="p-4">2 yıl</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Sınırlı imkan</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">4</td>
                  <td className="p-4">7.500.000 TL</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">%60</td>
                  <td className="p-4">4 yıl</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">5</td>
                  <td className="p-4">7.500.000 TL</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">%60</td>
                  <td className="p-4">8 yıl</td>
                  <td className="p-4">Yok</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">6</td>
                  <td className="p-4">7.500.000 TL</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">Var</td>
                  <td className="p-4">%60</td>
                  <td className="p-4">12 yıl (OSB dışı) / 14 yıl (OSB içi)</td>
                  <td className="p-4">10 yıl</td>
                  <td className="p-4">Var (en yüksek üst sınır)</td>
                  <td className="p-4">Var</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Kaynak: 9903 sayılı Karar&apos;ın bölgesel destek yapısını konu
            alan güncel uzman değerlendirmeleri (Sanayi ve Teknoloji
            Bakanlığı&apos;na bağlı kaynaklar, vergi/denetim danışmanlık
            firmalarının teşvik bültenleri) esas alınarak derlenmiştir.
            Rakamlar yıllık yeniden değerleme oranına göre güncellendiğinden
            ve OSB/endüstri bölgesi konumuna göre farklılaşabildiğinden,
            başvuru öncesi güncel karar eki ve E-TUYS üzerinden teyit
            edilmelidir.
          </p>

          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💰 KDV, Gümrük ve Vergi İndirimi Neden Tabloda Sabit Görünüyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Eski sistemden farklı olarak Hedef Yatırımlar ve Öncelikli
              Yatırımlar Teşvik Sistemi&apos;nde KDV istisnası, gümrük
              vergisi muafiyeti, vergi indirimi oranı (%60) ve yatırıma
              katkı oranı (Hedef Yatırımlar&apos;da %20, Öncelikli
              Yatırımlar&apos;da %30) bölgeye göre değil, seçilen programa
              göre belirleniyor ve bu iki program için tüm bölgelerde aynı
              şekilde uygulanıyor; bölgeye göre asıl farklılaşan unsurlar
              asgari yatırım tutarı, SGK desteği süresi, faiz/kâr payı
              desteğinin varlığı ve yatırım yeri tahsisi imkanıdır. Tek
              istisna: <strong>İstanbul&apos;da gerçekleştirilecek
              yatırımlar vergi indirimi desteğinden yararlanamaz.</strong>{" "}
              Bu oranlar da her yıl güncellenebildiğinden başvuru öncesi
              teyit edilmelidir.
            </p>
          </div>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-[#071A2F]">
            🏷️ Hangi Sektör/NACE Kodu Hedef Yatırımlar Kapsamına Giriyor?
          </h3>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Hedef Yatırımlar Teşvik Sistemi kapsamında desteklenecek
            faaliyet konuları, Karar&apos;ın <strong>EK-3</strong>{" "}
            listesinde yer alıyor ve E-TUYS başvuruları doğrudan bu listeyle{" "}
            <strong>NACE kodu</strong> eşleşmesi üzerinden değerlendiriliyor.
            EK-3&apos;te geniş tabanlı bir sektör yelpazesi bulunuyor:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏭 İmalat Sanayii</h4>
              <p className="text-sm leading-7 text-gray-700">
                Gıda, tekstil/hazır giyim, kimyasal madde ve ürün imalatı,
                metal, makine ve teçhizat imalatı gibi geniş bir yelpazede
                imalat sanayii yatırımları kapsam içindedir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🌾 Tarım ve Hayvancılık</h4>
              <p className="text-sm leading-7 text-gray-700">
                Seracılık, entegre hayvancılık ve su ürünleri yetiştiriciliği
                yatırımları EK-3&apos;te açıkça listelenmiş sektörler
                arasındadır.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">⛏️ Madencilik ve Enerji</h4>
              <p className="text-sm leading-7 text-gray-700">
                Maden çıkarma/işleme yatırımları ile yenilenebilir enerji
                üretim ve dağıtım yatırımları kapsam dahilindedir.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏨 Hizmet Sektörü</h4>
              <p className="text-sm leading-7 text-gray-700">
                50 oda ve üzeri oteller, veri merkezleri, bazı eğitim ve
                sağlık yatırımları gibi belirli hizmet konuları da listede
                yer alabiliyor.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <p className="leading-8 text-gray-700">
              <strong>Önemli:</strong> NACE kodunuzun EK-3 listesinde
              görünmesi tek başına teşvik belgesi alacağınız anlamına
              gelmez. Ürün detayı, yatırım cinsi (yeni/tevsi/modernizasyon),
              kapasite, yatırım yeri, çevresel izinler, makine listesi ve
              finansman yapısı birlikte değerlendirilir; bazı sektörler
              belirli bölgelerde (özellikle 1. ve 2. bölgede) desteklenmeyen
              veya kısıtlı listede yer alabilir. Kesin uygunluk, başvuru
              öncesi E-TUYS&apos;taki sektör/NACE kodu sorgulama ekranı ve
              güncel karar eki üzerinden teyit edilmelidir.
            </p>
          </div>

          <h3 className="mb-6 mt-14 text-2xl font-bold text-[#071A2F]">
            🔍 Örnek Yatırım Senaryoları: 6 Bölgeden 6 Somut Hesaplama
          </h3>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Aşağıdaki 6 senaryo, her bölgeden bir örnek olacak şekilde
            hazırlanmış <strong>örnek/varsayımsal hesaplamalardır</strong>.
            Hesaplamalarda, Hedef Yatırımlar Teşvik Sistemi&apos;nde tüm
            bölgeler için sabit uygulanan <strong>%60 vergi indirimi
            oranı</strong> ve <strong>%20 yatırıma katkı oranı</strong>{" "}
            kullanılmıştır: şirket, normalde %25 olan kurumlar vergisi
            oranı yerine %60 indirimle <strong>%10 oranında</strong>{" "}
            kurumlar vergisi öder; bu indirimli oranla ödemekten kaçındığı
            toplam vergi tutarı, yatırım tutarının %20&apos;sine (yatırıma
            katkı tutarına) ulaşana kadar devam eder. Yani{" "}
            <strong>yatırıma katkı tutarı = yatırım tutarı × %20</strong>,
            projenin sağlayacağı toplam vergi avantajının üst sınırını
            gösterir. Gümrük vergisi muafiyeti ve SGK işveren primi
            desteğinin parasal karşılığı ise sabit bir oranla
            hesaplanamaz — ithal makinenin GTİP kodu/menşe ülkesi ve
            istihdam edilecek işçi sayısı/ücreti gibi projeye özel
            girdilere bağlıdır; bu nedenle aşağıda Senaryo 1 ve Senaryo
            6&apos;ya, yalnızca hesaplama mantığını göstermek amacıyla
            açıkça belirtilmiş varsayımlara dayanan birer örnek tutar
            eklenmiştir. Gerçek başvurunuzda uygulanacak kesin destek
            unsurları, oranları ve tutarları projenize özel olarak E-TUYS
            üzerinden değerlendirilir.
          </p>
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Senaryo 1 — Bursa&apos;da Otomotiv Yan Sanayi Üretimi (1. Bölge)
              </h4>
              <p className="leading-8 text-gray-700">
                Bursa&apos;da (1. bölge) motorlu taşıt parçaları imalatı
                (NACE 29) yapan bir firma, kapasite artırımı için 18.000.000
                TL&apos;lik yatırım planlıyor; 1. bölgede asgari tutar
                (15.100.000 TL) karşılandığı ve imalat sanayii EK-3
                listesinde geniş kapsamlı yer aldığı için başvurabilir. 1.
                bölgede SGK işveren primi desteği, SGK işçi hissesi desteği,
                faiz/kâr payı desteği ve yatırım yeri tahsisi{" "}
                <strong>uygulanmaz</strong> — bu bölgede belge esas olarak
                KDV istisnası, gümrük vergisi muafiyeti ve indirimli
                kurumlar vergisinden ibarettir (İstanbul&apos;da yapılan
                yatırımlarda ise vergi indirimi de uygulanmaz).{" "}
                <strong>Sonuç:</strong> 18.000.000 TL yatırım × %20 yatırıma
                katkı oranı = <strong>3.600.000 TL&apos;ye kadar</strong>{" "}
                vergi avantajı; firma bu tutara ulaşana kadar kurumlar
                vergisini %25 yerine %10 oranında (yani %60 indirimli)
                öder.{" "}
                <strong>Gümrük vergisi muafiyeti — varsayımsal örnek:</strong>{" "}
                yatırımın 4.500.000 TL&apos;lik kısmının (toplamın
                yaklaşık %25&apos;i) yurt dışından ithal edilecek makine
                ve teçhizata ayrıldığı ve bu makinelerin gümrük vergisi
                oranının (GTİP koduna ve menşe ülkeye göre değişmekle
                birlikte) örnek olarak %5 kabul edildiği bir senaryoda,
                muafiyet sayesinde <strong>yaklaşık 225.000 TL</strong>{" "}
                gümrük vergisi ödenmez. Gerçek oran, ithal edilecek her
                bir kalemin GTİP kodu ve menşe ülkesine göre %0 ile çift
                haneli seviyeler arasında değişebilir; bu rakam yalnızca
                hesaplama mantığını göstermek içindir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Senaryo 2 — Konya&apos;da Modern Seracılık Yatırımı (2. Bölge)
              </h4>
              <p className="leading-8 text-gray-700">
                Konya&apos;da (2. bölge) modern sera teknolojisiyle
                sebze üretimi yapmayı planlayan bir tarım işletmesi, asgari
                yatırım tutarını (2. bölgede 15.100.000 TL) karşılayan bir
                proje geliştiriyor. Seracılık EK-3&apos;te açıkça listelenen
                bir faaliyet olduğundan Hedef Yatırımlar kapsamına girer; KDV
                istisnası, gümrük muafiyeti, indirimli kurumlar vergisi ve
                1 yıllık SGK işveren primi desteğinden yararlanır; 2. bölgede
                faiz/kâr payı desteği ve yatırım yeri tahsisi genellikle
                uygulanmaz. <strong>Sonuç:</strong> 15.100.000 TL yatırım ×
                %20 yatırıma katkı oranı ={" "}
                <strong>3.020.000 TL&apos;ye kadar</strong> vergi avantajı;
                işletme bu tutara ulaşana kadar kurumlar vergisini %10
                oranında (%60 indirimli) öder.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Senaryo 3 — Gaziantep&apos;te Hazır Giyim Üretimi (3. Bölge)
              </h4>
              <p className="leading-8 text-gray-700">
                Gaziantep&apos;te (3. bölge) hazır giyim imalatı (NACE 14)
                yapan bir KOBİ, üretim hattını modernize etmek için 9.000.000
                TL&apos;lik bir yatırım planlıyor. 3. bölgede asgari tutar
                (7.500.000 TL) karşılandığı ve tekstil/hazır giyim EK-3
                sektör listesinde yer aldığı için Hedef Yatırımlar Teşvik
                Sistemi kapsamında başvurabilir; KDV istisnası, gümrük
                muafiyeti, indirimli kurumlar vergisi ve 2 yıllık SGK
                işveren primi desteğinden yararlanır. 3. bölgede olduğu için
                faiz/kâr payı desteği bu senaryoda devreye girmez.{" "}
                <strong>Sonuç:</strong> 9.000.000 TL yatırım × %20 yatırıma
                katkı oranı = <strong>1.800.000 TL&apos;ye kadar</strong>{" "}
                vergi avantajı; KOBİ bu tutara ulaşana kadar kurumlar
                vergisini %25 yerine %10 oranında (%60 indirimli) öder.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Senaryo 4 — Malatya&apos;da Tarım Makineleri İmalatı (4. Bölge)
              </h4>
              <p className="leading-8 text-gray-700">
                Malatya&apos;da (4. bölge) tarım makineleri imalatı (NACE 28)
                yapan bir üretici, kapasite artırımı için 8.000.000
                TL&apos;lik yatırım yapıyor. Asgari tutar (7.500.000 TL)
                karşılandığı ve makine imalatı EK-3 listesinde yer aldığı
                için başvurabilir; KDV istisnası, gümrük muafiyeti,
                indirimli kurumlar vergisi, 4 yıllık SGK işveren primi
                desteğinin yanı sıra 4. bölgeden itibaren devreye giren
                faiz/kâr payı desteğinden ve yatırım yeri tahsisi
                imkanından da yararlanabilir. <strong>Sonuç:</strong>{" "}
                8.000.000 TL yatırım × %20 yatırıma katkı oranı ={" "}
                <strong>1.600.000 TL&apos;ye kadar</strong> vergi avantajı;
                üretici bu tutara ulaşana kadar kurumlar vergisini %10
                oranında (%60 indirimli) öder; bu tutara faiz/kâr payı
                desteğinden sağlanacak ilave finansman avantajı da eklenir.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Senaryo 5 — Hatay&apos;da Gıda İşleme Tesisi (5. Bölge)
              </h4>
              <p className="leading-8 text-gray-700">
                Hatay&apos;da (5. bölge) tarımsal ürünlerin işlenmesi/gıda
                imalatı (NACE 10) yapan bir işletme, yeni bir işleme tesisi
                kurmak için 10.000.000 TL&apos;lik yatırım yapıyor. Asgari
                tutar (7.500.000 TL) karşılandığı ve gıda imalatı EK-3
                listesinde yer aldığı için başvurabilir; KDV istisnası,
                gümrük muafiyeti, indirimli kurumlar vergisi, 8 yıllık SGK
                işveren primi desteği, faiz/kâr payı desteği ve yatırım
                yeri tahsisi imkanından yararlanır. <strong>Sonuç:</strong>{" "}
                10.000.000 TL yatırım × %20 yatırıma katkı oranı ={" "}
                <strong>2.000.000 TL&apos;ye kadar</strong> vergi avantajı;
                işletme bu tutara ulaşana kadar kurumlar vergisini %10
                oranında (%60 indirimli) öder.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
              <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
                Senaryo 6 — Diyarbakır&apos;da Kimyasal Madde Üretimi (6. Bölge)
              </h4>
              <p className="leading-8 text-gray-700">
                Diyarbakır&apos;da (6. bölge) kimyasal madde imalatı (NACE
                20) yapmak isteyen bir yatırımcı, asgari tutarı (7.500.000
                TL) karşıladığında; 6. bölgenin en kapsamlı destek paketinden
                yararlanır: KDV istisnası, gümrük muafiyeti, indirimli
                kurumlar vergisi, OSB içinde 14 yıla varan SGK işveren primi
                desteği, 10 yıl SGK işçi hissesi desteği, faiz/kâr payı
                desteği ve yatırım yeri tahsisi aynı anda devreye girebilir.
                6. bölgenin &quot;en yoğun destek paketi&quot; olarak
                anılmasının nedeni budur. <strong>Sonuç:</strong> 7.500.000
                TL yatırım × %20 yatırıma katkı oranı ={" "}
                <strong>1.500.000 TL&apos;ye kadar</strong> vergi avantajı;
                yatırımcı bu tutara ulaşana kadar kurumlar vergisini %10
                oranında (%60 indirimli) öder — üstelik bu tutara 12-14
                yıllık SGK primi desteği, faiz/kâr payı desteği ve yatırım
                yeri tahsisinin sağladığı ilave maliyet avantajı da eklenir.{" "}
                <strong>SGK işveren primi desteği — varsayımsal örnek:</strong>{" "}
                yatırımla birlikte istihdam edilen 10 ilave işçinin aylık
                brüt ücretinin örnek olarak 30.000 TL, işveren SGK prim
                oranının da yaklaşık %20,5 kabul edildiği bir senaryoda,
                aylık işveren primi 10 × 30.000 TL × %20,5 ={" "}
                <strong>61.500 TL</strong>; bu tutarın devlet tarafından
                karşılanması OSB dışında 12 yıl sürdüğünde toplam destek
                yaklaşık <strong>8.856.000 TL&apos;ye</strong>, OSB
                içinde 14 yıl sürdüğünde ise yaklaşık{" "}
                <strong>10.332.000 TL&apos;ye</strong> ulaşır. Gerçek
                tutar; çalışan sayısına, fiili ücretlere, sektörün SGK
                risk sınıfına ve yıllık asgari ücret güncellemelerine
                göre değişir, bu rakam yalnızca hesaplama mantığını
                göstermek içindir.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Not: Vergi indirimi hesaplamalarında güncel genel kurumlar
            vergisi oranı olan %25 esas alınmıştır. 7582 sayılı Kanun ile
            2026&apos;dan itibaren sanayi/tarımsal üretim kazançlarına
            yönelik ayrı bir %12,5&apos;lik indirimli oran da yürürlüğe
            girmiştir; bu genel indirim, yatırım teşvik belgesi kapsamındaki
            indirimli kurumlar vergisi uygulamasından bağımsız bir
            düzenlemedir ve iki teşvikin bir arada nasıl uygulanacağı
            projenize özel olarak değerlendirilmelidir.
          </p>
        </section>

        {/* 4. PROGRAMLAR */}
        <section id="programlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Diğer Teşvik Programları: Hangi Yatırım Hangi Programa Girer?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Hedef Yatırımlar Teşvik Sistemi çoğu KOBİ ve orta ölçekli
            yatırım için asıl adres olsa da, yeni sistem içinde farklı
            yatırım profillerine hitap eden başka programlar da bulunuyor.
            Bunlar <strong>Türkiye Yüzyılı Kalkınma Hamlesi</strong> ve{" "}
            <strong>Sektörel Teşvik Sistemi</strong> başlıkları altında
            toplanıyor.
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
                  <strong>Hedef Yatırımlar Teşvik Sistemi</strong> — yukarıda
                  detaylandırdığımız, il/bölge ve NACE koduna göre işleyen,
                  çoğu KOBİ ve orta ölçekli yatırımın değerlendirildiği
                  program.
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

        {/* 5. DESTEKLER */}
        <section id="destekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Sağladığı Destek Unsurları
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
                Yatırım hangi bölgede yapılırsa daha fazla destek alınır?
              </h3>
              <p className="leading-8 text-gray-700">
                Genel kural olarak bölge numarası yükseldikçe (6. bölgeye
                doğru gidildikçe, yani gelişmişlik azaldıkça) destek
                yoğunluğu artar: SGK işveren primi desteği süresi uzar,
                4. bölgeden itibaren faiz/kâr payı desteği ve yatırım yeri
                tahsisi imkanı devreye girer, 6. bölgede ayrıca 10 yıllık
                SGK işçi hissesi desteği eklenir. Ancak asgari yatırım tutarı
                1. ve 2. bölgede daha yüksektir (15,1 milyon TL), 3-6.
                bölgelerde ise daha düşüktür (7,5 milyon TL). Hangi ilin
                hangi bölgede olduğu ve size özel destek unsurları için bu
                yazıdaki bölge tablosunu ve E-TUYS&apos;u kontrol edin.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                NACE kodum EK-3 listesinde varsa teşvik belgesi almam garanti mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. NACE kodunun Hedef Yatırımlar Teşvik Sistemi&apos;nin
                EK-3 listesinde yer alması, başvurunun değerlendirmeye
                alınabilmesi için gerekli ama tek başına yeterli bir şart
                değildir. Ürün detayı, yatırım cinsi (yeni/tevsi/
                modernizasyon), kapasite, yatırım yeri, gerekli çevresel
                izinler, makine listesi ve finansman yapısı birlikte
                değerlendirilir; bazı sektörler belirli bölgelerde (özellikle
                1. ve 2. bölgede) desteklenmeyebilir. Kesin uygunluğu, başvuru
                öncesinde E-TUYS üzerinden veya danışmanınız aracılığıyla
                teyit etmeniz gerekir.
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

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Yatırım Teşvik Belgesi Başvurunuzda Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              Yatırımınızın bulunduğu bölge ve sektöre göre hangi destek
              unsurlarından (KDV istisnası, gümrük muafiyeti, vergi
              indirimi, SGK ve faiz desteği) yararlanabileceğinizi doğru
              belirlemek, teşvik belgesi başvurunuzun sonucunu ve elde
              edeceğiniz avantajı doğrudan etkiler.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Yatırım teşvik belgesi başvurunuzu birlikte
                değerlendirmek için bizimle iletişime geçin.
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
            Şirketinizin yatırım projesi için hangi ilde/bölgede yapılacağı,
            faaliyet konusunun (NACE kodunun) hangi programa girdiği ve buna
            göre hangi destek unsurlarından ne ölçüde yararlanabileceğinizi
            netleştirmek; E-TUYS başvurusunu ve fizibilite sürecini eksiksiz
            hazırlamak, belge sonrası izleme ve tamamlama vizesi
            yükümlülüklerini yönetmek için Koray Akdağ / Sistem Global
            Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık firması
            aramanıza gerek kalmadan, hem teşvik başvuru sürecinizi hem de
            yatırım sonrası raporlama ve uyum yükümlülüklerinizi tek
            noktadan yürütebiliriz.
          </p>
        </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/proje-bazli-tesvik-sistemi-2026-degisiklikleri"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YATIRIM TEŞVİKLERİ • PROJE BAZLI TEŞVİK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Proje Bazlı Teşvik Sisteminde 2026 Değişikliği</h3>
        </Link>
        <Link
          href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
        </Link>
        <Link
          href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir? Şartları, Destekleri ve 2026 Güncel Rehberi</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
