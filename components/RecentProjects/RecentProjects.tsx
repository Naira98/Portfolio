"use client";

import Image from "next/image";
import { projects } from "@/data/index";
import { AnimatedTooltip } from "./AnimatedTooltip";
import SocialLinks from "./SocialLink";
import { useActiveSection } from "@/context/AcitveSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

const RecentProjects = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection("Projects");
  }, [inView, timeOfLastClick, setActiveSection]);

  return (
    <div
      ref={ref}
      id="projects"
      className="md:px-15 mt-20 scroll-mt-24 px-12 md:scroll-mt-28 lg:px-32"
    >
      <h1 className="heading mb-5 text-balance">
        A small selection&nbsp;of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        {/* Maping on projects */}
        {projects.map((project) => (
          /* All projects */
          <div
            key={project.title}
            className="rotated-image-container relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 rounded-2xl border bg-white/20 decoration-clone p-px transition duration-500 hover:bg-purple"
          >
            {/* Single Project */}
            <div className="flex h-[25rem] w-auto flex-col items-center justify-between rounded-[inherit] bg-black-100 p-4 text-white">
              <ProjectImage img={project.img} title={project.title} />

              <ProjectDescription title={project.title} des={project.des} />

              <div className="mt-3 flex w-full items-center justify-between">
                <div className="flex">
                  {/* Social Meida project */}
                  {project.id === 3 ? (
                    <>
                      <AnimatedTooltip items={project.iconLists.slice(0, 3)} />
                      <div className="lg:w-4" />
                      <AnimatedTooltip items={project.iconLists.slice(4, 9)} />
                      <div className="lg:w-4" />
                      <AnimatedTooltip
                        items={project.iconLists.slice(10, 12)}
                      />
                    </>
                  ) : (
                    <AnimatedTooltip items={project.iconLists} />
                  )}
                </div>
                <SocialLinks project={project} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
