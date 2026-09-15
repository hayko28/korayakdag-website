import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "Yatırım Teşvik Belgesi Danışmanlığı | Koray Akdağ",
  description:
    "9903 sayılı Hedef Yatırımlar Teşvik Sistemi kapsamında Yatırım Teşvik Belgesi başvurusu, bölge/sektör uygunluk analizi ve E-TUYS süreci için uçtan uca danışmanlık.",
};

const STEPS = [
  {
    num: "1",
    title: "Yatırım ve bölge uygunluk analizi",
    text: "Yatırım konunuz, tutarınız, NACE kodunuz ve yatırım yeri (il/bölge) üzerinden 9903 sayılı Karar kapsamında hangi destek unsurlarına hak kazanabileceğinizi belirliyoruz.",
  },
  {
    num: "2",
    title: "Destek unsurları planlaması",
    text: "KDV istisnası, gümrük vergisi muafiyeti, vergi indirimi, sigorta primi işveren hissesi desteği ve faiz/kâr payı desteği gibi unsurları yatırım planınıza göre modelliyoruz.",
  },
  {
    num: "3",
    title: "E-TUYS başvuru dosyası",
    text: "Elektronik Teşvik Uygulama ve Yabancı Sermaye Bilgi Sistemi (E-TUYS) üzerinden başvuru dosyasını, gerekli belge ve beyanları sizin adınıza hazırlıyoruz.",
  },
  {
    num: "4",
    title: "Belge sonrası takip",
    text: "Belge alındıktan sonra tamamlama vizesi, revize ve raporlama yükümlülüklerini takip ediyoruz.",
  },
];

const FEATURES = [
  "Yatırım ve Bölge Uygunluk Analizi",
  "Destek Unsuru Karşılaştırması",
  "E-TUYS Başvuru Dosyası Hazırlığı",
  "Sektör/NACE Kodu Uygunluk Kontrolü",
  "Tamamlama Vizesi ve Revize Takibi",
  "Diğer Destek Programlarıyla Kıyaslama",
];

const RELATED = [
  { name: "Yatırım Teşvik Belgesi Nedir? Faydaları, Şartları ve 2026 Rehberi", href: "/blog/yatirim-tesvik-belgesi-nedir-faydalari-sartlari-2026" },
  { name: "Proje Bazlı Teşvik Sisteminde 2026 Değişikliği", href: "/blog/proje-bazli-tesvik-sistemi-2026-degisiklikleri" },
  { name: "Yeni Finansman Belgesi: KOBİ mi, Büyük Yatırımcı mı İçin?", href: "/makaleler/yeni-tesvik-belgesinde-100-milyon-1-milyar-esigi" },
];

export default function YatirimTesvikBelgesiDanismanligiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ Yatırım Teşvik Belgesi Danışmanlığı
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Yatırımınız hangi destek unsurlarına hak kazanıyor, birlikte
            hesaplayalım
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            9903 sayılı Hedef Yatırımlar Teşvik Sistemi&apos;nde bölge, sektör
            ve yatırım tutarına göre destek unsurları önemli ölçüde
            değişiyor. Uygunluk analizinden E-TUYS başvurusuna kadar süreci
            baştan sona yönetiyoruz.
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
                İlgili rehberler
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {RELATED.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
                  >
                    {item.name} →
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Yatırımınız için Yatırım Teşvik Belgesi mi, KOSGEB mi daha
                uygun emin değilseniz{" "}
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
