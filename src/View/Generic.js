import React from "react";
import Body from "../components/MainBody";
import Service from "../components/Service";
import DoctorCard from "../components/DoctorCard";
export const Generic = (props) => {
  return (
    <div>
      <Body />
      <Service />
      <DoctorCard />
    </div>
  );
};
