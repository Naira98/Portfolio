import { SkillType } from "@/data/types";
import * as techAssets from "@/assets/tech";

interface SkillCardPropsType {
  img: SkillType[number]["img"];
  name: SkillType[number]["name"];
}

const SkillCard = ({ img, name }: SkillCardPropsType) => {
  return (
    <div className="shiny flex h-36 w-40 cursor-default flex-col items-center justify-center gap-4 rounded-2xl border border-white/20 bg-black-100 px-6 py-3 font-bold transition-all duration-300 hover:scale-105">
      <div className="relative h-14 w-14">
        <img
          src={techAssets[img]}
          alt={name}
          className="absolute h-14 w-14 object-contain"
        />
      </div>
      <div className="text-center">{name}</div>
    </div>
  );
};

export default SkillCard;
