"use client";

import { FaLocationArrow } from "react-icons/fa";
import GridBackground from "./GridBackground";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { useRouter } from "next/navigation";
import useSectionInView from "@/hooks/useSectionInView";

const Hero = () => {
  const router = useRouter();
  const { ref, setTimeOfLastClick, setActiveSection } =
    useSectionInView("Home");

  return (
    <div ref={ref} id="home" className="relative h-[38rem] pb-20 pt-36">
      <div className="overflow-hidden">
        <Spotlight
          className="-left-10 -top-40 h-full md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-[80%] top-5 h-[80vh] w-[20vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-10 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <GridBackground />

      <div className="absolute bottom-0 left-0 top-0 flex w-full items-center justify-center dark:bg-black-100 dark:bg-grid-white/[0.05]">
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

          <MagicButton
            title="Show My Work"
            position="right"
            icon={<FaLocationArrow />}
            onClick={() => {
              setTimeOfLastClick(Date.now());
              setActiveSection("Projects");
              router.push("/#projects");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
