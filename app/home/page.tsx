import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="bg-[FFFEFA] min-h-dvh">
      <div className="container">
        <Navigation name="home" />

        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Search something"
            className="max-w-[600px] w-full border border-[#4F7853]  rounded-full py-2 px-4 focus:border-[#fafafa] mt-16 mb-20"
          />
          <div className="relative w-full">
            <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-lg right-[8px] z-0 "></div>
            <div className="w-full bg-[#81BC87] text-white font-bold rounded-lg px-10 pt-10 pb-14 relative">
              <p className="text-[45px]">Hi, User</p>
              <p className="text-[20px]">
                Eager to expand your skills? Let's get started!
              </p>

              <Image
                src="/elements/child-animated.png"
                alt=""
                width={330}
                height={330}
                className="absolute top-[-50px] right-[-50px] z-1"
              />
            </div>
          </div>

          <div className="w-full m-10">
            <div className="font-bold text-[#4F7853] text-[23px] flex">
              <p>Overview</p>
              <Link href="/module" className="ml-auto">
                See all
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
