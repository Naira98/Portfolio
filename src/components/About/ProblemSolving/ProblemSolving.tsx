import GridItem from "../GridItem";
import aboutGrid from "@/assets/ui/aboutGrid.svg";
import windowImg from "@/assets/ui/window.svg";

const ProblemSolving = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-1 lg:col-span-2">
      <div className="absolute">
        <img
          src={aboutGrid}
          alt="grid"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 right-0 lg:-bottom-5">
        <img
          src={windowImg}
          alt="window"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative flex min-h-40 flex-col items-center justify-start text-balance p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:px-10">
        <div className="font-sans text-lg font-bold lg:text-xl">
          Innovative Problem Solving for Web Excellence
        </div>
      </div>
    </GridItem>
  );
};

export default ProblemSolving;
