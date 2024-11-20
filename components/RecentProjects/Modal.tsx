"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ProjectDescription from "./ProjectDescription";
interface ModalPropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  projectDes: {
    title: string;
    des: string;
  };
}
const Modal = ({ isOpen, setIsOpen, src, projectDes }: ModalPropsType) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "12.5deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-fit w-[80vw] cursor-default overflow-hidden rounded-2xl border border-white/20 bg-black-100 px-10 py-12 text-white shadow-xl md:w-[70vw] lg:w-[70vw]"
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black-100 p-1 text-purple transition duration-300 hover:bg-purple hover:text-black-100"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <video className="mb-6 h-full w-full" controls autoPlay>
              <source src={src} type="video/mp4" />
            </video>
            <ProjectDescription
              title={projectDes.title}
              des={projectDes.des}
              isVideoModal={true}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
