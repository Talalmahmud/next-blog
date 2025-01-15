import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthUserData from "./AuthUserData";
import { getTimeDifference } from "@/lib/common";

type Props = {
  postId: string;
  authorId: string;
  title: string;
  createdAt: string;
  shortDesc: string;
};

const Blogitem = ({ postId, authorId, title, createdAt, shortDesc }: Props) => {
  return (
    <div className=" flex flex-col md:flex-row gap-4">
      <Image
        src={"/website.png"}
        height={100}
        width={100}
        className=" object-cover h-[146px] w-[200px] rounded-2xl"
        alt=""
      />
      <div className=" w-full text-pretty flex flex-col gap-2">
        <p className=" text-xl lg:text-3xl font-semibold md:font-bold">
          {title}
        </p>{" "}
        <div className=" flex items-center text-sm md:text-md gap-2 text-gray-400">
          <p>Written By</p>
          <AuthUserData id={authorId} />

          <span>{getTimeDifference(createdAt)}</span>
        </div>
        <p className=" text-sm text-justify text-gray-500">{shortDesc}</p>
        <Link
          className=" text-blue-800 hover:underline text-sm"
          href={`/${postId}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;
