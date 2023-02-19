import React from "react";
import { motion as m } from "framer-motion";
// import { BiUserCircle, BiHomeCircle } from "react-icons/Bi";
import { GrContact } from "react-icons/Gr";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="sticky top-0 p-5  flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-start">
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
        className="flex flex-row items-center"
      >
        <GrContact color="gray" />
        <GrContact color="gray" />
        <GrContact color="gray" />
        <GrContact color="gray" />
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
