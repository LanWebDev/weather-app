import Image from "next/image";
import React from "react";
import searchImage from "../../../public/search-svgrepo-com.svg";

const SearchBar = () => {
  return (
    <>
      <form className=" w-[20rem] mt-20 md:w-[30rem] lg:w-[25rem] xl:w-[30rem] lg:mt-30 xl:max-2xl:mt-40 2xl:w-[35rem] mb-5 lg:mb-20  mx-auto 2xl:m-auto">
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
            className="[&::-webkit-search-cancel-button]:hidden block w-full p-3 ps-12 text-2xl text-gray-600 rounded-2xl outline-none pr-10 bg-white bg-opacity-50 placeholder-gray-500"
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
