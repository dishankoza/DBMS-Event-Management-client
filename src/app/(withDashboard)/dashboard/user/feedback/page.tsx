import ProvideFeedback from "@/components/ui/Dashboard/User/Feedback/ProvideFeedback";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Provide feedback - Eventify",
  description: "Provide feedback of Eventify",
};

const ProvideFeedbackPage = () => {
  return (
    <>
      <ProvideFeedback />
    </>
  );
};

export default ProvideFeedbackPage;
