import React from "react";
import Image, { StaticImageData } from "next/image";

interface ISkill {
  skill: string;
  image?: StaticImageData;
}

const Skill = ({ skill, image }: ISkill) => {
  return (
    <div
      className="
          flex space-x-2 bg-slate-700 text-white rounded-md items-center px-2 p-1 cursor-pointer hover:scale-95 transition-all"
    >
      <div className="h-10 w-10">
        {image && (
          <Image
            src={image}
            alt="Skill Image"
            className="object-fill h-full w-full"
          />
        )}
      </div>
      <span className="text-base uppercase">{skill}</span>
    </div>
  );
};
// hover:bg-slate-50 hover:text-black hover:border-2 hover:border-black/75
export default Skill;
