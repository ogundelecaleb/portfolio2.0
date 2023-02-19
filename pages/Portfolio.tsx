import React from 'react'
import { motion as m } from "framer-motion";

type Props = {}

function Portfolio({}: Props) {
  return (
    <m.div
    animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }} className="absolute top-0 left-0 w-full  h-full bg-[rgb(43,42,42)] text-white ">
      <div className='h-screen relative flex flex-col  justify-center items-center text-center overflow-hidden'>
        Portfolio
      </div>
      
      </m.div>
  )
}

export default Portfolio