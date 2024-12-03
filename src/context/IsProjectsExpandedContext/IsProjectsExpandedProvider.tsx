import { ReactNode, useState } from "react";
import { isProjectsExpandedContext } from "./IsProjectsExpandedContext";

type isProjectsExpandedProviderProps = { children: ReactNode };

const IsProjectsExpandedContextProvider = ({
  children,
}: isProjectsExpandedProviderProps) => {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState<boolean>(false);

  return (
    <isProjectsExpandedContext.Provider
      value={{
        isProjectsExpanded,
        setIsProjectsExpanded,
      }}
    >
      {children}
    </isProjectsExpandedContext.Provider>
  );
};

export default IsProjectsExpandedContextProvider;
