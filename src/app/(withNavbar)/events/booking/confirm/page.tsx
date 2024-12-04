import BookingConfirm from "@/components/ui/Event/BookingConfirm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirm - Eventify",
  description: "Booking Confirm",
};

const BookingConfirmPage = () => {
  return (
    <>
      <BookingConfirm />
    </>
  );
};

export default BookingConfirm;
