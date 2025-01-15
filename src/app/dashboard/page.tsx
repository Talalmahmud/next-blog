import Category from "@/components/add/Category";
import { checkRole } from "@/utils/actions";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }
  return (
    <div>
      <Category />
    </div>
  );
};

export default page;
