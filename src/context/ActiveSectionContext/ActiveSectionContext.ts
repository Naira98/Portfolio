import { createContext, MutableRefObject } from "react";
import { sectionsType } from "./ActiveSectionProvider";

export type ActiveSectionContextType = {
  activeSection: string;
  refs: Record<sectionsType[number], MutableRefObject<HTMLDivElement | null>>;
  scrollTo: (section: string) => void;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
