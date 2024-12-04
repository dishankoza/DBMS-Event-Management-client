import Blogs from "@/components/ui/Blog/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Eventify",
  description: "Blogs of Eventify",
};

const BlogsPage = () => {
  return (
    <>
      <Blogs />
    </>
  );
};

export default BlogsPage;
