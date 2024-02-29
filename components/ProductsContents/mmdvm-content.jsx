import React from "react";

function MMDVMContent() {
  return (
    <div className=" ">
      <div className="">
        <div className=" p-2">
          <h3 className="text-center only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            Introduction:
          </h3>
          <p className="mt-2 text-justify">
            MMDVM (Multi-Mode Digital Voice Modem) is a groundbreaking
            technology that bridges the gap between diverse digital
            communication modes. As an avid Ham radio enthusiast, understanding
            how MMDVM is made, utilized, and its numerous benefits can greatly
            enhance your experience.
          </p>
          <h3 className="text-center mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            Benefits of MMDVM:
          </h3>
          <ul className="list-disc pl-6 mt-2 font-normal">
            <li>
              <b>Interoperability:</b> MMDVM breaks down protocol barriers,
              fostering communication among enthusiasts using different modes
              and networks.
            </li>
            <li>
              <b>Coverage Expansion: </b> By linking various repeaters and
              networks, MMDVM extends communication range, overcoming
              geographical limitations.
            </li>
            <li>
              <b>Innovation Hub:</b> Hams can experiment with different modes
              and protocols, pushing the boundaries of digital communication.
            </li>
            <li>
              <b>Community Growth:</b> MMDVM connects enthusiasts globally,
              facilitating knowledge sharing, skill development, and idea
              exchange.
            </li>
            <li>
              <b>Adaptability:</b> As new modes emerge, MMDVM can be updated to
              accommodate the latest advancements, ensuring long-term relevance.
            </li>
          </ul>
          <h3 className="text-center mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            In Conclusion:
          </h3>
          <p className="mt-2 text-justify">
            Embracing MMDVM technology amplifies the Ham radio experience.
            Seamlessly integrating various modes, MMDVM&apos;s innovative design
            and immense benefits open new horizons for global communication,
            learning, and camaraderie. Explore its potential, enhance your
            skills, and contribute to the vibrant Ham radio community.
          </p>
        </div>
      </div>
      <div className="p-2 flex justify-center ">
        <img
          className="rounded-md w-80 "
          src="/projects/mmdvm.jpg"
          alt="MMDVM"
        />
      </div>
    </div>
  );
}

export default MMDVMContent;
