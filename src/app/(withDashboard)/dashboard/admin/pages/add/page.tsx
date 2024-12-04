import AddPage from "@/components/ui/Dashboard/Admin/Pages/AddPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a page - Eventify",
  description: "Add a page of Eventify",
};

const AddAPage = () => {
  return (
    <div>
      <AddPage />
    </div>
  );
};

export default AddAPage;
