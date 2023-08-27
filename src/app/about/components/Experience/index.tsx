"use client";
import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import Details from "./Details";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    // start end => start of the target meets end of the container
    // center start => center of the target element should align with the top edge of the viewport
  });

  return (
    <div className="flex flex-col w-full space-y-24">
      <h1 className="text-center font-bold text-black text-4xl md:text-7xl">
        Experience
      </h1>

      <div
        ref={ref}
        className="flex w-[75%] mx-auto relative justify-center"
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute -left-9 top-0 w-[2px] h-full bg-black origin-top lg:w-[4px] lg:-left-6"
        />
        <ul className="space-y-16">
          <Details
            key={"swe-appscoop"}
            position="Software Engineer"
            address="Gurugram, Haryana, India"
            company="APPSCOOP SOLUTIONS PVT. LTD."
            time="09 May 2022 to Present"
            work="Working as a full-time Full Stack React Developer."
          />
          <Details
            key={"swe-bitcs"}
            position="Software Engineer"
            address="Gurugram, Haryana, India"
            company="BITCS"
            time="Jan 2021 to March 2021"
            work="Worked as React Native Developer."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
