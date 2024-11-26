import gradientBg from "@/assets/ui/gradientBg.png";
import * as projectAssets from "@/assets/projects";

interface ProjectImagePropsType {
  image: string;
  title: string;
}

const ProjectImage = ({ image, title }: ProjectImagePropsType) => {
  return (
    <div className="relative mb-5 flex h-[14rem] w-full items-center justify-center overflow-hidden">
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
