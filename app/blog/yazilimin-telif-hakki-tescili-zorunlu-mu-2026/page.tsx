import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yazılımın Telif Hakkı Tescili Zorunlu mu? 2026 Rehberi | Koray Akdağ",
  description:
    "Yazılım şirketleri ve startuplar için telif hakkı tescili zorunlu mu, isteğe bağlı mı? Kaynak kodunun FSEK kapsamında korunması, kayıt-tescil süreci, 2026 ücreti, yurt dışı koruma ve yazılımın neden patentle değil telifle korunduğu.",
  keywords: [
    "yazılım telif hakkı tescili",
    "telif hakkı tescili zorunlu mu",
    "bilgisayar programı telif hakkı",
    "kaynak kodu telif hakkı",
    "telif hakları genel müdürlüğü kayıt tescil",
    "yazılım patent alabilir mi",
    "FSEK bilgisayar programı",
    "isteğe bağlı kayıt tescil",
    "yazılım fikri mülkiyet koruması",
    "startup telif hakkı",
  ],
  alternates: {
    canonical: "/blog/yazilimin-telif-hakki-tescili-zorunlu-mu-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yazılımın Telif Hakkı Tescili Zorunlu mu? Yazılım Şirketleri İçin 2026 Rehberi"
      description="Kaynak kodunun telif hakkı oluşturulduğu anda kendiliğinden doğar, ama bu hakkı bir uyuşmazlıkta ispat etmek apayrı bir meseledir. Zorunlu mu isteğe bağlı mı kayıt-tescil, başvuru süreci, 2026 ücreti, yurt dışı koruma ve yazılımın neden genelde patentle değil telif hakkıyla korunduğuyla kapsamlı rehber."
      category="FİKRİ MÜLKİYET • TELİF HAKKI • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="yazilimin-telif-hakki-tescili-zorunlu-mu-2026"
      coverImage="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="Yazılımınızın Fikri Mülkiyet Durumunu Birlikte Netleştirelim"
      ctaText="Geliştirdiğiniz yazılımın telif hakkı durumunu, çalışan/tedarikçi sözleşmelerindeki hak devri maddelerini ve kurumsallaşma veya yatırımcı görüşmeleri öncesinde fikri mülkiyet varlıklarınızın şirket değerindeki yerini birlikte değerlendirelim."
    >
      {/* GİRİŞ */}
      <p className="mb-8 text-lg leading-9 text-gray-700">
        Bir yazılım şirketi kurucusunun en sık sorduğu sorulardan biri budur:
        &quot;Geliştirdiğim yazılımı tescil ettirmem gerekiyor mu, yoksa
        kodu yazdığım an zaten korunuyor mu?&quot; Cevap kafa karıştırıcı
        gelebilir çünkü ikisi de kısmen doğrudur. Yazılımınızın telif hakkı,
        onu yazdığınız anda hiçbir işlem yapmanıza gerek kalmadan doğar.
        Ancak bu hakkı bir ortaklık anlaşmazlığında, bir rakip taklidinde
        veya bir yatırımcı görüşmesinde kanıtlamanız gerektiğinde, elinizde
        tarih damgalı resmî bir belge olup olmaması çok şey değiştirir. Bu
        yazıda yazılımın telif hakkının ne zaman doğduğunu, kayıt-tescilin
        zorunlu mu isteğe bağlı mı olduğunu, başvuru sürecini ve yazılımın
        neden genelde patentle değil telif hakkıyla korunduğunu güncel ve
        doğrulanmış bilgilerle ele alıyoruz.
      </p>

      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          ⚡ Kısa Cevap
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            ✔ Yazılımın telif hakkı, 5846 sayılı Fikir ve Sanat Eserleri
            Kanunu (FSEK) uyarınca <strong>eser meydana getirildiği anda
            kendiliğinden doğar</strong>; korunması için herhangi bir kuruma
            kayıt yaptırmak şart değildir.
          </li>
          <li>
            ✔ Kültür ve Turizm Bakanlığı&apos;na kayıt-tescil, bilgisayar
            programları için <strong>isteğe bağlıdır</strong>; zorunlu
            tescil kuralı FSEK madde 13 çerçevesinde esas olarak belirli
            sinema ve müzik eserlerini kapsar.
          </li>
          <li>
            ✔ Tescil hak yaratmaz, <strong>beyana dayalı bir ispat
            kolaylığı</strong> sağlar: eserin kime ait olduğunu ve hangi
            tarihte var olduğunu resmî bir belgeyle kanıtlamanızı sağlar.
          </li>
          <li>
            ✔ Güncel isteğe bağlı kayıt-tescil işlem ücreti
            <strong> 1.970 TL</strong>&apos;dir (Telif Hakları Genel
            Müdürlüğü güncel tarifesi); başvuru öncesinde teyit edilmesi
            önerilir.
          </li>
          <li>
            ✔ Yazılımlar, 6769 sayılı Sınai Mülkiyet Kanunu madde 82/2
            uyarınca <strong>&quot;kendileri itibarıyla&quot; patent
            korumasının dışındadır</strong>; esas koruma yolu telif
            hakkıdır, patent değil.
          </li>
          <li>
            ✔ Türkiye&apos;nin taraf olduğu Bern Sözleşmesi sayesinde
            yazılımınız, ek bir işlem yapmanıza gerek kalmadan sözleşmeye
            üye 180&apos;den fazla ülkede de otomatik olarak korunur.
          </li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#hak-dogusu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Yazılımın Telif Hakkı Ne Zaman Doğar?
          </Link>
          <Link href="#zorunlu-istege-bagli" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Zorunlu mu, İsteğe Bağlı mı Kayıt-Tescil?
          </Link>
          <Link href="#neden-tescil" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Tescil Hak Yaratmıyorsa Neden Yaptırılır?
          </Link>
          <Link href="#basvuru-sureci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Başvuru Süreci: Adım Adım
          </Link>
          <Link href="#ucret-sure" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Ücret ve Süre (2026)
          </Link>
          <Link href="#yurtdisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Yurt Dışında Koruma: Bern Sözleşmesi
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Kimler İçin Önemli, Ne Zaman Yaptırılmalı?
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

      {/* 1. HAK DOĞUŞU */}
      <section id="hak-dogusu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Yazılımın Telif Hakkı Ne Zaman Doğar?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          5846 sayılı Fikir ve Sanat Eserleri Kanunu&apos;nun 2. maddesi
          uyarınca bilgisayar programları, <strong>&quot;ilim ve edebiyat
          eserleri&quot;</strong> kategorisinde korunur; tıpkı bir kitap
          veya makale gibi. Bu korumanın en önemli özelliği, hiçbir
          formaliteye bağlı olmamasıdır: yazılımı meydana getiren kişi,
          kodu yazdığı anda hem mali hem de manevi haklara otomatik olarak
          sahip olur. Herhangi bir kuruma başvuru yapmanız, bir damga
          almanız veya bir sertifika çıkarmanız, korumanın başlaması için
          şart değildir.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu ilke, Türkiye&apos;nin de taraf olduğu uluslararası Bern
          Sözleşmesi&apos;nin temel kuralıyla örtüşür: eser sahipliği,
          herhangi bir tescile tabi tutulamaz. Ancak otomatik koruma ile
          &quot;bu hakkı mahkemede, bir ortaklık görüşmesinde veya bir
          yatırımcı karşısında nasıl ispat ederim&quot; sorusu birbirinden
          tamamen farklı konulardır. İşte kayıt-tescil tam da bu noktada
          devreye giriyor.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Kısacası: hakkınız zaten var. Tescil, o hakkı yaratmaz; sadece
            onu görünür ve tarih damgalı hale getirir.
          </p>
        </div>
      </section>

      {/* 2. ZORUNLU - İSTEĞE BAĞLI */}
      <section id="zorunlu-istege-bagli" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Zorunlu mu, İsteğe Bağlı mı Kayıt-Tescil?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kültür ve Turizm Bakanlığı Telif Hakları Genel Müdürlüğü, Fikir
          ve Sanat Eserlerinin Kayıt ve Tescili Hakkında Yönetmelik
          çerçevesinde iki farklı kayıt-tescil türü uyguluyor:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Tescil Türü</th>
                <th className="p-5">Kapsamı</th>
                <th className="p-5">Bilgisayar Programları İçin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Zorunlu Kayıt-Tescil</td>
                <td className="p-5">
                  FSEK madde 13 çerçevesinde esas olarak ticarete konu
                  edilen belirli sinema ve müzik eseri kategorileri
                </td>
                <td className="p-5">Uygulanmaz</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">İsteğe Bağlı Kayıt-Tescil</td>
                <td className="p-5">
                  Bilgisayar programları dahil ilim ve edebiyat eserleri,
                  güzel sanat eserleri ve diğer eser grupları
                </td>
                <td className="p-5">
                  Eser sahibinin talebiyle, beyana dayalı olarak yapılır
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Yani bir yazılım şirketinin, geliştirdiği her sürüm veya modülü
          Bakanlığa tescil ettirme zorunluluğu yoktur. Kayıt-tescil, eser
          sahibinin kendi tercihiyle başvurduğu, hak sahipliğini resmî bir
          belgeyle görünür kılan ek bir güvencedir.
        </p>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Karıştırmayın: Telif Hakkı Tescili ile Patent Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            Yazılım geliştiren kurucuların en sık yaptığı hata,
            &quot;ürünümü koruma altına almak için patent almam
            gerekiyor&quot; diye düşünmektir. Oysa 6769 sayılı Sınai
            Mülkiyet Kanunu&apos;nun 82/2. maddesi, bilgisayar programlarını
            &quot;kendileri itibarıyla&quot; patent verilemeyecek konular
            arasında sayar; bu kural Avrupa Patent Sözleşmesi&apos;ndeki
            düzenlemeyle de örtüşür. Bir diğer anlatımla, kaynak kodunuzun
            kendisi patentle değil, telif hakkıyla korunur. İstisna, bu
            yazılımın belirli bir teknik sorunu çözen, somut bir teknik
            etki yaratan bir sistemin (örneğin bir endüstriyel kontrol
            mekanizmasının) ayrılmaz bir parçası olduğu durumlardır; bu
            senaryoda patentlenebilecek olan yazılımın kendisi değil,
            içinde yer aldığı teknik buluştur. Markanız için ayrı bir
            konu olan tescil süreçlerine{" "}
            <Link
              href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
              className="text-orange-600 underline"
            >
              Marka Tescili ve Patent Başvurusu rehberimizden
            </Link>{" "}
            bakabilirsiniz.
          </p>
        </div>
      </section>

      {/* 3. NEDEN TESCİL */}
      <section id="neden-tescil" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Tescil Hak Yaratmıyorsa Neden Yaptırılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Hak zaten var olduğuna göre, kayıt-tescilin pratikte neye yaradığı
          doğal bir soru. Cevap, tescilin sağladığı somut avantajlarda
          gizli:
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📅</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Tarih ve Sahiplik İspatı
            </h3>
            <p className="text-gray-700">
              Bir ortaklık ayrılığında, eski bir çalışanın kodu kendi adına
              kullanmaya kalkışmasında veya bir rakibin taklidinde,
              &quot;bu yazılımı ben ve bu tarihte oluşturdum&quot; iddianızı
              resmî bir belgeyle kanıtlamanız ispat yükünü ciddi şekilde
              hafifletir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💼</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yatırımcı ve Ortaklık Görüşmeleri
            </h3>
            <p className="text-gray-700">
              Due diligence sürecinde yatırımcılar, şirketin ana ürününün
              fikri mülkiyet durumunu sorgular. Tescil belgesi, şirketin
              en kritik varlığı üzerindeki hak sahipliğini net bir şekilde
              gösteren somut bir dokümandır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚖️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Hukuki Sürecin Hızlanması
            </h3>
            <p className="text-gray-700">
              Bir telif hakkı ihlali davasında karşı tarafın itirazına karşı
              resmî tescil belgesi, mahkemeye sunulacak güçlü bir ilk delil
              niteliği taşır ve sürecin daha hızlı ilerlemesine katkı
              sağlar.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            💡 Uzman Notu
          </h3>
          <p className="leading-8 text-gray-700">
            Uygulamada en sık gözden kaçan nokta, yazılımın telif hakkının
            kurucuya değil, çalışana veya dış tedarikçiye ait olabileceği
            ihtimalidir. FSEK&apos;e göre bir çalışan tarafından iş
            ilişkisi kapsamında oluşturulan eserlerde mali haklar genellikle
            işverene geçer, ancak bu sonucun netleşmesi, şirketin çalışan
            sözleşmelerinde ve freelance/tedarikçi anlaşmalarında fikri
            mülkiyet devrine ilişkin açık bir madde bulundurmasına bağlıdır.
            Bu maddeyi es geçen bir şirket, yıllar sonra kendi ürününün
            telif hakkının kime ait olduğunu tartışan tarafa dönüşebilir.
            Dolayısıyla kayıt-tescil kadar, sözleşmelerdeki hak devri
            maddesinin de başvuru öncesinde gözden geçirilmesi önemlidir.
          </p>
        </div>
      </section>

      {/* 4. BAŞVURU SÜRECİ */}
      <section id="basvuru-sureci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Başvuru Süreci: Adım Adım
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          İsteğe bağlı kayıt-tescil başvurusu, Telif Hakları Genel
          Müdürlüğü&apos;nün TEHAKSİS otomasyon sistemi üzerinden yürütülen,
          nispeten sade bir süreçtir:
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Eser Örneğinin Hazırlanması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Başvuru Formunun Doldurulması</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Ücretin Ödenmesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Bakanlık İncelemesi</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Kayıt-Tescil Belgesi</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.1. Eser Örneğinin Hazırlanması
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru sahibi, tescil talep edilen yazılımın kimliğini ortaya
            koyan bir örneğini (kaynak kodunun ilgili kısmı, ekran
            görüntüleri, teknik dokümantasyon gibi) başvuruya eklemek
            üzere hazırlar. Ticari sır niteliğindeki kodun tamamının ifşa
            edilmesi gerekmez; eserin kimliğini belirleyecek ölçüde bir
            örnek genellikle yeterlidir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.2. Başvuru Formunun Doldurulması
          </h3>
          <p className="leading-8 text-gray-700">
            Başvuru, Telif Hakları Genel Müdürlüğü&apos;nün başvuru ekranı
            üzerinden yapılır. Formda eser sahibinin (gerçek kişi için
            T.C. Kimlik No, tüzel kişi/şirket için vergi kimlik numarası)
            bilgileri, eserin adı, türü ve oluşturulma tarihi beyan edilir.
            Başvuru bir vekil aracılığıyla yapılıyorsa vekaletname de
            sisteme yüklenir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.3. Ücretin Ödenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            İşlem ücreti, başvuru sahibinin T.C. Kimlik No&apos;su (gerçek
            kişi) veya vergi kimlik numarası (şirket, kurum, dernek vb.)
            üzerinden, Bakanlığın belirlediği bankalar veya Hazine ve
            Maliye Bakanlığı muhasebe birimleri aracılığıyla ödenir.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            4.4. Bakanlık İncelemesi ve Belgenin Düzenlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Bakanlık, başvuruyu şekli olarak inceler; eserin içeriğinin
            özgünlüğü veya kalitesi hakkında bir değerlendirme yapmaz, zira
            tescil beyana dayalıdır. Eksiksiz başvurularda süreç tamamlanıp
            kayıt-tescil belgesi düzenlenir. Belgenin doğruluğu, Bakanlığın
            &quot;Belge Doğrulama&quot; sayfası üzerinden sonradan da
            teyit edilebilir.
          </p>
        </div>
      </section>

      {/* 5. ÜCRET VE SÜRE */}
      <section id="ucret-sure" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Ücret ve Süre (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Telif Hakları Genel Müdürlüğü&apos;nün güncel tarifesine göre
          isteğe bağlı kayıt-tescil başvurusu için uygulanan işlem ücreti{" "}
          <strong>1.970 TL</strong>&apos;dir. Bu ücret, başvuru türüne göre
          ayrım yapmaz; bilgisayar programları da dahil tüm isteğe bağlı
          başvurularda aynı tutar geçerlidir.
        </p>
        <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Bu tutar yalnızca Bakanlığa ödenen resmî işlem ücretidir;
            başvuru dosyasının hazırlanmasında dışarıdan danışmanlık
            desteği alınırsa bu hizmet bedeli ayrıca değerlendirilir.
            Tarife her yıl güncellenebildiğinden başvuru öncesinde{" "}
            <a
              href="https://telifhaklari.ktb.gov.tr/TR-332349/kayit-tescil-basvuru-ucreti.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Telif Hakları Genel Müdürlüğü&apos;nün resmî güncel ücret
              sayfasından
            </a>{" "}
            teyit alınması önerilir.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              ⏱️ İşlem Süresi
            </h3>
            <p className="text-gray-700">
              Eksiksiz ve şekli açıdan uygun başvurularda süreç nispeten
              hızlı sonuçlanır; süre, Bakanlığın o dönemdeki başvuru
              yoğunluğuna göre değişebilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔄 Koruma Süresi
            </h3>
            <p className="text-gray-700">
              Telif hakkının kendisi, FSEK&apos;e göre eser sahibinin
              hayatı boyunca ve ölümünden sonra 70 yıl sürer. Tescil
              belgesi süresiz bir kayıttır; yenileme gerektirmez, çünkü
              hakkı yaratan tescil değil, eserin kendisidir.
            </p>
          </div>
        </div>
      </section>

      {/* 6. YURT DIŞI */}
      <section id="yurtdisi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yurt Dışında Koruma: Bern Sözleşmesi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Marka ve patentten farklı olarak, telif hakkı için ülke ülke
          ayrı başvuru yapmaya gerek yoktur. Türkiye&apos;nin de taraf
          olduğu <strong>Bern Sözleşmesi</strong>, üye ülkelerin
          birbirlerinin vatandaşlarının eserlerini otomatik olarak, ek bir
          formaliteye gerek kalmadan koruması ilkesine dayanır. Bu sayede
          Türkiye&apos;de oluşturduğunuz bir yazılım, sözleşmeye üye
          180&apos;den fazla ülkede de telif hakkı korumasından
          yararlanır.
        </p>
        <p className="mb-8 leading-8 text-gray-700">
          Bu durum, özellikle yazılımını yurt dışına satan veya yurt dışında
          şirket kurarak büyüyen girişimler için önemli bir avantajdır.
          Ancak otomatik koruma, bir uyuşmazlık durumunda hangi ülkenin
          mahkemesinde, hangi ispat standardıyla hak arayacağınız sorusunu
          ortadan kaldırmaz; Türkiye&apos;deki kayıt-tescil belgesi, yurt
          dışındaki bir süreçte de tarih ve sahiplik ispatı için
          destekleyici bir belge olarak kullanılabilir.
        </p>
        <p className="leading-8 text-gray-700">
          Yurt dışında şirket kurarak büyümeyi planlıyorsanız, fikri
          mülkiyet varlıklarınızın yeni şirket yapınıza doğru şekilde
          devredilmesi de ayrı bir planlama konusudur;{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Kurmanın Avantajları
          </Link>{" "}
          rehberimizde bu süreci detaylı inceleyebilirsiniz.
        </p>
      </section>

      {/* 7. KİMLER */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Kimler İçin Önemli, Ne Zaman Yaptırılmalı?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kayıt-tescil her yazılım için aynı öncelikte olmayabilir, ancak
          aşağıdaki profillerde erken yaptırılması özellikle önem taşır:
        </p>
        <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
          <li>
            Ürününün kaynak kodunu birden fazla kurucu veya ortakla birlikte
            geliştiren startuplar; bir ortaklık ayrılığında hak sahipliği
            tartışmasının önüne geçmek için.
          </li>
          <li>
            Yazılımını dışarıdan bir ajans, freelancer veya yazılım evine
            geliştirten şirketler; hak devri sözleşmesi zayıfsa tescil ek
            bir güvence sağlar.
          </li>
          <li>
            Yatırım görüşmelerine hazırlanan veya due diligence sürecinden
            geçecek yazılım/teknoloji şirketleri.
          </li>
          <li>
            Ürününü yurt dışı pazarlara veya SaaS modeliyle uluslararası
            müşterilere satan şirketler.
          </li>
          <li>
            Eski bir çalışanın veya ortağın aynı kodu başka bir şirkette
            kullanma ihtimaline karşı önlem almak isteyen kurucular.
          </li>
        </ul>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Tescilin hak yaratmadığını, sadece ispatı kolaylaştırdığını
            unutmayın; tescil ettirmemek hakkınızı ortadan kaldırmaz
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Çalışan ve tedarikçi sözleşmelerinizde fikri mülkiyet devri
            maddesinin açık ve net olduğundan emin olun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yazılımın kendisini patentle korumaya çalışmak yerine, teknik
            bir buluşun parçasıysa patent, kodun kendisi için telif hakkı
            yolunu seçin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Her önemli sürüm güncellemesinde yeniden tescil gerekip
            gerekmediğini, değişikliğin boyutuna göre değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Güncel ücret ve başvuru koşullarını her başvuru öncesinde
            Telif Hakları Genel Müdürlüğü&apos;nün resmî sayfasından
            teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kayıt-tescil belgesini şirketin fikri mülkiyet dosyasında,
            yatırımcı/due diligence süreçlerine hazır şekilde saklayın
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
              href="https://telifhaklari.ktb.gov.tr/TR-332342/kayit-tescil.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Kültür ve Turizm Bakanlığı Telif Hakları Genel Müdürlüğü - Kayıt Tescil
            </a>
          </li>
          <li>
            <a
              href="https://telifhaklari.ktb.gov.tr/TR-332349/kayit-tescil-basvuru-ucreti.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Kayıt-Tescil Başvuru Ücreti (Güncel Tarife)
            </a>
          </li>
          <li>
            <a
              href="https://telifhaklari.ktb.gov.tr/TR-332468/istege-bagli-kayit-tescil-basvurulari.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              İsteğe Bağlı Kayıt-Tescil Başvuruları
            </a>
          </li>
          <li>
            <a
              href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5846&MevzuatTur=1&MevzuatTertip=5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              5846 Sayılı Fikir ve Sanat Eserleri Kanunu (mevzuat.gov.tr)
            </a>
          </li>
          <li>
            <a
              href="https://www.turkpatent.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Türk Patent ve Marka Kurumu (SMK madde 82 kapsamı için)
            </a>
          </li>
        </ul>
      </section>

      {/* 10. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılımımı tescil ettirmezsem telif hakkım olmaz mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hakkınız zaten vardır. FSEK&apos;e göre telif hakkı, eser
              meydana getirildiği anda kendiliğinden doğar ve tescile tabi
              değildir. Kayıt-tescil yaptırmamanız hakkınızı ortadan
              kaldırmaz; ancak bir uyuşmazlıkta sahiplik ve tarih ispatını
              zorlaştırabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılımımı patentle koruyabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              6769 sayılı Sınai Mülkiyet Kanunu madde 82/2 uyarınca
              bilgisayar programları &quot;kendileri itibarıyla&quot;
              patent korumasının dışındadır. Yazılım, somut bir teknik
              buluşun (örneğin bir donanım/kontrol sisteminin) ayrılmaz
              parçası ise o buluş patentlenebilir; ancak kodun kendisi
              esas olarak telif hakkıyla korunur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kayıt-tescil başvurusu için kaynak kodumun tamamını paylaşmam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Başvuru, eserin kimliğini belirleyecek bir örnek ister; kodun
              bütününün ifşa edilmesi genel bir zorunluluk değildir.
              Ticari sır niteliğindeki kısımların korunması için başvuru
              dosyasının nasıl hazırlanacağı konusunda dikkatli
              davranmak gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirket adına mı, kurucu adına mı tescil yaptırmalıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, yazılımın fiilen kimin tarafından ve hangi hukuki ilişki
              altında (çalışan, ortak, dış tedarikçi) geliştirildiğine
              bağlıdır. Mali hakların şirkete devredildiği sözleşmeler
              varsa tescil başvurusunun da şirket adına yapılması, ileride
              devir/satış veya yatırım süreçlerinde belirsizliği önler.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılımımın yeni bir sürümünü her çıkardığımda yeniden mi tescil ettirmeliyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Değişikliğin boyutuna bağlıdır. Küçük hata düzeltmeleri
              genellikle yeni bir tescili gerektirmez; ancak önemli bir
              fonksiyonel yenilik veya önemli bir yeniden yazım söz
              konusuysa, bu yeni versiyonun da ayrıca ispat güvencesine
              kavuşması için tescil ettirilmesi değerlendirilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Telif hakkı tescili yurt dışında da geçerli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;nin taraf olduğu Bern Sözleşmesi sayesinde
              yazılımınız sözleşmeye üye diğer ülkelerde de otomatik olarak
              korunur; ek bir yurt dışı tescile gerek yoktur. Türkiye&apos;deki
              kayıt-tescil belgesi, gerektiğinde yurt dışındaki bir
              uyuşmazlıkta da destekleyici bir ispat belgesi olarak
              kullanılabilir.
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
          Yazılımınızın telif hakkı, onu yazdığınız anda zaten sizin.
          Kayıt-tescil bu hakkı yaratmaz, ama bir ortaklık anlaşmazlığında,
          bir yatırımcı görüşmesinde veya bir hukuki uyuşmazlıkta elinizde
          tarih damgalı, resmî bir ispat belgesi olmasını sağlar. Üstelik
          güncel ücretiyle (1.970 TL) ve nispeten sade süreciyle, çoğu
          yazılım şirketi için göze alınamayacak bir maliyet değildir.
          Asıl kritik olan, bu tescili doğru zamanda, doğru taraf adına ve
          sözleşmelerinizdeki hak devri maddeleriyle birlikte, bütüncül bir
          fikri mülkiyet stratejisinin parçası olarak ele almaktır.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin yazılım ve diğer fikri mülkiyet varlıklarının
          kurumsal stratejinize, sözleşmelerinize ve şirket değerinize
          doğru şekilde yansıtılması için Koray Akdağ / Sistem Global
          Danışmanlık olarak yanınızdayız.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Fikri Mülkiyet Varlıklarınızı Kurumsal Stratejinize Dahil Edelim
          </h3>
          <p className="leading-8 text-gray-700">
            Yazılımınızın telif hakkı durumunu, çalışan/tedarikçi
            sözleşmelerinizdeki hak devri maddelerini ve bu varlığın
            kurumsallaşma, due diligence veya şirket değerleme sürecindeki
            yerini birlikte değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Şirketinizin fikri mülkiyet durumunu görüşmek için bizimle
              iletişime geçin.
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
            href="/blog/marka-tescili-ve-patent-basvurusu-kobiler-icin-onemi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">MARKA VE PATENT • FİKRİ MÜLKİYET • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Marka Tescili ve Patent Başvurusu: KOBİ&apos;ler İçin Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/due-diligence-nedir-sirket-satin-alma-birlesme-oncesi-durum-tespiti-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">M&A • DUE DILIGENCE • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Due Diligence Nedir? Şirket Satın Alma ve Birleşme Öncesi Neden Kritik?</h3>
          </Link>
          <Link
            href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET DEĞERLEME • M&A • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Şirket Değerleme Nedir? Yöntemleri Nasıl Yapılır?</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Yazılımımı tescil ettirmezsem telif hakkım olmaz mı?","acceptedAnswer":{"@type":"Answer","text":"Hakkınız zaten vardır. FSEK'e göre telif hakkı, eser meydana getirildiği anda kendiliğinden doğar ve tescile tabi değildir. Kayıt-tescil yaptırmamanız hakkınızı ortadan kaldırmaz; ancak bir uyuşmazlıkta sahiplik ve tarih ispatını zorlaştırabilir."}},{"@type":"Question","name":"Yazılımımı patentle koruyabilir miyim?","acceptedAnswer":{"@type":"Answer","text":"6769 sayılı Sınai Mülkiyet Kanunu madde 82/2 uyarınca bilgisayar programları kendileri itibarıyla patent korumasının dışındadır. Yazılım, somut bir teknik buluşun (örneğin bir donanım/kontrol sisteminin) ayrılmaz parçası ise o buluş patentlenebilir; ancak kodun kendisi esas olarak telif hakkıyla korunur."}},{"@type":"Question","name":"Kayıt-tescil başvurusu için kaynak kodumun tamamını paylaşmam gerekir mi?","acceptedAnswer":{"@type":"Answer","text":"Başvuru, eserin kimliğini belirleyecek bir örnek ister; kodun bütününün ifşa edilmesi genel bir zorunluluk değildir. Ticari sır niteliğindeki kısımların korunması için başvuru dosyasının nasıl hazırlanacağı konusunda dikkatli davranmak gerekir."}},{"@type":"Question","name":"Şirket adına mı, kurucu adına mı tescil yaptırmalıyım?","acceptedAnswer":{"@type":"Answer","text":"Bu, yazılımın fiilen kimin tarafından ve hangi hukuki ilişki altında (çalışan, ortak, dış tedarikçi) geliştirildiğine bağlıdır. Mali hakların şirkete devredildiği sözleşmeler varsa tescil başvurusunun da şirket adına yapılması, ileride devir/satış veya yatırım süreçlerinde belirsizliği önler."}},{"@type":"Question","name":"Yazılımımın yeni bir sürümünü her çıkardığımda yeniden mi tescil ettirmeliyim?","acceptedAnswer":{"@type":"Answer","text":"Değişikliğin boyutuna bağlıdır. Küçük hata düzeltmeleri genellikle yeni bir tescili gerektirmez; ancak önemli bir fonksiyonel yenilik veya önemli bir yeniden yazım söz konusuysa, bu yeni versiyonun da ayrıca ispat güvencesine kavuşması için tescil ettirilmesi değerlendirilebilir."}},{"@type":"Question","name":"Telif hakkı tescili yurt dışında da geçerli mi?","acceptedAnswer":{"@type":"Answer","text":"Türkiye'nin taraf olduğu Bern Sözleşmesi sayesinde yazılımınız sözleşmeye üye diğer ülkelerde de otomatik olarak korunur; ek bir yurt dışı tescile gerek yoktur. Türkiye'deki kayıt-tescil belgesi, gerektiğinde yurt dışındaki bir uyuşmazlıkta da destekleyici bir ispat belgesi olarak kullanılabilir."}}]}) }}
      />
    </BlogLayout>
  );
}
