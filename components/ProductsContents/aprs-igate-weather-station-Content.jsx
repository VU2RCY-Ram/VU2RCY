import React from "react";

function AprsIgateWeatherStationContent() {
  return (
    <div className="flex flex-col md:flex-row">
      <div class="md:w-3/12 rounded-sm p-2">
        <img
          src="/products/APRSIgateWeatherStation/APRSIgateWeatherStation.jpeg"
          alt="APRS IgateWeather Station"
        />
      </div>
      <div class="md:w-9/12 p-2">
        This device not only seamlessly transmits weather data but also your
        station information to the APRS website, enhancing the capabilities of
        amateur radio setups. Operating on a 5V power supply, it&apos;s
        compatible with standard mobile chargers for convenient powering. With
        robust WiFi connectivity, the I-Gate Weather Station ensures reliable
        network access. Engineered for energy efficiency, it boasts low power
        consumption without compromising performance. Transmitting telemetry
        data including temperature, humidity, and air pressure to the APRS
        website, it provides comprehensive weather insights. Real-time status
        updates are displayed for easy monitoring. Its compact size makes it
        ideal for space-restricted environments. Additionally, the I-Gate
        Weather Station updates your callsign and integrates a weather station
        logo (Wx logo) on the APRS website, enhancing your station&apos;s
        visibility. Notably, this versatile station can also function as a
        standalone I-Gate, further expanding its utility in amateur radio
        setups.
      </div>
    </div>
  );
}

export default AprsIgateWeatherStationContent;
