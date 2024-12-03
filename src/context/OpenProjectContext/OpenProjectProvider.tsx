import { ReactNode, useEffect, useState } from "react";
import styles from "./openProject.module.css";
import { OpenProjectContext } from "./OpenProjectContext";

type OpenProjectProviderProps = { children: ReactNode };

const OpenProjectContextProvider = ({ children }: OpenProjectProviderProps) => {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  useEffect(() => {
    if (openProjectId != null) {
      document.body.classList.add(styles["overflow-hidden"]);
    } else {
      document.body.classList.remove(styles["overflow-hidden"]);
    }
  }, [openProjectId]);

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

export default OpenProjectContextProvider;
