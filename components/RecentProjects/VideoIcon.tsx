"use client";

import { ReactNode, useState } from "react";
import Modal from "./Modal";

interface VideoIconPropsType {
  children: ReactNode;
  title: string;
  src: string;
  projectDes: {
    title: string;
    des: string;
  };
}

const VideoIcon = ({
  children,
  title,
  src,
  projectDes,
}: VideoIconPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <span className="tooltip relative h-[24px]">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white hover:text-purple"
      >
        {children}
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={src}
        projectDes={projectDes}
      />

      <div className="tooltip-text absolute bottom-[130%] z-20 w-fit rounded-2xl border border-white/20 bg-black px-3 py-1 text-sm font-bold text-white">
        {title}
      </div>
    </span>
  );
};

export default VideoIcon;
