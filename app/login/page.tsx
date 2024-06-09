"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/home");
    }
  }, [session, router]);

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

  return (
    <div className="bg-[#FFFEFA] h-[100vh] text-[#4F7853] flex items-center relative overflow-hidden ">
      <div className="container mt-[-15vh] relative z-10 flex max-[1175px]:justify-center">
        <div className="flex flex-col items-center w-full max-w-[500px] space-y-3">
          <Image
            src={"/architech-image/big-architech-logo.png"}
            alt={"architech"}
            width={120}
            height={120}
          />
          <h1 className="font-bold text-[30px]">Welcome Back!</h1>
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
  );
}
