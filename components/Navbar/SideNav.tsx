"use client";

import { motion, useAnimationControls } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";
import { SquigglyUnderline } from "./SquigglyUnderline";

interface SideNavPropsType {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const containerVariants = {
  close: {
    width: "0%",
    transition: {
      type: "spring",
      damping: 30,
      duration: 0.5,
    },
  },
  open: {
    width: "40%",
    transition: {
      type: "spring",
      damping: 30,
      duration: 0.5,
    },
  },
};

const SideNav = ({ active, setActive }: SideNavPropsType) => {
  const containerControls = useAnimationControls();
  useEffect(() => {
    if (active) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [active]);
  return (
    <motion.aside
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="absolute right-0 top-0 h-screen w-[40%] bg-black-100 opacity-90"
    >
      <div className="px-10 py-20">
        <SquigglyUnderline sideNav={true} />
      </div>
    </motion.aside>
  );
};

export default SideNav;
