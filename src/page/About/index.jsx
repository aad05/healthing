import React from "react";
import AboutBuddy from "../../components/AboutBuddy";
import ServiceAbout from "../../components/ServiceAbout";
import Price from "../../components/PriceList";
import ServiceList from "../../components/Service";
import Recomadation from "../../components/Recomadation";
import Maps from "../../components/Map";
import Footer from "../../components/newfooter";
export const About = () => {
  return (
    <div>
      <AboutBuddy />
      <ServiceAbout />
      <Price />
      <ServiceList />
      <Recomadation />
      <Maps />
      <Footer />
    </div>
  );
};
export default About;
