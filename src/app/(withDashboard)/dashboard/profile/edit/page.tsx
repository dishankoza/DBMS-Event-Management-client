import EditProfile from "@/components/ui/Dashboard/Profile/EditProfile";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Edit Profile - Eventify",
  description: "Edit Profile of Eventify",
};

const EditProfilePage = () => {
  return (
    <>
      <EditProfile />
    </>
  );
};

export default EditProfilePage;
