import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/APRS/aprsWeatherStation.jpg",
      name: "APRS Weather Station",
      description: "Automatic Packet Reporting System Weather Station",
      metrics: [
        {
          displayName: "purpose",
          description: "Sending weather data to APRS server",
        },
        {
          displayName: "Sensor",
          description: "weather sensor",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/APRS/kenwoodTm-d7.jpg",
      name: "Kenwood TM-D7",
      description: "144 / 430 MHz FM Dual Bander",
      metrics: [
        {
          displayName: "purpose",
          description: "APRS",
        },

        {
          displayName: "Power output",
          description: "6W",
        },
      ],
      contactForImpedance: false,
    },
    {
      imgSrc: "/APRS/yaesu2600m+tnc.jpg",
      name: "Yaesu 2600M + TNC",
      description: "Yaesu 2600M with Terminal Node Controller",
      metrics: [
        {
          displayName: "purpose",
          description: "APRS digipeater 144.390Mhz",
        },
        {
          displayName: "Connectivity",
          description: "Ethernet ",
        },
        {
          displayName: "Power output",
          description: "50W",
        },
      ],
      contactForImpedance: false,
    },
  ];

  const { theme } = useTheme();
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
