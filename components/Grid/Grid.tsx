import { BentoGrid } from "./BentoGrid";
import ClientCollaboration from "./ClientCollaboration/ClientCollaboration";
import TimezoneFlexible from "./Timezone/TimezoneFlexible";
import TeckStack from "./TechStack/TechStack";
import TechPassion from "./TechPassion/TechPassion";
import CopyMail from "./CopyMail/CopyMail";
import InnovativeSolutions from "./InnovativeSolutions/InnovativeSolutions";

const Grid = () => {
  return (
    <section id="about" className="px-10 md:px-20 lg:px-32">
      <BentoGrid>
        <ClientCollaboration />
        <TimezoneFlexible />
        <TeckStack />
        <TechPassion />
        <InnovativeSolutions />
        <CopyMail />
      </BentoGrid>
    </section>
  );
};

export default Grid;
