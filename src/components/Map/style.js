import { TypeSelector } from "react-yandex-maps";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => (props.size ? "44px" : "16px")};
  line-height: ${(props) => (props.line ? "52px" : "20px")};
  text-transform: uppercase;
  color: #32495e;
  padding-bottom: 10px;
`;
export const DefaultText = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #32495e;
`;
export const WrapperBox = styled.div`
  display: flex;
  padding-bottom: 50px;
`;
export const Box = styled.div`
  flex: ${(props) => (props.big ? "2" : "1")};
  text-align: left;
`;
export const WrapperMap = styled.div`
  padding-bottom: 50px;
`;
