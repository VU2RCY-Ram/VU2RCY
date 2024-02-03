/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import EquipmentsList from "./EquipmentsList";

export default function Index() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>APRS ✦ VU2RCY </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" pt-24 container mx-auto p-4">
          <EquipmentsList />
        </div>
      </main>
    </div>
  );
}
