import React from "react";
import { Container, Header, Img, Left, Right, Title, Wrapper } from "./style";
import Rectangle1 from "../../assets/imgs/Rectangle1.png";
import Rectangle2 from "../../assets/imgs/Rectangle2.png";
import Rectangle3 from "../../assets/imgs/Rectangle3.png";
import Fade from "react-reveal/Fade";

export const NewsSection = () => {
  return (
    <Header>
      <Container>
        <Title>Our News</Title>
        <Wrapper>
          <Left>
            <Fade left cascde duration={800}>
              <Img src={Rectangle1} />
            </Fade>
          </Left>
          <Right>
            <Right.Title>Create an account</Right.Title>
            <Right.Desc>
              Create/login to an existing account to get started
            </Right.Desc>
            <Right.Commet>
              An account is created with your email and a desired password
            </Right.Commet>
          </Right>
        </Wrapper>
        <Wrapper>
          <Right>
            <Right.Title>Create an account</Right.Title>
            <Right.Desc>
              Create/login to an existing account to get started
            </Right.Desc>
            <Right.Commet>
              An account is created with your email and a desired password
            </Right.Commet>
          </Right>
          <Left>
            <Fade right cascade>
              <Img src={Rectangle2} />
            </Fade>
          </Left>
        </Wrapper>
        <Wrapper>
          <Left>
            <Fade left cascade>
              <Img src={Rectangle3} />
            </Fade>
          </Left>
          <Right>
            <Right.Title>Create an account</Right.Title>
            <Right.Desc>
              Create/login to an existing account to get started
            </Right.Desc>
            <Right.Commet>
              An account is created with your email and a desired password
            </Right.Commet>
          </Right>
        </Wrapper>
      </Container>
    </Header>
  );
};
export default NewsSection;
