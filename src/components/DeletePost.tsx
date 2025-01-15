"use client";
import { deletePost } from "@/utils/actions";
import Image from "next/image";
import React from "react";

type Props = {
  id: string;
};

const DeletePost = ({ id }: Props) => {
  const deleteItem = async () => {
    try {
      alert("Post is deleted");
      const res = await deletePost(id);
    } catch (error) {
      alert("Post is not deleted");
    }
  };
  return (
    <div className=" flex items-center gap-4">
      <Image
        src={"/delete.svg"}
        height={32}
        width={24}
        className=" h-10 w-6 "
        alt=""
      />

      <button
        onClick={deleteItem}
        className=" text-md text-red-400 hover:underline cursor-pointer"
      >
        delete item
      </button>
    </div>
  );
};

export default DeletePost;
