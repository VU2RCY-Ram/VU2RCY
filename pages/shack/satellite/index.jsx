import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import WIP from "@/components/WIP";

export default function Index() {
  // remove these

  //
  let UrlData = ["home", "shack", "satellite"];

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Satellite - VU2RCY </title>
        <link rel="icon" href="./logo.png" />
      </Head>

      <main className="  max-w-screen ">
        <br />
        <br />
        <h1
          className={
            "selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold"
          }
        >
          Satellite
        </h1>
        <Breadcrumb data={UrlData} />
        <br />
        {/*  */}
        <WIP />
        {/*  */}
      </main>
    </div>
  );
}
