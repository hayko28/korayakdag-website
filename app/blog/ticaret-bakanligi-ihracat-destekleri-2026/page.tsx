import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Ticaret Bakanlığı İhracat Destekleri 2026: Pazara Giriş, Fuar, E-İhracat Rehberi | Koray Akdağ",
  description:
    "Ticaret Bakanlığı'nın 5973 sayılı Karar kapsamındaki Pazara Giriş Belgesi, Yurt Dışı Marka Tescili, Fuar Katılımı, Birim Kira, Tanıtım, Küresel Tedarik Zinciri ve E-İhracat destek programlarının 2026 güncel oranları, üst limitleri, harcama-fatura-başvuru sırası, ödeme süreci ve sık yapılan hatalarla kapsamlı rehber.",
  keywords: [
    "Ticaret Bakanlığı ihracat destekleri",
    "5973 sayılı karar",
    "pazara giriş belgesi desteği",
    "yurt dışı marka tescil desteği",
    "yurt dışı fuar desteği",
    "birim kira desteği",
    "e-ihracat destek programı",
    "küresel tedarik zinciri yetkinlik desteği",
    "tanıtım desteği ihracat",
    "Destek Yönetim Sistemi DYS",
    "ihracat destekleri 2026",
    "İhracatçı Birlikleri destek başvurusu",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Ticaret Bakanlığı İhracat Destekleri: Pazara Giriş, Fuar, E-İhracat ve Diğer Programlar (2026 Rehberi)"
      description="Turquality dışında kalan başlıca Ticaret Bakanlığı ihracat destek kalemlerinin (Pazara Giriş Belgesi, Yurt Dışı Marka Tescili, Fuar, Birim Kira, Tanıtım, Küresel Tedarik Zinciri, E-İhracat) 2026 güncel oranları, üst limitleri, harcama-başvuru sırası, ödeme süreci ve geçersiz sayılan harcamalarla kapsamlı, uygulamaya dönük rehber."
      category="İHRACAT DESTEKLERİ • TİCARET BAKANLIĞI • 2026"
      date="2026"
      readTime="20 Dakika"
      coverImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      slug="ticaret-bakanligi-ihracat-destekleri-2026"
    >
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
        <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
          📌 Bu Rehberde Neler Bulacaksınız?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ticaret Bakanlığı, Turquality&apos;nin yanı sıra 5973 sayılı
          İhracat Destekleri Hakkında Karar ve 5986 sayılı E-İhracat
          Destekleri Hakkında Karar çerçevesinde onlarca farklı destek
          kalemi yürütüyor. Bu yazıda Turquality&apos;ye ayrıca değinmeden
          (bu konuyu <Link href="/blog/turquality-programi-nedir-sartlari-destekleri-2026" className="text-orange-600 underline">ayrı bir rehberde</Link> zaten
          detaylı işledik), bir ihracatçının en sık ihtiyaç duyduğu Pazara
          Giriş Belgelendirme, Yurt Dışı Marka Tescili, Fuar Katılımı, Yurt
          Dışı Birim (mağaza/depo/ofis) Kira, Tanıtım, Küresel Tedarik
          Zinciri Yetkinlik ve E-İhracat destek programlarını; oranları, 2026
          güncel üst limitleri, harcama ile başvurunun hangi sırayla
          yapılacağı ve ödemenin ne zaman geleceğiyle birlikte anlatıyoruz.
        </p>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Hangi destek hangi harcamayı, ne oranda karşılıyor?</li>
          <li>✔ Harcama/fatura önce mi yapılıyor, başvuru önce mi?</li>
          <li>✔ DYS üzerinden başvuru ve belge yükleme nasıl işliyor?</li>
          <li>✔ İnceleme ne kadar sürüyor, ödeme ne zaman ve nasıl geliyor?</li>
          <li>✔ Hangi harcamalar kesinlikle geçersiz sayılıyor?</li>
          <li>✔ Hangi destek programı sizin şirketiniz için uygun?</li>
        </ul>
      </div>

      {/* İÇİNDEKİLER */}
      <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
          📑 İçindekiler
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="#sistem" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            1. Sistem Nasıl İşliyor? (5973 Sayılı Karar, DYS, İhracatçı Birlikleri)
          </Link>
          <Link href="#once-sonra" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            2. Harcama mı Önce, Başvuru mu Önce?
          </Link>
          <Link href="#pazara-giris-belgesi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            3. Pazara Giriş Belgelendirme Desteği
          </Link>
          <Link href="#marka-tescil" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            4. Yurt Dışı Marka Tescil, Proje ve Pazar Araştırması Destekleri
          </Link>
          <Link href="#fuar" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            5. Yurt Dışı Fuar Katılım Destekleri
          </Link>
          <Link href="#birim-kira" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            6. Yurt Dışı Birim (Mağaza/Depo/Ofis) Kira Desteği
          </Link>
          <Link href="#tanitim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            7. Tanıtım ve Reklam Destekleri
          </Link>
          <Link href="#ktz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            8. Küresel Tedarik Zinciri (KTZ) Yetkinlik Desteği
          </Link>
          <Link href="#e-ihracat" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9. E-İhracat Destek Programı
          </Link>
          <Link href="#hizmet-ihracati" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            9.5. Bilişim, Danışmanlık, Sağlık Turizmi: Hizmet İhracatına Farklı Karar
          </Link>
          <Link href="#limit-tablosu" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            10. 2026 Üst Limitler Özet Tablosu
          </Link>
          <Link href="#gecersiz" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            11. Hangi Harcamalar Geçersiz Sayılır?
          </Link>
          <Link href="#odeme" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            12. Ödeme Süreci: Kim Öder, Ne Zaman Öder?
          </Link>
          <Link href="#hangi-destek" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            13. Hangi Destek Programı Size Uygun?
          </Link>
          <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            14. Sık Sorulan Sorular
          </Link>
          <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
            15. Sonuç
          </Link>
        </div>
      </div>

      {/* SEKTÖR YÖNLENDİRME KUTUSU */}
      <div className="mt-16 rounded-2xl border-2 border-orange-300 bg-orange-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-[#071A2F]">
          🧭 Mal/Ürün mü İhraç Ediyorsunuz, Hizmet mi? Önce Bunu Netleştirin
        </h2>
        <p className="mb-4 leading-8 text-gray-700">
          Bu yazının <strong>3&ndash;9&apos;uncu bölümlerinde</strong> anlatılan
          Pazara Giriş Belgesi, Marka Tescili, Fuar, Birim Kira, Tanıtım, KTZ
          ve E-İhracat destekleri <strong>5973 sayılı Karar</strong>&apos;a
          dayanır ve öncelikle <strong>fiziksel mal/ürün ihraç eden</strong>{" "}
          şirketleri hedefler.
        </p>
        <p className="leading-8 text-gray-700">
          Yazılım/SaaS, bilişim hizmetleri, danışmanlık, sağlık turizmi,
          eğitim gibi <strong>hizmet ihracatı</strong> yapan bir şirketseniz,
          büyük ölçüde <strong>farklı bir Karar</strong>&apos;a (10962 sayılı)
          tabisiniz. Karışıklığa mahal vermemek için doğrudan{" "}
          <Link href="#hizmet-ihracati" className="font-semibold text-orange-600 underline">
            9.5&apos;inci bölüme
          </Link>{" "}
          geçebilirsiniz.
        </p>
      </div>

      {/* 1. SİSTEM NASIL İŞLİYOR */}
      <section id="sistem" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          1. Sistem Nasıl İşliyor? (5973 Sayılı Karar, DYS, İhracatçı Birlikleri)
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Turquality dışında kalan ihracat desteklerinin büyük bölümü,{" "}
          <strong>5973 sayılı İhracat Destekleri Hakkında Karar</strong> ve
          bu Karar&apos;a ilişkin Genelgeler çerçevesinde{" "}
          <strong>Ticaret Bakanlığı İhracat Genel Müdürlüğü</strong>{" "}
          tarafından yürütülür. E-İhracat destekleri ise ayrı bir Karar&apos;a
          (5986 sayılı E-İhracat Destekleri Hakkında Karar) dayanır &mdash;
          bu farkı bölüm 9&apos;da ayrıca açıklıyoruz.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Tüm başvurular <strong>Destek Yönetim Sistemi (DYS)</strong>{" "}
          üzerinden yapılır. Sistemdeki iş akışında üç taraf vardır:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">🏢</div>
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">Yararlanıcı (Şirket)</h3>
            <p className="text-sm leading-7 text-gray-700">
              İhracatçı birliğine üye olmalı, DYS&apos;ye kayıtlı olmalı ve
              MERSİS/Ticaret Sicili bilgilerini güncel tutmalıdır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">🧾</div>
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İncelemeci Kuruluş (İBGS)</h3>
            <p className="text-sm leading-7 text-gray-700">
              Şirketin üyesi olduğu İhracatçı Birlikleri Genel Sekreterliği,
              başvuruları ilk elden inceler, eksik belge bildirir ve
              çoğu destekte ödemeyi sonuçlandırır.
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
            <div className="mb-3 text-4xl">🏛️</div>
            <h3 className="mb-2 text-lg font-bold text-[#071A2F]">İhracat Genel Müdürlüğü</h3>
            <p className="text-sm leading-7 text-gray-700">
              Mevzuatı belirler, tereddütlü konularda nihai görüşü verir,
              bazı destek/proje onaylarını doğrudan sonuçlandırır.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            💡 Üst Limitler Her Yıl Otomatik Güncellenir
          </h3>
          <p className="leading-8 text-gray-700">
            Kararda TL olarak belirlenen tüm üst limitler, her takvim yılı
            başında bir önceki yılın <strong>(TÜFE + Yİ-ÜFE)/2</strong>{" "}
            oranında güncellenir. Bu nedenle yazı boyunca verdiğimiz 2026
            rakamları bir önceki yıla göre otomatik artışın sonucudur ve
            2027&apos;de yeniden güncellenecektir.
          </p>
        </div>
      </section>

      {/* 2. ÖNCE-SONRA */}
      <section id="once-sonra" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          2. Harcama mı Önce, Başvuru mu Önce?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bu, ihracat desteklerinde şirketlerin en çok karıştırdığı ve en
          pahalıya mal olabilecek noktadır. Destekler bu açıdan iki gruba
          ayrılır:
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-green-700">
              ✅ Doğrudan Ödeme Başvurusu (Harcama Önce)
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Pazara Giriş Belgesi Desteği, Yurt Dışı Marka Tescil Desteği
              ve <strong>fuara bireysel/münferit katılımcı olarak
              katılan bir şirketin standart stant/katılım desteği</strong>{" "}
              bu grupta yer alır; ön onay şartı aranmaz. Şirket önce
              harcamayı/katılımı yapar, faturayı keser; ardından ödeme
              belgesi tarihinden itibaren (fuarda{" "}
              <strong>fuar bitimini izleyen 90 gün</strong>, belgelendirme
              kalemlerinde genellikle <strong>6 ay içinde</strong>)
              İBGS&apos;ye ödeme başvurusunda bulunur.
            </p>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ⛔ Ön Onaya Bağlı Destekler (Başvuru Önce)
            </h3>
            <p className="mb-4 leading-8 text-gray-700">
              Tanıtım/reklam faaliyetleri, birim kira, KTZ yetkinlik
              projesi ve e-ihracat destekleri gibi{" "}
              <strong>faaliyet bazlı</strong> kalemlerde,
              faaliyetten/harcamadan önce DYS üzerinden ön onay başvurusu
              yapılması zorunludur. Fuar kapsamında da yalnızca{" "}
              <strong>organizatörün</strong> yürüttüğü tadım etkinliği,
              sosyal medya etkileyicisi çalışması, ikili iş görüşmesi
              alanı ve trend alanı gibi tanıtım faaliyetleri bu gruba
              girer (organizatör bunun için fuardan en az 1 ay önce ön
              onay başvurusu yapmak zorundadır) &mdash; katılımcı
              firmanın kendi stant desteği bu kurala tabi değildir.{" "}
              <strong>Ön onay tarihinden önce yapılan bu tür harcamalar,
              geriye dönük olarak desteklenmez.</strong>
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            ⚠️ Pratikte En Sık Karıştırılan Nokta
          </h3>
          <p className="leading-8 text-gray-700">
            &quot;Fuara katılmadan önce mutlaka ön onay almam gerekir&quot;
            algısı yaygın ama standart katılımcı desteği için yanlıştır.
            Bakanlığın o yıl için ilan ettiği destek kapsamındaki fuarlar
            listesinde yer alan bir fuara bireysel katılımcı olarak
            katılıp bedelini ödemek ve ardından{" "}
            <strong>90 gün içinde</strong> belgelerle başvurmak, kuralına
            uygun ve normal bir süreçtir. Asıl dikkat edilmesi gereken:
            (1) fuarın gerçekten o yılki resmî listede olup olmadığını
            katılımdan önce teyit etmek, (2) organizatör üzerinden
            yürütülen ayrıca tanıtım faaliyetlerine katılıyorsanız
            bunların ön onay gerektirdiğini bilmek, (3) tanıtım, birim
            kira, KTZ ve e-ihracat gibi gerçekten ön onaylı kalemlerde
            harcamayı onaydan önce başlatmamak.
          </p>
        </div>
      </section>

      {/* 3. PAZARA GİRİŞ BELGESİ */}
      <section id="pazara-giris-belgesi" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          3. Pazara Giriş Belgelendirme Desteği
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          5973 sayılı Karar&apos;ın 3&apos;üncü maddesi kapsamındaki bu
          destek, ürünün hedef pazara girebilmesi için zorunlu olan veya
          rekabet avantajı sağlayan belgelerin alım giderlerini karşılar.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📜 Kapsamı</h4>
            <ul className="space-y-2 text-sm leading-7 text-gray-700">
              <li>✔ CE, ISO, çevre/kalite/insan güvenliği sertifikaları</li>
              <li>✔ Ürüne ilişkin test ve analiz raporları</li>
              <li>✔ Tarım ürünleri laboratuvar analiz ve sertifikasyon giderleri</li>
              <li>✔ Ruhsatlandırma ve kayıt işlemlerine ilişkin giderler</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">👥 Kimler Başvurabilir</h4>
            <p className="text-sm leading-7 text-gray-700">
              İlgili ihracatçı birliğine üye, DYS kaydı bulunan tüm ihracatçı
              şirketler. İmalatçı olma şartı çoğu belge türünde aranmaz;
              ürünü ihraç eden şirket başvurabilir.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 Oran ve 2026 Üst Limiti</h3>
            <p className="leading-8 text-gray-700">
              Temel destek oranı <strong>%50</strong>&apos;dir. Şirket
              başına yıllık üst limit 2026 için{" "}
              <strong>19.728.672 TL</strong>&apos;dir.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🔄 Süreç</h3>
            <p className="leading-8 text-gray-700">
              Ön onay gerekmez. Belge/sertifika alınır, fatura kesilir,
              ödeme belgesi tarihinden itibaren <strong>6 ay
              içinde</strong> İBGS&apos;ye başvurulur.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; CE ve Test Raporu Giderleri
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir elektrikli ev aletleri üreticisi, Avrupa pazarına
            girebilmek için ürünlerine CE sertifikası aldırıyor ve akredite
            bir laboratuvardan test raporu satın alıyor; toplam gider{" "}
            <strong>900.000 TL</strong>. %50 oranla{" "}
            <strong>450.000 TL&apos;ye kadar</strong> destek alınabilir
            &mdash; bu tutar 2026 yıllık üst limitin (19.728.672 TL) çok
            altında kaldığı için tamamı değerlendirmeye girer.
          </p>
        </div>
      </section>

      {/* 4. MARKA TESCİL / PROJE / PAZAR ARAŞTIRMASI */}
      <section id="marka-tescil" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          4. Yurt Dışı Marka Tescil, Proje ve Pazar Araştırması Destekleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Bir markanın yurt dışı büyümesinin en erken aşamasında ihtiyaç
          duyulan üç destek kalemi, aynı mantıkla (harcama önce, başvuru
          sonra) işler:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">™️ Yurt Dışı Marka Tescili (Md.4)</h4>
            <p className="mb-3 text-sm leading-7 text-gray-700">
              Yurt içinde tescilli bir markanın yurt dışında tescili ve
              korunmasına ilişkin vekil/avukatlık ücretleri ve resmî
              harçlar (WIPO/Madrid Protokolü veya doğrudan ülke bazlı
              başvuru).
            </p>
            <p className="text-sm font-semibold text-orange-600">
              2026 üst limit: 3.698.274 TL/yıl
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📊 Pazara Giriş Projesi Hazırlama (Md.5)</h4>
            <p className="mb-3 text-sm leading-7 text-gray-700">
              Pazara giriş stratejisi için alınan danışmanlık ve rapor
              alım giderleri.
            </p>
            <p className="text-sm font-semibold text-orange-600">
              2026 üst limit: 983.843 TL/yıl
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🌍 Yurt Dışı Pazar Araştırması (Md.6)</h4>
            <p className="mb-3 text-sm leading-7 text-gray-700">
              Yurt dışına pazar araştırması amacıyla yapılan seyahatlerin
              ulaşım ve konaklama giderleri.
            </p>
            <p className="text-sm font-semibold text-orange-600">
              2026 üst limit: faaliyet başına 490.559 TL
              (kişi başı günlük konaklama 12.264 TL)
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; Marka Tescili
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir kozmetik markası, Madrid Protokolü üzerinden 7
            Avrupa ülkesinde marka tescili başvurusu için vekil ve resmî
            harç olarak toplam <strong>400.000 TL</strong> ödüyor. %50
            oranla <strong>200.000 TL&apos;ye kadar</strong> destek
            alınabilir; bu konudaki daha ayrıntılı marka/patent stratejisi
            için ayrı bir fikri mülkiyet danışmanlığı süreci de
            yürütülebilir.
          </p>
        </div>
      </section>

      {/* 5. FUAR */}
      <section id="fuar" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          5. Yurt Dışı Fuar Katılım Destekleri
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          5973 sayılı Karar&apos;ın 7&apos;nci maddesi kapsamındaki bu
          destek, ihracatçıların yurt dışındaki fuarlara katılımını
          (stant kirası, dekorasyon, nakliye, gümrükleme) karşılar. 8&apos;inci
          madde yurt içi fuarları, 22 ve 23&apos;üncü maddeler ise sanal
          fuar katılımı ve organizasyonunu kapsar.
        </p>
        <div className="mb-8 rounded-2xl border-l-4 border-gray-400 bg-gray-50 p-8">
          <h4 className="mb-3 text-lg font-bold text-[#071A2F]">
            🛫 Uçak Bileti ve Konaklama Kapsamda mı?
          </h4>
          <p className="leading-8 text-gray-700">
            Hayır. Bireysel katılımcının standart fuar katılım desteği
            stant kirası, tasarım/kurulum ve nakliye giderleriyle
            sınırlıdır; firma temsilcilerinin uçak bileti ve otel/konaklama
            giderleri bu kalemin kapsamı dışındadır. Seyahat ve konaklama
            desteği ayrı bir kalem olan{" "}
            <Link href="#marka-tescil" className="text-orange-600 underline">
              Yurt Dışı Pazar Araştırması Desteği
            </Link>{" "}
            altında (pazar araştırması amaçlı seyahatler için) mevcuttur.
          </p>
        </div>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Fuar Kategorisi</th>
                <th className="p-4">2026 Üst Limiti (TL)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Bakanlık listesi dışındaki fuarlar</td>
                <td className="p-4">4.930.122</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Bakanlıkça belirlenen fuarlar (genel)</td>
                <td className="p-4">9.862.972</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Genel nitelikli fuarlar</td>
                <td className="p-4">738.563</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sektörel nitelikli fuarlar</td>
                <td className="p-4">1.231.848</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Prestijli fuarlar</td>
                <td className="p-4">3.698.274</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sanal fuara katılım</td>
                <td className="p-4">3.698.274</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Sanal fuar organizasyonu</td>
                <td className="p-4">7.396.548</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Kaynak: Ticaret Bakanlığı/İTKİB &quot;5973 Sayılı İhracat
          Destekleri Hakkında Karar Kapsamında Yıllar Bazında Fuar Destek
          Üst Limitleri&quot; resmî tablosu.
        </p>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">💰 Destek Oranı</h3>
          <p className="leading-8 text-gray-700">
            Resmî düzenlemeye göre destek, metrekare başına hesaplanan
            yaklaşık toplam maliyetin <strong>%50&apos;sini</strong>{" "}
            geçemeyecek şekilde ve toplam giderlerin{" "}
            <strong>en fazla %75&apos;ini</strong> kapsayacak biçimde
            ödenir; kesin oran fuarın kategorisine ve varsa hedef
            ülke/sektör bonusuna göre değişir.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; Sektörel Nitelikli Fuar Katılımı
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir mobilya üreticisi, Almanya&apos;daki sektörel
            nitelikli bir fuara 40 m² stantla katılıyor; stant kirası,
            dekorasyon ve nakliye giderleri toplamı{" "}
            <strong>900.000 TL</strong>. Destek oranı ve madde 7&apos;deki
            sektörel nitelikli fuar üst limiti (1.231.848 TL) dahilinde,
            temsili olarak <strong>450.000&ndash;600.000 TL
            arası</strong> destek alınabilir.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h4 className="mb-3 text-lg font-bold text-blue-700">🔄 Süreç: Ön Onay mı, Sonradan Başvuru mu?</h4>
          <p className="leading-8 text-gray-700">
            Standart katılımcı/stant desteğinde ön onay şartı{" "}
            <strong>yoktur:</strong> fuar, Bakanlığın o yıl için ilan
            ettiği destek kapsamındaki fuarlar listesinde olduğu sürece
            şirket katılır, öder, fuar bitimini izleyen{" "}
            <strong>90 gün içinde</strong> DYS üzerinden belgelerle
            başvurur. Ön onay yalnızca organizatörün yürüttüğü tadım
            etkinliği, sosyal medya etkileyicisi çalışması, ikili iş
            görüşmesi alanı/teknik ekipman ve trend alanı gibi tanıtım
            faaliyetleri için zorunludur; bu faaliyetler için organizatör
            fuardan en az 1 ay önce DYS üzerinden ön onay başvurusunu
            Bakanlığa iletmek zorundadır.
          </p>
        </div>
      </section>

      {/* 6. BİRİM KİRA */}
      <section id="birim-kira" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          6. Yurt Dışı Birim (Mağaza/Depo/Ofis) Kira Desteği
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          5973 sayılı Karar&apos;ın 11&apos;inci maddesi kapsamındaki bu
          destek, Türk malı ürünlerin pazarlandığı yurt dışı{" "}
          <strong>mağaza, showroom, depo, ofis</strong> ve ortak ofis
          üyeliği giderlerini karşılar. Büyük ölçekli, çok şubeli yapılar
          kuran şirketler için ise ayrıca 18&apos;inci madde kapsamında{" "}
          <strong>Çok Kanallı Zincir Mağaza Desteği</strong> bulunur (2026
          üst limiti 317.524.608 TL); bu destek daha çok belirli bir
          büyüklüğe ulaşmış perakende zincirlerine yöneliktir.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 2026 Üst Limiti</h3>
            <p className="leading-8 text-gray-700">
              Birim başına yıllık <strong>9.862.972 TL</strong>. Destek
              temel olarak %50 oranındadır; birden fazla yıl boyunca
              yararlanılabilir.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">🔄 Süreç</h3>
            <p className="leading-8 text-gray-700">
              Ön onay zorunludur. Kira sözleşmesi imzalanmadan/faaliyet
              başlamadan önce başvuru yapılmalı; harcama belgeleri dönemsel
              (genellikle çeyrek dönemler hâlinde) sunulur.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; Yurt Dışı Showroom Kirası
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir kozmetik markası, Dubai&apos;de 60 m²&apos;lik bir
            showroom açıyor; yıllık kira bedeli{" "}
            <strong>2.400.000 TL</strong>. %50 oranla{" "}
            <strong>1.200.000 TL&apos;ye kadar</strong> destek alınabilir
            &mdash; bu tutar birim başına 2026 üst limitinin (9.862.972 TL)
            altında kaldığı için tamamı değerlendirmeye girer.
          </p>
        </div>
      </section>

      {/* 7. TANITIM */}
      <section id="tanitim" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          7. Tanıtım ve Reklam Destekleri
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          5973 sayılı Karar&apos;ın 12&apos;nci maddesi, yurt dışına yönelik
          tanıtım ve pazarlama faaliyetlerini iki ayrı çatı altında
          destekler: birime bağlı tanıtım/pazarlama giderleri (dijital
          reklam, katalog, basılı/dijital medya) ve marka tesciline bağlı
          tanıtım/pazarlama giderleri.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">📣 Birime Bağlı Tanıtım</h4>
            <p className="text-sm leading-7 text-gray-700">
              Yurt dışı birim (mağaza/showroom) ile ilişkilendirilmiş
              tanıtım ve pazarlama giderleri.
            </p>
            <p className="mt-3 text-sm font-semibold text-orange-600">
              2026 üst limit: 12.329.397 TL/yıl
            </p>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-[#071A2F]">🏷️ Marka Tesciline Bağlı Tanıtım</h4>
            <p className="text-sm leading-7 text-gray-700">
              Yurt dışında tescilli markanın tanıtımına yönelik dijital
              reklam ve pazarlama giderleri.
            </p>
            <p className="mt-3 text-sm font-semibold text-orange-600">
              2026 üst limit: 19.728.672 TL/yıl
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; Hedef Pazarda Dijital Reklam
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir ev tekstili markası, Fransa pazarına yönelik Google
            Ads ve Meta reklam kampanyaları için yıllık{" "}
            <strong>1.500.000 TL</strong> harcıyor. Ön onay alınarak
            gerçekleştirilen bu harcamanın %50&apos;den başlayan bir
            oranla &mdash; hedef ülke/sektör eşleşmesi varsa daha yüksek
            oranla &mdash; önemli bir kısmı desteklenebilir.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <p className="leading-8 text-gray-700">
            ⚠️ Tanıtım faaliyetlerinin{" "}
            <strong>yabancı dilde ve yurt dışına yönelik</strong> olarak
            yapılması zorunludur; yurt içi pazara veya Türkçe içeriğe
            yönelik reklam giderleri bu destek kapsamına girmez.
          </p>
        </div>
      </section>

      {/* 8. KTZ */}
      <section id="ktz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          8. Küresel Tedarik Zinciri (KTZ) Yetkinlik Desteği
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          5973 sayılı Karar&apos;ın 10&apos;uncu maddesi kapsamındaki bu
          destek, Türk imalatçı/ihracatçıların büyük küresel firmaların
          veya perakende zincirlerinin{" "}
          <strong>onaylı tedarikçisi hâline gelmesini</strong> hedefler.
          Kalite sertifikasyonu, denetim/uyum danışmanlığı, eğitim ve
          tanıtım giderlerinin yanı sıra yurt dışı depo kira ve depolama
          hizmet giderlerini de kapsar.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 2026 Üst Limitleri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Yetkinlik projesi giderleri: <strong>73.990.020 TL</strong></li>
              <li>✔ Yurt dışı depo kira + depolama: <strong>19.728.672 TL</strong></li>
            </ul>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">👥 Kimler Başvurabilir</h3>
            <p className="leading-8 text-gray-700">
              Büyük küresel değer zincirine tedarikçi olma potansiyeli
              taşıyan imalatçı ihracatçılar; süreç proje onayı ve ön onay
              gerektirir.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; Otomotiv Yan Sanayi Tedarikçiliği
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir otomotiv yan sanayi firması, küresel bir üreticiye
            tedarikçi olabilmek için gerekli kalite sertifikasyonu ve
            denetim danışmanlığı sürecine <strong>5.000.000 TL</strong>{" "}
            harcıyor. Proje ön onayı alınmış olması kaydıyla, bu tutarın
            önemli bir kısmı 2026 yetkinlik projesi üst limiti (73.990.020
            TL) dahilinde desteklenebilir.
          </p>
        </div>
      </section>

      {/* 9. E-İHRACAT */}
      <section id="e-ihracat" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9. E-İhracat Destek Programı
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          E-İhracat destekleri, 5973 sayılı Karar&apos;dan{" "}
          <strong>bağımsız, ayrı bir mevzuata</strong> &mdash; 24/08/2022
          tarihli ve <strong>5986 sayılı E-İhracat Destekleri Hakkında
          Karar</strong>&apos;a ve bu Karar&apos;a ilişkin güncel Genelge&apos;ye
          &mdash; dayanır. Program, yurt dışı pazaryerleri ve dijital
          kanallar üzerinden satış yapan şirketleri hedefler.
        </p>
        <h3 className="mb-6 mt-10 text-2xl font-bold text-[#071A2F]">
          👥 Kimler Yararlanabilir
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-[#071A2F]">Şirketler</h4>
            <p className="text-sm text-gray-700">Kendi veya organik bağlı markasını satan ihracatçı birliği üyesi şirketler.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-[#071A2F]">Perakende E-Ticaret Siteleri</h4>
            <p className="text-sm text-gray-700">Satışının en az 2/3&apos;ü çevrim içi olan, en az 2 yıldır faaliyette bulunan siteler.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-[#071A2F]">Pazaryerleri</h4>
            <p className="text-sm text-gray-700">En az 1.000 hizmet sağlayıcısı ve 100.000 ürünü barındıran, en az 2 yıldır faal platformlar.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-bold text-[#071A2F]">E-İhracat Konsorsiyumları / B2B Platformları</h4>
            <p className="text-sm text-gray-700">Türkiye&apos;de yerleşik şirketlerin yurt dışı açılımına aracılık eden yapılar.</p>
          </div>
        </div>
        <h3 className="mb-6 mt-12 text-2xl font-bold text-[#071A2F]">
          📦 Desteklenen Başlıca Kalemler
        </h3>
        <ul className="mb-8 ml-6 list-disc space-y-3 text-lg text-gray-700 marker:text-orange-500">
          <li><strong>Pazara giriş rapor desteği:</strong> ülke/sektör/rakip odaklı rapor, analiz ve veri tabanı üyelikleri</li>
          <li><strong>Dijital pazaryeri tanıtım desteği:</strong> tıklama başına ödeme, sipariş başına ödeme, görüntüleme reklamı giderleri</li>
          <li><strong>E-ihracat tanıtım desteği:</strong> dijital pazarlama, sosyal medya etkileyicisi ve çevrim içi satış aracısı giderleri</li>
          <li><strong>Sipariş karşılama (fulfillment) hizmeti desteği:</strong> ilgili ülkedeki toplam e-ticaret satışının %10&apos;una kadar</li>
          <li><strong>Yurt dışı pazaryeri entegrasyon desteği:</strong> yazılım geliştirme, bulut hizmeti ve platform açma giderleri</li>
          <li><strong>Çevrim içi mağaza ve pazaryeri komisyon gideri desteği:</strong> hedef ülkeler listesindeki pazaryerlerinde mağaza açılışı ve komisyon giderleri</li>
        </ul>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">💰 Destek Oranı</h3>
            <p className="leading-8 text-gray-700">
              Kalemler arasında farklılık gösterse de genel eğilim,{" "}
              <strong>temel oranın %50</strong> olması ve Hedef Ülkeler
              Listesi&apos;ndeki pazarlara yönelik faaliyetlerde bu oranın{" "}
              <strong>+20 puan artışla %70&apos;e</strong> çıkabilmesidir.
              Üst limitler yararlanıcı tipine (şirket/konsorsiyum/pazaryeri)
              göre ayrı ayrı belirlenir ve güncellenir; kesin tutarlar
              başvuru döneminde Ticaret Bakanlığı&apos;nın yayımladığı
              güncel üst limit tablosundan teyit edilmelidir.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-[#071A2F]">⛔ Ön Onay Zorunlu</h3>
            <p className="leading-8 text-gray-700">
              Programın hemen tüm faaliyet kalemlerinde{" "}
              <strong>ön onay şarttır.</strong> Destek süresi, ön onay
              tarihini takip eden ayın ilk günü başlar; bu tarihten önceki
              harcamalar kapsam dışıdır. Harcama belgeleri çeyrek dönemler
              hâlinde sunulur, ödeme başvurusu fatura tarihinden itibaren
              en geç <strong>6 ay içinde</strong> yapılmalıdır.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            Örnek &mdash; Amazon Almanya&apos;da Fulfillment Desteği
          </h4>
          <p className="leading-8 text-gray-700">
            Temsili bir ev aksesuarları markası, Amazon Almanya&apos;da
            mağaza açmadan önce DYS üzerinden ön onay başvurusu yapıyor.
            Onay sonrasında kullandığı sipariş karşılama (fulfillment) ve
            depolama hizmeti giderleri, o ülkedeki toplam e-ticaret
            satışının %10&apos;una kadar desteklenebiliyor.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-8">
          <p className="leading-8 text-gray-700">
            ⚠️ E-ihracat desteklerinde ürünün Türk ürünü sayılması için{" "}
            <strong>KTÜN (Küresel Ticari Ürün Numarası/GTIN) bilgisi</strong>{" "}
            ve Türkiye üretim yeri bilgisinin platformda yer alması,
            markanın önce yurt içinde tescilli olması gibi ek teknik
            şartlar aranır. Bu programa başvurmadan önce ürün/marka
            altyapınızın bu şartları karşılayıp karşılamadığını kontrol
            etmek gerekir.
          </p>
        </div>
      </section>

      {/* 9.5 HİZMET İHRACATI */}
      <section id="hizmet-ihracati" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          9.5. Bilişim, Danışmanlık, Sağlık Turizmi: Hizmet İhracatı Yapan Şirketler İçin Farklı Bir Karar Geçerli
        </h2>
        <p className="mb-6 text-lg leading-9 text-gray-700">
          Buraya kadar anlatılan tüm destekler (Pazara Giriş Belgesi, Marka
          Tescili, Fuar, Birim Kira, Tanıtım, KTZ, E-İhracat) 5973 sayılı
          Karar&apos;a dayanır ve tasarım itibarıyla{" "}
          <strong>fiziksel mal/ürün ihracatını</strong> hedefler. Yazılım,
          bilişim hizmetleri, danışmanlık, sağlık turizmi, eğitim, mimarlık
          &ndash; mühendislik gibi <strong>hizmet ihracatı</strong> yapan
          şirketler için durum farklıdır: bu şirketler 27 Şubat 2026 tarihli
          ve 33181 sayılı Resmî Gazete&apos;de yayımlanan,{" "}
          <strong>1 Ocak 2026&apos;dan itibaren geçerli 10962 sayılı
          &quot;Hizmet İhracatının Tanımlanması, Sınıflandırılması ve
          Hizmet Sektörlerinin Desteklenmesi Hakkında Karar&quot;</strong>&apos;a
          tabidir. Bu yeni Karar, hizmet ihracatına yönelik önceki dört ayrı
          Kararı birleştirip yürürlükten kaldırmıştır.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-blue-700">
              📦 5973 Sayılı Karar
            </h3>
            <p className="leading-8 text-gray-700">
              Fiziksel mal/ürün ihraç ediyorsanız (üretici, tedarikçi,
              perakendeci) &mdash; bu yazının 3&ndash;9&apos;uncu
              bölümlerindeki destekler size uygundur.
            </p>
          </div>
          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-purple-700">
              💻 10962 Sayılı Karar
            </h3>
            <p className="leading-8 text-gray-700">
              Yazılım/SaaS, bilişim, danışmanlık, sağlık turizmi, eğitim gibi
              bir hizmeti yurt dışına satıyorsanız &mdash; aşağıdaki
              programlar size uygundur.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-7 text-gray-500">
          Hem fiziksel ürün hem hizmet (örneğin donanım + SaaS) satan hibrit
          iş modellerinde, gelir kalemleri kendi niteliğine göre ayrı ayrı
          değerlendirilir; bu tür karma yapılarda hangi gelirin hangi Karar
          kapsamına gireceğinin netleştirilmesi ayrıca önem taşır.
        </p>

        <h3 className="mb-6 mt-12 text-2xl font-bold text-[#071A2F]">
          📋 Kapsanan Başlıca Hizmet Sektörleri
        </h3>
        <p className="mb-6 leading-8 text-gray-700">
          Karar, hizmetleri Genişletilmiş Ödemeler Dengesi Hizmetler
          Sınıflaması esas alınarak sınıflandırır. Uygulamada öne çıkan
          sektörler arasında şunlar var:
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Bilişim, yazılım ve dijital aracılık",
            "Danışmanlık ve teknik müşavirlik",
            "Sağlık turizmi",
            "Eğitim",
            "Lojistik ve taşımacılık",
            "Kültürel ve yaratıcı endüstriler",
            "Gastronomi",
            "Fuarcılık ve kongre turizmi",
            "Mimarlık ve mühendislik",
          ].map((item) => (
            <div key={item} className="rounded-xl border bg-white p-4 text-sm font-medium text-gray-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <h3 className="mb-6 mt-12 text-2xl font-bold text-[#071A2F]">
          🎯 Dört Ana Destek Programı
        </h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Program</th>
                <th className="p-4">Ne İçeriyor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Hizmet Sektörleri Atılım Programı</td>
                <td className="p-4">Acente komisyonu, belgelendirme, yurt dışı birim (ofis) desteği, tanıtım/reklam, teknik müşavirlik proje giderleri gibi pazara giriş ve rekabet gücü kalemleri</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Markalaşma Programı</td>
                <td className="p-4">TURQUALITY®/E-TURQUALITY® mantığına benzer, üst segmentte hizmet markası oluşturmaya yönelik kapsamlı destek</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Sürdürülebilirlik Programı</td>
                <td className="p-4">Hizmet ihracatçılarının sürdürülebilirlik/ESG odaklı proje ve dönüşüm giderleri</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Yurt Dışı Lojistik Dağıtım Ağları (YLDA) Desteği</td>
                <td className="p-4">Yurt dışında depo/lojistik dağıtım altyapısı kurulum giderleri</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Kaynak: 10962 sayılı Karar&apos;ın yürürlüğe girişini duyuran{" "}
          Ticaret Bakanlığı (uhtgm.ticaret.gov.tr) duyurusu ve konuyu ele
          alan bağımsız mali müşavirlik/gümrük müşavirliği sirkülerleri.
        </p>

        <div className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
            💰 Oran ve Üst Limitler Hakkında Not
          </h4>
          <p className="mb-4 leading-8 text-gray-700">
            Genel eğilim, 5973 sayılı Karar&apos;da olduğu gibi{" "}
            <strong>%50</strong> destek oranıdır. İki bağımsız kaynakta
            birbiriyle örtüşen Hizmet Sektörleri Atılım Programı üst
            limitleri şöyledir:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-2 leading-8 text-gray-700 marker:text-blue-500">
            <li>Acente komisyonu desteği: yıllık <strong>6.000.000 TL</strong></li>
            <li>Belgelendirme desteği: yıllık <strong>4.000.000 TL</strong></li>
            <li>Birim (ofis) desteği: birim başına yıllık <strong>6.000.000 TL</strong></li>
            <li>Tanıtım/reklam/pazarlama desteği: yıllık <strong>25.000.000 TL</strong></li>
          </ul>
          <p className="mb-4 leading-8 text-gray-700">
            Markalaşma Programı&apos;nda üst limit, şirketin destek
            kapsamındaki tüm markaları marka destek programında ise yıllık{" "}
            <strong>250.000.000 TL</strong>, en az bir markası
            TURQUALITY®/E-TURQUALITY® destek programındaysa yıllık{" "}
            <strong>500.000.000 TL</strong>&apos;dir. YLDA (Yurt Dışı
            Lojistik Dağıtım Ağları) desteğinde kurulum/işletme gideri ağ
            başına <strong>300.000.000 TL</strong>, cep depo gideri yıllık
            ağ başına <strong>120.000.000 TL</strong>, tanıtım faaliyeti
            gideri ise yıllık ağ başına <strong>20.000.000 TL</strong>&apos;ye
            kadardır.
          </p>
          <p className="leading-8 text-sm text-gray-500">
            Bu rakamlar iki bağımsız ikincil kaynağın (resmi genelgeyi
            yorumlayan mali müşavirlik/danışmanlık analizleri) birbiriyle
            örtüşen verilerine dayanır; resmi genelge PDF&apos;i teknik
            nedenlerle doğrudan taranamadığı için madde numaraları kaynaklar
            arasında küçük farklılıklar gösterebilir. Başvurudan önce{" "}
            <strong>uhtgm.ticaret.gov.tr</strong> üzerinden veya ilgili
            hizmet ihracatçıları birliğinden teyit edilmesini öneririz.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-8">
          <h4 className="mb-3 text-lg font-bold text-red-700">
            🏥 Sağlık Turizminde Ekstra Bir Zorunluluk Var
          </h4>
          <p className="leading-8 text-gray-700">
            Sağlık turizmi alanında hizmet ihracatı desteğinden yararlanmak,
            hizmeti fiilen sunabilmekle aynı şey değildir. 26 Nisan 2025
            tarihli <strong>Uluslararası Sağlık Turizmi ve Turistin
            Sağlığı Hakkında Yönetmelik</strong> uyarınca, yabancı hastaya
            hizmet veren sağlık kuruluşlarının Sağlık Bakanlığı&apos;ndan{" "}
            <strong>Uluslararası Sağlık Turizmi Yetki Belgesi</strong>,
            aracı kuruluşların ise <strong>USHAŞ</strong> (Uluslararası
            Sağlık Hizmetleri A.Ş.) yetkilendirmesi alması zorunludur. Bu
            belge, Ticaret Bakanlığı&apos;nın 10962 sayılı Karar kapsamındaki
            ihracat desteğinden tamamen ayrı bir yükümlülüktür; destek
            başvurusundan önce bu yetkilendirmenin tamamlanmış olması
            gerekir.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
            <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
              Örnek &mdash; Yazılım/SaaS İhracatı
            </h4>
            <p className="leading-8 text-gray-700">
              Temsili bir SaaS şirketi, ürününü Orta Doğu pazarına açmak
              için yerel bir satış acentesiyle çalışıyor ve hedef pazara
              yönelik dijital tanıtım harcaması yapıyor. Bu şirket 5973
              sayılı Karar&apos;daki fuar/pazara giriş belgesi gibi mal
              ihracatına özgü kalemlerden değil, 10962 sayılı Karar&apos;ın{" "}
              <strong>Hizmet Sektörleri Atılım Programı</strong> kapsamındaki
              acente komisyonu ve tanıtım desteği gibi kalemlerden
              yararlanma yolunu değerlendirmelidir.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-orange-500 bg-white p-8 shadow-sm">
            <h4 className="mb-3 text-xl font-bold text-[#071A2F]">
              Örnek &mdash; Sağlık Turizmi
            </h4>
            <p className="leading-8 text-gray-700">
              Temsili bir özel hastane, yurt dışından hasta kabul etmeye
              başlamadan önce Sağlık Bakanlığı&apos;ndan Uluslararası Sağlık
              Turizmi Yetki Belgesi&apos;ni alıyor; ardından yurt dışı
              tanıtım ve pazarlama giderleri için 10962 sayılı Karar
              kapsamındaki destek programlarına başvuruyor. İki süreç
              paralel yürütülebilir, ancak yetki belgesi olmadan sağlık
              turizmi faaliyetinin kendisi mevzuata aykırı olur.
            </p>
          </div>
        </div>
      </section>

      {/* 10. TABLO */}
      <section id="limit-tablosu" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          10. 2026 Üst Limitler Özet Tablosu
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          5973 sayılı Karar kapsamındaki başlıca destek kalemlerinin 2026
          yılı şirket/birim başına yıllık üst limitleri:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Destek Kalemi</th>
                <th className="p-4">Madde</th>
                <th className="p-4">2026 Üst Limiti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Pazara Giriş Belgesi Desteği</td>
                <td className="p-4">Md.3</td>
                <td className="p-4">19.728.672 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yurt Dışı Marka Tescil Desteği</td>
                <td className="p-4">Md.4</td>
                <td className="p-4">3.698.274 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Pazara Giriş Projesi Hazırlama</td>
                <td className="p-4">Md.5</td>
                <td className="p-4">983.843 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yurt Dışı Pazar Araştırması (faaliyet başına)</td>
                <td className="p-4">Md.6</td>
                <td className="p-4">490.559 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Yurt Dışı Fuar (Bakanlık listesi, genel)</td>
                <td className="p-4">Md.7</td>
                <td className="p-4">9.862.972 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Küresel Tedarik Zinciri Yetkinlik Projesi</td>
                <td className="p-4">Md.10</td>
                <td className="p-4">73.990.020 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Birim Kira Desteği (birim başına)</td>
                <td className="p-4">Md.11</td>
                <td className="p-4">9.862.972 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Tanıtım Desteği (marka tesciline bağlı)</td>
                <td className="p-4">Md.12</td>
                <td className="p-4">19.728.672 TL</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">Çok Kanallı Zincir Mağaza Desteği</td>
                <td className="p-4">Md.18</td>
                <td className="p-4">317.524.608 TL</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-orange-600">Marka Destek Programı / Turquality®</td>
                <td className="p-4">Md.17</td>
                <td className="p-4">246,6M TL / 493,2M TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Kaynak: Ticaret Bakanlığı/İTKİB &quot;5973 Sayılı İhracat
          Destekleri Hakkında Karar Kapsamında Yıllar Bazında Destek Üst
          Limitleri&quot; resmî tablosu (2026 sütunu). Rakamlar her yıl
          (TÜFE + Yİ-ÜFE)/2 oranında güncellendiğinden başvuru öncesi
          güncel tabloyla teyit edilmelidir.
        </p>
      </section>

      {/* 11. GEÇERSİZ HARCAMALAR */}
      <section id="gecersiz" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          11. Hangi Harcamalar Geçersiz Sayılır?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Destek başvurularının reddedilmesinin veya kısmen kabul
          edilmesinin arkasında genellikle birkaç tekrarlayan neden vardır:
        </p>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
            <li><strong>İlişkili kişilerden alınan hizmetler:</strong> Harcamayı yapan şirket ile faturayı düzenleyen taraf (ortaklar, ortakların eşi/hısımları, aynı şirketler grubu) ilişkili kişi ise, bu harcama desteklenmez.</li>
            <li><strong>Ön onaydan önceki harcamalar:</strong> Tanıtım, birim kira, KTZ, e-ihracat ve fuar organizatörünün tanıtım faaliyetleri gibi ön onay gerektiren kalemlerde, onay tarihinden önce yapılan harcamalar kapsam dışıdır. (Fuara bireysel katılımın standart stant desteği bu kurala tabi değildir; harcama fuar sırasında yapılır, başvuru fuar sonrasında 90 gün içinde yapılır.)</li>
            <li><strong>Elden veya çekle yapılan ödemeler:</strong> Ödemenin bankacılık sistemi üzerinden yapılmış olması zorunludur; elden ödeme, müşteri çeki veya cirolu çekle yapılan ödemeler desteklenmez.</li>
            <li><strong>Süresi geçmiş/eksik belgeler:</strong> Eksik bilgi/belgenin bildirimden itibaren 3 ay içinde (bir kereye mahsus 3 ay ek süreyle) tamamlanmaması hâlinde başvuru, mevcut belgelerle sınırlı sonuçlandırılır.</li>
            <li><strong>Yurt içi harcamalar:</strong> Programların büyük bölümü yurt dışına yönelik faaliyetleri hedefler; yurt içi pazara yönelik reklam, yurt içi fuar (ayrı ve daha düşük limitli bir kalemdir) gibi harcamalar farklı kurallara tabidir.</li>
            <li><strong>Komisyon, üyelik ve dolaylı vergiler:</strong> Birçok kalemde (örn. dijital pazaryeri tanıtımı, sipariş karşılama) komisyon, üyelik ücreti ve KDV gibi dolaylı vergiler destek hesaplamasına dahil edilmez.</li>
            <li><strong>Rayice aykırı faturalar:</strong> Piyasa rayicinin belirgin biçimde üzerinde faturalandırıldığı tespit edilen harcamalar, Bakanlık yurt dışı temsilcisinin değerlendirmesiyle reddedilebilir.</li>
            <li><strong>Vadesi geçmiş vergi/SGK borcu:</strong> Hazine ve Maliye Bakanlığı ile SGK&apos;ya vadesi geçmiş borcu bulunan şirketlerde, destek tutarı önce bu borçlara mahsup edilir.</li>
            <li><strong>Türk ürünü/ülke imajına zarar veren içerik:</strong> Tanıtım materyallerinde veya listelenen ürünlerde bu yönde bir zarar tespit edilirse ilgili harcama destek kapsamından çıkarılır.</li>
          </ul>
        </div>
      </section>

      {/* 12. ÖDEME SÜRECİ */}
      <section id="odeme" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          12. Ödeme Süreci: Kim Öder, Ne Zaman Öder?
        </h2>
        <div className="grid gap-5 md:grid-cols-4">
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">📝</div>
            <h3 className="text-lg font-bold">1. Başvuru</h3>
            <p className="mt-3 text-sm text-gray-600">
              Şirket, harcama belgeleriyle birlikte (veya ön onay
              gerekiyorsa faaliyetten önce ön onayla) DYS üzerinden
              İBGS&apos;ye başvurur.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">🔎</div>
            <h3 className="text-lg font-bold">2. İnceleme</h3>
            <p className="mt-3 text-sm text-gray-600">
              İBGS belgeleri inceler, eksik varsa bildirir (tamamlama
              süresi 3 ay); tereddütlü konularda İhracat Genel
              Müdürlüğü&apos;nün görüşü alınır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">✅</div>
            <h3 className="text-lg font-bold">3. Onay ve Mahsup</h3>
            <p className="mt-3 text-sm text-gray-600">
              Vadesi geçmiş vergi/SGK borcu sorgulanır; varsa destek
              tutarından mahsup edilir, kalan tutar ödemeye alınır.
            </p>
          </div>
          <div className="rounded-xl border p-6 text-center shadow-sm">
            <div className="mb-4 text-4xl">💶</div>
            <h3 className="text-lg font-bold">4. Ödeme</h3>
            <p className="mt-3 text-sm text-gray-600">
              Ticaret Bakanlığı kaynaklarından, İhracatçı Birliği kanalıyla
              şirketin banka hesabına TL olarak aktarılır.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">💱 Döviz Cinsi Harcamalar Nasıl Ödenir?</h3>
          <p className="leading-8 text-gray-700">
            Döviz cinsinden yapılan harcamalar, ödeme belgesi tarihindeki{" "}
            <strong>TCMB döviz alış kuru</strong> esas alınarak TL&apos;ye
            çevrilir ve bu şekilde ödenir. Ödeme, doğrudan Ticaret
            Bakanlığı bütçesinden gelir; TCMB veya Eximbank kredi
            mekanizması bu desteklerde devrede değildir (Eximbank yalnızca
            madde 13 kapsamındaki ayrı bir faiz/sigorta destek
            mekanizmasında rol oynar).
          </p>
        </div>
        <div className="mt-8 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">⏱️ Süreler Genellikle Ne Kadar?</h3>
          <p className="leading-8 text-gray-700">
            Ödeme başvurusu, ödeme belgesi (fatura/dekont) tarihinden
            itibaren <strong>en geç 6 ay içinde</strong> yapılmalıdır.
            İnceleme ve ödeme süresi, destek türüne ve dosyanın eksiksiz
            olmasına göre değişmekle birlikte, eksiksiz sunulan
            dosyalarda bu süreç haftalar/birkaç ay içinde
            sonuçlandırılabilir; eksik belge veya rayiç sorgulaması gibi
            durumlar süreci uzatır.
          </p>
        </div>
      </section>

      {/* 13. HANGİ DESTEK SİZE UYGUN */}
      <section id="hangi-destek" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          13. Hangi Destek Programı Size Uygun?
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          İhtiyacınıza göre hızlı bir yönlendirme:
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#071A2F] text-white">
              <tr>
                <th className="p-4">Durumunuz</th>
                <th className="p-4">Uygun Destek</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Ürünüm için yurt dışında zorunlu bir sertifika/test gerekiyor</td>
                <td className="p-4 font-semibold text-orange-600">Pazara Giriş Belgesi Desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Markamı yurt dışında tescil ettireceğim</td>
                <td className="p-4 font-semibold text-orange-600">Yurt Dışı Marka Tescil Desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Yurt dışı bir fuara katılacağım</td>
                <td className="p-4 font-semibold text-orange-600">Fuar Katılım Desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Yurt dışında mağaza/depo/ofis açacağım</td>
                <td className="p-4 font-semibold text-orange-600">Birim Kira Desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Hedef pazarda dijital reklam/tanıtım yapacağım</td>
                <td className="p-4 font-semibold text-orange-600">Tanıtım Desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Büyük bir küresel tedarik zincirine girmeye çalışıyorum</td>
                <td className="p-4 font-semibold text-orange-600">Küresel Tedarik Zinciri Yetkinlik Desteği</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Amazon/Etsy gibi pazaryerlerinden veya kendi e-ticaret sitemden ihracat yapıyorum</td>
                <td className="p-4 font-semibold text-orange-600">E-İhracat Destek Programı</td>
              </tr>
              <tr>
                <td className="p-4">İhracatım 3 milyon USD üzerinde ve markalaşmak istiyorum</td>
                <td className="p-4 font-semibold text-orange-600">
                  <Link href="/blog/turquality-programi-nedir-sartlari-destekleri-2026" className="underline">
                    Marka Destek Programı / Turquality
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
          <p className="leading-8 text-gray-700">
            Çoğu şirket bu kalemlerden birkaçını <strong>aynı anda</strong>{" "}
            kullanır: örneğin fuara katılan bir şirket aynı yıl içinde
            marka tescili, tanıtım ve pazara giriş belgesi desteklerinden
            de yararlanabilir. Kısıt genelde aynı harcamanın iki farklı
            destekten mükerrer ödenmesine ilişkindir, farklı harcama
            kalemlerinin farklı desteklerden yararlanmasına değil.
          </p>
        </div>
      </section>

      {/* 14. SSS */}
      <section id="sss" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          14. Sık Sorulan Sorular
        </h2>
        <div className="space-y-6">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Kaç yıl faaliyette olan şirketler başvurabilir?
            </h3>
            <p className="leading-8 text-gray-700">
              Çoğu 5973 sayılı Karar kalemi için genel kural, ihracatçı
              birliğine üye olmak ve aktif ihracatçı olmaktır; belirli bir
              minimum faaliyet süresi aranmaz. Ancak e-ihracat destek
              programında perakende e-ticaret sitesi veya pazaryeri
              statüsü almak isteyenler için <strong>en az 2 yıl
              faaliyette bulunma</strong> şartı vardır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvuru ücretli mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Resmî başvurunun kendisi bir harca tabi değildir. Ancak
              danışmanlık, rapor, test/sertifikasyon gibi destek konusu
              harcamaların bizzat şirket tarafından önce karşılanması,
              sonra desteğin geri ödemesiz olarak devreye girmesi
              gerekir &mdash; yani destek, harcamayı yapmadan önce
              şirkete nakit olarak verilmez.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Birden fazla destek programından aynı anda yararlanılabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, farklı harcama kalemleri farklı destek programlarından
              paralel şekilde desteklenebilir. Kısıt, aynı harcamanın
              birden fazla programdan mükerrer ödenmesine yöneliktir;
              örneğin e-ihracat konsorsiyumu statüsü alan bir şirket,
              destek aldığı ülkeye yönelik olarak Yurt Dışı Lojistik
              Dağıtım Ağlarının Desteklenmesi Hakkında Karar kapsamındaki
              mükerrer kalemlerden yararlanamaz.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Destek alan firma denetime tabi mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet. Yurt dışında düzenlenen belgeler Bakanlık yurt dışı
              temsilcisi (ticaret müşaviri/ataşesi) tarafından
              onaylanabilir, harcamanın rayice uygunluğu sorgulanabilir ve
              destek konusu tüm belgelerin asıllarının{" "}
              <strong>en az 10 yıl</strong> saklanması zorunludur.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yanlış veya eksik belge ibraz edilirse ne olur?
            </h3>
            <p className="leading-8 text-gray-700">
              Eksik bilgi/belgeler için bildirim tarihinden itibaren 3 ay
              tamamlama süresi tanınır; gerekirse bir kereye mahsus 3 ay
              daha ek süre verilebilir. Süresinde tamamlanmayan
              eksiklikler varsa başvuru, o ana kadar tekemmül etmiş
              harcama kalemleriyle sınırlı olarak sonuçlandırılır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Başvurum reddedilirse itiraz hakkım var mı?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, ret kararına karşı ilgili İhracatçı Birlikleri Genel
              Sekreterliği ve İhracat Genel Müdürlüğü&apos;ne yazılı
              itiraz/talep başvurusu yapılabilir. İtirazın güçlü olması
              için ret gerekçesinin (eksik belge, rayiç sorunu, ön onay
              eksikliği vb.) net biçimde tespit edilip giderilmesi
              gerekir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Şahıs şirketleri bu desteklerden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Çoğu program tüzel kişilik/şirket yapısını esas alır. E-ihracat
              destek programında, esnaf vergi muafiyeti belgesine sahip
              veya esnaf/ticaret siciline kayıtlı şahıslar için ise
              yalnızca belirli koşullarda (genellikle bir e-ihracat
              konsorsiyumu aracılığıyla) sınırlı bir yararlanma imkânı
              tanınmıştır.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Harcamalar KDV dahil mi değerlendiriliyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural, harcamaların <strong>KDV hariç</strong>{" "}
              değerlendirilmesidir; KDV&apos;nin konusuna girmeyen
              hizmetler ve yurt dışına çıkışı yapılan tanıtım
              malzemeleri de KDV hariç desteklenir. Tevkifata tabi
              faturalarda ise tevkifat tutarı destek hesabına dahil
              edilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Yazılım/SaaS ihracatı yapan bir şirket 5973 sayılı Karar&apos;daki fuar/pazara giriş desteklerinden yararlanabilir mi?
            </h3>
            <p className="leading-8 text-gray-700">
              Genel kural olarak hayır. 5973 sayılı Karar fiziksel mal/ürün
              ihracatına göre tasarlanmıştır; saf yazılım/SaaS ihracatı
              yapan bir şirket bunun yerine{" "}
              <Link href="#hizmet-ihracati" className="text-orange-600 underline">
                10962 sayılı Hizmet İhracatı Karar&apos;ına
              </Link>{" "}
              tabidir ve kendi destek programlarından (özellikle Hizmet
              Sektörleri Atılım Programı) yararlanır. Şirket hem yazılım
              lisansı hem fiziksel donanım satıyorsa, donanım kısmı için
              5973&apos;ün ilgili kalemleri ayrıca değerlendirilebilir.
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
              Sağlık turizmi şirketiyim; hem 10962 sayılı Karar&apos;dan hem Sağlık Bakanlığı&apos;ndan mı izin almam gerekiyor?
            </h3>
            <p className="leading-8 text-gray-700">
              Evet, bu ikisi birbirinden bağımsız süreçlerdir. 10962 sayılı
              Karar, yurt dışı tanıtım/pazarlama gibi giderlerinizi
              destekleyen bir <strong>teşvik</strong> mekanizmasıdır; yurt
              dışından hasta kabul edebilmeniz ise Sağlık Bakanlığı&apos;nın{" "}
              <strong>Uluslararası Sağlık Turizmi Yetki Belgesi</strong>{" "}
              (aracı kuruluşlar için USHAŞ yetkilendirmesi) şartına
              bağlıdır. Yetki belgesi olmadan faaliyetin kendisi mevzuata
              aykırı olacağından, destek başvurusundan önce bu belgenin
              alınmış olması gerekir.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 scroll-mt-24">
        <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
            🤝 İhracat Destek Başvurularınızda Yanınızdayız
          </h3>
          <p className="leading-8 text-gray-700">
            Pazara Giriş Belgesi, fuar katılımı, marka tescili veya
            e-ihracat destekleri arasından şirketinize uygun olanları
            belirlemek, harcama-fatura-başvuru sırasını doğru yönetmek ve
            ödeme sürecini hızlandırmak deneyim gerektirir.{" "}
            <Link href="/#contact" className="text-orange-600 underline">
              İhracat destek başvurunuzu birlikte planlamak için bizimle
              iletişime geçin.
            </Link>
          </p>
        </div>
      </section>

      {/* 15. SONUÇ */}
      <section id="sonuc" className="mt-24 scroll-mt-24">
        <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
          15. Sonuç
        </h2>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Ticaret Bakanlığı&apos;nın ihracat destek sistemi, doğru
          sırayla ve doğru belgelerle yönetildiğinde bir şirketin yurt
          dışı büyüme maliyetinin önemli bir kısmını geri ödemesiz olarak
          karşılayabilecek genişlikte bir araç setidir. Ancak asıl zorluk
          destek oranlarını bilmek değil; hangi harcamanın ön onay
          gerektirdiğini, hangi belgenin hangi süre içinde sunulması
          gerektiğini ve ödemenin hangi kanaldan geleceğini <strong>işlem
          gerçekleşmeden önce</strong> doğru kurgulamaktır. Bu sırayı
          tersine çeviren şirketler, aslında hak ettikleri desteği
          büyük ölçüde kaybediyor.
        </p>
        <p className="mb-8 text-lg leading-9 text-gray-700">
          Sistem Global Danışmanlık bünyesinde, hangi destek programının
          şirketinizin harcama planına uygun olduğunun belirlenmesinden
          DYS üzerinden ön onay ve ödeme başvurularının hazırlanmasına,
          gerekli belgelerin İhracatçı Birliği nezdinde takibinden
          reddedilen dosyalarda itiraz sürecine kadar bu işi uçtan uca
          yürütüyoruz. Kuruluş sürecinizin de, sonrasındaki muhasebe ve
          raporlama yükümlülüklerinizin de aynı ekip tarafından
          yürütülmesi sayesinde, ayrı bir yerel danışmanlık firması
          aramanıza gerek kalmıyor. Hangi destekten ne kadar
          yararlanabileceğinizi netleştirmek için bizimle iletişime
          geçebilirsiniz.
        </p>
      </section>
    </BlogLayout>
  );
}
