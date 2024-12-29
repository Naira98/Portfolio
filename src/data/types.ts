import { moreProjects, projects, skills } from "@/data";

export type ProjectsArrayType = (
  | (typeof projects | typeof projects)[number]
  | (typeof moreProjects)[number]
)[];
export type IconListType =
  | (typeof projects)[number]["iconLists"]
  | (typeof moreProjects)[number]["iconLists"];

export type ExperiencesType = {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  employmentType: "Full Time" | "Part Time" | "Internship" | "Freelance";
  location: string;
  locationType: "On-site" | "Hybrid" | "Remote";
  description?: string[];
}[];

export type SkillType = typeof skills;
