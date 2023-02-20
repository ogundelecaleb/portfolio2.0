import React from "react";
import { motion as m } from "framer-motion";
import Skill from "../components/Skill"

type Props = {};

function Skills({}: Props) {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 w-full  h-screen bg-[rgb(43,43,43)] text-white overflow-hidden  "
    >
      <m.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" relative mt-20 flex flex-col  justify-center items-center text-center md:text-left md:flex-row max-w-[2000px] px-2 mx-auto xl:px-10 min-h-screen xl:space-y-0   "
      >

        <h3 className="absolute -top-5 uppercase tracking-[20px] text-gray-500 text-1xl ">
          Skills
        </h3>
        <h3 className="absolute top-2 uppercase tracking-[3px] text-gray-500 text-xs">
          Hover over a screen for currency proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </m.div>
    </m.div>
  );
}

export default Skills;
