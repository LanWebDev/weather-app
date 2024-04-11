"use client";

import Image from "next/image";
import React, { FormEvent, useState } from "react";
import searchImage from "../../../public/search-svgrepo-com.svg";
import {
  useGlobalContext,
  useGlobalContextUpdate,
} from "@/app/context/globalContext";
import { useClickAway } from "@uidotdev/usehooks";

const SearchBar = () => {
  const { geoCodedList, handleInput } = useGlobalContext();
  const { setActiveCityCoords } = useGlobalContextUpdate();
  const [isActive, setIsActive] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsActive(false);
  });

  function isActiveHandler() {
    setIsActive(true);
  }

  function getClickedCoords(lat: number, lon: number) {
    setActiveCityCoords([lat, lon]);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsActive(false);

    if (geoCodedList.length === 0) return;
    if (geoCodedList.length !== 0) {
      return setActiveCityCoords([geoCodedList[0].lat, geoCodedList[0].lon]);
    }
  }

  return (
    <>
      <form
        className=" w-[20rem] mt-20 md:w-[30rem] lg:w-[25rem] xl:w-[30rem] lg:mt-30 xl:max-2xl:mt-40 2xl:w-[35rem] mb-5 lg:mb-20  mx-auto 2xl:m-auto"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <Image
              className="opacity-20"
              src={searchImage}
              alt="search image"
              width={30}
            />
          </div>
          <input
            autoComplete="off"
            type="search"
            id="default-search"
            className="[&::-webkit-search-cancel-button]:hidden block w-full p-3 ps-12 text-2xl text-gray-600 rounded-2xl outline-none pr-10 bg-white bg-opacity-50 placeholder-gray-500 "
            placeholder="Search Places"
            onChange={isActiveHandler}
            onChangeCapture={handleInput}
            required
          />
          <button
            type="submit"
            className="text-gray-500  absolute end-2.5 bottom-1.5   hover:text-gray-700  font-medium text-xl px-3 py-2 m-auto"
          >
            Search
          </button>
        </div>

        {isActive && (
          <div
            className="absolute w-[20rem]  md:w-[30rem] lg:w-[25rem] xl:w-[30rem]   2xl:w-[35rem]  2xl:m-auto z-10"
            ref={ref}
          >
            <ul className="mt-[0.1rem] w-full py-3 px-3 text-gray-600 rounded-xl outline-none  bg-white bg-opacity-90  ">
              {geoCodedList.length === 0 && <p>No results.</p>}
              {geoCodedList.map(
                (
                  item: {
                    country: string;
                    name: string;
                    state: string;
                    lat: number;
                    lon: number;
                  },
                  i: number
                ) => {
                  const { country, state, name } = item;
                  return (
                    <li
                      key={i}
                      className={
                        "py-3 rounded px-2 cursor-default hover:bg-gray-300 "
                      }
                      onClick={() => {
                        getClickedCoords(item.lat, item.lon);
                        setIsActive(false);
                      }}
                    >
                      <p className="">
                        {name}, {state && state + ","} {country}
                      </p>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )}
      </form>
    </>
  );
};

export default SearchBar;
