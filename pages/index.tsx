import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Hero from "@/components/Hero";
import Head from "next/head";
import { motion as m } from "framer-motion";
import { Social, Project, Skill, PageInfo } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
// import { fetchProjects } from "../utils/fetchProjects";
// import { fetchSkills } from "../utils/fetchSkills";
// import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  // socials: Social[];
  // projects: Project[];
  // socials: Social[];
};

const Home = ({  pageInfo}: Props) => {
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
        <Hero  pageInfo={pageInfo} />
      </section>
    </m.div>
  );
}; 

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  // const socials: Social[] = await fetchSocials();
  // const socials: Social[] = await fetchSocials();
  // const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      // socials,
      // projects,
      // socials,
    },


    revalidate: 10,
  };
};
