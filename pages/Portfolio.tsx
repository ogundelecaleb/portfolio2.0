import React from "react";
import { motion as m } from "framer-motion";
import { data } from "../public";
import Link from "next/link";
// import { fetchProjects } from "../utils/fetchProjects";
// import { GetStaticProps } from "next";
// import { Project } from "../typings";

type Props = {

};


function Portfolio({}: Props) {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 w-full  h-screen bg-[rgb(43,42,42)] text-white overflow-hidden md:overflow-y-scroll "
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
        className=" relative mt-20 flex  flex-col  justify-center items-center text-center md:text-left md:flex-row max-w-[2000px] px-2 mx-auto xl:px-10 h-screen xl:space-y-0   "
      >
        <h3 className="absolute -top-5 uppercase tracking-[20px] text-gray-500 text-1xl ">
         Portfolio
        </h3>
        <div className=" relative w-full py-[70px] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#39ff14]">
          {data.projects.map((project, i) => (
            <div
              key={project.title + 1}
              className="w-screen flex-shrink-0 snap-center items-center flex flex-col space-y-5 justify-center p-7 md:p-44"
            >
              <Link href={project.url}>
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
                className ="cursor-pointer object-cover"
                src= {project.Image}
                alt="project image"
              />
              </Link>
              
              <div className="space-y-10 px-0 md:px-10 max-w-5xl">
                <h3 className="text-3xl font-semibold text-center">
                  <span className="underline decoration-[#39ff14]/50">
                    {" "}
                    Case Study {i + 1} of {data.projects.length}
                  </span>
                  : {project.title}
                </h3>

                <p className="text-lg text-center md:text-left">
                {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[10%] bg-[#39ff14]/10 left-0 h-[400px] -skew-y-12 -z-20"></div>
      </m.div>
    </m.div>
  );
}

export default Portfolio;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const projects: Project[] = await fetchProjects();

//   console.log

//   return {
//     props: {
//       projects,
    
//     },


//     revalidate: 10,
//   };
// };
