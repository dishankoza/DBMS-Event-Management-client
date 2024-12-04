import BookingSummary from "@/components/ui/Dashboard/Admin/Bookings/BookingSummary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Summary - Eventify",
  description: "Booking Summary of Eventify",
};

const BookingSummaryPage = () => {
  return (
    <>
      <BookingSummary />
    </>
  );
};

export default BookingSummaryPage;
