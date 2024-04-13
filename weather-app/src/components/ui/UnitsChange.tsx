"use client";
import {
  useCelsiusContext,
  useGlobalContext,
  useGlobalContextUpdate,
} from "@/app/context/globalContext";
import React from "react";

const UnitsChange = () => {
  const { isCelsius, setIsCelsius } = useCelsiusContext();
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGlobalContext();
  const { setActiveCityCoords } = useGlobalContextUpdate();

  function getUserLocation(lat: number | undefined, lon: number | undefined) {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      return setActiveCityCoords([lat, lon]);
    }
  }
  return (
    <>
      <div className=" flex justify-end my-4 mx-[2rem] lg:mx-[4rem] xl:mx-[8rem] 2xl:mx-[20rem] ">
        <button
          className=" flex transition ease-out  p-2 mr-5 rounded-lg bg-white bg-opacity-30 active:bg-gray-500 text-white "
          onClick={() => getUserLocation(coords?.latitude, coords?.longitude)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          My location
        </button>
        <button
          className={` text-2xl text-white transition ease-out hover:scale-125 ${
            isCelsius ? "active" : null
          } [&.active]:underline`}
          onClick={() => setIsCelsius(true)}
        >
          °C
        </button>
        <p className="text-2xl text-white mx-1 ">|</p>
        <button
          className={`text-2xl text-white transition ease-out hover:scale-125 ${
            isCelsius ? null : "active"
          } [&.active]:underline`}
          onClick={() => setIsCelsius(false)}
        >
          °F
        </button>
      </div>
      <div className="absolute mx-auto left-0 right-0 text-center text-red-200">
        {!isGeolocationEnabled && <div>Geolocation is not enabled</div>}
      </div>
    </>
  );
};

export default UnitsChange;
