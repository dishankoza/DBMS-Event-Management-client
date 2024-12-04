import ManageEvents from "@/components/ui/Dashboard/Admin/Events/ManageEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage events - Eventify",
  description: "Manage events of Eventify",
};

const ManageEventsPage = () => {
  return (
    <div>
      <ManageEvents />
    </div>
  );
};

export default ManageEventsPage;
