"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Modal = ({
  isOpen,
  setIsOpen,
  src,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-hidden bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "12.5deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[80vw] cursor-default overflow-hidden rounded-2xl border border-white/20 bg-black-100 px-10 py-12 text-white shadow-xl"
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black-100 p-1 text-purple transition duration-300 hover:bg-purple hover:text-black-100"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </button>
            <video className="h-full w-full" controls autoPlay>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

// import { useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const Modal = ({
//   isOpen,
//   setIsOpen,
//   src,
// }: {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   src: string;
// }) => {
//   const ref = useRef<HTMLDialogElement | null>(null);

//   useEffect(() => {
//     if (isOpen) ref.current?.showModal();
//     else ref.current?.close();
//   }, [isOpen]);

//   return (
//     <dialog ref={ref} className="p-8">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
//           >
//             <video className="h-full w-full rounded-lg" controls>
//               <source src={src} />
//               Your browser does not support the video tag.
//             </video>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </dialog>
//   );
// };

// export default Modal;
