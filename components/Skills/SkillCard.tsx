"use client";

import { SkillType } from "@/data/types";
import Image from "next/image";

const SkillCard = ({ name, img }: SkillType) => {
  return (
    <div className=";lg:text-xl flex items-center justify-between rounded-2xl border border-white/20 bg-black-100 px-6 py-3 font-bold transition-all duration-300 hover:scale-105 hover:border-purple">
      <h3>{name}</h3>
      <div className="relative h-8 w-8">
        <Image src={`/tech/${img}`} alt={name} fill className="absolute" />
      </div>
    </div>
  );
};

export default SkillCard;
