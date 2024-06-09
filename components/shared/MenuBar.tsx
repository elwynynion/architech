"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

interface MenuBarProps {
  isVisible: boolean;
  toggleMenu: () => void;
  name: string;
}
function MenuBar({ isVisible, toggleMenu, name }: MenuBarProps) {
  const { data: session }: any = useSession();
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
        <div
          className={`bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 ${
            name === "about" && "opacity-100"
          }`}
        ></div>
      </Link>
      <Link
        className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
        href={"/creator"}
      >
        Creators
        <div
          className={` ${
            name === "creator" && "opacity-100"
          } bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100`}
        ></div>
      </Link>
      {!session ? (
        <Link
          className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
          href={"/"}
        >
          Log In
          <div className="bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
        </Link>
      ) : (
        <>
          <Link
            className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
            href={"/"}
          >
            Profile
            <div className="bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
          </Link>
          <button
            className="relative text-[#4F7853] text-[20px] py-1 px-2 m-4 rounded-md font-bold group"
            onClick={() => {
              signOut();
            }}
          >
            Logout
            <div className="bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 cursor-pointer"></div>
          </button>
        </>
      )}
    </div>
  );
}

export default MenuBar;
