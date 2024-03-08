import React from "react";
import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import MMDVMContent from "@/components/ProductsContents/mmdvm-content";

function MMDVM() {
  let UrlData = ["home", "products", "mmdvm"];

  return (
    <div className="px-8 sm:px-14 md:px-24 lg:px-30 lg:mb-12">
      <Head>
        <title>Products - MMDVM </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" pt-24 container mx-auto p-4">
          <h1
            className={
              "selection:text-black/40 capitalize dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold"
            }
          >
            MMDVM
          </h1>
          <Breadcrumb data={UrlData} />
          <br />
          <MMDVMContent />
        </div>
      </main>
    </div>
  );
}

export default MMDVM;
