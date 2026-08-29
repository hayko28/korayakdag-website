import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SahadanKareler from "@/components/SahadanKareler";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import DestekUygunlukTanitim from "@/components/DestekUygunlukTanitim";
import Blog from "@/components/Blog";
import WhyChooseMe from "@/components/WhyChooseMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="h-[78px]" />

      <Hero />

      <SahadanKareler />

      <About />

      <Expertise />

      <Services />

      <DestekUygunlukTanitim />

      <Blog />

      <WhyChooseMe />

      <Contact />

      <DestekUygunlukTanitim />

      <Footer />
    </main>
  );
}
