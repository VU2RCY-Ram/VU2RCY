import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/hf/ic706.jpg",
      name: "Icom IC-706MK2G ",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "voice and digital modes in HF/VHF/UHF",
        },
        {
          displayName: "HF frequency",
          description: " 1.8mhz - 30mhz all mode",
        },
        {
          displayName: "VHF frequency",
          description: " 144mhz - 146mhz all mode",
        },
        {
          displayName: "UHF frequency",
          description: " 434mhz - 438mhz all mode",
        },
        {
          displayName: "using with",
          description: "digiface pro for all digital mode",
        },
        {
          displayName: "HF antenna",
          description: "6 element yagi with rotator yaesu G-800DXA",
        },
        {
          displayName: "HF antenna",
          description: "endfeed 160m to 10m",
        },
        {
          displayName: "VHF antenna",
          description: "5 element yagi for 50mhz",
        },
        {
          displayName: "power output",
          description: "HF : 100W, VHF : 50W, UHF : 25W",
        },
      ],
    },
    {
      imgSrc: "/hf/icomic-706mk2g.jpg",
      name: "Icom IC-706",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [
        {
          displayName: "purpose",
          description: "satilite communucation",
        },
        {
          displayName: "up converter",
          description: "dx patrol",
        },
        {
          displayName: "amplifier",
          description: "home made amplifier",
        },
        {
          displayName: "QO-100 antenna",
          description: "6ft dish with modified LNB",
        },
        {
          displayName: "using with",
          description: "analog and digiface pro for all digital mode",
        },
      ],
    },
    {
      imgSrc: "/hf/icomic-718hfallmodetransceiver.jpg",
      name: "Icom IC-718",
      description: "HF All-Mode Transceiver (Stand by rig)",
      metrics: [
        {
          displayName: "purpose",
          description: "voice and digital modes in HF ",
        },
        {
          displayName: "HF frequency",
          description: " 1.8mhz - 30mhz all mode",
        },

        {
          displayName: "using with",
          description: "digiface pro for all digital mode",
        },
        {
          displayName: "HF antenna",
          description: "endfeed homebrew antenna 160m to 10m",
        },
        {
          displayName: "HF antenna",
          description: "homebrew dipole 40m and 20m",
        },
        {
          displayName: "power output",
          description: "HF : 100W",
        },
      ],
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
