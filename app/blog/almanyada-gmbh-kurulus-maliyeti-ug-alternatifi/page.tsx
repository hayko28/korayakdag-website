import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Almanya'da GmbH Kuruluş Maliyeti ve UG Alternatifi (2026) | Koray Akdağ",
  description:
    "GmbH mi UG mu? 2026 güncel noter, ticaret sicili ve yıllık işletme maliyetleri, sermaye şartı, şehre göre efektif vergi yükü, Steuernummer süreci ve Türkiye tarafındaki yükümlülükler.",
  keywords: [
    "almanya gmbh kuruluş maliyeti",
    "ug haftungsbeschränkt nedir",
    "gmbh mi ug mu",
    "almanya şirket kurma maliyeti 2026",
    "gmbh asgari sermaye 25000 euro",
    "gewerbesteuer hebesatz karşılaştırma",
    "steuernummer ust-idnr başvurusu",
    "musterprotokoll noter ücreti",
    "transparenzregister bildirimi",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Almanya'da GmbH Kuruluş Maliyeti, Sermaye Şartı ve UG Alternatifi"
      description="GmbH ile UG (haftungsbeschränkt) arasındaki gerçek farklar, 2026 güncel kuruluş ve yıllık işletme maliyetleri, şehre göre değişen efektif vergi yükü, vergi numarası süreci, yabancı ortak için özel durumlar ve Türkiye tarafındaki yükümlülükler."
      category="YURT DIŞI ŞİRKET • ALMANYA • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="almanyada-gmbh-kurulus-maliyeti-ug-alternatifi"
      ctaHeading="Almanya'da Şirket Kuruluşu İçin Destek Alın"
      ctaText="GmbH mi UG mu, sermaye ve noter süreci, vergi numarası ve Türkiye tarafındaki yükümlülükler. Almanya'da doğru yapıyla kurulmanız için süreci baştan sona yönetiyoruz. Planınızı birlikte değerlendirelim."
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Yazı Neye Cevap Veriyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Almanya&apos;da şirket kurmayı planlayan girişimcilerin sorduğu ilk
          soru genellikle &quot;nasıl kurulur&quot; değil, &quot;bana gerçekte
          kaça mal olur ve hangi yapıyı seçmeliyim&quot; oluyor. GmbH için
          konuşulan 25.000 EUR&apos;luk sermaye çoğu kişiyi baştan
          caydırıyor, 1 EUR ile kurulabilen UG ise ilk bakışta fazla cazip
          görünüyor. İkisinin arasındaki fark, sadece sermaye rakamından
          ibaret değil.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ GmbH ve UG arasındaki gerçek farklar ve gizli kısıtlar</li>
          <li>✔ 2026 güncel kuruluş maliyeti kalemleri ve toplam bant</li>
          <li>✔ Yıllık işletme maliyeti: muhasebe, bilanço, adres, IHK</li>
          <li>✔ Şehir seçiminin efektif vergi yüküne etkisi</li>
          <li>✔ Vergi numarası ve KDV numarası için gerçekçi süreler</li>
          <li>✔ Yabancı ortak için noter, vekâlet ve banka hesabı gerçeği</li>
          <li>✔ Hangi durumda UG, hangi durumda GmbH: karar tablosu</li>
        </ul>
        <p className="mt-8 leading-8 text-gray-700">
          Almanya&apos;daki şirket türleri, adım adım kuruluş süreci ve genel
          çerçeve için{" "}
          <Link
            href="/blog/almanyada-sirket-nasil-kurulur"
            className="text-orange-600 underline"
          >
            Almanya&apos;da Şirket Nasıl Kurulur?
          </Link>{" "}
          başlıklı ana rehberimize göz atabilirsiniz. Bu yazı, o rehberin en
          çok soru alan bölümünü, yani maliyet ve yapı kararını derinleştiriyor.
        </p>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="#farklar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            1. GmbH ve UG Arasındaki Gerçek Farklar
          </Link>
          <Link
            href="#kurulus-maliyeti"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            2. 2026 Kuruluş Maliyeti Kalemleri
          </Link>
          <Link
            href="#isletme-maliyeti"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            3. Yıllık İşletme Maliyeti
          </Link>
          <Link
            href="#vergi-yuku"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            4. Vergi Yükü ve Şehir Seçimi
          </Link>
          <Link
            href="#vergi-numarasi"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            5. Steuernummer ve USt-IdNr. Süreci
          </Link>
          <Link
            href="#yabanci-ortak"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            6. Yabancı Ortak İçin Özel Durumlar
          </Link>
          <Link
            href="#karar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            7. Karar Tablosu: UG mu GmbH mi?
          </Link>
          <Link
            href="#turkiye"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            8. Türkiye Tarafındaki Yükümlülükler
          </Link>
          <Link
            href="#hatalar"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            9. Sık Yapılan Hatalar
          </Link>
          <Link
            href="#sss"
            className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50"
          >
            10. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. FARKLAR */}
      <section id="farklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. GmbH ve UG Arasındaki Gerçek Farklar
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          UG (haftungsbeschränkt), ayrı bir şirket türü değil, GmbH
          Kanunu&apos;nun 5a maddesinde düzenlenen bir GmbH varyantıdır.
          Sorumluluk sınırı, organ yapısı, muhasebe ve vergilendirme rejimi
          aynıdır. Ayrım, sermaye ve buna bağlı üç noktada ortaya çıkar:
          ödenmiş sermaye şartı, yasal yedek akçe zorunluluğu ve piyasadaki
          algı.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">GmbH</th>
                <th className="p-5">UG (haftungsbeschränkt)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari sermaye</td>
                <td className="p-5">25.000 EUR</td>
                <td className="p-5">1 EUR (teorik alt sınır)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluşta ödenmesi gereken</td>
                <td className="p-5">
                  Her payın en az dörtte biri ve toplamda en az 12.500 EUR
                </td>
                <td className="p-5">
                  Sermayenin tamamı peşin, ayni sermaye kabul edilmez
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yasal yedek akçe</td>
                <td className="p-5">Zorunlu değil</td>
                <td className="p-5">
                  Yıllık kârın %25&apos;i, sermaye 25.000 EUR&apos;ya ulaşana
                  kadar ayrılır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kâr dağıtımı</td>
                <td className="p-5">Serbest</td>
                <td className="p-5">
                  Kârın en fazla %75&apos;i dağıtılabilir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Unvan zorunluluğu</td>
                <td className="p-5">&quot;GmbH&quot; ibaresi</td>
                <td className="p-5">
                  &quot;UG (haftungsbeschränkt)&quot; ibaresi tüm faturalarda ve
                  yazışmalarda görünür
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Ticari algı</td>
                <td className="p-5">
                  Bankalar, büyük müşteriler ve tedarikçiler nezdinde standart
                  kabul edilen yapı
                </td>
                <td className="p-5">
                  Düşük sermayeli başlangıç şirketi olarak okunur, kurumsal
                  alıcılarda çekince yaratabilir
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          1.1. Yedek akçe zorunluluğu pratikte ne anlama geliyor?
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          UG&apos;de vergi sonrası kârın en az %25&apos;i yasal yedeğe
          ayrılmak zorundadır ve bu yükümlülük, sermaye 25.000 EUR seviyesine
          çıkarılana kadar devam eder. Yasada bunun için bir süre sınırı
          yoktur. Yani UG hiç kâr etmezse zorunluluk da fiilen işlemez, kâr
          ettiğinde ise ortak, kazancın dörtte birini şirket içinde bırakmak
          durumunda kalır. Yılda 40.000 EUR kâr açıklayan bir UG&apos;de her
          yıl en az 10.000 EUR şirkette kalır ve ortağın eline geçmez.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yapı, kâr payını düzenli olarak Türkiye&apos;ye aktarmayı
          planlayan bir yatırımcı için ciddi bir kısıttır. Buna karşılık ilk
          yıllarda kâr dağıtmayı düşünmeyen, kazancını Almanya&apos;da yeniden
          yatırıma dönüştürecek girişimler için pratikte bir engel oluşturmaz.
        </p>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          1.2. UG&apos;den GmbH&apos;ye geçiş
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          UG, sermayesini 25.000 EUR&apos;ya çıkardığında GmbH statüsüne
          geçebilir. Bu, tasfiye veya yeni şirket kurma gerektirmez. Ortaklar
          kurulu kararı, sermaye artırımı, noter onayı ve ticaret siciline
          tescil ile tamamlanan bir dönüşümdür. Sermaye artırımı ya ortakların
          yeni nakit koyması ya da biriken yasal yedeklerin sermayeye
          eklenmesi yoluyla yapılabilir. Dönüşüm tamamlandığında yedek akçe
          zorunluluğu sona erer.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Dikkat edilmesi gereken nokta şu: dönüşüm ücretsiz değildir. Noter
            ve sicil masrafları, yeniden ana sözleşme düzenlenmesi ve gerekli
            hallerde sermaye artırımının denetlenmesi nedeniyle, UG kurup
            sonra GmbH&apos;ye geçmenin toplam maliyeti çoğu zaman baştan
            GmbH kurmaktan daha yüksek olur. UG&apos;yi &quot;ucuz GmbH&quot;
            olarak değil, sermayeyi bugün ayıramayan girişimler için geçici
            bir çözüm olarak değerlendirmek daha doğrudur.
          </p>
        </div>
      </section>

      {/* 2. KURULUŞ MALİYETİ */}
      <section id="kurulus-maliyeti" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. 2026 Kuruluş Maliyeti Kalemleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Almanya&apos;da noter ücretleri serbest piyasa fiyatı değildir.
          Noter Ücretleri Kanunu (GNotKG) ile belirlenir ve her noter aynı işi
          aynı ücretle yapar. Ücret, sermaye tutarına değil işlem değerine
          (Geschäftswert) bağlıdır ve yasa gereği bu değerin bir alt sınırı
          bulunur. Bu nedenle 1 EUR sermayeli bir UG&apos;nin noter ücreti de
          sıfır değildir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tipik Bant (2026)</th>
                <th className="p-5">Not</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Noter ücreti (standart sözleşme / Musterprotokoll)
                </td>
                <td className="p-5">yaklaşık 250 - 500 EUR</td>
                <td className="p-5">
                  Sözleşme kaleme alma ücreti doğmadığı ve indirimli tarife
                  uygulandığı için en düşük seçenek
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Noter ücreti (bireysel ana sözleşme)
                </td>
                <td className="p-5">yaklaşık 450 - 1.000 EUR</td>
                <td className="p-5">
                  Ortak sayısı, sermaye ve sözleşmenin karmaşıklığı arttıkça
                  yükselir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Ticaret sicili (Handelsregister) tescil harcı
                </td>
                <td className="p-5">yaklaşık 150 - 240 EUR</td>
                <td className="p-5">
                  Nakit kuruluşta alt banda yakındır, ayni sermaye ve çok
                  ortaklı yapılarda artar
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  İşletme kaydı (Gewerbeanmeldung)
                </td>
                <td className="p-5">yaklaşık 15 - 65 EUR</td>
                <td className="p-5">
                  Belediyeye göre değişir. Berlin ve Hamburg alt bantta, Münih
                  ve Stuttgart üst bantta yer alır
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Apostil, yeminli tercüme ve vekâlet
                </td>
                <td className="p-5">yaklaşık 200 - 800 EUR</td>
                <td className="p-5">
                  Belge sayısına ve noterde tercüman bulundurma ihtiyacına göre
                  değişir, yalnızca yabancı ortaklı kuruluşlarda doğar
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Şeffaflık sicili (Transparenzregister)
                </td>
                <td className="p-5">
                  Bildirim ücretsiz, yıllık sicil ücreti yaklaşık 20 EUR
                </td>
                <td className="p-5">
                  Bildirimin yapılmaması ciddi idari para cezasına yol açar
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          2.1. Musterprotokoll gerçekten tasarruf sağlar mı?
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Musterprotokoll, kanunla belirlenmiş standart bir kuruluş metnidir.
          Noter, bu metni kullandığında sözleşme hazırlama hizmeti vermediği
          ve indirimli tarife uygulandığı için noter maliyeti belirgin şekilde
          düşer. Ancak kullanımı üç şarta bağlıdır:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h4 className="text-lg font-bold text-[#071A2F]">
              En fazla 3 ortak
            </h4>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h4 className="text-lg font-bold text-[#071A2F]">
              Tek müdür (Geschäftsführer)
            </h4>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h4 className="text-lg font-bold text-[#071A2F]">
              Yalnızca nakit sermaye
            </h4>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Metin üzerinde değişiklik yapılamaz. Bu da oy hakları, pay devri
          kısıtları, ortaklıktan çıkarma, kâr dağıtım esasları ve müdürün
          temsil yetkisi gibi başlıklarda özel düzenleme yapılamaması anlamına
          gelir. Türkiye&apos;deki ana şirkete bağlı, birden fazla ortaklı
          veya ortaklık anlaşması olan yapılarda Musterprotokoll genellikle
          yetersiz kalır. Birkaç yüz euroluk tasarruf için sonradan yeniden
          noter masrafı doğuracak bir sözleşmeye razı olmak, ekonomik bir
          tercih değildir.
        </p>
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Toplam Kuruluş Maliyeti: Gerçekçi Bantlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              <strong>UG, standart sözleşme, tek ortak:</strong> yaklaşık 400 -
              900 EUR resmî masraf
            </li>
            <li>
              <strong>GmbH, standart sözleşme:</strong> yaklaşık 600 - 1.200
              EUR resmî masraf
            </li>
            <li>
              <strong>GmbH, bireysel sözleşme, yabancı ortaklı:</strong>{" "}
              apostil, tercüme ve vekâlet dahil yaklaşık 1.500 - 3.200 EUR
            </li>
            <li>
              Bu rakamlar <strong>sermayeye ek</strong> masraflardır. GmbH için
              ayrıca en az 12.500 EUR&apos;nun şirket hesabına yatırılması
              gerekir. Sermaye bir gider değildir, tescil sonrası şirketin
              işletme sermayesi olarak kullanılabilir.
            </li>
          </ul>
        </div>
      </section>

      {/* 3. İŞLETME MALİYETİ */}
      <section id="isletme-maliyeti" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Yıllık İşletme Maliyeti
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kuruluş maliyeti tek seferliktir ve çoğu girişimcinin bütçesini
          zorlamaz. Asıl planlanması gereken kalem, şirketin ayakta durma
          maliyetidir. Almanya&apos;da GmbH ve UG, ciro üretmeseler bile çift
          taraflı muhasebe tutmak, yıllık bilanço hazırlamak ve bunu kamuya
          açıklamakla yükümlüdür.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Tipik Yıllık Maliyet</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Aylık muhasebe</td>
                <td className="p-5">1.200 - 3.600 EUR</td>
                <td className="p-5">
                  Belge hacmine göre ayda yaklaşık 100 - 300 EUR bandında
                  seyreder
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Yıllık bilanço ve kurumlar vergisi beyanı
                </td>
                <td className="p-5">600 - 2.500 EUR</td>
                <td className="p-5">
                  Bilanço, ek beyanlar ve kamuya açıklama işlemlerini kapsar
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İş adresi</td>
                <td className="p-5">240 - 1.200 EUR</td>
                <td className="p-5">
                  Hizmet ofisi ve tescilli adres çözümleri, fiziki ofiste
                  maliyet çok daha yüksektir
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Sanayi ve Ticaret Odası (IHK) aidatı
                </td>
                <td className="p-5">100 - 500 EUR</td>
                <td className="p-5">
                  Üyelik zorunludur. Ticaret siciline kayıtlı sermaye
                  şirketleri, küçük işletmelere tanınan muafiyetten
                  yararlanamaz
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Şeffaflık sicili ve diğer sabit kalemler
                </td>
                <td className="p-5">50 - 200 EUR</td>
                <td className="p-5">
                  Sicil ücreti, banka hesap ücretleri ve benzeri küçük
                  kalemler
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Faaliyet hacmi düşük bir GmbH veya UG için gerçekçi yıllık sabit
          maliyet bandı yaklaşık <strong>2.500 - 6.000 EUR</strong> arasındadır.
          Personel istihdamı, KDV beyan sıklığının artması veya birden fazla
          ülkede satış yapılması bu bandı yukarı taşır. Almanya&apos;da şirket
          kurma kararı verirken, ilk iki yılın işletme maliyetini baştan
          bütçeleyip bütçelemediğinizi kontrol etmek en pratik testtir.
        </p>
      </section>

      {/* 4. VERGİ YÜKÜ */}
      <section id="vergi-yuku" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Vergi Yükü ve Şehir Seçimi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Alman sermaye şirketlerinde kurum kazancı üç katmandan oluşan bir
          yükle karşılaşır. Federal kurumlar vergisi tüm ülkede aynıdır,
          belediye ticaret vergisi ise şirketin merkezine göre değişir. Bu
          nedenle Almanya&apos;da şehir seçimi, doğrudan bir vergi kararıdır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Katman</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Kurumlar vergisi (Körperschaftsteuer)
                </td>
                <td className="p-5">%15</td>
                <td className="p-5">
                  2026 ve 2027 için %15. 2028&apos;den itibaren yılda birer puan
                  düşerek 2032&apos;de %10 seviyesine inecek şekilde yasalaştı
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Dayanışma katkı payı (Solidaritätszuschlag)
                </td>
                <td className="p-5">%5,5</td>
                <td className="p-5">
                  Kurumlar vergisi tutarı üzerinden alınır, kâr üzerindeki
                  efektif etkisi yaklaşık %0,825&apos;tir
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">
                  Ticaret vergisi (Gewerbesteuer)
                </td>
                <td className="p-5">%7 - %17 bandı</td>
                <td className="p-5">
                  %3,5&apos;lik temel oranın belediye çarpanıyla (Hebesatz)
                  çarpılmasıyla bulunur. Sermaye şirketlerinde 24.500
                  EUR&apos;luk muafiyet uygulanmaz
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          4.1. Şehir bazında efektif vergi yükü
        </h3>
        <p className="mb-8 leading-8 text-gray-700">
          Aşağıdaki grafik, 2026 yılı belediye çarpanlarına göre hesaplanan
          yaklaşık toplam kurum vergi yükünü gösterir. Kurumlar vergisi,
          dayanışma payı ve ticaret vergisi birlikte dikkate alınmıştır.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <svg
            viewBox="0 0 620 260"
            role="img"
            aria-label="Almanya'da şehirlere göre yaklaşık toplam kurum vergi yükü"
            className="h-auto w-full"
          >
            <g fontFamily="sans-serif" fontSize="13">
              <text x="0" y="26" fill="#334155">Grünwald (240%)</text>
              <rect x="150" y="12" width="263" height="22" fill="#22c55e" rx="4" />
              <text x="423" y="28" fill="#0f172a" fontWeight="bold">%24,2</text>

              <text x="0" y="64" fill="#334155">Monheim (250%)</text>
              <rect x="150" y="50" width="267" height="22" fill="#22c55e" rx="4" />
              <text x="427" y="66" fill="#0f172a" fontWeight="bold">%24,6</text>

              <text x="0" y="102" fill="#334155">Berlin (410%)</text>
              <rect x="150" y="88" width="328" height="22" fill="#f97316" rx="4" />
              <text x="488" y="104" fill="#0f172a" fontWeight="bold">%30,2</text>

              <text x="0" y="140" fill="#334155">Frankfurt (460%)</text>
              <rect x="150" y="126" width="346" height="22" fill="#f97316" rx="4" />
              <text x="506" y="142" fill="#0f172a" fontWeight="bold">%31,9</text>

              <text x="0" y="178" fill="#334155">Hamburg (470%)</text>
              <rect x="150" y="164" width="351" height="22" fill="#ef4444" rx="4" />
              <text x="511" y="180" fill="#0f172a" fontWeight="bold">%32,3</text>

              <text x="0" y="216" fill="#334155">Münih (490%)</text>
              <rect x="150" y="202" width="358" height="22" fill="#ef4444" rx="4" />
              <text x="518" y="218" fill="#0f172a" fontWeight="bold">%33,0</text>

              <text x="0" y="250" fill="#64748b" fontSize="12">
                Kurumlar vergisi + dayanışma payı + ticaret vergisi, yaklaşık değerler
              </text>
            </g>
          </svg>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Aradaki fark küçümsenecek gibi değildir. 500.000 EUR kâr açıklayan
          bir şirket için Münih ile Berlin arasındaki tercih, yılda yaklaşık
          14.000 EUR&apos;luk bir vergi farkı yaratır. Düşük çarpanlı
          belediyelerde bu fark daha da açılır.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ 2027 İçin Önemli Değişiklik
          </h3>
          <p className="leading-8 text-gray-700">
            Belediyeler için yasal asgari çarpan uzun süredir %200 seviyesindeydi.
            2026 yılında kabul edilen düzenlemeyle bu alt sınır, 2027
            vergilendirme döneminden itibaren geçerli olmak üzere %280&apos;e
            yükseltildi. Bu, düşük vergili belediyelerde konumlanan şirketlerin
            yükünün önümüzdeki dönemde artacağı anlamına gelir. Sırf düşük
            çarpan için gerçek faaliyetle bağı olmayan bir belediyede merkez
            göstermek, hem bu değişiklik hem de vergi idaresinin işyeri
            (Betriebsstätte) incelemesi nedeniyle riskli bir stratejidir.
          </p>
        </div>
      </section>

      {/* 5. VERGİ NUMARASI */}
      <section id="vergi-numarasi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Steuernummer ve USt-IdNr. Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Ticaret siciline tescil, şirketin tüzel kişilik kazanması için
          yeterlidir ancak fatura kesebilmek için tek başına yeterli değildir.
          Vergi numarası alınmadan usulüne uygun fatura düzenlenemez, AB içi
          satış yapılamaz. Uygulamada kuruluş sürecini uzatan asıl aşama
          burasıdır.
        </p>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Sicil tescili tamamlanır</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">
              Vergi kayıt formu elektronik gönderilir
            </h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Steuernummer tebliğ edilir</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">USt-IdNr. postayla gelir</h3>
          </div>
        </div>
        <p className="mt-10 leading-8 text-gray-700">
          Vergi kayıt formunun (Fragebogen zur steuerlichen Erfassung)
          faaliyete başlamayı izleyen bir ay içinde ve zorunlu olarak
          elektronik ortamda verilmesi gerekir. Vergi dairesinin numarayı
          tahsis süresi kurumdan kuruma değişir. Küçük vergi dairelerinde 1 ila
          4 hafta içinde sonuç alınabilirken, büyük şehirlerde 4 ila 8 hafta,
          yoğun dönemlerde daha uzun süreler görülebilir. AB içi ticaret için
          gereken KDV kimlik numarası (USt-IdNr.) aynı form üzerinden talep
          edilebilir, ancak vergi dairesi önce Steuernummer&apos;i tahsis
          etmek zorunda olduğu için pratikte birkaç hafta daha beklemek
          gerekebilir. Numara yalnızca posta yoluyla tebliğ edilir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Gerçekçi planlama şudur: noter onayından faaliyete hazır bir
            şirkete kadar geçen toplam süre, banka hesabı ve vergi numarası
            dahil olmak üzere 6 ila 12 hafta arasındadır. Almanya&apos;daki
            ilk faturanızı kesmek için bir tarih taahhüt ettiyseniz, bu süreyi
            baştan hesaba katın.
          </p>
        </div>
      </section>

      {/* 6. YABANCI ORTAK */}
      <section id="yabanci-ortak" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yabancı Ortak İçin Özel Durumlar
        </h2>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          6.1. Noter huzurunda bulunma ve vekâletle kuruluş
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Kuruluş, noter huzurunda düzenlenmek zorundadır. Ortakların bizzat
          Almanya&apos;ya gitmesi tek yöntem değildir. Türkiye&apos;deki bir
          noterde düzenlenen, apostil şerhi taşıyan ve yeminli tercümesi
          yapılan bir vekâletname ile temsilci aracılığıyla kuruluş mümkündür.
          Almanca bilmeyen ortakların işleme bizzat katılması durumunda ise
          noter, yeminli tercüman bulundurulmasını ister. Bu ek maliyet
          genellikle birkaç yüz euro seviyesindedir.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          2022&apos;den bu yana GmbH ve UG kuruluşunun video konferansla
          yapılmasına imkân tanıyan çevrimiçi kuruluş sistemi mevcuttur. Ancak
          bu sistem, kimlik doğrulaması için elektronik kimlik (eID) işlevine
          sahip bir kimlik belgesi gerektirir. Türk kimlik belgeleri Alman
          noterlik portalında bu şekilde okunamadığı için, Türk ortakların
          çoğu pratikte ya fiziki katılım ya da vekâlet yolunu kullanır.
          Çevrimiçi kuruluşu bir kesinlik olarak planlamamak gerekir.
        </p>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          6.2. Banka hesabı: sürecin en kırılgan adımı
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Kanun, sermayenin sicile tescilden önce şirket hesabına yatırılmasını
          şart koşar. Buna karşılık bankalar, kara para aklamayla mücadele
          mevzuatı kapsamında tüm ortakları ve gerçek faydalanıcıları
          tanımlamak zorundadır. Almanya&apos;da ikameti olmayan, AB dışı
          ortak ve müdür yapısına sahip başvurularda ret ve gecikme oranı
          belirgin şekilde yüksektir. Bazı bankalarda yurt dışı ikametli
          başvurularda ret oranının %50&apos;nin üzerine çıktığı belirtilir.
        </p>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h4 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Hesap Açılışını Kolaylaştıran Uygulamalar
          </h4>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Ortak ve müdürlere ilişkin kimlik belgelerini apostilli ve
              yeminli tercümeli olarak baştan hazır tutmak
            </li>
            <li>
              Ortaklık yapısını sadeleştirmek, gerekmedikçe çok katmanlı
              holding yapılarından kaçınmak
            </li>
            <li>
              Faaliyet konusunu, hedef müşteri profilini ve beklenen para
              trafiğini açıklayan kısa bir iş planı sunmak
            </li>
            <li>
              Banka görüşmesini noter randevusundan önce başlatmak, tek bir
              bankaya bağlı kalmamak
            </li>
            <li>
              Kuruluş aşamasına özel sermaye yatırma hesabı (Einzahlungskonto)
              sunan kurumları da değerlendirmek
            </li>
          </ul>
        </div>

        <h3 className="mb-5 mt-14 text-2xl font-bold text-[#071A2F]">
          6.3. Şeffaflık sicili (Transparenzregister) bildirimi
        </h3>
        <p className="leading-8 text-gray-700">
          Almanya&apos;da kurulan tüm sermaye şirketleri, gerçek faydalanıcıyı
          (wirtschaftlich Berechtigter) şeffaflık siciline bildirmekle
          yükümlüdür. Bu, ticaret sicili kaydından ayrı ve bağımsız bir
          bildirimdir. Kural olarak sermayenin veya oy haklarının %25&apos;inden
          fazlasını elinde tutan gerçek kişiler bildirilir. Böyle bir kişi
          yoksa yasal temsilci bildirilir. Bildirimin yapılmaması veya
          güncellenmemesi, müdürün şahsi sorumluluğunu doğuran idari para
          cezalarına yol açar. Cezalar ihmal halinde 150.000 EUR&apos;ya, kasıt
          halinde 1.000.000 EUR&apos;ya kadar çıkabilmektedir. Ortaklık
          yapısında değişiklik olduğunda bildirimin güncellenmesi gerektiği
          çoğu zaman gözden kaçar.
        </p>
      </section>

      {/* 7. KARAR TABLOSU */}
      <section id="karar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Karar Tablosu: UG mu GmbH mi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Karar, sermayeyi ayırıp ayıramadığınızdan çok, şirketin kiminle iş
          yapacağına bağlıdır. Aşağıda sık karşılaşılan üç senaryo üzerinden
          somut bir değerlendirme yer alıyor.
        </p>
        <div className="space-y-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-3 inline-flex rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
              SENARYO 1
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Türkiye&apos;deki üreticinin AB satış ve dağıtım kolu
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Türkiye&apos;de üretim yapan bir firma, Almanya&apos;da müşteriye
              doğrudan fatura kesecek, gümrük ve lojistik süreçlerini
              yönetecek bir yapı kuruyor. Karşı taraf zincir marketler, sanayi
              alıcıları veya kamu kurumları.
            </p>
            <p className="font-semibold text-green-700">
              Sonuç: GmbH. Alıcılar tedarikçi kayıt süreçlerinde sermaye ve
              bilanço büyüklüğüne bakar. Ayrıca ana şirketle olan mal akışının
              finansmanı, düşük sermayeli bir yapıda banka nezdinde sorun
              çıkarır.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-3 inline-flex rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
              SENARYO 2
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yazılım veya dijital hizmet ihracatı yapan küçük ekip
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Türkiye&apos;den uzaktan çalışan küçük bir ekip, AB müşterilerine
              fatura kesebilmek ve euro tahsilat yapabilmek için Almanya&apos;da
              yapı kuruyor. İlk iki yıl kâr dağıtımı planlanmıyor, kazanç
              büyümeye ayrılacak.
            </p>
            <p className="font-semibold text-green-700">
              Sonuç: UG mantıklı bir başlangıç olabilir. Kâr dağıtılmayacağı
              için yedek akçe kısıtı fiilen bağlayıcı olmaz, sermaye ihtiyacı
              düşüktür ve iş hacmi büyüdüğünde GmbH&apos;ye geçiş yapılabilir.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-3 inline-flex rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
              SENARYO 3
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yatırım alacak veya ortak yapısı değişecek girişim
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Girişim, önümüzdeki 12 ila 24 ay içinde yatırımcı almayı, pay
              devri yapmayı veya kurucular arasında hak ediş modeli kurmayı
              planlıyor.
            </p>
            <p className="font-semibold text-green-700">
              Sonuç: Bireysel ana sözleşmeli GmbH. Standart metinle kurulan bir
              yapıda pay devri kısıtları, oy hakları ve çıkış hükümleri
              düzenlenemez. Yatırım turu geldiğinde sözleşmenin yeniden
              yazılması, baştan doğru kurmaktan pahalıya mal olur.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Pratik kural: Şirketin muhatabı kurumsal alıcılar, bankalar veya
            yatırımcılarsa GmbH kurun. Muhatabınız küçük ölçekli müşteriler,
            platformlar veya doğrudan tüketiciyse ve ilk yıllarda kâr
            dağıtmayacaksanız UG makul bir başlangıç olur. Kararı sadece
            25.000 EUR&apos;yu bugün ayırıp ayıramadığınıza göre vermeyin.
          </p>
        </div>
      </section>

      {/* 8. TÜRKİYE TARAFI */}
      <section id="turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Türkiye Tarafındaki Yükümlülükler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Almanya&apos;da kurulan şirket, Türkiye&apos;deki ortağın vergi
          dünyasından kopmaz. Türkiye&apos;de tam mükellef olan gerçek veya
          tüzel kişiler için dört başlık kritik önemdedir.
        </p>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          8.1. Kontrol edilen yabancı kurum (KEYK)
        </h3>
        <p className="mb-8 leading-8 text-gray-700">
          Kurumlar Vergisi Kanunu&apos;nun 7. maddesi, yurt dışı iştirakin
          kazancını, dağıtılmasa bile Türkiye&apos;de vergilendirebilmektedir.
          Bunun için sermaye, kâr payı veya oy haklarının en az %50&apos;sinin
          Türkiye&apos;de yerleşiklerce kontrol edilmesi ve ayrıca üç şartın
          birlikte gerçekleşmesi gerekir: hasılatın en az dörtte birinin pasif
          nitelikli gelirlerden oluşması, iştirakin bulunduğu ülkede ticari
          bilanço kârı üzerinden %10&apos;dan az vergi yükü taşıması ve
          hasılatın kanunda belirlenen eşiği aşması. Almanya&apos;da efektif
          kurum vergisi yükünün %24 ila %33 bandında olması nedeniyle, gerçek
          faaliyet gösteren bir GmbH veya UG için vergi yükü şartı genellikle
          gerçekleşmez. Yine de yapıyı kurarken bu testin belgelenebilir
          olması önemlidir.
        </p>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          8.2. Transfer fiyatlandırması
        </h3>
        <p className="mb-8 leading-8 text-gray-700">
          Türkiye&apos;deki şirket ile Almanya&apos;daki GmbH ilişkili kişi
          sayılır. Aralarındaki mal satışı, hizmet bedeli, marka ve lisans
          ödemesi, yönetim gideri paylaşımı veya grup içi borç verme
          işlemlerinin emsallere uygun bedelle yapılması zorunludur.
          Uygulamada en sık görülen hata, Almanya&apos;daki şirkete düşük
          fiyattan mal satıp kârın tamamını orada bırakmak veya tersine tüm
          kârı Türkiye&apos;ye çekmek amacıyla yüksek yönetim bedeli
          faturalamaktır. Her iki yönde de tarhiyat riski doğar. Yıllık
          transfer fiyatlandırması formu ve belgelendirme yükümlülüğü ihmal
          edilmemelidir.
        </p>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          8.3. Kâr payı vergilendirmesi ve çifte vergilendirme anlaşması
        </h3>
        <p className="mb-8 leading-8 text-gray-700">
          Almanya, kâr payı dağıtımında kaynakta %25 kesinti ve bunun üzerine
          %5,5 dayanışma payı uygular, toplam yaklaşık %26,375&apos;lik bir
          stopaj oluşur. Türkiye ile Almanya arasındaki çifte vergilendirmeyi
          önleme anlaşmasının 10. maddesi uyarınca, kâr payının gerçek
          lehtarı sermayenin en az %25&apos;ine sahip bir şirket ise stopaj
          oranı %5, diğer hallerde %15 ile sınırlıdır. Fazla kesilen tutar,
          Almanya federal vergi idaresi (BZSt) nezdinde iade başvurusuyla geri
          alınır veya önceden alınacak muafiyet belgesiyle en baştan düşük
          oran uygulanır. İade sürecinin uzun sürdüğü bilinen bir gerçektir,
          bu nedenle muafiyet belgesi yolu tercih edilmelidir.
        </p>
        <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h4 className="mb-4 text-2xl font-bold text-green-700">
            ✅ 2026 İtibarıyla Türkiye Tarafında Önemli Bir Avantaj
          </h4>
          <p className="leading-8 text-gray-700">
            30 Nisan 2026 tarihli Cumhurbaşkanı Kararı ile sadeleştirilmiş
            yurt dışı iştirak kazancı istisnasında iki değişiklik yapıldı.
            Aranan asgari ortaklık oranı %50&apos;den %20&apos;ye indirildi ve
            istisna oranı %50&apos;den %80&apos;e yükseltildi. Buna göre
            Türkiye&apos;de kurumlar vergisi mükellefi bir şirket,
            Almanya&apos;daki GmbH&apos;nin ödenmiş sermayesinin en az
            %20&apos;sine sahipse ve kazancı ilgili kurumlar vergisi
            beyannamesinin verilmesi gereken tarihe kadar Türkiye&apos;ye
            transfer ederse, elde edilen kâr payının %80&apos;i kurumlar
            vergisinden istisna olur. Düzenleme 1 Ocak 2026&apos;dan itibaren
            başlayan vergilendirme dönemlerine uygulanır. Bu, Almanya&apos;daki
            iştirakten Türkiye&apos;ye kâr aktarmayı ilk kez ciddi biçimde
            cazip hale getiren bir değişikliktir. Somut uygulama için mevcut
            ortaklık yapınızın ve transfer takviminin ayrıca değerlendirilmesi
            gerekir.
          </p>
        </div>

        <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
          8.4. Yurt dışı yatırım bildirimi
        </h3>
        <p className="mb-8 leading-8 text-gray-700">
          Türkiye&apos;de yerleşik kişiler, yurt dışında şirket kurmak veya
          mevcut bir şirkete ortak olmak amacıyla yaptıkları sermaye ihracını,
          mevzuatta öngörülen süre içinde ilgili bakanlıklara bildirmekle
          yükümlüdür. Bildirimin her yıl güncellenmesi gerekir. Konunun
          ayrıntısı ve Ticaret Bakanlığı&apos;nın yurt dışı birim, marka ve
          tanıtım destekleri için{" "}
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="text-orange-600 underline"
          >
            Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
          </Link>{" "}
          başlıklı rehberimize bakabilirsiniz.
        </p>

        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluş ve Sonrasını Tek Elden Yürütüyoruz
          </h3>
          <p className="leading-8 text-gray-700">
            Yapı seçiminden noter ve vekâlet sürecine, banka hesabından vergi
            numarası başvurusuna kadar kuruluşun tamamını biz yönetiyoruz.
            Kuruluş sonrasında Almanya tarafındaki muhasebe ve raporlama ile
            Türkiye tarafındaki bildirim, transfer fiyatlandırması ve kâr payı
            planlamasını da aynı ekip yürütüyor. Ayrı ayrı firma aramanıza
            gerek kalmaz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Planınızı değerlendirmek için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 9. HATALAR */}
      <section id="hatalar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Sık Yapılan Hatalar
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ 1 EUR ile UG kurup işletme sermayesiz kalmak. Şirketin ilk yıl
            giderlerini karşılayacak bir sermaye ile kurulması gerekir
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Yalnızca posta kutusu niteliğindeki bir adresle kurulmak. Vergi
            dairesi bu durumda numarayı geciktirebilir veya reddedebilir
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Banka hesabı açılışını noter randevusundan sonraya bırakmak.
            Sermaye yatırılmadan tescil tamamlanmaz
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Çok ortaklı veya yatırım alacak yapıda standart sözleşmeyi
            zorlamak, sonradan sözleşmeyi yeniden yaptırmak
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Şeffaflık sicili bildirimini yapmamak veya ortaklık değişiminde
            güncellememek
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Sermaye şirketlerinde 24.500 EUR&apos;luk ticaret vergisi
            muafiyetinin uygulanmadığını bilmemek
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Şehir seçimini yalnızca prestije göre yapıp belediye çarpanı
            farkını hesaba katmamak
          </div>
          <div className="rounded-xl border p-6 font-semibold text-gray-800 shadow-sm">
            ❌ Grup içi fiyatlamayı belgelemeden Türkiye ile Almanya arasında
            fatura akışı kurmak
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
              GmbH kurmak için 25.000 EUR&apos;nun tamamını yatırmak zorunda mıyım?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Her payın en az dörtte biri ödenmek kaydıyla, kuruluş
              anında toplam en az 12.500 EUR&apos;nun şirket hesabında bulunması
              yeterlidir. Kalan tutar taahhüt olarak kalır. Ancak bu tutar
              şirketin borcu niteliğindedir ve iflas gibi durumlarda ortaklardan
              talep edilebilir. Sermayenin yatırılan kısmı bir gider değildir,
              tescilden sonra işletme sermayesi olarak kullanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              UG&apos;yi 1 EUR ile kurmak gerçekten mümkün mü?
            </h3>
            <p className="leading-8 text-gray-700">
              Hukuken mümkündür ancak pratikte anlamsızdır. Kuruluş masrafları
              ve ilk yıl muhasebe giderleri birkaç bin euroyu bulur. Sermayesi
              bu giderleri karşılamayan bir şirket, kuruluşun hemen ardından
              teknik olarak borca batık hale gelebilir. Uygulamada UG&apos;nin
              en az 1.000 ila 5.000 EUR sermaye ile kurulması önerilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Önce UG kurup sonra GmbH&apos;ye geçmek daha mı ucuz?
            </h3>
            <p className="leading-8 text-gray-700">
              Nakit akışı açısından başlangıçta daha hafiftir, toplam maliyet
              açısından ise değildir. Dönüşüm; ortaklar kurulu kararı, sermaye
              artırımı, noter onayı ve yeni tescil gerektirir. İki ayrı noter
              ve sicil masrafı doğar. Sermayeyi bugün ayırabiliyorsanız ve
              muhatabınız kurumsal firmalarsa doğrudan GmbH kurmak daha
              ekonomiktir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirketi düşük vergili bir belediyeye kurup büyük şehirde çalışabilir miyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Ticaret vergisi, şirketin fiilen işyeri bulundurduğu yere göre
              hesaplanır. Birden fazla belediyede işyeri varsa vergi matrahı
              genellikle personel giderlerine göre paylaştırılır. Gerçek
              faaliyetin olmadığı bir adreste merkez göstermek, inceleme
              halinde matrahın yeniden dağıtılmasıyla sonuçlanır. Ayrıca yasal
              asgari çarpanın 2027&apos;den itibaren %280&apos;e yükselmesiyle
              bu tür yapıların avantajı azalacaktır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Türkiye&apos;de şirketim varken Almanya&apos;daki şirketi kime ait göstermeliyim?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu bir tercih meselesidir ve vergi sonucu değiştirir.
              Türkiye&apos;deki tüzel kişi ortak olursa, 2026&apos;dan itibaren
              geçerli olan %80&apos;lik yurt dışı iştirak kazancı istisnasından
              yararlanma imkânı doğabilir. Gerçek kişi ortak olması halinde
              kâr payı menkul sermaye iradı olarak beyan edilir ve farklı bir
              rejime tabi olur. Ortaklık yapısına karar vermeden önce bu iki
              senaryonun sayısal olarak karşılaştırılması gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Almanya&apos;da GmbH kurmak bana oturum hakkı sağlar mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Şirket kurmak ve ortağı olmak, tek başına oturum izni doğurmaz.
              Almanya&apos;da ikamet etmeyi planlıyorsanız, serbest meslek veya
              girişimci statüsüne dayalı oturum izni ayrı bir başvuru süreci
              gerektirir ve iş planı, finansman ile bölgesel ekonomik fayda
              değerlendirmesine tabidir. Şirket kuruluşu için ise Almanya&apos;da
              ikamet şartı yoktur.
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
          Almanya&apos;da şirket kurmanın resmî maliyeti, çoğu girişimcinin
          tahmin ettiğinden düşüktür. Noter, sicil ve işletme kaydı için
          konuşulan tutar çoğu yapıda birkaç bin euroyu geçmez. Asıl belirleyici
          olan iki kalem, ilk iki yılın işletme maliyeti ile yapı seçiminin
          ticari sonuçlarıdır. UG, sermayesi sınırlı ve ilk yıllarda kâr
          dağıtmayacak girişimler için gerçek bir alternatiftir. Buna karşılık
          kurumsal alıcıyla çalışacak, banka finansmanı kullanacak veya yatırım
          alacak bir yapı için GmbH neredeyse zorunludur.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kararı verirken şehir seçiminin vergi yükünü yılda birkaç puan
          değiştirdiğini, vergi numarası sürecinin planladığınızdan uzun
          sürebileceğini ve banka hesabı adımının yabancı ortaklı yapılarda en
          kırılgan aşama olduğunu göz önünde bulundurun. Türkiye tarafında ise
          2026&apos;da yürürlüğe giren %80&apos;lik yurt dışı iştirak kazancı
          istisnası, ortaklık yapısını doğru kurgulayan şirketler için ciddi bir
          avantaj sunuyor. Bu nedenle Almanya yapılanması, yalnızca bir kuruluş
          işlemi değil, iki ülkeyi birlikte ele alan bir planlama konusudur.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/almanyada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • ALMANYA • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Almanya&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve Avantajları
            </h3>
          </Link>
          <Link
            href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • İHRACAT • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?
            </h3>
          </Link>
          <Link
            href="/blog/hollandada-sirket-nasil-kurulur"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">
              YURT DIŞI ŞİRKET • HOLLANDA • 2026
            </div>
            <h3 className="text-lg font-bold text-[#071A2F]">
              Hollanda&apos;da Şirket Nasıl Kurulur? Kuruluş Süreci ve
              Avantajları
            </h3>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
