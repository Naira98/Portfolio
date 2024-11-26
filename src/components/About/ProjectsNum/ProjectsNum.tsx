import GridItem from "../GridItem";
import importImg from "@/assets/ui/import.svg";
import aboutGrid from "@/assets/ui/aboutGrid.svg";

const ProjectsNum = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-2">
      <div className="absolute -bottom-5 right-0 h-full w-full md:top-0 md:max-lg:left-10">
        <img
          src={importImg}
          alt="code"
          className="absolute bottom-0 right-0 w-60 object-cover object-center md:w-96"
        />
      </div>
      <div className="absolute -bottom-5 right-0 w-full opacity-80">
        <img
          src={aboutGrid}
          alt="grid"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative flex min-h-40 flex-col items-center justify-start text-balance p-5 transition duration-200 group-hover/bento:translate-x-2 lg:p-10">
        <div className="font-sans text-lg font-bold max-md:max-w-96 lg:text-xl">
          Over 20 Projects Completed in Just 1 Year
        </div>
      </div>
    </GridItem>
  );
};

export default ProjectsNum;
