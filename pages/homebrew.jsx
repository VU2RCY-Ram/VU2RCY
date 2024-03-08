import TechCard from "@/components/TechCard";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import Box from "@mui/material/Box";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Tech() {
  const data = [
    {
      title: "Morse Code",
      id: 0,
      main: "/homebrew/CwKey.jpg",
      desc: "The original digital mode, using on/off keying of a continuous wave carrier for communication.",
      tag: "Morse Code",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    // {
    //   title: "Continuous Wave (CW)",
    //   id: 1,
    //   main: "/homebrew/cw-icon.jpg",
    //   desc: "Modulated continuous wave (MCW) often used by repeaters for identification, including frequency-shift keying (FSK) for noisy conditions.",
    //   tag: "Continuous Wave",
    //   bg: "bg-yellow-50",
    //   text: "text-yellow-500",
    // },
    {
      title: "XLX Reflectors",
      id: 4,
      main: "/homebrew/xlx-icon.jpg",
      desc: "Connect with ham radio operators worldwide using XLX reflectors, enhancing your communication experience.",
      tag: "XLX Reflectors",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    {
      title: "D-STAR Reflector",
      id: 5,
      main: "/homebrew/dstar-icon.jpg",
      desc: "Explore the D-STAR network by connecting to reflectors, enabling global ham radio communication.",
      tag: "D-STAR Reflector",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "MM-DVM",
      id: 6,
      main: "/homebrew/MmdvmLogo.Jpg",
      desc: "Enhance your ham radio experience with Multi-Mode Digital Voice Modem, connecting you to various modes.",
      tag: "MM-DVM",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    {
      title: "APRS",
      id: 8,
      main: "/homebrew/AprsTracker.Jpg",
      desc: "Share real-time location information and messages with fellow ham operators using Automatic Packet Reporting System.",
      tag: "APRS",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    {
      title: "Echolink",
      id: 10,
      main: "/homebrew/EchoLink.jpg",
      desc: "Connect your ham radio station to the world using Echolink, bridging radio and the internet.",
      tag: "Echolink",
      bg: "bg-pink-300",
      text: "text-pink-800",
    },
    {
      title: "DMR (Digital Mobile Radio)",
      id: 11,
      main: "/homebrew/dmr-icon.png",
      desc: "Experience the benefits of digital voice communication with DMR, connecting ham operators seamlessly.",
      tag: "DMR",
      bg: "bg-gray-900",
      text: "text-gray-100",
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
        <title>VU2RCY - Homebrew </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen max-w-5xl mx-auto">
        <div className="pt-24 flex flex-col mx-auto">
          <h1 className="bg-gradient-to-br dark:selection:text-white/80 selection:text-black/70 to-yellow-200 from-red-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-deca font-bold ">
            Ham Radio
          </h1>
          <p className="mt-8 font-normal lg:text-lg text-center md:w-[70%] mx-auto text-base md:text-[1.15rem] ">
            Embracing the world of ham radio, exploring frequencies, and
            connecting with fellow enthusiasts is a thrilling journey 📻🌐
          </p>
        </div>
        <div className="flex mx-auto justify-between mt-12 space-x-4 md:space-x-6 lg:space-x-auto items-center">
          <button
            className="font-space group bg-[#c7dada] dark:bg-[#939f9f] dark:hover:bg-[#828686] h-max w-max hover:bg-[#f7eeff]  px-1 py-1 rounded-full select-none hidden md:block"
            onClick={leftArrow}
          >
            <HiOutlineArrowLongLeft className=" w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#00bdbd]" />
          </button>
          <div className="bg-gradient-to-tr from-[#ff8080] via-[#ff6b9e] to-[#cc66cc] dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] flex p-2 py-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-[0.8rem] md:rounded-[1.2rem] lg:rounded-[1.6rem] mx-auto items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-24 md:h-max lg:space-x-6 transition-all duration-700 ease-linear">
            <div className="basis-[30%] lg:basis-[25%] h-16 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl hidden md:block ">
              <div className=" mx-auto rounded-2xl relative w-full h-full bg-[transparent]">
                <Image
                  src={data[idNumber].main}
                  alt="ham radio"
                  fill
                  placeholder="empty"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" select-none p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full flex mx-auto object-contain rounded-2xl hidden md:block"
                />
              </div>
            </div>
            <div className=" basis-[70%] lg:basis-[75%] mx-auto transition-all duration-500 ">
              <div className="flex mb-1 justify-between items-center ">
                <h3 className="text-[0.7rem] sm:text-sm md:text-base lg:text-xl font-semibold font-deca tracking-wide ">
                  {data[idNumber].title}
                </h3>
                <div
                  className={` ${data[idNumber].bg} ${data[idNumber].text} text-[0.45rem] sm:text-[0.6rem] md:text-xs sm:px-1 lg:px-2 rounded-xl h-max fon font-bold hidden md:block`}
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
            className="bg-[#fce4fe] dark:bg-[#a995ab] dark:hover:bg-[#7a747b] h-max w-max hover:bg-[#f7eeff] group px-1 py-1 rounded-full select-none hidden md:block"
            onClick={rightArrow}
          >
            <HiOutlineArrowLongRight className="w-5 h-3 sm:w-6 sm:h-4 md:w-8 md:h-5 lg:w-10 lg:h-6 stroke-[3] group-hover:fill-[#dd44eb]" />
          </button>
        </div>
        {/* <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center overflow-hidden"> */}

        <ImageList className="my-12" variant="masonry" cols={4} gap={8}>
          {data.map((obj, i) => {
            return (
              <ImageListItem key={obj.img}>
                <img
                  src={obj.main}
                  className=" rounded-lg cursor-pointer select-none group-hover:scale-[1.1] transition-all duration-700 object-contain"
                  alt={obj.alt}
                  //           sizes="(max-width: 768px) 100vw,
                  // (max-width: 1200px) 50vw,
                  // 33vw"
                  onClick={() => {
                    changeId(i);
                  }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        {/* </div> */}

        {/* <div className="mt-12 pb-12 grid grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-[80%] sm:w-[75%] md:w-[70%] mx-auto items-center justify-items-center justify-center place-content-center overflow-hidden">
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
        </div> */}
      </main>
    </div>
  );
}
