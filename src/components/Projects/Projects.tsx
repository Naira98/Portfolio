import { useIsProjectsExpanded } from "@/context/IsProjectsExpandedContext/useIsProjectsExpanded";
import { moreProjects, projects } from "@/data/index";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import MagicButton from "../ui/MagicButton";
import Modal from "./Modal";
import SingleProject from "./SingleProject";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const { isProjectsExpanded, setIsProjectsExpanded } = useIsProjectsExpanded();

  return (
    <div id="projects" className="scroll-mt-20">
      <h1 className="heading mb-5 justify-self-center text-balance max-sm:max-w-[555px] sm:max-md:-mx-10">
        Small Selection&nbsp;of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>

      {/* Static Projects */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <SingleProject project={project} idx={idx} key={idx} />
          ))}
        </div>

        {/* Animated Projects */}
        <AnimatePresence mode="sync">
          {isProjectsExpanded && (
            <motion.div
              className="grid grid-cols-1 items-center justify-center gap-4 sm:gap-8 md:grid-cols-2"
              style={{ overflow: "hidden" }}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              {moreProjects.map((project, idx) => (
                <div key={idx}>
                  <SingleProject project={project} idx={idx} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-8 flex w-full justify-center">
        <MagicButton
          title={
            isProjectsExpanded ? "Show less Projects" : "Show more Projects"
          }
          icon={isProjectsExpanded ? <FaArrowUp /> : <FaArrowDown />}
          position="right"
          onClick={() => setIsProjectsExpanded((e) => !e)}
        />
      </div>

      <Modal />
    </div>
  );
};

export default Projects;
