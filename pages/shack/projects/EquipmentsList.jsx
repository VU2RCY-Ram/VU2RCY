import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/projects/catInterface.jpg",
      name: "CAT Interface",
      description: "Computer-Aided Transceiver Interface",
      metrics: [],
    },
    {
      imgSrc: "/projects/cwInterfaceWithDb-9Connector.jpg",
      name: "CW Interface",
      description: "Continuous Wave Interface with DB-9 Connector",
      metrics: [],
    },
    {
      imgSrc: "/projects/mmdvm.jpg",
      name: "MMDVM",
      description: "Multi-Mode Digital Voice Modem",
      metrics: [],
    },
    {
      imgSrc: "/projects/mmdvmblue.jpg",
      name: "MMDVM Blue",
      description: "Blue-colored Multi-Mode Digital Voice Modem",
      metrics: [],
    },
    {
      imgSrc: "/projects/powerSupply.jpg",
      name: "Power Supply",
      description: "General Power Supply",
      metrics: [],
    },
    {
      imgSrc: "/projects/rpisetup.jpg",
      name: "Raspberry Pi Setup",
      description: "Setup for Raspberry Pi",
      metrics: [],
    },
    {
      imgSrc: "/projects/uhfHandtAntenna.jpg",
      name: "UHF Handheld Antenna",
      description: "UHF Handheld Radio Antenna",
      metrics: [],
    },
    {
      imgSrc: "/projects/usrpmaster.jpg",
      name: "USRP Master",
      description: "Universal Software Radio Peripheral Master",
      metrics: [],
    },
    {
      imgSrc: "/projects/voltage&PowerReader.jpg",
      name: "Voltage & Power Reader",
      description: "Device for Reading Voltage and Power",
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
