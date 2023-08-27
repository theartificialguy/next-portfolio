"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { CustomLink, CustomMobileLink } from "@/components";
import { LinkedInIcon, GithubIcon } from "@/utils/icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex w-full px-6 py-8 items-center justify-between font-medium md:px-24">
      {/* hamburger button */}
      <button
        className="flex flex-col justify-center items-center md:hidden"
        onClick={toggleMenu}
      >
        <span
          className={twMerge(
            "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          )}
        />
        <span
          className={twMerge(
            "bg-black block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 rounded-sm opacity-100",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={twMerge(
            "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          )}
        />
      </button>

      <h1 className="text-xl font-bold text-black md:hidden">Yash Kelkar</h1>

      {/* navbar for mobile & smaller screens */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="
          min-w-[70vw] flex flex-col w-[90%] z-30 items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden
          bg-black/90 rounded-lg backdrop-blur-md py-32 space-y-6
        "
        >
          {/* pages section */}
          <nav className="flex flex-col justify-between items-center space-y-2">
            <CustomMobileLink href={"/"} title="Home" toggleMenu={toggleMenu} />
            <CustomMobileLink
              href={"/about"}
              title="About"
              toggleMenu={toggleMenu}
            />
            <CustomMobileLink
              href={"/projects"}
              title="Projects"
              toggleMenu={toggleMenu}
            />
            <CustomMobileLink
              href={"/blogs"}
              title="Blogs"
              toggleMenu={toggleMenu}
            />
          </nav>

          {/* external links section */}
          <nav className="flex items-center space-x-12">
            <motion.a
              href={"https://in.linkedin.com/in/yash-kelkar-224179158"}
              className="w-8"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href={"https://github.com/theartificialguy"}
              className="w-8 bg-white rounded-full"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      {/* navbar for bigger screens */}
      <div className="hidden w-full items-center justify-between md:flex">
        {/* left section */}
        <nav className="flex items-center space-x-12">
          <CustomLink href={"/"} title="Home" />
          <CustomLink href={"/about"} title="About" />
          <CustomLink href={"/projects"} title="Projects" />
          <CustomLink href={"/blogs"} title="Blogs" />
        </nav>

        {/* right section */}
        <nav className="flex items-center space-x-12">
          <motion.a
            href={"https://in.linkedin.com/in/yash-kelkar-224179158"}
            className="w-8"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"https://github.com/theartificialguy"}
            className="w-8"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
