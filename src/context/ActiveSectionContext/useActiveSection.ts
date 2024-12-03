import { useContext } from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context == null)
    throw new Error("Can't use ActiveSection Context outside Provider");
  return context;
};
