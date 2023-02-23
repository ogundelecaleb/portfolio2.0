import React, { lazy, Suspense, useTransition } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { motion as m } from "framer-motion";
import { PageInfo} from "../typings";
import pageInfo from "@/caleb-portfolio-20/schemas/pageInfo";
// import Spline from '@splinetool/react-spline';
const Spline = lazy(() => import("@splinetool/react-spline"));

type Props = {
  pageInfo: PageInfo;
};

function Main() {
  const {} = useTransition();
  return (
    <Spline scene="https://prod.spline.design/vVnyxRBOVoIn6-HS/scene.splinecode" />
  );
}

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name is ${pageInfo?.name}`,
      "i've got passion for web development",
      "<CodingIsMyHabit />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen relative pt-[30px] flex flex-col  justify-center items-center text-center overflow-hidden ">
      <div className="max-w-[300px] flex flex-col items-center text-center">
        {/* <BackgroundCircles /> */}
        {/* <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="absolute top-6 left-2">
          <Spline scene="https://prod.spline.design/FpOqd7Ta0oY6CevK/scene.splinecode" />
        </div>
      </Suspense> */}
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Main />
        </Suspense>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] text-center">
          {pageInfo?.role}
        </h2>

        <h1>
          <span className="text-lg lg:text-xl text-gray-400 font-semibold">
            {text}
          </span>
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
          url="https://www.linkedin.com/in/ogundele-caleb-b57880208"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/kailmarvel"
          fgColor="gray"
          bgColor="transparent"
        />
      </m.div>

      <div className="w-full absolute top-[10%] bg-[#39ff14]/10 left-0 h-[400px] -skew-y-12 -z-20"></div>
    </div>
  );
}

export default Hero;
