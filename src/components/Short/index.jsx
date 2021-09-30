import React from "react";
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
import Doctors from "../../assets/imgs/Doctors.png";
export const Short = () => {
  return (
    <Header>
      <Left>
        <Img src={Doctors} />
      </Left>
      <Container>
        <Right>
          <Title>Short About Us</Title>
          <Paragraph>
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
            <br />
            with the release of Letraset sheets containing Lorem Ipsum passages,
            <br />
            and more recently with desktop publishing software like Aldus
            <br />
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <BottomText>
            <ParagraphBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text
              <br />
              ever since the 1500s, when an unknown printer took a galley of
              <br />
              type and scrambled it to make a type specimen book. It has
              <br />
              survived not only five centuries, but also the leap into
              <br />
              electronic typesetting,
            </ParagraphBottom>
          </BottomText>
        </Right>
      </Container>
    </Header>
  );
};
export default Short;
