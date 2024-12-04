import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ProjectDescription from "./ProjectDescription";
import { moreProjects, projects } from "@/data";
import { useOpenProject } from "@/context/OpenProjectContext/useOpenProject";
import * as projectAssets from "@/assets/projects";

const Modal = () => {
  const { openProjectId, setOpenProjectId } = useOpenProject();
  const allProjects = [...projects, ...moreProjects]

  if (openProjectId == null) return;
  const { title, des, logo } = allProjects[openProjectId];
  const video =
    "video" in allProjects[openProjectId] ? allProjects[openProjectId].video : "";

  const backgroundVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const modalVariants = {
    hidden: {
      scale: 0,
      rotate: "12.5deg",
    },
    visible: {
      scale: 1,
      rotate: "0deg",
      transition: { duration: 0.7, type: "spring" },
    },
  };

  return (
    <motion.div
      key={title}
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
      onClick={() => setOpenProjectId(null)}
      className="fixed inset-0 z-50 grid cursor-pointer place-items-center bg-slate-900/20 backdrop-blur"
    >
      <motion.div
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        className="relative h-fit w-[90vw] cursor-default overflow-hidden rounded-2xl border border-white/20 bg-black-100 px-4 py-12 text-white shadow-xl sm:px-10 md:w-[80vw] lg:w-[70vw]"
      >
        <button
          className="absolute right-4 top-4 rounded-full border border-white/20 bg-black-100 p-1 text-purple transition duration-300 hover:bg-purple hover:text-black-100"
          onClick={() => setOpenProjectId(null)}
        >
          <IoMdClose />
        </button>
        {video && (
          <video className="mb-6 h-full w-full" controls autoPlay>
            <source src={projectAssets[video].video} type="video/mp4" />
          </video>
        )}
        <ProjectDescription
          title={title}
          des={des}
          isVideoModal={true}
          logo={logo}
        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
