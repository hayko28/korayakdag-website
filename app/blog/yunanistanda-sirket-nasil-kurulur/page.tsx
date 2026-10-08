import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Yunanistan'da Şirket Nasıl Kurulur? IKE, Vergi, Golden Visa ve Süreç 2026 | Koray Akdağ",
  description:
    "Yunanistan'da IKE, EPE, AE kuruluşu, 1 euro asgari sermaye, GEMI tescili, AFM vergi numarası, %22 kurumlar vergisi, %5 temettü stopajı, myDATA e-fatura ve Golden Visa eşikleri için 2026 güncel rehber.",
  keywords: [
    "yunanistanda şirket kurma",
    "yunanistan ike şirket kuruluşu",
    "yunanistan gemi tescil",
    "yunanistan kurumlar vergisi 2026",
    "yunanistan golden visa 2026",
    "yunanistan afm vergi numarası",
    "yunanistan mydata e-fatura",
    "türk vatandaşı yunanistan şirket",
  ],
  alternates: {
    canonical: "/blog/yunanistanda-sirket-nasil-kurulur",
  },
};

const faqs = [
  {
    q: "Türk vatandaşı Yunanistan'da şirket kurabilir mi?",
    a: "Evet. Yunanistan'da yabancı ortaklığa genel bir kısıtlama yoktur ve IKE tek yabancı ortakla %100 yabancı sermayeyle kurulabilir. Şirket kurmak için oturum izni gerekmez. Ancak ortak ve yöneticiler için Yunan vergi numarası (AFM) alınması gerekir, kısa süreli seyahatlerde ise Schengen vizesi geçerlidir. Ada kapısı vize uygulaması yalnızca turistik ziyaret içindir, iş kuruluşu için kullanılmaz.",
  },
  {
    q: "Yunanistan'da IKE için asgari sermaye ne kadardır?",
    a: "IKE (Ι.Κ.Ε., özel sermaye şirketi) için asgari sermaye 1 euro'dur. EPE (Ε.Π.Ε., limited şirket) için 4.500 euro, AE (Α.Ε., anonim şirket) için 25.000 euro asgari sermaye aktarılmaktadır. Ortaklıklarda (OE ve EE) kanuni asgari sermaye şartı yoktur, ancak ortaklar şirket borçlarından sınırsız sorumludur. Kuruluştan önce güncel tutarlar GEMI üzerinden teyit edilmelidir.",
  },
  {
    q: "Yunanistan'da kurumlar vergisi oranı kaç?",
    a: "Kredi kuruluşları dışındaki tüzel kişiler için standart kurumlar vergisi oranı %22'dir. Belediye veya yerel gelir vergisi yoktur. Büyük çok uluslu gruplar için Pillar Two kapsamında %15 küresel asgari vergi de devrededir, ancak bu yalnızca belirli büyüklükteki gruplar için geçerlidir.",
  },
  {
    q: "Yunanistan'dan Türkiye'ye temettü gönderirken stopaj kesilir mi?",
    a: "Yerleşik olmayan ortaklara ödenen temettüde iç mevzuattaki stopaj oranı %5'tir. Türkiye-Yunanistan çifte vergilendirmeyi önleme anlaşmasının 10. maddesi kaynak devlette vergiyi brüt temettünün %15'i ile sınırlar. İç mevzuattaki %5 oranı bu tavanın altında kaldığı için %5 uygulanır.",
  },
  {
    q: "Yunanistan'da şirket kurmak ne kadar sürer?",
    a: "Belgeler hazır olduğunda GEMI üzerinden IKE tescili genellikle birkaç iş günü içinde sonuçlanır. Asıl süre, yabancı ortak ve yöneticiler için AFM vergi numarası alınmasında geçer: bu adım 3-4 hafta, bazı durumlarda 6 haftaya kadar sürebilir. Banka hesabı açılışı için ek olarak yaklaşık 4 hafta öngörülebilir. Toplamda 6-10 hafta aralığı gerçekçidir, bu süreler ikincil kaynaklara dayanır.",
  },
  {
    q: "Yunanistan'da şirket kurmak Golden Visa verir mi?",
    a: "Hayır. Şirket kurmak tek başına oturum izni sağlamaz. Golden Visa, ayrı bir yatırım programıdır ve gayrimenkul, mevduat, devlet tahvili veya girişim yatırımı gibi belirli yatırım kategorileriyle yapılır. Gayrimenkul rotasında eşikler Attika, Selanik, Mikonos, Santorini ve 3.100'den fazla nüfuslu adalarda 800.000 euro, diğer bölgelerde 400.000 euro'dur.",
  },
  {
    q: "Yunanistan'da e-fatura zorunlu mu?",
    a: "Evet. B2B e-fatura zorunluluğu myDATA platformu üzerinden kademeli uygulanıyor. 2023 cirosu 1 milyon euro üzerindeki büyük işletmeler 2026 başında geçti. Diğer tüm işletmeler için başlangıç tarihi 1 Ekim 2026'dır. AADE'nin ücretsiz Timologio web uygulaması veya myDATAapp ya da akredite bir hizmet sağlayıcı kullanılabilir. Yeni kurulan bir şirket baştan e-fatura düzenine göre kurulmalıdır.",
  },
];

