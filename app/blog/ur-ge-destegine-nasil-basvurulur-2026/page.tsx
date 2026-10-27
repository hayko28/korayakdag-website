import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "UR-GE Desteğine Nasıl Başvurulur? Şirketler Doğrudan Başvuramıyor (2026) | Koray Akdağ",
  description:
    "UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) desteğine şirketler neden doğrudan başvuramıyor, işbirliği kuruluşu kimdir, hangi faaliyetler %75 oranında destekleniyor ve eski 2010/8 sayılı Genelge'nin mülga olmasının UR-GE'yi etkileyip etkilemediği; 5973 sayılı Karar'a dayanan 2026 güncel rehber.",
  keywords: [
    "UR-GE desteği",
    "UR-GE nasıl başvurulur",
    "Uluslararası Rekabetçiliğin Geliştirilmesi",
    "UR-GE işbirliği kuruluşu",
    "UR-GE destek oranı",
    "5973 sayılı Karar UR-GE",
    "UR-GE projesi nedir",
    "ihracat kümelenme desteği",
  ],
  alternates: {
    canonical: "/blog/ur-ge-destegine-nasil-basvurulur-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="UR-GE Desteğine Nasıl Başvurulur? Şirketler Doğrudan Başvuramıyor, 2026 Güncel Rehber"
      description="UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) projelerinde başvuru sahibi şirket değil işbirliği kuruluşudur. Kimler işbirliği kuruluşu olabilir, bir şirket projeye nasıl dahil olur, hangi faaliyetler %75 oranında destekleniyor ve eski 2010/8 sayılı Genelge'nin mülga olması UR-GE'yi etkiliyor mu; 5973 sayılı Karar'a dayanan güncel rehber."
      category="UR-GE • İHRACAT DESTEKLERİ • 2026"
      date="Ekim 2026"
      readTime="13 Dakika"
      slug="ur-ge-destegine-nasil-basvurulur-2026"
      coverImage="https://images.unsplash.com/photo-1741437136281-c66625b1a3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="UR-GE Projesine Dahil Olma Sürecinizi Birlikte Değerlendirelim"
      ctaText="Sektörünüzdeki hangi işbirliği kuruluşunun UR-GE projesi yürüttüğünü, şirketinizin bu projelere katılım şartlarını sağlayıp sağlamadığını ve ihtiyaç analizi sürecinde nelere hazırlıklı olmanız gerektiğini birlikte netleştirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        İhracata yeni başlayan veya ihracatını büyütmek isteyen pek çok şirket
        sahibi, KOSGEB veya TÜBİTAK desteklerine başvurduğu gibi UR-GE
        desteğine de kendi şirketi adına doğrudan başvurabileceğini düşünür.
        Oysa UR-GE (Uluslararası Rekabetçiliğin Geliştirilmesi) tamamen farklı
        bir mantıkla çalışır: başvuru sahibi tek bir şirket değil, aynı
        sektördeki birden çok şirketi bir araya getiren bir
        &quot;işbirliği kuruluşu&quot;dur. Bu yazıda UR-GE&apos;nin gerçekte
        nasıl işlediğini, bir şirketin bu desteğe nasıl dahil olabileceğini ve
        eski 2010/8 sayılı Genelge&apos;nin yürürlükten kaldırılmasının
        UR-GE&apos;yi etkileyip etkilemediğini resmî kaynaklara dayanarak
        anlatıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ UR-GE desteği hâlâ aktif ve kullanılabiliyor; yalnızca eski{" "}
            <strong>2010/8 sayılı Genelge</strong> yürürlükten kaldırıldı,
            yerine 5973 sayılı İhracat Destekleri Hakkında Karar&apos;a
            dayanan yeni bir Genelge geçti.
          </li>
          <li>
            ✔ Şirketler UR-GE&apos;ye <strong>kendi adına doğrudan
            başvuramaz</strong>. Başvuru sahibi, TİM, TOBB, ihracatçı
            birlikleri, odalar, sektör dernekleri, OSB&apos;ler veya ihracat
            konsorsiyumları gibi bir &quot;işbirliği kuruluşu&quot;dur.
          </li>
          <li>
            ✔ Bir şirket, kendi sektöründeki işbirliği kuruluşunun yürüttüğü
            bir UR-GE projesine <strong>üye/yararlanıcı</strong> olarak dahil
            olur.
          </li>
          <li>
            ✔ İhtiyaç analizi, eğitim, danışmanlık ve tanıtım faaliyetleri
            işbirliği kuruluşuna <strong>%75 oranında</strong> destekleniyor.
          </li>
          <li>
            ✔ Projeye ilk defa dahil olacak uzman personel istihdamı, yurt
            dışı pazarlama, sanal pazarlama ve alım heyeti faaliyetleri de
            ayrı kalemler olarak destekleniyor.
          </li>
          <li>
            ✔ Bir şirket aynı anda yalnızca <strong>bir</strong> UR-GE
            projesinde yer alabilir; projeden süresinden önce ayrılmak proje
            hakkının kullanılmış sayılmasına yol açar.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. UR-GE Nedir? Kümelenme Mantığı
          </Link>
          <Link href="#isbirligi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. İşbirliği Kuruluşu Kimdir, Şirket Nasıl Dahil Olur?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Karıştırmayın: Doğrudan Başvuru Yok, Turquality&apos;den Farkı
          </Link>
          <Link href="#faaliyetler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Hangi Faaliyetler Destekleniyor?
          </Link>
          <Link href="#oranlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Destek Oranı ve Üst Limitler
          </Link>
          <Link href="#mevzuat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. 2010/8 Sayılı Genelge Neden Mülga Oldu?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım Süreç
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

      {/* 1. UR-GE NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. UR-GE Nedir? Kümelenme Mantığı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          UR-GE, Ticaret Bakanlığı&apos;nın 2010&apos;dan beri yürüttüğü,
          şirketlerin tek başına değil bir araya gelerek (kümelenerek)
          ihracata yönlendirilmesini ve düzenli ihracatçı hâline gelmesini
          hedefleyen bir destek modelidir. Mantık şudur: aynı sektördeki veya
          aynı bölgedeki şirketler, rekabet ettikleri kadar ortak sorunlara da
          sahiptir. Pazar araştırması, yabancı dilde tanıtım materyali,
          uluslararası fuar katılımı veya alım heyeti ağırlama gibi
          maliyetler tek bir KOBİ için ağır olabilirken, bir grup şirket bu
          maliyeti paylaştığında hem bütçe hem bilgi birikimi anlamında daha
          güçlü bir pozisyona geçer.
        </p>
        <p className="leading-8 text-gray-700">
          Bu nedenle UR-GE&apos;de destek, tek bir şirkete değil bir
          &quot;projeye&quot; verilir. Projenin amacı, kapsamı, süresi ve
          bütçesi önceden belirlenir; projeyi yürüten taraf bir işbirliği
          kuruluşu, projeden faydalanan taraf ise bu kuruluşun üyesi olan
          şirketler topluluğudur.
        </p>
      </section>

      {/* 2. İŞBİRLİĞİ KURULUŞU */}
      <section id="isbirligi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. İşbirliği Kuruluşu Kimdir, Şirket Nasıl Dahil Olur?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE Genelgesi&apos;ne göre işbirliği kuruluşu olabilecek yapılar
          sınırlı ve tanımlı:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ İşbirliği Kuruluşu Olabilecekler
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Türkiye İhracatçılar Meclisi (TİM) ve ihracatçı birlikleri</li>
              <li>✔ Türkiye Odalar ve Borsalar Birliği (TOBB), ticaret ve sanayi odaları</li>
              <li>✔ Dış Ekonomik İlişkiler Kurulu (DEİK)</li>
              <li>✔ Organize sanayi bölgeleri (OSB) ve teknoloji geliştirme bölgeleri</li>
              <li>✔ Sektörel çatı kuruluşları ve sanayici/işveren dernekleri</li>
              <li>✔ Üretici dernekleri ve kooperatifler</li>
              <li>✔ İhracat konsorsiyumları</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Tek Başına Başvuru Hakkı Olmayanlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ Tek bir ticari şirket (Limited, Anonim, şahıs işletmesi)</li>
              <li>❌ Yalnızca bir kişiyi/firmayı temsil eden yapılar</li>
              <li>❌ UR-GE kapsamında tanımlı olmayan dernek/vakıflar</li>
            </ul>
            <p className="mt-6 leading-7 text-gray-700">
              Şirketler bu desteğe ancak yukarıdaki kuruluşlardan birinin
              yürüttüğü bir projeye <strong>üye/yararlanıcı</strong> olarak
              katılarak erişebilir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            👥 Projeye Katılım Şartları
          </h3>
          <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-blue-600">
            <li>
              Şirketin, işbirliği kuruluşunun Destek Yönetim Sistemi
              (DYS) üzerinden yararlanıcı olarak kaydedilmesi gerekir.
            </li>
            <li>
              Bir projeye dahil olacak işbirliği kuruluşunun, 4-6. bölge
              illerinde/ilçelerinde en az <strong>5</strong>, diğer
              bölgelerde en az <strong>10</strong> üye şirketi bir araya
              getirmesi şartı aranır (bazı pazarlama faaliyetlerinde bu sayı
              farklılaşabilir).
            </li>
            <li>
              Bir şirket aynı anda yalnızca <strong>bir</strong> UR-GE
              projesinde yer alabilir; proje bitmeden ayrılmak, o projeye
              ilişkin hakkın kullanılmış sayılmasına yol açar.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Karıştırmayın: Doğrudan Başvuru Yok, Turquality&apos;den Farkı
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>
              <strong>UR-GE&apos;ye şirket adına e-Devlet veya DYS üzerinden
              bireysel başvuru yapılmaz.</strong> KOSGEB&apos;in Girişimci
              veya Kapasite Geliştirme destekleri gibi şirketin kendi adına
              doğrudan başvurduğu programlarla UR-GE aynı mantıkla çalışmaz.
              UR-GE&apos;de başvuru sahibi her zaman bir işbirliği
              kuruluşudur.
            </li>
            <li>
              <strong>UR-GE ile Turquality/Marka Destek Programı farklı
              aşamaları hedefler.</strong> UR-GE, henüz ihracata başlamamış
              veya ihracatını artırmaya çalışan bir grup şirketi kümelenme
              yoluyla destekler; Turquality ise zaten belirli bir ihracat ve
              marka olgunluğuna ulaşmış, puanlama eşiğini geçen bireysel
              markalara yöneliktir. Bir şirket önce UR-GE sürecinden geçip
              ihracat kapasitesini olgunlaştırabilir, ardından kendi markası
              için Turquality&apos;ye başvurabilir.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. FAALİYETLER */}
      <section id="faaliyetler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Hangi Faaliyetler Destekleniyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE Genelgesi, bir projenin aşamalı olarak ilerlemesini bekler.
          Önce ihtiyaç analizi yapılır, ardından eğitim/danışmanlık ve
          tanıtım faaliyetleri, en sonunda da yurt dışı pazarlama ve alım
          heyeti faaliyetleri devreye girer:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Faaliyet</th>
                <th className="p-4">İçerik</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İhtiyaç Analizi</td>
                <td className="p-4">
                  Kümenin ihracat kapasitesini, eksiklerini ve hedef
                  pazarlarını belirleyen rapor; proje kapsamının temelini
                  oluşturur.
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Eğitim ve Danışmanlık</td>
                <td className="p-4">
                  İhracat prosedürleri, dış ticaret, dijitalleşme, kalite ve
                  sektöre özel konularda hizmet alımı.
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Tanıtım</td>
                <td className="p-4">
                  Küme/sektör web sitesi, katalog, tanıtım filmi ve medya
                  faaliyetleri (yalnızca Türkçe veya yalnızca iç pazara
                  yönelik tanıtım desteklenmez).
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">İstihdam</td>
                <td className="p-4">
                  İşbirliği kuruluşunun UR-GE projesi için ilk defa istihdam
                  edeceği, proje başına en fazla 2 uzman personelin giderine
                  destek.
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yurt Dışı Pazarlama / Alım Heyeti</td>
                <td className="p-4">
                  Hedef ülkelere pazarlama ziyareti, yurt dışı fuar
                  katılımı ve yabancı alıcıların Türkiye&apos;ye davet
                  edilmesi (alım heyeti).
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold">Sanal Yurt Dışı Pazarlama</td>
                <td className="p-4">
                  Fiziki seyahat gerektirmeyen, dijital ortamda yürütülen
                  B2B eşleştirme ve tanıtım faaliyetleri.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. DESTEK ORANI */}
      <section id="oranlar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Destek Oranı ve Üst Limitler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE&apos;de destek, şirkete değil projeyi yürüten işbirliği
          kuruluşuna ödenir; kuruluş bu desteği proje bütçesinde kullanır.
          İhtiyaç analizi, eğitim, danışmanlık ve tanıtım faaliyetlerinde
          uzun süredir uygulanan oran <strong>%75</strong>&apos;tir; kalan
          %25&apos;i işbirliği kuruluşu kendi kaynağından veya üye
          katkılarından karşılar.
        </p>
        <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            ⚠️ Üst Limitler Her Yıl Güncelleniyor
          </h3>
          <p className="leading-8 text-gray-700">
            Genelge, konaklama, ulaşım ve etkinlik bazlı harcamalara somut
            TL/gün veya kişi başı üst limitler koyuyor; örneğin konaklama
            giderinde kişi/gün bazlı bir tavan uygulanıyor. Ancak bu
            tutarlar Genelge&apos;nin 30. maddesi gereği{" "}
            <strong>her takvim yılı başında TÜFE/ÜFE ortalamasına göre
            güncelleniyor</strong>. Bu nedenle bu yazıda tek bir TL rakamı
            vermek yerine, başvuru öncesinde işbirliği kuruluşunuzdan veya
            Ticaret Bakanlığı&apos;nın güncel UR-GE formlarından o yılın
            geçerli tavan tutarlarını teyit etmenizi öneriyoruz.
          </p>
        </div>
      </section>

      {/* 6. MEVZUAT */}
      <section id="mevzuat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. 2010/8 Sayılı Genelge Neden Mülga Oldu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UR-GE, 2010&apos;dan beri 2010/8 sayılı Genelge çerçevesinde
          yürütülüyordu. 17 Ağustos 2022 tarihli ve 5973 sayılı
          Cumhurbaşkanı Kararı (İhracat Destekleri Hakkında Karar) ile
          ihracat destekleri mevzuatı tek bir çatı Karar altında yeniden
          düzenlendi. Bu geçişle birlikte Ticaret Bakanlığı, UR-GE&apos;nin
          uygulama usul ve esaslarını da 5973 sayılı Karar&apos;a dayanan
          yeni bir Genelge&apos;ye taşıdı; eski 2010/8 sayılı Genelge ise
          ticaret.gov.tr üzerinde artık &quot;(Mülga)&quot; ibaresiyle
          arşivde yer alıyor.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Burada kritik nokta şu: 2010/8&apos;in mülga olması UR-GE
          desteğinin sona erdiği anlamına gelmiyor, sadece desteğin hangi
          düzenlemeye dayandığının değiştiği anlamına geliyor. Yeni Genelge
          üzerinde 3 Aralık 2024&apos;te DEİK&apos;in işbirliği kuruluşu
          listesine eklenmesi dahil 23 madde değişikliği/eki yapıldı ve
          Genelge&apos;nin güncel hâli 6 Ekim 2025 itibarıyla yürürlükte.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Ticaret Bakanlığı mevzuatında &quot;(Mülga)&quot; etiketi gören
            birçok şirket sahibi, programın tamamen kalktığını düşünüp
            araştırmayı burada kesiyor. Oysa Türkiye&apos;deki destek
            mevzuatında sık görülen bir pratik var: eski bir tebliğ veya
            genelge mülga edilirken aynı destek, yeni bir çatı Karar&apos;a
            bağlanan güncellenmiş bir düzenlemeyle devam ettiriliyor. UR-GE
            tam olarak bu örneklerden biri. Bu nedenle bir destek programının
            gerçekten sona mı erdiğini yoksa sadece dayanağının mı
            değiştiğini anlamak için, mülga ibaresinin yanında yeni bir
            genelge/karar referansı olup olmadığına bakmak gerekiyor; sadece
            başlıktaki &quot;mülga&quot; kelimesine bakarak sonuca gitmek
            yanıltıcı olabilir.
          </p>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım Süreç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir şirketin UR-GE sürecine dahil olması, tipik olarak şu
          adımlardan geçer:
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">1.</span> Kendi
            sektörünüzde UR-GE projesi yürüten veya yürütmeyi planlayan bir
            işbirliği kuruluşu (ihracatçı birliği, oda, sektör derneği,
            OSB, konsorsiyum) belirleyin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">2.</span> Bu
            kuruluşun UR-GE projesine üye/yararlanıcı olarak katılım şartlarını
            (asgari üye sayısı, sektör uygunluğu) karşıladığınızı teyit edin.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">3.</span> İşbirliği
            kuruluşu, projeyi EK-A belgeleriyle Destek Yönetim Sistemi (DYS)
            üzerinden Ticaret Bakanlığı&apos;na (İhracat Genel Müdürlüğü)
            sunar; Proje Değerlendirme Komisyonu projeyi onaylar,
            değişiklik talep eder veya reddeder.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">4.</span> Proje
            onaylanırsa, bildirim tarihinden itibaren 6 ay içinde ihtiyaç
            analizi raporu ve yol haritası Bakanlığa sunulur.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">5.</span> Eğitim,
            danışmanlık veya tanıtım faaliyeti planlanıyorsa en az 15 gün,
            yurt dışı pazarlama veya alım heyeti planlanıyorsa en az 1 ay
            önceden faaliyet başvurusu yapılır.
          </div>
          <div className="rounded-xl border p-5">
            <span className="font-black text-orange-500">6.</span>{" "}
            Faaliyet tamamlandıktan sonra harcama belgeleri 3 ay içinde DYS
            üzerinden sunulur; inceleme sonrası destek ödemesi, bankacılık
            kanalıyla yalnızca işbirliği kuruluşuna yapılır.
          </div>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Şirket adına tek başına başvuru yapılamadığını unutmayın,
            önce doğru işbirliği kuruluşunu bulun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Aynı anda yalnızca bir UR-GE projesinde yer alabileceğinizi
            göz önünde bulundurun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Sadece Türkçe veya iç pazara yönelik tanıtım faaliyetlerinin
            desteklenmediğini bilin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Üst limitlerin her yıl değiştiğini, güncel tutarı başvuru
            öncesi teyit etmeniz gerektiğini unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Faaliyet başvurularının (eğitim/tanıtım için 15 gün, yurt
            dışı pazarlama için 1 ay) önceden yapılması gerektiğini
            planlamanıza dahil edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Destek ödemesinin size değil işbirliği kuruluşuna
            yapıldığını, kendi payınızın kuruluşla yapacağınız iç
            anlaşmaya bağlı olduğunu bilin
          </div>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
          <li>
            <a
              href="https://ticaret.gov.tr/destekler/ihracat-destekleri/mulga-karar-teblig-bazinda-destek-mevzuati/mulga-2010-8-sayili-uluslararasi-rekabetciligin-gelistirilmesi-ur-ge-proje-destegine-iliskin-genelge/ur-ge-projeleri-bilgi-ve-belgeler/basvuru-icin-gerekli-bilgi-ve-belgeler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Ticaret Bakanlığı - UR-GE Projeleri Bilgi ve Belgeler
              (2010/8 Sayılı Genelge arşiv sayfası)
            </a>
          </li>
          <li>
            <a
              href="https://ticaret.gov.tr/data/5b868a8d13b87818a009d3b0/5973 Sayılı İhracat Destekleri Hakkında Karar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              5973 Sayılı İhracat Destekleri Hakkında Karar (17.08.2022) -
              Ticaret Bakanlığı
            </a>
          </li>
          <li>
            <a
              href="https://ticaret.gov.tr/destekler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Ticaret Bakanlığı - Destekler Ana Sayfası
            </a>
          </li>
          <li>
            <a
              href="https://www.resmigazete.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Resmî Gazete - resmigazete.gov.tr
            </a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 UR-GE Sürecinde Doğru Adımı Birlikte Belirleyelim
          </h3>
          <p className="leading-8 text-gray-700">
            UR-GE&apos;de başarı, doğru işbirliği kuruluşunu bulmak ve
            projeye hazırlıklı girmekle başlar. Sektörünüzdeki hangi
            kuruluşun UR-GE projesi yürüttüğünü araştırmaktan, ihtiyaç
            analizi sürecinde şirketinizin hazırlığını değerlendirmeye kadar
            danışmanlık sağlıyoruz; ayrı bir yerel firma aramanıza gerek yok.{" "}
            <Link href="/ihracat-destekleri-danismanligi" className="text-orange-600 underline">
              İhracat destekleri danışmanlığı hizmetimizi inceleyebilir
            </Link>{" "}
            veya{" "}
            <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
              destek uygunluk analizimizle
            </Link>{" "}
            şirketinizin durumunu netleştirebilirsiniz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Bizimle iletişime geçebilirsiniz.
            </Link>
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
              UR-GE desteği hâlâ var mı, yoksa kaldırıldı mı?
            </h3>
            <p className="leading-8 text-gray-700">
              UR-GE desteği hâlâ aktif. Yürürlükten kaldırılan (mülga) şey,
              desteğin eski dayanağı olan 2010/8 sayılı Genelge. Destek, 5973
              sayılı Karar&apos;a dayanan yeni bir Genelge çerçevesinde
              devam ediyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketim UR-GE desteğine doğrudan başvurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. UR-GE&apos;de başvuru sahibi her zaman bir işbirliği
              kuruluşudur (ihracatçı birliği, oda, sektör derneği, OSB,
              ihracat konsorsiyumu vb.). Şirketler bu kuruluşun yürüttüğü
              projeye üye/yararlanıcı olarak dahil olur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sektörümde UR-GE projesi yürüten bir kuruluş yoksa ne yaparım?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu durumda bağlı olduğunuz ticaret/sanayi odası, ihracatçı
              birliği veya sektör derneğinize başvurarak yeni bir UR-GE
              projesi başlatılmasını talep edebilirsiniz; yeterli sayıda
              (genellikle en az 10, az gelişmiş bölgelerde en az 5) gönüllü
              şirket bulunduğunda kuruluş projeyi Bakanlığa sunabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              UR-GE desteği hangi oranda ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              İhtiyaç analizi, eğitim, danışmanlık ve tanıtım faaliyetleri
              işbirliği kuruluşuna %75 oranında destekleniyor. Harcama
              bazlı üst limitler ise her takvim yılı başında TÜFE/ÜFE
              ortalamasına göre güncelleniyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              UR-GE ile Turquality aynı şey mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. UR-GE, bir grup şirketi kümelenme yoluyla ihracata
              hazırlayan erken/orta aşama bir destek; Turquality ise zaten
              belirli bir ihracat ve marka olgunluğuna erişmiş bireysel
              markalara yönelik, puanlama eşiğiyle çalışan ayrı bir program.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Bir şirket aynı anda birden fazla UR-GE projesinde yer alabilir
              mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Genelge, bir şirketin aynı anda yalnızca bir UR-GE
              projesinde yararlanıcı olabileceğini düzenliyor. Projeden
              süresinden önce ayrılmak, o projeye ilişkin hakkın
              kullanılmış sayılmasına yol açıyor.
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
          UR-GE, Türkiye&apos;nin ihracat destekleri arasında en çok
          yanlış anlaşılan programlardan biri. Hem başvuru mekanizmasının
          KOSGEB veya TÜBİTAK gibi doğrudan şirket bazlı çalışmaması, hem de
          eski Genelge&apos;nin mülga ibaresiyle arşivde durması, birçok
          şirket sahibinin bu desteği gözden çıkarmasına yol açıyor. Oysa
          doğru işbirliği kuruluşunu bulan ve projeye hazırlıklı giren bir
          şirket için UR-GE, ihracata kümelenme yoluyla başlamanın hâlâ en
          güçlü kamu destekli yollarından biri.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar ve Hizmetler
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/ihracat-destekleri-danismanligi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">HİZMET • İHRACAT DESTEKLERİ DANIŞMANLIĞI</div>
            <h3 className="text-lg font-bold text-[#071A2F]">İhracat Destekleri ve Turquality Danışmanlığı</h3>
          </Link>
          <Link
            href="/blog/turquality-programi-nedir-sartlari-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TURQUALITY • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Turquality Programı Nedir?</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri</h3>
          </Link>
          <Link
            href="/blog/turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT FİNANSMANI • TÜRK EXIMBANK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türk Eximbank İhracat Kredisi Rehberi</h3>
          </Link>
          <Link
            href="/blog/stratejik-is-ortakligi-ortak-girisim-joint-venture-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">STRATEJİK İŞ ORTAKLIKLARI • ORTAK GİRİŞİM • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Stratejik İş Ortaklığı ve Ortak Girişim Modelleri</h3>
          </Link>
          <Link
            href="/blog/e-ihracat-amazon-etsy-trendyol-global-satisa-nasil-baslanir"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">E-İHRACAT • PAZARYERİ SATIŞI • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">E-İhracat: Amazon, Etsy ve Trendyol Global</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "UR-GE desteği hâlâ var mı, yoksa kaldırıldı mı?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UR-GE desteği hâlâ aktif. Yürürlükten kaldırılan (mülga) şey, desteğin eski dayanağı olan 2010/8 sayılı Genelge. Destek, 5973 sayılı Karar'a dayanan yeni bir Genelge çerçevesinde devam ediyor.",
                },
              },
              {
                "@type": "Question",
                name: "Şirketim UR-GE desteğine doğrudan başvurabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. UR-GE'de başvuru sahibi her zaman bir işbirliği kuruluşudur (ihracatçı birliği, oda, sektör derneği, OSB, ihracat konsorsiyumu vb.). Şirketler bu kuruluşun yürüttüğü projeye üye/yararlanıcı olarak dahil olur.",
                },
              },
              {
                "@type": "Question",
                name: "Sektörümde UR-GE projesi yürüten bir kuruluş yoksa ne yaparım?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bu durumda bağlı olduğunuz ticaret/sanayi odası, ihracatçı birliği veya sektör derneğinize başvurarak yeni bir UR-GE projesi başlatılmasını talep edebilirsiniz; yeterli sayıda (genellikle en az 10, az gelişmiş bölgelerde en az 5) gönüllü şirket bulunduğunda kuruluş projeyi Bakanlığa sunabilir.",
                },
              },
              {
                "@type": "Question",
                name: "UR-GE desteği hangi oranda ödeniyor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "İhtiyaç analizi, eğitim, danışmanlık ve tanıtım faaliyetleri işbirliği kuruluşuna %75 oranında destekleniyor. Harcama bazlı üst limitler ise her takvim yılı başında TÜFE/ÜFE ortalamasına göre güncelleniyor.",
                },
              },
              {
                "@type": "Question",
                name: "UR-GE ile Turquality aynı şey mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. UR-GE, bir grup şirketi kümelenme yoluyla ihracata hazırlayan erken/orta aşama bir destek; Turquality ise zaten belirli bir ihracat ve marka olgunluğuna erişmiş bireysel markalara yönelik, puanlama eşiğiyle çalışan ayrı bir program.",
                },
              },
              {
                "@type": "Question",
                name: "Bir şirket aynı anda birden fazla UR-GE projesinde yer alabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hayır. Genelge, bir şirketin aynı anda yalnızca bir UR-GE projesinde yararlanıcı olabileceğini düzenliyor. Projeden süresinden önce ayrılmak, o projeye ilişkin hakkın kullanılmış sayılmasına yol açıyor.",
                },
              },
            ],
          }),
        }}
      />
    </BlogLayout>
  );
}
