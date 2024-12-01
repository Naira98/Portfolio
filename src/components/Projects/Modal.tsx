import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ProjectDescription from "./ProjectDescription";
import { projects } from "@/data";
import { useOpenProject } from "@/context/OpenProjectContext";
import * as projectAssets from "@/assets/projects";

const Modal = () => {
  const { openProjectId, setOpenProjectId } = useOpenProject();

  if (openProjectId == null) return;
  const { title, des, video } = projects[openProjectId];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpenProjectId(null)}
        className="fixed inset-0 z-50 grid cursor-pointer place-items-center bg-slate-900/20 backdrop-blur"
      >
        <motion.div
          initial={{ scale: 0, rotate: "12.5deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          exit={{ scale: 0, rotate: "12.5deg" }}
          onClick={(e) => e.stopPropagation()}
          className="relative h-fit cursor-default overflow-hidden rounded-2xl border border-white/20 bg-black-100 px-4 text-white shadow-xl sm:px-10 py-12 w-[90vw] md:w-[80vw] lg:w-[70vw]"
        >
          <button
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black-100 p-1 text-purple transition duration-300 hover:bg-purple hover:text-black-100"
            onClick={() => setOpenProjectId(null)}
          >
            <IoMdClose />
          </button>
          <video className="mb-6 h-full w-full" controls autoPlay>
            <source src={projectAssets[video].video} type="video/mp4" />
          </video>
          <ProjectDescription title={title} des={des} isVideoModal={true} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
