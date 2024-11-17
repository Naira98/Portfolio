import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import VideoIcon from "./VideoIcon";

const SocialLinks = ({
  github,
  website,
  video,
}: {
  github?: string;
  website?: string;
  video?: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {github && (
        <LinkIcon title="Github" href={github}>
          <FaGithub size={24} />
        </LinkIcon>
      )}
      {website && (
        <LinkIcon title="Website" href={website}>
          <BsGlobe2 size={24} />
        </LinkIcon>
      )}
      {video && (
        <VideoIcon title="Video" src={video} >
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
