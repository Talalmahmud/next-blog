"use client";
import { getCategory } from "@/utils/actions";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";

type Props = {
  paramsId?: string;
};

const CategoryFilter = ({ paramsId }: Props) => {
  const [category, setCategory] = useState<any>([]);
  const [isPending, startTransition] = useTransition();

  const getAllCategory = async () => {
    try {
      const data = await getCategory();
      startTransition(() => {
        setCategory(data?.category);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <div>
      <div className=" flex flex-col gap-2 text-sm text-blue-950">
        <p>Categories</p>
        <Link
          className={`${
            paramsId === "all" && "underline text-blue-800 "
          } hover:underline`}
          href={`/posts/all`}
        >
          All
        </Link>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          category !== undefined &&
          category.length > 0 &&
          category?.map((item: any, index: any) => (
            <Link
              href={`/posts/${item?.id}`}
              key={index}
              className={` ${
                item?.id === paramsId && "underline text-blue-800 "
              } hover:text-blue-800 hover:underline`}
            >
              {item?.name}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
