import React from "react";

import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const PlaceData = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col max-w-[60rem] mx-20 min-w-[35rem]">
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  );
};

export default PlaceData;
