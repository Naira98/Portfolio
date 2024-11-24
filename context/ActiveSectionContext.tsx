"use client";

import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

type ActiveSectionProviderProps = {
  children: ReactNode;
};

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  refs: Record<
    (typeof sections)[number],
    MutableRefObject<HTMLDivElement | null>
  >;
  scrollTo: (section: string, link: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

const sections = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Approach",
  "Contact",
] as const;

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const approachRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const threshold = 1 / 3;
  const router = useRouter();

  const refs = useMemo(
    () => [homeRef, aboutRef, projectsRef, skillsRef, approachRef, contactRef],
    [],
  );

  const [_activeSection, setActiveSection] = useState<string>("Home");
  const [activeSectionOverwrite, setActiveSectionOverwrite] = useState<
    string | null
  >(null);

  const activeSection = activeSectionOverwrite ?? _activeSection;

  console.log({ _activeSection, activeSectionOverwrite, activeSection });

  useEffect(() => {
    if (activeSectionOverwrite == null) return;

    let canceled = false;

    setTimeout(() => {
      if (canceled) return;

      setActiveSectionOverwrite(null);
    }, 1000);

    return () => {
      canceled = true;
    };
  }, [activeSectionOverwrite]);

  useEffect(() => {
    let positions: (number | null)[] = [];

    function onResize() {
      const { scrollY } = window;

      positions = refs.map((ref) => {
        if (ref.current == null) return null;

        const { y } = ref.current.getBoundingClientRect();
        return scrollY + y;
      });

      onScroll();
    }

    function onScroll(): undefined {
      const { scrollY, innerHeight } = window;
      const { clientHeight } = document.body;

      if (scrollY == 0) {
        setActiveSection(sections[0]);
        return;
      }
      if (scrollY + innerHeight >= clientHeight) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      const offset = scrollY + innerHeight * threshold;

      let currentSectionInView = 0;

      for (let i = 0; i < refs.length; i++) {
        const position = positions[i];
        if (position == null) continue;

        if (position <= offset) currentSectionInView = i;
      }

      setActiveSection(sections[currentSectionInView]);
    }

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [refs, threshold]);

  function scrollTo(section: string, link: string) {
    setActiveSectionOverwrite(section);
    router.push(link);
  }

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollTo,
        refs: {
          Home: homeRef,
          About: aboutRef,
          Projects: projectsRef,
          Skills: skillsRef,
          Approach: approachRef,
          Contact: contactRef,
        },
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context == null)
    throw new Error("Can't use ActiveSection Context outside Provider");
  return context;
};

export default ActiveSectionProvider;
