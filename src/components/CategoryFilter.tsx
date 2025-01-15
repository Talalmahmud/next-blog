"use client";
import { getCategory } from "@/utils/actions";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const CategoryFilter = (props: Props) => {
  const [category, setCategory] = useState<any>([]);

  const getAllCategory = async () => {
    try {
      const data = await getCategory();

      setCategory(data?.category);
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
        <p>All</p>
        {category !== undefined &&
          category.length > 0 &&
          category?.map((item: any, index: any) => (
            <Link
              href={`/posts/${item?.id}`}
              key={index}
              className=" hover:text-blue-800 underline"
            >
              {item?.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
