import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: #32495e;
`;
export const Main = styled.div`
  width: 80%;
  margin: auto;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 52px;
  text-transform: uppercase;
  color: #f9f9f9;
  padding-top: 30px;
  padding-bottom: 20px;
  margin-bottom: ${(props) => (props.position ? "30px" : 0)};
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  margin: 50px 0;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
export const Button = styled.button`
  padding: 15px 50px;
  border-radius: 25px;
  background: transparent;
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #f9f9f9;
  border: 1px solid #f9f9f9;
  cursor: pointer;
`;
