import { useContext } from "react";
import { isProjectsExpandedContext } from "./IsProjectsExpandedContext";

export const useIsProjectsExpanded = () => {
    const context = useContext(isProjectsExpandedContext);
    if (context == null)
      throw new Error("Can't use isProjectsExpanded Context outside Provider");
    return context;
  };