import { gradientBg } from "@/assets/ui";
import * as projectAssets from "@/assets/projects";
import { ProjectsArrayType } from "@/data/types";

interface ProjectImagePropsType {
  image: ProjectsArrayType[number]["image"];
  title: string;
}

const ProjectImage = ({ image, title }: ProjectImagePropsType) => {
  return (
    <div className="relative mb-2 flex w-full items-center justify-center overflow-hidden md:mb-5">
      {/* Background image div */}
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        <img src={gradientBg} alt="bg-image" />
      </div>

      {/* Project image */}
      <img
        src={projectAssets[image].image}
        alt={title}
        className="rotated-image absolute top-0 rounded-lg"
      />
    </div>
  );
};

export default ProjectImage;
