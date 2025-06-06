import React from "react";
import WhatWeOffer from "../Components/About/WhatWeOffer";
import Hero from "../Components/About/Hero";
import AboutDetail from "../Components/About/AboutDetail";
import OurMission from "../Components/About/OurMission";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutDetail />
      <WhatWeOffer />
      <OurMission />
    </div>
  );
};

export default About;
