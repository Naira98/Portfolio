import { moreProjects, projects, skills } from "@/data";

export type ProjectsArrayType = (
  | (typeof projects | typeof moreProjects)[number]
  | (typeof moreProjects)[number]
)[];
export type IconListType =
  | (typeof projects)[number]["iconLists"]
  | (typeof moreProjects)[number]["iconLists"];

export type SkillType = typeof skills;
