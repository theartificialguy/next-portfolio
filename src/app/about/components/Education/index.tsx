"use client";
import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import Details from "../Education/Details";

const Education = () => {
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
        Education
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
            key={"grad"}
            marks="8.44"
            time="2017-2021"
            type="Bachelor of Technology in Electronics & Communications"
            place="Maharaja Agrasen Instritute of Technology, Delhi, India"
            info="Courses including Basics of Programming, IoT, Embedded Systems, etc"
          />
          <Details
            key={"high-scool"}
            marks="8.95"
            time="2015-2017"
            type="High School (12th) in Science & Technology"
            place="Bloom Public School, Delhi, India"
            info="Comprehensive and advanced study of science subjects - Physics, Chem & Maths."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
