"use client";
import { getClerkUserById } from "@/utils/actions";
import React, { useEffect, useState } from "react";

type Props = { id: any };

const AuthUserData = ({ id }: Props) => {
  console.log(id);
  const [user, setUser] = useState<any>("");

  const getUserData = async () => {
    const res = await getClerkUserById(id);
    setUser(res);
  };
  console.log(user);

  useEffect(() => {
    if (id) getUserData();
  }, [id]);
  return (
    <>
      <p className=" font-semibold text-blue-800 text-[14px] text-pretty hover:underline whitespace-nowrap">
        {user?.firstName} {user?.lastName}
      </p>
    </>
  );
};

export default AuthUserData;
