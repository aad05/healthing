import styled from "styled-components";

export const Header = styled.div`
  background-color: #f9f9f9;
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
export const Container = styled.div`
  display: flex;
`;
export const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: space-between;
  margin-right: ${({ left }) => left && "78px"};
`;
Box.Left = styled.div`
  width: 80%;
`;
Box.Right = styled.div`
  width: 20%;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #8093ac;
  padding: 5px 0;
`;
export const Price = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  color: #0e2942;
  padding: 5px 0;
`;
export const Paragraph = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  color: #0e2942;
  padding: 5px 0;
`;
export const Text = styled.div`
  font-family: TT Hoves;
  font-style: bold;
  font-weight: 900;
  font-size: 50px;
  color: #0e2942;
  padding-top: 30px;
  padding-bottom: 20px;
`;
export const Button = styled.button`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #32495e;
  padding: 15px 45px;
  border: 1px solid #32495e;
  border-radius: 25px;
  background: transparent;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MediumText = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #32495e;
  padding-bottom: 20px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
