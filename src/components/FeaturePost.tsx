import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturePost = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-8 ">
      {/* left side */}
      <div className=" flex flex-col gap-4">
        <Image
          src={"/website.png"}
          height={100}
          width={100}
          className=" object-cover w-full rounded-2xl"
          alt=""
        />
        <div className=" flex items-center gap-2">
          <h1 className=" font-semibold lg:text-lg">01.</h1>
          <Link
            href={"/"}
            className=" text-blue-800 lg:text-lg hover:underline"
          >
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p className=" text-xl lg:text-3xl font-semibold md:font-bold">
          recusandae consequatur enim ratione provident nesciunt temporibus?
        </p>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};

export default FeaturePost;
