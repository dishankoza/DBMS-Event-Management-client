import ManageBlogs from "@/components/ui/Dashboard/Admin/Contents/Blog/ManageBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage blogs - Eventify",
  description: "Manage blogs of Eventify",
};

const ManageBlogsPage = () => {
  return (
    <>
      <ManageBlogs />
    </>
  );
};

export default ManageBlogsPage;
