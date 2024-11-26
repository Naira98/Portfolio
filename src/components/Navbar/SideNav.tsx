import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { SquigglyUnderline } from "./SquigglyUnderline";


interface SideNavPropsType {
  active: boolean;
}

const containerVariants = {
  close: {
    width: "0%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  open: {
    width: "40%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const SideNav = ({ active }: SideNavPropsType) => {
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
      className={`absolute right-0 top-0 h-screen w-[40%] border-l-[1px] border-white/20 bg-black opacity-90 ${!active && "border-none"}`}
    >
      <div className="px-10 py-20">
        <SquigglyUnderline sideNav={true} />
      </div>
    </motion.aside>
  );
};

export default SideNav;
