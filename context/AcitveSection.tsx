"use client";

import { navItems } from "@/data";
import { createContext, ReactNode, useContext, useState } from "react";

type SectionName = (typeof navItems)[number]["name"];

type AcitveSectionProviderProps = { children: ReactNode };

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

const AcitveSectionProvider = ({ children }: AcitveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
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

export default AcitveSectionProvider;
