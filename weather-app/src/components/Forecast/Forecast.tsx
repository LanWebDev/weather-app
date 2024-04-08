import React from "react";

import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const PlaceData = () => {
  return (
    <div className="flex justify-center items-center flex-col  md:min-w-[30rem] xl:mr-40 mx-auto my-10 md:mb-20 lg:max-xl:my-auto xl:mt-20 ">
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  );
};

export default PlaceData;
