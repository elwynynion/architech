import React from "react";
import Image from "next/image";
import Link from "next/link";
interface MenuBarProps {
  isVisible: boolean;
  toggleMenu: () => void;
}
function MenuBar({ isVisible, toggleMenu }: MenuBarProps) {
  return (
    <div
      className={`text-center fixed box-border z-50 bg-[#FAF6E9] max-[650px]:flex flex-col top-0 right-0 h-full transition-all duration-500 ${
        isVisible ? "w-full" : "w-0"
      }`}
    >
      <button className="m-4" onClick={toggleMenu}>
        <Image
          src={"/elements/x-icon.png"}
          alt={"x-icon"}
          width={33}
          height={33}
        />
      </button>
      <Link
        className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
        href={"/about"}
      >
        About Us
        <div className="bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
      </Link>
      <Link
        className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
        href={"/creator"}
      >
        Creators
        <div className=" bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
      </Link>
      <Link
        className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
        href={"/"}
      >
        Log In
        <div className="bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
      </Link>
    </div>
  );
}

export default MenuBar;
