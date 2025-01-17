import Comments from "@/components/Comments";
import { prisma } from "@/lib/prisma";
import { checkRole, visiterCount } from "@/utils/actions";
import Image from "next/image";
import AuthUserData from "../../components/AuthUserData";
import { getTimeDifference } from "@/lib/common";
import BlogContent from "@/components/BlogContent";
import Link from "next/link";
import CategoryFilter from "@/components/CategoryFilter";
import DeletePost from "@/components/DeletePost";
import SearchBlog from "@/components/SearchBlog";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = await prisma.post.findUnique({
    where: {
      id: slug,
    },
    include: {
      Category: true,
    },
  });
  console.log(blog);
  if (!blog) {
    redirect("/");
  }

  const isAdmin = await checkRole("admin");
  const isUser = await checkRole("user");

  if (blog) {
    await visiterCount(blog?.id);
  }

  return (
    <div className=" pb-40">
      {/* top */}
      <div className=" flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-20 justify-between">
        <div className=" flex flex-col gap-6">
          <p className=" text-2xl md:text-4xl xl:text-5xl font-semibold">
            {blog?.title}
          </p>{" "}
          <div className=" flex items-center text-sm md:text-md gap-2 text-gray-400">
            <p>Written By</p>
            <AuthUserData id={blog?.authorId} />

            <p className=" text-blue-800">{blog?.Category?.name}</p>

            <span>{getTimeDifference(blog?.createdAt?.toString() || "")}</span>
          </div>
          <p className=" text-sm text-gray-500">{blog?.short_description}</p>
        </div>
        <Image
          src={blog?.cover_img || "/website.png"}
          height={300}
          width={400}
          className="  object-cover h-[300px] w-[400px] aspect-video rounded-2xl"
          alt=""
        />
      </div>
      <div className=" w-full mt-10 flex gap-10">
        {/* right */}

        <div className=" flex-1 flex flex-col  gap-4 lg:gap-8">
          <BlogContent content={blog?.content || ""} />

          {/* <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p> */}
          {(isAdmin || isUser) && <Comments postId={blog?.id} />}
        </div>
        {/* left */}
        <div className=" px-4 sticky max-w-[200px] flex flex-col gap-8 top-8 h-max">
          <div className=" flex flex-col gap-4">
            <div className=" flex items-center gap-6">
              <Image
                src={"/website.png"}
                height={24}
                width={24}
                alt=""
                className=" min-h-[48px] min-w-[48px] rounded-full"
              />
              <AuthUserData id={blog?.authorId} />
            </div>

            <p className=" text-sm text-pretty text-gray-500 whitespace-nowrap">
              Visited: <span className=" font-semibold">({blog?.visited})</span>
            </p>
            <div className=" flex items-center gap-4">
              <Image
                src={"/facebok.svg"}
                height={24}
                width={24}
                className=" h-6 w-6 rounded-md"
                alt=""
              />

              <Image
                src={"/instagram.svg"}
                height={24}
                width={24}
                className=" h-6 w-6 rounded-md"
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-col gap-4">
            <p className=" whitespace-nowrap text-md">Actions</p>

            <div className=" flex flex-col">
              <div className=" flex items-center gap-4">
                <Image
                  src={"/saved.svg"}
                  height={32}
                  width={24}
                  className=" h-10 w-6 "
                  alt=""
                />

                <button className=" text-md text-gray-400 hover:underline cursor-pointer">
                  save this post
                </button>
              </div>

              {isAdmin && <DeletePost id={blog?.id || ""} />}
            </div>
          </div>
          <SearchBlog />
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
}
