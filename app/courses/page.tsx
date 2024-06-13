"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import Link from "next/link";

function Page() {
  const { data: session, status: sessionStatus } = useSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-[#FFFEFA]">
      <div className="container">
        <Navigation name="courses" />
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search something"
            className="max-w-[600px] w-full border border-[#4F7853]  rounded-full py-2 px-4 focus:border-[#fafafa] my-10 mx-auto"
          />
        </div>

        <h1 className="font-bold mb-4 text-[#4F7853] text-[60px] text-center max-[980px]:text-[50px] max-[770px]:text-[40px] max-[625px]:text-[30px] max-[500px]:text-[27px]">
          Computer System Architecture
        </h1>
        <div className="space-y-7">
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]">Prelim</p>
            <div className="grid grid-cols-5 gap-2 max-[800px]:grid-cols-1 text-white mt-2">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-1">
                Architecture Basics
              </div>
            </div>
          </section>
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]">Midterm</p>
            <div className="grid grid-cols-5 gap-2 text-white max-[800px]:grid-cols-1 mt-2">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-1">
                Architecture Basics
              </div>
            </div>
          </section>
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]  mt-2">
              Pre-finals
            </p>
            <div className="grid grid-cols-5 gap-2 text-white max-[800px]:grid-cols-1">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-1">
                Architecture Basics
              </div>
            </div>
          </section>
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]  mt-2">Finals</p>
            <div className="grid grid-cols-5 gap-2 text-white max-[800px]:grid-cols-1">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2 max-[800px]:col-span-1">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-1">
                Architecture Basics
              </div>
            </div>
          </section>

          <section>
            <p className="text-[#4F7853] font-bold text-[22px] mt-2">
              References
            </p>
            <div className="grid grid-cols-5 gap-2 text-white max-[800px]:grid-cols-1">
              <Link
                href="/courses/references"
                className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2"
              >
                View References
              </Link>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Page;
