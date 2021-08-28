import React from "react";
import Body from "../components/MainBody";
import Service from "../components/Service";
import DoctorList from "../components/DoctorList";
export const Generic = (props) => {
  return (
    <div>
      <Body />
      <Service />
      <DoctorList />
    </div>
  );
};
