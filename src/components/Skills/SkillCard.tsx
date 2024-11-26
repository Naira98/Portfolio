import { SkillType } from "@/data/types";
import * as techAssets from "@/assets/tech";

const SkillCard = ({ name, img }: SkillType) => {
  return (
    <div className="shiny flex h-36 w-40 cursor-default flex-col items-center justify-center gap-4 rounded-2xl border border-white/20 bg-black-100 px-6 py-3 font-bold transition-all duration-300 hover:scale-105">
      <div className="relative h-14 w-14">
        <img
          src={techAssets[img]}
          alt={name}
          className="absolute h-14 w-14 object-contain"
        />
      </div>
      <h3 className="text-center">{name}</h3>
    </div>
  );
};

export default SkillCard;