"use client";
import { BentoGrid } from "./BentoGrid";
import ClientCollaboration from "./ClientCollaboration/ClientCollaboration";
import TimezoneFlexible from "./Timezone/TimezoneFlexible";
import TeckStack from "./TechStack/TechStack";
import TechPassion from "./TechPassion/TechPassion";
import CopyMail from "./CopyMail/CopyMail";
import InnovativeSolutions from "./InnovativeSolutions/InnovativeSolutions";
import { useActiveSection } from "@/context/AcitveSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Grid = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection("About");
  }, [inView, timeOfLastClick, setActiveSection]);
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
        <TechPassion />
        <InnovativeSolutions />
        <CopyMail />
      </BentoGrid>
    </section>
  );
};

export default Grid;
