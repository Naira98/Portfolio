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
    <div className="flex items-center justify-center xs:gap-2 gap-1">
      {github && (
        <LinkIcon title="Github" href={github}>
          <FaGithub className="lg:h-7 lg:w-7 h-6 w-6" />
        </LinkIcon>
      )}
      {website && (
        <LinkIcon title="Website" href={website}>
          <BsGlobe2 className="lg:h-7 lg:w-7 h-6 w-6" />
        </LinkIcon>
      )}
      {video && (
        <VideoIcon title="Video" projectId={id}>
          <FaVideo className="lg:h-7 lg:w-7 h-6 w-6" />
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
      <a href={href} target="_blank" className="text-white hover:text-purple">
        {children}
      </a>
      <div className="tooltip-text absolute bottom-[130%] z-20 w-fit rounded-2xl border border-white/20 bg-black px-3 py-1 text-sm font-bold text-white">
        {title}
      </div>
    </span>
  );
};

export default SocialLinks;
