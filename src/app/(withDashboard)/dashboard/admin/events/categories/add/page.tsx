import AddCategory from "@/components/ui/Dashboard/Admin/Events/AddCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a category - Eventify",
  description: "Add a category of Eventify",
};

const AddCategoryPage = () => {
  return (
    <>
      <AddCategory />
    </>
  );
};

export default AddCategoryPage;
