import About from "./components/About/About";
import Approach from "./components/Approach/Approach";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useActiveSection } from "./context/ActiveSectionContext";
import * as Sentry from "@sentry/react";

const App = () => {
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
    <main className="relative mx-auto flex min-h-screen w-full flex-col overflow-clip bg-black-100 text-white">
      {/* <div className="absloute top-6 z-20 w-full">
        <Navbar />
      </div> */}

      <button
        onClick={() => {
          Sentry.captureException(new Error("Something went wrong!"));
        }}
      >
        Don't click
      </button>

      <div ref={homeRef} />
      <Home />

      <div className="md:px-15 -mt-20 space-y-20 px-12 lg:px-32">
        <div ref={aboutRef} />
        <About />
        <div ref={projectsRef} />
        <Projects />
        <div ref={skillsRef} />
        <Skills />
        <div ref={approachRef} />
        <Approach />
        <div ref={contactRef} />
        <Contact />
      </div>
    </main>
  );
};

export default App;
