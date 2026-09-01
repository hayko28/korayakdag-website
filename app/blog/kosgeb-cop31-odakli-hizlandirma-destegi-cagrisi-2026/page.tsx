import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB COP31 Odaklı Hızlandırma Desteği Çağrısı 2026 | Kimler Başvurabilir? | Koray Akdağ",
  description:
    "KOSGEB'in 2026-01 COP31 Hızlandırma Çağrısı: TEKMER işletici kuruluşları ve Teknokent yönetici şirketleri için 6,5 milyon TL'ye kadar geri ödemeli destek, hedef alanlar, teknik şartlar, başvuru tarihleri ve KOBİ'ler için katılım yolu.",
  keywords: [
    "KOSGEB COP31 desteği",
    "COP31 Hızlandırma Çağrısı",
    "TEKMER destek programı 2026",
    "Teknokent yeşil dönüşüm desteği",
    "KOSGEB yeşil dönüşüm desteği",
    "COP31 Antalya",
    "iklim teknolojileri desteği",
    "KOSGEB 6,5 milyon TL destek",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB COP31 Odaklı Hızlandırma Desteği Çağrısı 2026: Kimler Başvurabilir, Destek Tutarı Nedir?"
      description="Türkiye'nin ev sahipliğinde düzenlenecek COP31 iklim zirvesi öncesinde açılan çağrı kapsamında TEKMER işletici kuruluşları ve Teknokent yönetici şirketlerine 6,5 milyon TL'ye kadar geri ödemeli destek sağlanıyor. Şartlar, hedef alanlar ve başvuru takvimiyle güncel rehber."
      category="KOSGEB • YEŞİL DÖNÜŞÜM • 2026"
      date="2026"
      readTime="11 Dakika"
      slug="kosgeb-cop31-odakli-hizlandirma-destegi-cagrisi-2026"
      coverImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB, Kasım 2026&apos;da Antalya&apos;da düzenlenecek COP31
            İklim Zirvesi öncesinde Teknoloji Merkezi (TEKMER) Destek
            Programı kapsamında yeni bir çağrı ilan etti: 2026-01 COP31
            Hızlandırma Çağrısı. Çağrı, klasik KOSGEB destekleri gibi
            doğrudan işletmelere değil, TEKMER işletici kuruluşları ve
            Teknokent yönetici şirketlerine yönelik olması nedeniyle
            hedef kitlesi ve işleyişi bakımından farklı bir yapıya sahip.
            Bu yazıda çağrının kimi kapsadığını, KOBİ&apos;lerin bu
            programa nasıl dahil olabileceğini ve güncel tarihleri
            derledik.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Çağrı nedir, COP31 ile bağlantısı ne?</li>
            <li>✔ Kimler doğrudan başvurabilir, KOBİ&apos;ler nasıl dahil olur?</li>
            <li>✔ Destek tutarı ve geri ödeme koşulları</li>
            <li>✔ Hızlandırma programının teknik şartları</li>
            <li>✔ Hedef alanlar ve desteklenen giderler</li>
            <li>✔ 2026 başvuru tarihleri</li>
            <li>✔ Dikkat edilmesi gereken kritik noktalar</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Çağrı Nedir, Neden Önemli?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Başvurabilir?
            </Link>
            <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Destek Tutarı ve Geri Ödeme Koşulları
            </Link>
            <Link href="#sartlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Hızlandırma Programının Teknik Şartları
            </Link>
            <Link href="#alanlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Hedef Alanlar ve Desteklenen Giderler
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Başvuru Tarihleri
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Çağrı Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi
            taraflar konferansının 31. oturumu (COP31), 2026 yılı Kasım
            ayında Antalya&apos;da düzenlenecek. Türkiye, ev sahipliği
            yaptığı bu zirveyi yalnızca diplomatik bir organizasyon olarak
            değil, yerli iklim teknolojisi girişimlerinin küresel pazarlara
            açılması için bir fırsat penceresi olarak da konumlandırıyor.
            Bu doğrultuda KOSGEB, Teknoloji Merkezi (TEKMER) Destek
            Programı kapsamında <strong>2026-01 COP31 Hızlandırma
            Çağrısı</strong>&apos;nı ilan etti.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Çağrının Amacı
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Teknolojik derinliği ve ölçeklenme potansiyeli yüksek girişimleri hızlandırma programlarıyla küresel pazarlara hazırlamak</li>
              <li>✔ Temiz enerji dönüşümü, döngüsel ekonomi ve iklim teknolojileri alanlarındaki işletmelere uluslararası görünürlük kazandırmak</li>
              <li>✔ COP31 zirvesini Türk teknoloji girişimlerinin tanıtım vitrinine dönüştürmek</li>
              <li>✔ TEKMER ve Teknokent ekosistemindeki hızlandırma kapasitesini güçlendirmek</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Çağrının en dikkat çekici yönü, klasik KOSGEB destek
            programlarının aksine başvuru sahibinin doğrudan KOBİ değil,
            bu KOBİ&apos;leri hızlandırma programlarıyla bir araya getiren
            TEKMER ve Teknokent yönetici kuruluşları olması. Bu nedenle
            yeşil teknoloji, iklim çözümleri veya sürdürülebilir tarım
            alanında faaliyet gösteren bir girişimseniz, doğrudan KOSGEB&apos;e
            başvurmak yerine bölgenizdeki TEKMER veya Teknokent&apos;in bu
            çağrı kapsamında bir hızlandırma programı açıp açmadığını takip
            etmeniz gerekiyor.
          </p>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Çağrı, iki ayrı katmanlı bir yapıda işliyor: destek başvurusunu
            kurumlar yapıyor, işletmeler ise bu kurumların düzenlediği
            hızlandırma programlarına katılımcı olarak dahil oluyor.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Doğrudan Başvuru Sahibi Olabilecekler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ TEKMER işletici kuruluşları</li>
                <li>✔ Girişimcilik Odaklı (GO) sahibi Teknoloji Geliştirme Bölgesi (Teknokent) yönetici şirketleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-blue-700">
                🏢 Girişimler İçin Katılım Yolu
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ İşletmeler doğrudan KOSGEB&apos;e başvurmaz</li>
                <li>✔ TEKMER/Teknokent&apos;in kurguladığı hızlandırma programına katılımcı olarak dahil olunur</li>
                <li>✔ Programa alınacak işletmelerin seçimi TEKMER/TGB tarafından yapılır</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Girişimler İçin Pratik Sonuç
            </h3>
            <p className="leading-8 text-gray-700">
              Yeşil dönüşüm, iklim teknolojileri, döngüsel ekonomi veya
              sürdürülebilir tarım alanında ürün geliştiren ve Teknoloji
              Hazırlık Seviyesi (TRL) en az 6 olan bir işletmeyseniz,
              bulunduğunuz veya en yakın ildeki TEKMER ya da Teknokent
              yönetimiyle iletişime geçerek COP31 Hızlandırma Çağrısı
              kapsamında bir program planlayıp planlamadıklarını sormanız
              önemli. Katılım süreci ve kriterleri, çağrının merkezi
              KOSGEB metninden değil, ilgili TEKMER/Teknokent&apos;in
              kendi ilan edeceği program takviminden takip edilmelidir.
            </p>
          </div>
        </section>

        {/* 3. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Destek Tutarı ve Geri Ödeme Koşulları
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Çağrı kapsamında sağlanan destek, klasik KOSGEB hibelerinden
            farklı olarak <strong>%100 geri ödemeli</strong> bir yapıda
            kurgulanmış. Yani destek, uzun vadeli ve ödemesiz dönemli bir
            finansman aracı olarak çalışıyor; hibe niteliğinde değil.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Tutar / Koşul</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Destek Üst Limiti</td>
                  <td className="p-5">6.500.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Destek Oranı</td>
                  <td className="p-5">%100 geri ödemeli</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Ödemesiz Dönem</td>
                  <td className="p-5">36 ay</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Geri Ödeme Planı</td>
                  <td className="p-5">3&apos;er aylık dönemlerde 4 eşit taksit</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Program Süresi</td>
                  <td className="p-5">1 – 3 ay</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Hibe Değil, Geri Ödemeli Destek
            </h3>
            <p className="leading-8 text-gray-700">
              Destek tutarının tamamı geri ödemeli olduğu için, başvuru
              sahibi kurumun (TEKMER işletici kuruluşu veya Teknokent
              yönetici şirketi) bu finansmanı hızlandırma programının
              işletme giderlerine, yani kalıcı bir yatırım değil bir
              hizmet/organizasyon maliyetine yönlendirmesi bekleniyor.
              36 aylık ödemesiz dönem, programın tamamlanmasından ve elde
              edilen sonuçların değerlendirilmesinden sonra başlıyor.
            </p>
          </div>
        </section>

        {/* 4. TEKNİK ŞARTLAR */}
        <section id="sartlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Hızlandırma Programının Teknik Şartları
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Destekten yararlanmak isteyen TEKMER/Teknokent&apos;in
            kurgulayacağı hızlandırma programının aşağıdaki asgari
            şartları karşılaması gerekiyor:
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏭</div>
              <h3 className="text-xl font-bold">Asgari İşletme Sayısı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Program en az 10 işletmeyi kapsamalıdır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">⏱️</div>
              <h3 className="text-xl font-bold">Program Süresi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Hızlandırma programı 1 ile 3 ay arasında sürmelidir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔬</div>
              <h3 className="text-xl font-bold">Teknoloji Hazırlık Seviyesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Katılımcı ürünlerin TRL seviyesi en az 6 olmalıdır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🌍</div>
              <h3 className="text-xl font-bold">COP31 Bağlantısı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Program, Antalya&apos;daki COP31 etkinliğinde en az bir
                faaliyet içermelidir.
              </p>
            </div>
          </div>
        </section>

        {/* 5. HEDEF ALANLAR */}
        <section id="alanlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Hedef Alanlar ve Desteklenen Giderler
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Çağrı, dokuz ana başlık altında toplanan iklim ve sürdürülebilirlik
            temalı alanlarda faaliyet gösteren işletmeleri hedefliyor:
          </p>
          <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6 shadow-sm">
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Sıfır atık ve döngüsel ekonomi</li>
              <li>Gıda güvenliği ve sürdürülebilir tarım</li>
              <li>İklime dayanıklı şehirler</li>
              <li>İklim eylemi ve karbon yönetimi</li>
              <li>Yeşil sanayileşme</li>
              <li>Temiz enerji dönüşümü</li>
              <li>Okyanuslar, denizler ve mavi ekonomi</li>
              <li>Dirençli sağlık sistemleri</li>
              <li>Yeşil teknoloji</li>
            </ul>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🧾 Desteklenen Gider Kalemleri
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Destek tutarı, hızlandırma programının aşağıdaki gider
              kalemlerinde kullanılabiliyor:
            </p>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Yazılım giderleri</li>
              <li>Eğitim giderleri</li>
              <li>Danışmanlık giderleri</li>
              <li>Organizasyon giderleri</li>
              <li>Tanıtım giderleri</li>
            </ul>
          </div>
        </section>

        {/* 6. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Başvuru Tarihleri
          </h2>
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 2026-01 COP31 Hızlandırma Çağrısı Takvimi
            </h3>
            <p className="leading-8 text-gray-700">
              Çağrı, KOSGEB tarafından <strong>8 Ağustos 2026</strong>&apos;da
              ilan edildi ve başvurular <strong>30 Ağustos 2026</strong>{" "}
              tarihine kadar alınıyor. Bu tarih, TEKMER işletici
              kuruluşları ve Teknokent yönetici şirketlerinin KOSGEB&apos;e
              yapacağı kurumsal başvuru için geçerli; bireysel işletmelerin
              hızlandırma programına katılım takvimi, ilgili TEKMER/Teknokent
              tarafından ayrıca belirlenip duyurulacaktır.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Başvuru süreci ve dönemleri KOSGEB tarafından güncellenebilir.
            Güncel duyurular için KOSGEB&apos;in resmî internet sitesini
            takip etmek gerekir.
          </p>
        </section>

        {/* 7. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Çağrıya <strong>doğrudan KOBİ&apos;ler değil</strong>, TEKMER işletici kuruluşları ve GO sahibi Teknokent yönetici şirketleri başvurabilir.</li>
              <li>Destek <strong>hibe değil, %100 geri ödemeli</strong> bir finansman aracıdır; 36 aylık ödemesiz dönemin ardından 4 eşit taksitte geri ödenir.</li>
              <li>Girişimlerin programa dahil olma süreci, KOSGEB&apos;in merkezi çağrı takviminden değil, ilgili TEKMER/Teknokent&apos;in kendi duyurularından takip edilmelidir.</li>
              <li>Hızlandırma programının en az 10 işletme, 1-3 ay süre ve TRL 6+ şartlarını sağlaması zorunludur; bu şartları taşımayan programlar destek kapsamına alınmaz.</li>
              <li>Güncel destek üst limiti, oranlar ve tarihler için KOSGEB&apos;in yürürlükteki çağrı metni esas alınmalı, üçüncü taraf kaynaklardaki bilgiler tek başına yeterli görülmemelidir.</li>
            </ul>
          </div>
        </section>

        {/* 8. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bir KOBİ olarak doğrudan KOSGEB&apos;e başvurabilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Bu çağrıda başvuru sahibi TEKMER işletici kuruluşları
                ve GO sahibi Teknokent yönetici şirketleridir. İşletmeler,
                bu kurumların düzenlediği hızlandırma programına katılımcı
                olarak dahil olur.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Destek hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Ne klasik hibe ne de banka kredisidir. Destek %100 geri
                ödemelidir; 36 aylık ödemesiz dönemin ardından 3&apos;er
                aylık dönemlerde 4 eşit taksitte KOSGEB&apos;e geri ödenir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Her sektörden işletme hızlandırma programına dahil olabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program, sıfır atık ve döngüsel ekonomi, temiz enerji
                dönüşümü, sürdürülebilir tarım, karbon yönetimi ve yeşil
                teknoloji gibi dokuz ana başlık altında toplanan iklim ve
                sürdürülebilirlik odaklı alanları hedefliyor.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                TRL 6 ne anlama gelir?
              </h3>
              <p className="leading-8 text-gray-700">
                Teknoloji Hazırlık Seviyesi (TRL) 6, ürünün ilgili
                operasyonel ortama benzer bir ortamda prototip veya sistem
                düzeyinde test edildiği, laboratuvar aşamasını geride
                bırakmış bir olgunluk seviyesini ifade eder.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Bulunduğum ildeki TEKMER veya Teknokent bu çağrıya katılıyor mu, nasıl öğrenirim?
              </h3>
              <p className="leading-8 text-gray-700">
                Bu bilgi merkezi olarak tek bir listede yayımlanmaz; her
                TEKMER veya Teknokent, çağrıya katılım kararını kendi
                yönetimi belirler ve kendi kanallarından duyurur. İlgili
                kuruma doğrudan başvurup COP31 Hızlandırma Çağrısı
                kapsamında bir program planlayıp planlamadıklarını sormanız
                en sağlıklı yoldur.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 COP31 Hızlandırma Çağrısı Başvurunuzda Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              TEKMER işletici kuruluşu veya Teknokent yönetici şirketi
              olarak COP31 Hızlandırma Çağrısı&apos;na başvururken teknik
              şartların karşılanması ve başvuru dosyasının doğru
              hazırlanması, geri ödemeli desteğin onaylanma sürecini
              etkiler.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Başvurunuzu birlikte değerlendirmemiz için bizimle
                iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 9. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in COP31 Odaklı Hızlandırma Desteği Çağrısı, Türkiye&apos;nin
            ev sahipliği yapacağı iklim zirvesini yerli yeşil teknoloji
            girişimleri için bir sıçrama tahtasına dönüştürmeyi hedefleyen,
            klasik KOSGEB destek programlarından farklı işleyen bir modeldir.
            6,5 milyon TL&apos;ye kadar geri ödemeli destek, doğrudan
            işletmelere değil TEKMER ve Teknokent yönetici kuruluşlarına
            sağlanıyor; girişimler ise ancak bu kurumların kuracağı
            hızlandırma programları üzerinden fayda sağlayabiliyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin yeşil dönüşüm, iklim teknolojileri veya
            sürdürülebilirlik alanındaki projesini bu çağrı da dahil olmak
            üzere hangi güncel devlet destek ve teşvik programlarıyla
            eşleştirebileceğinizi belirlemek, başvuru dosyanızı doğru
            kurgulamak ve süreci uçtan uca yönetmek için Koray Akdağ /
            Sistem Global Danışmanlık olarak yanınızdayız. Ayrı bir
            danışmanlık firması aramanıza gerek kalmadan, hem destek
            başvuru sürecinizi hem de sonrasındaki raporlama
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
          href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
        </Link>
        <Link
          href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
