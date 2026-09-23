import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "Dubai'de Şirket Kuruluşu Danışmanlığı | Koray Akdağ",
  description:
    "Dubai'de mainland veya free zone şirket kuruluşunu Türkiye'den yönetiyoruz: doğru yapı seçimi, lisans, %9 kurumlar vergisi sonrası planlama, banka hesabı ve Türkiye'deki yükümlülükler.",
  alternates: {
    canonical: "/yurt-disinda-sirket-kurulusu/dubai",
  },
};

const STEPS = [
  {
    num: "1",
    title: "Mainland mı, Free Zone mu?",
    text: "İş modeliniz yerel pazara mı yoksa ihracata mı odaklı, bu sorunun cevabı mainland (anakara) ile free zone (serbest bölge) arasındaki seçimi belirliyor. Mülkiyet oranı, faaliyet izni ve maliyet farkları birlikte değerlendiriliyor.",
  },
  {
    num: "2",
    title: "Serbest bölge ve lisans türü seçimi",
    text: "Free zone tercih edilirse hedef sektöre uygun serbest bölgenin (DMCC, JAFZA, IFZA vb.) ve ticaret/hizmet/sanayi lisans türünün belirlenmesi, kuruluş maliyetini ve vize kotasını doğrudan etkiliyor.",
  },
  {
    num: "3",
    title: "Tescil ve lisans başvurusu",
    text: "Şirket ismi onayı, kuruluş belgeleri ve ilgili otorite (mainland için DED, free zone için bölge otoritesi) nezdinde tescil süreci sizin adınıza yürütülüyor.",
  },
  {
    num: "4",
    title: "Banka hesabı, vergi ve Türkiye yükümlülükleri",
    text: "Kuruluş sonrası kurumsal banka hesabı açılışı, %9 kurumlar vergisi ve KDV mükellefiyeti planlaması, ayrıca Türkiye'deki yurt dışı iştirak bildirim yükümlülüğü takip ediliyor.",
  },
];

const FEATURES = [
  "Mainland / Free Zone Karar Analizi",
  "Serbest Bölge ve Lisans Türü Seçimi",
  "Tescil ve Lisans Başvuru Süreci",
  "Kurumsal Banka Hesabı Açılış Desteği",
  "%9 Kurumlar Vergisi Sonrası Planlama",
  "Türkiye'deki Bildirim Yükümlülükleri",
];

export default function DubaiSirketKurulusuPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ Dubai&apos;de Şirket Kuruluşu
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Dubai&apos;de şirket kuruluşunu Türkiye&apos;den yönetiyoruz
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Mainland ve free zone arasındaki seçimden lisans türüne, banka
            hesabı açılışından %9 kurumlar vergisi sonrası planlamaya kadar
            BAE&apos;de yapılanma sürecinizi baştan sona yönetiyoruz.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
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

            <div className="mt-14">
              <h2 className="mb-5 text-xl font-bold text-[#071A2F]">
                Detaylı bilgi
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/blog/dubaide-sirket-nasil-kurulur"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                >
                  Dubai&apos;de Şirket Nasıl Kurulur? Tam Rehber →
                </Link>
                <Link
                  href="/blog/dubai-free-zone-mu-mainland-mi-maliyet-karsilastirma"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                >
                  Free Zone mu, Mainland mi? Maliyet Karşılaştırması →
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Diğer ülkelerle karşılaştırmalı bakmak isterseniz{" "}
                <Link href="/yurt-disinda-sirket-kurulusu" className="font-semibold text-orange-600 hover:underline">
                  Yurt Dışında Şirket Kuruluşu
                </Link>{" "}
                sayfamıza göz atabilirsiniz.
              </p>
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
