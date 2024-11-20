export interface ProjectType {
  id: number;
  title: string;
  des: string;
  iconLists: {
    id: number;
    name: string;
    image: string;
  }[];
  img: string;
  github: string;
  website?: string;
  video: string;
}
