import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #333333;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const DefaultText = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #f9f9f9;
  padding-top: ${(props) => (props.positon ? "5px" : "10px")};
`;
export const Title = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => (props.size ? "16px" : "30px")};
  line-height: 20px;
  color: #f9f9f9;
  margin-left: 20px;
  padding-bottom: ${(props) => (props.position ? "20px" : 0)};
  padding-top: ${(props) => (props.true ? "40px" : 0)};
`;
export const SectionWrapper = styled.div`
  display: flex;
  height: 350px;
`;
export const Section = styled.div`
  flex: 2;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
Section.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Section.Copyright = styled.div`
  display: flex;
  justify-content: center;
`;
export const Section2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
export const Section3 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
Section3.IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const Section4 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 70px;
  height: 45px;
  cursor: pointer;
`;
export const Icon = styled.img`
  width: 18px;
  height: 18px;
  padding-left: 3px;
  cursor: pointer;
`;
export const Icondiv = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e95258;
  border-radius: 50%;
  cursor: pointer;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Rotate = styled.div`
  font-family: TT Hoves;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #f9f9f9;
  transform: rotate(-90deg);
  margin-top: 20px;
`;
export const AllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: 50px;
  margin-right: 50px;
`;
