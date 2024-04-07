import Image from "next/image";
import Sunny from "@/assets/icons/clear-day.svg";

const Forecast = () => {
  return (
    <div className=" max-w-xl  bg-white bg-opacity-10 p-6 rounded-xl transition ease-out hover:scale-105">
      <div className="justify-start">
        <p className="text-white text-2xl ">Hourly forecast</p>
      </div>
      <hr className="mb-2 mt-1 border border-white border-opacity-50" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110">
          <p className="font-medium text-xl text-center">12</p>
          <Image src={Sunny} alt="clear weather" className="relative " />
          <p className="text-2xl text-center font-medium ">30°</p>
        </div>
        <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110">
          <p className="font-medium text-xl text-center">13</p>
          <Image src={Sunny} alt="clear weather" className="relative" />
          <p className="text-2xl text-center font-medium ">30°</p>
        </div>
        <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110">
          <p className="font-medium text-xl text-center">14</p>
          <Image src={Sunny} alt="clear weather" className="relative" />
          <p className="text-2xl text-center font-medium ">30°</p>
        </div>
        <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110">
          <p className="font-medium text-xl text-center">15</p>
          <Image src={Sunny} alt="clear weather" className="relative" />
          <p className="text-2xl text-center font-medium ">30°</p>
        </div>
        <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl transition ease-out hover:scale-110">
          <p className="font-medium text-xl text-center">16</p>
          <Image src={Sunny} alt="clear weather" className="relative" />
          <p className="text-2xl text-center font-medium ">30°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
