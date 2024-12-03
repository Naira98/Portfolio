import { useContext } from "react";
import { OpenProjectContext } from "./OpenProjectContext";

export const useOpenProject = () => {
  const context = useContext(OpenProjectContext);
  if (context == null)
    throw new Error("Can't use OpenProject Context outside Provider");
  return context;
};
