import React from "react";
import Sunny from "@/assets/icons/day.svg";
import Forecast from "./Forecast";

const PlaceData = () => {
  return (
    <>
      <div className="max-w-md mx-auto text-center">
        <p className="text-8xl text ">Maribor</p>
        <p className="text-8xl pt-8 pb-1 font-bold ">30°C</p>
        <p className="text-3xl pb-4 ">Clear</p>
        <p className="text-2xl font-bold">H:35°C | L:16°C</p>
      </div>
      <Forecast />
    </>
  );
};

export default PlaceData;
