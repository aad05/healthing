import React from "react";
import ServiceBuddy from "../../components/ServiceBuddy";
import Short from "../../components/Short";
import AboutTitle from "../../components/AboutTitle";
import WhyUs from "../../components/WhyUs";
import Recomadation from "../../components/Recomadation";
import Maps from "../../components/Map";
import Footer from "../../components/newfooter";

export const Gallery = () => {
  return (
    <div>
      <ServiceBuddy />
      <Short />
      <AboutTitle />
      <WhyUs />
      <Recomadation />
      <Maps />
      <Footer />
    </div>
  );
};
export default Gallery;
