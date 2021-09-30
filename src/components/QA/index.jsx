import React, { useState } from "react";
import { questions } from "../../mock/question";
import arrowright from "../../assets/icons/arrowleft.svg";
import arrowleft from "../../assets/icons/arrowright.svg";
import {
  Button,
  Container,
  Header,
  Left,
  LogoWrapper,
  Questions,
  Right,
  Title,
  LeftWrapper,
  AnswerWrapper,
  AnswerTitle,
  AnswerParagraph,
} from "./style";

export const QA = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <Header>
      <Title>Answer & Question</Title>
      <Container>
        <Left>
          {questions.map((value) => {
            return (
              <LeftWrapper>
                <Questions>{value.title}</Questions>
                <Button onClick={() => setIsActive(value.id)}>
                  <LogoWrapper
                    isActive={isActive === value.id}
                    src={isActive === value.id ? arrowleft : arrowright}
                  />
                </Button>
              </LeftWrapper>
            );
          })}
        </Left>
        <Right>
          {questions
            .filter((value) => value.id === isActive)
            .map((value) => {
              return (
                <AnswerWrapper>
                  <AnswerTitle>{value.title}</AnswerTitle>
                  <AnswerParagraph>{value.desc}</AnswerParagraph>
                </AnswerWrapper>
              );
            })}
        </Right>
      </Container>
    </Header>
  );
};
export default QA;
