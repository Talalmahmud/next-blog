"use client";
import { getBlog, updatePostStatus } from "@/utils/actions";
import React, { useEffect, useState } from "react";
import AuthUserData from "../AuthUserData";

type Post = {
  id: string;
  title: string;
  author: string;
  createdAt: string;
};

const PostTable = () => {
  const [posts, setPosts] = useState<any>([]);
  const [status, setStatus] = useState<boolean>(true);
  const fetchPosts = async () => {
    try {
      const data = await getBlog();

      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const handleStatusChange = async (postId: string, newStatus: boolean) => {
    try {
      await updatePostStatus(postId, newStatus);
      fetchPosts();
    } catch (error) {
      console.error("Error updating post status:", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Published
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Created At
            </th>
          </tr>
        </thead>
        <tbody className=" text-black">
          {posts.map((post: any) => (
            <tr key={post?.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {post?.title}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <AuthUserData id={post?.authorId} />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <select
                  value={post.is_publish ? "Yes" : "No"}
                  onChange={(e) =>
                    handleStatusChange(post.id, e.target.value === "Yes")
                  }
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {new Date(post?.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
