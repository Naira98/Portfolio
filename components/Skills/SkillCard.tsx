"use client";

import { SkillType } from "@/data/types";
import Image from "next/image";

const SkillCard = ({ name, img }: SkillType) => {
  return (
    <div className="shiny flex h-36 w-40 cursor-default flex-col items-center justify-center gap-4 rounded-2xl border border-white/20 bg-black-100 px-6 py-3 font-bold transition-all duration-300 hover:scale-105">
      <div className="relative h-14 w-14">
        <Image src={`/tech/${img}`} alt={name} fill className="absolute" />
      </div>
      <h3 className="text-center">{name}</h3>
    </div>
  );
};

export default SkillCard;
