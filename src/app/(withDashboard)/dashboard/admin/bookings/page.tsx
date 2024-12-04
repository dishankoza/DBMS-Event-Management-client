import ManageBookings from "@/components/ui/Dashboard/Admin/Bookings/ManageBookings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage bookings - Eventify",
  description: "Manage bookings of Eventify",
};

const ManageBookingPage = () => {
  return (
    <div>
      <ManageBookings />
    </div>
  );
};

export default ManageBookingPage;
