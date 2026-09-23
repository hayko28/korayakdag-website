import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KdvIadesiHesaplayici from "@/components/KdvIadesiHesaplayici";

export const metadata: Metadata = {
  title: "KDV İadesi Hesaplama 2026 | Ücretsiz Tahmini Hesaplayıcı | Koray Akdağ",
  description:
    "İade hakkı doğuran işlem bedelinizi, KDV oranını ve yüklenilen KDV tutarınızı girin, azami iade edilebilir vergi mantığıyla tahmini KDV iade tutarınızı saniyeler içinde görün. Ücretsiz, kayıt gerektirmez.",
  keywords: [
    "kdv iadesi hesaplama",
    "kdv iadesi hesaplama 2026",
    "kdv iadesi hesaplayıcı",
    "azami iade edilebilir kdv",
    "yüklenilen kdv hesaplama",
    "ihracat kdv iadesi hesaplama",
  ],
  alternates: {
    canonical: "/kdv-iadesi-hesaplama",
  },
};

export default function KdvIadesiHesaplamaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-[78px]" />

      <section className="bg-[#071A2F] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[2px] text-orange-500">Ücretsiz Hesaplayıcı</p>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl">KDV İadesi Hesaplama</h1>
          <p className="text-white/80">
            İade hakkı doğuran işlem bedelinizi, KDV oranını ve yüklenilen KDV tutarınızı girin; azami iade
            edilebilir vergi mantığıyla tahmini iade tutarınızı hemen görün. Bu araç bir gösterge sunar; resmi bir
            hesaplama veya beyanname yerine geçmez.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <KdvIadesiHesaplayici />

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-600">
          <p>
            KDV iadesi almaya hak kazandıran işlemler, başvuru süreci ve gerekli belgeler hakkında detaylı bilgi
            için{" "}
            <Link href="/blog/kdv-iadesi-nasil-alinir-2026-sartlari-sureci" className="font-semibold text-orange-600 underline">
              KDV İadesi Nasıl Alınır? 2026 Şartları ve Süreci
            </Link>{" "}
            yazımızı inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
