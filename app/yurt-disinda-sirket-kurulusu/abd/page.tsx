import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "ABD'de Şirket Kuruluşu Danışmanlığı | Koray Akdağ",
  description:
    "ABD'de LLC veya C-Corp kuruluşunu Türkiye'den yönetiyoruz: eyalet ve şirket türü seçimi, EIN başvurusu, banka hesabı ve Türkiye'deki vergi yükümlülükleri.",
  alternates: {
    canonical: "/yurt-disinda-sirket-kurulusu/abd",
  },
};

const STEPS = [
  {
    num: "1",
    title: "LLC mi, C-Corp mu?",
    text: "Kâr doğrudan ortaklara yansıyan LLC mi, yoksa yatırımcı almayı hedefleyen girişimler için standart yapı olan, %21 sabit federal vergiye tabi C-Corp mu; iş modelinize ve yatırımcı planınıza göre doğru yapıyı belirliyoruz.",
  },
  {
    num: "2",
    title: "Eyalet seçimi: Delaware mi, Wyoming mi?",
    text: "Yatırım almayı hedefleyen büyüme odaklı yapılar için Delaware, düşük maliyetli küçük-orta ölçekli LLC'ler için ise Wyoming genellikle daha uygun; eyalet kurumlar vergisi ve yıllık maliyet farkları birlikte değerlendiriliyor.",
  },
  {
    num: "3",
    title: "Tescil ve EIN başvurusu",
    text: "İlgili eyaletin sicilinde şirket tescili yapıldıktan sonra IRS nezdinde EIN (İşveren Kimlik Numarası) başvurusu gerçekleştiriliyor; EIN olmadan banka hesabı açılamıyor.",
  },
  {
    num: "4",
    title: "Banka hesabı ve Türkiye yükümlülükleri",
    text: "EIN alındıktan sonra şirket adına banka hesabı açılıyor; federal/eyalet vergi yükümlülükleri ile Türkiye'deki yurt dışı iştirak bildirim yükümlülüğü birlikte planlanıyor.",
  },
];

const FEATURES = [
  "LLC / C-Corp Yapı Kararı Analizi",
  "Delaware / Wyoming Eyalet Karşılaştırması",
  "Eyalet Tescili ve EIN (IRS) Başvurusu",
  "ABD Banka Hesabı Açılış Desteği",
  "Federal ve Eyalet Vergi Planlaması",
  "Türkiye'deki Bildirim Yükümlülükleri",
];

export default function AbdSirketKurulusuPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ ABD&apos;de Şirket Kuruluşu
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            ABD&apos;de şirket kuruluşunu Türkiye&apos;den yönetiyoruz
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            LLC ile C-Corp arasındaki seçimden Delaware/Wyoming eyalet
            kararına, EIN başvurusundan banka hesabı açılışına kadar
            ABD&apos;de yapılanma sürecinizi baştan sona yönetiyoruz.
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
                  href="/blog/amerikada-sirket-nasil-kurulur"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                >
                  ABD&apos;de Şirket Nasıl Kurulur? Tam Rehber →
                </Link>
                <Link
                  href="/blog/abd-llc-mi-c-corp-mi-turk-girisimciler-icin-rehber"
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                >
                  LLC mi, C-Corp mu? Türk Girişimciler İçin Rehber →
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
