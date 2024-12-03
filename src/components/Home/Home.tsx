import { Spotlight } from "./Spotlight";
import MagicButton from "../ui/MagicButton";
import { TextGenerateEffect } from "./TextGenerateEffect";
import GridBackground from "./GridBackground";
import { FaLocationArrow } from "react-icons/fa";
import { useActiveSection } from "@/context/ActiveSectionContext/useActiveSection";

const Home = () => {
  const { scrollTo } = useActiveSection();

  return (
    <div id="home" className="relative h-[38rem]">
      <div className="overflow-hidden">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <GridBackground />

      <div className="dark:bg-grid-white/[0.05] absolute bottom-0 left-0 top-0 flex w-full items-center justify-center dark:bg-black-100">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />

        <div className="relative z-10 my-20 flex max-w-[89vw] flex-col items-center justify-center md:max-w-[70vw] lg:max-w-[60vw]">
          <h2 className="text-center text-xs uppercase tracking-widest text-blue-100 md:text-sm">
            Dynamic Web Magic with Creativity
          </h2>

          <TextGenerateEffect
            className="text-balance text-center text-[40px] lg:max-w-[70vw] lg:text-5xl"
            words="Transforming Ideas Into Intuitive User Experiences"
          />

          <div className="mb-10 text-center text-sm text-white md:text-base md:tracking-wider">
            Hi, I&apos;m Naira Mokhtar, a Full Stack Developer
          </div>
          <a href="#projects">
            <MagicButton
              title="Show My Work"
              position="right"
              icon={<FaLocationArrow />}
              onClick={() => {
                scrollTo("Projects");
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
