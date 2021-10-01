import React from "react";
import Notepad from "../../assets/imgs/Notepad.png";
import MedicTable from "../../assets/imgs/Half-Table.png";
import Instagram from "../../assets/icons/instagram.png";
import Phone from "../../assets/icons/phone.png";
import Checkbox from "../../assets/icons/checkbox.png";
import Whatsapp from "../../assets/icons/whatsapp.png";
import Dots from "../../assets/icons/ic_round-call.png";
import Mouse from "../../assets/icons/icon-mouse.png";
import Polygon from "../../assets/icons/Polygon.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import {
  Button,
  Container,
  Desc,
  Header,
  Icon,
  IconsWrapper,
  Img,
  Img2,
  Left,
  List,
  MainButton,
  MainList,
  MouseWrapper,
  Radius,
  Right,
  Title,
  PolygonWrapper,
} from "./style";

export default function Body() {
  return (
    <Header>
      <Img position>
        <img src={Notepad} alt="text" />
      </Img>
      <Left>
        <Container>
          <Fade duration={800} left cascade>
            <Title position color>
              Kardio-Peabilitazionniy Center
            </Title>
          </Fade>
          <Fade duration={1000} left cascade>
            <Desc position color>
              Lorem Ipsum is simply dummy
              <br /> text of the printing and <br />
              typesetting industry. Lorem Ipsum <br /> has been the industry's{" "}
              <br /> standard dummy text ever since <br /> the
            </Desc>
          </Fade>
          <Fade duration={2100} left>
            <MainList position>
              <List color>Name of Service</List>
              <Radius></Radius>
            </MainList>
            <MainList position>
              <List color>Name of Service</List>
              <Radius></Radius>
            </MainList>
            <MainList position>
              <List color>Name of Service</List>
              <Radius></Radius>
            </MainList>
            <MainList position>
              <List color>Name of Service</List>
              <Radius></Radius>
            </MainList>
          </Fade>
          <MainButton position>
            <Fade top cascade>
              <Button color bg>
                All Services
              </Button>
            </Fade>
          </MainButton>
        </Container>
      </Left>
      <Right>
        <Img2>
          <img src={MedicTable} alt="text" />
        </Img2>
        <Container>
          <Fade duration={800} right cascade>
            <Title>Travma-Peabilitazionniy Center</Title>
          </Fade>
          <Fade duration={1500} right cascade>
            <Desc>
              Lorem Ipsum is simply dummy
              <br /> text of the printing and <br />
              typesetting industry. Lorem Ipsum <br /> has been the industry's{" "}
              <br /> standard dummy text ever since <br /> the
            </Desc>
          </Fade>
          <Fade duration={2100} right cascade>
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
          <MainButton>
            <Fade top cascade>
              <Button>All Services</Button>
            </Fade>
            <IconsWrapper>
              <Bounce duration={1900} right cascade>
                <Icon>
                  <img src={Instagram} alt="ass" />
                </Icon>
              </Bounce>
              <Bounce duration={2000} right cascade>
                <Icon.Phone>
                  <img src={Phone} alt="asasa" />
                </Icon.Phone>
              </Bounce>
              <Bounce duration={2100} right cascade>
                <Icon.Checkbox>
                  <img src={Checkbox} alt="reer" />
                </Icon.Checkbox>
              </Bounce>
              <Bounce duration={2200} right cascade>
                <Icon.Whatsapp>
                  <img src={Whatsapp} alt="uyuy" />
                </Icon.Whatsapp>
              </Bounce>
              <Bounce duration={2300} right cascade>
                <Icon.Dots>
                  <img src={Dots} alt="uyuy" />
                </Icon.Dots>
              </Bounce>
            </IconsWrapper>
          </MainButton>
        </Container>
        <MouseWrapper>
          <img src={Mouse} alt="Mouse" />
          <PolygonWrapper>
            <img src={Polygon} alt="" />
          </PolygonWrapper>
        </MouseWrapper>
      </Right>
    </Header>
  );
}
