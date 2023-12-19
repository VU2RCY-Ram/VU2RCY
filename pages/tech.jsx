/* eslint-disable react-hooks/rules-of-hooks */
import TechCard from "@/components/TechCard";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

export default function Tech() {
  const data = [
    {
      title: "Morse Code",
      id: 0,
      main: "/icons/morse-code-icon.svg",
      desc: "The original digital mode, using on/off keying of a continuous wave carrier for communication.",
      tag: "Morse Code",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Continuous Wave (CW)",
      id: 1,
      main: "/icons/cw-icon.svg",
      desc: "Modulated continuous wave (MCW) often used by repeaters for identification, including frequency-shift keying (FSK) for noisy conditions.",
      tag: "Continuous Wave",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "Analog Voice",
      id: 2,
      main: "/icons/analog-voice-icon.svg",
      desc: "Amplitude, frequency, and phase modulation applied to human voice signals for analog voice communication.",
      tag: "Analog Voice",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Digital Modes",
      id: 3,
      main: "/icons/digital-modes-icon.svg",
      desc: "Experience the world of ham radio through various digital communication modes like PSK31, SSTV, and more.",
      tag: "Digital Modes",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "XLX Reflectors",
      id: 4,
      main: "/icons/xlx-icon.svg",
      desc: "Connect with ham radio operators worldwide using XLX reflectors, enhancing your communication experience.",
      tag: "XLX Reflectors",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "D-STAR Reflector",
      id: 5,
      main: "/icons/dstar-icon.svg",
      desc: "Explore the D-STAR network by connecting to reflectors, enabling global ham radio communication.",
      tag: "D-STAR Reflector",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "MM-DVM",
      id: 6,
      main: "/icons/mmdvm-icon.svg",
      desc: "Enhance your ham radio experience with Multi-Mode Digital Voice Modem, connecting you to various modes.",
      tag: "MM-DVM",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "Slow Scan TV (SSTV)",
      id: 7,
      main: "/icons/sstv-icon.svg",
      desc: "Transmit and receive images over ham radio frequencies using Slow Scan TV mode, a visual delight.",
      tag: "SSTV",
      bg: "bg-gray-900",
      text: "text-gray-50",
    },
    {
      title: "APRS",
      id: 8,
      main: "/icons/aprs-icon.svg",
      desc: "Share real-time location information and messages with fellow ham operators using Automatic Packet Reporting System.",
      tag: "APRS",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "PSK31",
      id: 9,
      main: "/icons/psk31-icon.svg",
      desc: "Engage in text-based ham radio communication using Phase Shift Keying mode, an efficient way to exchange messages.",
      tag: "PSK31",
      bg: "bg-indigo-50",
      text: "text-indigo-500",
    },
    {
      title: "Echolink",
      id: 10,
      main: "/icons/echolink-icon.svg",
      desc: "Connect your ham radio station to the world using Echolink, bridging radio and the internet.",
      tag: "Echolink",
      bg: "bg-pink-300",
      text: "text-pink-800",
    },
    {
      title: "DMR (Digital Mobile Radio)",
      id: 11,
      main: "/icons/dmr-icon.svg",
      desc: "Experience the benefits of digital voice communication with DMR, connecting ham operators seamlessly.",
      tag: "DMR",
      bg: "bg-gray-900",
      text: "text-gray-100",
    },
    {
      title: "Single Sideband (SSB)",
      id: 12,
      main: "/icons/ssb-icon.svg",
      desc: "Delve into voice communication with Single Sideband mode, a cornerstone of ham radio operation.",
      tag: "Single Sideband",
      bg: "bg-orange-500",
      text: "text-orange-100",
    },
    {
      title: "Image Modes",
      id: 13,
      main: "/icons/image-modes-icon.svg",
      desc: "Transmitting either video or still images over radio frequencies, including Amateur Television and Slow-scan Television (SSTV).",
      tag: "Image Modes",
      bg: "bg-pink-300",
      text: "text-pink-800",
    },
    {
      title: "Text and Data",
      id: 14,
      main: "/icons/text-data-icon.svg",
      desc: "Sending text and data using various digital modes, such as Radioteletype (RTTY), Packet Radio, PSK, and more.",
      tag: "Text and Data",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "Spread Spectrum",
      id: 15,
      main: "/icons/spread-spectrum-icon.svg",
      desc: "Spreading signals over a wide bandwidth, utilizing both analog and digital techniques.",
      tag: "Spread Spectrum",
      bg: "bg-indigo-50",
      text: "text-indigo-500",
    },
    {
      title: "Special Activities",
      id: 16,
      main: "/icons/special-activities-icon.svg",
      desc: "Procedural activities in amateur radio commonly referred to as 'modes', including ALE, EME, Echolink, IRLP, and more.",
      tag: "Special Activities",
      bg: "bg-orange-500",
      text: "text-orange-100",
    },
  ];

  const [idNumber, setIdNumber] = useState(0);
  const changeId = (id) => {
    setIdNumber(id);
  };
  const rightArrow = () => {
    if (idNumber + 1 >= data.length) {
      setIdNumber(0);
    } else {
      setIdNumber(idNumber + 1);
    }
  };
  const leftArrow = () => {
    if (idNumber === 0) {
      setIdNumber(data.length - 1);
    } else {
      setIdNumber(idNumber - 1);
    }
  };

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <div className="min-h-[75vh] md:min-h-[73vh] px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 xl:px-80 mx-auto">
      <Head>
        <title>VU2RCY ✦ R&D</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen max-w-5xl mx-auto">
        <div className="pt-24 flex flex-col mx-auto">
          <h2 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-200 from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
            Ham Radio
          </h2>
          <p className="mt-8 font-normal lg:text-lg text-center md:w-[70%] mx-auto text-base md:text-[1.15rem] ">
            Embracing the world of ham radio, exploring frequencies, and
            connecting with fellow enthusiasts is a thrilling journey 📻🌐
          </p>
        </div>
        <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
          <button
            className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none "
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
          </button>
          <div class="bg-gradient-to-tr from-[#ff8080] via-[#ff6b9e] to-[#cc66cc] dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear">
            <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl ">
              <div className="flex mx-auto rounded-2xl relative w-full h-full bg-white">
                <Image
                  src={data[idNumber].main}
                  alt="ham radio"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl "
                />
              </div>
            </div>
            <div className=" basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500 ">
              <div className="flex mb-1 justify-between items-center ">
                <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold font-deca tracking-wide ">
                  {data[idNumber].title}
                </h3>
                <div
                  className={` ${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold`}
                >
                  {data[idNumber].tag}
                </div>
              </div>
              <p className=" text-[0.58rem] sm:text-[0.7rem] md:text-[0.9rem] md:text-base lg:text-[1.015rem] font-normal md:w-[90%] ">
                {data[idNumber].desc}
              </p>
            </div>
          </div>
          <button
            className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
          </button>
        </div>
        <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center ">
          {data.map((obj, i) => {
            return (
              <TechCard
                id={obj.id}
                alt={obj.title}
                main={obj.main}
                key={i}
                changeId={changeId}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
