"use client";
import Image from "next/image";
import Sunny from "@/assets/icons/clear-day.svg";
import { useGlobalContext } from "@/app/context/globalContext";
import SkeletonCard from "../SkeletonCard";
import {
  clearSky,
  cloudy,
  drizzle,
  rain,
  snow,
  thunderstorm,
} from "@/app/utils/icons";

import moment from "moment";

const Forecast = () => {
  const { forecast, fiveDayForecast } = useGlobalContext();

  const { weather } = forecast;
  const { city, list } = fiveDayForecast;

  if (!fiveDayForecast || !city || !list) {
    return <SkeletonCard />;
  }
  if (!forecast || !weather) {
    return <SkeletonCard />;
  }

  //filter
  const HourlyForecast = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) => {
      return forecast.dt_txt;
    }
  );
  // const HourlyForecast = list.splice(1, 6);
  console.log(HourlyForecast);
  console.log(forecast);
  console.log(fiveDayForecast);

  const { main: weatherMain } = list[0].weather[0];
  console.log(weatherMain);

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
    <div className=" md:scale-125 lg:max-2xl:scale-100 w-auto xl:min-w-[35rem] justify-evenly bg-white bg-opacity-10 p-6 rounded-xl transition ease-out md:hover:scale-[1.3] lg:hover:scale-[1.05] 2xl:hover:scale-[1.3]">
      <div className="justify-start">
        <p className="text-white text-2xl ">Hourly forecast</p>
      </div>
      <hr className="mb-2 mt-1 border border-white border-opacity-50" />
      <div className="flex flex-row items-center justify-between text-white">
        {HourlyForecast.length < 1 ? (
          <div>Loading...</div>
        ) : (
          HourlyForecast.slice(2, 7).map(
            (forecast: { dt_txt: string; main: { temp: number } }) => {
              return (
                <div
                  className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110"
                  key={forecast.dt_txt}
                >
                  <p className="font-medium text-xl text-center">
                    {moment(forecast.dt_txt).format("HH:mm")}
                  </p>
                  <Image src={getIcon()} alt={"clear weather"} />
                  <p className="text-2xl text-center font-medium ">
                    {forecast.main.temp.toFixed()}°
                  </p>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default Forecast;
