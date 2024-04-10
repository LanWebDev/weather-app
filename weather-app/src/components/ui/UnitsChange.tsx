"use client";
import React, { MouseEvent } from "react";
export const kevlinToCelcius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

const UnitsChange = () => {
  return (
    <>
      <div className=" flex justify-end my-4 mx-[2rem] lg:mx-[4rem] xl:mx-[8rem] 2xl:mx-[20rem] ">
        <button className="text-2xl text-white transition ease-out hover:scale-125">
          °C
        </button>
        <p className="text-2xl text-white mx-1 ">|</p>
        <button className="text-2xl text-white transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </>
  );
};

export default UnitsChange;
