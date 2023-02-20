import React from "react";
import { motion as m } from "framer-motion";

type Props = {};

function Portfolio({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 w-full  h-screen bg-[rgb(43,42,42)] text-white  overflow-hidden "
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
        className=" relative mt-20 flex flex-col  justify-center items-center text-center md:text-left md:flex-row max-w-[2000px] px-2 mx-auto xl:px-10 h-full xl:space-y-0   "
      >
        <h3 className="absolute -top-5 uppercase tracking-[20px] text-gray-500 text-1xl ">
          project
        </h3>
        <div className=" relative w-full flex overflow-x-scroll overflow-y-scroll snap-x snap-mandatory  z-20">
          {projects.map((project, i) => (
            <div
              key={i + 1}
              className="w-screen h-screen flex-shrink-0 snap-center items-center flex flex-col space-y-5 justify-center p-7 md:p-44"
            >
              <m.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
               
                src="./apple_store.jpg"
                alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-5xl">
                <h3 className="text-3xl font-semibold text-center">
                  <span className="underline decoration-[#39ff14]/50">
                    {" "}
                    Case Study {i + 1} of {projects.length}
                  </span>
                  : UPS clone
                </h3>

                <p className="text-lg text-center md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae repellendus repudiandae tempore dolorem excepturi
                  consequuntur quibusdam explicabo iste blanditiis, facere,
                  quasi exercitationem nihil.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[10%] bg-[#39ff14]/10 left-0 h-[400px] -skew-y-12"></div>
      </m.div>
    </m.div>
  );
}

export default Portfolio;
