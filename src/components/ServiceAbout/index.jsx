import React from "react";
import Fade from "react-reveal/Fade";
import Doctors from "../../assets/imgs/Doctors.png";
import { Container, Header, Left, Right, Img, Paragraph } from "./style";
export const ServiceAbout = () => {
  return (
    <Header>
      <Left>
        <Fade left cascade>
          <Img src={Doctors} />
        </Fade>
      </Left>
      <Right>
        <Container>
          <Fade top duration={2000} cascade>
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
          <Fade top duration={2500} cascade>
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
          <Fade top duration={2500} cascade>
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
        </Container>
      </Right>
    </Header>
  );
};
export default ServiceAbout;
