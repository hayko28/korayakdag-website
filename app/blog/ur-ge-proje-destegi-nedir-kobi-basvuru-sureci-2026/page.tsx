import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "UR-GE Proje Desteği Nedir? KOBİ Başvuru Süreci 2026 | Koray Akdağ",
  description:
    "UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) Proje Desteği bireysel bir hibe değil, işbirliği kuruluşu üzerinden yürütülen kolektif bir ihracat desteğidir. Kimler yararlanabilir, 2026 güncel destek tutarları, proje şartları ve KOBİ olarak katılım süreci.",
  keywords: [
    "ur-ge nedir",
    "ur-ge proje desteği",
    "uluslararası rekabetçiliğin geliştirilmesi",
    "ur-ge kümelenme",
    "ur-ge kimler başvurabilir",
    "işbirliği kuruluşu nedir",
    "ur-ge proje desteği 2026",
    "ur-ge başvuru süreci",
    "ihracat destekleri ur-ge",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="UR-GE Proje Desteği Nedir? KOBİ Olarak Tek Başıma mı Başvururum, Bir Birliğe mi Katılmalıyım?"
      description="UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) Proje Desteği, işbirliği kuruluşları üzerinden yürütülen kolektif bir ihracat destek modelidir. İşbirliği kuruluşu tanımından 2026 güncel destek tutarlarına, proje şartlarından KOBİ olarak katılım sürecine kadar kapsamlı ve güncel rehber."
      category="İHRACAT DESTEKLERİ • UR-GE • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="ur-ge-proje-destegi-nedir-kobi-basvuru-sureci-2026"
      coverImage="https://images.unsplash.com/photo-1748780381580-3250e4bb4ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      programDurumu="acik"
      ctaHeading="UR-GE Sürecinde Şirketinizin Doğru Konumunu Birlikte Belirleyelim"
      ctaText="Hangi işbirliği kuruluşunun kümelenme projesine katılmanın işletmeniz için anlamlı olduğundan DYS'de yararlanıcı kaydınızın oluşturulmasına, süreç boyunca ihracat stratejinizin yönetilmesine kadar birlikte çalışabiliriz."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Düzenli ihracata geçmek isteyen pek çok KOBİ sahibi, bir noktada
        &quot;UR-GE desteği&quot; ismiyle karşılaşıyor ve doğal olarak
        KOSGEB veya TÜBİTAK desteklerinde olduğu gibi doğrudan kendi
        şirketi adına bir başvuru formu arıyor. Oysa UR-GE, o mantıkla
        çalışan bir program değil. Ticaret Bakanlığı bu desteği tek tek
        şirketlere değil, şirketleri bir araya getiren <strong>işbirliği
        kuruluşlarına</strong> veriyor. Bu fark anlaşılmadan yapılan
        başvuru girişimleri genellikle zaman kaybıyla sonuçlanıyor.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ UR-GE, bireysel bir devlet desteği değil; şirketlerin bir{" "}
            <strong>işbirliği kuruluşu</strong> (İhracatçı Birliği, Oda,
            OSB, sektör derneği vb.) öncülüğünde kümelenerek yürüttüğü
            kolektif bir ihracat destek modelidir.
          </li>
          <li>
            ✔ Şirket olarak Ticaret Bakanlığı&apos;na doğrudan başvurmuyor,
            bölgenizdeki/sektörünüzdeki bir işbirliği kuruluşunun UR-GE
            kümesine <strong>katılımcı</strong> olarak dahil oluyorsunuz.
          </li>
          <li>
            ✔ Destek; ihtiyaç analizi, eğitim, danışmanlık, tanıtım, yurt
            dışı pazarlama, sanal pazarlama, alım heyeti ve personel
            istihdamı giderlerini <strong>%75 oranında</strong> karşılıyor.
          </li>
          <li>
            ✔ 2026&apos;da proje bazında ihtiyaç analizi/eğitim/danışmanlık/
            tanıtım giderleri için üst limit <strong>29.594.373 TL</strong>&apos;ye
            kadar çıkabiliyor.
          </li>
          <li>
            ✔ Proje süresi 3 yıl, performansa göre 2 yıla kadar uzatılabiliyor;
            başvuru dönemi <strong>sürekli aktif</strong>, yani yılın her
            döneminde işbirliği kuruluşu üzerinden sürece dahil olunabiliyor.
          </li>
          <li>
            ✔ Bir şirket aynı anda yalnızca <strong>bir</strong> UR-GE
            projesinde katılımcı olabilir.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#program-nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. UR-GE Proje Desteği Nedir?
          </Link>
          <Link href="#kimler-yararlanabilir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler Yararlanabilir? İşbirliği Kuruluşu Nedir?
          </Link>
          <Link href="#destek-tutarlari" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Desteklenen Faaliyetler ve 2026 Güncel Tutarları
          </Link>
          <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Proje Süresi ve Katılım Şartları
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. KOBİ Olarak Sürece Nasıl Dahil Olunur?
          </Link>
          <Link href="#karsilastirma" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Diğer İhracat Destekleriyle Farkı
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Resmî Kaynaklar
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. PROGRAM NEDİR */}
      <section id="program-nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. UR-GE Proje Desteği Nedir?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          UR-GE, &quot;Uluslararası Rekabetçiliğin Geliştirilmesi&quot;
          ifadesinin kısaltmasıdır ve 5973 sayılı İhracat Destekleri
          Hakkında Karar&apos;ın 19. maddesi çerçevesinde Ticaret Bakanlığı
          tarafından yürütülüyor. Programın amacı, benzer sektörde faaliyet
          gösteren şirketleri <strong>kümelenme anlayışıyla</strong> bir
          araya getirip müştereken ihracata yönlendirmek ve bu şirketleri
          düzenli ihracatçı hâline getirmek. Program tek bir faaliyeti değil,
          amacı, kapsamı, süresi ve bütçesi önceden belirlenmiş bir{" "}
          <strong>proje</strong> bütününü destekliyor: ihtiyaç analizinden
          eğitim ve danışmanlığa, yurt dışı pazarlamadan alım heyetlerine
          kadar birbirini tamamlayan faaliyetler zinciri.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🤝</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Kolektif Bir Model
            </h3>
            <p className="text-gray-700">
              Destek şirkete değil, şirketleri bir çatı altında toplayan
              işbirliği kuruluşuna veriliyor; şirket bu çatının içinde
              katılımcı olarak yer alıyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📊</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Proje Bazlı, Çok Aşamalı
            </h3>
            <p className="text-gray-700">
              İhtiyaç analiziyle başlayıp eğitim, danışmanlık, tanıtım,
              yurt dışı pazarlama ve alım heyeti faaliyetleriyle devam eden,
              yıllara yayılan bir yol haritası izliyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Sürekli Açık Başvuru
            </h3>
            <p className="text-gray-700">
              KOSGEB&apos;in dönemsel çağrılarının aksine UR-GE, yıl boyunca
              işbirliği kuruluşları üzerinden başvuruya açık bir program.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KİMLER YARARLANABİLİR */}
      <section id="kimler-yararlanabilir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler Yararlanabilir? İşbirliği Kuruluşu Nedir?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE projesinin başvurucusu ve yürütücüsü her zaman bir{" "}
          <strong>işbirliği kuruluşu</strong>dur. Ticaret Bakanlığı&apos;nın
          resmî tanımına göre işbirliği kuruluşu olabilecek kurumlar şunlar:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
            <li>Türkiye İhracatçılar Meclisi (TİM) ve İhracatçı Birlikleri</li>
            <li>Türkiye Odalar ve Borsalar Birliği (TOBB), Ticaret ve/veya Sanayi Odaları, Ticaret Borsaları</li>
            <li>Dış Ekonomik İlişkiler Kurulu (DEİK)</li>
            <li>Organize Sanayi Bölgeleri, Endüstri Bölgeleri, Teknoloji Geliştirme Bölgeleri (Teknokentler)</li>
            <li>Sektör dernekleri ve kuruluşları, Sektörel Dış Ticaret Şirketleri (SDŞ)</li>
            <li>İşveren sendikaları ile imalatçıların kurduğu dernek, birlik ve kooperatifler, ihracat konsorsiyumları</li>
          </ul>
        </div>
        <p className="mt-10 mb-6 text-lg leading-9 text-gray-700">
          Şirketiniz bu kurumların hiçbirine dahil değilse bile, bulunduğunuz
          ilin veya sektörünüzün ilgili odası, birliği ya da kümelenme
          derneği muhtemelen zaten bir UR-GE projesi yürütüyordur ya da
          yeni bir proje için katılımcı arıyordur. KOBİ&apos;nin yapması
          gereken, kendi işbirliği kuruluşuna ulaşıp bu kümeye{" "}
          <strong>katılımcı şirket</strong> olarak dahil olmaktır.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <p className="leading-8 text-gray-700">
            &quot;UR-GE&apos;ye başvuru yapacağım&quot; cümlesi, çoğu zaman
            yanlış bir beklentiyle kuruluyor. UR-GE&apos;de KOSGEB&apos;teki
            gibi şirketin kendi adına doldurup gönderdiği bir başvuru formu
            yok. Projeyi kuran, bütçesini planlayan ve Ticaret Bakanlığı
            nezdinde muhatap olan taraf her zaman işbirliği kuruluşudur.
            Şirket, bu kuruluşun yürüttüğü kümeye katılımcı olarak dahil
            olur ve destekten faydalanma hakkını bu katılım üzerinden elde
            eder. Dolayısıyla doğru soru &quot;nasıl başvururum&quot;
            değil, &quot;hangi işbirliği kuruluşunun kümesine katılmalıyım&quot;
            olmalıdır.
          </p>
        </div>
      </section>

      {/* 3. DESTEK TUTARLARI */}
      <section id="destek-tutarlari" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Desteklenen Faaliyetler ve 2026 Güncel Tutarları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE projesi kapsamındaki giderler <strong>%75 oranında</strong>{" "}
          Ticaret Bakanlığı tarafından karşılanıyor; kalan pay katılımcı
          şirketler ve/veya işbirliği kuruluşu tarafından üstleniliyor.
          Destek üst limitleri, 5973 sayılı Karar gereği{" "}
          <strong>her takvim yılı başında (TÜFE + Yİ-ÜFE) / 2 oranında</strong>{" "}
          güncelleniyor. Ticaret Bakanlığı&apos;nın 2026 yılı için
          yayımladığı güncel tablo şöyle:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Faaliyet Kalemi</th>
                <th className="p-5">Oran</th>
                <th className="p-5">2026 Üst Limiti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İhtiyaç analizi, eğitim, danışmanlık, tanıtım (proje bazında)</td>
                <td className="p-5">%75</td>
                <td className="p-5">29.594.373 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yurt dışı pazarlama faaliyeti (faaliyet başına, azami 10 faaliyet)</td>
                <td className="p-5">%75</td>
                <td className="p-5">12.329.397 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Alım heyeti faaliyeti (faaliyet başına, azami 10 faaliyet)</td>
                <td className="p-5">%75</td>
                <td className="p-5">7.396.548 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sanal yurt dışı pazarlama faaliyeti (faaliyet başına, azami 10 faaliyet)</td>
                <td className="p-5">%75</td>
                <td className="p-5">3.943.553 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İşbirliği kuruluşu faaliyetleri (eğitim-danışmanlık, seminer, izleme-değerlendirme; yıllık toplam)</td>
                <td className="p-5">%100</td>
                <td className="p-5">19.728.672 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kişi başı günlük konaklama gideri (yurt dışı pazarlama/alım heyeti)</td>
                <td className="p-5">%75</td>
                <td className="p-5">19.349 TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Bunlara ek olarak, UR-GE projesinin planlanması ve
          koordinasyonu için işbirliği kuruluşunun <strong>ilk defa
          istihdam edeceği en fazla 2 uzman personelin</strong> proje
          süresince oluşacak istihdam giderlerinin de <strong>%75&apos;i</strong>{" "}
          desteklenir. Daha önce başka bir UR-GE projesinde istihdam edilmiş
          personel için &quot;ilk defa istihdam&quot; şartı aranmaz. Yurt
          dışı pazarlama ve alım heyeti faaliyetlerinde ulaşım (ekonomi
          sınıfı uçak/tren/otobüs bileti), konaklama, tercümanlık, fuar
          katılımı ve şirket eşleştirme giderleri de bu tavanlar içinde
          değerlendirilir.

        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru sürecinde en sık gözden kaçan nokta, UR-GE&apos;ye
            katılmanın şirketin kendi başına yürüteceği bağımsız bir süreç
            olmadığıdır. Katılımcı şirket, kümenin ortak ihtiyaç analizine,
            ortak eğitim takvimine ve ortak pazarlama hedeflerine tabi olur.
            Şirketin kendi ihracat stratejisi ile kümenin belirlediği hedef
            pazar veya sektörel yaklaşım örtüşmüyorsa, destekten alınan
            gerçek fayda beklenenin oldukça altında kalabilir. Bu yüzden
            katılım kararı verilmeden önce, ilgili işbirliği kuruluşunun
            proje planını ve hedef pazarlarını incelemek, sürecin size
            gerçekten uygun olup olmadığını görmek açısından kritik önem
            taşır.
          </p>
        </div>
      </section>

      {/* 4. ŞARTLAR */}
      <section id="sartlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Proje Süresi ve Katılım Şartları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE projelerinin işleyişi, Ticaret Bakanlığı&apos;nın belirlediği
          bazı sayısal ve yapısal kurallara bağlı:
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>Proje süresi:</strong> 3 yıl; performansına göre
              Proje Değerlendirme Komisyonu tarafından 2 yıla kadar ek süre
              verilebilir (toplamda azami 5 yıl).
            </li>
            <li>
              <strong>Minimum katılımcı sayısı:</strong> Yatırımlarda
              Devlet Yardımları Hakkındaki Karar&apos;ın 4., 5. ve 6.
              bölgesinde bulunan işbirliği kuruluşlarının projelerinde en
              az 5, diğer illerde en az 10 şirketin yer alması gerekiyor.
            </li>
            <li>
              <strong>Yurt dışı pazarlama/sanal pazarlama şartı:</strong>{" "}
              Bu faaliyetlerde 4., 5. ve 6. bölgede en az 5, diğer illerde
              en az 8 şirketin katılımı aranıyor.
            </li>
            <li>
              <strong>DYS kaydı zorunlu:</strong> Projede yer alacak her
              şirketin Destek Yönetim Sistemi&apos;nde (DYS) yararlanıcı
              olarak kayıtlı olması gerekiyor.
            </li>
            <li>
              <strong>Tek proje kuralı:</strong> Bir şirket aynı anda
              sadece bir UR-GE projesinde katılımcı olarak yer alabiliyor;
              zaman içinde farklı dönemlerde en fazla 3 UR-GE projesine
              katılımcı olunabiliyor.
            </li>
            <li>
              <strong>Fuar katılımı sınırı:</strong> Bir projede yurt dışı
              pazarlama faaliyetleri kapsamındaki fuar katılımı yalnızca
              1 defa ve fuar ziyareti şeklinde gerçekleştirilebiliyor.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. KOBİ Olarak Sürece Nasıl Dahil Olunur?
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Süreç, işbirliği kuruluşunun DYS üzerinden Ticaret Bakanlığı&apos;na
          proje başvurusunu iletmesiyle başlıyor; şirket bu çatının içine
          şu adımlarla dahil oluyor:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">İşbirliği Kuruluşu Tespiti</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">DYS Yararlanıcı Kaydı</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Kümeye Katılımcı Olma</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Faaliyetlere Katılım</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Belgeyle Destek Talebi</h3>
          </div>
        </div>

        <div className="mt-14 space-y-10">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.1. Doğru İşbirliği Kuruluşunu Bulmak
            </h3>
            <p className="leading-8 text-gray-700">
              İlk adım, sektörünüzde veya bölgenizde zaten bir UR-GE
              projesi yürüten ya da yeni proje planlayan bir İhracatçı
              Birliği, Ticaret/Sanayi Odası, OSB yönetimi ya da sektör
              derneği bulmaktır. Birçok ihracatçı birliği ve oda, kendi
              web sitesinde yürüttüğü aktif UR-GE projelerini ve katılımcı
              çağrılarını duyurur.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.2. DYS Üzerinden Yararlanıcı Kaydı
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketin projeye katılımcı olarak dahil edilebilmesi için
              Destek Yönetim Sistemi&apos;nde (DYS) yararlanıcı olarak
              kayıtlı olması zorunludur. Bu kayıt genellikle işbirliği
              kuruluşunun yönlendirmesiyle tamamlanır.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.3. Kümenin İhtiyaç Analizi ve Faaliyet Takvimine Dahil Olma
            </h3>
            <p className="leading-8 text-gray-700">
              Proje onaylandıktan sonra katılımcı şirketler, kümenin ortak
              ihtiyaç analizi, eğitim/danışmanlık programı, tanıtım
              faaliyetleri ve yurt dışı pazarlama/alım heyeti takvimine
              dahil olur. Şirketin bu aşamada beklentisi netse (hedef
              pazar, hedef fuar, ihtiyaç duyulan danışmanlık konusu),
              işbirliği kuruluşuyla bu beklentileri baştan paylaşmak süreci
              hızlandırır.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              5.4. Faaliyet Bitiminde Destek Ödemesi
            </h3>
            <p className="leading-8 text-gray-700">
              Her faaliyetin bitiş tarihinden itibaren en geç 3 ay
              içinde, gerekli belgelerle birlikte DYS üzerinden incelemeci
              kuruluşa (İhracatçı Birlikleri Genel Sekreterliği/İBGS)
              destek ödemesi başvurusu yapılır. Bu başvuruyu genellikle
              işbirliği kuruluşu koordine eder; katılımcı şirketten
              istenen fatura ve harcama belgelerinin zamanında ve eksiksiz
              teslim edilmesi ödemenin gecikmemesi açısından önemlidir.
            </p>
          </div>
        </div>
      </section>

      {/* 6. KARŞILAŞTIRMA */}
      <section id="karsilastirma" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Diğer İhracat Destekleriyle Farkı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE, Ticaret Bakanlığı&apos;nın tek ihracat desteği değil.
          Aşağıdaki tablo, en sık karıştırılan üç mekanizma arasındaki
          temel farkı özetliyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Destek</th>
                <th className="p-5">Başvurucu</th>
                <th className="p-5">Model</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">UR-GE Proje Desteği</td>
                <td className="p-5">İşbirliği kuruluşu (şirket katılımcı olarak yer alır)</td>
                <td className="p-5">Kolektif/kümelenme, %75 oranında gider desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  <Link href="/blog/turquality-programi-nedir-sartlari-destekleri-2026" className="text-orange-600 underline">
                    Turquality / Marka Destek Programı
                  </Link>
                </td>
                <td className="p-5">Şirketin kendisi (bireysel puanlama)</td>
                <td className="p-5">Bireysel, marka odaklı, %50-%75 oranında gider desteği</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  <Link href="/blog/ticaret-bakanligi-ihracat-destekleri-2026" className="text-orange-600 underline">
                    Pazara Giriş, Fuar, E-İhracat Destekleri
                  </Link>
                </td>
                <td className="p-5">Şirketin kendisi (bireysel)</td>
                <td className="p-5">Bireysel, faaliyet bazlı sabit tutar/oran desteği</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kısaca: markanızı bireysel olarak büyütmek istiyorsanız Turquality
          süreci, tek bir fuar veya pazar araştırması gideriniz varsa
          bireysel ihracat destekleri, sektörünüzdeki diğer şirketlerle
          birlikte yeni pazarlara açılmak istiyorsanız UR-GE doğru
          mekanizma oluyor. Bu üç yapı birbirini dışlamaz; aynı şirket
          farklı dönemlerde hem UR-GE&apos;ye katılımcı olabilir hem de
          bireysel ihracat desteklerinden yararlanabilir.
        </p>
      </section>

      {/* 7. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ UR-GE&apos;ye bireysel başvuru yapılmaz, mutlaka bir işbirliği
            kuruluşunun kümesine katılımcı olarak dahil olunur
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Katılım kararından önce kümenin hedef pazarının ve faaliyet
            takviminin sizin ihracat stratejinizle örtüştüğünden emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı anda sadece bir UR-GE projesinde katılımcı
            olabileceğinizi unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ DYS yararlanıcı kaydınızın güncel ve eksiksiz olduğundan
            emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faaliyet bitiminden itibaren 3 aylık belge teslim süresini
            kaçırmayın, gecikme destek kaybına yol açabilir
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek üst limitleri her yıl güncellendiğinden, başvuru
            öncesi ilgili yılın güncel tablosunu Ticaret Bakanlığı&apos;nın
            resmî sayfasından teyit edin
          </div>
        </div>
      </section>

      {/* 8. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karara-iliskin-genelgeler/ur-ge-proje-destegi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Ticaret Bakanlığı - UR-GE Proje Desteği
            </a>
          </li>
          <li>
            <a
              href="https://ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karar-destek-ust-limitleri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Ticaret Bakanlığı - 5973 Sayılı Karar 2026 Destek Üst Limitleri
            </a>
          </li>
          <li>
            <a
              href="https://www.yatirimadestek.gov.tr/destek/uluslararasi-rekabetciligin-gelistirilmesi-ur-ge-proje-destegi/336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              T.C. Sanayi ve Teknoloji Bakanlığı - Yatırıma Destek Platformu, UR-GE Özet Bilgi Formu
            </a>
          </li>
        </ul>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim UR-GE desteğine tek başına başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. UR-GE, işbirliği kuruluşları (İhracatçı Birlikleri,
              Odalar, OSB&apos;ler, sektör dernekleri vb.) tarafından
              yürütülen bir projedir. Şirketiniz bu projeye ancak
              katılımcı olarak dahil olabilir, doğrudan Ticaret
              Bakanlığı&apos;na bireysel başvuru yapamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Hangi işbirliği kuruluşuna başvuracağımı nereden öğrenirim?
            </h3>
            <p className="leading-8 text-gray-700">
              Öncelikle bağlı olduğunuz ihracatçı birliğine, bulunduğunuz
              ilin Ticaret veya Sanayi Odasına ya da faaliyet gösterdiğiniz
              sektörün derneğine ulaşmanız gerekir. Bu kurumların çoğu,
              yürüttükleri veya planladıkları UR-GE projelerini kendi web
              sitelerinde duyurur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              UR-GE desteği hibe mi, katılımcı şirket hiçbir masraf ödemiyor mu?
            </h3>
            <p className="leading-8 text-gray-700">
              Destek, gerçekleşen giderlerin %75&apos;ini karşılıyor; kalan
              %25&apos;lik pay katılımcı şirketler ve/veya işbirliği
              kuruluşu tarafından üstlenilir. Dolayısıyla katılımcı şirket
              için giderin tamamı değil, belirli bir kısmı hibe niteliğinde
              karşılanmış olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Aynı anda birden fazla UR-GE projesine katılımcı olabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır, bir şirket aynı anda yalnızca bir UR-GE projesinde
              katılımcı olarak yer alabilir. Farklı zaman dilimlerinde,
              proje bitiminin ardından toplamda en fazla 3 UR-GE projesine
              katılımcı olunabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              UR-GE ile Turquality aynı anda yürütülebilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              İkisi farklı amaçlara hizmet eden ayrı mekanizmalardır: UR-GE
              kümelenme temelli kolektif bir süreçken, Turquality bireysel
              marka gelişimine odaklanır. Bir şirketin ikisinden aynı
              faaliyet için mükerrer destek alması mümkün değildir; ancak
              hangi programın hangi ihtiyacınıza uygun olduğunu
              netleştirmek başvuru öncesinde değerlendirilmesi gereken bir
              konudur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              UR-GE projesi ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Standart proje süresi 3 yıldır. Proje Değerlendirme Komisyonu,
              projenin performansına göre bu süreye 2 yıla kadar ek süre
              verebilir; böylece bir UR-GE projesi toplamda 5 yıla kadar
              devam edebilir.
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
          UR-GE Proje Desteği, düzenli ihracatçı olma hedefindeki KOBİ&apos;ler
          için önemli bir finansman ve kapasite geliştirme aracı. Ancak
          faydasını gerçekten görebilmek, doğru işbirliği kuruluşunu
          bulmaktan ve o kuruluşun kümelenme stratejisinin kendi ihracat
          hedeflerinizle örtüşüp örtüşmediğini önceden değerlendirmekten
          geçiyor. Bireysel bir başvuru sürecinin aksine, burada başarı
          büyük ölçüde doğru kümeyi ve doğru zamanlamayı seçmeye bağlı.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 UR-GE Sürecinde Şirketinizin Doğru Konumunu Birlikte Belirleyelim
          </h3>
          <p className="leading-8 text-gray-700">
            Hangi işbirliği kuruluşunun kümelenme projesine katılmanın
            işletmeniz için gerçekten anlamlı olduğunu, DYS&apos;de
            yararlanıcı kaydınızın oluşturulmasından süreç boyunca ihracat
            stratejinizin yönetilmesine kadar birlikte değerlendirebiliriz.{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              Şirketinizin destek uygunluğunu ücretsiz ön analizle birlikte
              değerlendirelim.
            </Link>{" "}
            veya{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              doğrudan bizimle iletişime geçin.
            </Link>
          </p>
        </div>
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
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri (2026 Rehberi)</h3>
          </Link>
          <Link
            href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir? Şartları ve Destekleri</h3>
          </Link>
          <Link
            href="/blog/kosgeb-kuresel-rekabetciligin-gelistirilmesi-projesi-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • İHRACAT VE REKABETÇİLİK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Küresel Rekabetçiliğin Geliştirilmesi Projesi</h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
