import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title: "Reeskont Kredisinde Net İhracatçı Şartı Kalktı mı? 2026 İhracatçı Skoru ve Güncel Limitler | Koray Akdağ",
  description: "TCMB kaynaklı ihracat reeskont kredisinde uzun süre aranan 'net ihracatçı' şartı, katma değer odaklı 'ihracatçı skoru' sistemiyle değiştirildi. 5 Eylül 2026 tarihli 33361 sayılı Resmî Gazete'deki 11723 sayılı Karar'la gelen BSMV istisnası, döviz zorunluluklarının kalkması ve güncel limitlerle 2026 rehberi.",
  keywords: [
    "reeskont kredisi net ihracatçı şartı kalktı mı",
    "ihracatçı skoru uygulaması",
    "türk eximbank reeskont kredisi 2026",
    "reeskont kredisi limitleri 2026",
    "ihracat reeskont kredisi BSMV istisnası",
    "reeskont kredisinde döviz bozdurma zorunluluğu",
    "TCMB reeskont kredisi başvuru",
    "net ihracatçı olmayan firma reeskont kredisi alabilir mi",
  ],
  alternates: {
    canonical: "/blog/reeskont-kredisinde-net-ihracatci-sarti-kalkti-mi-2026",
  },
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Reeskont Kredisinde Net İhracatçı Şartı Kalktı mı? İhracatçı Skoru Sistemi ve 2026 Güncel Limitler"
      description="İthalatı ihracatından fazla olduğu için reeskont kredisine giremeyen firmalar için tablo değişti. TCMB'nin katma değer odaklı 'ihracatçı skoru' modeli, eski 'net ihracatçı' şartının yerini aldı; 5 Eylül 2026 tarihli Cumhurbaşkanı Kararı'yla BSMV istisnası genişledi, döviz zorunlulukları kalktı ve limitler yükseldi. Kimler başvurabilir, skor nasıl hesaplanıyor, güncel limitler ne; adım adım rehber."
      category="İHRACAT FİNANSMANI • REESKONT KREDİSİ • 2026"
      date="Kasım 2026"
      readTime="12 Dakika"
      slug="reeskont-kredisinde-net-ihracatci-sarti-kalkti-mi-2026"
      coverImage="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      ctaHeading="İhracat Reeskont Kredisi İçin Uygunluğunuzu Birlikte Değerlendirelim"
      ctaText="İhracatçı skorunuzun hangi bantta olduğunu, hangi bankadan ne kadar reeskont kredisi kullanabileceğinizi ve BSMV istisnasından nasıl yararlanacağınızı birlikte netleştirelim."
    >
      {/* KISA CEVAP KUTUSU */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Kısa Cevap
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Evet, reeskont kredisinde yıllardır aranan &quot;net ihracatçı&quot;
          şartı artık uygulanmıyor:
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ TCMB, ithalatından fazla ihracat yapma şartını (net ihracatçılık) kaldırdı; yerine <strong>katma değer odaklı &quot;ihracatçı skoru&quot;</strong> modelini getirdi.</li>
          <li>✔ Skorlama; ürün çeşitliliği, pazar/ülke sayısı, ürünün teknoloji seviyesi ve firma büyüklüğü gibi kriterlere bakıyor, salt ithalat/ihracat dengesine değil.</li>
          <li>✔ 5 Eylül 2026 tarihli, 33361 sayılı Resmî Gazete&apos;de yayımlanan <strong>11723 sayılı Cumhurbaşkanı Kararı</strong> ile reeskont kredilerindeki BSMV istisnası, kısa vadeli kredilerin yanında <strong>uzun vadeli reeskont kredilerini</strong> de kapsayacak şekilde genişletildi.</li>
          <li>✔ Aynı dönemde <strong>döviz alma zorunluluğu</strong> ve <strong>ilave döviz bozdurma zorunluluğu</strong> kaldırıldı.</li>
          <li>✔ Habercilere göre günlük toplam kullanım limiti kademeli olarak <strong>5 milyar TL&apos;ye</strong>, firma başına günlük limit <strong>60 milyon TL&apos;ye</strong> yükseldi; yabancı para cinsi ihracat reeskont kredisi limiti 5 milyon dolara çıkarıldı.</li>
          <li>✔ Kredi, yine Türk Eximbank ve TCMB ile protokollü ticari bankalar aracılığıyla, ihracat bedeli karşılığında kullandırılan bir <strong>geri ödemeli finansman</strong> aracı; hibe değil.</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Reeskont Kredisi Nedir, Neden Önemli?
          </Link>
          <Link href="#net-ihracatci" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Eski Şart: Net İhracatçılık Neden Sorun Yaratıyordu?
          </Link>
          <Link href="#skor" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. İhracatçı Skoru Sistemi Nasıl İşliyor?
          </Link>
          <Link href="#karistirmayin" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Karıştırmayın: İki Ayrı Tarih, İki Ayrı Değişiklik
          </Link>
          <Link href="#limitler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. 2026 Güncel Limitler, Oranlar ve Vergi İstisnası
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Kimler Başvurabilir?
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Adım Adım Başvuru Süreci
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

      {/* 1. NEDİR */}
      <section id="nedir" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Reeskont Kredisi Nedir, Neden Önemli?
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Reeskont kredisi, Türkiye Cumhuriyet Merkez Bankası (TCMB)
          kaynaklarıyla, ihracatçıların elindeki döviz alacağını veya
          ihracat taahhüdünü esas alarak Türk Eximbank ve TCMB&apos;yle
          protokollü ticari bankalar aracılığıyla kullandırılan kısa ve
          uzun vadeli bir ihracat finansmanı aracıdır. Ticaret
          Bakanlığı&apos;nın geri ödemesiz destek programlarından
          (örneğin pazara giriş veya UR-GE destekleri) farklı olarak bu
          bir <strong>kredi</strong>dir, yani ihracatçı kullandığı tutarı
          vadesinde geri öder; avantajı piyasa koşullarına göre daha
          uygun maliyet ve ihracat taahhüdüyle ilişkilendirilmiş bir
          finansman modeli olmasıdır.
        </p>
        <p className="mb-6 leading-8 text-gray-700">
          Bu kredinin güncel durumunun önemli olmasının nedeni basit:
          programın kapsamı, limitleri ve kimlerin başvurabileceği son
          üç yılda birkaç kez köklü şekilde değişti. Eskiden bu krediye
          sadece belirli bir ölçütü karşılayan firmalar erişebiliyordu;
          bugün tablo farklı.
        </p>
      </section>

      {/* 2. NET İHRACATÇI */}
      <section id="net-ihracatci" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Eski Şart: Net İhracatçılık Neden Sorun Yaratıyordu?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Reeskont kredisi uzun süre &quot;net ihracatçılık&quot; ölçütüne
          göre işledi: bir firmanın ithalatı, ihracatından fazlaysa bu
          firma kapsam dışında kalıyordu. Bu kural, kâğıt üzerinde basit
          görünse de pratikte ciddi bir soruna yol açıyordu.
        </p>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Eski Kuralın Gözden Kaçan Sonucu
          </h3>
          <p className="leading-8 text-gray-700">
            Çok sayıda imalatçı, ihraç ettiği ürünün hammaddesini veya ara
            malını yurt dışından ithal ediyor. Bu firmaların dış ticaret
            hacminde ithalat bazen ihracatı aşabiliyordu; bu da onları
            &quot;net ihracatçı değil&quot; kategorisine düşürüyordu. Oysa
            bu firmaların birçoğu, ihracatın katma değerine gerçekten
            katkı sağlayan, teknoloji yoğun üretim yapan işletmelerdi.
            Yani ölçüt, asıl hedeflenen &quot;güçlü ihracatçıyı
            desteklemek&quot; amacıyla her zaman örtüşmüyordu.
          </p>
        </div>
      </section>

      {/* 3. İHRACATÇI SKORU */}
      <section id="skor" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. İhracatçı Skoru Sistemi Nasıl İşliyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          TCMB, net ihracatçılık ölçütünü kaldırarak yerine katma değer
          odaklı bir <strong>&quot;ihracatçı skoru&quot;</strong> modeli
          getirdi. Haberlere göre bu modelde firmalar; ihraç ettikleri
          ürün çeşitliliği, satış yaptıkları pazar/ülke sayısı, ürünün
          teknoloji seviyesi ve firma büyüklüğü gibi birden fazla
          kritere göre puanlanıyor; salt ithalat/ihracat dengesine
          bakılmıyor.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📈</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Yüksek İhracatçı Skoru
            </h3>
            <p className="text-gray-700">
              Herhangi bir puan türünden 40 puan ve üzeri alan firmalar
              &quot;ihracatçı skoru yüksek&quot; olarak sınıflandırılıyor
              ve reeskont kredisi kullanımında önceliklendiriliyor.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">📉</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Düşük İhracatçı Skoru
            </h3>
            <p className="text-gray-700">
              Her iki puan türünden de 40 puanın altında kalan firmalar
              &quot;ihracatçı skoru düşük&quot; kategorisinde
              değerlendiriliyor; bu firmalar için kredi erişimi daha
              sınırlı kalabiliyor.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            💡 <strong>Uzman Notu:</strong> Skorlama sisteminde en çok
            gözden kaçan nokta, net ihracatçı olmanın artık ne tek
            başına yeterli ne de tek başına gerekli bir şart olmaması.
            İthalatı yüksek olsa da ürün çeşitliliği ve pazar
            yaygınlığı güçlü bir firma, net ihracatçı olan ama dar bir
            pazara tek tip ürün satan bir firmadan daha yüksek skor
            alabiliyor. Bu nedenle başvuru öncesi firmanızın kendi
            dış ticaret profilini (kaç ülkeye, kaç farklı ürün grubunda
            satış yaptığınızı) protokollü bankanızla birlikte netleştirmek,
            &quot;net ihracatçı değiliz, bu kredi bize göre değil&quot;
            varsayımıyla başvurudan vazgeçmekten daha doğru bir adımdır.
          </p>
        </div>
      </section>

      {/* 4. KARIŞTIRMAYIN */}
      <section id="karistirmayin" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Karıştırmayın: İki Ayrı Tarih, İki Ayrı Değişiklik
        </h2>
        <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-red-700">
            ⚠️ Skorlama Sistemi ile Eylül 2026 Paketini Ayırın
          </h3>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-bold text-gray-800">
                1) İhracatçı skoru sisteminin başlangıcı
              </p>
              <p className="text-gray-700">
                Net ihracatçılık şartının kaldırılıp katma değer odaklı
                skorlama modeline geçilmesi, haberlere göre 13 Ocak
                2025&apos;te (üç aylık geçiş süreciyle) yürürlüğe
                girdi. Yani bu değişiklik 2026&apos;ya özgü değil, daha
                önce başlamış bir dönüşüm.
              </p>
            </div>
            <div>
              <p className="mb-3 font-bold text-gray-800">
                2) 5 Eylül 2026 tarihli ek paket
              </p>
              <p className="text-gray-700">
                5 Eylül 2026&apos;da yürürlüğe giren 11723 sayılı
                Cumhurbaşkanı Kararı, skorlama sistemini değiştirmedi;
                ona ek olarak BSMV istisnasını uzun vadeli kredilere
                de yaydı, döviz zorunluluklarını kaldırdı ve yabancı
                para cinsi kredi limitini yükseltti.
              </p>
            </div>
          </div>
          <p className="mt-8 leading-8 text-gray-700">
            Dikkat edilmesi gereken fark şu: &quot;net ihracatçı şartı
            kalktı mı&quot; sorusunun cevabı 2025&apos;ten beri
            &quot;evet&quot;; ama kredinin güncel limitleri, vergi
            avantajları ve döviz kurallarına dair en taze bilgi Eylül
            2026 paketinde. Eski bir kaynaktan sadece skorlama
            bilgisini okuyup güncel limitleri eski haliyle (örneğin
            300 milyon TL günlük limit ya da zorunlu döviz satışı)
            bilen okuyucular, aşağıdaki güncel tabloyu mutlaka kontrol
            etmeli.
          </p>
        </div>
      </section>

      {/* 5. LİMİTLER */}
      <section id="limitler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. 2026 Güncel Limitler, Oranlar ve Vergi İstisnası
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Reeskont kredisinin günlük kullanım limiti, son üç yılda
          kademeli olarak artırıldı. Habercilere göre bu kademeli
          artışın son durağı, 5 Eylül 2026 tarihli Karar&apos;la
          gelen paket:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Önceki Durum</th>
                <th className="p-5">2026 Güncel Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Başvuru Ölçütü</td>
                <td className="p-5">Net ihracatçılık şartı</td>
                <td className="p-5">Katma değer odaklı ihracatçı skoru</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Günlük Toplam Limit</td>
                <td className="p-5">300 milyon TL (önceki dönem)</td>
                <td className="p-5">5 milyar TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Firma Başına Günlük Limit</td>
                <td className="p-5">45 milyon TL</td>
                <td className="p-5">60 milyon TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yabancı Para Cinsi Kredi Limiti</td>
                <td className="p-5">Daha düşük tutar</td>
                <td className="p-5">5 milyon dolara kadar (program bütçesi 1 milyar dolar)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">BSMV İstisnası Kapsamı</td>
                <td className="p-5">Sadece kısa vadeli reeskont kredileri</td>
                <td className="p-5">Kısa vadeli + uzun vadeli reeskont kredileri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Döviz Alma Zorunluluğu</td>
                <td className="p-5">Vardı</td>
                <td className="p-5 font-semibold text-emerald-700">Kaldırıldı</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">İlave Döviz Bozdurma Zorunluluğu</td>
                <td className="p-5">Vardı</td>
                <td className="p-5 font-semibold text-emerald-700">Kaldırıldı</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold">Kredi Maliyeti (Faiz)</td>
                <td className="p-5" colSpan={2}>Habercilere göre %23,95&apos;e indirildi (TCMB&apos;nin güncel oranı başvuru öncesi teyit edilmelidir)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Not: Günlük toplam limitteki kademeli artış (300 milyon TL →
          1,5 milyar TL → 4,5 milyar TL → 5 milyar TL) farklı tarihlerde
          yapılan ayrı kararlara dayanıyor; bu yazıda sadece başlangıç ve
          güncel (Eylül 2026 sonrası) rakamlar karşılaştırılmıştır. Kredi
          maliyeti oranı TCMB tarafından sık güncellenebildiği için
          başvuru öncesi protokollü bankanızdan veya Türk
          Eximbank&apos;tan güncel oranı teyit etmeniz gerekir.
        </p>
      </section>

      {/* 6. KİMLER BAŞVURABİLİR */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Kimler Başvurabilir?
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Uygun Olabilecek Profil
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Fiilen ihracat yapan veya ihracat taahhüdü bulunan işletmeler</li>
              <li>✔ TİM&apos;e bağlı bir ihracatçı birliğine üye olan firmalar</li>
              <li>✔ İthalatı ihracatından fazla olsa da ürün çeşitliliği, pazar yaygınlığı veya teknoloji seviyesi güçlü olan firmalar (ihracatçı skoru üzerinden değerlendirilir)</li>
              <li>✔ KOBİ&apos;ler ve büyük ölçekli ihracatçı işletmeler (program her iki grubu da kapsar)</li>
              <li>✔ Yabancı para cinsinden finansman ihtiyacı olan ihracatçılar (5 milyon dolara kadarki kısım için)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Dikkat Edilmesi Gereken Durumlar
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>❌ İhracat faaliyeti bulunmayan, sadece ithalat yapan işletmeler kapsam dışıdır</li>
              <li>❌ Firma başına ve günlük toplam limitler, bankaların kendi kredibilite değerlendirmesiyle birlikte uygulanır; limitin var olması otomatik onay garantisi vermez</li>
              <li>❌ İhracatçı skoru düşük çıkan firmalarda kredi erişimi, yüksek skorlu firmalara göre daha sınırlı kalabilir</li>
              <li>❌ Kredi maliyeti ve vade koşulları TCMB tarafından güncellenebildiği için eski bir kaynaktaki rakamla hareket etmek yanıltıcı olabilir</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Adım Adım Başvuru Süreci
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">İhracatçı Birliği Üyeliği</h3>
            <p className="mt-3 text-sm text-gray-600">
              TİM&apos;e bağlı ilgili ihracatçı birliğine üyelik şart.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">Banka Seçimi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Türk Eximbank&apos;a doğrudan veya TCMB ile protokollü bir ticari bankaya başvurulur.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Kredibilite Değerlendirmesi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Banka, firmanın finansal durumunu ve ihracatçı skorunu değerlendirir.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">İhracat Taahhüdü/Belgesi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Kredinin bağlı olduğu ihracat işlemine ait belgeler (fatura, gümrük beyannamesi vb.) sunulur.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Kredi Kullanımı</h3>
            <p className="mt-3 text-sm text-gray-600">
              Onaylanan tutar, güncel limitler ve BSMV istisnası dahilinde kullandırılır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">İhracat Taahhüdünün Kapatılması</h3>
            <p className="mt-3 text-sm text-gray-600">
              Vade sonunda ihracatın fiilen gerçekleştiği belgelenir, kredi anaparası geri ödenir.
            </p>
          </div>
        </div>
      </section>

      {/* 8. DİKKAT */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Dikkat Edilmesi Gerekenler
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li>Bu bir <strong>kredi</strong>dir, hibe değildir; kullanılan tutar vadesinde geri ödenir.</li>
            <li>&quot;Net ihracatçı değiliz&quot; varsayımıyla başvurudan vazgeçmeden önce güncel ihracatçı skoru sistemini ve kendi dış ticaret profilinizi değerlendirin.</li>
            <li>Günlük toplam ve firma başına limitler üst sınırdır; fiilen kullanabileceğiniz tutar bankanızın kendi değerlendirmesine bağlıdır.</li>
            <li>Kredi maliyeti (faiz) oranı TCMB tarafından sık güncellenebiliyor; başvuru öncesi güncel oranı Türk Eximbank veya protokollü bankanızdan teyit edin.</li>
            <li>BSMV istisnası, döviz zorunluluklarının kaldırılması gibi avantajların uygulanma şekli bankadan bankaya farklılık gösterebilir; sözleşme öncesi netleştirin.</li>
            <li>Güncel limit, oran ve şartları her başvuru öncesinde TCMB ve Türk Eximbank&apos;ın resmî kaynaklarından teyit edin.</li>
          </ul>
        </div>
      </section>

      {/* 9. RESMİ KAYNAKLAR */}
      <section id="kaynaklar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Resmî Kaynaklar
        </h2>
        <p className="mb-6 leading-8 text-gray-700">
          Bu yazı aşağıdaki kaynaklara dayanmaktadır. Güncel limit, oran
          ve başvuru şartlarını, başvuru öncesinde doğrudan TCMB ve
          Türk Eximbank&apos;ın resmî kanallarından teyit etmenizi
          öneririz:
        </p>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <a href="https://www.resmigazete.gov.tr/eskiler/2026/09/20260905.htm" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              5 Eylül 2026 tarihli, 33361 sayılı Resmî Gazete (11723 sayılı Cumhurbaşkanı Kararı)
            </a>
          </li>
          <li>
            <a href="https://www.tcmb.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              TCMB resmî internet sitesi (tcmb.gov.tr)
            </a>{" "}
            (ihracat reeskont kredisi uygulama talimatı ve güncel oranlar)
          </li>
          <li>
            <a href="https://www.eximbank.gov.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Türk Eximbank resmî internet sitesi (eximbank.gov.tr)
            </a>{" "}
            (reeskont kredisi başvuru koşulları)
          </li>
          <li>
            <a href="https://tim.org.tr" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              Türkiye İhracatçılar Meclisi (TİM) resmî duyuruları
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
              Net ihracatçı olmayan bir firma reeskont kredisi alabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. TCMB, net ihracatçılık şartını kaldırıp katma değer
              odaklı ihracatçı skoru sistemine geçti. İthalatı
              ihracatından fazla olan bir firma, ürün çeşitliliği, pazar
              sayısı veya teknoloji seviyesi gibi kriterlerden güçlü bir
              skor alıyorsa kredi başvurusunda değerlendirmeye alınabiliyor.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              İhracatçı skoru sistemi ne zaman başladı?
            </h3>
            <p className="leading-8 text-gray-700">
              Habercilere göre bu sistem 13 Ocak 2025&apos;te, üç aylık
              bir geçiş süreciyle birlikte yürürlüğe girdi. 5 Eylül
              2026&apos;daki değişiklik, skorlama modelini değiştirmedi;
              ona ek olarak vergi istisnası ve döviz zorunluluklarına
              ilişkin ayrı bir paket getirdi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Reeskont kredisinde döviz bozdurma zorunluluğu hâlâ var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. 5 Eylül 2026 tarihli 11723 sayılı Karar&apos;la
              döviz alma zorunluluğu ve ilave döviz bozdurma zorunluluğu
              kaldırıldı.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Reeskont kredisinin günlük limiti şu anda ne kadar?
            </h3>
            <p className="leading-8 text-gray-700">
              Habercilere göre günlük toplam kullanım limiti kademeli
              artışlarla 5 milyar TL&apos;ye, firma başına günlük limit
              60 milyon TL&apos;ye yükseldi. Bu limitler üst sınırdır;
              fiilen kullanılabilecek tutar bankanızın kredibilite
              değerlendirmesine bağlıdır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              BSMV istisnası hangi reeskont kredilerini kapsıyor?
            </h3>
            <p className="leading-8 text-gray-700">
              5 Eylül 2026 öncesinde BSMV istisnası sadece kısa vadeli
              reeskont kredilerinde uygulanıyordu. Yeni Karar&apos;la bu
              istisna, hem Türk Eximbank&apos;ın hem ticari bankaların
              kullandırdığı uzun vadeli reeskont kredilerini de
              kapsayacak şekilde genişletildi.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Reeskont kredisi hibe mi, kredi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Krediyle: kullanılan tutar vadesinde geri ödenir. Avantajı,
              piyasa koşullarına göre daha uygun maliyetli olması ve
              ihracatçı skoru yüksek firmalar için erişimin genişletilmiş
              olmasıdır.
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
          Reeskont kredisinde net ihracatçı şartının kalkması, daha önce
          sadece ithalat/ihracat dengesine bakılarak kapı dışında kalan
          birçok katma değerli ihracatçı için gerçek bir kapsam
          genişlemesi. 5 Eylül 2026 tarihli paketle gelen BSMV istisnası,
          döviz zorunluluklarının kaldırılması ve yükseltilen limitler
          bu genişlemeyi daha da güçlendiriyor. Ancak kredinin hâlâ bir
          geri ödeme yükümlülüğü taşıdığını ve fiilen kullanılabilecek
          tutarın bankanızın kendi değerlendirmesine bağlı olduğunu
          unutmamak gerekiyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Şirketinizin ihracatçı skorunu, hangi banka/Eximbank kanalının
          size daha uygun olduğunu ve güncel limitlerden ne şekilde
          yararlanabileceğinizi birlikte değerlendirelim; ihracat
          finansmanı stratejinizi diğer devlet destek ve teşvik
          programlarınızla uyumlu şekilde kurgulamak için Koray Akdağ /
          Sistem Global Danışmanlık olarak yanınızdayız.{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            Şirketiniz için uygun finansman yolunu birlikte belirleyelim.
          </Link>
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/blog/turk-eximbank-ihracat-kredisi-ve-alacak-sigortasi-rehberi"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">İHRACAT FİNANSMANI • TÜRK EXIMBANK • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Türk Eximbank İhracat Kredisi ve Alacak Sigortası Rehberi</h3>
          </Link>
          <Link
            href="/blog/ticaret-bakanligi-ihracat-destekleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARET BAKANLIĞI • İHRACAT DESTEKLERİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Ticaret Bakanlığı İhracat Destekleri 2026</h3>
          </Link>
          <Link
            href="/blog/ur-ge-destegine-nasil-basvurulur-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">UR-GE DESTEĞİ • İHRACAT • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">UR-GE Desteğine Nasıl Başvurulur?</h3>
          </Link>
          <Link
            href="/blog/pazara-giris-belgesi-destegi-sertifika-ruhsat-giderleri-2026"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
          >
            <div className="mb-2 text-sm font-semibold text-orange-600">TİCARET BAKANLIĞI • PAZARA GİRİŞ BELGESİ DESTEĞİ • 2026</div>
            <h3 className="text-lg font-bold text-[#071A2F]">Pazara Giriş Belgesi Desteği</h3>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Net ihracatçı olmayan bir firma reeskont kredisi alabilir mi?","acceptedAnswer":{"@type":"Answer","text":"Evet. TCMB, net ihracatçılık şartını kaldırıp katma değer odaklı ihracatçı skoru sistemine geçti. İthalatı ihracatından fazla olan bir firma, ürün çeşitliliği, pazar sayısı veya teknoloji seviyesi gibi kriterlerden güçlü bir skor alıyorsa kredi başvurusunda değerlendirmeye alınabiliyor."}},{"@type":"Question","name":"İhracatçı skoru sistemi ne zaman başladı?","acceptedAnswer":{"@type":"Answer","text":"Habercilere göre bu sistem 13 Ocak 2025'te, üç aylık bir geçiş süreciyle birlikte yürürlüğe girdi. 5 Eylül 2026'daki değişiklik, skorlama modelini değiştirmedi; ona ek olarak vergi istisnası ve döviz zorunluluklarına ilişkin ayrı bir paket getirdi."}},{"@type":"Question","name":"Reeskont kredisinde döviz bozdurma zorunluluğu hâlâ var mı?","acceptedAnswer":{"@type":"Answer","text":"Hayır. 5 Eylül 2026 tarihli 11723 sayılı Karar'la döviz alma zorunluluğu ve ilave döviz bozdurma zorunluluğu kaldırıldı."}},{"@type":"Question","name":"Reeskont kredisinin günlük limiti şu anda ne kadar?","acceptedAnswer":{"@type":"Answer","text":"Habercilere göre günlük toplam kullanım limiti kademeli artışlarla 5 milyar TL'ye, firma başına günlük limit 60 milyon TL'ye yükseldi. Bu limitler üst sınırdır; fiilen kullanılabilecek tutar bankanızın kredibilite değerlendirmesine bağlıdır."}},{"@type":"Question","name":"BSMV istisnası hangi reeskont kredilerini kapsıyor?","acceptedAnswer":{"@type":"Answer","text":"5 Eylül 2026 öncesinde BSMV istisnası sadece kısa vadeli reeskont kredilerinde uygulanıyordu. Yeni Karar'la bu istisna, hem Türk Eximbank'ın hem ticari bankaların kullandırdığı uzun vadeli reeskont kredilerini de kapsayacak şekilde genişletildi."}},{"@type":"Question","name":"Reeskont kredisi hibe mi, kredi mi?","acceptedAnswer":{"@type":"Answer","text":"Kredidir: kullanılan tutar vadesinde geri ödenir. Avantajı, piyasa koşullarına göre daha uygun maliyetli olması ve ihracatçı skoru yüksek firmalar için erişimin genişletilmiş olmasıdır."}}]}) }}
      />
    </BlogLayout>
  );
}
