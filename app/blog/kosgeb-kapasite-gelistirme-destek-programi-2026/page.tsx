import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "KOSGEB Kapasite Geliştirme Destek Programı 2026 | 3. Dönem, Gerekli Belgeler | Koray Akdağ",
  description:
    "KOSGEB Kapasite Geliştirme Destek Programı 3. dönem başvuruları 22 Ağustos - 15 Eylül 2026 arasında açık: kredi limitleri (20-30 milyon TL), Sanayi Sicil Belgesi, YODA, hızlı büyüyen işletme şartı, desteklenen giderler ve başvuru süreci.",
  keywords: [
    "KOSGEB Kapasite Geliştirme Destek Programı",
    "KOSGEB destekleri 2026",
    "KOSGEB 3. dönem başvurusu",
    "KOSGEB kredi faiz desteği",
    "KOBİ destekleri 2026",
    "KOSGEB başvuru şartları",
    "KOSGEB kredi limiti",
    "Sanayi Sicil Belgesi nasıl alınır",
    "YODA Yalın Olgunluk Değerlendirme Analizi",
    "hızlı büyüyen işletme tanımı",
    "üreten KOBİ desteği",
    "KOSGEB Bilgi Sistemi başvuru",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="KOSGEB Kapasite Geliştirme Destek Programı 2026: Kimler Başvurabilir, Destek Tutarları ve Gerekli Belgeler"
      description="3. dönem başvuruları 22 Ağustos - 15 Eylül 2026 arasında açık: kredi limitleri, Sanayi Sicil Belgesi, YODA, hızlı büyüyen işletme şartı ve desteklenen giderler dahil programın tüm detayları."
      category="KOSGEB • DEVLET DESTEKLERİ • 2026"
      date="2026"
      readTime="16 Dakika"
      slug="kosgeb-kapasite-gelistirme-destek-programi-2026"
    >
        <div className="mb-10 rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
          <p className="text-lg font-semibold text-green-800">
            🟢 Güncelleme (24 Ağustos 2026): Programın 2026 yılı 3. başvuru
            dönemi 22 Ağustos 2026&apos;da başladı, son başvuru tarihi 15 Eylül
            2026. Rehbere Sanayi Sicil Belgesi, YODA ve hızlı büyüyen işletme
            tanımını içeren yeni bir bölüm (Bölüm 3) eklendi; kredi üst limiti
            tablosu da KOSGEB&apos;in resmî destek sayfası ve Başvuru
            Kılavuzu&apos;yla teyit edilerek düzeltildi.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            KOSGEB&apos;in 2025 yılında hayata geçirdiği Kapasite Geliştirme
            Destek Programı, üretim kapasitesini büyütmek, dijital dönüşümünü
            hızlandırmak ve büyük işletmelerin tedarik zincirinde güçlü bir yer
            edinmek isteyen KOBİ&apos;ler için 2026 itibarıyla en kapsamlı
            finansman araçlarından biri hâline geldi. Programın mekanizması
            klasik hibe desteklerinden farklı işlediği için birçok işletme
            sahibi kredi limitini, hangi belgelerin zorunlu olduğunu ve
            başvuru takvimini doğru bilmiyor.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Program nasıl çalışıyor, hibe mi kredi mi?</li>
            <li>✔ Kimler başvurabilir, hangi sektörler kapsam dışı?</li>
            <li>✔ Sanayi Sicil Belgesi, YODA ve hızlı büyüyen işletme şartı nedir, nasıl karşılanır?</li>
            <li>✔ Kredi ve faiz/kâr payı desteği üst limitleri</li>
            <li>✔ Desteklenen gider kalemleri</li>
            <li>✔ 2026 başvuru dönemleri ve güncel takvim</li>
            <li>✔ Adım adım başvuru süreci</li>
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
              1. Program Nedir, Neden Önemli?
            </Link>
            <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Kimler Başvurabilir?
            </Link>
            <Link href="#belgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Gerekli Belgeler ve Ön Şartlar
            </Link>
            <Link href="#tutarlar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Kredi ve Destek Tutarları
            </Link>
            <Link href="#ornekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. Örnek Senaryolar
            </Link>
            <Link href="#giderler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Desteklenen Gider Kalemleri
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. 2026 Başvuru Dönemleri
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. Adım Adım Başvuru Süreci
            </Link>
            <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Dikkat Edilmesi Gerekenler
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              11. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. BÖLÜM */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Program Nedir, Neden Önemli?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Kapasite Geliştirme Destek Programı, KOSGEB&apos;in üretim yapan ve
            belirli hizmet sektörlerinde faaliyet gösteren KOBİ&apos;lerin
            verimliliğini, üretim kapasitesini, dayanıklılığını ve kurumsal
            yapısını güçlendirmek amacıyla yürüttüğü bir finansman
            programıdır. Program, doğrudan hibe modelinden farklı olarak
            <strong> kredi + faiz/kâr payı desteği</strong> mantığıyla çalışır:
            işletme, KOSGEB ile protokol imzalamış bir banka veya finans
            kuruluşundan kredi kullanır, taksitlerini öderken kredi
            faizinin/kâr payının belirli bir puanlık kısmını KOSGEB geri
            ödemesiz olarak işletmeye öder.
          </p>
          <div className="my-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              📌 Programın Öne Çıkan Amaçları
            </h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ KOBİ&apos;lerin ölçek büyütme yatırımlarını finanse etmek</li>
              <li>✔ Makine-teçhizat ve dijital dönüşüm yatırımlarını hızlandırmak</li>
              <li>✔ Büyük işletmelerin tedarik zincirindeki KOBİ&apos;leri güçlendirmek</li>
              <li>✔ Nitelikli personel istihdamını ve kurumsallaşmayı desteklemek</li>
              <li>✔ İşletme sermayesi ihtiyacına düşük maliyetli finansman sağlamak</li>
            </ul>
          </div>
          <p className="leading-8 text-gray-700">
            KOSGEB&apos;in kendi açıklamalarına göre, 2025 yılında uygulamaya
            konulan program kapsamında bugüne kadar binlerce KOBİ&apos;ye
            milyarlarca TL tutarında finansmana erişim imkânı sağlanmış
            olması, programın klasik KOSGEB hibelerine kıyasla çok daha
            yüksek bütçeli yatırım ihtiyaçlarına da cevap verdiğini
            göstermektedir.
          </p>
        </section>

        {/* 2. KİMLER BAŞVURABİLİR */}
        <section id="kimler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Kimler Başvurabilir, Kimler Başvuramaz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programa başvuru şartları hem işletmenin ölçeğine hem de faaliyet
            gösterdiği sektöre göre belirlenmiştir. Başvuru öncesi aşağıdaki
            kriterlerin tamamının sağlanması gerekir.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Başvuru Şartları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Limited veya Anonim Şirket statüsünde olmak</li>
                <li>✔ KOBİ Bilgi Sistemi&apos;ne kayıtlı ve İşletme Beyanı güncel olmak</li>
                <li>✔ Küçük veya orta ölçekli işletme sınıfında olmak</li>
                <li>✔ İlgili NACE kodlarında faaliyet göstermek</li>
                <li>✔ &quot;Hızlı büyüyen işletme&quot; tanımına girmek (bkz. Bölüm 3) veya istisna kriterlerinden birini sağlamak</li>
                <li>✔ NACE Kısım C – İmalat&apos;taysa Sanayi Sicil Belgesi ve YODA raporuna sahip olmak (bkz. Bölüm 3)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-red-700">
                ❌ Başvuramayacak Yapılar
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>❌ Mikro ölçekli işletmeler</li>
                <li>❌ Şahıs firmaları / şahıs işletmeleri</li>
                <li>❌ Kapsam dışı NACE kodlarında faaliyet gösterenler</li>
                <li>❌ Programdan daha önce bir kez yararlanmış işletmeler</li>
                <li>❌ Dernek, vakıf gibi tüzel kişiler</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏭 Hangi Sektörler Kapsamda?
            </h3>
            <p className="mb-6 leading-8 text-gray-700">
              Program, ağırlıklı olarak imalat sanayii ile teknoloji ve
              bilişim odaklı hizmet sektörlerini hedefler. Kapsamdaki temel
              NACE bölümleri şunlardır:
            </p>
            <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6">
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li><strong>Kısım C</strong> – İmalat <span className="text-sm text-gray-500">(Sanayi Sicil Belgesi ve YODA şartı geçerli)</span></li>
                <li><strong>61</strong> – Telekomünikasyon</li>
                <li><strong>62</strong> – Bilgisayar Programlama, Danışmanlık ve İlgili Faaliyetler</li>
                <li><strong>63</strong> – Bilişim Altyapısı, Veri İşleme, Barındırma ve Diğer Bilgi Hizmeti Faaliyetleri</li>
                <li><strong>72</strong> – Bilimsel Araştırma ve Geliştirme Faaliyetleri</li>
              </ul>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              İşletmenin ölçek sınıfı ve sektör uygunluğu, başvuru formunun
              işletme tarafından ilk onaylandığı tarihteki KOBİ Bilgi Sistemi
              kayıtlarına göre belirlenir; onay tarihinden sonra oluşan sınıf
              değişiklikleri değerlendirmeye alınmaz.
            </p>
          </div>
        </section>

        {/* 3. GEREKLİ BELGELER VE ÖN ŞARTLAR */}
        <section id="belgeler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Gerekli Belgeler ve Ön Şartlar
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kapasite Geliştirme Destek Programı&apos;nda birçok işletmenin
            başvuru anında zorlandığı asıl konu genellikle kredi tutarı değil,
            başvuru formunu onaylamadan önce hazır olması gereken şu dört
            unsurdur: hızlı büyüyen işletme şartı, Sanayi Sicil Belgesi, YODA
            raporu ve (proje amacı dijital dönüşümse) dijital olgunluk
            değerlendirmesi. Bu belgelerden herhangi biri eksikse başvuru ya
            hiç onaylanamaz ya da eksik NACE kodundaki işletmeler için
            sistemde ilerlemez.
          </p>

          <div className="space-y-10">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🚀 a) &quot;Hızlı Büyüyen İşletme&quot; Nedir, Nasıl Hesaplanır?
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                Bu, programın en çok yanlış anlaşılan şartıdır. KOSGEB&apos;in
                resmî Başvuru Kılavuzu&apos;na göre hızlı büyüyen işletme;{" "}
                <strong>
                  hesaplamaya esas başlangıç yılında en az 10 çalışanı (3.600
                  prim gün) olan ve üç yıllık periyotta istihdam veya net
                  satışlarında yıllık ortalama %10 ve üzerinde büyüme
                  gösteren
                </strong>{" "}
                işletme olarak tanımlanır. Hesaplamada iki teknik detay
                belirleyicidir:
              </p>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Hesaplama, işletmenin ortak/bağlı işletmeleri dikkate alınmaksızın <strong>yalnızca başvuru sahibi işletmenin kendi verileri</strong> üzerinden yapılır.</li>
                <li>Net satış verileri, enflasyondan arındırmak için <strong>GSYH Deflatörü</strong> ile düzeltilir.</li>
                <li>Başlangıç yılı ve karşılaştırma periyodu her başvuru dönemi için KOSGEB tarafından yeniden belirlenir (örneğin 2026/2. dönem için başlangıç yılı 2022, veriler 2022-2025 alınmıştı) — bu nedenle 3. dönem için geçerli baz yılı, başvuru öncesinde KOBİ Bilgi Sistemi&apos;ndeki dönem duyurusundan teyit edilmelidir.</li>
              </ul>
              <div className="mt-6 rounded-xl border-l-4 border-green-500 bg-green-50 p-6">
                <p className="font-semibold text-green-800">
                  Bu şart aranmayan iki istisna:
                </p>
                <ul className="ml-6 mt-2 list-disc space-y-2 text-gray-700 marker:text-green-600">
                  <li>Başvuru formunun ilk onaylandığı tarih itibarıyla geçerli bir <strong>Teknogirişim Rozeti</strong>&apos;ne sahip olmak,</li>
                  <li>Tedarikçi geliştirmeye yönelik KOSGEB&apos;in belirlediği sektörlerde, KOSGEB ile paydaş arasında imzalanan protokol kapsamında bildirilen işletmeler arasında yer almak.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🏭 b) Sanayi Sicil Belgesi Nedir, Nasıl Alınır?
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                Sanayi Sicil Belgesi, üretim faaliyeti yürüten işletmelerin
                T.C. Sanayi ve Teknoloji Bakanlığı nezdindeki sanayi siciline
                kayıtlı olduğunu gösteren resmî belgedir. Kapasite Geliştirme
                Programı&apos;nda yalnızca <strong>NACE Kısım C – İmalat</strong>{" "}
                sektöründeki başvuru sahiplerinden istenir; belgeye sahip
                işletmelerin bilgileri başvuru ekranına otomatik olarak
                gelir, ayrıca dosya yüklemeye gerek yoktur.
              </p>
              <p className="mb-3 font-semibold text-gray-800">Belgesi olmayan bir imalatçı nasıl alır?</p>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Başvuru, <strong>e-Devlet</strong> veya Sanayi ve Teknoloji Bakanlığı&apos;nın{" "}
                  <a href="https://sanayisicil.sanayi.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">Sanayi Sicil Bilgi Sistemi</a>{" "}
                  üzerinden, işletme yetkilisi tarafından elektronik ortamda yapılır.
                </li>
                <li>Sanayi Sicil Beyannamesi, (faaliyette bulunulan yıl için) yıllık işletme cetveli ve anket formunun eksiksiz doldurulması gerekir.</li>
                <li>Süreç tamamen elektronik yürütülür; belge onaylandıktan sonra KOSGEB Bilgi Sistemi&apos;ne otomatik yansır.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Kaynak: <a href="https://sanayisicil.sanayi.gov.tr" target="_blank" rel="noopener noreferrer" className="underline">Sanayi Sicil Bilgi Sistemi</a> ve KOSGEB Kapasite Geliştirme Destek Programı Başvuru Kılavuzu.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                📊 c) YODA (Yalın Olgunluk Değerlendirme Analizi) Nedir, Nasıl Alınır?
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                YODA, bir işletmenin yalın üretim anlayışını benimseme,
                uygulama ve geliştirme seviyesini ölçen saha bazlı bir analiz
                raporudur. Kapasite Geliştirme Programı&apos;nda, tıpkı
                Sanayi Sicil Belgesi gibi, yalnızca <strong>NACE Kısım C –
                İmalat</strong> sektöründeki işletmelerden istenir; rapor
                tarihinin ilan edilen son başvuru tarihinden önce olması
                şarttır.
              </p>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Analiz, yalnızca <strong>Sanayi ve Teknoloji Bakanlığı ve KOSGEB tarafından yetkilendirilmiş Yalın Dönüşüm Danışmanları</strong> tarafından yapılabilir; danışman listesine KOSGEB&apos;in İşletme Geliştirme Destek Programı sayfası üzerinden ulaşılır.</li>
                <li>Süreç bir saha ziyaretini içerir: danışman işletmenin yalın üretim bilgi/birikimini ve varsa uygulamalarını yerinde inceleyip puanlar; sonuçlar YODA Raporu (YODAR) olarak KOSGEB sistemine yüklenir.</li>
                <li>İşletme büyüklüğüne göre değişmekle birlikte süreç genellikle birkaç hafta sürer.</li>
                <li>Raporda ortaya çıkan ihtiyaca uygun Model Fabrika hizmetlerine (13 model fabrikadan biri üzerinden) proje süresi içinde başlanması da programın izleme sürecinin bir parçasıdır.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Kaynak: KOSGEB Kapasite Geliştirme Destek Programı Başvuru Kılavuzu (v2.0) ve KOSGEB resmî destek sayfası.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                💻 d) Dijital Olgunluk Değerlendirmesi Nedir?
              </h3>
              <p className="mb-4 leading-8 text-gray-700">
                Dijital olgunluk değerlendirmesi, bir işletmenin üretim,
                yönetim ve veri süreçlerindeki dijitalleşme seviyesini ölçen
                bir analizdir ve KOSGEB&apos;in Model Fabrika/Dijital
                Dönüşüm Merkezleri ağı ile KOBİ Dijital Dönüşüm Destek
                Programı ekosisteminde önemli bir yer tutar.
              </p>
              <div className="rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
                <p className="leading-8 text-gray-700">
                  <strong>Önemli netleştirme:</strong> KOSGEB&apos;in
                  Kapasite Geliştirme Destek Programı için yürürlükteki
                  Başvuru Kılavuzu&apos;nda (v2.0), Sanayi Sicil Belgesi ve
                  YODA&apos;nın aksine, ayrı ve zorunlu bir &quot;dijital
                  olgunluk değerlendirme raporu&quot; şartı bu kılavuzda yer
                  almamaktadır. Projeniz dijital dönüşüm yatırımı içeriyorsa,
                  başvuru öncesinde bu konudaki güncel şartı KOBİ Bilgi
                  Sistemi&apos;ndeki dönem duyurusundan veya KOSGEB&apos;in
                  bölge müdürlüğünden teyit etmenizi öneririz — Model
                  Fabrikaların dijital dönüşüm hizmetleri, proje kapsamına
                  YODA sürecinin bir uzantısı olarak da girebilmektedir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TUTARLAR */}
        <section id="tutarlar" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Kredi ve Destek Tutarları Ne Kadar?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Programın finansman mantığı; işletmenin protokollü bir banka veya
            finans kuruluşundan kredi kullanması, KOSGEB&apos;in ise bu
            kredinin faiz veya kâr payı giderinin belirli bir puanlık kısmını
            geri ödemesiz olarak işletmeye ödemesi üzerine kuruludur. Yani
            kredinin anaparası işletme tarafından geri ödenirken, faiz
            yükünün önemli bir kısmı devlet tarafından karşılanır.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kalem</th>
                  <th className="p-5">Tutar / Oran</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti (genel)</td>
                  <td className="p-5">20.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti — EYDEP-A (savunma/havacılık/uzay tedarikçi geliştirme)</td>
                  <td className="p-5">30.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti — EYDEP-B</td>
                  <td className="p-5">27.500.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Üst Limiti — EYDEP-C</td>
                  <td className="p-5">25.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kredi Alt Limiti</td>
                  <td className="p-5">1.000.000 TL</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Faiz / Kâr Payı Destek Puanı</td>
                  <td className="p-5">20 puan (geri ödemesiz)</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Azami Kredi Vadesi</td>
                  <td className="p-5">36 ay (3&apos;er aylık eşit taksitler)</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold">Azami Proje Süresi</td>
                  <td className="p-5">24 ay</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <p className="leading-8 text-gray-700">
              ⚠️ <strong>Önemli düzeltme:</strong> Bazı haber kaynakları 3.
              dönem duyurusunu &quot;30 milyon TL&apos;ye kadar destek&quot;
              başlığıyla verdi; bu, yalnızca savunma/havacılık/uzay alanında
              tedarikçi geliştirmeye yönelik iş birliği yapan ve EYDEP
              sertifikasına sahip işletmeler için geçerli üst sınırdır.
              KOSGEB&apos;in resmî destek sayfasında ve Başvuru
              Kılavuzu&apos;nda (2026/3. dönem itibarıyla) genel kredi üst
              limiti hâlâ <strong>20.000.000 TL</strong> olarak yer alıyor.
              EYDEP sertifika seviyesi, işletmenin başvurusunu ilk onayladığı
              tarihte geçerli olmalıdır; onay sonrası seviye değişiklikleri
              dikkate alınmaz.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Faiz Desteği Nasıl Ödeniyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Destek, tek seferde peşin ödenmez. İşletme krediyi kullanır,
              taksit ödemelerini gerçekleştirdikçe ve şartları sağladığı
              sürece KOSGEB, ilgili taksite denk gelen faiz/kâr payı desteği
              tutarını işletmenin hesabına geri ödemesiz olarak aktarır.
              Destek tutarı, KOSGEB&apos;in yayımladığı Destek Hesaplama
              Tablosu&apos;na göre; onaylanan gider tutarı, destek puanı ve
              kredi vadesi birlikte değerlendirilerek belirlenir. Proje
              kapsamında tek bir finansal kuruluştan kredi kullanılabilir;
              birden fazla banka/finans kuruluşundan eş zamanlı finansman
              sağlanamaz.
            </p>
          </div>
        </section>

        {/* 5. ÖRNEK SENARYOLAR */}
        <section id="ornekler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. Örnek Senaryolar: Onaydan Geri Ödemeye
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Öncelikle mekanizmayı netleştirelim, çünkü en çok kafa karıştıran
            nokta burası: KOSGEB, kredinin faiz/kâr payı oranının{" "}
            <strong>en fazla 20 puanlık kısmını</strong> karşılar. Bankanın
            uyguladığı gerçek faiz oranı 20 puanın{" "}
            <strong>üzerindeyse</strong>, aşan kısmı işletme kendi öder —
            yani işletme normalde hem anaparayı hem de bu faiz farkını geri
            öder. Aşağıdaki örnekler, KOSGEB&apos;in resmî{" "}
            <em>Destek Hesaplama Tablosu</em>&apos;ndaki taksit formülü
            (36 ay vade, 3&apos;er aylık 12 eşit taksit, sabit taksitli
            anüite hesaplaması) kullanılarak üretilmiş{" "}
            <strong>kurgusal örneklerdir</strong>, gerçek bir müşteri dosyası
            değildir.
          </p>

          <div className="mb-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="mb-2 text-xl font-bold text-[#071A2F]">
              📈 Güncel Faiz Ortamı (Ağustos 2026)
            </h3>
            <p className="leading-8 text-gray-700">
              TCMB politika faizi (bir hafta vadeli repo) şu an <strong>%37</strong>,
              gecelik borç verme faizi %40 seviyesinde. Piyasadaki ticari/KOBİ
              kredisi teklifleri aylık yaklaşık %3-%3,9 bandında seyrediyor —
              yıllığa vurulduğunda kabaca %40-50 aralığına denk geliyor. Bu,
              KOSGEB&apos;in karşıladığı 20 puanın <strong>oldukça
              üzerinde</strong>; dolayısıyla aşağıdaki örneklerde işletmenin
              anaparanın yanında ciddi bir faiz farkını da ödediğini
              göreceksiniz. (Güncel bankaya özel teklifler değişkenlik
              gösterir; başvuru anında kendi bankanızdan net oran almanız
              gerekir.)
            </p>
          </div>

          <div className="mb-14 rounded-2xl border-2 border-[#071A2F] bg-white p-8 shadow-sm">
            <h3 className="mb-2 text-2xl font-bold text-[#071A2F]">
              📖 Hikaye: 10 Milyon TL&apos;lik Bir Kredi Baştan Sona Nasıl İşliyor?
            </h3>
            <p className="mb-8 leading-8 text-gray-700">
              Bir işletme KOSGEB&apos;e başvurdu, Kurul{" "}
              <strong>10.000.000 TL</strong> kredi ve <strong>20 puan</strong>{" "}
              destekle onay verdi. Sonrasında gerçekte ne oluyor? Aşağıda,
              KOSGEB&apos;in kendi Başvuru Kılavuzu&apos;ndaki süreç akışına
              dayanan adım adım anlatım var.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">1</div>
                <div>
                  <h4 className="text-lg font-bold text-[#071A2F]">Banka kredinin tamamını hesaba yatırıyor mu?</h4>
                  <p className="mt-2 leading-7 text-gray-700">
                    Değişir. KOSGEB Kılavuzu&apos;na göre, Kurul&apos;un onayladığı
                    toplam tutar, talebe göre <strong>tek seferde</strong> veya{" "}
                    <strong>parçalar hâlinde</strong> kullandırılabilir. Tek bir
                    kalem olarak onaylanan bir gider (örneğin tek bir CNC
                    tezgâhı) için kredi tek seferde ve tek sözleşmeyle
                    kullanılmak zorundadır. Makine-teçhizat/kalıp dışındaki
                    gider türleri (personel, hizmet alımı, işletme sermayesi
                    gibi) ise en fazla <strong>8 parçaya</strong> bölünerek
                    ihtiyaç doğrultusunda kullandırılabilir. Yani 10 milyon
                    TL&apos;lik bir proje, örneğin 6 milyonu makine alımında tek
                    seferde, kalan 4 milyonu ise 3-4 ayrı kullanımda hesaba
                    geçebilir.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">2</div>
                <div>
                  <h4 className="text-lg font-bold text-[#071A2F]">İşletme ne zaman ödemeye başlıyor, ayda kaç ödeyecek, kaç yıl sürecek?</h4>
                  <p className="mt-2 leading-7 text-gray-700">
                    Kredi kullandırıldıktan sonra geri ödeme takvimi başlar.
                    Taksitler <strong>aylık değil, 3&apos;er aylık dönemler
                    hâlinde</strong> ve eşit tutarlı olarak ödenir; toplam vade
                    36 ay (<strong>3 yıl</strong>), yani <strong>12
                    taksit</strong>. Banka güncel piyasa faiziyle (aylık ~%3,5,
                    3 aylık dönemde ~%10,5) çalışıyorsa, 10 milyon TL&apos;lik
                    bu kredide işletmenin bankaya her 3 ayda bir ödeyeceği
                    taksit <strong>≈1.503.767 TL</strong> olur — aylığa
                    bölündüğünde ortalama <strong>≈501.256 TL/ay</strong>&apos;a
                    denk gelir (gerçekte ödeme 3 ayda bir tek kalemde yapılır,
                    her ay ayrı ayrı değil).
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#071A2F] text-lg font-bold text-white">3</div>
                <div>
                  <h4 className="text-lg font-bold text-[#071A2F]">KOSGEB 20 puanlık kısmı ne zaman, nasıl geri ödüyor?</h4>
                  <p className="mt-2 leading-7 text-gray-700">
                    Burası en çok kafa karıştıran adım. KOSGEB, taksiti{" "}
                    <strong>önceden bankaya aktarmıyor</strong>. Mekanizma
                    tersine işliyor:
                  </p>
                  <ol className="ml-6 mt-3 list-decimal space-y-2 text-gray-700 marker:font-bold marker:text-orange-500">
                    <li>İşletme, ilgili 3 aylık taksitin <strong>tamamını kendi kaynağından bankaya öder</strong> (anapara + tam faiz).</li>
                    <li>KOSGEB&apos;in atadığı KOBİ Uzmanı, o dönem için <strong>dönemsel izleme</strong> yapar; projenin gidişatında olumsuz bir durum yoksa izleme formu olumlu kaydedilir.</li>
                    <li>İşletme, KOSGEB sistemi üzerinden <strong>ödeme (destek) talebinde</strong> bulunur ve o döneme ait harcamaları kanıtlayan belgeleri (fatura, SGK prime esas kazanç tablosu vb.) yükler.</li>
                    <li>KOBİ Uzmanı belgeleri onaylar; o ana kadarki <strong>kümülatif</strong> uygun harcama tutarına göre Destek Hesaplama Tablosu&apos;ndan destek tutarı hesaplanır (önceki dönemlerde ödenen düşülerek).</li>
                    <li>Onaylanan destek tutarı, işletmenin hesabına <strong>geri ödemesiz olarak aktarılır</strong> (iade edilir).</li>
                  </ol>
                  <p className="mt-3 leading-7 text-gray-700">
                    Yani cevap: <strong>evet, taksit taksit</strong> ödeniyor —
                    ama işletme önce kendi nakit akışıyla taksidin tamamını
                    bankaya ödüyor, KOSGEB&apos;in payı birkaç hafta sürebilen
                    izleme/onay sürecinin ardından işletmeye{" "}
                    <strong>geri iade</strong> ediliyor. Bu nedenle işletmenin,
                    her taksit döneminde geçici olarak taksidin tamamını
                    karşılayacak nakit akışına sahip olması gerekir.
                  </p>
                  <div className="mt-4 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                    <p className="text-sm leading-7 text-gray-700">
                      ⚠️ Erken kapatma yapılan taksitler için destek ödenmez;
                      yeniden yapılandırılan finansman için de destek
                      kesilir (ama izlemeler devam eder). Vade uzatımı
                      yapılamaz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="mb-4 mt-10 text-xl font-bold text-[#071A2F]">
              10 Milyon TL&apos;lik Kredinin 3 Yıllık Taksit Tablosu
            </h4>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#071A2F] text-white">
                  <tr>
                    <th className="p-3">Taksit</th>
                    <th className="p-3">Ay</th>
                    <th className="p-3">Bankaya Ödenen (Toplam Taksit)</th>
                    <th className="p-3">Bunun İçindeki Faiz</th>
                    <th className="p-3">KOSGEB&apos;in İade Ettiği (20 Puan)</th>
                    <th className="p-3">İşletmenin Net Faiz Yükü</th>
                    <th className="p-3">Anapara</th>
                    <th className="p-3">Kalan Anapara</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">1</td><td className="p-3">3</td><td className="p-3">1.503.767 TL</td><td className="p-3">1.050.000 TL</td><td className="p-3">500.000 TL</td><td className="p-3">550.000 TL</td><td className="p-3">453.767 TL</td><td className="p-3">9.546.233 TL</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3">2</td><td className="p-3">6</td><td className="p-3">1.503.767 TL</td><td className="p-3">1.002.354 TL</td><td className="p-3">477.312 TL</td><td className="p-3">525.043 TL</td><td className="p-3">501.413 TL</td><td className="p-3">9.044.820 TL</td></tr>
                  <tr className="border-b"><td className="p-3">3</td><td className="p-3">9</td><td className="p-3">1.503.767 TL</td><td className="p-3">949.706 TL</td><td className="p-3">452.241 TL</td><td className="p-3">497.465 TL</td><td className="p-3">554.061 TL</td><td className="p-3">8.490.758 TL</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3">4</td><td className="p-3">12</td><td className="p-3">1.503.767 TL</td><td className="p-3">891.530 TL</td><td className="p-3">424.538 TL</td><td className="p-3">466.992 TL</td><td className="p-3">612.238 TL</td><td className="p-3">7.878.520 TL</td></tr>
                  <tr className="border-b"><td className="p-3">5</td><td className="p-3">15</td><td className="p-3">1.503.767 TL</td><td className="p-3">827.245 TL</td><td className="p-3">393.926 TL</td><td className="p-3">433.319 TL</td><td className="p-3">676.523 TL</td><td className="p-3">7.201.997 TL</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3">6</td><td className="p-3">18</td><td className="p-3">1.503.767 TL</td><td className="p-3">756.210 TL</td><td className="p-3">360.100 TL</td><td className="p-3">396.110 TL</td><td className="p-3">747.558 TL</td><td className="p-3">6.454.440 TL</td></tr>
                  <tr className="border-b"><td className="p-3">7</td><td className="p-3">21</td><td className="p-3">1.503.767 TL</td><td className="p-3">677.716 TL</td><td className="p-3">322.722 TL</td><td className="p-3">354.994 TL</td><td className="p-3">826.051 TL</td><td className="p-3">5.628.388 TL</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3">8</td><td className="p-3">24</td><td className="p-3">1.503.767 TL</td><td className="p-3">590.981 TL</td><td className="p-3">281.419 TL</td><td className="p-3">309.561 TL</td><td className="p-3">912.787 TL</td><td className="p-3">4.715.602 TL</td></tr>
                  <tr className="border-b"><td className="p-3">9</td><td className="p-3">27</td><td className="p-3">1.503.767 TL</td><td className="p-3">495.138 TL</td><td className="p-3">235.780 TL</td><td className="p-3">259.358 TL</td><td className="p-3">1.008.629 TL</td><td className="p-3">3.706.972 TL</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-3">10</td><td className="p-3">30</td><td className="p-3">1.503.767 TL</td><td className="p-3">389.232 TL</td><td className="p-3">185.349 TL</td><td className="p-3">203.883 TL</td><td className="p-3">1.114.535 TL</td><td className="p-3">2.592.437 TL</td></tr>
                  <tr className="border-b"><td className="p-3">11</td><td className="p-3">33</td><td className="p-3">1.503.767 TL</td><td className="p-3">272.206 TL</td><td className="p-3">129.622 TL</td><td className="p-3">142.584 TL</td><td className="p-3">1.231.562 TL</td><td className="p-3">1.360.876 TL</td></tr>
                  <tr className="bg-gray-50 font-semibold"><td className="p-3">12</td><td className="p-3">36</td><td className="p-3">1.503.767 TL</td><td className="p-3">142.892 TL</td><td className="p-3">68.044 TL</td><td className="p-3">74.848 TL</td><td className="p-3">1.360.876 TL</td><td className="p-3">0 TL</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase text-gray-500">Bankaya Toplam Ödenen</div>
                <div className="mt-1 text-xl font-bold text-[#071A2F]">18.045.209 TL</div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase text-gray-500">KOSGEB&apos;in Toplam İadesi</div>
                <div className="mt-1 text-xl font-bold text-green-700">3.831.052 TL</div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase text-gray-500">İşletmenin Net Faiz Yükü</div>
                <div className="mt-1 text-xl font-bold text-red-700">4.214.157 TL</div>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase text-gray-500">İşletmenin 3 Yılda Cepten Çıkanı</div>
                <div className="mt-1 text-xl font-bold text-red-700">14.214.157 TL</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              (10.000.000 TL anapara + 4.214.157 TL kendi ödediği faiz farkı.
              KOSGEB desteği olmasaydı işletme bankaya toplam faiz olarak
              8.045.209 TL ödeyecekti; 20 puanlık destek bu yükün
              yaklaşık %48&apos;ini karşılıyor.)
            </p>
          </div>

          <div className="space-y-10">
            {/* ÖRNEK 1 - İMALAT */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🏭 Örnek 1 — İmalat Sektörü (NACE C): Makine Yatırımı
              </h3>
              <p className="mb-5 leading-8 text-gray-700">
                Metal işleme yapan, Sanayi Sicil Belgesi ve YODA raporu hazır
                bir KOBİ, yeni bir CNC tezgâhı almak için başvuruyor. Kurul,
                projeyi <strong>6.000.000 TL</strong> kredi tutarı ve{" "}
                <strong>20 puan</strong> destekle onaylıyor. Banka, kredide
                (güncel piyasa ortalamasına yakın) aylık %3,5 — yani 3 aylık
                dönemde %10,5 — faiz uyguluyor.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">Onaylanan Kredi</div>
                  <div className="mt-1 text-xl font-bold text-[#071A2F]">6.000.000 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">3 Aylık Taksit (Bankaya)</div>
                  <div className="mt-1 text-xl font-bold text-[#071A2F]">902.260 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">Toplam KOSGEB Desteği</div>
                  <div className="mt-1 text-xl font-bold text-green-700">≈2.298.630 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">İşletmenin Cebinden Çıkan</div>
                  <div className="mt-1 text-xl font-bold text-red-700">≈8.528.490 TL</div>
                </div>
              </div>
              <div className="mt-6 overflow-x-auto rounded-xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#071A2F] text-white">
                    <tr>
                      <th className="p-3">Taksit</th>
                      <th className="p-3">Ne Zaman</th>
                      <th className="p-3">Bankaya Toplam Faiz</th>
                      <th className="p-3">KOSGEB Payı (20 puan)</th>
                      <th className="p-3">İşletmenin Faiz Farkı</th>
                      <th className="p-3">Kalan Anapara</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="p-3">1</td><td className="p-3">3. ay</td><td className="p-3">630.000 TL</td><td className="p-3">300.000 TL</td><td className="p-3">330.000 TL</td><td className="p-3">5.727.740 TL</td></tr>
                    <tr className="border-b"><td className="p-3">6</td><td className="p-3">18. ay</td><td className="p-3">453.726 TL</td><td className="p-3">216.060 TL</td><td className="p-3">237.666 TL</td><td className="p-3">3.872.664 TL</td></tr>
                    <tr><td className="p-3">12</td><td className="p-3">36. ay (son taksit)</td><td className="p-3">85.735 TL</td><td className="p-3">40.826 TL</td><td className="p-3">44.909 TL</td><td className="p-3">0 TL</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                İşletmenin cebinden çıkan toplam (≈8.528.490 TL) = 6.000.000 TL
                anapara + ≈2.528.490 TL kendi ödediği faiz farkı. KOSGEB&apos;in
                20 puanlık desteği (≈2.298.630 TL) olmasaydı, işletme bankaya
                toplam ≈10.827.130 TL (≈4.827.130 TL faiz) ödeyecekti — yani
                destek, toplam faiz yükünün yaklaşık %48&apos;ini karşılıyor.
              </p>
            </div>

            {/* ÖRNEK 2 - YAZILIM */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                💻 Örnek 2 — Bilgisayar Programlama (NACE 62): Yazılım Geliştirme
              </h3>
              <p className="mb-5 leading-8 text-gray-700">
                Kurumsal yazılım geliştiren, hızlı büyüyen işletme tanımını
                sağlayan bir KOBİ, ürün ekibini büyütmek için{" "}
                <strong>2.000.000 TL</strong> kredi ve 20 puan destekle
                onaylanıyor; banka aynı şekilde 3 aylık dönemde %10,5 faiz
                uyguluyor.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">Onaylanan Kredi</div>
                  <div className="mt-1 text-xl font-bold text-[#071A2F]">2.000.000 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">3 Aylık Taksit (Bankaya)</div>
                  <div className="mt-1 text-xl font-bold text-[#071A2F]">300.753 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">Toplam KOSGEB Desteği</div>
                  <div className="mt-1 text-xl font-bold text-green-700">≈766.210 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">İşletmenin Cebinden Çıkan</div>
                  <div className="mt-1 text-xl font-bold text-red-700">≈2.842.830 TL</div>
                </div>
              </div>
              <p className="mt-5 leading-8 text-gray-700">
                Kredi alt limiti (1.000.000 TL) ile genel üst limit (20.000.000
                TL) arasındaki her tutar aynı 12 taksitlik/36 aylık yapıda
                değerlendirilir; sadece taksit, destek ve faiz farkı tutarları
                kredi büyüklüğüyle orantılı değişir.
              </p>
            </div>

            {/* ÖRNEK 3 - SAVUNMA */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🛰️ Örnek 3 — Savunma Sanayi Tedarikçisi (EYDEP-B): Kapasite Büyütme
              </h3>
              <p className="mb-5 leading-8 text-gray-700">
                Savunma sanayiine tedarikçi geliştirme protokolü kapsamında
                bildirilen ve EYDEP-B sertifikasına sahip bir imalatçı, üretim
                hattını büyütmek için başvuruyor. Bu kategoride kredi üst
                limiti 27.500.000 TL&apos;ye kadar çıkabiliyor; Kurul bu
                örnekte <strong>15.000.000 TL</strong> kredi ve 20 puan
                destekle onaylıyor, banka yine 3 aylık dönemde %10,5 faiz
                uyguluyor.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">Onaylanan Kredi</div>
                  <div className="mt-1 text-xl font-bold text-[#071A2F]">15.000.000 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">3 Aylık Taksit (Bankaya)</div>
                  <div className="mt-1 text-xl font-bold text-[#071A2F]">2.255.651 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">Toplam KOSGEB Desteği</div>
                  <div className="mt-1 text-xl font-bold text-green-700">≈5.746.580 TL</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 text-center">
                  <div className="text-xs font-semibold uppercase text-gray-500">İşletmenin Cebinden Çıkan</div>
                  <div className="mt-1 text-xl font-bold text-red-700">≈21.321.240 TL</div>
                </div>
              </div>
              <div className="mt-6 overflow-x-auto rounded-xl border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#071A2F] text-white">
                    <tr>
                      <th className="p-3">Taksit</th>
                      <th className="p-3">Ne Zaman</th>
                      <th className="p-3">Bankaya Toplam Faiz</th>
                      <th className="p-3">KOSGEB Payı (20 puan)</th>
                      <th className="p-3">İşletmenin Faiz Farkı</th>
                      <th className="p-3">Kalan Anapara</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="p-3">1</td><td className="p-3">3. ay</td><td className="p-3">1.575.000 TL</td><td className="p-3">750.000 TL</td><td className="p-3">825.000 TL</td><td className="p-3">14.319.349 TL</td></tr>
                    <tr className="border-b"><td className="p-3">6</td><td className="p-3">18. ay</td><td className="p-3">1.134.315 TL</td><td className="p-3">540.150 TL</td><td className="p-3">594.165 TL</td><td className="p-3">9.681.660 TL</td></tr>
                    <tr><td className="p-3">12</td><td className="p-3">36. ay (son taksit)</td><td className="p-3">214.338 TL</td><td className="p-3">102.066 TL</td><td className="p-3">112.272 TL</td><td className="p-3">0 TL</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
              <p className="leading-8 text-gray-700">
                ⚠️ <strong>Bu bir yaklaşık hesaplamadır, kesin tablo
                değildir.</strong> KOSGEB&apos;in kendi Destek Hesaplama
                Tablosu&apos;nun 20 puanlık payı tam olarak nasıl ayırdığına
                dair (kalan anaparaya mı, orijinal tutara mı, hangi dönemsel
                bileşiğe göre uygulandığına dair) resmî kılavuzda ayrıntılı
                bir formül yayımlanmamış; yukarıdaki tablolar, kalan anapara
                üzerinden 20 puanlık payın ayrı hesaplandığı makul bir
                yaklaşımla üretilmiştir. Ayrıca gerçek başvurunuzda: (1)
                Kurul&apos;un onayladığı kredi tutarı talep ettiğinizden düşük
                çıkabilir, (2) bankanızın uyguladığı gerçek faiz/kâr payı
                oranı burada varsayılandan farklı olacaktır, (3) taksit
                tarihleri kredinin kullandırım tarihine göre kayar. Kesin
                rakamlar için bankanızın güncel teklifini KOSGEB&apos;in size
                özel Destek Hesaplama Tablosu&apos;na girmeniz gerekir.
              </p>
            </div>
          </div>
        </section>

        {/* 6. GİDERLER */}
        <section id="giderler" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Desteklenen Gider Kalemleri
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kurul tarafından onaylanan proje kapsamında kullandırılan kredi;
            hem yatırım hem de işletme sermayesi ihtiyaçlarını
            kapsayabilmektedir.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                ⚙️ Yatırım Giderleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Makine-teçhizat ve kalıp alımları</li>
                <li>Dijital dönüşüme yönelik yazılım giderleri</li>
                <li>Üretim kapasitesini artırıcı ekipman yatırımları</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                🧾 Hizmet Alım Giderleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Eğitim, danışmanlık ve yönderlik hizmetleri (YODA ve Model Fabrika hizmetleri dahil)</li>
                <li>Belgelendirme, test ve analiz hizmetleri</li>
                <li>Pazarlama ve tasarım hizmetleri</li>
                <li>Sınai mülkiyet hakları (patent, marka vb.)</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                👥 Personel Giderleri
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Nitelikli personel istihdamına yönelik giderler</li>
                <li>Kurumsal yapıyı güçlendirici danışmanlık kalemleri</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
                💰 İşletme Sermayesi
              </h3>
              <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
                <li>Projenin amacı ve kapsamına uygun işletme sermayesi ihtiyacı</li>
                <li>Kullandırım tutarına Kurul, proje niteliğine göre karar verir</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. 2026 Başvuru Dönemleri ve Güncel Durum
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Program, yıl içinde belirli başvuru dönemlerinde açılıp
            kapanmaktadır. 2026 yılı için KOSGEB tarafından ilan edilen
            dönemler şu şekildedir:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">1. Dönem</h3>
              <p className="text-gray-700">3 Şubat 2026 – 28 Şubat 2026</p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#071A2F]">2. Dönem</h3>
              <p className="text-gray-700">6 Haziran 2026 – 30 Haziran 2026</p>
            </div>
            <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-green-700">3. Dönem (Başvuru Açık)</h3>
              <p className="font-semibold text-gray-800">22 Ağustos 2026 – 15 Eylül 2026</p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              📅 Ağustos 2026 İtibarıyla Durum: Başvurular Açık
            </h3>
            <p className="leading-8 text-gray-700">
              Program 2026 yılında üçüncü kez başvuruya açıldı: 3. dönem
              başvuruları 22 Ağustos 2026&apos;da başladı ve son başvuru
              tarihi 15 Eylül 2026 olarak ilan edildi. KOSGEB&apos;in resmî
              destek sayfasında ve güncel Başvuru Kılavuzu&apos;nda genel
              kredi üst limiti 20 milyon TL, savunma/havacılık/uzay tedarikçi
              geliştirme projelerinde EYDEP sertifika seviyesine göre 25-30
              milyon TL olarak yer alıyor (bkz. Bölüm 4). Son başvuru
              tarihine yalnızca birkaç hafta kaldığı için proje dosyanızı,
              Sanayi Sicil Belgesi/YODA raporunuzu (imalat sektöründeyseniz)
              ve teklif almanız gereken banka görüşmelerini hızlı
              ilerletmeniz kritik önemde. Güncel duyurular KOSGEB&apos;in
              resmî internet sitesi ve KOBİ Bilgi Sistemi üzerinden
              yayımlanmaktadır.
            </p>
          </div>
        </section>

        {/* 8. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. Adım Adım Başvuru Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Başvuru süreci tamamen elektronik ortamda, KOBİ Bilgi Sistemi
            üzerinden yürütülür.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🖥️</div>
              <h3 className="text-xl font-bold">1. KOBİ Bilgi Sistemi Kaydı</h3>
              <p className="mt-3 text-sm text-gray-600">
                İşletme Beyanı&apos;nın güncel ve doğru olduğu teyit edilir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📎</div>
              <h3 className="text-xl font-bold">2. Ön Şartların Hazırlanması</h3>
              <p className="mt-3 text-sm text-gray-600">
                İmalat sektöründeyseniz Sanayi Sicil Belgesi ve YODA raporu son başvuru tarihinden önce alınır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">3. Proje Başvuru Formu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yatırım/işletme sermayesi ihtiyacı ve gider kalemleri detaylandırılır.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-xl font-bold">4. Kurul Değerlendirmesi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Uygun bulunan projeler için destek üst limiti ve puanı belirlenir.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🏦</div>
              <h3 className="text-xl font-bold">5. Banka ile Kredi Kullandırımı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Onaylanan tutar, protokollü finans kuruluşu üzerinden krediye dönüştürülür.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">💸</div>
              <h3 className="text-xl font-bold">6. Taksit Ödemesi ve Destek</h3>
              <p className="mt-3 text-sm text-gray-600">
                3&apos;er aylık taksitler ödendikçe faiz/kâr payı desteği işletmeye aktarılır.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              ⚠️ Başvuru Onayında Kritik Detay
            </h3>
            <p className="leading-8 text-gray-700">
              İlan edilen son başvuru tarihine kadar projesini KOBİ Bilgi
              Sistemi üzerinden onaylamayan işletmelerin başvurusu
              değerlendirmeye alınmaz. Bu nedenle formun eksiksiz
              doldurulması ve Bölüm 3&apos;teki belgelerin hazır olması
              kadar, son güne bırakılmadan sistem üzerinden onaylanması da
              başvurunun geçerliliği açısından belirleyicidir.
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
              <li>Bir işletme bu destek programından yalnızca <strong>bir kez</strong> yararlanabilir.</li>
              <li>Destek, hibe değil <strong>kredi + faiz/kâr payı desteği</strong> modelidir; kredinin anaparası işletme tarafından geri ödenir.</li>
              <li>NACE Kısım C – İmalat&apos;taki işletmeler için Sanayi Sicil Belgesi ve YODA raporu son başvuru tarihinden önce hazır olmalıdır; başvuru anında eksikse sistemde ilerlenemez.</li>
              <li>İşletme sınıfı (küçük/orta) ve sektör uygunluğu, başvurunun ilk onaylandığı tarihteki kayıtlara göre sabitlenir.</li>
              <li>Kredi kullandırımı, KOSGEB ile protokol imzalamış banka/finans kuruluşlarının kendi kredi değerlendirme süreçlerine de tabidir.</li>
              <li>Onaylanmayan veya proje kapsamı dışında kalan harcamalar için faiz/kâr payı desteği ödenmez.</li>
              <li>Güncel destek üst limitleri, puanları ve gider kalemleri için KOSGEB&apos;in yürürlükteki Uygulama Esasları ve Başvuru Kılavuzu esas alınmalıdır; bu tür programlarda üst limitler dönemden döneme güncellenebilir.</li>
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
                Şu anda başvuru dönemi açık mı?
              </h3>
              <p className="leading-8 text-gray-700">
                Evet. 2026 yılı 3. başvuru dönemi 22 Ağustos 2026&apos;da
                başladı ve 15 Eylül 2026&apos;da sona erecek. Bu tarihten
                sonra başvuru yapabilmek için KOSGEB&apos;in yeni bir dönem
                ilan etmesi gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kredi üst limiti gerçekten 30 milyon TL mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır, sadece belirli bir kategori için. Genel kredi üst
                limiti 20 milyon TL&apos;dir. 30 milyon TL yalnızca savunma,
                havacılık ve uzay alanında tedarikçi geliştirmeye yönelik iş
                birliği yapan ve EYDEP-A sertifikasına sahip işletmeler için
                geçerlidir (EYDEP-B: 27,5 milyon TL, EYDEP-C: 25 milyon TL).
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Sanayi Sicil Belgem yok, yine de başvurabilir miyim?
              </h3>
              <p className="leading-8 text-gray-700">
                NACE Kısım C – İmalat sektöründeyseniz bu belge zorunludur;
                ancak başvurudan önce e-Devlet veya Sanayi Sicil Bilgi
                Sistemi üzerinden hızlıca başvurup alabilirsiniz. İmalat dışı
                kapsamdaki NACE kodlarında (61, 62, 63, 72) faaliyet
                gösteriyorsanız bu belge aranmaz.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                &quot;Hızlı büyüyen işletme&quot; şartını sağlamıyorum, başvuramaz mıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                Teknogirişim Rozetiniz varsa veya KOSGEB&apos;in belirlediği
                sektörlerde tedarikçi geliştirme protokolü kapsamında
                bildirilen işletmeler arasındaysanız bu şarttan muafsınız.
                Bu iki istisnadan hiçbirini karşılamıyorsanız, ilgili dönem
                için başlangıç yılı ve büyüme oranı kriterlerini
                sağlamadan başvuru yapamazsınız.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Program hibe mi, kredi mi?
              </h3>
              <p className="leading-8 text-gray-700">
                İkisinin karışımı gibi çalışır. İşletme bankadan kredi
                kullanır ve anaparayı geri öder; KOSGEB ise kredinin
                faiz/kâr payı giderinin 20 puana kadar olan kısmını geri
                ödemesiz olarak işletmeye öder.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şahıs şirketleri başvurabilir mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. Programa yalnızca limited veya anonim şirket
                statüsündeki işletmeler başvurabilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Kredi hangi bankadan kullanılıyor?
              </h3>
              <p className="leading-8 text-gray-700">
                KOSGEB&apos;in protokol imzaladığı T.C. Ziraat Bankası,
                Türkiye Halk Bankası, Türkiye Vakıflar Bankası ve Ziraat
                Katılım Bankası&apos;ndan kullanılır; proje kapsamında
                yalnızca tek bir finansal kuruluştan kredi sağlanabilir.
                Kredi başvurusu, ilgili bankanın kendi değerlendirme
                kriterlerine de tabidir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Danışmanlık desteği almak zorunlu mu?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır, zorunlu değildir. Ancak proje başvuru formunun doğru
                kurgulanması, Sanayi Sicil Belgesi/YODA sürecinin zamanında
                yönetilmesi ve Kurul sürecinin doğru izlenmesi onay
                ihtimalini ve alınacak destek tutarını doğrudan
                etkilemektedir.
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
            KOSGEB Kapasite Geliştirme Destek Programı, üretim yapan ve
            teknoloji odaklı hizmet sektörlerinde faaliyet gösteren
            KOBİ&apos;ler için 20 milyon TL&apos;ye (EYDEP sertifikalı
            savunma/havacılık/uzay tedarikçilerinde 30 milyon TL&apos;ye)
            kadar kredi limiti ve 20 puana varan geri ödemesiz faiz
            desteğiyle klasik KOSGEB hibelerinin çok üzerinde bir finansman
            hacmi sunuyor. 2026 yılının 3. dönemi 15 Eylül 2026&apos;da
            kapanacağı için başvurusunu değerlendiren işletmelerin vakit
            kaybetmeden harekete geçmesi gerekiyor. Programın kredi temelli
            yapısı; Sanayi Sicil Belgesi ve YODA gibi ön şartlar, banka
            süreçleri ve KOBİ Bilgi Sistemi üzerindeki başvuru detayları
            doğru yönetilmediğinde zaman kaybına ve reddedilen başvurulara
            yol açabiliyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin bu programdan ve diğer güncel devlet destek/teşvik
            programlarından hangileriyle örtüştüğünü belirlemek, Sanayi
            Sicil Belgesi ve YODA sürecini zamanında planlamak, proje başvuru
            dosyanızı KOSGEB kriterlerine uygun şekilde hazırlamak ve başvuru
            sürecini uçtan uca yönetmek için Koray Akdağ / Sistem Global
            Danışmanlık olarak yanınızdayız. Ayrı bir danışmanlık firması
            aramanıza gerek kalmadan, hem destek başvuru sürecinizi hem de
            sonrasındaki raporlama yükümlülüklerinizi tek noktadan
            yürütebiliriz.
          </p>
        </section>
    </BlogLayout>
  );
}
