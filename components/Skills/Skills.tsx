"use client";
import { skillGroups } from "@/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="md:px-15 mt-20 px-12 lg:px-32">
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