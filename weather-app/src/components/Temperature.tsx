"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  useCelsiusContext,
  useGlobalContext,
} from "@/app/context/globalContext";
import {
  clearSky,
  cloudy,
  drizzle,
  rain,
  snow,
  thunderstorm,
} from "@/app/utils/icons";
import SkeletonCard from "./SkeletonCard";
import { toFahrenheit } from "@/app/utils/misc";

const Location = () => {
  const { isCelsius } = useCelsiusContext();
  const { forecast, fiveDayForecast } = useGlobalContext();

  const { list } = fiveDayForecast;
  const { main, name, weather } = forecast;

  if (!forecast || !weather || !list) {
    return <SkeletonCard />;
  }

  const temp = Math.round(main?.temp);
  const minTemp = Math.round(main?.temp_min);
  const maxTemp = Math.round(main?.temp_max);

  const { main: weatherMain, description } = weather[0];

  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzle;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      case "Thunderstorm":
        return thunderstorm;
      default:
        return clearSky;
    }
  };

  return (
    <div className="relative my-10 w-[20rem] scale-100  md:scale-[1.15] xl:scale-[1.2] 2xl:scale-[1.5] 2xl:m-auto ">
      <div className="text-center">
        <div className="lg:flex">
          <p className="text-8xl pb-1 font-bold text-center lg:text-left">
            {isCelsius ? <>{temp}°</> : <>{toFahrenheit(temp)}°</>}
          </p>
          <Image
            src={getIcon()}
            alt="weather icon"
            className="hidden lg:inline mx-[2rem] scale-150 m-auto"
          />
        </div>
        <p className="text-3xl md:text-5xl lg:text-left break-normal mb-1">
          {name}
        </p>
        <p className="text-2xl lg:text-left capitalize">{description} </p>
        <p className="text-xl lg:text-left">
          {isCelsius ? (
            <>
              H:{maxTemp}° | L:{minTemp}°
            </>
          ) : (
            <>
              H:{toFahrenheit(maxTemp)}° | L:{toFahrenheit(minTemp)}°
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Location;
