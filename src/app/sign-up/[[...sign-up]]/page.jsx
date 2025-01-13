import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex h-[calc(100vh-80px)] justify-center ">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
