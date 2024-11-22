"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import useSectionInView from "@/hooks/useSectionInView";
import MagicButton from "@/components/ui/MagicButton";
import useScreenSize from "@/hooks/useScreenSize";

export default function Approach() {
  const screen = useScreenSize();
  const threshold =
    screen == "xs" || screen == "sm" ? 0.3 : screen == "md" ? 0.4 : 0.5;
  const { ref } = useSectionInView("Approach", 0.5);
  return (
    <div
      ref={ref}
      id="approach"
      className="md:px-15 mt-20 scroll-mt-24 px-12 md:scroll-mt-28 lg:px-32"
    >
      <h1 className="heading mb-5 text-balance">
        My Work <span className="text-purple">Approach</span>
      </h1>

      <div className="items-center justify-center">
        <div className="mx-auto grid w-full cursor-default grid-cols-1 items-center justify-center gap-6 bg-black-100 p-8 md:grid-cols-3">
          <Card
            title="Planning & Strategy"
            des="I carefully understand the website's goals, audience, structure, and content needs to create a clear development roadmap."
            icon={<MagicButton title="Phase 1" otherClasses="w-fit" />}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-black"
            />
          </Card>
          <Card
            title="Development & Progress Update"
            icon={<MagicButton title="Phase 2" otherClasses="w-fit" />}
            des="Once the plan is agreed upon, I break the project into manageable milestones to maintain steady progress. My focus is on building a responsive and dynamic frontend paired with a robust backend to ensure quality."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            title="Finalization & Launch"
            icon={<MagicButton title="Phase 3" otherClasses="w-fit" />}
            des="The website undergoes extensive testing to ensure quality. After deploying, I provide support to guarantee a smooth user experience."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-blackß"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

const Card = ({
  title,
  des,
  icon,
  children,
}: {
  title: string;
  des: string;
  icon: ReactNode;
  children?: ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-60 w-full items-center justify-center border border-white/20 p-4 md:h-[30rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 text-balance text-center text-3xl font-bold text-white opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100">
          {title}
        </h2>
        <h2 className="relative z-10 mt-4 text-balance text-center text-sm font-semibold text-white opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100">
          {des}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
