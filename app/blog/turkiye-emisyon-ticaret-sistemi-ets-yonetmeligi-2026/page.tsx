import Link from "next/link";
import { Metadata } from "next";
import BlogLayout from "@/components/blog/BlogLayout";

export const metadata: Metadata = {
  title:
    "Türkiye Emisyon Ticaret Sistemi (ETS) Yönetmeliği 2026: Hangi Şirketler Kapsamda? | Koray Akdağ",
  description:
    "27 Ağustos 2026 tarihli Resmî Gazete'de yayımlanan Türkiye Emisyon Ticaret Sistemi Yönetmeliği ile karbon fiyatlandırmasında yeni dönem başladı. 50.000 tCO₂e eşiği, 2026-2027 pilot dönemi, sera gazı emisyon izni, izleme-raporlama-doğrulama yükümlülükleri, tahsisat teslimi ve idari para cezalarıyla şirketler için güncel rehber.",
  keywords: [
    "türkiye emisyon ticaret sistemi",
    "ETS yönetmeliği 2026",
    "emisyon ticaret sistemi nedir",
    "sera gazı emisyon izni",
    "karbon fiyatlandırma türkiye",
    "7552 sayılı iklim kanunu",
    "ETS pilot dönem 2026 2027",
    "tahsisat teslim yükümlülüğü",
    "SKDM CBAM türkiye ETS",
  ],
};

