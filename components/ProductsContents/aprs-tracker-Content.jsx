import React from "react";
function AprsTrackerContent() {
  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div class="md:w-4/12  p-2 ">
          <img
            className="rounded-md"
            src="/products/APRSTracker/APRS_trackers_multiple.jpeg"
            alt="APRS trackers"
          />
        </div>
        <div class="md:w-8/12 p-2">
          <h3 className="text-center only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            Introduction:
          </h3>
          <p className="mt-2">
            APRS Tracker is a versatile device tailored for ham radio
            enthusiasts, it enhances tracking capabilities by seamlessly
            transmitting location data to the{" "}
            <span className="underline">
              <a href="https://aprs.fi" title="Live APRS map" target="_blank">
                APRS website
              </a>
            </span>
            , enabling real-time monitoring. Engineered for efficiency, this
            essential tool operates on a 5V power supply, ensuring compatibility
            with reliable power banks for uninterrupted performance in the
            field.
          </p>
          <h3 className="text-center mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            Benefits of APRS Tracker:
          </h3>
          <ul className="list-disc pl-6 mt-2 font-normal">
            <li>
              <b>Real-Time Location Tracking:</b> Transmit your precise location
              to the APRS website, facilitating efficient tracking during
              outdoor expeditions or emergency response operations.
            </li>
            <li>
              <b>Effortless Connectivity:</b> With built-in WiFi connectivity,
              the APRS Tracker seamlessly connects to WiFi hotspots or mobile
              hotspots, simplifying data transmission processes for amateur
              radio operators.
            </li>
            <li>
              <b>Energy Efficiency:</b> Designed with low power consumption in
              mind, this tracker maximizes operational longevity, ideal for
              extended field deployments or off-grid operations common in ham
              radio activities.
            </li>
            <li>
              <b>Clear Display:</b> Equipped with a clear display, the APRS
              Tracker provides at-a-glance updates on GPS and WiFi connection
              status, ensuring users stay informed about their tracking
              setup&apos;s performance.
            </li>
            <li>
              <b>Vehicle Speed Monitoring:</b> Displaying the moving speed of
              your vehicle, the tracker enables precise tracking and analysis,
              essential for mobile operations or tracking vehicle-based assets
              during ham radio events.
            </li>
            <li>
              <b>Comprehensive Tracking Insights:</b> Transmitting data,
              including transmission packets (Tx packets) and location, the APRS
              Tracker&apos;s information is graphically represented on the APRS
              website, providing comprehensive tracking insights to users and
              enhancing situational awareness.
            </li>
          </ul>
          <h3 className="text-center mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-sm lg:text-md xl:text-lg">
            In Conclusion:
          </h3>
          <p className="mt-2">
            With its compact design and efficient functionality, the APRS
            Tracker emerges as an indispensable tool for amateur radio
            enthusiasts, offering a range of features tailored to enhance
            tracking capabilities for ham radio applications.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AprsTrackerContent;
