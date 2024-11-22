import GridItem from "../GridItem";
import { GridGlobe } from "./GridGlobe";

const TimezoneFlexible = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-2 lg:col-span-2">
      <div className="relative flex min-h-40 items-start self-stretch text-balance p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full md:flex-col md:justify-start lg:px-10 lg:py-5">
        <div className="z-20 text-start font-sans text-lg font-bold lg:text-center lg:text-xl">
          I&apos;m very flexible with time zone communications
        </div>
        <GridGlobe />
      </div>
    </GridItem>
  );
};

export default TimezoneFlexible;
