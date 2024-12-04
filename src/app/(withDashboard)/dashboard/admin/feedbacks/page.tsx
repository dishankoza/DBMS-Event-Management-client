import Feedbacks from "@/components/ui/Dashboard/Admin/feedbacks/FeedbackList";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Feedbacks - Eventify",
  description: "Feedbacks of Eventify",
};
const FeedbackPage = () => {
  return (
    <>
      <Feedbacks />
    </>
  );
};

export default FeedbackPage;
