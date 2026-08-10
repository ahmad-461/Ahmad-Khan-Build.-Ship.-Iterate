"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIActuallyDo from "@/components/WhatIActuallyDo";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function Home() {
  // Shared hover and click states for Interactive Skill-to-Project Connector
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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

        {/* 3. What I Actually Do Section */}
        <WhatIActuallyDo />

        {/* 4. About Section */}
        <About />

        {/* 5. Skills Section */}
        <Skills
          hoveredSkill={hoveredSkill}
          selectedSkill={selectedSkill}
          hoveredProject={hoveredProject}
          selectedProject={selectedProject}
          onHoverSkill={setHoveredSkill}
          onSelectSkill={setSelectedSkill}
          onSelectProject={setSelectedProject}
        />

        {/* 6. Featured Projects Section */}
        <Projects
          hoveredSkill={hoveredSkill}
          selectedSkill={selectedSkill}
          hoveredProject={hoveredProject}
          selectedProject={selectedProject}
          onHoverProject={setHoveredProject}
          onSelectProject={setSelectedProject}
          onSelectSkill={setSelectedSkill}
          onOpenCaseStudy={setActiveCaseStudyProject}
        />

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
