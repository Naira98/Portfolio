import Lottie from "lottie-react";
import GridItem from "../GridItem";
import animationData from "@/data/globe.json";

const TimezoneFlexible = () => {
  return (
    <GridItem className="relative md:col-span-3 md:row-span-2 lg:col-span-2">
      <div className="flex min-h-40 w-full items-start text-balance p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full md:flex-col md:justify-start lg:px-10 lg:py-5">
        <div className="z-10 text-start font-sans text-lg font-bold lg:text-center lg:text-xl">
          I&apos;m very flexible with time zone communications
        </div>
        <Lottie
          loop={true}
          animationData={animationData}
          className="absolute inset-0 -top-28 h-[400px]"
        />
      </div>
    </GridItem>
  );
};

export default TimezoneFlexible;
