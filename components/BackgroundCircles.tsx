import React from "react";
import { motion as m } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div >
      <div className="absolute border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      {/* <div className="border border-red-500 rounded-full h-[300px] w-[300px] mt-52 absolute" />
      <div className="border border-red-500 rounded-full h-[500px] w-[500px] mt-52 absolute" />
      <div className="border border-orange-500 opacity-20 rounded-full h-[650px] w-[650px] mt-52 absolute animate-pulse" />
      <div className="border border-red-500 rounded-full h-[800px] w-[800px] mt-52 absolute" /> */}
    </div>
  );
}

export default BackgroundCircles;
