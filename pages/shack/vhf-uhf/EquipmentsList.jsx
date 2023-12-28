import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/uhf_vhf/AlincoDrDm500.jpeg",
      name: "Alinco DR-DM500",
      description: "Radio Equipment",
      metrics: [],
    },
  ];

  const { systemTheme, theme, setTheme } = useTheme();
  const [cardBackground, setCardBackground] = useState("display-none");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (theme === "light") {
      {
        setCardBackground(
          "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] bg-gradient-to-bl from-orange-400  to-yellow-300 text-black"
        );
        setLoad(true);
      }
    }
    if (theme === "dark") {
      setCardBackground(
        "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-900 to-stone-900 text-white"
      );
      setLoad(true);
    }
  }, [theme]);
  return (
    <div>
      {load && (
        <ul className="columns-1 md:columns-3 gap-8 list-none">
          {data.map((ele, id) => (
            <li className="mb-5" key={id}>
              {<EquipmentsCard data={ele} cardBackground={cardBackground} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentsList;
