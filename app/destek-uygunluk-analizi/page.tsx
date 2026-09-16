import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestekUygunlukForm from "@/components/DestekUygunlukForm";

export const metadata: Metadata = {
  title: "Destek ve Teşvik Uygunluk Analizi | Koray Akdağ",
  description:
    "Şirketiniz için uygun olabilecek KOSGEB, TÜBİTAK, Yatırım Teşvik Belgesi, Turquality, ihracat destekleri ve TKDK gibi devlet destek, teşvik ve finansman fırsatlarını ücretsiz keşfedin.",
};

export default function DestekUygunlukAnaliziPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-[78px]" />

      <section className="bg-[#071A2F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-orange-500">Ücretsiz Ön Analiz</p>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl">Şirketiniz İçin Destek, Finansman ve Teşvik Analizi</h1>
          <p className="text-white/80">
            Şirketinizin faaliyet alanı, finansal yapısı ve büyüme hedeflerini analiz ederek KOSGEB, TÜBİTAK,
            Yatırım Teşvik Belgesi, Turquality, ihracat destekleri ve TKDK IPARD gibi programlara uygunluğunuzu
            ve değerlendirilebilecek danışmanlık alanlarını ortaya çıkarın. Sonuçlar resmi başvuru yerine
            geçmez; kesin uygunluk için birlikte görüşmemizi öneririz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <DestekUygunlukForm />
      </section>

      <Footer />
    </main>
  );
}
