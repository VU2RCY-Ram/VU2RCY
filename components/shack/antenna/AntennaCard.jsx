import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const AntennaCard = ({ antenna, cardBackground }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className=" rounded-xl cursor-pointer overflow-hidden relative  ">
      {!showDetails && (
        <div
          className={`${cardBackground} card-content transition`}
          onClick={toggleDetails}
        >
          <div style={{ position: "relative" }}>
            <Image
              alt={antenna?.name || ""}
              src={antenna?.imgSrc || ""}
              quality={85}
              loading="lazy"
              width={500}
              height={500}
            />
          </div>
          <CardContent>
            <Typography variant="h5" className="capitalize" component="div">
              {antenna?.name || "test"}
            </Typography>
            <Typography variant="body2">{antenna?.description}</Typography>
          </CardContent>
        </div>
      )}
      {showDetails && (
        <div
          className={`${cardBackground}   transition`}
          onClick={toggleDetails}
        >
          <CardContent>
            <div
              className={`${cardBackground} border inset-5 max-w-md mx-auto  rounded-xl overflow-hidden  p-6 mb-6`}
            >
              {antenna.name && (
                <h2 className="text-2xl font-semibold mb-4">{antenna.name}</h2>
              )}

              {antenna.materials && (
                <div className="mb-4">
                  <span className="font-semibold">Materials:</span>{" "}
                  {antenna.materials}
                </div>
              )}
              {antenna.metrics.frequencyRange && (
                <div className="mb-4">
                  <span className="font-semibold">Frequency Range:</span>{" "}
                  {antenna.metrics.frequencyRange}
                </div>
              )}
              {antenna.metrics.resonantFrequency && (
                <div className="mb-4">
                  <span className="font-semibold">Resonant Frequency:</span>{" "}
                  {antenna.metrics.resonantFrequency}
                </div>
              )}
              {antenna.metrics.gain && (
                <div className="mb-4">
                  <span className="font-semibold">Gain:</span>{" "}
                  {antenna.metrics.gain}
                </div>
              )}
              {antenna.metrics.radiationPattern && (
                <div className="mb-4">
                  <span className="font-semibold">Radiation Pattern:</span>{" "}
                  {antenna.metrics.radiationPattern}
                </div>
              )}
              {antenna.metrics.polarization && (
                <div className="mb-4">
                  <span className="font-semibold">Polarization:</span>{" "}
                  {antenna.metrics.polarization}
                </div>
              )}
              {antenna.metrics.swr && (
                <div className="mb-4">
                  <span className="font-semibold">SWR:</span>{" "}
                  {antenna.metrics.swr}
                </div>
              )}

              {antenna.metrics.impedance && (
                <div className="mb-4">
                  <span className="font-semibold">Impedance:</span>{" "}
                  {antenna.metrics.impedance}
                </div>
              )}

              {antenna.metrics.bandwidth && (
                <div className="mb-4">
                  <span className="font-semibold">Bandwidth:</span>{" "}
                  {antenna.metrics.bandwidth}
                </div>
              )}

              {antenna.metrics.frontToBackRatio && (
                <div className="mb-4">
                  <span className="font-semibold">Front-to-Back Ratio:</span>{" "}
                  {antenna.metrics.frontToBackRatio}
                </div>
              )}

              {antenna.metrics.powerHandling && (
                <div className="mb-4">
                  <span className="font-semibold">Power Handling:</span>{" "}
                  {antenna.metrics.powerHandling}
                </div>
              )}

              {antenna.metrics.dimensions && (
                <div className="mb-4">
                  <span className="font-semibold">Dimensions:</span>
                  <ul className="list-disc pl-5">
                    {antenna.metrics.dimensions.length && (
                      <li>Length: {antenna.metrics.dimensions.length}</li>
                    )}
                    {antenna.metrics.dimensions.width && (
                      <li>Width: {antenna.metrics.dimensions.width}</li>
                    )}
                    {antenna.metrics.dimensions.height && (
                      <li>Height: {antenna.metrics.dimensions.height}</li>
                    )}
                  </ul>
                </div>
              )}

              {antenna.contactForImpedance && (
                <a
                  href="https://wa.me/7388407388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex align-middle items-center font-jak sm:text-lg md:text-xl space-x-1 w-max p-2 font-extrabold"
                >
                  <BsWhatsapp className=" dark:text-[#ff339c] text-fuchsia-700 h-3 w-3 md:h-4 md:w-4 " />
                  <h5 className=" dark:text-[#ff339c] text-fuchsia-700">
                    Contact For Impedance
                  </h5>
                </a>
              )}
            </div>
          </CardContent>
        </div>
      )}
    </div>
  );
};

export default AntennaCard;
