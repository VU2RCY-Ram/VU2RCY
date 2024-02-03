import Head from "next/head";
import EquipmentsList from "./EquipmentsList";

export default function Index() {
  return (
    <div className="px-8 sm:px-14 md:px-24 lg:px-30 lg:mb-12">
      <Head>
        <title>VHF-UHF ✦ VU2RCY </title>
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
