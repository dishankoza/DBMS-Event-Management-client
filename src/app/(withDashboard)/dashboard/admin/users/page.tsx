import ManageUsers from "@/components/ui/Dashboard/Admin/User/ManageUsers";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Manage users - Eventify",
  description: "Manage users of Eventify",
};
const ManageUsersPage = () => {
  return (
    <>
      <ManageUsers />
    </>
  );
};

export default ManageUsersPage;
