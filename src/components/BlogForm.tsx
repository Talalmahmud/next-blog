"use client";
import { useUser } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import CustomReactQuill from "./CustomTextarea";

const BlogForm = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState<any>("");

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
        You show login!
      </div>
    );
  }
  return (
    <div className="  flex flex-col gap-6">
      <p className=" text-xl">Create A New Post</p>
      <div>
        {" "}
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
        name=""
        placeholder="Add Post Title"
      />
      <div className=" flex items-center gap-4">
        <p className=" text-md ">Choose a category:</p>
        <select className=" outline-none px-4 py-2 bg-white text-black rounded-2xl">
          <option value="">Web Design</option>
          <option value="">SEO</option>
          <option value="">Database</option>
          <option value="">DevOps</option>
          <option value="">Marketing</option>
        </select>
      </div>
      <textarea
        name=""
        id=""
        rows={4}
        placeholder="Add short descriptions"
        className="px-4 py-2 text-md outline-none bg-white rounded-2xl"
      />
      <CustomReactQuill value={value} setValue={setValue} />
    </div>
  );
};

export default BlogForm;
