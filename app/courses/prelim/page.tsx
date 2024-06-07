import React from "react";
import Navigation from "@/components/shared/Navigation";

function page() {
  return (
    <main className="bg-white h-lvh">
      <div className="container">
        <Navigation />
        <div className="border border-[#4f7853] rounded-xl p-5">
          <h1 className="flex font-bold text-[#4f7853] text-lg">
            Prelim
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3.0"
              stroke="currentColor"
              className="size-6 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Lesson 1
          </h1>
          <h2 className="textflex font-black text-center text-[#4f7853] text-6xl">
            Architecture Basics
          </h2>
        </div>
      </div>
    </main>
  );
}

export default page;
