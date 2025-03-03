import * as projectAssets from "@/assets/projects";
import { ProjectsArrayType } from "@/data/types";
import { cn } from "@/lib/utils";

interface ProjectDescriptionPropsType {
  title: string;
  des: string;
  isVideoModal?: boolean;
  logo?: ProjectsArrayType[number]["logo"];
}

const ProjectDescription = ({
  title,
  des,
  isVideoModal = false,
  logo,
}: ProjectDescriptionPropsType) => {
  return (
    <div className={cn("flex flex-col", { "gap-3": isVideoModal })}>
      <div className="flex items-center gap-2">
        {logo && (
          <div className="flex h-10 w-10 items-center">
            <img src={projectAssets[logo].logo} alt="logo" />
          </div>
        )}

        <h1 className="line-clamp-1 font-bold sm:text-lg md:text-xl">
          {title}
        </h1>
      </div>
      <p
        className={cn("line-clamp-2 text-left text-sm font-light", {
          "line-clamp-none text-base": isVideoModal,
        })}
      >
        {des}
      </p>
    </div>
  );
};

export default ProjectDescription;
