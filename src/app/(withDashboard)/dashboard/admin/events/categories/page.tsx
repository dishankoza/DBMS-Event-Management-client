import ManageCategories from "@/components/ui/Dashboard/Admin/Events/ManageCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage categories - Eventify",
  description: "Manage categories of Eventify",
};

const ManageCategoriesPage = () => {
  return (
    <>
      <ManageCategories />
    </>
  );
};

export default ManageCategoriesPage;
