import React from "react";
import {
  Container,
  Header,
  Img,
  Title,
  Wrapper,
  Card,
  CardTitle,
  Desc,
} from "./style";
import logo1 from "../../assets/imgs/logo1.jpeg";
import logo2 from "../../assets/imgs/logo2.jpeg";
import logo3 from "../../assets/imgs/logo3.jpeg";
import logo4 from "../../assets/imgs/logo4.jpeg";

export const WhyUs = () => {
  return (
    <Header>
      <Container>
        <Title>Why Us?</Title>
        <Wrapper>
          <Card>
            <Img src={logo1} />
            <CardTitle>Advantage 1</CardTitle>
            <Desc>
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been
              <br /> the industry's standard dummy text
            </Desc>
          </Card>
          <Card>
            <Img src={logo2} />
            <CardTitle>Advantage 2</CardTitle>
            <Desc>
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been
              <br /> the industry's standard dummy text
            </Desc>
          </Card>
          <Card>
            <Img src={logo3} />
            <CardTitle>Advantage 3</CardTitle>
            <Desc>
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been
              <br /> the industry's standard dummy text
            </Desc>
          </Card>
          <Card>
            <Img src={logo4} />
            <CardTitle>Advantage 4</CardTitle>
            <Desc>
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been
              <br /> the industry's standard dummy text
            </Desc>
          </Card>
        </Wrapper>
      </Container>
    </Header>
  );
};
export default WhyUs;
