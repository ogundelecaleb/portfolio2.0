import React from 'react'
import { motion as m } from "framer-motion";
import { BsTelephoneFill} from "react-icons/bs";
import { HiEnvelope, HiMapPin} from "react-icons/hi2";

type Props = {}

function Contact({}: Props) {
  return (
    <m.div
    animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }} className="absolute top-0 left-0 w-full  h-full bg-[rgb(43,43,43)] text-white ">
      
      <m.div initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" relative mt-20 flex flex-col  justify-center items-center text-center md:text-left md:flex-row max-w-[2000px] px-2 mx-auto xl:px-10 h-full xl:space-y-0   ">
      <h3 className="absolute -top-5 uppercase tracking-[20px] text-gray-500 text-1xl ">
          project
        </h3>
        <div className='flex flex-col space-y-10'>
          <h4 className='text-3xl font-semibold text-center'>
            I have got just what you need. <span className='underline decoration-[#39ff14]/50'>Lets Talk.</span>
          </h4>

          <div className='space-y-8'>
            <div className='flex items-center space-x-5 justify-center'>
              <BsTelephoneFill color='#39ff14' className='animate-pulse h-7 w-7'/>
              <p className='text-2xl'>+2348113524450</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <HiEnvelope color='#39ff14' className='animate-pulse h-7 w-7'/>
              <p className='text-2xl'>+2348113524450</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
              <HiMapPin color='#39ff14' className='animate-pulse h-7 w-7'/>
              <p className='text-2xl'>+2348113524450</p>
            </div>
        
          </div>
        </div>
      </m.div>
      
      </m.div>
  )
}

export default Contact