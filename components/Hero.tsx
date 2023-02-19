import React, { lazy, Suspense } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
// import Spline from '@splinetool/react-spline';
const Spline = lazy(() => import("@splinetool/react-spline"));

type Props = {};

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
      {/* <BackgroundCircles /> */}
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <div className="absolute top-6 left-2">
          <Spline scene="https://prod.spline.design/FpOqd7Ta0oY6CevK/scene.splinecode" />
        </div>
      </Suspense>

      <div>
        <Spline scene="https://prod.spline.design/vVnyxRBOVoIn6-HS/scene.splinecode" />
      </div>

      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#39ff14" />
      </h1>
    </div>
  );
}

export default Hero;
