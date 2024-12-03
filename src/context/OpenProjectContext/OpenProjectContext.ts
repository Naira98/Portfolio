import { createContext } from "react";

type OpenProjectContextType = {
    openProjectId: number | null;
    setOpenProjectId: React.Dispatch<React.SetStateAction<number | null>>;
  };
  
  export const OpenProjectContext = createContext<OpenProjectContextType | null>(
    null,
  );