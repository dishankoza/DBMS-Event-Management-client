import AddUser from "@/components/ui/Dashboard/Admin/User/AddUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a user - Eventify",
  description: "Add a User of Eventify",
};

const AddUserPage = () => {
  return (
    <>
      <AddUser />
    </>
  );
};

export default AddUserPage;
