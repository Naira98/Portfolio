"use client";
import { BentoGrid } from "./BentoGrid";
import ClientCollaboration from "./ClientCollaboration/ClientCollaboration";
import TimezoneFlexible from "./Timezone/TimezoneFlexible";
import TeckStack from "./TechStack/TechStack";
import ProblemSolving from "./ProblemSolving/ProblemSolving";
import CopyMail from "./CopyMail/CopyMail";
import ProjectsNum from "./ProjectsNum/ProjectsNum";
import useSectionInView from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-28 px-10 md:px-20 lg:px-32"
    >
      <BentoGrid>
        <ClientCollaboration />
        <TimezoneFlexible />
        <TeckStack />
        <ProblemSolving />
        <ProjectsNum />
        <CopyMail />
      </BentoGrid>
    </section>
  );
};

export default About;
