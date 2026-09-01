import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB KOBİ Dijital Dönüşüm Destek Programı 2026 | Şartlar ve Destek Tutarları | Koray Akdağ",
  description:
    "KOSGEB KOBİ Dijital Dönüşüm Destek Programı 2026: imalat sektöründeki KOBİ'ler için 20 milyon TL'ye kadar kredi, dijital olgunluk değerlendirme raporu şartı, faiz desteği, başvuru süreci ve güncel yönerge (11.05.2026) esaslarıyla kapsamlı rehber.",
  keywords: [
    "KOBİ Dijital Dönüşüm Destek Programı",
    "KOSGEB dijital dönüşüm kredisi",
    "dijital olgunluk değerlendirme raporu",
    "KOSGEB imalat sektörü destekleri",
    "TÜSSİDE DDX",
    "MESS MEXT SIRI",
    "KOSGEB faiz desteği 2026",
    "KOBİ Bilgi Sistemi başvuru",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB KOBİ Dijital Dönüşüm Destek Programı 2026: Kimler Başvurabilir, Destek Tutarları Nedir?"
      description="İmalat sektöründe faaliyet gösteren KOBİ'lerin nesnelerin interneti, robotik, yapay zekâ ve ERP gibi dijital dönüşüm yatırımları için 1-20 milyon TL kredi ve geri ödemesiz faiz desteği sunan KOSGEB KOBİ Dijital Dönüşüm Destek Programı'nın 11 Mayıs 2026 tarihli güncel yönergeye göre şartları, gerekli belgeleri ve başvuru süreci."
      category="KOSGEB • DİJİTAL DÖNÜŞÜM • 2026"
      date="2026"
      readTime="13 Dakika"
      slug="kosgeb-kobi-dijital-donusum-destek-programi-2026"
      coverImage="https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in imalat sanayindeki KOBİ&apos;lere yönelik
            uyguladığı KOBİ Dijital Dönüşüm Destek Programı, Avrupa İmar ve
            Kalkınma Bankası (EBRD) iş birliğiyle yürütülen ve klasik hibe
            desteklerinden farklı işleyen bir kredi + faiz desteği
            mekanizmasıdır. Programın 11 Mayıs 2026 tarihinde revize edilen
            güncel yönergesine göre işletmeler, dijital olgunluk değerlendirme
            raporuna dayalı olarak 1-20 milyon TL arasında yatırım kredisi
            kullanabiliyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Program nasıl çalışıyor, hibe mi kredi mi?</li>
            <li>✔ Kimler başvurabilir, hangi sektör şartı aranıyor?</li>
            <li>✔ Kredi ve faiz desteği üst limitleri</li>
            <li>✔ Dijital olgunluk değerlendirme raporu nasıl alınır?</li>
            <li>✔ Desteklenen gider kalemleri</li>
            <li>✔ Adım adım başvuru ve kredi kullandırım süreci</li>
            <li>✔ İzleme yükümlülüğü ve dikkat edilmesi gereken noktalar</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Program Nedir, Neden Önemli?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Başvurabilir?
            </Link>
            <Link href="#rapor" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Dijital Olgunluk Değerlendirme Raporu
            </Link>
            <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Kredi ve Destek Tutarları
            </Link>
            <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Desteklenen Gider Kalemleri
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Başvuru Süreci
            </Link>
            <Link href="#izleme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. İzleme ve Kazanılmış Hak
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            KOBİ Dijital Dönüşüm Destek Programı, KOSGEB&apos;in 02.08.2023
            tarihinde Avrupa İmar ve Kalkınma Bankası (EBRD) ile imzaladığı
            Mutabakat Zaptı çerçevesinde yürüttüğü bir finansman aracıdır.
            Amaç; imalat sektöründeki KOBİ&apos;lerin tedarik, üretim,
            pazarlama ve satış süreçlerinde nesnelerin interneti, bulut
            teknolojileri, robot teknolojileri, büyük veri, artırılmış
            gerçeklik, yapay zekâ, dijital ikiz, süreç otomasyonu ve kurumsal
            kaynak planlama (ERP) gibi dijital teknolojilerden faydalanarak iş
            süreçlerini iyileştirmesini ve verimliliğini artırmasını
            sağlamaktır.
          </p>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Program, doğrudan hibe modelinden farklı olarak{" "}
            <strong>kredi + faiz desteği</strong> mantığıyla işler: işletme,
            KOSGEB ile protokol imzalamış bir bankadan yatırım kredisi
            kullanır; anaparayı kendisi geri öderken, kredinin faiz giderinin
            KOSGEB tarafından belirlenen bir puanlık kısmı geri ödemesiz
            olarak işletmeye aktarılır.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Öne Çıkan Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ İmalat KOBİ&apos;lerinin yeni makine, teçhizat, yazılım ve donanım yatırımlarını finanse etmek</li>
              <li>✔ Dijital olgunluk seviyesi düşük işletmelerde ölçülebilir bir dönüşüm sürecini tetiklemek</li>
              <li>✔ Rekabet gücünü ve verimliliği artırarak KOBİ&apos;lerin ekonomideki payını büyütmek</li>
              <li>✔ Kredi maliyetini devlet desteğiyle azaltarak dijitalleşme yatırımlarının önündeki finansman engelini kaldırmak</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            Programın en ayırt edici özelliği, başvuru için önce onaylı bir{" "}
            <strong>dijital dönüşüm/olgunluk değerlendirme raporu</strong>{" "}
            alınmasının şart koşulmasıdır. Yani işletme, kredi başvurusundan
            önce bağımsız bir danışmanla dijital olgunluk seviyesini
            ölçtürmek ve dönüşüm yol haritasını belirlemek zorundadır.
          </p>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Kimler Başvuramaz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yönergeye göre başvuru şartları hem işletmenin ölçeğine hem de
            sektörüne, hem de finansal geçmişine bağlıdır.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Türk Ticaret Kanunu&apos;nda tanımlı gerçek/tüzel kişi olmak</li>
                <li>✔ KOBİ Bilgi Sistemi&apos;nde kayıtlı, aktif ve İşletme Beyanı güncel olmak</li>
                <li>✔ Küçük veya orta ölçekli işletme sınıfında olmak (mikro işletme hariç)</li>
                <li>✔ NACE Rev. 2&apos;ye göre Kısım C - İmalat sektöründe faaliyet göstermek</li>
                <li>✔ Son mali yıl öz kaynaklar toplamının pozitif olması</li>
                <li>✔ Son 3 mali yıldan en az birinde faaliyet kârının pozitif olması</li>
                <li>✔ Onaylı dijital dönüşüm/olgunluk değerlendirme raporuna sahip olmak</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Mikro ölçekli işletmeler</li>
                <li>❌ İmalat (NACE Kısım C) dışındaki sektörlerde faaliyet gösterenler</li>
                <li>❌ EBRD&apos;nin &quot;Uygun Bulunmayan Sektör ve Faaliyetler Tablosu&quot;ndaki alanlarda faaliyet gösterenler</li>
                <li>❌ Son 3 mali yılın tamamında faaliyet kârı ve öz kaynakları negatif olan işletmeler</li>
                <li>❌ Programdan daha önce bir kez yararlanmış işletmeler</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            İşletmenin ölçek ve sektör uygunluğu, destek programına başvuru
            tarihindeki KOBİ Bilgi Sistemi kayıtlarına göre belirlenir. Son 3
            yıl içinde kurulmuş işletmeler için ise onaylı &quot;Faaliyet
            Kârı&quot; veya &quot;Öz Kaynaklar Toplamı&quot; verilerinden
            hangisi mevcutsa o esas alınarak değerlendirme yapılır.
          </p>
        </section>

        {/* 3. RAPOR */}
        <section id="rapor" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Dijital Olgunluk Değerlendirme Raporu
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın en kritik ön koşulu, işletmenin dijital dönüşüm/olgunluk
            değerlendirmesi alanında Başkanlık Makamı Oluru ile
            belgelendirilmiş/yetkilendirilmiş kurum ve danışmanlardan hizmet
            almış olmasıdır. Uygulamada bu yetki, aşağıdaki kurumlara ve
            kullandıkları rapor formatlarına bağlıdır:
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Yetkili Kurum</th>
                  <th className="p-5">Rapor Formatı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">TÜBİTAK TÜSSİDE</td>
                  <td className="p-5">DDX Dijital Dönüşüm Değerlendirme Raporu</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">MESS MEXT (Teknoloji Merkezi)</td>
                  <td className="p-5">SIRI Dijital Olgunluk Değerlendirme Raporu</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">İHKİB Dijital Dönüşüm Merkezi</td>
                  <td className="p-5">SIRI Dijital Olgunluk Değerlendirme Raporu</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⏱️ Raporun Geçerlilik Süresi
            </h3>
            <p className="leading-8 text-gray-700">
              Raporda bir geçerlilik tarihi veya yol haritası süresi
              belirtilmişse, başvuru bu süre içinde yapılmalıdır. Raporda
              böyle bir süre belirtilmemişse, işletmenin raporun onaylandığı
              tarihten itibaren <strong>1 yıl içinde</strong> başvurusunu
              tamamlaması gerekir. Süresi geçen raporla başvuru yapılamaz;
              işletmenin değerlendirmeyi yeniletmesi gerekir.
            </p>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Başvuru formu, danışmanın raporda önerdiği dönüşüm stratejileri
            doğrultusunda doldurulur; talep edilen gider kalemlerinin
            (makine, teçhizat, yazılım, donanım) rapordaki önerilerle uyumlu
            olması, Kurul değerlendirmesinde belirleyici bir kriterdir.
          </p>
        </section>

        {/* 4. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Kredi ve Destek Tutarları Ne Kadar?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın finansman mantığı; işletmenin protokollü bir bankadan
            yatırım kredisi kullanması, KOSGEB&apos;in ise bu kredinin faiz
            giderinin belirli bir puanlık kısmını geri ödemesiz olarak
            karşılamasına dayanır.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Tutar / Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Türü</td>
                  <td className="p-5">Yatırım Kredisi</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">İşletme Başına Kredi Alt Limiti</td>
                  <td className="p-5">1.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">İşletme Başına Kredi Üst Limiti</td>
                  <td className="p-5">20.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Azami Kredi Vadesi</td>
                  <td className="p-5">36 ay (bankaca uygun görülürse 6 aya kadar ödemesiz dönem)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Destek Programı Süresi</td>
                  <td className="p-5">24 ay</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Faiz Desteği</td>
                  <td className="p-5">Geri ödemesiz, güncel uygulamada 20 puana kadar</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Faiz Desteği Nasıl Hesaplanıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Yönergeye göre destek puanı, KOSGEB Başkanlık Makamı Oluru ile
              belirlenir ve bankanın aktif kredi kullandırımını yaptığı
              tarihte geçerli olan puan üzerinden faiz desteği hesaplanır. Bu
              nedenle destek puanı sabit bir yasal oran değil, dönemsel olarak
              güncellenebilen bir parametredir; başvuru öncesinde güncel
              puanın KOSGEB veya protokollü banka üzerinden teyit edilmesi
              gerekir. Taksitler eşit tutarlarla 3&apos;er aylık dönemlerde
              ödenir ve destek, ödenen her taksite karşılık gelen faiz
              tutarının ilgili puanlık kısmı üzerinden işletmeye aktarılır.
            </p>
          </div>
        </section>

        {/* 5. GİDERLER */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Desteklenen Gider Kalemleri
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kurul tarafından uygun bulunan giderler, dijital dönüşüm/olgunluk
            değerlendirme raporunda önerilen strateji ile doğrudan ilişkili
            olmalıdır. Desteklenen giderlerin <strong>yeni</strong> olması
            şarttır; ikinci el makine, teçhizat, yazılım veya donanım
            giderleri kapsam dışıdır.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ⚙️ Makine ve Teçhizat
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Üretim hattını dijitalleştiren yeni makine ve teçhizat alımları</li>
                <li>Sensör, otomasyon ve robotik entegrasyon yatırımları</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💻 Yazılım ve Donanım
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>ERP, MES, SCADA gibi kurumsal ve üretim yazılımları</li>
                <li>Yazılımı çalıştırmak için gerekli sunucu ve donanım altyapısı</li>
                <li>Zaman sınırlı yazılım lisanslama veya bulut erişim/kullanım giderleri</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <p className="leading-8 text-gray-700">
              Destek ödemesi yapılmadan önce sorumlu KOSGEB personeli işletmeyi
              yerinde ziyaret ederek satın alınan makine, teçhizat, yazılım ve
              donanımın marka/model/seri numarası gibi ayırt edici özelliklerini
              içeren bir tespit tutanağı düzenler. Asgari teknik özellikleri
              sağlamayan veya eksik/hatalı gider kalemleri için faiz desteği
              ödenmez.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Başvuru Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Süreç, dijital olgunluk değerlendirmesinden destek ödemesine kadar
            tamamen KOBİ Bilgi Sistemi üzerinden elektronik ortamda yürütülür.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔍</div>
              <h3 className="text-xl font-bold">1. Dijital Olgunluk Değerlendirmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                TÜSSİDE, MESS MEXT veya İHKİB yetkili danışmanından onaylı rapor alınır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">2. Başvuru Formu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Rapordaki stratejiler doğrultusunda form doldurulur, belgeler yüklenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🕵️</div>
              <h3 className="text-xl font-bold">3. Sorumlu Personel Kontrolü</h3>
              <p className="mt-3 text-sm text-gray-600">
                Başvuru 7 gün içinde sistem üzerinden kontrol edilir, eksikler bildirilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">4. Kurul Değerlendirmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                1 KOSGEB personeli + 2 bağımsız değerlendiriciden oluşan Kurul karar verir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">5. Banka Kredi Başvurusu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan işletme, protokollü bankaya kredi başvurusunu yapar.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Kredi Kullanımı ve Ödeme</h3>
              <p className="mt-3 text-sm text-gray-600">
                Taksitler ödendikçe faiz desteği, tespit tutanağı sonrası işletmeye aktarılır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Ret Halinde İtiraz Hakkı
            </h3>
            <p className="leading-8 text-gray-700">
              Kurul tarafından reddedilen başvurular için işletme, ret
              kararının bildirildiği tarihten itibaren 15 gün içinde,
              gerekçeleriyle birlikte <strong>bir defaya mahsus</strong>{" "}
              olmak üzere itiraz edebilir. İtiraz, Daire Başkanı başkanlığında
              oluşturulan 3 kişilik itiraz komisyonu tarafından incelenerek en
              geç 1 ay içinde karara bağlanır.
            </p>
          </div>
        </section>

        {/* 7. İZLEME */}
        <section id="izleme" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. İzleme ve Kazanılmış Hak
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Destek ödemesi alındıktan sonra sürecin bitmediğini bilmek önemli.
            Program, gerçek bir dönüşüm sağlandığını ölçmek için işletmelere
            bir izleme yükümlülüğü getiriyor.
          </p>
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-blue-500">
              <li>
                İşletme, son kredi vadesinin bitiş tarihinden{" "}
                <strong>12 ay sonra, 3 ay içinde</strong> yeniden dijital
                dönüşüm danışmanlığı hizmeti alarak güncel dijital olgunluk
                seviyesini KOBİ Bilgi Sistemi&apos;ne yükler.
              </li>
              <li>
                Bu bildirim süresi içinde yapılmazsa, işletmeye 15 gün ek süre
                tanınır; bu sürede de yükleme yapılmazsa destek programı
                başarıyla tamamlanmamış sayılır ve varsa bekleyen destek
                ödemeleri yapılmaz.
              </li>
              <li>
                Destekle satın alınan makine, teçhizat, yazılım ve donanım,
                son kredi vadesinin bitiş tarihinden <strong>1 yıl
                sonrasına kadar</strong> satılamaz, kiralanamaz, devredilemez
                veya rehin gösterilemez (Kredi Garanti Fonu kefaleti hariç).
              </li>
              <li>
                Destek programı başlangıcında KOBİ niteliği taşıyan bir
                işletme, sonradan bu niteliğini kaybetse bile önceden
                kazanılmış destek hakları, diğer şartlara uyulması kaydıyla
                korunur.
              </li>
            </ul>
          </div>
        </section>

        {/* 8. DİKKAT EDİLECEKLER */}
        <section id="dikkat" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Dikkat Edilmesi Gereken Noktalar
          </h2>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>Bir işletme bu destek programından yalnızca <strong>bir kez</strong> yararlanabilir.</li>
              <li>Destek, hibe değil <strong>kredi + faiz desteği</strong> modelidir; kredinin anaparası işletme tarafından geri ödenir.</li>
              <li>Onaylı dijital olgunluk değerlendirme raporu olmadan başvuru yapılamaz; raporun süresi geçmişse önce rapor yenilenmelidir.</li>
              <li>Kredi kullandırımı, KOSGEB ile protokol imzalamış bankaların kendi kredi/bankacılık değerlendirme kriterlerine de tabidir.</li>
              <li>Aynı gider için vergi ve SGK primi gibi yasal yükümlülükler hariç, başka bir kurum/kuruluştan veya KOSGEB programından ayrıca destek alınamaz.</li>
              <li>Vergi veya SGK borcu bulunan işletmelerde destek ödemesi öncelikle bu borçlara mahsup edilir.</li>
              <li>Güncel destek puanı, kredi limitleri ve gider kalemleri için KOSGEB&apos;in yürürlükteki yönergesi ve başvuru kılavuzu esas alınmalıdır; parametreler yıl içinde Başkanlık Makamı Oluru ile güncellenebilir.</li>
            </ul>
          </div>
        </section>

        {/* 9. SSS */}
        <section id="sss" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Sık Sorulan Sorular
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Program hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                İkisinin karışımı gibi çalışır. İşletme protokollü bir bankadan
                yatırım kredisi kullanır ve anaparayı geri öder; KOSGEB ise
                kredinin faiz giderinin belirli bir puanlık kısmını geri
                ödemesiz olarak işletmeye öder.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                İmalat dışındaki sektörler başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program yalnızca NACE Rev. 2&apos;ye göre Kısım C -
                İmalat sektöründe faaliyet gösteren KOBİ&apos;lere açıktır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Dijital olgunluk değerlendirme raporunu kim hazırlayabilir?
              </h3>
              <p className="leading-8 text-gray-700">
                Yalnızca KOSGEB Başkanlık Makamı Oluru ile bu alanda
                yetkilendirilmiş kurum ve danışmanlar rapor hazırlayabilir.
                Güncel uygulamada bunlar TÜBİTAK TÜSSİDE, MESS MEXT ve İHKİB
                Dijital Dönüşüm Merkezi bünyesindeki sertifikalı
                danışmanlardır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Mikro işletmeler başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Program yalnızca küçük ve orta ölçekli işletmelere
                açıktır, mikro ölçekli işletmeler kapsam dışıdır.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                İkinci el makine alımı destekleniyor mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Yönerge, destek kapsamındaki makine, teçhizat, yazılım
                ve donanımın yeni olması şartını açıkça arıyor.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 Dijital Dönüşüm Kredi Başvurunuzda Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              İmalat sektöründeki işletmeniz için dijital olgunluk
              değerlendirme raporunun hazırlanması, başvuru sürecinin
              yönergeye uygun yürütülmesi ve 20 milyon TL&apos;ye kadar
              kredi ve faiz desteğinden tam olarak yararlanılması,
              deneyim gerektiren bir süreçtir.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                Dijital dönüşüm kredi başvurunuzu birlikte planlamak için
                bizimle iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 10. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            10. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB KOBİ Dijital Dönüşüm Destek Programı, imalat sektöründeki
            KOBİ&apos;lerin yeni makine, teçhizat, yazılım ve donanım
            yatırımları için 20 milyon TL&apos;ye kadar kredi imkânını,
            devletin üstlendiği faiz desteğiyle birlikte sunuyor. Ancak
            programın en kritik eşiği, başvurudan önce onaylı bir dijital
            olgunluk değerlendirme raporu alınması ve talep edilen gider
            kalemlerinin bu raporla tutarlı biçimde gerekçelendirilmesi.
            Rapor süresi, Kurul değerlendirme kriterleri ve izleme
            yükümlülükleri doğru yönetilmediğinde başvuru reddedilebiliyor
            veya kazanılan destek geri talep edilebiliyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bu programa uygunluğunu değerlendirmek, dijital
            olgunluk değerlendirme sürecini planlamak, proje dosyanızı KOSGEB
            kriterlerine uygun şekilde hazırlamak ve başvuru ile kredi
            kullandırım sürecini uçtan uca yönetmek için Koray Akdağ / Sistem
            Global Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık
            firması aramanıza gerek kalmadan, hem destek başvuru sürecinizi
            hem de sonrasındaki raporlama ve izleme yükümlülüklerinizi tek
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
          href="/blog/kosgeb-kapasite-gelistirme-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • DEVLET DESTEKLERİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Kapasite Geliştirme Destek Programı 2026</h3>
        </Link>
        <Link
          href="/blog/kosgeb-yapay-zeka-kredi-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • YAPAY ZEKA • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Yapay Zeka Kredi Programı 2026</h3>
        </Link>
        <Link
          href="/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">KOSGEB • AR-GE DESTEĞİ • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
