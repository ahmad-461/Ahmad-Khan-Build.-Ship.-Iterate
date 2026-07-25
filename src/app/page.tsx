import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Featured Projects Section */}
        <Projects />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
