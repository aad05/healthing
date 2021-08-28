import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 600px;
`;
export const Wrapper = styled.div`
  width: 100%;
`;
export const WrapperList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: ${(props) => (props.position ? "50px" : "20px")};
`;
