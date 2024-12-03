import clsx from "clsx";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import { AnimatedTooltip } from "./AnimatedTooltip";
import SocialLinks from "./SocialLink";
import { useOpenProject } from "@/context/OpenProjectContext/useOpenProject";
import { ProjectsArrayType } from "@/data/types";

type SingleProjectPropsType = {
  project: ProjectsArrayType[number];
  idx: number;
};

const SingleProject = ({ project, idx }: SingleProjectPropsType) => {
  const { setOpenProjectId } = useOpenProject();

  return (
    <div
      key={idx}
      className="rotated-image-container relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center rounded-2xl border border-white/[0.1] bg-white/20 decoration-clone p-px transition duration-500 hover:bg-purple"
    >
      <div
        className={clsx(
          "flex h-[20rem] flex-col items-center justify-between gap-2 rounded-[inherit] bg-black-100 p-2 text-white sm:h-[25rem] sm:gap-0 sm:p-4",
          {
            "cursor-pointer": "video" in project,
          },
        )}
        onClick={() => {
          if ("video" in project) {
            setOpenProjectId(project.id);
          }
        }}
      >
        <ProjectImage image={project.image} title={project.title} />

        <ProjectDescription title={project.title} des={project.des} />

        <div className="flex w-full items-center justify-between sm:mt-3">
          <div className="flex">
            {project.iconLists.map((items, index) => (
              <div key={index} className="flex">
                {index ? <div className="lg:w-4" /> : null}
                <AnimatedTooltip items={items} />
              </div>
            ))}
          </div>
          <SocialLinks
            id={project.id}
            github={project.github}
            website={"website" in project ? project.website : undefined}
            video={"video" in project ? project.video : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
