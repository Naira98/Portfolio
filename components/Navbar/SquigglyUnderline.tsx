"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/data";
import { useActiveSection } from "@/context/ActiveSectionContext";
import clsx from "clsx";

export const SquigglyUnderline = ({
  sideNav = false,
}: {
  sideNav?: boolean;
}) => {
  const { activeSection, scrollTo } = useActiveSection();
  return (
    <div className={clsx("flex gap-8 lg:gap-16", { "flex-col": sideNav })}>
      {navItems.map((item) => {
        const isSelected = item.name === activeSection;
        return (
          <Link
            key={item.name}
            href={item.link}
            className={`relative text-sm leading-6 no-underline ${
              isSelected ? "font-semibold text-white" : "text-gray-500"
            }`}
            onClick={() => scrollTo(item.name, item.link)}
          >
            {item.name}
            {isSelected ? (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#CBACF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </motion.div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};
