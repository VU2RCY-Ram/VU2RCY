import React from "react";
import ContactForImpedance from "../ContactForImpedance";

function LoraContent() {
  return (
    <div className=" ">
      <div className="">
        <div className=" p-2">
          <h3 className="text-center only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            Introduction:
          </h3>
          <p className="mt-2 text-justify">
            The world of LoRa satellite ground stations, an integral component
            of the{" "}
            <span className="underline text-blue-500 hover:underline cursor-pointer">
              <a
                href="https://tinygs.com/station/VU2RCY@859393562"
                title="vu2rcy's TinyGS data"
                target="_blank"
              >
                TinyGS
              </a>
            </span>{" "}
            network. These stations form a distributed network globally,
            enabling communication with LoRa satellites, weather probes, and
            other flying objects. Designed with cheap and versatile modules,
            they offer amateur radio enthusiasts a gateway to long-range,
            low-power data transmission for various applications.
          </p>
          <h3 className="text-center mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            Benefits of LoRa GS:
          </h3>
          <ul className="list-disc pl-6 mt-2 font-normal">
            <li>
              <b>Expanded Reach:</b> LoRa satellite ground stations extend the
              reach of ham radio operators, allowing communication with
              satellites orbiting the Earth, thus enabling global connectivity.
            </li>
            <li>
              <b>Versatility: </b> These ground stations facilitate two-way
              communication with LoRa satellites, enabling diverse applications
              such as IoT connectivity and remote sensing, enriching the amateur
              radio experience.
            </li>
            <li>
              <b>Low-Cost Solution: </b> Equipped with affordable and versatile
              modules, LoRa satellite ground stations offer a cost-effective
              means for ham radio enthusiasts to engage in satellite
              communication.
            </li>
            <li>
              <b>Exploration and Experimentation: </b> Access to LoRa satellite
              ground stations provides opportunities for exploration and
              experimentation within the ham radio community, fostering learning
              and innovation in satellite communication technology.
            </li>
          </ul>
          <h3 className="text-center mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            In Conclusion:
          </h3>
          <p className="mt-2 text-justify">
            LoRa satellite ground stations represent a significant advancement
            in amateur radio technology, offering enthusiasts the ability to
            communicate with satellites orbiting the Earth. With benefits
            including expanded reach, versatility, affordability, and
            opportunities for exploration, these ground stations enrich the ham
            radio experience and contribute to the growth and innovation of
            satellite communication within the community.
          </p>
        </div>
      </div>
      <div className="p-2 flex justify-center ">
        <img
          className="rounded-md w-80 "
          src="/products/lora/lora.jpeg"
          alt="lora ground station"
        />
      </div>
      <div className="p-2 flex justify-center ">
        <br />
        <ContactForImpedance />
      </div>
    </div>
  );
}

export default LoraContent;
