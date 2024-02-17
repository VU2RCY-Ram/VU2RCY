import React, { useState, useEffect } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { useRouter } from "next/router";
const AccordionItem = ({ data, active, setActive, id, imageUrl, toUrl }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(active === id);

  useEffect(() => {
    setIsOpen(active === id);
  }, [active]);

  const toggleAccordion = () => {
    if (active === id) {
      setActive(-1);
    } else setActive(id);
  };

  return (
    <div
      className="border border-purple-700 bg-[#10041438] rounded-md mb-4 shadow-2xl transition-all duration-300 ease-out"
      onClick={() => {
        router.push(toUrl);
      }}
    >
      <div className="flex justify-between items-center p-2 px-4 cursor-pointer transition-all duration-300 ease-out">
        <h2 className="font-medium text-lg transition-colors duration-900 ease-out ">
          {data.title}
        </h2>

        <span
          className="duration-300 border-purple-700 border p-3 rounded-3xl shadow-2xl"
          onClick={(e) => {
            toggleAccordion();
            e.stopPropagation();
          }}
        >
          <BsCaretDownFill
            className={`duration-300 transform ${isOpen ? "rotate-180" : ""}  `}
          />
        </span>
      </div>
      <div
        className={`overflow-hidden cursor-pointer transition-all duration-300 
        ${isOpen ? "max-h-96" : " max-h-0"}
        `}
      >
        <div className="p-4 pb-5 border-t border-purple-700 ">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 rounded-sm p-2">
              <img
                src={imageUrl}
                class=" w-full rounded-lg md:max-w-none md:h-auto"
                alt={data.title}
              />
            </div>
            <div class="md:w-1/2 p-2">{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
