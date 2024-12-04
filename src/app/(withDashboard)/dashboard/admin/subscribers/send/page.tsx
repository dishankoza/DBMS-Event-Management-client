import React from "react";

import { Metadata } from "next";
import SendEmailToSubscribers from "@/components/ui/Dashboard/Admin/Subscribers/SendEmailToSubscribers";

export const metadata: Metadata = {
  title: "Send email to Subscribers - Eventify",
  description: "Send email to Subscribers - Eventify",
};

const SendEmailPage = () => {
  return (
    <>
      <SendEmailToSubscribers />
    </>
  );
};

export default SendEmailPage;
