import React from "react";
import { Container, Header, Img, Left, Right, Title, Wrapper } from "./style";
import Rectangle1 from "../../assets/imgs/Rectangle1.png";
import Rectangle2 from "../../assets/imgs/Rectangle2.png";
import Rectangle3 from "../../assets/imgs/Rectangle3.png";
export const NewsSection = () => {
  return (
    <Header>
      <Container>
        <Title>Our News</Title>
        <Wrapper>
          <Left>
            <Img src={Rectangle1} />
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
            <Img src={Rectangle2} />
          </Left>
        </Wrapper>
        <Wrapper>
          <Left>
            <Img src={Rectangle3} />
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
