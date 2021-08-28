import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  margin: 0 5px 10px 20px;
  width: 263px;
  height: 325px;
  display: flex;
  flex-direction: column;
  background: #e95258;
`;
export const Image = styled.img`
  width: 100%;
  height: 150px;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 52px;
  text-transform: uppercase;
  color: #32495e;
  margin: 20px 0 20px 0;
`;
export const WrapperTitle = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #f9f9f9;
  padding: 20px 10px 20px 20px;
`;
export const Desc = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #f9f9f9;
  padding: 20px;
`;
export const Textend = styled.div`
  font-family: TT Hoves;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #f9f9f9;
  padding: 20px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  border: 1px solid #32495e;
  border-radius: 25px;
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #32495e;
  background: transparent;
  padding: 15px 50px;
  margin-top: 40px;
  cursor: pointer;
  margin-bottom: 30px;
`;
