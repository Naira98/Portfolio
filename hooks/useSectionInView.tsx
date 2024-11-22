import { useActiveSection } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionInView = (sectionName: string, threshold: number) => {
  const { setActiveSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, timeOfLastClick, setActiveSection, sectionName]);
  return { ref, setTimeOfLastClick, setActiveSection };
};

export default useSectionInView;
