import React from "react";
import Beach from "../../assets/imgs/beach.jpg";
import City from "../../assets/imgs/city.jpg";
import Forest from "../../assets/imgs/forest.jpg";
import Town from "../../assets/imgs/town.jpg";
import Fade from "react-reveal";
import Flip from "react-reveal/Flip";

import {
  Container,
  Main,
  Card,
  WrapperTitle,
  Desc,
  Textend,
  Image,
  WrapperCard,
  Title,
  ButtonWrapper,
  Button,
  ImageWrapper,
} from "./style";
export default function News() {
  return (
    <Main>
      <Container>
        <Fade duration={800} left cascade>
          <Title>Our News</Title>
        </Fade>
        <WrapperCard>
          <Flip top cascade duration={2000}>
            <Card>
              <ImageWrapper>
                <Image src={Beach} />
              </ImageWrapper>
              <Fade top cascade>
                <WrapperTitle>News title - Heading in two lines</WrapperTitle>
              </Fade>
              <Fade delay={20000} top cascade>
                <Desc>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Desc>
              </Fade>
              <Fade delay={20100} top cascade>
                <Textend>Read More</Textend>
              </Fade>
            </Card>
          </Flip>
          <Flip top cascade duration={2000}>
            <Card>
              <ImageWrapper>
                <Image src={City} />
              </ImageWrapper>
              <Fade top cascade>
                <WrapperTitle>News title - Heading in two lines</WrapperTitle>
              </Fade>
              <Fade delay={20000} top cascade>
                <Desc>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Desc>
              </Fade>
              <Fade delay={20100} top cascade>
                <Textend>Read More</Textend>
              </Fade>
            </Card>
          </Flip>
          <Flip top cascade duration={2000}>
            <Card>
              <ImageWrapper>
                <Image src={Forest} />
              </ImageWrapper>
              <Fade top cascade>
                <WrapperTitle>News title - Heading in two lines</WrapperTitle>
              </Fade>
              <Fade delay={20000} top cascade>
                <Desc>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Desc>
              </Fade>
              <Fade delay={20100} top cascade>
                <Textend>Read More</Textend>
              </Fade>
            </Card>
          </Flip>
          <Flip top cascade duration={2000}>
            <Card>
              <ImageWrapper>
                <Image src={Town} />
              </ImageWrapper>
              <Fade top cascade>
                <WrapperTitle>News title - Heading in two lines</WrapperTitle>
              </Fade>
              <Fade delay={20000} top cascade>
                <Desc>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Desc>
              </Fade>
              <Fade delay={20100} top cascade>
                <Textend>Read More</Textend>
              </Fade>
            </Card>
          </Flip>
        </WrapperCard>
        <ButtonWrapper>
          <Fade top cascade>
            <Button>All Services</Button>
          </Fade>
        </ButtonWrapper>
      </Container>
    </Main>
  );
}
