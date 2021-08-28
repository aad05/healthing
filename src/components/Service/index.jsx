import React from "react";
import Fade from "react-reveal/Fade";

import {
  ButtonWrapper,
  Container,
  Main,
  Title,
  Wrapper,
  Button,
} from "./style";
import ServiceCard from "../ServiceCard";

export default function Service({ image }) {
  return (
    <Container>
      <Main>
        <Fade duration={800} left cascade>
          <Title>Our Services</Title>
        </Fade>
        <Wrapper>
          <ServiceCard />
        </Wrapper>
        <ButtonWrapper>
          <Fade top cascade>
            <Button>All services</Button>
          </Fade>
        </ButtonWrapper>
        <Fade duration={800} left cascade>
          <Title position>Our Services</Title>
        </Fade>
      </Main>
    </Container>
  );
}
