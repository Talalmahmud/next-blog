import Image from "next/image";
import Link from "next/link";
import React from "react";

const Postitem = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4">
      <Image
        src={"/website.png"}
        height={100}
        width={100}
        className=" block lg:hidden object-cover w-full aspect-video rounded-2xl"
        alt=""
      />
      <div className=" flex flex-col gap-2">
        <p className=" text-xl lg:text-3xl font-semibold md:font-bold">
          recusandae consequatur enim ratione provident nesciunt temporibus?
        </p>{" "}
        <div className=" flex items-center text-sm md:text-md gap-2 text-gray-400">
          <p>Written By</p>
          <p className=" text-blue-800 lg:text-lg hover:underline">Jon dev</p>
          <p className=" text-blue-800">Web Design</p>

          <span>2 days ago</span>
        </div>
        <p className=" text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          suscipit, vitae corporis architecto ipsa aliquam possimus rerum magnam
          dolore. Debitis possimus vero excepturi aspernatur obcaecati labore
          corporis dolorum, velit temporibus.
        </p>
        <Link className=" text-blue-800 hover:underline text-sm" href={"/"}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Postitem;
