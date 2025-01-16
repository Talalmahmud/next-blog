import Blogitem from "@/components/BlogItem";
import CategoryFilter from "@/components/CategoryFilter";
import Comments from "@/components/Comments";
import Postitem from "@/components/Postitem";
import SearchBlog from "@/components/SearchBlog";
import { getBlogsByCategory } from "@/utils/actions";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blog = await getBlogsByCategory(slug);

  return (
    <div className=" w-full flex justify-between gap-10">
      {/* right */}

      <div className=" flex flex-col gap-6">
        <div className="inline-flex w-auto">
          <p className="rounded-full px-6 py-2 bg-blue-800 text-white text-sm md:text-base font-semibold shadow-md hover:bg-blue-700 cursor-pointer transition-all duration-300">
            {slug}
          </p>
        </div>
        {blog?.map((item: any, index: any) => (
          <Blogitem
            key={index}
            postId={item?.id}
            authorId={item?.authorId}
            title={item?.title}
            createdAt={item?.createdAt}
            shortDesc={item?.short_description}
          />
        ))}
      </div>
      {/* left */}
      <div className=" px-4 mt-10 sticky max-w-[200px] flex flex-col gap-8 top-8 h-max">
        <SearchBlog />
        <CategoryFilter paramsId={slug} />
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
