import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";

interface IDetails {
  position: string;
  company: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({ position, company, time, address, work }: IDetails) => {
  return (
    <li>
      <LiIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-sm lg:text-2xl">
          {position}&nbsp;<span className="text-pink-600">@{company}</span>
        </h3>
        <span className="capitalize text-sm font-medium text-black/75 md:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

export default Details;

const LiIcon = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });

  return (
    <figure ref={ref} className="absolute -left-[72px] stroke-black lg:-left-[60px]">
      <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="bg-pink-600 stroke-[4px] fill-none"
        />
        <motion.circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          style={{ pathLength: scrollYProgress }}
          className="stroke-pink-600 stroke-[4px] fill-white"
        />
        <circle
          cx={"75"}
          cy={"50"}
          r={"10"}
          className="animate-pulse stroke-1 fill-pink-600"
        />
      </svg>
    </figure>
  );
};
