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
        <Fade top cascade>
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
        <Fade top cascade>
          <Title position>Our Services</Title>
        </Fade>
      </Main>
    </Container>
  );
}
