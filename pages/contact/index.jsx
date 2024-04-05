import ContactMeForm from "@/components/ContactMeForm";
import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    console.clear();
    // console.log.apply(console, [
    //   "%c VU2RCY !!\n",
    //   "color: #fff; background: #8000ff; padding:5px 0;",
    // ]);
  }, []);

  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>VU2RCY - Contact</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className="pt-24 flex flex-col items-cen mx-auto">
          <h1
            className={
              "selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
            }
          >
            Contact Me!
          </h1>
        </div>
        <div className="mt-20 mb-20 min-h-[5vh] md:min-h-[48vh] ">
          <ContactMeForm />
        </div>
      </main>
    </div>
  );
}
