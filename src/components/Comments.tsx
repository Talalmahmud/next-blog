"use client";
import { addComment, getClerkUser, getCommentsForPost } from "@/utils/actions";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AuthUserData from "./AuthUserData";
import { getTimeDifference } from "../lib/common";
type Props = { postId: any };
const Comments = ({ postId }: Props) => {
  const { user } = useUser();

  const [commentList, setCommnetList] = useState<any>([]);

  const [comment, setCommnet] = useState<any>("");

  const addNewComment = async () => {
    if (user) {
      try {
        const res = await addComment(comment, user?.id, postId);
        getCommentList();
        setCommnet("");
        alert("Comment is added");
      } catch (error) {
        alert("Comment is not added");
      }
    }
  };
  const getCommentList = async () => {
    try {
      const res = await getCommentsForPost(postId);
      setCommnetList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommentList();
  }, []);
  return (
    <div className=" w-full mt-8 pr-0 md:pr-8">
      <p className=" text-md underline">Comments</p>
      <div className=" flex items-end gap-4 mt-8">
        <textarea
          name=""
          value={comment}
          onChange={(e) => setCommnet(e.target.value)}
          id=""
          className=" w-full rounded-2xl outline-none p-4 text-md bg-white"
          rows={4}
        />
        <button
          onClick={addNewComment}
          className=" bg-blue-800 text-white px-4 py-2 rounded-2xl"
        >
          send
        </button>
      </div>

      {/* comment list */}
      <div className=" mt-8 w-full flex flex-col gap-4">
        {commentList?.map((item: any, index: any) => (
          <div
            key={index}
            className=" rounded-2xl bg-white p-4 flex flex-col gap-2"
          >
            <div className=" flex items-center text-sm gap-3">
              <Image
                src={"/website.png"}
                height={16}
                width={16}
                alt=""
                className=" min-h-[32px] min-w-[32px] rounded-full"
              />
              <AuthUserData id={item?.authorId} />
              <span className=" text-gray-400">
                {getTimeDifference(item?.createdAt)}
              </span>
            </div>
            <p className=" text-justify text-sm text-black">{item?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
