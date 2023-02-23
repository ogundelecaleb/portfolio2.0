import React from "react";
import { motion as m } from "framer-motion";
import { StaticImageData } from "next/image";

type Props = {
  directionLeft?: boolean;
  title: string;
  percent: String;
  
  image: string
};

function Skilly({ directionLeft, title, percent, image }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <m.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        src={image}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:h-24 md:w-24 xl:w-32 xl:h-32
         filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:h-24 md:w-24 xl:w-32 xl:h-32 rounded-full">
        <div className="flex items-center  justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{percent}</p>
        </div>
      </div>
    </div>
  );
}

export default Skilly;
