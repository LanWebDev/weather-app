import React from "react";

import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

const PlaceData = () => {
  return (
    <div className="flex justify-center items-center flex-col  md:min-w-[30rem] xl:mr-40 mx-auto my-10 md:mb-20 lg:max-xl:my-auto xl:mt-20 ">
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};

export default PlaceData;
