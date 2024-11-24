"use client";

import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import Approach from "@/components/Approach/Approach";
import Footer from "@/components/Footer/Footer";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function Home() {
  const {
    refs: {
      Home: homeRef,
      About: aboutRef,
      Projects: projectsRef,
      Skills: skillsRef,
      Approach: approachRef,
      Contact: contactRef,
    },
  } = useActiveSection();

  return (
    <main className="relative mx-auto flex min-h-screen w-full flex-col overflow-clip bg-black-100">
      <div className="absloute top-6 z-20 w-full">
        <Navbar />
      </div>
      <div ref={homeRef} />
      <Hero />
      <div ref={aboutRef} />
      <About />
      <div ref={projectsRef} />
      <RecentProjects />
      <div ref={skillsRef} />
      <Skills />
      <div ref={approachRef} />
      <Approach />
      <div ref={contactRef} />
      <Footer />
    </main>
  );
}
