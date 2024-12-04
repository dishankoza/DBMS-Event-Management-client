import ManageFAQs from "@/components/ui/Dashboard/Admin/Contents/Faq/ManageFaqs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Manage FAQs - Eventify",
  description: "Manage Faqs of Eventify",
};

const ManageFAQsPage = () => {
  return (
    <>
      <ManageFAQs />
    </>
  );
};

export default ManageFAQsPage;
