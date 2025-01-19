"use client";

import { useUser } from "@clerk/nextjs";
import React, { ChangeEvent, useEffect, useState } from "react";

import { createPost, getCategory } from "@/utils/actions";
import Link from "next/link";
// import QuillEditor from "./ReactQuillRichText";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const BlogForm = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [resource, setResource] = useState<any>("");

  const [category, setCategory] = useState<any[]>([]);
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [blogData, setBlogData] = useState({
    title: "",
    short_description: "",
    categoryId: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [content, setContent] = useState("testafdafasf");

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update the state with editor content
  };

  const getAllCategory = async () => {
    try {
      const data: any = await getCategory();
      setCategory(data?.category || []);
      setBlogData((prev) => ({
        ...prev,
        categoryId: data?.category?.[0]?.id || "",
      }));
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
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
          content,
          resource?.public_id,
          blogData?.short_description,
          isFeatured
        );
        if (postCreate) {
          alert("New Blog is added.");
        }
      } catch (error) {
        alert("New Blog is not added.");
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  if (!isLoaded || loading) {
    return (
      <div className="text-[20px] font-semibold transition-all text-gray-800">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="text-[20px] transition-all text-gray-500">
        You don't have login!{" "}
        <Link className="text-blue-700 hover:underline" href="/sign-in">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 pb-20">
      <p className="text-xl">Create A New Post</p>
      <div className=" flex w-full justify-between">
        <div className=" flex flex-1 flex-col gap-4">
          <div>
            <label
              className="flex items-center gap-2 rounded-2xl"
              htmlFor="featured"
            >
              <input
                checked={isFeatured}
                onChange={handleCheckbox}
                type="checkbox"
                id="featured"
              />
              Featured
            </label>
          </div>
          {/* <div>
            <label
              className="px-4 py-2 cursor-pointer bg-white rounded-2xl inline-block"
              htmlFor="imgUpload"
            >
              Upload a Cover Image
            </label>
            <input className="hidden" type="file" id="imgUpload" />
          </div> */}
          <div>
            <CldUploadWidget
              uploadPreset="chat-app"
              onSuccess={(result: any, { widget }) => {
                setResource(result); // { public_id, secure_url, etc }
              }}
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                function handleOnClick() {
                  setResource(undefined);
                  open();
                }
                return (
                  <button
                    onClick={handleOnClick}
                    className="px-4 py-2 cursor-pointer bg-white rounded-2xl inline-block"
                  >
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          <input
            className="focus:text-blue-950 text-2xl font-semibold bg-transparent outline-none"
            type="text"
            required
            value={blogData?.title}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Add Post Title"
          />
          <div className="flex items-center gap-4">
            <label htmlFor="category" className="text-md">
              Choose a category:
            </label>
            <select
              id="category"
              value={blogData?.categoryId}
              required
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, categoryId: e.target.value }))
              }
              className="outline-none px-4 py-2 bg-white text-black rounded-2xl"
            >
              {category?.map((item: any, index) => (
                <option key={index} value={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* image show */}
        {resource?.info && (
          <Image
            src={resource?.info?.url}
            height={400}
            width={460}
            className=" h-[400px] w-[460px]"
            alt=" my image"
          />
        )}
      </div>
      <textarea
        required
        rows={4}
        value={blogData?.short_description}
        onChange={(e) =>
          setBlogData((prev) => ({
            ...prev,
            short_description: e.target.value,
          }))
        }
        placeholder="Add short descriptions"
        className="px-4 py-2 text-md outline-none bg-white rounded-2xl"
      />
      {/* <CustomReactQuill value={value} onChange={setValue} /> */}
      {/* <QuillEditor setContent={setContent} /> */}
      <div>
        <button
          onClick={handleSubmit}
          className="w-32 bg-blue-800 text-white px-4 py-2 rounded-2xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
