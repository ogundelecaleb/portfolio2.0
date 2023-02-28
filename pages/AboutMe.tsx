import React from "react";
import { motion as m } from "framer-motion";

type Props = {};

function AboutMe({}: Props) {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 w-full  h-screen bg-[rgb(43,43,43)] text-white overflow-hidden "
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
        className="relative mt-20 flex flex-col  justify-center items-center text-center md:text-left md:flex-row max-w-[2000px] px-2 mx-auto xl:px-10 min-h-screen xl:space-y-0  overflow-hidden  "
      >
        <h3 className="absolute -top-5 uppercase tracking-[20px] text-gray-500 text-1xl ">
          About
        </h3>

        <m.img
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          src="./assets/caleb.jpg"
          alt=""
          className="mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-65 md:h-95 xl:h-[600px]"
        />
        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-2xl font-semibold">
            Here is a little background
          </h4>
          <p className=" pb-20 text-sm">
            I am a highly skilled and experienced web developer with over 3
            years of experience in web development. I have a passion for building
            state-of-art, easy to use, user-friendly websites and applications.
            In addition to my knowledge base, i actively seek out new
            technologies and stay up-to-date on industry trends and
            advancements. This have allowed me to stay ahead of the curve and
            deliver exceptional work to all of my employers, including those
            i've worked for on a project basis.
          </p>
        </div>
      </m.div>
    </m.div>
  );
}

export default AboutMe;
