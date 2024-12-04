import AddBlog from "@/components/ui/Dashboard/Admin/Contents/Blog/AddBlog";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add a blog - Eventify",
  description: "Add a blog of Eventify",
};
const AddBlogPage = () => {
  return (
    <>
      <AddBlog />
    </>
  );
};

export default AddBlogPage;
