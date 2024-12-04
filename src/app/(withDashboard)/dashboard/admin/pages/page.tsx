import ManagePages from "@/components/ui/Dashboard/Admin/Pages/ManagePages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage pages - Eventify",
  description: "Manage pages of Eventify",
};

const ManagePagesPage = () => {
  return (
    <>
      <ManagePages />
    </>
  );
};

export default ManagePagesPage;
