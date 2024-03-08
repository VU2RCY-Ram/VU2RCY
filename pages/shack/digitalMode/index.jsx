/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import EquipmentsList from "../../../components/shack/digitalMode/EquipmentsList";
import Breadcrumb from "@/components/Breadcrumb";
import WIP from "@/components/WIP";

export default function Index() {
  let UrlData = ["home", "shack", "digitalMode"];

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Digital Modes - VU2RCY </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" pt-24 container mx-auto p-4">
          <h1
            className={
              "selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold"
            }
          >
            Digital Modes
          </h1>
          <Breadcrumb data={UrlData} />
          <br />
          <WIP />
          {/* <EquipmentsList /> */}
        </div>
      </main>
    </div>
  );
}
