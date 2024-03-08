import Image from "next/image";
import { TfiEmail, TfiTwitterAlt, wh } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";

import Rectangle from "../public/Rectangle.svg";

const Contact = () => {
  return (
    <div
      className="h-full xl:px-12 p-6 sm:p-8 md:px-10 lg:pt-10 bg-gradient-to-tr dark:from-[#f6ebeb20] dark:to-[#fff8ec20] from-[#f6ebeb90] to-[#fff8ec60] 
     mx-auto rounded-3xl shadow-2xl drop-shadow-2xl "
    >
      <div
        id="contact"
        className="flex flex-col align-middle sm:flex-row
     mx-auto items-center justify-center lg:justify-around "
      >
        <div className=" order-1 lg:order-2 sm:w-[25%] md:w-[30%]  lg:flex top-6 right-4 md:top-10 md:right-12 lg:basis-[40%]">
          <Image
            src={Rectangle}
            alt="contact"
            width={750}
            height={650}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            loading="lazy"
            className=" select-none backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[16rem] xl:h-[18rem] "
          />
        </div>
        <div className="order-2 sm:w-[75%] md:w-[70%] lg:basis-[60%] flex flex-col content-around justify-around space-y-6 cirGradient bg-clip-text">
          <h3 className="text-center tracking-normal bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold font-deca selection:text-gray-700 dark:selection:text-white/90 ">
            Get in touch
          </h3>
          <p className="text-sm md:text-md font-normal lg:text-lg xl:text-xl text-justify ">
            In the captivating realm of Ham Radio, I&apos;ve delved into diverse
            fields. For more information, feel free to contact me!
          </p>
          <div>
            <div
              style={{ marginTop: "-8%" }}
              className=" text-[0.7rem] md:text-[0.85rem]  lg:text-base flex flex-wrap justify-around align-middle text-center tracking-normal bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl md:text-3xl font-bold font-deca selection:text-gray-700 dark:selection:text-white/90 "
            >
              <a
                href="https://wa.me/7388407388"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex align-middle items-center font-jak sm:text-lg md:text-xl space-x-1 w-max p-2 font-extrabold"
              >
                <BsWhatsapp className="text-[#ff40e6] dark:text-[#ff40e6] h-3 w-3 md:h-4 md:w-4 " />
                <h5 className="text-transparent dark:text-[#ff339c]">VU2RCY</h5>
              </a>
              <a
                href="https://twitter.com/vu2rcy"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex align-middle items-center font-jak font-bold space-x-1 w-max p-2"
              >
                <TfiTwitterAlt className="text-[#518FC7] dark:text-[#2498fe] h-3 w-3 md:h-4 md:w-4 " />
                <h5 className="text-transparent dark:text-[#2498fe]">
                  Twitter / X
                </h5>
              </a>
              <a
                href="mailto:vu2rcy+social@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex align-middle items-center font-jak font-bold space-x-1 w-max p-2"
              >
                <TfiEmail className="text-[#CA6298] dark:text-[#ff339c] h-3 w-3 md:h-4 md:w-4 " />
                <h5 className="text-transparent dark:text-[#ff339c]">Mail</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
