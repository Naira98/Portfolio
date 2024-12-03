import { projects, skills } from "@/data";

export type ProjectsArrayType = typeof projects
export type IconListType =
  (typeof projects)[number]["iconLists"];

export type SkillType = typeof skills;
