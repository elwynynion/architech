"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/home");
    }
  }, [sessionStatus, router]);

  function isValidEmail(email: string) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
  async function handleSubmit(e: any) {
    console.log("click");
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Invalid Email");
      return;
    }
    if (!password || password.length < 8) {
      setError("Invalid Password");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/home");
    } else {
      setError("");
    }
  }
  if (sessionStatus === "loading") {
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
    sessionStatus !== "authenticated" && (
      <div className="bg-[#FFFEFA] h-[100vh] text-[#4F7853] flex items-center relative overflow-hidden ">
        <div className="container mt-[-15vh] relative z-10 flex max-[1175px]:justify-center">
          <div className="flex flex-col items-center w-full max-w-[500px] space-y-3">
            <Image
              src={"/architech-image/big-architech-logo.png"}
              alt={"architech"}
              width={120}
              height={120}
              className="max-[450px]:w-[80px] max-[450px]:h-[80px]"
            />
            <h1 className="font-bold text-[30px] max-[450px]:text-[25px]">
              Welcome Back!
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col max-w-[350px] space-y-4 w-full"
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-[#A7A7A7] rounded-lg text-black px-2 py-1 w-full peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-2 -top-2.5 bg-[#FFFEFA] px-1 text-[#4F7853] text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-[#A7A7A7] rounded-lg text-black px-2 py-1 w-full peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute text-[#4F7853] left-2 -top-2.5 bg-[#FFFEFA] px-1 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <Link
                href={"/forgot-password"}
                className="font-bold ml-auto text-[15px]"
              >
                Forgot your Password?
              </Link>
              <button
                type="submit"
                className="submit font-bold bg-[#4F7853] rounded-lg text-white text-[20px] p-1 hover:opacity-90"
              >
                Login
              </button>
              <p className="text-red-500 text-[16px] mb-4 text-center">
                {error && error}
              </p>
              <div className="text-[15px] text-center">
                Don{"'"}t have an account yet?{" "}
                <Link href={"/register"} className="underline font-bold">
                  Sign up for free
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute top-0 right-2 z-0 bottom-0 h-[100vh] w-[1000px] max-[1175px]:hidden">
          <Image src={"/elements/Ellipse1.png"} alt="" layout="fill" />
        </div>
        <div className="absolute top-0 right-[-5px] z-0 bottom-0 h-[100vh] w-[1000px] max-[1175px]:hidden">
          <Image src={"/elements/Ellipse2.png"} alt="" layout="fill" />
        </div>
        <div className="absolute top-16 right-0 z-0 bottom-0 max-[1175px]:hidden">
          <Image
            src={"/elements/person-animate.png"}
            alt=""
            width={900}
            height={900}
          />
        </div>
      </div>
    )
  );
}
