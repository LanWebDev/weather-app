import Link from "next/link";
import React from "react";

const MenuTabs = () => {
  return (
    <nav>
      <div className="bg-sky-200 p-2 max-w-max rounded-lg divide-x-0 border-2 border-gray-50 text-gray-600">
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