export default function BlogPage() {
  return (
    <BlogLayout
      title="Türkiye Emisyon Ticaret Sistemi (ETS) Yönetmeliği Yayımlandı: Hangi Şirketler Kapsamda, Ne Yapmak Zorunda?"
      description="27 Ağustos 2026 tarihli ve 33353 sayılı Resmî Gazete'de yayımlanan Türkiye Emisyon Ticaret Sistemi Yönetmeliği ile karbon artık Türkiye'de de fiyatlanan bir maliyet kalemi hâline geldi. 50.000 tCO₂e eşiği, 2026-2027 pilot dönemi, sera gazı emisyon izni, izleme-raporlama-doğrulama zinciri, tahsisat teslim yükümlülüğü ve idari para cezalarıyla sanayi şirketleri için uygulamaya dönük rehber."
      category="SÜRDÜRÜLEBİLİRLİK • KARBON & ETS • 2026"
      date="2026"
      readTime="12 Dakika"
      slug="turkiye-emisyon-ticaret-sistemi-ets-yonetmeligi-2026"
      coverImage="https://images.unsplash.com/photo-1759384628232-134f0d2f154d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-[#071A2F]">
            📌 Bu Rehberde Neler Bulacaksınız?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            9 Temmuz 2025 tarihli Resmî Gazete&apos;de yayımlanan 7552 sayılı
            İklim Kanunu, Türkiye&apos;de bir Emisyon Ticaret Sistemi (ETS)
            kurulmasının yasal çerçevesini çizmişti. Bu çerçeveyi uygulanabilir
            hâle getiren ikincil düzenleme, <strong>27 Ağustos 2026 tarihli ve
            33353 sayılı Resmî Gazete&apos;de yayımlanan Türkiye Emisyon Ticaret
            Sistemi Yönetmeliği</strong> ile yürürlüğe girdi. Bu, on yılı aşkın
            süredir devam eden sera gazı izleme ve raporlama yükümlülüğünün
            artık bir <strong>fiyat mekanizmasına</strong> bağlandığı anlamına
            geliyor: karbon, Türkiye&apos;de de ölçülen değil, ölçülüp
            fiyatlanan bir maliyet kalemi hâline geldi.
          </p>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Emisyon Ticaret Sistemi tam olarak nasıl çalışır?</li>
            <li>✔ Hangi tesisler ve hangi eşiğin üzerindeki şirketler kapsamda?</li>
            <li>✔ Pilot dönem (2026-2027) ile uygulama dönemi (2028-2035) farkı</li>
            <li>✔ Sera gazı emisyon izni, izleme planı ve raporlama takvimi</li>
            <li>✔ Tahsisat teslim yükümlülüğü ve yerine getirilmezse ne olur?</li>
            <li>✔ İdari para cezaları ve pilot dönem indirimi</li>
            <li>✔ AB&apos;nin SKDM (CBAM) mekanizmasıyla ilişkisi</li>
            <li>✔ Kapsam dışındaki şirketler neden yine de etkileniyor?</li>
          </ul>
        </div>

        {/* İÇİNDEKİLER */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-[#071A2F]">
            📑 İçindekiler
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="#nedir" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              1. Emisyon Ticaret Sistemi Nedir, Nasıl Çalışır?
            </Link>
            <Link href="#hukuki" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              2. Hukuki Çerçeve: İklim Kanunu ve ETS Yönetmeliği
            </Link>
            <Link href="#kapsam" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              3. Kimler Kapsamda? Eşik Değer ve Tesis Kategorileri
            </Link>
            <Link href="#takvim" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              4. Uygulama Takvimi: Pilot Dönem ve Uygulama Dönemleri
            </Link>
            <Link href="#yukumluluk" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              5. İşletmelerin Yükümlülükleri: İzin, İzleme, Raporlama, Doğrulama
            </Link>
            <Link href="#surec" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              6. Adım Adım Uyum Süreci
            </Link>
            <Link href="#ceza" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              7. İdari Para Cezaları ve Yaptırımlar
            </Link>
            <Link href="#skdm" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              8. SKDM (CBAM) ile İlişkisi: İhracatçı İçin Ne Anlama Geliyor?
            </Link>
            <Link href="#kapsamdisi" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              9. Kapsam Dışındaysanız Bile Neden Etkileniyorsunuz?
            </Link>
            <Link href="#sss" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              10. Sık Sorulan Sorular
            </Link>
            <Link href="#sonuc" className="rounded-lg border p-4 transition hover:border-orange-500 hover:bg-orange-50">
              11. Sonuç
            </Link>
          </div>
        </div>

        {/* 1. NEDİR */}
        <section id="nedir" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            1. Emisyon Ticaret Sistemi Nedir, Nasıl Çalışır?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Emisyon Ticaret Sistemi, ekonomideki toplam sera gazı emisyonuna bir
            üst sınır (cap) koyup, bu sınır içindeki salım hakkını
            &quot;tahsisat&quot; adı verilen birimlere bölerek işletmeler
            arasında ticarete (trade) açan bir mekanizmadır. Her tahsisat, bir
            ton karbondioksit eşdeğeri (tCO₂e) salım hakkını temsil eder.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Mantık basittir: emisyonunu ucuza azaltabilen işletme, azaltır ve
            elinde kalan tahsisatı satar. Azaltmak kendisi için pahalı olan
            işletme ise piyasadan tahsisat satın alır. Böylece emisyon azaltımı,
            devletin tek tek tesislere yöntem dayatması yerine, ekonomideki en
            düşük maliyetli noktalarda gerçekleşir. Şirket açısından ise sonuç
            nettir: <strong>karbon artık bir çevre raporu başlığı değil, bilanço
            ve maliyet muhasebesini ilgilendiren bir kalemdir.</strong>
          </p>

          {/* ŞEMA */}
          <div className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
              🔄 ETS Döngüsü — Bir Yıl Nasıl İşliyor?
            </h3>
            <svg viewBox="0 0 760 150" className="w-full" role="img" aria-label="ETS yıllık döngü şeması">
              <defs>
                <marker id="etsArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#f97316" />
                </marker>
              </defs>
              <rect x="4" y="35" width="130" height="70" rx="12" fill="#071A2F" />
              <text x="69" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">İzin &amp; İzleme</text>
              <text x="69" y="83" textAnchor="middle" fill="#cbd5e1" fontSize="11">Planı Onayı</text>

              <line x1="140" y1="70" x2="176" y2="70" stroke="#f97316" strokeWidth="3" markerEnd="url(#etsArrow)" />

              <rect x="182" y="35" width="130" height="70" rx="12" fill="#0f2f4f" />
              <text x="247" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Emisyonun</text>
              <text x="247" y="83" textAnchor="middle" fill="#cbd5e1" fontSize="11">İzlenmesi</text>

              <line x1="318" y1="70" x2="354" y2="70" stroke="#f97316" strokeWidth="3" markerEnd="url(#etsArrow)" />

              <rect x="360" y="35" width="130" height="70" rx="12" fill="#0f2f4f" />
              <text x="425" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Rapor &amp;</text>
              <text x="425" y="83" textAnchor="middle" fill="#cbd5e1" fontSize="11">Bağımsız Doğrulama</text>

              <line x1="496" y1="70" x2="532" y2="70" stroke="#f97316" strokeWidth="3" markerEnd="url(#etsArrow)" />

              <rect x="538" y="35" width="130" height="70" rx="12" fill="#f97316" />
              <text x="603" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Tahsisat</text>
              <text x="603" y="83" textAnchor="middle" fill="#fff7ed" fontSize="11">Teslimi</text>

              <text x="380" y="135" textAnchor="middle" fill="#475569" fontSize="12">
                Eksik tahsisat → piyasadan alım · Fazla tahsisat → satış veya bankalama
              </text>
            </svg>
          </div>
        </section>

        {/* 2. HUKUKİ ÇERÇEVE */}
        <section id="hukuki" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            2. Hukuki Çerçeve: İklim Kanunu ve ETS Yönetmeliği
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Türkiye&apos;deki karbon fiyatlandırma düzeni iki katmanlı bir yapı
            üzerine kuruldu. Birinci katman çerçeve kanunu, ikinci katman ise
            sistemin nasıl işleyeceğini belirleyen yönetmeliktir.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🗓️ 9 Temmuz 2025 — 7552 Sayılı İklim Kanunu
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Resmî Gazete: 09.07.2025, Sayı 32951</li>
                <li>✔ Türkiye&apos;nin ilk iklim çerçeve kanunu</li>
                <li>✔ ETS&apos;nin kurulması ve İklim Değişikliği Başkanlığı&apos;nın yetkilendirilmesi</li>
                <li>✔ Sera gazı emisyon izni zorunluluğu ve idari para cezalarının yasal dayanağı</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
                🗓️ 27 Ağustos 2026 — ETS Yönetmeliği
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Resmî Gazete: 27.08.2026, Sayı 33353</li>
                <li>✔ Kapsam, dönemler, tahsisat ve teslim usulünün belirlenmesi</li>
                <li>✔ İzleme-raporlama-doğrulama (MRV) zincirinin kurallara bağlanması</li>
                <li>✔ Bankalama, ödünç alma gibi esneklik mekanizmaları</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-8">
            <p className="leading-8 text-gray-700">
              <strong>Not:</strong> Yönetmeliğin uygulamaya ilişkin pek çok
              detayı (tahsisat planları, tebliğler, rehber dokümanlar, elektronik
              sistem duyuruları) ikincil düzenlemelerle netleşmeye devam
              edecektir. Şirketinizi doğrudan bağlayan bir karar almadan önce
              yürürlükteki yönetmelik metnini ve İklim Değişikliği
              Başkanlığı&apos;nın güncel duyurularını esas almanız gerekir.
            </p>
          </div>
        </section>

        {/* 3. KAPSAM */}
        <section id="kapsam" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            3. Kimler Kapsamda? Eşik Değer ve Tesis Kategorileri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Sistem, tüm şirketleri değil, belirli faaliyetleri yürüten ve belirli
            emisyon büyüklüğünü aşan <strong>tesisleri</strong> hedefliyor. Temel
            eşik, yıllık <strong>50.000 ton CO₂ eşdeğeri</strong> sera gazı salım
            kapasitesidir. Bu eşiğin altındaki tesisler ETS yükümlüsü değildir.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Kategori</th>
                  <th className="p-5">Yıllık Emisyon Aralığı</th>
                  <th className="p-5">Pratik Anlamı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Eşik Altı</td>
                  <td className="p-5">50.000 tCO₂e altı</td>
                  <td className="p-5">ETS yükümlüsü değil; ancak tedarik zinciri ve raporlama üzerinden dolaylı etki söz konusu</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kategori B</td>
                  <td className="p-5">50.000 – 500.000 tCO₂e</td>
                  <td className="p-5">Orta ölçekli sanayi tesisleri; izleme ve doğrulama yükümlülüğü, nitelikli teknik personel gereksinimi</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-5 font-semibold">Kategori C</td>
                  <td className="p-5">500.000 tCO₂e üzeri</td>
                  <td className="p-5">Büyük ölçekli tesisler; en yüksek izleme yoğunluğu ve teknik kadro şartı</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              🏭 Hangi Sektörler Öncelikli?
            </h3>
            <p className="mb-5 leading-8 text-gray-700">
              Pilot dönemde kapsam, ağırlıklı olarak AB&apos;nin Sınırda Karbon
              Düzenleme Mekanizması (SKDM/CBAM) kapsamındaki sektörlerle
              sınırlandırıldı. Uygulama dönemiyle birlikte yönetmeliğin Ek-1
              listesindeki faaliyetlere doğru genişleyecek.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Demir-çelik üretimi</li>
              <li>✔ Çimento ve klinker üretimi</li>
              <li>✔ Alüminyum üretimi</li>
              <li>✔ Gübre üretimi</li>
              <li>✔ Elektrik üretimi</li>
              <li>✔ Hidrojen üretimi</li>
            </ul>
            <p className="mt-5 text-sm text-gray-600">
              Kamuoyuna yansıyan değerlendirmelere göre pilot dönemde
              Türkiye&apos;nin toplam sera gazı emisyonlarının yaklaşık %41&apos;i,
              birinci uygulama döneminde ise yaklaşık %47&apos;si sistem kapsamına
              alınıyor. Tesisinizin Ek-1 listesindeki hangi faaliyet başlığına
              girdiği, kapsam değerlendirmesinin en kritik adımıdır.
            </p>
          </div>
        </section>

        {/* 4. TAKVİM */}
        <section id="takvim" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            4. Uygulama Takvimi: Pilot Dönem ve Uygulama Dönemleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Türkiye ETS, doğrudan maliyet doğuran bir sisteme sıçramak yerine
            kademeli bir geçiş kurgusuyla tasarlandı. Bu, şirketlere gerçek bir
            hazırlık penceresi tanıyor — ama bu pencere sınırlı.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-[#071A2F] text-white">
                <tr>
                  <th className="p-5">Dönem</th>
                  <th className="p-5">Yıllar</th>
                  <th className="p-5">Tahsisat Yaklaşımı</th>
                  <th className="p-5">Şirket İçin Anlamı</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">Pilot Dönem</td>
                  <td className="p-5">2026 – 2027</td>
                  <td className="p-5">%100 ücretsiz tahsisat (kıyas yöntemine göre)</td>
                  <td className="p-5">Doğrudan tahsisat satın alma maliyeti yok; asıl yük MRV altyapısını kurmak</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-5 font-semibold">1. Uygulama Dönemi – Alt Dönem 1</td>
                  <td className="p-5">2028 – 2030</td>
                  <td className="p-5">Ücretsiz tahsisat + açık artırma karması</td>
                  <td className="p-5">Karbon maliyeti bütçeye girmeye başlar</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-5 font-semibold">1. Uygulama Dönemi – Alt Dönem 2</td>
                  <td className="p-5">2031 – 2035</td>
                  <td className="p-5">Ücretsiz tahsisat payının kademeli azalması</td>
                  <td className="p-5">Emisyon yoğunluğu doğrudan rekabet gücünü belirler</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              💡 Pilot Dönemi &quot;Sessiz Dönem&quot; Sanmak En Sık Yapılan Hata
            </h3>
            <p className="leading-8 text-gray-700">
              Pilot dönemde tahsisatların ücretsiz dağıtılması, &quot;2028&apos;e
              kadar bir şey yapmamıza gerek yok&quot; şeklinde yorumlanabiliyor.
              Oysa 2028&apos;de kullanılacak ücretsiz tahsisat miktarı, büyük
              ölçüde pilot dönemde <strong>doğrulanmış</strong> emisyon ve
              faaliyet seviyesi verilerine dayanarak hesaplanacak. Bu dönemde
              eksik, zayıf metodolojiye dayanan veya doğrulanamayan veri
              üretmek, doğrudan gelecekteki tahsisat hakkını ve dolayısıyla
              maliyeti olumsuz etkiler.
            </p>
          </div>
        </section>

        {/* 5. YÜKÜMLÜLÜKLER */}
        <section id="yukumluluk" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            5. İşletmelerin Yükümlülükleri
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            ETS kapsamındaki bir tesisin yükümlülükleri, birbirini besleyen bir
            zincir hâlinde ilerler. Zincirin bir halkasındaki eksiklik, sonraki
            tüm adımları geçersiz kılabilir.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-green-700">
                ✅ Temel Yükümlülükler
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔ <strong>Sera gazı emisyon izni</strong> alınması (faaliyetin devamı buna bağlıdır)</li>
                <li>✔ <strong>İzleme planı</strong> hazırlanması ve Başkanlığa onaylatılması</li>
                <li>✔ <strong>Metodoloji planı</strong> hazırlanması</li>
                <li>✔ Yıllık <strong>sera gazı emisyon raporu</strong> sunulması</li>
                <li>✔ Yıllık <strong>faaliyet seviyesi raporu</strong> sunulması</li>
                <li>✔ Raporların <strong>akredite doğrulayıcı kuruluş</strong> tarafından doğrulanması</li>
                <li>✔ Doğrulanmış emisyona karşılık gelen <strong>tahsisat teslimi</strong></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-[#071A2F]">
                📅 Kritik Takvim Noktaları
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>30 Nisan</strong> — Bir önceki takvim yılına ait sera
                  gazı emisyon ve faaliyet seviyesi raporlarının Başkanlığa
                  sunulması
                </li>
                <li>
                  <strong>Kasım ayı sonu</strong> — Doğrulanmış emisyon miktarına
                  denk gelen tahsisatın teslim edilmesi
                </li>
                <li>
                  <strong>İzlemeye başlamadan en az 6 ay önce</strong> — İzleme
                  planının onay için Başkanlığa gönderilmesi
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Tarihler ve süreler yürürlükteki yönetmelik ile ikincil
                düzenlemelere göre değişebilir; her yıl için Başkanlık takvimini
                ayrıca teyit etmek gerekir.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              👷 Teknik Kadro ve Doğrulama Altyapısı
            </h3>
            <p className="mb-5 leading-8 text-gray-700">
              ETS, yalnızca bir evrak yükümlülüğü değil; ölçüm, hesaplama ve veri
              yönetimi disiplini gerektiren teknik bir süreçtir. Bu nedenle
              düzenleme, tesis kategorisine göre emisyon izleme alanında
              tecrübeli mühendis istihdamı ya da bu niteliği sağlayan bir
              danışmanlık desteği alınmasını öngörüyor:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ <strong>Kategori B tesisler:</strong> emisyon izleme alanında en az 2 yıl tecrübeli 1 mühendis</li>
              <li>✔ <strong>Kategori C tesisler:</strong> emisyon izleme alanında en az 3 yıl tecrübeli 2 mühendis</li>
            </ul>
            <p className="mt-5 leading-8 text-gray-700">
              Doğrulama tarafında ise raporlar, işletmenin kendi beyanıyla değil,
              merkezî sistem üzerinden görevlendirilen <strong>akredite
              doğrulayıcı kuruluşlar</strong> tarafından onaylanır. Bu yapı, {" "}
              <Link href="/blog/bagimsiz-denetim-esik-degerleri-2026-degisti" className="font-semibold text-orange-600 hover:underline">
                bağımsız denetim
              </Link>{" "}
              mantığının karbon verisine uyarlanmış hâlidir: veri, üreten
              tarafından değil, bağımsız üçüncü tarafça teyit edilir.
            </p>
          </div>
        </section>

        {/* 6. SÜREÇ */}
        <section id="surec" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            6. Adım Adım Uyum Süreci
          </h2>
          <p className="mb-10 text-lg leading-9 text-gray-700">
            Kapsamda olduğunu düşünen ya da olup olmadığından emin olmayan bir
            sanayi şirketi için makul bir yol haritası şu şekilde kurulabilir:
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🔍</div>
              <h3 className="text-xl font-bold">1. Kapsam Analizi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Tesisinizin faaliyetinin Ek-1 listesinde yer alıp almadığını ve
                yıllık salım kapasitesinin 50.000 tCO₂e eşiğini aşıp aşmadığını
                belirleyin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="text-xl font-bold">2. Emisyon Envanteri</h3>
              <p className="mt-3 text-sm text-gray-600">
                Kaynak bazında (yakıt, proses, elektrik) emisyon envanterinizi
                çıkarın; ölçüm ve fatura verilerinin izlenebilirliğini test edin.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📝</div>
              <h3 className="text-xl font-bold">3. İzin ve İzleme Planı</h3>
              <p className="mt-3 text-sm text-gray-600">
                Sera gazı emisyon izni başvurusunu yapın, izleme ve metodoloji
                planlarını süresi içinde hazırlayıp onaya sunun.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">🧮</div>
              <h3 className="text-xl font-bold">4. Veri Yönetimi Kurulumu</h3>
              <p className="mt-3 text-sm text-gray-600">
                Aylık veri toplama, kontrol ve arşivleme rutinini oluşturun;
                sorumluluğu belirli bir birime ve kişiye bağlayın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">✔️</div>
              <h3 className="text-xl font-bold">5. Doğrulama</h3>
              <p className="mt-3 text-sm text-gray-600">
                Yıllık raporlarınızı akredite doğrulayıcı kuruluş sürecine
                zamanında girecek şekilde hazırlayın.
              </p>
            </div>
            <div className="rounded-xl border p-6 text-center shadow-sm">
              <div className="mb-4 text-5xl">📉</div>
              <h3 className="text-xl font-bold">6. Azaltım Stratejisi</h3>
              <p className="mt-3 text-sm text-gray-600">
                Verimlilik, yakıt değişimi ve yeşil dönüşüm yatırımlarını
                teşviklerle birlikte planlayarak karbon maliyetini düşürün.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-2xl border-l-4 border-green-500 bg-green-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🔗 Azaltım Yatırımını Teşvikle Birleştirin
            </h3>
            <p className="leading-8 text-gray-700">
              ETS&apos;nin doğurduğu maliyet baskısına verilecek en verimli
              cevap, emisyon yoğunluğunu düşüren yatırımdır. Enerji verimliliği,
              atık ısı geri kazanımı, yakıt dönüşümü ve proses modernizasyonu
              gibi yatırımlar; {" "}
              <Link href="/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" className="font-semibold text-orange-600 hover:underline">
                Yatırım Teşvik Belgesi
              </Link>{" "}
              kapsamındaki KDV istisnası, gümrük muafiyeti ve vergi indirimi
              unsurlarıyla birlikte değerlendirildiğinde geri dönüş süresi
              belirgin şekilde kısalabilir. Aynı şekilde dijital ölçüm ve veri
              altyapısı için {" "}
              <Link href="/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" className="font-semibold text-orange-600 hover:underline">
                KOSGEB KOBİ Dijital Dönüşüm Destek Programı
              </Link>{" "}
              gibi programlar gündeme alınabilir.
            </p>
          </div>
        </section>

        {/* 7. CEZALAR */}
        <section id="ceza" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            7. İdari Para Cezaları ve Yaptırımlar
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yaptırım rejiminin dayanağı 7552 sayılı İklim Kanunu&apos;dur.
            Cezalar, ihlalin türüne ve tesisin ETS kapsamında olup olmamasına
            göre farklılaşıyor.
          </p>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-red-500">
              <li>
                <strong>Sera gazı izleme ve raporlama ihlalleri:</strong> ihlalin
                niteliğine göre <strong>500.000 TL ile 5.000.000 TL</strong>
                arasında idari para cezası uygulanabilir.
              </li>
              <li>
                <strong>ETS kapsamındaki işletmeler:</strong> aynı ihlaller için
                cezalar <strong>iki katı</strong> olarak uygulanır.
              </li>
              <li>
                <strong>Tahsisat teslim edilmemesi:</strong> teslim edilmeyen her
                bir tahsisat için, doğrulanmış emisyon raporunun ait olduğu yılın
                son üç ayına ilişkin birincil ve ikincil piyasa ağırlıklı
                ortalama tahsisat fiyatlarından yüksek olanının{" "}
                <strong>iki katı</strong> tutarında ceza uygulanır. Ayrıca eksik
                tahsisat, takip eden yılın yükümlülüğüne eklenir — yani ceza
                ödemek yükümlülüğü ortadan kaldırmaz.
              </li>
              <li>
                <strong>Tekrar hâlinde artırım:</strong> ceza tutarları birinci
                tekrarda bir kat, ikinci ve sonraki tekrarlarda iki kat artırılır.
              </li>
              <li>
                <strong>İzin iptali:</strong> tahsisat teslim yükümlülüğünü üç yıl
                üst üste yerine getirmeyen işletmelerin sera gazı emisyon izni
                iptal edilebilir ve belirli bir süre yeni izin verilmez.
              </li>
            </ul>
          </div>
          <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🕒 Pilot Dönem İndirimi
            </h3>
            <p className="leading-8 text-gray-700">
              Geçiş sürecini yumuşatmak amacıyla, pilot uygulama döneminde
              uygulanacak idari para cezalarında önemli oranda (kamuoyuna yansıyan
              düzenlemelere göre %80 seviyesinde) indirim öngörülmüştür. Ayrıca
              işletmelere sera gazı emisyon izni alabilmeleri için bir geçiş
              süresi tanınmıştır. Bu indirim geçicidir; uygulama dönemiyle
              birlikte tam tutar üzerinden yaptırım gündeme gelir. Şirketinizi
              ilgilendiren somut ceza tutarını, güncel kanun metni ve yıllık
              yeniden değerleme oranlarıyla birlikte teyit etmeniz gerekir.
            </p>
          </div>
        </section>

        {/* 8. SKDM */}
        <section id="skdm" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            8. SKDM (CBAM) ile İlişkisi: İhracatçı İçin Ne Anlama Geliyor?
          </h2>
          <p className="mb-6 text-lg leading-9 text-gray-700">
            Türkiye ETS&apos;nin zamanlaması tesadüf değil. Avrupa Birliği&apos;nin
            Sınırda Karbon Düzenleme Mekanizması&apos;nda (SKDM/CBAM) geçiş dönemi
            31 Aralık 2025&apos;te tamamlandı ve <strong>1 Ocak 2026 itibarıyla
            kesin dönem başladı</strong>. Kesin dönemde, demir-çelik, alüminyum,
            çimento, gübre, elektrik ve hidrojen sektörlerinde AB&apos;ye ihraç
            edilen ürünlerin gömülü karbon emisyonu için mali yükümlülük doğuyor.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Mekanizmanın kritik özelliği şudur: <strong>menşe ülkede ödenmiş
            karbon fiyatı, AB&apos;de ödenecek tutardan mahsup edilebilir.</strong>
            Yani Türkiye&apos;de ödenen karbon bedeli ülke içinde kalır; ödenmezse
            aynı bedel AB bütçesine gider. Türkiye ETS&apos;nin AB ETS ile uyumlu
            biçimde tasarlanmasının arkasındaki temel ekonomik gerekçe budur.
          </p>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8">
            <h3 className="mb-5 text-2xl font-bold text-[#071A2F]">
              📦 İhracatçı Şirket İçin Pratik Sonuçlar
            </h3>
            <ul className="ml-6 list-disc space-y-4 text-gray-700 marker:text-orange-500">
              <li>
                AB&apos;ye ihracat yapan üreticiler için ürün bazında gömülü
                karbon hesabı ve bağımsız doğrulama artık bir ticari zorunluluk.
              </li>
              <li>
                ETS kapsamındaki bir tesis için MRV altyapısı, aynı zamanda SKDM
                beyanlarının da temelini oluşturur; iki süreci ayrı ayrı kurmak
                gereksiz maliyet üretir.
              </li>
              <li>
                Karbon yoğunluğu yüksek üretim, AB pazarında fiyat rekabetini
                doğrudan kaybettiren bir unsura dönüşüyor.
              </li>
              <li>
                Kapsam dışındaki KOBİ&apos;ler bile, AB&apos;ye ihracat yapan bir
                ana sanayinin tedarikçisiyse emisyon verisi talebiyle
                karşılaşıyor.
              </li>
            </ul>
          </div>
        </section>

        {/* 9. KAPSAM DIŞI */}
        <section id="kapsamdisi" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            9. Kapsam Dışındaysanız Bile Neden Etkileniyorsunuz?
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Yıllık emisyonu 50.000 tCO₂e altında kalan çok sayıda şirket,
            &quot;bu düzenleme bizi ilgilendirmiyor&quot; sonucuna varıyor. ETS
            yükümlülüğü açısından bu doğru; ancak ticari gerçeklik açısından
            eksik bir okuma. Karbon verisi talebi, kanuni kapsamdan çok daha
            geniş bir alana yayılıyor:
          </p>
          <ul className="ml-6 list-disc space-y-4 text-lg text-gray-700 marker:text-orange-500">
            <li>
              <strong>Tedarik zinciri baskısı:</strong> ETS kapsamındaki bir ana
              sanayi, kendi Kapsam 3 emisyonunu hesaplayabilmek için
              tedarikçilerinden ürün bazında emisyon verisi ister. Veriyi
              sağlayamayan tedarikçi, listeden düşme riskiyle karşılaşır.
            </li>
            <li>
              <strong>Sürdürülebilirlik raporlaması:</strong> {" "}
              <Link href="/blog/tsrs-surdurulebilirlik-raporlama-zorunlulugu-2026" className="font-semibold text-orange-600 hover:underline">
                TSRS kapsamındaki raporlama yükümlülüğü
              </Link>{" "}
              zaten sera gazı emisyonlarının ölçülmesini ve güvence denetimine
              tabi tutulmasını gerektiriyor. İki süreç aynı veri temeline dayanır.
            </li>
            <li>
              <strong>Finansmana erişim:</strong> bankalar ve finans kuruluşları
              kredi değerlendirmelerinde karbon riskini giderek daha fazla dikkate
              alıyor; yeşil kredi ve sürdürülebilirlik bağlantılı finansman
              ürünlerinde ölçülmüş emisyon verisi ön koşul hâline geliyor.
            </li>
            <li>
              <strong>Şirket değeri ve M&amp;A:</strong> {" "}
              <Link href="/blog/sirket-degerleme-nedir-yontemleri-nasil-yapilir-2026" className="font-semibold text-orange-600 hover:underline">
                şirket değerleme
              </Link>{" "}
              ve due diligence süreçlerinde ölçülmemiş karbon riski, iskonto
              nedeni olarak karşınıza çıkabilir.
            </li>
            <li>
              <strong>Eşiğin altındaki tesisler kalıcı olarak güvende değil:</strong>{" "}
              kapasite artışı yapan bir tesis, birkaç yıl içinde eşiği aşarak
              kapsama girebilir. Yatırım kararı alırken bu ihtimal
              hesaplanmalıdır.
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
                Türkiye Emisyon Ticaret Sistemi Yönetmeliği ne zaman yürürlüğe girdi?
              </h3>
              <p className="leading-8 text-gray-700">
                Yönetmelik, 27 Ağustos 2026 tarihli ve 33353 sayılı Resmî
                Gazete&apos;de yayımlandı. Dayanağı, 9 Temmuz 2025 tarihli ve
                32951 sayılı Resmî Gazete&apos;de yayımlanan 7552 sayılı İklim
                Kanunu&apos;dur.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Şirketim ETS kapsamında mı, nasıl anlarım?
              </h3>
              <p className="leading-8 text-gray-700">
                İki koşulun birlikte sağlanması gerekir: tesisinizin faaliyetinin
                yönetmeliğin Ek-1 listesindeki faaliyetlerden biri olması ve
                yıllık sera gazı salım kapasitesinin 50.000 ton CO₂ eşdeğerini
                aşması. Pilot dönemde kapsam ağırlıklı olarak SKDM sektörleriyle
                sınırlı tutuluyor. Sınırda kalan tesislerde değerlendirmenin
                kapasite hesabı üzerinden teknik olarak yapılması gerekir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Pilot dönemde tahsisat için ödeme yapacak mıyım?
              </h3>
              <p className="leading-8 text-gray-700">
                2026-2027 pilot döneminde tahsisatların kıyas yöntemine göre %100
                ücretsiz dağıtılması öngörülüyor; yani doğrudan bir tahsisat satın
                alma maliyeti beklenmiyor. Ancak izleme, raporlama, doğrulama ve
                sisteme katılıma ilişkin operasyonel maliyetler bu dönemde de
                doğar.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Sera gazı emisyon izni almazsam ne olur?
              </h3>
              <p className="leading-8 text-gray-700">
                Doğrudan sera gazı emisyonuna neden olan ve kapsama giren
                işletmeler için sera gazı emisyon izni zorunludur; izinsiz
                faaliyet idari para cezası yaptırımına tabidir. Tahsisat teslim
                yükümlülüğünü üst üste yerine getirmeyen işletmelerin mevcut
                izinlerinin iptali de gündeme gelebilir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                Elimde fazla tahsisat kalırsa ne yapabilirim?
              </h3>
              <p className="leading-8 text-gray-700">
                Sistem, esneklik mekanizmaları içeriyor: fazla tahsisat piyasada
                satılabilir ya da ilgili kurallar çerçevesinde sonraki döneme
                aktarılabilir (bankalama). Emisyonunu erken azaltan işletme için
                bu, karbon yönetiminin bir maliyet kaleminden gelir kalemine
                dönüşebileceği anlamına gelir.
              </p>
            </div>
            <div className="rounded-2xl border p-8">
              <h3 className="mb-3 text-2xl font-bold text-[#071A2F]">
                ETS ile TSRS sürdürülebilirlik raporlaması aynı şey mi?
              </h3>
              <p className="leading-8 text-gray-700">
                Hayır. TSRS, finansal raporlamaya paralel bir sürdürülebilirlik
                <em> bilgi açıklama</em> çerçevesidir; ETS ise emisyona doğrudan
                fiyat ve teslim yükümlülüğü getiren bir <em>piyasa</em>
                mekanizmasıdır. Ancak ikisinin de temeli aynı veridir: doğru
                ölçülmüş ve doğrulanabilir sera gazı emisyonu. Bu nedenle iki
                sürecin tek bir veri altyapısı üzerinden kurgulanması hem maliyeti
                hem de tutarsızlık riskini düşürür.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 scroll-mt-24">
          <div className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#071A2F]">
              🤝 ETS Kapsam ve Uyum Sürecinde Yanınızdayız
            </h3>
            <p className="leading-8 text-gray-700">
              Şirketinizin 50.000 tCO₂e eşiğine göre ETS kapsamına girip
              girmediğini belirlemek, izleme-raporlama-doğrulama
              yükümlülüklerini zamanında kurmak ve idari para cezası
              riskinden kaçınmak için hazırlık sürecine erken başlamak
              gerekir.{" "}
              <Link href="/#contact" className="text-orange-600 underline">
                ETS kapsam durumunuzu değerlendirmemiz için bizimle
                iletişime geçin.
              </Link>
            </p>
          </div>
        </section>

        {/* 11. SONUÇ */}
        <section id="sonuc" className="mt-24 scroll-mt-24">
          <h2 className="mb-8 border-l-4 border-orange-500 pl-5 text-4xl font-extrabold text-[#071A2F]">
            11. Sonuç
          </h2>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            27 Ağustos 2026 tarihli Türkiye Emisyon Ticaret Sistemi Yönetmeliği,
            Türkiye sanayisi için yalnızca yeni bir çevre mevzuatı değil; maliyet
            yapısını, yatırım önceliklerini ve ihracat rekabet gücünü doğrudan
            etkileyecek bir düzenlemedir. 2026-2027 pilot dönemi, tahsisatların
            ücretsiz dağıtılması nedeniyle nispeten yumuşak görünse de, bu
            dönemde üretilecek doğrulanmış veri, 2028 sonrası tahsisat hakkının
            ve dolayısıyla karbon maliyetinin temelini oluşturacak. Bu yüzden
            pilot dönem, beklenecek değil <strong>kullanılacak</strong> bir
            dönemdir.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Doğru yaklaşım, konuyu tek başına bir uyum yükümlülüğü olarak değil;
            emisyon envanteri, azaltım yatırımı, teşvik planlaması, ihracat
            stratejisi ve sürdürülebilirlik raporlamasını birlikte ele alan
            bütünsel bir program olarak kurgulamaktır. Emisyon verisi doğru
            kurulduğunda aynı altyapı hem ETS yükümlülüğünü, hem SKDM beyanlarını,
            hem de TSRS raporlamasını besler.
          </p>
          <p className="mb-8 text-lg leading-9 text-gray-700">
            Şirketinizin ETS kapsamında olup olmadığının belirlenmesi, karbon ve
            su ayak izi hesaplaması, sürdürülebilirlik raporlaması ve güvence
            denetimi süreçleri, emisyon azaltım yatırımlarının uygun teşvik
            programlarıyla eşleştirilmesi ve bu yatırımların finansal
            planlamasının yapılması konularında Koray Akdağ / Sistem Global
            Danışmanlık olarak yanınızdayız. Ayrı ayrı danışmanlık, mali müşavirlik
            veya raporlama firmalarıyla çalışmanıza gerek kalmadan; kapsam
            analizinden veri altyapısının kurulmasına, teşvik başvurularından
            raporlama ve güvence süreçlerine kadar tüm süreci tek noktadan
            yürütebiliriz. Şirketinizin karbon yol haritasını birlikte
            değerlendirmek için bizimle iletişime geçebilirsiniz.
          </p>
        </section>
    </BlogLayout>
  );
}
