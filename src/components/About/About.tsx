import { BentoGrid } from "./BentoGrid";
import ClientCollaboration from "./ClientCollaboration/ClientCollaboration";
import TimezoneFlexible from "./Timezone/TimezoneFlexible";
import TeckStack from "./TechStack/TechStack";
import ProblemSolving from "./ProblemSolving/ProblemSolving";
import CopyMail from "./CopyMail/CopyMail";
import ProjectsNum from "./ProjectsNum/ProjectsNum";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
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
