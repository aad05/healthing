import React from "react";
import Fade from "react-reveal/Fade";

import {
  Header,
  Container,
  Card,
  ImgBox,
  Image,
  Text,
  Paragraph,
} from "./style";
import Tablet from "../../assets/imgs/tablet.jpg";
import Foot from "../../assets/imgs/foot.jpg";
import Hotel from "../../assets/imgs/hotel.jpg";
export default function ServiceCard() {
  return (
    <Header>
      <Container>
        <Card>
          <ImgBox>
            <Fade duration={1000} left cascade>
              <Image src={Foot} />
            </Fade>
          </ImgBox>
          <Card.Content>
            <Fade top cascade>
              <Text>Click here to see more information ...</Text>
            </Fade>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id,
              officiis eaque, consectetur fugiat corporis dolorem, culpa tempora
              aspernatur
            </Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <ImgBox>
            <Fade duration={800} left cascade>
              <Image src={Tablet} />
            </Fade>
          </ImgBox>
          <Card.Content>
            <Fade top cascade>
              <Text>Click here to see more information ...</Text>
            </Fade>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id,
              officiis eaque, consectetur fugiat corporis dolorem, culpa tempora
              aspernatur
            </Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <ImgBox>
            <Fade duration={1300} right cascade>
              <Image src={Hotel} />
            </Fade>
          </ImgBox>
          <Card.Content>
            <Fade top cascade>
              <Text>Click here to see more information ...</Text>
            </Fade>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id,
              officiis eaque, consectetur fugiat corporis dolorem, culpa tempora
              aspernatur
            </Paragraph>
          </Card.Content>
        </Card>
        <Card>
          <ImgBox>
            <Fade duration={1900} right cascade>
              <Image src={Foot} />
            </Fade>
          </ImgBox>
          <Card.Content>
            <Fade top cascade>
              <Text>Click here to see more information ...</Text>
            </Fade>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed id,
              officiis eaque, consectetur fugiat corporis dolorem, culpa tempora
              aspernatur
            </Paragraph>
          </Card.Content>
        </Card>
      </Container>
    </Header>
  );
}
