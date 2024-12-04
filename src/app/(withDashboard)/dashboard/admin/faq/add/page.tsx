import AddFaq from "@/components/ui/Dashboard/Admin/Contents/Faq/AddFaq";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add a FAQ - Eventify",
  description: "Add a FAQ of Eventify",
};
const AddFaqPage = () => {
  return (
    <div>
      <AddFaq />
    </div>
  );
};

export default AddFaqPage;
