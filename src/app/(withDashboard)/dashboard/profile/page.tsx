import ViewProfile from "@/components/ui/Dashboard/Profile/ViewProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View Profile - Eventify",
  description: "View Profile of Eventify",
};

const ViewProfilePage = () => {
  return (
    <>
      <ViewProfile />
    </>
  );
};

export default ViewProfilePage;
