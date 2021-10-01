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
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
export const WhyUs = () => {
  return (
    <Header>
      <Container>
        <Fade left cascade duration={800}>
          <Title>Why Us?</Title>
        </Fade>
        <Wrapper>
          <Card>
            <Flip top cascade duration={2000}>
              <Img src={logo1} />
            </Flip>
            <Bounce cascade>
              <CardTitle>Advantage 1</CardTitle>
            </Bounce>
            <Flip bottom cascade>
              <Desc>
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been
                <br /> the industry's standard dummy text
              </Desc>
            </Flip>
          </Card>
          <Card>
            <Flip top cascade duration={2000}>
              <Img src={logo2} />
            </Flip>
            <Bounce cascade>
              <CardTitle>Advantage 2</CardTitle>
            </Bounce>
            <Flip bottom cascade>
              <Desc>
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been
                <br /> the industry's standard dummy text
              </Desc>
            </Flip>
          </Card>
          <Card>
            <Flip top cascade duration={2000}>
              <Img src={logo3} />
            </Flip>
            <Bounce cascade>
              <CardTitle>Advantage 3</CardTitle>
            </Bounce>
            <Flip bottom cascade>
              <Desc>
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been
                <br /> the industry's standard dummy text
              </Desc>
            </Flip>
          </Card>
          <Card>
            <Flip top cascade duration={2000}>
              <Img src={logo4} />
            </Flip>
            <Bounce cascade>
              <CardTitle>Advantage 4</CardTitle>
            </Bounce>
            <Flip bottom cascade>
              <Desc>
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been
                <br /> the industry's standard dummy text
              </Desc>
            </Flip>
          </Card>
        </Wrapper>
      </Container>
    </Header>
  );
};
export default WhyUs;
