import React from "react";
import Body from "../components/MainBody";
import Service from "../components/Service";
import DoctorList from "../components/DoctorList";
import Price from "../components/PriceList";
import Gallery from "../components/Gallery";
import Recomadation from "../components/Recomadation";
import News from "../components/News/index";
import Footer from "../components/newfooter";
export const Generic = (props) => {
  return (
    <div>
      <Body />
      <Service />
      <DoctorList />
      <Price />
      <Gallery />
      <Recomadation />
      <News />
      <Footer />
    </div>
  );
};
