import React from "react";
import Fade from "react-reveal/Fade";
import {
  BottomText,
  Container,
  Header,
  Img,
  Left,
  Paragraph,
  ParagraphBottom,
  Right,
  Title,
} from "./style";
import medic from "../../assets/imgs/doctormedic.jpg";
export const AboutTitle = () => {
  return (
    <Header>
      <Container>
        <Left>
          <Fade left cacade duration={1000}>
            <Title>Short About Us</Title>
          </Fade>
          <Fade left cascade duration={1500}>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text
              <br />
              ever since the 1500s, when an unknown printer took a galley of
              type
              <br />
              and scrambled it to make a type specimen book. It has survived not
              <br />
              only five centuries, but also the leap into electronic
              typesetting,
              <br />
              remaining essentially unchanged. It was popularised in the 1960s
              <br />
              with the release of Letraset sheets containing Lorem Ipsum
              passages,
              <br />
              and more recently with desktop publishing software like Aldus
              <br />
              PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Fade>
          <BottomText>
            <Fade left cascade duration={2000}>
              <ParagraphBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been the industry's standard dummy
                text
                <br />
                ever since the 1500s, when an unknown printer took a galley of
                <br />
                type and scrambled it to make a type specimen book. It has
                <br />
                survived not only five centuries, but also the leap into
                <br />
                electronic typesetting,
              </ParagraphBottom>
            </Fade>
          </BottomText>
        </Left>
      </Container>
      <Right>
        <Fade right duration={800} cascade>
          <Img src={medic} />
        </Fade>
      </Right>
    </Header>
  );
};
export default AboutTitle;
