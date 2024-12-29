import About from "./components/About/About";
import Approach from "./components/Approach/Approach";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useActiveSection } from "./context/ActiveSectionContext/useActiveSection";

const App = () => {
  const {
    refs: {
      Home: homeRef,
      About: aboutRef,
      Projects: projectsRef,
      Experiences: experiencesRef,
      Skills: skillsRef,
      Approach: approachRef,
      Contact: contactRef,
    },
  } = useActiveSection();

  return (
    <main className="relative mx-auto flex min-h-screen w-full flex-col overflow-clip bg-black-100 text-white">
      <div className="absloute top-6 z-20 w-full">
        <Navbar />
      </div>

      <div ref={homeRef} />
      <Home />

      <div className="md:mx-15 mx-4 -mt-20 space-y-20 sm:mx-12 lg:mx-32">
        <div ref={aboutRef} />
        <About />
        <div ref={projectsRef} />
        <Projects />
        <div ref={experiencesRef} />
        <Experiences />
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
