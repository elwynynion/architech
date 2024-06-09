"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuBar from "../ui/MenuBar";
import Link from "next/link";

function Navigation({ name }: { name: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <MenuBar isVisible={isMenuOpen} toggleMenu={toggleMenu} name={name} />
      <nav className="flex py-4 mb-5 max-[650px]:flex-col relative">
        <div className="mr-auto flex max-[650px]:mr-0">
          <Link className="flex space-x-2 cursor-pointer mr-auto" href={"/"}>
            <Image
              src={"/architech-image/architech-icon.png"}
              width={33}
              height={33}
              alt="Architech Icon"
            />
            <div className="font-bold text-[#4F7853] text-[24px]">
              ArchiTech
            </div>
          </Link>
          <button className="hidden max-[650px]:block" onClick={toggleMenu}>
            <Image
              src={"/elements/hamburger-icon.png"}
              alt="hamburger menu"
              width={30}
              height={30}
            />
          </button>
        </div>
        <div className="space-x-2 max-[650px]:hidden">
          <Link
            className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
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
            className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
            href={"/creator"}
          >
            Creators
            <div
              className={`bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 ${
                name === "creator" && "opacity-100"
              }`}
            ></div>
          </Link>
          <Link
            className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
            href={"/login"}
          >
            Log In
            <div className="bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
