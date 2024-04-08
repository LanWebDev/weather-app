"use client";
import React from "react";

const UnitsChange = () => {
  return (
    <>
      <div className=" flex justify-end my-4 mx-[2rem] lg:mx-[4rem] xl:mx-[8rem] 2xl:mx-[20rem] ">
        <button
          name="metric"
          className="text-2xl text-white transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-2xl text-white mx-1 ">|</p>
        <button
          name="imperial"
          className="text-2xl text-white transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </>
  );
};

export default UnitsChange;
