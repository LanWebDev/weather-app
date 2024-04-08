import React from "react";
import Sunny from "@/assets/icons/clear-day.svg";
import Image from "next/image";

const Location = () => {
  return (
    <div className="my-40 ">
      <div className="text-center">
        <div className="flex ">
          <p className="text-8xl pt-8 pb-1 font-bold text-left">30°</p>
          <Image src={Sunny} alt="clear weather" className="" />
        </div>
        <p className="text-8xl text ">Maribor</p>
        <p className="text-3xl pb-4 ">Clear</p>
        <p className="text-2xl font-bold">H:35° | L:16°</p>
      </div>
    </div>
  );
};

export default Location;
