import React from "react";
import Logo from "../../assets/imgs/logo.png";
import Facebook from "../../assets/icons/Facebook.png";
import Google from "../../assets/icons/Google.png";
import Three from "../../assets/icons/three.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import {
  Container,
  Main,
  Section,
  SectionWrapper,
  Section2,
  Section3,
  Section4,
  Image,
  Title,
  DefaultText,
  Icon,
  Icondiv,
  TitleWrapper,
  Rotate,
  AllWrapper,
} from "./style";

export default function Footer() {
  return (
    <Main>
      <Container>
        <SectionWrapper>
          <Section>
            <Section.Wrapper>
              <Flip top cascade duration={2000}>
                <Image src={Logo} />
              </Flip>
              <Fade top cascade>
                <Title>Healthing</Title>
              </Fade>
            </Section.Wrapper>
            <Section.Copyright>
              <Fade top cascade>
                <DefaultText>All Rights Reserved, 2021 "Healthing"</DefaultText>
              </Fade>
            </Section.Copyright>
          </Section>
          <Section2>
            <Fade top cascade>
              <Title true position size>
                Map Website
              </Title>
            </Fade>
            <Fade top cascade>
              <DefaultText positon>Home</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText positon>Service</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText positon>Gallery</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText positon>About Us</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText positon>News</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText positon>Contact</DefaultText>
            </Fade>
          </Section2>
          <Section3>
            <Fade top cascade>
              <Title true position size>
                Contact Us
              </Title>
            </Fade>
            <Fade top cascade>
              <DefaultText>+7 700 000 00 00</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText>+7 700 000 00 00</DefaultText>
            </Fade>
            <Fade top cascade>
              <DefaultText>support@test.kz</DefaultText>
            </Fade>
            <Section3.IconWrapper>
              <Icon src={Facebook} />
              <Icon src={Google} />
              <Icon src={Facebook} />
              <Icon src={Google} />
            </Section3.IconWrapper>
          </Section3>
          <Section4>
            <AllWrapper>
              <Flip top cascade duration={2000}>
                <Icondiv>
                  <Icon src={Three} />
                </Icondiv>
              </Flip>
              <Fade top cascade>
                <TitleWrapper>
                  <Rotate>To Top</Rotate>
                </TitleWrapper>
              </Fade>
            </AllWrapper>
          </Section4>
        </SectionWrapper>
      </Container>
    </Main>
  );
}
