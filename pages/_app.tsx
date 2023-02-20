import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps,router }: AppProps) {
  return(
  <div className=" relative h-screen bg-[rgb(36,36,36)]  overflow-x-hidden " >
    <Navbar />
    <AnimatePresence initial={false}>
     <Component key={router.pathname}  {...pageProps} /> 
    </AnimatePresence>
    
  </div>)
}
