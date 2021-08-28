import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 250px;
  min-height: 250px;
`;
export const ImgWrapper = styled.img`
  cursor: pointer;
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #32495e;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const Desc = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #32495e;
  text-align: center;
  margin-bottom: 20px;
`;
