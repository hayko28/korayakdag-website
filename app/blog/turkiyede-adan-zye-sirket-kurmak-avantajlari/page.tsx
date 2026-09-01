import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Türkiye'de A'dan Z'ye Şirket Kurmak: Avantajları Nelerdir? (2026) | Koray Akdağ",
  description:
    "Yabancı yatırımcılar için Türkiye'de şirket kurmanın avantajları, Limited ve Anonim Şirket farkları, gerekli belgeler, adım adım MERSİS/ticaret sicili süreci, devlet destekleri, serbest bölgeler, vergi teşvikleri, maliyetler, banka hesabı açma ve ikamet izni bağlantısıyla 2026 güncel rehber.",
  keywords: [
    "türkiyede şirket kurma yabancı yatırımcı",
    "yabancılar türkiyede nasıl şirket kurar",
    "türkiyede limited şirket kurma yabancı ortak",
    "türkiyede yabancı sermayeli şirket kuruluşu",
    "türkiyede şirket kurmanın avantajları",
    "yabancı yatırımcı türkiye vergi teşvikleri",
    "türkiyede oturma izni şirket kurarak",
    "2026 türkiyede şirket kurma rehberi",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye'de A'dan Z'ye Şirket Kurmak: Avantajları Nelerdir?"
      description="Limited ve Anonim Şirket farkları, gerekli belgeler, adım adım MERSİS/ticaret sicili süreci, devlet destekleri, serbest bölgeler, vergi teşvikleri, maliyetler, banka hesabı açma ve ikamet izni bağlantısıyla yabancı yatırımcılar için 2026 güncel Türkiye rehberi."
      category="ŞİRKET KURULUŞU • TÜRKİYE • 2026"
      date="2026"
      readTime="19 Dakika"
      slug="turkiyede-adan-zye-sirket-kurmak-avantajlari"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye, 4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu kapsamında
          yabancı yatırımcılara Türk vatandaşlarıyla tamamen eşit haklar
          tanıyor: hiçbir ön izin, sektör kısıtlaması veya asgari yatırım
          tavanı olmadan, %100 yabancı sermayeyle şirket kurulabiliyor. Bu
          rehberde, yurt dışından Türkiye&apos;ye yatırım yapmak isteyen
          gerçek ve tüzel kişiler için kuruluşun A&apos;dan Z&apos;ye tüm
          aşamalarını, güncel rakamlarla ele alıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Yabancı yatırımcılar için Türkiye&apos;nin somut avantajları</li>
          <li>✔ Bu yapının kimler için uygun olduğu</li>
          <li>✔ Limited ve Anonim Şirket arasındaki farklar</li>
          <li>✔ Yabancı ortak/hissedar için gerekli belgeler</li>
          <li>✔ MERSİS&apos;ten ticaret siciline adım adım kuruluş süreci</li>
          <li>✔ KOSGEB, Ticaret Bakanlığı, Yatırım Teşvik Sistemi ve serbest bölgeler</li>
          <li>✔ Kurumlar vergisi, KDV, hizmet ihracı indirimi ve kuruluş maliyetleri</li>
          <li>✔ Banka hesabı açma süreci ve ikamet izni bağlantısı</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#neden-turkiye" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Yabancı Yatırımcılar İçin Türkiye&apos;nin Avantajları
          </Link>
          <Link href="#kimler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Kimler İçin Uygun?
          </Link>
          <Link href="#sirket-turleri" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Şirket Türleri: Limited mi, Anonim mi?
          </Link>
          <Link href="#belgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Gerekli Belgeler
          </Link>
          <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Adım Adım Kuruluş Süreci
          </Link>
          <Link href="#destekler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Devlet Destekleri ve Yatırım Teşvik Sistemi
          </Link>
          <Link href="#serbest-bolgeler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Serbest Bölgeler: İhracata Yönelik Ek Avantaj
          </Link>
          <Link href="#vergi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Vergi Sistemi ve Kolaylıklar
          </Link>
          <Link href="#maliyetler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. Kuruluş ve İşletme Maliyetleri
          </Link>
          <Link href="#banka" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. Banka Hesabı Açma Süreci
          </Link>
          <Link href="#ikamet" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. İkamet İzni ve Çalışma İzni Bağlantısı
          </Link>
          <Link href="#yukumlulukler" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Kuruluş ve Muhasebe Sürecinizi Kim Yönetiyor?
          </Link>
          <Link href="#dikkat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            13. Dikkat Edilmesi Gerekenler
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            14. Sık Sorulan Sorular
          </Link>
        </div>
      </div>

      {/* 1. NEDEN TÜRKİYE */}
      <section id="neden-turkiye" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Yabancı Yatırımcılar İçin Türkiye&apos;nin Avantajları
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye, Avrupa, Orta Doğu, Kafkasya ve Orta Asya arasındaki
          konumu, genç ve dinamik işgücü ve gelişmiş sanayi altyapısıyla
          yabancı sermaye için bölgesel bir üs niteliği taşıyor. 4875 sayılı
          Doğrudan Yabancı Yatırımlar Kanunu, yabancı yatırımcıya yerli
          yatırımcıyla birebir aynı hakları tanıyor; ayrı bir izin rejimi
          veya asgari sermaye tavanı bulunmuyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Son yıllarda hizmet ihracatına yönelik vergi indirimleri, dijital
          kuruluş sistemleri ve genişleyen serbest ticaret ağı, Türkiye&apos;yi
          yalnızca üretim değil; yazılım, mühendislik, danışmanlık ve
          e-ticaret gibi hizmet odaklı yabancı yatırımlar için de giderek
          daha cazip bir merkez haline getiriyor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🌍</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Stratejik Konum ve Gümrük Birliği
            </h3>
            <p className="text-gray-700">
              1996&apos;dan beri AB Gümrük Birliği&apos;nde yer alan tek
              aday ülke olarak, sanayi ürünlerinde AB pazarına gümrüksüz
              erişim sunar. Ayrıca 30&apos;a yakın ülke/bölgeyle serbest
              ticaret anlaşması (STA) ağına sahiptir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">👥</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Genç Nüfus ve Rekabetçi İşgücü
            </h3>
            <p className="text-gray-700">
              85 milyona yakın nüfusu ve ortalama yaşı 34 civarındaki genç
              işgücüyle Türkiye, Avrupa&apos;nın önemli üretim ve hizmet
              merkezlerinden biri; işgücü maliyetleri Batı Avrupa&apos;ya
              kıyasla belirgin şekilde daha düşük.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚖️</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              %100 Yabancı Sermayeye Eşit Muamele
            </h3>
            <p className="text-gray-700">
              Yabancı gerçek veya tüzel kişi, Türk ortağa ihtiyaç duymadan
              şirketin %100&apos;üne sahip olabilir; yönetim kurulunda veya
              müdürlükte de görev alabilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🏭</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Üretim ve Operasyon Maliyet Avantajı
            </h3>
            <p className="text-gray-700">
              Enerji, kira ve işçilik gibi temel operasyon giderleri birçok
              Avrupa ülkesine göre daha rekabetçi; bu durum özellikle
              üretim, ihracat ve hizmet ihracatı odaklı iş modellerinde
              belirgin bir maliyet avantajı sağlar.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">🛂</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              İkamet ve Yatırım Yoluyla Vatandaşlık Bağlantısı
            </h3>
            <p className="text-gray-700">
              Aktif faaliyet gösteren bir şirket kurmak, yatırımcı ikamet
              izni başvurusuna zemin oluşturabilir; belirli yatırım
              eşiklerinin aşılması durumunda ise yatırım yoluyla Türk
              vatandaşlığı yolu da değerlendirilebilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <div className="mb-4 text-5xl">⚡</div>
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              Dijitalleşmiş ve Hızlı Kuruluş Süreci
            </h3>
            <p className="text-gray-700">
              MERSİS (Merkezi Sicil Kayıt Sistemi) sayesinde şirket kuruluş
              işlemlerinin büyük bölümü elektronik ortamda yürütülür;
              belgeler tamamsa tescil süreci günler içinde tamamlanabilir.
            </p>
          </div>
        </div>
      </section>

      {/* 2. KİMLER İÇİN UYGUN */}
      <section id="kimler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Kimler İçin Uygun?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de şirket kurma kararı, iş modeline ve hedeflenen
          pazara göre farklı yatırımcı profilleri için farklı gerekçelerle
          anlamlı hale gelir. Aşağıdaki profiller, Türkiye&apos;yi
          yapılanma noktası olarak değerlendiren yatırımcılar arasında en
          sık karşılaşılanlardır.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">🏗️ Üretim ve İmalat Yatırımcıları</h3>
            <p className="text-gray-700">
              Avrupa ve Orta Doğu&apos;ya yakın, rekabetçi maliyetli bir
              üretim üssü arayan sanayi yatırımcıları için Türkiye,
              Gümrük Birliği avantajıyla öne çıkar.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">💻 Yazılım ve Hizmet İhracatçıları</h3>
            <p className="text-gray-700">
              Yurt dışına yazılım, mühendislik, tasarım veya danışmanlık
              hizmeti verecek dijital girişimciler ve ajanslar için %80
              kazanç indirimi belirgin bir fark yaratır.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">🛒 E-Ticaret ve Perakende Şirketleri</h3>
            <p className="text-gray-700">
              85 milyonluk yerel pazara doğrudan satış yapmak isteyen
              e-ticaret, marka ve perakende şirketleri için Limited Şirket
              yapısı hızlı ve düşük maliyetli bir giriş sağlar.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">🌐 Bölgesel Merkez Kuran Uluslararası Şirketler</h3>
            <p className="text-gray-700">
              Avrupa, Orta Doğu, Kafkasya ve Orta Asya arasında operasyon
              yürütmek isteyen gruplar için Türkiye&apos;deki şirket,
              bölgesel bir merkez veya şube olarak konumlandırılabilir.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">🛂 Yatırım Yoluyla İkamet/Vatandaşlık Planlayan Bireyler</h3>
            <p className="text-gray-700">
              Şirket kurarak Türkiye&apos;de aktif ekonomik bağ kurmak ve
              buna dayanarak ikamet izni, ileride ise yatırım yoluyla
              vatandaşlık sürecini değerlendirmek isteyen bireysel
              yatırımcılar için uygun bir yoldur.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">📦 Tedarik Zincirini Yakınlaştırmak İsteyenler</h3>
            <p className="text-gray-700">
              Uzak Doğu&apos;ya bağımlılığı azaltıp tedarik zincirini
              Avrupa pazarına yakınlaştırmak (nearshoring) isteyen
              üreticiler için Türkiye, lojistik ve maliyet açısından
              dengeli bir alternatif sunar.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ŞİRKET TÜRLERİ */}
      <section id="sirket-turleri" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Şirket Türleri: Limited mi, Anonim mi?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı yatırımcıların Türkiye&apos;de kurabileceği başlıca şirket
          türleri Limited Şirket (Ltd. Şti.) ve Anonim Şirket (A.Ş.)&apos;tir.
          Şube (branch office) açma ve şahıs işletmesi kurma seçenekleri de
          mevcuttur, ancak yabancı sermayeli yatırımların büyük çoğunluğu
          esnek yapısı ve düşük sermaye şartı nedeniyle Limited Şirket
          olarak kuruluyor.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kriter</th>
                <th className="p-5">Limited Şirket (Ltd. Şti.)</th>
                <th className="p-5">Anonim Şirket (A.Ş.)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari Sermaye</td>
                <td className="p-5">50.000 TL</td>
                <td className="p-5">250.000 TL (kayıtlı sermaye sistemine geçmemiş halka kapalı A.Ş. için 500.000 TL)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Ortak Sayısı</td>
                <td className="p-5">1 - 50 ortak; tek ortaklı kuruluş mümkün</td>
                <td className="p-5">1 veya daha fazla ortak; üst sınır yok</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Yönetim</td>
                <td className="p-5">Müdür/müdürler kurulu; yabancı ortak doğrudan müdür olabilir</td>
                <td className="p-5">Yönetim kurulu; yabancı gerçek veya tüzel kişi üye olabilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Sermaye Ödeme Takvimi</td>
                <td className="p-5">Taahhüt edilen sermaye 24 ay içinde ödenebilir</td>
                <td className="p-5">Nakit sermayenin en az %25&apos;i tescilden önce, kalanı 24 ay içinde ödenir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Hisse Devri</td>
                <td className="p-5">Noter onayı ve ticaret sicili tescili gerekir, nispeten daha bürokratik</td>
                <td className="p-5">Pay senedi/defter kaydıyla daha esnek ve hızlı devredilebilir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Halka Arz</td>
                <td className="p-5">Mümkün değil</td>
                <td className="p-5">Mümkün; büyüme ve yatırımcı çıkışı planlayan yapılar için uygun</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">En Uygun Olduğu Profil</td>
                <td className="p-5">KOBİ ölçekli girişimler, ticaret, hizmet ve danışmanlık şirketleri</td>
                <td className="p-5">Büyük ölçekli yatırımlar, holding yapıları, yatırım teşvik belgesi gerektiren üretim projeleri</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Şube açmak, yurt dışındaki ana şirketin Türkiye&apos;de ayrı bir
          tüzel kişilik kurmadan doğrudan faaliyet göstermesini sağlar;
          ancak şubenin kârı merkez şirkete ait kabul edildiğinden vergisel
          ve idari açıdan bağımsız bir Türk şirketi kadar esnek değildir.
          Şahıs işletmesi ise düşük hacimli, tek kişilik faaliyetler için
          uygun olsa da sınırsız sorumluluk taşıması nedeniyle kurumsal
          yatırımcılar tarafından nadiren tercih edilir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Yabancı yatırımcıların büyük çoğunluğu, düşük sermaye şartı,
            esnek yönetim yapısı ve daha düşük kuruluş/işletme maliyeti
            nedeniyle Limited Şirket&apos;i tercih ediyor. Büyük ölçekli
            üretim yatırımı, yüksek tutarlı yatırım teşvik belgesi başvurusu
            veya çok ortaklı/kurumsal yapı hedefleyen projelerde ise Anonim
            Şirket daha uygun bir çerçeve sunuyor. Hangi türün iş modelinize
            uygun olduğuna, faaliyet konunuz ve büyüme planınıza göre birlikte
            karar veriyoruz.
          </p>
        </div>
      </section>

      {/* 4. BELGELER */}
      <section id="belgeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Gerekli Belgeler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ortağın gerçek kişi veya tüzel kişi (yurt dışında kurulu bir
          şirket) olmasına göre istenen belgeler farklılaşır. Belgelerin
          büyük bölümü yurt dışından, ilgili ülkedeki noter ve apostil
          süreçleriyle hazırlanabildiği için, fiziken Türkiye&apos;de
          bulunmak zorunlu değildir.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              👤 Yabancı Gerçek Kişi Ortak İçin
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Pasaportun noter onaylı Türkçe tercümesi</li>
              <li>Türkiye&apos;de vergi dairesinden alınacak vergi kimlik numarası (VKN)</li>
              <li>Türkiye&apos;deki ikametgah/işyeri adresi (kurulacak şirketin adresi)</li>
              <li>2 adet vesikalık fotoğraf</li>
              <li>Türkiye dışında imzalanacak belgeler için apostil şerhi</li>
              <li>İşlemler vekil aracılığıyla yürütülecekse noter onaylı vekâletname</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏢 Yabancı Tüzel Kişi Ortak İçin
            </h3>
            <ul className="ml-6 list-disc space-y-3 text-gray-700 marker:text-orange-500">
              <li>Şirketin güncel faaliyet belgesi (sicil kayıt sureti)</li>
              <li>Yetkili temsilcinin belirlendiği yönetim kurulu kararı</li>
              <li>Ana sözleşme/kuruluş belgesinin apostilli, noter onaylı Türkçe tercümesi</li>
              <li>Şirket adına Türkiye&apos;de işlem yapacak kişiye vekâletname</li>
              <li>Şirket için VKN başvurusu (tüzel kişi ortak vergi kimlik numarası)</li>
              <li>Nihai gerçek faydalanıcı (UBO) beyanı</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Şirket merkezi/adresi için fiziksel bir ofis kiralamak şart
          değildir; birçok hizmet ve danışmanlık şirketi, kuruluş
          aşamasında sanal ofis veya paylaşımlı iş merkezi adreslerini
          kullanabilir. Adresin ticaret sicili ve vergi dairesi
          nezdinde geçerli olması yeterlidir.
        </p>
        <p className="mt-6 leading-8 text-gray-700">
          Kuruluş sonrasında şirket yetkilisi adına mali mühür/e-imza
          alınması gerekir; e-Devlet üzerinden yürütülen e-fatura,
          e-defter ve e-tebligat gibi zorunlu dijital süreçler bu e-imza
          üzerinden yürütülür. Bu başvuru da vekâletname ile üstlenilebilir
          ve kuruluş dosyasının bir parçası olarak tarafımızca takip edilir.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Apostil, Türkiye&apos;nin de taraf olduğu Lahey Apostil
            Sözleşmesi&apos;ne üye ülkelerde düzenlenen belgeler için
            geçerlidir; sözleşmeye taraf olmayan ülkelerde belgelerin
            ilgili Türk konsolosluğu tarafından onaylanması gerekir. Bu
            belge hazırlığı ve tercüme sürecini, kuruluş dosyanızın bir
            parçası olarak sizin adınıza organize ediyoruz.
          </p>
        </div>
      </section>

      {/* 5. SÜREÇ */}
      <section id="surec" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Adım Adım Kuruluş Süreci
        </h2>
        <p className="mb-10 text-lg leading-9 text-gray-700">
          Belgeler tam ve doğru şekilde hazırlandığında, MERSİS ön
          kaydından ticaret sicili tesciline kadar süreç genellikle 1-2
          hafta içinde tamamlanır. Banka hesabı açılışı ve operasyonel
          hazırlıklarla birlikte toplam süreç 3-4 haftaya kadar uzayabilir.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">1</div>
            <h3 className="text-lg font-bold">Vergi Numarası (VKN)</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">2</div>
            <h3 className="text-lg font-bold">MERSİS Ön Kaydı ve Ünvan</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">3</div>
            <h3 className="text-lg font-bold">Ana Sözleşme ve Sermaye</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">4</div>
            <h3 className="text-lg font-bold">Noter Onayları</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">5</div>
            <h3 className="text-lg font-bold">Ticaret Sicili Tescili</h3>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-3 text-3xl font-black text-orange-500">6</div>
            <h3 className="text-lg font-bold">Vergi Dairesi, Oda, Banka</h3>
          </div>
        </div>

        {/* 5.1 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.1. Vergi Kimlik Numarasının (VKN) Alınması
          </h3>
          <p className="leading-8 text-gray-700">
            Kuruluşun ilk adımı, her yabancı ortak için ilgili vergi
            dairesinden vergi kimlik numarası alınmasıdır. Bu işlem
            ücretsizdir, pasaport ve noter onaylı vekâletname ile vekil
            aracılığıyla yürütülebilir; ortağın Türkiye&apos;de fiziken
            bulunması gerekmez.
          </p>
        </div>

        {/* 5.2 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.2. MERSİS Ön Kaydı ve Ticari Ünvan Belirlenmesi
          </h3>
          <p className="leading-8 text-gray-700">
            Ticaret Bakanlığı&apos;nın Merkezi Sicil Kayıt Sistemi (MERSİS)
            üzerinden şirketin ünvanı, faaliyet konusu, adresi, ortaklık ve
            sermaye yapısı sisteme işlenir. MERSİS, kuruluş dosyasının
            dijital iskeletini oluşturur ve sonraki tüm adımlar bu kayıt
            üzerinden ilerler.
          </p>
        </div>

        {/* 5.3 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.3. Ana Sözleşmenin Hazırlanması ve Sermaye Taahhüdü
          </h3>
          <p className="leading-8 text-gray-700">
            MERSİS üzerinde oluşturulan ana sözleşme, Türk Ticaret
            Kanunu&apos;na uygun şekilde şirketin unvanını, faaliyet
            kapsamını, merkezini, sermaye ve pay dağılımını, müdür veya
            yönetim kurulu üyelerini belirler. Anonim Şirket&apos;te nakit
            sermayenin en az %25&apos;inin tescilden önce bloke edilmesi
            gerekirken, Limited Şirket&apos;te taahhüt edilen sermaye 24 ay
            içinde ödenebilir.
          </p>
        </div>

        {/* 5.4 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.4. Noter Onayları: İmza Beyannamesi ve Vekâletname
          </h3>
          <p className="leading-8 text-gray-700">
            Şirket müdürü/yetkilisinin imza beyannamesi noterde
            düzenlenir. Yabancı ortak Türkiye&apos;de fiziken hazır
            bulunmayacaksa, işlemleri yürütecek vekile Türkiye
            konsolosluğunda veya kendi ülkesindeki noterde apostilli
            vekâletname verilmesi yeterlidir; bu sayede süreç baştan sona
            uzaktan yönetilebilir.
          </p>
        </div>

        {/* 5.5 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.5. Ticaret Sicili Tescili ve Gazete İlanı
          </h3>
          <p className="leading-8 text-gray-700">
            Tüm belgeler ilgili Ticaret Sicili Müdürlüğü&apos;ne (Ticaret
            Odası bünyesinde) sunulur. Belgeler eksiksizse tescil
            genellikle aynı gün veya birkaç iş günü içinde tamamlanır ve
            kuruluş, Türkiye Ticaret Sicili Gazetesi&apos;nde ilan
            edilerek şirket tüzel kişilik kazanır.
          </p>
        </div>

        {/* 5.6 */}
        <div className="mt-14">
          <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
            5.6. Vergi Dairesi Kaydı, Yasal Defterler ve Banka Hesabı
          </h3>
          <p className="leading-8 text-gray-700">
            Tescilin ardından şirket, vergi dairesi tarafından resen
            vergi mükellefi olarak kaydedilir; yoklama memuru adres
            tespiti yapar. Yasal defterlerin (yevmiye defteri, defteri
            kebir, envanter defteri) açılışı noterde veya ticaret sicili
            üzerinden elektronik ortamda yapılır, e-Tebligat ve e-Defter
            başvuruları tamamlanır ve şirket adına kurumsal banka hesabı
            açılış süreci başlatılır.
          </p>
        </div>
      </section>

      {/* 6. DEVLET DESTEKLERİ */}
      <section id="destekler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Devlet Destekleri ve Yatırım Teşvik Sistemi
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          4875 sayılı Kanun uyarınca yabancı sermayeli şirketler, yerli
          şirketlerle aynı destek ve teşvik mevzuatına tabidir. Ortaklık
          yapısında yabancı sermaye bulunması, aşağıdaki destek
          kalemlerinden yararlanmayı prensip olarak engellemez.
        </p>

        <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ KOSGEB Destekleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Türkiye&apos;de Türk Ticaret Kanunu&apos;na göre kurulmuş ve
              KOBİ tanımına uyan (mikro/küçük/orta ölçekli) her işletme,
              ortaklık yapısına bakılmaksızın KOBİ Bilgi Sistemi&apos;ne
              (KBS) kaydolarak KOSGEB destek programlarına başvurabilir.
            </li>
            <li>
              Girişimcilik Destek Programı, KOBİGEL - KOBİ Gelişim Destek
              Programı, Ar-Ge, İnovasyon ve Endüstriyel Uygulama Destek
              Programı ile Dijital Dönüşüm Destek Programı gibi çok sayıda
              destek kalemi bu kapsamda yer alır; destekler hibe (geri
              ödemesiz) ve geri ödemeli kredi bileşenlerinden oluşur.
            </li>
            <li>
              Bazı destek kalemlerinde (örneğin belirli personel gideri
              destekleri) yeni istihdam edilecek personelin Türk vatandaşı
              olması şartı aranabilir; başvuru öncesi destek bazında bu
              şart teyit edilmelidir.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-blue-700">
            🏛️ Yatırım Teşvik Belgesi (Sanayi ve Teknoloji Bakanlığı)
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-blue-600">
            <li>
              Üretim, imalat veya belirli hizmet yatırımları için Sanayi ve
              Teknoloji Bakanlığı&apos;ndan alınan Yatırım Teşvik Belgesi;
              KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi,
              sigorta primi işveren hissesi desteği ve faiz/kâr payı
              desteği gibi kalemler içerir.
            </li>
            <li>
              2026 itibarıyla asgari sabit yatırım tutarı 1. ve 2.
              bölgelerde 15,1 milyon TL, 3-6. bölgelerde 7,5 milyon TL
              civarındadır; yüksek teknolojili üretim ve Stratejik Hamle
              Programı gibi özel kategorilerde bu eşikler önemli ölçüde
              yükselir.
            </li>
            <li>
              Teşvik sistemi bölgesel, öncelikli, büyük ölçekli ve
              stratejik yatırım kategorilerine ayrılır; hangi ilde ve
              sektörde hangi desteklerin uygulandığı yatırım yapılacak
              bölgeye göre değişir.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-green-700">
            ✅ Ticaret Bakanlığı İhracat Destekleri
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-green-600">
            <li>
              Türkiye&apos;de kurulan ve ihracata yönelen yabancı sermayeli
              şirketler, Türk menşeli ürün/hizmet ihracatına yönelik pazara
              giriş, marka tescili, yurt dışı fuar katılımı ve dijital
              pazarlama destek kalemlerinden diğer Türk şirketleriyle aynı
              şartlarda yararlanabilir.
            </li>
            <li>
              Teknoloji ve Ar-Ge yoğun projeler için TÜBİTAK 1501/1507
              destek programları ile teknopark vergi istisnaları da
              değerlendirmeye alınabilir; detaylar için{" "}
              <Link href="/blog/tubitak-1501-1507-ar-ge-destekleri-2026" className="text-orange-600 underline">
                TÜBİTAK 1501 ve 1507 Ar-Ge Destekleri
              </Link>{" "}
              ve{" "}
              <Link href="/blog/teknopark-nedir-avantajlari" className="text-orange-600 underline">
                Teknopark Nedir? Avantajları
              </Link>{" "}
              yazılarımıza bakabilirsiniz.
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-blue-700">
            🇹🇷 Cumhurbaşkanlığı Yatırım Ofisi
          </h3>
          <p className="leading-8 text-gray-700">
            Türkiye&apos;ye doğrudan yabancı yatırım çekmekle görevli resmi
            kurum olan{" "}
            <a
              href="https://www.invest.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Cumhurbaşkanlığı Yatırım Ofisi
            </a>{" "}
            (Invest in Türkiye), yabancı yatırımcılara sektör raporları,
            yatırım rehberleri ve izin/ruhsat süreçlerinde ücretsiz
            yönlendirme hizmeti sunar. Ofis, doğrudan şirket kuruluş
            işlemini yürütmez; büyük ölçekli veya stratejik yatırım
            projelerinde kamu kurumlarıyla koordinasyonu kolaylaştıran bir
            temas noktası olarak konumlanır.
          </p>
        </div>
      </section>

      {/* 7. SERBEST BÖLGELER */}
      <section id="serbest-bolgeler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Serbest Bölgeler: İhracata Yönelik Ek Avantaj
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Klasik yurt içi şirket kuruluşunun yanında, ihracat ağırlıklı
          üretim, depolama veya lojistik faaliyeti planlayan yabancı
          yatırımcılar için Türkiye&apos;deki serbest bölgeler ayrı bir
          alternatif oluşturur. Ticaret Bakanlığı denetiminde, 3218 sayılı
          Serbest Bölgeler Kanunu çerçevesinde İstanbul, İzmir, Mersin,
          Gaziantep gibi illerde faaliyet gösteren yirmiye yakın serbest
          bölge bulunuyor. Yabancı yatırımcı, ilgili serbest bölge
          müdürlüğünden faaliyet ruhsatı alarak ve bölge içinde arazi/bina
          kiralayarak veya hazır fabrika binası tahsis ettirerek burada bir
          şirket kurabilir; kuruluşun hukuki adımları (VKN, MERSİS, ticaret
          sicili) yurt içi şirketle büyük ölçüde aynıdır, ek olarak bölge
          işleticisinden kullanım ruhsatı alınması gerekir.
        </p>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-blue-700">
            🏗️ Serbest Bölgelerin Sağladığı Başlıca Avantajlar
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-blue-600">
            <li>
              Türkiye&apos;ye veya AB üyesi ülkelere giriş-çıkışta gümrük
              vergisi uygulanmaz; üçüncü ülke menşeli eşyanın bölgeye
              girişinde de gümrük vergisi alınmaz.
            </li>
            <li>
              Serbest bölgeye getirilen eşyadan KDV ve diğer ithalata bağlı
              vergiler tahsil edilmez; Türkiye&apos;den serbest bölgeye
              yapılan teslimler ihracat sayılır ve KDV&apos;siz
              faturalandırılır.
            </li>
            <li>
              İmalat ruhsatına sahip üretici firmaların, ihracata yönelik
              satışlarından elde ettiği kazançlar gelir/kurumlar vergisi
              istisnasından yararlanabilir; 1 Ocak 2025 itibarıyla bu
              istisna yalnızca yurt dışına yapılan ihracat kazançlarıyla
              sınırlandırılmış, yurt içi satış kazançları kapsam dışına
              alınmıştır.
            </li>
            <li>
              Serbest bölgede elde edilen kâr ve iratlar, kambiyo
              mevzuatına uygun şekilde Türkiye dahil istenilen bir ülkeye
              vergisiz olarak serbestçe transfer edilebilir.
            </li>
          </ul>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Serbest bölge yapısı, faaliyetin büyük ölçüde ihracata dayandığı
          üretim, depolama ve lojistik odaklı projelerde anlamlı bir
          maliyet avantajı sağlar; yerel pazara doğrudan satış ağırlıklı
          iş modellerinde ise klasik yurt içi şirket yapısı genellikle
          daha uygundur. Hangi yapının faaliyet konunuza uyduğunu
          birlikte değerlendiriyoruz; güncel istisna kapsamı için{" "}
          <a
            href="https://ticaret.gov.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Ticaret Bakanlığı&apos;nın
          </a>{" "}
          resmi kaynakları esas alınmalıdır.
        </p>
      </section>

      {/* 8. VERGİ SİSTEMİ */}
      <section id="vergi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Vergi Sistemi ve Kolaylıklar (2026)
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Yabancı sermayeli şirketler, yerli şirketlerle tamamen aynı vergi
          rejimine tabidir; ayrıca ayrı bir yabancı sermaye vergisi yoktur.
          Buna karşılık belirli faaliyet alanlarında önemli indirim ve
          istisnalardan yararlanmak mümkündür.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Vergi/Kalem</th>
                <th className="p-5">Oran</th>
                <th className="p-5">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kurumlar Vergisi</td>
                <td className="p-5">%25</td>
                <td className="p-5">Bankalar ve finansal kuruluşlar için %30 uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">KDV (Genel Oran)</td>
                <td className="p-5">%18 (indirimli %1 / %10)</td>
                <td className="p-5">Temel gıda ve belirli konut teslimlerinde indirimli oranlar geçerlidir; ihracat teslimlerinde KDV istisnası uygulanır</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kâr Payı Stopajı</td>
                <td className="p-5">%15 (ÇVÖA ile düşürülebilir)</td>
                <td className="p-5">Yurt dışına yapılan kâr payı dağıtımında uygulanır; Türkiye&apos;nin 90&apos;dan fazla ülkeyle Çifte Vergilendirmeyi Önleme Anlaşması bulunur</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Hizmet İhracı Kazanç İndirimi</td>
                <td className="p-5">%80</td>
                <td className="p-5">Yazılım, mühendislik, mimarlık, tasarım, veri işleme, çağrı merkezi, eğitim ve sağlık gibi Türkiye&apos;de yerleşik olmayanlara verilen hizmetlerden elde edilen kazancın %80&apos;i kurumlar vergisi matrahından indirilir</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Özellikle yurt dışına yazılım, mühendislik, tasarım, tıbbi
            raporlama veya çağrı merkezi hizmeti verecek yatırımcılar için
            Kurumlar Vergisi Kanunu&apos;nun 10/1-ğ maddesindeki %80&apos;lik
            hizmet ihracı indirimi, Türkiye&apos;yi bölgesel bir hizmet
            ihracı üssü haline getiren en güçlü teşviklerden biridir. Ayrıca
            Ocak 2026&apos;dan itibaren geçerli olan Gelir Vergisi Kanunu
            mükerrer 20/D maddesi kapsamında, son 3 yıldır Türkiye&apos;de
            yerleşik olmayan ve Türkiye&apos;ye yerleşen gerçek kişiler,
            yurt dışı kaynaklı kazançları için 20 yıl gelir vergisi istisnası
            elde edebiliyor; bu istisna şirketin kendisine değil, kurucu
            veya ortağın kişisel gelirine yönelik ayrı bir düzenlemedir.
            Güncel oranların teyidi için{" "}
            <a
              href="https://www.gib.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 underline"
            >
              Gelir İdaresi Başkanlığı
            </a>{" "}
            resmi kaynağı esas alınmalıdır.
          </p>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kurumlar vergisi, yıl içinde üçer aylık dönemler halinde geçici
          vergi olarak aynı oran üzerinden peşin ödenir ve yıllık
          beyannamede mahsup edilir. Yeni kurulan şirketler için ilk yıl
          herhangi bir asgari kâr şartı aranmaz; beyanname dönemsel gerçek
          kâr/zarara göre hazırlanır. Bu takvimin düzenli takibi, kuruluş
          sonrası muhasebe hizmetimizin bir parçasıdır.
        </p>
      </section>

      {/* 9. MALİYETLER */}
      <section id="maliyetler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. Kuruluş ve İşletme Maliyetleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kuruluş maliyeti; noter ücretleri, ticaret sicili harçları, oda
          kayıt ücreti, gazete ilan bedeli ve tercüme/apostil giderlerinden
          oluşur. Aşağıdaki rakamlar gösterge niteliğindedir; güncel harç
          ve noter tarifelerine, şirketin sermaye tutarına ve faaliyet
          hacmine göre değişebilir.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-5">Kalem</th>
                <th className="p-5">Limited Şirket</th>
                <th className="p-5">Anonim Şirket</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Asgari Sermaye</td>
                <td className="p-5">50.000 TL</td>
                <td className="p-5">250.000 TL (halka kapalı, kayıtlı sermaye sistemi dışı)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluş İşlem Bedeli (gösterge)</td>
                <td className="p-5">Yaklaşık 50.000 - 80.000 TL</td>
                <td className="p-5">Yaklaşık 65.000 - 100.000 TL</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-5 font-semibold">Kuruluş Süresi</td>
                <td className="p-5">Genellikle 1-2 hafta</td>
                <td className="p-5">Genellikle 1-2 hafta</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 leading-8 text-gray-700">
          Kuruluşa ek olarak, tescilden sonra düzenli olarak aylık
          muhasebe, KDV ve kurumlar vergisi beyannameleri, bordro (varsa
          çalışan için) ve yıllık mali tablo hazırlığı gerekir. Bu hizmetin
          maliyeti; şirketin işlem hacmi, fatura sayısı ve çalışan
          sayısına göre değişir. Şirketinizin profiline uygun net bir
          kuruluş ve aylık muhasebe teklifi için{" "}
          <Link href="/#contact" className="text-orange-600 underline">
            bizimle iletişime geçebilirsiniz.
          </Link>
        </p>
      </section>

      {/* 10. BANKA HESABI */}
      <section id="banka" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. Banka Hesabı Açma Süreci
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ticaret sicili tescili tamamlandıktan sonra şirket adına kurumsal
          banka hesabı açılabilir. Türkiye&apos;deki kurumsal hesap açılış
          pratiği, birçok yurt dışı yapıya kıyasla daha öngörülebilir olsa
          da bazı pratik noktalara dikkat etmek gerekir.
        </p>
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-8">
          <h3 className="mb-6 text-2xl font-bold text-yellow-800">
            🏦 Banka Hesabı Açma Sürecinde Bilinmesi Gerekenler
          </h3>
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-yellow-600">
            <li>
              Kurumsal hesap açılışı için şirketin tescil edilmiş olması,
              vergi levhasının çıkmış olması ve imza yetkilisinin
              belirlenmiş olması gerekir; hesap tescilden sonraki adımdır.
            </li>
            <li>
              Çoğu banka, kurumsal hesap açılışında yetkili imza sahibinin
              en az bir kez şubeye fiziken gelmesini talep eder; tamamen
              uzaktan (video ile) kurumsal hesap açan banka sayısı sınırlıdır.
            </li>
            <li>
              Kara para aklamayı önleme (AML) mevzuatı gereği bankalar,
              gerçek faydalanıcı (UBO) beyanı, faaliyet konusu ve fon
              kaynağına ilişkin durum tespiti (due diligence) uygular; net
              ve tutarlı bir iş planı, başvuru sürecini hızlandırır.
            </li>
            <li>
              Banka süreci tamamlanana kadar, ilk dönem uluslararası
              tahsilat ve ödemeler için Wise Business gibi fintech
              çözümleri geçici bir ara adım olarak kullanılabilir; ancak
              bu çözümler Türkiye&apos;deki tam yetkili kurumsal banka
              hesabının yerini almaz.
            </li>
          </ul>
        </div>
      </section>

      {/* 11. İKAMET İZNİ */}
      <section id="ikamet" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. İkamet İzni ve Çalışma İzni Bağlantısı
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de şirket kurmak, tek başına otomatik bir ikamet
          veya çalışma izni doğurmaz; bunlar ayrı süreçlerdir. Ancak aktif
          faaliyet gösteren bir şirkete sahip olmak, bu izinlere başvuru
          için güçlü bir dayanak oluşturur.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🛂 Kısa Dönem İkamet İzni
            </h3>
            <p className="leading-8 text-gray-700">
              Şirket kurucusu/ortağı olan yabancılar, faaliyetin gerçek
              olduğunu ve iş yeri bağlantısını gösteren belgelerle İl Göç
              İdaresi Müdürlüğü&apos;nden kısa dönem ikamet izni talep
              edebilir. Değerlendirmede şirketin fiili faaliyeti, adres ve
              sermaye yapısı dikkate alınır. Başvuru; şirketin vergi
              levhası, sermaye taahhüdünün ödendiğine dair belgeler,
              adres kayıt belgesi ve sağlık sigortasıyla birlikte e-İkamet
              sistemi üzerinden yapılır; ikamet izni kartı genellikle
              1-2 hafta içinde teslim edilir.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              💼 Çalışma İzni (Bağımsız Çalışma İzni)
            </h3>
            <p className="leading-8 text-gray-700">
              Şirkette fiilen yöneticilik yapacak veya kendi nam ve hesabına
              çalışacak yabancı ortaklar için çalışma izni gerekir. Kural
              olarak her bir yabancı çalışan için 5 Türk vatandaşı
              istihdamı aranır; başvuran şirket ortağıysa bu şart, verilecek
              1 yıllık iznin yalnızca son 6 ayı için uygulanır.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="leading-8 text-gray-700">
            Belirli yatırım eşiklerinin aşılması durumunda (örneğin sabit
            sermaye yatırımı, gayrimenkul edinimi, istihdam yaratma veya
            banka mevduatı yoluyla asgari 400.000-500.000 ABD Doları
            aralığındaki yatırım rotalarından biri), yatırım yoluyla Türk
            vatandaşlığı da bir seçenek haline gelebilir. Güncel eşikler ve
            şartlar zaman zaman güncellendiğinden, başvuru öncesinde ilgili
            mevzuatın teyit edilmesi gerekir.
          </p>
        </div>
      </section>

      {/* 12. KURULUŞ VE MUHASEBE SÜRECİNİZİ BİZ YÖNETİYORUZ */}
      <section id="yukumlulukler" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Kuruluş ve Muhasebe Sürecinizi Kim Yönetiyor?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Türkiye&apos;de şirket kurmak isteyen yabancı yatırımcılar için en
          kritik konulardan biri, kuruluş sonrasında düzenli muhasebe,
          bordro ve vergi beyan yükümlülüklerinin kim tarafından ve nasıl
          yürütüleceğidir.
        </p>
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 Kuruluştan Aylık Muhasebeye Kadar Tüm Süreç Bizde
          </h3>
          <p className="leading-8 text-gray-700">
            VKN alınmasından MERSİS kaydına, ana sözleşmenin hazırlanmasından
            ticaret sicili tesciline, vergi dairesi ve oda kayıtlarından
            banka hesabı açılış sürecine kadar Türkiye&apos;de şirket
            kuruluşunuzu baştan sona biz yürütüyoruz. Kuruluş
            tamamlandıktan sonra da aylık muhasebe, KDV ve kurumlar vergisi
            beyannameleri, bordro ve yasal raporlama hizmetinizi, ayrı bir
            yerel mali müşavir veya danışmanlık firması aramanıza gerek
            kalmadan biz sağlıyoruz.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              Sürecin tamamı için bizimle iletişime geçebilirsiniz.
            </Link>
          </p>
        </div>
      </section>

      {/* 13. DİKKAT EDİLMESİ GEREKENLER */}
      <section id="dikkat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          13. Dikkat Edilmesi Gerekenler
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Kuruluş süreci hukuki açıdan yerli yatırımcıyla aynı olsa da,
          yabancı yatırımcıların pratikte sıkça karşılaştığı bazı noktalar
          süreci hızlandırmak için önceden planlanmalıdır.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Limited/Anonim Şirket kararını büyüme ve ortaklık planınıza göre verin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Apostil ve noter tercüme süreçlerini kuruluş takviminden önce planlayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Banka hesabı açılışı için imza yetkilisinin şubeye gelme ihtimalini göz önünde bulundurun
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Şirket sahipliği ile ikamet/çalışma izninin ayrı süreçler olduğunu unutmayın
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Hizmet ihracı yapıyorsanız %80&apos;lik kazanç indirimi şartlarını önceden değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ İhracat ağırlıklı üretim/lojistikte serbest bölge alternatifini de değerlendirin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Yatırım teşvik belgesi hedefliyorsanız asgari sabit yatırım tutarlarını kontrol edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ KOSGEB başvurusu öncesi destek bazında istihdam şartlarını teyit edin
          </div>
          <div className="rounded-xl border p-6 font-semibold shadow-sm text-gray-800">
            ✅ Kuruluş sonrası muhasebe ve raporlama sürecinizi ayrı bir firma aramadan bize devredebilirsiniz
          </div>
        </div>
      </section>

      {/* 14. SIK SORULAN SORULAR */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          14. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yabancı bir kişi Türkiye&apos;de %100 kendi şirketini kurabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. 4875 sayılı Doğrudan Yabancı Yatırımlar Kanunu
              kapsamında yabancı gerçek veya tüzel kişiler, Türk ortağa
              ihtiyaç duymadan şirketin %100&apos;üne sahip olabilir ve
              yönetiminde doğrudan görev alabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirket kurmak için Türkiye&apos;de fiziken bulunmam gerekir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Vergi numarası alınması, MERSİS kaydı, ana sözleşmenin
              hazırlanması ve ticaret sicili tescili, apostilli
              vekâletname ile bir vekil aracılığıyla uzaktan
              yürütülebilir. Fiziken bulunma ihtiyacı genellikle yalnızca
              banka hesabı açılışında ortaya çıkar.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Limited Şirket mi Anonim Şirket mi daha uygun?
            </h3>
            <p className="leading-8 text-gray-700">
              KOBİ ölçekli ticaret, hizmet ve danışmanlık faaliyetleri için
              düşük sermaye şartı ve esnek yapısı nedeniyle Limited Şirket
              genellikle tercih edilir. Büyük ölçekli üretim yatırımları,
              yatırım teşvik belgesi başvuruları veya çok ortaklı kurumsal
              yapılar için Anonim Şirket daha uygun olabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şirket kurmak otomatik olarak oturma izni sağlar mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Hayır. Şirket kurmak ile ikamet/çalışma izni almak ayrı
              süreçlerdir. Aktif faaliyet gösteren bir şirkete sahip olmak,
              ikamet izni başvurusu için güçlü bir dayanak oluşturur; ancak
              başvuru İl Göç İdaresi tarafından ayrıca değerlendirilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yabancı sermayeli şirketler KOSGEB ve Ticaret Bakanlığı desteklerinden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Türkiye&apos;de kurulmuş ve ilgili kritere (KOBİ tanımı,
              ihracat faaliyeti vb.) uyan şirketler, ortaklık yapısındaki
              yabancı sermaye oranından bağımsız olarak destek
              programlarına başvurabilir. Bazı destek kalemlerinde istihdam
              edilecek personelin uyruğuna ilişkin özel şartlar bulunabilir;
              bu şartlar destek bazında değerlendirilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Serbest bölgede şirket kurmak, yurt içinde kurmaktan daha mı avantajlı?
            </h3>
            <p className="leading-8 text-gray-700">
              Bu, faaliyet konusuna bağlıdır. İhracat ağırlıklı üretim,
              depolama veya lojistik faaliyetlerinde serbest bölge; gümrük
              ve KDV muafiyetleri ile ihracat kazancı vergi istisnası
              sayesinde belirgin bir maliyet avantajı sağlar. Yerel pazara
              doğrudan satış yapacak şirketler için ise klasik yurt içi
              şirket yapısı genellikle daha uygundur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş ve yıllık işletme maliyeti ne kadar tutar?
            </h3>
            <p className="leading-8 text-gray-700">
              Kuruluş işlem bedeli, şirket türü ve sermaye tutarına göre
              gösterge olarak Limited Şirket&apos;te 50.000-80.000 TL,
              Anonim Şirket&apos;te 65.000-100.000 TL aralığında
              değişebilir. Buna ek olarak aylık muhasebe hizmeti, işlem
              hacmi ve çalışan sayısına göre ayrıca fiyatlandırılır; net
              rakam için iletişime geçmenizi öneririz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş süreci ne kadar sürer?
            </h3>
            <p className="leading-8 text-gray-700">
              Belgeler eksiksiz hazırlandığında MERSİS ön kaydından ticaret
              sicili tesciline kadar süreç genellikle 1-2 hafta içinde
              tamamlanır. Banka hesabı açılışı ve operasyonel hazırlıklar
              dahil edildiğinde toplam süreç 3-4 haftaya kadar uzayabilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kuruluş sonrasında hangi düzenli yükümlülükler doğar?
            </h3>
            <p className="leading-8 text-gray-700">
              Aylık KDV beyannamesi, üçer aylık geçici vergi beyannamesi,
              yıllık kurumlar vergisi beyannamesi, e-Defter/e-Fatura
              kayıtları ve varsa çalışan bordrosu düzenli olarak takip
              edilmesi gereken temel yükümlülüklerdir. Bu süreçlerin
              tamamını kuruluş sonrasında biz üstleniyoruz; ayrıca yerel
              bir mali müşavir aramanıza gerek kalmıyor.
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
          Türkiye, yabancı sermayeye tanıdığı eşit hukuki statü, stratejik
          konumu, rekabetçi maliyet yapısı ve hizmet ihracına yönelik güçlü
          vergi teşvikleriyle yabancı yatırımcılar için ciddi bir kuruluş
          alternatifi sunuyor. Ancak doğru şirket türünün ve yapının
          (klasik yurt içi şirket veya serbest bölge) seçilmesi, belgelerin
          eksiksiz ve doğru şekilde hazırlanması, banka hesabı sürecinin
          gerçekçi planlanması ve kuruluş sonrası muhasebe
          yükümlülüklerinin düzenli yürütülmesi, sürecin sorunsuz
          ilerlemesi için belirleyicidir. Bu kararları iş modelinize uygun
          şekilde vermek ve tüm süreci profesyonel destekle yönetmek için
          bizimle iletişime geçebilirsiniz.
        </p>
      </section>

      {/* İLGİLİ YAZILAR */}
      <section className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          İlgili Yazılar
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/blog/sahis-limited-anonim-sirket-karsilastirma"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKET KURULUŞU • GİRİŞİMCİLİK • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Şahıs Şirketi mi, Limited Şirket mi Yoksa Anonim Şirket mi?</h3>
        </Link>
        <Link
          href="/blog/anonim-limited-sirket-asgari-sermaye-artirimi-2026"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">ŞİRKETLER HUKUKU • ASGARİ SERMAYE • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Anonim ve Limited Şirketlerde Asgari Sermaye Artırımı: 31 Aralık 2026 Son Tarih</h3>
        </Link>
        <Link
          href="/blog/yurt-disinda-sirket-nasil-kurulur-avantajlari"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:border-orange-500 hover:shadow-md"
        >
          <div className="mb-2 text-sm font-semibold text-orange-600">YURT DIŞI ŞİRKET • İHRACAT • 2026</div>
          <h3 className="text-lg font-bold text-[#071A2F]">Yurt Dışında Şirket Nasıl Kurulur? Avantajları Nelerdir?</h3>
        </Link>
        </div>
      </section>
    </BlogLayout>
  );
}
