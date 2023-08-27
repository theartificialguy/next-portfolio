"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";

interface ICustomLink {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = "" }: ICustomLink) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={twMerge("group", className)}>
      <span className={twMerge("text-black", className)}>{title}</span>
      <div
        className={`h-[2px] w-0 bg-black rounded-full group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

export default CustomLink;
