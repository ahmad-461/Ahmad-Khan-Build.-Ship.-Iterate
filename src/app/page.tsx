"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function Home() {
  // Modal active case study project name state
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<string | null>(null);

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
        <Projects onOpenCaseStudy={setActiveCaseStudyProject} />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Case Study Detail Modal Overlay */}
      <CaseStudyModal
        projectName={activeCaseStudyProject}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </div>
  );
}
