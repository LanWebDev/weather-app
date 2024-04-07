import React from "react";

import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const PlaceData = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col ">
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  );
};

export default PlaceData;
