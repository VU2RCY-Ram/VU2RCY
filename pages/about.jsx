import Head from "next/head";
import Image from "next/image";
import aboutImage from "../public/VU2RCY.jpg";
import { useTheme } from "next-themes";
import CategoryCard from "@/components/CategoryCard";
import love_black from "../public/love-black.svg";
import love_white from "../public/love-white.svg";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import HorizontalLine from "@/components/HorizontalLine";

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
  }, []);
  const contactMeDescription = `If you share the same passion for Ham Radio or want to connect for
              tech discussions, feel free to reach out.`;
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>VU2RCY - About</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className=" mx-auto pt-16  max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              About
            </h1>
            <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-purple-50/10 shadow-purple-200 ">
              <Image
                src={aboutImage}
                placeholder="blur"
                height={600}
                width={600}
                className="rounded-2xl select-none drop-shadow-md shadow-purple-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                alt="ham radio enthusiast"
                priority
              />
            </div>
            <div className="text-center mx-auto mt-8 z-20">
              <h3 className="mx-auto  font-bold text-lg lg:text-xl xl:text-2xl">
                M G Ramachandran
                <span className="inline-flex items-baseline"></span>
              </h3>
            </div>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12 md:leading-8 leading-5 font-normal text-justify text-base">
              A passionate Ham Radio enthusiast who loves exploring the world of
              radio communication and technology. I believe in the magic of
              radio waves and the global connections they enable Experienced in
              various radio protocols, propagation, and building radio setups.
            </p>
          </div>
          <HorizontalLine />
          <div className="flex items-center flex-col mt-6 mb-12">
            <div className="bg-purple-300 w-36 h-36 rounded-lg p-4 select-none mt-6 mb-12 ">
              <div className="bg-purple-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2">
                <div className="basis-[60%] text-5xl font-black ">
                  <h2 className="text-border mt-1 ">
                    {new Date().getUTCFullYear() - 1988}
                  </h2>
                </div>
                <div className="basis-[30%] text-xs mt-3 font-bold">
                  Years of Experience
                </div>
              </div>
            </div>
            <div className=" mx-auto">
              <p className=" text-[0.92rem] tracking-normal leading-5  font-normal text-justify">
                Over my {new Date().getUTCFullYear() - 1988} years in Ham Radio,
                I&apos;ve explored diverse bands and modes, delving deep into
                its captivating realm. From 1.8MHz on 160M to 28MHz on 10M, HF
                has been my playground. VHF offered thrilling opportunities at
                50MHz and 144MHz, while UHF presented challenges at 435MHz with
                my homebrewed MMDVM hotspot. APRS on 144.390MHz and RMS HF
                systems like PACTOE-1, PACTOE-2, and PACTOE-3 enriched my
                experience, along with the marvel of satellite communications.
                Ham radio never ceases to amaze me!
              </p>
            </div>
          </div>
          <Contact ContactDescription={contactMeDescription} />
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              73&apos;s
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="-mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="-mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
