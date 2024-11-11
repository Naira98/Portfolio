import GridItem from "../GridItem";
import Stack from "./Stack";

const TeckStack = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-2 lg:col-span-2">
      <div className="relative flex min-h-40 flex-col items-start justify-start p-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10">
        <div className="z-10 w-fit font-sans text-sm font-extralight text-[#C1C2D3] md:text-xs lg:text-base">
          I constantly try to improve
        </div>
        <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-xl">
          My tech stack
        </div>
      </div>

      <div className="absolute -top-4 bottom-0 right-0 flex h-full w-fit gap-3">
        <Stack stack={["React.js", "Next.js", "Typescript"]} position="below" />
        <Stack stack={["Node.js", "Express.js", "MongoDB"]} position="above" />
      </div>
    </GridItem>
  );
};

export default TeckStack;
