import type { NextPage } from "next";
import Hero from "@/components/Hero";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion as m } from "framer-motion";

const Home: NextPage = () => {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full  h-full bg-[rgb(36,36,36)] text-white "
    >
      <Head>
        <title>Caleb"s Portfolio</title>
      </Head>

      {/* <Navbar/> */}
      <section id="hero">
        <Hero />
      </section>
    </m.div>
  );
};

export default Home;
