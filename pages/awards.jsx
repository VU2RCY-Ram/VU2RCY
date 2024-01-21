import React, { useEffect, useState } from "react";
import Head from "next/head";
import NotFound from "./404";

const Home = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/listFiles")
      .then((response) => response.json())
      .then((data) => {
        setFiles(data.files);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching files:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {files && (
        <div className="px-1 sm:px-2 md:px-3  lg:px-6  lg:mb-12 mx-auto">
          <Head>
            <title>VU2RCY ✦ Awards</title>
            <link rel="icon" href="./logo.png" />
          </Head>
          <main className="max-w-screen">
            <div className=" mx-auto pt-16 md-pb-10 max-w-7xl">
              <h1 className="text-3xl font-bold mb-4 text-center">
                Awards Gallery
              </h1>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
              <ul className="columns-1 md:columns-4 gap-8 list-none">
                {files.map((file, index) => (
                  <li
                    className="p-2 break-inside-avoid"
                    key={index}
                    style={{ objectFit: "cover" }}
                  >
                    <a href={file.download_url} target="_blank">
                      <div className="image-container w-full h-full">
                        <img
                          src={file.download_url}
                          loading="lazy"
                          alt={file.name}
                          className="w-full h-auto"
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              {/* </div> */}
            </div>
          </main>
        </div>
      )}
      {!files && !loading && <NotFound />}
    </div>
  );
};

export default Home;
