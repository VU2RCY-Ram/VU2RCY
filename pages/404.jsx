import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function NotFound() {
  const { theme } = useTheme();
  const [invertColor, setInvertColor] = useState();

  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (theme === "light") {
      {
        setInvertColor(true);
        setLoad(true);
      }
    }
    if (theme === "dark") {
      setInvertColor(false);
      setLoad(true);
    }
  }, [theme]);
  return (
    <div className="px-8 sm:px-14 md:px-24 lg:px-30 lg:mb-12">
      <Head>
        <title>404 - VU2RCY </title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" pt-24 container mx-auto p-4">
          {load && (
            <div className="max-w-sm mx-auto shadow-lg z-20 rounded-md overflow-hidden relative">
              {!invertColor && (
                <div
                  className={`dark-404 h-96 w-full absolute top-0 left-0 bg-cover bg-center`}
                ></div>
              )}
              {invertColor && (
                <div
                  className={`light-404 h-96 w-full absolute top-0 left-0 bg-cover bg-center`}
                ></div>
              )}
              <div className="relative">
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4 text-center dark:text-gray-100 text-black-900">
                    404: Lost Signal
                  </h2>
                  <p className="dark:text-gray-100 text-black-900 mb-6 text-center">
                    📡 Oops! It seems like we&apos;ve hit interference. This
                    page is off the airwaves. 🚀
                  </p>
                  <p className="dark:text-gray-100 text-black-900 mb-6 text-center">
                    Tune back in to the main frequency or explore other
                    wavelengths on our homepage.
                  </p>
                  <p className="dark:text-gray-100 text-black-900 mb-6 text-center">
                    Remember: In ham radio, the journey is the destination. 🌐🔍
                  </p>
                  <h3 className="dark:text-gray-100 text-black-900 text-xl text-center mb-4">
                    73&apos;s, VU2RCY
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
