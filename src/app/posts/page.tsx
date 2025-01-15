import Blogitem from "@/components/BlogItem";
import Comments from "@/components/Comments";
import Postitem from "@/components/Postitem";
import Image from "next/image";

export default async function Page() {
  return (
    <div className=" w-full flex gap-10">
      {/* right */}

      <div className="flex flex-col gap-6">
        <div className="inline-flex w-auto">
          <p className="rounded-full px-6 py-2 bg-blue-800 text-white text-sm md:text-base font-semibold shadow-md hover:bg-blue-700 cursor-pointer transition-all duration-300">
            Development
          </p>
        </div>
      </div>
      {/* left */}
      <div className=" px-4 mt-10 sticky max-w-[200px] flex flex-col gap-8 top-8 h-max">
        <div className=" flex flex-col gap-2 text-sm text-blue-950">
          <p>Search</p>
          <div className=" bg-gray-100 p-2 rounded-full flex items-center gap-4">
            <Image src={"/search.svg"} height={16} width={16} alt="" />
            <input
              type="text"
              className=" bg-transparent outline-none text-[12px]"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold text-blue-950">
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
        </div>
        <div className=" flex flex-col gap-2 text-sm text-blue-950">
          <p>Categories</p>
          <p>All</p>
          <p className=" hover:text-blue-800 underline">Web Design</p>
          <p className=" hover:text-blue-800 underline">SEO</p>{" "}
          <p className=" hover:text-blue-800 underline">Database</p>{" "}
          <p className=" hover:text-blue-800 underline">Marketing</p>
        </div>
      </div>
    </div>
  );
}
