import React from "react";
import { Container, Main, Wrapper, Image, Title } from "./style";
import Pharmacy from "../../assets/imgs/pharmacy.jpg";
import Villagepharmacy from "../../assets/imgs/villagepharmacy.jpg";
import Yuga from "../../assets/imgs/yugklinik.jpg";
import Plus from "../../assets/imgs/plusmed.jpg";
import Drug from "../../assets/imgs/drugstore.jpg";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

export default function Recomadation() {
  return (
    <Main>
      <Container>
        <Fade duration={800} left cascade>
          <Title>Recomandations</Title>
        </Fade>
        <Wrapper>
          <Flip top cascade duration={2000}>
            <Image src={Pharmacy} />
          </Flip>
          <Flip top cascade duration={2000}>
            <Image src={Villagepharmacy} />
          </Flip>
          <Flip top cascade duration={2000}>
            <Image src={Yuga} />
          </Flip>
          <Flip top cascade duration={2000}>
            <Image src={Plus} />
          </Flip>
          <Flip top cascade duration={2000}>
            <Image src={Drug} />
          </Flip>
        </Wrapper>
      </Container>
    </Main>
  );
}
