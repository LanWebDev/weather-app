import Link from "next/link";
import React from "react";

const NavigationTabs = () => {
  return (
    <nav className="absolute bg-gradient-to-r to-cyan-500 from-blue-500 bg-opacity-100 p-4 max-w-max  border-2 border-gray-700 text-gray-900 font-bold text-2xl rounded-2xl rounded-tl rounded-br drop-shadow-lg shadow-xl ">
      <p className="drop-shadow border-b-2 border-gray-900 hover:text-gray-300 pl-2 hover:border-l-white border-l-4 border-l-transparent">
        <Link href={"/favorites"}>Favorite Places</Link>
      </p>
      <p className="hover:text-gray-300 cursor-pointer hover:border-l-white border-l-4 border-l-transparent pl-2 drop-shadow">
        <Link href={"/settings"}>Settings</Link>
      </p>
    </nav>
  );
};

export default NavigationTabs;
