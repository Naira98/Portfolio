import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import VideoIcon from "./VideoIcon";
import { ProjectType } from "@/data/types";

const SocialLinks = ({ project }: { project: ProjectType }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {project.github && (
        <LinkIcon title="Github" href={project.github}>
          <FaGithub size={24} />
        </LinkIcon>
      )}
      {project.website && (
        <LinkIcon title="Website" href={project.website}>
          <BsGlobe2 size={24} />
        </LinkIcon>
      )}
      {project.video && (
        <VideoIcon title="Video" projectId={project.id}>
          <FaVideo size={24} />
        </VideoIcon>
      )}
    </div>
  );
};

const LinkIcon = ({
  children,
  title,
  href,
}: {
  children: ReactNode;
  title: string;
  href: string;
  color?: string;
}) => {
  return (
    <span className="tooltip relative">
      <Link
        href={href}
        target="_blank"
        className="text-white hover:text-purple"
      >
        {children}
      </Link>
      <div className="tooltip-text absolute bottom-[130%] z-20 w-fit rounded-2xl border border-white/20 bg-black px-3 py-1 text-sm font-bold text-white">
        {title}
      </div>
    </span>
  );
};

export default SocialLinks;
