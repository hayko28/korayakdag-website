import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "KOSGEB Danışmanlığı | Koray Akdağ",
  description:
    "KOSGEB uygunluk analizinden başvuru dosyasına, süreç takibinden raporlamaya kadar KOSGEB destek programları için uçtan uca danışmanlık. Hangi programa uygun olduğunuzu birlikte belirleyelim.",
};

const STEPS = [
  {
    num: "1",
    title: "Uygunluk analizi",
    text: "NACE kodunuz, faaliyet alanınız, çalışan sayınız ve yatırım planınızı inceleyerek hangi KOSGEB programlarına uygun olduğunuzu belirliyoruz.",
  },
  {
    num: "2",
    title: "Program karşılaştırması",
    text: "Girişimci Destek, Kapasite Geliştirme, Ar-Ge/Ür-Ge/İnovasyon, KOBİ Dijital Dönüşüm gibi uygun olduğunuz programları destek tutarı, şart ve süreye göre karşılaştırıyoruz.",
  },
  {
    num: "3",
    title: "Başvuru dosyası hazırlığı",
    text: "Gerekli belgeleri, proje/iş planı metnini ve KOBİ Bilgi Sistemi üzerindeki başvuru adımlarını sizin adınıza hazırlıyor ve yönetiyoruz.",
  },
  {
    num: "4",
    title: "Süreç takibi ve raporlama",
    text: "Başvuru sonrası değerlendirme sürecini, varsa ek belge taleplerini ve destek ödeme/raporlama yükümlülüklerini takip ediyoruz.",
  },
];

const FEATURES = [
  "KOSGEB Uygunluk Analizi",
  "Program Karşılaştırma Değerlendirmesi",
  "NACE Kodu ve Şart Kontrolü",
  "Başvuru Dosyası Hazırlığı",
  "KOBİ Bilgi Sistemi Süreç Desteği",
  "Süreç ve Raporlama Takibi",
];

const PROGRAMS = [
  { name: "Girişimci Destek Programı", href: "/blog/kosgeb-girisimci-destek-programi-2026" },
  { name: "Kapasite Geliştirme Destek Programı", href: "/blog/kosgeb-kapasite-gelistirme-destek-programi-2026" },
  { name: "Ar-Ge, Ür-Ge ve İnovasyon Destek Programı", href: "/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026" },
  { name: "Küresel Rekabetçiliğin Geliştirilmesi Projesi", href: "/blog/kosgeb-kuresel-rekabetciligin-gelistirilmesi-projesi-2026" },
  { name: "KOBİ Dijital Dönüşüm Destek Programı", href: "/blog/kosgeb-kobi-dijital-donusum-destek-programi-2026" },
  { name: "Yapay Zeka Kredi Programı", href: "/blog/kosgeb-yapay-zeka-kredi-programi-2026" },
  { name: "İstihdamı Koruma Destek Programı", href: "/blog/istihdami-koruma-destek-programi-2026" },
  { name: "NACE Kodu Uyuşmazlığında Destek Alınır mı?", href: "/blog/kosgeb-nace-kodu-urun-uyumsuzlugu-destek-alinir-mi" },
];

export default function KosgebDanismanlikPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ KOSGEB Danışmanlığı
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Şirketiniz hangi KOSGEB programına uygun, birlikte netleştirelim
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            KOSGEB&apos;in onlarca farklı destek programı arasında doğru
            olanı seçmek, uygunluk şartlarını (özellikle NACE kodu ve
            faaliyet alanı uyumunu) doğru okumaktan geçiyor. Uygunluk
            analizinden başvuru dosyasına kadar süreci baştan sona
            yönetiyoruz.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* STEPS */}
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
                Sık başvurulan KOSGEB programları
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {PROGRAMS.map((program) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                  >
                    {program.name} →
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Şirketinizin uygun olduğu programı henüz bilmiyorsanız önce{" "}
                <Link href="/destek-uygunluk-analizi" className="font-semibold text-orange-600 hover:underline">
                  ücretsiz Destek Uygunluk Analizi
                </Link>{" "}
                ile başlayabilirsiniz.
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
