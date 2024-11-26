import { projects } from "@/data";

export type ProjectsArrayType = typeof projects;
export type IconListType = (typeof projects)[number]["iconLists"];

export interface SkillType {
  name: string;
  img: string;
}
