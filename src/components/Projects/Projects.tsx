import { projects } from "@/data/index";
import { AnimatedTooltip } from "./AnimatedTooltip";
import SocialLinks from "./SocialLink";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";
import { useOpenProject } from "@/context/OpenProjectContext";
import Modal from "./Modal";

const Projects = () => {
  const { setOpenProjectId } = useOpenProject();

  return (
    <div id="projects" className="scroll-mt-20">
      <h1 className="heading mb-5 justify-self-center text-balance max-sm:max-w-[555px] sm:max-md:-mx-10">
        Small Selection&nbsp;of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>

      <div className="grid grid-cols-1 items-center justify-center gap-4 sm:gap-8 md:grid-cols-2">
        {/* Maping on projects */}
        {projects.map((project) => (
          /* All projects */
          <div
            key={project.title}
            className="rotated-image-container relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center rounded-2xl border border-white/[0.1] bg-white/20 decoration-clone p-px transition duration-500 hover:bg-purple"
          >
            {/* Single Project */}
            <div
              className="flex h-[20rem] gap-2 sm:gap-0 w-auto cursor-pointer flex-col items-center justify-between rounded-[inherit] bg-black-100 p-2 text-white sm:h-[25rem] sm:p-4"
              onClick={() => {
                setOpenProjectId(project.id);
              }}
            >
              <ProjectImage image={project.image} title={project.title} />

              <ProjectDescription title={project.title} des={project.des} />

              <div className="flex w-full items-center justify-between sm:mt-3">
                <div className="flex">
                  {project.iconLists.map((items, index) => (
                    <>
                      {index ? <div className="lg:w-4" /> : null}
                      <AnimatedTooltip items={items} />
                    </>
                  ))}
                </div>
                <SocialLinks
                  id={project.id}
                  github={project.github}
                  website={"website" in project ? project.website : undefined}
                  video={project.video}
                />
              </div>
            </div>
          </div>
        ))}
        <Modal />
      </div>
    </div>
  );
};

export default Projects;
