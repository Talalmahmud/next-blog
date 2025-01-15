"use client";
import { useUser } from "@clerk/nextjs";
import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
import CustomReactQuill from "./CustomTextarea";
import { createPost, getCategory } from "@/utils/actions";
import Link from "next/link";

const BlogForm = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const [value, setValue] = useState<string>("");
  const [category, setCategory] = useState<any>([]);
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [blogData, setBlogData] = useState({
    title: "",
    short_description: "",
    categoryId: "",
    cover_img: "jhhjg",
  });

  const getAllCategory = async () => {
    try {
      const data: any = await getCategory();
      setCategory(data?.category);
      setBlogData({ ...blogData, categoryId: data?.category[0]?.id });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFeatured(e.target.checked);
  };
  const handleSubmit = async () => {
    if (user) {
      try {
        const userId = user?.id;
        const postCreate = await createPost(
          userId,
          blogData?.categoryId,
          blogData?.title,
          value,
          blogData?.cover_img,
          blogData?.short_description,
          isFeatured
        );
        alert("New Blog is added.");
      } catch (error) {
        alert("New Blog is not added.");
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  if (!isLoaded) {
    return (
      <div className=" text-[20px] font-semibold transition-all text-gray-800">
        Loading...
      </div>
    );
  }
  if (isLoaded && !isSignedIn) {
    return (
      <div className=" text-[20px] transition-all text-gray-500">
        You don't have login!{" "}
        <Link className=" text-blue-700 hover:underline" href={"/sign-in"}>
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className=" min-h-screen flex flex-col gap-6 pb-20">
      <p className=" text-xl">Create A New Post</p>
      <div>
        {" "}
        <label
          className=" flex items-center gap-2 rounded-2xl"
          htmlFor="featured"
        >
          <input
            checked={isFeatured}
            onChange={handleCheckbox}
            className=""
            type="checkbox"
            name=""
            id="featured"
          />
          Featured
        </label>
      </div>
      <div>
        <label
          className=" px-4 py-2 cursor-pointer bg-white rounded-2xl inline-block"
          htmlFor="imgUpload"
        >
          Upload a Cover Image
        </label>
        <input className=" hidden" type="file" name="" id="imgUpload" />
      </div>
      <input
        className=" focus:text-blue-950 text-2xl font-semibold bg-transparent outline-none"
        type="text"
        required
        name=""
        value={blogData?.title}
        onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        placeholder="Add Post Title"
      />
      <div className=" flex items-center gap-4">
        <label htmlFor="category" className=" text-md ">
          Choose a category:
        </label>
        <select
          id="category"
          value={blogData?.categoryId}
          required
          onChange={
            (e) => setBlogData({ ...blogData, categoryId: e.target.value })
            // console.log(e)
          }
          className=" outline-none px-4 py-2 bg-white text-black rounded-2xl"
        >
          {category?.map((item: any, index: any) => (
            <option key={index} value={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        required
        name=""
        id=""
        rows={4}
        value={blogData?.short_description}
        onChange={(e) =>
          setBlogData({ ...blogData, short_description: e.target.value })
        }
        placeholder="Add short descriptions"
        className="px-4 py-2 text-md outline-none bg-white rounded-2xl"
      />
      <CustomReactQuill value={value} onChange={setValue} />

      <div>
        {" "}
        <button
          onClick={handleSubmit}
          className=" w-32 bg-blue-800 text-white px-4 py-2 rounded-2xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
