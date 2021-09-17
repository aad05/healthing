import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #32495e;
  box-sizing: border-box;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
`;

export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 52px;
  text-transform: uppercase;
  color: #f9f9f9;
  padding-top: 70px;
  padding-bottom: 20px;
`;
export const Default = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #f9f9f9;
`;
export const Button = styled.div`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  :hover {
    border-bottom: 1px solid #e95258;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const ImgContainer = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
export const Img = styled.img`
  width: 300px;
  height: 200px;
`;
export const ImgText = styled.div`
  position: relative;
`;
export const TextPosition = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #f9f9f9;
  opacity: 1;
  position: absolute;
  bottom: 20px;
  left: 10px;
  width: fit-content;
`;
export const IconPosition = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 70px;
  left: 10px;
`;
export const MainButton = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #fff;
  padding: 15px 50px;
  border: 1px solid #fff;
  border-radius: 25px;
  background: transparent;
  cursor: pointer;
`;
export const MainButtonWrapper = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
`;
