
// Lokeshwari's professional portfolio built with React + Tailwind CSS

import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import CodingProfiles from "@/components/CodingProfiles";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-light font-sans">
      <Header />
      <main className="max-w-4xl mx-auto pt-7 pb-12 px-2 md:px-0">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Achievements />
      </main>
      <footer className="text-center text-sm text-gray-400 py-8">
        &copy; {new Date().getFullYear()} Lokeshwari Hukumathirao &mdash; All Rights Reserved.
      </footer>
    </div>
  );
};

export default Index;
