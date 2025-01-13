import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex h-[calc(100vh-80px)] justify-center ">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
