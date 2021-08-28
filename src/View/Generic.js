import React from "react";
import Body from "../components/MainBody";
import Service from "../components/Service";
import DoctorList from "../components/DoctorList";
import Price from "../components/PriceList";
export const Generic = (props) => {
  return (
    <div>
      <Body />
      <Service />
      <DoctorList />
      <Price />
    </div>
  );
};
