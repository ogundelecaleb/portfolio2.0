import React from "react";
import { motion as m } from "framer-motion";
import { BiUserCircle, BiHomeCircle } from "react-icons/bi";
import { SiAboutdotme, SiSkillshare} from "react-icons/si";
import { RiContactsLine,RiBriefcaseLine} from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
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
        <BiHomeCircle   className={`cursor-pointer ${
              router.pathname == "/" ? "text-[#39ff14]" : "text-gray-500"
            }`} />
        </Link>
        
        <Link href="/AboutMe">
        <SiAboutdotme className={`cursor-pointer ${
              router.pathname == "/AboutMe" ? "text-[#39ff14]" : "text-gray-500"
            }`} />
        </Link>

        <Link href="/Skills">
        <SiSkillshare className={`cursor-pointer ${
              router.pathname == "/Skills" ? "text-[#39ff14]" : "text-gray-500"
            }`} />
        </Link>
        
        {/* <FcAbout color="white" /> */}
        {/* <BiUserCircle color="gray" /> */}
        
        <Link href="/Portfolio"><RiBriefcaseLine className={`cursor-pointer ${
              router.pathname == "/Portfolio" ? "text-[#39ff14]" : "text-gray-500"
            }`} /></Link>
         <Link href="/Contact"><RiContactsLine className={`cursor-pointer ${
              router.pathname == "/Contact" ? "text-[#39ff14]" : "text-gray-500"
            }`} /></Link>
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
        <p className=" text-sm text-[#39ff14]/80 tracking-[7px]">
          KAILEB
        </p>
      </m.div>
    </div>
  );
}
