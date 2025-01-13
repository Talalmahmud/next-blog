"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link
        href={"/"}
        className=" hover:text-gray-700 flex items-center gap-2 text-2xl font-semibold"
      >
        {/* <Image
          src={"/next.svg"}
          height={32}
          width={32}
          alt=""
          className=" h-[32px] w-[32px]"
        /> */}
        <span>Talal blog</span>
      </Link>
      {/* desktop */}
      <div className=" hidden md:flex font-medium text-lg items-center gap-8 xl:gap-12">
        <Link className=" " href={"/"}>
          Home
        </Link>
        <Link className=" " href={"/"}>
          Trending
        </Link>
        <Link className=" " href={"/"}>
          Popular
        </Link>
        <Link className=" " href={"/"}>
          About
        </Link>
        <SignedOut>
          {" "}
          <Link
            className=" px-4 py-2 rounded-3xl bg-blue-800  text-white
         "
            href={"/sign-in"}
          >
            Login 👏
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {/* mobile */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className=" block md:hidden"
      >
        {open ? (
          <Image
            src={"/cross.svg"}
            height={16}
            width={16}
            alt=""
            className=" cursor-pointer"
          />
        ) : (
          <Image
            src={"/menubar.svg"}
            height={16}
            width={16}
            alt=""
            className=" cursor-pointer"
          />
        )}
      </div>
      <div
        className={` absolute bg-white top-16 min-h-screen w-full text-lg font-semibold transition-all flex flex-col justify-center items-center gap-2 ${
          open ? " -right-0" : " -right-[100%]"
        }`}
      >
        <Link className=" " href={"/"}>
          Home
        </Link>
        <Link className=" " href={"/"}>
          Trending
        </Link>
        <Link className=" " href={"/"}>
          Popular
        </Link>
        <Link className=" " href={"/"}>
          About
        </Link>
        <SignedOut>
          {" "}
          <Link
            className=" px-4 py-2 rounded-3xl bg-blue-800  text-white
         "
            href={"/sign-in"}
          >
            Login 👏
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
