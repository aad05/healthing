import React from "react";
import {
  Header,
  Container,
  Title,
  Img,
  Desc,
  MainList,
  List,
  Radius,
  Button,
  Icon,
  IconsWrapper,
} from "./style";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Instagram from "../../assets/icons/instagram.png";
import Phone from "../../assets/icons/phone.png";
import Checkbox from "../../assets/icons/checkbox.png";
import Whatsapp from "../../assets/icons/whatsapp.png";
import Dots from "../../assets/icons/ic_round-call.png";
import FullTable from "../../assets/imgs/fulltable.png";
export const AboutBuddy = () => {
  return (
    <Header>
      <Container>
        <Fade duration={800} left cascade>
          <Title>
            Travma - Reabiliazionniy <br /> center
          </Title>
        </Fade>
        <Fade duration={1900} right cascade>
          <Img src={FullTable} />
        </Fade>
        <Fade duration={1000} left cascade>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book. It has survived not
            <br />
            only five centuries, but also the leap into electronic typesetting,
            <br />
            remaining essentially unchanged. It was popularised in the 1960s
            with
            <br />
            the release of Letraset sheets containing Lorem Ipsum passages, and
            <br />
            more recently with desktop publishing software like Aldus PageMaker
            <br />
            including versions of Lorem Ipsum.
          </Desc>
        </Fade>
        <Fade duration={2100} left>
          <MainList>
            <Radius color></Radius>
            <List position>Name of Service</List>
          </MainList>
          <MainList>
            <Radius color></Radius>
            <List position>Name of Service</List>
          </MainList>
          <MainList>
            <Radius color></Radius>
            <List position>Name of Service</List>
          </MainList>
          <MainList>
            <Radius color></Radius>
            <List position>Name of Service</List>
          </MainList>
        </Fade>
        <Fade top cascade>
          <Button>Call Us</Button>
        </Fade>
        <IconsWrapper>
          <Bounce duration={1900} right cascade>
            <Icon>
              <img src={Instagram} alt="ass" />
            </Icon>
          </Bounce>
          <Bounce duration={1900} right cascade>
            <Icon.Phone>
              <img src={Phone} alt="asasa" />
            </Icon.Phone>
          </Bounce>
          <Bounce duration={1900} right cascade>
            <Icon.Checkbox>
              <img src={Checkbox} alt="reer" />
            </Icon.Checkbox>
          </Bounce>
          <Bounce duration={1900} right cascade>
            <Icon.Whatsapp>
              <img src={Whatsapp} alt="uyuy" />
            </Icon.Whatsapp>
          </Bounce>
          <Bounce duration={1900} right cascade>
            <Icon.Dots>
              <img src={Dots} alt="uyuy" />
            </Icon.Dots>
          </Bounce>
        </IconsWrapper>
      </Container>
    </Header>
  );
};
export default AboutBuddy;
