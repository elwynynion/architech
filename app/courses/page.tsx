import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import Link from "next/link";

async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-[#FFFEFA]">
      <div className="container">
        <Navigation name="courses" />
        <h1 className="font-bold text-[#4F7853] text-[60px] text-center">
          Computer System Architecture
        </h1>
        <div className="space-y-7">
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]">Prelim</p>
            <div className="grid grid-cols-5 gap-2 text-white mt-2">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-2">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-2">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-1">
                Architecture Basics
              </div>
            </div>
          </section>
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]">Midterm</p>
            <div className="grid grid-cols-5 gap-2 text-white  mt-2">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg  cursor-pointer hover:bg-[#5f8b64] col-span-2">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2">
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
            <div className="grid grid-cols-5 gap-2 text-white">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-1">
                Architecture Basics
              </div>
            </div>
          </section>
          <section>
            <p className="text-[#4F7853] font-bold text-[22px]  mt-2">Finals</p>
            <div className="grid grid-cols-5 gap-2 text-white">
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2">
                Architecture Basics
              </div>
              <div className="bg-[#81BC87] w-full p-5 rounded-lg cursor-pointer hover:bg-[#5f8b64] col-span-2">
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
            <div className="grid grid-cols-5 gap-2 text-white">
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
