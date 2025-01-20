import Blogitem from "@/components/BlogItem";
import CategoryFilter from "@/components/CategoryFilter";
import Comments from "@/components/Comments";
import Postitem from "@/components/Postitem";
import SearchBlog from "@/components/SearchBlog";
import { getBlogsByCategory, getPopularBlogs } from "@/utils/actions";
import Image from "next/image";

export default async function Page() {
  const blog = await getPopularBlogs(0);

  return (
    <div className=" w-full flex justify-between gap-10">
      {/* right */}

      {blog.length > 0 ? (
        <div className=" flex flex-col gap-6">
          {blog?.map((item: any, index: any) => (
            <Blogitem
              key={index}
              postId={item?.id}
              img={item?.cover_img}
              authorId={item?.authorId}
              title={item?.title}
              createdAt={item?.createdAt}
              shortDesc={item?.short_description}
            />
          ))}
        </div>
      ) : (
        <p className=" text-[16px] flex justify-center items-center min-h-screen w-full">
          No popular blog is now.
        </p>
      )}
      {/* left */}
      <div className=" px-4 mt-10 sticky max-w-[200px] flex flex-col gap-8 top-8 h-max">
        <SearchBlog />
        {/* <div className="flex flex-col gap-2 text-sm font-semibold text-blue-950">
          <p>Filters</p>
          <label className="flex items-center gap-4">
            <input type="checkbox" />
            All
          </label>
          <label className="flex items-center gap-4">
            <input type="checkbox" />
            Web Design
          </label>
          <label className="flex items-center gap-4">
            <input type="checkbox" />
            SEO
          </label>
          <label className="flex items-center gap-4">
            <input type="checkbox" />
            Database
          </label>
          <label className="flex items-center gap-4">
            <input type="checkbox" />
            Marketing
          </label>
        </div> */}
        <CategoryFilter />
        {/* <div className=" flex flex-col gap-2 text-sm text-blue-950">
          <p>Categories</p>
          <p>All</p>
          <p className=" hover:text-blue-800 underline">Web Design</p>
          <p className=" hover:text-blue-800 underline">SEO</p>{" "}
          <p className=" hover:text-blue-800 underline">Database</p>{" "}
          <p className=" hover:text-blue-800 underline">Marketing</p>
        </div> */}
      </div>
    </div>
  );
}
