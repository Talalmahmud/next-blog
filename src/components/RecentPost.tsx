import React from "react";
import Postitem from "./Postitem";

const RecentPost = () => {
  return (
    <div className=" mt-8 flex flex-col gap-6">
      <p className=" text-gray-600 text-lg md:text-xl">Recent Posts</p>
      <Postitem />
      <Postitem /> <Postitem /> <Postitem /> <Postitem />
    </div>
  );
};

export default RecentPost;
