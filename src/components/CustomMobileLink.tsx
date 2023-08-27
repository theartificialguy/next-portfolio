"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";

interface ICustomMobileLink {
  href: string;
  title: string;
  className?: string;
  toggleMenu: () => void;
}

const CustomMobileLink = ({
  href,
  title,
  toggleMenu,
  className = "",
}: ICustomMobileLink) => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = () => {
    toggleMenu();
    router.push(href);
  };

  return (
    <button className={twMerge("group", className)} onClick={onNavigate}>
      <span className="text-white">{title}</span>
      <div
        className={`h-[2px] w-0 bg-white rounded-full group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

export default CustomMobileLink;
