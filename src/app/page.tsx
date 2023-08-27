import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiExternalLink } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";
import AnimatedText from "@/components/AnimatedText";

import { TEXTS } from "@/utils/texts";
import IMAGE from "../../public/images/profile/developer_4.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full space-y-6 justify-between py-16 lg:flex-row">
      <div className="flex w-full md:w-2/3 lg:w-1/2 lg:p-10">
        {" "}
        {/* md:w-2/3 lg:w-1/2 */}
        <Image
          src={IMAGE}
          priority // this will preload the image
          alt="Developer profile picture"
          className="w-full h-auto"
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className="space-y-8 w-full px-4 lg:w-1/2 lg:px-24">
        <AnimatedText text={TEXTS.TITLE} className="leading-normal" />
        
        <p className="font-medium text-base text-black text-center md:text-left">
          {TEXTS.SUBTITLE}
        </p>

        {/* resume & contact */}
        <div className="w-full flex justify-center space-x-4 md:justify-normal">
          <Link
            target="_blank"
            href={"/resume.pdf"}
            className="
              flex space-x-2 py-2 px-4 items-center bg-slate-700 rounded-md
              text-white font-normal text-base hover:scale-95 transition-all
            "
          >
            <span>Resume</span>
            <FiExternalLink />
          </Link>

          <Link
            target="_blank"
            href={"mailto:yashkelkar76@gmail.com"}
            className="
              flex space-x-2 py-2 px-4 items-center bg-slate-700 rounded-md
              text-white font-normal text-base hover:scale-95 transition-all
            "
          >
            <span>Contact</span>
            <MdOutlineContactMail />
          </Link>
        </div>
      </div>
    </div>
  );
}
