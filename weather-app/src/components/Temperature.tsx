"use client";
import React from "react";
import Image from "next/image";
import {
  useCelsiusContext,
  useGlobalContext,
} from "@/app/context/globalContext";
import SkeletonCard from "./SkeletonCard";
import { toFahrenheit } from "@/app/utils/misc";
import { getIcon } from "@/app/utils/icons";

const Temperature = () => {
  const { forecast, fiveDayForecast } = useGlobalContext();
  const { isCelsius } = useCelsiusContext();

  const { main, name, weather } = forecast;
  const { city } = fiveDayForecast;
  if (!forecast || !weather) {
    return <SkeletonCard />;
  }

  const temp = Math.round(main?.temp);
  const minTemp = Math.round(main?.temp_min);
  const maxTemp = Math.round(main?.temp_max);

  const { description } = weather;

  const icon = getIcon(weather[0].description, weather[0].icon);

  return (
    <>
      <div className="relative my-10 w-[20rem] scale-100  md:scale-[1.15] xl:scale-[1.2] 2xl:scale-[1.5] 2xl:m-auto cursor-default text-white">
        <div className="text-center">
          <div className="lg:flex">
            <p className="text-8xl pb-1 font-bold text-center lg:text-left">
              {isCelsius ? <>{temp}°</> : <>{toFahrenheit(temp)}°</>}
            </p>
            <Image
              src={icon}
              alt="weather icon"
              className="hidden lg:inline mx-[2rem] scale-150 m-auto"
            />
          </div>
          <p className="text-3xl md:text-5xl lg:text-left break-normal mb-1">
            {name}
            <span className="text-sm ml-1">{city && city.country}</span>
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
    </>
  );
};

export default Temperature;
