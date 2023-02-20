import React from "react";
import { motion as m } from "framer-motion";
import { BsTelephoneFill } from "react-icons/bs";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ogundelecaleb14@gmail?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`}
  

  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="absolute top-0 left-0 w-full  h-screen bg-[rgb(43,42,42)] text-white  overflow-auto  "
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
        className=" relative mt-10 flex flex-col  justify-center items-center text-center md:text-left md:flex-row  px-7 mx-auto xl:px-10 h-full xl:space-y-0   "
      >
        <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-1xl ">
          project
        </h3>
        <div className="flex flex-col space-y-10 ">
          <h4 className="text-3xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="underline decoration-[#39ff14]/50">
              Lets Talk.
            </span>
          </h4>

          <div className="space-y-8 w-[100px] mx-auto">
            <div className="flex items-center space-x-5 justify-center">
              <BsTelephoneFill
                color="#39ff14"
                className="animate-pulse h-7 w-7"
              />
              <p className="text-2xl">+2348113524450</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <HiEnvelope color="#39ff14" className="animate-pulse h-7 w-7" />
              <p className="text-2xl">+2348113524450</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <HiMapPin color="#39ff14" className="animate-pulse h-7 w-7" />
              <p className="text-2xl">+2348113524450</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col space-y-2  "
          >
            <div className="flex gap-2   flex-col md:flex-row md:space-x-2 md:justify-between">
              <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className="contactInput w-full"
              />
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                className="contactInput w-full"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              type="text"
              className="contactInput"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            ></textarea>
            <button
              type="submit"
              className="bg-[#39ff14] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </m.div>
    </m.div>
  );
}

export default Contact;
