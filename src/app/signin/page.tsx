import SignIn from "@/components/ui/Authentication/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Eventify",
  description: "Sign In to Eventify",
};
const SignInPage = () => {
  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;
