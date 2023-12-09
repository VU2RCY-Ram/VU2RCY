import AntennaCard from "./AntennaCard";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AntennaList = () => {
  const antennaTypes = {
    DipoleAntenna: {
      displayName: "Dipole Antenna",
      description:
        "Simple T-shaped antenna with two equal segments, commonly used and versatile.",
    },
    YagiUdaAntenna: {
      displayName: "Yagi-Uda Antenna",
      description:
        "Directional antenna with multiple elements, providing gain and directivity.",
    },
    VerticalAntenna: {
      displayName: "Vertical Antenna",
      description:
        "Consists of a vertical radiator over a ground plane, efficient for local communications.",
    },
    LoopAntenna: {
      displayName: "Loop Antenna",
      description:
        "Closed circuit loop of wire or tubing, available in various sizes for different applications.",
    },
    WireAntenna: {
      displayName: "Wire Antenna",
      description:
        "Simple and cost-effective antenna, including random wire antennas and long wire antennas.",
    },
    LogPeriodicAntenna: {
      displayName: "Log-Periodic Antenna",
      description:
        "Wideband antenna with elements of varying lengths, covering a broad frequency range.",
    },
    G5RVAntenna: {
      displayName: "G5RV Antenna",
      description:
        "Multi-band dipole antenna designed for efficient performance on several ham radio bands.",
    },
    QuadAntenna: {
      displayName: "Quad Antenna",
      description:
        "Loop antenna with square or rectangular shapes, offering gain and directivity.",
    },
    InvertedVAntenna: {
      displayName: "Inverted V Antenna",
      description:
        "Dipole antenna with ends elevated to form a V shape, suitable for limited-space installations.",
    },
    JPoleAntenna: {
      displayName: "J-Pole Antenna",
      description:
        "Vertical or slanting dipole antenna with a matching section for compact and easy construction.",
    },
    GroundPlaneAntenna: {
      displayName: "Ground Plane Antenna",
      description:
        "Vertical radiator over a ground plane, enhancing antenna efficiency.",
    },
    RhombicAntenna: {
      displayName: "Rhombic Antenna",
      description:
        "High-gain wire antenna with diamond-shaped elements, directional for long-distance communication.",
    },
    VerticalDipoleAntenna: {
      displayName: "Vertical Dipole Antenna",
      description:
        "Similar to a dipole but with one element pointing up and the other down, used in various scenarios.",
    },
    MagneticLoopAntenna: {
      displayName: "Magnetic Loop Antenna",
      description:
        "Compact loop antenna with a tuning capacitor, suitable for limited-space environments.",
    },
  };

  const antennas = [
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/yagi.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
    },
    {
      imgSrc: "/antenna/slimJim.jpg",
      name: "test",
      description: "test",
      materials: "copper",
      type: "MagneticLoopAntenna",
      metrics: {
        frequencyRange: "14 MHz - 30 MHz",
        resonantFrequency: "21 MHz",
        gain: "6 dBi",
        radiationPattern: "Directional",
        polarization: "Vertical",
        swr: 1.5,
        impedance: "50 ohms",
        bandwidth: "300 kHz",
        frontToBackRatio: "20 dB",
        powerHandling: "100 Watts",
        dimensions: {
          length: "5 meters",
          width: "2 meters",
          height: "1 meter",
        },
      },
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
          {antennas.map((antenna, id) => (
            <li className="mb-5" key={id}>
              {
                <AntennaCard
                  antenna={antenna}
                  cardBackground={cardBackground}
                />
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AntennaList;
