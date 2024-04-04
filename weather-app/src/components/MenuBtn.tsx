"use client";
import { useState } from "react";

interface MenuProps {
  onPress: () => void;
}

const MenuBtn = ({ onPress }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform
      duration-300`;
  return (
    <>
      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group"
        onClick={() => {
          setIsOpen(!isOpen);
          onPress();
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
    </>
  );
};

export default MenuBtn;