import { ReactNode } from "react";
import { motion } from "framer-motion";

const MagicButton = ({
  title,
  icon,
  position,
  onClick,
  otherClasses,
}: {
  title: string;
  icon?: ReactNode;
  position?: "left" | "right";
  onClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95, rotate: "1.5deg" }}
      onClick={onClick}
      className={`relative inline-flex h-12 w-60 overflow-hidden rounded-lg p-[1px] ${otherClasses}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </motion.button>
  );
};

export default MagicButton;
