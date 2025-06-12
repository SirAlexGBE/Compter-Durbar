import React from "react";
import Map from "../Components/Contact/Map";
import GetAQuoteForm from "../Components/Contact/GetQuote";
import NewsletterSubscription from "../Components/Home/Newsletter";
import ContactInformation from "../Components/Contact/ContactInformation";

export default function Contact() {
  return (
    <>
      <Map />
      <GetAQuoteForm />
      <ContactInformation />
      <NewsletterSubscription />
    </>
  );
}
