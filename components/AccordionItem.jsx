import React, { useState, useEffect } from "react";
import { BsCaretDown } from "react-icons/bs";

const AccordionItem = ({ data, active, setActive, id }) => {
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
    <div className="border border-purple-700 bg-[#00000038] rounded-md mb-4 shadow-2xl transition-all duration-500 ease-out">
      <div
        className="flex justify-between items-center p-4 cursor-pointer transition-all duration-500 ease-out"
        onClick={toggleAccordion}
      >
        <h2 className="font-medium text-lg transition-colors duration-900 ease-out ">
          {data.title}
        </h2>
        <BsCaretDown
          className={`duration-500 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? " max-h-96" : " max-h-0"
        }`}
      >
        <div className="p-4 border-t border-purple-700">{data.description}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
