"use client";
import Image from "next/image";

import {
  useCelsiusContext,
  useGlobalContext,
} from "@/app/context/globalContext";
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
import { toFahrenheit } from "@/app/utils/misc";

const Forecast = () => {
  const { isCelsius } = useCelsiusContext();
  const { forecast, fiveDayForecast } = useGlobalContext();

  const { weather } = forecast;
  const { city, list } = fiveDayForecast;

  console.log(fiveDayForecast);

  if (!fiveDayForecast || !city || !list) {
    return <SkeletonCard />;
  }
  if (!forecast || !weather) {
    return <SkeletonCard />;
  }

  const today = new Date();
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayString = today.toISOString().split("T")[0];
  const tomorrowString = tomorrow.toISOString().split("T")[0];
  //filter
  const HourlyForecastToday = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) => {
      return forecast.dt_txt.startsWith(todayString);
    }
  );
  const HourlyForecastTomorrow = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) => {
      return forecast.dt_txt.startsWith(tomorrowString);
    }
  );

  const HourlyForecast = [...HourlyForecastToday, ...HourlyForecastTomorrow];

  const getIcon = (weather: string) => {
    switch (weather) {
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
    <div className=" md:scale-125 lg:max-2xl:scale-100 w-auto xl:min-w-[35rem] justify-evenly bg-white bg-opacity-10 p-6 rounded-xl transition ease-out md:hover:scale-[1.3] lg:hover:scale-[1.05] 2xl:hover:scale-[1.3] cursor-default">
      <div className="justify-start">
        <p className="text-white text-2xl ">Hourly Forecast</p>
      </div>
      <hr className="mb-2 mt-1 border border-white border-opacity-50" />
      <div className="flex flex-row items-center justify-between text-white">
        {HourlyForecast.length < 1 ? (
          <div>Loading...</div>
        ) : (
          HourlyForecast.slice(0, 5).map(
            (forecast: {
              dt_txt: string;
              main: { temp: number };
              weather: { main: string }[];
            }) => {
              return (
                <div
                  className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110"
                  key={forecast.dt_txt}
                >
                  <p className="font-medium text-xl text-center">
                    {moment(forecast.dt_txt).format("HH:mm")}
                  </p>
                  <Image
                    src={getIcon(forecast.weather[0].main)}
                    alt="weather icon"
                  />
                  <p className="text-2xl text-center font-medium ">
                    {isCelsius ? (
                      <>{forecast.main.temp.toFixed()}°</>
                    ) : (
                      <>{toFahrenheit(forecast.main.temp)}°</>
                    )}
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
