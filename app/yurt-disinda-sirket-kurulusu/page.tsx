import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "Yurt Dışında Şirket Kuruluşu Danışmanlığı | Koray Akdağ",
  description:
    "Dubai, Almanya, ABD, Kazakistan, Özbekistan ve 10'dan fazla ülkede şirket kuruluşunu Türkiye'den yönetiyoruz. Ülke seçimi, kuruluş, banka hesabı, vergi ve Türkiye'deki yükümlülüklerle uçtan uca danışmanlık.",
  alternates: {
    canonical: "/yurt-disinda-sirket-kurulusu",
  },
};

const STEPS = [
  {
    num: "1",
    title: "Gerekçe ve hedefin netleştirilmesi",
    text: "Vergi avantajı, yeni pazara erişim, tedarik zincirine yakınlık veya prestij: yurt dışına açılma nedeniniz, doğru ülke ve yapı seçimini doğrudan belirliyor.",
  },
  {
    num: "2",
    title: "Ülke ve şirket yapısı seçimi",
    text: "Hedef pazarınıza, sermayenize ve operasyon modelinize göre hangi ülkede, hangi şirket türüyle (LLC, GmbH, Free Zone, Limited vb.) kurulmanız gerektiğini birlikte belirliyoruz.",
  },
  {
    num: "3",
    title: "Kuruluş ve tescil süreci yönetimi",
    text: "İlgili ülkenin ticaret sicili/adalet bakanlığı nezdindeki tescil sürecini, gerekli belgeleri ve yerel temsilcilik ihtiyacını sizin adınıza yönetiyoruz.",
  },
  {
    num: "4",
    title: "Banka hesabı, vergi ve Türkiye yükümlülükleri",
    text: "Şirket banka hesabı açılışı, yerel vergi mükellefiyeti ve Türkiye'deki bildirim/vergi yükümlülüklerinizi (yurt dışı iştirak bildirimi dahil) tek elden takip ediyoruz.",
  },
];

const FEATURES = [
  "Ülke ve Yapı Seçimi Danışmanlığı",
  "Kuruluş ve Tescil Süreci Yönetimi",
  "Banka Hesabı Açılış Desteği",
  "Türkiye'deki Bildirim ve Vergi Yükümlülükleri",
  "Yerel Muhasebe/Mali Müşavir Yönlendirmesi",
  "Vize ve Oturum İzni Süreç Bilgilendirmesi",
];

const REGIONS = [
  {
    title: "Avrupa",
    countries: [
      { flag: "🇩🇪", name: "Almanya", href: "/yurt-disinda-sirket-kurulusu/almanya" },
      { flag: "🇬🇧", name: "İngiltere", href: "/blog/ingilterede-sirket-nasil-kurulur" },
      { flag: "🇳🇱", name: "Hollanda", href: "/blog/hollandada-sirket-nasil-kurulur" },
      { flag: "🇮🇹", name: "İtalya", href: "/blog/italyada-sirket-nasil-kurulur" },
      { flag: "🇵🇱", name: "Polonya", href: "/blog/polonyada-sirket-nasil-kurulur" },
      { flag: "🇧🇬", name: "Bulgaristan", href: "/blog/bulgaristanda-sirket-nasil-kurulur" },
      { flag: "🇺🇦", name: "Ukrayna", href: "/blog/ukraynada-sirket-nasil-kurulur" },
    ],
  },
  {
    title: "Körfez ve Ortadoğu",
    countries: [
      { flag: "🇦🇪", name: "BAE (Dubai)", href: "/yurt-disinda-sirket-kurulusu/dubai" },
      { flag: "🇸🇦", name: "Suudi Arabistan", href: "/blog/suudi-arabistanda-sirket-nasil-kurulur" },
    ],
  },
  {
    title: "Orta Asya ve Kafkasya",
    countries: [
      { flag: "🇰🇿", name: "Kazakistan", href: "/blog/kazakistanda-sirket-nasil-kurulur" },
      { flag: "🇺🇿", name: "Özbekistan", href: "/blog/ozbekistanda-sirket-nasil-kurulur" },
      { flag: "🇹🇯", name: "Tacikistan", href: "/blog/tacikistanda-sirket-nasil-kurulur" },
      { flag: "🇦🇿", name: "Azerbaycan", href: "/blog/azerbaycanda-sirket-nasil-kurulur" },
    ],
  },
  {
    title: "Kuzey Amerika ve Asya",
    countries: [
      { flag: "🇺🇸", name: "Amerika Birleşik Devletleri", href: "/yurt-disinda-sirket-kurulusu/abd" },
      { flag: "🇸🇬", name: "Singapur", href: "/blog/singapurda-sirket-nasil-kurulur" },
    ],
  },
];

const COMPARISONS = [
  { name: "ABD'de LLC mi C-Corp mu?", href: "/blog/abd-llc-mi-c-corp-mi-turk-girisimciler-icin-rehber" },
  { name: "Dubai Free Zone mu, Mainland mi?", href: "/blog/dubai-free-zone-mu-mainland-mi-maliyet-karsilastirma" },
  { name: "Almanya'da GmbH mı, UG mı?", href: "/blog/almanyada-gmbh-kurulus-maliyeti-ug-alternatifi" },
  { name: "Kazakistan'da Vergi Oranları ve Astana Hub (AIFC) Teşvikleri", href: "/blog/kazakistanda-vergi-oranlari-astana-hub-aifc-tesvikleri" },
];

export default function YurtDisindaSirketKurulusuPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ Yurt Dışında Şirket Kuruluşu
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Yurt dışında şirket kuruluşunu Türkiye&apos;den yönetiyoruz
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Şirket türü, kuruluş, banka hesabı, vergi ve Türkiye&apos;deki
            yükümlülükler dahil olmak üzere, 15&apos;ten fazla ülkede
            uçtan uca yurt dışı şirket kuruluşu danışmanlığı veriyoruz.
            Hangi ülkenin iş modelinize uygun olduğunu birlikte
            netleştirelim.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {/* STEPS */}
            <h2 className="mb-6 text-xl font-bold text-[#071A2F]">
              Süreç nasıl işliyor?
            </h2>
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#071A2F]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Yurt dışına açılmadan önce netleştirmeniz gereken temel
              sorular için{" "}
              <Link
                href="/makaleler/yurt-disina-acilmadan-once-3-soru"
                className="font-semibold text-orange-600 hover:underline"
              >
                bu yazımıza
              </Link>{" "}
              göz atabilirsiniz.
            </p>

            {/* ÜLKE REHBERLERİ */}
            <div className="mt-14">
              <h2 className="mb-5 text-xl font-bold text-[#071A2F]">
                Ülkeye özel kuruluş rehberleri
              </h2>
              <div className="space-y-8">
                {REGIONS.map((region) => (
                  <div key={region.title}>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                      {region.title}
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {region.countries.map((country) => (
                        <Link
                          key={country.href}
                          href={country.href}
                          className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                        >
                          {country.flag} {country.name} →
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KARŞILAŞTIRMALI REHBERLER */}
            <div className="mt-14">
              <h2 className="mb-5 text-xl font-bold text-[#071A2F]">
                Karşılaştırmalı rehberler
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {COMPARISONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                  >
                    {item.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* FEATURES / CTA */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-[#F7F5EF] p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Size sağladıklarımız
            </p>

            <ul className="mt-4 space-y-2.5">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="mt-0.5 text-green-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <ContactCtaButton className="mt-7 block w-full rounded-xl bg-orange-500 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-orange-600">
              Ücretsiz Ön Görüşme Talep Et
            </ContactCtaButton>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
