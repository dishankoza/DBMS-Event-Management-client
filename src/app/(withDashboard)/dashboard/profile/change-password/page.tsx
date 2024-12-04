import ChangePassword from "@/components/ui/Dashboard/Profile/ChangePassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password - Eventify",
  description: "Change Password of Eventify",
};

const ChangePasswordPage = () => {
  return (
    <div>
      <ChangePassword />
    </div>
  );
};

export default ChangePasswordPage;
