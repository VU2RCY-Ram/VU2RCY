import EquipmentsCard from "./EquipmentsCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const EquipmentsList = () => {
  const data = [
    {
      imgSrc: "/projects/catInterface.jpg",
      name: "CAT Interface",
      description: "Computer-Aided Transceiver Interface",
      metrics: [
        {
          displayName: "purpose",
          description: "rig control",
        },
        {
          displayName: "connection",
          description: "usb computer to rig CAT connection",
        },
        {
          displayName: "Used",
          description: "for digital mode and rig control with software",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/projects/cwInterfaceWithDb-9Connector.jpg",
      name: "CW Interface",
      description: "Continuous Wave Interface with DB-9 Connector",
      metrics: [
        {
          displayName: "purpose",
          description: "CW receiving and transmission",
        },
        {
          displayName: "connection",
          description: "usb computer to rig CW connection",
        },
        {
          displayName: "Used",
          description:
            "for CW receiving and transmission with software and keyboard",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/mmdvm.jpg",
      name: "MMDVM",
      description: "Multi-Mode Digital Voice Modem",
      metrics: [
        {
          displayName: "purpose",
          description: "Multi-Mode Digital Voice communication",
        },
        {
          displayName: "connection",
          description: "WiFi & controlled by VHF/UHF Rig",
        },
        {
          displayName: "Antenna",
          description: "VHF/UHF MMDVM antenna",
        },
        {
          displayName: "Power output",
          description: "VHF/UHF : 100mW",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/projects/mmdvmblue.jpg",
      name: "MMDVM Blue",
      description: "Blue-colored Multi-Mode Digital Voice Modem",
      metrics: [
        {
          displayName: "purpose",
          description: "Multi-Mode Digital Voice communication",
        },
        {
          displayName: "connection",
          description: "WiFi & controlled by VHF/UHF Rig",
        },
        {
          displayName: "Antenna",
          description: "VHF/UHF MMDVM antenna",
        },
        {
          displayName: "Power output",
          description: "VHF/UHF : 100mW",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/projects/powerSupply.jpg",
      name: "Power Supply",
      description: "General Power Supply (4 terminals)",
      metrics: [
        {
          displayName: "purpose",
          description: "Power distribution for multi rig",
        },
        {
          displayName: "input Voltage",
          description: "220V AC",
        },
        {
          displayName: "output Voltage",
          description: "13.8V 30A",
        },
      ],
      contactForImpedance: false,
    },
    {
      imgSrc: "/projects/rpisetup.jpg",
      name: "Raspberry Pi Setup",
      description: "Setup for Raspberry Pi",
      metrics: [
        {
          displayName: "purpose",
          description:
            "simultaneously using multiple raspberry-pi for various projects",
        },
        {
          displayName: "used",
          description: "ham-Pi, all star link, USRP",
        },
        {
          displayName: "interfaces",
          description: "Mobile/Monitor",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/projects/uhfHandtAntenna.jpg",
      name: "UHF Handheld Antenna",
      description: "UHF Handheld Radio Antenna",
      metrics: [
        {
          displayName: "purpose",
          description: "receiveing and transmiting to satellite with handy",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/projects/usrpmaster.jpg",
      name: "USRP Master",
      description: "Universal Software Radio Peripheral Master",
      metrics: [
        {
          displayName: "purpose",
          description: "working for multi digital mode",
        },
        {
          displayName: "used",
          description: "software USRP",
        },
        {
          displayName: "interfaces",
          description: "Mobile with DV switch software / Monitor",
        },
      ],
      contactForImpedance: true,
    },
    {
      imgSrc: "/projects/voltage&PowerReader.jpg",
      name: "Voltage & Current Reader",
      description: "Device for Reading Voltage and Current",
      metrics: [
        {
          displayName: "used",
          description: "power connection for less than 10A instrument",
        },
      ],
      contactForImpedance: false,
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
