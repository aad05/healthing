import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 36px;
  letter-spacing: 0.1px;
  color: #000000;
  opacity: 0.8;
  text-align: center;
  padding: 50px 0 0 0;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
export const Img = styled.img`
  width: 500px;
  height: 700px;
`;
Right.Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.1px;
  color: #fa4a0c;
`;
Right.Desc = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 57px;
  letter-spacing: 0.2px;
  color: #252b42;
  padding: 10px 0;
`;
Right.Commet = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: 0.2px;
  color: #737373;
`;
