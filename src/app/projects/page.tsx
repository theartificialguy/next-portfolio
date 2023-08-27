import React from "react";

import { AnimatedText } from "@/components";
import Project from "./components/Project";

import CodeHub from "../../../public/images/projects/codehub.jpg";
import JustChat from "../../../public/images/projects/justchat.jpg";
import Netflix from "../../../public/images/projects/netflix.jpg";

const Projects = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center space-y-6 pt-8 mb-52 px-2 lg:px-24">
      <AnimatedText text="My Featured Projects!" className="mb-16" />

      {/* Projects */}
      <div className="mx-6 grid grid-cols-4 gap-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-24">
        <div className="col-span-6 md:col-span-4 lg:col-span-4">
          <Project
            img={CodeHub}
            title="CodeHub"
            link="https://codehub-liard.vercel.app"
            github="https://github.com/theartificialguy/CodeHub"
            tags={["NextJs", "Firebase", "typescript", "zustand"]}
            summary="CodeHub is a place to save and share your favourite/useful code snippets and use them anywhere anytime!"
          />
        </div>

        <div className="col-span-6 md:col-span-4 lg:col-span-4">
          <Project
            img={JustChat}
            title="JustChat"
            github="https://github.com/theartificialguy/justchatv2"
            tags={["React Native", "Firebase", "typescript", "Redux"]}
            summary="JustChat is a fullstack chatting application developed using React Native for frontend and Firebase for Backend as a Service."
          />
        </div>

        <div className="col-span-6 md:col-span-4 lg:col-span-4">
          <Project
            img={Netflix}
            title="Netflix Clone"
            github="https://github.com/theartificialguy/netflix-clone-next"
            tags={["NextJs", "Firebase", "typescript", "Tailwindcss"]}
            summary="A Fullstack Netflix clone developed using ReactJs (NextJs) for frontend along with Firebase as Backend as a Service."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;