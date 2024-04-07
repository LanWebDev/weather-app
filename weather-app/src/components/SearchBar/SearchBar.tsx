import Image from "next/image";
import React from "react";
import searchImage from "../../../public/search-svgrepo-com.svg";

const SearchBar = () => {
  return (
    <>
      <form className="max-w-lg my-10 mx-32 flex justify-start">
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
            className="[&::-webkit-search-cancel-button]:hidden block w-full p-3 ps-12 text-2xl text-gray-700 rounded-2xl outline-none pr-20 bg-white bg-opacity-75 placeholder-gray-400"
            placeholder="Search Places"
          />
          <button
            type="submit"
            className="text-gray-500  absolute end-2.5 bottom-1.5   hover:text-gray-700  font-medium text-xl px-3 py-2 m-auto"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
