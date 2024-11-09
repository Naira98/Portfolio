import GridItem from "../GridItem";
import { GridGlobe } from "./GridGlobe";

const TimezoneFlexible = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-2 lg:col-span-2">
      <div className="relative flex min-h-40 flex-col items-center justify-start p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10">
        <div className="z-20 max-w-96 font-sans text-lg font-bold lg:text-xl">
          I&apos;m very flexible with time zone communications
        </div>
        <GridGlobe />
      </div>
    </GridItem>
  );
};

export default TimezoneFlexible;
