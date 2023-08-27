import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { GithubIcon } from "@/utils/icons";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="px-2 py-1 bg-slate-700 rounded-md">
      <span className="text-base font-medium text-slate-200">{tag}</span>
    </div>
  );
};

interface IFeaturedProject {
  link?: string;
  tags: string[];
  title: string;
  summary: string;
  github: string;
  img: StaticImageData;
}

const Project = ({
  title,
  link,
  img,
  tags,
  summary,
  github,
}: IFeaturedProject) => {
  return (
    <article className="w-full flex flex-col items-center justify-center space-y-4 rounded-2xl border border-solid border-black bg-white">
      <Link
        href={link ?? github}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-tl-2xl rounded-tr-2xl"
      >
        <Image src={img} alt={title} className="w-full h-64 object-cover" objectFit='cover' />
      </Link>

      <div className="p-6 w-full flex flex-col space-y-4 items-start justify-between">
        <div className="w-full flex flex-wrap gap-4 items-center">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>

        <h2 className="w-full text-left text-3xl font-bold">{title}</h2>

        <p className="font-medium text-black">{summary}</p>

        <div className="w-full flex items-center justify-between">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>

          {link && (
            <Link href={link ?? "/"} target="_blank">
              <span className="text-black font-medium text-base hover:underline underline-offset-2">
                Visit
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
