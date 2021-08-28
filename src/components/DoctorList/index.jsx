import React from "react";
import { Container, Wrapper, WrapperList } from "./style";
import DoctorCard from "../DoctorCard/index";
export default function DoctorList() {
  return (
    <Wrapper>
      <Container>
        <WrapperList position>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </WrapperList>
        <WrapperList>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </WrapperList>
      </Container>
    </Wrapper>
  );
}
