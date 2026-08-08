import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function HomeEn() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="h-[78px]" />

      <Hero />

      <About lang="en" />

      <Expertise lang="en" />

      <Services lang="en" />

      <Blog lang="en" />

      <Contact lang="en" />

      <Footer lang="en" />
    </main>
  );
}
