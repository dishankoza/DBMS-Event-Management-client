import ManageAdmins from "@/components/ui/Dashboard/SuperAdmin/Admin/ManageAdmins";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage admins - Eventify",
  description: "Manage admins of Eventify",
};

const ManageAdminsPage = () => {
  return (
    <>
      <ManageAdmins />
    </>
  );
};

export default ManageAdminsPage;
