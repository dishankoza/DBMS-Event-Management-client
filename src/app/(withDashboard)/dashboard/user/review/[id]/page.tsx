import GiveReview from "@/components/ui/Dashboard/User/Review/GiveReview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give review - Eventify",
  description: "Give review of Eventify",
};

const GiveReviewPage = () => {
  return (
    <>
      <GiveReview />
    </>
  );
};

export default GiveReviewPage;
