import Link from "next/link";
import React from "react";

const BreadCrum = () => {
  return (
    <div className=" mt-4 flex items-center gap-2 text-[14px]">
      <Link className=" hover:underline" href={"/"}>
        Home
      </Link>
      <span className=" font-semibold">-</span>
      <Link className="" href={"/"}>
        Blog Articale's
      </Link>
    </div>
  );
};

export default BreadCrum;
