import React from "react";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

function Accordion() {
  const [active, setActive] = useState(-1);
  let data = [
    {
      title: "APRS IGATE Station",
      description:
        "An APRS IGATE Station serves as a gateway between the Automatic Packet Reporting System (APRS) and the internet, enabling the exchange of APRS data packets. It enhances APRS network coverage and facilitates data transmission to online APRS servers.",
    },
    {
      title: "APRS IGATE Weather Station",
      description:
        "An APRS IGATE Weather Station combines the functionality of an APRS IGATE Station with weather monitoring capabilities. It receives and forwards APRS packets while also collecting and transmitting weather data, such as temperature, humidity, and atmospheric pressure, to APRS networks.",
    },
    {
      title: "APRS tracker",
      description:
        "An APRS tracker is a device designed to broadcast its GPS location via the Automatic Packet Reporting System (APRS). It's commonly used in amateur radio and outdoor activities to provide real-time location updates, allowing users to track movement or assets remotely.",
    },
    {
      title: "lora satellite ground station",
      description:
        "A LoRa satellite ground station is a facility equipped to communicate with LoRa satellites. It facilitates two-way communication between ground-based LoRa devices and satellites in orbit, enabling long-range, low-power data transmission for applications such as IoT connectivity and remote sensing.",
    },
    {
      title: "Digiface pro",
      description:
        "The Digiface Pro is a professional audio interface designed for high-performance recording and playback tasks. It offers a range of connectivity options, low-latency operation, and advanced features tailored to professional audio production environments, making it ideal for studio recording, live sound, and broadcast applications.",
    },
    {
      title: "Network transceiver",
      description:
        "A network transceiver is a device that combines the functions of a transmitter and a receiver for data communication over a network. It enables bidirectional data transmission between connected devices, facilitating network communication protocols such as Ethernet, Wi-Fi, or cellular connectivity in various applications.",
    },
    {
      title: "Lora APRS IGaTE Station",
      description:
        "A LoRa APRS IGATE Station integrates LoRa technology with APRS functionality, serving as a gateway between LoRa devices and APRS networks. It enables the transmission of LoRa data packets to APRS infrastructure, extending the reach of LoRa-based applications and enhancing network interoperability.",
    },
    {
      title: "MMDVM",
      description:
        "The Multi-Mode Digital Voice Modem (MMDVM) is a hardware and software solution for connecting various digital voice modes, such as DMR, D-STAR, and C4FM, to analog radio systems. It facilitates cross-mode communication and interoperability between different digital voice protocols, enhancing flexibility in amateur radio operations.",
    },
    {
      title: "Rig control cube [cat cable]",
      description:
        "A rig control cube, connected via a CAT (Computer-Aided Transceiver) cable, is a device used in amateur radio setups to interface with transceivers for remote control and monitoring. It allows users to adjust parameters such as frequency, mode, and power output from a computer or external controller.",
    },
    {
      title: "Cw interface [serial/usb]",
      description:
        "A CW (Continuous Wave) interface, available in both serial and USB configurations, facilitates Morse code communication in amateur radio operations. It connects Morse code input devices, such as paddles or keys, to transceivers or computers, enabling the transmission and reception of Morse code signals.",
    },
  ];

  return (
    <div>
      {data.map((ele, id) => {
        return (
          <AccordionItem
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
