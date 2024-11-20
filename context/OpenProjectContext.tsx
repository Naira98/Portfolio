"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type OpenProjectProviderProps = { children: ReactNode };

type OpenProjectContextType = {
  openProjectId: number | null;
  setOpenProjectId: React.Dispatch<React.SetStateAction<number | null>>;
};

const OpenProjectContext = createContext<OpenProjectContextType | null>(null);

const OpenProjectContextProvider = ({ children }: OpenProjectProviderProps) => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  return (
    <OpenProjectContext.Provider
      value={{
        openProjectId,
        setOpenProjectId,
      }}
    >
      {children}
    </OpenProjectContext.Provider>
  );
};

export const useOpenProject = () => {
  const context = useContext(OpenProjectContext);
  if (context == null)
    throw new Error("Can't use OpenProject Context outside Provider");
  return context;
};

export default OpenProjectContextProvider;
