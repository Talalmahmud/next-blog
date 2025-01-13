import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className=" w-full mt-8 pr-0 md:pr-8">
      <p className=" text-md underline">Comments</p>
      <div className=" flex items-end gap-4 mt-8">
        <textarea
          name=""
          id=""
          className=" w-full rounded-2xl outline-none p-4 text-md bg-white"
          rows={4}
        />
        <button className=" bg-blue-800 text-white px-4 py-2 rounded-2xl">
          send
        </button>
      </div>

      {/* comment list */}
      <div className=" mt-8 w-full flex flex-col gap-4">
        <div className=" rounded-2xl bg-white p-4 flex flex-col gap-2">
          <div className=" flex items-center text-sm gap-3">
            <Image
              src={"/website.png"}
              height={16}
              width={16}
              alt=""
              className=" min-h-[32px] min-w-[32px] rounded-full"
            />
            <p className=" whitespace-nowrap text-md">First Name</p>
            <span className=" text-gray-400">2 days ago</span>
          </div>
          <p className=" text-justify text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            amet voluptas, magnam itaque a ratione inventore. Iure architecto
            delectus optio qui dolores, tenetur, possimus facilis sed ipsam,
            quos amet libero.
          </p>
        </div>
        <div className=" rounded-2xl bg-white p-4 flex flex-col gap-2">
          <div className=" flex items-center text-sm gap-3">
            <Image
              src={"/website.png"}
              height={16}
              width={16}
              alt=""
              className=" min-h-[32px] min-w-[32px] rounded-full"
            />
            <p className=" whitespace-nowrap text-md">First Name</p>
            <span className=" text-gray-400">2 days ago</span>
          </div>
          <p className=" text-justify text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            amet voluptas, magnam itaque a ratione inventore. Iure architecto
            delectus optio qui dolores, tenetur, possimus facilis sed ipsam,
            quos amet libero.
          </p>
        </div>{" "}
        <div className=" rounded-2xl bg-white p-4 flex flex-col gap-2">
          <div className=" flex items-center text-sm gap-3">
            <Image
              src={"/website.png"}
              height={16}
              width={16}
              alt=""
              className=" min-h-[32px] min-w-[32px] rounded-full"
            />
            <p className=" whitespace-nowrap text-md">First Name</p>
            <span className=" text-gray-400">2 days ago</span>
          </div>
          <p className=" text-justify text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            amet voluptas, magnam itaque a ratione inventore. Iure architecto
            delectus optio qui dolores, tenetur, possimus facilis sed ipsam,
            quos amet libero.
          </p>
        </div>{" "}
        <div className=" rounded-2xl bg-white p-4 flex flex-col gap-2">
          <div className=" flex items-center text-sm gap-3">
            <Image
              src={"/website.png"}
              height={16}
              width={16}
              alt=""
              className=" min-h-[32px] min-w-[32px] rounded-full"
            />
            <p className=" whitespace-nowrap text-md">First Name</p>
            <span className=" text-gray-400">2 days ago</span>
          </div>
          <p className=" text-justify text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            amet voluptas, magnam itaque a ratione inventore. Iure architecto
            delectus optio qui dolores, tenetur, possimus facilis sed ipsam,
            quos amet libero.
          </p>
        </div>{" "}
        <div className=" rounded-2xl bg-white p-4 flex flex-col gap-2">
          <div className=" flex items-center text-sm gap-3">
            <Image
              src={"/website.png"}
              height={16}
              width={16}
              alt=""
              className=" min-h-[32px] min-w-[32px] rounded-full"
            />
            <p className=" whitespace-nowrap text-md">First Name</p>
            <span className=" text-gray-400">2 days ago</span>
          </div>
          <p className=" text-justify text-sm text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            amet voluptas, magnam itaque a ratione inventore. Iure architecto
            delectus optio qui dolores, tenetur, possimus facilis sed ipsam,
            quos amet libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
