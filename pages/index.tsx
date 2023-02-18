import type {NextPage} from "next"
import Hero from "@/components/Hero";
import Head from "next/head";
import Navbar from "@/components/Navbar";


const Home: NextPage = () => {
  return (
    <div className="  h-full bg-[rgb(36,36,36)] text-white ">
      <Head>
        <title>Caleb"s Portfolio</title>
      </Head>

      <Navbar/>
      <section id="hero">
        <Hero/>
      </section>
    </div>
  );
}

export default Home
