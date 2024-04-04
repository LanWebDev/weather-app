import Link from "next/link";
import React from "react";

const MenuTabs = () => {
  return (
    <nav>
      <div className="bg-white bg-opacity-70 p-2 max-w-max border-2  border-sky-200 text-gray-600 text-2xl  rounded-2xl ">
        <p className="border-b-2 border-gray-50 hover:text-gray-400">
          <Link href={"/favorites"}>Favorite Places</Link>
        </p>
        <p className="hover:text-gray-400">
          <Link href={"/settings"}>Settings</Link>
        </p>
      </div>
    </nav>
  );
};

export default MenuTabs;