export default function BlogPage() {
  return (
    <BlogLayout
      title="Yunanistan'da Şirket Nasıl Kurulur? IKE, Vergi Sistemi, Golden Visa ve Süreç"
      description="IKE, EPE, AE ve ortaklık türleri, 1 euro asgari sermaye, GEMI tescili, AFM vergi numarası, %22 kurumlar vergisi, %5 temettü stopajı, KDV, myDATA e-fatura, gerçek faydalı sahip bildirimi, Golden Visa eşikleri ve Türkiye tarafındaki yükümlülüklerle 2026 güncel Yunanistan rehberi."
      category="YURT DIŞI ŞİRKET • YUNANİSTAN • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="yunanistanda-sirket-nasil-kurulur"
      ctaHeading="Yunanistan'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="IKE veya EPE yapısının seçimi, AFM vergi numarası, GEMI tescili, banka hesabı ve kuruluş sonrası muhasebe. Yunanistan'daki yapılanma sürecinizi baştan sona yönetiyoruz."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yunanistan; AB, Schengen ve Euro Bölgesi üyesi, Türkiye&apos;ye coğrafi
          ve ticari olarak en yakın AB ülkelerinden biridir. Yabancı yatırımcılar
          için en yaygın yapı IKE&apos;dir ve 1 euroluk sermayeyle kurulabilir.
          Kuruluşun asıl zaman kalemi tescil değil, yabancı ortaklar için vergi
          numarası (AFM) ve banka hesabı açılışıdır. Şirket kurmak oturum izni
          vermez, Golden Visa ayrı bir yatırım programıdır.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Şirket türü: IKE (özel sermaye şirketi) en yaygın, tek ortaklı IKE de mümkün; EPE, AE ve OE/EE alternatifleri var</li>
          <li>✔ Sermaye: IKE 1 euro, EPE 4.500 euro, AE 25.000 euro</li>
          <li>✔ Kayıt: GEMI (G.E.MH.) üzerinden elektronik; AFM vergi numarası ise 3-4 hafta, bazen 6 haftaya kadar sürebilir</li>
          <li>✔ Vergi: Kurumlar vergisi %22, yerleşik olmayana temettü stopajı %5, standart KDV %24</li>
          <li>✔ Uyum: 1 Ekim 2026&apos;dan itibaren tüm işletmeler için myDATA tabanlı B2B e-fatura</li>
          <li>✔ Oturum: Şirket kurmak vermez; Golden Visa gayrimenkulde 250.000, 400.000 veya 800.000 euro eşikleriyle ayrı başvurudur</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-yunanistan" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Neden Yunanistan?
          </Link>
          <Link href="#sirket-turleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Şirket Türleri ve Asgari Sermaye
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Vergi Sistemi (2026)
          </Link>
          <Link href="#oturum" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Golden Visa ve Oturum İzni
          </Link>
          <Link href="#banka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Banka, Muhasebe, myDATA ve Raporlama
          </Link>
          <Link href="#maliyet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Maliyetler, Avantajlar ve Dezavantajlar
          </Link>
          <Link href="#turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Sık Sorulan Sorular
          </Link>
          <Link href="#kaynaklar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Resmî Kaynaklar
          </Link>
        </div>
      </div>

      {/* 1. NEDEN YUNANİSTAN */}
      <section id="neden-yunanistan" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Neden Yunanistan?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yunanistan, Türkiye ile deniz ve kara sınırı olan, AB gümrük birliği ve
          iç pazarına erişim sağlayan bir ülkedir. Ticari kayıt işlemleri
          GEMI (Γ.Ε.ΜΗ., Genel Ticaret Sicili) üzerinden dijitalleşmiştir; IKE
          yapısı 1 euroluk sermayeyle kurulabilir. Lojistik, denizcilik,
          turizm, gıda, enerji ve ticaret odaklı işler için coğrafi konumu
          önemli bir avantajdır.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">💶</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Düşük Giriş Sermayesi
            </h3>
            <p className="text-gray-700">
              IKE için asgari sermaye 1 euro. Sermaye ihtiyacı, işin
              gerçek finansman ve banka gereksinimine göre belirlenir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🇪🇺</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              AB Pazarı ve Euro
            </h3>
            <p className="text-gray-700">
              AB içi KDV numarası ve euro bazlı muhasebe ile Avrupa
              genelinde mal ve hizmet satışı için bir üs.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚓</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Coğrafi Konum
            </h3>
            <p className="text-gray-700">
              Balkanlar, Doğu Akdeniz ve Karadeniz bağlantılı ticaret için
              Pire ve Selanik limanlarına erişim sağlayan bir konum.
            </p>
          </div>
        </div>
      </section>

      {/* KARIŞTIRMAYIN */}
      <div className="mt-16 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-red-800">
          ⚠️ Karıştırmayın: Şirket kurmak ile Golden Visa oturumu aynı şey değildir
        </h3>
        <p className="leading-8 text-gray-700">
          Yunanistan&apos;da IKE kurmak ve sermayesini yatırmak, kendiliğinden
          oturum izni veya Golden Visa hakkı doğurmaz. Golden Visa, ayrı bir
          yatırım programıdır ve belirli gayrimenkul, mevduat, tahvil veya
          girişim yatırımı kategorileri üzerinden, Göç Bakanlığı&apos;na ayrı
          başvuruyla alınır. 1 euroluk IKE sermayesi ile Golden Visa eşikleri
          (250.000 ile 800.000 euro) arasında doğrudan bir bağlantı yoktur.
        </p>
      </div>

      {/* 2. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Şirket Türleri ve Asgari Sermaye
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcılar için en yaygın seçenek IKE (Ιδιωτική Κεφαλαιουχική
          Εταιρεία) yapısıdır. 2012&apos;de tanıtılan IKE, Türkiye&apos;deki
          Limited Şirket&apos;e en yakın karşılıktır ve tek ortakla da
          kurulabilir; tek ortaklı yapı Monoprosopi IKE olarak anılır. Ortağın
          sorumluluğu koyduğu sermaye ile sınırlıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Şirket Türü</th>
                <th className="p-5">Tanım</th>
                <th className="p-5">Asgari Sermaye</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">IKE (Ι.Κ.Ε.)</td>
                <td className="p-5">
                  Özel sermaye şirketi. Bir veya daha fazla ortakla kurulur,
                  sorumluluk sermaye ile sınırlıdır. Yabancılar için en yaygın yapı.
                </td>
                <td className="p-5">1 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Monoprosopi IKE</td>
                <td className="p-5">
                  Tek ortaklı IKE. Tek kişi tek başına şirket kurabilir; tüm
                  sermaye ve karar yetkisi tek ortaktadır.
                </td>
                <td className="p-5">1 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">EPE (Ε.Π.Ε.)</td>
                <td className="p-5">
                  Limited şirket. IKE ile benzer sorumluluk yapısı ancak daha
                  katı yönetim biçimi; yeni kuruluşlarda IKE tercih edilir.
                </td>
                <td className="p-5">4.500 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">AE (Α.Ε.)</td>
                <td className="p-5">
                  Anonim şirket. Büyük ölçekli, halka açılma veya yatırımcı
                  alma planı olan yapılar için.
                </td>
                <td className="p-5">25.000 EUR</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">OE / EE</td>
                <td className="p-5">
                  Kolektif ve komandit ortaklık. Ortaklar şirket borçlarından
                  sınırsız sorumludur.
                </td>
                <td className="p-5">Kanuni şart yok</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Sermaye tutarları ikincil kaynaklardan derlenmiştir. Kuruluştan önce
          GEMI ve güncel Yunan Şirketler Kanunu üzerinden teyit edilmelidir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            1 euroluk sermaye hukuken mümkün olsa da uygulamada bankalar, ticari
            gerekçesi olmayan sembolik sermayeli bir yabancı ortaklı şirkete
            temkinli yaklaşır. Sermayeyi işin gerçek ihtiyacına göre belirlemek,
            hem banka hesabı açılışını hem de ilk yıl nakit akışını
            kolaylaştırır. OE ve EE yapılarında ortakların sınırsız sorumluluğu
            Türk yatırımcılar için sık gözden kaçan bir risktir.
          </p>
        </div>
      </section>

      {/* 3. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Kuruluş GEMI (G.E.MH.) üzerinden yürütülür. Çevrimiçi başvuru, kuruluş
          belgelerinin dijital sürümünü üretir ve şirketi GEMI&apos;ye kaydeder.
          Kayıt sonrası sistem şirketi AADE (Bağımsız Kamu Gelir İdaresi)
          nezdinde vergi mükellefi olarak da işleme alır. Belgeler hazır
          olduğunda tescil genellikle birkaç iş gününde sonuçlanır. Asıl
          zaman, yabancı ortaklar için AFM numarasında ve banka sürecindedir.
        </p>
        <div className="grid gap-5 md:grid-cols-5">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Yapı, Ünvan & Adres</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">AFM Vergi Numarası</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Ana Sözleşme</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">GEMI Tescili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Banka & Uyum</h3>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.1. Yapı Seçimi, Ünvan ve Kayıtlı Adres
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket türü (çoğu durumda IKE) ve ünvan belirlenir; ünvanın GEMI&apos;de
            kullanılabilir olduğu kontrol edilir. Yunanistan&apos;da şirketin
            kayıtlı bir adresi bulunmalıdır. Bazı kaynaklar IKE yöneticisinin
            Yunanistan veya AEA ülkelerinde yerleşik olması gerektiğini
            aktarır; Türkiye&apos;de yerleşik bir yönetici planlıyorsanız bu
            noktayı kuruluştan önce mutlaka teyit edin.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.2. AFM Vergi Numarası (Yabancı Ortaklar İçin)
          </h3>
          <p className="leading-8 text-gray-700">
            Yunanistan&apos;da yerleşik olmayan ortak ve yöneticiler için AADE
            nezdinde bir vergi numarası (AFM) alınması gerekir. Sektör
            kaynakları bu adımın yaklaşık 3-4 hafta, bazı durumlarda 6 haftaya
            kadar sürebildiğini aktarır. Pasaport, adres belgesi ve genellikle
            noter onaylı vekâletname gibi belgeler istenir. Bu süre kuruluşun
            takvimini belirleyen ana kalemdir, bu nedenle süreci ilk
            adım olarak başlatmak gerekir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.3. Ana Sözleşme ve GEMI Başvurusu
          </h3>
          <p className="leading-8 text-gray-700">
            IKE ana sözleşmesi gov.gr üzerinden dijital olarak hazırlanabilir
            ya da noter veya GEMI birimlerinde yapılabilir. Çevrimiçi başvuruda
            GEMI harcının yaklaşık 18-24 euro, yüz yüze başvuruda 60-80 euro
            olduğu ikincil kaynaklarda aktarılmaktadır; güncel tutar GEMI
            tarifesinden teyit edilmelidir. Tescille birlikte şirkete bir
            GEMI numarası verilir.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            3.4. Banka Hesabı, Gerçek Faydalı Sahip ve İşe Başlama
          </h3>
          <p className="leading-8 text-gray-700">
            Tescilden sonra şirket adına banka hesabı açılır, sermaye
            yatırılır, SGK (EFKA) ve işveren kaydı yapılır. Gerçek faydalı sahip
            bilgisi (şirkette doğrudan veya dolaylı olarak %25&apos;ten fazla
            pay veya oy hakkına sahip gerçek kişi) Yunanistan&apos;ın gerçek
            faydalı sahip sicilinde bildirilir. Bu yükümlülük 4557/2018 sayılı
            Kara Para Aklamanın Önlenmesi Kanunu&apos;na dayanır.
          </p>
        </div>
      </section>

      {/* 4. VERGİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Vergi Sistemi (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yunanistan&apos;da kredi kuruluşları dışındaki tüzel kişiler için standart
          kurumlar vergisi oranı %22&apos;dir. Belediye veya yerel gelir vergisi
          yoktur. Özel dayanışma katkısı (special solidarity contribution)
          1 Ocak 2023&apos;ten itibaren kaldırılmıştır. Aşağıdaki oranlar PwC
          Worldwide Tax Summaries&apos;in Eylül 2026 güncellemesine göredir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Vergi</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar vergisi</td>
                <td className="p-5">%22</td>
                <td className="p-5">Standart oran; kredi kuruluşları hariç tüzel kişiler</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Temettü stopajı (yerleşik olmayan)</td>
                <td className="p-5">%5</td>
                <td className="p-5">İç mevzuat oranı. Türkiye anlaşma tavanı %15 olduğundan daha düşük olan %5 uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Faiz / telif stopajı</td>
                <td className="p-5">%15 / %20</td>
                <td className="p-5">Yerleşik olmayanlara ödemelerde iç mevzuat oranları; AB direktifleri ve çifte vergilendirmeyi önleme anlaşmalarıyla düşebilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV</td>
                <td className="p-5">%24 / %13 / %6 / %4</td>
                <td className="p-5">Standart oran %24; indirimli ve özel oranlar belirli mal ve hizmetlerde</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV küçük işletme muafiyeti</td>
                <td className="p-5">10.000 EUR</td>
                <td className="p-5">Yunanistan&apos;da yerleşik işletmeler için yıllık yurt içi ciro eşiği olarak aktarılır; 2025 tarihli 5222/2025 sayılı Kanun ile AB küçük işletme rejimine uyum sağlandığından güncel kural AADE&apos;den doğrulanmalı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sosyal güvenlik (EFKA)</td>
                <td className="p-5">%35,16 toplam</td>
                <td className="p-5">Yaklaşık %21,79 işveren, %13,37 çalışan payı; tavan ve prim sınıfları ayrıca incelenmelidir</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Gelir vergisi (stopaj, ücretler)</td>
                <td className="p-5">%9 - %44</td>
                <td className="p-5">Progresif tarife; 10.000 EUR&apos;ya kadar %9, 60.000 EUR üzerinde %44</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💡 Uzman Notu</h3>
          <p className="leading-8 text-gray-700">
            Yunanistan&apos;da vergi avantajı, çok düşük oranlardan değil,
            %22 gibi AB ortalamasına yakın bir orana karşılık AB içindeki
            konum, euro ve %5 gibi düşük temettü stopajından gelir. Burada
            dikkat edilmesi gereken nokta, stopaj oranı ile Türkiye&apos;de
            ortağın karşılaşacağı vergilendirmenin birlikte okunmasıdır.
            Yunanistan&apos;da ödenen vergilerin Türkiye&apos;deki
            vergilendirmede nasıl dikkate alınacağı, ortağın gerçek veya
            tüzel kişi olmasına göre değişir ve baştan planlanmalıdır.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Beyan ve ödeme takvimi (kurumlar vergisi beyanı, ön ödeme, KDV
          dönemleri) şirketin defter kategorisine ve yıllık takvime göre
          değişir. Kesin tarihler bu yazıda verilmemiştir, her yıl AADE
          takviminden teyit edilmelidir.
        </p>
      </section>

      {/* 5. OTURUM / GOLDEN VISA */}
      <section id="oturum" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Golden Visa ve Oturum İzni: Türk Vatandaşları İçin Noktalar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirket kurmak oturum izni gerektirmez. Kısa süreli seyahatlerde
          Türk vatandaşları Schengen vizesine ihtiyaç duyar. 12 Doğu Ege ve
          Onikiada adasına feribotla yapılan turistik ziyaretlerde 7 güne kadar
          &quot;ada kapısı vizesi&quot; uygulaması 2027 Nisan&apos;a kadar
          uzatılmıştır, ancak bu vize iş kuruluşu veya çalışma için değil
          yalnızca turistik ziyaret içindir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🛂 Golden Visa: Güncel Eşikler (5038/2023 sayılı Göç Kanunu)
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              <strong>800.000 euro:</strong> Attika, Selanik, Mikonos, Santorini
              ve 3.100&apos;den fazla nüfuslu adalarda gayrimenkul yatırımı.
            </li>
            <li>
              <strong>400.000 euro:</strong> Diğer tüm bölgelerde gayrimenkul.
              Bu iki kademede yatırım tek bir mülk olmalı ve ana alan en az 120
              m² olmalıdır; birden fazla küçük mülk birleştirilemez.
            </li>
            <li>
              <strong>250.000 euro:</strong> Ticari mülkün konuta çevrilmesi
              (5 Nisan 2024 sonrası tamamlanan dönüşüm) ve listelenmiş tarihî
              yapıların restorasyonu. Mülk kısa süreli kiralanamaz.
            </li>
            <li>
              Diğer kategoriler (en az 500.000 euro vadeli mevduat, belirli
              vadeli devlet tahvili, şirket hisseleri ve fon yatırımları) ve
              girişim (startup) yatırımı için öngörülen 250.000 euro rotası
              ikincil kaynaklara göre şöyle aktarılmaktadır: Elevate Greece kaydındaki girişimin sermayesine veya tahvillerine en az 250.000 euro yatırım, yatırımcının pay veya oy hakkının üçte birini aşmaması ve girişimin ilk yıl en az iki kişi istihdam edip bunu beş yıl sürdürmesi. 2026 tarihli 5275 sayılı Kanun ile Elevate Greece kayıtlı girişimlerde çalışan nitelikli üçüncü ülke vatandaşları için ayrıca Tech Visa rotası getirildiği aktarılır. Uygulama yönetmelikleri Göç Bakanlığı&apos;ndan doğrulanmalıdır.
            </li>
            <li>
              Oturum 5 yıl geçerlidir ve yatırım korunduğu sürece 5 yıllık
              dönemlerle yenilenir; asgari ikamet şartı yoktur. Aile bireyleri
              kapsama dahil olabilir.
            </li>
            <li>
              Temmuz 2026&apos;da onaylanan Ulusal Konut Stratejisi, birden fazla
              konutu uzun dönem kiralama şartıyla kapsayan bir &quot;portföy
              rotası&quot; öneriyor. Bu rota henüz uygulamada değildir ve
              ayrıca bir kanuni düzenleme gerektirir.
            </li>
          </ul>
        </div>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Golden Visa şartları sık değişir. Başvuru öncesinde Göç ve İltica
          Bakanlığı&apos;nın güncel duyurularını ve ilgili kanun maddelerini
          mutlaka doğrulayın.
        </p>
      </section>

      {/* 6. BANKA */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Banka, Muhasebe, myDATA ve Raporlama
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yunan bankaları, kara para aklamayı önleme kuralları çerçevesinde
          yabancı ortaklı şirketlerde müşteri tanıma sürecini sıkı yürütür.
          Türkiye&apos;den gelen ortaklı bir şirkette hesap açılışı kuruluştan
          uzun sürebilir; sektör kaynakları bu aşama için yaklaşık 4 hafta
          öngörür. Ticari gerekçenin net anlatılması süreci belirleyen ana
          unsurdur.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Hesap Açılışında Dikkat Edilecekler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>Faaliyet konusu, müşteri ve tedarikçi profili ve para akışı net tanımlanmalıdır.</li>
            <li>Gerçek faydalı sahip ve fon kaynağı belgelerle desteklenmelidir.</li>
            <li>Yunanistan veya AB ile gerçek bir ekonomik bağ (sözleşme, müşteri, ofis) hesap açılışını kolaylaştırır.</li>
            <li>Bankalar bazı durumlarda ortağın veya yöneticinin görüşmesini isteyebilir; politika bankadan bankaya değişir.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-800">
            ⚠️ Dikkat: 1 Ekim 2026&apos;dan itibaren e-fatura zorunluluğu tüm işletmeleri kapsıyor
          </h3>
          <p className="leading-8 text-gray-700">
            Yunanistan&apos;da B2B e-fatura zorunluluğu myDATA platformu üzerinden
            kademeli uygulanıyor. 2023 cirosu 1 milyon euroyu aşan büyük
            işletmeler 2026 başında geçti; diğer tüm işletmeler için başlangıç
            tarihi 1 Ekim 2026&apos;dır. Faturaların myDATA&apos;ya iletilip
            doğrulanması ve benzersiz bir kimlik numarası alması gerekir. AADE&apos;nin
            ücretsiz Timologio uygulaması, myDATAapp veya akredite bir e-fatura
            hizmet sağlayıcısı kullanılabilir. Uyum takvimi ve olası geçiş
            dönemleri AADE duyurularından kontrol edilmelidir. Yeni kurulan
            bir şirketi baştan bu düzene göre kurmak, sonradan sistem
            değiştirmekten daha az maliyetlidir.
          </p>
        </div>

        <p className="mt-8 leading-8 text-gray-700">
          Muhasebe tarafında şirketin defter kategorisine göre çift taraflı
          kayıt, yıllık finansal tabloların hazırlanması, ortaklar genel
          kurulu ve yıllık finansal tabloların GEMI&apos;ye sunulması gerekir.
          Küçük IKE&apos;lerde zorunlu bağımsız denetim yoktur, ancak
          eşikler aşıldığında denetim devreye girer. Eşiklerin güncel
          değerleri şirket büyüklüğüne göre ayrıca kontrol edilmelidir.
        </p>
      </section>

      {/* 7. MALİYET */}
      <section id="maliyet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Maliyetler, Avantajlar ve Dezavantajlar
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tutar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">GEMI harcı: çevrimiçi IKE</td>
                <td className="p-5">yaklaşık 18-24 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">GEMI harcı: yüz yüze</td>
                <td className="p-5">yaklaşık 60-80 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari sermaye: IKE</td>
                <td className="p-5">1 EUR</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari sermaye: EPE</td>
                <td className="p-5">4.500 EUR</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari sermaye: AE</td>
                <td className="p-5">25.000 EUR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 leading-8 text-gray-700">
          Bu tutarlara noter, apostil, yeminli tercüme, kayıtlı adres, AFM
          başvurusu ve profesyonel hizmet bedelleri dahil değildir; bunlar
          kapsama göre değişir. Harç tutarları ikincil kaynaklardan
          aktarılmıştır, başvuru anında GEMI tarifesinden teyit edilmelidir.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">✅ Avantajlar</h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-green-600">
              <li>IKE için 1 euro asgari sermaye</li>
              <li>Yerleşik olmayanlara %5 temettü stopajı</li>
              <li>AB pazarı, Schengen ve euro kullanımı</li>
              <li>%100 yabancı sermaye ve tek ortaklı kuruluş imkânı</li>
              <li>Türkiye&apos;ye coğrafi yakınlık ve limanlara erişim</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">⚠️ Dezavantajlar</h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-red-600">
              <li>%22 kurumlar vergisi ve %24 standart KDV</li>
              <li>Yüksek sosyal güvenlik yükü (%35,16 toplam)</li>
              <li>Yabancı ortak için AFM ve banka süreçlerinin uzun sürmesi</li>
              <li>Zorunlu e-fatura ve myDATA raporlama yükü</li>
              <li>Golden Visa ve göç mevzuatındaki sık değişiklikler</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. TÜRKİYE */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Türkiye Tarafındaki Yükümlülükler ve Teşvikler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yunanistan&apos;da şirket kurmak, Türkiye tarafında da bildirim
          yükümlülükleri doğurur. Buna karşılık Ticaret Bakanlığı&apos;nın yurt
          dışı birim, marka ve tanıtım desteklerinden yararlanmak mümkündür.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Muhasebe Sürecinizi Biz Yönetiyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Yunanistan&apos;da IKE veya EPE kuruluşunu, belge hazırlığından AFM
            ve GEMI başvurusuna, banka hesabı açılış sürecine kadar baştan
            sona biz yürütüyoruz. Kuruluş sonrası muhasebe, KDV, kurumlar
            vergisi beyanları, myDATA uyumu ve raporlama hizmetinizi de ayrı
            bir yerel firma aramanıza gerek kalmadan biz sağlıyoruz.
            Şirketinizin Yunanistan yapılanmasını ve vergi planınızı birlikte
            değerlendirelim.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            🇹🇷 Yurt Dışı Yatırım Bildirimi
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;de yerleşik gerçek veya tüzel kişiler, yurt dışında
            şirket kurmaları veya mevcut bir şirkete ortak olmaları halinde
            ilgili yurt dışı yatırım bildirim yükümlülüklerine tabidir. Bildirim
            süresi ve yıllık güncelleme kuralları için Ticaret Bakanlığı
            ve Hazine ve Maliye Bakanlığı mevzuatının güncel hâli esas alınmalıdır.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Yurt Dışı Birim, Marka ve Tanıtım Desteği
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>Yunanistan&apos;da açılan ofis, depo, showroom veya mağaza giderleri için Ticaret Bakanlığı destekleri kapsamında kira desteği söz konusu olabilir.</li>
            <li>Destek oranları, üst limitler ve hedef ülke statüsü zaman zaman güncellenir.</li>
            <li>Başvuru için Türk Ticaret Kanunu&apos;na göre kurulmuş şirket olmak ve desteğe konu ürünlerin Türk menşeli olması gibi şartlar aranır.</li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Genel çerçeve için{" "}
          <Link href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari" className="text-orange-600 underline">
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          rehberimize bakabilirsiniz. Şirketinizin Yunanistan yapılanması
          için hangi desteklerin uygun olabileceğini{" "}
          <Link href="/destek-uygunluk-analizi" className="text-orange-600 underline">
            destek uygunluk analizi
          </Link>{" "}
          sayfasından da değerlendirebilirsiniz. Güncel oranlar için{" "}
          <a
            href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Ticaret Bakanlığı&apos;nın resmi sayfası
          </a>{" "}
          esas alınmalıdır.
        </p>
      </section>

      {/* DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Dikkat Edilmesi Gerekenler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ AFM vergi numarası sürecini kuruluşun ilk adımı olarak başlatın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Sembolik sermaye yerine işin gerçek ihtiyacına göre sermaye belirleyin</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Gerçek faydalı sahip bilgisini güncel tutun</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ 1 Ekim 2026 e-fatura geçişini ve myDATA uyumunu baştan planlayın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Türkiye&apos;deki yurt dışı yatırım bildirimini süresinde yapın</div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">✅ Muhasebe ve raporlamayı ayrıca yerel firma aramadan bize devredebilirsiniz</div>
        </div>
      </section>

      {/* 9. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">{f.q}</h3>
              <p className="leading-8 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yunanistan, 1 euroluk IKE sermayesi, %5 temettü stopajı ve Türkiye&apos;ye
          yakınlığıyla AB&apos;ye açılmak isteyen girişimciler için erişilebilir
          bir seçenektir. Karar verirken %22 kurumlar vergisini, AFM ve banka
          süreçlerinin süresini, 1 Ekim 2026&apos;da başlayan e-fatura yükümlülüğünü
          ve Türkiye tarafındaki bildirimleri birlikte değerlendirmek gerekir.
          Şirketinizin Yunanistan yapılanmasının uygunluğunu birlikte
          değerlendirmek için{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            bizimle iletişime geçebilirsiniz.
          </Link>
        </p>
      </section>

      {/* RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Resmî Kaynaklar
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li><a href="https://www.businessportal.gr/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">GEMI (G.E.MH.) Business Portal: Genel Ticaret Sicili</a></li>
          <li><a href="https://www.aade.gr/en" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">AADE: Bağımsız Kamu Gelir İdaresi</a></li>
          <li><a href="https://www.aade.gr/en/mydata" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">AADE: myDATA ve e-fatura</a></li>
          <li><a href="https://www.enterprisegreece.gov.gr/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Enterprise Greece (Invest in Greece)</a></li>
          <li><a href="https://migration.gov.gr/en/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Yunanistan Göç ve İltica Bakanlığı</a></li>
          <li><a href="https://en.mitos.gov.gr/index.php/%CE%94%CE%94:Golden_visa_programme_(investment_in_a_listed_real_property)_%E2%80%93_Initial_issuance" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Mitos (gov.gr): Golden Visa gayrimenkul rotası, ilk verilme</a></li>
          <li><a href="https://taxsummaries.pwc.com/greece/corporate/taxes-on-corporate-income" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PwC Worldwide Tax Summaries: Yunanistan kurumlar vergisi (ikincil kaynak)</a></li>
          <li><a href="https://taxsummaries.pwc.com/greece/corporate/withholding-taxes" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PwC Worldwide Tax Summaries: Yunanistan stopaj vergileri (ikincil kaynak)</a></li>
          <li><a href="https://taxsummaries.pwc.com/greece/corporate/other-taxes" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">PwC Worldwide Tax Summaries: Yunanistan diğer vergiler, KDV ve sosyal güvenlik (ikincil kaynak)</a></li>
          <li><a href="https://kpmg.com/us/en/taxnewsflash/news/2025/09/greece-compliance-deadlines-electronic-invoicing.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">KPMG: Yunanistan e-fatura uyum takvimi (ikincil kaynak)</a></li>
          <li><a href="https://www.ibanet.org/the-greek-golden-visa-after-2024-2026-overhaul" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">IBA: Yunan Golden Visa 2024-2026 değişiklikleri (ikincil kaynak)</a></li>
          <li><a href="https://ticaret.gov.tr/destekler/ihracat-destekleri/yurtdisi-birim-marka-ve-tanitim-destegi" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">T.C. Ticaret Bakanlığı: yurt dışı birim, marka ve tanıtım desteği</a></li>
        </ul>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Bu yazı bilgilendirme amaçlıdır; kişiye özel hukuki veya vergisel
          görüş niteliği taşımaz. Oranlar ve eşikler 7 Ekim 2026 itibarıyla
          derlenmiştir. AADE ve bazı resmî sitelere otomatik erişim
          sağlanamadığı için bazı detaylar (sermaye tutarları, harçlar, süreler,
          Golden Visa alt kategorileri) ikincil kaynaklardan aktarılmıştır;
          uygulama öncesi resmî kaynaklardan doğrulanmalıdır.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İHRACAT • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?</h3>
          </Link>
          <Link
            href="/blog/litvanyada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • LİTVANYA • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Litvanya&apos;da Şirket Nasıl Kurulur? UAB, MB, Vergi Sistemi ve Süreç</h3>
          </Link>
          <Link
            href="/blog/bulgaristanda-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • BULGARİSTAN • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Bulgaristan&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları</h3>
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </BlogLayout>
  );
}
