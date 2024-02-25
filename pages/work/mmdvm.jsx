/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";
import mmdvm from "../../public/mmdvm.jpg";

export default function MMDVM() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>work ✦ MMDVM </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              MMDVM
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Digital Mode
            </h4>
          </div>
          {/* <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href=""
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
            <div className=" group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300">
              <Link
                href=""
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  "
              >
                <FaGithub className=" dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white " />
                <p>Code</p>
              </Link>
            </div>
          </div> */}
          <div className="mx-auto flex flex-col">
            <h3 className="mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
              Introduction:
            </h3>
            <p className="mt-2">
              MMDVM (Multi-Mode Digital Voice Modem) is a groundbreaking
              technology that bridges the gap between diverse digital
              communication modes. As an avid Ham radio enthusiast,
              understanding how MMDVM is made, utilized, and its numerous
              benefits can greatly enhance your experience.
            </p>
            <h3 className="mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
              Making MMDVM:
            </h3>
            <p className="mt-2">
              MMDVM is crafted by integrating hardware and software components,
              enabling compatibility with various digital radio protocols. Its
              core comprises microcontrollers, transceivers, and a firmware that
              facilitates seamless mode transitions.
            </p>
            <h3 className="mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
              Benefits of MMDVM:
            </h3>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Interoperability: MMDVM breaks down protocol barriers, fostering
                communication among enthusiasts using different modes and
                networks.
              </li>
              <li>
                Coverage Expansion: By linking various repeaters and networks,
                MMDVM extends communication range, overcoming geographical
                limitations.
              </li>
              <li>
                Innovation Hub: Hams can experiment with different modes and
                protocols, pushing the boundaries of digital communication.
              </li>
              <li>
                Community Growth: MMDVM connects enthusiasts globally,
                facilitating knowledge sharing, skill development, and idea
                exchange.
              </li>
              <li>
                Adaptability: As new modes emerge, MMDVM can be updated to
                accommodate the latest advancements, ensuring long-term
                relevance.
              </li>
            </ul>
            <h3 className="mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
              In Conclusion:
            </h3>
            <p className="mt-2">
              Embracing MMDVM technology amplifies the Ham radio experience.
              Seamlessly integrating various modes, MMDVM&apos;s innovative
              design and immense benefits open new horizons for global
              communication, learning, and camaraderie. Explore its potential,
              enhance your skills, and contribute to the vibrant Ham radio
              community.
            </p>
          </div>

          <Image
            loading="lazy"
            src={mmdvm}
            alt=""
            width="max"
            className="drop-shadow-2xl mt-10"
          />
        </div>
      </main>
    </div>
  );
}
