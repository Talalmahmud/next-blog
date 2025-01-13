import Comments from "@/components/Comments";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div className=" pb-10">
      {/* top */}
      <div className=" flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-20">
        <div className=" flex flex-col gap-6">
          <p className=" text-2xl md:text-4xl xl:text-5xl font-semibold">
            recusandae consequatur enim ratione provident nesciunt temporibus?
          </p>{" "}
          <div className=" flex items-center text-sm md:text-md gap-2 text-gray-400">
            <p>Written By</p>
            <p className=" text-blue-800 lg:text-lg hover:underline">Jon dev</p>
            <p className=" text-blue-800">Web Design</p>

            <span>2 days ago</span>
          </div>
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus.magnam dolore. Debitis
            possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus. labore corporis dolorum, velit
            temporibus.magnam dolore. Debitis possimus vero excepturi aspernatur
            obcaecati labore corporis dolorum, velit temporibus. labore corporis
            dolorum, velit temporibus.magnam dolore. Debitis possimus vero
            excepturi aspernatur obcaecati labore corporis dolorum, velit
            temporibus.
          </p>
        </div>
        <Image
          src={"/website.png"}
          height={300}
          width={400}
          className="  object-cover h-[300px] w-[400px] aspect-video rounded-2xl"
          alt=""
        />
      </div>
      <div className=" w-full mt-10 flex gap-10">
        {/* right */}
        <div className=" flex flex-col  gap-4 lg:gap-8">
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p>
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p>
          <Image
            src={"/website.png"}
            height={100}
            width={100}
            className="  object-cover w-full h-[400px] aspect-video rounded-2xl"
            alt=""
          />
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p>
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p>
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p>
          <p className=" text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            suscipit, vitae corporis architecto ipsa aliquam possimus rerum
            magnam dolore. Debitis possimus vero excepturi aspernatur obcaecati
            labore corporis dolorum, velit temporibus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae suscipit, vitae
            corporis architecto ipsa aliquam possimus rerum magnam dolore.
            Debitis possimus vero excepturi aspernatur obcaecati labore corporis
            dolorum, velit temporibus.
          </p>
          <Comments />
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
              <p className=" whitespace-nowrap text-md">First Name</p>
            </div>

            <p className=" text-sm text-pretty text-gray-500 whitespace-nowrap">
              Lorem accusamus fugit. Esse, nam. Lorem accusamus fugit. Esse,
              nam.
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

              <div className=" flex items-center gap-4">
                <Image
                  src={"/delete.svg"}
                  height={32}
                  width={24}
                  className=" h-10 w-6 "
                  alt=""
                />

                <button className=" text-md text-red-400 hover:underline cursor-pointer">
                  delete item
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2 text-sm text-blue-950">
            <p>Categories</p>
            <p>All</p>
            <p className=" hover:text-blue-800 underline">Web Design</p>
            <p className=" hover:text-blue-800 underline">SEO</p>{" "}
            <p className=" hover:text-blue-800 underline">Database</p>{" "}
            <p className=" hover:text-blue-800 underline">Marketing</p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
