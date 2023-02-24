import React from "react";
import { motion as m } from "framer-motion";
import Skilly from "../components/Skill";
import { data } from "../public";
// import { Skill} from "../typings";
// import { fetchSkills } from "../utils/fetchSkills";
// import { GetStaticProps } from "next";

type Props = {
  image: string;
};

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
          Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">
          {data.skills.slice(0, data.skills.length / 2).map((skill, index) => (
            <Skilly
              key={skill.title + index}
              title={skill.title}
              percent={skill.percent}
              image={skill.Image}
            />
          ))}

          {data.skills
            .slice(data.skills.length / 2, data.skills.length)
            .map((skill, index) => (
              <Skilly
                key={skill.title + index}
                title={skill.title}
                percent={skill.percent}
                image={skill.Image}
                directionLeft
              />
            ))}
          {/* <Skilly/>
          <Skilly/>
          <Skilly/>
          <Skilly/>
          <Skilly/>
          <Skilly/>
          <Skilly/>
          <Skilly/> */}
        </div>
      </m.div>
    </m.div>
  );
}

export default Skills;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const skill: Skill[] = await fetchSkills();

//   return {
//     props: {
//       skill,

//     },

//     revalidate: 10,
//   };
// };
