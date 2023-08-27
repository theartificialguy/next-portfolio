import React from "react";
import Image from "next/image";

import Skill from "./components/Skill";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { AnimatedText } from "@/components";
import { TEXTS } from "@/utils/texts";
import SKILLS from "@/utils/skills";

import PROFILE from "../../../public/images/profile/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center space-y-12 pt-8 px-8 lg:px-24 lg:space-y-32">
      <AnimatedText text="Passion Fuels Purpose!" />

      {/* ABOUT */}
      <div className="relative -top-24 w-full flex flex-col space-y-24 items-center justify-between md:grid md:grid-cols-8 md:gap-16">
        {/* col-span-4 => occupy 3 cols out of total 8 cols */}
        <div className="flex flex-col space-y-4 items-center justify-start order-2 mt-16 md:order-1 md:mt-0 md:items-start md:col-span-4 lg:col-span-3 ">
          <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
            Biography
          </h2>
          <div className="w-full h-[1px] bg-black rounded-full" />
          <p className="font-medium">{TEXTS.ABOUT_1}</p>
          <p className="font-medium">{TEXTS.ABOUT_2}</p>
          <p className="font-medium">{TEXTS.ABOUT_3}</p>
        </div>
        <div className="h-max border-2 rounded-full border-solid border-black bg-white p-8 order-1 md:order-2 md:col-span-4 lg:col-span-3">
          {/* col-span-3 => occupy 3 out of remaining 5 cols */}
          <Image
            alt="Me"
            priority
            src={PROFILE}
            className="w-full h-auto rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        {/* col-span-2 => occupy remaining 2 cols */}
        <div className="flex flex-col justify-center items-center space-y-4 order-3 md:col-span-8 lg:items-end lg:col-span-2">
          <h2 className="mb-4 text-lg font-bold uppercase text-black/75">
            My Tech Stack
          </h2>
          <div className="w-full h-[1px] bg-black rounded-full" />
          {/* frontend technologies */}
          <h3 className="text-base font-medium uppercase text-slate-700">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {SKILLS.FRONTEND.map((skill) => (
              <Skill key={skill.id} skill={skill.title} image={skill.image} />
            ))}
          </div>
          {/* backend technologies */}
          <h3 className="text-base font-medium uppercase text-slate-700">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {SKILLS.BACKEND.map((skill) => (
              <Skill key={skill.id} skill={skill.title} image={skill.image} />
            ))}
          </div>
          {/* database technologies */}
          <h3 className="text-base font-medium uppercase text-slate-700">
            Database
          </h3>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {SKILLS.DATABASE.map((skill) => (
              <Skill key={skill.id} skill={skill.title} image={skill.image} />
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <Experience />

      {/* EDUCATION */}
      <Education />

      {/* empty space to complete line animation */}
      <div className="w-full h-40 lg:h-64" />
    </div>
  );
};

export default About;
