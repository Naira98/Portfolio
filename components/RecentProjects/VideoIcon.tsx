"use client";

import { ReactNode, useState } from "react";
import Modal from "./Modal";

const VideoIcon = ({
  children,
  title,
  src,
}: {
  children: ReactNode;
  title: string;
  src: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <span className="tooltip relative h-[24px]">
      <div
        onClick={() => setIsOpen(true)}
        className="text-white hover:text-purple"
      >
        {children}
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} src={src} />
      {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} src={src} /> */}

      <div className="tooltip-text absolute bottom-[130%] z-20 w-fit rounded-2xl border border-white/20 bg-black px-3 py-1 text-sm font-bold text-white">
        {title}
      </div>
    </span>
  );
};

export default VideoIcon;
