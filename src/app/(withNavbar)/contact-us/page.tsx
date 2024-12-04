import ContactForm from "@/components/ContactUs/ContactForm";
import Info from "@/components/ContactUs/Info";
import GEBreadCrumb from "@/components/ui/GEBreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Eventify",
  description: "Contact Us of Eventify",
};

const ContactUs = () => {
  return (
    <div>
      <GEBreadCrumb
        title="How to Contact Us"
        items={[
          {
            label: "Contact Us",
          },
        ]}
      />
      <>
        <Info />
        <ContactForm />
      </>
    </div>
  );
};

export default ContactUs;
