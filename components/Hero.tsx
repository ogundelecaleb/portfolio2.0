import React, { lazy, Suspense, useTransition } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { SocialIcon } from "react-social-icons";
import { motion as m } from "framer-motion";
// import Spline from '@splinetool/react-spline';
const Spline = lazy(() => import("@splinetool/react-spline"));

type Props = {};
function Main() {
  const{} = useTransition();
  return(
    <Spline scene="https://prod.spline.design/vVnyxRBOVoIn6-HS/scene.splinecode" />
  )
}

function Hero({}: Props) {

  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name is Ogundele Caleb",
      "i've got passion for frontend development",
      "<CodingIsMyHabit />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen relative flex flex-col  justify-center items-center text-center overflow-hidden ">
      <div>
        {/* <BackgroundCircles /> */}
        {/* <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="absolute top-6 left-2">
          <Spline scene="https://prod.spline.design/FpOqd7Ta0oY6CevK/scene.splinecode" />
        </div>
      </Suspense> */}
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Main/>
          </Suspense>

        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#39ff14" />
        </h1>
      </div>
      <m.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.twitter.com/kailmarvel"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/kailmarvel"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/kailmarvel"
          fgColor="gray"
          bgColor="transparent"
        />
      </m.div>

      {/* <m.div 
       initial={{ x: -500, opacity: 0, scale: 0.5 }}
       animate={{
         x: 0,
         opacity: 1,
         scale: 1,
       }}
       transition={{
         duration:1,
       }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden md:inline-flex text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </m.div> */}
    </div>
  );
}

export default Hero;
