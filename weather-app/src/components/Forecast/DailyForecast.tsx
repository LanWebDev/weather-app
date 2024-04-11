"use client";
import Image from "next/image";
import Sunny from "@/assets/icons/clear-day.svg";
import { useGlobalContext } from "@/app/context/globalContext";
import { unixToDay } from "@/app/utils/misc";
import React from "react";
import SkeletonCard from "../SkeletonCard";
import {
  clearSky,
  cloudy,
  drizzle,
  rain,
  snow,
  thunderstorm,
} from "@/app/utils/icons";

const WeeklyForecast = () => {
  const { fiveDayForecast } = useGlobalContext();

  const { list } = fiveDayForecast;

  if (!fiveDayForecast || !list) {
    return <SkeletonCard />;
  }

  const processData = (
    dailyData: {
      main: { temp_min: number; temp_max: number };
      dt: number;
    }[]
  ) => {
    let minTemp = Number.MAX_VALUE;
    let maxTemp = Number.MIN_VALUE;

    dailyData.forEach(
      (day: { main: { temp_min: number; temp_max: number }; dt: number }) => {
        if (day.main.temp_min < minTemp) {
          minTemp = day.main.temp_min;
        }
        if (day.main.temp_max > maxTemp) {
          maxTemp = day.main.temp_max;
        }
      }
    );

    return {
      day: unixToDay(dailyData[0].dt),
      minTemp,
      maxTemp,
    };
  };

  let dailyForecasts = [];

  for (let i = 1; i < 40; i += 8) {
    const dailyData = list.slice(i, i + 5);
    dailyForecasts.push(processData(dailyData));
  }
  dailyForecasts[0].day = "Today";

  const { main: weatherMain } = list[0].weather[0];

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
    <>
      <div className=" md:scale-125 lg:max-2xl:scale-100 mt-5 md:mt-24 lg:max-2xl:mt-5 w-auto xxs:w-[23rem] xl:min-w-[35rem] bg-white bg-opacity-10 p-6 rounded-xl transition ease-out md:hover:scale-[1.3] lg:hover:scale-[1.05] 2xl:hover:scale-[1.3] ">
        <div className="flex justify-start">
          <p className="text-white text-2xl ">5-Day Forecast</p>
        </div>
        <hr className="mb-2 mt-1 border border-white border-opacity-50" />

        <div className="flex flex-col text-white  ">
          {dailyForecasts.map((day, i) => {
            return (
              <div
                className="hover:bg-white px-1 hover:bg-opacity-10 rounded-2xl flex items-center justify-center m-1 transition ease-out hover:scale-110"
                key={i}
              >
                <p className="font-medium text-xl pr-5 w-[3.5rem] ">
                  {day.day}
                </p>
                <Image src={getIcon()} alt="weather icon" className=" pr-5" />
                <p className="text-xl font-medium ">
                  H:{day.maxTemp < 9 ? 0 : null}
                  {day.maxTemp.toFixed()}°
                </p>
                <div className="temperature flex-1  mx-2 h-2 rounded-lg"></div>
                <p className="text-xl font-medium pr-5 ">
                  L:{day.minTemp < 9 ? 0 : null}
                  {day.minTemp.toFixed()}°
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeeklyForecast;
