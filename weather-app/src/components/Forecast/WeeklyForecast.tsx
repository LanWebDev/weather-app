import Image from "next/image";
import Sunny from "@/assets/icons/clear-day.svg";

const WeeklyForecast = () => {
  return (
    <>
      <div className="scale-125 mt-24 w-3/5 bg-white bg-opacity-10 p-6 rounded-xl transition ease-out hover:scale-[1.3]">
        <div className="flex justify-start">
          <p className="text-white text-2xl ">5-Day Forecast</p>
        </div>
        <hr className="mb-2 mt-1 border border-white border-opacity-50" />

        <div className="flex flex-col text-white  transition ease-out hover:scale-110">
          <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl flex items-center justify-center m-1 ">
            <p className="font-medium text-xl pr-5">Today</p>
            <Image src={Sunny} alt="clear weather" className=" pr-5" />
            <p className="text-xl font-medium pr-5">H:30°</p>
            <p className="text-xl font-medium pr-5">L:16°</p>
          </div>
        </div>
        <div className="flex flex-col text-white transition ease-out hover:scale-110">
          <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl flex items-center justify-center m-1 ">
            <p className="font-medium text-xl pr-5">Today</p>
            <Image src={Sunny} alt="clear weather" className="  pr-5" />
            <p className="text-xl font-medium pr-5">H:30°</p>
            <p className="text-xl font-medium pr-5">L:16°</p>
          </div>
        </div>
        <div className="flex flex-col text-white transition ease-out hover:scale-110">
          <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl flex items-center justify-center m-1 ">
            <p className="font-medium text-xl pr-5">Today</p>
            <Image src={Sunny} alt="clear weather" className=" pr-5" />
            <p className="text-xl font-medium pr-5">H:30°</p>
            <p className="text-xl font-medium pr-5">L:16°</p>
          </div>
        </div>
        <div className="flex flex-col text-white transition ease-out hover:scale-110">
          <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl flex items-center justify-center m-1 ">
            <p className="font-medium text-xl pr-5">Today</p>
            <Image src={Sunny} alt="clear weather" className=" pr-5" />
            <p className="text-xl font-medium pr-5">H:30°</p>
            <p className="text-xl font-medium pr-5">L:16°</p>
          </div>
        </div>
        <div className="flex flex-col text-white transition ease-out hover:scale-110">
          <div className="hover:bg-white hover:bg-opacity-10 rounded-2xl flex items-center justify-center m-1 ">
            <p className="font-medium text-xl pr-5">Today</p>
            <Image src={Sunny} alt="clear weather" className="  pr-5" />
            <p className="text-xl font-medium pr-5">H:30°</p>
            <p className="text-xl font-medium pr-5">L:16°</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeeklyForecast;
