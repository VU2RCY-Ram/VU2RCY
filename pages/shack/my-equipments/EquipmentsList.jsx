import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/my_equipments/13.8v35aPowerSuply.jpg",
      name: "Power Supply",
      description: "13.8V 35A Power Supply",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/13.8vPowerSuply.jpg",
      name: "Power Supply",
      description: "13.8V Power Supply",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/alincoDj-md5DmrVhf-uhfHandy.jpg",
      name: "Alinco DJ-MD5",
      description: "VHF/UHF Handy",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/baofengUv-5rVhf-uhfHandy.jpg",
      name: "Baofeng UV-5R",
      description: "VHF/UHF Handy",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/dimendSx-1100(1).jpg",
      name: "Dimend SX-1100",
      description: "Radio Equipment",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/icomHandy.jpg",
      name: "Icom Handy",
      description: "Handheld Radio",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/icomIc-7000.jpg",
      name: "Icom IC-7000",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/icomIc-7000Hf-vhf-uhfAllModeTransceiver.jpg",
      name: "Icom IC-7000",
      description: "HF/VHF/UHF All-Mode Transceiver",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/icomIc-718HfAllModeTransceiver.jpg",
      name: "Icom IC-718",
      description: "HF All-Mode Transceiver",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/icomIc-t90aMultibandTransceiver.jpg",
      name: "Icom IC-T90A",
      description: "Multiband Transceiver",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/img_20231209_125138.jpg",
      name: "Image",
      description: "Image Capture",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/kenwoodPs-30PowerSuply.jpg",
      name: "Kenwood PS-30",
      description: "Power Supply",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/kenwoodT60.jpg",
      name: "Kenwood T60",
      description: "Radio Equipment",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/kenwoodTm-d7.jpg",
      name: "Kenwood TM-D7",
      description: "Radio Equipment",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/kenwoodTm-v71Vhf-uhfTransceiver.jpg",
      name: "Kenwood TM-V71",
      description: "VHF/UHF Transceiver",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/networkTransceiver.jpg",
      name: "Network Transceiver",
      description: "Networking Device",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/vhf-uhfSatelliteAntenna.jpg",
      name: "VHF/UHF Satellite Antenna",
      description: "Satellite Communication",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/vhf-uhfSwrMeter.jpg",
      name: "VHF/UHF SWR Meter",
      description: "SWR Measurement",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/workmanSwr&powerMeter.jpg",
      name: "Workman SWR & Power Meter",
      description: "SWR and Power Measurement",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/wouxunVhf-uhfHandy.jpg",
      name: "Wouxun VHF/UHF Handy",
      description: "Handheld Radio",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/yaesuFp-757hp.jpg",
      name: "Yaesu FP-757HP",
      description: "Power Supply",
      metrics: [],
    },
    {
      imgSrc: "/my_equipments/yaesuFt-847Hf-vhf-uhfAllModeTransceiver.jpg",
      name: "Yaesu FT-847",
      description: "HF/VHF/UHF All-Mode Transceiver",
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
