import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactFooter from "@/components/ContactFooter";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <ContactFooter />
      </main>
      <ScrollToTop />
    </>
  );
}
