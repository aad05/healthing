import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  position: relative;
  width: 280.5px;
  height: 320px;
  transition: 0.3s ease-out;
  padding: 5px;
  box-sizing: border-box;
`;
export const ImgBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
Card.Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  padding: 12px;
  transition: all 1s cubic-bezier(0.48, -0.28, 0.41, 1.4);
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 12px;
  :hover {
    width: 100%;
    height: 60%;
    left: 0;
    bottom: 0;
    background-color: #e95258;
    cursor: pointer;
  }
`;
export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  display: block;
  transition: all 0.5s;
`;
export const Text = styled.h2`
  font-size: 20px;
  padding: 15px 0;
`;
export const Paragraph = styled.p`
  transform: translateY(2em);
  color: #fff;
  font-size: 12px;
`;
