import React from "react";
import Map from "../Components/Contact/Map";
import GetAQuoteForm from "../Components/Contact/GetQuote";
import NewsletterSubscription from "../Components/Home/Newsletter";
import ContactInformation from "../Components/Contact/ContactInformation";

export default function Contact() {
  return (
    <>
      <div className=" h-210  flex flex-col max-w-screen mx-2 my-3">
        <Map />
        <GetAQuoteForm />
        <ContactInformation />
      </div>
      <NewsletterSubscription />
    </>
  );
}
