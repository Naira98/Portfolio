import { createContext } from "react";

type isProjectsExpandedContextType = {
    isProjectsExpanded: boolean;
    setIsProjectsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const isProjectsExpandedContext = createContext<isProjectsExpandedContextType | null>(null);