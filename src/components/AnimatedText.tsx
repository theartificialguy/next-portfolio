"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface IAnimatedText {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: IAnimatedText) => {
  return (
    <div className="flex w-full mx-auto text-center items-center justify-center">
      <motion.h1
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              delay: 0.5,
              staggerChildren: 0.1, //  will delay each of the children by 0.08s
            },
          },
        }}
        initial="initial"
        animate="animate"
        className={twMerge(
          "font-bold text-black text-center text-2xl md:text-6xl md:text-left",
          className
        )}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={{
              initial: {
                y: 50,
                opacity: 0,
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                },
              },
            }}
            className="inline-block"
            key={word + "-" + index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
