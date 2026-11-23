import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Koray Akdağ | Strategy and Business Development Consultant",
  description:
    "Strategic advisory, business development, government incentives and company formation support for foreign and Turkish investors.",
  alternates: {
    canonical: "/en",
    languages: { tr: "/", en: "/en", "x-default": "/" },
  },
};

export default function HomeEn() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="h-[78px]" />

      <Hero lang="en" />

      <About lang="en" />

      <Expertise lang="en" />

      <Services lang="en" />

      <Blog lang="en" />

      <WhyChooseMe lang="en" />

      <Contact lang="en" />

      <Footer lang="en" />
    </main>
  );
}
