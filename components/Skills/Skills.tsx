"use client";
import { skillGroups } from "@/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="md:px-15 mt-20 scroll-mt-1 px-12 lg:px-32">
      <h1 className="heading mb-10 text-balance">
        <span className="text-purple">Skills</span>
      </h1>
      <div className="flex flex-col gap-8 md:gap-6" id="skills">
        {skillGroups.map((skills, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} img={skill.img} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
