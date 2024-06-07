import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Hero from "@/components/Hero";
import Head from "next/head";
import { motion as m } from "framer-motion";
// import { Social, Project, Skill, PageInfo } from "../typings";
// import { fetchPageInfo } from "../utils/fetchPageInfo";
// import { fetchProjects } from "../utils/fetchProjects";
// import { fetchSkills } from "../utils/fetchSkills";
// import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  // pageInfo: PageInfo;
  // socials: Social[];
  // projects: Project[];
  // socials: Social[];
};

const Home = ({  }: Props) => {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full  h-full bg-[rgb(36,36,36)] text-white "
    >
      <Head>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Official Portfolio for Samuel Otigba"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>Caleb's Portfolio</title>
      </Head>

      {/* <Navbar/> */}
      <section id="hero">
        <Hero />
      </section>
    </m.div>
  );
}; 

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   // const socials: Social[] = await fetchSocials();
//   // const socials: Social[] = await fetchSocials();
//   // const projects: Project[] = await fetchProjects();

//   return {
//     props: {
//       pageInfo,
//       // socials,
//       // projects,
//       // socials,
//     },


//     revalidate: 10,
//   };
// };
