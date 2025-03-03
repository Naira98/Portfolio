import { ReactNode } from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import VideoIcon from "./VideoIcon";

interface SocialLinksPropsTypes {
  id: number;
  github?: string;
  website?: string;
  video?: string;
}

const SocialLinks = ({ id, github, website, video }: SocialLinksPropsTypes) => {
  return (
    <div className="flex items-center justify-center gap-1 xs:gap-2">
      {github && (
        <LinkIcon title="Github" href={github}>
          <FaGithub className="h-6 w-6 lg:h-7 lg:w-7" />
        </LinkIcon>
      )}
      {website && (
        <LinkIcon title="Website" href={website}>
          <BsGlobe2 className="h-6 w-6 lg:h-7 lg:w-7" />
        </LinkIcon>
      )}
      {video && (
        <VideoIcon title="Video" projectId={id}>
          <FaVideo className="h-6 w-6 lg:h-7 lg:w-7" />
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
    <span className="tooltip relative" onClick={(e) => e.stopPropagation()}>
      <a href={href} aria-label={title} target="_blank" className="text-white hover:text-purple">
        {children}
      </a>
      <div className="tooltip-text absolute bottom-[130%] z-20 w-fit rounded-2xl border border-white/20 bg-black px-3 py-1 text-sm font-bold text-white">
        {title}
      </div>
    </span>
  );
};

export default SocialLinks;
