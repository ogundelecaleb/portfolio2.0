import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <div className=" relative h-screen bg-[rgb(36,36,36)]  overflow-x-hidden " >
    <Navbar />
    <AnimatePresence initial={false}>
     <Component {...pageProps} /> 
    </AnimatePresence>
    
  </div>)
}
