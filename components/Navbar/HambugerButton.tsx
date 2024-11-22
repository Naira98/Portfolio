"use client";

import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import SideNav from "./SideNav";

const HamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive((pv) => !pv)}
          className="group/hambuger relative z-10 h-14 w-10 rounded-full"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-1 w-8 bg-white transition-colors duration-300 group-hover/hambuger:bg-purple"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-1 w-8 bg-white transition-colors duration-300 group-hover/hambuger:bg-purple"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-1 w-4 bg-white transition-colors duration-300 group-hover/hambuger:bg-purple"
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% - 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>
      <SideNav active={active} />
    </>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default HamburgerButton;
