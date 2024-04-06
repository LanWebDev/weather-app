import Link from "next/link";
import React from "react";

const NavigationTabs = () => {
  return (
    <nav className="absolute bg-white bg-opacity-50 p-4 max-w-max  border-2 border-gray-300 text-gray-900 font-bold text-2xl rounded-2xl rounded-tl  drop-shadow-lg shadow-xl ">
      <p className="drop-shadow-lg border-b-2 border-gray-900 hover:text-gray-500 pl-2 hover:border-l-white border-l-4 border-l-transparent">
        <Link href={"/favorites"}>Favorite Places</Link>
      </p>
      <p className="hover:text-gray-500 cursor-pointer hover:border-l-white border-l-4 border-l-transparent pl-2 drop-shadow-lg">
        <Link href={"/settings"}>Settings</Link>
      </p>
    </nav>
  );
};

export default NavigationTabs;
