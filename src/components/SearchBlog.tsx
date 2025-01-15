"use client";
import { getTimeDifference } from "@/lib/common";
import { searchBlogByTitleText } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const SearchBlog = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [blog, setBlog] = useState<any[]>([]);

  const getBlog = async () => {
    try {
      const res: any = await searchBlogByTitleText(search);
      setBlog(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [search]);

  return (
    <div className=" flex flex-col gap-2 text-sm text-blue-950">
      <div className=" bg-gray-100 p-2 rounded-full flex items-center relative gap-2">
        <Image src={"/search.svg"} height={16} width={16} alt="" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-transparent outline-none text-[14px]"
          placeholder="Search"
        />
        {search !== "" && (
          <div className=" max-h-[150px] overflow-auto w-full flex flex-col gap-2 absolute top-10 left-0 z-20 rounded-xl bg-white border-[1px] border-gray-50 p-2">
            {blog?.map((item: any, index: any) => (
              <Link
                href={`/${item?.id}`}
                key={index}
                className=" flex flex-col hover:bg-slate-50 shadow-md bg-slate-100"
              >
                <p className=" text-[10px] font-semibold leading-tight">
                  {item?.title?.slice(0, 40)}...
                </p>
                <span className=" text-right text-[10px] text-gray-500">
                  {getTimeDifference(item?.createdAt)}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBlog;
