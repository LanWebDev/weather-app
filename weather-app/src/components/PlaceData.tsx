import React from "react";

import Forecast from "./Forecast";
import WeeklyForecast from "./WeeklyForecast";
import Location from "./Location";

const PlaceData = () => {
  return (
    <>
      <Location />
      <Forecast />
      <WeeklyForecast />
    </>
  );
};

export default PlaceData;
