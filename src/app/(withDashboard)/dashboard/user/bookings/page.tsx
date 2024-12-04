import ManageUserBookings from "@/components/ui/Dashboard/User/Bookings/ManageBookings";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Manage bookings - Eventify",
  description: "Manage user bookings of Eventify",
};

const ManageUserBookingsPage = () => {
  return (
    <div>
      <ManageUserBookings />
    </div>
  );
};

export default ManageUserBookingsPage;
