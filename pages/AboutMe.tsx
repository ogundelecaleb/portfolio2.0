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
      className="absolute top-0 left-0 w-full  h-screen bg-[rgb(43,43,43)] text-white overflow-scroll  "
    >
      <m.div
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration: 1.5
      }}

      className="relative mt-20 flex flex-col  justify-center items-center text-center md:text-left md:flex-row max-w-[2000px] px-2 mx-auto xl:px-10 min-h-screen xl:space-y-0   ">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            facilis excepturi, nobis itaque ea beatae sequi, ad mollitia eius
            aliquid odio, repudiandae consequuntur!
          </p>
        </div>
      </m.div>
    </m.div>
  );
}

export default AboutMe;
