"use client";
import {
  SquareUserRound,
  GraduationCap,
  Mail,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Navigation from "@/components/shared/Navigation";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const { data: session, status }: any = useSession();

  if (!session) {
    redirect("/");
  }
  if (status === "loading") {
    return (
      <div role="status" className="h-[100vh] flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div className="bg-[#FFFEFA] h-[100vh]">
      <div className="container">
        <Navigation name="profile" />
        <div>
          <div className="bg-[#81BC87] h-[150px] w-full border-4 border-[#4F7853] rounded-xl relative">
            <Image
              src={session.user?.profilepic || "/elements/Avatar2.png"}
              alt="avatar"
              width={150}
              height={150}
              className="rounded-full object-cover object-top w-[150px] h-[150px] border-4 border-[#4F7853] absolute bottom-[-70px] left-5 max-[440px]:w-[120px] max-[440px]:h-[120px] max-[440px]:left-[60px]"
            />
          </div>
          <div className="flex items-center max-[440px]:flex-col max-[440px]:items-stretch">
            <div className="text-[#4F7853] mt-[65px] ml-7 mr-auto max-[440px]:text-center max-[440px]:mx-auto">
              <p className="font-bold text-[25px]">
                {session.user?.firstname} {session.user?.lastname}
              </p>
              <p className="font-semibold">@{session.user?.username}</p>
              <p>{session.user?.bio}</p>
            </div>
            <div className="flex flex-col space-y-2 mt-4 font-bold">
              <Link
                href="/profile/edit-profile"
                className="border-2 text-center text-[#4F7853]  border-[#4F7853] py-1 px-9 rounded-md hover:bg-[#4F7853] hover:text-white transition-all duration-300"
              >
                Edit Profile
              </Link>
              <button
                className="border-2 text-[#4F7853] border-[#4F7853] py-1 px-9 rounded-md hover:bg-[#4F7853] hover:text-white transition-all duration-300"
                onClick={() => {
                  signOut();
                }}
              >
                Log Out
              </button>
            </div>
          </div>

          <hr className="border-2 border-[#4F7853] my-4" />

          <div className="flex space-x-4 max-[750px]:flex-col max-[750px]:space-x-0  max-[750px]:space-y-2 max-[750px]:items-center">
            <div className="max-w-[500px] w-full text-[#4F7853] border-2 border-[#4F7853] rounded-xl py-2 px-4 mr-auto max-[750px]:mr-0">
              <h2 className="font-bold text-[20px]">Information</h2>
              <hr className="border-1 border-[#4F7853] mb-2" />
              <p className="flex text-[18px]">
                <SquareUserRound className="mr-2" />
                <b>Name:&nbsp;</b> {session.user?.firstname}{" "}
                {session.user?.lastname}
              </p>
              <p className="flex text-[18px]">
                <GraduationCap className="mr-2" />
                <b>Course:&nbsp; </b> {session.user?.courses}
              </p>
              <p className="flex text-[18px]">
                <Mail className="mr-2" />
                <b>E-mail:&nbsp; </b> {session.user?.email}
              </p>
            </div>
            <div className="max-w-[500px] w-full text-[#4F7853] border-2 border-[#4F7853] rounded-xl py-2 px-4">
              <h2 className="font-bold text-[20px]">Socials</h2>
              <hr className="border-1 border-[#4F7853] mb-2" />
              <p className="flex text-[18px]">
                <Facebook className="mr-2" />
                <b>Facebook:&nbsp; </b> {session.user?.facebook}
              </p>
              <p className="flex text-[18px]">
                <Linkedin className="mr-2" />
                <b>LinkedIn:&nbsp; </b> {session.user?.linkedin}
              </p>
              <p className="flex text-[18px]">
                <Github className="mr-2" />
                <b>GitHub:&nbsp; </b> {session.user?.github}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
