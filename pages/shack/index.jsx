import Head from "next/head";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import shackImage from "public/vu2rcyShack.jpg";
export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const shackEquipmentData = [
    {
      name: "My Projects",
      description:
        "Embark on a journey of experimentation and creativity with various technologies and tools for general projects for my shack. Exploring new possibilities and bring ideas to life.",
      link: "projects",
    },
    {
      name: "My Equipment's",
      description:
        "Explore a diverse array of ham radios, each with a unique purpose in my shack. From HF to VHF/UHF, satellite to digital modes, delve into amateur radio with cutting-edge equipment.",
      link: "my-equipments",
    },
    {
      name: "Antenna",
      description:
        "The antenna system, carefully tuned and optimized, is a key component. It maximizes signal performance, enabling successful communication across specific frequency bands and modes.",
      link: "antenna",
    },
    {
      name: "VHF/UHF",
      description:
        "Resulting from years of refinement, my VHF/UHF gear includes KENWOOD TMV-71V and MMDVM transceivers. It excels in local communication, satellite tracking, and VHF/UHF contests.",
      link: "vhf-uhf",
    },
    {
      name: "HF",
      description:
        "My HF setup, featuring ICOM IC-706 MK2G, IC-718, and IC-700 transceivers, is the core of my shack. Enhanced by Digiface Pro, it excels in long-distance DX contacts and amateur radio contests",
      link: "hf",
    },
    {
      name: "APRS",
      description:
        "My APRS setup includes a custom station with a TNC, GPS unit, and VHF transceiver. It's vital for real-time location-based data sharing within the amateur radio community.",
      link: "aprs",
    },
    {
      name: "Satellite",
      description:
        "My satellite setup comprises specialized tracking software, high-gain antennas, and a dedicated transceiver, enabling communication with amateur radio satellites and the ISS.",
      link: "satellite",
    },
    {
      name: "Digital Modes",
      description:
        "Explore diverse digital modes in ham radio for projects, enhancing communication in my shack. From FT8 to PSK31, discover innovative ways to connect with the world.",
      link: "digitalMode",
    },
  ];
  const [shackEquipment, SetShackEquipment] = useState([]);
  useEffect(() => {
    SetShackEquipment(shackEquipmentData);
  }, [theme]);

  return (
    <div className="px-1 sm:px-2 md:px-3 lg:mb-2 lg:px-3 mx-auto max-w-[90%]">
      <Head>
        <title>shack - VU2RCY </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className=" pt-24 container mx-auto p-4">
          <h1 className="text-center selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Shack Equipment
          </h1>
          <div className="mt-8 flex flex-wrap justify-center">
            {shackEquipment.map((equipment, index) => (
              <div
                key={index}
                className={`cursor-pointer duration-100 hover:shadow-2xl mb-4 drop-shadow-xl flex flex-col md:flex-row space-y-4 md:space-y-0 mx-6 md:mx-4 lg:mx-4 w-full sm:w-full md:w-6/12 lg:w-5/12 rounded-[1.4rem] p-4 ${
                  theme !== "light"
                    ? "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600"
                    : "bg-gradient-to-bl from-pink-200 via-indigo-300 to-purple-200"
                }`}
                onClick={() => {
                  router.push(`shack/${equipment.link}`);
                }}
              >
                <article>
                  <h2 className="mx-auto text-center font-deca font-bold text-2xl dark:text-purple-500 text-white">
                    {equipment.name}
                  </h2>
                  <p className="font-normal sm:text-[0.95rem] md:text-base text-justify">
                    {equipment.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
          <Image src={shackImage} alt="shack photo" className="rounded" />
        </div>
      </main>
    </div>
  );
}
