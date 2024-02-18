import React from "react";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

function Accordion({ data }) {
  const [active, setActive] = useState(-1);

  return (
    <div>
      {data.map((ele, id) => {
        return (
          <AccordionItem
            toUrl={`/products/${ele.toUrl}`}
            imageUrl={ele.image}
            key={id}
            id={id}
            data={ele}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
