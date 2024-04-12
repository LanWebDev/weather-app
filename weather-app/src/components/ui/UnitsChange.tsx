"use client";
import {
  useCelsiusContext,
  useGlobalContextUpdate,
} from "@/app/context/globalContext";
import React, { MouseEvent } from "react";
import { useGeolocated } from "react-geolocated";
export const kevlinToCelcius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

const UnitsChange = () => {
  const { isCelsius, setIsCelsius } = useCelsiusContext();
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  function getUserLocation(lat: number | undefined, lon: number | undefined) {
    return setActiveCityCoords([lat, lon]);
  }
  return (
    <>
      <div className=" flex justify-end my-4 mx-[2rem] lg:mx-[4rem] xl:mx-[8rem] 2xl:mx-[20rem] ">
        <button
          className=" flex transition ease-out hover:scale-105 p-2 mr-5 rounded-lg bg-white bg-opacity-30 hover:bg-gray-500 text-white "
          onClick={() => getUserLocation(coords?.latitude, coords?.longitude)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          My location
        </button>
        <button
          className={`text-2xl text-white transition ease-out hover:scale-125 ${
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
        {!isGeolocationAvailable ? (
          <p>Your browser does not support Geolocation</p>
        ) : !isGeolocationEnabled ? (
          <p>Geolocation is not enabled</p>
        ) : null}
      </div>
    </>
  );
};

export default UnitsChange;
