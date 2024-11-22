import Image from "next/image";
import GridItem from "../GridItem";

const ProjectsNum = () => {
  return (
    <GridItem className="md:col-span-3 md:row-span-2">
      <div className="absolute -bottom-5 right-0 h-full w-full md:top-0 md:max-lg:left-10">
        <Image
          width={300}
          height={300}
          src="/ui/import.svg"
          alt="code"
          className="absolute bottom-0 right-0 w-60 object-cover object-center md:w-96"
        />
      </div>
      <div className="absolute -bottom-5 right-0 w-full opacity-80">
        <Image
          width={1}
          height={1}
          src="/ui/aboutGrid.svg"
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
