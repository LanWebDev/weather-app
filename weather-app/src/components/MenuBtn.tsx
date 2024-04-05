"use client";
import { useState } from "react";
import NavigationTabs from "./NavigationTabs";
import Link from "next/link";
import { useClickAway } from "@uidotdev/usehooks";

const MenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform
      duration-300`;
  return (
    <div ref={ref} className="max-w-max">
      <button
        className="flex flex-col h-12 w-12 rounded-t-xl justify-center items-center group hover:bg-gray-300 bg-opacity-70 border-sky-200 "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>

      {isOpen && (
        <nav className="absolute bg-white bg-opacity-70 p-4 max-w-max border-2  border-sky-200 text-gray-600 text-2xl rounded-2xl rounded-tl rounded-br">
          <p className="border-b-2 border-gray-50 hover:text-gray-400">
            <Link href={"/favorites"}>Favorite Places</Link>
          </p>
          <p className="hover:text-gray-400 cursor-pointer hover:bg-gray-200 hover:border-l-white border-l-4 border-l-transparent ">
            <Link href={"/settings"}>Settings</Link>
          </p>
        </nav>
      )}
    </div>
  );
};

export default MenuBtn;
