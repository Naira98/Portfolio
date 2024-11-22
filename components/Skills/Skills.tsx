"use client";
import { skillGroups } from "@/data";
import SkillCard from "./SkillCard";
import useSectionInView from "@/hooks/useSectionInView";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <div
      ref={ref}
      id="skills"
      className="md:px-15 mt-20 scroll-mt-24 px-12 md:scroll-mt-28 lg:px-32"
    >
      <h1 className="heading mb-10 text-balance">
        <span className="text-purple">Skills & Tools</span>
      </h1>
      <div
        id="skills"
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {skillGroups.map((skill, i) => (
          <div key={i}>
            <SkillCard key={skill.name} name={skill.name} img={skill.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
