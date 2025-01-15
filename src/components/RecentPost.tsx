"use client";
import React, { useEffect, useState } from "react";
import { getFeatureBlog } from "@/utils/actions";
import Link from "next/link";
import Image from "next/image";
import AuthUserData from "./AuthUserData";
import { getTimeDifference } from "@/lib/common";

const RecentPost = () => {
  const [blogList, setBlogList] = useState<any>([]);

  const getFeaturePost = async () => {
    try {
      const res = await getFeatureBlog();
      setBlogList(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeaturePost();
  }, []);
  return (
    <div className=" mt-8 flex flex-col gap-6">
      <p className=" text-gray-600 text-lg md:text-xl">Recent Posts</p>
      {blogList?.map((item: any, index: any) => (
        <div key={index} className=" flex flex-col md:flex-row gap-4">
          <Image
            src={"/website.png"}
            height={100}
            width={100}
            className=" block lg:hidden object-cover w-full aspect-video rounded-2xl"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <p className=" text-xl lg:text-3xl font-semibold md:font-bold">
              {item?.title}
            </p>{" "}
            <div className=" flex items-center text-sm md:text-md gap-2 text-gray-400">
              <p>Written By</p>
              <AuthUserData id={item?.authId} />
              <p className=" text-blue-800">Web Design</p>

              <span>{getTimeDifference(item?.createdAt)}</span>
            </div>
            <p className=" text-sm text-gray-500">{item?.short_description}</p>
            <Link
              className=" text-blue-800 hover:underline text-sm"
              href={`/${item?.id}`}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
