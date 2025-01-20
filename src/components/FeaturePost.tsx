"use client";
import { getTimeDifference } from "@/lib/common";
import { getFeatureBlog } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FeaturePost = () => {
  const [featureList, setFeatureList] = useState<any>([]);

  const getFeaturePost = async () => {
    try {
      const res = await getFeatureBlog();
      setFeatureList(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeaturePost();
  }, []);
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-8 ">
      {/* left side */}
      <div className=" flex flex-col gap-4">
        <Image
          src={featureList[0]?.cover_img || "/website.png"}
          height={100}
          width={100}
          className=" object-cover w-full rounded-2xl"
          alt=""
        />
        <div className=" flex  gap-2">
          <h1 className=" font-semibold lg:text-lg">01.</h1>
          <Link
            href={`/${featureList[0]?.id}`}
            className=" text-blue-800 lg:text-lg hover:underline"
          >
            {featureList[0]?.title}
          </Link>
          <span className=" text-[12px] whitespace-nowrap text-gray-500">
            {getTimeDifference(featureList[0]?.createdAt)}
          </span>
        </div>
        <p className=" text-xl lg:text-3xl font-semibold md:font-bold">
          {featureList[0]?.short_description}
        </p>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-4">
        {featureList.slice(1)?.map((item: any, index: number) => (
          <Link
            href={`/${item.id}`}
            key={index}
            className=" flex gap-4 hover:bg-[#e6e6ff]/90 hover:shadow-md rounded-2xl"
          >
            <Image
              src={item?.cover_img || "/website.png"}
              height={100}
              width={100}
              className=" object-cover aspect-video rounded-2xl w-1/3"
              alt=""
            />
            <div className=" flex flex-col gap-2">
              <div className=" flex text-sm items-center gap-2">
                <h1 className=" font-semibold">0{index + 1}.</h1>
                <p className=" text-blue-800 hover:underline">
                  {item?.title.slice(0, 20)}
                </p>
                <span className="text-gray-500">
                  {" "}
                  {getTimeDifference(item.createdAt)}
                </span>
              </div>
              <p className=" text-base sm:text-lg  md:text-2xl lg:text-sm font-semibold ">
                {item?.short_description.slice(0, 30)}
              </p>
            </div>
          </Link>
        ))}
        {/* <div className=" flex gap-4">
          <Image
            src={"/website.png"}
            height={100}
            width={100}
            className=" object-cover aspect-video rounded-2xl w-1/3"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <div className=" flex text-sm items-center gap-2">
              <h1 className=" font-semibold">01.</h1>
              <Link href={"/"} className=" text-blue-800 hover:underline">
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <p className=" text-base sm:text-lg   md:text-2xl lg:text-sm font-semibold ">
              recusandae consequatur enim ratione provident nesciunt temporibus?
            </p>
          </div>
        </div>
        <div className=" flex gap-4">
          <Image
            src={"/website.png"}
            height={100}
            width={100}
            className=" object-cover aspect-video rounded-2xl w-1/3"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <div className=" flex text-sm items-center gap-2">
              <h1 className=" font-semibold">01.</h1>
              <Link href={"/"} className=" text-blue-800 hover:underline">
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <p className=" text-base sm:text-lg   md:text-2xl lg:text-sm font-semibold ">
              recusandae consequatur enim ratione provident nesciunt temporibus?
            </p>
          </div>
        </div>
        <div className=" flex gap-4">
          <Image
            src={"/website.png"}
            height={100}
            width={100}
            className=" object-cover aspect-video rounded-2xl w-1/3"
            alt=""
          />
          <div className=" flex flex-col gap-2">
            <div className=" flex text-sm items-center gap-2">
              <h1 className=" font-semibold">01.</h1>
              <Link href={"/"} className=" text-blue-800 hover:underline">
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <p className=" text-base sm:text-lg   md:text-2xl lg:text-sm font-semibold ">
              recusandae consequatur enim ratione provident nesciunt temporibus?
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturePost;
