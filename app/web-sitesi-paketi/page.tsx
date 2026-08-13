import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ContactCtaButton from "@/components/ContactCtaButton";

export const metadata: Metadata = {
  title: "Web Sitesi Paketi | Koray Akdağ",
  description:
    "Bu site gibi mobil uyumlu, hızlı, kendi yönetici panelinizden yönetebileceğiniz anahtar teslim kurumsal web sitesi. Başlangıç fiyatı 30.000 ₺ +KDV, 12 taksit imkanı.",
};

const STEPS = [
  {
    num: "1",
    title: "Tasarım & logo",
    text: "Sektörünüze ve marka kimliğinize uygun özel tasarım ve logo çalışması yapılır.",
  },
  {
    num: "2",
    title: "İçeriklerin hazırlanıp teslimi",
    text: "Sayfa metinleri ve görselleri sizin adınıza hazırlanır, SEO uyumlu şekilde yerleştirilir.",
  },
  {
    num: "3",
    title: "Panel & entegrasyonlar",
    text: "Kolay yönetici paneli, WhatsApp canlı destek hattı ve dil ayarı (TR/EN) kurulur.",
  },
  {
    num: "4",
    title: "Test & yayına alma",
    text: "Mobil uyumluluk ve hız testleri yapılır, kendi alan adınızda yayına alınır.",
  },
];

const FEATURES = [
  "Özel Tasarım & Logo",
  "Mobil Uyumlu & Yüksek Hız",
  "Kolay Yönetici Paneli",
  "SEO Optimizasyon",
  "Dil Ayarı TR/EN",
  "WhatsApp Canlı Destek",
  "İçeriklerin Hazırlanıp Teslimi",
  "15 Günlük İade Garantisi",
];

export default function WebSitesiPaketiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[78px]" />

      {/* HERO */}
      <section className="bg-[#071A2F] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-orange-400">
            ◆ Web Sitesi Paketi
          </span>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Mobil uyumlu, hızlı, kendi panelinizden yönetebileceğiniz
            kurumsal web sitesi
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Tasarımından içeriğine, SEO&apos;sundan canlı destek hattına
            kadar anahtar teslim kurulum — markanıza özel, kendi alan
            adınızda yayına alınır. Bu sayfanın da üzerinde çalıştığı
            altyapıyla, işletmeniz için de aynısını kurabilirim.
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
          </div>

          {/* PRICE / FEATURES */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-[#F7F5EF] p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Başlangıç fiyatı
            </p>
            <p className="mt-1 text-3xl font-black text-[#071A2F]">
              30.000 ₺ <span className="text-base font-semibold text-gray-500">+KDV</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Tüm kredi kartlarına 12 taksit imkanı
            </p>

            <ul className="mt-6 space-y-2.5">
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
