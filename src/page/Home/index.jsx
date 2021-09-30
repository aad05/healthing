import React from "react";
import Body from "../../components/MainBody";
import Service from "../../components/Service";
import DoctorList from "../../components/DoctorList";
import Price from "../../components/PriceList";
import Gallery from "../../components/Gallery";
import News from "../../components/News";
import QA from "../../components/QA";
import Recomadation from "../../components/Recomadation";
import Maps from "../../components/Map";
import Footer from "../../components/newfooter";
export const Home = () => {
  return (
    <div>
      <Body />
      <Service />
      <DoctorList />
      <Price />
      <Gallery />
      <News />
      <QA />
      <Recomadation />
      <Maps />
      <Footer />
    </div>
  );
};
export default Home;
