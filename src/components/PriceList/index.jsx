import React from "react";
import { price } from "../../mock/price";
import Fade from "react-reveal/Fade";

import {
  Header,
  Container,
  Text,
  Box,
  Title,
  Button,
  Wrapper,
  TextWrapper,
  MediumText,
  ButtonWrapper,
} from "./style";
export default function Price() {
  return (
    <Header>
      <Wrapper>
        <Fade duration={800} left cascade>
          <Text>Price List</Text>
        </Fade>
        <Container>
          <Box left>
            <TextWrapper>
              <Fade top cascade>
                <MediumText>Name of Service</MediumText>
                <MediumText>Price of Service</MediumText>
              </Fade>
            </TextWrapper>
            {price.map(({ title, price, id }) => (
              <div
                key={id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Fade delay={700} top cascade>
                  <Title>{title}</Title>
                </Fade>
                <Fade top delay={700} cascade>
                  <Title>{price} / hr</Title>
                </Fade>
              </div>
            ))}
          </Box>
          <Box>
            <TextWrapper>
              <Fade top cascade>
                <MediumText>Name of Service</MediumText>
                <MediumText>Price of Service</MediumText>
              </Fade>
            </TextWrapper>
            {price.map(({ id, title, price }) => (
              <div
                key={id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Fade top delay={700} cascade>
                  <Title>{title}</Title>
                </Fade>
                <Fade top delay={700} cascade>
                  <Title>{price} / hr</Title>
                </Fade>
              </div>
            ))}
          </Box>
        </Container>
        <ButtonWrapper>
          <Fade top cascade>
            <Button>All Price</Button>
          </Fade>
        </ButtonWrapper>
      </Wrapper>
    </Header>
  );
}
