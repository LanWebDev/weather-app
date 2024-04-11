"use client";
import { useCelsiusContext } from "@/app/context/globalContext";
import React, { MouseEvent } from "react";
export const kevlinToCelcius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

const UnitsChange = () => {
  const { isCelsius, setIsCelsius } = useCelsiusContext();

  return (
    <>
      <div className=" flex justify-end my-4 mx-[2rem] lg:mx-[4rem] xl:mx-[8rem] 2xl:mx-[20rem] ">
        <button
          className={`text-2xl text-white transition ease-out hover:scale-125 ${
            isCelsius ? "active" : null
          } [&.active]:underline`}
          onClick={() => setIsCelsius(true)}
        >
          °C
        </button>
        <p className="text-2xl text-white mx-1 ">|</p>
        <button
          className={`text-2xl text-white transition ease-out hover:scale-125 ${
            isCelsius ? null : "active"
          } [&.active]:underline`}
          onClick={() => setIsCelsius(false)}
        >
          °F
        </button>
      </div>
    </>
  );
};

export default UnitsChange;
