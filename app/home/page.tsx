import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-[#FFFEFA] min-h-dvh">
      <div className="container">
        <Navigation name="home" />

        <div className="flex flex-col items-center">
          <div className="relative w-full mt-16">
            <div className="outline outline-[#4F7853] w-full h-full absolute top-[-8px] rounded-lg right-[8px] z-0 "></div>

            <div className="w-full bg-[#81BC87] text-white font-bold rounded-lg px-10 pt-10 pb-14 relative">
              <p className="text-[45px] max-[1200px]:text-[38px] max-[765px]:text-[28px] max-[320px]:text-[18px]">
                Hi {session.user?.email},{" "}
              </p>
              <p className="text-[20px] max-[1200px]:text-[15px] max-[765px]:text-[12px]">
                Eager to expand your skills? Let's get started!
              </p>

              <Image
                src="/elements/child-animated.png"
                alt=""
                width={330}
                height={330}
                className="absolute top-[-50px] right-[-50px] z-1 max-[765px]:hidden"
              />
            </div>
          </div>

          <div className="w-full m-10 ">
            <div className="font-bold text-[#4F7853] text-[23px] flex">
              <p>Overview</p>
              <Link href="/courses" className="ml-auto">
                See all
              </Link>
            </div>
            <div className="grid grid-cols-4 max-[1200px]:grid-cols-2    max-[650px]:grid-cols-1 gap-4 ">
              <Link
                href={"/courses/prelim"}
                className="bg-[#81BC87] transition-all duration-300 w-full p-5 rounded-lg mt-4 cursor-pointer hover:bg-[#5f8b64] "
              >
                <p className="text-white font-bold text-[25px] max-[320px]:text-[18px]">
                  Prelims
                </p>
                <div className="w-full h-[140px] flex justify-center items-center">
                  <Image
                    src={"/elements/prelim.png"}
                    alt=""
                    width={140}
                    height={140}
                    className="hover:w-[170px] transition-all duration-300"
                  />
                </div>
              </Link>
              <Link
                href={"/courses/prelim"}
                className="bg-[#81BC87] transition-all duration-300 w-full p-5 rounded-lg mt-4 cursor-pointer hover:bg-[#5f8b64] "
              >
                <p className="text-white font-bold text-[25px] max-[320px]:text-[18px]">
                  Midterms
                </p>
                <div className="w-full h-[140px] flex justify-center items-center">
                  <Image
                    src={"/elements/prelim.png"}
                    alt=""
                    width={140}
                    height={140}
                    className="hover:w-[170px] transition-all duration-300"
                  />
                </div>
              </Link>

              <Link
                href={"/courses/pre-final"}
                className="bg-[#81BC87] transition-all duration-300 w-full p-5 rounded-lg mt-4 cursor-pointer hover:bg-[#5f8b64]"
              >
                <p className="text-white font-bold text-[25px] max-[320px]:text-[18px]">
                  Pre-finals
                </p>
                <div className="w-full h-[140px] flex justify-center items-center">
                  <Image
                    src={"/elements/prelim.png"}
                    alt=""
                    width={140}
                    height={140}
                    className="hover:w-[170px] transition-all duration-300"
                  />
                </div>
              </Link>

              <Link
                href={"/courses/prelim"}
                className="bg-[#81BC87] transition-all duration-300 w-full p-5 rounded-lg mt-4 cursor-pointer hover:bg-[#5f8b64]"
              >
                <p className="text-white font-bold text-[25px] max-[320px]:text-[18px]">
                  Finals
                </p>
                <div className="w-full h-[140px] flex justify-center items-center ">
                  <Image
                    src={"/elements/prelim.png"}
                    alt=""
                    width={140}
                    height={140}
                    className="hover:w-[170px] transition-all duration-300"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
