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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="h-[78px]" />

      <Hero />

      <About />

      <Expertise />

      <Services />

      <Blog />

      <WhyChooseMe />

      <Contact />

      <Footer />
    </main>
  );
}
