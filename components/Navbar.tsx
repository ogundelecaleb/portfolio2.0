import React from "react";
import { motion as m } from "framer-motion";
import { BiUserCircle, BiHomeCircle } from "react-icons/bi";
import { SiAboutdotme} from "react-icons/si";
import { RiContactsLine,RiBriefcaseLine} from "react-icons/ri";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="relative top-0 p-5  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center md:px-28
    ">
      <m.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-5 text-lg"
      >
        <Link href="/">
        <BiHomeCircle color="grey" />
        </Link>
        
        <Link href="/AboutMe">
        <SiAboutdotme color="gray" />
        </Link>
        
        {/* <FcAbout color="white" /> */}
        {/* <BiUserCircle color="gray" /> */}
        
        <Link href="/Portfolio"><RiBriefcaseLine color="gray" /></Link>
         <Link href="/Contact"><RiContactsLine color="gray" /></Link>
      </m.div>

      <m.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <p className=" text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </m.div>
    </div>
  );
}
