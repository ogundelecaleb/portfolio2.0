import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "./Loader";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      });

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <>
      {" "}
      {loading && (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
    
      <div className=" relative h-screen bg-[rgb(36,36,36)]  overflow-x-hidden ">
        <Navbar />
        <Loading />
        <Component key={router.pathname} {...pageProps} />
      </div>
    </>
  );
}
