import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className=" sticky top-4 w-full hidden md:flex justify-center  items-center mt-8 p-4 shadow-md  gap-8 bg-white rounded-3xl lg:rounded-full">
      <div className=" flex-1 flex items-center justify-between flex-wrap">
        <Link
          href={"/"}
          className=" bg-blue-800 text-white px-4 py-2 rounded-full"
        >
          All Post
        </Link>
        <Link href={"/"} className=" hover:bg-blue-50 px-4 py-2 rounded-full">
          Web Design
        </Link>{" "}
        <Link href={"/"} className=" hover:bg-blue-50 px-4 py-2 rounded-full">
          SEO
        </Link>
        <Link href={"/"} className=" hover:bg-blue-50 px-4 py-2 rounded-full">
          Database
        </Link>
        <Link href={"/"} className=" hover:bg-blue-50 px-4 py-2 rounded-full">
          DevOps
        </Link>
        <Link href={"/"} className=" hover:bg-blue-50 px-4 py-2 rounded-full">
          Marketing
        </Link>
      </div>
      <span className=" text-2xl font-semibold ">|</span>
      <div className=" bg-gray-100 p-2 rounded-full flex items-center gap-4">
        <Image src={"/search.svg"} height={16} width={16} alt="" />
        <input
          type="text"
          className=" bg-transparent outline-none text-[12px]"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Category;
