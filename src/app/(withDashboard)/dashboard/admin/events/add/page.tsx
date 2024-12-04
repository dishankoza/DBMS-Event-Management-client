import AddEvent from "@/components/ui/Dashboard/Admin/Events/AddEvent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add a event - Eventify",
  description: "Add a Event of Eventify",
};

const AddEventPage = () => {
  return (
    <>
      <AddEvent />
    </>
  );
};

export default AddEventPage;
