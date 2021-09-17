import React, { useState, useEffect } from "react";
import Play from "../../assets/icons/checkbox.png";
import {
  Main,
  Container,
  Title,
  Button,
  ButtonWrapper,
  ImgContainer,
  Img,
  ImgText,
  TextPosition,
  IconPosition,
  MainButton,
  MainButtonWrapper,
} from "./style";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const images = [
  { id: 1, imageName: "img1.jpg", tag: "video" },
  { id: 2, imageName: "img2.jpg", tag: "foto" },
  { id: 3, imageName: "img3.jpg", tag: "foto" },
  { id: 4, imageName: "img4.jpg", tag: "video" },
  { id: 5, imageName: "img5.jpg", tag: "video" },
  { id: 6, imageName: "img6.jpg", tag: "foto" },
  { id: 7, imageName: "img7.jpg", tag: "foto" },
  { id: 8, imageName: "img8.jpg", tag: "foto" },
  { id: 9, imageName: "img9.jpg", tag: "video" },
  { id: 10, imageName: "img10.jpg", tag: "foto" },
  { id: 11, imageName: "img11.jpg", tag: "foto" },
  { id: 12, imageName: "img12.jpg", tag: "foto" },
];
export default function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <Main>
      <Container>
        <Fade duration={800} left cascade>
          <Title>Foto and Videos Gallery</Title>
        </Fade>
        <ButtonWrapper>
          <TagButton name="all" handleSetTag={setTag} />
          <TagButton name="video" handleSetTag={setTag} />
          <TagButton name="foto" handleSetTag={setTag} />
        </ButtonWrapper>
        <ImgContainer>
          {filteredImages.map((image) => (
            <div key={image.id}>
              <ImgText>
                <Img src={`/imgs/${image.imageName}`} alt="" />
                <Fade top cascade>
                  <IconPosition src={Play} />
                </Fade>
                <Fade top cascade>
                  <TextPosition>
                    Lorem Ipsum is simply dummy <br /> text of the printing and
                  </TextPosition>
                </Fade>
              </ImgText>
              {images.imageName}
            </div>
          ))}
        </ImgContainer>
        <MainButtonWrapper>
          <Fade top cascade>
            <MainButton>See All</MainButton>
          </Fade>
        </MainButtonWrapper>
      </Container>
    </Main>
  );
}
const TagButton = ({ name, handleSetTag }) => {
  return (
    <Button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</Button>
  );
};
