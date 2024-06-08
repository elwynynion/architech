"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [error, setError] = useState("");
  const router = useRouter();
  function isValidEmail(email: string) {
    const emailRegex = /^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    const user = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }
    if (!password || password < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          email: email,
          password: password,
        }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        console.log("User registered")
        router.push("/login");
      }
    } catch (err) {
      setError("Error, try again");
      console.log(err);
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
          <h1 className="font-bold text-[30px]">Welcome to our Site!</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[350px] space-y-4 w-full"
          >
            <div className="relative">
              <input
                type="text"
                name="username"
                id="username"
                className="border border-[#A7A7A7] rounded-lg text-black px-2 py-1 w-full peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="username"
                className="absolute left-2 -top-2.5 bg-[#FFFEFA] px-1 text-[#4F7853] text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
              >
                Username
              </label>
            </div>
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

            <button
              type="submit"
              className="submit font-bold bg-[#4F7853] rounded-lg text-white text-[20px] p-1 hover:opacity-90"
            >
              Register
            </button>
            <p className="text-red-500 text-[16px] mb-4">{error && error}</p>
            <div className="text-[15px] text-center">
              Already have an account?
              <Link href={"/login"} className="underline font-bold">
                Sign in now!
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
      <div className="absolute top-[120px] right-0 z-0 bottom-0 max-[1175px]:hidden">
        <Image
          src={"/elements/person-woman.png"}
          alt=""
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}
