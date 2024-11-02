import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
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

      <div className="bg-black-100 bg-grid-white/[0.03] absolute left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-10 my-20 flex justify-center">
          <div className="ms:max-w-2xl flex max-w-[89vw] flex-col items-center justify-center lg:max-w-[60vw]">
            <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
              Dynamic Web Magic With Next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Crafting Seamless Web Solutions With Precision And Passion."
            />

            <div className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
              Hi, I&apos;m Naira, a Full Stack Developer
            </div>
            <MagicButton
              title="Show My Work"
              position="right"
              icon={<FaLocationArrow />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
