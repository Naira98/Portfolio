import { experiences } from "@/data";
import ExperiencesCard from "./ExperiencesCard";

const Experiences = () => {
  return (
    <div id="experiences" className="scroll-mt-20">
      <h1 className="heading mb-10 text-balance">
        <span className="text-purple">Experiences</span>
      </h1>
      <div className="flex justify-center">
        {experiences.map((experience) => (
          <ExperiencesCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
