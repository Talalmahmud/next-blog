"use client";
import { getClerkUserById } from "@/utils/actions";
import React, { useEffect, useState, useTransition } from "react";

type Props = { id: any };

const AuthUserData = ({ id }: Props) => {
  const [user, setUser] = useState<any>("");
  const [isPending, startTransition] = useTransition();

  const getUserData = async () => {
    const res = await getClerkUserById(id);
    setUser(res);
    startTransition(() => {
      setUser(res);
    });
  };

  useEffect(() => {
    if (id) getUserData();
  }, [id]);
  return (
    <>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <p className=" font-semibold  text-blue-800 text-[14px] whitespace-nowrap hover:underline whitespace-nowrap">
          {user?.firstName} {user?.lastName}
        </p>
      )}
    </>
  );
};

export default AuthUserData;
