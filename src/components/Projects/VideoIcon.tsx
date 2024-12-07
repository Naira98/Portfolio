import { ReactNode } from "react";
import { useOpenProject } from "@/context/OpenProjectContext/useOpenProject";

interface VideoIconPropsType {
  children: ReactNode;
  title: string;
  projectId: number;
}

const VideoIcon = ({ children, title, projectId }: VideoIconPropsType) => {
  const { setOpenProjectId } = useOpenProject();

  return (
    <span className="tooltip relative h-[24px]">
      <button
        onClick={() => setOpenProjectId(projectId)}
        className="text-white hover:text-purple"
        aria-label={title}
      >
        {children}
      </button>

      <div className="tooltip-text absolute bottom-[130%] z-20 w-fit rounded-2xl border border-white/20 bg-black px-3 py-1 text-sm font-bold text-white">
        {title}
      </div>
    </span>
  );
};

export default VideoIcon;
