import Image from "next/image";
import GridItem from "../GridItem";

const TechPassion = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-1 lg:col-span-2">
      <div className="absolute">
        <Image
          width={1}
          height={1}
          src="/grid.svg"
          alt="grid"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 right-0 lg:-bottom-5">
        <Image
          width={1}
          height={1}
          src="/b4.svg"
          alt="window"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative flex min-h-40 flex-col items-center justify-start text-balance p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:px-10">
        <div className="z-10 font-sans text-lg font-bold lg:text-xl">
          Tech enthusiast with a passion for development
        </div>
      </div>
    </GridItem>
  );
};

export default TechPassion;
