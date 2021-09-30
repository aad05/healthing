import React from "react";
import ServiceBuddy from "../../components/ServiceBuddy";
import ServiceAbout from "../../components/ServiceAbout";
import Price from "../../components/PriceList";
import ServiceList from "../../components/Service";
import Recomadation from "../../components/Recomadation";
import Maps from "../../components/Map";
import Footer from "../../components/newfooter";
export const Service = () => {
  return (
    <div>
      <ServiceBuddy />
      <ServiceAbout />
      <Price />
      <ServiceList />
      <Recomadation />
      <Maps />
      <Footer />
    </div>
  );
};
export default Service;
