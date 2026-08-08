import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import NavDepthTracker from "@/components/NavDepthTracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://korayakdag.com"),
  title: "Koray Akdağ | Stratejik Danışmanlık",
  description:
    "Stratejik danışmanlık, iş geliştirme, satış yönetimi, yatırım teşvikleri ve uluslararası büyüme çözümleri.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "zzlyEjheKuk_eAkgoCyz_fdYt485aPFKbUuiNvQQb5o",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Koray Akdağ | Stratejik Danışmanlık",
  url: "https://korayakdag.com",
  description:
    "Stratejik danışmanlık, iş geliştirme, yatırım teşvikleri, devlet destekleri ve yurt dışında/Türkiye'de şirket kuruluşu hizmetleri.",
  founder: {
    "@type": "Person",
    name: "Koray Akdağ",
  },
  areaServed: "TR",
  knowsAbout: [
    "Stratejik Danışmanlık",
    "Yatırım Teşvikleri",
    "KOSGEB",
    "TÜBİTAK",
    "Yurt Dışında Şirket Kuruluşu",
    "Türkiye'de Şirket Kuruluşu",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="overflow-x-hidden bg-white text-[#071A2F]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <NavDepthTracker />
        {children}
        <Analytics />
      </body>
    </html>
  );
}