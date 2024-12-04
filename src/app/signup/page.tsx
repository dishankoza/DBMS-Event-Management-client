import SignUp from "@/components/ui/Authentication/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Eventify",
  description: "Sign Up to Eventify",
};

const SignUpPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
