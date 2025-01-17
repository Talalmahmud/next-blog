"use client";
import addUser, { getClerkUser } from "@/utils/actions";
import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Introduction = () => {
  // const addNewUser = async () => {
  //   try {
  //     const res = await addUser();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    getClerkUser();
  }, []);
  return (
    <div className=" flex justify-between items-center">
      <div className="">
        <p className=" text-3xl md:text-5xl xl:text-6xl font-semibold">
          Fuel Your Curiosity, Embrace the Knowledge
        </p>
        <p className=" mt-4 italic text-md md:text-xl">
          Thought-provoking articles that enrich your mind.
        </p>
      </div>
      <Link className=" hidden md:block relative" href="/blog-write">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="text-lg tracking-widest animate-spin animateButton"
        >
          <path
            id="circlePath"
            fill="none"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
          <text className="animate-pulse">
            <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
              Write Your Story.
            </textPath>
            <textPath href="#circlePath" startOffset="75%" textAnchor="middle">
              Share Your Idea.
            </textPath>
          </text>
        </svg>
        <div className=" absolute w-20 h-20 mx-auto top-[54px] left-0 right-0 bottom-0 flex justify-center items-center rounded-full bg-blue-800">
          <Image src={"/rightarrow.svg"} height={20} width={20} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Introduction;
