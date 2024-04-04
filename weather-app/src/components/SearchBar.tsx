import Image from "next/image";
import React from "react";
import searchImage from "../../public/search-svgrepo-com.svg";

const searchImageSyle = "opacity-20 focus:opacity-50";

const SearchBar = () => {
  return (
    <>
      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Image
              className="opacity-20"
              src={searchImage}
              alt="search image"
              width={30}
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="[&::-webkit-search-cancel-button]:hidden block w-full p-3 ps-12 text-2xl text-gray-700 border-2 border-gray-300 rounded-2xl   focus:border-gray-500 outline-none pr-20"
            placeholder="Search Places"
          />
          <button
            type="submit"
            className="text-gray-400 text-dec absolute end-2.5 bottom-2.5   hover:text-gray-600  font-medium text-base px-3 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
