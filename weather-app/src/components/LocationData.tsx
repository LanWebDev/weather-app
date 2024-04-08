import React from "react";
import Sunny from "@/assets/icons/clear-day.svg";
import Image from "next/image";

const Location = () => {
  return (
    <div className="my-10 w-[20rem] scale-100  md:scale-[1.15] xl:scale-[1.2] 2xl:scale-[1.5] 2xl:m-auto">
      <div className="text-center">
        <div className="lg:flex">
          <p className="text-8xl pb-1 font-bold text-center lg:text-left">
            30°
          </p>
          <Image
            src={Sunny}
            alt="clear weather"
            className="hidden lg:inline mx-[2rem] scale-150 m-auto"
          />
        </div>
        <p className="text-3xl md:text-5xl lg:text-left break-normal mb-1">
          Maribor
        </p>
        <p className="text-2xl lg:text-left">Clear </p>
        <p className="text-xl lg:text-left">H:35° | L:16°</p>
      </div>
    </div>
  );
};

export default Location;
