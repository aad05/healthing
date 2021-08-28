import React from "react";
import { CardWrapper, Container, Desc, ImgWrapper, Title } from "./style";
import DoctorImg from "../../assets/imgs/doctor.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

export default function DoctorCard() {
  return (
    <Container>
      <CardWrapper>
        <Flip top cascade duration={2000}>
          <ImgWrapper src={DoctorImg} />
        </Flip>
        <Fade top cascade>
          <Title>Doctor Ablay Sergiyevich</Title>
        </Fade>
        <Fade top cascade>
          <Desc>
            Lorem Ipsum is simply dummy text of
            <br /> the printing and typesetting industry.
            <br /> Lorem Ipsum has been the industry's <br />
            standard dummy text
          </Desc>
        </Fade>
      </CardWrapper>
    </Container>
  );
}
