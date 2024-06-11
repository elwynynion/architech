"use client";
import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Navigation({ name }: { name: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session }: any = useSession();

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
      <nav className="flex py-4 mb-5 max-[650px]:flex-col relative justify-between">
        <div
          className={`${
            !session && "mr-auto"
          } flex max-[650px]:mr-0 items-center`}
        >
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
        <div
          className={`gap-3 max-[650px]:hidden ${
            session && "flex items-center"
          } `}
        >
          {session && (
            <>
              <Link
                className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
                href={"/home"}
              >
                Home
                <div
                  className={`bg-[#4F7853] transition-all duration-300 h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 ${
                    name === "home" && "opacity-100"
                  }`}
                ></div>
              </Link>
              <Link
                className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
                href={"/courses"}
              >
                Courses
                <div
                  className={`transition-all duration-300 bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 ${
                    name === "courses" && "opacity-100"
                  }`}
                ></div>
              </Link>
            </>
          )}
          <Link
            className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
            href={"/about"}
          >
            About Us
            <div
              className={`transition-all duration-300 bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 ${
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
              className={`transition-all duration-300 bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100 ${
                name === "creator" && "opacity-100"
              }`}
            ></div>
          </Link>

          {!session && (
            <Link
              className="relative text-[#4F7853] text-[20px] py-1 px-2 rounded-md font-bold group"
              href={"/login"}
            >
              Log In
              <div className="transition-all duration-300 bg-[#4F7853] h-1 absolute left-2 right-2 bottom-0 opacity-0 group-hover:opacity-100"></div>
            </Link>
          )}
        </div>

        <div className="max-[650px]:hidden">
          {session && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src={"/elements/avatar.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="border-2 transition-all duration-300 border-[#4F7853] rounded-full hover:border-[#89cc90] hover:opacity-90"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{session.user?.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
