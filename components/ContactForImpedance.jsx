import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function ContactForImpedance() {
  return (
    <div>
      <a
        href="https://wa.me/7388407388"
        target="_blank"
        rel="noopener noreferrer"
        className=" flex align-middle items-center font-jak sm:text-lg md:text-xl space-x-1 w-max p-2 font-extrabold"
      >
        <BsWhatsapp className=" dark:text-[#ff339c] text-fuchsia-700 h-3 w-3 md:h-4 md:w-4 " />
        <h5 className=" dark:text-[#ff339c] text-fuchsia-700">
          Contact For Impedance
        </h5>
      </a>
    </div>
  );
}

export default ContactForImpedance;
